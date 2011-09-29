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


var MilkdropPreset = Class.extend({

	init: function(name,preset,gx,gy) {
	    this.name = name;
	    this.inputs = {};
	    this.outputs = {
		dx: 0,
		dy: 0,
		wave: {},
		mv: {},
		brighten: {},
		darken: {},
		invert: {},
		solarize: {},
		videoEcho: {},
		border: {},
		darkenCenter: {}
	    };

	    this.init_code = function(){}
	    this.per_frame_code = function(){};
	    this.per_pixel_code = function(){};

	    this.initialVals = new PresetFrameVariablePool();
	    for (var prop in preset)
		this.loadParam(prop, preset[prop]);

	    this.framePool = new PresetFrameVariablePool();
	    this.pixelPool = new PresetPixelVariablePool();
	    
	    this.varInit();
	    this.init_code(this.framePool);
	    this.initialQs = new Float32Array(32);
	    this.framePool.popQs(this.initialQs);
	    
	    this.customShapes = this.customShapes || [];
	    this.customWaves = this.customWaves || [];

	    for (var i = 0; i < this.customShapes.length; i++)
		this.customShapes[i] = new Shape(this.customShapes[i], this.initialQs);
	    for (var i = 0; i < this.customWaves.length; i++)
		this.customWaves[i] = new CustomWaveform(this.customWaves[i], this.initialQs);


	    this.outputs.darkenCenter = new DarkenCenter(this.outputs.darkenCenter);
	    this.outputs.mv = new MotionVectors(this.outputs.mv);
	    this.outputs.border = new Border(this.outputs.border);
	    this.outputs.wave = new MilkdropWaveform(this.outputs.wave);
	    this.outputs.videoEcho = new RenderItem(this.outputs.videoEcho);

	    this.outputs.brighten = new Brighten(this.outputs.brighten);
	    this.outputs.darken = new Darken(this.outputs.darken);
	    this.outputs.invert = new Invert(this.outputs.invert);
	    this.outputs.solarize = new Solarize(this.outputs.solarize);

	    this.inputs.gx = gx;
	    this.inputs.gy = gy;
	    this.outputs.gx = gx;
	    this.outputs.gy = gy;

	    this.createMeshes(this.inputs,["x_mesh","y_mesh","rad_mesh","theta_mesh",
					   "origtheta","origrad","origx","origy"]);

	    for (var x = 0; x < gx; x++)
		for (var y = 0; y < gy; y++) {
		    var origx = x / (gx - 1);
		    var origy = -((y/(gy-1))-1);
		    this.inputs.origx[x][y] = origx
		    this.inputs.origy[x][y] = origy
		    this.inputs.origrad[x][y] = .7071067*Math.sqrt(Math.pow((origx-0.5)*2,2) + Math.pow((origy-0.5)*2,2));
		    this.inputs.origtheta[x][y] = Math.atan2((origy-0.5)*2, (origx-0.5)*2);
		}
	    
	    this.outputs.staticPerPixel = true;
	    

	    this.createMeshes(this.outputs,["x_mesh","y_mesh","sx_mesh","sy_mesh","dx_mesh","dy_mesh",
					    "cx_mesh","cy_mesh","zoom_mesh","zoomexp_mesh","rot_mesh",
					    "warp_mesh","rad_mesh","orig_x","orig_y"]);
	    
	    for (var x = 0; x < gx; x++)
		for (var y = 0; y < gy; y++) {
		    var origx = x/(gx-1);
		    var origy = -((y/(gy-1))-1);
		    this.outputs.rad_mesh[x][y] = .7071067 * Math.sqrt(Math.pow((origx-0.5)*2,2) + Math.pow((origy-0.5)*2,2));
		    this.outputs.orig_x[x][y] = (origx - 0.5) * 2;
		    this.outputs.orig_y[x][y] = (origy - 0.5) * 2;
		}

	},

	loadParam: function (param, value) {
	    if (param.toLowerCase() in OutputParamMap) {
		var internal = OutputParamMap[param.toLowerCase()];
		var container = this.outputs;
		var paramParts = internal[0].split(".");
		var i;
		for (i = 0; i < paramParts.length - 1; i++)
		    container = container[paramParts[i]];
		var internalParam = paramParts[i];
		var paramType = internal[2];
		if (paramType == Number || paramType == Boolean) {
		    container[internalParam] = paramType(value);
		    canonical = param;
		    if (internal.length > 3)
			canonical = internal[3];
		    if (canonical in this.initialVals)
			this.initialVals[canonical] = paramType(value);
		} else
		    this[internalParam] = paramType(value);
	    }
	},

	varInit: function() {
	    var testPool = new PresetFrameVariablePool();
	    var testPixPool = new PresetPixelVariablePool();
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
			var customVar;
			if (error.message.indexOf("Can't find variable:") == 0)
			    customVar = error.message.split(" ").pop();
			else
			    customVar = error.message.split(" ")[0];
			this.framePool[customVar] = 0;
			testPool[customVar] = 0;
		    } else {
			console.log(this.name);
			throw error;
		    }
		}
	    for (var i = 0; i < 30; i++)
		try {
		    this.per_pixel_code(testPixPool);
		    break;
		} catch (error) {
		    if (error.name == "ReferenceError") {
			var customVar;
			if (error.message.indexOf("Can't find variable:") == 0)
			    customVar = error.message.split(" ").pop();
			else
			    customVar = error.message.split(" ")[0];
			this.pixelPool[customVar] = 0;
			testPixPool[customVar] = 0;
		    } else {
			console.log(this.name);
			throw error;
		    }
		}

	    for (var prop in window)
		if (!(prop in winProps)) {
		    this.framePool[prop] = 0;
		    delete window[prop];
		}
	},

	createMeshes: function(io, names) {
	    for (var m = 0; m < names.length; m++)
		for (io[names[m]] = []; io[names[m]].length < io.gx; 
		     io[names[m]].push(new Float32Array(io.gy)));
	},

	pipeline: function() {
	    return this.outputs;
	},

	pushVars: function() {
	    this.framePool.pushOutputs(this.initialVals);
	    this.framePool.pushInputs(this.inputs);
	    this.framePool.pushQs(this.initialQs);
	},
	    
	popVars: function() {
	    var i;
	    for (var p = 0; p < this.framePool.outputs.length; p++) {
		var param = this.framePool.outputs[p];
		var internal = OutputParamMap[param];
		var container = this.outputs;
		var paramParts = internal[0].split(".");
		for (i = 0; i < paramParts.length - 1; i++)
		    container = container[paramParts[i]];
		container[paramParts[i]] = internal[2](this.framePool[param]);
	    }
	},

	runPerPixelCode: function() {
	    this.framePool.transferQs(this.pixelPool);
	    this.pixelPool.pushInputs(this.inputs)
	    for (var x = 0; x < this.inputs.gx; x++)
		for (var y = 0; y < this.inputs.gy; y++) {
		    this.pixelPool.x = this.inputs.origx[x][y];
		    this.pixelPool.y = this.inputs.origy[x][y];
		    this.pixelPool.rad = this.inputs.origrad[x][y];
		    this.pixelPool.ang = this.inputs.origtheta[x][y];
		    this.per_pixel_code(this.pixelPool);
		    this.outputs.zoom_mesh[x][y] = this.pixelPool.zoom;
		    this.outputs.zoomexp_mesh[x][y] = this.pixelPool.zoomexp;
		    this.outputs.rot_mesh[x][y] = this.pixelPool.rot;
		    this.outputs.warp_mesh[x][y] = this.pixelPool.warp;
		    this.outputs.cx_mesh[x][y] = this.pixelPool.cx;
		    this.outputs.cy_mesh[x][y] = this.pixelPool.cy;
		    this.outputs.dx_mesh[x][y] = this.pixelPool.dx;
		    this.outputs.dy_mesh[x][y] = this.pixelPool.dy;
		    this.outputs.sx_mesh[x][y] = this.pixelPool.sx;
		    this.outputs.sy_mesh[x][y] = this.pixelPool.sy;
		}
	},
	
	runCustomWaveCode: function() {
	    for (var w = 0; w < this.customWaves.length; w++) {
		var wave = this.customWaves[w];
		this.framePool.transferQs(wave.framePool);
		wave.framePool.pushInputs(this.inputs);
		wave.runCode();
	    }
	},

	runCustomShapeCode: function() {
	    for (var s = 0; s < this.customShapes.length; s++) {
		var shape = this.customShapes[s];
		this.framePool.transferQs(shape.framePool);
		shape.framePool.pushInputs(this.inputs);
		shape.runCode();
	    }
	},

	initMesh: function(mesh) { // should we init from framepool or initialvals?
	    var key = mesh + "_mesh";
	    var val = this.framePool[mesh];
	    for (var x = 0; x < this.inputs.gx; x++)
		for (var y = 0; y < this.inputs.gy; y++)
		    this.outputs[key][x][y] = val;
	    this.pixelPool[mesh] = this.framePool[mesh];
	},

	initPerPixelMeshes: function() {
	    this.initMesh("cx");
	    this.initMesh("cy");
	    this.initMesh("sx");
	    this.initMesh("sy");
	    this.initMesh("dx");
	    this.initMesh("dy");
	    this.initMesh("zoom");
	    this.initMesh("zoomexp");
	    this.initMesh("rot");
	    this.initMesh("warp");
	},
	
	Render: function(music, context) {

	    this.inputs.bass = music.bass;
	    this.inputs.mid = music.mid;
	    this.inputs.treb = music.treb;
	    this.inputs.bass_att = music.bass_att;
	    this.inputs.mid_att = music.mid_att;
	    this.inputs.treb_att = music.treb_att;
	    this.inputs.fps = context.fps;
	    this.inputs.time = context.time;
	    this.inputs.frame = context.frame;
	    this.inputs.progress = context.progress;
	    this.inputs.meshx = this.inputs.gx;
	    this.inputs.meshy = this.inputs.gy;
	    this.inputs.aspectx = 1;
	    this.inputs.aspecty = 1;

	    this.pushVars();
	    this.per_frame_code(this.framePool);
	    this.initPerPixelMeshes();
	    this.runPerPixelCode();
	    this.runCustomWaveCode();
	    this.runCustomShapeCode();
	    this.popVars();

	    this.PerPixelMath(context);
	    this.outputs.drawables = [];
	    this.outputs.drawables.push(this.outputs.mv);
	    for (i = 0; i < this.customShapes.length; i++)
		if (this.customShapes[i].enabled)
		    this.outputs.drawables.push(this.customShapes[i]);
	    for (i = 0; i < this.customWaves.length; i++)
		if (this.customWaves[i].enabled)
		    this.outputs.drawables.push(this.customWaves[i]);
	    this.outputs.drawables.push(this.outputs.wave);
	    if (this.outputs.bDarkenCenter)
		this.outputs.drawables.push(this.outputs.darkenCenter);
	    this.outputs.drawables.push(this.outputs.border);
	    
	    this.outputs.compositeDrawables = [];
	    this.outputs.compositeDrawables.push(this.outputs.videoEcho);
	    if (this.outputs.bBrighten)
		this.outputs.compositeDrawables.push(this.outputs.brighten);
	    if (this.outputs.bDarken)
		this.outputs.compositeDrawables.push(this.outputs.darken);
	    if (this.outputs.bSolarize)
		this.outputs.compositeDrawables.push(this.outputs.solarize);
	    if (this.outputs.bInvert)
		this.outputs.compositeDrawables.push(this.outputs.invert);
	},

	PerPixelMath: function (context) {
	    
	    var x, y, fZoom2, fZoom2Inv;

	    for (x = 0; x < this.outputs.gx; x++)
		for (y = 0; y < this.outputs.gy; y++) {
		    fZoom2 = Math.pow(this.outputs.zoom_mesh[x][y], 
				      Math.pow(this.outputs.zoomexp_mesh[x][y],
					       this.outputs.rad_mesh[x][y] * 2.0 - 1.0));
		    fZoom2Inv = 1.0 / fZoom2;
		    this.outputs.x_mesh[x][y] = this.outputs.orig_x[x][y] * 0.5 * fZoom2Inv + 0.5;
		    this.outputs.y_mesh[x][y] = this.outputs.orig_y[x][y] * 0.5 * fZoom2Inv + 0.5;
		}
	

	    for (x = 0; x < this.outputs.gx; x++)
		for (y = 0; y < this.outputs.gy; y++)
		    this.outputs.x_mesh[x][y] = (this.outputs.x_mesh[x][y] - this.outputs.cx_mesh[x][y]) / this.outputs.sx_mesh[x][y] + this.outputs.cx_mesh[x][y];
		

	    for (x = 0; x < this.outputs.gx; x++)
		for (y = 0; y < this.outputs.gy; y++)
		    this.outputs.y_mesh[x][y] = (this.outputs.y_mesh[x][y] - this.outputs.cy_mesh[x][y]) / this.outputs.sy_mesh[x][y] + this.outputs.cy_mesh[x][y];


	    var fWarpTime = context.time * this.outputs.fWarpAnimSpeed;
	    var fWarpScaleInv = 1.0 / this.outputs.fWarpScale;
	    var f = [11.68 + 4.0 * Math.cos(fWarpTime * 1.413 + 10),
		     8.77 + 3.0 * Math.cos(fWarpTime * 1.113 + 7),
		     10.54 + 3.0 * Math.cos(fWarpTime * 1.233 + 3),
		     11.49 + 4.0 * Math.cos(fWarpTime * 0.933 + 5)];
	    
	    for (x = 0; x < this.outputs.gx; x++)
		for (y = 0; y < this.outputs.gy; y++) {
		    this.outputs.x_mesh[x][y] += this.outputs.warp_mesh[x][y] * 0.0035 * Math.sin(fWarpTime * 0.333 + fWarpScaleInv * (this.outputs.orig_x[x][y] * f[0] - this.outputs.orig_y[x][y] * f[3]));
		    this.outputs.y_mesh[x][y] += this.outputs.warp_mesh[x][y] * 0.0035 * Math.cos(fWarpTime * 0.375 - fWarpScaleInv * (this.outputs.orig_x[x][y] * f[2] + this.outputs.orig_y[x][y] * f[1]));
		    this.outputs.x_mesh[x][y] += this.outputs.warp_mesh[x][y] * 0.0035 * Math.cos(fWarpTime * 0.753 - fWarpScaleInv * (this.outputs.orig_x[x][y] * f[1] - this.outputs.orig_y[x][y] * f[2]));
		    this.outputs.y_mesh[x][y] += this.outputs.warp_mesh[x][y] * 0.0035 * Math.sin(fWarpTime * 0.825 + fWarpScaleInv * (this.outputs.orig_x[x][y] * f[0] + this.outputs.orig_y[x][y] * f[3]));
		}

	    for (x = 0; x < this.outputs.gx; x++)
		for (y = 0; y < this.outputs.gy; y++) {
		    var u2 = this.outputs.x_mesh[x][y] - this.outputs.cx_mesh[x][y];
		    var v2 = this.outputs.y_mesh[x][y] - this.outputs.cy_mesh[x][y];

		    var cos_rot = Math.cos(this.outputs.rot_mesh[x][y]);
		    var sin_rot = Math.sin(this.outputs.rot_mesh[x][y]);

		    this.outputs.x_mesh[x][y] = u2 * cos_rot - v2 * sin_rot + this.outputs.cx_mesh[x][y];
		    this.outputs.y_mesh[x][y] = u2 * sin_rot + v2 * cos_rot + this.outputs.cy_mesh[x][y];
		}

	    for (x = 0; x < this.outputs.gx; x++)
		for (y = 0; y < this.outputs.gy; y++)
		    this.outputs.x_mesh[x][y] -= this.outputs.dx_mesh[x][y];

	    for (x = 0; x < this.outputs.gx; x++)
		for (y = 0; y < this.outputs.gy; y++)
		    this.outputs.y_mesh[x][y] -= this.outputs.dy_mesh[x][y];

	}


    });


var wFunction = function(f) { 
    if (typeof f == "function")
	return f;
    return function () {};
}

var wArray = function(a) {
    return a;
}
	
var OutputParamMap = {
    frating: ["fRating", null, Number],
    gamma: ["fGammaAdj", null, Number],
    fgammaadj: ["fGammaAdj", null, Number, "gamma"],
    echo_zoom: ["videoEcho.zoom", null, Number],
    fvideoechozoom: ["videoEcho.zoom", null, Number, "echo_zoom"],
    echo_alpha: ["videoEcho.a", null, Number],
    fvideoechoalpha: ["videoEcho.a", null, Number, "echo_alpha"],
    wave_r: ["wave.r", null, Number],
    wave_g: ["wave.g", null, Number],
    wave_b: ["wave.b", null, Number],
    wave_a: ["wave.a", null, Number],
    wave_x: ["wave.x", null, Number],
    wave_y: ["wave.y", null, Number],
    fwavealpha: ["wave.a", null, Number,"wave_a"],
    fwavescale: ["wave.scale", null, Number],
    fwavesmoothing: ["wave.smoothing", null, Number],
    fmodwavealphastart: ["wave.modOpacityStart", null, Number],
    fmodwavealphaend: ["wave.modOpacityEnd", null, Number],
    wave_mode: ["wave.mode", null, Number],
    nwavemode: ["wave.mode", null, Number, "wave_mode"],
    wave_additive: ["wave.additive", null, Boolean],
    badditivewaves: ["wave.additive", null, Boolean, "wave_additive"],
    bmodwavealphabyvolume: ["wave.modulateAlphaByVolume", null, Boolean],
    wave_brighten: ["wave.maximizeColors", null, Boolean],
    bmaximizewavecolor: ["wave.maximizeColors", null, Boolean],
    wave_dots: ["wave.dots", null, Boolean, "wave_usedots"],
    wave_usedots: ["wave.dots", null, Boolean],
    bwavedots: ["wave.dots", null, Boolean, "wave_usedots"],
    wave_thick: ["wave.thick", null, Boolean],
    bwavethick: ["wave.thick", null, Boolean, "wave_thick"],
    wave_mystery: ["wave.mystery", null, Number],
    fWaveParam: ["wave.mystery", null, Number, "wave_mystery"],
    fwarpanimspeed: ["fWarpAnimSpeed", null, Number],
    fwarpscale: ["fWarpScale", null, Number],
    fshader: ["fShader", null, Number],
    decay: ["screenDecay", null, Number],
    fdecay: ["screenDecay", null, Number, "decay"],
    echo_orient: ["videoEcho.orientation", null, Number],
    nvideoechoorientation: ["videoEcho.orientation", null, Number, "echo_orient"],
    wrap: ["textureWrap", null, Boolean],
    btexwrap: ["textureWrap", null, Boolean, "wrap"],
    darken_center: ["bDarkenCenter", null, Boolean],
    bdarkencenter: ["bDarkenCenter", null, Boolean, "darken_center"],
    bredbluestereo: ["bRedBlueStereo", null, Boolean],
    brighten: ["bBrighten", null, Boolean],
    bbrighten: ["bBrighten", null, Boolean, "brighten"],
    darken: ["bDarken", null, Boolean],
    bdarken: ["bDarken", null, Boolean, "darken"],
    solarize: ["bSolarize", null, Boolean],
    bsolarize: ["bSolarize", null, Boolean, "solarize"],
    invert: ["bInvert", null, Boolean],
    binvert: ["bInvert", null, Boolean, "invert"],
    bmotionvectorson: ["bMotionVectorsOn", null, Boolean],
    warp: ["warp", "warp_mesh", Number],
    zoom: ["zoom", "zoom_mesh", Number],
    rot: ["rot", "rot_mesh", Number],
    zoomexp: ["zoomexp", "zoomexp_mesh", Number],
    fzoomexponent: ["zoomexp", "zoomexp_mesh", Number,"zoomexp"],
    cx: ["cx", "cx_mesh", Number],
    cy: ["cy", "cy_mesh", Number],
    dx: ["dx", "dx_mesh", Number],
    dy: ["dy", "dy_mesh", Number],
    sx: ["sx", "sx_mesh", Number],
    sy: ["sy", "sy_mesh", Number],
    ob_size: ["border.outer_size", null, Number],
    ob_r: ["border.outer_r", null, Number],
    ob_g: ["border.outer_g", null, Number],
    ob_b: ["border.outer_b", null, Number],
    ob_a: ["border.outer_a", null, Number],
    ib_size: ["border.inner_size",  null, Number],
    ib_r: ["border.inner_r",  null, Number],
    ib_g: ["border.inner_g",  null, Number],
    ib_b: ["border.inner_b",  null, Number],
    ib_a: ["border.inner_a",  null, Number],
    mv_r: ["mv.r",  null, Number],
    mv_g: ["mv.g",  null, Number],
    mv_b: ["mv.b",  null, Number],
    mv_a: ["mv.a",  null, Number],
    mv_x: ["mv.x_num",  null, Number],
    nmotionvectorsx: ["mv.x_num",  null, Number, "mv_x"],
    mv_y: ["mv.y_num",  null, Number],
    nmotionvectorsy: ["mv.y_num",  null, Number, "mv_y"],
    mv_l: ["mv.length",  null, Number],
    mv_dy: ["mv.x_offset", null, Number],
    mv_dx: ["mv.y_offset",  null, Number],
    init_code: ["init_code", null, wFunction],
    per_frame_code: ["per_frame_code", null, wFunction],
    per_pixel_code: ["per_pixel_code", null, wFunction],
    shapes: ["customShapes", null, wArray],
    waves: ["customWaves", null, wArray],
    tmpvars: ["tmpvars", null, wArray]
    
}

var InputParamMap = {
  time: ["time",  null, Number],
  bass: ["bass",  null, Number],
  mid: ["mid",  null, Number],
  treb: ["treb",  null, Number],
  bass_att: ["bass_att",  null, Number],
  mid_att: ["mid_att",  null, Number],
  treb_att: ["treb_att",  null, Number],
  frame: ["frame", null, Number],
  progress: ["progress",  null, Number],
  fps: ["fps", null, Number],
  x: ["x_per_pixel", "origx", Number],
  y: ["y_per_pixel", "origy", Number],  
  ang: ["ang_per_pixel", "origtheta", Number],
  rad: ["rad_per_pixel", "origrad", Number],
  meshx: ["gx", null, Number],
  meshy: ["gy", null, Number]
}

     
		
