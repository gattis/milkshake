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

var TimeKeeper = Class.extend({
	init: function(presetDuration, smoothDuration) {
	    this.smoothDuration = smoothDuration;
	    this.presetDuration = presetDuration;
	    this.startTime = new Date();
	    this.UpdateTimers();
	},

	UpdateTimers: function() {
	    this.currentTime = TimeKeeper.getTicks(this.startTime) * 0.001;
	    this.presetFrameA++;
	    this.presetFrameB++;
	},

	StartPreset: function() {
	    this.isSmoothing = false;
	    this.presetTimeA = this.currentTime;
	    this.presetFrameA = 1;
	    this.presetDurationA = this.sampledPresetDuration();
	},

	StartSmoothing: function() {
	    this.isSmoothing = true;
	    this.presetTimeB = this.currentTime;
	    this.presetFrameB = 1;
	    this.presetDurationB = this.sampledPresetDuration();
	},
	
	EndSmoothing: function() {
	    this.isSmoothing = false;
	    this.presetTimeA = this.presetTimeB;
	    this.presetFrameA = this.presetFrameB;
	    this.presetDurationA = this.presetDurationB;
	},

	CanHardCut: function() {
	    return ((this.currentTime - this.presetTimeA) > 3)
	},

	SmoothRatio: function() {
	    return (this.currentTime - this.presetTime) / this.smoothDuration;
	},

	IsSmoothing: function() {
	    return this.isSmoothing;
	},

	GetRunningTime: function() {
	    return this.currentTime;
	},

	PresetProgressA: function() {
	    if (this.isSmoothing) return 1.0;
	    else return (this.currentTime - this.presetTimeA) / this.presetDurationA;
	},

	PresetProgressB: function() {
	    return (this.currentTime - this.presetTimeB) / this.presetDurationB;
	},

	PresetFrameB: function() {
	    return this.presetFrameB;
	},

	PresetFrameA: function() {
	    return this.presetFrameA;
	},

	sampledPresetDuration: function() {
	    return 40;
	    return Math.max(1,Math.min(60, RandomNumberGenerators.gaussian(this.presetDuration)));
	}
    });
	
TimeKeeper.getTicks = function(start) {
    return (new Date()) - start;
}
