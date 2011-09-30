var Shaker = Class.extend({
	
	init: function() {
	    this.settings = {
		meshX: 32,
		meshY: 24,
		fps: 60,
		textureSize: 1024,
		windowWidth: window.innerWidth,
		windowHeight: window.innerHeight,
		smoothPresetDuration: 5,
		presetDuration: 30,
		beatSensitivity: 10,
		aspectCorrection: true
	    };
	    this.pipelineContext = new PipelineContext();
	    this.pipelineContext2 = new PipelineContext();
	    this.timeKeeper = new TimeKeeper(this.settings.presetDuration);
	    this.music = new Music();
	    if (this.settings.fps > 0)
		this.mspf = Math.floor(1000.0/this.settings.fps);
	    else this.mspf = 0;
	    this.timed = 0;
	    this.timestart = 0;
	    this.count = 0;
	    this.fpsstart = 0;
 
	    this.renderer = new Renderer(this.settings.windowWidth, this.settings.windowHeight,
					 this.settings.meshX, this.settings.meshY,
					 this.settings.textureSize, this.music);
	    this.running = true;

	    this.presetNames = [];
	    for (var presetName in Presets) {
		this.presetNames.push(presetName);
		Presets[presetName] = new MilkdropPreset(presetName, Presets[presetName], 
							 this.settings.meshX, this.settings.meshY);
	    }

	    this.presetPos = 0;
	    this.activePreset = this.loadPreset();
	    Renderer.SetPipeline(this.activePreset.pipeline());

	    this.matcher = new RenderItemMatcher();
	    this.merger = new MasterRenderItemMerge();
	   
	    this.merger.add(new ShapeMerge());
	    this.merger.add(new BorderMerge());
	    //this.matcher.distanceFunction().addMetric(new ShapeXYDistance());
	    
	    this.reset();
	    this.renderer.reset(this.settings.windowWidth, this.settings.windowHeight);

	    this.renderer.correction = this.settings.aspectCorrection;
	    this.music.beat_sensitivity = this.settings.beatSensitivity;

	    this.infoMessages = {};
	    this.infoBoxPos = -1;
	    this.createInfoBox();
	    this.timeKeeper.StartPreset();

	},

	reset: function() {
	    this.mspf = 0;
	    this.timed = 0;
	    this.timestart = 0;
	    this.count = 0;
	    this.fpsstart = 0;
	    this.music.reset();	    
	},

	renderFrame: function() {
	    this.timestart = TimeKeeper.getTicks(this.timeKeeper.startTime);
	    this.timeKeeper.UpdateTimers();
	    this.mspf = Math.floor(1000.0/this.settings.fps);
	    this.pipelineContext.time = this.timeKeeper.GetRunningTime();
	    this.pipelineContext.frame = this.timeKeeper.PresetFrameA();
	    this.pipelineContext.progress = this.timeKeeper.PresetProgressA();
	    this.music.detectFromSamples();

	    /*if (this.renderer.noSwitch == false && !this.havePresets()) {
		if (this.timeKeeper.PresetProgressA() >= 1.0 && !this.timeKeeper.IsSmoothing())
		    this.selectNext(false);
		else if ((this.music.vol - this.music.vol_old > this.music.beat_sensitivity) &&
		          this.timeKeeper.CanHardCut())
		    this.selectNext(true);
	    }
	    if (this.timeKeeper.IsSmoothing() && this.timeKeeper.SmoothRatio() <= 1.0 && !this.havePresets()){
		this.activePreset.Render(this.music, this.pipelineContext);
		this.evaluateSecondPreset();
		var pipeline = new Pipeline();
		pipeline.setStaticPerPixel(this.settings.meshX, this.settings.meshY);
		PipelineMerger.mergePipelines(this.activePreset.pipeline(), this.activePreset2.pipeline(), pipeline,
					      this.matcher.matchResults(), this.merger, this.timeKeeper.SmoothRatio());
		this.renderer.RenderFrame(pipeline, this.pipelineContext);
		pipeline.drawables.clear();
	    } else {
		if (this.timeKeeper.IsSmoothing() && this.timeKeeper.SmoothRatio() > 1.0) {
		    this.activePreset = this.activePreset2;
		    this.timeKeeper.EndSmoothing();
		}
		this.activePreset.Render(this.music, this.pipelineContext);
		this.renderer.RenderFrame(this.activePreset.pipeline(), this.pipelineContext);
		}*/
	    
	    this.activePreset.Render(this.music, this.pipelineContext);
	    this.renderer.RenderFrame(this.activePreset.pipeline(), this.pipelineContext);
	    

	    this.count++;
	    if (this.count % 100 == 0) {
		this.renderer.realfps = 100.0/((TimeKeeper.getTicks(this.timeKeeper.startTime)-this.fpsstart)/1000);
		this.infoMessages["fps"] = "rendering at " + Math.round(this.renderer.realfps*100)/100 + " frames per second";
		this.fpsstart = TimeKeeper.getTicks(this.timeKeeper.startTime);
	    }
	    if (this.count % 400 == 0)
		this.renderInfoBox();

	    var timediff = TimeKeeper.getTicks(this.timeKeeper.startTime) - this.timestart;
	    if (timediff < this.mspf)
		return Math.floor(this.mspf-timediff);
	    return 0;

	},

	evaluateSecondPreset: function () {
	    this.pipelineContext2.time = this.timeKeeper.GetRunningTime();
	    this.pipelineContext2.frame = this.timeKeeper.PresetFrameB();
	    this.pipelineContext2.progress = this.timeKeeper.PresetProgressB();
	    this.m_activePreset2.Render(this.music, this.pipelineContext2);
	},

	selectNext: function(hardCut) {
	    if (this.presetPos >= this.presetNames.length - 1) return;
	    if (!hardCut)
		this.timeKeeper.StartSmoothing();
	    this.presetPos++;
	    if (!hardCut)
		this.activePreset2 = this.switchPreset();
	    else {
		this.activePreset = this.switchPreset();
		this.timeKeeper.StartPreset();
	    }
	    this.presetSwitchedEvent(hardCut, this.presetPos);
	},

	switchPreset: function() {
	    var targetPreset = this.loadPreset();
	    Renderer.SetPipeline(targetPreset.pipeline());
	    return targetPreset;
	},

	loadPreset: function() {
	    var preset = Presets[this.presetNames[this.presetPos]];
	    return preset;
	},

	havePresets: function() {
	    return this.presetPos < this.presetNames.length - 1;
	},	    

	presetSwitchedEvent: function() {

	},

	createInfoBox: function() {

	    this.infoBox = document.createElement('div');
            this.infoBox.style.position = "absolute";
            this.infoBox.style.height = "0px";
            this.infoBox.style.width = (canvas.width - 80) + "px";
	    this.infoBox.style.left = (canvas.offsetLeft + 30) + "px";
            this.infoBox.style.top = (canvas.offsetTop + canvas.offsetHeight - 60) + "px";

            this.infoBox.style.fontSize = "9pt";
            this.infoBox.style.fontFamily = "Lucida Grande";
	    this.infoBox.style.fontWeight = "bold";
            this.infoBox.style.paddingLeft = "20px";
            this.infoBox.style.paddingTop = "5px";
            this.infoBox.style.paddingBottom = "5px";
	    this.infoBox.style.borderRadius = "3px";
	    this.infoBox.style.textAlign = "center";

            this.infoBox.style.backgroundColor = "rgba(255,255,255,0.5)";

	    
        },

	renderInfoBox: function() {
	    if (this.infoBoxPos == -1 && Object.keys(this.infoMessages).length > 0) {
		this.infoBoxPos = 0;
		document.body.appendChild(this.infoBox);
		this.infoMessages["ShamelessPlug"] = "fork me on <a href='http://github.com/gattis/milkshake'>github</a>!";
		this.infoMessages["ChooseTracks"] = "<a href='bookmarklet.html'>Choose Audio Tracks</a>";
	    }
	    if (this.infoBoxPos > -1) {
		this.infoBox.style.height = "15px";
		this.infoBox.innerHTML = this.infoMessages[Object.keys(this.infoMessages)[this.infoBoxPos]];
		this.infoBoxPos++;
		if (this.infoBoxPos == Object.keys(this.infoMessages).length)
		    this.infoBoxPos = 0;
	    }
	}
	
	
    });