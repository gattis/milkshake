/**
 * milkshake -- WebGL Milkdrop-esque visualisation (port of projectM)
 * Copyright (C)2011 Matt Gattis and contributors
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 * See 'LICENSE.txt' included within this release
 *
 */

var milk = (function(){

    var req = new XMLHttpRequest();
    req.open("GET", "Class.js", false); req.send(); eval(req.responseText);
    req.open("GET", "Shake.js", false); req.send(); eval(req.responseText);
    req.open("GET", "RenderItemMatcher.js", false); req.send(); eval(req.responseText);
    req.open("GET", "RenderItemMergeFunction.js", false); req.send(); eval(req.responseText);
    req.open("GET", "Renderable.js", false); req.send(); eval(req.responseText);
    req.open("GET", "Variables.js", false); req.send(); eval(req.responseText);
    req.open("GET", "Presets.js", false); req.send(); eval(req.responseText);
    req.open("GET", "MilkDropPreset.js", false); req.send(); eval(req.responseText);
    req.open("GET", "PerPixelMesh.js", false); req.send(); eval(req.responseText);
    req.open("GET", "Music.js", false); req.send(); eval(req.responseText);
    req.open("GET", "PipelineContext.js", false); req.send(); eval(req.responseText);
    req.open("GET", "Renderer.js", false); req.send(); eval(req.responseText);
    req.open("GET", "TimeKeeper.js", false); req.send(); eval(req.responseText);

    var milkshake;
    var gl;
    var textures = {};
    var shaderProgram;
    var globms;

    var U_PROJECTION = 0;
    var U_MODELVIEW = 1;
    var U_TEXTURE = 2;
    
    var U_VERTEX_ARRAY = 0;
    var U_TEXTURE_COORD_ARRAY = 1;
    var U_COLOR_ARRAY = 2;
    
    var mvMatrix = new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
    var prMatrix = new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
    var mvpMatrix = new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
    var txMatrix = new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
    var activeMatrix = prMatrix;

    var mvStack = [];
    var prStack = [];
    var txStack = [];
    var activeStack = prStack;
    var enablestex = false;
    var enablevco = false;
    var upointsize = 1.0;
    var ucolr = 1.0;
    var ucolg = 1.0;
    var ucolb = 1.0;
    var ucola = 1.0;
    
    var vertexPos;
    var colorPos;
    var texCoordPos;
    
    var ucolorloc;
    var stextureloc;
    var upointsizeloc;
    var mvpmatrixloc;
    var txmatrixloc;
    var enablestexloc;
    var enablevcoloc;

    var loads = 0;
    var texture_list = ["title.png"];
    
    function getShader(type,source) {
	var shader; 
	shader = gl.createShader(type);
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
	    alert("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
	    return null;
	}
	return shader;
    }



    function handleTextureLoad() {
	
	var srcsplit = this.src.split("/");
	var url = srcsplit[srcsplit.length-1];
	gl.bindTexture(gl.TEXTURE_2D, this.tex);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

	gl.bindTexture(gl.TEXTURE_2D, null);
	
	textures[url] = this.tex;
	loads += 1;
	if (loads == texture_list.length)
	    runShake();   
    }


    function initTextures(urls) {
	for (var i = 0; i < urls.length; i++) {
	    var img = new Image();
	    img.tex = gl.createTexture();
	    img.onload = handleTextureLoad;
	    img.src = urls[i];
	}
    }


    function shake() {

	milkshake = document.getElementById("milkshake");
	milkshake.width = window.innerWidth;
	milkshake.height = window.innerHeight;
	gl = milkshake.getContext("experimental-webgl", 
			  {
			      alpha: false,
			      depth: false,
			      stencil: false,
			      antialias: false,
			      premultipliedAlpha: true,
			      preserveDrawingBuffer: false,
			   
			  });
	var vertexShader = getShader(gl.VERTEX_SHADER,
         "precision mediump float; \
          attribute vec4 a_position; \
          attribute vec4 a_texCoord; \
          varying vec4 v_texCoord; \
          attribute vec4 a_color; \
          uniform vec4 u_color; \
          varying vec4 v_color; \
          uniform bool enable_v_color; \
          uniform float u_pointsize; \
          uniform mat4 mvp_matrix; \
          uniform mat4 tx_matrix; \
          void main() { \
            gl_Position = mvp_matrix * a_position; \
            v_texCoord = tx_matrix * a_texCoord; \
            if (enable_v_color) \
              v_color = a_color; \
            else \
              v_color = u_color; \
            gl_PointSize = u_pointsize; \
          }");

	var fragmentShader = getShader(gl.FRAGMENT_SHADER,
	 "precision mediump float; \
          varying vec4 v_texCoord; \
     	  uniform sampler2D s_texture; \
	  varying vec4 v_color; \
	  uniform bool enable_s_texture; \
	  void main() { \
	    if (enable_s_texture) \
	      gl_FragColor = v_color * texture2D(s_texture, v_texCoord.st); \
	    else \
	      gl_FragColor = v_color; \
	  }");

	shaderProgram = gl.createProgram();
	gl.attachShader(shaderProgram, vertexShader);
	gl.attachShader(shaderProgram, fragmentShader);
	gl.linkProgram(shaderProgram);
	if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS))
	    alert("Unable to initialize the shader program.");
	gl.useProgram(shaderProgram); 
    
	vertexPos = gl.getAttribLocation(shaderProgram,"a_position");
	colorPos = gl.getAttribLocation(shaderProgram,"a_color");
	texCoordPos = gl.getAttribLocation(shaderProgram,"a_texCoord");
	ucolorloc = gl.getUniformLocation(shaderProgram,"u_color");
	stextureloc = gl.getUniformLocation(shaderProgram,"s_texture");
	upointsizeloc = gl.getUniformLocation(shaderProgram,"u_pointsize");
	mvpmatrixloc = gl.getUniformLocation(shaderProgram,"mvp_matrix");
	txmatrixloc = gl.getUniformLocation(shaderProgram,"tx_matrix");
	enablestexloc = gl.getUniformLocation(shaderProgram,"enable_s_texture");
	enablevcoloc = gl.getUniformLocation(shaderProgram,"enable_v_color");
	
	initTextures(texture_list);

	/*if (typeof webkitAudioContext != "undefined") {
	    context = new webkitAudioContext();   
	    source = context.createBufferSource();
	    var processor = context.createJavaScriptNode(512);
	    processor.onaudioprocess = audioAvailable;
	    source.connect(processor);
	    processor.connect(context.destination);
	    loadSample("song.ogg");
	} else {
	    context = new Audio();
	    context.src = "song.ogg";
	    context.addEventListener('MozAudioAvailable', mozAudioAvailable);
	    context.addEventListener('loadedmetadata', loadedMetadata, false);
	    context.play();
	    }*/
	
	var smjs = document.createElement("script");
	smjs.type = "text/javascript";
	smjs.src = "SoundManager2/soundmanager2.js";
	smjs.onload = function() {

	    soundManager.url = "/SoundManager2/";
	    soundManager.flashVersion = 9;
	    soundManager.useFlashBlock = false;
	    soundManager.useHighPerformance = true;
	    soundManager.wmode = 'transparent';
	    soundManager.useFastPolling = true;
	    soundManager.onready(function() {
		    
		    console.log(soundManager.features.waveformData);
		    soundManager.createSound({
			    id: 'track_2717100',
				//url: "http://api.soundcloud.com/tracks/2717100/stream?consumer_key=4d9749247dccda26471f3fa442daa07d",
			    url: "http://ak-media.soundcloud.com/DfC0wIbhoSDE.128.mp3?AWSAccessKeyId=AKIAJBHW5FB4ERKUQUOQ&Expires=1317192256&Signature=X2gOfWLAluc%2BX77oeROui9J6Ph4%3D&__gda__=1317192256_3bd9c8ee42302b663b23fb995e983485",
				useWaveformData: true,
			    onplay: function() {
				console.log("playing");
			    },
			    onfinish: function() {
				console.log("done");
			    },
			    whileplaying: function() {
				//console.log(this.waveformData.left.length);
				//console.log(this.waveformData.right.length);
				//soundManager.stopAll();
				if (typeof globms != "undefined") {
				    globms.music.addPCM(this.waveformData.left, 
							this.waveformData.right);
				}
			    }
			});
		    soundManager.play("track_2717100");
		    
		});
	};
	document.body.appendChild(smjs);


    }

    function runShake() {
	globms = new Shake();
	runFrames();
	setInterval(switchPreset, 10000);
    }

    var context,source,processor;

    function loadSample(url) {

	var request = new XMLHttpRequest();
	request.open("GET", url, true);
	request.responseType = "arraybuffer";
	
	request.onload = function() {
	    context.decodeAudioData(request.response, function(buffer) {
		    source.buffer = buffer;
		    source.looping = true;
		    source.noteOn(0);
		});
	    
	}
	
	request.send();
    }

    function audioAvailable(event) {
	
	var inputArrayL = event.inputBuffer.getChannelData(0);
	var inputArrayR = event.inputBuffer.getChannelData(1);
	var outputArrayL = event.outputBuffer.getChannelData(0);
	var outputArrayR = event.outputBuffer.getChannelData(1);  
	var n = inputArrayL.length;
	
	for (var i = 0; i < n; ++i) {
	    outputArrayL[i] = inputArrayL[i];
	    outputArrayR[i] = inputArrayR[i];
	}
	
	if (typeof globms != "undefined")
	    globms.music.addPCM(inputArrayL, inputArrayR);
    }

    var frameBufferLength,channels,rate;
    
    function loadedMetadata() {
	channels          = context.mozChannels;
	rate              = context.mozSampleRate;
	frameBufferLength = context.mozFrameBufferLength;
    }
    
    function mozAudioAvailable(event) {	
	var fb = event.frameBuffer;
	var signalL = new Float32Array(fb.length / 2);
	var signalR = new Float32Array(fb.length / 2);
	for (var i = 0; i < frameBufferLength / 2; i++) {
	    signalL[i] = fb[2*i];
	    signalR[i] = fb[2*i+1];
	}
	
	if (typeof globms != "undefined")
	    globms.music.addPCM(signalL, signalR);
    }

    function switchPreset() {
	globms.selectNext(true);
    }

    var requestAnimFrame = (function(){
       return  window.requestAnimationFrame       || 
	    window.webkitRequestAnimationFrame || 
	    window.mozRequestAnimationFrame    || 
	    window.oRequestAnimationFrame      || 
	    window.msRequestAnimationFrame     || 
       function(callback, element){
	    window.setTimeout(callback, 1000 / 60);
       };
    })();

    function runFrames() {
	var nextRun = globms.renderFrame.apply(globms,[]);
	requestAnimFrame(runFrames, milkshake);
    }

    function errorString(error) {
	if (error == gl.INVALID_ENUM)
	    return "INVALID_ENUM";
	if (error == gl.INVALID_VALUE)
	    return "INVALID_VALUE";
	if (error == gl.INVALID_OPERATION)
	    return "INVALID_OPERATION";
	if (error == gl.OUT_OF_MEMORY)
	    return "OUT_OF_MEMORY";
    }

    function checkError(source) {
	var error = gl.getError();
	if (error == gl.NO_ERROR)
	    return;
	print("OPENGL ERROR - SOURCE: " + source + " - " + errorString(error));
    }


    function uMatrixMode(mode) {
	if (mode == U_PROJECTION) {
	    activeMatrix = prMatrix;
	    activeStack = prStack;
	} else if (mode == U_MODELVIEW) {
	    activeMatrix = mvMatrix;
	    activeStack = mvStack;
	} else if (mode == U_TEXTURE) {
	    activeMatrix = txMatrix;
	    activeStack = txStack;
	}
    }

    function uLoadIdentity() {
	activeMatrix[0] = 1;
	activeMatrix[1] = 0;
	activeMatrix[2] = 0;
	activeMatrix[3] = 0;
	activeMatrix[4] = 0;
	activeMatrix[5] = 1;
	activeMatrix[6] = 0;
	activeMatrix[7] = 0;
	activeMatrix[8] = 0;
	activeMatrix[9] = 0;
	activeMatrix[10] = 1;
	activeMatrix[11] = 0;
	activeMatrix[12] = 0;
	activeMatrix[13] = 0;
	activeMatrix[14] = 0;
	activeMatrix[15] = 1;
    }

    function multiply(result, srcA, srcB) {
	
	var tmp = new Float32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
	
	for (var i = 0; i < 4; i++) {
	    var a = 4*i;
	    var b = a + 1;
	    var c = a + 2;
	    var d = a + 3;
	    tmp[a] = srcA[a] * srcB[0] +
		srcA[b] * srcB[4] +
		srcA[c] * srcB[8] +
		srcA[d] * srcB[12];
	    tmp[b] = srcA[a] * srcB[1] + 
		srcA[b] * srcB[5] +
		srcA[c] * srcB[9] +
		srcA[d] * srcB[13];
	    tmp[c] = srcA[a] * srcB[2] + 
		srcA[b] * srcB[6] +
		srcA[c] * srcB[10] +
		srcA[d] * srcB[14];	    
	    tmp[d] = srcA[a] * srcB[3] + 
		srcA[b] * srcB[7] +
		srcA[c] * srcB[11] +
		srcA[d] * srcB[15];
	}
	for (var i = 0; i < 16; i++)
	    result[i] = tmp[i];
    }

    function uMultMatrix(mat) {
	multiply(activeMatrix, mat, activeMatrix);
    }

    function uTranslatef(x, y, z) {
	var m = activeMatrix;
	m[12] += m[0]*x + m[4]*y + m[8]*z;
	m[13] += m[1]*x + m[5]*y + m[9]*z;
	m[14] += m[2]*x + m[6]*y + m[10]*z;
	m[15] += m[3]*x + m[7]*y + m[11]*z;
    }

    function uRotatef(angle, x, y, z) {
	angle = -angle;
	var c = Math.cos(angle * Math.PI / 180.0);
	var s = Math.sin(angle * Math.PI / 180.0);
	var omc = 1.0 - c;
	var mag = Math.sqrt(x*x + y*y + z*z);
	if (mag != 0.0 && mag != 1.0) {
	    x = x/mag;
	    y = y/mag;
	    z = z/mag;
	}
  
	var xy = x*y;
	var yz = y*z;
	var zx = z*x;
	var ys = y*s;
	var xs = x*s;
	var zs = z*s;
	
	var rot = new Float32Array([omc*x*x+c, omc*xy-zs, omc*zx+ys, 0.0,
				    omc*xy+zs, omc*y*y+c, omc*yz-xs, 0.0,
				    omc*zx-ys, omc*yz+xs, omc*z*z+c, 0.0,
				    0.0,       0.0,       0.0,       1.0]);
	uMultMatrix(rot);
    }

    function uScalef(x, y, z) {
	activeMatrix[0] *= x;
	activeMatrix[1] *= x;
	activeMatrix[2] *= x;
	activeMatrix[3] *= x;
	
	activeMatrix[4] *= y;
	activeMatrix[5] *= y;
	activeMatrix[6] *= y;
	activeMatrix[7] *= y;
	
	activeMatrix[8] *= z;
	activeMatrix[9] *= z;
	activeMatrix[10] *= z;
	activeMatrix[11] *= z;
    }
    
    function uOrthof(left, right, bottom, top, near, far) {
	var dX = right - left;
	var dY = top - bottom;
	var dZ = far - near;
	var orth = new Float32Array([2/dX, 0, 0, 0,
				     0, 2/dY, 0, 0,
				     0, 0, -2/dZ, 0,
				     -(right+left)/dX, -(top+bottom)/dY, -(near+far)/dZ, 1.0]);	
	uMultMatrix(orth);
    }

    function uPushMatrix() {
	var store = new Float32Array(16);
	for (var i = 0; i < 16; i++)
	    store[i] = activeMatrix[i]; 
	activeStack.push(store);
    }

    function uPopMatrix() {
	var restore = activeStack.pop();
	for (var i = 0; i < 16; i++)
	    activeMatrix[i] = restore[i];
    }

    function uColor4f(r, g, b, a) {
	ucolr = r;
	ucolg = g;
	ucolb = b;
	ucola = a;
    }

    function uPointSize(size) {
	upointsize = size;
    }

    function uVertexPointer(size, type, stride, buf) {
	gl.bindBuffer(gl.ARRAY_BUFFER, buf);
	gl.vertexAttribPointer(vertexPos, size, type, false, size*4, 0);
	gl.enableVertexAttribArray(vertexPos);
    }
  

    function uColorPointer(size, type, stride, buf) {
	gl.bindBuffer(gl.ARRAY_BUFFER, buf);
	gl.vertexAttribPointer(colorPos, size, type, false, size*4, 0);
	gl.enableVertexAttribArray(colorPos);
    }

    function uTexCoordPointer(size, type, stride, buf) {
	gl.bindBuffer(gl.ARRAY_BUFFER, buf);
	gl.vertexAttribPointer(texCoordPos, size, type, false, size*4, 0);
	gl.enableVertexAttribArray(texCoordPos);
    }


    function uEnableClientState(state) {
	if (state == U_TEXTURE_COORD_ARRAY)
	    enablestex = true;
	else if (state == U_COLOR_ARRAY)
	    enablevco = true;
    }
    
    function uDisableClientState(state) {
	if (state == U_TEXTURE_COORD_ARRAY)
	    enablestex = false;
	else if (state == U_COLOR_ARRAY)
	    enablevco = false; 
    }


    function uDrawArrays(mode, first, count) {
	gl.uniform1i(enablestexloc, enablestex);
	gl.uniform1i(enablevcoloc, enablevco);
	gl.uniform1f(upointsizeloc, upointsize);
	gl.uniform4f(ucolorloc, ucolr, ucolg, ucolb, ucola);
	gl.activeTexture(gl.TEXTURE0);
	gl.uniform1i(stextureloc, 0);  
	multiply(mvpMatrix,mvMatrix,prMatrix);
	gl.uniformMatrix4fv(mvpmatrixloc, false, mvpMatrix);
	gl.uniformMatrix4fv(txmatrixloc, false, txMatrix);
	if (!enablestex)
	    gl.disableVertexAttribArray(texCoordPos);
	if (!enablevco)
	    gl.disableVertexAttribArray(colorPos);
	gl.drawArrays(mode, first, count);
    }

    return {shake: shake};
	
})();