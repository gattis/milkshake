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

var Music = Class.extend({
	init: function () {
	    this.vol_instant = 0;
	    this.vol_history = 0;
	    this.vol_buffer = new Float32Array(80);
	    this.beat_buffer_pos = 0;
	    this.beat_instant = new Float32Array(32);
	    this.beat_history = new Float32Array(32);
	    this.beat_val = new Float32Array(32);
	    this.beat_variance = new Float32Array(32);
	    this.beat_buffer = []
	    for (var i = 0; i < 32; i++)
		this.beat_buffer.push(new Float32Array(80));

	    this.beat_sensitivity = 10.0;
	    this.vol = 0;
	    this.vol_old = 0;

	    this.numsamples = 512;

	    this.PCML = new Float32Array(this.numsamples);
	    this.PCMR = new Float32Array(this.numsamples);
	    
	    this.pcmdataL = new Float32Array(this.numsamples);
	    this.pcmdataR = new Float32Array(this.numsamples);

	},
	
	reset: function() {
	    this.bass = 0;
	    this.mid = 0;
	    this.treb = 0;
	    this.bass_att = 0;
	    this.mid_att = 0;
	    this.treb_att = 0;

	},

	addPCM: function(left, right) {

	    if (this.numsamples == left.length && this.numsamples.right == right.length)
		for (var i = 0; i < this.numsamples; i++) {
		    this.PCML[i] = left[i];
		    this.PCMR[i] = right[i];
		}
	    else { // assume 256 samples and interpolate
		for (var i = 0; i < 255; i++) {
		    this.PCML[2*i] = left[i];
		    this.PCML[2*i+1] = (left[i] + left[i+1]) / 2;
		    this.PCMR[2*i] = right[i];
		    this.PCMR[2*i+1] = (right[i] + right[i+1]) / 2;
		}
		this.PCML[510] = this.PCML[511] = left[255];
		this.PCMR[510] = this.PCMR[511] = right[255];
	    }


	    for (var i = 0; i < this.numsamples; i++) {
		this.pcmdataL[i] = this.PCML[this.numsamples - 1 - i];
		this.pcmdataR[i] = this.PCMR[this.numsamples - 1 - i];
	    }
	},

	detectFromSamples: function() {

	    this.vol_old = this.vol;
	    this.bass = 0; this.mid = 0; this.treb = 0;
	    var linear = 0;
	    var i,j;
	    var temp2 = 0;
	    this.vol_instant = 0;
	    for (i = 0; i < 16; i++) {
		this.beat_instant[i] = 0;
		for (j = linear * 2; j < (linear + 8 + i) * 2; j++) {
		    this.beat_instant[i] += ((this.pcmdataL[j] * this.pcmdataL[j]) + (this.pcmdataR[j] * this.pcmdataR[j]))/(8 + i);
		    this.vol_instant += ((this.pcmdataL[j] * this.pcmdataL[j]) + (this.pcmdataR[j] * this.pcmdataR[j]))/512;
		}
		linear = j / 2;
		this.beat_history[i] -= this.beat_buffer[i][this.beat_buffer_pos] * 0.0125;
		this.beat_buffer[i][this.beat_buffer_pos] = this.beat_instant[i];
		this.beat_history[i] += this.beat_instant[i] * 0.0125;
		this.beat_val[i] = this.beat_instant[i] / this.beat_history[i];
	    }

	    this.vol_history -= this.vol_buffer[this.beat_buffer_pos] * 0.0125;
	    this.vol_buffer[this.beat_buffer_pos] = this.vol_instant;
	    this.vol_history += this.vol_instant * 0.0125;

	    this.mid = 0;
	    for (i = 1; i < 10; i++) {
		this.mid += this.beat_instant[i];
		temp2 += this.beat_history[i];
	    }
	    this.mid = this.mid / (1.5 * temp2);

	    temp2 = 0;
	    this.treb = 0;
	    for (i = 10; i < 16; i++) {
		this.treb += this.beat_instant[i];
		temp2 += this.beat_history[i];
	    }
	    this.treb = this.treb / (1.5 * temp2);
	    this.vol = this.vol_instant / (1.5 * this.vol_history);
	    this.bass = this.beat_instant[0] / (1.5 * this.beat_history[0]);

	    if (!isFinite(this.treb))
		this.treb = 0;

	    if (!isFinite(this.mid))
		this.mid = 0;

	    if (!isFinite(this.bass))
		this.bass = 0;

	    this.treb_att = 0.6 * this.treb_att + 0.4 * this.treb;
	    this.mid_att = 0.6 * this.mid_att + 0.4 * this.mid;
	    this.bass_att = 0.6 * this.bass_att + 0.4 * this.bass;

	    if (this.bass_att > 100) this.bass_att = 100;
	    if (this.bass > 100) this.bass = 100;
	    if (this.mid_att > 100) this.mid_att = 100;
	    if (this.mid > 100) this.mid = 100;
	    if (this.treb_att > 100) this.treb_att = 100;
	    if (this.treb > 100) this.treb = 100;
	    if (this.vol > 100) this.vol = 100;

	    this.beat_buffer_pos++;
	    if (this.beat_buffer_pos > 79) this.beat_buffer_pos = 0;

	},

	getPCM: function(PCMdata, samples, channel, freq, smoothing) {
	    PCMd = (channel == 0) ? this.PCML : this.PCMR;
	    
	    PCMdata[0] = PCMd[this.numsamples - 1];
	    for (var i = 1; i < samples; i++)
		PCMdata[i] = (1 - smoothing)*PCMd[this.numsamples - 1 - i] + smoothing * PCMdata[i-1];
	    if (freq)
		throw Error("fourier transform not implemented");
		//this.rdft(samples, PCMdata);
	},
	
		       
    });
