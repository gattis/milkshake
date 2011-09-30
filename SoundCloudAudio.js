
var SoundCloudAudio = Class.extend({

	clientId: "4d9749247dccda26471f3fa442daa07d",

	init: function () {

	    this.tracks = [];
	    this.trackPos = 0;

	    this.playlistURL = "http://soundcloud.com/mattgattis/favorites";
	    var args = window.location.search.substring(1).split("&");
	    for (var i = 0; i < args.length; i++) {
		var arg = args[i].split("=");
		if (arg[0] == "tracks") {
		    this.playlistURL = unescape(arg[1]);
		    break;
		}
	    }

	    var smjs = document.createElement("script");
	    smjs.type = "text/javascript";

	    milk.soundCloudJSONCallback = this.gotStreamURL;
	    smjs.onload = function() {
		soundManager.url = "SoundManager2/";
		soundManager.usePolicyFile = true;
		soundManager.flashVersion = 9;
		soundManager.useHTML5Audio = false;
		soundManager.useFlashBlock = false;
		soundManager.useHighPerformance = true;
		soundManager.wmode = 'transparent';
		soundManager.useFastPolling = true;
		soundManager.useWaveformData = true;
		soundManager.onready(function() {
			var jsonp = document.createElement("script");
			jsonp.type = "text/javascript";
			jsonp.src = "http://api.soundcloud.com/resolve.json?url=" + escape(audio.playlistURL) + 
			            "&client_id=" + audio.clientId + "&callback=milk.soundCloudJSONCallback";
			document.body.appendChild(jsonp);
		});
	    };
	    smjs.src = "SoundManager2/soundmanager2.js";
	    document.body.appendChild(smjs);
	},
	
	gotStreamURL: function(response) {
	    var songs;
	    if ("tracks" in response)
		songs = response.tracks;
	    else if (0 in response)
		songs = response;
	    else
		songs = [response];
	    audio.songs = songs;

	    for (var i = 0; i < songs.length; i++) {
		var song = songs[i];
		var url = song.stream_url + ((song.stream_url.indexOf("?") == -1) ? "?" : "&") + "client_id=" + audio.clientId;
		var trackId = "track_" + song.id;
		audio.tracks.push(trackId);
		
		soundManager.createSound({
			id: trackId,
			url: url,
			autoPlay: (i == 0),
			useWaveformData: true,
			whileplaying: function() {
			    if (typeof shaker != "undefined") {
				var left = this.waveformData.left;
				var right = this.waveformData.right;
				for (i = 0; i < 256; i++) {
				    left[i] = parseFloat(left[i]);
				    right[i] = parseFloat(right[i]);
				}
				shaker.music.addPCM(left, right);
			    }
			},
			onplay: function() {
			    var s = audio.songs[audio.trackPos];
			    shaker.infoMessages["SoundCloud"] = "music courtesy of <a href='" +
				s.user.permalink_url + "'>" + s.user.username + "</a>" + 
				" - <a href='" + s.permalink_url + "'>" + s.title + "</a> - " +
				"powered by <a href='http://soundcloud.com/'>soundcloud</a>";
			},
			onfinish: function() {
			    soundManager.stopAll();
			    if (audio.trackPos < audio.tracks.length - 1)
				audio.trackPos++;
			    soundManager.play(audio.tracks[audio.trackPos]);
			}
		 });
	    }
    
	},

	updateInfoBox: function(info) {
	    this.infoBox.innerHTML = info;
	}
	    
	  
    });