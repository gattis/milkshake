var HTML5Audio = Class.extend({
	init: function () {
	    this.context = null;
	    this.source = null;

	    if (typeof webkitAudioContext != "undefined")
		this.audioAPI = new WebkitHTML5Audio();
	    else
		this.audioAPI = new MozAudioAPI();
	}
    });

var WebkitAudioAPI = Class.extend({

	init: function() {
	    
		this.context = new webkitAudioContext();   
		this.source = context.createBufferSource();
		this.processor = context.createJavaScriptNode(512);
		this.processor.onaudioprocess = this.audioAvailable;
		this.source.connect(processor);
		this.processor.connect(context.destination);
		this.loadSample("song.ogg");

	},
	
	loadSample: function(url) {

	    var request = new XMLHttpRequest();
	    request.open("GET", url, true);
	    request.responseType = "arraybuffer";
	
	    request.onload = function() {
		this.context.decodeAudioData(request.response, function(buffer) {
			this.source.buffer = buffer;
			this.source.looping = true;
			this.source.noteOn(0);
		    });
	    }
	    request.send();
	},

	audioAvailable: function(event) {
	
	    var inputArrayL = event.inputBuffer.getChannelData(0);
	    var inputArrayR = event.inputBuffer.getChannelData(1);
	    var outputArrayL = event.outputBuffer.getChannelData(0);
	    var outputArrayR = event.outputBuffer.getChannelData(1);  
	    var n = inputArrayL.length;
	
	    for (var i = 0; i < n; ++i) {
		outputArrayL[i] = inputArrayL[i];
		outputArrayR[i] = inputArrayR[i];
	    }
	
	    if (typeof shaker != "undefined")
		shaker.music.addPCM(inputArrayL, inputArrayR);
	}
    });

var MozAudioAPI = Class.extend({

	init: function() {
	    this.context = new Audio();
	    this.context.src = "song.ogg";
	    this.context.addEventListener('MozAudioAvailable', this.audioAvailable);
	    this.context.addEventListener('loadedmetadata', this.loadedMetadata, false);
	    this.context.play();
	},

	loadedMetadata: function () {
	    this.channels = this.context.mozChannels;
	    this.rate = this.context.mozSampleRate;
	    this.frameBufferLength = this.context.mozFrameBufferLength;
	},
    
	audioAvailable: function (event) {	
	    var fb = event.frameBuffer;
	    var signalL = new Float32Array(fb.length / 2);
	    var signalR = new Float32Array(fb.length / 2);
	    for (var i = 0; i < this.frameBufferLength / 2; i++) {
		signalL[i] = fb[2*i];
		signalR[i] = fb[2*i+1];
	    }
	    
	    if (typeof shaker != "undefined")
		shaker.music.addPCM(signalL, signalR);
	}
	
    });