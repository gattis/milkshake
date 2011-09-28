
var VariablePool = Class.extend({
	init: function() {
	    this.inputs = [];
	    this.outputs = [];
	    this.addInputs(["time","fps","frame","progress","bass","mid","treb",
			    "bass_att","mid_att","treb_att"]);	    
	    for (i = 1; i <= 32; i++)
		this["q"+i] = 0;
	},

	addInputs: function(ownInputs) {
	    for (var i = 0; i < ownInputs.length; i++) {
		this.inputs.push(ownInputs[i]);
		this[ownInputs[i]] = 0;
	    }
	},

	addOutputs: function(ownOutputs) {
	    for (var i = 0; i < ownOutputs.length; i++) {
		this.outputs.push(ownOutputs[i]);
		this[ownOutputs[i]] = 0;
	    }
	},
	
	pushQs: function(array) {
            for (var i = 1; i <= 32; i++)
                this["q"+i] = array[i-1];
        },

	popQs: function(array) {
            for (var i = 1; i <= 32; i++)
                array[i-1] = this["q"+i];
	},

	transferQs: function(pool) {
            for (var i = 1; i <= 32; i++)
                pool["q"+i] = this["q"+i];
	},

	pushOutputs: function(pool) {
	    for (var i = 0; i < this.outputs.length; i++)
		this[this.outputs[i]] = pool[this.outputs[i]];
	},

	popOutputs: function(pool) {
	    for (var i = 0; i < this.outputs.length; i++)
		pool[this.outputs[i]] = this[this.outputs[i]];
	},

	pushInputs: function(pool) {
	    for (var i = 0; i < this.inputs.length; i++)
		this[this.inputs[i]] = pool[this.inputs[i]];
	},

	cos: Math.cos, sin: Math.sin, tan: Math.tan, asin: Math.asin, acos: Math.acos, atan: Math.atan,
	abs: Math.abs, pow: Math.pow, min: Math.min, max: Math.max, sqrt: Math.sqrt, log: Math.log, 
	above: function(arg1, arg2) { return arg1 > arg2; },
	below: function(arg1, arg2) { return arg1 < arg2; },
	equal: function(arg1, arg2) { return arg1 == arg2; },
	ifcond: function(arg1, arg2, arg3) { return arg1 ? arg2 : arg3; },
	sign: function(arg1) { return (arg1 > 0) - (arg1 < 0); },
	int: function(arg1) { return Math.floor(arg1); },
	sqr: function(arg1) { return Math.pow(arg1, 2); },
	sigmoid: function(arg1, arg2) { return 65534 / (1 + Math.exp(arg1 * arg2 / -32767) - 32767); },
	rand: function(arg1) { return Math.floor(Math.random()*arg1); },
	bor: function(arg1,arg2) { return (arg1 != 0) || (arg2 != 0); },
	band: function(arg1,arg2) { return (arg1 != 0) && (arg2 != 0); },
	bnot: function(arg1) { return arg1 == 0 ? 1 : 0},
	exp: Math.exp, atan2: Math.atan2,
	log10: function(arg1) { return Math.log(arg1,10); },


    });

var PresetVariablePool = VariablePool.extend({
	init: function() {
	    this._super();
	    this.addOutputs(['zoom','zoomexp','rot','warp','cx','cy','dx','dy','sx','sy']);
	    this.addInputs(['meshx','meshy','aspectx','aspecty']);
	}});

var PresetFrameVariablePool = PresetVariablePool.extend({
	init: function () {
	    this._super();
	    this.addOutputs(['wave_x','wave_y','wave_r','wave_g','wave_b','wave_a','wave_mode',
			     'wave_mystery','wave_usedots','wave_thick','wave_additive','wave_brighten',
			     'ob_size','ob_r','ob_g','ob_b','ob_a','ib_size','ib_r','ib_g','ib_b',
			     'ib_a','mv_r','mv_g','mv_b','mv_a','mv_x','mv_y','mv_l','mv_dx','mv_dy',
			     'decay','gamma','echo_zoom','echo_alpha','echo_orient','darken_center',
			     'wrap','invert','brighten','darken','solarize']);
	}});

var PresetPixelVariablePool = PresetVariablePool.extend({
	init: function () {
	    this._super();
	    this.addOutputs(['x','y','rad','ang']);
	}});

var CustomVariablePool = VariablePool.extend({
	init: function() {
	    this._super();
	    this.addOutputs(['r','g','b','a']);
	    for (var i = 1; i <= 8; i++)
		this["t"+i] = 0;
	},

	pushTs: function(array) {
	    for (var i = 1; i <= 8; i++)
		this["t"+i] = array[i-1];
	},
	
	popTs: function(array) {
	    for (var i = 1; i <= 8; i++)
		array[i-1] = this["t"+i];
	},

	transferTs: function(pool) {
            for (var i = 1; i <= 8; i++)
                pool["t"+i] = this["t"+i];
	},
	
    });

var WaveFrameVariablePool = CustomVariablePool.extend({
	init: function () {
	    this._super();
	}});

var WavePointVariablePool = CustomVariablePool.extend({
	init: function() {
	    this._super();
	    this.addOutputs(['x','y','sample','value1','value2']);
	}});

var ShapeFrameVariablePool = CustomVariablePool.extend({
	init: function() {
	    this._super();
	    this.addOutputs(['sides','thick','additive','textured','tex_zoom','tex_ang','x','y','rad',
			     'ang','r2','g2','b2','a2','border_r','border_g','border_b','border_a']);
	}});

