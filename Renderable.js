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


var RenderItem = Class.extend({
	init: function(literal) {
	    this.masterAlpha = 1.0;
	    for (var prop in literal)
		this[prop] = literal[prop];	    
	},

	Draw: function () {}
    });

var WaveMode = {
    Circle: 0,
    RadialBlob: 1,
    Blob2: 2,
    Blob3: 3,
    DerivativeLine: 4,
    Blob5: 5,
    Line: 6,
    DoubleLine: 7
};


var MilkdropWaveform = RenderItem.extend({
	init: function(literal) {
	    this.x = 0.5;
	    this.y = 0.5;
	    this.r = 1;
	    this.g = 0;
	    this.b = 0;
	    this.a = 1;
	    this.mystery = 0;
	    this.mode = WaveMode.Line;
	    this.additive = false;
	    this.dots = false;
	    this.thick = false;
	    this.modulateAlphaByVolume = false;
	    this.maximizeColors = false;
	    this.scale = 10;
	    this.smoothing = 0;
	    this.rot = 0;
	    this.samples = 0;
	    this.modOpacityStart = 0;
	    this.modOpacityEnd = 1;

	    this._super(literal);

	    this.wavearray = new Float32Array(2048*2);
	    this.wavearray2 = new Float32Array(2048*2);
	    this.wavearraybuf = gl.createBuffer();
	    this.wavearray2buf = gl.createBuffer();

	},

	Draw: function(context) {
	    this.WaveformMath(context);
	    uMatrixMode( U_MODELVIEW );
	    uPushMatrix();
	    uLoadIdentity();

	    if (this.modulateAlphaByVolume) {
		if (context.music.vol <= this.modOpacityStart) this.temp_a = 0.0;
		else if (context.music.vol >= this.modOpacityEnd) this.temp_a = this.a;
		else this.temp_a = this.a*((context.music.vol-this.modOpacityStart)/(this.modOpacityEnd-this.modOpacityStart));
	    } else this.temp_a = this.a;
	    
	    this.MaximizeColors(context);

	    if (this.thick == 1)
		 gl.lineWidth((context.texsize < 512 ) ? 2 : 2*context.texsize/512);
	    else gl.lineWidth((context.texsize < 512 ) ? 1 : context.texsize/512);

	    gl.enable(gl.BLEND);
	    if (this.additive == 1) gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
	    else gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

	    uTranslatef(.5, .5, 0);
	    uRotatef(this.rot, 0, 0, 1);
	    uScalef(this.aspectScale, 1.0, 1.0);
	    uTranslatef(-.5, -.5, 0);

	    uEnableClientState(U_VERTEX_ARRAY);
	    uDisableClientState(U_TEXTURE_COORD_ARRAY);
	    uDisableClientState(U_COLOR_ARRAY);

	    gl.bindBuffer(gl.ARRAY_BUFFER, this.wavearraybuf);
	    gl.bufferData(gl.ARRAY_BUFFER, this.wavearray, gl.STATIC_DRAW);
	    uVertexPointer(2,gl.FLOAT,0,this.wavearraybuf);

	    if (this.loop)
		uDrawArrays(gl.LINE_LOOP,0,this.samples);
	    else
		uDrawArrays(gl.LINE_STRIP,0,this.samples);


	    if (this.two_waves) {
		gl.bindBuffer(gl.ARRAY_BUFFER, this.wavearray2buf);
		gl.bufferData(gl.ARRAY_BUFFER, this.wavearray2, gl.STATIC_DRAW);
		uVertexPointer(2,gl.FLOAT,0,this.wavearray2buf);
		if (this.loop)
		    uDrawArrays(gl.LINE_LOOP,0,this.samples);
		else
		    uDrawArrays(gl.LINE_STRIP,0,this.samples);
	    }

	    uPopMatrix();    
	},

	MaximizeColors: function (context) {
	    var wave_r_switch = 0;
	    var wave_g_switch = 0;
	    var wave_b_switch = 0;
	    
	    if (this.mode == WaveMode.Blob2 || this.mode == WaveMode.Blob5)
		switch (context.texsize) {
		  case 256:  this.temp_a *= 0.07; break;
		  case 512:  this.temp_a *= 0.09; break;
		  case 1024: this.temp_a *= 0.11; break;
		  case 2048: this.temp_a *= 0.13; break;
		}
	    else if (this.mode == WaveMode.Blob3) {
		switch(context.texsize)	{
		  case 256:  this.temp_a *= 0.075; break;
		  case 512:  this.temp_a *= 0.15; break;
		  case 1024: this.temp_a *= 0.22; break;
		  case 2048: this.temp_a *= 0.33; break;
		}
		this.temp_a *= 1.3;
		this.temp_a *= Math.pow(context.music.treb, 2.0);
	    }

	    if (this.maximizeColors) {
		if (this.r >= this.g && this.r >= this.b) {
		    wave_b_switch = this.b / this.r;
		    wave_g_switch = this.g / this.r;
		    wave_r_switch = 1.0;
		} else if (this.b >= this.g && this.b >= this.r) {
		    wave_r_switch = this.r / this.b;
		    wave_g_switch = this.g / this.b;
		    wave_b_switch = 1.0;
		} else if (this.g >= this.b && this.g >= this.r) {
		    wave_b_switch = this.b / this.g;
		    wave_r_switch = this.r / this.g;
		    wave_g_switch = 1.0;
		}		
		uColor4f(wave_r_switch, wave_g_switch, wave_b_switch, this.temp_a * this.masterAlpha);
	    } else {
		uColor4f(this.r, this.g, this.b, this.temp_a * this.masterAlpha);
	    }
		
	},

	WaveformMath: function (context) {
	    var i,r,theta,temp_y,cos_rot,sin_rot;
	    var offset = this.x - 0.5;
	    var wave_x_temp = 0;
	    var wave_y_temp = 0;

	    this.two_waves = false;
	    this.loop = false;
	    if (this.mode == WaveMode.Circle) {

		this.loop = true;
		this.rot = 0;
		this.aspectScale = 1.0;
		temp_y = -1 * (this.y - 1.0);
		this.samples = context.music.numsamples;
		var inv_nverts_minus_one = 1.0 / this.samples;
		var offset = (context.music.pcmdataR[0]+context.music.pcmdataL[0]) - 
		    (context.music.pcmdataR[this.samples-1]+context.music.pcmdataL[this.samples-1]);
		for (i = 0; i < this.samples; i++) {
		    var value = context.music.pcmdataR[i]+context.music.pcmdataL[i];
		    value += offset * i / this.samples;
		    r = (0.5 + 0.4 * .12 * value * this.scale + this.mystery) * .5;
		    theta = i * inv_nverts_minus_one * 6.28 + context.time * 0.2;
		    this.wavearray[i*2] = r * Math.cos(theta) * (context.aspectCorrect ? context.aspectRatio : 1.0) + this.x;
		    this.wavearray[i*2+1] = r * Math.sin(theta) + temp_y;
		}

	    } else if (this.mode == WaveMode.RadialBlob) {

		this.rot = 0;
		this.aspectScale = context.aspectRatio;
		temp_y = -1 * (this.y - 1.0);
		this.samples = 512-32;
		for (i = 0; i < 512-32; i++) {
		    theta = context.music.pcmdataL[i+32] * 0.06 * this.scale * 1.57 + context.time * 2.3;
		    r = (0.53 + 0.43 * context.music.pcmdataR[i] * 0.12 * this.scale + this.mystery) * .5;
		    this.wavearray[i*2] = r * Math.cos(theta) * (context.aspectCorrect ? context.aspectRatio : 1.0) + this.x;
		    this.wavearray[i*2+1] = r * Math.sin(theta) + temp_y;
		}

	    } else if (this.mode == WaveMode.Blob2) {

		temp_y = -1 * (this.y - 1.0);
		this.rot = 0;
		this.aspectScale = 1.0;
		this.samples = 512-32;
		for (i = 0; i < 512-32; i++) {
		    this.wavearray[i*2] = context.music.pcmdataR[i] * this.scale * 0.5 + this.x;
		    this.wavearray[i*2+1] = context.music.pcmdataL[i+32] * this.scale * 0.5 + temp_y;
	        }

	    } else if (this.mode == WaveMode.DerivativeLine) {

		this.rot = -this.mystery * 90;
		this.aspectScale = 1.0;
		temp_y = -1 * (this.y - 1.0);
		var w1 = 0.45 + 0.5 * (this.mystery * 0.5 + 0.5);
		var w2 = 1.0 - w1;
		var xx,xxm1,xxm2,yy,yym1,yym2;
		this.samples = 512-32;
		for (i = 0; i < 512-32; i++) {
		    xx = -1.0 + 2.0 * i / (512-32) + this.x;
		    yy = 0.4 * context.music.pcmdataL[i] * 0.47 * this.scale + temp_y;
		    xx += 0.4 * context.music.pcmdataR[i] * 0.44 * this.scale;
		    if (i > 1) {
			xx = xx * w2 + w1 * (xxm1 * 2.0 - xxm2);
			yy = yy * w2 + w1 * (yym1 * 2.0 - yym2);
		    }
		    this.wavearray[i*2] = xx;
		    this.wavearray[i*2+1] = yy;
		    xxm2 = xxm1;
		    yym2 = yym1;
		    xxm1 = xx;
		    yym1 = yy;
		}

	    } else if (this.mode == WaveMode.Blob5) {
		
		this.rot = 0;
		this.aspectScale = 1.0;
		temp_y = -1 * (this.y - 1.0);
		cos_rot = Math.cos(context.time * 0.3);
		sin_rot = Math.sin(context.time * 0.3);
		this.samples = 512-32;
		for (i = 0; i < 512-32; i++) {
		    var x0 = context.music.pcmdataR[i]*context.music.pcmdataL[i+32] + context.music.pcmdataL[i+32]*context.music.pcmdataR[i];
		    var y0 = context.music.pcmdataR[i]*context.music.pcmdataR[i] - context.music.pcmdataL[i+32]*context.music.pcmdataL[i+32];
		    this.wavearray[i*2]=(x0*cos_rot - y0*sin_rot)*this.scale*0.5*(context.aspectCorrect ? context.aspectRatio : 1.0) + this.x;
		    this.wavearray[i*2+1] = (x0*sin_rot + y0*cos_rot) * this.scale * 0.5 + temp_y;
		}

	    } else if (this.mode == WaveMode.Line) {

		wave_x_temp = -2 * 0.4142 * (Math.abs(Math.abs(this.mystery)-.5)-.5);
		this.rot = -this.mystery * 90;
		this.aspectScale = 1.0 + wave_x_temp;
		wave_x_temp = -1 * (this.x - 1.0);
		this.samples = context.music.numsamples;
		for (i = 0; i < this.samples; i++) {
		    this.wavearray[i*2] = i / this.samples;
		    this.wavearray[i*2+1] = context.music.pcmdataR[i] * .04 * this.scale + wave_x_temp;
		}

	    } else if (this.mode == WaveMode.DoubleLine) {

		wave_x_temp = -2 * 0.4142 * (Math.abs(Math.abs(this.mystery)-.5)-.5);
		this.rot = -this.mystery * 90;
		this.aspectScale = 1.0 + wave_x_temp;
		this.samples = context.music.numsamples;
		this.two_waves = true;
		var y_adj = this.y * this.y * .5;
		wave_y_temp = -1 * (this.x - 1);
		for (i = 0; i < this.samples; i++) {
		    this.wavearray[i*2] = i / this.samples;
		    this.wavearray[i*2+1] = context.music.pcmdataL[i] * .04 * this.scale + (wave_y_temp + y_adj);
		}
		for (i = 0; i < this.samples; i++) {
		    this.wavearray2[i*2] = i / this.samples;
		    this.wavearray2[i*2+1] = context.music.pcmdataR[i] * .04 * this.scale + (wave_y_temp - y_adj);
		}

	    }
	},


    });


var CustomWaveform = RenderItem.extend({
	init: function(literal, initialQs) {
	    this.r = 0;
	    this.g = 0;
	    this.b = 0;
	    this.a = 0;

	    this.spectrum = false;
	    this.dots = false;
	    this.thick = false;
	    this.additive = false;
	    this.samples = 512;
	    this.scaling = 1;
	    this.smoothing = 0;
	    this.sep = 0;

	    this.init_code = function(){};
	    this.per_frame_code = function(){};
	    this.per_point_code = function(){};

	    this.masterAlpha = 1.0;
            for (var prop in literal)
		if (prop.toLowerCase() == "bspectrum")
		    this.spectrum = new Boolean(literal[prop]);
		else if (prop.toLowerCase() == "bdrawthick")
		    this.thick = new Boolean(literal[prop]);
		else if (prop.toLowerCase() == "busedots")
		    this.dots = new Boolean(literal[prop]);
		else if (prop.toLowerCase() == "badditive")
		    this.additive = new Boolean(literal[prop]);
		else
		    this[prop] = literal[prop];

	    if (this.samples > 512)
		this.samples = 512;

	    this.initialVals = new WaveFrameVariablePool();
	    this.initialVals.pushOutputs(this);

	    this.framePool = new WaveFrameVariablePool();
	    this.pointPool = new WavePointVariablePool();
	    this.varInit();
	    this.framePool.pushQs(initialQs);
	    this.init_code(this.framePool);
	    this.initialTs = new Float32Array(8);
	    this.framePool.popTs(this.initialTs);

	    this.waveDataL = new Float32Array(this.samples);
	    this.waveDataR = new Float32Array(this.samples);

	    this.r_mesh = new Float32Array(this.samples);
	    this.g_mesh = new Float32Array(this.samples);
	    this.b_mesh = new Float32Array(this.samples);
	    this.a_mesh = new Float32Array(this.samples);
	    this.x_mesh = new Float32Array(this.samples);
	    this.y_mesh = new Float32Array(this.samples);

	    this.colors = new Float32Array(this.samples*4);
	    this.p = new Float32Array(this.samples*2);
	    this.colorbuf = gl.createBuffer();
	    this.pbuf = gl.createBuffer();
	},

	varInit: function() {
	    var testPool = new WaveFrameVariablePool();
	    var winProps = {};
	    for (var prop in window)
		winProps[prop] = null;
            for (var i = 0; i < 30; i++)
                try {
                    this.init_code(testPool);
                    this.per_frame_code(testPool);
                    break;
                } catch (error) {
                    if (error.name == "ReferenceError") {
                        var customVar = error.message.split(" ")[0];
                        this.framePool[customVar] = 0;
                        testPool[customVar] = 0;
                    } else {
			console.log(this.init_code);
			console.log(this.per_frame_code);
			throw error;
		    }
                }
	    for (var prop in window)
		if (!(prop in winProps)) {
		    this.framePool[prop] = 0;
		    delete window[prop];
		}
	},

	runCode: function() {
	    this.framePool.pushTs(this.initialTs);
	    this.initialVals.popOutputs(this.framePool);
	    this.per_frame_code(this.framePool);
	    this.framePool.popOutputs(this);
	},

	runPerPoint: function() {
	    this.framePool.transferQs(this.pointPool);
	    this.framePool.transferTs(this.pointPool);
	    this.pointPool.pushInputs(this.framePool);
	    for (var i = 0; i < this.samples; i++) {
		this.pointPool.sample = i/(this.samples - 1);
		this.pointPool.value1 = this.waveDataL[i];
		this.pointPool.value2 = this.waveDataR[i];
		this.pointPool.r = this.r;
		this.pointPool.g = this.g;
		this.pointPool.b = this.b;
		this.pointPool.a = this.a;
		this.pointPool.x = this.x;
		this.pointPool.y = this.y;
		this.per_point_code(this.pointPool);
		this.r_mesh[i] = this.pointPool.r;
		this.g_mesh[i] = this.pointPool.g;
		this.b_mesh[i] = this.pointPool.b;
		this.a_mesh[i] = this.pointPool.a;
		this.x_mesh[i] = this.pointPool.x;
		this.y_mesh[i] = this.pointPool.y;    
	    }
	},
	
	Draw: function(context) {

	    gl.enable(gl.BLEND);
	    if (this.additive)  gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
	    else gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

	    if (this.thick) {
		gl.lineWidth(context.texsize <= 512 ? 2 : 2*context.texsize/512);
		uPointSize(context.texsize <= 512 ? 2 : 2*context.texsize/512);
	    }
	    else uPointSize(context.texsize <= 512 ? 1 : context.texsize/512);
	    
	    context.music.getPCM(this.waveDataL, this.samples, 0, this.spectrum, this.smoothing);
	    context.music.getPCM(this.waveDataR, this.samples, 1, this.spectrum, this.smoothing);

	    var mult = this.scaling * (this.spectrum ? 0.015 : 1.0);
	    for (var i = 0; i < this.samples; i++) {
		this.waveDataL[i] *= mult;
		this.waveDataR[i] *= mult;
	    }

	    this.runPerPoint();

	    for (var i = 0; i < this.samples; i++) {
		this.colors[i*4] = this.r_mesh[i];
		this.colors[i*4+1] = this.g_mesh[i];
		this.colors[i*4+2] = this.b_mesh[i];
		this.colors[i*4+3] = this.a_mesh[i] * this.masterAlpha;
		this.p[i*2] = this.x_mesh[i];
		this.p[i*2+1] = -(this.y_mesh[i]-1);
	    }

	    uEnableClientState(U_VERTEX_ARRAY);
	    uEnableClientState(U_COLOR_ARRAY);
	    uDisableClientState(U_TEXTURE_COORD_ARRAY);

	    gl.bindBuffer(gl.ARRAY_BUFFER, this.pbuf);
	    gl.bufferData(gl.ARRAY_BUFFER, this.p, gl.STATIC_DRAW);
	    uVertexPointer(2,gl.FLOAT,0,this.pbuf);

	    gl.bindBuffer(gl.ARRAY_BUFFER, this.colorbuf);
	    gl.bufferData(gl.ARRAY_BUFFER, this.colors, gl.STATIC_DRAW);
	    uColorPointer(4,gl.FLOAT,0,this.colorbuf);

	    if (this.dots) uDrawArrays(gl.POINTS,0,this.samples);
	    else uDrawArrays(gl.LINE_STRIP,0,this.samples);

	    uPointSize(context.texsize < 512 ? 1 : context.texsize/512);
	    gl.lineWidth(context.texsize < 512 ? 1 : context.texsize/512);

	    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

	}
    });

var DarkenCenter = RenderItem.extend({
	init: function(literal) {
	    this._super(literal);
	    this.colors = new Float32Array([0,0,0,3./32 * this.masterAlpha,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
	    this.points = new Float32Array([0.5,0.5,0.45,0.5,0.5,0.45,0.55,0.5,0.5,0.55,0.45,0.5]);
	    this.colorbuf = gl.createBuffer();
	    this.pointsbuf = gl.createBuffer();
	},

	Draw: function(context) {
	    gl.enable(gl.BLEND);
	    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

	    this.colors[3] = 3/32 * this.masterAlpha;

	    gl.bindBuffer(gl.ARRAY_BUFFER, this.colorbuf);
	    gl.bufferData(gl.ARRAY_BUFFER, this.colors, gl.STATIC_DRAW);

	    gl.bindBuffer(gl.ARRAY_BUFFER, this.pointsbuf);
	    gl.bufferData(gl.ARRAY_BUFFER, this.points, gl.STATIC_DRAW);

	    uEnableClientState(U_VERTEX_ARRAY);
	    uEnableClientState(U_COLOR_ARRAY);
	    uDisableClientState(U_TEXTURE_COORD_ARRAY);
	    uVertexPointer(2,gl.FLOAT,0,this.pointsbuf);
	    uColorPointer(4,gl.FLOAT,0,this.colorbuf);
	    uDrawArrays(gl.TRIANGLE_FAN,0,6);
	}
    });
	

var Shape = RenderItem.extend({
	init: function(literal, initialQs) {

	    this.sides = 4;
	    this.thickOutline = false;
	    this.enabled = true;
	    this.additive = false;
	    this.textured = false;

	    this.tex_zoom = 1.0;
	    this.tex_ang = 0.0;

	    this.x = 0.5;
	    this.y = 0.5;
	    this.rad = 1.0;
	    this.ang = 0.0;

	    this.r = 0.0;
	    this.g = 0.0;
	    this.b = 0.0;
	    this.a = 0.0;

	    this.r2 = 0.0;
	    this.g2 = 0.0;
	    this.b2 = 0.0;
	    this.a2 = 0.0;

	    this.border_r = 0.0;
	    this.border_g = 0.0;
	    this.border_b = 0.0;
	    this.border_a = 0.0;

	    this.ImageUrl = "";

	    this.init_code = function(){};
	    this.per_frame_code = function(){};

	    this._super(literal);

	    this.initialVals = new ShapeFrameVariablePool();
	    this.initialVals.pushOutputs(this);

	    this.framePool = new ShapeFrameVariablePool();
	    this.varInit();
	    this.framePool.pushQs(initialQs);
	    this.init_code(this.framePool);
	    this.initialTs = new Float32Array(8);
	    this.framePool.popTs(this.initialTs);

	    this.colors = new Float32Array((this.sides+2)*4);
	    this.texcoords = new Float32Array((this.sides+2)*2);
	    this.points = new Float32Array((this.sides+2)*2);
	    this.points2 = new Float32Array((this.sides+1)*2);

	    this.colorbuf = gl.createBuffer();
	    this.texbuf = gl.createBuffer();
	    this.pointsbuf = gl.createBuffer();
	    this.points2buf = gl.createBuffer();

	},

	varInit: function() {
	    var testPool = new ShapeFrameVariablePool();
            for (var i = 0; i < 30; i++)
                try {
                    this.init_code(testPool);
                    this.per_frame_code(testPool);
                    break;
                } catch (error) {
                    if (error.name == "ReferenceError") {
                        var customVar;
			if (error.message.indexOf("Can't find variable:") == 0)
			    customVar = error.message.split(" ").pop();
			else
			    customVar = error.message.split(" ")[0];
                        this.framePool[customVar] = 0;
                        testPool[customVar] = 0;
                    } else
                        throw error;
                }
	},

	runCode: function() {
	    this.framePool.pushTs(this.initialTs);
	    this.initialVals.popOutputs(this.framePool);
	    this.per_frame_code(this.framePool);
	    this.framePool.popOutputs(this);
	},

	Draw: function(context) {

	    var xval,yval,t;
	    var temp_radius = this.rad*(.707*.707*.707*1.04);
	    gl.enable(gl.BLEND);
	    if (this.additive == 0)
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	    else
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

	    xval = this.x;
	    yval = -(this.y-1);

	    if (this.textured) {
		if (this.ImageUrl != "") {
		    var tex = textures[this.ImageUrl];
		    gl.bindTexture(gl.TEXTURE_2D, tex);
		    context.aspectRatio = 1.0;
		}
	    
		uMatrixMode(U_TEXTURE);
		uPushMatrix();
		uLoadIdentity();
		
		uEnableClientState(U_VERTEX_ARRAY);
		uEnableClientState(U_COLOR_ARRAY);
		uEnableClientState(U_TEXTURE_COORD_ARRAY);
	       
		uVertexPointer(2,gl.FLOAT,0,this.pointsbuf);
		uColorPointer(4,gl.FLOAT,0,this.colorbuf);
		uTexCoordPointer(2,gl.FLOAT,0,this.texbuf);

		this.colors[0] = this.r;
		this.colors[1] = this.g;
		this.colors[2] = this.b;
		this.colors[3] = this.a * this.masterAlpha;
		this.texcoords[0] = 0.5;
		this.texcoords[1] = 0.5;
		this.points[0] = xval;
		this.points[1] = yval;

		for (var i = 1; i < this.sides+2; i++) {

		    this.colors[i*4] = this.r2;
		    this.colors[i*4+1] = this.g2;
		    this.colors[i*4+2] = this.b2;
		    this.colors[i*4+3] = this.a2 * this.masterAlpha;

		    t = (i-1)/this.sides;
		    this.texcoords[i*2] = 0.5 + 0.5*Math.cos(t*3.1415927*2 + this.tex_ang + 3.1415927*0.25)*(context.aspectCorrect ? context.aspectRatio : 1.0) / this.tex_zoom;
		    this.texcoords[i*2+1] = 0.5 + 0.5*Math.sin(t*3.1415927*2 + this.tex_ang + 3.1415927*0.25) / this.tex_zoom;
		    this.points[i*2] = temp_radius*Math.cos(t*3.1415927*2 + this.ang + 3.1415927*0.25)*(context.aspectCorrect ? context.aspectRatio : 1.0)+xval;
		    this.points[i*2+1] = temp_radius*Math.sin(t*3.1415927*2 + this.ang + 3.1415927*0.25)+yval;
		    
		}

		gl.bindBuffer(gl.ARRAY_BUFFER, this.colorbuf);
		gl.bufferData(gl.ARRAY_BUFFER, this.colors, gl.STATIC_DRAW);
		gl.bindBuffer(gl.ARRAY_BUFFER, this.texbuf);
		gl.bufferData(gl.ARRAY_BUFFER, this.texcoords, gl.STATIC_DRAW);
		gl.bindBuffer(gl.ARRAY_BUFFER, this.pointsbuf);
		gl.bufferData(gl.ARRAY_BUFFER, this.points, gl.STATIC_DRAW);		
		
		uDrawArrays(gl.TRIANGLE_FAN,0,this.sides+2);
		
		uDisableClientState(U_TEXTURE_COORD_ARRAY);
		uPopMatrix();
		uMatrixMode(U_MODELVIEW);

	    } else {
		uEnableClientState(U_VERTEX_ARRAY);
		uEnableClientState(U_COLOR_ARRAY);
		uDisableClientState(U_TEXTURE_COORD_ARRAY);
		uVertexPointer(2,gl.FLOAT,0,this.pointsbuf);
		uColorPointer(4,gl.FLOAT,0,this.colorbuf);

		this.colors[0]=this.r;
		this.colors[1]=this.g;
		this.colors[2]=this.b;
		this.colors[3]=this.a * this.masterAlpha;
		this.points[0]=xval;
		this.points[1]=yval;

		for (var i = 1; i < this.sides+2; i++) {
		    this.colors[i*4] = this.r2;
		    this.colors[i*4+1] = this.g2;
		    this.colors[i*4+2] = this.b2;
		    this.colors[i*4+3] = this.a2 * this.masterAlpha;
		    t = (i-1)/this.sides;
		    this.points[i*2]=temp_radius*Math.cos(t*3.1415927*2 + this.ang + 3.1415927*0.25)*(context.aspectCorrect ? context.aspectRatio : 1.0)+xval;
		    this.points[i*2+1]=temp_radius*Math.sin(t*3.1415927*2 + this.ang + 3.1415927*0.25)+yval;
		}

		gl.bindBuffer(gl.ARRAY_BUFFER, this.colorbuf);
		gl.bufferData(gl.ARRAY_BUFFER, this.colors, gl.STATIC_DRAW);

		gl.bindBuffer(gl.ARRAY_BUFFER, this.pointsbuf);
		gl.bufferData(gl.ARRAY_BUFFER, this.points, gl.STATIC_DRAW);		

		uDrawArrays(gl.TRIANGLE_FAN,0,this.sides+2);

	    }
	    if (this.thickOutline)
		gl.lineWidth(context.texsize < 512 ? 1 : 2*context.texsize/512);


	    uEnableClientState(U_VERTEX_ARRAY);
	    uDisableClientState(U_COLOR_ARRAY);
	    uVertexPointer(2,gl.FLOAT,0,this.points2buf);

	    uColor4f(this.border_r, this.border_g, this.border_b, this.border_a * this.masterAlpha);

	    for (var i = 0; i < this.sides; i++) {
		t = (i-1)/this.sides;
		this.points2[i*2]= temp_radius*Math.cos(t*3.1415927*2 + this.ang + 3.1415927*0.25)*(context.aspectCorrect ? context.aspectRatio : 1.0)+xval;
		this.points2[i*2+1]= temp_radius*Math.sin(t*3.1415927*2 + this.ang + 3.1415927*0.25)+yval;
	    }

	    gl.bindBuffer(gl.ARRAY_BUFFER, this.points2buf);
	    gl.bufferData(gl.ARRAY_BUFFER, this.points2, gl.STATIC_DRAW);

	    uDrawArrays(gl.LINE_LOOP,0,this.sides);
	    if (this.thickOutline)
		gl.lineWidth(context.texsize < 512 ? 1 : context.texsize/512);


	}
    });


var MotionVectors = RenderItem.extend({
	init: function(literal) {

	    this.r = 0.0;
	    this.g = 0.0;
	    this.b = 0.0;
	    this.a = 0.0;
	    this.length = 0.0;
	    this.x_num = 0.0;
	    this.y_num = 0.0;
	    this.x_offset = 0.0;
	    this.y_offset = 0.0;

	    this._super(literal);
	    this.points = new Float32Array(Math.floor(this.x_num * this.y_num)*2);
	    this.pointsbuf = gl.createBuffer();
	},

	Draw: function() {
	    uEnableClientState(U_VERTEX_ARRAY);
	    uDisableClientState(U_TEXTURE_COORD_ARRAY);
	    uDisableClientState(U_COLOR_ARRAY);

	    var intervalx = 1.0 / this.x_num;
	    var intervaly = 1.0 / this.y_num;

	    gl.enable(gl.BLEND);
	    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

	    uPointSize(this.length);
	    uColor4f(this.r, this.g, this.b, this.a * this.masterAlpha);

	    if (this.x_num + this.y_num < 600) {
		var size = Math.floor(this.x_num * this.y_num);
		if (size > 0) {
		    if (this.points.length < (size*2))
			this.points = new Float32Array(size*2);
		    for (var x = 0; x < Math.floor(this.x_num); x++)
			for (var y = 0; y < Math.floor(this.y_num); y++) {
			    var lx, ly;
			    lx = this.x_offset + x * intervalx;
			    ly = this.y_offset + y * intervaly;
			    this.points[(x * Math.floor(this.y_num)) + y][0] = lx;
			    this.points[(x * Math.floor(this.y_num)) + y][1] = ly;
			}
		    gl.bindBuffer(gl.ARRAY_BUFFER, this.pointsbuf);
		    gl.bufferData(gl.ARRAY_BUFFER, this.points, gl.STATIC_DRAW);
		    uVertexPointer(2,gl.FLOAT,0,this.pointsbuf);
		    uDrawArrays(gl.POINTS,0,size);
		}
	    }
	}
    });

var Border = RenderItem.extend({
	init: function(literal) {

	    this.outer_size = 0;
	    this.outer_r = 0;
	    this.outer_g = 0;
	    this.outer_b = 0;
	    this.outer_a = 0;

	    this.inner_size = 0;
	    this.inner_r = 0;
	    this.inner_g = 0;
	    this.inner_b = 0;
	    this.inner_a = 0;

	    this._super(literal);

	    this.pointsA = new Float32Array([0,0,0,1,0,0,0,1]);
	    this.pointsB = new Float32Array([0,0,0,0,1,0,1,0]);
	    this.pointsC = new Float32Array([1,0,1,1,1,0,1,1]);
	    this.pointsD = new Float32Array([0,1,0,1,1,1,1,1]);
	    this.pointsE = new Float32Array([0,0,0,1,0,0,0,1]);
	    this.pointsF = new Float32Array([0,0,0,0,1,0,1,0]);
	    this.pointsG = new Float32Array([1,0,1,0,1,0,1,1]);
	    this.pointsH = new Float32Array([0,1,0,1,1,1,1,1]);

	    this.pointsAbuf = gl.createBuffer();
	    this.pointsBbuf = gl.createBuffer();
	    this.pointsCbuf = gl.createBuffer();
	    this.pointsDbuf = gl.createBuffer();
	    this.pointsEbuf = gl.createBuffer();
	    this.pointsFbuf = gl.createBuffer();
	    this.pointsGbuf = gl.createBuffer();
	    this.pointsHbuf = gl.createBuffer();

	},

	Draw: function() {
	    uEnableClientState(U_VERTEX_ARRAY);
	    uDisableClientState(U_COLOR_ARRAY);
	    uDisableClientState(U_TEXTURE_COORD_ARRAY);
	    
	    var of = this.outer_size*.5;
	    var iff = this.inner_size*.5;
	    var texof = 1.0 - of;

	    gl.enable(gl.BLEND);
	    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	    uColor4f(this.outer_r, this.outer_g, this.outer_b, this.outer_a * this.masterAlpha);

	    this.pointsA[4] = this.pointsA[6] = of;
	    gl.bindBuffer(gl.ARRAY_BUFFER, this.pointsAbuf);
	    gl.bufferData(gl.ARRAY_BUFFER, this.pointsA, gl.STATIC_DRAW);
	    uVertexPointer(2,gl.FLOAT,0,this.pointsAbuf);
	    uDrawArrays(gl.TRIANGLE_STRIP,0,4);

	    this.pointsB[0] = this.pointsB[2] = this.pointsB[3] = this.pointsB[7] = of; 
	    this.pointsB[4] = this.pointsB[6] = texof;
	    gl.bindBuffer(gl.ARRAY_BUFFER, this.pointsBbuf);
	    gl.bufferData(gl.ARRAY_BUFFER, this.pointsB, gl.STATIC_DRAW);
	    uVertexPointer(2,gl.FLOAT,0,this.pointsBbuf);
	    uDrawArrays(gl.TRIANGLE_STRIP,0,4);

	    this.pointsC[0] = this.pointsC[2] = texof;
	    gl.bindBuffer(gl.ARRAY_BUFFER, this.pointsCbuf);
	    gl.bufferData(gl.ARRAY_BUFFER, this.pointsC, gl.STATIC_DRAW);
	    uVertexPointer(2,gl.FLOAT,0,this.pointsCbuf);
	    uDrawArrays(gl.TRIANGLE_STRIP,0,4);

	    this.pointsD[0] = this.pointsD[2] = of;
	    this.pointsD[3] = this.pointsD[4] = this.pointsD[6] = this.pointsD[7] = texof;
	    gl.bindBuffer(gl.ARRAY_BUFFER, this.pointsDbuf);
	    gl.bufferData(gl.ARRAY_BUFFER, this.pointsD, gl.STATIC_DRAW);
	    uVertexPointer(2,gl.FLOAT,0,this.pointsDbuf);
	    uDrawArrays(gl.TRIANGLE_STRIP,0,4);

	    uColor4f(this.inner_r, this.inner_g, this.inner_b, this.inner_a * this.masterAlpha);

	    this.pointsE[0] = this.pointsE[1] = this.pointsE[2] = this.pointsE[5] = of;
	    this.pointsE[3] = this.pointsE[7] = texof;
	    this.pointsE[4] = this.pointsE[6] = of+iff;
	    gl.bindBuffer(gl.ARRAY_BUFFER, this.pointsEbuf);
	    gl.bufferData(gl.ARRAY_BUFFER, this.pointsE, gl.STATIC_DRAW);
	    uVertexPointer(2,gl.FLOAT,0,this.pointsEbuf);
	    uDrawArrays(gl.TRIANGLE_STRIP,0,4);

	    this.pointsF[1] = this.pointsF[5] = of;
	    this.pointsF[0] = this.pointsF[2] = this.pointsF[3] = this.pointsF[7] = of+iff;
	    this.pointsF[4] = this.pointsF[6] = texof-iff;
	    gl.bindBuffer(gl.ARRAY_BUFFER, this.pointsFbuf);
	    gl.bufferData(gl.ARRAY_BUFFER, this.pointsF, gl.STATIC_DRAW);
	    uVertexPointer(2,gl.FLOAT,0,this.pointsFbuf);
	    uDrawArrays(gl.TRIANGLE_STRIP,0,4);

	    this.pointsG[1] = this.pointsG[5] = of;
	    this.pointsG[3] = this.pointsG[4] = this.pointsG[6] = this.pointsG[7] = texof;
	    this.pointsG[0] = this.pointsG[2] = texof-iff;
	    gl.bindBuffer(gl.ARRAY_BUFFER, this.pointsGbuf);
	    gl.bufferData(gl.ARRAY_BUFFER, this.pointsG, gl.STATIC_DRAW);
	    uVertexPointer(2,gl.FLOAT,0,this.pointsGbuf);
	    uDrawArrays(gl.TRIANGLE_STRIP,0,4);

	    this.pointsH[1] = this.pointsH[5] = texof;
	    this.pointsH[0] = this.pointsH[2] = of+iff;
	    this.pointsH[3] = this.pointsH[4] = this.pointsH[6] = this.pointsH[7] = texof-iff;
	    gl.bindBuffer(gl.ARRAY_BUFFER, this.pointsHbuf);
	    gl.bufferData(gl.ARRAY_BUFFER, this.pointsH, gl.STATIC_DRAW);
	    uVertexPointer(2,gl.FLOAT,0,this.pointsHbuf);
	    uDrawArrays(gl.TRIANGLE_STRIP,0,4);
	}
    });

var Orientation = {
    Normal: 0,
    FlipX: 1,
    FlipY: 2,
    FlipXY: 3
}

var VideoEcho = RenderItem.extend({
	init: function(literal) {
	    this.a = 0;
	    this.zoom = 0;
	    this.orientation = Orientation.Normal;

	    this._super();

	    this.tex = new Float32Array([0,1,0,0,1,0,1,1]);
	    this.points = new Float32Array([-.5,-.5,-.5,.5,.5,.5,.5,-.5]);
	    this.pointsFlip = new Float32Array(8);
	    this.texbuf = gl.createBuffer();
	    this.pointsbuf = gl.createBuffer();
	    this.pointsFlipbuf = gl.createBuffer();
	},

	Draw: function(context) {

	    uEnableClientState(U_VERTEX_ARRAY);
	    uDisableClientState(U_COLOR_ARRAY);
	    uEnableClientState(U_TEXTURE_COORD_ARRAY);

	    gl.bindBuffer(gl.ARRAY_BUFFER, this.pointsbuf);
            gl.bufferData(gl.ARRAY_BUFFER, this.points, gl.STATIC_DRAW);
	    uVertexPointer(2,gl.FLOAT,0,this.pointsbuf);

	    gl.bindBuffer(gl.ARRAY_BUFFER, this.texbuf);
            gl.bufferData(gl.ARRAY_BUFFER, this.tex, gl.STATIC_DRAW);
	    uTexCoordPointer(2,gl.FLOAT,0,this.tex);

	    gl.enable(gl.BLEND);
	    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

	    uMatrixMode(U_TEXTURE);

	    uColor4f(1.0, 1.0, 1.0, this.a * this.masterAlpha);
	    uTranslatef(.5, .5, 0);
	    uScalef(1.0/this.zoom, 1.0/this.zoom, 1);
	    uTranslatef(-.5, -.5, 0);

	    var flipx=1, flipy=1;
	    switch (this.orientation) {
	        case Orientation.Normal: flipx = 1; flipy = 1; break;
		case Orientation.FlipX: flipx = -1; flipy = 1; break;
		case Orientation.FlipY: flipx = 1; flipy = -1; break;
		case Orientation.FlipXY: flipx = -1; flipy = -1; break;
		default: flipx = 1; flipy = 1; break;
	    }

	    this.pointsFlip[0] = this.pointsFlip[2] = -.5 * flipx;
	    this.pointsFlip[1] = this.pointsFlip[7] = -.5 * flipy;    
	    this.pointsFlip[3] = this.pointsFlip[5] = .5 * flipy;
	    this.pointsFlip[4] = this.pointsFlip[6] = .5 * flipx;

	    gl.bindBuffer(gl.ARRAY_BUFFER, this.pointsFlipbuf);
            gl.bufferData(gl.ARRAY_BUFFER, this.pointsFlip, gl.STATIC_DRAW);
	    uVertexPointer(2,gl.FLOAT,0,this.pointsFlipbuf);
	    uDrawArrays(gl.TRIANGLE_FAN,0,4);

	    uDisableClientState(U_TEXTURE_COORD_ARRAY);
	    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

	}
    });


var Filter = RenderItem.extend({
	init: function(literal) {
	    this._super(literal);
	    this.points = new Float32Array([-.5,-.5,-.5,.5,.5,.5,.5,-.5]);
	    this.pointsbuf = gl.createBuffer();
	}
    });

var Brighten = Filter.extend({
	Draw: function(context) {

	    uEnableClientState(U_VERTEX_ARRAY);
	    gl.bindBuffer(gl.ARRAY_BUFFER, this.pointsbuf);
	    gl.bufferData(gl.ARRAY_BUFFER, this.points, gl.STATIC_DRAW);
	    uVertexPointer(2,gl.FLOAT,0,this.pointsbuf);
	    uColor4f(1.0, 1.0, 1.0, 1.0);
	    gl.enable(gl.BLEND);
	    gl.blendFunc(gl.ONE_MINUS_DST_COLOR, gl.ZERO);
	    uDrawArrays(gl.TRIANGLE_FAN,0,4);
	    gl.blendFunc(gl.ZERO, gl.DST_COLOR);
	    uDrawArrays(gl.TRIANGLE_FAN,0,4);
	    gl.blendFunc(gl.ONE_MINUS_DST_COLOR, gl.ZERO);
	    uDrawArrays(gl.TRIANGLE_FAN,0,4);
	    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);    
	    uDisableClientState(U_VERTEX_ARRAY);
	}
    });

var Darken = Filter.extend({
	Draw: function(context) {    
	    uEnableClientState(U_VERTEX_ARRAY);
	    gl.bindBuffer(gl.ARRAY_BUFFER, this.pointsbuf);
	    gl.bufferData(gl.ARRAY_BUFFER, this.points, gl.STATIC_DRAW);
	    uVertexPointer(2,gl.FLOAT,0,this.pointsbuf);
	    uColor4f(1.0, 1.0, 1.0, 1.0);
	    gl.enable(gl.BLEND);
	    gl.blendFunc(gl.ZERO, gl.DST_COLOR);
	    uDrawArrays(gl.TRIANGLE_FAN,0,4);
	    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	    uDisableClientState(U_VERTEX_ARRAY);
	}
    });

var Invert = Filter.extend({
	Draw: function(context) {    
	    uEnableClientState(U_VERTEX_ARRAY);
	    gl.bindBuffer(gl.ARRAY_BUFFER, this.pointsbuf);
	    gl.bufferData(gl.ARRAY_BUFFER, this.points, gl.STATIC_DRAW);
	    uVertexPointer(2,gl.FLOAT,0,this.pointsbuf);
	    uColor4f(1.0, 1.0, 1.0, 1.0);
	    gl.enable(gl.BLEND);
	    gl.blendFunc(gl.ONE_MINUS_DST_COLOR, gl.ZERO);
	    uDrawArrays(gl.TRIANGLE_FAN,0,4);
	    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);   
	    uDisableClientState(U_VERTEX_ARRAY);
	}
    });

var Solarize = Filter.extend({
	Draw: function(context) {
	    uEnableClientState(U_VERTEX_ARRAY);
	    gl.bindBuffer(gl.ARRAY_BUFFER, this.pointsbuf);
	    gl.bufferData(gl.ARRAY_BUFFER, this.points, gl.STATIC_DRAW);
	    uVertexPointer(2,gl.FLOAT,0,this.pointsbuf);
	    uColor4f(1.0, 1.0, 1.0, 1.0);
	    gl.enable(gl.BLEND);
	    gl.blendFunc(gl.ZERO, gl.ONE_MINUS_DST_COLOR);
	    uDrawArrays(gl.TRIANGLE_FAN,0,4);
	    gl.blendFunc(gl.DST_COLOR, gl.ONE);
	    uDrawArrays(gl.TRIANGLE_FAN,0,4);
	    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	    uDisableClientState(U_VERTEX_ARRAY);
	}
    });
