var Presets = {};

Presets["Aderrasi - Blender.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.98,
    fVideoEchoZoom: 0.999997,
    fVideoEchoAlpha: 0.4,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 3.91582,
    fWaveSmoothing: 0.5,
    fWaveParam: -0.4,
    fModWaveAlphaStart: 0.5,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 1e-05,
    dy: 1e-05,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 1.0,
    wave_g: 1.0,
    wave_b: 1.0,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 1.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.005,
    ib_r: 1.0,
    ib_g: 1.0,
    ib_b: 1.0,
    ib_a: 1.0,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      rot = rot - 0.1*min((2-rad)*bass_att,(2-rad)*treb_att);
      grad = sqrt(x*x + y*y)*2;
      dx = dx - 0.02*(1-rad);
      dy = dy + 0.02*(1-rad);
      zoom = zoom - max(grad*(bass/8 - treb/8), 0);
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.9;
      wave_g = 0.9 - 0.5*bass;
      wave_b = 0.9 - 0.5*bass;
      q1 = 0.05*sin(time*1.14);
      q2 = 0.03*sin(time*0.93+2);
      wave_x = wave_x + q1;
      wave_y = wave_y + q2;
    }},
    shapes: [
{enabled: 1,
 sides: 4,
 thickOutline: 0,
 textured: 1,
 ImageUrl: "title.png",
 x: 0.5,
 y: 0.5,
 rad: 1.0,
 ang: 0,
 tex_ang: 0,
 tex_zoom: 0.5,
 r: 1,
 g: 1,
 b: 1,
 a: 1,
 r2: 1,
 g2: 1,
 b2: 1,
 a2: 1,
 border_r: 0,
 border_g: 0,
 border_b: 0,
 border_a: 0,
 per_frame_code: function(_){with(_){
   x = x + q1;
   y = y + q2;
   r = r + 0.9;
   g = 0.9 - 0.5*bass;
   b = 0.9 - 0.5*bass;
   rad = rad + 0.1 * bass_att;
	}}}
    ],
    waves: [
    ],
  };

Presets["bmelgren - Godhead.milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.975,
    fVideoEchoZoom: 1.006596,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 5,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.099998,
    fWaveScale: 1.285749,
    fWaveSmoothing: 0.9,
    fWaveParam: 0.6,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.380217,
    rot: 0.02,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.198054,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      rot=0.1*pow(ang,3);
      zoom=sin(pow(rad,mid))+.8;
    }},
    per_frame_code: function(_){with(_){
      wave_r = bass-1;
      wave_g = mid-1.2;
      wave_b = treb-.5;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Che - Escape.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.95,
    fVideoEchoZoom: 1.000498,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 5,
    bAdditiveWaves: 0,
    bWaveDots: 1,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.000416,
    fWaveScale: 0.608285,
    fWaveSmoothing: 0.9,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 1.0,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.000154,
    fShader: 0.0,
    zoom: 1.000223,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.0,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.15,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.05,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 1.0,
    nMotionVectorsX: 6.4,
    nMotionVectorsY: 14.400005,
    mv_dx: 0.0,
    mv_dy: -0.01,
    mv_l: 0.35,
    mv_r: 0.9,
    mv_g: 0.5,
    mv_b: 0.0,
    mv_a: 1.0,
    per_pixel_code: function(_){with(_){
      zone=below(sin(sin(49*q7)*14*x-sin(36*q7)*14*y),-.2);
      zoom=1+.33*q8*ifcond(zone,-.5+.1*sin(1.08*q6),.5+.1*sin(.96*q6));
      zoomexp=exp(sin(ifcond(zone,q6,-q6)));
      rot=q8*.03*sin(q6+q7+q7*zone);
    }},
    per_frame_code: function(_){with(_){
      // timed sidon sensor
      // le = signal level; desired average value = 2
      le=1.4*bass_att+.1*bass+.5*treb;
      pulse=above(le,th);
      // pulsefreq = running average of interval between last 5 pulses
      pulsefreq=ifcond(equal(pulsefreq,0),2,
      ifcond(pulse,.8*pulsefreq+.2*(time-lastpulse),pulsefreq));
      lastpulse=ifcond(pulse,time,lastpulse);
      // bt = relative time; 0 = prev beat; 1 = expected beat
      bt=(time-lastbeat)/(.5*beatfreq+.5*pulsefreq);
      // hccp = handcicap for th driven by bt
      hccp=(.03/(bt+.2))+.5*ifcond(band(above(bt,.8),below(bt,1.2)),
      (pow(sin((bt-1)*7.854),4)-1),0);
      beat=band(above(le,th+hccp),btblock);
      btblock=1-above(le,th+hccp);
      lastbeat=ifcond(beat,time,lastbeat);
      beatfreq=ifcond(equal(beatfreq,0),2,
      ifcond(beat,.8*beatfreq+.2*(time-lastbeat),beatfreq));
      // th = threshold
      th=ifcond(above(le,th),le+114/(le+10)-7.407,
      th+th*.07/(th-12)+below(th,2.7)*.1*(2.7-th));
      th=ifcond(above(th,6),6,th);
      
      q8=30/fps;
      ccl=ccl+beat;
      minorccl=minorccl+le*q8;
      q7=ccl+.0002*minorccl;
      q6=3.7*ccl+.01*minorccl;
      ob_size=.3+.3*sin(16*ccl+.007*minorccl);
      ib_a=.5+.4*sin(.01*minorccl+ccl);
      wave_r=.7+.3*sin(.04*ccl+.01*minorccl);
      wave_g=.7+.3*sin(.02*ccl+.012*minorccl);
      wave_b=.3+.3*sin(36*ccl+.013*minorccl);
      ib_r=.25+.25*sin(72*ccl+.016*minorccl);
      ib_g=.25+.25*sin(48*ccl+.021*minorccl);
      ib_b=.5+.3*sin(86*ccl)+.2*(.028*minorccl);
      
      echo_alpha=.5+.5*cos(68*ccl+.0041*minorccl);
      echo_zoom=exp(sin(13.7*ccl+.017*minorccl));
      echo_orient=ccl%4;
      
      mvrot=ccl%6;
      mv_r=ifcond(above(mvrot,2),ifcond(above(mvrot,4),.039,
      ifcond(equal(mvrot,3),.137,.835)),ifcond(above(mvrot,1),.651,
      ifcond(equal(mvrot,0),1,.773)));
      mv_g=ifcond(above(mvrot,2),ifcond(above(mvrot,4),.267,
      ifcond(equal(mvrot,3),.886,.176)),ifcond(above(mvrot,1),.804,
      ifcond(equal(mvrot,0),1,.38)));
      mv_b=ifcond(above(mvrot,2),ifcond(above(mvrot,4),.694,
      ifcond(equal(mvrot,3),.776,.851)),ifcond(above(mvrot,1),.114,
      ifcond(equal(mvrot,0),1,.145)));
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Che - Terracarbon Stream.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 1.000499,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 3,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.03074,
    fWaveScale: 0.498516,
    fWaveSmoothing: 0.0,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 1.0,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.000158,
    fShader: 0.0,
    zoom: 1.000223,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.0,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.0,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.1,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.06,
    ib_size: 0.035,
    ib_r: 0.25,
    ib_g: 0.45,
    ib_b: 0.25,
    ib_a: 0.29,
    nMotionVectorsX: 19.199999,
    nMotionVectorsY: 14.400005,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 2.5,
    mv_r: 0.06,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.2,
    per_pixel_code: function(_){with(_){
      dqv=above(x,.5)-above(y,.5);
      rot=sin(sin(rad*(13+5*sin(.01*q2))+.06*q2)*q1*.01);
      zoom=1+ifcond(q3,dqv,1)*.1*sin(7*ang+.03*q2);
      zoom=ifcond(q4,ifcond(below(rad,.8*sqr(sin(.016*q2))),.75+.4*cos(.021*q2),zoom),zoom);
    }},
    init_code: function(_){with(_){
      dle=1;
    }},
    per_frame_code: function(_){with(_){
      // timed sidon sensor
      // le = signal level; desired average value = 2
      le=1.4*bass_att+.1*bass+.5*treb;
      pulse=above(le,th);
      // pulsefreq = running average of interval between last 5 pulses
      pulsefreq=ifcond(equal(pulsefreq,0),2,
      ifcond(pulse,.8*pulsefreq+.2*(time-lastpulse),pulsefreq));
      lastpulse=ifcond(pulse,time,lastpulse);
      // bt = relative time; 0 = prev beat; 1 = expected beat
      bt=(time-lastbeat)/(.5*beatfreq+.5*pulsefreq);
      // hccp = handcicap for th driven by bt
      hccp=(.03/(bt+.2))+.5*ifcond(band(above(bt,.8),below(bt,1.2)),
      (pow(sin((bt-1)*7.854),4)-1),0);
      beat=band(above(le,th+hccp),btblock);
      btblock=1-above(le,th+hccp);
      lastbeat=ifcond(beat,time,lastbeat);
      beatfreq=ifcond(equal(beatfreq,0),2,
      ifcond(beat,.8*beatfreq+.2*(time-lastbeat),beatfreq));
      // th = threshold
      th=ifcond(above(le,th),le+114/(le+10)-7.407,
      th+th*.07/(th-12)+below(th,2.7)*.1*(2.7-th));
      th=ifcond(above(th,6),6,th);
      thccl=thccl+(th-2.5144);
      
      q1=le;
      q2=thccl+.2*leccl;
      leccl=leccl+dle*le;
      dle=ifcond(beat,-dle,dle);
      bccl=bccl+beat;
      
      wave_r=.1+.8*sqr(sin(.011*thccl))+.1*sin(leccl*.061);
      wave_g=.1+.8*sqr(sin(.013*thccl))+.1*cos(leccl*.067);
      wave_b=.1+.8*sqr(cos(.017*thccl))+.1*sin(leccl*.065);
      
      ib_r=ib_r+.1*sin(1.3*time+.012*leccl);
      ib_g=ib_g+.1*sin(1.7*time+.019*leccl);
      ib_b=ib_b+.1*sin(1.9*time+.017*leccl);
      mv_r=.5*(ib_r+wave_r);mv_g=.5*(ib_g+wave_g);mv_b=.5*(ib_b+wave_b);
      mv_a=.5*sqr(sin(.01*leccl+bccl));
      
      echo_alpha=.5+.2*cos(.07*leccl+.02*thccl);
      eo=ifcond(band(equal(bccl%3,0),beat),rand(4),eo);
      q3=(equal(eo,2)+equal(eo,1))*equal(bccl%2,0);
      q4=(equal(eo,0)+equal(eo,3))*equal(bccl%2,0);
      echo_orient=eo;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["CrystalHigh - mad ravetriping.milk"] = {
    fRating: 5.0,
    fGammaAdj: 1.0,
    fDecay: 0.963999,
    fVideoEchoZoom: 1.9027,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 33.469448,
    fWaveScale: 100.0,
    fWaveSmoothing: 0.0,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.24,
    fModWaveAlphaEnd: 1.300001,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.009514,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.035,
    ob_r: 0.34,
    ob_g: 0.34,
    ob_b: 0.34,
    ob_a: 0.38,
    ib_size: 0.02,
    ib_r: 0.34,
    ib_g: 0.34,
    ib_b: 0.34,
    ib_a: 0.21,
    nMotionVectorsX: 28.0,
    nMotionVectorsY: 9.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_frame_code: function(_){with(_){
      MyVolume = min(bass+mid+treb,5);
      decay = 1 - 0.01*MyVolume;
      wave_r = 0.30 + 0.15*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
      wave_r = ifcond(above(bass,1.2),wave_r + 0.35,wave_r);
      wave_g = 0.30 + 0.15*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
      wave_b = 0.30 + 0.15*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
      wave_b = ifcond(above(wave_r,0.8),wave_b-0.25,wave_b);
      ib_a = max(sin(time),0);
      ib_size = 0.010 + 0.002*MyVolume;
      ob_a = 0.380 + 0.1*MyVolume;
      ob_size = 0.050 - 0.004*MyVoulme;
      ib_r = 0.340 + 0.2*sin(time*0.5413);
      ib_g = 0.340 + 0.2*sin(time*0.6459);
      ib_b = 0.340 + 0.2*sin(time*0.7354);
      ob_r = 0.340 + 0.2*sin(time*0.7251);
      ob_r = ifcond(above(bass,1.2),ob_r + 0.35,ob_r);
      ob_g = 0.340 + 0.2*sin(time*0.5315);
      ob_b = 0.340 + 0.2*sin(time*0.6349);
      ob_b = ifcond(above(ob_r,0.8),ob_b-0.25,ob_b);
      zoom = max(sin(bass-bass_residual*10),0.2);
      rot = mid_residual*2.5;
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);
      bass_residual = equal(bass_thresh,2)*0.016*sin(time*7) + (1-equal(bass_thresh,2))*bass_residual;
      mid_thresh = above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*0.92+1.3);
      mid_residual = equal(mid_thresh,2)*0.013*sin(time*7) + (1-equal(mid_thresh,2))*mid_residual;
      monitor = zoom;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Aderrasi - Candy Avian.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 0.923483,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 5,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 2.063785,
    fWaveScale: 0.724297,
    fWaveSmoothing: 0.5,
    fWaveParam: -0.3,
    fModWaveAlphaStart: 0.5,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 2.500333,
    fZoomExponent: 1.0,
    fShader: 0.1,
    zoom: 0.990099,
    rot: 0.0,
    cx: 0.5,
    cy: 0.41,
    dx: -0.00399,
    dy: 1e-05,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 1.0,
    wave_g: 1.0,
    wave_b: 0.0,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.2,
    ib_size: 0.05,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 0.1,
    nMotionVectorsX: 55.68,
    nMotionVectorsY: 47.999996,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.25,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.4*sin(1.5*time) + 0.25*sin(2.14*time);
      wave_b = wave_b + 0.41*sin(1.2*time) + 0.26*sin(2.11*time);
      wave_g = wave_g + 0.4*sin(1.34*time) + 0.25*sin(2.34*time);
      ib_r = 4;
      ib_g = 0;
      ib_b = 0;
      wave_x = wave_x +
      ifcond(above(wave_y,0.75),0.40*sin(time), 0.15*sin(time));
      wave_y = wave_y + 0.30*cos(0.9*time);
      cx = cx +
      ifcond(above(wave_x,0.5), +0.0*sin(7*treb_att), -0.0*sin(7*mid_att));
      cy = cy +
      ifcond(above(wave_x,0.5), +0.0*cos(7*bass_att), -0.0*cos(7*mid_att));
      ob_r = 0.5*sin(treb)*time;
      ob_b = 0.5*sin(mid)*0.9*time;
      ob_g = 0.5*sin(bass)*0.8*time;
      warp = warp + ifcond(above(bass_att,1.5), 1.5, 0);
      rot = rot + 0.08*sin(3*time);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Aderrasi - Making Time (Swamp Mix).milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 1,
    nWaveMode: 5,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 1.599181,
    fWaveSmoothing: 0.9,
    fWaveParam: -0.2,
    fModWaveAlphaStart: 0.5,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 1e-05,
    dy: 1e-05,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.005,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 0.0,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);
      dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;
      dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;
      rot = rot + 2*abs((0.9*dy_r)*bass)*sin(0.7*time);
      zoom = zoom + 10*(0.2*rad*(3-bass/cos(rad/12)*2*tan(12)))*(0.002*sin(ang*(12*sin(8*bass))));
      cx = cx + 0.3*sin(3*dy_r);
      cy = cy + 0.3*cos(3*dx_r);
      dy = dy + 1.7*dy_r;
      dx = dx + 1.7*dx_r;
    }},
    per_frame_code: function(_){with(_){
      bass_tick = above(bass_att,bass_tick)*2 + (1-above(bass_att,bass_tick))*
      ((bass_tick-1.3)*0.96+1.3);
      treb_tick = above(treb_att,treb_tick)*2 + (1-above(treb_att,treb_tick))*
      ((treb_tick-1.3)*0.96+1.3);
      mid_tick = above(mid_att,mid_tick)*2 + (1-above(mid_att,mid_tick))*
      ((mid_tick-1.3)*0.96+1.3);
      bass_shift = equal(bass_tick,2)*0.95*sin(time*5) + (1-equal(bass_tick,2))*bass_shift;
      treb_shift = equal(treb_tick,2)*0.95*sin(time*5) + (1-equal(treb_tick,2))*treb_shift;
      mid_shift = equal(mid_tick,2)*0.95*sin(time*5) + (1-equal(mid_tick,2))*mid_shift;
      wave_mystery = wave_mystery + 0.15*sin(time) + 0.2*sin(0.2*time);
      wave_r = wave_r +bass_shift+0.3;
      wave_g = wave_g+treb_shift;
      wave_b = wave_b +mid_shift;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Aderrasi - Flowing Form.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.92,
    fVideoEchoZoom: 1.343302,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 3,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 1.611957,
    fWaveSmoothing: 0.0,
    fWaveParam: 0.08,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 0.999834,
    fWarpScale: 100.0,
    fZoomExponent: 1.200114,
    fShader: 1.0,
    zoom: 1.010011,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.02,
    dy: 0.02,
    warp: 0.059958,
    sx: 0.999998,
    sy: 1.0,
    wave_r: 0.6,
    wave_g: 0.6,
    wave_b: 0.3,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.1,
    ob_r: 0.5,
    ob_g: 0.5,
    ob_b: 0.1,
    ob_a: 0.5,
    ib_size: 0.0,
    ib_r: 0.55,
    ib_g: 0.25,
    ib_b: 0.05,
    ib_a: 0.7,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      sx=sx+0.5*cos((y*2-1)*6+time*1.53+(x*2-1)*3.2);
      sy=sy+0.5*cos((x*2-1)*8+time*1.71+(y*2-1)*4.3);
      zoom = zoom - 0.01*ang;
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.400*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );
      wave_g = wave_g + 0.400*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );
      wave_b = wave_b + 0.400*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );
      zoom = zoom + 0.023*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );
      rot = rot + 0.030*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
      decay = decay - 0.01*equal(frame%200,0);
      ob_r = wave_g;
      ob_g = wave_b;
      ob_b = wave_r;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["CatalystTheElder - Electric Rosebud_Phat_texture_edit.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.925,
    fVideoEchoZoom: 1.228237,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 1,
    nWaveMode: 1,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 3.034055,
    fWaveScale: 1.2857,
    fWaveSmoothing: 0.63,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.4,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.999514,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.3,
    wave_g: 0.83,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.0,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      //rot = (0.01*(sin(time)))-rad;
      zoom = 1.1+(bass/10);
    }},
    per_frame_code: function(_){with(_){
      wave_g = wave_g + 0.5*cos(time*2.23);
      wave_b = wave_b + 0.5*tan(time*2.33);
    }},
    shapes: [
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.995947,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 0.344836,
       r: 0.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         //rot = 0.1*sin(ang);
         tex_ang=sin(time/3)*6.14;
         tex_zoom=.345+(bass*.03);
       }},
      },
      {
       enabled: 1,
       sides: 24,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.379369,
       ang: 0.753982,
       tex_ang: 0.000000,
       tex_zoom: 0.842832,
       r: 0.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         g = g + 0.5*cos(time*2.23);
         b = b + 0.5*tan(time*2.33);
         x=(sin(time)*0.3+0.5)+(treb_att*0.1);
         y=(cos(time)*0.3+0.5)+(treb_att*0.1);
       }},
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Eo.S. - skylight a3 [trip colors flux2]_phat_Multi_shaped2_zoe_colours5.milk"] = {
    fRating: 5.0,
    fGammaAdj: 1.0,
    fDecay: 0.5,
    fVideoEchoZoom: 1.006596,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 2,
    bAdditiveWaves: 0,
    bWaveDots: 1,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 1,
    bSolarize: 1,
    bInvert: 0,
    fWaveAlpha: 0.019788,
    fWaveScale: 0.011726,
    fWaveSmoothing: 0.9,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 0.010284,
    fWarpScale: 0.01,
    fZoomExponent: 1.0,
    fShader: 1.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 0.999957,
    sy: 0.999997,
    wave_r: 0.5,
    wave_g: 0.4,
    wave_b: 0.3,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.6,
    ob_g: 0.5,
    ob_b: 0.8,
    ob_a: 0.0,
    ib_size: 0.015,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.02,
    mv_dy: -0.02,
    mv_l: 1.0,
    mv_r: 0.49,
    mv_g: 0.48,
    mv_b: 0.300001,
    mv_a: 1.0,
    init_code: function(_){with(_){
      mv_x=64;mv_y=48;
      nut=0;
      stp=0;stq=0;
      rtp=0;rtq=0;
      wvr=0;
      decay=0;
      dcsp=0;
      q1=0;q2=0;q3=0
    }},
    per_frame_code: function(_){with(_){
      decay=.96;
      zoom=1.000;
      speed=0.80;
      speedinv=1-speed;
      q1=(qa*speed + bass*speedinv);
      q2=(qb*speed + mid *speedinv);
      q3=(qc*speed + (treb*0.8)*speedinv);
      qa=q1;
      qb=q2;
      qc=q3;
      flux=sin(time/2);
      q4=flux * 0.5 + 0.5;
      q5=flux;
      ib_r=sin(time/2)*0.5 + 0.5;
      ib_g=sin(time/2 + 2)* 0.5 + 0.5;
      ib_b=sin(time/2 + 4)* 0.5 + 0.5;
      ib_size=sin(time/3)*0.05;
    }},
    shapes: [
      {
       enabled: 1,
       sides: 5,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 1.670888,
       ang: 0.000000,
       tex_ang: 6.283185,
       tex_zoom: 0.429222,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         flux=q5*9;
         fluxs=max(flux,0);
         fluxs=min(fluxs,1);
         bs=q1*above(q1,0.8) +  (q1*0.2 * below(q1,0.8));
         advflux=(bs*fluxs) + (-bs * (1-fluxs));
         adv=adv+advflux;
         advs=adv/256;
         
         
         ang=advs;
         rad=1.471 + sin(advs*16)*0.4;
         a2=1-(sin(time)*0.4);
       }},
      },
      {
       enabled: 1,
       sides: 3,
       additive: 1,
       thickOutline: 0,
       textured: 0,
       x: 0.350000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.816695,
       r: 0.400000,
       g: 0.400000,
       b: 1.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.100000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         y=0.1 + q2*0.4;
         rad=q2/2;
         ang=-q2*2;
         
         r=0.90 + (sin(time/2))*0.50;
         g=0.90 + (sin(time/2 + 2)) * 0.50;
         b=0.90 + (sin(time/2 + 4)) * 0.50;
         
         
         r2=0.70 + (sin(time/2))*0.50;
         g2=0.70 + (sin(time/2 + 2)) * 0.50;
         b2=0.70 + (sin(time/2 + 4)) * 0.50
         
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 1.089251,
       ang: 2.890265,
       tex_ang: 2.890265,
       tex_zoom: 0.483654,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         flux=q5*9;
         fluxs=max(flux,0);
         fluxs=min(fluxs,1);
         bs=q1*above(q1,0.8) +  (q1*0.5 * below(q1,0.8));
         advflux=(bs*fluxs) + (-bs * (1-fluxs));
         adv=adv+advflux;
         advs=adv/178;
         
         //ang=sin(time/6)*6.4;
         ang=advs;
         rad=1.671 + sin(advs*16)*0.4;
       }},
      },
      {
       enabled: 1,
       sides: 3,
       additive: 1,
       thickOutline: 0,
       textured: 0,
       x: 0.840000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 0.980000,
       g: 1.000000,
       b: 0.980000,
       a: 0.800000,
       r2: 0.000000,
       g2: 0.090000,
       b2: 0.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x=sin(time/2)*0.4 + 0.5;
         y=sin(time)*0.4+0.5;
         rad=(q2*q2)/2;;
         ang=q2*2;
         
         r=0.70 + (sin(time/2))*0.50;
         g=0.70 + (sin(time/2 + 2)) * 0.50;
         b=0.70 + (sin(time/2 + 4)) * 0.50
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Eo.S.+Phat Cool Bug_arm.milk"] = {
    fRating: 5.0,
    fGammaAdj: 1.0,
    fDecay: 0.94,
    fVideoEchoZoom: 0.498313,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 1,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.001,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.63,
    fWaveParam: -1.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 0.999998,
    fShader: 1.0,
    zoom: 13.290894,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: -0.28,
    dy: -0.32,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.03,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 6.4,
    nMotionVectorsY: 43.199997,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.0,
    mv_r: 1.0,
    mv_g: 0.91,
    mv_b: 0.71,
    mv_a: 0.0,
    init_code: function(_){with(_){
      zoom=1;
      xpos=0;
      ypos=0;
    }},
    per_frame_code: function(_){with(_){
      decay=1;
      
      vol= (bass+mid+treb)*0.55;
      vol=vol;
      
      
      mv_r = 0.5 + 0.4*sin(time*1.324);
      mv_g = 0.5 + 0.4*cos(time*1.371);
      
      
      
      
      zoom=.9;
      
      musictime=musictime+vol;
      q4=sin(musictime*0.02)*0.3;
      q5=sin(musictime*0.01)*0.3;
      
      dx=sin(musictime*0.1)*0.07;
      dy=cos(musictime*0.069)*0.07;
      
      
      
      
      monitor=rot;
    }},
    shapes: [
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.491382,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 0.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x=.5+q4;y=.5+q5;
       }},
      },
      {
       enabled: 0,
       sides: 24,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.444842,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 0.819541,
       r: 1.000000,
       g: 1.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         tex_ang=0.01;
         x=.5+q4;y=.5+q5;
       }},
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Eo.S.+Phat Cool Bug_arm_textured.milk"] = {
    fRating: 5.0,
    fGammaAdj: 1.0,
    fDecay: 0.94,
    fVideoEchoZoom: 0.999995,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.001,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.63,
    fWaveParam: -1.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 0.999998,
    fShader: 1.0,
    zoom: 13.290894,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: -0.28,
    dy: -0.32,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.03,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 12.799995,
    nMotionVectorsY: 9.600006,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.0,
    mv_r: 1.0,
    mv_g: 0.91,
    mv_b: 0.71,
    mv_a: 0.0,
    init_code: function(_){with(_){
      zoom=1;
      xpos=0;
      ypos=0;
    }},
    per_frame_code: function(_){with(_){
      decay=1;
      
      vol= (bass+mid+treb)*0.55;
      vol=vol;
      
      
      mv_r = 0.5 + 0.4*sin(time*1.324);
      mv_g = 0.5 + 0.4*cos(time*1.371);
      
      
      
      
      zoom=.9;
      
      musictime=musictime+vol;
      q4=sin(musictime*0.02)*0.3;
      q5=sin(musictime*0.01)*0.3;
      
      dx=sin(musictime*0.1)*0.07;
      dy=cos(musictime*0.069)*0.07;
      
      
      
      
      monitor=rot;
    }},
    shapes: [
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.491382,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 0.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x=.5+q4;y=.5+q5;
       }},
      },
      {
       enabled: 0,
       sides: 24,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.444842,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 0.819541,
       r: 1.000000,
       g: 1.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         tex_ang=0.01;
         x=.5+q4;y=.5+q5;
       }},
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Eo.S.+Phat Fractical_dancer - pulsate B.milk"] = {
    fRating: 5.0,
    fGammaAdj: 1.0,
    fDecay: 0.94,
    fVideoEchoZoom: 0.597148,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 1,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 1,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.001,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.63,
    fWaveParam: -1.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 0.999998,
    fShader: 0.0,
    zoom: 13.290894,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: -0.28,
    dy: -0.32,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.005,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 12.799995,
    nMotionVectorsY: 9.600006,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.0,
    mv_r: 1.0,
    mv_g: 0.91,
    mv_b: 0.71,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      rd=sqrt( sqr( (x-0.5-q4)*1.7) + sqr( (y-0.5+q5)*1.2 ) )+0.001;
      cx=0.5+q4;
      cy=0.5-q5;
      
      zoom=pow(rd,sin(time)+2.5)*2.0;
      zoom=max(zoom,0.1)
      
    }},
    init_code: function(_){with(_){
      
      zoom=1;
      xpos=0;
      ypos=0;
    }},
    per_frame_code: function(_){with(_){
      decay=1;
      
      vol= (bass+mid+treb)*0.55;
      vol=vol;
      
      
      mv_r = 0.5 + 0.4*sin(time*1.324);
      mv_g = 0.5 + 0.4*cos(time*1.371);
      
      
      
      
      zoom=.9;
      
      musictime=musictime+vol;
      
      q4=0;
      q5=0;
      //=sin(musictime*0.02)*0.3;
      //q5=sin(musictime*0.01)*0.3;
      
      dx=sin(musictime*0.1)*0.07;
      dy=cos(musictime*0.069)*0.07;
      
      
      
      
      monitor=rot;
    }},
    shapes: [
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.491382,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 0.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x=.5+q4;y=.5+q5;
       }},
      },
      {
       enabled: 1,
       sides: 24,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.018423,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 0.819541,
       r: 1.000000,
       g: 1.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         tex_ang=0.01;
         x=.5-q4;
         y=.5-q5;
       }},
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Fvese - The Tunnel (Final Stage Mix).milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.0,
    fDecay: 0.995,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 3,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.0,
    fWaveScale: 0.241456,
    fWaveSmoothing: 0.09,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.5,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 0.741921,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 0.9999,
    sy: 0.9999,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.4,
    ob_a: 0.0,
    ib_size: 0.005,
    ib_r: 0.0,
    ib_g: 0.3,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 6.4,
    nMotionVectorsY: 1.440001,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 0.7599,
    mv_g: 0.48,
    mv_b: 0.39,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      zoom = ifcond(below(q1,0),0.5*x,ifcond(equal(q2,0),0.9*(1-x),ifcond(above(q3,0),0.9*y,0.9*(1-y)))) + 0.6 - 0.13*(min(q3,0.3));
      
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.45*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));
      wave_b = wave_b - 0.4*(0.5*sin(time*4.782)+0.5*cos(time*0.722));
      wave_g = wave_g + 0.4*sin(time*1.931);
      vol=0.15*(bass_att+bass+mid+mid_att);
      dx_r=ifcond(equal(q3,0),ifcond(above(x,xpos),dx*q1-xpos,dx+q2-xpos),dx);
      dy_r=ifcond(equal(q3,0),ifcond(above(y,ypos),dy*q1-ypos,dy+q2-ypos),dy);
      rot = rot+0.05*( 0.60*sin(0.381*time) + 0.40*sin(0.479*time) );
      mytime=.7;
      q1=sin(time*mytime*4);
      q2=cos(time*mytime*2);
      q3=abs(rad-.5)*(q2*q1);
      xpos=.5/vol;
      ypos=.5/vol;
      wave_x=.5+0.1*sin(time+rand(100)/100);
      wave_y=.5+0.1*cos(time+rand(100)/100);
      ib_r=q3+q2;
      ib_b=q2+q1;
      ib_g=q1+q3;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Geiss and Rovastar - The Chaos Of Colours (sprouting dimentia mix).milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.7,
    fDecay: 0.94,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.001,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.63,
    fWaveParam: -1.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 13.290894,
    rot: -0.02,
    cx: 0.5,
    cy: 0.5,
    dx: -0.28,
    dy: -0.32,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.95,
    ib_g: 0.85,
    ib_b: 0.65,
    ib_a: 1.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      zoom =( log(sqrt(2)-rad) -0.24)*1;
    }},
    per_frame_code: function(_){with(_){
      ob_r = 0.5 + 0.4*sin(time*1.324);
      ob_g = 0.5 + 0.4*cos(time*1.371);
      ob_b = 0.5+0.4*sin(2.332*time);
      ib_r = 0.5 + 0.25*sin(time*1.424);
      ib_g = 0.25 + 0.25*cos(time*1.871);
      ib_b = 1-ob_b;
      volume = 0.15*(bass+bass_att+treb+treb_att+mid+mid_att);
      xamptarg = ifcond(equal(frame%15,0),min(0.5*volume*bass_att,0.5),xamptarg);
      xamp = xamp + 0.5*(xamptarg-xamp);
      xdir = ifcond(above(abs(xpos),xamp),-sign(xpos),ifcond(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));
      xaccel = xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
      xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
      xpos = xpos + 0.001*xspeed;
      dx = xpos*0.05;
      yamptarg = ifcond(equal(frame%15,0),min(0.3*volume*treb_att,0.5),yamptarg);
      yamp = yamp + 0.5*(yamptarg-yamp);
      ydir = ifcond(above(abs(ypos),yamp),-sign(ypos),ifcond(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));
      yaccel = ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
      yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
      ypos = ypos + 0.001*yspeed;
      dy = ypos*0.05;
      wave_a = 0;
      q8 =oldq8+ 0.0003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
      oldq8 = q8;
      q7 = 0.003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
      rot = 0.4 + 1.5*sin(time*0.273) + 0.4*sin(time*0.379+3);
    }},
    shapes: [
      {
       enabled: 1,
       sides: 3,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.550000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 0.100000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.900000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.400000,
       per_frame_code: function(_){with(_){
         ang = time*0.4;;
         x = 0.5 + 0.08*cos(time*1.3) + 0.03*cos(time*0.7);
         y = 0.5 + 0.08*sin(time*1.4) + 0.03*sin(time*0.7);
         r =0.5 + 0.5*sin(q8*0.613 + 1);
         g = 0.5 + 0.5*sin(q8*0.763 + 2);
         b = 0.5 + 0.5*sin(q8*0.771 + 5);
         r2 = 0.5 + 0.5*sin(q8*0.635 + 4);
         g2 = 0.5 + 0.5*sin(q8*0.616+ 1);
         b2 = 0.5 + 0.5*sin(q8*0.538 + 3);
       }},
      },
      {
       enabled: 1,
       sides: 32,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.400000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.300000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
       per_frame_code: function(_){with(_){
         ang = time*1.7;
         x = 0.5 + 0.08*cos(time*1.1) + 0.03*cos(time*0.7);
         y = 0.5 + 0.08*sin(time*1.1) + 0.03*sin(time*0.7);
         r = 0.5 + 0.5*sin(q8*0.713 + 1);
         g = 0.5 + 0.5*sin(q8*0.563 + 2);
         b = 0.5 + 0.5*sin(q8*0.654 + 5);
         r2 = 0.5 + 0.5*sin(q8*0.885 + 4);
         g2 = 0.5 + 0.5*sin(q8*0.556+ 1);
         b2 = 0.5 + 0.5*sin(tq8*0.638 + 3);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.400000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.500000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
       per_frame_code: function(_){with(_){
         ang = time*1.24;
         x = 0.5 - 0.08*cos(time*1.07) + 0.03*cos(time*0.7);
         y = 0.5 - 0.08*sin(time*1.33) + 0.03*sin(time*0.7);
         g = 0.5 + 0.5*sin(q8*0.713 + 1);
         b = 0.5 + 0.5*sin(q8*0.563 + 2);
         r = 0.5 + 0.5*sin(q8*0.654 + 5);
         r2 = 0.5 + 0.5*sin(q8*0.885 + 4);
         g2 = 0.5 + 0.5*sin(q8*0.556+ 1);
         b2 = 0.5 + 0.5*sin(q8*.638 + 3);
       }},
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Idiot & Rovastar - Altars Of Madness 2 (X.42 Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 0.9996,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 0,
    nWaveMode: 7,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.001,
    fWaveScale: 0.763002,
    fWaveSmoothing: 0.27,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 5.99579,
    fWarpScale: 1.331,
    fZoomExponent: 1.01,
    fShader: 0.0,
    zoom: 0.998531,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.9,
    ob_b: 0.2,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.5,
    ib_g: 0.5,
    ib_b: 0.5,
    ib_a: 0.23,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 5.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      box=abs(x*2-0.4*sin(q3))%2 + abs(y*2+0.4*sin(q5))%2;
      q1 = 4.05+(sin(x+0.237*time)-cos(y+0.513*time));
      zoom = ifcond(above(box,1),q1*.1,zoom);
      rot = ifcond(above(box,1),sin(0.885*time),0)*((ang/2/2/2)-rad)*sin(q5)/2;
      dx = ifcond(above(box,1),sin(0.542*time),0.005*sin((y-0.5)*96)+0.005*sin((y-0.5)*128));
      dy= ifcond(above(box,1),sin(0.581*time),0.001*cos((x-0.5)*128)+0.001*cos((x-0.5)*96));
    }},
    per_frame_code: function(_){with(_){
      ob_r = 0.7 - 0.3*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));
      ob_g = 0.5- 0.4*sin(time*5.924);
      ob_b = 0.45 - 0.3*cos(time*0.816);
      warp =0;
      volume = 0.15*(bass_att+bass+mid+mid_att);
      beatrate = ifcond(equal(beatrate,0),1,ifcond(below(volume,0.01),1,beatrate));
      lastbeat = ifcond(equal(lastbeat,0),time,lastbeat);
      meanbass_att = 0.1*(meanbass_att*9 + bass_att);
      peakbass_att = ifcond(above(bass_att,peakbass_att),bass_att,peakbass_att);
      beat = ifcond(above(volume,0.8),ifcond(below(peakbass_att - bass_att, 0.05*peakbass_att),ifcond(above(time - lastbeat,0.1+0.5*(beatrate-0.1)),1,0),0),0);
      beatrate = max(ifcond(beat,ifcond(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);
      peakbass_att = ifcond(equal(beat,0),ifcond(above(time - lastbeat,2*beatrate),peakbass_att*0.95,peakbass_att*0.995),bass_att);
      lastbeat = ifcond(beat,time,lastbeat);
      peakbass_att = max(ifcond(beat,bass_att,peakbass_att),1.1*meanbass_att);
      q5 = ifcond(beat,0.1*rand(1000),oldq5);
      oldq5 = q5;
      q3 = ifcond(beat,0.1*rand(1000),oldq3);
      oldq3 = q3;
      ib_size = 0.02;
      ib_r = ib_r + 0.5*sin(time*2.424);
      ib_g = ib_g + 0.5*sin(time*2.247);
      ib_b = ib_b - 0.5*sin(time*1.131);
      dx = dx -0.008*(0.6*sin(time*0.23)+0.5*cos(time*0.153));
      dy = dy - 0.008*(0.6*sin(time*0.21)+0.5*cos(time*0.142));
      echo_zoom=echo_zoom-.3*sin(Time*(q5/2/2/2/2/2/2/2));
      //echo_alpha=1;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Idiot - Texture Boxes (Remix 2).milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.9,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.001715,
    fWaveScale: 1.0,
    fWaveSmoothing: 0.75,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.999999,
    rot: -0.0,
    cx: 0.5,
    cy: 0.5,
    dx: -0.006,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.5,
    ib_r: 0.4,
    ib_g: 0.4,
    ib_b: 0.4,
    ib_a: 0.0,
    nMotionVectorsX: 38.399994,
    nMotionVectorsY: 14.400005,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 1.0,
    mv_g: 0.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_frame_code: function(_){with(_){
      vol_att=(treb_att*.25)+(mid_att*.25)+(bass_att*.25+.5*sin(vol))/vol;
      vol=bass+treb+mid;
      new_bass=(bass*.25+.5*sin(bass_att*.25));
      new_treb=(treb*.25+.5*sin(treb_att*.25));
      new_mid=(mid*.25+.4*sin(mid_att*.25));
      bass_c=q1-1*sin(bass_stt&time*.54);
      treb_c=q2-1*sin(treb_att&time*.44);
      mid_c=q3-1*sin(mid_att&time*.24);
      vol_c=q4-1*sin(vol_att&time*.64);
      q1=sin(bass-new_bass&time*.63);
      q2=sin(treb-new_treb&time*.43);
      q3=sin(mid-new_mid&time*.23);
      q4=sin(vol&time*.65);
      q5=bass_c;
      q6=treb_c;
      q7=mid_c;
      q8=vol_c;
      
      
    }},
    shapes: [
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.000000,
       y: 0.870000,
       rad: 0.310900,
       ang: 0.000000,
       tex_ang: 3.141500,
       tex_zoom: 2.216710,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 0.000000,
       border_b: 0.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         textured=1;
         tex_ang=tex_ang+1*sin(time*.65*q2);
         ang=ang+1*sin(time*.62);
         x=.5-.3*sin(time*.34);
         y=.5+.3*sin(time*.53);
         rad=rad-.5*sin(time*.53);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.000000,
       y: 0.620000,
       rad: 0.307832,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 2.448630,
       r: 1.000000,
       g: 1.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 0.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         textured=1;
         tex_ang=tex_ang+1*sin(time*.23*q4);
         ang=ang+1*sin(time*.75);
         x=.5-.3*sin(time*.12);
         y=.5+.3*sin(time*.65);
         rad=rad+.5*sin(time*.75);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.000000,
       y: 0.370000,
       rad: 0.317160,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 2.448629,
       r: 1.000000,
       g: 0.400000,
       b: 0.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 0.400000,
       b2: 0.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 0.400000,
       border_b: 0.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         textured=1;
         tex_ang=tex_ang+1*sin(time*.34*q3);
         ang=ang+1*sin(time*.12);
         x=.5-.3*sin(time*.23);
         y=.5+.3*sin(time*.56);
         rad=rad+.5*sin(time*.12);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.000000,
       y: 0.110000,
       rad: 0.314020,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 2.216713,
       r: 0.000000,
       g: 1.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 1.000000,
       border_r: 0.000000,
       border_g: 1.000000,
       border_b: 0.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         textured=1;
         tex_ang=tex_ang+1*sin(time*.12*q6);
         ang=ang+1*sin(time*.65);
         x=.5-.3*sin(time*.54);
         y=.5+.3*sin(time*.23);
         rad=rad+.4*sin(time*.43);
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Idiot - Texture Boxes (Remix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.9,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.001715,
    fWaveScale: 1.0,
    fWaveSmoothing: 0.75,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.999999,
    rot: -0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.194,
    dy: 0.4,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.5,
    ib_r: 0.4,
    ib_g: 0.4,
    ib_b: 0.4,
    ib_a: 0.0,
    nMotionVectorsX: 38.399994,
    nMotionVectorsY: 14.400005,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 1.0,
    mv_g: 0.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_frame_code: function(_){with(_){
      vol_att=(treb_att*.25)+(mid_att*.25)+(bass_att*.25+.5*sin(vol))/vol;
      vol=bass+treb+mid;
      new_bass=(bass*.25+.5*sin(bass_att*.25));
      new_treb=(treb*.25+.5*sin(treb_att*.25));
      new_mid=(mid*.25+.4*sin(mid_att*.25));
      bass_c=q1-1*sin(bass_att&time*.54);
      treb_c=q2-1*sin(treb_att&time*.44);
      mid_c=q3-1*sin(mid_att&time*.24);
      vol_c=q4-1*sin(vol_att&time*.64);
      q1=sin(bass-new_bass&time*.63);
      q2=sin(treb-new_treb&time*.43);
      q3=sin(mid-new_mid&time*.23);
      q4=sin(vol&time*.65);
      q5=bass_c;
      q6=treb_c;
      q7=mid_c;
      q8=vol_c;
      
      
    }},
    shapes: [
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.000000,
       y: 0.870000,
       rad: 0.310900,
       ang: 0.000000,
       tex_ang: 3.141500,
       tex_zoom: 2.216710,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 0.000000,
       border_b: 0.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         tx=0+1*sin(q1);
         textured=ifcond(below(.5,tx),0,1);
         tex_ang=tex_ang+1*sin(time*.65*q2);
         ang=ang+1*sin(time*.62);
         x=.5-.3*sin(time*.34);
         y=.5+.3*sin(time*.53);
         
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.000000,
       y: 0.620000,
       rad: 0.307832,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 2.448630,
       r: 1.000000,
       g: 1.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 0.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         tx=0+1*sin(q2);
         textured=ifcond(below(.5,tx),0,1);
         tex_ang=tex_ang+1*sin(time*.23*q4);
         ang=ang+1*sin(time*.75);
         x=.5-.3*sin(time*.12);
         y=.5+.3*sin(time*.65);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.000000,
       y: 0.370000,
       rad: 0.317160,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 2.448629,
       r: 1.000000,
       g: 0.400000,
       b: 0.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 0.400000,
       b2: 0.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 0.400000,
       border_b: 0.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         tx=0+1*sin(q3);
         textured=ifcond(below(.5,tx),0,1);
         tex_ang=tex_ang+1*sin(time*.34*q3);
         ang=ang+1*sin(time*.12);
         x=.5-.3*sin(time*.23);
         y=.5+.3*sin(time*.56);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.000000,
       y: 0.110000,
       rad: 0.314020,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 2.216713,
       r: 0.000000,
       g: 1.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 1.000000,
       border_r: 0.000000,
       border_g: 1.000000,
       border_b: 0.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         tx=0+1*sin(q4);
         textured=ifcond(below(.5,tx),0,1);
         tex_ang=tex_ang+1*sin(time*.12*q6);
         ang=ang+1*sin(time*.65);
         x=.5-.3*sin(time*.54);
         y=.5+.3*sin(time*.23);
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Idiot24-7 - Ascending to heaven 2.milk"] = {
    fRating: 4.0,
    fGammaAdj: 2.0,
    fDecay: 0.98,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 33.469135,
    fWaveScale: 0.931008,
    fWaveSmoothing: 0.5,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.0,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 5.725291,
    fZoomExponent: 4.778017,
    fShader: 0.0,
    zoom: 1.093507,
    rot: -0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.0662,
    sx: 0.905286,
    sy: 1.01,
    wave_r: 1.0,
    wave_g: 1.0,
    wave_b: 1.0,
    wave_x: 0.5,
    wave_y: 0.47,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.5,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 19.199995,
    nMotionVectorsY: 14.4,
    mv_l: 3.0,
    mv_r: 0.6,
    mv_g: 0.0,
    mv_b: 1.0,
    mv_a: 0.1,
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 1*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );
      wave_b = wave_b + 1*( 1.60*sin(1.900*time) + 0.40*sin(0.956*time) );
      wave_g = wave_g +1*(1.50*sin(1.900*time)+.40*sin(1*time) );
      rot=.140*sin(time);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Illusion & Che - Return Of The King.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.999,
    fVideoEchoZoom: 1.000498,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 1,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.000416,
    fWaveScale: 0.591236,
    fWaveSmoothing: 0.0,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 1.0,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.000158,
    fShader: 1.0,
    zoom: 1.0002,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.030301,
    sy: 1.0201,
    wave_r: 0.0,
    wave_g: 0.5,
    wave_b: 0.9,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.15,
    ob_r: 0.0,
    ob_g: 0.2,
    ob_b: 0.4,
    ob_a: 0.0,
    ib_size: 0.0,
    ib_r: 0.25,
    ib_g: 0.15,
    ib_b: 0.55,
    ib_a: 1.0,
    nMotionVectorsX: 19.199995,
    nMotionVectorsY: 14.4,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.5,
    mv_r: 0.0,
    mv_g: 0.0,
    mv_b: 0.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      dx=.01*sin((20+10*sin(q1*1.5))*(y+.2*sin(q1*.7)))*bass;
      dy=.01*sin((20+10*sin(q1))*(x+.2*sin(q1*.77)))*bass;
    }},
    per_frame_code: function(_){with(_){
      wave_r = 0.150*( 0.30*sin(0.875*time) + 0.20*sin(0.315*time) );
      wave_g = 0.850*( 0.10*sin(0.200*time) + 0.10*sin(1.025*time) );
      wave_b = 0.250*( 0.90*sin(0.410*time) + 0.60*sin(0.150*time) );
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Illusion & Che - The Piper.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.99,
    fVideoEchoZoom: 1.000498,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 2,
    nWaveMode: 6,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.000416,
    fWaveScale: 0.998162,
    fWaveSmoothing: 0.0,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.0,
    fModWaveAlphaEnd: 0.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0001,
    fShader: 1.0,
    zoom: 0.9707,
    rot: 0.02,
    cx: 0.35,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.072134,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.15,
    ob_r: 0.0,
    ob_g: 0.2,
    ob_b: 0.4,
    ob_a: 0.0,
    ib_size: 0.0,
    ib_r: 0.25,
    ib_g: 0.15,
    ib_b: 0.55,
    ib_a: 1.0,
    nMotionVectorsX: 19.199995,
    nMotionVectorsY: 14.4,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.5,
    mv_r: 0.0,
    mv_g: 0.0,
    mv_b: 0.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      dx=.01*sin((20+10*sin(q1*1.5))*(y+.2*sin(q1*.7)))*bass*3;
      dy=.01*sin((20+10*sin(q1))*(x+.2*sin(q1*.77)))*bass*2;
      sy = sy + 0.01 * bass_att;
    }},
    per_frame_code: function(_){with(_){
      wave_r = 0.150*(0.30*sin(0.875*time) + 0.20*sin(0.315*time) );
      wave_g = 0.150*(0.10*sin(0.200*time) + 0.10*sin(1.025*time) );
      wave_b = 0.150*(0.50*sin(0.410*time) + 0.60*sin(0.150*time) );
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Illusion & Unchained - Frozen Eye 1.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 3,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.0,
    fWaveScale: 1.599179,
    fWaveSmoothing: 0.75,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.85,
    fModWaveAlphaEnd: 1.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 3.072695,
    fShader: 1.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.0,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.41,
    wave_g: 0.4,
    wave_b: 0.4,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 0.0,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_frame_code: function(_){with(_){
      warp=0;
      bass_on=ifcond(above(bass_att,1.3),1,0);
      treb_on=ifcond(above(treb_att,1.3),1,0);
      state = 1 + bass;
      wave_r = wave_r + 0.25*(0.6*sin(0.784*time) + 0.4*sin(0.986*time))*state;
      wave_g = wave_g + 0.25*(0.6*sin(0.671*time) + 0.4*sin(1.164*time))*(4-state);
      wave_b = wave_b + 0.25*(0.6*sin(1.423*time) + 0.4*sin(0.687*time))*(4/state);
      wave_y=ifcond(equal(state,1),wave_y+rand(10)*.1*sin(time*3),wave_y);
      bass_effect = ifcond(above(bass_att,1.4),pow(1.1,bass_att),1);
      treb_effect = ifcond(above(treb_att,1.4),pow(0.97,treb_att),1);
      net_effect = ifcond(above(bass_att,0.8*treb_att),bass_effect,treb_effect);
      zoom = 0.99 * net_effect;
      rot = 0.03 * net_effect * sin(time);
      wave_size=6*state + 3;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar - Harlequin's Dynamic Fractal (Crazed Spiral Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 0.999609,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 7,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.001,
    fWaveScale: 0.6401,
    fWaveSmoothing: 0.27,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 5.99579,
    fWarpScale: 1.331,
    fZoomExponent: 1.01,
    fShader: 0.0,
    zoom: 0.998531,
    rot: 0.002,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.96,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.9,
    ob_b: 0.2,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.5,
    ib_g: 0.5,
    ib_b: 0.5,
    ib_a: 1.0,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 48.0,
    mv_l: 5.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      box=(1-rad)+0.5*abs(x*3-0.4*sin(q1))%2 + 0.5*abs(y*3+0.4*sin(q1))%2;
      q1 = 8.05+(sin(x+0.137*time)-cos(y+0.213*time));
      zoom = ifcond(above(box,1),q1*.1,zoom);
      rot = ifcond(above(box,1),1*sin(0.385*time),rot);
    }},
    per_frame_code: function(_){with(_){
      ob_r = 0.3 - 0.3*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));
      ob_g = 0.6- 0.4*sin(time*2.924);
      ob_b = 0.35 - 0.3*cos(time*0.816);
      cx = cx - 0.1*sin(time*0.342);
      cy = cy + 0.1*sin(time*0.433);
      warp =0;
      ib_size = 0.02;
      ib_r = ib_r + 0.5*sin(time*3.034);
      ib_g = ib_g + 0.5*sin(time*2.547);
      ib_b = ib_b - 0.5*sin(time*1.431);
      dx = dx -0.008*sin(time*0.23);
      dy = dy - 0.008*sin(time*0.2);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Phat_Eo.S. - our own personal demon.milk"] = {
    fRating: 0.0,
    fGammaAdj: 1.0,
    fDecay: 0.925,
    fVideoEchoZoom: 1.001829,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 2,
    bAdditiveWaves: 1,
    bWaveDots: 1,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.099998,
    fWaveScale: 2.850136,
    fWaveSmoothing: 0.63,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.999514,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 1.0,
    wave_g: 0.0,
    wave_b: 0.0,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.005,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 1.0,
    nMotionVectorsX: 12.799995,
    nMotionVectorsY: 38.400002,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.800001,
    mv_r: 0.44,
    mv_g: 0.65,
    mv_b: 0.81,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      //flip= (-2 * above(sin(time),-0.9) )+1;
      //var=(bass+mid+treb)/3;
      //rot=((ang&rad/rad)/(var*20))/10;
      //sx=.99-(var*0.01);
      //cx=var*0.1*(ang/12);
      //sy=sx;
      
      //zoom=-1;
      sx=-1+(bass*0.2);
      sy=-1-(treb*0.2);
      
      cx=0.5+q4;
      cy=0.5-q5;
      rd=sqrt( sqr( (x-0.5-q4)*2) + sqr( (y-0.5+q5)*1.5 ) );
      //zm=(1.1-(rd/4));
      zm=.98;
      
      ag=atan( (y-0.5+q5)/(x-0.5-q4) );
      star=sin(ag*6+time)*((2-rd)-ag)/5;
      zm=zm+star/20;
      sx=zm;
      sy=zm;
      //rot=above(rd,0.7)*(rd-0.7)*sin(time*0.3)
    }},
    per_frame_code: function(_){with(_){
      wave_a = 0;
      
      
      
      //Thanks to Zylot for rainbow generator
      counter1 = ifcond(equal(counter2,1),ifcond(equal(counter1,1),0,counter1+.2),1);
      counter2 = ifcond(equal(counter1,1),ifcond(equal(counter2,1),0,counter2+.2),1);
      cdelay1 = ifcond(equal(cdelay2,1),1,ifcond(equal(colorcounter%2,1),ifcond(equal(counter1,1),2 ,0), ifcond(equal(counter2,1),2,0)));
      cdelay2 = ifcond(equal(cdelay1,2),1,0);
      colorcounter = ifcond(above(colorcounter,7),0,ifcond(equal(cdelay1,1),colorcounter+1,colorcounter));
      ib_r = .5*ifcond(equal(colorcounter,1),1, ifcond(equal(colorcounter,2),1, ifcond(equal(colorcounter,3),1, ifcond(equal(colorcounter,4),sin(counter2+2.1), ifcond(equal(colorcounter,5),0, ifcond(equal(colorcounter,6),0,sin(counter1)))))));
      ib_g = .5*ifcond(equal(colorcounter,1),0, ifcond(equal(colorcounter,2),sin(counter2*.5), ifcond(equal(colorcounter,3),sin((counter1+1.75)*.4), ifcond(equal(colorcounter,4),1, ifcond(equal(colorcounter,5),1, ifcond(equal(colorcounter,6),sin(counter2+2),0))))));
      ib_b = ifcond(equal(colorcounter,1),sin(counter1+2.1), ifcond(equal(colorcounter,2),0, ifcond(equal(colorcounter,3),0, ifcond(equal(colorcounter,4),0, ifcond(equal(colorcounter,5),sin(counter1), ifcond(equal(colorcounter,6),1,1))))));
      
      ib_r=tan(time*1);
      ib_r=min(ib_r,1);
      ib_r=max(ib_r,0);
      ib_g=tan(time*1+2.1);
      ib_g=min(ib_g,1);
      ib_g=max(ib_g,0);
      ib_b=tan(time*1+4.2);
      ib_b=min(ib_b,1);
      ib_b=max(ib_b,0);
      
      ob_r=ib_r-0.5;
      ob_g=ib_g-0.5;
      ob_b=ib_b-0.5;
      q1=ib_r;
      q2=ib_g;
      q3=ib_b;
      
      
      
      decay = 0.9999;
      
      
      //echo_orient=((bass_att+mid_att+treb_att)/3)*3;
      //solarize=above(0.5,bass);
      //darken=above(0.4,treb);
      
      musictime=musictime+(mid*mid*mid)*0.02;
      
      xpos=sin(musictime*0.6)*0.6;
      ypos=sin(musictime*0.4)*0.6;
      q4=xpos;
      q5=ypos;
      
      zoom=.98 + min(bass,1)*0.04
      
    }},
    shapes: [
      {
       enabled: 0,
       sides: 23,
       additive: 1,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.700000,
       rad: 0.154930,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 0.010000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         y=bass_att*0.5+0.2;
         x=cos(time*2)*0.5+0.5;
       }},
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 1.801999,
       ang: 0.000000,
       tex_ang: 3.141593,
       tex_zoom: 0.572684,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         //ang = ang + (bass*.2) + (time*.4);
         //rad=1.781+(bass*0.025);
         ang=above(0.5,treb_att)*.063;
       }},
      },
      {
       enabled: 0,
       sides: 100,
       additive: 1,
       thickOutline: 0,
       textured: 1,
       x: 0.900000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 0.010000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
       per_frame_code: function(_){with(_){
         x = sin(time*5) * .4 + .5;
         y=treb_att*0.5;
         
         pow( (bass*.15),2);
       }},
      },
      {
       enabled: 0,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.033004,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 0.010000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x=.5+(bass*0.07);
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       per_point_code: function(_){with(_){
         //plot x,y,z to point on circle
         smp=sample*6.283;
         xp=sin(smp )*0.05;
         yp=cos(smp )*0.05;
         zp=0;
         
         
         //alter shape;
         angy=sin(sample*6.28*4 +t1 )*6.28;
         xq=xp*cos(angy) - zp*sin(angy);
         zq=xp*sin(angy) + zp*cos(angy);
         xp=xq;
         zp=zq;
         
         
         //rotate on y axis;
         angy=t1*0.1;
         xq=xp*cos(angy) - zp*sin(angy);
         zq=xp*sin(angy) + zp*cos(angy);
         xp=xq;
         zp=zq;
         
         //rotate on x axis
         axs1 = sin(t1*0.15) + 1.6;
         yq= yp*cos(axs1) - zp*sin(axs1);
         zq= yp*sin(axs1) + zp*cos(axs1);
         yp=yq;
         zp=zq;
         
         //rotate on y axis again
         axs2 = sin(t1*0.1)*3.3;
         xq=xp*cos(axs2) - zp*sin(axs2);
         zq=xp*sin(axs2) + zp*cos(axs2);
         xp=xq;
         zp=zq;
         
         //stretch y axis to compensate for aspect ratio
         yp=yp*1.2;
         
         //push forward into viewpace
         zp=zp+2.1;
         
         //project x,y,z into screenspace
         xs=xp/zp;
         ys=yp/zp;
         
         //center 0,0 in middle of screen
         x=xs+0.5+q4;
         y=ys+0.5+q5;
         
         r=1-q1;
         g=1-q2;
         b=1-q3;
       }},
       per_frame_code: function(_){with(_){
         basstime=basstime+(bass*bass);
         t1=basstime*0.003;
         
       }},
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Phat_Rovastar - What_does_your_soul_look_like.milk"] = {
    fRating: 5.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 0.999609,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 2,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 1,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.8,
    fWaveScale: 1.605,
    fWaveSmoothing: 0.7,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 2.853,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.064,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.0,
    sx: 0.990099,
    sy: 0.990099,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.005,
    ib_r: 1.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      //dx=0.003*(bass*bass+bass_att)*sin((sin(sqrt(4)-rad))*5+(rad*5*sin(q1)))*y*ang;
      //dy=0.003*(bass*bass+bass_att)*cos((sin(sqrt(4)-rad))*5+(-rad*5*sin(q1)))*x*rad*ang;
      
      rot=(sin(time/2)*x)/(atan(time*2)/(ang/3)/x);
      warp=(sin(time*9)*y)/(atan(time/2)/rad/y)
    }},
    per_frame_code: function(_){with(_){
      ib_r = 0.5 + (5.499*( 0.60*sin(0.933*time/3) + 0.40*sin(1.045*time/3) ));
      ib_g = 0.5 + (5*( 0.60*sin(0.900*time/3) + 0.40*sin(0.956*time/3) ));
      ib_b = 0.5 + (5.499*( 0.60*sin(0.910*time/3) + 0.40*sin(0.920*time/3) ));
      wave_a=0;
      decay =1;
      zoom =1;
      rot=0;
      warp=0;
      q1 = oldq1+0.005*(bass+bass_att+(bass*bass_att)-1);
      oldq1 = below(q1,30000)*q1;
      monitor =q1;
    }},
    shapes: [
      {
       enabled: 1,
       sides: 13,
       additive: 0,
       thickOutline: 1,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.555908,
       ang: 1.696460,
       tex_ang: 1.633629,
       tex_zoom: 1.160965,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.100000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         //r = 0.5+0.25*sin(time*0.567)+0.25*sin(time*0.673);
         //b = 0.5+0.25*sin(time*0.617)+0.25*sin(time*0.493);
         //= 0.5+0.25*sin(time*0.771)+0.25*sin(time*0.317);
         //2 = 0.5+0.25*sin(time*0.417)+0.25*sin(time*0.773);
         //b2 = 0.5+0.25*sin(time*0.663)+0.25*sin(time*0.893);
         //g2 = 0.5+0.25*sin(time*0.317)+0.25*sin(time*0.327);
         //ang = q1;
         //x = 0.5 + 0.1*sin(q1*1.432)+0.1*sin(q1*0.342);
         //y= 0.5 + 0.1*sin(q1*1.311)+0.1*sin(q1*0.394);
         a=sin(time)*0.5+0.5;
       }},
      },
      {
       enabled: 1,
       sides: 3,
       additive: 0,
       thickOutline: 1,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 1.232284,
       ang: 2.324779,
       tex_ang: 4.712390,
       tex_zoom: 0.236264,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 0.500000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.100000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 0.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         //r = 0.5+0.25*sin(time*0.567)+0.25*sin(time*0.673);
         //b = 0.5+0.25*sin(time*0.617)+0.25*sin(time*0.493);
         //= 0.5+0.25*sin(time*0.771)+0.25*sin(time*0.317);
         //2 = 0.5+0.25*sin(time*0.417)+0.25*sin(time*0.773);
         //b2 = 0.5+0.25*sin(time*0.663)+0.25*sin(time*0.893);
         //g2 = 0.5+0.25*sin(time*0.317)+0.25*sin(time*0.327);
         ang = q1 + 3.1415;
         //x = 0.5 + 0.1*sin(q1*1.432)+0.1*sin(q1*0.342);
         //y= 0.5 + 0.1*sin(q1*1.311)+0.1*sin(q1*0.394);
       }},
      },
      {
       enabled: 0,
       sides: 3,
       additive: 0,
       thickOutline: 1,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.503257,
       ang: 1.696460,
       tex_ang: 0.000000,
       tex_zoom: 0.741923,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 0.500000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.500000,
       border_r: 0.000000,
       border_g: 0.500000,
       border_b: 1.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         //r = 0.5+0.25*sin(time*0.567)+0.25*sin(time*0.673);
         //b = 0.5+0.25*sin(time*0.617)+0.25*sin(time*0.493);
         //= 0.5+0.25*sin(time*0.771)+0.25*sin(time*0.317);
         //2 = 0.5+0.25*sin(time*0.417)+0.25*sin(time*0.773);
         //b2 = 0.5+0.25*sin(time*0.663)+0.25*sin(time*0.893);
         //g2 = 0.5+0.25*sin(time*0.317)+0.25*sin(time*0.327);
         ang = q1+ 3.1415*0.5;
         x = 0.5 + 0.1*sin(q1*1.432)+0.1*sin(q1*0.342);
         y= 0.5 + 0.1*sin(q1*1.311)+0.1*sin(q1*0.394);
       }},
      },
      {
       enabled: 0,
       sides: 3,
       additive: 0,
       thickOutline: 1,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.503257,
       ang: 1.696460,
       tex_ang: 0.000000,
       tex_zoom: 0.671653,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 0.500000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.500000,
       border_r: 0.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         //r = 0.5+0.25*sin(time*0.567)+0.25*sin(time*0.673);
         //b = 0.5+0.25*sin(time*0.617)+0.25*sin(time*0.493);
         //= 0.5+0.25*sin(time*0.771)+0.25*sin(time*0.317);
         //2 = 0.5+0.25*sin(time*0.417)+0.25*sin(time*0.773);
         //b2 = 0.5+0.25*sin(time*0.663)+0.25*sin(time*0.893);
         //g2 = 0.5+0.25*sin(time*0.317)+0.25*sin(time*0.327);
         ang = q1 - 3.1415*0.5;
         x = 0.5 + 0.1*sin(q1*1.432)+0.1*sin(q1*0.342);
         y= 0.5 + 0.1*sin(q1*1.311)+0.1*sin(q1*0.394);
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Phat_Rovastar_Eo.S. spiral_faces.milk"] = {
    fRating: 0.0,
    fGammaAdj: 1.0,
    fDecay: 0.925,
    fVideoEchoZoom: 1.001829,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 2,
    bAdditiveWaves: 1,
    bWaveDots: 1,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.099998,
    fWaveScale: 2.850136,
    fWaveSmoothing: 0.63,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.999514,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 1.0,
    wave_g: 0.0,
    wave_b: 0.0,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.005,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 1.0,
    nMotionVectorsX: 12.799995,
    nMotionVectorsY: 38.400002,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.800001,
    mv_r: 0.44,
    mv_g: 0.65,
    mv_b: 0.81,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      //flip= (-2 * above(sin(time),-0.9) )+1;
      //var=(bass+mid+treb)/3;
      //rot=((ang&rad/rad)/(var*20))/10;
      //sx=.99-(var*0.01);
      //cx=var*0.1*(ang/12);
      //sy=sx;
      
      zoom=.99;
      
      cx=0.5+q4;
      cy=0.5-q5;
      rd=sqrt( sqr( (x-0.5-q4)*2) + sqr( (y-0.5+q5)*1.5 ) );
      //zm=(1.1-(rd/4));
      zm=.99;
      
      ag=atan( (y-0.5+q5)/(x-0.5-q4) );
      star=sin(ag/5)*(2-rd);
      zm=zm+star/20;
      sx=zm;
      sy=zm;
      //rot=above(rd,0.7)/(rd+7)*(bass_att*0.1)/rd;
      dx=sin(y*100)*(bass*0.005)*ag/(rd*5);
      dy=cos(x*100)*(bass*0.005)*ag/(rd*5);
    }},
    per_frame_code: function(_){with(_){
      wave_a = 0;
      
      
      
      //Thanks to Zylot for rainbow generator
      counter1 = ifcond(equal(counter2,1),ifcond(equal(counter1,1),0,counter1+.2),1);
      counter2 = ifcond(equal(counter1,1),ifcond(equal(counter2,1),0,counter2+.2),1);
      cdelay1 = ifcond(equal(cdelay2,1),1,ifcond(equal(colorcounter%2,1),ifcond(equal(counter1,1),2 ,0), ifcond(equal(counter2,1),2,0)));
      cdelay2 = ifcond(equal(cdelay1,2),1,0);
      colorcounter = ifcond(above(colorcounter,7),0,ifcond(equal(cdelay1,1),colorcounter+1,colorcounter));
      ib_r = .5*ifcond(equal(colorcounter,1),1, ifcond(equal(colorcounter,2),1, ifcond(equal(colorcounter,3),1, ifcond(equal(colorcounter,4),sin(counter2+2.1), ifcond(equal(colorcounter,5),0, ifcond(equal(colorcounter,6),0,sin(counter1)))))));
      ib_g = .5*ifcond(equal(colorcounter,1),0, ifcond(equal(colorcounter,2),sin(counter2*.5), ifcond(equal(colorcounter,3),sin((counter1+1.75)*.4), ifcond(equal(colorcounter,4),1, ifcond(equal(colorcounter,5),1, ifcond(equal(colorcounter,6),sin(counter2+2),0))))));
      ib_b = ifcond(equal(colorcounter,1),sin(counter1+2.1), ifcond(equal(colorcounter,2),0, ifcond(equal(colorcounter,3),0, ifcond(equal(colorcounter,4),0, ifcond(equal(colorcounter,5),sin(counter1), ifcond(equal(colorcounter,6),1,1))))));
      
      
      
      //ob_r=ib_r-0.5;
      //ob_g=ib_g-0.5;
      //ob_b=ib_b-0.5;
      q1=ib_r;
      q2=ib_g;
      q3=ib_b;
      
      
      
      decay = 1;
      
      
      //echo_orient=((bass_att+mid_att+treb_att)/3)*3;
      //solarize=above(0.5,bass);
      //darken=above(0.4,treb);
      
      musictime=musictime+(mid*mid*mid)*0.02;
      
      xpos=sin(musictime*0.6)*0.3;
      ypos=sin(musictime*0.4)*0.3;
      q4=xpos;
      q5=ypos;
      
      ob_r = 0.3 - 0.3*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));
      ob_g = 0.6- 0.4*sin(time*2.924);
      ob_b = 0.35 - 0.3*cos(time*0.816);
      // = cx - 0.1*sin(time*0.342);
      // = cy + 0.1*sin(time*0.433);
      //warp =0;
      ib_size = 0.02;
      ib_r = ib_r + 0.5*sin(time*3.034);
      ib_g = ib_g + 0.5*sin(time*2.547);
      ib_b = ib_b - 0.5*sin(time*1.431);
    }},
    shapes: [
      {
       enabled: 0,
       sides: 23,
       additive: 1,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.700000,
       rad: 0.154930,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 0.010000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         y=bass_att*0.5+0.2;
         x=cos(time*2)*0.5+0.5;
       }},
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 1.801999,
       ang: 0.000000,
       tex_ang: 3.141593,
       tex_zoom: 0.572684,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         //ang = ang + (bass*.2) + (time*.4);
         //rad=1.781+(bass*0.025);
         ang=above(0.5,treb_att)*.063;
       }},
      },
      {
       enabled: 0,
       sides: 100,
       additive: 1,
       thickOutline: 0,
       textured: 1,
       x: 0.900000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 0.010000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
       per_frame_code: function(_){with(_){
         x = sin(time*5) * .4 + .5;
         y=treb_att*0.5;
         
         pow( (bass*.15),2);
       }},
      },
      {
       enabled: 0,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.033004,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 0.010000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x=.5+(bass*0.07);
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 1,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       per_point_code: function(_){with(_){
         //plot x,y,z to point on circle
         smp=sample*6.283;
         xp=sin(smp )*0.20;
         yp=cos(smp )*0.20;
         zp=0;
         
         
         //alter shape;
         angy=sin(sample*6.28*4 +t1 )*6.28;
         xq=xp*cos(angy) - zp*sin(angy);
         zq=xp*sin(angy) + zp*cos(angy);
         xp=xq;
         zp=zq;
         
         
         //rotate on y axis;
         angy=t1*0.1;
         xq=xp*cos(angy) - zp*sin(angy);
         zq=xp*sin(angy) + zp*cos(angy);
         xp=xq;
         zp=zq;
         
         //rotate on x axis
         axs1 = sin(t1*0.15) + 1.6;
         yq= yp*cos(axs1) - zp*sin(axs1);
         zq= yp*sin(axs1) + zp*cos(axs1);
         yp=yq;
         zp=zq;
         
         //rotate on y axis again
         axs2 = sin(t1*0.1)*3.3;
         xq=xp*cos(axs2) - zp*sin(axs2);
         zq=xp*sin(axs2) + zp*cos(axs2);
         xp=xq;
         zp=zq;
         
         //stretch y axis to compensate for aspect ratio
         yp=yp*1.2;
         
         //push forward into viewpace
         zp=zp+2.1;
         
         //project x,y,z into screenspace
         xs=xp/zp;
         ys=yp/zp;
         
         //center 0,0 in middle of screen
         x=xs+0.5+q4;
         y=ys+0.5+q5;
         
         r=1-q1;
         g=1-q2;
         b=1-q3;
       }},
       per_frame_code: function(_){with(_){
         basstime=basstime+(bass*bass);
         t1=basstime*0.003;
         
       }},
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Pithlit & Illusion - Symetric pattern.milk"] = {
    fRating: 3.5,
    fGammaAdj: 1.0,
    fDecay: 0.999,
    fVideoEchoZoom: 0.9995,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 6,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 4.712706,
    fWaveSmoothing: 0.9,
    fWaveParam: 1.0,
    fModWaveAlphaStart: 1.489999,
    fModWaveAlphaEnd: 0.75,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 0.203507,
    fShader: 0.0,
    zoom: 1.074096,
    rot: 1.0,
    cx: 2.0,
    cy: -1.0,
    dx: -0.98,
    dy: 1.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 1.0,
    wave_g: 0.25,
    wave_b: 0.0,
    wave_x: 0.0,
    wave_y: 0.0,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 2.4,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 5.0,
    mv_r: 0.95,
    mv_g: 0.8,
    mv_b: 0.7,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      pre_zoom=zoom-.07*acos(y*2-1)*sin(time*1.2*q1)*zoom-.07*acos(x*2-1)*sin(time*1.1*q1);
      zoom=ifcond(above(abs(zoom-1),.04),pre_zoom,.99);
      rot=ifcond(above(abs(zoom-1),2),-.4+.2*q1,0);
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.400*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );
      wave_g = wave_g + 0.400*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );
      wave_b = wave_b + 0.400*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );
      mv_r = 0.7-bass_att;
      mv_b = 0.6-treb_att;
      mv_g = 0.5-mid_att;
      rot = rot + 0.040*( 0.60*sin(0.381*time) + 0.40*sin(0.539*time) );
      zoom=max(0.98, min(0.15+0.8*bass_att, 1.75 ));
    }},
    shapes: [
      {
       enabled: 1,
       sides: 100,
       additive: 1,
       thickOutline: 1,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 0.000000,
       g: 0.000000,
       b: 0.000000,
       a: 0.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.200000,
       border_r: 1.000000,
       border_g: 0.000000,
       border_b: 0.000000,
       border_a: 1.000000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Rovastar - Twilight Tunnel.milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.96,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.63,
    fWaveParam: -0.5,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.0,
    sx: 0.980296,
    sy: 1.0,
    wave_r: 0.0,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_frame_code: function(_){with(_){
      warp = 0;
      wave_mystery = 2;
      wave_a = 0;
      q8 =oldq8+ 0.005*(pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps) + 0.035;
      oldq8 = q8;
      zoom = 1.5 +0.155*cos(q8*0.423);
      rot = 0.0128*sin(1.343*q8);
      dx = 0.0035*sin(q8*0.646);
      dy = 0.0035*sin(q8*0.314);
      cx = 0.5 + 0.005*sin(0.497*q8);
      cy = 0.5 +0.005*sin(0.413*q8);
    }},
    shapes: [
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.089632,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 0.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 0.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         //rad = rad +0.0155*cos(q8*0.423);
         border_r = 0.5 + 0.499*sin(time*0.6711);
         border_b = 0.5 + 0.499*sin(time*0.8011);
         border_g = 0.5 + 0.499*sin(time*0.7777);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 0.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         //rad = rad +0.0155*cos(q8*0.423);
         border_r = 0.5 + 0.499*sin(time*0.7642);
         border_b = 0.5 + 0.499*sin(time*0.6411);
         border_g = 0.5 + 0.499*sin(time*0.7311);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.076440,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 0.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 0.000000,
       border_b: 1.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         border_r = 0.5 + 0.499*sin(time*0.9413);
         border_b = 0.5 + 0.499*sin(time*0.2021);
         border_g = 0.5 + 0.499*sin(time*0.8549);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.067165,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 0.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         border_r = 0.5 + 0.499*sin(time*0.5157);
         border_b = 0.5 + 0.499*sin(time*0.4877);
         border_g = 0.5 + 0.499*sin(time*0.3867);
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Rovastar & Rocke - Headspin.milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.99,
    fVideoEchoZoom: 0.9996,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 1,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.8,
    fWaveScale: 0.060957,
    fWaveSmoothing: 0.9,
    fWaveParam: -0.28,
    fModWaveAlphaStart: 0.03,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 0.396381,
    fWarpScale: 0.7201,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.959069,
    rot: 0.5,
    cx: 0.5,
    cy: 0.5,
    dx: -0.002,
    dy: -0.002,
    warp: 0.01,
    sx: 1.0,
    sy: 0.999999,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.5,
    ib_size: 0.01,
    ib_r: 0.23,
    ib_g: 0.23,
    ib_b: 0.23,
    ib_a: 0.4999,
    nMotionVectorsX: 1.384,
    nMotionVectorsY: 4.320006,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 1.0,
    per_frame_code: function(_){with(_){
      warp = 0;
      wave_r = 0.225*mid_att;
      wave_g = 0.213*treb_att;
      wave_b = 0.235*bass_att;
      wave_mystery = wave_mystery + 0.15*sin(0.5*time);
      cx = cx + 0.1*sin(0.2*time);
      cy = cy + 0.1*sin(0.4*time);
      decay = decay + 0.01*sin(time);
      mv_x = 1.5;
      mv_y = 3 + 0.1*sin(time);
      mv_b = 0.5+0.4*sin(time*0.863);
      mv_g = 0.5+0.45*sin(time*0.523);
      mv_r = 0.5+0.45*sin(time*0.98);
      mv_l = 0.1+ 0.45*mv_y ;
      mv_dx = 0.5*(1-bass)+0.5*sin(time*1.1);
      mv_dy = 0.5*(1-bass)+0.5*sin(time*0.985);
      ob_r =max(bass+bass_att+treb+treb_att-5.5,0);
      ib_b = 0.5*max(bass-1,0);
      monitor = ob_r;
      ob_b = 0.12+0.1*sin(time*12);
      ob_g = 0.12+ 0.1*sin(5*time);
      warp =0;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar & Unchained - Centre Of Gravity.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.996,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 1,
    bSolarize: 1,
    bInvert: 0,
    fWaveAlpha: 0.818016,
    fWaveScale: 0.653093,
    fWaveSmoothing: 0.09,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 5.9957,
    fWarpScale: 1.331,
    fZoomExponent: 0.999994,
    fShader: 0.0,
    zoom: 1.0082,
    rot: -0.76,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.4241,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.5,
    ob_g: 0.5,
    ob_b: 0.5,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.5,
    ib_g: 0.5,
    ib_b: 0.5,
    ib_a: 0.0,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 5.0,
    mv_r: 1.0,
    mv_g: 0.0,
    mv_b: 0.01,
    mv_a: 1.0,
    per_pixel_code: function(_){with(_){
      c1=x*q1+sin(ang)*q4;
      c2=y*q2+sin(ang)*q6;
      radix=ifcond(above(q3,0),min(x-c2,y-c2),max(x*c1,y*c1));
      radix=ifcond(above(q2,0),min(radix,rad),max(radix,rad));
      rot=ifcond(above(q6,0),((sqrt(2)*0.5)-rad)*.18*q5,.2*q5*sin(rad*2.133*q7));
      zoom=ifcond(above(q2,0),zoom,ifcond(above(q3,0),1+.07*sin(q4*.2*radix),1+.07*cos(radix*10*q4)));
      zoomexp=ifcond(above(q2,0),zoomexp, ifcond(above(q3,0),1-.07*sin(q4*.2*radix), 1+.07*cos(radix*10*q4)))*rad;
    }},
    per_frame_code: function(_){with(_){
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      chaos=.9+.1*sin(pulse);
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.6)*chaos+1.6);
      bass_flop=abs(bass_flop-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.6)*chaos+1.6);
      treb_flop=abs(treb_flop-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.6)*chaos+1.6);
      mid_flop=abs(mid_flop-equal(mid_thresh,2));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      bass_residual = bass_changed*sin(pulse*3) + bnot(bass_changed)*bass_residual;
      treb_residual = treb_changed*sin(pulse*3) + bnot(treb_changed)*treb_residual;
      mid_residual = mid_changed*sin(pulse*3) + bnot(mid_changed)*mid_residual;
      pulse=ifcond(above(abs(pulse),3.14),-3.14,pulse+(bass_thresh+mid_thresh+treb_thresh)*.0035);
      entropy=ifcond(bass_changed*mid_changed*treb_changed,(1+bass_flop+treb_flop+mid_flop)*(1+rand(3)),entropy);
      q1=mid_residual;
      q2=bass_residual;
      q3=treb_residual;
      q4=sin(pulse);
      q5=cos(pulse*(.5+.1*entropy));
      q6=sin(pulse*(.5+pow(.25,entropy)));
      q7=above(q1,0)+above(q2,0)+above(q3,0)+above(q3,0)*treb_flop+above(q2,0)*bass_flop+above(q1,0)*mid_flop;
      q8=entropy;
      wave_r=wave_r+wave_r*q1;
      wave_b=wave_b+wave_b*q2;
      wave_g=wave_g+wave_g*q3;
      ob_r=ob_r+ob_r*sin(q1+q2*2.14);
      ob_b=ob_b+ob_b*sin(q2+q3*2.14);
      ob_g=ob_g+ob_g*sin(q3+q1*2.14);
      ib_r=ib_r+ib_r*cos(q5+q1*2.14);
      ib_b=ib_b+ib_*cos(q5+q2*2.14);
      ib_g=ib_g+ib_g*cos(q5+q3*2.14);
      ob_a=.25+.25*sin(q2+q3*2.14);
      ib_a=.25+.25*sin(q2*2.14+q3);
      ob_size=.1+.1*sin(q3*3+q1);
      ib_size=.1+.1*sin(q1*3+q3);
      wave_mystery=.5*q6;
      warp=0;
      wave_mode=q8%7;
      mv_x = 1.25;
      mv_y = 1.25;
      mv_dx = 0.1*sin(time);
      mv_dy = -0.1*cos(time);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar - A Million Miles from Earth (Pathfinder Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 1,
    nWaveMode: 7,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 1,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 0.438649,
    fWaveSmoothing: 0.5,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.5,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 1.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 1e-05,
    dy: 1e-05,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 1.0,
    wave_g: 1.0,
    wave_b: 1.0,
    wave_x: 0.5,
    wave_y: 0.963,
    ob_size: 0.005,
    ob_r: 0.4,
    ob_g: 0.3,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.01,
    ib_r: 1.0,
    ib_g: 0.6,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_frame_code: function(_){with(_){
      warp = 0;
      wave_r = 0.5 + 0.3*sin(time*0.894);
      wave_g = 0.53 + 0.33*sin(time*1.14);
      wave_b = 0.2 + 0.1*(1-bass);
      thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);
      dx_r = equal(thresh,2)*0.002*sin(5*time)+(1-equal(thresh,2))*dx_r;
      dy_r = equal(thresh,2)*0.002*sin(6*time)+(1-equal(thresh,2))*dy_r;
      zoom = zoom -0.01*thresh;
      dx = 1.1* dx_r;
      dy = 1.1* dy_r;
      dx = dx + ifcond(above(bass,1.3), 21*dx_r, 0);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar - Altars Of Harlequin's Madness (Dark Disorder Mix.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 0.999609,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 7,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.001,
    fWaveScale: 0.6401,
    fWaveSmoothing: 0.27,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 5.99579,
    fWarpScale: 1.331,
    fZoomExponent: 1.01,
    fShader: 0.0,
    zoom: 0.998531,
    rot: 0.002,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.96,
    ob_size: 0.0,
    ob_r: 0.0,
    ob_g: 0.9,
    ob_b: 0.2,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.5,
    ib_g: 0.5,
    ib_b: 0.5,
    ib_a: 1.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      box=(0.7*sqrt(2)-rad)+0.8*abs(x*3-0.4*sin(q1))%2 + 0.8*abs(y*3+0.4*sin(q1))%2;
      q1 = 8.3+(sin(x+0.137*q8)-cos(y+0.213*q8));
      zoom = ifcond(above(box,1),q1*.1,zoom);
      rot = ifcond(above(box,1),0.1*rad+sin(0.385*q8),rot);
      dx=ifcond(above(box,1),dx,q4*sin((y-0.5)*q3)+q5*sin((y-0.5)*q2));
      dy=ifcond(above(box,1),dy,q6*cos((x-0.5)*q2)+q7*cos((x-0.5)*q3));
    }},
    init_code: function(_){with(_){
      q8=0;
    }},
    per_frame_code: function(_){with(_){
      q8 =oldq8+ 0.001*(pow(1.2*bass+0.4*bass_att+0.2*treb+0.2*treb_att+0.2*mid+0.2*mid_att,6)/fps) +0.1/fps;
      oldq8 = q8;
      ob_r = 0.3 - 0.3*(0.5*sin(q8*0.701)+ 0.3*cos(q8*0.438));
      ob_g = 0.6- 0.4*sin(q8*2.924);
      ob_b = 0.35 - 0.3*cos(q8*0.816);
      warp =0;
      ib_size = 0.02;
      ib_r = ib_r + 0.5*sin(q8*3.034);
      ib_g = ib_g + 0.5*sin(q8*2.547);
      ib_b = ib_b - 0.5*sin(q8*1.431);
      ib_r =0;
      ib_g =0;
      ib_b =0;
      volume = 0.15*(bass_att+bass+mid+mid_att);
      beatrate = ifcond(equal(beatrate,0),1,ifcond(below(volume,0.01),1,beatrate));
      lastbeat = ifcond(equal(lastbeat,0),time,lastbeat);
      meanbass_att = 0.1*(meanbass_att*9 + bass_att);
      peakbass_att = ifcond(above(bass_att,peakbass_att),bass_att,peakbass_att);
      beat = ifcond(above(volume,0.8),ifcond(below(peakbass_att - bass_att, 0.05*peakbass_att),ifcond(above(time - lastbeat,0.1+0.5*(beatrate-0.1)),1,0),0),0);
      beatrate = max(ifcond(beat,ifcond(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);
      peakbass_att = ifcond(equal(beat,0),ifcond(above(time - lastbeat,2*beatrate),peakbass_att*0.95,peakbass_att*0.995),bass_att);
      lastbeat = ifcond(beat,time,lastbeat);
      mybeat = ifcond(beat,mybeat+1,mybeat);
      mybeat = ifcond(above(mybeat,7),0,mybeat);
      mybeat2 = ifcond(equal(mybeat,1),1,0);
      q7 = ifcond(beat*mybeat2,0.001+0.0001*rand(40),oldq7);
      oldq7=q7;
      q6 = ifcond(beat*mybeat2,0.001+0.0001*rand(40),oldq6);
      oldq6=q6;
      q5= ifcond(beat*mybeat2,0.001+0.0001*rand(40),oldq5);
      oldq5=q5;
      q4 = ifcond(beat*mybeat2,0.001+0.0001*rand(40),oldq4);
      oldq4=q4;
      Flag = ifcond(beat*mybeat2,ifcond(rand(2)-1,1,0),oldFlag);
      oldflag = flag;
      Ratio = ifcond(Beat*mybeat2,100+rand(60),oldRatio);
      OldRatio = Ratio;
      q3 = ifcond(beat*mybeat2,ifcond(flag,ratio,0.75*ratio),oldq3);
      oldq3=q3;
      q2 = ifcond(beat*mybeat2,ifcond(flag,0.75*ratio,ratio),oldq2);
      oldq2=q2;
      solarize = beat;;
    }},
    shapes: [
      {
       enabled: 1,
       sides: 32,
       additive: 0,
       thickOutline: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.200000,
       ang: 0.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.400000,
       a: 0.500000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.200000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         ang = time*0.4;;
         x = 0.5 + 0.3*cos(time*1.23) + 0.03*cos(time*0.7);
         y = 0.5 + 0.3*sin(time*1.43) + 0.03*sin(time*0.7);
         r =0.5 + 0.5*sin(q8*0.613 + 1);
         g = 0.5 + 0.5*sin(q8*0.763 + 2);
         b = 0.5 + 0.5*sin(q8*0.771 + 5);
         r2 = 0.5 + 0.5*sin(q8*0.635 + 4);
         g2 = 0.5 + 0.5*sin(q8*0.616+ 1);
         b2 = 0.5 + 0.5*sin(q8*0.538 + 3);
       }},
      },
      {
       enabled: 1,
       sides: 32,
       additive: 0,
       thickOutline: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.200000,
       ang: 0.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 0.500000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.200000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
       per_frame_code: function(_){with(_){
         ang = time*0.4;;
         x = 0.5 + 0.3*cos(time*1.104) + 0.03*cos(time*0.7);
         y = 0.5 + 0.3*sin(time*1.27) + 0.03*sin(time*0.7);
         r =0.5 + 0.5*sin(q8*0.613 + 1);
         g = 0.5 + 0.5*sin(q8*0.763 + 2);
         b = 0.5 + 0.5*sin(q8*0.771 + 5);
         r2 = 0.5 + 0.5*sin(q8*0.635 + 4);
         g2 = 0.5 + 0.5*sin(q8*0.616+ 1);
         b2 = 0.5 + 0.5*sin(q8*0.538 + 3);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.200000,
       ang: 0.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 0.500000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.200000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
       per_frame_code: function(_){with(_){
         ang = time*0.4;;
         x = 0.5 + 0.3*cos(time*1.23) + 0.03*cos(time*0.9);
         y = 0.5 + 0.3*sin(time*1.18) + 0.03*sin(time*0.9);
         r =0.5 + 0.5*sin(q8*0.413 + 1);
         g = 0.5 + 0.5*sin(q8*0.363 + 2);
         b = 0.5 + 0.5*sin(q8*0.871 + 5);
         r2 = 0.5 + 0.5*sin(q8*0.835 + 4);
         g2 = 0.5 + 0.5*sin(q8*0.686+ 1);
         b2 = 0.5 + 0.5*sin(q8*0.938 + 3);
         sides = 360;
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Rovastar - Explosive Minds.milk"] = {
    fRating: 5.0,
    fGammaAdj: 2.0,
    fDecay: 1.0,
    fVideoEchoZoom: 0.999608,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 2,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.8,
    fWaveScale: 0.011046,
    fWaveSmoothing: 0.75,
    fWaveParam: -0.42,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.0,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 1.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.9,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 1.28,
    nMotionVectorsY: 1.248,
    mv_dx: -0.06,
    mv_dy: -0.026,
    mv_l: 5.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      zoom =q1+ rad*sin(ang*25)*.05;
    }},
    per_frame_code: function(_){with(_){
      warp = 0;
      wave_r = bass_att*.3;
      wave_g = treb_att*.3;
      wave_b = mid_att*.3;
      ob_r = 0.5+0.5*sin(time*5.12);
      ob_b = 0.5+0.5*sin(time*6.112);
      ob_g = 0.5+0.5*sin(time*7.212);
      q1 = zoom + pow((bass+bass_att),3)*.005-.02;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar - Fractopia (Upspoken Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 1.0,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 0,
    nWaveMode: 3,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.0,
    fWaveScale: 0.180933,
    fWaveSmoothing: 0.75,
    fWaveParam: -0.2,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 9.8608,
    fWarpScale: 16.2174,
    fZoomExponent: 1.503744,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.999999,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.9,
    wave_g: 0.2,
    wave_b: 0.4,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 1.0,
    ob_g: 0.1,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.05,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 1.0,
    mv_g: 0.0,
    mv_b: 0.0,
    mv_a: 1.0,
    per_pixel_code: function(_){with(_){
      myy = x-q1;
      myx = y-q2+0.1;
      dx = 3*sin(q8*0.675)*(2*myx*myy);
      dy = 3*sin(q8*0.675)*((myx*myx) - (myy*myy));
    }},
    per_frame_code: function(_){with(_){
      warp = 0;
      volume = 0.3*(bass+mid+att);
      xamptarg = ifcond(equal(frame%15,0),min(0.25*volume*bass_att,0.5),xamptarg);
      xamp = xamp + 0.5*(xamptarg-xamp);
      xdir = ifcond(above(abs(xpos),xamp),-sign(xpos),ifcond(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));
      xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
      xpos = xpos + 0.001*xspeed;
      yamptarg = ifcond(equal(frame%15,0),min(0.15*volume*treb_att,0.5),yamptarg);
      yamp = yamp + 0.5*(yamptarg-yamp);
      ydir = ifcond(above(abs(ypos),yamp),-sign(ypos),ifcond(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));
      yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
      ypos = ypos + 0.001*yspeed;
      beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);
      lastbeat = lastbeat + equal(lastbeat,0)*time;
      meanbass_att = 0.1*(meanbass_att*9 + bass_att);
      peakbass_att = max(bass_att,peakbass_att);
      beat = above(volume,0.8)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));
      beatrate = max(ifcond(beat,ifcond(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);
      peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.95 + (1-above(time - lastbeat, 2*beatrate))*0.995);
      lastbeat = beat*time + (1-beat)*lastbeat;
      peakbass_att = max(peakbass_att,1.1*meanbass_att);
      wave_x = xpos + 0.5;
      wave_y = 1-(ypos + 0.5);
      wave_r = 0.5 + 0.499*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
      wave_g = 0.5 + 0.499*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
      wave_b = 0.5 + 0.499*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
      wave_mystery = -0.17 + 0.03*(0.6*sin(0.637*time) + 0.4*sin(0.949*time));
      mv_r = ifcond(beat, 1, ib_r);
      mv_b = ifcond(beat, wave_b, ib_b);
      //mv_a = if(beat, 0.1, ib_a);
      //ib_a = 0.015;
      q3 = wave_mystery;
      q1 = wave_x;
      q2 = 1-wave_y;
      q2 = ypos+0.5;
      warp=0;
      
      //q2 = 1-(ypos + 0.5);
      //q1 = 0.5;
      //q2=0.5;
      ob_r = 1-wave_g;
      ob_b = 1-wave_r;
      ob_g = 1-wave_b;
      
      monitor = wave_y;
      movement =movement + 0.4*(((bass+bass_att + 0.1*pow((bass+0.6*bass_att+0.2*treb_att),3)))/fps);
      movement = ifcond(above(movement,10000), 0, movement);
      rot =1*sin(movement);
      cx = wave_x;
      cy = y_pos+0.5;
      
      q8 = movement;
    }},
    shapes: [
      {
       enabled: 0,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.537415,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.725085,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Rovastar - Forgotten Moon.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 1.006596,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 3,
    nWaveMode: 8,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.099998,
    fWaveScale: 0.015199,
    fWaveSmoothing: 0.63,
    fWaveParam: -0.34,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.1,
    wave_y: 0.86,
    ob_size: 0.005,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.005,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 1.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.5,
    mv_r: 0.35,
    mv_g: 0.35,
    mv_b: 0.35,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      dx = 0.01*sin(100*y+q8/y);
      dy = 0.01*sin(100*x+q8/x);
    }},
    init_code: function(_){with(_){
      q8=0;
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      ib_r = 0.5+0.5*sin(time);
      ib_g = 0.5+0.5*sin(time*1.576);
      wave_r = wave_r + 0.350*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
      wave_g = wave_g + 0.350*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
      wave_b = wave_b + 0.350*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
      q8 =oldq8+ 0.0002*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
      oldq8 = q8;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar - Magic Carpet.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.98,
    fDecay: 0.994,
    fVideoEchoZoom: 1.006596,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 8,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.099998,
    fWaveScale: 0.013223,
    fWaveSmoothing: 0.63,
    fWaveParam: -0.34,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.1,
    wave_y: 0.86,
    ob_size: 0.0,
    ob_r: 0.5,
    ob_g: 0.5,
    ob_b: 0.5,
    ob_a: 0.0,
    ib_size: 0.005,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 1.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 2.4,
    mv_dx: 0.0,
    mv_dy: -0.1,
    mv_l: 5.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      dx = 0.008*sin(100*y+(q8*y));
      dy = 0.008*sin(100*x+(q8*x));
    }},
    init_code: function(_){with(_){
      q8=0;
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      q8 =oldq8+ 0.0003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
      oldq8 = q8;
      ib_r = 0.5+0.5*sin(1.123*q8);
      ib_g = 0.5+0.5*sin(q8*1.576);
      ib_b = 0.5+0.5*cos(q8*1.465);
      wave_a=0;
      decay = 0.990 + abs(0.01*sin(0.321*q8));
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar - Omnipresence Resurrection.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.7,
    fDecay: 0.97,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.099998,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.63,
    fWaveParam: -1.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 13.290894,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: -0.28,
    dy: -0.32,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.02,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.02,
    ib_r: 0.95,
    ib_g: 0.85,
    ib_b: 0.65,
    ib_a: 1.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      myzoom = log(sqrt(2)-rad) -0.25;
      zoom = ifcond(above(rad,0.4),myzoom,(0.5*sqrt(2)-rad));
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.3*sin(time*1.254);
      wave_g = wave_g +0.3*sin(time*0.952);
      wave_b = wave_b + 0.3*sin(time*0.824);
      ob_r = 0.5 + 0.4*sin(time*1.324);
      ob_g = 0.5 + 0.4*cos(time*1.371);
      ob_b = 0.5+0.4*sin(2.332*time);
      ib_r = 0.5 + 0.25*sin(time*1.424);
      ib_g = 0.25 + 0.25*cos(time*1.871);
      ib_b = 0.5+0.5*sin(2.273*time);
      volume = 0.15*(bass+bass_att+treb+treb_att+mid+mid_att);
      xamptarg = ifcond(equal(frame%15,0),min(0.5*volume*bass_att,0.5),xamptarg);
      xamp = xamp + 0.5*(xamptarg-xamp);
      xdir = ifcond(above(abs(xpos),xamp),-sign(xpos),ifcond(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));
      xaccel = xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
      xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
      xpos = xpos + 0.001*xspeed;
      dx = xpos;
      yamptarg = ifcond(equal(frame%15,0),min(0.3*volume*treb_att,0.5),yamptarg);
      yamp = yamp + 0.5*(yamptarg-yamp);
      ydir = ifcond(above(abs(ypos),yamp),-sign(ypos),ifcond(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));
      yaccel = ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
      yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
      ypos = ypos + 0.001*yspeed;
      dy = ypos;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar - Timeless Voyage.milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.98,
    fVideoEchoZoom: 0.999609,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 5,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.099998,
    fWaveScale: 1.285749,
    fWaveSmoothing: 0.9,
    fWaveParam: 0.6,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.380217,
    rot: 0.02,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.198054,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.5,
    ob_r: 0.0,
    ob_g: 1.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.55,
    ib_a: 0.0,
    nMotionVectorsX: 52.090683,
    nMotionVectorsY: 37.504894,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 4.534792,
    mv_r: 0.0,
    mv_g: 0.162823,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      rot=0.2*pow(ang,3);
      zoom=sin(pow(rad,3))+1;
    }},
    per_frame_code: function(_){with(_){
      wave_r = bass-1;
      wave_g = mid-1.2;
      wave_b = treb-.5;
      warp =0;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rozzer & Neuro - Starover (Semicolon Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.7,
    fDecay: 0.97,
    fVideoEchoZoom: 3.503422,
    fVideoEchoAlpha: 0.46,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 1,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.099998,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.63,
    fWaveParam: -1.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 4.583206,
    fWarpScale: 3.194907,
    fZoomExponent: 1.0,
    fShader: 0.01,
    zoom: 32.544483,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: -0.28,
    dy: -0.32,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.02,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.02,
    ib_r: 0.95,
    ib_g: 0.85,
    ib_b: 0.65,
    ib_a: 1.0,
    nMotionVectorsX: 24.959995,
    nMotionVectorsY: 15.239994,
    mv_dx: -0.66,
    mv_dy: 0.26,
    mv_l: 1.2,
    mv_r: 0.67,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      myzoom = log(sqrt(2)-rad) -0.25;
      
      zoom = ifcond(above(rad,0.4),myzoom,(0.5*sqrt(2)-rad));
      myzoom = myzoom - rot;
      cx =  cos(myzoom);
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.3*sin(time*1.254);
      wave_g = wave_g +0.3*sin(time*0.952);
      wave_b = wave_b + 0.3*sin(time*0.824);
      ob_r = 0.5 + 0.4*sin(time*1.324);
      ob_g = 0.5 + 0.4*cos(time*1.371);
      ob_b = 0.5+0.4*sin(2.332*time);
      ib_r = 0.5 + 0.25*sin(time*1.424);
      ib_g = 0.25 + 0.25*cos(time*1.871);
      ib_b = 0.5+0.5*sin(2.273*time);
      volume = 0.15*(bass+bass_att+treb+treb_att+mid+mid_att);
      xamptarg = ifcond(equal(frame%15,0),min(0.5*volume*bass_att,0.5),xamptarg);
      xamp = xamp + 0.5*(xamptarg-xamp);
      xdir = ifcond(above(abs(xpos),xamp),-sign(xpos),ifcond(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));
      xaccel = xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
      xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
      xpos = xpos + 0.001*xspeed;
      dx = xpos;
      yamptarg = ifcond(equal(frame%15,0),min(0.3*volume*treb_att,0.5),yamptarg);
      yamp = yamp + 0.5*(yamptarg-yamp);
      ydir = ifcond(above(abs(ypos),yamp),-sign(ypos),ifcond(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));
      yaccel = ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
      yspeed = yspeed - cy
      yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
      ypos = ypos + 0.001*yspeed;
      dy = ypos;
      zoom = cx;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Unchained - Cranked On Failure.milk"] = {
    fRating: 2.0,
    fGammaAdj: 2.0,
    fDecay: 0.98,
    fVideoEchoZoom: 0.998169,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.320553,
    fWaveScale: 100.0,
    fWaveSmoothing: 0.45,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.772,
    fZoomExponent: 1.96,
    fShader: 0.19,
    zoom: 0.999698,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.513,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.58,
    ib_size: 0.015,
    ib_r: 0.55,
    ib_g: 1.0,
    ib_b: 0.4999,
    ib_a: 1.0,
    per_pixel_code: function(_){with(_){
      radix=ifcond(above(q3,0),min(x,y),max(x,y));
      radix=ifcond(above(q2,0),min(radix,rad),max(radix,rad));
      rot=ifcond(above(q4,0),rad*.2*q5,rot+.3*sin(radix*3.14*(q1+q2+q3)));
      zoom=ifcond(above(q2,0),zoom-cos(radix*3.14*q2)*.1,ifcond(above(q3,0),1+q1*.05,1+.07*cos(radix*10*q1)));
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      chaos=.9+.1*sin(pulse);
      entropy=ifcond(bnot(entropy),2,ifcond(equal(pulse,-20),1+rand(3),entropy));
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);
      bass_flop=abs(bass_flop-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);
      treb_flop=abs(treb_flop-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);
      mid_flop=abs(mid_flop-equal(mid_thresh,2));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      bass_residual = bass_changed*sin(pulse*.1*entropy) + bnot(bass_changed)*bass_residual;
      treb_residual = treb_changed*sin(pulse*.1*entropy) + bnot(treb_changed)*treb_residual;
      mid_residual = mid_changed*sin(pulse*.1*entropy) + bnot(mid_changed)*mid_residual;
      pulse=ifcond(above(abs(pulse),20),-20,pulse+(bass_thresh+mid+thresh+treb_thresh)*.052+-(bass+treb+mid)*.01);
      q1=mid_residual;
      q2=bass_residual;
      q3=treb_residual;
      q4=sin(pulse);
      q5=sin(pulse/2);
      wave_r=wave_r+.5*bass_residual;
      wave_r=wave_g+.5*mid_residual;
      wave_r=wave_b+.5*treb_residual;
      wave_mystery=mid_residual;
      ob_r=ifcond(bass_flop,treb_flop,wave_r);
      ob_b=ifcond(treb_flop,mid_flop,wave_b);
      ob_g=ifcond(mid_flop,bass_flop,wave_g);
      ob_a=.05+.05*cos(wave_r+pulse*.03);
      ob_size=.2+.2*treb_residual;
      ib_r=ifcond(bass_flop,ob_b,ob_g);
      ib_b=ifcond(treb_flop,ob_g,ob_r);
      ib_g=ifcond(mid_flop,ob_r,ob_b);
      ib_size=ob_size*cos(wave_g+pulse*0.4)*.5;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Aderrasi - Aimless (Gravity Directive Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 3,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 0.611434,
    fWaveSmoothing: 0.0,
    fWaveParam: -0.5,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 0.9,
    fShader: 1.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.26,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_frame_code: function(_){with(_){
      wave_x = wave_x + 0.12*sin(0.2*time) - 0.15*cos(0.1*time) + 0.1*sin(0.2*time);
      wave_y = wave_y + 0.1*sin(0.3*time) - 0.2*sin(0.88*time) + 0.13*cos(0.7*time);
      dx = dx + 0.04*sin(1.24*time);
      dy = dy + 0.04*sin(1.12*time);
      wave_r = wave_r + 0.35*sin(1.13*time) + 0.1245*sin(2.34*time);
      wave_g = wave_g + 0.35*sin(1.23*time) + 0.12*sin(2.134*time);
      wave_b = wave_b + 0.35*sin(1.33*time) + 0.12*sin(2.5*time);
      wave_mystery = wave_mystery + 0.00*sin(time);
      turn = above(bass_att,turn)*2 + (1-above(bass_att,turn))*((turn-1.3)*0.96+1.3);
      turnr = equal(turn,2)*0.089*sin(time*6.6) + (1-equal(turn,2))*turnr;
      simp = simp * 0.35*sin(1.2*time) - 0.62*sin(0.7*time) + 1.5*sin(turn);
      rot = rot + 1.05*((0.25*simp)*10*turnr);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Aderrasi - Aimless (Spirogravity Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 3,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 0.611434,
    fWaveSmoothing: 0.0,
    fWaveParam: -0.5,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 0.9,
    fShader: 1.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.26,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_frame_code: function(_){with(_){
      wave_x = wave_x + 0.12*sin(0.2*time) - 0.15*cos(0.1*time) + 0.1*sin(0.2*time);
      wave_y = wave_y + 0.1*sin(0.3*time) - 0.2*sin(0.88*time) + 0.13*cos(0.7*time);
      dx = dx + 0.04*sin(1.24*time);
      dy = dy + 0.04*sin(1.12*time);
      wave_r = wave_r + 0.35*sin(1.13*time) + 0.1245*sin(2.34*time);
      wave_g = wave_g + 0.35*sin(1.23*time) + 0.12*sin(2.134*time);
      wave_b = wave_b + 0.35*sin(1.33*time) + 0.12*sin(2.5*time);
      wave_mystery = wave_mystery + 0.00*sin(time);
      turn = above(bass_att,turn)*2 + (1-above(bass_att,turn))*((turn-1.3)*0.96+1.3);
      turnr = equal(turn,2)*0.089*sin(time*6.6) + (1-equal(turn,2))*turnr;
      simp = simp * 0.35*sin(1.2*time) - 0.62*sin(0.7*time) + 1.5*sin(turn);
      rot = rot + 1.05*((0.25*simp)*10*turnr);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Aderrasi - Anchorpulse (Verified Mix).milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.0,
    fDecay: 0.95,
    fVideoEchoZoom: 1.347848,
    fVideoEchoAlpha: 0.6,
    nVideoEchoOrientation: 0,
    nWaveMode: 2,
    bAdditiveWaves: 0,
    bWaveDots: 1,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 0.266718,
    fWaveSmoothing: 0.5,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.5,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 1e-05,
    dy: 1e-05,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 0.0,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);
      dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;
      dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;
      
      orb = (0.05 + 0.25*sin(0.6*time + 0.62*cos(time))-(0.5/rad));
      
      zoom = zoom + (bass_att)*abs(0.33*(0.6*sin(1.52*time)*(0.25-rad) + ((0.5-rad)*0.8*cos(2.2*time))+ ((2*orb+(2-rad))*0.7*sin(time))))*0.4;
      
      sx = sx + (0.5-rad)*0.2*abs((above(sin(time),0))*sin(time));
      sy = sy + (0.5-rad)*0.2*abs((below(sin(time),0))*cos(time));
      
      dx = dx + dx_r;
      dy = dy+ dy_r;
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.25*sin(1.4*time) + 0.25*sin(2.25*time);
      wave_g = wave_g + 0.25*sin(1.7*time) + 0.25*sin(2.11*time);
      wave_b = wave_b + 0.25*sin(1.84*time) + 0.25*sin(2.3*time);
      warp = 0;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Aderrasi - Antidote (Aqualung Mix).milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 0.999837,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 5,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 1.599171,
    fWaveSmoothing: 0.9,
    fWaveParam: 1.0,
    fModWaveAlphaStart: 0.5,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 20.009382,
    fWarpScale: 5.427911,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 1e-05,
    dy: 1e-05,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.0,
    wave_g: 0.1,
    wave_b: 1.0,
    wave_x: 0.4,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.005,
    ib_r: 0.0,
    ib_g: 1.0,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 6.4,
    nMotionVectorsY: 4.8,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 5.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);
      dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;
      dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;
      dy = dy + 0.001;
      //warp = warp + dy_r*50* (if (above(x*cos(1.2*time), sin(1.62*time)), if(below(x*sin(1.72*time),cos(1.8*time)), if(below(y,sin(3*time)), + 1*bass, 0), 0), 0));
      rot = rot + 0.4*(1-rad)*0.5*sin(70*dy_r+dx_r*60);
      zoom = zoom + 0.01*(1-rad*2)*0.03*(0.5-rad*0.1*sin(time));
      dy = dy + (0.005*sin(cos(x*time)*1.76*sin(0.52*time*cos(max(0.075*bass_att,0.0005*time)))));
      dx = dx + (0.005*cos(sin(y*time)*1.54*sin(0.79*time*sin(max(0.075*treb_att,0.0005*time)))));
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.35*sin(4*time) + 0.15*sin(2.5*time);
      wave_g = wave_g + 0.35*sin(3.7*time) + 0.15*sin(2.11*time);
      wave_b = wave_b + 0.35*sin(3.84*time) + 0.15*sin(2.3*time);
      //wave_y = wave_y + 0.24*sin(2.5*time);
      wave_x = 0.5 + 0.25*sin(time);
      wave_y = 0.5 + 0.25*cos(time);
      ib_r = above(sin(0.2*time),-0.333)*1*below(sin(0.2*time),0.333);
      ib_g = below(sin(0.2*time),-0.333)*1;
      ib_b = above(sin(0.2*time),0.333)*1;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Aderrasi - Airhandler (Menagerie Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.7,
    fDecay: 0.99,
    fVideoEchoZoom: 0.9996,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 1,
    bAdditiveWaves: 0,
    bWaveDots: 1,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 1.053726,
    fWaveSmoothing: 0.0,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.999513,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.0101,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.9,
    ib_size: 0.005,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 0.9,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      zoom = zoom + 0.05*(sin(abs(50*sin(0.1*time))*rad) * sin(sin(time*2*sin(24*ang)*-rad))*3 * cos(rad));
      rot = rot + 0.1*sin(0.2+ 0.5*sin(time)-rad);
      cx = cx + 1.1*(0.99*(0.5-rad))*sin(0.733*time)*below(sin(time),cos(time));
      cy = cy + 1.1*(0.99*(0.5-rad))*cos(0.953*time)*above(sin(time),cos(0.5*time));
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.5*sin(time*1.13);
      wave_g = wave_g + 0.5*sin(time*1.23);
      wave_b = wave_b + 0.5*sin(time*1.33);
      
      wave_x = wave_x + 0.05*sin(time);
      wave_y = wave_y + 0.05*cos(time);
      
      ib_r = ib_r + 0.25*sin(time);
      ib_g = ib_g + 0.25*cos(time);
      ib_b = ib_b + 0.25*sin(0.5*time);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Aderrasi - Anchorpulse (Pulse Of A Ghast II Mix).milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.7,
    fDecay: 0.99,
    fVideoEchoZoom: 0.451116,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 3,
    nWaveMode: 5,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 0.535239,
    fWaveSmoothing: 0.0,
    fWaveParam: -0.8,
    fModWaveAlphaStart: 0.5,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 1e-05,
    dy: 1e-05,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.005,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);
      dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;
      dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;
      
      orb = ((0.5 - 0.5*sin(12*(sin(rad*time+ang))*(ang*time+rad)*time+rad))-2*rad);
      
      zoom = zoom + 0.1*sin(0.6*cos(0.33*(0.6*sin(1.52*time)*orb + (orb*0.8*cos(2.2*time))+ ((cos(orb))*0.7*sin(time)))))*(above(zoom,0.3)*0);
      
      sx = sx + (orb)*0.2*abs((above(sin(1.2*time),0))*sin(0.8*time));
      sy = sy + (-orb)*0.2*abs((below(sin(1.45*time),0))*cos(0.63*time));
      
      dx = dx + 2*dx_r;
      dy = dy+ 2*dy_r;
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.25*sin(1.4*time) + 0.25*sin(2.25*time);
      wave_g = wave_g + 0.25*sin(1.7*time) + 0.25*sin(2.11*time);
      wave_b = wave_b + 0.25*sin(1.84*time) + 0.25*sin(2.3*time);
      warp = 0;
      
      ob_r = wave_b;
      ob_g = wave_r;
      ob_b = wave_g;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Aderrasi - Anchorpulse (Verified Mix).milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.0,
    fDecay: 0.95,
    fVideoEchoZoom: 1.347848,
    fVideoEchoAlpha: 0.6,
    nVideoEchoOrientation: 0,
    nWaveMode: 2,
    bAdditiveWaves: 0,
    bWaveDots: 1,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 0.266718,
    fWaveSmoothing: 0.5,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.5,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 1e-05,
    dy: 1e-05,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 0.0,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);
      dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;
      dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;
      
      orb = (0.05 + 0.25*sin(0.6*time + 0.62*cos(time))-(0.5/rad));
      
      zoom = zoom + (bass_att)*abs(0.33*(0.6*sin(1.52*time)*(0.25-rad) + ((0.5-rad)*0.8*cos(2.2*time))+ ((2*orb+(2-rad))*0.7*sin(time))))*0.4;
      
      sx = sx + (0.5-rad)*0.2*abs((above(sin(time),0))*sin(time));
      sy = sy + (0.5-rad)*0.2*abs((below(sin(time),0))*cos(time));
      
      dx = dx + dx_r;
      dy = dy+ dy_r;
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.25*sin(1.4*time) + 0.25*sin(2.25*time);
      wave_g = wave_g + 0.25*sin(1.7*time) + 0.25*sin(2.11*time);
      wave_b = wave_b + 0.25*sin(1.84*time) + 0.25*sin(2.3*time);
      warp = 0;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Aderrasi - Antidote (Side Effects Mix).milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 5.427025,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 6,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 0.97236,
    fWaveSmoothing: 0.5,
    fWaveParam: 1.0,
    fModWaveAlphaStart: 0.5,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 0.01,
    fWarpScale: 1.766487,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 1e-05,
    dy: 1e-05,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.0,
    wave_g: 0.0,
    wave_b: 0.0,
    wave_x: 0.4,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 0.0,
    nMotionVectorsX: 6.4,
    nMotionVectorsY: 4.8,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 5.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      //thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);
      //dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;
      //dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;
      
      //warp = warp + dy_r*50* (if (above(x*cos(1.2*time), sin(1.62*time)), if(below(x*sin(1.72*time),cos(1.8*time)), if(below(y,sin(3*time)), + 1*bass, 0), 0), 0));
      
      dy = dy + (0.004*sin(cos(x*2.25*time)*0.86*sin(0.52*time*cos(max(0.075*bass_att,0.0005*time)))));
      dx = dx + (0.004*cos(sin(y*2.25*time)*0.94*sin(0.79*time*sin(max(0.075*treb_att,0.0005*time)))));
      dy = dy - sin((1+x)*time*0.94)*(0.005*above(y,sin(1.14*time+0.02*treb_att)));
      dx = dx + sin((0.25-y)*time*0.97)*(0.005*above(x,cos(1.2*time+0.02*bass_att)));
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.35*sin(1.4*time) + 0.15*sin(2.5*time+2*mid);
      wave_g = wave_g + 0.35*sin(1.7*time) + 0.15*sin(2.11*time+2.2*treb);
      wave_b = wave_b + 0.35*sin(1.84*time) + 0.15*sin(2.3*time+2*bass);
      //wave_y = wave_y + 0.24*sin(2.5*time);
      wave_x = 0.75 + 0.45*sin(sin(0.5*bass_att-0.4*treb_att)*sin(time));
      //warp = warp + (0.8*bass_att - 0.8*treb_att)*0.25;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Aderrasi - Antidote.milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 0.999837,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 3,
    nWaveMode: 6,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 0.97236,
    fWaveSmoothing: 0.5,
    fWaveParam: 1.0,
    fModWaveAlphaStart: 0.5,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 20.009382,
    fWarpScale: 5.427911,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 1e-05,
    dy: 1e-05,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.4,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 0.0,
    nMotionVectorsX: 6.4,
    nMotionVectorsY: 4.8,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 5.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      //thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);
      //dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;
      //dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;
      
      //warp = warp + dy_r*50* (if (above(x*cos(1.2*time), sin(1.62*time)), if(below(x*sin(1.72*time),cos(1.8*time)), if(below(y,sin(3*time)), + 1*bass, 0), 0), 0));
      
      dy = dy + (0.005*sin(cos(x*time)*1.76*sin(0.52*time*cos(max(0.075*bass_att,0.0005*time)))));
      dx = dx + (0.005*cos(sin(y*time)*1.54*sin(0.79*time*sin(max(0.075*treb_att,0.0005*time)))));
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.35*sin(4*time) + 0.15*sin(2.5*time);
      wave_g = wave_g + 0.35*sin(3.7*time) + 0.15*sin(2.11*time);
      wave_b = wave_b + 0.35*sin(3.84*time) + 0.15*sin(2.3*time);
      //wave_y = wave_y + 0.24*sin(2.5*time);
      wave_x = 0.5 + 0.15*sin(time);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Aderrasi - Antique Abyss.milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.7,
    fDecay: 0.98,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 7,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 2.000454,
    fWaveSmoothing: 0.54,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.5,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 1.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 1e-05,
    dy: 1e-05,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.7,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.3,
    ob_a: 0.2,
    ib_size: 0.05,
    ib_r: 0.0,
    ib_g: 0.2,
    ib_b: 0.3,
    ib_a: 0.1,
    nMotionVectorsX: 25.599995,
    nMotionVectorsY: 33.600002,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 5.0,
    mv_r: 0.3,
    mv_g: 0.0,
    mv_b: 0.0,
    mv_a: 0.15,
    per_pixel_code: function(_){with(_){
      thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);
      dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;
      dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;
      zoom = zoom - 0.26*rad*(0.7+0.1*sin(4*bass*time)-rad);
      dy= dy + 1.99*dy_r*(rad*sin(5*treb_att))*(1-rad);
      dx = dx + 1.5*dx_r *(rad*cos(5*bass_att))*(0.6*rad-0.7-rad);
      rot = rot + abs(0.8*(0.7*sin(bass*treb)*x-0.033*cos(ang))*(1-rad));
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + (0.35*sin(1.4*time*bass) + 0.25*sin(2.5*time))*4*treb*time;
      wave_g = wave_g + (0.35*sin(1.7*time*mid) - 0.25*sin(1.11*time))*4*bass*time;
      wave_b = wave_b + (0.35*sin(1.84*time*treb) + 0.25*sin(2.3*time))*4*mid*time;
      warp = 0;
      mv_g = 0.3 + 0.25*sin(wave_r);
      mv_r = 0.3 + 0.25*cos(wave_b);
      mv_b = 0.3 + 0.15*sin(wave_g);
      mv_x = mv_x - 3*bass;
      mv_y = mv_y - 4*treb;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Aderrasi - Ashes Of Air (Remix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.001,
    fDecay: 1.0,
    fVideoEchoZoom: 1.469141,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 5,
    bAdditiveWaves: 0,
    bWaveDots: 1,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.386134,
    fWaveScale: 1.568857,
    fWaveSmoothing: 0.0,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.999513,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.0101,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.8,
    ib_size: 0.0,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      zoom = zoom + 0.25*(0.05*bass_att + sin(sin(time+rad))*0.3 - cos(rad)*0.1);
      rot = 0.06*sin(rad);
      dx = dx + 0.008*(0.99*1-rad)*sin(0.733*time);
      dy = dy + 0.008*(0.99*1-rad)*cos(0.953*time);
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.5*sin(time*1.13);
      wave_g = wave_g + 0.5*sin(time*1.23);
      wave_b = wave_b + 0.5*sin(time*1.33);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Aderrasi - Bitterfeld (Crystal Border Mix).milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 2.448626,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 7,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 1.310603,
    fWaveSmoothing: 0.9,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.5,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 0.9999,
    fShader: 0.0,
    zoom: 0.999999,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 1e-05,
    dy: 1e-05,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.05,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 0.2,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 1.0,
    mv_g: 0.6,
    mv_b: 0.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);
      dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;
      dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;
      
      zoom = zoom - 0.2*(1.5-rad)*sin(bass/2*treb_att)*(rad*2*(rad*abs(sin(9*ang))));
      rot = rot + dy_r*(2-zoom)*0.3*cos(bass)*20;
      rot = rot - 0.4*(rad*cos(abs(12*ang)))*below(rad,0.3+ 0.4*sin(bass));
      dx = dx + 0.5*abs(rad+x-0.5*(bass/y*0.2))*dx_r;
      dy = dy + 0.5*abs(rad+y-0.5*(treb/x*0.2))*dy_r;
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.25*sin(1.4*time) + 0.25*sin(2.25*time);
      wave_g = wave_g + 0.25*sin(1.7*time) + 0.25*sin(2.11*time);
      wave_b = wave_b + 0.25*sin(1.84*time) + 0.25*sin(2.3*time);
      warp = 0;
      ib_r =wave_r;
      ib_g = wave_g;
      ib_b = wave_b;
      wave_mystery = wave_mystery + 0.3*time;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Aderrasi - Brakefreak.milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.0,
    fDecay: 0.98,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 2,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 0.88027,
    fWaveSmoothing: 0.5,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.5,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 1e-05,
    dy: 1e-05,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.02,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 1.0,
    ob_a: 1.0,
    ib_size: 0.02,
    ib_r: 1.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);
      dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;
      dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;
      
      rot = rot + 0.06*(0.1*(time))+(0.5*(0.5-rad))+rad;
      rot = rot - 0.1*sqr(0.5*cos(ang*time)*bass_att);
      zoom = zoom - 0.04*(sin(rad));
      zoom = zoom - 0.1*above(y,0.5)*sqr(0.5*sin(ang*time)*bass_att);
      zoom = zoom - 0.1*below(y,0.5)*sqr(0.5*cos(ang*time)*treb_att);
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.25*sin(1.4*time) + 0.25*sin(2.25*time);
      wave_g = wave_g + 0.25*sin(1.7*time) + 0.25*sin(2.11*time);
      wave_b = wave_b + 0.25*sin(1.84*time) + 0.25*sin(2.3*time);
      ib_r = wave_r*0.5;
      ib_g = wave_g*0.5;
      ib_b = wave_b*0.5;
      ob_r = wave_b;
      ob_g = wave_r;
      ob_b = wave_g;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Aderrasi - Chromatic Abyss (The Other Side).milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.868317,
    fWaveScale: 0.484545,
    fWaveSmoothing: 0.0,
    fWaveParam: -0.5,
    fModWaveAlphaStart: 0.5,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 0.01,
    fShader: 1.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 1e-05,
    dy: 1e-05,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.25,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      sx = sx + ifcond(above(rad, 0.38), +0.01, 0);
      sy = sy + ifcond(above(rad, 0.38), +0.01, 0);
      warp = warp + ifcond(above(rad,0.56 + 0.05*sin(time)), +0.5*(sin(rad)), 0);
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + (0.5*sin(12*treb)*3.12*time)/5;
      wave_b = wave_b + (0.5*sin(12*bass)*3.17*time)/5;
      wave_g =wave_g + (0.5*sin(12*mid)*3.22*time)/5;
      zoom = zoom + 0.01;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Aderrasi - Contortion (Xenomorph Mix).milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.301,
    fDecay: 1.0,
    fVideoEchoZoom: 0.999996,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 5,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 5.003415,
    fWaveScale: 2.630066,
    fWaveSmoothing: 0.9,
    fWaveParam: -0.4,
    fModWaveAlphaStart: 0.5,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 100.0,
    fWarpScale: 0.01,
    fZoomExponent: 11.202057,
    fShader: 1.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 1e-05,
    dy: 1e-05,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.01,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 63.936001,
    nMotionVectorsY: 47.952,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.05,
    mv_r: 0.0,
    mv_g: 0.0,
    mv_b: 0.8,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);
      dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;
      dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;
      
      rot = rot + 0.5*(0.5-rad)*(5*sin(0.48*time*dy_r)*sin(time));
      zoom = zoom - 0.015*(0.65 - 0.25*sin((dx_r+dy_r)*20*bass)+rad);
      cx = cx + .45*sin(time)*(0.75*sin(1.25*time*dy_r)*cos(0.74*sin(dx_r*2*time)));
      cy = cy + .45*cos(time)*(0.75*cos(1.6*time*dx_r)*sin(0.74*cos(dy_r*2*time)));
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.25*sin(1.4*time) + 0.25*sin(2.25*time);
      wave_g = wave_g + 0.25*sin(1.7*time) + 0.25*sin(2.11*time);
      wave_b = wave_b + 0.25*sin(1.84*time) + 0.25*sin(2.3*time);
      warp = 0;
      ob_r = 0.3 + 0.3*sin(1.56*time);
      ob_g = 0.3 + 0.3*sin(2.15*time);
      ob_b = 0.3 + 0.3*cos(1.4*time);
      ib_r = 0.3 + 0.3*cos(1.83*time);
      ib_g = 0.3 + 0.3*cos(1.02*time);
      ib_b = 0.3 + 0.3*sin(2*time);
      ing = 2*sin(0.25*time);
      wave_x = wave_x + 0.2*sin(time);
      wave_y = wave_y + 0.2*cos(time);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Aderrasi - Dark Matter (Converse Mix).milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.0,
    fDecay: 0.99,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 1,
    nWaveMode: 5,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 1.074098,
    fWaveSmoothing: 0.5,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.5,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 0.451117,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 1e-05,
    dy: 1e-05,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 0.5,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);
      dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;
      dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;
      
      zoom = zoom - abs(0.6*sin(((sin(cos(time)+0.5*sin(1.6*bass)-0.44*cos(1.1*mid))+sin(-rad)))*
      (sin(bass)*(0.5-rad))));
      zoom = zoom + 0.02*(2-rad);
      dx = dx + dx_r;
      dy = dy + dy_r;
      dx = dx + abs(0.005*(1.2*cos(bass*0.73*time) + 1.2*sin((0.5-rad)*2.1*time)));
      dy = dy + abs(0.005*(1.2*sin(bass*0.73*time) + 1.2*cos((0.5-rad)*1.3*time)));
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.25*sin(1.4*time) + 0.25*sin(2.25*time);
      wave_g = wave_g + 0.25*sin(1.7*time) + 0.25*sin(2.11*time);
      wave_b = wave_b + 0.25*sin(1.84*time) + 0.25*sin(2.3*time);
      warp = 0;
      wave_x = wave_x + 0.12*sin(time);
      wave_y = wave_y + 0.12*sin(1.24*time);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Aderrasi - Multiviola.milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 0.999998,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.5,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.5,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 1e-05,
    dy: 1e-05,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.0,
    wave_g: 0.0,
    wave_b: 0.0,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 0.0,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      thresh = above(bass_att,thresh)*2+(1-above(bass_att,thresh))*((thresh-1.3)*0.96+1.3);
      dx_r = equal(thresh,2)*0.015*sin(5*time)+(1-equal(thresh,2))*dx_r;
      dy_r = equal(thresh,2)*0.015*sin(6*time)+(1-equal(thresh,2))*dy_r;
      
      rot = rot + (tan(rad)*0.5*tan(0.8-rad))*(3*(0.7*bass));
      zoom = zoom - 0.05*sin(rad*tan(rad*time));
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.55*sin(2.4*mid*time) +0.925*cos(2.25*bass)*time;
      wave_g = wave_g + 0.55*cos(3.7*treb*time) + 0.925*tan(1.11*mid)*time;
      wave_b = wave_b + 0.55*tan(2.84*bass*time)+ 0.925*sin(3.3*treb)*-time;
      warp = 0;
      wave_x = wave_x + 0.25*sin(2*time);
      wave_y = wave_y + 0.25*cos(2*time);
      wave_mystery = wave_mystery - sqr(0.06*bass_att+(wave_x-wave_y))
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Bmelgren & Krash - Rainbow Orb Peacock (Lonely Signal Gone .milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.56,
    fDecay: 1.0,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.4,
    nVideoEchoOrientation: 1,
    nWaveMode: 6,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 1,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 64,
    nMotionVectorsY: 1,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.0,
    fWaveScale: 1.59918,
    fWaveSmoothing: 0.75,
    fWaveParam: 1.0,
    fModWaveAlphaStart: 0.85,
    fModWaveAlphaEnd: 1.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.0,
    sx: 0.844378,
    sy: 1.06152,
    wave_r: 0.4,
    wave_g: 0.4,
    wave_b: 0.4,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 0.0,
    per_pixel_code: function(_){with(_){
      rot = rot + ifcond(equal(sin(ang), 1), rot, sin(1-rad)/sqr(bass_att*1.5));
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      x_wave_x = 0.5+0.3*sin(bass+treb+mid);
      wave_r = 1 + sin(-x_wave_x*6.28);
      wave_g = abs(sin(2*x_wave_x*6.28));
      wave_b = sin(x_wave_x*6.28);
      treb_effect = ifcond(above(treb_att,1.4),pow(0.99,treb_att),1);
      net_effect = ifcond(above(bass_att,0.8*treb_att),1,treb_effect);
      zoom = net_effect*1.027;
      rot = rot + rot_residual;
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);
      shift = (tan(time*7)) -0.05;
      shift = ifcond(above(shift,0),0,ifcond(below(shift,-0.1),-0.1,shift));
      rot_residual = ifcond(equal(bass_thresh,2),shift,rot_residual);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["bmelgren - Take this highway.milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.925,
    fVideoEchoZoom: 1.006596,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 3,
    nWaveMode: 6,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.099998,
    fWaveScale: 2.850142,
    fWaveSmoothing: 0.36,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.380217,
    rot: 0.02,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.198054,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      rot=0.1*pow(ang,3);
      zoom=sin(pow(rad,3))+(.6*mid_att);
    }},
    per_frame_code: function(_){with(_){
      ff = 0.01*frame;
      wave_r = 0.5*sin(5*ff/bass)+0.5;
      wave_g = 0.5*cos(ff/mid)+0.5;
      wave_b = 0.5*cos(3*ff/treb)+0.5;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["EvilJim - Ice Drops.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.99,
    fVideoEchoZoom: 0.999601,
    fVideoEchoAlpha: 0.4999,
    nVideoEchoOrientation: 0,
    nWaveMode: 6,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 1,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 1,
    bDarken: 1,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 0.199862,
    fWaveSmoothing: 0.0,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 2.0,
    fModWaveAlphaEnd: 2.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.000353,
    fZoomExponent: 1.000157,
    fShader: 0.0,
    zoom: 0.999511,
    rot: 0.0,
    cx: 0.500001,
    cy: 0.05,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.000158,
    sy: 1.0,
    wave_r: 0.0,
    wave_g: 0.0,
    wave_b: 0.0,
    wave_x: 0.999,
    wave_y: 0.0,
    ob_size: 0.5,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.26,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    per_frame_code: function(_){with(_){
      warp=0;
      wave_r=treb;
      wave_g=mid;
      wave_b=bass;
      dy=bass/50;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Fvese - Lifesavor Anyone.milk"] = {
    fRating: 2.5,
    fGammaAdj: 1.0,
    fDecay: 0.98,
    fVideoEchoZoom: 1.008081,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.997766,
    fWaveScale: 0.65309,
    fWaveSmoothing: 0.9,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 1.489999,
    fModWaveAlphaEnd: 0.75,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 100.0,
    fShader: 0.0,
    zoom: 0.9995,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 5e-06,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.35,
    wave_g: 0.55,
    wave_b: 0.45,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.0,
    ob_g: 1.0,
    ob_b: 0.2,
    ob_a: 0.0,
    ib_size: 0.0,
    ib_r: 1.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 0.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 43.200001,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 2.5,
    mv_r: 0.7599,
    mv_g: 0.48,
    mv_b: 0.39,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      zoom = pow(rad,0.05)+.05/bass;
    }},
    per_frame_code: function(_){with(_){
      wave_r = rand(100)/100;
      wave_g = rand(100)/100;
      wave_b = rand(100)/100;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Fvese - Window Reflection 6.milk"] = {
    fRating: 5.0,
    fGammaAdj: 1.0,
    fDecay: 0.995,
    fVideoEchoZoom: 0.199862,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 0,
    nWaveMode: 5,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.0,
    fWaveScale: 0.149765,
    fWaveSmoothing: 0.9,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.5,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 0.01,
    fShader: 0.0,
    zoom: 0.9998,
    rot: 0.8,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 0.9999,
    sy: 0.9998,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.0,
    ib_g: 0.3,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 1.0,
    mv_g: 0.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      rot=zoom;
    }},
    init_code: function(_){with(_){
      myzoom=ifcond(below(q1,q6),0.3*dx,ifcond(equal(q2,q5),0.2*(1-dx),ifcond(above(q3,q4),0.3*dy,0.2*(1-dy)+ifcond(equal(q4,q3),0.3* dx, ifcond(above(q5,q2),0.25*(1-dx),ifcond(below(q6,q1),0.3*dy,0.25*(1-dy)+ifcond(equal(q7,q9),0.3*dx, ifcond(below(q8,q7),0.2*(1-dx),ifcond(equal(q9,q6),0.3*dy,0.2*(1-dy)))))))))) + .8 - 0.02*(min(q6+q1,.5))*bass_eff;
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.45*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));
      wave_b = wave_b - 0.4*(0.5*sin(time*4.782)+0.5*cos(time*0.722));
      wave_g = wave_g + 0.4*sin(time*1.931);
      vol=0.15*(bass_att+bass+mid+mid_att);
      bass_eff = max(max(bass,bass_att)-1,0);
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);
      q1=bass_eff+sin(time*mytime*4);
      q2=bas_eff+cos(time*mytime*2);
      q3=bass_eff+abs(rad+.5)+(q2*q5);
      q4=bass_thresh+abs(.9*5)*(dx_r*dy_r)*(dx*dy);
      q5=bass_tresh+cos(.2*2)*(dx_r*dy_r);
      q6=bass_thresh+0.1*(atan(abs(-rad+.5)))*q1;
      q7=ifcond(above(bass+bass_att,2),-1.5+bass+bass_att,0);
      q8=below(rad- 0.1*x,0.18);
      q9=ifcond(above(rad,.5),.9+rad,.5+bass*3%1000*.1);
      dx=q8;
      zoom=q9+0.4;
      monitor=zoom;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Geiss & Rovastar - Notions Of Tonality 2.milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.693,
    fDecay: 0.97,
    fVideoEchoZoom: 1.628259,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 6,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.2,
    fWaveScale: 1.09326,
    fWaveSmoothing: 0.1,
    fWaveParam: -0.4,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 3.259127,
    fZoomExponent: 1.0,
    fShader: 1.0,
    zoom: 1.00496,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.180378,
    sx: 0.999666,
    sy: 0.9999,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.38,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.1,
    ib_size: 0.01,
    ib_r: 0.55,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.1,
    nMotionVectorsX: 57.599998,
    nMotionVectorsY: 44.16,
    mv_dx: 0.002,
    mv_dy: 0.002,
    mv_l: 5.0,
    mv_r: 0.7,
    mv_g: 0.4,
    mv_b: 0.5,
    mv_a: 0.1,
    per_pixel_code: function(_){with(_){
      du = x*2-1 - q1;
      dv = y*2-1 - q2;
      dist = sqrt(du*du+dv*dv);
      ang2 = atan2(du,dv);
      mult = 0.008/(dist+0.4);
      dx = mult*sin(ang2-1.5);
      dy = mult*cos(ang2-1.5);
      du = x*2-1 - q3;
      dv = y*2-1 - q4;
      dist = sqrt(du*du+dv*dv);
      ang2 = atan2(du,dv);
      mult = 0.008/(dist+0.7);
      dx = dx + mult*sin(ang2+1.5);
      dy = dy + mult*cos(ang2+1.5);
    }},
    per_frame_code: function(_){with(_){
      mv_r = wave_r + 0.35*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
      mv_g = wave_g + 0.35*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
      mv_b = wave_b + 0.35*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time));
      q1 = (cx*2-1) + 0.62*( 0.60*sin(0.474*time) + 0.40*sin(0.394*time) );
      q2 = (cy*2-1) + 0.62*( 0.60*sin(0.413*time) + 0.40*sin(0.323*time) );
      q3 = (cx*2-1) + 0.62*( 0.60*sin(0.274*-time) + 0.40*sin(0.464*time) );
      q4 = (cy*2-1) + 0.62*( 0.60*sin(0.334*time) + 0.40*sin(0.371*-time) );
      decay = decay - 0.01*equal(frame%5,0);
      cy = cy + 0.1*sin(time*0.245);
      cx = cx + 0.1*cos(time*0341);
      wave_mystery = 2;
      //mv_l = 2*max(max(bass,bass_att)-1.2,0);
      warp = warp * pow(2, 0.6*sin(time*0.194));
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Geiss & Rovastar - Tokamak (Naked Intrusion Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.993,
    fDecay: 0.98,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.7,
    fWaveParam: -0.4,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.004,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.197884,
    sx: 0.999667,
    sy: 0.9999,
    wave_r: 0.55,
    wave_g: 0.55,
    wave_b: 0.55,
    wave_x: 0.5,
    wave_y: 0.68,
    ob_size: 0.01,
    ob_r: 1.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.7,
    ib_size: 0.01,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_l: 0.0,
    mv_r: 0.8,
    mv_g: 0.8,
    mv_b: 0.8,
    mv_a: 1.0,
    per_pixel_code: function(_){with(_){
      du = (x*2-1) - q1;
      dv = (y*2-1) - q2;
      dist = sqrt(du*du+dv*dv);
      ang2 = atan2(du,dv) + time*0.15;
      mult = 0.65*sin(dist*0.05);
      dx = mult*sin(ang2*2-1.5);
      dy = mult*cos(ang2*2-1.5);
    }},
    per_frame_code: function(_){with(_){
      mv_r = mv_r + 0.2*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
      mv_g = mv_g + 0.2*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
      mv_b = mv_b + 0.2*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
      q1 = (cx*2-1) + 0.6*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
      q2 = (cy*2-1) + 0.6*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
      ob_r = 1- 0.4*abs(q1);
      ob_g = 0.3*abs(q2);
      ob_b = 0.4*abs(q1);
      wave_x = 1-abs(q2)-0.05;
      wave_y = 1-abs(q1)-0.06;
      wave_r = wave_r + 0.4*( 0.60*sin(0.514*time) + 0.40*sin(1.211*time) );
      wave_b = wave_b + 0.4*( 0.60*sin(0.714*time) + 0.40*sin(q2) );
      wave_g = wave_g + 0.4*( 0.60*sin(10*q1) + 0.40*sin(10*q2) );
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Geiss - Cosmic Dust 2.milk"] = {
    fRating: 4.0,
    fGammaAdj: 1.9,
    fDecay: 0.98,
    fVideoEchoZoom: 1.16936,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 5,
    bAdditiveWaves: 1,
    bWaveDots: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 3.299999,
    fWaveScale: 1.694,
    fWaveSmoothing: 0.9,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 3.138,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.053,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.263,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.8,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.650*( 0.60*sin(1.437*time) + 0.40*sin(0.970*time) );
      wave_g = wave_g + 0.650*( 0.60*sin(1.344*time) + 0.40*sin(0.841*time) );
      wave_b = wave_b + 0.650*( 0.60*sin(1.251*time) + 0.40*sin(1.055*time) );
      rot = rot + 0.010*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
      cx = cx + 0.210*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
      cy = cy + 0.210*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
      dx = dx + 0.010*( 0.60*sin(0.234*time) + 0.40*sin(0.277*time) );
      dy = dy + 0.010*( 0.60*sin(0.284*time) + 0.40*sin(0.247*time) );
      decay = decay - 0.01*equal(frame%6,0);
      dx = dx + dx_residual;
      dy = dy + dy_residual;
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);
      dx_residual = equal(bass_thresh,2)*0.016*sin(time*7) + (1-equal(bass_thresh,2))*dx_residual;
      dy_residual = equal(bass_thresh,2)*0.012*sin(time*9) + (1-equal(bass_thresh,2))*dy_residual;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Geiss - Cruzin'.milk"] = {
    fGammaAdj: 2.0,
    fDecay: 0.98,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 6,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.0,
    fWaveScale: 1.691672,
    fWaveSmoothing: 0.5,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 3.138,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0003,
    rot: 0.0,
    cx: 0.5,
    cy: 0.11,
    dx: 0.0,
    dy: -0.001,
    warp: 0.0243,
    sx: 1.001992,
    sy: 1.004987,
    wave_r: 0.0,
    wave_g: 0.57,
    wave_b: 1.0,
    wave_x: 0.65,
    wave_y: 0.5,
    fRating: 4.0,
    per_pixel_code: function(_){with(_){
      du = (x-cx)*2;
      dv = (y-cy)*2;
      q = 0.01*pow(du*du+dv*dv,1.5);
      dx = q*du;
      dy = q*dv;
      
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.250*( 0.60*sin(10.937*time) + 0.40*sin(1.470*time) );
      wave_g = wave_g + 0.300*( 0.60*sin(11.344*time) + 0.40*sin(1.041*time) );
      wave_b = wave_b + 0.250*( 0.60*sin(21.251*time) + 0.40*sin(1.355*time) );
      rot = rot + 0.004*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
      cx = cx + 0.110*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
      cy = cy + 0.110*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
      decay = decay - 0.01*equal(frame%6,0);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Geiss - Downward Spiral.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.9,
    fDecay: 0.98,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 7,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.0,
    fWaveScale: 2.717574,
    fWaveSmoothing: 0.9,
    fWaveParam: 1.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 2.853,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.99,
    rot: 0.06,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.0,
    sx: 1.0,
    sy: 0.9999,
    wave_r: 1.0,
    wave_g: 0.4,
    wave_b: 0.1,
    wave_x: 0.5,
    wave_y: 0.6,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      rot=rot*(-0.2+pow(cos(rad*8+ang-time*0.8),2));
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.120*( 0.60*sin(0.733*time) + 0.40*sin(0.345*time) );
      wave_g = wave_g + 0.120*( 0.60*sin(0.600*time) + 0.40*sin(0.456*time) );
      wave_b = wave_b + 0.100*( 0.60*sin(0.510*time) + 0.40*sin(0.550*time) );
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Geiss - Dynamic Swirls 1.milk"] = {
    fGammaAdj: 2.7,
    fDecay: 0.97,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 7,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.0,
    fWaveScale: 0.634243,
    fWaveSmoothing: 0.1,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.00496,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.000156,
    sx: 0.999666,
    sy: 0.9999,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.38,
    fRating: 2.0,
    per_pixel_code: function(_){with(_){
      du = x*2-1 - q1;
      dv = y*2-1 - q2;
      dist = sqrt(du*du+dv*dv);
      ang2 = atan2(du,dv);
      mult = 0.008/(dist+0.4);
      dx = mult*sin(ang2-1.5);
      dy = mult*cos(ang2-1.5);
      du = x*2-1 - q3;
      dv = y*2-1 - q4;
      dist = sqrt(du*du+dv*dv);
      ang2 = atan2(du,dv);
      mult = 0.008/(dist+0.4);
      dx = dx + mult*sin(ang2+1.5);
      dy = dy + mult*cos(ang2+1.5);
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.350*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
      wave_g = wave_g + 0.350*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
      wave_b = wave_b + 0.350*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
      q1 = (cx*2-1) + 0.62*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
      q2 = (cy*2-1) + 0.62*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
      q3 = (cx*2-1) + 0.62*( 0.60*sin(0.174*-time) + 0.40*sin(0.364*time) );
      q4 = (cy*2-1) + 0.62*( 0.60*sin(0.234*time) + 0.40*sin(0.271*-time) );
      decay = decay - 0.01*equal(frame%5,0);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Geiss - Dynamic Swirls 2.milk"] = {
    fGammaAdj: 2.7,
    fDecay: 0.98,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 6,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.1,
    fWaveScale: 4.695139,
    fWaveSmoothing: 0.9,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.67,
    fModWaveAlphaEnd: 0.97,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.007964,
    rot: 0.02,
    cx: 0.499999,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.000156,
    sx: 0.999667,
    sy: 0.9999,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.7,
    fRating: 2.0,
    per_pixel_code: function(_){with(_){
      du = x*2-1 - q1;
      dv = y*2-1 - q2;
      dist = sqrt(du*du+dv*dv);
      ang2 = atan2(du,dv);
      mult = 0.012/(dist+0.4);
      dx = mult*sin(ang2-1.5);
      dy = mult*cos(ang2-1.5);
      du = x*2-1 - q3;
      dv = y*2-1 - q4;
      dist = sqrt(du*du+dv*dv);
      ang2 = atan2(du,dv);
      mult = 0.012/(dist+0.4);
      dx = dx + mult*sin(ang2+1.5);
      dy = dy + mult*cos(ang2+1.5);
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.350*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
      wave_g = wave_g + 0.350*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
      wave_b = wave_b + 0.350*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
      q1 = (cx*2-1) + 0.32*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
      q2 = (cy*2-1) + 0.52*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
      q3 = (cx*2-1) + 0.32*( 0.60*sin(0.174*-time) + 0.40*sin(0.364*time) );
      q4 = (cy*2-1) + 0.52*( 0.60*sin(0.234*time) + 0.40*sin(0.271*-time) );
      decay = decay - 0.01*equal(frame%5,0);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Geiss - Eggs.milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.97,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 2,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 3.5,
    fWaveScale: 2.72,
    fWaveSmoothing: 0.77,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 2.853,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.046,
    rot: 0.02,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.42,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.6,
    wave_g: 0.6,
    wave_b: 0.6,
    wave_x: 0.5,
    wave_y: 0.47,
    per_pixel_code: function(_){with(_){
      zoom=zoom+0.27*sin(time*1.55+rad*5);
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.400*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );
      wave_g = wave_g + 0.400*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );
      wave_b = wave_b + 0.400*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );
      zoom = zoom + 0.023*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );
      rot = rot + 0.030*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
      cx = cx + 0.070*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
      cy = cy + 0.070*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Geiss - El Cubismo.milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.97,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 2,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 3.5,
    fWaveScale: 2.72,
    fWaveSmoothing: 0.77,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 2.853,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.046,
    rot: 0.02,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.42,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.6,
    wave_g: 0.6,
    wave_b: 0.6,
    wave_x: 0.5,
    wave_y: 0.47,
    per_pixel_code: function(_){with(_){
      dx=dx-0.05*sin(time*1.35+(x*2-1)*18);
      dy=dy-0.05*sin(time*1.79+(y*2-1)*9);
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.400*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );
      wave_g = wave_g + 0.400*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );
      wave_b = wave_b + 0.400*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );
      zoom = zoom + 0.023*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );
      rot = rot + 0.030*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
      cx = cx + 0.070*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
      cy = cy + 0.070*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Geiss - Oldskool Mellowstyle.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.5,
    fDecay: 0.98,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 6,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.0,
    fWaveScale: 1.605,
    fWaveSmoothing: 0.558,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.87,
    fModWaveAlphaEnd: 1.2899,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 2.853,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.064,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.0,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.7,
    wave_g: 0.7,
    wave_b: 0.7,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.3*( 0.60*sin(0.633*time) + 0.40*sin(0.845*time) );
      wave_g = wave_g + 0.3*( 0.60*sin(0.370*time) + 0.40*sin(0.656*time) );
      wave_b = wave_b + 0.3*( 0.60*sin(0.740*time) + 0.40*sin(0.520*time) );
      zoom = zoom + 0.013*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );
      rot = rot + 0.030*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
      decay = decay - 0.01*equal(frame%50,0);
      zoom=zoom+(bass_att-1)*0.001;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Geiss - Swirlie 4.milk"] = {
    fRating: 1.0,
    fGammaAdj: 1.994,
    fDecay: 0.97,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 1,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.499998,
    fWaveScale: 1.524161,
    fWaveSmoothing: 0.9,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 0.334695,
    fWarpScale: 3.928016,
    fZoomExponent: 2.1,
    fShader: 0.0,
    zoom: 0.961,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.771011,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.5,
    ib_size: 0.0285,
    ib_r: 0.34,
    ib_g: 0.34,
    ib_b: 0.34,
    ib_a: 0.1,
    per_frame_code: function(_){with(_){
      wave_x = wave_x + 0.2900*( 0.60*sin(2.121*time) + 0.40*sin(1.621*time) );
      wave_y = wave_y + 0.2900*( 0.60*sin(1.742*time) + 0.40*sin(2.322*time) );
      wave_r = wave_r + 0.350*( 0.60*sin(0.823*time) + 0.40*sin(0.916*time) );
      wave_g = wave_g + 0.350*( 0.60*sin(0.900*time) + 0.40*sin(1.023*time) );
      wave_b = wave_b + 0.350*( 0.60*sin(0.808*time) + 0.40*sin(0.949*time) );
      blah = 0.5/(wave_r+wave_g+wave_b);
      wave_r = wave_r*blah; wave_g = wave_g*blah; wave_b = wave_b*blah;
      rot = rot + 0.35*( 0.60*sin(0.21*time) + 0.30*sin(0.339*time) );
      cx = cx + 0.30*( 0.60*sin(0.374*time) + 0.14*sin(0.194*time) );
      cy = cy + 0.37*( 0.60*sin(0.274*time) + 0.10*sin(0.394*time) );
      dx = dx + 0.01*( 0.60*sin(0.324*time) + 0.40*sin(0.234*time) );
      dy = dy + 0.01*( 0.60*sin(0.244*time) + 0.40*sin(0.264*time) );
      ib_r = ib_r + 0.2*sin(time*0.5413);
      ib_g = ib_g + 0.2*sin(time*0.6459);
      ib_b = ib_b + 0.2*sin(time*0.7354);
      blah = 12.4/(ib_r+ib_g+ib_b)*3;
      ib_r = ib_r*blah; ib_g = ib_g*blah; ib_b = ib_b*blah;
      
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Geiss - Swirlie 5.milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.994,
    fDecay: 0.99,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 7,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.0,
    fWaveScale: 1.693514,
    fWaveSmoothing: 0.9,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 0.451118,
    fWarpScale: 3.928016,
    fZoomExponent: 2.1,
    fShader: 0.0,
    zoom: 0.961,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 7.397955,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.95,
    ob_size: 0.03,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.5,
    ib_size: 0.01,
    ib_r: 0.34,
    ib_g: 0.34,
    ib_b: 0.34,
    ib_a: 0.5,
    per_frame_code: function(_){with(_){
      wave_x = wave_x + 0.0200*( 0.60*sin(0.821*time) + 0.40*sin(0.621*time) );
      wave_y = wave_y + 0.0200*( 0.60*sin(0.942*time) + 0.40*sin(0.722*time) );
      wave_r = wave_r + 0.350*( 0.60*sin(0.823*time) + 0.40*sin(0.916*time) );
      wave_g = wave_g + 0.350*( 0.60*sin(0.900*time) + 0.40*sin(1.023*time) );
      wave_b = wave_b + 0.350*( 0.60*sin(0.808*time) + 0.40*sin(0.949*time) );
      rot = rot + 0.35*( 0.60*sin(0.21*time) + 0.30*sin(0.339*time) );
      cx = cx + 0.30*( 0.60*sin(0.374*time) + 0.14*sin(0.194*time) );
      cy = cy + 0.37*( 0.60*sin(0.274*time) + 0.10*sin(0.394*time) );
      ib_r = ib_r + 0.2*sin(time*0.5413);
      ib_g = ib_g + 0.2*sin(time*0.6459);
      ib_b = ib_b + 0.2*sin(time*0.7354);
      
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Krash & Rovastar - Altars of Madness (Mad Ocean Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.98,
    fDecay: 1.0,
    fVideoEchoZoom: 1.006596,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 5,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.099998,
    fWaveScale: 0.660126,
    fWaveSmoothing: 0.0,
    fWaveParam: 0.3,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.005,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 1.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.5,
    mv_r: 0.15,
    mv_g: 0.45,
    mv_b: 0.65,
    mv_a: 0.2,
    per_pixel_code: function(_){with(_){
      dx=dx+0.008*sin((y*2-1)*(48+12*sin(0.412*time)))+0.008*sin(((y+sin(time*0.163))*2-1)*(3+sin(0.241*time)));
      dy=dy+0.008*cos((x*2-1)*(64+18*sin(0.376*time)))+0.008*cos(((x+sin(time*0.282))*2-1)*(3+sin(0.349*time)));
    }},
    init_code: function(_){with(_){
      q8=0;
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      ib_a =0.2*bass;
      wave_r = wave_r + 0.45*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));
      wave_b = wave_b - 0.4*(0.5*sin(time*4.782)+0.5*cos(time*0.522));
      wave_g = wave_g + 0.4*sin(time*1.731);
      decay = decay - equal(frame%100,0)*0.1;
      vol = 0.167*(bass+mid);
      xamptarg = ifcond(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);
      xamp = xamp + 0.5*(xamptarg-xamp);
      xdir = ifcond(above(abs(xpos),xamp),-sign(xpos),ifcond(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));
      xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
      xpos = xpos + 0.001*xspeed;
      wave_x = 1.5*xpos + 0.5;
      yamptarg = ifcond(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);
      yamp = yamp + 0.5*(yamptarg-yamp);
      ydir = ifcond(above(abs(ypos),yamp),-sign(ypos),ifcond(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));
      yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
      ypos = ypos + 0.001*yspeed;
      wave_y = 1.5*ypos + 0.5;
      zoom = .995;
      wave_x = ifcond(frame%2,1-wave_x,wave_x);
      wave_y = ifcond(frame%2,1-wave_y,wave_y);
      wave_r = ifcond(frame%2,wave_r,wave_g);
      wave_g = ifcond(frame%2,wave_g,wave_b);
      wave_b = ifcond(frame%2,wave_b,wave_r);
      monitor = green;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Krash & TEcHNO - Rhythmic Mantas.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.7,
    fDecay: 0.995,
    fVideoEchoZoom: 1.000224,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 6,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.0031,
    fWaveScale: 1.004873,
    fWaveSmoothing: 0.0,
    fWaveParam: -1.0,
    fModWaveAlphaStart: 1.01,
    fModWaveAlphaEnd: 1.01,
    fWarpAnimSpeed: 0.999994,
    fWarpScale: 1.002083,
    fZoomExponent: 1.00183,
    fShader: 1.0,
    zoom: 0.995048,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.01,
    dy: 0.01,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.0,
    wave_g: 0.0,
    wave_b: 0.0,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.05,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 1.0,
    nMotionVectorsY: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 1.0,
    per_pixel_code: function(_){with(_){
      dx = dx*pow(-1,0&(13+q1 - 5*(q2*y)))*min(bass,1.2);
      dy = dy*pow(-1,0&(13+q1 - 5*(q3*x)))*min(bass,1.2);
    }},
    per_frame_code: function(_){with(_){
      volume = 0.3*(bass+mid+att);
      beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);
      lastbeat = lastbeat + equal(lastbeat,0)*time;
      meanbass_att = 0.1*(meanbass_att*9 + bass_att);
      peakbass_att = max(bass_att,peakbass_att);
      beat = above(volume,0.8)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));
      beatrate = max(ifcond(beat,ifcond(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);
      peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.95 + (1-above(time - lastbeat, 2*beatrate))*0.995);
      lastbeat = beat*time + (1-beat)*lastbeat;
      peakbass_att = max(peakbass_att,1.1*meanbass_att);
      mode = ifcond(beat,rand(4),mode);
      q1 = ((time*20)%50)*0.08;
      q2 = 1 - below(mode,2)*2;
      q3 = 1 - 2*(mode%2);
      wave_x = 1-below(mode,2);
      wave_mystery = (frame%2)*(2*(1-equal(mode%3,0))-1);
      wave_r=ifcond(below(frame%6,3),bass*0.5,0);
      wave_b=0.9+sin(time)*0.1;
      wave_g=ifcond(above(frame%6,2),bass*0.5,0);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Krash - Digital Flame.milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.9,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 6,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.0,
    fWaveScale: 0.3697,
    fWaveSmoothing: 0.75,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 53.523884,
    fWarpScale: 0.408391,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.0,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.6999,
    wave_g: 0.6,
    wave_b: 0.8,
    wave_x: 0.0,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.0,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 0.0,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      dy = -0.1*(q1-1)*log(2-(abs(y*2 - 1.8)));
      dy = below(dy,0.02)*dy - 0.02;
      dy = dy + 0.01*(sin((x*q2*0.483) + (y*q2*1.238)) + sin((x*q2*1.612) + (y*q2*0.648)));
    }},
    per_frame_code: function(_){with(_){
      q1 = (bass_att + mid_att + treb_att) /3;
      q2 = time + 1000;
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.4)*0.95+1.4);
      treb_thresh = above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.5)*0.85+1.2);
      bass_on = above(bass_thresh,1.9);
      treb_on = above(treb_thresh,1.9);
      swapcolour = bass_on - treb_on;
      red_aim = ifcond(equal(swapcolour,1),1,ifcond(equal(swapcolour,0),0.9,0.7));
      green_aim = ifcond(equal(swapcolour,1),0.7,ifcond(equal(swapcolour,0),0.3,0.6));
      blue_aim = ifcond(equal(swapcolour,1),0,ifcond(equal(swapcolour,0),0.2,0.8));
      red = red + (red_aim - red)*0.5;
      green = green + (green_aim - green)*0.5;
      blue = blue + (blue_aim - blue)*0.5;
      wave_r = red;
      wave_g = green;
      wave_b = blue;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Krash - Dynamic Borders 1.milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.7,
    fDecay: 0.99,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 7,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 1,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.001,
    fWaveScale: 0.634243,
    fWaveSmoothing: 0.1,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 0.99999,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.000156,
    sx: 0.999666,
    sy: 0.9999,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.38,
    ob_size: 0.02,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.1,
    ib_size: 0.05,
    ib_r: 0.5,
    ib_g: 0.5,
    ib_b: 0.5,
    ib_a: 0.1,
    per_pixel_code: function(_){with(_){
      du = x*2-1 - q1;
      dv = y*2-1 - q2;
      dist = sqrt(du*du+dv*dv);
      ang2 = atan2(du,dv);
      mult = 0.008/(dist+0.4);
      dx = mult*sin(ang2-1.5);
      dy = mult*cos(ang2-1.5);
      du = x*2-1 - q3;
      dv = y*2-1 - q4;
      dist = sqrt(du*du+dv*dv);
      ang2 = atan2(du,dv);
      mult = 0.008/(dist+0.4);
      dx = dx + mult*sin(ang2+1.5);
      dy = dy + mult*cos(ang2+1.5);
      dx = dx*1.5;
      dy = dy*1.5;
    }},
    per_frame_code: function(_){with(_){
      warp = 0;
      
      ib_r = ib_r + 0.10*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
      ib_g = ib_g + 0.10*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
      ib_b = ib_b + 0.10*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
      temp = 0.12*tan(0.3*(mid+bass));
      ib_a = ifcond(below(temp,0.4),temp,0.4);
      ob_size = ob_size - 0.01;
      ob_size = ob_size + 0.15*sin(0.5*bass_att);
      q1 = (cx*2-1) + 0.62*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
      q2 = (cy*2-1) + 0.62*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
      q3 = (cx*2-1) + 0.62*( 0.60*sin(0.174*-time) + 0.40*sin(0.364*time) );
      q4 = (cy*2-1) + 0.62*( 0.60*sin(0.234*time) + 0.40*sin(0.271*-time) );
      decay = decay - 0.01*equal(frame%5,0);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Krash - Interwoven (Nightmare Weft Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 1.0,
    fVideoEchoZoom: 1.816695,
    fVideoEchoAlpha: 0.4,
    nVideoEchoOrientation: 1,
    nWaveMode: 5,
    bAdditiveWaves: 1,
    bWaveDots: 1,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 1,
    bDarken: 1,
    bSolarize: 1,
    bInvert: 0,
    fWaveAlpha: 1.0,
    fWaveScale: 0.498315,
    fWaveSmoothing: 0.75,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.0,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.95,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 0.0,
    nMotionVectorsX: 31.199999,
    nMotionVectorsY: 2.280001,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 2.5,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 0.8,
    mv_a: 0.1,
    per_pixel_code: function(_){with(_){
      dy = 0.004 + 0.0005*sin(10*x+0.459*time) + 0.0005*sin(14*x+0.325*time) + 0.0005*sin(1.231*time);
      //dx = dx + 0.0001*sin(9*y+0.612*time) + 0.0001*sin(13*y+0.429*time) + 0.0001*sin(1.027*time);
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      
      framethird = frame%3;
      
      x1 = 0.5 + 0.15*sin(0.416*time) + 0.15*sin(0.832*time) + 0.1*sin(1.324*time);
      x2 = 0.5 + 0.15*sin(0.341*time) + 0.15*sin(0.768*time) + 0.1*sin(1.523*time);
      x3 = 0.5 + 0.15*sin(0.287*time) + 0.15*sin(0.913*time) + 0.1*sin(1.142*time);
      r1 = 0.5 + 0.15*sin(0.512*time) + 0.15*sin(0.943*time) + 0.1*sin(1.024*time);
      r2 = 0.5 + 0.15*sin(0.483*time) + 0.15*sin(0.879*time) + 0.1*sin(1.423*time);
      r3 = 0.5 + 0.15*sin(0.531*time) + 0.15*sin(0.671*time) + 0.1*sin(1.442*time);
      g1 = 0.5 + 0.15*sin(0.248*time) + 0.15*sin(0.829*time) + 0.1*sin(1.623*time);
      g2 = 0.5 + 0.15*sin(0.461*time) + 0.15*sin(0.699*time) + 0.1*sin(1.254*time);
      g3 = 0.5 + 0.15*sin(0.397*time) + 0.15*sin(0.768*time) + 0.1*sin(1.157*time);
      b1 = 0.5 + 0.15*sin(0.211*time) + 0.15*sin(0.652*time) + 0.1*sin(1.865*time);
      b2 = 0.5 + 0.15*sin(0.333*time) + 0.15*sin(0.978*time) + 0.1*sin(1.359*time);
      b3 = 0.5 + 0.15*sin(0.475*time) + 0.15*sin(0.791*time) + 0.1*sin(1.011*time);
      wave_x = ifcond(equal(framethird,0),x1,ifcond(equal(framethird,1),x2,x3));
      wave_r = ifcond(equal(framethird,0),r1,ifcond(equal(framethird,1),r2,r3));
      wave_g = ifcond(equal(framethird,0),g1,ifcond(equal(framethird,1),g2,g3));
      wave_b = ifcond(equal(framethird,0),b1,ifcond(equal(framethird,1),b2,b3));
      
      volume = 0.3*(bass+mid);
      beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);
      lastbeat = lastbeat + equal(lastbeat,0)*time;
      meanbass_att = 0.1*(meanbass_att*9 + bass_att);
      peakbass_att = max(bass_att,peakbass_att);
      beat = above(volume,0.8)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));
      beatrate = max(ifcond(beat,ifcond(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);
      peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.99 + (1-above(time - lastbeat, 2*beatrate))*0.998);
      lastbeat = beat*time + (1-beat)*lastbeat;
      peakbass_att = max(peakbass_att,1.1*meanbass_att);
      dx = ifcond(beat,1-2*rand(2),0);
      ob_a = ifcond(beat,0,0.65);
      mv_a = ifcond(beat,1,0.05);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Krash - War Machine (Shifting Complexity Mix).milk"] = {
    fRating: 4.0,
    fGammaAdj: 2.0,
    fDecay: 1.0,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.0,
    fWaveScale: 0.999996,
    fWaveSmoothing: 0.75,
    fWaveParam: -0.4999,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.9999,
    rot: 0.1,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.0,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.8,
    wave_g: 0.2,
    wave_b: 0.2,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.1,
    ib_size: 0.5,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 0.0,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      cx = ((0&(x*q2-0.5))+0.5)*q3;
      cy = ((0&(y*q4-0.5))+0.5)*q5;
      rot = rot*pow(-1,(0&(x*q2-0.5)) + (0&(y*q4-0.5)))*q1;
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      wave_r = wave_r + 0.45*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));
      wave_b = wave_b - 0.4*(0.5*sin(time*4.782)+0.5*cos(time*0.522));
      wave_g = wave_g + 0.4*sin(time*1.731);
      ob_r = above(bass_att,bass)*(bass_att-bass)*4;
      volume = 0.3*(bass+mid+att);
      beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);
      lastbeat = lastbeat + equal(lastbeat,0)*time;
      meanbass_att = 0.1*(meanbass_att*9 + bass_att);
      peakbass_att = max(bass_att,peakbass_att);
      beat = above(volume,0.8)*below(peakbass_att - bass_att, 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));
      beatrate = max(ifcond(beat,ifcond(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);
      peakbass_att = beat*bass_att + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.95 + (1-above(time - lastbeat, 2*beatrate))*0.995);
      lastbeat = beat*time + (1-beat)*lastbeat;
      peakbass_att = max(peakbass_att,1.1*meanbass_att);
      beatcounter = beatcounter + beat;
      mode = ifcond(beat*equal(beatcounter%2,0),1-mode,mode);
      mode2 = ifcond(beat,(mode2 + rand(7) + 1)%8,mode2);
      mode3 = ifcond(beat,(mode3 + rand(7) + 1)%8,mode3);
      q1 = 2*mode-1;
      q2 = mode2 + 2;
      q3 = 1/q2;
      q4 = mode3 + 2;
      q5 = 1/q4;
      wave_x = (rand(q2)+0.5)*q3;
      wave_y = (rand(q4)+0.5)*q5;
      decay = decay - 0.1*equal(frame%50,0);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["nil - Can't Stop the Cramming.milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.0,
    fDecay: 0.992,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 3,
    nWaveMode: 4,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.099998,
    fWaveScale: 1.096512,
    fWaveSmoothing: 0.0,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.0,
    fModWaveAlphaEnd: 0.78,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 0.473261,
    fShader: 0.0,
    zoom: 0.869963,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.002,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 1.0,
    wave_g: 1.0,
    wave_b: 1.0,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.5,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.26,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 1.024,
    nMotionVectorsY: 1.008003,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 5.0,
    mv_r: 1.0,
    mv_g: 0.6,
    mv_b: 0.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      zoom=zoom+abs(sin(ang)*.2);
    }},
    per_frame_code: function(_){with(_){
      q1=zoom;
      wave_mystery=sin(3.654*time)*sin(2.765*time);
      wave_r=sin(bass);
      wave_g=sin(treb);
      wave_b=sin(mid);
      zoom=(bass+q1)/2.2;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Phat_Eo.S._Algorithm.milk"] = {
    fRating: 0.0,
    fGammaAdj: 1.0,
    fDecay: 0.925,
    fVideoEchoZoom: 1.001829,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 2,
    bAdditiveWaves: 1,
    bWaveDots: 1,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.099998,
    fWaveScale: 2.850136,
    fWaveSmoothing: 0.63,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.999514,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 1.0,
    wave_g: 0.0,
    wave_b: 0.0,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.005,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 1.0,
    nMotionVectorsX: 12.799995,
    nMotionVectorsY: 38.400002,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.800001,
    mv_r: 0.44,
    mv_g: 0.65,
    mv_b: 0.81,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      //flip= (-2 * above(sin(time),-0.9) )+1;
      //var=(bass+mid+treb)/3;
      //rot=((ang&rad/rad)/(var*20))/10;
      //sx=.99-(var*0.01);
      //cx=var*0.1*(ang/12);
      //sy=sx;
      
      zoom=-.96-(bass*0.03);
      
      //cx=0.5+q4;
      //cy=0.5-q5;
      rd=sqrt( sqr( (x-0.5-q4)*2) + sqr( (y-0.5+q5)*1.5 ) );
      //zm=(1.1-(rd/4));
      zm=1;
      
      ag=atan( (y-0.5+q5)/(x-0.5-q4) );
      star=sin(rd/5)*(2-rd);
      zm=zm+star/20;
      sx=zm;
      sy=zm;
      rot=above(rd,0.7)/(rd+7)*(bass_att*0.1)/rd;
      dx=sin(y*140)*(bass*0.005)*sin(ag);
      dy=cos(x*140)*(bass*0.005)*cos(ag);
      
      
      
      sect_a=ifcond( below(x,0.333), 1, 0 );
      sect_b=ifcond( below(x,0.666), 1, 0 );
      sect_b=ifcond( above(x,0.333), sect_b, 0 );
      sect_c=ifcond( above(x,0.666), 1, 0 );
      
      cy_a=( bass_att)*q1 + 0.5 +rd-ag;
      cy_b=( bass_att)*q2 - 1.2 +ag;
      cy_c=( bass_att)*q3 + 0.5 +rd-ag;
      
      cx=(sect_a*0.166 + sect_b*0.5 + sect_c*0.833)*rd;
      cy=(sect_a/cy_a + sect_b/cy_b + sect_c/cy_c)*rd;
    }},
    per_frame_code: function(_){with(_){
      wave_a = 0;
      
      ib_r=tan(time*2);
      ib_r=min(ib_r,1);
      ib_r=max(ib_r,0);
      ib_g=tan(time*2+2.1);
      ib_g=min(ib_g,1);
      ib_g=max(ib_g,0);
      ib_b=tan(time*2+4.2);
      ib_b=min(ib_b,1);
      ib_b=max(ib_b,0);
      //ib_r=1-ib_r;
      //ib_g=1-ib_g;
      //ib_b=1-ib_b;
      
      ob_r=ib_r-0.5;
      ob_g=ib_g-0.5;
      ob_b=ib_b-0.5;
      q1=ib_r;
      q2=ib_g;
      q3=ib_b;
      
      
      
      decay = 1;
      
      
      //echo_orient=((bass_att+mid_att+treb_att)/3)*3;
      //solarize=above(0.5,bass);
      //darken=above(0.4,treb);
      
      musictime=musictime+(mid*mid*mid)*0.01;
      
      xpos=sin(musictime*0.4)*0.2;
      ypos=sin(musictime*0.4)*0.2;
      q4=xpos;
      q5=ypos
      
    }},
    shapes: [
      {
       enabled: 1,
       sides: 23,
       additive: 1,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.700000,
       rad: 0.154930,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 0.010000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         y=bass_att*0.5+0.2;
         x=cos(time*2)*0.5+0.5;
       }},
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 1.801999,
       ang: 0.000000,
       tex_ang: 3.141593,
       tex_zoom: 0.550335,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         //ang = ang + (bass*.2) + (time*.4);
         //rad=1.781+(bass*0.025);
         ang=above(0.5,treb_att)*.063;
       }},
      },
      {
       enabled: 1,
       sides: 100,
       additive: 1,
       thickOutline: 0,
       textured: 1,
       x: 0.900000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 0.010000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
       per_frame_code: function(_){with(_){
         x = sin(time*5) * .4 + .5;
         y=treb_att*0.5;
         
         pow( (bass*.15),2);
       }},
      },
      {
       enabled: 1,
       sides: 100,
       additive: 1,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.033004,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 0.010000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x=.5+(bass*0.07);
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       per_point_code: function(_){with(_){
         //plot x,y,z to point on circle
         smp=sample*6.283;
         xp=sin(smp )*0.20;
         yp=cos(smp )*0.20;
         zp=0;
         
         
         //alter shape;
         angy=sin(sample*6.28*4 +t1 )*6.28;
         xq=xp*cos(angy) - zp*sin(angy);
         zq=xp*sin(angy) + zp*cos(angy);
         xp=xq;
         zp=zq;
         
         
         //rotate on y axis;
         angy=t1*0.1;
         xq=xp*cos(angy) - zp*sin(angy);
         zq=xp*sin(angy) + zp*cos(angy);
         xp=xq;
         zp=zq;
         
         //rotate on x axis
         axs1 = sin(t1*0.15) + 1.6;
         yq= yp*cos(axs1) - zp*sin(axs1);
         zq= yp*sin(axs1) + zp*cos(axs1);
         yp=yq;
         zp=zq;
         
         //rotate on y axis again
         axs2 = sin(t1*0.1)*3.3;
         xq=xp*cos(axs2) - zp*sin(axs2);
         zq=xp*sin(axs2) + zp*cos(axs2);
         xp=xq;
         zp=zq;
         
         //stretch y axis to compensate for aspect ratio
         yp=yp*1.2;
         
         //push forward into viewpace
         zp=zp+2.1;
         
         //project x,y,z into screenspace
         xs=xp/zp;
         ys=yp/zp;
         
         //center 0,0 in middle of screen
         x=xs+0.5+q4;
         y=ys+0.5+q5;
         
         r=1-q1;
         g=1-q2;
         b=1-q3;
       }},
       per_frame_code: function(_){with(_){
         basstime=basstime+(bass*bass);
         t1=basstime*0.003;
         
       }},
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Rovastar & Geiss - Dynamic Swirls 3 (Broken Destiny Mix).milk"] = {
    fRating: 2.0,
    fGammaAdj: 2.994,
    fDecay: 0.981,
    fVideoEchoZoom: 0.999609,
    fVideoEchoAlpha: 1.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 7,
    bAdditiveWaves: 0,
    bWaveDots: 1,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 1,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.0,
    fWaveScale: 0.634243,
    fWaveSmoothing: 0.1,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.00496,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.000156,
    sx: 0.999666,
    sy: 0.9999,
    wave_r: 0.55,
    wave_g: 0.55,
    wave_b: 0.55,
    wave_x: 0.5,
    wave_y: 0.36,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 2.016,
    mv_dx: 0.0,
    mv_dy: -0.1,
    mv_l: 5.0,
    mv_r: 0.0,
    mv_g: 0.0,
    mv_b: 0.7,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      du = x*2-1 - q1;
      dv = y*2-1 - q2;
      dist = sqrt(du*du+dv*dv);
      ang2 = atan2(du,dv);
      mult = 0.008/(dist+0.4);
      dx = mult*sin(ang2-1.5);
      dy = mult*cos(ang2-1.5);
      du = x*2-1 - q3;
      dv = y*2-1 - q4;
      dist = sqrt(du*du+dv*dv);
      ang2 = atan2(du,dv);
      mult = 0.008*sin(q8)/(dist+0.4);
      dx = dx + mult*sin(ang2+1.5);
      dy = dy + mult*cos(ang2+1.5);
      rot = -0.01*rad*sin(q8);
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.40*( 0.60*sin(1.980*time) + 0.40*sin(1.047*time) );
      wave_g = wave_g + 0.40*( 0.60*sin(1.835*time) + 0.40*sin(1.081*time) );
      wave_b = wave_b + 0.40*( 0.60*sin(1.714*time) + 0.40*sin(1.011*time) );
      q8 = oldq8+ifcond(above(bass+bass_att,2.8),q8+0.005*pow((bass+bass_att),5),0);
      oldq8 = q8;
      q7 =0.005*(pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
      q1 = 0.62*( 0.60*sin(0.374*q8) + 0.40*sin(0.294*q8) );
      q2 = 0.62*( 0.60*sin(0.393*q8) + 0.40*sin(0.223*q8) );
      q3 = 0.62*( 0.60*sin(0.174*-q8) + 0.40*sin(0.364*q8) );
      q4 = 0.62*( 0.60*sin(0.234*q8) + 0.40*sin(0.271*-q8) );
      echo_zoom = 1+ q7;
      zoom = 1+q7;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar & Geiss - Dynamic Swirls 3 (Mysticial Awakening Mi.milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.98,
    fDecay: 1.0,
    fVideoEchoZoom: 1.000154,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.0,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.1,
    fWaveParam: -0.472,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 0.972366,
    fShader: 0.0,
    zoom: 1.00496,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.000156,
    sx: 0.999666,
    sy: 0.9999,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.51,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 5.0,
    mv_r: 0.0,
    mv_g: 0.0,
    mv_b: 1.0,
    mv_a: 1.0,
    per_pixel_code: function(_){with(_){
      du = x*2-1 - q1;
      dv = y*2-1 - q2;
      dist = sqrt(du*du+dv*dv);
      ang2 = atan2(du,dv);
      mult = 0.008/(dist+0.4);
      dx = mult*sin(ang2-1.5);
      dy = mult*cos(ang2-1.5);
      du = x*2-1 - q3;
      dv = y*2-1 - q4;
      dist = sqrt(du*du+dv*dv);
      ang2 = atan2(du,dv);
      mult = 0.008*sin(q8)/(dist+0.4);
      dx = dx + mult*sin(ang2+1.5);
      dy = dy + mult*cos(ang2+1.5);
      rot = -0.01*rad*sin(q8);
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.350*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
      wave_g = wave_g + 0.350*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
      wave_b = wave_b + 0.350*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
      q8 = oldq8+min(ifcond(above(bass+bass_att,2.8),q8+0.025*pow((bass+bass_att-1.5),5),0),1);
      oldq8 = q8;
      q8 = q8 + 0.1*time;
      q1 = 0.62*( 0.60*sin(0.374*q8) + 0.40*sin(0.294*q8) );
      q2 = 0.62*( 0.60*sin(0.393*q8) + 0.40*sin(0.223*q8) );
      q3 = 0.62*( 0.60*sin(0.174*-q8) + 0.40*sin(0.364*q8) );
      q4 = 0.62*( 0.60*sin(0.234*q8) + 0.40*sin(0.271*-q8) );
      mv_x = 1.25;
      mv_y = 1.25;
      mv_a =1;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar & Geiss - Dynamic Swirls 3 (Poltergiest Mix).milk"] = {
    fRating: 2.0,
    fGammaAdj: 2.994,
    fDecay: 0.9,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 0,
    nWaveMode: 2,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 1,
    bDarken: 0,
    bSolarize: 1,
    bInvert: 1,
    fWaveAlpha: 1.0,
    fWaveScale: 1.553027,
    fWaveSmoothing: 0.1,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.00496,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.000156,
    sx: 0.999666,
    sy: 0.9999,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.15,
    mv_r: 0.0,
    mv_g: 0.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      du = x*2-1 - q1;
      dv = y*2-1 - q2;
      dist = sqrt(du*du+dv*dv);
      ang2 = atan2(du,dv);
      mult = 0.008/(dist+0.4);
      dx = mult*sin(ang2-1.5);
      dy = mult*cos(ang2-1.5);
      du = x*2-1 - q3;
      dv = y*2-1 - q4;
      dist = sqrt(du*du+dv*dv);
      ang2 = atan2(du,dv);
      mult = 0.008*sin(q8)/(dist+0.4);
      dx = dx + mult*sin(ang2+1.5);
      dy = dy + mult*cos(ang2+1.5);
      rot =0.01*rad*sin(q8*0.781);
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.350*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
      wave_g = wave_g + 0.350*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
      wave_b = wave_b + 0.350*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
      q8 = oldq8+ifcond(above(bass+bass_att,2.8),q8+0.005*pow((bass+bass_att),5),0);
      oldq8 = q8;
      q1 = 0.62*( 0.60*sin(0.374*q8) + 0.40*sin(0.294*q8) );
      q2 = 0.62*( 0.60*sin(0.393*q8) + 0.40*sin(0.223*q8) );
      q3 = 0.62*( 0.60*sin(0.174*-q8) + 0.40*sin(0.364*q8) );
      q4 = 0.62*( 0.60*sin(0.234*q8) + 0.40*sin(0.271*-q8) );
      zoom = 1+ 0.06*abs(sin(q8*1.123));
      decay = 0.8+0.2*sin(q8*0.334);
      
      volume = 0.15*(bass_att+bass+mid+mid_att);
      beatrate = ifcond(equal(beatrate,0),1,ifcond(below(volume,0.01),1,beatrate));
      lastbeat = ifcond(equal(lastbeat,0),time,lastbeat);
      meanbass_att = 0.1*(meanbass_att*9 + bass_att);
      peakbass_att = ifcond(above(bass_att,peakbass_att),bass_att,peakbass_att);
      beat = ifcond(above(volume,0.8),ifcond(below(peakbass_att - bass_att, 0.05*peakbass_att),ifcond(above(time - lastbeat,0.1+0.5*(beatrate-0.1)),1,0),0),0);
      beatrate = max(ifcond(beat,ifcond(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);
      peakbass_att = ifcond(equal(beat,0),ifcond(above(time - lastbeat,2*beatrate),peakbass_att*0.95,peakbass_att*0.995),bass_att);
      lastbeat = ifcond(beat,time,lastbeat);
      countertime = ifcond(beat,time,countertime);
      counter =-pow(min((time-countertime-1.5),0),9);
      q7 = min(time-countertime,1);
      q5=oldq5+0.04*counter;
      oldq5=q5;
      q6 = beat;
      echo_zoom = beat*abs(100*sin(3.13*q8));
      echo_alpha = beat*0.5;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar & Geiss - Dynamic Swirls 3 (Twisted Truth Mix).milk"] = {
    fRating: 2.0,
    fGammaAdj: 2.994,
    fDecay: 0.965,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 7,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.0,
    fWaveScale: 0.634243,
    fWaveSmoothing: 0.1,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.00496,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.000156,
    sx: 0.999666,
    sy: 0.9999,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.38,
    ob_size: 0.005,
    ob_r: 1.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.01,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 0.47,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 2.016,
    mv_dx: 0.0,
    mv_dy: -0.1,
    mv_l: 5.0,
    mv_r: 0.0,
    mv_g: 0.0,
    mv_b: 0.7,
    mv_a: 0.5,
    per_pixel_code: function(_){with(_){
      du = x*2-1 - q1;
      dv = y*2-1 - q2;
      dist = sqrt(du*du+dv*dv);
      ang2 = atan2(du,dv);
      mult = 0.008/(dist+0.4);
      dx = mult*sin(ang2-1.5);
      dy = mult*cos(ang2-1.5);
      du = x*2-1 - q3;
      dv = y*2-1 - q4;
      dist = sqrt(du*du+dv*dv);
      ang2 = atan2(du,dv);
      mult = 0.008/(dist+0.4);
      dx = dx + mult*sin(ang2+1.5);
      dy = dy + mult*cos(ang2+1.5);
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.350*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
      wave_g = wave_g + 0.350*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
      wave_b = wave_b + 0.350*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
      //q8 = oldq8+min(if(above(bass+bass_att,2.8),q8+0.025*pow((bass+bass_att-2),5),0),1);
      //oldq8 = q8;
      //q8 = q8 + time*0.1;
      q8 =oldq8+ 0.005*(pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
      oldq8 = q8;
      monitor = q8;
      q1 = 0.62*( 0.60*sin(0.374*q8) + 0.40*sin(0.294*q8) );
      q2 = 0.62*( 0.60*sin(0.393*q8) + 0.40*sin(0.223*q8) );
      q3 = 0.62*( 0.60*sin(0.174*-q8) + 0.40*sin(0.364*q8) );
      q4 = 0.62*( 0.60*sin(0.234*q8) + 0.40*sin(0.271*-q8) );
      ob_r = wave_r;
      ob_g = wave_g;
      ob_b = wave_b;
      mv_r = wave_r;
      mv_b = wave_b;
      mv_g = wave_g;
      ib_a = abs(sin(q8*0.9141));
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar & Geiss - Dynamic Swirls 3 (Voyage Of Twisted Souls Mix).milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.993,
    fDecay: 0.98,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 7,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.608039,
    fWaveScale: 0.634243,
    fWaveSmoothing: 0.1,
    fWaveParam: 0.5,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.00496,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.000156,
    sx: 0.999666,
    sy: 0.9999,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.36,
    ob_size: 0.01,
    ob_r: 1.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.015,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.15,
    mv_r: 0.0,
    mv_g: 0.0,
    mv_b: 1.0,
    mv_a: 0.4,
    per_pixel_code: function(_){with(_){
      du = x*2-1 - q1;
      dv = y*2-1 - q2;
      dist = sqrt(du*du+dv*dv);
      ang2 = atan2(du,dv);
      mult = 0.008/(dist+0.4);
      dx = mult*sin(ang2-1.5);
      dy = mult*cos(ang2-1.5);
      du = x*2-1 - q3;
      dv = y*2-1 - q4;
      dist = sqrt(du*du+dv*dv);
      ang2 = atan2(du,dv);
      mult = 0.008*sin(q8)/(dist+0.4);
      dx = dx + mult*sin(ang2+1.5);
      dy = dy + mult*cos(ang2+1.5);
      //rot = -0.01*rad*sin(q8);
      rot =0+abs(3* dx) - abs(3*dy);
      zoom =1+abs(3* dx) - abs(3*dy);
      zoomexp = 1 + abs((300* dx) - (300*dy));
    }},
    per_frame_code: function(_){with(_){
      ob_r = 0.7 - 0.3*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));
      ob_g = 0.5- 0.48*sin(time*1.324);
      ob_b = 0.5 - 0.48*cos(time*1.316);
      wave_r = wave_r + 0.350*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
      wave_g = wave_g + 0.350*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
      wave_b = wave_b + 0.350*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
      mv_r = wave_r;
      mv_b = wave_b;
      mv_g = wave_g;
      q8 = oldq8+ifcond(above(bass+bass_att,2.8),q8+0.005*pow((bass+bass_att),5),0);
      oldq8 = q8;
      monitor = sin(q8);
      q1 = 0.62*( 0.60*sin(0.374*q8) + 0.40*sin(0.294*q8) );
      q2 = 0.62*( 0.60*sin(0.393*q8) + 0.40*sin(0.223*q8) );
      q3 = 0.62*( 0.60*sin(0.174*-q8) + 0.40*sin(0.364*q8) );
      q4 = 0.62*( 0.60*sin(0.234*q8) + 0.40*sin(0.271*-q8) );
      //zoom = zoom+ 0.06*abs(sin(q8));
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar & Geiss - Surface (Vectrip Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.7,
    fDecay: 0.98,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 4,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 2.706706,
    fWaveScale: 0.234487,
    fWaveSmoothing: 0.1,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.014,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.029439,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 0.53,
    mv_g: 0.7,
    mv_b: 0.33,
    mv_a: 1.0,
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.350*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
      wave_g = wave_g + 0.350*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
      wave_b = wave_b + 0.350*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
      cx = cx + 0.110*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
      cy = cy + 0.110*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
      dx = dx + 0.01*( 0.60*sin(0.173*time) + 0.40*sin(0.223*time) );
      vol = (bass+mid+att)/6;
      xamptarg = ifcond(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);
      xamp = xamp + 0.5*(xamptarg-xamp);
      xdir = ifcond(above(abs(xpos),xamp),-sign(xpos),ifcond(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));
      xaccel = xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
      xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
      xpos = xpos + 0.001*xspeed;
      yamptarg = ifcond(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);
      yamp = yamp + 0.5*(yamptarg-yamp);
      ydir = ifcond(above(abs(ypos),yamp),-sign(ypos),ifcond(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));
      yaccel = ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
      yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
      ypos = ypos + 0.001*yspeed;
      mv_x_speed = 4;
      mv_y_speed = 4;
      mv_x_range = 0.49;
      mv_y_range = 0.049;
      mv_x_amount = 20;
      mv_y_amount = 2.25;
      mv_x = mv_x_amount +mv_x_range + mv_x_range*sin(mv_x_speed*ypos+(sin(time*0.964)-0.5*cos(time*0.256)));
      mv_y = mv_y_amount + mv_y_range+ mv_y_range*sin(mv_y_speed*xpos-(cos(time*1.345)-0.5*cos(time*0.331)));
      mv_b = mv_b + 0.2*sin(time*0.771);
      mv_r = mv_r + 0.25*cos(time*1.701);
      mv_g = mv_g + 0.3*cos(time*0.601);
      mv_l =  10+6*min((0.5*bass+0.5*bass_att),2);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar & Idiot24-7 - Balk Acid.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 0.999514,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 7,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 0.591236,
    fWaveSmoothing: 0.0,
    fWaveParam: 1.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 0.01,
    fShader: 0.0,
    zoom: 1.0003,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.4,
    wave_g: 1.0,
    wave_b: 0.6,
    wave_x: 0.5,
    wave_y: 1.0,
    ob_size: 0.005,
    ob_r: 1.0,
    ob_g: 1.0,
    ob_b: 0.41,
    ob_a: 1.0,
    ib_size: 0.005,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 12.799995,
    nMotionVectorsY: 2.8799,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 3.0,
    mv_r: 0.0,
    mv_g: 0.7,
    mv_b: 1.0,
    mv_a: 0.4,
    per_frame_code: function(_){with(_){
      zoom=zoom+0.028*(bass+bass_att) -0.05;
      rot=rot+0.10*sin(time);
      mv_r=0.5 +0.5*sin(time*1.23);
      mv_b=0.5 + 0.5*sin(time*1.26);
      mv_g=0.5+ 0.5*sin(time*1.19);
      wave_g=wave_g*+.20*sin(time*.13);
      wave_r=wave_r+.13*sin(time);
      wave_b=wave_b*sin(time);
      wave_x=wave_x-.5*sin(time*.13);
      ob_a = ifcond(above(mid+treb,2.6),1,0);
      ob_r = 0.5 + 0.4*sin(time*2.87);
      ob_b = 0.5 + 0.4*sin(time*2.914);
      ob_g = 0.5 + 0.4*sin(time*2.768);
      mv_y = 3.25;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar - Altars Of Madness (Duel Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.98,
    fDecay: 1.0,
    fVideoEchoZoom: 1.006596,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 2,
    nWaveMode: 1,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.099998,
    fWaveScale: 1.23559,
    fWaveSmoothing: 0.63,
    fWaveParam: -0.2,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.005,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 1.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 2.4,
    mv_dx: 0.0,
    mv_dy: -0.1,
    mv_l: 5.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      dx=dx+0.008*sin((y*2-1)*meshx);
      dy=dy+0.008*cos((x*2-1)*meshx*1.333);
      dx=dx+0.008*sin((y*2-1)*meshx*1.333);
      dy=dy+0.008*cos((x*2-1)*meshx);
    }},
    init_code: function(_){with(_){
      q8=0;
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      q8 =oldq8+ 0.0003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
      oldq8 = q8;
      wave_r = 0.5+0.5*sin(1.123*q8);
      wave_g = 0.5+0.5*sin(q8*1.576);
      wave_b = 0.5+0.5*cos(q8*1.465);
      ib_r = wave_b;
      ib_b=wave_g;
      ib_g=wave_r;
      ib_a =1;
      wave_x = 0.5 + 0.32*sin(q8*0.3);
      wave_y = 0.5 - 0.24*cos(q8*0.2);
      ob_size = 0.005 - above(bass,2)*0.005;
    }},
    shapes: [
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Rovastar - Bellanova (New Wave Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.98,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 1,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.8,
    fWaveScale: 8.311065,
    fWaveSmoothing: 0.606,
    fWaveParam: -0.5,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.0,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.0,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      newx =x- q3;
      newy =y- q4;
      newang = atan2(newx,newy);
      newrad = min(sqrt((newx)*(newx)+0.5625*(newy)*(newy))*2,sqrt(2));
      rot = rot + 0.1*sin(newang*20);
      zoom = 1.0+0.1*abs(sin(newang*4));
    }},
    per_frame_code: function(_){with(_){
      warp = 0;
      
      wave_g = 0.5 + 0.5*sin(time*2.13);
      wave_b = 0.5 + 0.5*sin(0.89*time);
      wave_r = 0.2 + 0.2*sin(time*1.113);
      movement =movement + 0.5*(((bass+bass_att + 0.075*pow((bass+0.6*bass_att+0.2*treb_att),3)))/fps);
      movement = ifcond(above(movement,10000), 0, movement);
      
      q3 = 0.5+0.1*sin(movement);
      q4 = 0.5-0.1*cos(0.781*movement);
      
      wave_x = q3;
      wave_y = 1-q4;
      decay = 0.995;
      //decay = 1.0;
    }},
    shapes: [
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.134784,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.599182,
       r: 0.000000,
       g: 0.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 0.200000,
       g2: 0.200000,
       b2: 0.200000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x = q3;
         y = 1- q4;
         r = 0.5 + 0.49*sin(time*0.467);
         b = 0.5 + 0.49*sin(time*0.568);
         g = 0.5 + 0.49*sin(time*0.669);
         r2 = 0.1*(bass+bass_att);
         b2 = r2;
         g2 = r2;
       }},
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Rovastar - Chapel Of Ghouls.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.98,
    fDecay: 1.0,
    fVideoEchoZoom: 0.999609,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 1,
    nWaveMode: 7,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.099998,
    fWaveScale: 0.931011,
    fWaveSmoothing: 0.63,
    fWaveParam: -0.4,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.005,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 1.0,
    nMotionVectorsX: 11.36,
    nMotionVectorsY: 9.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.75,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      dx= dx+q1*0.005*sin((y-0.5)*meshx*q7) +q1*0.005*sin((y-0.5)*meshx*q4);
      dy=dy+q1*0.0025*cos((x-0.5)*meshx*q6)+ q1*0.0025*cos((x-0.5)*meshx*q5);
    }},
    init_code: function(_){with(_){
      q4 = int(rand(3));
      q5 = 2+int(rand(3))*(1/3);
      q6 = 2+int(rand(3))*(1/3);
      q7 = 2+int(rand(3))*(1/3);
      q8 = 2+int(rand(3))*(1/3);
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      ib_a =0.2*bass;
      volume = 0.15*(bass_att+bass+mid+mid_att);
      beatrate = ifcond(equal(beatrate,0),1,ifcond(below(volume,0.01),1,beatrate));
      lastbeat = ifcond(equal(lastbeat,0),time,lastbeat);
      meanbass_att = 0.1*(meanbass_att*9 + bass_att);
      peakbass_att = ifcond(above(bass_att,peakbass_att),bass_att,peakbass_att);
      beat = ifcond(above(volume,0.8),ifcond(below(peakbass_att - bass_att, 0.05*peakbass_att),ifcond(above(time - lastbeat,0.1+0.5*(beatrate-0.1)),1,0),0),0);
      beatrate = max(ifcond(beat,ifcond(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);
      peakbass_att = ifcond(equal(beat,0),ifcond(above(time - lastbeat,2*beatrate),peakbass_att*0.95,peakbass_att*0.995),bass_att);
      lastbeat = ifcond(beat,time,lastbeat);
      countertime = ifcond(beat,time,countertime);
      counter =-1*pow(min((time-countertime-1.5),0),9);
      beatcounter = ifcond(beat, Beatcounter+1, beatcounter);
      wave_a = 0;
      ib_r=0.1+0.0999*sin(time*0.4251);
      ib_b=0.1+0.0999*sin(time*0.351);
      ib_g=0.1+0.0999*sin(time*0.543);
      ob_a =bnot(beat);
      q2 = beat;
      q3 = beatcounter%4;
      monitor = q4;
      decay =ifcond(q4,1,0.98);
      q1 =20/fps;
    }},
    shapes: [
      {
       enabled: 1,
       sides: 100,
       additive: 1,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.444842,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 0.200000,
       r2: 0.200000,
       g2: 0.300000,
       b2: 0.200000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x = 0.5 + 0.3*sin(time*0.9521);
         y = 0.5+0.3*sin(time*0.782);
         b = 0.2 + 0.199*sin(time*0.462);
         g = 0.2 + 0.199*sin(time*0.3462);
         r = 0.9 + 0.099*sin(time*0.2786);
         r2 = 0.2 + 0.199*sin(time*0.3162);
         g2 = 0.2 + 0.199*sin(time*0.29462);
         b2 = 0.2 + 0.199*sin(time*0.4042);
         //a1=q2;
         //a2 = q2;
         additive = ifcond(q4,(q4-1)*equal(q3,0),bnot(equal(q3,0)));
         textured = bnot(equal(q3,0));
       }},
      },
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.444842,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 0.200000,
       r2: 0.200000,
       g2: 0.300000,
       b2: 0.200000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x = 0.5 + 0.3*sin(time*0.8521);
         y = 0.5+0.3*sin(time*0.67682);
         b = 0.2 + 0.199*sin(time*0.3462);
         g = 0.2 + 0.199*sin(time*0.462);
         r = 0.9 + 0.099*sin(time*0.3786);
         r2 = 0.2 + 0.199*sin(time*0.4162);
         g2 = 0.2 + 0.199*sin(time*0.39462);
         b2 = 0.2 + 0.199*sin(time*0.3042);
         additive = ifcond(q4,(q4-1)*equal(q3,1),bnot(equal(q3,1)));
         textured = bnot(equal(q3,1));
       }},
      },
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.444842,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 0.200000,
       r2: 0.200000,
       g2: 0.300000,
       b2: 0.200000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x = 0.5 + 0.3*sin(time*0.7721);
         y = 0.5+0.3*sin(time*0.823);
         b = 0.2 + 0.199*sin(time*0.652);
         g = 0.2 + 0.199*sin(time*0.4162);
         r = 0.9 + 0.099*sin(time*0.1786);
         r2 = 0.2 + 0.199*sin(time*0.1862);
         g2 = 0.2 + 0.199*sin(time*0.442);
         b2 = 0.2 + 0.199*sin(time*0.382);
         //a = q2;
         //a2 = q2;
         additive = ifcond(q4,(q4-1)*equal(q3,2),bnot(equal(q3,2)));
         textured = bnot(equal(q3,2));
       }},
      },
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.444842,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 0.200000,
       r2: 0.200000,
       g2: 0.300000,
       b2: 0.200000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x = 0.5 + 0.3*sin(time*0.621);
         y = 0.5+0.3*sin(time*0.693);
         b = 0.2 + 0.199*sin(time*0.3862);
         g = 0.2 + 0.199*sin(time*0.449);
         r = 0.9 + 0.099*sin(time*0.3521);
         r2 = 0.2 + 0.199*sin(time*0.5252);
         g2 = 0.2 + 0.199*sin(time*0.3085);
         b2 = 0.2 + 0.199*sin(time*0.4111);
         //a = q2;
         //a2 = q2;
         additive = ifcond(q4,(q4-1)*equal(q3,3),bnot(equal(q3,3)));
         textured = bnot(equal(q3,3));
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Rovastar - Cosmic Echoes 2.milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.84,
    fDecay: 0.9,
    fVideoEchoZoom: 2.215847,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 7,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.099998,
    fWaveScale: 0.130388,
    fWaveSmoothing: 0.54,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.999514,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 1.0,
    ob_size: 0.5,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.26,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    per_pixel_code: function(_){with(_){
      dy = ifcond(above(y,0.5),sin(0.5-y)/10, log10(1/y)/35);
    }},
    per_frame_code: function(_){with(_){
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.4)*0.85+1.4);
      treb_thresh = above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.5)*0.75+1.5);
      bass_on = above(bass_thresh,1.8);
      treb_on = above(treb_thresh,1.9);
      swapcolour = bass_on - treb_on;
      red_aim = ifcond(equal(swapcolour,1),1,ifcond(equal(swapcolour,0),1,0));
      green_aim = ifcond(equal(swapcolour,1),0,ifcond(equal(swapcolour,0),0.5,0.25));
      blue_aim = ifcond(equal(swapcolour,1),0,ifcond(equal(swapcolour,0),0,1));
      red = red + (red_aim - red)*ifcond(equal(swapcolour,1),0.65,0.45);
      green = green + (green_aim - green)*0.5;
      blue = blue + (blue_aim - blue)*ifcond(equal(swapcolour,1),0.45,0.65);
      wave_r = red;
      wave_g = green;
      wave_b = blue;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar - Cosmic Mosaic (Active Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.98,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 1,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.369668,
    fWaveScale: 2.60879,
    fWaveSmoothing: 0.5,
    fWaveParam: 0.35,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 2.853,
    fZoomExponent: 3.6,
    fShader: 0.0,
    zoom: 1.004,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.309,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.6,
    wave_g: 0.6,
    wave_b: 0.6,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 8.0,
    nMotionVectorsY: 4.32,
    mv_dx: -0.136,
    mv_dy: -0.012,
    mv_l: 5.0,
    mv_r: 0.0,
    mv_g: 0.0,
    mv_b: 0.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      //dy=dy+0.05*sin((y*2-1)*48+(y*2-1)*64);
      //dy=dy-0.05*cos((x*2-1)*64+(x*2-1)*48);
      //dx=dx+0.005*sin((y*2-1)*48+(y*2-1)*64);
      //dx=dx-0.005*cos((x*2-1)*64+(x*2-1)*48);
      
      dx = 0.005*sin((tan(1-rad))*(90+bass+bass_att)+((ang)*18));
      dy = -0.005*sin((tan(1-rad))*(90+bass+bass_att)+((-ang)*18));
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.400*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );
      wave_g = wave_g + 0.400*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );
      wave_b = wave_b + 0.400*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );
      //zoom = zoom + 0.023*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );
      //rot = rot + 0.030*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
      decay = decay - 0.01*equal(frame%200,0);
      warp=0;
      decay =  0.970;
      zoom =1;
      rot=0;
    }},
    shapes: [
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.330038,
       ang: 0.000000,
       tex_ang: 0.691150,
       tex_zoom: 2.283879,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         tex_zoom = tex_zoom - 0.025 + 0.05*(bass+bass_att);
       }},
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Rovastar - Decreasing Dreams (Extended Movement Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.9,
    fDecay: 0.97,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 3,
    bAdditiveWaves: 0,
    bWaveDots: 1,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.8,
    fWaveScale: 0.893664,
    fWaveSmoothing: 0.6,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 2.853,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.995,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.0,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.6,
    wave_g: 0.6,
    wave_b: 0.6,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.01,
    ib_r: 1.0,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 1.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: -0.002,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 1.0,
    mv_g: 0.0,
    mv_b: 0.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      newx =x- q1;
      newy =y- q2;
      newrad = min(sqrt((newx)*(newx)+0.5625*(newy)*(newy))*2,sqrt(2));
      dy=0.007*sin((1.3-newrad)*(1.3-newrad)*(q3));
      dx=-0.007*cos((1.3-newrad)*(1.3-newrad)*(q3));
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.200*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );
      wave_g = wave_g + 0.200*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );
      wave_b = wave_b + 0.200*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );
      warp=0;
      zoom =1;
      rot=0;
      decay =0.985;
      //decay =1;
      
      ib_r = 0.666 - 0.333*sin(time*1.234);
      ib_g = 0.666+0.333*sin(time*2.123);
      ib_b = 0.01+0.1*treb;
      
      movement =movement + 0.5*(((bass+bass_att + 0.075*pow((bass+0.6*bass_att+0.2*treb_att),3)))/fps);
      movement = ifcond(above(movement,10000), 0, movement);
      
      q1 = 0.5+0.1*sin(movement);
      q2 = 0.5-0.1*cos(0.781*movement);
      q3 = (35+15*sin(time*0.3426)+0.8*bass);
      wave_x = q1;
      wave_y = 1- q2;
    }},
    shapes: [
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.330038,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x = q1;
         y = 1- q2;
         r = 0.5 + 0.49*sin(time*0.467);
         b = 0.5 + 0.49*sin(time*0.568);
         g = 0.5 + 0.49*sin(time*0.669);
         r2 = 0.1*(bass+bass_att);
         b2 = r2;
         g2 = r2;
         rad = r2 + 0.2;
       }},
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Rovastar - Fractopia (Fractal Havok Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 1.0,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 1,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.0,
    fWaveScale: 4.574798,
    fWaveSmoothing: 0.75,
    fWaveParam: -0.4,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 9.8608,
    fWarpScale: 16.2174,
    fZoomExponent: 1.503744,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.999999,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 1.0,
    ob_a: 1.0,
    ib_size: 0.04,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 1.0,
    mv_g: 0.0,
    mv_b: 0.0,
    mv_a: 0.6,
    per_pixel_code: function(_){with(_){
      myy = y-(0.250025);
      myx = x-0.095;
      dx = 2*(2*myx*myy);
      dy = 2*((myy*myy) - (myx*myx));
    }},
    init_code: function(_){with(_){
      q4 = 0.249+0.5*(rand(100)*0.01);
      q5 = 0.249+0.5*(rand(100)*0.01);
      q6 = 0.249+0.5*(rand(100)*0.01);
    }},
    per_frame_code: function(_){with(_){
      mv_r = 0.5 + 0.499*(0.60*sin(3.980*time) + 0.40*sin(1.047*time) );
      mv_g = 0.5+ 0.499*(0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
      mv_b = 0.5 + 0.499*(0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
      wave_a =0;
      warp=0;
      movement =movement + 0.5*(((bass+bass_att + 0.075*pow((bass+0.6*bass_att+0.2*treb_att),3)))/fps);
      movement = ifcond(above(movement,10000), 0, movement);
      rot =-0.04+ 0.01*(sin(movement*0.696)+cos(movement*0.463)+sin(movement*0.365));
      cx = 0 + 0.1*(sin(movement*0.247)+cos(movement*0.373)+sin(movement*0.187));
      cy = 0 + 0.1*(sin(movement*0.317)+cos(movement*0.209)+sin(movement*0.109));
      ob_b = q4+0.25*sin(movement*3.816);
      ob_g = q4+0.25*sin(movement*0.744);
      ob_r = q4+0.25*sin(movement*0.707);
      wrap = below(bass+bass_att,3);
      zoom = 0.99 + 0.0035*(sin(movement*0.217)+cos(movement*0.413)+sin(movement*0.311));
      q1 = movement;
    }},
    shapes: [
      {
       enabled: 0,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.150375,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x = 0.5 + 0.05*sin(q1*0.456);
         y = 0.5 + 0.05*sin(q1*0.56);
         tex_zoom = tex_zoom + 0.5*sin(q1*0.345);
       }},
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Rovastar - Future Speakers.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.9,
    fDecay: 0.97,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.8,
    fWaveScale: 1.447717,
    fWaveSmoothing: 0.6,
    fWaveParam: -0.5,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 2.853,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.995,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.0,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.005,
    ib_r: 1.0,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 1.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: -0.002,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 0.0,
    mv_g: 0.0,
    mv_b: 0.4,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      newx =x- q1;
      newy =y- q2;
      newrad = min(sqrt((newx)*(newx)+0.5625*(newy)*(newy))*2,sqrt(2));
      newang = atan2(newx,newy);
      //effect = ((1-newrad)*(1-newrad))*(0.0*((0.9+0.2*sin(q3*0.23))*y)*((0.9+0.2*sin(q3*0.197))*x));
      effect = sqrt(2)-newrad;
      effect2 = newang;
      //effect = sqrt(2)-rad;
      zoom=0.9-(0.1*bass)*cos(pow((effect),3)*8*(bass_att+1));
      
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.250*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );
      wave_g = wave_g + 0.480*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );
      wave_b = wave_b + 0.370*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );
      warp=0;
      zoom =1;
      rot=0;
      decay =1;
      ib_r = 0.16 + 0.15*sin(time*0.783);
      ib_g = 0.16 + 0.15*sin(time*0.895);
      ib_b = 0.75 +0.24*sin(time*1.134);
      ib_size = 0.005*above(bass+bass_att,2.8);
      ib_size =0;
      mv_r = ib_r;
      mv_b = ib_b;
      mv_g = ib_g;
      
      movement =movement + 0.5*(((bass+bass_att + 0.075*pow((bass+0.6*bass_att+0.2*treb_att),3)))/fps);
      movement = ifcond(above(movement,10000), 0, movement);
      
      q1 = 0.5+0.2*sin(movement);
      q2 = 0.5-0.2*cos(0.781*movement);
      q3 = movement;
      wave_x = q1;
      wave_y = 1-q2;
      
    }},
    shapes: [
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.330038,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x = q1;
         y = 1- q2;
         r = 0.5 + 0.49*sin(time*1.467);
         b = 0.5 + 0.49*sin(time*0.768);
         g = 0.5 + 0.49*sin(time*0.559);
         r2 = 0.1*(bass+bass_att);
         b2 = r2;
         g2 = r2;
         rad = r2 + 0.2;
       }},
      },
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.330038,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         r = 0.5 + 0.49*sin(time*0.467);
         b = 0.5 + 0.49*sin(time*0.568);
         g = 0.5 + 0.49*sin(time*0.669);
         r2 = 0.1*(bass+bass_att);
         b2 = r2;
         g2 = r2;
         rad = r2 + 0.2;
         x = q1+0.3*sin(time*0.85);
         y = 1-q2-0.4*cos(time*0.85);
       }},
      },
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.330038,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         r = 0.5 + 0.49*sin(time*0.467);
         b = 0.5 + 0.49*sin(time*0.568);
         g = 0.5 + 0.49*sin(time*0.669);
         r2 = 0.1*(bass+bass_att);
         b2 = r2;
         g2 = r2;
         rad = r2 + 0.2;
         x = q1+0.3*sin(time*0.85+2.07);
         y = 1-q2-0.4*cos(time*0.85+2.07);
       }},
      },
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.330038,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x = q1;
         y = 1- q2;
         r = 0.5 + 0.49*sin(time*0.467);
         b = 0.5 + 0.49*sin(time*0.568);
         g = 0.5 + 0.49*sin(time*0.669);
         r2 = 0.1*(bass+bass_att);
         b2 = r2;
         g2 = r2;
         rad = r2 + 0.2;
         x = q1+0.3*sin(time*0.85+4.14);
         y = 1-q2-0.4*cos(time*0.85+4.14);
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Rovastar - Harlequin's Fractal Encounter.milk"] = {
    fRating: 4.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 0.999609,
    fVideoEchoAlpha: 1.0,
    nVideoEchoOrientation: 1,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 7.014853,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.27,
    fWaveParam: -0.4,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 5.99579,
    fWarpScale: 1.331,
    fZoomExponent: 1.01,
    fShader: 0.0,
    zoom: 0.998531,
    rot: 0.002,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.1,
    wave_y: 0.9,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.9,
    ob_b: 0.2,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.5,
    ib_g: 0.5,
    ib_b: 0.5,
    ib_a: 1.0,
    nMotionVectorsX: 63.936001,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.0,
    mv_r: 0.63,
    mv_g: 0.2,
    mv_b: 0.3,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      box =0.5+0.8*(2*x%4+2*y%2);
      q1 = 8.05+0.3*(sin(pow(x,3)+0.177*time)-cos(pow(y,3)+0.223*time));
      q7 = above(box,1);
      zoom = ifcond(q7,(q1*.1) + q6*6 ,zoom);
      rot = ifcond(q7,0.63*sin(0.5*rad+0.385*time + 0.12*sin(0.67*time) + 0.1*q4 + 0.12*q2 +q6*50),rot);
      cx = cx - 0.05*sin(rad+2*q4);
      cy = cy + 0.04*sin(((0.5*sqrt(2))-rad)-2*q2);
      sx = ifcond(q7,sx+q6*18,sx);
      sy = ifcond(q7,sy+q6*18,sy);
    }},
    per_frame_code: function(_){with(_){
      ob_r = 0.4 - 0.3*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));
      ob_g = 0.5 - 0.46*sin(time*1.724);
      ob_b = 0.65 - 0.3*cos(time*1.816);
      warp =0;
      ib_size = 0.025;
      ib_r = ib_r + 0.5*(0.6*sin(time*3.034)+0.4*cos(time*2.14));
      ib_g = ib_g + 0.5*(0.6*sin(time*3.147)+0.4*cos(time*2.015));
      ib_b = ib_b - 0.5*(0.6*sin(time*3.431)+0.4*cos(time*1.842));
      dx = dx -0.003*(0.6*sin(time*0.234) + 0.4*cos(time*0.437));
      dy = dy - 0.003*(0.7*sin(time*0.213) + 0.3*cos(time*0.315));
      volume = 0.15*(bass+bass_att+treb+treb_att+mid+mid_att);
      xamptarg = ifcond(equal(frame%15,0),min(0.5*volume*bass_att,0.5),xamptarg);
      xamp = xamp + 0.5*(xamptarg-xamp);
      xdir = ifcond(above(abs(xpos),xamp),-sign(xpos),ifcond(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));
      xaccel = xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
      xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
      xpos = xpos + 0.001*xspeed;
      q2 = xpos;
      yamptarg = ifcond(equal(frame%15,0),min(0.3*volume*treb_att,0.5),yamptarg);
      yamp = yamp + 0.5*(yamptarg-yamp);
      ydir = ifcond(above(abs(ypos),yamp),-sign(ypos),ifcond(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));
      yaccel = ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
      yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
      ypos = ypos + 0.001*yspeed;
      q4 = ypos;
      bass_effect = max(max(bass,bass_att)-1.2,0);
      echo_zoom = 1.32 + 0.3*(0.59*sin(q4+time*0.865) + 0.41*cos(q2+time*1.192)) + 0.05*bass_effect;
      volume = 0.15*(bass_att+bass+mid+mid_att);
      beatrate = ifcond(equal(beatrate,0),1,ifcond(below(volume,0.01),1,beatrate));
      lastbeat = ifcond(equal(lastbeat,0),time,lastbeat);
      meanbass_att = 0.1*(meanbass_att*9 + bass_att);
      peakbass_att = ifcond(above(bass_att,peakbass_att),bass_att,peakbass_att);
      beat = ifcond(above(volume,0.8),ifcond(below(peakbass_att - bass_att, 0.05*peakbass_att),ifcond(above(time - lastbeat,0.1+0.5*(beatrate-0.1)),1,0),0),0);
      beatrate = max(ifcond(beat,ifcond(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);
      peakbass_att = ifcond(equal(beat,0),ifcond(above(time - lastbeat,2*beatrate),peakbass_att*0.95,peakbass_att*0.995),bass_att);
      lastbeat = ifcond(beat,time,lastbeat);
      peakbass_att = max(ifcond(beat,bass_att,peakbass_att),1.1*meanbass_att);
      mode = (mode+beat*(rand(3)+1))%4;
      echo_orient = mode;
      wave_a = 0;
      q6 = beat;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar - Inner Thoughts (Dark Secret Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.98,
    fDecay: 0.9,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 3,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 1,
    fWaveAlpha: 4.099998,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.63,
    fWaveParam: 0.018,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 13.290894,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: -0.28,
    dy: -0.32,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.015,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.01,
    ib_r: 0.95,
    ib_g: 0.85,
    ib_b: 0.65,
    ib_a: 1.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 0.153926,
    mv_g: 0.153926,
    mv_b: 0.714137,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      //dx=dx+0.5*sin((y-0.5)*128);
      dy=dy+0.008*cos((x-0.5 - 0.1*sin(q7))*(q6));
    }},
    init_code: function(_){with(_){
      q8 =0;
      q7=0;
    }},
    per_frame_code: function(_){with(_){
      wave_r = 0.5+ 0.2*(bass-1);
      wave_g = 0.5+ 0.2*(mid-1.2);
      wave_b = 0.5+ 0.2*(treb-.5);
      warp =0;
      ob_r = 1-wave_r;
      ob_g = 1-wave_g;
      ob_b = 1-wave_b;
      ib_r = 0.75 + 0.25*sin(time*0.4123);
      ib_g = 0.25 + 0.25*cos(time*0.87);
      ib_b = 0.5+0.5*sin(1.23*time);
      q8 = oldq8 +0.003*(((pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,5)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,4)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,3)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,2)/fps) +(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att)/fps));
      oldq8 = q8;
      q7 =oldq7+ 0.001*(pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,7)/fps);
      oldq7 = q7;
      wave_a =0;
      dy = 0.5 + 0.01*(sin(0.786*q7));
      dx = 0.1*sin(1.143*q8);
      q6 = 15+0.1*(((pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,5)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,4)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,3)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,2)/fps) +(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att)/fps));
      //q7 =0;
      invert = 1+sin(q8);
      monitor = q8;
      invert =int(1 + sin(0.01*q8));
    }},
    shapes: [
      {
       enabled: 1,
       sides: 4,
       additive: 1,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 1.621747,
       ang: 0.000000,
       tex_ang: 1.884956,
       tex_zoom: 0.424973,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 0.600000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         //tex_zoom = 0.05*q6;
         a =1;
         a1=1;
         //tex_zoom =0.1;
         x = 0.5 + 0.1*sin(q7*0.986);
         y = 0.5 + 0.1*sin(q7*0.846);
         tex_ang = 3.1515 + 3.1415*sin(q7*0.4521) +0.05*sin(time);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 1,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 1.621747,
       ang: 0.000000,
       tex_ang: 1.884956,
       tex_zoom: 0.424973,
       r: 1.000000,
       g: 0.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 0.600000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         //tex_zoom = 0.05*q6;
         a =1;
         a1=1;
         //tex_zoom =0.1;
         x = 0.5 + 0.1*sin(q7*0.986);
         y = 0.5 + 0.1*sin(q7*0.846);
         tex_ang = 3.1515 + 3.1415*sin(q7*0.4521) +0.1*sin(time);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 1,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 1.621747,
       ang: 0.000000,
       tex_ang: 1.884956,
       tex_zoom: 0.424973,
       r: 0.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 0.600000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         //tex_zoom = 0.05*q6;
         a =1;
         a1=1;
         //tex_zoom =0.1;
         x = 0.5 + 0.1*sin(q7*0.986);
         y = 0.5 + 0.1*sin(q7*0.846);
         tex_ang = 3.1515 + 3.1415*sin(q7*0.4521) +0.15*sin(time);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 1.621747,
       ang: 0.000000,
       tex_ang: 1.884956,
       tex_zoom: 0.424973,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 0.600000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         //tex_zoom = 0.05*q6;
         a =1;
         a1=1;
         //tex_zoom =0.1;
         x = 0.5 + 0.1*sin(q7*0.986);
         y = 0.5 + 0.1*sin(q7*0.846);
         tex_ang = 3.1515 + 3.1415*sin(q7*0.4521) +0.2*sin(time);;
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Rovastar - Kalideostars (Round  Round Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.994,
    fDecay: 1.0,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.001,
    fWaveScale: 0.62181,
    fWaveSmoothing: 0.558,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.87,
    fModWaveAlphaEnd: 1.2899,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 2.853,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.000012,
    rot: 0.1,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.0,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.7,
    wave_g: 0.7,
    wave_b: 0.7,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 1.0,
    nMotionVectorsX: 28.0,
    nMotionVectorsY: 9.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      //dx=dx+0.008*sin((y*2-1)*48)+0.008*sin((y*2-1)*64);
      //dy=dy+0.008*cos((x*2-1)*64)+0.008*cos((x*2-1)*48);
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.3*( 0.60*sin(0.633*time) + 0.40*sin(0.845*time) );
      wave_g = wave_g + 0.3*( 0.60*sin(0.370*time) + 0.40*sin(0.656*time) );
      wave_b = wave_b + 0.3*( 0.60*sin(0.740*time) + 0.40*sin(0.520*time) );
      //zoom = zoom + 0.013*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );
      //rot = rot + 0.030*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
      decay = decay - 0.01*equal(frame%50,0);
      q8 =oldq8+ 0.005*(pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
      oldq8 = q8;
      q7 =0.005*(pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
      zoom=1+(q7)*0.01;
      q1 = 0.5 + 0.2*cos(q8*0.87);
      q2 = 0.5 + 0.2*sin(q8*0.87);
      wave_a =0;
    }},
    shapes: [
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.193000,
       ang: 0.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 0.040000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 0.900000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.400000,
       per_frame_code: function(_){with(_){
         sides = 40*q7;
         sides = 9;
         ang = q8*3.4;
         x = 0.5 + 0.18*cos(q8*0.5) + 0.03*cos(time*0.7);
         y = 0.5 + 0.18*sin(q8*0.5) + 0.03*sin(time*0.7);
         r = 0.5 + 0.5*sin(time*0.713 + 1);
         g = 0.5 + 0.5*sin(time*0.563 + 2);
         b = 0.5 + 0.5*sin(time*0.654 + 5);
         r2 = 0.5 + 0.5*sin(time*0.885 + 4);
         g2 = 0.5 + 0.5*sin(time*0.556+ 1);
         b2 = 0.5 + 0.5*sin(time*0.638 + 3);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.340000,
       ang: 0.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 0.040000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 0.900000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.400000,
       per_frame_code: function(_){with(_){
         sides = 3;
         ang = q8*2.15;
         x = 0.5 + 0.18*cos(q8*0.5) + 0.03*cos(time*0.7);
         y = 0.5 + 0.18*sin(q8*0.5) + 0.03*sin(time*0.7);
         r = 0.5 - 0.5*sin(time*1.43 + 1);
         g = 0.5 - 0.5*sin(time*0.583 + 2);
         b = 0.5 - 0.5*sin(time*0.751 + 5);
         r2 = 0.5 + 0.5*sin(time*2.845 + 4);
         g2 = 0.5 + 0.5*sin(time*0.756+ 1);
         b2 = 0.5 + 0.5*sin(time*0.688 + 3);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.350000,
       ang: 0.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 0.040000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 0.300000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.400000,
       per_frame_code: function(_){with(_){
         sides = 360;
         ang = q8*1.4;
         x = 0.5 + 0.18*cos(q8*0.5) + 0.03*cos(time*0.7);
         y = 0.5 + 0.18*sin(q8*0.5) + 0.03*sin(time*0.7);
         r = 0.5 + 0.5*sin(q8*0.713 + 1);
         g = 0.5 + 0.5*sin(q8*0.563 + 2);
         b = 0.5 + 0.5*sin(q8*0.654 + 5);
         r2 = 0.5 + 0.5*sin(q8*0.885 + 4);
         g2 = 0.5 + 0.5*sin(q8*0.556+ 1);
         b2 = 0.5 + 0.5*sin(q8*0.638 + 3);
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       per_point_code: function(_){with(_){
         x=x+0.5+0.008*sin((y*2-1)*48)+0.008*sin((y*2-1)*64);
         y=y+0.5+0.008*cos((x*2-1)*64)+0.008*cos((x*2-1)*48);
       }},
      },
    ],
  };

Presets["Rovastar - Kalideostars.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.5,
    fDecay: 1.0,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.001,
    fWaveScale: 0.62181,
    fWaveSmoothing: 0.558,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.87,
    fModWaveAlphaEnd: 1.2899,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 2.853,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.004,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.0,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.7,
    wave_g: 0.7,
    wave_b: 0.7,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 1.0,
    nMotionVectorsX: 28.0,
    nMotionVectorsY: 9.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      //dx=dx+0.008*sin((y*2-1)*48)+0.008*sin((y*2-1)*64);
      //dy=dy+0.008*cos((x*2-1)*64)+0.008*cos((x*2-1)*48);
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.3*( 0.60*sin(0.633*time) + 0.40*sin(0.845*time) );
      wave_g = wave_g + 0.3*( 0.60*sin(0.370*time) + 0.40*sin(0.656*time) );
      wave_b = wave_b + 0.3*( 0.60*sin(0.740*time) + 0.40*sin(0.520*time) );
      //zoom = zoom + 0.013*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );
      //rot = rot + 0.030*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
      decay = decay - 0.01*equal(frame%50,0);
      q8 =oldq8+ 0.005*(pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
      oldq8 = q8;
      q7 =0.005*(pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
      zoom=1+(q7)*0.01;
      q1 = 0.5 + 0.2*cos(q8*0.87);
      q2 = 0.5 + 0.2*sin(q8*0.87);
      wave_a =0;
    }},
    shapes: [
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.193000,
       ang: 0.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 0.040000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 0.900000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.400000,
       per_frame_code: function(_){with(_){
         sides = 40*q7;
         sides = 9;
         ang = q8*3.4;
         x = 0.5 + 0.18*cos(q8*0.5) + 0.03*cos(time*0.7);
         y = 0.5 + 0.18*sin(q8*0.5) + 0.03*sin(time*0.7);
         r = 0.5 + 0.5*sin(time*0.713 + 1);
         g = 0.5 + 0.5*sin(time*0.563 + 2);
         b = 0.5 + 0.5*sin(time*0.654 + 5);
         r2 = 0.5 + 0.5*sin(time*0.885 + 4);
         g2 = 0.5 + 0.5*sin(time*0.556+ 1);
         b2 = 0.5 + 0.5*sin(time*0.638 + 3);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.340000,
       ang: 0.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 0.040000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 0.900000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.400000,
       per_frame_code: function(_){with(_){
         sides = 3;
         ang = q8*2.15;
         x = 0.5 + 0.18*cos(q8*0.5) + 0.03*cos(time*0.7);
         y = 0.5 + 0.18*sin(q8*0.5) + 0.03*sin(time*0.7);
         r = 0.5 - 0.5*sin(time*1.43 + 1);
         g = 0.5 - 0.5*sin(time*0.583 + 2);
         b = 0.5 - 0.5*sin(time*0.751 + 5);
         r2 = 0.5 + 0.5*sin(time*2.845 + 4);
         g2 = 0.5 + 0.5*sin(time*0.756+ 1);
         b2 = 0.5 + 0.5*sin(time*0.688 + 3);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.350000,
       ang: 0.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 0.040000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 0.300000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.400000,
       per_frame_code: function(_){with(_){
         sides = 360;
         ang = q8*1.4;
         x = 0.5 + 0.18*cos(q8*0.5) + 0.03*cos(time*0.7);
         y = 0.5 + 0.18*sin(q8*0.5) + 0.03*sin(time*0.7);
         r = 0.5 + 0.5*sin(q8*0.713 + 1);
         g = 0.5 + 0.5*sin(q8*0.563 + 2);
         b = 0.5 + 0.5*sin(q8*0.654 + 5);
         r2 = 0.5 + 0.5*sin(q8*0.885 + 4);
         g2 = 0.5 + 0.5*sin(q8*0.556+ 1);
         b2 = 0.5 + 0.5*sin(q8*0.638 + 3);
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       per_point_code: function(_){with(_){
         x=x+0.5+0.008*sin((y*2-1)*48)+0.008*sin((y*2-1)*64);
         y=y+0.5+0.008*cos((x*2-1)*64)+0.008*cos((x*2-1)*48);
       }},
      },
    ],
  };

Presets["Rovastar - Pandora's Volcano.milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.925,
    fVideoEchoZoom: 1.006596,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 3,
    nWaveMode: 7,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.099998,
    fWaveScale: 0.627609,
    fWaveSmoothing: 0.108,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0705,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.005,
    dy: 0.0,
    warp: 0.198054,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.04,
    ob_size: 0.0,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0599,
    ib_size: 0.0,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      sx = tan(pow(y,2))-log(y);
      zoom = 1.0 + sin(rad)/5 + progress/10;
    }},
    per_frame_code: function(_){with(_){
      tt = time/2;
      wave_r = 1;
      wave_b = 0.4 + sin(tt)/3;
      wave_g = 0.5 - cos(2*tt)/4;
      sy = 1.1 + progress/10;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar - Parallel Universe.milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.99,
    fVideoEchoZoom: 0.999609,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.099998,
    fWaveScale: 0.032378,
    fWaveSmoothing: 0.63,
    fWaveParam: -0.4,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.045,
    wave_y: 0.94,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.005,
    ib_r: 1.0,
    ib_g: 0.0,
    ib_b: 0.25,
    ib_a: 1.0,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 4.4,
    mv_r: 1.0,
    mv_g: 0.0,
    mv_b: 0.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      myx = x-0.5;
      myy = y-0.5;
      q1 =0.1*sqrt(x*x+y*y);
      q1 = 0.05*(x+y);
      dy = q1*abs(sin(50*bass));
      dx = q1*abs(sin(50*bass_att));
      dy = 0.2*q1*q6;
      dx=0.2*q1*q6;
    }},
    per_frame_code: function(_){with(_){
      wave_r = 0.5+0.5*sin(time);
      wave_r = 0.5+0.5*sin(time);
      xwave_a = 0;
      ib_b = 0.5+0.3*sin(time*2.314);
      ib_r = 0.7+0.3*sin(time*1.867);
      q8 = ifcond(above(bass,1.2),2*bass,0.5);
      q7 = ifcond(above(bass_att,1.2),2*bass_att,0.5);
      q6 = ifcond(above(bass+bass_att,2.3),bass+bass_att,0.5);
      warp =0;
      q5 = ifcond(above(treb+treb_att,2.8),1,0);
      monitor = q5;
      ib_g = q5;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar - Sea Shells.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.9,
    fDecay: 0.97,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 3,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.8,
    fWaveScale: 0.893664,
    fWaveSmoothing: 0.6,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 2.853,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.995,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.0,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.005,
    ib_r: 1.0,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 1.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: -0.002,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 0.0,
    mv_g: 0.0,
    mv_b: 0.4,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      newx =x- q1;
      newy =y- q2;
      newrad = min(sqrt((newx)*(newx)+0.5625*(newy)*(newy))*2,sqrt(2));
      effect = newrad*((0.9+0.2*sin(q3*0.23))*y)*((0.9+0.2*sin(q3*0.197))*x);
      dy=-0.007*cos(pow((sqrt(2)-effect),5)*10);
      dx=-0.007*sin(pow((sqrt(2)-effect),5)*10);
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.250*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );
      wave_g = wave_g + 0.480*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );
      wave_b = wave_b + 0.370*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );
      warp=0;
      zoom =1;
      rot=0;
      decay =0.99;
      decay =1;
      ib_r = 0.16 + 0.15*sin(time*0.783);
      ib_g = 0.16 + 0.15*sin(time*0.895);
      ib_b = 0.75 +0.24*sin(time*1.134);
      ib_size = 0.005*above(bass+bass_att,2.8);
      
      movement =movement + 0.5*(((bass+bass_att + 0.075*pow((bass+0.6*bass_att+0.2*treb_att),3)))/fps);
      movement = ifcond(above(movement,10000), 0, movement);
      
      q1 = 0.5+0.1*sin(movement);
      q2 = 0.5-0.1*cos(0.781*movement);
      q3 = movement;
      wave_x = q1;
      wave_y = 1-q2;
    }},
    shapes: [
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.330038,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x = q1;
         y = 1- q2;
         r = 0.5 + 0.49*sin(time*0.467);
         b = 0.5 + 0.49*sin(time*0.568);
         g = 0.5 + 0.49*sin(time*0.669);
         r2 = 0.1*(bass+bass_att);
         b2 = r2;
         g2 = r2;
         rad = 0.5*r2 + 0.1;
       }},
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Rovastar - Sunflower Passion (Simple Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.98,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 3.645252,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.5,
    fWaveParam: -0.5,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 2.853,
    fZoomExponent: 2.1,
    fShader: 0.0,
    zoom: 1.025,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.29077,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.0,
    wave_g: 0.0,
    wave_b: 0.0,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 1.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.015,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 0.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      myx = (x-q1)*2;
      myy= (y-q2)*2;
      myrad = (myx*myx) + (myy*myy);
      dx = 0.1*(myy/(myrad+1));
      dy = -0.1*(myx/(myrad+1));
    }},
    per_frame_code: function(_){with(_){
      wave_r = 0.0 + 0.000*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );
      wave_g = 0.0 + 0.000*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );
      wave_b = 0.0 + 0.000*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );
      zoom = zoom + 0.01*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );
      rot = rot + 0.010*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
      //decay = decay - 0.01*equal(frame%6,0);
      warp=0;
      zoom =1;
      rot =0;
      cx=0.5;
      cy=0.5;
      q1 = 0.5 + 0.1*sin(time);
      q2 = 0.5 - 0.1*cos(time);
      wave_a =0;
      decay=1;
      q8 = oldq8+ 0.0005*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
      oldq8 =q8;
      mybass  = mybass + 0.01*(bass + bass_att);
      rot =1 + 0.15*sin(mybass*0.1789);
      zoom = 1.6 + 0.1*sin(mybass*0.786);
    }},
    shapes: [
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.020410,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 1.000000,
       border_r: 0.000000,
       border_g: 0.000000,
       border_b: 0.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         x = 0.5 + 0.01*sin(0.89*q8);
         y = 0.5 - 0.01*cos(0.77*q8);
         
         r = 0.25+0.25*sin(time*0.7679);
         g = 0.25+0.25*sin(time*0.8079);
         b = 0.25+0.25*sin(time*0.7339);
         r2 = 0.25+0.25*sin(time*0.6979);
         g2 = 0.25+0.25*sin(time*0.849);
         b2 = 0.25+0.25*sin(time*0.8079);
       }},
      },
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.020068,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 1.000000,
       border_r: 0.000000,
       border_g: 0.000000,
       border_b: 0.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         x = 0.5 - 0.01*sin(0.7089*q8);
         y = 0.5 + 0.01*cos(0.5077*q8);
         
         r = 0.25+0.25*sin(time*0.6479);
         g = 0.25+0.25*sin(time*0.5079);
         b = 0.25+0.25*sin(time*0.9339);
         r2 = 0.25+0.25*sin(time*0.779);
         g2 = 0.25+0.25*sin(time*0.707);
         b2 = 0.25+0.25*sin(time*0.747);
       }},
      },
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.020068,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 1.000000,
       border_r: 0.000000,
       border_g: 0.000000,
       border_b: 0.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         x = 0.5 + 0.01*sin(0.679*q8);
         y = 0.5 - 0.01*cos(0.877*q8);
         
         r = 0.25+0.25*sin(time*0.5679);
         g = 0.25+0.25*sin(time*0.4079);
         b = 0.25+0.25*sin(time*1.1339);
         r2 = 0.25+0.25*sin(time*0.9979);
         g2 = 0.25+0.25*sin(time*0.891);
         b2 = 0.25+0.25*sin(time*0.713);
       }},
      },
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.020068,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 1.000000,
       border_r: 0.000000,
       border_g: 0.000000,
       border_b: 0.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         x = 0.5 + 0.01*sin(0.916*q8);
         y = 0.5 - 0.01*cos(0.977*q8);
         
         r = 0.25+0.25*sin(time*1.1679);
         g = 0.25+0.25*sin(time*1.18079);
         b = 0.25+0.25*sin(time*1.17339);
         r2 = 0.25+0.25*sin(time*1.16979);
         g2 = 0.25+0.25*sin(time*1.1849);
         b2 = 0.25+0.25*sin(time*1.81079);
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Rovastar - Sunflower Passion.milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.98,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 3.645252,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.5,
    fWaveParam: -0.5,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 2.853,
    fZoomExponent: 2.1,
    fShader: 0.0,
    zoom: 1.025,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.29077,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.0,
    wave_g: 0.0,
    wave_b: 0.0,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 1.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.015,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 0.0,
    mv_a: 1.0,
    per_pixel_code: function(_){with(_){
      myx = (x-q1)*2;
      myy= (y-q2)*2;
      myrad = (myx*myx) + (myy*myy);
      dx = 0.1*(myy/(myrad+1));
      dy = -0.1*(myx/(myrad+1));
    }},
    per_frame_code: function(_){with(_){
      wave_r = 0.0 + 0.000*( 0.60*sin(0.933*time) + 0.40*sin(1.045*time) );
      wave_g = 0.0 + 0.000*( 0.60*sin(0.900*time) + 0.40*sin(0.956*time) );
      wave_b = 0.0 + 0.000*( 0.60*sin(0.910*time) + 0.40*sin(0.920*time) );
      zoom = zoom + 0.01*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );
      rot = rot + 0.010*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
      //decay = decay - 0.01*equal(frame%6,0);
      warp=0;
      zoom =1;
      rot =0;
      cx=0.5;
      cy=0.5;
      q1 = 0.5 + 0.1*sin(time);
      q2 = 0.5 - 0.1*cos(time);
      wave_a =0;
      decay=1;
      
      
      
      q8 = oldq8+ 0.0005*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
      oldq8 =q8;
      mybass  = mybass + 0.01*(bass + bass_att);
      
      rot =1 + 0.15*sin(mybass*0.1789);
      zoom = 1.4 + 0.1*sin(mybass*0.786);
    }},
    shapes: [
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.020410,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 1.000000,
       border_r: 0.000000,
       border_g: 0.000000,
       border_b: 0.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         x = 0.5 + 0.1*sin(0.89*q8);
         y = 0.5 - 0.1*cos(0.77*q8);
         
         r = 0.25+0.25*sin(time*0.7679);
         g = 0.25+0.25*sin(time*0.8079);
         b = 0.25+0.25*sin(time*0.7339);
         r2 = 0.25+0.25*sin(time*0.6979);
         g2 = 0.25+0.25*sin(time*0.849);
         b2 = 0.25+0.25*sin(time*0.8079);
       }},
      },
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.020068,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 1.000000,
       border_r: 0.000000,
       border_g: 0.000000,
       border_b: 0.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         x = 0.5 - 0.1*sin(0.7089*q8);
         y = 0.5 + 0.1*cos(0.5077*q8);
         
         r = 0.25+0.25*sin(time*0.6479);
         g = 0.25+0.25*sin(time*0.5079);
         b = 0.25+0.25*sin(time*0.9339);
         r2 = 0.25+0.25*sin(time*0.779);
         g2 = 0.25+0.25*sin(time*0.707);
         b2 = 0.25+0.25*sin(time*0.747);
       }},
      },
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.020068,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 1.000000,
       border_r: 0.000000,
       border_g: 0.000000,
       border_b: 0.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         x = 0.5 + 0.1*sin(0.679*q8);
         y = 0.5 - 0.1*cos(0.877*q8);
         
         r = 0.25+0.25*sin(time*0.5679);
         g = 0.25+0.25*sin(time*0.4079);
         b = 0.25+0.25*sin(time*1.1339);
         r2 = 0.25+0.25*sin(time*0.9979);
         g2 = 0.25+0.25*sin(time*0.891);
         b2 = 0.25+0.25*sin(time*0.713);
       }},
      },
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.020068,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 1.000000,
       border_r: 0.000000,
       border_g: 0.000000,
       border_b: 0.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         x = 0.5 + 0.1*sin(0.916*q8);
         y = 0.5 - 0.1*cos(0.977*q8);
         
         r = 0.25+0.25*sin(time*1.1679);
         g = 0.25+0.25*sin(time*1.18079);
         b = 0.25+0.25*sin(time*1.17339);
         r2 = 0.25+0.25*sin(time*1.16979);
         g2 = 0.25+0.25*sin(time*1.1849);
         b2 = 0.25+0.25*sin(time*1.81079);
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Rovastar - The Awakening.milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.989,
    fVideoEchoZoom: 1.483841,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 7,
    bAdditiveWaves: 0,
    bWaveDots: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.8,
    fWaveScale: 0.089269,
    fWaveSmoothing: 0.72,
    fWaveParam: -0.36,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.009963,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.0,
    sx: 0.999999,
    sy: 0.99983,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.06,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    per_pixel_code: function(_){with(_){
      zoom = 0.974 + rad/10 + abs(sin(ang-rad)/10) +q1/10;
      rot = -0.4 + treb*.001 + sin(treb+rad)/33 -q1/8;
    }},
    per_frame_code: function(_){with(_){
      warp = 0;
      wave_r = wave_r + .4*sin(time*.678);
      wave_g = wave_g + .4*sin(time*.977);
      wave_b = wave_b + .4*sin(time*.766);
      decay = 1 - mid /20;
      q1 = wave_r;
      wave_mystery = -time/6;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar - The Chaos Of Colours (Drifting Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.7,
    fDecay: 1.0,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.001,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.63,
    fWaveParam: -1.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 13.290894,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: -0.28,
    dy: -0.32,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.95,
    ib_g: 0.85,
    ib_b: 0.65,
    ib_a: 1.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      zoom = 1+0.05*rad;
    }},
    per_frame_code: function(_){with(_){
      ob_r = 0.5 + 0.4*sin(time*1.324);
      ob_g = 0.5 + 0.4*cos(time*1.371);
      ob_b = 0.5+0.4*sin(2.332*time);
      ib_r = 0.5 + 0.25*sin(time*1.424);
      ib_g = 0.25 + 0.25*cos(time*1.871);
      ib_b = 1-ob_b;
      volume = 0.15*(bass+bass_att+treb+treb_att+mid+mid_att);
      xamptarg = ifcond(equal(frame%15,0),min(0.5*volume*bass_att,0.5),xamptarg);
      xamp = xamp + 0.5*(xamptarg-xamp);
      xdir = ifcond(above(abs(xpos),xamp),-sign(xpos),ifcond(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));
      xaccel = xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
      xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
      xpos = xpos + 0.001*xspeed;
      dx = xpos*0.005;
      yamptarg = ifcond(equal(frame%15,0),min(0.3*volume*treb_att,0.5),yamptarg);
      yamp = yamp + 0.5*(yamptarg-yamp);
      ydir = ifcond(above(abs(ypos),yamp),-sign(ypos),ifcond(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));
      yaccel = ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
      yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
      ypos = ypos + 0.001*yspeed;
      dy = ypos*0.005;
      rot = 10*(dx-dy);
      wave_a = 0;
      q8 =oldq8+ 0.0003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
      oldq8 = q8;
      q7 = 0.003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
      monitor = rot;
    }},
    shapes: [
      {
       enabled: 1,
       sides: 3,
       additive: 0,
       thickOutline: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.550000,
       ang: 0.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 0.100000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.900000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.200000,
       per_frame_code: function(_){with(_){
         ang = time*1.4;
         x = 0.5 + 0.08*cos(time*1.3) + 0.03*cos(time*0.7);
         y = 0.5 + 0.08*sin(time*1.4) + 0.03*sin(time*0.7);
         r = 0.5 + 0.5*sin(q8*0.613 + 1);
         g = 0.5 + 0.5*sin(q8*0.763 + 2);
         b = 0.5 + 0.5*sin(q8*0.771 + 5);
         r2 = 0.5 + 0.5*sin(q8*0.635 + 4);
         g2 = 0.5 + 0.5*sin(q8*0.616+ 1);
         b2 = 0.5 + 0.5*sin(q8*0.538 + 3);
       }},
      },
      {
       enabled: 1,
       sides: 32,
       additive: 0,
       thickOutline: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.400000,
       ang: 0.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.300000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.200000,
       per_frame_code: function(_){with(_){
         ang = time*1.7;
         x = 0.5 + 0.08*cos(time*1.1) + 0.03*cos(time*0.7);
         y = 0.5 + 0.08*sin(time*1.1) + 0.03*sin(time*0.7);
         r = 0.5 + 0.5*sin(q8*0.713 + 1);
         g = 0.5 + 0.5*sin(q8*0.563 + 2);
         b = 0.5 + 0.5*sin(q8*0.654 + 5);
         r2 = 0.5 + 0.5*sin(q8*0.885 + 4);
         g2 = 0.5 + 0.5*sin(q8*0.556+ 1);
         b2 = 0.5 + 0.5*sin(q8*0.638 + 3);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.400000,
       ang: 0.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 0.600000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.400000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.200000,
       per_frame_code: function(_){with(_){
         ang = time*1.24;
         x = 0.5 - 0.08*cos(time*1.07) + 0.03*cos(time*0.7);
         y = 0.5 - 0.08*sin(time*1.33) + 0.03*sin(time*0.7);
         g = 0.5 + 0.5*sin(q8*0.713 + 1);
         b = 0.5 + 0.5*cos(q8*0.563 + 2);
         r = 0.5 + 0.5*sin(q8*0.654 + 5);
         r2 = 0.5 + 0.5*cos(q8*0.885 + 4);
         g2 = 0.5 + 0.5*cos(q8*0.556+ 1);
         b2 = 0.5 + 0.5*sin(q8*0.638 + 3);
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Rovastar - Twilight Tunnel.milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.96,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.63,
    fWaveParam: -0.5,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.0,
    sx: 0.980296,
    sy: 1.0,
    wave_r: 0.0,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_frame_code: function(_){with(_){
      warp = 0;
      wave_mystery = 2;
      wave_a = 0;
      q8 =oldq8+ 0.005*(pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps) + 0.035;
      oldq8 = q8;
      zoom = 1.5 +0.155*cos(q8*0.423);
      rot = 0.0128*sin(1.343*q8);
      dx = 0.0035*sin(q8*0.646);
      dy = 0.0035*sin(q8*0.314);
      cx = 0.5 + 0.005*sin(0.497*q8);
      cy = 0.5 +0.005*sin(0.413*q8);
    }},
    shapes: [
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.089632,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 0.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 0.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         //rad = rad +0.0155*cos(q8*0.423);
         border_r = 0.5 + 0.499*sin(time*0.6711);
         border_b = 0.5 + 0.499*sin(time*0.8011);
         border_g = 0.5 + 0.499*sin(time*0.7777);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 0.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         //rad = rad +0.0155*cos(q8*0.423);
         border_r = 0.5 + 0.499*sin(time*0.7642);
         border_b = 0.5 + 0.499*sin(time*0.6411);
         border_g = 0.5 + 0.499*sin(time*0.7311);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.076440,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 0.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 0.000000,
       border_b: 1.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         border_r = 0.5 + 0.499*sin(time*0.9413);
         border_b = 0.5 + 0.499*sin(time*0.2021);
         border_g = 0.5 + 0.499*sin(time*0.8549);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.067165,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 0.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         border_r = 0.5 + 0.499*sin(time*0.5157);
         border_b = 0.5 + 0.499*sin(time*0.4877);
         border_g = 0.5 + 0.499*sin(time*0.3867);
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Rovastar and Krash - Hallucinogenic Pyramids (Extra Beat Ti.milk"] = {
    fRating: 2.0,
    fGammaAdj: 2.0,
    fDecay: 0.98,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 6,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 11.94,
    fWaveScale: 1.599182,
    fWaveSmoothing: 0.7,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.772,
    fZoomExponent: 1.001,
    fShader: 0.0,
    zoom: 1.007,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.0,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.4,
    wave_b: 0.65,
    wave_x: 0.01,
    wave_y: 0.0,
    ob_size: 0.005,
    ob_r: 0.3,
    ob_g: 0.5,
    ob_b: 0.3,
    ob_a: 0.7,
    ib_size: 0.005,
    ib_r: 0.45,
    ib_g: 0.35,
    ib_b: 0.35,
    ib_a: 0.3,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      zoom = ifcond(equal(q1,0),0.4*x,ifcond(equal(q1,1),0.4*(1-x),ifcond(equal(q1,2),0.4*y,0.4*(1-y)))) + 0.6 - 0.13*(min(q2,0.3));
    }},
    per_frame_code: function(_){with(_){
      wave_b = wave_b - 0.200*( 0.60*sin(1.823*time) + 0.40*sin(0.916*time) );
      wave_r = wave_r + 0.500*( 0.60*sin(1.900*time) + 0.40*sin(1.023*time) );
      wave_g = wave_g + 0.500*( 0.60*sin(1.1*time) + 0.40*sin(0.949*time) );
      decay = decay - 0.03*equal(frame%30,0);
      treb_effect = max(max(treb,treb_att)-1.25,0);
      mid_effect= max(max(mid,mid_att)-1.25,0);
      ob_size = ob_size + 0.005*treb_effect;
      ib_size = ib_size + 0.005*mid_effect;
      ob_g = ob_g -0.2* treb_effect +0.2* mid_effect;
      ib_g = ib_g + 0.2*mid_effect+ 0.2*treb_effect;
      ib_b = ib_b - 0.2*mid_effect+ 0.2*treb_effect;
      ok_to_change = ifcond(above(time,beat_time+5),1,0);
      bass_effect = max(bass, bass_att)-1;
      beat_time = ifcond(above(bass_effect,0.5), ifcond(ok_to_change,time,beat_time),beat_time);
      effect = ifcond(equal(time,beat_time),effect+rand(3)+1,effect);
      effect = ifcond(above(effect,3),effect-4,effect);
      bass_effect = max(max(bass,bass_att)-1.34,0);
      q1 = effect;
      q2 = bass_effect;
      wave_x = ifcond(equal(q1,0),0.01,ifcond(equal(q1,1),0.99,ifcond(equal(q1,2),0.01,0.99)));
      wave_mystery = ifcond(equal(q1,0),1,ifcond(equal(q1,1),1,ifcond(equal(q1,2),0,0)));
      monitor = q1;
      zoom = ifcond(equal(q1,0),0.4*x,ifcond(equal(q1,1),0.4*(1-x),ifcond(equal(q1,2),0.4*y,0.4*(1-y)))) + 0.6 - 0.13*(min(q2,0.3));
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar and Unchained - Braindance Visions.milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.935,
    fVideoEchoZoom: 1.006595,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.099998,
    fWaveScale: 100.0,
    fWaveSmoothing: 0.0,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.999514,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.489,
    wave_y: 0.5,
    ob_size: 0.5,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.26,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    per_pixel_code: function(_){with(_){
      sy= ifcond(below(y,q1),ifcond(above(y,q2),pow(log(abs(ang)*time),3)/4,q1+.25),q2+.75);
      zoom = 1 + sin(rad)/10*cos((y-.5+rad)*10*sin(time));
      rot=rot+ifcond(bnot(below(y,q1)*above(y,q2)),0,sin(time/2)*.1);
    }},
    per_frame_code: function(_){with(_){
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);
      bass_residual = equal(bass_thresh,2)*sin(time*bass_thresh*.1) + (1-equal(bass_thresh,2))*bass_residual;
      mid_thresh = above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*0.96+1.3);
      mid_residual = equal(mid_thresh,2)*sin(time*bass_thresh*.1) + (1-equal(mid_thresh,2))*mid_residual;
      q1=.75+.2*bass_residual;
      q2=.25+.2*mid_residual;
      wave_g = wave_g*bass_residual;
      wave_b =wave_b*mid_residual;
      wave_r = wave_r + .5*sin(time*bass_residual*mid_residual*.4);
      rot=rot+.3*sin(time*mid_residual);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rozzor & Rovastar - Oozing Resistance (Waveform Mod).milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 1.006596,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 3,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 1,
    fWaveAlpha: 5.002776,
    fWaveScale: 1.1864,
    fWaveSmoothing: 0.63,
    fWaveParam: -1.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.999513,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.0,
    wave_g: 0.0,
    wave_b: 0.0,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.26,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.5,
    mv_r: 0.35,
    mv_g: 0.35,
    mv_b: 0.35,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      rot = 0.1*(rad+cos((5+5*sin(q8*1.211)*x)-0.5) -sin(((5+5*sin(q8*0.973))*y)-0.5));
      dx = 0.005*(cos((5+5*sin(q8*1.311)*x)-0.5) -sin(((5+5*sin(q8*0.9431))*y)-0.5));
      dy = 0.005*(cos((5+5*sin(q8*1.021)*x)-0.5) -sin(((5+5*sin(q8*0.987))*y)-0.5));
      zoom =1- 0.005*(rad+cos((5+5*sin(q8*0.943)*x)-0.5) -sin(((5+5*sin(q8*1.0961))*y)-0.5));
      cx = 1-rot * 2;
    }},
    per_frame_code: function(_){with(_){
      ob_r = 0.5+0.5*sin(2*time);
      ob_g = 0.5+0.5*sin(1.23*time);
      ob_b = 0.5+0.5*sin(time*1.321);
      wave_a =0;
      q8 =oldq8+ 0.003*(pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
      oldq8 = q8;
      warp=0;
      sx = 1- 0.1*sin(q8)+0.05*sin(time);
      wave_b = cos(time)  + abs(cos(time));
      wave_g = abs(sin(time)) ;
      wave_r = (-1 * cos(time))  + abs(-1 * cos(time)) + 0.2 * (cos(sin(time))+(abs(cos(sin(time)))+cos(sin(time))));
      wave_r = 1 - ifcond(above(wave_r,1),1,ifcond(above(wave_r,0), abs(wave_r),0));
      wave_g = 1 - ifcond(above(wave_g,1),1,ifcond(above(wave_g,0), abs(wave_g),0));
      wave_b = 1 - ifcond(above(wave_b,1),1,ifcond(above(wave_b,0), abs(wave_b),0));
      
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["shifter - flashburn.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.995,
    fVideoEchoZoom: 0.999608,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 7,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.007768,
    fWaveScale: 1.285751,
    fWaveSmoothing: 0.63,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 0.055821,
    fShader: 0.0,
    zoom: 0.970118,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.26,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      azoom = -0.95 + 0.4*(x-0.5) + 0.4*(y-0.5);
    }},
    per_frame_code: function(_){with(_){
      azoom = -.95;
      decay = decay - .001;
    }},
    shapes: [
      {
       enabled: 1,
       sides: 15,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       init_code: function(_){with(_){
         set = rand(20);
       }},
       per_frame_code: function(_){with(_){
         x = 0.5 + 0.5*(sin(time*1.4)*0.4 + 0.3*sin(time*1.9) + 0.3*sin(time*(1 + set*0.05)));
         y = 0.5 + 0.5*(sin(time*1.2)*0.7 + 0.3*sin(time*1.6));
         
         r = 0.5 + 0.5*sin(time);
         g = 0.5 + 0.5*sin(time + 2.094);
         b = 0.5 + 0.5*sin(time + 4.188);
         
         r2 = 0.5 + 0.5*(sin(time*0.4)*0.8 + 0.2*sin(time*0.6));
         g2 = 0.5 + 0.5*(sin(time*0.5)*0.5 + 0.5*sin(time*0.4));
         b2 = 0.5 + 0.5*(sin(time*0.2)*0.6 + 0.4*sin(time*0.7));
         
         rad = rad*(bass_att+mid_att+treb_att)/3;
       }},
      },
      {
       enabled: 1,
       sides: 15,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x = 0.5 + 0.3*(sin(time*1.4)*0.4 + 0.6*sin(time*1.9));
         y = 0.5 + 0.5*(sin(time*1.2)*0.7 + 0.3*sin(time*1.6));
         
         r = 0.5 + 0.5*sin(time);
         g = 0.5 + 0.5*sin(time + 2.094);
         b = 0.5 + 0.5*sin(time + 4.188);
         
         r2 = 0.5 + 0.5*(sin(time*0.4)*0.8 + 0.2*sin(time*0.6));
         g2 = 0.5 + 0.5*(sin(time*0.5)*0.5 + 0.5*sin(time*0.4));
         b2 = 0.5 + 0.5*(sin(time*0.2)*0.6 + 0.4*sin(time*0.7));
         
         rad = rad*(bass_att+mid_att+treb_att)/3;
       }},
      },
      {
       enabled: 1,
       sides: 15,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x = 0.5 + 0.5*(sin(time*1.4)*0.4 + 0.6*sin(time*1.9));
         y = 0.5 + 0.3*(sin(time*1.2)*0.7 + 0.3*sin(time*1.6));
         
         r = 0.5 + 0.5*sin(time);
         g = 0.5 + 0.5*sin(time + 2.094);
         b = 0.5 + 0.5*sin(time + 4.188);
         
         r2 = 0.5 + 0.5*(sin(time*0.4)*0.8 + 0.2*sin(time*0.6));
         g2 = 0.5 + 0.5*(sin(time*0.5)*0.5 + 0.5*sin(time*0.4));
         b2 = 0.5 + 0.5*(sin(time*0.2)*0.6 + 0.4*sin(time*0.7));
         
         rad = rad*(bass_att+mid_att+treb_att)/3;
       }},
      },
      {
       enabled: 1,
       sides: 15,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       init_code: function(_){with(_){
         set = rand(10);
       }},
       per_frame_code: function(_){with(_){
         x = 0.5 + 0.3*(sin(time*1.4)*0.4 + 0.6*sin(time*1.9));
         y = 0.5 + 0.3*(sin(time*1.2)*0.3 + 0.3*sin(time*1.6) + 0.4*sin(time*(1 + set*0.1)));
         
         r = 0.6 + 0.4*(sin(time*0.3)*0.8 + 0.2*sin(time*0.5));
         g = 0.6 + 0.4*(sin(time*0.3)*0.5 + 0.5*sin(time*0.4));
         b = 0.6 + 0.4*(sin(time*0.6)*0.6 + 0.4*sin(time*0.1));
         
         r2 = 0.5 + 0.5*(sin(time*0.4)*0.8 + 0.2*sin(time*0.6));
         g2 = 0.5 + 0.5*(sin(time*0.5)*0.5 + 0.5*sin(time*0.4));
         b2 = 0.5 + 0.5*(sin(time*0.2)*0.6 + 0.4*sin(time*0.7));
         
         rad = rad*(bass_att+mid_att+treb_att)/3;
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["StudioMusic & Unchained - Remembering How You Were (Perceived Mix).milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 0.9981,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 5,
    bAdditiveWaves: 0,
    bWaveDots: 1,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 1,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 13.378749,
    fWaveScale: 0.717349,
    fWaveSmoothing: 0.531,
    fWaveParam: 0.02,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.2081,
    fWarpScale: 1.263386,
    fZoomExponent: 0.111607,
    fShader: 0.5099,
    zoom: 0.054279,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.3333,
    sx: 0.999901,
    sy: 0.999901,
    wave_r: 0.25,
    wave_g: 0.35,
    wave_b: 0.7,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.5,
    ob_g: 0.25,
    ob_b: 0.15,
    ob_a: 0.97,
    ib_size: 0.005,
    ib_r: 0.1,
    ib_g: 0.3,
    ib_b: 0.5,
    ib_a: 0.97,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 1.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      dx = dx + ifcond(above(crack,rip), 2*dx_r*crackdown, -2*dx_r*ripdown)*05;
      dy = dy + ifcond(above(rip,crack), 2*dy_r*crackdown, -2*dy_r*ripdown)*05;
      zoom=0.9615+rad/12+ q2/20;
    }},
    init_code: function(_){with(_){
      entropy=2;
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      chaos=.9+.1*sin(pulse);
      entropy=ifcond(bnot(entropy),2,ifcond(equal(pulse,-20),1+rand(3),entropy));
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);
      bass_flop=abs(bass_flop-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);
      treb_flop=abs(treb_flop-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);
      mid_flop=abs(mid_flop-equal(mid_thresh,2));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      bass_residual = bass_changed*sin(pulse*bass_thresh*.1*entropy) + bnot(bass_changed)*bass_residual;
      treb_residual = treb_changed*sin(pulse*treb_thresh*.1*entropy) + bnot(treb_changed)*treb_residual;
      mid_residual = mid_changed*sin(pulse*mid_thresh*.1*entropy) + bnot(mid_changed)*mid_residual;
      pulse=ifcond(above(abs(pulse),20),-20,pulse+.1*bor(bor(bass_changed,treb_changed),mid_changed)+(mid_thresh+bass_thresh+treb_thresh)*entropy*.025);
      q1=mid_residual;
      q2=bass_residual;
      q3=treb_residual;
      q4=sin(pulse);
      q5=sin(pulse/2);
      wave_r=wave_r+.5*bass_residual;
      wave_r=wave_g+.5*mid_residual;
      wave_r=wave_b+.5*treb_residual;
      wave_mystery=mid_residual;
      ob_r=ifcond(bass_flop,treb_flop,wave_r);
      ob_b=ifcond(treb_flop,mid_flop,wave_b);
      ob_g=ifcond(mid_flop,bass_flop,wave_g);
      ob_a=.03+.02*wave_r;
      ob_size=.25+.25*treb_residual;
      ib_size=.05+.04*bass_residual;
      ib_r = ifcond(bass_flop,ob_b,.5+ 0.2*sin(time*0.5413));
      ib_g = ifcond(treb_flop,ob_g,.5 + 0.2*sin(time*0.6459));
      ib_b = ifcond(mid_flop,ob_r,.5 + 0.2*sin(time*0.4354));
      rot = rot + 0.04*q1;
      zoom=max(0.98, 0.2+0.35*bass_thresh);
      rot = sin(bass*treb*mid)/16;
      wave_r = bass*.5;
      wave_g = treb*.5;
      wave_b = mid*.5;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["StudioMusic & Unchained - State Of Discretion.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.983,
    fVideoEchoZoom: 0.998168,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 4,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 3.973828,
    fWaveScale: 1.329466,
    fWaveSmoothing: 0.45,
    fWaveParam: 0.02,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.75,
    fWarpAnimSpeed: 0.999998,
    fWarpScale: 0.994977,
    fZoomExponent: 0.0576,
    fShader: 0.95,
    zoom: 0.773282,
    rot: 0.0,
    cx: 0.44,
    cy: 0.440001,
    dx: 0.02,
    dy: 0.0,
    warp: 0.9991,
    sx: 0.990096,
    sy: 1.009997,
    wave_r: 0.35,
    wave_g: 0.36,
    wave_b: 0.4,
    wave_x: 0.51,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.36,
    ob_g: 0.5,
    ob_b: 0.360001,
    ob_a: 0.959999,
    ib_size: 0.01,
    ib_r: 0.45,
    ib_g: 0.450001,
    ib_b: 0.5,
    ib_a: 0.9,
    per_pixel_code: function(_){with(_){
      radix=ifcond(above(q3,0),min(x,y),max(x,y));
      radix=ifcond(above(q2,0),min(radix,rad),max(radix,rad));
      rot=ifcond(above(q4,0),rad*.2*q5,0);
      zoom=ifcond(above(q2,0),zoom,ifcond(above(q3,0),1+q1*.05,1+.07*cos(radix*10*q1)));
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      chaos=.9+.1*sin(pulse);
      entropy=ifcond(bnot(entropy),2,ifcond(equal(pulse,-20),1+rand(3),entropy));
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);
      bass_flop=abs(bass_flop-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);
      treb_flop=abs(treb_flop-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);
      mid_flop=abs(mid_flop-equal(mid_thresh,2));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      bass_residual = bass_changed*sin(pulse*bass_thresh*.1*entropy) + bnot(bass_changed)*bass_residual;
      treb_residual = treb_changed*sin(pulse*treb_thresh*.1*entropy) + bnot(treb_changed)*treb_residual;
      mid_residual = mid_changed*sin(pulse*mid_thresh*.1*entropy) + bnot(mid_changed)*mid_residual;
      pulse=ifcond(above(abs(pulse),20),-20,pulse+.2*bor(bor(bass_changed*bnot(treb_changed),treb_changed*bnot(bass_changed))*bnot(mid_changed),mid_changed)+(mid+bass+treb)*entropy*.025);
      q1=mid_residual;
      q2=bass_residual;
      q3=treb_residual;
      q4=sin(pulse);
      q5=sin(pulse/2);
      wave_r=wave_r+.5*bass_residual;
      wave_r=wave_g+.5*mid_residual;
      wave_r=wave_b+.5*treb_residual;
      wave_mystery=mid_residual;
      ob_r=ifcond(bass_flop,treb_flop,wave_r);
      ob_b=ifcond(treb_flop,mid_flop,wave_b);
      ob_g=ifcond(mid_flop,bass_flop,wave_g);
      ob_a=.03+.02*wave_r;
      ob_size=.05+.04*treb_residual;
      ib_r=ifcond(bass_flop,ob_b,ob_g);
      ib_b=ifcond(treb_flop,ob_g,ob_r);
      ib_g=ifcond(mid_flop,ob_r,ob_b);
      ib_a=.03+.02*wave_g;
      ib_size=.05+.04*bass_residual;
      ib_r = ib_r + 0.2*sin(time*0.5413);
      ib_g = ib_g + 0.2*sin(time*0.6459);
      ib_b = ib_b + 0.2*sin(time*0.4354);
      rot = rot + 0.040*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
      zoom=max(0.98, min(0.15+0.8*bass_att, 1.75 ));
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["StudioMusic & Unchained - Wrenched Fate.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.999001,
    fDecay: 0.98,
    fVideoEchoZoom: 0.9981,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 5,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 64,
    nMotionVectorsY: 1,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 13.378749,
    fWaveScale: 0.717349,
    fWaveSmoothing: 0.531,
    fWaveParam: 0.02,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.2081,
    fWarpScale: 1.263386,
    fZoomExponent: 0.111607,
    fShader: 0.5099,
    zoom: 0.054279,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.3333,
    sx: 0.999901,
    sy: 0.999901,
    wave_r: 0.25,
    wave_g: 0.35,
    wave_b: 0.7,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.5,
    ob_g: 0.25,
    ob_b: 0.15,
    ob_a: 0.97,
    ib_size: 0.01,
    ib_r: 0.1,
    ib_g: 0.3,
    ib_b: 0.5,
    ib_a: 0.97,
    per_pixel_code: function(_){with(_){
      radix=ifcond(above(q3,0),min(x,y),max(x,y));
      radix=ifcond(above(q2,0),min(radix,rad),max(radix,rad));
      rot=ifcond(above(q4,0),rad*.2*q5,rot);
      zoom=ifcond(above(q2,0),zoom,ifcond(above(q3,0),zoom+q1*.05,zoom+.07*cos(radix*10*q1)));
      rot=ifcond(equal(q1,1),rad*(sin(mid+treb)/7),rad*(sin(-mid-treb)/7));
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      chaos=.9+.1*sin(pulse);
      entropy=ifcond(bnot(entropy),2,ifcond(equal(pulse,-20),1+rand(3),entropy));
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);
      bass_flop=abs(bass_flop-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);
      treb_flop=abs(treb_flop-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);
      mid_flop=abs(mid_flop-equal(mid_thresh,2));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      bass_residual = bass_changed*sin(pulse*bass_thresh*.1*entropy) + bnot(bass_changed)*bass_residual;
      treb_residual = treb_changed*sin(pulse*treb_thresh*.1*entropy) + bnot(treb_changed)*treb_residual;
      mid_residual = mid_changed*sin(pulse*mid_thresh*.1*entropy) + bnot(mid_changed)*mid_residual;
      pulse=ifcond(above(abs(pulse),20),-20,pulse+.1*bor(bor(bass_changed,treb_changed),mid_changed)+(mid_thresh+bass_thresh+treb_thresh)*entropy*.025);
      q1=mid_residual;
      q2=bass_residual;
      q3=treb_residual;
      q4=sin(pulse);
      q5=sin(pulse/2);
      wave_r=wave_r+.5*bass_residual;
      wave_r=wave_g+.5*mid_residual;
      wave_r=wave_b+.5*treb_residual;
      wave_mystery=mid_residual;
      ob_r=ifcond(bass_flop,treb_flop,wave_r);
      ob_b=ifcond(treb_flop,mid_flop,wave_b);
      ob_g=ifcond(mid_flop,bass_flop,wave_g);
      ob_a=.03+.02*wave_r;
      ob_size=.25+.25*treb_residual;
      ib_size=.05+.04*bass_residual;
      ib_r = ifcond(bass_flop,ob_b,.5+ 0.2*sin(time*0.5413));
      ib_g = ifcond(treb_flop,ob_g,.5 + 0.2*sin(time*0.6459));
      ib_b = ifcond(mid_flop,ob_r,.5 + 0.2*sin(time*0.4354));
      rot = rot + 0.04*q1;
      zoom=max(0.98, 0.2+0.35*bass_thresh);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Telek - Slow Shift Matrix (bb4.5).milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.0,
    fDecay: 0.9,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 3,
    nWaveMode: 3,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.001645,
    fWaveScale: 0.430333,
    fWaveSmoothing: 0.63,
    fWaveParam: 1.0,
    fModWaveAlphaStart: 2.0,
    fModWaveAlphaEnd: 2.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.001,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.3,
    ob_a: 1.0,
    ib_size: 0.1,
    ib_r: 1.0,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 1.0,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 48.0,
    mv_dx: -0.941273,
    mv_dy: 0.426319,
    mv_l: 5.0,
    mv_r: 0.315997,
    mv_g: 0.078173,
    mv_b: 0.941976,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      zoom = .8-.2*pow(1-rad,1);
    }},
    init_code: function(_){with(_){
      tt = rand(10000);
      
    }},
    per_frame_code: function(_){with(_){
      bv = bass*.01+.99*bv;
      tt=tt+bass*.01;
      tt = ifcond(above(bass*bass_att,4.5),rand(32768),tt);
      wave_x =-1;
      dx = .3*sin(tt*.12)+10*sin(tt*.015);
      dy = .39*sin(tt*.21)+20*sin(tt*.041);
      rot = 1*sin(tt*.15);
      cx = sin(tt*.16)*.5+.5;
      cy = cos(tt*.46)*.5+.5;
      ib_r = sin(tt*.51)*.5+.5;
      ib_g = sin(tt*.71)*.5+.5;
      ib_b = sin(tt*.81)*.5+.5;
      monitor = tt;
      
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Unchained & Rovastar - For The Seagull.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.98,
    fVideoEchoZoom: 0.999838,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 2,
    nWaveMode: 7,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 1,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 35.318443,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.792,
    fWaveParam: -1.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.97,
    fWarpAnimSpeed: 1.4448,
    fWarpScale: 86.134796,
    fZoomExponent: 1.0303,
    fShader: 0.5,
    zoom: 0.9924,
    rot: 0.0,
    cx: 1.0699,
    cy: 1.069999,
    dx: 0.0,
    dy: 0.0,
    warp: 1.307431,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.25,
    wave_g: 0.26,
    wave_b: 0.27,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.5,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.1,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 1.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 1.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 1.0,
    per_pixel_code: function(_){with(_){
      rot = rot + 0.04*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) )+ ifcond(above(q1,0),sin(rad)/30,sin(1-rad)/30);
      zoom = zoom + 0.013*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) ) + ifcond(above(sin(1.123*time/4),0),sin(1-rad)/40,-sin(rad*q1)/40);
    }},
    per_frame_code: function(_){with(_){
      warp = 0;
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);
      bass_flop=abs(bass_flop-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*0.96+1.3);
      treb_flop=abs(treb_flop-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*0.96+1.3);
      mid_flop=abs(mid_flop-equal(mid_thresh,2));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      pulse=ifcond(above(abs(pulse),20),-20,pulse+.1*bor(bor(bass_changed*bnot(treb_changed),treb_changed*bnot(bass_changed))*bnot(mid_changed),mid_changed))+(bass+mid+treb)*.025;
      wave_b=ifcond(treb_changed,1,ifcond(mid_changed,.45,-.45))*q4;
      wave_g=ifcond(bass_changed,.1,bass_flop);
      wave_r=ifcond(mid_flop,1,.5*q2*treb_flop);
      ib_b=ib_b+.5*sin(pulse);
      ib_g=ib_g+5*sin(pulse*.8);
      ib_r=ib_r+5*sin(pulse*.8);
      ob_b=wave_r;
      ob_g=wave_b;
      ob_r=wave_g;
      wave_mystery=sin(pulse);
      q1=pulse;
      mv_y = 1.25;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Unchained - Beat Demo 2.1.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.99,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 1.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.818016,
    fWaveScale: 0.653093,
    fWaveSmoothing: 0.09,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 5.9957,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0082,
    rot: -0.76,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.4241,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.5,
    ob_g: 0.5,
    ob_b: 0.5,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.5,
    ib_g: 0.5,
    ib_b: 0.5,
    ib_a: 0.0,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.85,
    mv_r: 0.4999,
    mv_g: 0.4999,
    mv_b: 0.4999,
    mv_a: 1.0,
    per_pixel_code: function(_){with(_){
      zoom=zoom+.3*sin(y*3.14*q4);
      rot=rot*cos(x*3.14*q5);
    }},
    per_frame_code: function(_){with(_){
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      chaos=.9+.1*sin(pulse);
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.6)*chaos+1.6);
      bass_flop=abs(bass_flop-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.6)*chaos+1.6);
      treb_flop=abs(treb_flop-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.6)*chaos+1.6);
      mid_flop=abs(mid_flop-equal(mid_thresh,2));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      bass_residual = bass_changed*sin(pulse*3) + bnot(bass_changed)*bass_residual;
      treb_residual = treb_changed*sin(pulse*3) + bnot(treb_changed)*treb_residual;
      mid_residual = mid_changed*sin(pulse*3) + bnot(mid_changed)*mid_residual;
      pulse=ifcond(above(abs(pulse),3.14),-3.14,pulse+(bass_thresh+mid_thresh+treb_thresh)*.0035);
      entropy=ifcond(bass_changed*mid_changed*treb_changed,(1+bass_flop+treb_flop+mid_flop)*(1+rand(3)),entropy);
      q1=mid_residual;
      q2=bass_residual;
      q3=treb_residual;
      q4=sin(pulse);
      q5=cos(pulse*(.5+.1*entropy));
      q6=sin(pulse*(.5+pow(.25,entropy)));
      q7=above(q1,0)+above(q2,0)+above(q3,0)+above(q3,0)*treb_flop+above(q2,0)*bass_flop+above(q1,0)*mid_flop;
      q8=entropy;
      wave_r=wave_r+wave_r*q1;
      wave_b=wave_b+wave_b*q2;
      wave_g=wave_g+wave_g*q3;
      ob_r=ob_r+ob_r*sin(q1+q2*2.14);
      ob_bob_b+ob_b*sin(q2+q3*2.14);
      ob_g=ob_g+ob_g*sin(q3+q1*2.14);
      ib_r=ib_r+ib_r*cos(q5+q1*2.14);
      ib_b=ib_b+ib_*cos(q5+q2*2.14);
      ib_g=ib_g+ib_g*cos(q5+q3*2.14);
      ob_a=.25+.25*sin(q2+q3*2.14);
      ib_a=.25+.25*sin(q2*2.14+q3);
      ob_size=.1+.1*sin(q3*3+q1);
      ib_size=.1+.1*sin(q1*3+q3);
      wave_mystery=.5*q6;
      cx=cx+.5*q1;
      cy=cy+.5*q2;
      warp=bnot(q7%2);
      echo_zoom=1+.5*q3;
      echo_orientation=q8%4;
      wave_mode=q8%7;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Unchained - Goofy Beat Detection.milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.0,
    fDecay: 0.992,
    fVideoEchoZoom: 0.9994,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 7,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 1,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.0592,
    fWaveScale: 0.653093,
    fWaveSmoothing: 0.27,
    fWaveParam: -0.38,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 5.99579,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.008,
    rot: 0.0019,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 1.0,
    wave_g: 1.0,
    wave_b: 1.0,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.01,
    ib_r: 0.5,
    ib_g: 0.9,
    ib_b: 0.5,
    ib_a: 1.0,
    nMotionVectorsX: 24.959999,
    nMotionVectorsY: 19.199999,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.85,
    mv_r: 0.4999,
    mv_g: 0.4999,
    mv_b: 0.4999,
    mv_a: 1.0,
    per_pixel_code: function(_){with(_){
      rot=ifcond(above(q4,0),rad*.2*q5,sin(rad*(q4+q3)));
      zoom=ifcond(above(q2,0),zoom+(1-zoom)*rot*cos(rad*3.14*q2),ifcond(above(q3,0)*above(x,.5+.5*q5),zoom+(1-zoom)*sin(q1*rot*3.14),zoom+(1-zoom)*cos(rad*10*q6)));
      dx=above(q1,0)*sin(rad*.5*q2);
      dy=above(q3,0)*sin(rad*.5*q3);
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      chaos=.9+.1*sin(pulse);
      entropy=ifcond(equal(pulse,-20),1+bass_flop+treb_flop+mid_flop+rand(2),entropy);
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.6)*chaos+1.6);
      bass_flop=abs(bass_flop-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.6)*chaos+1.6);
      treb_flop=abs(treb_flop-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.6)*chaos+1.6);
      mid_flop=abs(mid_flop-equal(mid_thresh,2));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      bass_residual = bass_changed*sin(pulse*3) + bnot(bass_changed)*bass_residual;
      treb_residual = treb_changed*sin(pulse*3) + bnot(treb_changed)*treb_residual;
      mid_residual = mid_changed*sin(pulse*3) + bnot(mid_changed)*mid_residual;
      pulse=ifcond(above(abs(pulse),20),-20,pulse+(bass_thresh+mid_thresh+treb_thresh)*.018);
      q1=mid_residual;
      q2=bass_residual;
      q3=treb_residual;
      q4=sin(pulse);
      q5=cos(pulse*(.5+.1*entropy));
      q6=sin(pulse*(.5+pow(.25,entropy)));
      q7=above(q1,0)+above(q2,0)+above(q3,0)+above(q3,0)*treb_flop+above(q2,0)*bass_flop+above(q1,0)*mid_flop;
      q8=entropy;
      ob_r=.4+.4*sin(time*2.157+q6);
      ob_b=.8+.2*sin(time*1.689+q5);
      ob_g=.6+.4*sin(time*.413+q4);
      ib_r=.5+.5*cos(time*1.2+q1*.1);
      ib_b=.4+.4*cos(time*2.811+q2*.1);
      ib_g=.4+.4*cos(time*1.666+q3*.1);
      ib_size=.05+.03*q2;
      ob_size=.03+.02*sin(time*2.321+q2*.2);
      ob_a=.6+.4*q3;
      ib_a=.9+.1*sin(q2*.3+q4+q1*.5);
      mv_r=mv_r+.5*sin(q4+time*.678);
      mv_b=mv_b+.5*sin(q4+time*.789);
      mv_g=mv_g+.5*sin(q5+time*.456);
      mv_a=.2+.2*sin(time*1.178+q5*1.14);
      rot=0;
      wave_r=.6+.4*sin(q1+time*2.183);
      wave_b=.6+.4*sin(q2+time*1.211);
      wave_g=.6+.4*sin(q3+time*1.541);
      wave_mystery=wave_mystery+.5*sin(time*2.18+q6);
      wave_x=wave_x+.3*sin(time*.811)+.005*(frame%3);
      wave_y=wave_y+.3*sin(time*.788)+.005*(frame%3);
      wave_a=3+sin(time*1.414)+q3;
      wave_mode=q7;
      zoom=1+.7*sin(time*1.51);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Unchained - Shaping The Grid.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.985,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 1,
    bSolarize: 1,
    bInvert: 0,
    fWaveAlpha: 0.625316,
    fWaveScale: 1.187274,
    fWaveSmoothing: 0.0,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 0.9997,
    fShader: 0.03,
    zoom: 0.960496,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.5,
    ob_r: 0.5,
    ob_g: 0.5,
    ob_b: 0.5,
    ob_a: 0.0,
    ib_size: 0.5,
    ib_r: 0.5,
    ib_g: 0.5,
    ib_b: 0.5,
    ib_a: 0.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.85,
    mv_r: 0.4999,
    mv_g: 0.4999,
    mv_b: 0.4999,
    mv_a: 0.5,
    per_pixel_code: function(_){with(_){
      grid=(x*q7*3)%2+above(y,.5+.25)*above(q6,4);
      zoom=zoom+.07*cos(sin(rad*2.14*q3+abs(rad-.1*grid))*2.14+rad*sin(q4*2.14+q1))*bnot(grid);
      rot=.05*equal(grid,0)*cos(rad*2.14*q2+q3)*(q2+q3);
    }},
    init_code: function(_){with(_){
      entropy=2;
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      chaos=.1+.1*sin(pulse);
      bass_thresh =ifcond(above(bass_att,bass_thresh),3,bass_thresh-chaos);
      bass_flop=abs(bass_flop-equal(bass_thresh,3));
      treb_thresh=ifcond(above(treb_att,treb_thresh),3,treb_thresh-chaos);
      treb_flop=abs(treb_flop-equal(treb_thresh,3));
      mid_thresh=ifcond(above(mid_att,mid_thresh),3,mid_thresh-chaos);
      mid_flop=abs(mid_flop-equal(mid_thresh,3));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      bass_residual = bass_changed*sin(pulse*3) + bnot(bass_changed)*bass_residual;
      treb_residual = treb_changed*sin(pulse*3) + bnot(treb_changed)*treb_residual;
      mid_residual = mid_changed*sin(pulse*3) + bnot(mid_changed)*mid_residual;
      pulse=ifcond(above(abs(pulse),3.14),-3.14,pulse+(bass_thresh+mid_thresh+treb_thresh)*.032);
      entropy=ifcond(equal(pulse,-3.14),bass_flop+mid_flop+treb_flop+rand(5),entropy);
      q1=mid_residual;
      q2=bass_residual;
      q3=treb_residual;
      q4=sin(pulse);
      q5=cos(pulse/2+q1);
      q6=above(q1,0)+above(q2,0)+above(q3,0)+above(q3,0)*treb_flop+above(q2,0)*bass_flop+above(q1,0)*mid_flop;
      q7=entropy;
      q8=sin(q6*q1+q7*q2);
      zoom=zoom+.02*q8;
      wave_mystery=sin(q1+q5);
      wave_r=wave_r+.5*sin(q1+q2*2+q4*2.1);
      wave_b=wave_b+.5*sin(q2+q3*2+q4*2.2);
      wave_g=wave_g+.5*sin(q3+q1*2+q4*2.3);
      ob_r=ifcond(bass_flop,ob_r+.5*sin(q1+q3*1.14+q2),wave_b);
      ob_b=ifcond(treb_flop,ob_b+.5*sin(q2+q1*1.14+q3),wave_g);
      ob_g=ifcond(mid_flop,ob_g+.5*sin(q3+q2*1.14+q1),wave_r);
      ib_r=ifcond(bass_flop,ob_b,ib_r+.5*cos(q5+q1*2.14));
      ib_b=ifcond(treb_flop,ob_g,ib_b+.5*cos(q5+q2*2.14));
      ib_g=ifcond(mid_flop,ob_r,ib_g+.5*cos(q5+q3*2.14));
      mv_r=mv_r+.5*sin(q4+q5*1.14*q1);
      mv_b=mv_b+.5*sin(q4+q5*1.14*q2);
      mv_g=mv_g+.5*sin(q5+q5*1.14*q3);
      ob_a=.25+.25*sin(q2+q3*2.14);
      ib_a=.5+.5*sin(q2*2.14+q3);
      mv_a=mv_a+mv_a*sin(q3*2.14+q2);
      ob_size=.1+.1*sin(q3*3+q1);
      ib_size=ib_size*.5+ib_size*.25*sin(q1*3+q3);
      wave_mode=q6+above(q4,0)+above(q5,0);
      wave_mystery=sin(q3*1.14+q1*1.14+q2);
      mv_l=(q6*q7)*q2;
      wave_x=wave_x+.1*q7*q4;
      wave_y=wave_y+.1*q6*q5;
      mv_x=q6*q7;
      mv_y=q6*q7;
      monitor=q1;
    }},
    shapes: [
      {
       enabled: 1,
       sides: 3,
       additive: 0,
       thickOutline: 1,
       textured: 0,
       x: 0.650000,
       y: 0.500000,
       rad: 0.605500,
       ang: 0.000000,
       tex_ang: 0.628319,
       tex_zoom: 1.816695,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 0.000000,
       border_g: 0.000000,
       border_b: 0.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         ang=3.14+3.14*q1;
         x=.5+.1*q2;
         y=.5+.1*q3;
         sides=3+q6;
         rad=.5+.5*q4;
         textured=above(q6,3);
         border_r=1-rad;
         border_b=rad-.01*sides;
       }},
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Unchained - ReAwoke.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 0.999489,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 7,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 1,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.059269,
    fWaveScale: 0.653093,
    fWaveSmoothing: 0.27,
    fWaveParam: -0.38,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 5.99579,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.337423,
    rot: 0.0019,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 1.0,
    wave_g: 1.0,
    wave_b: 1.0,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.01,
    ib_r: 0.5,
    ib_g: 0.9,
    ib_b: 0.5,
    ib_a: 1.0,
    nMotionVectorsX: 24.959999,
    nMotionVectorsY: 19.199999,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.85,
    mv_r: 0.4999,
    mv_g: 0.4999,
    mv_b: 0.4999,
    mv_a: 1.0,
    per_pixel_code: function(_){with(_){
      xx=(x-.5+.03*q5+.1*y*q6+.1*sin(time*.322))*2;
      yy=(y-.5+.03*q6+.1*x*q5+.1*sin(time*.427))*2;
      dx=sin(xx);
      dy=sin(yy);
      radix=ifcond(above(q3,0),min(xx,yy),max(xx,yy));
      radix=ifcond(above(q2,0),min(radix,rad),max(radix,rad));
      rot=sin(rad*(xx*q4+yy*q5+radix*q6));
      cx=cx+xx;
      cy=cy+yy;
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      chaos=.9+.1*sin(pulse);
      entropy=ifcond(equal(pulse,-20),1+bass_flop+treb_flop+mid_flop+rand(2),entropy);
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.6)*chaos+1.6);
      bass_flop=abs(bass_flop-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.6)*chaos+1.6);
      treb_flop=abs(treb_flop-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.6)*chaos+1.6);
      mid_flop=abs(mid_flop-equal(mid_thresh,2));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      bass_residual = bass_changed*sin(pulse*3) + bnot(bass_changed)*bass_residual;
      treb_residual = treb_changed*sin(pulse*3) + bnot(treb_changed)*treb_residual;
      mid_residual = mid_changed*sin(pulse*3) + bnot(mid_changed)*mid_residual;
      pulse=ifcond(above(abs(pulse),20),-20,pulse+(bass_thresh+mid_thresh+treb_thresh)*.018);
      q1=mid_residual;
      q2=bass_residual;
      q3=treb_residual;
      q4=sin(pulse);
      q5=cos(pulse*(.5+.1*entropy));
      q6=sin(pulse*(.5+pow(.25,entropy)));
      q7=above(q1,0)+above(q2,0)+above(q3,0)+above(q3,0)*treb_flop+above(q2,0)*bass_flop+above(q1,0)*mid_flop;
      q8=entropy;
      ob_r=.2+.1*sin(time*2.157+q6);
      ob_b=.2+.1*sin(time*1.689+q5);
      ob_g=.2+.1*sin(time*.413+q4);
      ib_r=.8+.2*cos(time*1.2+q1*.1);
      ib_b=.2+.2*cos(time*2.811+q2*.1);
      ib_g=.7+.3*cos(time*1.666+q3*.1);
      ib_size=.1+.05*q2;
      ob_size=.03+.02*sin(time*2.321+q2*.2);
      ob_a=.75+.25*q3;
      ib_a=.8+.2*sin(q2*.3+q4+q1*.5);
      mv_r=mv_r+.5*sin(q4+time*.678);
      mv_b=mv_b+.5*sin(q4+time*.789);
      mv_g=mv_g+.5*sin(q5+time*.456);
      mv_a=.2+.2*sin(time*1.178+q5*1.14);
      rot=0;
      wave_r=.6+.4*sin(q1+time*2.183);
      wave_b=.6+.4*sin(q2+time*1.211);
      wave_g=.6+.4*sin(q3+time*1.541);
      wave_mystery=wave_mystery+.5*sin(time*2.18+q6);
      wave_x=wave_x+.3*sin(time*.811)+.005*(frame%3);
      wave_y=wave_y+.3*sin(time*.788)+.005*(frame%3);
      wave_a=3+sin(time*1.414)+q3;
      zoom=zoom+.03*sin(time*.8);
      wave_mode=q8%2;
    }},
    shapes: [
      {
       enabled: 1,
       sides: 3,
       additive: 1,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.776608,
       ang: 0.628319,
       tex_ang: 3.141593,
       tex_zoom: 0.408391,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x=.5+.05*q4;
         y=.5+.05*q5;
       }},
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Unchained - In Memory Of Peg.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.99,
    fVideoEchoZoom: 1.10406,
    fVideoEchoAlpha: 1.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 7,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 1,
    bDarken: 1,
    bSolarize: 0,
    bInvert: 1,
    fWaveAlpha: 1.059269,
    fWaveScale: 0.653093,
    fWaveSmoothing: 0.27,
    fWaveParam: -0.38,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 5.99579,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.9984,
    rot: 0.002,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 1.0,
    wave_g: 1.0,
    wave_b: 1.0,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.01,
    ib_r: 0.5,
    ib_g: 0.9,
    ib_b: 0.5,
    ib_a: 1.0,
    nMotionVectorsX: 24.959999,
    nMotionVectorsY: 19.199999,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.85,
    mv_r: 0.4999,
    mv_g: 0.4999,
    mv_b: 0.4999,
    mv_a: 1.0,
    per_pixel_code: function(_){with(_){
      xx=(x-.5+.03*q5+.1*y*q6+.1*sin(time*.322))*2;
      yy=(y-.5+.03*q6+.1*x*q5+.1*sin(time*.427))*2;
      dx=sin(xx);
      dy=sin(yy);
      rot=sin(rad*(xx*q4+yy*q5+1.7*q6));
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      chaos=.9+.1*sin(pulse);
      entropy=ifcond(equal(pulse,-20),1+bass_flop+treb_flop+mid_flop+rand(2),entropy);
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.6)*chaos+1.6);
      bass_flop=abs(bass_flop-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.6)*chaos+1.6);
      treb_flop=abs(treb_flop-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.6)*chaos+1.6);
      mid_flop=abs(mid_flop-equal(mid_thresh,2));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      bass_residual = bass_changed*sin(pulse*3) + bnot(bass_changed)*bass_residual;
      treb_residual = treb_changed*sin(pulse*3) + bnot(treb_changed)*treb_residual;
      mid_residual = mid_changed*sin(pulse*3) + bnot(mid_changed)*mid_residual;
      pulse=ifcond(above(abs(pulse),20),-20,pulse+(bass_thresh+mid_thresh+treb_thresh)*.018);
      q1=mid_residual;
      q2=bass_residual;
      q3=treb_residual;
      q4=sin(pulse);
      q5=cos(pulse*(.5+.1*entropy));
      q6=sin(pulse*(.5+pow(.25,entropy)));
      q7=above(q1,0)+above(q2,0)+above(q3,0)+above(q3,0)*treb_flop+above(q2,0)*bass_flop+above(q1,0)*mid_flop;
      q8=entropy;
      ob_r=.2+.1*sin(time*2.157+q6);
      ob_b=.2+.1*sin(time*1.689+q5);
      ob_g=.2+.1*sin(time*.413+q4);
      ib_r=.8+.2*cos(time*1.2+q1*.1);
      ib_b=.2+.2*cos(time*2.811+q2*.1);
      ib_g=.7+.3*cos(time*1.666+q3*.1);
      ib_size=.03+.02*q2;
      ob_size=.03+.02*sin(time*2.321+q2*.2);
      ob_a=.75+.25*q3;
      ib_a=.8+.2*sin(q2*.3+q4+q1*.5);
      mv_r=mv_r+.5*sin(q4+time*.678);
      mv_b=mv_b+.5*sin(q4+time*.789);
      mv_g=mv_g+.5*sin(q5+time*.456);
      mv_a=.2+.2*sin(time*1.178+q5*1.14);
      rot=0;
      wave_r=.6+.4*sin(q1+time*2.183);
      wave_b=.6+.4*sin(q2+time*1.211);
      wave_g=.6+.4*sin(q3+time*1.541);
      wave_mystery=wave_mystery+.3*sin(time*2.18+q6);
      wave_x=wave_x+.3*sin(time*.811)+.005*(frame%3);
      wave_y=wave_y+.3*sin(time*.788)+.005*(frame%3);
      wave_a=3+sin(time*1.414)+q3;
      zoom=zoom+.5*sin(time*1.69);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Bmelgren & Krash - Rainbow Orb Peacock (Centred Journey Mix.milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 1.0,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 1,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.0,
    fWaveScale: 5.277897,
    fWaveSmoothing: 0.0,
    fWaveParam: -0.4,
    fModWaveAlphaStart: 0.85,
    fModWaveAlphaEnd: 1.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: -0.24,
    cx: 0.65,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.0,
    sx: 0.887449,
    sy: 1.05101,
    wave_r: 0.4,
    wave_g: 0.4,
    wave_b: 0.4,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 0.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 1.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      rot = rot + ifcond(equal(tan(ang), q1), rot, tan(q1-rad)/q2);
    }},
    per_frame_code: function(_){with(_){
      warp=warp/bass;
      x_wave_x = 0.5+0.3*sin(bass+treb+mid);
      wave_r = 1 + sin(-x_wave_x*6.28);
      wave_g = abs(sin(2*x_wave_x*6.28));
      wave_b = sin(x_wave_x*6.28);
      treb_effect = ifcond(above(treb_att,1.4),pow(0.99,treb_att),1);
      net_effect = ifcond(above(bass_att,0.8*treb_att),1,treb_effect);
      zoom = net_effect;
      rot = rot + rot_residual/1.5;
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);
      shift = (tan(time*7)) -0.05;
      shift = ifcond(above(shift,0),0,ifcond(below(shift,-0.1),-0.1,shift));
      rot_residual = ifcond(equal(bass_thresh,2),shift,rot_residual);
      q1=net_effect;
      q2=bass_thresh;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Bmelgren - Pentultimate Nerual Slipstream (Tweak 2).milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.95,
    fVideoEchoZoom: 3.007504,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 1,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 1,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 1,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 0.880224,
    fWaveSmoothing: 0.0,
    fWaveParam: -0.5,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.074097,
    fShader: 1.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.0,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    per_pixel_code: function(_){with(_){
      ray = pow(rad,1.8)+.05;
      zoom = (ray/rad)*1.4 + .3*sin(ang*(bass*5))+(bass*.2);
    }},
    per_frame_code: function(_){with(_){
      warp = 0;
      wave_r = wave_r + .5*sin(time*333) + bass*.3;
      wave_g = wave_g + .5*sin(time*222) + treb*.3;
      wave_b = wave_b + .5*sin(time*111) + mid*.3;
      rot = .4*sin(mid_att*.05);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Eo.S.+Phat Fractical_dancer - pulsate box_mix.milk"] = {
    fRating: 5.0,
    fGammaAdj: 1.0,
    fDecay: 0.94,
    fVideoEchoZoom: 1.970816,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 1,
    fWaveAlpha: 0.001,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.63,
    fWaveParam: -1.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 0.999998,
    fShader: 0.0,
    zoom: 13.290894,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: -0.28,
    dy: -0.32,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.15,
    ob_r: 1.0,
    ob_g: 1.0,
    ob_b: 1.0,
    ob_a: 1.0,
    ib_size: 0.05,
    ib_r: 0.0,
    ib_g: 1.0,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 0.0,
    mv_g: 0.7,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      rd=sqrt( sqr( (x-0.5-q4)*1.7) + sqr( (y-0.5+q5)*1.2 ) )+0.001;
      
      cx=0.5+q4;
      cy=0.5-q5;
      
      zoom=pow(rd,sin(time)+3.5)/10.5 + .5;
    }},
    init_code: function(_){with(_){
      
      zoom=1;
      xpos=0;
      ypos=0;
    }},
    per_frame_code: function(_){with(_){
      decay=1;
      
      vol= (bass+mid+treb)*0.55;
      vol=vol;
      
      
      mv_r = 0.5 + 0.4*sin(time*1.324);
      mv_g = 0.5 + 0.4*cos(time*1.371);
      
      
      
      musictime=musictime+vol;
      
      //q4=0;
      q5=0;
      q4=sin(musictime*0.02)*0.4;
      q5=sin(musictime*0.01)*0.3;
      
      dx=sin(musictime*0.1)*0.07;
      dy=cos(musictime*0.069)*0.07;
      
      
      
      
      monitor=rot;
    }},
    shapes: [
      {
       enabled: 0,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.244862,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 0.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x=.5+q4;y=.5+q5;
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 1,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.402702,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 2.238868,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 0.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         tex_ang=3.14;
         tex_zoom=2.235;
         x=.5-q5;
         y=.5-q4;
       }},
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Eo.S.+Phat Fractical_dancer_Peacock.milk"] = {
    fRating: 5.0,
    fGammaAdj: 1.0,
    fDecay: 0.94,
    fVideoEchoZoom: 1.615167,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 1,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.001,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.63,
    fWaveParam: -1.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 0.999998,
    fShader: 0.0,
    zoom: 13.290894,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: -0.28,
    dy: -0.32,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.05,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 12.799995,
    nMotionVectorsY: 9.600006,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.0,
    mv_r: 1.0,
    mv_g: 0.91,
    mv_b: 0.71,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      rd=sqrt( sqr( (x-0.5-q4)*3) + sqr( (y-0.5+q5)*2 ) );
      cx=0.5+q4;
      cy=0.5-q5;
      
      zoom=(rd*rd)/2.5;
    }},
    init_code: function(_){with(_){
      
      zoom=1;
      xpos=0;
      ypos=0;
    }},
    per_frame_code: function(_){with(_){
      decay=1;
      
      vol= (bass+mid+treb)*0.55;
      vol=vol;
      
      
      mv_r = 0.5 + 0.4*sin(time*1.324);
      mv_g = 0.5 + 0.4*cos(time*1.371);
      
      
      //ib_r=bass;
      //ib_g=treb;
      zoom=.9;
      
      musictime=musictime+vol;
      
      q4=0;
      q5=0;
      //q4=sin(musictime*0.02)*0.1;
      //q5=sin(musictime*0.01)*0.1;
      
      dx=sin(musictime*0.1)*0.07;
      dy=cos(musictime*0.069)*0.07;
      
      
      
      
      monitor=rot;
    }},
    shapes: [
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.491382,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 0.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 0.050000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x=.5+q4;y=.5+q5;
         r=sin(time*0.7)*3*(bass*0.2);
         g=sin(time*0.5)*4*(treb*2);
       }},
      },
      {
       enabled: 0,
       sides: 24,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.018423,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 0.819541,
       r: 1.000000,
       g: 1.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         tex_ang=0.01;
         x=.5-q4;
         y=.5-q5;
       }},
      },
      {
       enabled: 1,
       sides: 24,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.221671,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 2.987774,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["EvilJim - Follow the ball.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.98,
    fVideoEchoZoom: 0.999608,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 1,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.8,
    fWaveScale: 0.250302,
    fWaveSmoothing: 0.0,
    fWaveParam: -0.25,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 0.990097,
    wave_r: 0.0,
    wave_g: 0.0,
    wave_b: 0.0,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      dx=ifcond(above(x,bass*0.6),0.02,-0.02);
      dy=ifcond(above(y,treb_att*0.5),0.02,-0.02);
    }},
    per_frame_code: function(_){with(_){
      wave_r=bass*2;
      wave_g=mid*4;
      wave_b=treb*0.6;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Fvese - The Tunnel (Final Stage Mix).milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.0,
    fDecay: 0.995,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 3,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.0,
    fWaveScale: 0.241456,
    fWaveSmoothing: 0.09,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.5,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 0.741921,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 0.9999,
    sy: 0.9999,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.4,
    ob_a: 0.0,
    ib_size: 0.005,
    ib_r: 0.0,
    ib_g: 0.3,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 6.4,
    nMotionVectorsY: 1.440001,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 0.7599,
    mv_g: 0.48,
    mv_b: 0.39,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      zoom = ifcond(below(q1,0),0.5*x,ifcond(equal(q2,0),0.9*(1-x),ifcond(above(q3,0),0.9*y,0.9*(1-y)))) + 0.6 - 0.13*(min(q3,0.3));
      
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.45*(0.5*sin(time*0.701)+ 0.3*cos(time*0.438));
      wave_b = wave_b - 0.4*(0.5*sin(time*4.782)+0.5*cos(time*0.722));
      wave_g = wave_g + 0.4*sin(time*1.931);
      vol=0.15*(bass_att+bass+mid+mid_att);
      dx_r=ifcond(equal(q3,0),ifcond(above(x,xpos),dx*q1-xpos,dx+q2-xpos),dx);
      dy_r=ifcond(equal(q3,0),ifcond(above(y,ypos),dy*q1-ypos,dy+q2-ypos),dy);
      rot = rot+0.05*( 0.60*sin(0.381*time) + 0.40*sin(0.479*time) );
      mytime=.7;
      q1=sin(time*mytime*4);
      q2=cos(time*mytime*2);
      q3=abs(rad-.5)*(q2*q1);
      xpos=.5/vol;
      ypos=.5/vol;
      wave_x=.5+0.1*sin(time+rand(100)/100);
      wave_y=.5+0.1*cos(time+rand(100)/100);
      ib_r=q3+q2;
      ib_b=q2+q1;
      ib_g=q1+q3;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["fiShbRaiN - crazy diamond.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.21,
    fDecay: 0.945,
    fVideoEchoZoom: 0.996628,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 7,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 5.204473,
    fWaveScale: 0.430332,
    fWaveSmoothing: 0.9,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 1.11,
    fModWaveAlphaEnd: 1.5,
    fWarpAnimSpeed: 0.01,
    fWarpScale: 1.331,
    fZoomExponent: 2.063786,
    fShader: 1.0,
    zoom: 1.374256,
    rot: 0.58,
    cx: 0.5,
    cy: 0.5,
    dx: -0.0,
    dy: 0.0999,
    warp: 1.5991,
    sx: 1.22,
    sy: 0.9999,
    wave_r: 0.75,
    wave_g: 0.75,
    wave_b: 1.0,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.015,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.8,
    ib_size: 0.21,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 2.400006,
    mv_dx: 0.02,
    mv_dy: 0.0,
    mv_l: 5.0,
    mv_r: 0.8,
    mv_g: 0.8,
    mv_b: 1.0,
    mv_a: 0.1,
    per_pixel_code: function(_){with(_){
      rot=rot+(1-rad)*sin(time)*.5;
      
    }},
    per_frame_code: function(_){with(_){
      sx=sx+bass_att*.04;
      sy=sy+treb_att*.04;
      
      cx=.5+(sin(time)*.2);
      cy=.5+(sin(time*.3)*.1);
      
      rot=rot+(treb*bass*.01);
      
      warp=warp+ifcond(above(bass,1.4),bass*8*sin(time*.2),bass);
    }},
    shapes: [
      {
       enabled: 1,
       sides: 3,
       additive: 1,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.542788,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 0.311603,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         ang=time;
         
         r2=abs(sin(time));
         g2=abs(cos(time));
         b2=treb_att*.65;
         
         rad=rad+(bass_att*.1);
       }},
      },
      {
       enabled: 1,
       sides: 6,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.197883,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.691360,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         r=abs(sin(time*.1));
         g=abs(sin(time*.25));
         
         b2=abs(sin(time*.3));
         
         x=(sin(time+.23)*.5)+.5;
         y=(cos(time*.21)*.5)+.5;
         ang=time;
       }},
      },
      {
       enabled: 1,
       sides: 3,
       additive: 1,
       thickOutline: 1,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.270481,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 0.000000,
       r2: 0.000000,
       g2: 0.200000,
       b2: 1.000000,
       a2: 0.100000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         ang=time;
         rad=abs(sin(time*.25));
         
         tex_zoom=bass*treb_att;
       }},
      },
      {
       enabled: 1,
       sides: 6,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.120321,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
       per_frame_code: function(_){with(_){
         ang=time;
         rad=rad+(treb*.01);
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 1,
       bDrawThick: 1,
       bAdditive: 1,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 1,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       per_point_code: function(_){with(_){
         branch=rand(2);
         
         //base
         wx=ifcond(equal(sc,0),.5,wx);
         wy=ifcond(equal(sc,0),.1,wy);
         
         wx=ifcond(equal(sc,1),.5,wx);
         wy=ifcond(equal(sc,1),.4,wy);
         
         //calculate previous branch length
         d=ifcond(below(sc,2),.3,.7*d);
         
         //angle
         wainc=ifcond(equal(branch,1),.2,-.2);
         
         wa=ifcond(below(sc,2),3.1415927*.5,wa+wainc);
         
         //branches
         wx=ifcond(above(sc,2),wx+cos(wa)*d,wx);
         wy=ifcond(above(sc,2),wy+sin(wa)*d,wy);
         
         //sample count
         sc=ifcond(equal(sc,11),0,sc+1);
         
         a=ifcond(below(sc,2),0,.1);
         
         x=wx;
         y=wy;
       }},
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["fiShbRaiN - cthulhus asshole.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.21,
    fDecay: 0.945,
    fVideoEchoZoom: 1.100897,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.001,
    fWaveScale: 1.285751,
    fWaveSmoothing: 0.63,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 10.141068,
    fShader: 1.0,
    zoom: 0.979819,
    rot: 1.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.1,
    warp: 1.599181,
    sx: 1.220179,
    sy: 0.999991,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.1,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.21,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 21.473322,
    nMotionVectorsY: 15.907337,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      rot=rot+(1-rad)*sin(time)*.5;
      
    }},
    per_frame_code: function(_){with(_){
      sx=sx+bass_att*.04;
      sy=sy+treb_att*.04;
      
      cx=.5+(sin(time)*.2);
      cy=.5+(sin(time*.3)*.1);
    }},
    shapes: [
      {
       enabled: 1,
       sides: 3,
       additive: 1,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.542788,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 0.311603,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         ang=time;
         
         r2=abs(sin(time));
         g2=abs(cos(time));
         b2=treb_att*.65;
         
         rad=rad+(bass_att*.1);
       }},
      },
      {
       enabled: 0,
       sides: 100,
       additive: 1,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 1.621745,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 0.248315,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 0.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.050000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
       per_frame_code: function(_){with(_){
         r=abs(sin(time*.1));
         g=abs(sin(time*.25));
         
         b2=abs(sin(time*.3));
       }},
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 1,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       per_point_code: function(_){with(_){
         branch=rand(2);
         
         //base
         wx=ifcond(equal(sc,0),.5,wx);
         wy=ifcond(equal(sc,0),.1,wy);
         
         wx=ifcond(equal(sc,1),.5,wx);
         wy=ifcond(equal(sc,1),.4,wy);
         
         //calculate previous branch length
         d=ifcond(below(sc,2),.3,.7*d);
         
         //angle
         wainc=ifcond(equal(branch,1),.2+(tren*.1),-.2-(treb*.1));
         
         wa=ifcond(below(sc,2),3.1415927*.5,wa+wainc);
         
         //branches
         wx=ifcond(above(sc,2),wx+cos(wa)*d,wx);
         wy=ifcond(above(sc,2),wy+sin(wa)*d,wy);
         
         //sample count
         sc=ifcond(equal(sc,11),0,sc+1);
         
         a=ifcond(below(sc,2),0,.1);
         
         r=abs(sin(time*.5));
         g=abs(sin(time*.25));
         b=treb_att*.65;
         
         x=wx;
         y=wy;
       }},
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 1,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       per_point_code: function(_){with(_){
         branch=rand(2);
         
         //base
         wx=ifcond(equal(sc,0),.5,wx);
         wy=ifcond(equal(sc,0),.1,wy);
         
         wx=ifcond(equal(sc,1),.5,wx);
         wy=ifcond(equal(sc,1),.4,wy);
         
         //calculate previous branch length
         d=ifcond(below(sc,2),.3,.7*d);
         
         //angle
         wainc=ifcond(equal(branch,1),.2,-.2);
         
         wa=ifcond(below(sc,2),3.1415927*.5,wa+wainc);
         
         //branches
         wx=ifcond(above(sc,2),wx+cos(wa)*d,wx);
         wy=ifcond(above(sc,2),wy+sin(wa)*d,wy);
         
         //sample count
         sc=ifcond(equal(sc,11),0,sc+1);
         
         a=ifcond(below(sc,2),0,.1);
         
         x=wx;
         y=wy;
       }},
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["fiShbRaiN - plasma temptation.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.95,
    fVideoEchoZoom: 1.44772,
    fVideoEchoAlpha: 0.8,
    nVideoEchoOrientation: 0,
    nWaveMode: 5,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.001,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.9,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 2.0,
    fModWaveAlphaEnd: 2.0,
    fWarpAnimSpeed: 3.300369,
    fWarpScale: 2.670993,
    fZoomExponent: 100.0,
    fShader: 1.0,
    zoom: 0.819143,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 36.971127,
    sx: 3.544923,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.5,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.26,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 20.160004,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.4,
    mv_r: 1.0,
    mv_g: 0.4,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      direc=ifcond(above(treb,1.3),direc*-1,direc);
      
      zoom=zoom+sin(x*treb*mid*.1)*direc*-1;
      rot=rot+(cos(y*bass)*x)*direc;
    }},
    shapes: [
      {
       enabled: 1,
       sides: 100,
       additive: 1,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 0.900000,
       g: 0.700000,
       b: 0.900000,
       a: 0.700000,
       r2: 1.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x=(sin(time)+1)*.5;
         y=(bass_att*.5)+(sin(time*.5)*.2);
         
         ang=time;
         rad=bass*.5;
       }},
      },
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.808139,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.220183,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 0.500000,
       r2: 0.900000,
       g2: 1.000000,
       b2: 0.800000,
       a2: 0.500000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
      },
      {
       enabled: 1,
       sides: 100,
       additive: 1,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.731599,
       ang: 0.000000,
       tex_ang: 5.026548,
       tex_zoom: 0.248318,
       r: 0.800000,
       g: 0.300000,
       b: 0.800000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.100000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         rad=bass*.9;
         ang=time;
       }},
      },
      {
       enabled: 1,
       sides: 100,
       additive: 1,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.200000,
       b: 0.300000,
       a: 1.000000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.100000,
       a2: 0.000000,
       border_r: 0.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x=(cos((time+.233)*.2)+1)*.5;
         y=(sin(time*.1)+1)*.5+(sin(time*.13)*.5);
         
         rad=treb*.2;
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 1,
       bAdditive: 1,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       per_point_code: function(_){with(_){
         x=rand(1);
         y=rand(1);
       }},
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Geiss - Feedback 2.milk"] = {
    fRating: 5.0,
    fGammaAdj: 1.0,
    fDecay: 0.9,
    fVideoEchoZoom: 0.710682,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 6,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.311604,
    fWaveScale: 1.22891,
    fWaveSmoothing: 0.0,
    fWaveParam: 0.2,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.999902,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.207965,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0065,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.26,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.85,
    mv_r: 0.4999,
    mv_g: 0.4999,
    mv_b: 0.4999,
    mv_a: 0.0,
    per_frame_code: function(_){with(_){
      wave_mystery = time*0.2;
    }},
    shapes: [
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.370000,
       y: 0.500000,
       rad: 2.999997,
       ang: 3.644249,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 0.000000,
       g: 0.000000,
       b: 0.000000,
       a: 0.500000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 0.300000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 1.000000,
       init_code: function(_){with(_){
         t1 = rand(100)*0.01;
         t2 = rand(100)*0.01;
       }},
       per_frame_code: function(_){with(_){
         ang = time*(0.3 + 0.1*t1);
         rad = rad * (0.9 + 0.2*t2);
         r = min(1,max(0,r + 0.2*sin(time*0.417 + 1)));
         g = min(1,max(0,g + 0.2*sin(time*0.391 + 2)));
         b = min(1,max(0,b + 0.2*sin(time*0.432 + 4)));
         r2 = min(1,max(0,r2 + 0.2*sin(time*0.657 + 3)));
         g2 = min(1,max(0,g2 + 0.2*sin(time*0.737 + 5)));
         b2 = min(1,max(0,b2 + 0.2*sin(time*0.884 + 6)));
       }},
      },
      {
       enabled: 1,
       sides: 50,
       additive: 1,
       thickOutline: 0,
       textured: 1,
       x: 0.370000,
       y: 0.500000,
       rad: 0.706533,
       ang: 3.644249,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 0.800000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       init_code: function(_){with(_){
         t1 = rand(100)*0.01;
         t2 = rand(100)*0.01;
       }},
       per_frame_code: function(_){with(_){
         x = x + 0.05*sin(time*1.25+3);
         y = y + 0.03*sin(time*1.49+1);
         ang = time*(0.3 + 0.1*t1);
         rad = rad * (0.9 + 0.2*t2);
         r = min(1,max(0,r + 0.1*sin(time*0.417 + 1)));
         g = min(1,max(0,g + 0.1*sin(time*0.391 + 2)));
         b = min(1,max(0,b + 0.1*sin(time*0.432 + 4)));
         r2 = min(1,max(0,r2 + 0.1*sin(time*0.457 + 3)));
         g2 = min(1,max(0,g2 + 0.1*sin(time*0.437 + 5)));
         b2 = min(1,max(0,b2 + 0.1*sin(time*0.484 + 6)));
       }},
      },
      {
       enabled: 1,
       sides: 50,
       additive: 1,
       thickOutline: 0,
       textured: 1,
       x: 0.670000,
       y: 0.430000,
       rad: 0.706533,
       ang: 4.209736,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 0.800000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       init_code: function(_){with(_){
         t1 = rand(100)*0.01;
         t2 = rand(100)*0.01;
       }},
       per_frame_code: function(_){with(_){
         x = x + 0.05*sin(time*2.17);
         y = y + 0.03*sin(time*1.83);
         ang = time*(0.3 + 0.1*t1);
         rad = rad * (0.9 + 0.2*t2);
         r = min(1,max(0,r + 0.1*sin(time*0.417 + 1)));
         g = min(1,max(0,g + 0.1*sin(time*0.391 + 2)));
         b = min(1,max(0,b + 0.1*sin(time*0.432 + 4)));
         r2 = min(1,max(0,r2 + 0.1*sin(time*0.457 + 3)));
         g2 = min(1,max(0,g2 + 0.1*sin(time*0.437 + 5)));
         b2 = min(1,max(0,b2 + 0.1*sin(time*0.484 + 6)));
       }},
      },
      {
       enabled: 1,
       sides: 60,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.161222,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 1.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 1.000000,
       per_frame_code: function(_){with(_){
         x = x + 0.2*sin(time*1.14);
         y = y + 0.1*sin(time*0.93+2);
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Geiss - High Dynamic Range.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.5,
    fDecay: 0.98,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 4,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 32.544682,
    fWaveScale: 0.503666,
    fWaveSmoothing: 0.558,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.87,
    fModWaveAlphaEnd: 1.2899,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 2.853,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.000012,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.0,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.0,
    wave_g: 0.0,
    wave_b: 0.0,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      dx = (x-q1)*0.02;
      dy = (y-q2)*0.02;
      
    }},
    per_frame_code: function(_){with(_){
      
      // in this example, q1 and q2 act as the center of zooming
      // AND as the position of custom shape #1...
      q1 = 0.5 + 0.32*cos(time*0.4);
      q2 = 0.5 + 0.22*sin(time*0.4);
      
      //wave_x = q1;
      wave_y = q2;
    }},
    shapes: [
      {
       enabled: 1,
       sides: 16,
       additive: 1,
       thickOutline: 1,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.879999,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 0.060000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 0.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         ang = time*1.4;
         x = q1;
         y = q2;
         r = 0.5 + 0.5*sin(time*0.713 + 1);
         g = 0.5 + 0.5*sin(time*0.563 + 2);
         b = 0.5 + 0.5*sin(time*0.654 + 5);
         r2 = 0.5 + 0.5*sin(time*0.885 + 4);
         g2 = 0.5 + 0.5*sin(time*0.556+ 1);
         b2 = 0.5 + 0.5*sin(time*0.638 + 3);
       }},
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Geiss - Octopus.milk"] = {
    fRating: 2.0,
    fGammaAdj: 2.0,
    fDecay: 0.99,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 2,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 2.426125,
    fWaveScale: 1.8817,
    fWaveSmoothing: 0.9,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.02,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.076,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.15,
    wave_b: 0.35,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      rot=rot+0.05*sin(rad*13.5 + q2*1.3 + q*1.31);
      zoom=zoom+0.05*sin(ang*10.0 + rad*7.5 + q2*1.63 + q);
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 1.000*( 0.60*sin(1.517*time) + 0.40*sin(1.580*time) );
      wave_g = wave_g + 1.000*( 0.60*sin(1.088*time) + 0.40*sin(1.076*time) );
      wave_b = wave_b + 1.000*( 0.60*sin(1.037*time) + 0.40*sin(0.922*time) );
      rot = rot + 0.040*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
      cx = cx + 0.110*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
      cy = cy + 0.110*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
      q1=cos(1.41*time);
      q2=time + 0.3*sin(time*1.47);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Geiss - Swirlie 1.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.994,
    fDecay: 0.98,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 1,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.499998,
    fWaveScale: 1.524161,
    fWaveSmoothing: 0.9,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 0.334695,
    fWarpScale: 3.928016,
    fZoomExponent: 2.1,
    fShader: 0.0,
    zoom: 0.961,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.771011,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.03,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.5,
    ib_size: 0.01,
    ib_r: 0.34,
    ib_g: 0.34,
    ib_b: 0.34,
    ib_a: 0.5,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_frame_code: function(_){with(_){
      wave_x = wave_x + 0.2900*( 0.60*sin(2.121*time) + 0.40*sin(1.621*time) );
      wave_y = wave_y + 0.2900*( 0.60*sin(1.742*time) + 0.40*sin(2.322*time) );
      wave_r = wave_r + 0.350*( 0.60*sin(0.823*time) + 0.40*sin(0.916*time) );
      wave_g = wave_g + 0.350*( 0.60*sin(0.900*time) + 0.40*sin(1.023*time) );
      wave_b = wave_b + 0.350*( 0.60*sin(0.808*time) + 0.40*sin(0.949*time) );
      rot = rot + 0.35*( 0.60*sin(0.21*time) + 0.30*sin(0.339*time) );
      cx = cx + 0.30*( 0.60*sin(0.374*time) + 0.14*sin(0.194*time) );
      cy = cy + 0.37*( 0.60*sin(0.274*time) + 0.10*sin(0.394*time) );
      ib_r = ib_r + 0.2*sin(time*0.5413);
      ib_g = ib_g + 0.2*sin(time*0.6459);
      ib_b = ib_b + 0.2*sin(time*0.7354);
      
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Geiss - Swirlie 2.milk"] = {
    fRating: 4.0,
    fGammaAdj: 1.994,
    fDecay: 0.97,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 1,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.499998,
    fWaveScale: 1.524161,
    fWaveSmoothing: 0.9,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 0.334695,
    fWarpScale: 3.928016,
    fZoomExponent: 2.1,
    fShader: 0.0,
    zoom: 0.961,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.771011,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.5,
    ib_size: 0.03,
    ib_r: 0.34,
    ib_g: 0.34,
    ib_b: 0.34,
    ib_a: 0.1,
    per_frame_code: function(_){with(_){
      wave_x = wave_x + 0.2900*( 0.60*sin(2.121*time) + 0.40*sin(1.621*time) );
      wave_y = wave_y + 0.2900*( 0.60*sin(1.742*time) + 0.40*sin(2.322*time) );
      wave_r = wave_r + 0.350*( 0.60*sin(0.823*time) + 0.40*sin(0.916*time) );
      wave_g = wave_g + 0.350*( 0.60*sin(0.900*time) + 0.40*sin(1.023*time) );
      wave_b = wave_b + 0.350*( 0.60*sin(0.808*time) + 0.40*sin(0.949*time) );
      rot = rot + 0.35*( 0.60*sin(0.21*time) + 0.30*sin(0.339*time) );
      cx = cx + 0.30*( 0.60*sin(0.374*time) + 0.14*sin(0.194*time) );
      cy = cy + 0.37*( 0.60*sin(0.274*time) + 0.10*sin(0.394*time) );
      ib_r = ib_r + 0.2*sin(time*0.5413);
      ib_g = ib_g + 0.2*sin(time*0.6459);
      ib_b = ib_b + 0.2*sin(time*0.7354);
      
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Geiss - Swirlie 3.milk"] = {
    fRating: 5.0,
    fGammaAdj: 1.994,
    fDecay: 0.97,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 1,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.499998,
    fWaveScale: 1.524161,
    fWaveSmoothing: 0.9,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 0.334695,
    fWarpScale: 3.928016,
    fZoomExponent: 2.1,
    fShader: 0.0,
    zoom: 0.961,
    rot: 0.22,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 1.771011,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.5,
    ib_size: 0.0285,
    ib_r: 0.34,
    ib_g: 0.34,
    ib_b: 0.34,
    ib_a: 0.1,
    per_frame_code: function(_){with(_){
      wave_x = wave_x + 0.2900*( 0.60*sin(2.121*time) + 0.40*sin(1.621*time) );
      wave_y = wave_y + 0.2900*( 0.60*sin(1.742*time) + 0.40*sin(2.322*time) );
      wave_r = wave_r + 0.350*( 0.60*sin(0.823*time) + 0.40*sin(0.916*time) );
      wave_g = wave_g + 0.350*( 0.60*sin(0.900*time) + 0.40*sin(1.023*time) );
      wave_b = wave_b + 0.350*( 0.60*sin(0.808*time) + 0.40*sin(0.949*time) );
      blah = 0.5/(wave_r+wave_g+wave_b);
      wave_r = wave_r*blah; wave_g = wave_g*blah; wave_b = wave_b*blah;
      rot = rot + 0.12*( 0.60*sin(0.21*time) + 0.40*sin(0.339*time) );
      cx = cx + 0.30*( 0.60*sin(0.374*time) + 0.14*sin(0.194*time) );
      cy = cy + 0.37*( 0.60*sin(0.274*time) + 0.10*sin(0.394*time) );
      ib_r = ib_r + 0.2*sin(time*0.5413);
      ib_g = ib_g + 0.2*sin(time*0.6459);
      ib_b = ib_b + 0.2*sin(time*0.7354);
      blah = 0.4/(ib_r+ib_g+ib_b)*3;
      ib_r = ib_r*blah; ib_g = ib_g*blah; ib_b = ib_b*blah;
      
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Geiss - The Fatty Lumpkin Sunkle Tweaker.milk"] = {
    fRating: 5.0,
    fGammaAdj: 2.0,
    fDecay: 0.9,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 2,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 10.14,
    fWaveScale: 1.235,
    fWaveSmoothing: 0.9,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.772,
    fZoomExponent: 2.301,
    fShader: 0.0,
    zoom: 1.099,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.29,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.01,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      rot=rot+rad*0.18*sin(0.6*time*0.439+0.4*time*0.338);
    }},
    per_frame_code: function(_){with(_){
      wave_x = wave_x + 0.250*( 0.60*sin(2.121*time) + 0.40*sin(1.621*time) );
      wave_y = wave_y + 0.250*( 0.60*sin(1.742*time) + 0.40*sin(2.322*time) );
      wave_r = wave_r + 0.500*( 0.60*sin(0.823*time) + 0.40*sin(0.916*time) );
      wave_g = wave_g + 0.500*( 0.60*sin(0.900*time) + 0.40*sin(1.023*time) );
      wave_b = wave_b + 0.500*( 0.60*sin(0.808*time) + 0.40*sin(0.949*time) );
      zoom = zoom + 0.010*( 0.60*sin(0.339*time) + 0.40*sin(0.276*time) );
      rot = rot + 0.035*( 0.60*sin(0.381*time) + 0.40*sin(0.539*time) );
      cx = cx + 0.030*( 0.60*sin(0.374*time) + 0.40*sin(0.194*time) );
      cy = cy + 0.037*( 0.60*sin(0.274*time) + 0.40*sin(0.394*time) );
      q = time;
      dx = dx + 0.019*( 0.60*sin(100.334*q)+ 0.40*sin(250.277*q));
      dy = dy + 0.019*( 0.60*sin(200.384*q) + 0.40*sin(150.247*q));
      sx = sx + 0.010*( 0.60*sin(0.313*time) + 0.40*sin(0.383*time) );
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Illusion & Unchained - Invade My Mind.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.976,
    fVideoEchoZoom: 1.028414,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 7,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 1,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.818016,
    fWaveScale: 1.028415,
    fWaveSmoothing: 0.09,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 5.9957,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.000206,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.4241,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.2,
    wave_g: 1.0,
    wave_b: 1.0,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.06,
    ob_r: 0.8,
    ob_g: 0.3,
    ob_b: 0.8,
    ob_a: 1.0,
    ib_size: 0.05,
    ib_r: 0.2,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.85,
    mv_r: 0.4999,
    mv_g: 0.4999,
    mv_b: 0.4999,
    mv_a: 1.0,
    per_pixel_code: function(_){with(_){
      zoom=zoom+.10*sin(q4+time+ang+rad);
      rot=ifcond(above(bnot(1*q4),bnot(1*q3*.24)),rot*sin(rad*sin(q4*.54)),-rot*sin(rad*cos(q4*.34)))*sin(bass*.43)*sin(time*.13)*sin(q4*.54);
      sx=sx+.2*sqrt(sin(x))*sin(q3)*sin(q4*.42)*sin(q1*.65);
      sy=sy-.2*sqrt(sin(y))*cos(q3*q1)*sin(above(q3,q3+.4)*.54)*sin(q4*above(q3,q2)*.54);
      dx=rot*sin(q4+q3)*Y*sin(above(q2,q4*.12))*x*sin(q3*.53)*sin(q5*.43);
      dy=-rot*sin(q3)*x*sin(above(q3,q5)*.53)*y*sin(above(q4,q1)*-.12)*sin(above(q1,q3)*.23);;
      cx = cx + 4 * sin(0.128 * q3);
    }},
    per_frame_code: function(_){with(_){
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      chaos=.9+.1*sin(pulse);
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.6)*chaos+1.6);
      bass_flop=abs(bass_flop-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.6)*chaos+1.6);
      treb_flop=abs(treb_flop-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.6)*chaos+1.6);
      mid_flop=abs(mid_flop-equal(mid_thresh,2));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      bass_residual = bass_changed*sin(pulse*3) + bnot(bass_changed)*bass_residual;
      treb_residual = treb_changed*sin(pulse*3) + bnot(treb_changed)*treb_residual;
      mid_residual = mid_changed*sin(pulse*3) + bnot(mid_changed)*mid_residual;
      pulse=ifcond(above(abs(pulse),3.14),-3.14,pulse+(bass_thresh+mid_thresh+treb_thresh)*.0035);
      entropy=ifcond(bass_changed*mid_changed*treb_changed,(1+bass_flop+treb_flop+mid_flop)*(1+rand(3)),entropy);
      q1=mid_residual;
      q2=bass_residual;
      q3=treb_residual;
      q4=sin(pulse);
      q5=cos(pulse*(.5+.1*entropy));
      q6=sin(pulse*(.5+pow(.25,entropy)));
      q7=above(q1,0)+above(q2,0)+above(q3,0)+above(q3,0)*treb_flop+above(q2,0)*bass_flop+above(q1,0)*mid_flop;
      q8=entropy;
      wave_r=wave_r+wave_r*sin(q4+q5);
      wave_b=wave_b+wave_b*q2*sin(q3);
      wave_g=wave_g+wave_g*q2;
      ob_r=ob_r+ob_r*sin(q1+q2*2.14);
      ob_bob_b+ob_b*sin(q2+q3*2.14);
      ob_g=ob_g+ob_g*sin(q3+q1*2.14);
      ib_r=ib_r+ib_r*cos(q5+q1*2.14);
      ib_b=ib_b+ib_*cos(q5+q2*2.14);
      ib_g=ib_g+ib_g*cos(q5+q3*2.14);
      wave_mystery=.5*q6;
      warp=0;
      ob_size = 0.070 +  (bass+mid)/24 + bass_att/30;
      ib_size = ob_size / 4;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Krash & Illusion - Spiral Movement.milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 1.0,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 1,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.0,
    fWaveScale: 0.504218,
    fWaveSmoothing: 0.75,
    fWaveParam: 0.24,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 9.8608,
    fWarpScale: 16.2174,
    fZoomExponent: 1.503744,
    fShader: 0.0,
    zoom: 1.0201,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.819544,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.2,
    ib_size: 0.005,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 0.06,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_frame_code: function(_){with(_){
      dx=-0.0005;
      dy=-0.0005;
      vol = (bass+mid+att)/6;
      xamptarg = ifcond(equal(frame%15,0),min(0.5*vol*bass_att,0.5),xamptarg);
      xamp = xamp + 0.5*(xamptarg-xamp);
      xdir = ifcond(above(abs(xpos),xamp),-sign(xpos),ifcond(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));
      xaccel = xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
      xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
      xpos = xpos + 0.001*xspeed;
      wave_x = xpos + 0.5;
      yamptarg = ifcond(equal(frame%15,0),min(0.3*vol*treb_att,0.5),yamptarg);
      yamp = yamp + 0.5*(yamptarg-yamp);
      ydir = ifcond(above(abs(ypos),yamp),-sign(ypos),ifcond(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));
      yaccel = ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
      yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
      ypos = ypos + 0.001*yspeed;
      wave_y = ypos + 0.5;
      wave_r = wave_r + 0.350*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
      wave_g = wave_g + 0.350*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
      wave_b = wave_b + 0.350*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
      rot = rot + 0.030*( 0.60*sin(0.381*time) + 0.40*sin(0.479*time) );
      cx = cx + 0.410*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
      cy = cy + 0.410*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
      wave_mystery = wave_mystery + 0.15*( 0.60*sin(0.629*time) + 0.40*sin(1.826*time) );
      warp = warp*vol;
      zoom = zoom - 0.02*zoom*bass_att;
      zoom_exp = 1.5*( 0.60*sin(0.381*time) + 0.40*sin(0.479*time) );
      ob_a = 1 - 2*vol;
      monitor = zoom_exp;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["nil - Can't Stop the Blithering.milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.0,
    fDecay: 0.992,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 3,
    nWaveMode: 4,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.099998,
    fWaveScale: 1.096512,
    fWaveSmoothing: 0.0,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.0,
    fModWaveAlphaEnd: 0.78,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 0.473261,
    fShader: 0.0,
    zoom: 0.869963,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.002,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 1.0,
    wave_g: 1.0,
    wave_b: 1.0,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.5,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.26,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 1.024,
    nMotionVectorsY: 1.008003,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 5.0,
    mv_r: 1.0,
    mv_g: 0.6,
    mv_b: 0.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      zoom=zoom+abs(sin(ang)*.2);
    }},
    per_frame_code: function(_){with(_){
      q1=zoom;
      wave_mystery=sin(3.654*time)*sin(2.765*time);
      wave_b=sin(bass);
      wave_r=sin(treb);
      wave_g=sin(mid);
      zoom=(bass+q1)/2.2;
      rot=sin(time*sin(q1))*.1;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar & Fvese - Stranger Minds (Astral Mix).milk"] = {
    fRating: 3.5,
    fGammaAdj: 1.0,
    fDecay: 0.999,
    fVideoEchoZoom: 0.9996,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 2,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 1,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.00573,
    fWaveScale: 0.023445,
    fWaveSmoothing: 0.0,
    fWaveParam: -0.48,
    fModWaveAlphaStart: 1.489999,
    fModWaveAlphaEnd: 0.75,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.9995,
    rot: 0.2,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.6,
    wave_g: 0.6,
    wave_b: 0.51,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.005,
    ib_r: 0.5,
    ib_g: 0.4,
    ib_b: 0.65,
    ib_a: 1.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_l: 0.055,
    mv_r: 0.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 1.0,
    per_pixel_code: function(_){with(_){
      zoom =0.9- sin(time + ang*2)*0.02;
      zoom=zoom+(q1)*0.1;
      rot = rot + 0.1*q1*(3.14-ang);
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.350*( 0.60*sin(0.825*time) + 0.40*sin(0.915*time) );
      wave_g = wave_g + 0.350*( 0.60*sin(0.900*time) + 0.40*sin(1.025*time) );
      wave_b = wave_b + 0.350*( 0.60*sin(0.810*time) + 0.40*sin(0.950*time) );
      mv_r= wave_r + 0.350*( 0.60*sin(0.900*time) + 0.40*sin(0.750*time) );
      mv_g= wave_g + 0.350*( 0.60*sin(0.825*time) + 0.40*sin(0.950*time) );
      mv_b= wave_b + 0.350*( 0.60*sin(0.775*time) + 0.40*sin(1.025*time) );
      ib_r=1-min(bass*0.5,1);
      ib_b=1-min(treb*0.5,1);
      ib_g=1-min(mid*0.5,1);
      ob_r=1-min(mid_att*0.5,1);
      ob_b=1-min(bass_att*0.5,1);
      ob_g=1-min(treb_att*0.5,1);
      bass_effect = min(max(max(bass,bass_effect)-1.3,0),0.5);
      ib_size = ib_size+ bass_effect;
      wave_mystery = wave_mystery + 0.4*bass_effect;
      mv_l = mv_l + 0.5*bass_effect;
      q1 = bass_effect;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar - Fractopia (Focused Childhood Mix ).milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 1.0,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.0,
    fWaveScale: 0.073891,
    fWaveSmoothing: 0.75,
    fWaveParam: -0.48,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 9.8608,
    fWarpScale: 16.2174,
    fZoomExponent: 1.503744,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.999999,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.9,
    wave_g: 0.2,
    wave_b: 0.4,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 1.0,
    ob_g: 0.1,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.05,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 0.0,
    mv_g: 0.0,
    mv_b: 0.0,
    mv_a: 1.0,
    per_pixel_code: function(_){with(_){
      myx = x-(q1);
      myy = y-q2+0.1;
      dx = 3.5*sin(q8*0.567)*(2*myy*myx);
      dy = 3.5*sin(q8*0.567)*((myy*myy) - (myx*myx));
    }},
    per_frame_code: function(_){with(_){
      warp = 0;
      volume = 0.3*(bass+mid+att);
      xamptarg = ifcond(equal(frame%15,0),min(0.25*volume*(60*bass_att/fps),0.5),xamptarg);
      xamp = xamp + 0.5*(xamptarg-xamp);
      xdir = ifcond(above(abs(xpos),xamp),-sign(xpos),ifcond(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));
      xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
      xpos = xpos + 0.001*xspeed;
      yamptarg = ifcond(equal(frame%15,0),min(0.15*volume*(60*treb_att/fps),0.5),yamptarg);
      yamp = yamp + 0.5*(yamptarg-yamp);
      ydir = ifcond(above(abs(ypos),yamp),-sign(ypos),ifcond(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));
      yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
      ypos = ypos + 0.001*yspeed;
      beatrate = equal(beatrate,0) + (1-equal(beatrate,0))*(below(volume,0.01) + (1-below(volume,0.01))*beatrate);
      lastbeat = lastbeat + equal(lastbeat,0)*time;
      meanbass_att = 0.1*(meanbass_att*(bass_att));
      peakbass_att = max((bass_att),peakbass_att);
      beat = above(volume,0.8)*below(peakbass_att - (bass_att), 0.05*peakbass_att)*above(time - lastbeat, 0.1 + 0.5*(beatrate - 0.1));
      beatrate = max(ifcond(beat,ifcond(below(time-lastbeat,2*beatrate),0.1*(beatrate*9 + time - lastbeat),beatrate),beatrate),0.1);
      peakbass_att = beat*(bass_att) + (1-beat)*peakbass_att*(above(time - lastbeat, 2*beatrate)*0.95 + (1-above(time - lastbeat, 2*beatrate))*0.995);
      lastbeat = beat*time + (1-beat)*lastbeat;
      peakbass_att = max(peakbass_att,1.1*meanbass_att);
      wave_x = xpos + 0.5;
      wave_y = 1-(ypos + 0.5);
      wave_r = 0.5 + 0.499*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
      wave_g = 0.5 + 0.499*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
      wave_b = 0.5 + 0.499*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
      q1 = wave_x;
      q2 = ypos+0.5;
      movement =movement + 0.4*(((bass+bass_att + 0.1*pow((bass+0.6*bass_att+0.2*treb_att),3)))/fps);
      movement = ifcond(above(movement,10000), 0, movement);
      q8 = movement;
      ib_size = ib_size + (beat);
      ib_r = beat*rand(100)*0.01;
      ib_g = beat*rand(100)*0.01;
      ib_b = beat*rand(100)*0.01;
      zoom =1.3 + 0.5*sin(movement*0.821);
      wrap = 1-beat;
    }},
    shapes: [
      {
       enabled: 0,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.537415,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.725085,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
      {
       enabled: 0,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Rovastar - Hallucinogenic Pyramids (Beat Time Mix).milk"] = {
    fRating: 5.0,
    fGammaAdj: 2.0,
    fDecay: 0.98,
    fVideoEchoZoom: 2.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 6,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 11.94,
    fWaveScale: 1.599182,
    fWaveSmoothing: 0.7,
    fWaveParam: 1.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.772,
    fZoomExponent: 1.001,
    fShader: 0.0,
    zoom: 1.007,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.0,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.7,
    wave_g: 0.3,
    wave_b: 0.3,
    wave_x: 0.0,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.4,
    ob_g: 0.3,
    ob_b: 0.0,
    ob_a: 0.7,
    ib_size: 0.005,
    ib_r: 0.65,
    ib_g: 0.05,
    ib_b: 0.45,
    ib_a: 0.3,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      ok_to_change = ifcond(above(time,beat_time+5),1,0);
      bass_effect = max(bass, bass_att)-1;
      beat_time = ifcond(above(bass_effect,0.5), ifcond(ok_to_change,time,beat_time),beat_time);
      effect = ifcond(equal(time,beat_time),abs(effect-1),effect);
      bass_effect = max(max(bass,bass_att)-1.34,0);
      zoom = ifcond(above(effect,0),0.4*x,0.4*y) +0.6 -0.13*(min(bass_effect,0.3));
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.200*( 0.60*sin(0.823*time) + 0.40*sin(0.916*time) );
      wave_g = wave_g + 0.500*( 0.60*sin(0.900*time) + 0.40*sin(1.023*time) );
      wave_b = wave_b + 0.500*( 0.60*sin(0.808*time) + 0.40*sin(0.949*time) );
      decay = decay - 0.03*equal(frame%30,0);
      treb_effect = max(max(treb,treb_att)-1.25,0);
      mid_effect= max(max(mid,mid_att)-1.25,0);
      ob_size = ob_size + 0.005*treb_effect;
      ib_size = ib_size + 0.005*mid_effect;
      ob_r = ob_r -0.2* treb_effect +0.2* mid_effect;
      ib_g = ib_g + 0.2*mid_effect- 0.2*treb_effect;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rovastar - The Chaos Of Colours.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.7,
    fDecay: 0.94,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.001,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.63,
    fWaveParam: -1.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 13.290894,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: -0.28,
    dy: -0.32,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.95,
    ib_g: 0.85,
    ib_b: 0.65,
    ib_a: 1.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      zoom =( log(sqrt(2)-rad) -0.24)*1;
    }},
    per_frame_code: function(_){with(_){
      ob_r = 0.5 + 0.4*sin(time*1.324);
      ob_g = 0.5 + 0.4*cos(time*1.371);
      ob_b = 0.5+0.4*sin(2.332*time);
      ib_r = 0.5 + 0.25*sin(time*1.424);
      ib_g = 0.25 + 0.25*cos(time*1.871);
      ib_b = 1-ob_b;
      volume = 0.15*(bass+bass_att+treb+treb_att+mid+mid_att);
      xamptarg = ifcond(equal(frame%15,0),min(0.5*volume*bass_att,0.5),xamptarg);
      xamp = xamp + 0.5*(xamptarg-xamp);
      xdir = ifcond(above(abs(xpos),xamp),-sign(xpos),ifcond(below(abs(xspeed),0.1),2*above(xpos,0)-1,xdir));
      xaccel = xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
      xspeed = xspeed + xdir*xamp - xpos - xspeed*0.055*below(abs(xpos),xamp);
      xpos = xpos + 0.001*xspeed;
      dx = xpos*0.05;
      yamptarg = ifcond(equal(frame%15,0),min(0.3*volume*treb_att,0.5),yamptarg);
      yamp = yamp + 0.5*(yamptarg-yamp);
      ydir = ifcond(above(abs(ypos),yamp),-sign(ypos),ifcond(below(abs(yspeed),0.1),2*above(ypos,0)-1,ydir));
      yaccel = ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
      yspeed = yspeed + ydir*yamp - ypos - yspeed*0.055*below(abs(ypos),yamp);
      ypos = ypos + 0.001*yspeed;
      dy = ypos*0.05;
      wave_a = 0;
      q8 =oldq8+ 0.0003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
      oldq8 = q8;
      q7 = 0.003*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
    }},
    shapes: [
      {
       enabled: 1,
       sides: 3,
       additive: 0,
       thickOutline: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.550000,
       ang: 0.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 0.100000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.900000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.400000,
       per_frame_code: function(_){with(_){
         ang = time*0.4;;
         x = 0.5 + 0.08*cos(time*1.3) + 0.03*cos(time*0.7);
         y = 0.5 + 0.08*sin(time*1.4) + 0.03*sin(time*0.7);
         r =0.5 + 0.5*sin(q8*0.613 + 1);
         g = 0.5 + 0.5*sin(q8*0.763 + 2);
         b = 0.5 + 0.5*sin(q8*0.771 + 5);
         r2 = 0.5 + 0.5*sin(q8*0.635 + 4);
         g2 = 0.5 + 0.5*sin(q8*0.616+ 1);
         b2 = 0.5 + 0.5*sin(q8*0.538 + 3);
       }},
      },
      {
       enabled: 1,
       sides: 32,
       additive: 0,
       thickOutline: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.400000,
       ang: 0.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.300000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
       per_frame_code: function(_){with(_){
         ang = time*1.7;
         x = 0.5 + 0.08*cos(time*1.1) + 0.03*cos(time*0.7);
         y = 0.5 + 0.08*sin(time*1.1) + 0.03*sin(time*0.7);
         r = 0.5 + 0.5*sin(q8*0.713 + 1);
         g = 0.5 + 0.5*sin(q8*0.563 + 2);
         b = 0.5 + 0.5*sin(q8*0.654 + 5);
         r2 = 0.5 + 0.5*sin(q8*0.885 + 4);
         g2 = 0.5 + 0.5*sin(q8*0.556+ 1);
         b2 = 0.5 + 0.5*sin(tq8*0.638 + 3);
       }},
      },
      {
       enabled: 1,
       sides: 4,
       additive: 0,
       thickOutline: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.400000,
       ang: 0.000000,
       r: 1.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 1.000000,
       b2: 0.000000,
       a2: 0.500000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.100000,
       per_frame_code: function(_){with(_){
         ang = time*1.24;
         x = 0.5 - 0.08*cos(time*1.07) + 0.03*cos(time*0.7);
         y = 0.5 - 0.08*sin(time*1.33) + 0.03*sin(time*0.7);
         g = 0.5 + 0.5*sin(q8*0.713 + 1);
         b = 0.5 + 0.5*sin(q8*0.563 + 2);
         r = 0.5 + 0.5*sin(q8*0.654 + 5);
         r2 = 0.5 + 0.5*sin(q8*0.885 + 4);
         g2 = 0.5 + 0.5*sin(q8*0.556+ 1);
         b2 = 0.5 + 0.5*sin(q8*.638 + 3);
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Rovastar - Torrid Tales.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 0.999609,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 8,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.099998,
    fWaveScale: 1.285751,
    fWaveSmoothing: 0.63,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.990099,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.005,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 0.0,
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.5,
    mv_r: 0.35,
    mv_g: 0.35,
    mv_b: 0.35,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      dx = sin((1000+sin(q8))/y)/200;
      dy = cos((1000+sin(q8))/x)/200;
      rot = dy*100*dx;
    }},
    init_code: function(_){with(_){
      q8=0;
      q1 = rand(2)+2;
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      ib_r = 0.5+0.50*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
      ib_g = 0.5+0.5*sin(time*1.476);
      ib_b = 0.5+0.5*sin(1.374*time);
      ob_r = ib_r;
      ob_g=ib_g;
      ob_b=ib_b;
      q8 =oldq8+ 0.001*(pow(1+1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps);
      oldq8 = q8;
      wave_a = 0;
      ib_a =1;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rozzor & Aderrasi - Canon.milk"] = {
    fRating: 2.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 7,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 0.463937,
    fWaveSmoothing: 0.5,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.5,
    fModWaveAlphaEnd: 1.0,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 1e-05,
    dy: 1e-05,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.6,
    wave_g: 0.6,
    wave_b: 0.6,
    wave_x: 0.5,
    wave_y: 0.1,
    ob_size: 0.01,
    ob_r: 1.0,
    ob_g: 1.0,
    ob_b: 1.0,
    ob_a: 1.0,
    ib_size: 0.015,
    ib_r: 1.0,
    ib_g: 1.0,
    ib_b: 1.0,
    ib_a: 1.0,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      rot = rot + 0.3*(0.2*sin(1-rad)*5 - 0.2*sin(0.05*rad)*5) * q2;
      cx = ifcond(above(dy,-.5),1-rot * 2,rot*q2);
      
    }},
    per_frame_code: function(_){with(_){
      wave_mystery = wave_mystery + 0.25*tan(3*bass);
      q1 = wave_mystery;
      wave_b = cos(time)  + abs(cos(time));
      wave_g = abs(sin(time)) ;
      wave_r = (-1 * cos(time))  + abs(-1 * cos(time)) + 0.2 * (cos(sin(time))+(abs(cos(sin(time)))+cos(sin(time))));
      ob_r = ifcond(above(wave_r,1),1,ifcond(above(wave_r,0), abs(wave_r),0));
      ob_g = ifcond(above(wave_g,1),1,ifcond(above(wave_g,0), abs(wave_g),0));
      ob_b = ifcond(above(wave_b,1),1,ifcond(above(wave_b,0), abs(wave_b),0));
      ib_g = wave_g;
      ib_r = sin(time);
      kick = above(bass_att,kick)*2 + (1-above(bass_att,kick))*((kick-1.3)*0.96+1.3);
      dx_r = equal(kick,2)*0.018*sin(6*time) + (1-equal(kick,2))*dx_r;
      dy_r = equal(kick,2)*0.015*sin(7*time) + (1-equal(kick,2))*dy_r;
      dy = dy + 2*dy_r * 0.5*sin(0.8*time);
      dx = dx + 2*dx_r * 0.5*sin(time);
      warp = warp + ifcond(below(kick,0), + 0.5*treb, 0);
      q2 = kick;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Rozzor & Che - Inside The House Of Nil.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 3,
    nWaveMode: 1,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 1.175613,
    fWaveSmoothing: 0.306,
    fWaveParam: -0.46,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 0.854653,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.0,
    wave_g: 0.0,
    wave_b: 0.0,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.5,
    ob_r: 0.19,
    ob_g: 0.12,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.015,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 1.0,
    nMotionVectorsX: 7.679999,
    nMotionVectorsY: 11.519997,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 1.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.34,
    per_pixel_code: function(_){with(_){
      zoom=1+above(sin(1.7*q2),-.5)*.1*sin(2*q2+.027*q1+4*(1+sin(.7*time+q2))*sin(.05*q2+time)*rad);
      rot=.1*sin(q2)*sin(2.3*q2+.027*q1+2*sin(.07*q1+1.2*time)*(rad+sin(time+above(sin(q2),0)*4*sin(q2)*ang)));
      rot=above(sin(1.2*q2+1.3),-.5)*rot;
    }},
    per_frame_code: function(_){with(_){
      slowtime = slowtime+beat*time;
      vol_now =  .4 * bass + 0.1 * (bass_att+treb+mid);
      vol_mean =  ifcond(equal(frame%50,0),vol_mean-0.5*(vol_mean-vol_now),0.1*(vol_mean*9 + vol_now));
      beat = ifcond(above(vol_now,1.5*vol_mean),1,0);
      ib_r = - abs(cos(time));
      ib_g = sin(time);
      ib_b= cos(time)*sign(cos(time));
      mv_r = abs(sin(time));
      mv_g = sin(slowtime) ;
      mv_b= cos(slowtime)*sign(cos(slowtime));
      redneg = ifcond(below(mv_r,0),1,0);
      greenneg = ifcond(below(mv_g,0),1,0);
      blueneg = ifcond(below(mv_b,0),1,0);
      wave_r = ifcond(redneg,ifcond(bor(greenneg , blueneg),1,1+mv_r),mv_r);
      wave_g = ifcond(greenneg,ifcond(equal(greenneg + blueneg,2),1,1+mv_g),mv_g);
      wave_b = ifcond(blueneg,1 + mv_b, mv_b);
      dx=sin(slowtime*1.234)*.0125;
      dy=cos(slowtime*.9666)*.0125;
      q1 = sin(slowtime);
      q2 = wave_b;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["shifter - pinwheel.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.9295,
    fVideoEchoZoom: 0.999608,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 4.099998,
    fWaveScale: 0.972361,
    fWaveSmoothing: 0.9,
    fWaveParam: 0.094,
    fModWaveAlphaStart: 1.0,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.000158,
    fWarpScale: 0.241455,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.999514,
    rot: 0.18,
    cx: 0.5,
    cy: 0.5,
    dx: 0.004,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 1.0,
    wave_g: 1.0,
    wave_b: 1.0,
    wave_x: 1.0,
    wave_y: 0.5,
    ob_size: 0.03,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.0,
    ib_size: 0.05,
    ib_r: 0.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 0.0,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.9,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      st = ifcond(above(bass_att,1),(bass_att-1)*2 + 1,0);
      warp = st*1.950*(x-0.5);
    }},
    init_code: function(_){with(_){
      red = rand(20);
    }},
    per_frame_code: function(_){with(_){
      dx = 0;
      dy = 0;
      wave_x = 0.5;
      sx = 1.1;
      
      rot = 0.2;
      
      wave_a = 0;
      
      sp = red*0.025;
      spi = 0.5 - sp;
      
      tm = time*0.1;
      wave_r = 0.5 + sp*sin(tm*0.6) + spi*cos(tm*1.46);
      wave_g = 0.5 + sp*sin(tm*1.294) + spi*cos(tm*0.87);
      wave_b = 0.5 + sp*sin(tm*1.418) + spi*cos(tm*0.76);
    }},
    shapes: [
      {
       enabled: 1,
       sides: 40,
       additive: 0,
       thickOutline: 1,
       textured: 1,
       x: 0.500000,
       y: 0.500000,
       rad: 0.599571,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 0.000000,
       border_a: 0.000000,
       init_code: function(_){with(_){
         bob = 1.5;
         ro = 0;
         red = rand(20);
       }},
       per_frame_code: function(_){with(_){
         vol = 1 + 0.2*((bass_att+treb_att+mid_att)/3);
         bob = bob*above(bob,0.01) - 0.01 + 1*(1 - above(bob,0.01));
         bob = 0.4 + 0.4*sin(time*0.8);
         bob = bob*vol;
         rad = bob;
         border_1 = 0.4;
         sides = 30;
         ro = ro + 0.02;
         ang = ro;
         rad = 0.6;
         
         sp = red*0.025;
         spi = 0.5 - sp;
         tm = time*0.1;
         border_r = 0.5 + sp*sin(tm*0.6) + spi*cos(tm*1.46);
         border_g = 0.5 + sp*sin(tm*1.294) + spi*cos(tm*0.87);
         border_b = 0.5 + sp*sin(tm*1.418) + spi*cos(tm*0.76);
       }},
      },
      {
       enabled: 1,
       sides: 40,
       additive: 1,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x = 0.5 + 0.5*(sin(time*1.1)*0.3 + 0.7*sin(time*0.5));
         x = 0.5 + 0.225*sin(time);
         y = 0.5 + 0.3*cos(time);
         
         rad = rad*mid_att;
         r = 0.5 + 0.5*sin(frame*0.5);
         b = 0.5 + 0.5*sin(frame*0.5 + 2.094);
         g = 0.5 + 0.5*sin(frame*0.5 + 4.188);
         
       }},
      },
      {
       enabled: 1,
       sides: 40,
       additive: 1,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x = 0.5 + 0.5*(sin(time*1.1)*0.3 + 0.7*sin(time*0.5));
         x = 0.5 + 0.225*sin(time + 2.09);
         y = 0.5 + 0.3*cos(time + 2.09);
         
         rad = rad*bass_att;
         r = 0.5 + 0.5*sin(frame*0.5);
         b = 0.5 + 0.5*sin(frame*0.5 + 2.094);
         g = 0.5 + 0.5*sin(frame*0.5 + 4.188);
         
       }},
      },
      {
       enabled: 1,
       sides: 40,
       additive: 1,
       thickOutline: 0,
       textured: 0,
       x: 0.500000,
       y: 0.500000,
       rad: 0.100000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 0.000000,
       g2: 0.000000,
       b2: 0.000000,
       a2: 0.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         x = 0.5 + 0.5*(sin(time*1.1)*0.3 + 0.7*sin(time*0.5));
         x = 0.5 + 0.225*sin(time + 4.19);
         y = 0.5 + 0.3*cos(time + 4.19);
         
         rad = rad*treb_att;
         r = 0.5 + 0.5*sin(frame*0.5);
         b = 0.5 + 0.5*sin(frame*0.5 + 2.094);
         g = 0.5 + 0.5*sin(frame*0.5 + 4.188);
         
       }},
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 0,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
    ],
  };

Presets["Studio Music and Unchained - Rapid Alteration.milk"] = {
    fRating: 4.0,
    fGammaAdj: 1.0,
    fDecay: 0.983,
    fVideoEchoZoom: 0.998169,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 4,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 7.74,
    fWaveScale: 0.372036,
    fWaveSmoothing: 0.387,
    fWaveParam: -0.36,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.334503,
    fWarpScale: 1.327831,
    fZoomExponent: 1.026514,
    fShader: 1.0,
    zoom: 1.374512,
    rot: 0.02,
    cx: 0.17,
    cy: 0.830001,
    dx: 0.0,
    dy: 0.0,
    warp: 1.779457,
    sx: 0.990099,
    sy: 1.0,
    wave_r: 0.27,
    wave_g: 0.27,
    wave_b: 0.27,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.36,
    ob_g: 0.36,
    ob_b: 0.36,
    ob_a: 0.58,
    ib_size: 0.01,
    ib_r: 0.45,
    ib_g: 0.450001,
    ib_b: 0.4499,
    ib_a: 0.53,
    per_pixel_code: function(_){with(_){
      radix=ifcond(above(q3,0),min(x,y),max(x,y));
      radix=ifcond(above(q2,0),min(radix,rad),max(radix,rad));
      rot=ifcond(above(q4,0),rad*.2*q5,0);
      zoom=ifcond(above(q2,0),zoom,ifcond(above(q3,0),1+q1*.05,1+.07*cos(radix*10*q1)));
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      chaos=.9+.1*sin(pulse);
      entropy=ifcond(bnot(entropy),2,ifcond(equal(pulse,-20),1+rand(3),entropy));
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);
      bass_flop=abs(bass_flop-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);
      treb_flop=abs(treb_flop-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);
      mid_flop=abs(mid_flop-equal(mid_thresh,2));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      bass_residual = bass_changed*sin(pulse*bass_thresh*.1*entropy) + bnot(bass_changed)*bass_residual;
      treb_residual = treb_changed*sin(pulse*treb_thresh*.1*entropy) + bnot(treb_changed)*treb_residual;
      mid_residual = mid_changed*sin(pulse*mid_thresh*.1*entropy) + bnot(mid_changed)*mid_residual;
      pulse=ifcond(above(abs(pulse),20),-20,pulse+.2*bor(bor(bass_changed*bnot(treb_changed),treb_changed*bnot(bass_changed))*bnot(mid_changed),mid_changed)+(mid+bass+treb)*entropy*.025);
      q1=mid_residual;
      q2=bass_residual;
      q3=treb_residual;
      q4=sin(pulse);
      q5=sin(pulse/2);
      wave_r=wave_r+.5*bass_residual;
      wave_r=wave_g+.5*mid_residual;
      wave_r=wave_b+.5*treb_residual;
      wave_mystery=mid_residual;
      ob_r=ifcond(bass_flop,treb_flop,wave_r);
      ob_b=ifcond(treb_flop,mid_flop,wave_b);
      ob_g=ifcond(mid_flop,bass_flop,wave_g);
      ob_a=.03+.02*wave_r;
      ob_size=.05+.04*treb_residual;
      ib_r=ifcond(bass_flop,ob_b,ob_g);
      ib_b=ifcond(treb_flop,ob_g,ob_r);
      ib_g=ifcond(mid_flop,ob_r,ob_b);
      ib_a=.03+.02*wave_g;
      ib_size=.05+.04*bass_residual;
      ib_r = ib_r + 0.2*sin(time*0.5413);
      ib_g = ib_g + 0.2*sin(time*0.6459);
      ib_b = ib_b + 0.2*sin(time*0.4354);
      rot = rot + 0.040*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
      zoom=max(0.98, min(0.15+0.8*bass_att, 1.75 ));
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["StudioMusic & Unchained - Entity.milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.98,
    fVideoEchoZoom: 0.998099,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 6,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 1,
    fWaveAlpha: 7.74,
    fWaveScale: 0.9882,
    fWaveSmoothing: 0.45,
    fWaveParam: 0.3,
    fModWaveAlphaStart: 1.3599,
    fModWaveAlphaEnd: 0.38,
    fWarpAnimSpeed: 0.787543,
    fWarpScale: 1.3277,
    fZoomExponent: 1.332,
    fShader: 0.5,
    zoom: 1.1957,
    rot: 0.0,
    cx: 0.05,
    cy: 0.95,
    dx: 0.0,
    dy: 0.0,
    warp: 3.753,
    sx: 0.99,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.340001,
    ib_size: 0.005,
    ib_r: 0.97,
    ib_g: 0.5,
    ib_b: 0.4999,
    ib_a: 0.5,
    per_pixel_code: function(_){with(_){
      radix=ifcond(above(q3,0),min(x,y),max(x,y));
      radix=ifcond(above(q2,0),min(radix,rad),max(radix,rad));
      rot=ifcond(above(q4,0),rad*.2*q5,0);
      zoom=ifcond(above(q2,0),zoom,ifcond(above(q3,0),1+q1*.05,1+.07*cos(radix*10*q1)));
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      chaos=.9+.1*sin(pulse);
      entropy=ifcond(bnot(entropy),2,ifcond(equal(pulse,-20),1+rand(3),entropy));
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);
      bass_flop=abs(bass_flop-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);
      treb_flop=abs(treb_flop-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);
      mid_flop=abs(mid_flop-equal(mid_thresh,2));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      bass_residual = bass_changed*sin(pulse*bass_thresh*.1*entropy) + bnot(bass_changed)*bass_residual;
      treb_residual = treb_changed*sin(pulse*treb_thresh*.1*entropy) + bnot(treb_changed)*treb_residual;
      mid_residual = mid_changed*sin(pulse*mid_thresh*.1*entropy) + bnot(mid_changed)*mid_residual;
      pulse=ifcond(above(abs(pulse),20),-20,pulse+.2*bor(bor(bass_changed*bnot(treb_changed),treb_changed*bnot(bass_changed))*bnot(mid_changed),mid_changed)+(mid+bass+treb)*entropy*.025);
      q1=mid_residual;
      q2=bass_residual;
      q3=treb_residual;
      q4=sin(pulse);
      q5=sin(pulse/2);
      wave_r=wave_r+.5*bass_residual;
      wave_r=wave_g+.5*mid_residual;
      wave_r=wave_b+.5*treb_residual;
      wave_mystery=mid_residual;
      ob_r=ifcond(bass_flop,treb_flop,wave_r);
      ob_b=ifcond(treb_flop,mid_flop,wave_b);
      ob_g=ifcond(mid_flop,bass_flop,wave_g);
      ob_a=.03+.02*wave_r;
      ob_size=.05+.04*treb_residual;
      ib_r=ifcond(bass_flop,ob_b,ob_g);
      ib_b=ifcond(treb_flop,ob_g,ob_r);
      ib_g=ifcond(mid_flop,ob_r,ob_b);
      ib_a=.03+.02*wave_g;
      ib_size=.05+.04*bass_residual;
      ib_r = ib_r + 0.2*sin(time*0.5413);
      ib_g = ib_g + 0.2*sin(time*0.6459);
      ib_b = ib_b + 0.2*sin(time*0.4354);
      rot = rot + 0.040*( 0.60*sin(0.381*time) + 0.40*sin(0.579*time) );
      zoom=max(0.98, min(0.15+0.8*bass_att, 1.75 ));
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["StudioMusic & Unchained - Minor Alteration.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.9,
    fVideoEchoZoom: 0.998169,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 7,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 7.74,
    fWaveScale: 0.372036,
    fWaveSmoothing: 0.387,
    fWaveParam: -0.36,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.334503,
    fWarpScale: 1.327831,
    fZoomExponent: 1.026514,
    fShader: 0.4,
    zoom: 1.374512,
    rot: 0.02,
    cx: 0.17,
    cy: 0.830001,
    dx: 0.0,
    dy: 0.0,
    warp: 1.779457,
    sx: 0.990099,
    sy: 1.0,
    wave_r: 0.27,
    wave_g: 0.27,
    wave_b: 0.27,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.36,
    ob_g: 0.36,
    ob_b: 0.36,
    ob_a: 0.58,
    ib_size: 0.01,
    ib_r: 0.45,
    ib_g: 0.450001,
    ib_b: 0.4499,
    ib_a: 0.9,
    per_pixel_code: function(_){with(_){
      radix=ifcond(above(q3,0),min(x,y),max(x,y));
      radix=ifcond(above(q2,0),min(radix,rad),max(radix,rad));
      rot=ifcond(above(q4,0),rad*.2*q5,rot);
      zoom=ifcond(above(q2,0),zoom,ifcond(above(q3,0),zoom+q1*.05,zoom+.07*cos(radix*10*q1)));
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      chaos=.9+.1*sin(pulse);
      entropy=ifcond(bnot(entropy),2,ifcond(equal(pulse,-20),1+rand(3),entropy));
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);
      bass_flop=abs(bass_flop-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);
      treb_flop=abs(treb_flop-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);
      mid_flop=abs(mid_flop-equal(mid_thresh,2));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      bass_residual = bass_changed*sin(pulse*bass_thresh*.1*entropy) + bnot(bass_changed)*bass_residual;
      treb_residual = treb_changed*sin(pulse*treb_thresh*.1*entropy) + bnot(treb_changed)*treb_residual;
      mid_residual = mid_changed*sin(pulse*mid_thresh*.1*entropy) + bnot(mid_changed)*mid_residual;
      pulse=ifcond(above(abs(pulse),20),-20,pulse+.1*bor(bor(bass_changed,treb_changed),mid_changed)+(mid_thresh+bass_thresh+treb_thresh)*entropy*.025);
      q1=mid_residual;
      q2=bass_residual;
      q3=treb_residual;
      q4=sin(pulse);
      q5=sin(pulse/2);
      wave_r=wave_r+.5*bass_residual;
      wave_r=wave_g+.5*mid_residual;
      wave_r=wave_b+.5*treb_residual;
      wave_mystery=mid_residual;
      ob_r=ifcond(bass_flop,treb_flop,wave_r);
      ob_b=ifcond(treb_flop,mid_flop,wave_b);
      ob_g=ifcond(mid_flop,bass_flop,wave_g);
      ob_a=.03+.02*wave_r;
      ob_size=.25+.25*treb_residual;
      ib_size=.05+.04*bass_residual;
      ib_r = ifcond(bass_flop,ob_b,.5+ 0.2*sin(time*0.5413));
      ib_g = ifcond(treb_flop,ob_g,.5 + 0.2*sin(time*0.6459));
      ib_b = ifcond(mid_flop,ob_r,.5 + 0.2*sin(time*0.4354));
      rot = rot + 0.04*q1;
      zoom=max(0.98, 0.2+0.35*bass_thresh);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["StudioMusic - It's Only Make Believe.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.98,
    fVideoEchoZoom: 1.006593,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 7,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 0,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 1,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 2.865441,
    fWaveScale: 69.200165,
    fWaveSmoothing: 0.792,
    fWaveParam: 0.02,
    fModWaveAlphaStart: 0.98,
    fModWaveAlphaEnd: 0.999999,
    fWarpAnimSpeed: 0.960959,
    fWarpScale: 6.948194,
    fZoomExponent: 2.699864,
    fShader: 0.7,
    zoom: 0.012572,
    rot: 0.0,
    cx: 0.5,
    cy: 0.500001,
    dx: 0.0,
    dy: 0.0,
    warp: 10.040655,
    sx: 0.999989,
    sy: 0.999999,
    wave_r: 0.25,
    wave_g: 0.25,
    wave_b: 0.25,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.15,
    ob_g: 0.35,
    ob_b: 0.25,
    ob_a: 0.97,
    ib_size: 0.01,
    ib_r: 0.35,
    ib_g: 0.25,
    ib_b: 0.15,
    ib_a: 0.97,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.05,
    mv_r: 0.5,
    mv_g: 0.5,
    mv_b: 0.5,
    mv_a: 0.95,
    per_frame_code: function(_){with(_){
      ff = frame/100;
      wave_r = sin(5*ff/bass)/2+0.5;
      wave_g = cos(ff/mid)/2+0.5;
      wave_b = cos(3*ff/treb)/2+0.5;
      ib_r = ib_r + 0.2*sin(time*0.5413);
      ib_g = ib_g + 0.2*sin(time*0.6459);
      ib_b = ib_b + 0.2*sin(time*0.4354);
      ob_r=wave_r;
      ob_g=wave_g;
      ob_b=wave_b;
      rot = rot + 0.180*( 0.60*sin(0.981*time) + 0.80*sin(0.279*time) );
      zoom=max(0.98, min(0.15+0.8*bass_att, 1.75 ));
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Unchained & Illusion - Logic Morph.milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.98,
    fVideoEchoZoom: 1.00649,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 1,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 1,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 2,
    nMotionVectorsY: 1,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.9681,
    fWaveScale: 0.7063,
    fWaveSmoothing: 0.0,
    fWaveParam: -0.0,
    fModWaveAlphaStart: 0.55,
    fModWaveAlphaEnd: 1.15,
    fWarpAnimSpeed: 1.53,
    fWarpScale: 1.731,
    fZoomExponent: 1.208145,
    fShader: 0.0,
    zoom: 1.000223,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.263,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.301,
    ib_r: 0.25,
    ib_g: 0.25,
    ib_b: 0.25,
    ib_a: 1.0,
    per_pixel_code: function(_){with(_){
      zoom=1-zoom*rad*sin(time)*(q1+q2)*cos(rad*20*sin(time*.5))*10;
      rot=rot-(1-zoom);
    }},
    per_frame_code: function(_){with(_){
      wave_r = wave_r + 0.350*( 0.60*sin(0.980*time) + 0.40*sin(1.047*time) );
      wave_g = wave_g + 0.350*( 0.60*sin(0.835*time) + 0.40*sin(1.081*time) );
      wave_b = wave_b + 0.350*( 0.60*sin(0.814*time) + 0.40*sin(1.011*time) );
      rot = rot + 0.030*( 0.60*sin(0.381*time) + 0.40*sin(0.479*time) );
      cx = cx + 0.110*( 0.60*sin(0.374*time) + 0.40*sin(0.294*time) );
      cy = cy + 0.110*( 0.60*sin(0.393*time) + 0.40*sin(0.223*time) );
      zoom=zoom+0.05+0.05*sin(time*0.133);
      decay=decay-0.01*(frame%2);
      dx = dx + dx_residual;
      dy = dy + dy_residual;
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*0.96+1.3);
      dx_residual = equal(bass_thresh,2)*0.016*sin(time*7) + (1-equal(bass_thresh,2))*dx_residual;
      dy_residual = equal(bass_thresh,2)*0.012*sin(time*9) + (1-equal(bass_thresh,2))*dy_residual;
      q1=dx_residual;
      q2=dy_residual;
      rot=rot+(dy_residual-dx_residual)*4;
      cy=cy+dy_residual*4;
      cx=cx+dx_residual*4;
      wave_x=wave_x+dx_residual*10;
      wave_y=wave_y+dy_residual*10;
      ob_r=wave_g;
      ob_g=wave_b;
      ob_b=wave_r;
      ib_r=wave_b;
      ib_g=wave_r;
      ib_b=wave_g;
      ob_size=dy_residual;
      ib_size=dx_residual;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Unchained & Rovastar - Triptionary.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.9,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 1,
    nWaveMode: 7,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.849581,
    fWaveScale: 7.858094,
    fWaveSmoothing: 0.36,
    fWaveParam: -0.0,
    fModWaveAlphaStart: 0.71,
    fModWaveAlphaEnd: 1.3,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.65,
    wave_g: 0.65,
    wave_b: 0.65,
    wave_x: 0.5,
    wave_y: 0.4,
    ob_size: 0.0015,
    ob_r: 0.01,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.0175,
    ib_r: 1.0,
    ib_g: 0.0,
    ib_b: 0.0,
    ib_a: 1.0,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 0.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      zoom = 1- log(sqrt(2)-rad)/20 - 0.1*sin(rad)- 0.09*cos(1-rad);
      rot = log(sqrt(2)-rad)/3- 0.1*cos(time+rad*0.123) - 0.08*sin(time-(1-rad));
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      chaos=.9+.1*sin(beat);
      entropy=ifcond(bnot(entropy),2,ifcond(equal(pulse,-3.14),1+rand(3),entropy));
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);
      bass_flop=abs(bass_flop-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);
      treb_flop=abs(treb_flop-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);
      mid_flop=abs(mid_flop-equal(mid_thresh,2));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      bass_residual = bass_changed*sin(pulse*.1*entropy) + bnot(bass_changed)*bass_residual;
      treb_residual = treb_changed*sin(pulse*.1*entropy) + bnot(treb_changed)*treb_residual;
      mid_residual = mid_changed*sin(pulse*.1*entropy) + bnot(mid_changed)*mid_residual;
      pulse=ifcond(above(abs(pulse),3.14),-3.14,pulse+(bass_thresh+mid_thresh+treb_thresh)*.052);
      beat=ifcond(above(abs(beat),3.14),-3.14,beat+(bass+treb+mid)*.052);
      q1=mid_residual;
      q2=bass_residual;
      q3=treb_residual;
      q4=sin(pulse);
      q5=sin(beat);
      wave_r=wave_r+.5*bass_residual;
      wave_g=wave_g+.5*mid_residual;
      wave_b=wave_b+.5*treb_residual;
      ob_r=ifcond(bass_flop,treb_flop,wave_r);
      ob_b=ifcond(treb_flop,mid_flop,wave_b);
      ob_g=ifcond(mid_flop,bass_flop,wave_g);
      ob_a=.05+.05*cos(wave_r+pulse*.03);
      ob_size=.2+.2*treb_residual;
      ib_r=ifcond(bass_flop,ob_b,ob_g);
      ib_b=ifcond(treb_flop,ob_g,ob_r);
      ib_g=ifcond(mid_flop,ob_r,ob_b);
      ib_size=ob_size*cos(wave_g+pulse*0.4)*.5;
      mv_a=.5+.5*q5;
      mv_x=abs(beat*10)*entropy;
      mv_y=mv_x;
      mv_r=wave_b;
      mv_b=wave_g;
      mv_g=wave_r;
      wave_x = 0.5+sin(2*time)/8;
      wave_y = 0.5-cos(3*time)/6;
      wave_mystery=q5;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Unchained - Beat Demo 1.0.milk"] = {
    fRating: 3.0,
    fGammaAdj: 2.0,
    fDecay: 0.981,
    fVideoEchoZoom: 1.00644,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 5,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 1,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.868299,
    fWaveScale: 2.781641,
    fWaveSmoothing: 0.54,
    fWaveParam: 0.2,
    fModWaveAlphaStart: 0.95,
    fModWaveAlphaEnd: 0.75,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.0,
    fZoomExponent: 1.008151,
    fShader: 0.2,
    zoom: 0.9998,
    rot: 0.0,
    cx: 0.47,
    cy: 0.5,
    dx: 0.005,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.5,
    ob_g: 0.5,
    ob_b: 0.5,
    ob_a: 0.0,
    ib_size: 0.0,
    ib_r: 0.5,
    ib_g: 0.5,
    ib_b: 0.5,
    ib_a: 0.0,
    per_frame_code: function(_){with(_){
      warp=0;
      chaos=.9+.1*sin(pulse-beat);
      entropy=ifcond(bnot(entropy),2,ifcond(equal(pulse,-20)*above(beat,0),1+rand(5),entropy));
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);
      bass_changed=abs(bass_changed-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);
      treb_changed=abs(treb_changed-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);
      mid_changed=abs(mid_changed-equal(mid_thresh,2));
      pulse=ifcond(above(abs(pulse),20),-20,pulse+(mid+bass+treb)*.025);
      beat=ifcond(above(abs(beat),20),-20,beat+.1*chaos*bor(bor(bass_changed,treb_changed),mid_changed));
      q3=sin(pulse);
      q2=sin(pulse+beat);
      q4=sin(beat);
      q5=entropy;
      q1=(1+1*above(q2,0))*(1+2*above(q3,0))*(1+4*mid_changed*above(q3,0))*(1+6*above(q4,0))*(1+10*bass_changed*above(q4,0))*(1+12*above(q5,3))*(1+16*treb_changed*above(q2,0));
      wave_r=.5+.2*bnot(q1%2)-.2*bnot(q1%3)+.3*q3*bnot(q1%13);
      wave_g=.5+.2*bnot(q1%5)-.2*bnot(q1%13)+.3*q4*bnot(q1%7);
      wave_b=ifcond(bnot(q1%6),.8+.2*q4,.5+.5*q2);
      ob_r=ob_r+.2*q2+.3*bnot(q1%13)*q3;
      ob_b=ob_b-.1*bnot(q1%105)-.4*q2;
      ob_g=ob_g+.5*sin(pulse*.4*entropy);
      ob_a=.07+.05*q3;
      ob_size=.01*entropy*bnot(q1%6);
      ib_r=ib_r+.2*q1-.3*bnot(q1%3)*q4;
      ib_b=ib_b-.2*bnot(q1%17)-.3*q2+.2*bnot(q1%11);
      ib_g=ib_g+.5*sin(pulse*.35*entropy);
      ib_a=.07+.05*q3*q4;
      ib_size=.005+.005*q3;
      zoom_fade=ifcond(bnot(q1%2),zoom_fade-(zoom_fade-.97)/2,zoom_fade-bnot(q1%5)*.02*q4+bnot(q1%2)*.02*q3-bnot(q1%11)*.04*q2);
      zoom=zoom_fade;
      rot_fade=ifcond(bnot(q1%7),rot_fade-(rot_fade-.1*q3)/2-.03*bnot(q1%13),rot_fade-.02*bnot(q1%11)+.02*bnot(q1%3)+.03*bnot(q1%35));
      rot=rot_fade;
      cx=cx+.1*bnot(q1%39)+.07*bnot(q1%13)*q3-.2*bnot(q1%55)*q4;
      wave_x=wave_x+.1*q3+.2*q4*bnot(q1%2);
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Unchained - Beat Demo 2.0.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.99,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 1.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.818016,
    fWaveScale: 0.653093,
    fWaveSmoothing: 0.09,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 5.9957,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0082,
    rot: -0.76,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.4241,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.5,
    ob_g: 0.5,
    ob_b: 0.5,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.5,
    ib_g: 0.5,
    ib_b: 0.5,
    ib_a: 0.0,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.85,
    mv_r: 0.4999,
    mv_g: 0.4999,
    mv_b: 0.4999,
    mv_a: 1.0,
    per_frame_code: function(_){with(_){
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      chaos=.9+.1*sin(pulse);
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.6)*chaos+1.6);
      bass_flop=abs(bass_flop-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.6)*chaos+1.6);
      treb_flop=abs(treb_flop-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.6)*chaos+1.6);
      mid_flop=abs(mid_flop-equal(mid_thresh,2));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      bass_residual = bass_changed*sin(pulse*3) + bnot(bass_changed)*bass_residual;
      treb_residual = treb_changed*sin(pulse*3) + bnot(treb_changed)*treb_residual;
      mid_residual = mid_changed*sin(pulse*3) + bnot(mid_changed)*mid_residual;
      pulse=ifcond(above(abs(pulse),3.14),-3.14,pulse+(bass_thresh+mid_thresh+treb_thresh)*.0035);
      entropy=ifcond(bass_changed*mid_changed*treb_changed,(1+bass_flop+treb_flop+mid_flop)*(1+rand(3)),entropy);
      q1=mid_residual;
      q2=bass_residual;
      q3=treb_residual;
      q4=sin(pulse);
      q5=cos(pulse*(.5+.1*entropy));
      q6=sin(pulse*(.5+pow(.25,entropy)));
      q7=above(q1,0)+above(q2,0)+above(q3,0)+above(q3,0)*treb_flop+above(q2,0)*bass_flop+above(q1,0)*mid_flop;
      q8=entropy;
      wave_r=wave_r+wave_r*q1;
      wave_b=wave_b+wave_b*q2;
      wave_g=wave_g+wave_g*q3;
      ob_r=ob_r+ob_r*sin(q1+q2*2.14);
      ob_bob_b+ob_b*sin(q2+q3*2.14);
      ob_g=ob_g+ob_g*sin(q3+q1*2.14);
      ib_r=ib_r+ib_r*cos(q5+q1*2.14);
      ib_b=ib_b+ib_*cos(q5+q2*2.14);
      ib_g=ib_g+ib_g*cos(q5+q3*2.14);
      ob_a=.25+.25*sin(q2+q3*2.14);
      ib_a=.25+.25*sin(q2*2.14+q3);
      ob_size=.1+.1*sin(q3*3+q1);
      ib_size=.1+.1*sin(q1*3+q3);
      zoom=zoom+.1*q4;
      rot=.2*q5;
      wave_mystery=.5*q6;
      cx=cx+.5*q1;
      cy=cy+.5*q2;
      warp=bnot(q7%2);
      echo_zoom=1+.5*q3;
      echo_orientation=q8%4;
      wave_mode=q8%7;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Unchained - Beat Demo 2.2.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.996,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 1,
    bSolarize: 1,
    bInvert: 0,
    fWaveAlpha: 0.818016,
    fWaveScale: 0.653093,
    fWaveSmoothing: 0.09,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 5.9957,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.0082,
    rot: -0.76,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.4241,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.5,
    ob_g: 0.5,
    ob_b: 0.5,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.5,
    ib_g: 0.5,
    ib_b: 0.5,
    ib_a: 0.0,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.85,
    mv_r: 0.4999,
    mv_g: 0.4999,
    mv_b: 0.4999,
    mv_a: 1.0,
    per_pixel_code: function(_){with(_){
      radix=ifcond(above(q3,0),min(x,y),max(x,y));
      radix=ifcond(above(q2,0),min(radix,rad),max(radix,rad));
      rot=ifcond(above(q6,0),rad*.2*q5,.2*q5*sin(rad*2.133*q7));
      zoom=ifcond(above(q2,0),zoom,ifcond(above(q3,0),1+.07*sin(q4*.2*radix),1+.07*cos(radix*10*q4)));
    }},
    per_frame_code: function(_){with(_){
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      chaos=.9+.1*sin(pulse);
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.6)*chaos+1.6);
      bass_flop=abs(bass_flop-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.6)*chaos+1.6);
      treb_flop=abs(treb_flop-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.6)*chaos+1.6);
      mid_flop=abs(mid_flop-equal(mid_thresh,2));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      bass_residual = bass_changed*sin(pulse*3) + bnot(bass_changed)*bass_residual;
      treb_residual = treb_changed*sin(pulse*3) + bnot(treb_changed)*treb_residual;
      mid_residual = mid_changed*sin(pulse*3) + bnot(mid_changed)*mid_residual;
      pulse=ifcond(above(abs(pulse),3.14),-3.14,pulse+(bass_thresh+mid_thresh+treb_thresh)*.0035);
      entropy=ifcond(bass_changed*mid_changed*treb_changed,(1+bass_flop+treb_flop+mid_flop)*(1+rand(3)),entropy);
      q1=mid_residual;
      q2=bass_residual;
      q3=treb_residual;
      q4=sin(pulse);
      q5=cos(pulse*(.5+.1*entropy));
      q6=sin(pulse*(.5+pow(.25,entropy)));
      q7=above(q1,0)+above(q2,0)+above(q3,0)+above(q3,0)*treb_flop+above(q2,0)*bass_flop+above(q1,0)*mid_flop;
      q8=entropy;
      wave_r=wave_r+wave_r*q1;
      wave_b=wave_b+wave_b*q2;
      wave_g=wave_g+wave_g*q3;
      ob_r=ob_r+ob_r*sin(q1+q2*2.14);
      ob_bob_b+ob_b*sin(q2+q3*2.14);
      ob_g=ob_g+ob_g*sin(q3+q1*2.14);
      ib_r=ib_r+ib_r*cos(q5+q1*2.14);
      ib_b=ib_b+ib_*cos(q5+q2*2.14);
      ib_g=ib_g+ib_g*cos(q5+q3*2.14);
      ob_a=.25+.25*sin(q2+q3*2.14);
      ib_a=.25+.25*sin(q2*2.14+q3);
      ob_size=.1+.1*sin(q3*3+q1);
      ib_size=.1+.1*sin(q1*3+q3);
      wave_mystery=.5*q6;
      warp=0;
      wave_mode=q8%7;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Unchained - Beat Demo 2.3.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.993,
    fVideoEchoZoom: 1.0,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.818016,
    fWaveScale: 0.653093,
    fWaveSmoothing: 0.09,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 5.9957,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 1.018281,
    rot: -0.76,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.4241,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.0,
    ob_r: 0.5,
    ob_g: 0.5,
    ob_b: 0.5,
    ob_a: 1.0,
    ib_size: 0.0,
    ib_r: 0.5,
    ib_g: 0.5,
    ib_b: 0.5,
    ib_a: 0.0,
    nMotionVectorsX: 0.0,
    nMotionVectorsY: 0.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.85,
    mv_r: 0.4999,
    mv_g: 0.4999,
    mv_b: 0.4999,
    mv_a: 1.0,
    per_pixel_code: function(_){with(_){
      c1=x*q1+sin(ang)*q4;
      c2=y*q2+sin(ang)*q6;
      c3=rad*q3;
      radix=ifcond(above(q5,0),min(c1,c2),max(c1,c2));
      radix=ifcond(above(q6,0),min(radix,c3),max(radix,c3));
      rot=ifcond(above(q6,0),rad*.2*q5,.2*q5*sin(rad*2.133*q7));
      zoom=ifcond(below(abs(q1),.5),zoom,ifcond(below(abs(q2),.5),1+.07*sin(q4*3.14*radix),1+.07*sin(radix*q8*q4*1.618)));
    }},
    per_frame_code: function(_){with(_){
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      chaos=.9+.1*sin(pulse);
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.6)*chaos+1.6);
      bass_flop=abs(bass_flop-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.6)*chaos+1.6);
      treb_flop=abs(treb_flop-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.6)*chaos+1.6);
      mid_flop=abs(mid_flop-equal(mid_thresh,2));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      bass_residual = bass_changed*sin(pulse*3) + bnot(bass_changed)*bass_residual;
      treb_residual = treb_changed*sin(pulse*3) + bnot(treb_changed)*treb_residual;
      mid_residual = mid_changed*sin(pulse*3) + bnot(mid_changed)*mid_residual;
      pulse=ifcond(above(abs(pulse),3.14),-3.14,pulse+(bass_thresh+mid_thresh+treb_thresh)*.0035);
      entropy=ifcond(bass_changed*mid_changed*treb_changed,(1+bass_flop+treb_flop+mid_flop)*(1+rand(3)),entropy);
      q1=mid_residual;
      q2=bass_residual;
      q3=treb_residual;
      q4=sin(pulse);
      q5=cos(pulse*(.5+.1*entropy));
      q6=sin(pulse*(.5+pow(.25,entropy)));
      q7=above(q1,0)+above(q2,0)+above(q3,0)+above(q3,0)*treb_flop+above(q2,0)*bass_flop+above(q1,0)*mid_flop;
      q8=entropy;
      wave_r=wave_r+wave_r*q1;
      wave_b=wave_b+wave_b*q2;
      wave_g=wave_g+wave_g*q3;
      ob_r=ob_r+ob_r*sin(q1+q2*2.14);
      ob_bob_b+ob_b*sin(q2+q3*2.14);
      ob_g=ob_g+ob_g*sin(q3+q1*2.14);
      ib_r=ib_r+ib_r*cos(q5+q1*2.14);
      ib_b=ib_b+ib_*cos(q5+q2*2.14);
      ib_g=ib_g+ib_g*cos(q5+q3*2.14);
      ob_a=.25+.25*sin(q2+q3*2.14);
      ib_a=.25+.25*sin(q2*2.14+q3);
      ob_size=.1+.1*sin(q3*3+q1);
      ib_size=.1+.1*sin(q1*3+q3);
      wave_mystery=.5*q6;
      warp=0;
      wave_mode=q8%7;
      decay=.98+q8*.001;
      monitor=q8;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Unchained - Deeper Logic.milk"] = {
    fRating: 2.0,
    fGammaAdj: 2.0,
    fDecay: 0.98,
    fVideoEchoZoom: 0.998169,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 7,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 1,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bMotionVectorsOn: 0,
    bRedBlueStereo: 0,
    nMotionVectorsX: 12,
    nMotionVectorsY: 9,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 7.74,
    fWaveScale: 0.656,
    fWaveSmoothing: 0.8,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.772,
    fZoomExponent: 1.96,
    fShader: 0.19,
    zoom: 0.999698,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.513,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.58,
    ib_size: 0.015,
    ib_r: 0.55,
    ib_g: 1.0,
    ib_b: 0.4999,
    ib_a: 0.23,
    per_pixel_code: function(_){with(_){
      radix=ifcond(above(q3,0),min(x,y),max(x,y));
      radix=ifcond(above(q2,0),min(radix,rad),max(radix,rad));
      rot=ifcond(above(q4,0),rad*.2*q5,0);
      zoom=ifcond(above(q2,0),zoom,ifcond(above(q3,0),1+q1*.05,1+.07*cos(radix*10*q1)));
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      chaos=.9+.1*sin(pulse);
      entropy=ifcond(bnot(entropy),2,ifcond(equal(pulse,-20),1+rand(3),entropy));
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);
      bass_flop=abs(bass_flop-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);
      treb_flop=abs(treb_flop-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);
      mid_flop=abs(mid_flop-equal(mid_thresh,2));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      bass_residual = bass_changed*sin(pulse*bass_thresh*.1*entropy) + bnot(bass_changed)*bass_residual;
      treb_residual = treb_changed*sin(pulse*treb_thresh*.1*entropy) + bnot(treb_changed)*treb_residual;
      mid_residual = mid_changed*sin(pulse*mid_thresh*.1*entropy) + bnot(mid_changed)*mid_residual;
      pulse=ifcond(above(abs(pulse),20),-20,pulse+.2*bor(bor(bass_changed*bnot(treb_changed),treb_changed*bnot(bass_changed))*bnot(mid_changed),mid_changed)+(mid+bass+treb)*entropy*.025);
      q1=mid_residual;
      q2=bass_residual;
      q3=treb_residual;
      q4=sin(pulse);
      q5=sin(pulse/2);
      wave_r=wave_r+.5*bass_residual;
      wave_r=wave_g+.5*mid_residual;
      wave_r=wave_b+.5*treb_residual;
      wave_mystery=mid_residual;
      ob_r=ifcond(bass_flop,treb_flop,wave_r);
      ob_b=ifcond(treb_flop,mid_flop,wave_b);
      ob_g=ifcond(mid_flop,bass_flop,wave_g);
      ob_a=.03+.02*wave_r;
      ob_size=.05+.04*treb_residual;
      ib_r=ifcond(bass_flop,ob_b,ob_g);
      ib_b=ifcond(treb_flop,ob_g,ob_r);
      ib_g=ifcond(mid_flop,ob_r,ob_b);
      ib_a=.03+.02*wave_g;
      ib_size=.05+.04*bass_residual;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Unchained - Ribald Ballad.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 0.991,
    fVideoEchoZoom: 1.008149,
    fVideoEchoAlpha: 0.5,
    nVideoEchoOrientation: 3,
    nWaveMode: 7,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 0,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 3.160929,
    fWaveScale: 3.394157,
    fWaveSmoothing: 0.54,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 1.0,
    fWarpScale: 1.772,
    fZoomExponent: 1.96,
    fShader: 0.07,
    zoom: 0.999698,
    rot: 0.0,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.513,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.5,
    wave_g: 0.5,
    wave_b: 0.5,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.01,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 0.58,
    ib_size: 0.015,
    ib_r: 0.55,
    ib_g: 1.0,
    ib_b: 0.4999,
    ib_a: 1.0,
    nMotionVectorsX: 12.0,
    nMotionVectorsY: 9.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 1.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      rot=ifcond(above(q4,0),rad*.2*q5,rot+.3*sin(ang*3.14*(q1+q2+q3)));
      zoom=ifcond(above(q2,0),zoom-cos(rad*3.14*q2)*.1,ifcond(above(q3,0),1+q1*.05,1+.07*cos(ang*10*q1)));
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      chaos=.9+.1*sin(pulse);
      entropy=ifcond(bnot(entropy),2,ifcond(equal(pulse,-20),1+rand(3),entropy));
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.3)*chaos+1.3);
      bass_flop=abs(bass_flop-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.3)*chaos+1.3);
      treb_flop=abs(treb_flop-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.3)*chaos+1.3);
      mid_flop=abs(mid_flop-equal(mid_thresh,2));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      bass_residual = bass_changed*sin(pulse*.1*entropy) + bnot(bass_changed)*bass_residual;
      treb_residual = treb_changed*sin(pulse*.1*entropy) + bnot(treb_changed)*treb_residual;
      mid_residual = mid_changed*sin(pulse*.1*entropy) + bnot(mid_changed)*mid_residual;
      pulse=ifcond(above(abs(pulse),20),-20,pulse+(bass_thresh+mid+thresh+treb_thresh)*.035-(bass+treb+mid)*.01);
      q1=mid_residual;
      q2=bass_residual;
      q3=treb_residual;
      q4=sin(pulse);
      q5=sin(pulse/2);
      wave_r=wave_r+.5*bass_residual;
      wave_r=wave_g+.5*mid_residual;
      wave_r=wave_b+.5*treb_residual;
      wave_mystery=mid_residual;
      ob_r=ifcond(bass_flop,treb_flop,wave_r);
      ob_b=ifcond(treb_flop,mid_flop,wave_b);
      ob_g=ifcond(mid_flop,bass_flop,wave_g);
      ob_a=.05+.05*cos(wave_r+pulse*.03);
      ob_size=.2+.2*treb_residual;
      ib_r=ifcond(bass_flop,ob_b,ob_g);
      ib_b=ifcond(treb_flop,ob_g,ob_r);
      ib_g=ifcond(mid_flop,ob_r,ob_b);
      ib_size=ob_size*cos(wave_g+pulse*0.4)*.5;
      mv_a=.5+.5*q4;
      mv_x=bass_flop*(15+q2*15);
      mv_y=bass_flop*(15+q3*15);
      mv_r=wave_b;
      mv_b=wave_g;
      mv_g=wave_r;
      cx=cx+sin(pulse*q3)*.1;
      cy=cy+sin(pulse*q2)*.1;
    }},
    shapes: [
    ],
    waves: [
    ],
  };

Presets["Unchained - Subjective Experience Of The Manifold.milk"] = {
    fRating: 3.0,
    fGammaAdj: 1.0,
    fDecay: 1.0,
    fVideoEchoZoom: 0.999496,
    fVideoEchoAlpha: 1.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 0,
    bAdditiveWaves: 1,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 1,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 0,
    bDarken: 1,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 1.059269,
    fWaveScale: 0.653093,
    fWaveSmoothing: 0.09,
    fWaveParam: 0.0,
    fModWaveAlphaStart: 0.75,
    fModWaveAlphaEnd: 0.95,
    fWarpAnimSpeed: 5.99579,
    fWarpScale: 1.331,
    fZoomExponent: 1.0,
    fShader: 0.0,
    zoom: 0.9984,
    rot: 0.002,
    cx: 0.5,
    cy: 0.5,
    dx: 0.0,
    dy: 0.0,
    warp: 0.01,
    sx: 1.0,
    sy: 1.0,
    wave_r: 1.0,
    wave_g: 1.0,
    wave_b: 1.0,
    wave_x: 0.5,
    wave_y: 0.5,
    ob_size: 0.005,
    ob_r: 0.0,
    ob_g: 0.0,
    ob_b: 0.0,
    ob_a: 1.0,
    ib_size: 0.01,
    ib_r: 0.5,
    ib_g: 0.9,
    ib_b: 0.5,
    ib_a: 1.0,
    nMotionVectorsX: 24.959999,
    nMotionVectorsY: 19.199999,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.85,
    mv_r: 0.4999,
    mv_g: 0.4999,
    mv_b: 0.4999,
    mv_a: 1.0,
    per_pixel_code: function(_){with(_){
      xx=x-.5+.03*q5+.1*y*q6+.1*sin(time*.322);
      yy=y-.5+.03*q6+.1*x*q5+.1*sin(time*.427);
      dx=sin(xx*2);
      dy=sin(yy*2);
      rot=sin(rad*1.4+.3*q4);
    }},
    per_frame_code: function(_){with(_){
      warp=0;
      old_bass_flop=bass_flop;
      old_treb_flop=treb_flop;
      old_mid_flop=mid_flop;
      chaos=.9+.1*sin(pulse);
      entropy=ifcond(equal(pulse,-20),1+bass_flop+treb_flop+mid_flop+rand(2),entropy);
      bass_thresh = above(bass_att,bass_thresh)*2 + (1-above(bass_att,bass_thresh))*((bass_thresh-1.6)*chaos+1.6);
      bass_flop=abs(bass_flop-equal(bass_thresh,2));
      treb_thresh=above(treb_att,treb_thresh)*2 + (1-above(treb_att,treb_thresh))*((treb_thresh-1.6)*chaos+1.6);
      treb_flop=abs(treb_flop-equal(treb_thresh,2));
      mid_thresh=above(mid_att,mid_thresh)*2 + (1-above(mid_att,mid_thresh))*((mid_thresh-1.6)*chaos+1.6);
      mid_flop=abs(mid_flop-equal(mid_thresh,2));
      bass_changed=bnot(equal(old_bass_flop,bass_flop));
      mid_changed=bnot(equal(old_mid_flop,mid_flop));
      treb_changed=bnot(equal(old_treb_flop,treb_flop));
      bass_residual = bass_changed*sin(pulse*3) + bnot(bass_changed)*bass_residual;
      treb_residual = treb_changed*sin(pulse*3) + bnot(treb_changed)*treb_residual;
      mid_residual = mid_changed*sin(pulse*3) + bnot(mid_changed)*mid_residual;
      pulse=ifcond(above(abs(pulse),20),-20,pulse+(bass_thresh+mid_thresh+treb_thresh)*.008);
      q1=mid_residual;
      q2=bass_residual;
      q3=treb_residual;
      q4=sin(pulse*q1);
      q5=cos(pulse/2+q1);
      q6=sin(q1*1.14+q2*1.14+q3*1.14);
      q7=above(q1,0)+above(q2,0)+above(q3,0)+above(q3,0)*treb_flop+above(q2,0)*bass_flop+above(q1,0)*mid_flop;
      q8=entropy;
      ob_r=.2+.2*sin(time*2.157);
      ob_b=.2+.2*sin(time*1.689);
      ob_g=.2+.2*sin(time*1.413);
      ib_r=.8+.2*cos(time*1.2+q1*.1);
      ib_b=.2+.2*cos(time*2.811+q2*.1);
      ib_g=.7+.3*cos(time*1.666+q3*.1);
      ib_size=.03+.02*q2;
      ob_size=.03+.02*sin(time*2.321+q2*.2);
      ob_a=.75+.25*q3;
      ib_a=.8+.2*sin(q2*.3+q4+q1*.5);
      mv_r=mv_r+.5*sin(q4+time*.678);
      mv_b=mv_b+.5*sin(q4+time*.789);
      mv_g=mv_g+.5*sin(q5+time*.456);
      mv_a=.2+.2*sin(time*1.178+q5*1.14);
      rot=0;
      echo_zoom=1+.08*q1+.08*q2+.06*q3+.16*cos(time*.681);
      wave_r=.5+.5*sin(q1+time*2.183);
      wave_b=.5+.5*sin(q2+time*1.211);
      wave_g=.5+.5*sin(q3+time*1.541);
      wave_mystery=wave_mystery+.5*sin(time*3+q6);
      wave_x=wave_x+.3*sin(time*.811)+.005*(frame%3);
      wave_y=wave_y+.3*sin(time*.788)+.005*(frame%3);
      wave_mode=q8%3;
      wave_a=3+sin(time*1.414)+q3;
    }},
    shapes: [
    ],
    waves: [
    ],
  };


