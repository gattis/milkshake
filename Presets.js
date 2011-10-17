var Presets = {};

Presets["Flexi - Thread of Transience.milk"] = {
    fRating: 5.0,
    fGammaAdj: 1.21,
    fDecay: 1.0,
    fVideoEchoZoom: 0.999797,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 2,
    nWaveMode: 0,
    bAdditiveWaves: 0,
    bWaveDots: 0,
    bWaveThick: 1,
    bModWaveAlphaByVolume: 0,
    bMaximizeWaveColor: 0,
    bTexWrap: 0,
    bDarkenCenter: 0,
    bRedBlueStereo: 0,
    bBrighten: 1,
    bDarken: 1,
    bSolarize: 0,
    bInvert: 0,
    fWaveAlpha: 0.004361,
    fWaveScale: 0.01,
    fWaveSmoothing: 0.0,
    fWaveParam: -0.44,
    fModWaveAlphaStart: 1.0,
    fModWaveAlphaEnd: 1.000001,
    fWarpAnimSpeed: 0.01,
    fWarpScale: 100.0,
    fZoomExponent: 0.321044,
    fShader: 1.0,
    zoom: 0.990099,
    rot: 0.0,
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
    wave_y: 0.04,
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
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 0.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 0.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      //dy = -0.05;
    }},
    init_code: function(_){with(_){
      x1 = 0;
      y1 = 0;
    }},
    per_frame_code: function(_){with(_){
      
      q1 = .1*(bass-treb);
      
      vvb = ifcond(below(vvb,0),0,vvb);
      vvt = ifcond(below(vvt,0),0,vvt);
      vb = vb*0.85 + (1-vb)*pow(bass,2)*0.001;
      vvb = vvb*0.95 + (1-vvb)*vb*0.2;
      wb = wb*0.85 + (1-wb)*vb*0.2;
      vt = vt*0.85 + (1-vt)*pow(treb,2)*0.001;
      vvt = vvt*0.95 + (1-vvt)*vt*0.2;
      wt = wt*0.85 + (1-wt)*vt*0.2;
      
      q1 = (wt-wb)*.1;
      q1 = max(q1,-0.002);
      q1 = min(q1,0.002);
      q2 = vvb;//0.5 + vm - vvm;
      q3 = vvt;//0.5 + vt - vvt;
      
      v=0.2;
      d = 0;//v*0.2;
      bb = bb + vvb*v - d;
      
      tt = tt + vvt*v - d;
      q4 = bb;
      //q5 = mm;
      q6 = tt;
      
      bbb = bbb  - bass;
      ttt = ttt  - treb;
      monitor = max(bass - vvb*80,0);
      bbb = ifcond(below(-bbb,0),bbb,100);
      ttt = ifcond(below(-ttt,0),ttt,100);
      monitor = ttt;
      q8 = equal(bbb,100);//max(bass - vvt*150,0);
      q7 = equal(ttt,100);
      decay = 0;
      //decay = if(above(abs(q1),0.005),0.99,1);
    }},
    shapes: [
      {
       enabled: 1,
       sides: 100,
       additive: 0,
       thickOutline: 1,
       textured: 1,
       x: 0.500000,
       y: 0.750000,
       rad: 1.078468,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 0.734576,
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
       init_code: function(_){with(_){
         vx = 0
       }},
       per_frame_code: function(_){with(_){
         
         w = -q1*0+asin(1)*(4 +0.5)  ;
         ang = w;
         rad = 0.5;
         zoom_faktor = 0.666;
         tex_zoom = zoom_faktor*1/rad;
         l = 0.01;
         cx = 0.5;
         cy = 0.05;
         
         x = cx +sin(w)*0.5*rad;
         y = cy+l +cos(w)*0.5*rad;
         
         rad = 2*rad;
         tex_zoom = 0.5*tex_zoom;
         
         snap = ifcond(above(q8,0),0,1);
         
         tex_capture = snap;
         //additive = snap;
         r = 1-snap;
         g = 1-snap;
         b = 1-snap;
         r2 = 1-snap;
         g2 = 1-snap;
         b2 = 1-snap;
       }},
      },
      {
       enabled: 1,
       sides: 100,
       additive: 1,
       thickOutline: 1,
       textured: 1,
       x: 0.500000,
       y: 0.750000,
       rad: 1.078468,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 0.734576,
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
       border_a: 0.540000,
       per_frame_code: function(_){with(_){
         w = -q1*5+asin(1)*4 ;
         ang = w;
         rad = 0.985;
         zoom_faktor = 0.995;
         tex_zoom = zoom_faktor*1/rad;
         l = 0.01;
         cx = 0.5;
         cy = 0;
         
         x = cx +sin(w)*0.5*rad*3/4;
         y = cy+l +cos(w)*0.5*rad;
         
         rad = 2*rad;
         tex_zoom = 0.5*tex_zoom;
       }},
      },
      {
       enabled: 1,
       sides: 100,
       additive: 1,
       thickOutline: 1,
       textured: 1,
       x: 0.500000,
       y: 0.750000,
       rad: 1.078468,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 0.734576,
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
       init_code: function(_){with(_){
         vx = 0
       }},
       per_frame_code: function(_){with(_){
         
         w = -q1*0+asin(1)*(4 -.5)  ;
         ang = w;
         rad = 0.5;
         zoom_faktor = 0.666;
         tex_zoom = zoom_faktor*1/rad;
         l = 0.01;
         cx = 0.5;
         cy = 0.05;
         
         x = cx +sin(w)*0.5*rad;
         y = cy+l +cos(w)*0.5*rad;
         
         rad = 2*rad;
         tex_zoom = 0.5*tex_zoom;
         
         snap = ifcond(above(q7,0),0,1);
         
         tex_capture = snap;
         //additive = snap;
         r = 1-snap;
         g = 1-snap;
         b = 1-snap;
         r2 = 1-snap;
         g2 = 1-snap;
         b2 = 1-snap;
       }},
      },
      {
       enabled: 0,
       sides: 100,
       additive: 1,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.750000,
       rad: 0.501259,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       r2: 1.000000,
       g2: 0.000000,
       b2: 1.000000,
       a2: 1.000000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
       per_frame_code: function(_){with(_){
         w = atan2(0.5,q1)*8+asin(1)*4 - asin(1)*2/3;
         ang = w;
         x = 0.5 +sin(w)*0.19;
         y = 0.1 +cos(w)*0.26;
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
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 2.444150,
       smoothing: 0.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 0.000000,
       per_point_code: function(_){with(_){
         xx = ((sample*0983624912364)%10000000+100)/10000000;
         yy = ((xx*1896575575)%10000000+100)/10000000;
         zz = ((yy*58652340875)%10000000+100)/10000000;
         
         
         d = sqrt(sqr(xx)+sqr(yy)+sqr(zz));
         
         zz = zz + t8 - ifcond(above(zz+t8,1),1,0) - 0.5;
         xx = xx + t7 - ifcond(above(xx+t7,1),1,0) - 0.5;
         yy = yy + t6 - ifcond(above(yy+t6,1),1,0) - 0.5;
         
         v = 0.001;
         
         w = 1;// (sample*sin(time*0.3)*0.01-1);
         bb = d*d*0.5;
         n= 0.3;
         s1 = sin(sin(t2*w+bb)*n);
         s2 = sin(sin(t3*w+bb)*n);
         s3 = sin(sin(t4*w+bb)*n);
         c1 = cos(sin(t2*w+bb)*n);
         c2 = cos(sin(t3*w+bb)*n);
         c3 = cos(sin(t4*w+bb)*n);
         
         z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;
         x1 = (c1*c2*xx + c1*s2*yy - s1*zz);
         y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);
         
         zoom = .5*(1/(z+0.5));
         x = 0.5 + zoom*x1 + sin(time*0.1)*0.;;
         y = 0.5 + zoom*y1 + cos(time*0.16801)*0.;
         
         pi3 = 3.1415*2*0.3333;
         t = z*2+t2*1;
         c=3;
         //r = sin(t)*c;
         
         //g = sin(t+pi3)*c;
         
         //b = sin(t-pi3)*c;
         
         
         r = ifcond(above(r,1),1,r);
         r = ifcond(below(r,0),0,r);
         g = ifcond(above(g,1),1,g);
         g = ifcond(below(g,0),0,g);
         b = ifcond(above(b,1),1,b);
         b = ifcond(below(b,0),0,b);
         
         a = 0.4;
       }},
       init_code: function(_){with(_){
         t2 = 0;
         t3 = 0;
         t4 = 0;
         cl = 0;
       }},
       per_frame_code: function(_){with(_){
         t1 = 0;
         v = 0.01;
         j = j + (bass)*0.01;
         j2 = j2 + (mid_att)*0.01;
         j3 = j3 + (treb_att)*0.01;
         t2 = j;
         t3 = j2;
         t4 = j3;
         //t5 = 0;
         k = k*0.99 + 10*mid/fps;
         t5 = -k;
         
         cl1 = cl1 + 0.002;
         cl1 = ifcond(above(cl1,1),0,cl1);
         cl1 = ifcond(below(cl1,0),1,cl1);
         t8 = cl1;
         
         cl2 = cl2 -1*q1;
         cl2 = ifcond(above(cl2,1),0,cl2);
         cl2 = ifcond(below(cl2,0),1,cl2);
         t7 = cl2;
         
         cl3 = cl3 +0.001;
         cl3 = ifcond(above(cl3,1),0,cl3);
         cl3 = ifcond(below(cl3,0),1,cl3);
         t6 = cl3;
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
       scaling: 2.444150,
       smoothing: 0.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
       per_point_code: function(_){with(_){
         t8 = -t8;
         y = sample*0.01;
         x = 0.5 + t8*0.01;
         
         pi3 = 3.1415*2*0.3333;
         t = (q4-q6)*2;
         c=2;
         r = sin(t)*c;
         g = sin(t+pi3)*c;
         
         b = sin(t-pi3)*c;
         
         
         r = ifcond(above(r,1),1,r);
         r = ifcond(below(r,0),0,r);
         g = ifcond(above(g,1),1,g);
         g = ifcond(below(g,0),0,g);
         b = ifcond(above(b,1),1,b);
         b = ifcond(below(b,0),0,b);
         
       }},
       init_code: function(_){with(_){
         t2 = 0;
         t3 = 0;
         t4 = 0;
         cl = 0;
       }},
       per_frame_code: function(_){with(_){
         t8 = 1;
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
       scaling: 2.444150,
       smoothing: 0.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 0.000000,
       per_point_code: function(_){with(_){
         xx = ((sample*0983624912364)%10000000+100)/10000000;
         yy = ((xx*1896575575)%10000000+100)/10000000;
         zz = ((yy*58652340875)%10000000+100)/10000000;
         
         
         d = sqrt(sqr(xx)+sqr(yy)+sqr(zz));
         
         zz = zz + t8 - ifcond(above(zz+t8,1),1,0) - 0.5;
         xx = xx + t7 - ifcond(above(xx+t7,1),1,0) - 0.5;
         yy = yy + t6 - ifcond(above(yy+t6,1),1,0) - 0.5;
         
         v = 0.001;
         
         w = 1;// (sample*sin(time*0.3)*0.01-1);
         bb = d*d*0.5;
         n= 0.3;
         s1 = sin(sin(t2*w+bb)*n);
         s2 = sin(sin(t3*w+bb)*n);
         s3 = sin(sin(t4*w+bb)*n);
         c1 = cos(sin(t2*w+bb)*n);
         c2 = cos(sin(t3*w+bb)*n);
         c3 = cos(sin(t4*w+bb)*n);
         
         z = (c3*s1*c2 + s3*s2)*xx - (c3*s1*s2-s3*c2)*yy + c3*c1*zz;
         x1 = (c1*c2*xx + c1*s2*yy - s1*zz);
         y1 = ((s3*s1*c2 - c3*s2)*xx + (s3*s1*s2+c3*c2)*yy + s3*c1*zz);
         
         zoom = .5*(1/(z+0.5));
         x = 0.5 + zoom*x1 + sin(time*0.1)*0.;;
         y = 0.5 + zoom*y1 + cos(time*0.16801)*0.;
         
         pi3 = 3.1415*2*0.3333;
         t = z*2+t2*1;
         c=3;
         //r = sin(t)*c;
         
         //g = sin(t+pi3)*c;
         
         //b = sin(t-pi3)*c;
         
         
         r = ifcond(above(r,1),1,r);
         r = ifcond(below(r,0),0,r);
         g = ifcond(above(g,1),1,g);
         g = ifcond(below(g,0),0,g);
         b = ifcond(above(b,1),1,b);
         b = ifcond(below(b,0),0,b);
         
         a = 0.4;
       }},
       init_code: function(_){with(_){
         t2 = 0;
         t3 = 0;
         t4 = 0;
         cl = 0;
       }},
       per_frame_code: function(_){with(_){
         t1 = 0;
         v = 0.01;
         j = j + (bass)*0.01;
         j2 = j2 + (mid_att)*0.01;
         j3 = j3 + (treb_att)*0.01;
         t2 = j;
         t3 = j2;
         t4 = j3;
         //t5 = 0;
         k = k*0.99 + 10*mid/fps;
         t5 = -k;
         
         cl1 = cl1 + 0.002;
         cl1 = ifcond(above(cl1,1),0,cl1);
         cl1 = ifcond(below(cl1,0),1,cl1);
         t8 = cl1;
         
         cl2 = cl2 -1*q1;
         cl2 = ifcond(above(cl2,1),0,cl2);
         cl2 = ifcond(below(cl2,0),1,cl2);
         t7 = cl2;
         
         cl3 = cl3 +0.001;
         cl3 = ifcond(above(cl3,1),0,cl3);
         cl3 = ifcond(below(cl3,0),1,cl3);
         t6 = cl3;
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
       scaling: 2.444150,
       smoothing: 0.000000,
       r: 0.000000,
       g: 0.000000,
       b: 1.000000,
       a: 1.000000,
       per_point_code: function(_){with(_){
         t8 = -t8;
         y = (1+t8)*0.01;
         x = sample;
       }},
       init_code: function(_){with(_){
         t2 = 0;
         t3 = 0;
         t4 = 0;
         cl = 0;
       }},
       per_frame_code: function(_){with(_){
         t8 = 1;
       }},
      },
    ],
  };



Presets["flexi - neurobullets.milk"] = {
    fRating: 5.0,
    fGammaAdj: 1.0,
    fDecay: 0.995,
    fVideoEchoZoom: 1.05101,
    fVideoEchoAlpha: 0.0,
    nVideoEchoOrientation: 0,
    nWaveMode: 2,
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
    bInvert: 0,
    fWaveAlpha: 100.0,
    fWaveScale: 0.66622,
    fWaveSmoothing: 0.0,
    fWaveParam: -0.6,
    fModWaveAlphaStart: 1.000001,
    fModWaveAlphaEnd: 1.000001,
    fWarpAnimSpeed: 0.55,
    fWarpScale: 100.0,
    fZoomExponent: 1.002619,
    fShader: 1.0,
    zoom: 0.999708,
    rot: 0.0,
    cx: 0.0,
    cy: 0.0,
    dx: 0.0,
    dy: 0.0,
    warp: 0.0,
    sx: 1.0,
    sy: 1.0,
    wave_r: 0.25,
    wave_g: 0.85,
    wave_b: 1.0,
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
    nMotionVectorsX: 64.0,
    nMotionVectorsY: 48.0,
    mv_dx: 0.0,
    mv_dy: 0.0,
    mv_l: 5.0,
    mv_r: 1.0,
    mv_g: 1.0,
    mv_b: 0.0,
    mv_a: 0.0,
    per_pixel_code: function(_){with(_){
      x1 = q1;
      y1 = q3;
      x2 = q2;
      y2 = q4;
      x3 = q5;
      y3 = q6;
      x = (x-0.5)*4/3+0.5;
      d1 = sqrt( (x1-x)*(x1-x) + (y1-y)*(y1-y)) - 0.05;// - 0.05*bass;
      d2 = sqrt( (x2-x)*(x2-x) + (y2-y)*(y2-y)) - 0.05;// - 0.05*mid;
      d3 = sqrt( (x3-x)*(x3-x) + (y3-y)*(y3-y)) - 0.05;// - 0.05*treb;
      
      c = 20+20*bass;
      scale = 0.4+0.2*bass*bass;
      
      s1 = 2/(1+pow(2,-c*d1));
      s2 = 2/(1+pow(2,-c*d2));
      s3 = 2/(1+pow(2,-c*d3));
      
      dd1 = scale*(s1*s2*s3-6);
      
      dx = dd1*q7;
      dy = dd1*q8;
    }},
    per_frame_code: function(_){with(_){
      v = 1;
      x1 = 0.5+sin(v*time*0.6513)*0.4;
      y1 = 0.5+cos(v*time*0.7524)*0.4;
      x2 = 0.5+sin(v*time*0.8527)*0.4;
      y2 = 0.5+cos(v*time*0.9512)*0.4;
      x3 = 0.5+sin(v*time*0.7287)*0.4;
      y3 = 0.5+cos(v*time*0.8912)*0.4;
      
      dx = sin(atan((x1+x2+x3-1.5)/(y1+y2+y3-1.5))*2)*0.05;
      dy = cos(atan((x1+x2+x3-1.5)/(y1+y2+y3-1.5))*2)*0.05;
      
      wave_x =  (ifcond(equal(frame % 3,2)-1,ifcond(equal(frame%3,1), x1+dx, x2+dx),x3+dx)-0.5)*3/4+0.5;
      wave_y = 1-ifcond(equal(frame % 3,2)-1,ifcond(equal(frame%3,1), y1+dy, y2+dy),y3+dy);
      
      wave_r = ifcond(equal(frame % 3,2)-1,ifcond(equal(frame%3,1), 1, 0),0);
      wave_g = ifcond(equal(frame % 3,2)-1,ifcond(equal(frame%3,1), 0, 1),0);
      wave_b = ifcond(equal(frame % 3,2)-1,ifcond(equal(frame%3,1), 0, 0),1);
      
      q1 = x1;
      q2 = x2;
      q3 = y1;
      q4 = y2;
      q5 = x3;
      q6 = y3;
      q7 = dx;
      q8 = dy;
    }},
    shapes: [
      {
       enabled: 0,
       sides: 99,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 1.000000,
       y: 0.630000,
       rad: 1.300000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 0.763000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 0.970000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.000000,
       border_r: 0.000000,
       border_g: 0.000000,
       border_b: 0.000000,
       border_a: 0.000000,
      },
      {
       enabled: 0,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.500000,
       y: 0.550000,
       rad: 0.225000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 1.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 0.970000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 1.000000,
       border_r: 0.000000,
       border_g: 0.000000,
       border_b: 0.000000,
       border_a: 0.000000,
      },
      {
       enabled: 0,
       sides: 100,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.850000,
       y: 0.000000,
       rad: 1.300000,
       ang: 0.000000,
       tex_ang: 0.000000,
       tex_zoom: 2.068000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 0.970000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.970000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
      },
      {
       enabled: 0,
       sides: 3,
       additive: 0,
       thickOutline: 0,
       textured: 1,
       x: 0.020000,
       y: 0.500000,
       rad: 0.733000,
       ang: 1.319000,
       tex_ang: 0.000000,
       tex_zoom: 100.000000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 0.970000,
       r2: 1.000000,
       g2: 1.000000,
       b2: 1.000000,
       a2: 0.970000,
       border_r: 1.000000,
       border_g: 1.000000,
       border_b: 1.000000,
       border_a: 0.000000,
      },
    ],
    waves: [
      {
       enabled: 0,
       samples: 512,
       sep: 256,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 1,
       bAdditive: 0,
       scaling: 1.950965,
       smoothing: 0.400000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 0.970000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 20,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 0.070000,
       smoothing: 0.650000,
       r: 1.000000,
       g: 1.000000,
       b: 1.000000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 30,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 0.070000,
       smoothing: 0.500000,
       r: 0.300000,
       g: 0.300000,
       b: 0.300000,
       a: 1.000000,
      },
      {
       enabled: 0,
       samples: 512,
       sep: 60,
       bSpectrum: 0,
       bUseDots: 0,
       bDrawThick: 0,
       bAdditive: 0,
       scaling: 1.000000,
       smoothing: 0.500000,
       r: 0.000000,
       g: 0.000000,
       b: 0.000000,
       a: 1.000000,
      },
    ],
  };



Presets["Flexi - stop it if you can.milk"] = {
	fRating : 3.0,
	fGammaAdj : 1.0,
	fDecay : 1.0,
	fVideoEchoZoom : 0.999799,
	fVideoEchoAlpha : 0.0,
	nVideoEchoOrientation : 3,
	nWaveMode : 0,
	bAdditiveWaves : 0,
	bWaveDots : 0,
	bWaveThick : 1,
	bModWaveAlphaByVolume : 0,
	bMaximizeWaveColor : 1,
	bTexWrap : 1,
	bDarkenCenter : 0,
	bRedBlueStereo : 0,
	bBrighten : 1,
	bDarken : 1,
	bSolarize : 0,
	bInvert : 1,
	fWaveAlpha : 1.471417,
	fWaveScale : 1.336945,
	fWaveSmoothing : 0.0,
	fWaveParam : -0.34,
	fModWaveAlphaStart : 1.0,
	fModWaveAlphaEnd : 1.000001,
	fWarpAnimSpeed : 0.011821,
	fWarpScale : 100.0,
	fZoomExponent : 0.998164,
	fShader : 1.0,
	zoom : 1.0,
	rot : 0.0,
	cx : 0.5,
	cy : 0.5,
	dx : 0.0,
	dy : 0.0,
	warp : 0.01,
	sx : 1.0,
	sy : 1.0,
	wave_r : 0.5,
	wave_g : 0.5,
	wave_b : 0.5,
	wave_x : 0.5,
	wave_y : 0.5,
	ob_size : 0.005,
	ob_r : 1.0,
	ob_g : 1.0,
	ob_b : 1.0,
	ob_a : 0.0,
	ib_size : 0.0,
	ib_r : 0.0,
	ib_g : 0.0,
	ib_b : 0.0,
	ib_a : 0.0,
	nMotionVectorsX : 64.0,
	nMotionVectorsY : 48.0,
	mv_dx : 0.0,
	mv_dy : 0.0,
	mv_l : 0.5,
	mv_r : 0.0,
	mv_g : 0.0,
	mv_b : 0.0,
	mv_a : 0.0,
	per_pixel_code : function(_) {
		with (_) {
			dir = q6;

			b1 = (0.1 - q1 * 0.02) * 0.5;
			m1 = -(0.1 - q2 * 0.1) * 30;
			t1 = (0.02 + q3 * 0.01) * 1.2;

			x1 = q4 + cos(dir + 1.5708) * b1;
			y1 = 1 - q5 - sin(dir + 1.5708) * b1;

			x2 = q4 - cos(dir + 1.5708) * b1;
			y2 = 1 - q5 + sin(dir + 1.5708) * b1;

			d1 = sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - y)) - b1 * 2;
			si1 = 1 - 1 / (1 + pow(2, -d1 * 100));

			d2 = sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)) - b1 * 2;
			si2 = 1 - 1 / (1 + pow(2, -d2 * 100));

			si3 = 0.9 - max(si1, si2);
			dx = si1 * sin(y1 - y) * m1 * d1 - si2 * sin(y2 - y) * m1 * d2
					+ si3 * cos(dir) * t1;
			dy = -si1 * sin(x1 - x) * m1 * d1 + si2 * sin(x2 - x) * m1 * d2
					- si3 * sin(dir) * t1;
		}
	},
	per_frame_code : function(_) {
		with (_) {

			wave_r = ifcond(equal(frame % 3, 0), 0, ifcond(equal(frame % 3, 1),
					0, 1));
			wave_g = ifcond(equal(frame % 3, 0), 1, ifcond(equal(frame % 3, 1),
					0, 0.5));
			wave_b = ifcond(equal(frame % 3, 0), 0.5, ifcond(
					equal(frame % 3, 1), 1, 0));

			wave_mystery = ifcond(equal(frame3, 0), (b10 - bass) * 0.2 - 0.5,
					ifcond(equal(frame3, 1), (m10 - mid) * 0.1 - 0.5,
							(t10 - treb) * 0.1 - 0.5));

			b9 = b8;
			b8 = b7;
			b7 = b6;
			b6 = b5;
			b5 = b4;
			b4 = b3;
			b3 = b2;
			b2 = b1;

			m9 = m8;
			m8 = m7;
			m7 = m6;
			m6 = m5;
			m5 = m4;
			m4 = m3;
			m3 = m2;
			m2 = m1;

			t9 = t8;
			t8 = t7;
			t7 = t6;
			t6 = t5;
			t5 = t4;
			t4 = t3;
			t3 = t2;
			t2 = t1;

			b1 = bass;
			m1 = mid;
			t1 = treb;

			q1 = b9 - bass;
			q2 = m9 - mid;
			q3 = b9 - bass;

			q4 = 0.5 + sin(time) * 0.1;
			q5 = 0.5 + sin(time * 0.833) * 0.1;
			q6 = cos(time * 0.3763) * 6.283;

			wave_x = ifcond(equal(frame % 3, 0), q4 + cos(q6 + 1.5708) * 0.1,
					ifcond(equal(frame % 3, 1), q4 - cos(q6) * 0.01, q4
							- cos(q6 + 1.5708) * 0.1));
			wave_y = ifcond(equal(frame % 3, 0), q5 + sin(q6 + 1.5708) * 0.1,
					ifcond(equal(frame % 3, 1), q5 - sin(q6) * 0.01, q5
							- sin(q6 + 1.5708) * 0.1));

			// zoom = 1 - q1*0.1;
			// rot = (q2-q3)*0.1;
		}
	},
	shapes : [ {
		enabled : 0,
		sides : 11,
		additive : 0,
		thickOutline : 1,
		textured : 0,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 0,
		sides : 4,
		additive : 0,
		thickOutline : 0,
		textured : 0,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 0,
		sides : 4,
		additive : 0,
		thickOutline : 0,
		textured : 0,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 0,
		sides : 4,
		additive : 0,
		thickOutline : 0,
		textured : 0,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, ],
	waves : [ {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bAdditive : 0,
		scaling : 0.161878,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 1,
		bAdditive : 1,
		scaling : 25.126015,
		smoothing : 1.000000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 0.100001,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, ],
};

Presets["Flexi - leaving colors - magic happened to my wallpaper.milk"] = {
	fRating : 5.0,
	fGammaAdj : 1.0,
	fDecay : 1.0,
	fVideoEchoZoom : 0.999797,
	fVideoEchoAlpha : 0.5,
	nVideoEchoOrientation : 0,
	nEchoWrap_x : 0,
	nEchoWrap_y : 0,
	nWaveMode : 0,
	bAdditiveWaves : 0,
	bWaveDots : 0,
	bWaveThick : 1,
	bModWaveAlphaByVolume : 0,
	bMaximizeWaveColor : 0,
	bTexWrap : 0,
	nWrapMode_x : 1,
	nWrapMode_y : 1,
	bDarkenCenter : 0,
	bRedBlueStereo : 0,
	bBrighten : 0,
	bDarken : 0,
	bSolarize : 0,
	bInvert : 1,
	fWaveAlpha : 0.004361,
	fWaveScale : 0.01,
	fWaveSmoothing : 0.0,
	fWaveParam : -0.44,
	fModWaveAlphaStart : 1.0,
	fModWaveAlphaEnd : 1.000001,
	fWarpAnimSpeed : 0.01,
	fWarpScale : 100.0,
	fZoomExponent : 0.921783,
	fShader : 0.0,
	zoom : 0.990099,
	rot : 0.0,
	cx : 0.5,
	cy : 0.5,
	dx : 0.0,
	dy : 0.0,
	warp : 0.01,
	sx : 1.0,
	sy : 1.0,
	wave_r : 1.0,
	wave_g : 1.0,
	wave_b : 1.0,
	wave_x : 0.5,
	wave_y : 0.04,
	ob_size : 0.005,
	ob_r : 1.0,
	ob_g : 1.0,
	ob_b : 1.0,
	ob_a : 1.0,
	ib_size : 0.0,
	ib_r : 0.0,
	ib_g : 0.0,
	ib_b : 0.0,
	ib_a : 1.0,
	nMotionVectorsX : 64.0,
	nMotionVectorsY : 48.0,
	mv_dx : 0.0,
	mv_dy : 0.0,
	mv_l : 0.0,
	mv_r : 1.0,
	mv_g : 1.0,
	mv_b : 0.0,
	mv_a : 0.0,
	per_pixel_code : function(_) {
		with (_) {

			dir = -q6 * 1 + asin(1) * 1;

			b1 = 0.11; // distance
			m1 = q5 * 28;// -0.6 + q5*200; // size
			t1 = 0.05; // velocity

			xx = q4;
			yy = 1 - q8;

			x1 = xx + cos(dir + 1.5708) * b1;
			y1 = yy - sin(dir + 1.5708) * b1;

			x2 = xx - cos(dir + 1.5708) * b1;
			y2 = yy + sin(dir + 1.5708) * b1;

			d1 = sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - y)) - b1 * 2;
			si1 = 1 - 1 / (1 + pow(2, -d1 * 100));

			d2 = sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)) - b1 * 2;
			si2 = 1 - 1 / (1 + pow(2, -d2 * 100));

			si3 = pow(q5 * 2, 3) * 100;

			dx = (si1 * sin(y1 - y) * m1 * d1 - si2 * sin(y2 - y) * m1 * d2 + si3
					* cos(dir) * t1) * 2;
			dy = (-si1 * sin(x1 - x) * m1 * d1 + si2 * sin(x2 - x) * m1 * d2 - si3
					* sin(dir) * t1) * 2;

			x = x - 0.5;
			n = 30 + bass * 0;
			t = time * 3;
			m = 1 - si1 - si2;
			dx = dx + 0.002
					* (cos((-x + y) * n + t) + sin((x + y - 1) * n + t)) * m;
			dy = dy + 0.002
					* (cos((x - y) * n - t) + sin((-x - y + 1) * n - t)) * m;
		}
	},
	init_code : function(_) {
		with (_) {
			x1 = 0.9;
			y1 = 0.5;

			x2 = 0.5;
			y2 = 0.5;
			x3 = 0.5;
			y3 = 0.5;
			x4 = 0.5;
			y4 = 0.5;
		}
	},
	per_frame_code : function(_) {
		with (_) {
			decay = 1;
			xx1 = xx1 * 0.9 + (bass) * 0.01;
			xx2 = xx2 * 0.9 + (treb) * 0.01;
			yy1 = yy1 * 0.94 + (treb + bass) * 0.0075;

			x1 = 0.5 + xx1 - xx2;
			y1 = 0.5 + yy1;

			// x2 = 0;y2 = 0;x3 = 0;y3 = 0;x4 = 0;y4 = 0;

			spring = 28;
			grav = 2;
			resist = 0.2;
			bounce = 0.94;
			dt = 0.004 / fps;

			vx2 = vx2 * (1 - resist * dt) + dt * ((x1 + x3 - 2 * x2) * spring);
			vy2 = vy2 * (1 - resist * dt) + dt
					* ((y1 + y3 - 2 * y2) * spring - grav);
			vx3 = vx3 * (1 - resist * dt) + dt * ((x2 + x4 - 2 * x3) * spring);
			vy3 = vy3 * (1 - resist * dt) + dt
					* ((y2 + y4 - 2 * y3) * spring - grav);
			vx4 = vx4 * (1 - resist * dt) + dt * ((x3 - x4) * spring);
			vy4 = vy4 * (1 - resist * dt) + dt * ((y3 - y4) * spring - grav);

			x2 = x2 + vx2;
			y2 = y2 + vy2;
			x3 = x3 + vx3;
			y3 = y3 + vy3;
			x4 = x4 + vx4;
			y4 = y4 + vy4;

			vx2 = ifcond(above(x2, 0), vx2, abs(vx2) * bounce);
			vx2 = ifcond(below(x2, 1), vx2, -abs(vx2) * bounce);
			vx3 = ifcond(above(x3, 0), vx3, abs(vx3) * bounce);
			vx3 = ifcond(below(x3, 1), vx3, -abs(vx3) * bounce);
			vx4 = ifcond(above(x4, 0), vx4, abs(vx4) * bounce);
			vx4 = ifcond(below(x4, 1), vx4, -abs(vx4) * bounce);

			vy2 = ifcond(above(y2, 0), vy2, abs(vy2) * bounce);
			vy2 = ifcond(below(y2, 1), vy2, -abs(vy2) * bounce);
			vy3 = ifcond(above(y3, 0), vy3, abs(vy3) * bounce);
			vy3 = ifcond(below(y3, 1), vy3, -abs(vy3) * bounce);
			vy4 = ifcond(above(y4, 0), vy4, abs(vy4) * bounce);
			vy4 = ifcond(below(y4, 1), vy4, -abs(vy4) * bounce);

			q1 = x1;
			q2 = x2;
			q3 = x3;
			q4 = x4;

			q5 = y1;
			q6 = y2;
			q7 = y3;
			q8 = y4;

			zoom = 1;

			bb = bb * 0.99 + bass * 0.02;
			mm = mm * 0.99 + mid * 0.02;
			tt = tt * 0.99 + treb * 0.02;

			mx = max(max(bb, mm), tt);
			mn = min(min(bb, mm), tt);

			ob_r = (bb - mn) / (mx - mn);
			ob_b = (mm - mn) / (mx - mn);
			ob_g = (tt - mn) / (mx - mn);
			q6 = atan2(vx4, vy4);
			q5 = sqrt(vx4 * vx4 + vy4 * vy4);
		}
	},
	shapes : [ {
		enabled : 0,
		sides : 100,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 1,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 1,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.770000,
		y : 0.790000,
		rad : 0.310907,
		ang : 4.272565,
		tex_ang : 0.125664,
		tex_zoom : 1.518785,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 0.959999,
		r2 : 1.000000,
		g2 : 1.000000,
		b2 : 1.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
		init_code : function(_) {
			with (_) {
				vx = 0
			}
		},
	}, {
		enabled : 0,
		sides : 100,
		additive : 1,
		bDrawBack : 0,
		thickOutline : 1,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.750000,
		rad : 0.042077,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 0.734576,
		r : 1.000000,
		g : 1.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 0.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
		init_code : function(_) {
			with (_) {
				vx = 0
			}
		},
		per_frame_code : function(_) {
			with (_) {
				x = q3;
				y = q7;
			}
		},
	}, {
		enabled : 0,
		sides : 100,
		additive : 1,
		bDrawBack : 0,
		thickOutline : 1,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.750000,
		rad : 0.042077,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 0.734576,
		r : 1.000000,
		g : 1.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 0.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
		init_code : function(_) {
			with (_) {
				vx = 0
			}
		},
		per_frame_code : function(_) {
			with (_) {
				x = q2;
				y = q6;
			}
		},
	}, {
		enabled : 0,
		sides : 100,
		additive : 1,
		bDrawBack : 0,
		thickOutline : 1,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.750000,
		rad : 0.070592,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 0.734576,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 0.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
		init_code : function(_) {
			with (_) {
				vx = 0
			}
		},
		per_frame_code : function(_) {
			with (_) {
				x = q1;
				y = q5;
			}
		},
	}, {
		enabled : 0,
		sides : 4,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 0,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, ],
	waves : [
			{
				enabled : 0,
				samples : 512,
				sep : 0,
				bSpectrum : 0,
				bUseDots : 1,
				bDrawThick : 0,
				bDrawBack : 0,
				bAdditive : 0,
				scaling : 2.444150,
				smoothing : 0.000000,
				r : 1.000000,
				g : 1.000000,
				b : 1.000000,
				a : 0.000000,
				per_point_code : function(_) {
					with (_) {
						xx = ((sample * 0983624912364) % 10000000 + 100) / 10000000;
						yy = ((xx * 1896575575) % 10000000 + 100) / 10000000;
						zz = ((yy * 58652340875) % 10000000 + 100) / 10000000;

						d = sqrt(sqr(xx) + sqr(yy) + sqr(zz));

						zz = zz + t8 - ifcond(above(zz + t8, 1), 1, 0) - 0.5;
						xx = xx + t7 - ifcond(above(xx + t7, 1), 1, 0) - 0.5;
						yy = yy + t6 - ifcond(above(yy + t6, 1), 1, 0) - 0.5;

						v = 0.001;

						w = 1;// (sample*sin(time*0.3)*0.01-1);
						bb = d * d * 0.5;
						n = 0.3;
						s1 = sin(sin(t2 * w + bb) * n);
						s2 = sin(sin(t3 * w + bb) * n);
						s3 = sin(sin(t4 * w + bb) * n);
						c1 = cos(sin(t2 * w + bb) * n);
						c2 = cos(sin(t3 * w + bb) * n);
						c3 = cos(sin(t4 * w + bb) * n);

						z = (c3 * s1 * c2 + s3 * s2) * xx
								- (c3 * s1 * s2 - s3 * c2) * yy + c3 * c1 * zz;
						x1 = (c1 * c2 * xx + c1 * s2 * yy - s1 * zz);
						y1 = ((s3 * s1 * c2 - c3 * s2) * xx
								+ (s3 * s1 * s2 + c3 * c2) * yy + s3 * c1 * zz);

						zoom = .5 * (1 / (z + 0.5));
						x = 0.5 + zoom * x1 + sin(time * 0.1) * 0.;
						;
						y = 0.5 + zoom * y1 + cos(time * 0.16801) * 0.;

						pi3 = 3.1415 * 2 * 0.3333;
						t = z * 2 + t2 * 1;
						c = 3;
						// r = sin(t)*c;

						// g = sin(t+pi3)*c;

						// b = sin(t-pi3)*c;

						r = ifcond(above(r, 1), 1, r);
						r = ifcond(below(r, 0), 0, r);
						g = ifcond(above(g, 1), 1, g);
						g = ifcond(below(g, 0), 0, g);
						b = ifcond(above(b, 1), 1, b);
						b = ifcond(below(b, 0), 0, b);

						a = 0.4;
					}
				},
				init_code : function(_) {
					with (_) {
						t2 = 0;
						t3 = 0;
						t4 = 0;
						cl = 0;
					}
				},
				per_frame_code : function(_) {
					with (_) {
						t1 = 0;
						v = 0.01;
						j = j + (bass) * 0.01;
						j2 = j2 + (mid_att) * 0.01;
						j3 = j3 + (treb_att) * 0.01;
						t2 = j;
						t3 = j2;
						t4 = j3;
						// t5 = 0;
						k = k * 0.99 + 10 * mid / fps;
						t5 = -k;

						cl1 = cl1 + 0.002;
						cl1 = ifcond(above(cl1, 1), 0, cl1);
						cl1 = ifcond(below(cl1, 0), 1, cl1);
						t8 = cl1;

						cl2 = cl2 - 1 * q1;
						cl2 = ifcond(above(cl2, 1), 0, cl2);
						cl2 = ifcond(below(cl2, 0), 1, cl2);
						t7 = cl2;

						cl3 = cl3 + 0.001;
						cl3 = ifcond(above(cl3, 1), 0, cl3);
						cl3 = ifcond(below(cl3, 0), 1, cl3);
						t6 = cl3;
					}
				},
			},
			{
				enabled : 0,
				samples : 512,
				sep : 0,
				bSpectrum : 0,
				bUseDots : 0,
				bDrawThick : 0,
				bDrawBack : 0,
				bAdditive : 0,
				scaling : 2.444150,
				smoothing : 0.000000,
				r : 1.000000,
				g : 1.000000,
				b : 1.000000,
				a : 1.000000,
				per_point_code : function(_) {
					with (_) {
						t8 = -t8;
						y = sample * 0.05;
						x = 0.5 + t8 * 0.005;

						pi3 = 3.1415 * 2 * 0.3333;
						t = (q4 - q6) * 10;
						c = 2;
						r = sin(t) * c;
						g = sin(t + pi3) * c;

						b = sin(t - pi3) * c;

						r = ifcond(above(r, 1), 1, r);
						r = ifcond(below(r, 0), 0, r);
						g = ifcond(above(g, 1), 1, g);
						g = ifcond(below(g, 0), 0, g);
						b = ifcond(above(b, 1), 1, b);
						b = ifcond(below(b, 0), 0, b);

					}
				},
				init_code : function(_) {
					with (_) {
						t2 = 0;
						t3 = 0;
						t4 = 0;
						cl = 0;
					}
				},
				per_frame_code : function(_) {
					with (_) {
						t8 = 1;
					}
				},
			},
			{
				enabled : 0,
				samples : 512,
				sep : 0,
				bSpectrum : 0,
				bUseDots : 0,
				bDrawThick : 1,
				bDrawBack : 0,
				bAdditive : 1,
				scaling : 100.000000,
				smoothing : 0.600000,
				r : 0.000000,
				g : 0.400001,
				b : 1.000000,
				a : 0.300001,
				per_point_code : function(_) {
					with (_) {
						sample = 1 - sample;
						xxx = xx;
						yyy = yy;
						xx = pow(sample, 5) * t1 + 5 * pow(sample, 4)
								* (1 - sample) * t1 + 10 * pow(sample, 3)
								* sqr(1 - sample) * t2 + 10 * sqr(sample)
								* pow(1 - sample, 3) * t3 + 5
								* pow(1 - sample, 4) * sample * t4
								+ pow(1 - sample, 5) * t4;

						yy = pow(sample, 5) * t5 + 5 * pow(sample, 4)
								* (1 - sample) * t5 + 10 * pow(sample, 3)
								* sqr(1 - sample) * t6 + 10 * sqr(sample)
								* pow(1 - sample, 3) * t7 + 5
								* pow(1 - sample, 4) * sample * t8
								+ pow(1 - sample, 5) * t8;
						d = 1 / sqrt(sqr(xx - xxx) + sqr(yy - yyy));
						x = xx + sample * (1 - sample) * (value1 - value2)
								* (yy - yyy) * d;
						y = yy - sample * (1 - sample) * (value1 - value2)
								* (xx - xxx) * d;
					}
				},
				per_frame_code : function(_) {
					with (_) {
						t1 = q1;
						t2 = q2;
						t3 = q3;
						t4 = q4;
						t5 = q5;
						t6 = q6;
						t7 = q7;
						t8 = q8;
					}
				},
			}, {
				enabled : 0,
				samples : 512,
				sep : 0,
				bSpectrum : 0,
				bUseDots : 1,
				bDrawThick : 0,
				bDrawBack : 0,
				bAdditive : 0,
				scaling : 2.444150,
				smoothing : 0.000000,
				r : 0.000000,
				g : 0.000000,
				b : 1.000000,
				a : 1.000000,
				per_point_code : function(_) {
					with (_) {
						t8 = -t8;
						y = (1 + t8) * 0.01;
						x = sample;
					}
				},
				init_code : function(_) {
					with (_) {
						t2 = 0;
						t3 = 0;
						t4 = 0;
						cl = 0;
					}
				},
				per_frame_code : function(_) {
					with (_) {
						t8 = 1;
					}
				},
			}, {
				enabled : 0,
				samples : 512,
				sep : 0,
				bSpectrum : 0,
				bUseDots : 0,
				bDrawThick : 0,
				bDrawBack : 0,
				bAdditive : 0,
				scaling : 1.000000,
				smoothing : 0.500000,
				r : 1.000000,
				g : 1.000000,
				b : 1.000000,
				a : 1.000000,
			}, ],
};

Presets["Flexi - leaving colors - wet dream.milk"] = {
	fRating : 5.0,
	fGammaAdj : 1.14,
	fDecay : 1.0,
	fVideoEchoZoom : 1.030092,
	fVideoEchoAlpha : 0.5,
	nVideoEchoOrientation : 0,
	nEchoWrap_x : 0,
	nEchoWrap_y : 0,
	nWaveMode : 0,
	bAdditiveWaves : 0,
	bWaveDots : 0,
	bWaveThick : 1,
	bModWaveAlphaByVolume : 0,
	bMaximizeWaveColor : 0,
	bTexWrap : 0,
	nWrapMode_x : 1,
	nWrapMode_y : 1,
	bDarkenCenter : 0,
	bRedBlueStereo : 0,
	bBrighten : 0,
	bDarken : 1,
	bSolarize : 0,
	bInvert : 1,
	fWaveAlpha : 0.004361,
	fWaveScale : 0.01,
	fWaveSmoothing : 0.0,
	fWaveParam : -0.44,
	fModWaveAlphaStart : 1.0,
	fModWaveAlphaEnd : 1.000001,
	fWarpAnimSpeed : 0.01,
	fWarpScale : 100.0,
	fZoomExponent : 0.921783,
	fShader : 1.0,
	zoom : 0.990099,
	rot : 0.0,
	cx : 0.5,
	cy : 0.5,
	dx : 0.0,
	dy : 0.0,
	warp : 0.01,
	sx : 1.0,
	sy : 1.0,
	wave_r : 1.0,
	wave_g : 1.0,
	wave_b : 1.0,
	wave_x : 0.5,
	wave_y : 0.04,
	ob_size : 0.005,
	ob_r : 1.0,
	ob_g : 1.0,
	ob_b : 1.0,
	ob_a : 1.0,
	ib_size : 0.0,
	ib_r : 0.0,
	ib_g : 0.0,
	ib_b : 0.0,
	ib_a : 1.0,
	nMotionVectorsX : 64.0,
	nMotionVectorsY : 48.0,
	mv_dx : 0.0,
	mv_dy : 0.0,
	mv_l : 0.0,
	mv_r : 1.0,
	mv_g : 1.0,
	mv_b : 0.0,
	mv_a : 0.0,
	per_pixel_code : function(_) {
		with (_) {

			dir = -q6 * 1 + asin(1) * 1;

			b1 = 0.1; // distance
			m1 = q5 * 25;// -0.6 + q5*200; // size
			t1 = 0.05; // velocity

			xx = q4;
			yy = 1 - q8;

			x1 = xx + cos(dir + 1.5708) * b1;
			y1 = yy - sin(dir + 1.5708) * b1;

			x2 = xx - cos(dir + 1.5708) * b1;
			y2 = yy + sin(dir + 1.5708) * b1;

			d1 = sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - y)) - b1 * 2;
			si1 = 1 - 1 / (1 + pow(2, -d1 * 100));

			d2 = sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)) - b1 * 2;
			si2 = 1 - 1 / (1 + pow(2, -d2 * 100));

			si3 = -pow(q5, 3) * 100 * 0;

			dx = (si1 * sin(y1 - y) * m1 * d1 - si2 * sin(y2 - y) * m1 * d2 + si3
					* cos(dir) * t1) * 2;
			dy = (-si1 * sin(x1 - x) * m1 * d1 + si2 * sin(x2 - x) * m1 * d2 - si3
					* sin(dir) * t1) * 2;

			x = x - 0.5;
			n = 40 + bass * 0;
			t = -time * 10;
			m = 1 - si1 - si2;
			dx = dx + 0.002
					* (cos((-x + y) * n + t) + sin((x + y - 1) * n + t)) * m;
			dy = dy + 0.002
					* (cos((x - y) * n - t) + sin((-x - y + 1) * n - t)) * m;
		}
	},
	init_code : function(_) {
		with (_) {
			x1 = 0.9;
			y1 = 0.5;

			x2 = 0.5;
			y2 = 0.5;
			x3 = 0.5;
			y3 = 0.5;
			x4 = 0.5;
			y4 = 0.5;
		}
	},
	per_frame_code : function(_) {
		with (_) {
			decay = 1;
			xx1 = xx1 * 0.9 + (bass) * 0.01;
			xx2 = xx2 * 0.9 + (treb) * 0.01;
			yy1 = yy1 * 0.94 + (treb + bass) * 0.0075;

			x1 = 0.5 + xx1 - xx2;
			y1 = 0.5 + yy1;

			// x2 = 0;y2 = 0;x3 = 0;y3 = 0;x4 = 0;y4 = 0;

			spring = 28;
			grav = 2;
			resist = 0.2;
			bounce = 0.94;
			dt = 0.0001;

			vx2 = vx2 * (1 - resist * dt) + dt * ((x1 + x3 - 2 * x2) * spring);
			vy2 = vy2 * (1 - resist * dt) + dt
					* ((y1 + y3 - 2 * y2) * spring - grav);
			vx3 = vx3 * (1 - resist * dt) + dt * ((x2 + x4 - 2 * x3) * spring);
			vy3 = vy3 * (1 - resist * dt) + dt
					* ((y2 + y4 - 2 * y3) * spring - grav);
			vx4 = vx4 * (1 - resist * dt) + dt * ((x3 - x4) * spring);
			vy4 = vy4 * (1 - resist * dt) + dt * ((y3 - y4) * spring - grav);

			x2 = x2 + vx2;
			y2 = y2 + vy2;
			x3 = x3 + vx3;
			y3 = y3 + vy3;
			x4 = x4 + vx4;
			y4 = y4 + vy4;

			vx2 = ifcond(above(x2, 0), vx2, abs(vx2) * bounce);
			vx2 = ifcond(below(x2, 1), vx2, -abs(vx2) * bounce);
			vx3 = ifcond(above(x3, 0), vx3, abs(vx3) * bounce);
			vx3 = ifcond(below(x3, 1), vx3, -abs(vx3) * bounce);
			vx4 = ifcond(above(x4, 0), vx4, abs(vx4) * bounce);
			vx4 = ifcond(below(x4, 1), vx4, -abs(vx4) * bounce);

			vy2 = ifcond(above(y2, 0), vy2, abs(vy2) * bounce);
			vy2 = ifcond(below(y2, 1), vy2, -abs(vy2) * bounce);
			vy3 = ifcond(above(y3, 0), vy3, abs(vy3) * bounce);
			vy3 = ifcond(below(y3, 1), vy3, -abs(vy3) * bounce);
			vy4 = ifcond(above(y4, 0), vy4, abs(vy4) * bounce);
			vy4 = ifcond(below(y4, 1), vy4, -abs(vy4) * bounce);

			q1 = x1;
			q2 = x2;
			q3 = x3;
			q4 = x4;

			q5 = y1;
			q6 = y2;
			q7 = y3;
			q8 = y4;

			zoom = 1;

			bb = bb * 0.99 + bass * 0.02;
			mm = mm * 0.99 + mid * 0.02;
			tt = tt * 0.99 + treb * 0.02;

			mx = max(max(bb, mm), tt);
			mn = min(min(bb, mm), tt);

			ob_r = (bb - mn) / (mx - mn);
			ob_b = (mm - mn) / (mx - mn);
			ob_g = (tt - mn) / (mx - mn);
			q6 = atan2(vx4, vy4);
			q5 = sqrt(vx4 * vx4 + vy4 * vy4);
		}
	},
	shapes : [ {
		enabled : 0,
		sides : 100,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 1,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 1,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.770000,
		y : 0.790000,
		rad : 0.310907,
		ang : 4.272565,
		tex_ang : 0.125664,
		tex_zoom : 1.518785,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 0.959999,
		r2 : 1.000000,
		g2 : 1.000000,
		b2 : 1.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
		init_code : function(_) {
			with (_) {
				vx = 0
			}
		},
	}, {
		enabled : 0,
		sides : 100,
		additive : 1,
		bDrawBack : 0,
		thickOutline : 1,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.750000,
		rad : 0.042077,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 0.734576,
		r : 1.000000,
		g : 1.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 0.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
		init_code : function(_) {
			with (_) {
				vx = 0
			}
		},
		per_frame_code : function(_) {
			with (_) {
				x = q3;
				y = q7;
			}
		},
	}, {
		enabled : 0,
		sides : 100,
		additive : 1,
		bDrawBack : 0,
		thickOutline : 1,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.750000,
		rad : 0.042077,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 0.734576,
		r : 1.000000,
		g : 1.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 0.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
		init_code : function(_) {
			with (_) {
				vx = 0
			}
		},
		per_frame_code : function(_) {
			with (_) {
				x = q2;
				y = q6;
			}
		},
	}, {
		enabled : 0,
		sides : 100,
		additive : 1,
		bDrawBack : 0,
		thickOutline : 1,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.750000,
		rad : 0.070592,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 0.734576,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 0.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
		init_code : function(_) {
			with (_) {
				vx = 0
			}
		},
		per_frame_code : function(_) {
			with (_) {
				x = q1;
				y = q5;
			}
		},
	}, {
		enabled : 0,
		sides : 4,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 0,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, ],
	waves : [
			{
				enabled : 0,
				samples : 512,
				sep : 0,
				bSpectrum : 0,
				bUseDots : 1,
				bDrawThick : 0,
				bDrawBack : 0,
				bAdditive : 0,
				scaling : 2.444150,
				smoothing : 0.000000,
				r : 1.000000,
				g : 1.000000,
				b : 1.000000,
				a : 0.000000,
				per_point_code : function(_) {
					with (_) {
						xx = ((sample * 0983624912364) % 10000000 + 100) / 10000000;
						yy = ((xx * 1896575575) % 10000000 + 100) / 10000000;
						zz = ((yy * 58652340875) % 10000000 + 100) / 10000000;

						d = sqrt(sqr(xx) + sqr(yy) + sqr(zz));

						zz = zz + t8 - ifcond(above(zz + t8, 1), 1, 0) - 0.5;
						xx = xx + t7 - ifcond(above(xx + t7, 1), 1, 0) - 0.5;
						yy = yy + t6 - ifcond(above(yy + t6, 1), 1, 0) - 0.5;

						v = 0.001;

						w = 1;// (sample*sin(time*0.3)*0.01-1);
						bb = d * d * 0.5;
						n = 0.3;
						s1 = sin(sin(t2 * w + bb) * n);
						s2 = sin(sin(t3 * w + bb) * n);
						s3 = sin(sin(t4 * w + bb) * n);
						c1 = cos(sin(t2 * w + bb) * n);
						c2 = cos(sin(t3 * w + bb) * n);
						c3 = cos(sin(t4 * w + bb) * n);

						z = (c3 * s1 * c2 + s3 * s2) * xx
								- (c3 * s1 * s2 - s3 * c2) * yy + c3 * c1 * zz;
						x1 = (c1 * c2 * xx + c1 * s2 * yy - s1 * zz);
						y1 = ((s3 * s1 * c2 - c3 * s2) * xx
								+ (s3 * s1 * s2 + c3 * c2) * yy + s3 * c1 * zz);

						zoom = .5 * (1 / (z + 0.5));
						x = 0.5 + zoom * x1 + sin(time * 0.1) * 0.;
						;
						y = 0.5 + zoom * y1 + cos(time * 0.16801) * 0.;

						pi3 = 3.1415 * 2 * 0.3333;
						t = z * 2 + t2 * 1;
						c = 3;
						// r = sin(t)*c;

						// g = sin(t+pi3)*c;

						// b = sin(t-pi3)*c;

						r = ifcond(above(r, 1), 1, r);
						r = ifcond(below(r, 0), 0, r);
						g = ifcond(above(g, 1), 1, g);
						g = ifcond(below(g, 0), 0, g);
						b = ifcond(above(b, 1), 1, b);
						b = ifcond(below(b, 0), 0, b);

						a = 0.4;
					}
				},
				init_code : function(_) {
					with (_) {
						t2 = 0;
						t3 = 0;
						t4 = 0;
						cl = 0;
					}
				},
				per_frame_code : function(_) {
					with (_) {
						t1 = 0;
						v = 0.01;
						j = j + (bass) * 0.01;
						j2 = j2 + (mid_att) * 0.01;
						j3 = j3 + (treb_att) * 0.01;
						t2 = j;
						t3 = j2;
						t4 = j3;
						// t5 = 0;
						k = k * 0.99 + 10 * mid / fps;
						t5 = -k;

						cl1 = cl1 + 0.002;
						cl1 = ifcond(above(cl1, 1), 0, cl1);
						cl1 = ifcond(below(cl1, 0), 1, cl1);
						t8 = cl1;

						cl2 = cl2 - 1 * q1;
						cl2 = ifcond(above(cl2, 1), 0, cl2);
						cl2 = ifcond(below(cl2, 0), 1, cl2);
						t7 = cl2;

						cl3 = cl3 + 0.001;
						cl3 = ifcond(above(cl3, 1), 0, cl3);
						cl3 = ifcond(below(cl3, 0), 1, cl3);
						t6 = cl3;
					}
				},
			},
			{
				enabled : 0,
				samples : 512,
				sep : 0,
				bSpectrum : 0,
				bUseDots : 0,
				bDrawThick : 0,
				bDrawBack : 0,
				bAdditive : 0,
				scaling : 2.444150,
				smoothing : 0.000000,
				r : 1.000000,
				g : 1.000000,
				b : 1.000000,
				a : 1.000000,
				per_point_code : function(_) {
					with (_) {
						t8 = -t8;
						y = sample * 0.05;
						x = 0.5 + t8 * 0.005;

						pi3 = 3.1415 * 2 * 0.3333;
						t = (q4 - q6) * 10;
						c = 2;
						r = sin(t) * c;
						g = sin(t + pi3) * c;

						b = sin(t - pi3) * c;

						r = ifcond(above(r, 1), 1, r);
						r = ifcond(below(r, 0), 0, r);
						g = ifcond(above(g, 1), 1, g);
						g = ifcond(below(g, 0), 0, g);
						b = ifcond(above(b, 1), 1, b);
						b = ifcond(below(b, 0), 0, b);

					}
				},
				init_code : function(_) {
					with (_) {
						t2 = 0;
						t3 = 0;
						t4 = 0;
						cl = 0;
					}
				},
				per_frame_code : function(_) {
					with (_) {
						t8 = 1;
					}
				},
			},
			{
				enabled : 0,
				samples : 512,
				sep : 0,
				bSpectrum : 0,
				bUseDots : 0,
				bDrawThick : 1,
				bDrawBack : 0,
				bAdditive : 1,
				scaling : 100.000000,
				smoothing : 0.600000,
				r : 0.000000,
				g : 0.400001,
				b : 1.000000,
				a : 0.300001,
				per_point_code : function(_) {
					with (_) {
						sample = 1 - sample;
						xxx = xx;
						yyy = yy;
						xx = pow(sample, 5) * t1 + 5 * pow(sample, 4)
								* (1 - sample) * t1 + 10 * pow(sample, 3)
								* sqr(1 - sample) * t2 + 10 * sqr(sample)
								* pow(1 - sample, 3) * t3 + 5
								* pow(1 - sample, 4) * sample * t4
								+ pow(1 - sample, 5) * t4;

						yy = pow(sample, 5) * t5 + 5 * pow(sample, 4)
								* (1 - sample) * t5 + 10 * pow(sample, 3)
								* sqr(1 - sample) * t6 + 10 * sqr(sample)
								* pow(1 - sample, 3) * t7 + 5
								* pow(1 - sample, 4) * sample * t8
								+ pow(1 - sample, 5) * t8;
						d = 1 / sqrt(sqr(xx - xxx) + sqr(yy - yyy));
						x = xx + sample * (1 - sample) * (value1 - value2)
								* (yy - yyy) * d;
						y = yy - sample * (1 - sample) * (value1 - value2)
								* (xx - xxx) * d;
					}
				},
				per_frame_code : function(_) {
					with (_) {
						t1 = q1;
						t2 = q2;
						t3 = q3;
						t4 = q4;
						t5 = q5;
						t6 = q6;
						t7 = q7;
						t8 = q8;
					}
				},
			}, {
				enabled : 0,
				samples : 512,
				sep : 0,
				bSpectrum : 0,
				bUseDots : 1,
				bDrawThick : 0,
				bDrawBack : 0,
				bAdditive : 0,
				scaling : 2.444150,
				smoothing : 0.000000,
				r : 0.000000,
				g : 0.000000,
				b : 1.000000,
				a : 1.000000,
				per_point_code : function(_) {
					with (_) {
						t8 = -t8;
						y = (1 + t8) * 0.01;
						x = sample;
					}
				},
				init_code : function(_) {
					with (_) {
						t2 = 0;
						t3 = 0;
						t4 = 0;
						cl = 0;
					}
				},
				per_frame_code : function(_) {
					with (_) {
						t8 = 1;
					}
				},
			}, {
				enabled : 0,
				samples : 512,
				sep : 0,
				bSpectrum : 0,
				bUseDots : 0,
				bDrawThick : 0,
				bDrawBack : 0,
				bAdditive : 0,
				scaling : 1.000000,
				smoothing : 0.500000,
				r : 1.000000,
				g : 1.000000,
				b : 1.000000,
				a : 1.000000,
			}, ],
};

Presets["Flexi - leaving colors - melting.milk"] = {
	fRating : 5.0,
	fGammaAdj : 1.21,
	fDecay : 1.0,
	fVideoEchoZoom : 0.999797,
	fVideoEchoAlpha : 0.5,
	nVideoEchoOrientation : 0,
	nEchoWrap_x : 0,
	nEchoWrap_y : 0,
	nWaveMode : 0,
	bAdditiveWaves : 0,
	bWaveDots : 0,
	bWaveThick : 1,
	bModWaveAlphaByVolume : 0,
	bMaximizeWaveColor : 0,
	bTexWrap : 0,
	nWrapMode_x : 1,
	nWrapMode_y : 1,
	bDarkenCenter : 0,
	bRedBlueStereo : 0,
	bBrighten : 0,
	bDarken : 1,
	bSolarize : 0,
	bInvert : 1,
	fWaveAlpha : 0.004361,
	fWaveScale : 0.01,
	fWaveSmoothing : 0.0,
	fWaveParam : -0.44,
	fModWaveAlphaStart : 1.0,
	fModWaveAlphaEnd : 1.000001,
	fWarpAnimSpeed : 0.01,
	fWarpScale : 100.0,
	fZoomExponent : 0.921783,
	fShader : 1.0,
	zoom : 0.990099,
	rot : 0.0,
	cx : 0.5,
	cy : 0.5,
	dx : 0.0,
	dy : 0.0,
	warp : 0.01,
	sx : 1.0,
	sy : 1.0,
	wave_r : 1.0,
	wave_g : 1.0,
	wave_b : 1.0,
	wave_x : 0.5,
	wave_y : 0.04,
	ob_size : 0.005,
	ob_r : 1.0,
	ob_g : 1.0,
	ob_b : 1.0,
	ob_a : 1.0,
	ib_size : 0.0,
	ib_r : 0.0,
	ib_g : 0.0,
	ib_b : 0.0,
	ib_a : 1.0,
	nMotionVectorsX : 64.0,
	nMotionVectorsY : 48.0,
	mv_dx : 0.0,
	mv_dy : 0.0,
	mv_l : 0.25,
	mv_r : 1.0,
	mv_g : 0.5,
	mv_b : 0.0,
	mv_a : 0.0,
	per_pixel_code : function(_) {
		with (_) {

			dir = -q6 * 1 + asin(1) * 1;

			b1 = 0.1; // distance
			m1 = q5 * 25;// -0.6 + q5*200; // size
			t1 = 0.05; // velocity

			xx = q4;
			yy = 1 - q8;

			x1 = xx + cos(dir + 1.5708) * b1;
			y1 = yy - sin(dir + 1.5708) * b1;

			x2 = xx - cos(dir + 1.5708) * b1;
			y2 = yy + sin(dir + 1.5708) * b1;

			d1 = sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - y)) - b1 * 2;
			si1 = 1 - 1 / (1 + pow(2, -d1 * 100));

			d2 = sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)) - b1 * 2;
			si2 = 1 - 1 / (1 + pow(2, -d2 * 100));

			si3 = -pow(q5, 3) * 100;

			dx = (si1 * sin(y1 - y) * m1 * d1 - si2 * sin(y2 - y) * m1 * d2 + si3
					* cos(dir) * t1) * 2;
			dy = (-si1 * sin(x1 - x) * m1 * d1 + si2 * sin(x2 - x) * m1 * d2 - si3
					* sin(dir) * t1) * 2;

			m = 1 - si1 - si2;

			d = sqrt((x - 0.5) * (x - 0.5) + (y - 0.5) * (y - 0.5)) * rad;
			n = 80;

			t = q3 * 3 * 0 + time * 0;

			w = dir + asin(1) / 2;

			// x = x - xx;
			// y = y - yy;
			v = 0.1 * q3;
			X2 = x - 0.5;
			Y2 = y - 0.5;
			X1 = sin(w) * X2 - cos(w) * Y2;
			Y1 = cos(w) * X2 + sin(w) * Y2;
			x = X1;
			y = Y1;
			dx1 = 0.01 * (cos((-x + y) * n + t) + sin((x + y) * n + t));// *bass;
			dy1 = 0.01 * (cos((x - y) * n - t) + sin((-x - y) * n - t));// *bass;
			dx2 = sin(-w) * dx1 - cos(-w) * dy1;
			dy2 = cos(-w) * dx1 + sin(-w) * dy1;
			dx = dx + v * dx2 * m;
			dy = dy + v * dy2 * m;
		}
	},
	init_code : function(_) {
		with (_) {
			x1 = 0.9;
			y1 = 0.5;

			x2 = 0.5;
			y2 = 0.5;
			x3 = 0.5;
			y3 = 0.5;
			x4 = 0.5;
			y4 = 0.5;
		}
	},
	per_frame_code : function(_) {
		with (_) {
			decay = 1;
			xx1 = xx1 * 0.9 + (bass) * 0.01;
			xx2 = xx2 * 0.9 + (treb) * 0.01;
			yy1 = yy1 * 0.94 + (treb + bass) * 0.0075;

			x1 = 0.5 + xx1 - xx2;
			y1 = 0.5 + yy1;

			// x2 = 0;y2 = 0;x3 = 0;y3 = 0;x4 = 0;y4 = 0;

			spring = 28;
			grav = 2;
			resist = 0.2;
			bounce = 0.94;
			dt = 0.0001;

			vx2 = vx2 * (1 - resist * dt) + dt * ((x1 + x3 - 2 * x2) * spring);
			vy2 = vy2 * (1 - resist * dt) + dt
					* ((y1 + y3 - 2 * y2) * spring - grav);
			vx3 = vx3 * (1 - resist * dt) + dt * ((x2 + x4 - 2 * x3) * spring);
			vy3 = vy3 * (1 - resist * dt) + dt
					* ((y2 + y4 - 2 * y3) * spring - grav);
			vx4 = vx4 * (1 - resist * dt) + dt * ((x3 - x4) * spring);
			vy4 = vy4 * (1 - resist * dt) + dt * ((y3 - y4) * spring - grav);

			x2 = x2 + vx2;
			y2 = y2 + vy2;
			x3 = x3 + vx3;
			y3 = y3 + vy3;
			x4 = x4 + vx4;
			y4 = y4 + vy4;

			vx2 = ifcond(above(x2, 0), vx2, abs(vx2) * bounce);
			vx2 = ifcond(below(x2, 1), vx2, -abs(vx2) * bounce);
			vx3 = ifcond(above(x3, 0), vx3, abs(vx3) * bounce);
			vx3 = ifcond(below(x3, 1), vx3, -abs(vx3) * bounce);
			vx4 = ifcond(above(x4, 0), vx4, abs(vx4) * bounce);
			vx4 = ifcond(below(x4, 1), vx4, -abs(vx4) * bounce);

			vy2 = ifcond(above(y2, 0), vy2, abs(vy2) * bounce);
			vy2 = ifcond(below(y2, 1), vy2, -abs(vy2) * bounce);
			vy3 = ifcond(above(y3, 0), vy3, abs(vy3) * bounce);
			vy3 = ifcond(below(y3, 1), vy3, -abs(vy3) * bounce);
			vy4 = ifcond(above(y4, 0), vy4, abs(vy4) * bounce);
			vy4 = ifcond(below(y4, 1), vy4, -abs(vy4) * bounce);
			q4 = x4;

			q8 = y4;

			zoom = 1;
			bb = bb * 0.99 + bass * 0.02;
			mm = mm * 0.99 + mid * 0.02;
			tt = tt * 0.99 + treb * 0.02;

			mx = max(max(bb, mm), tt);
			mn = min(min(bb, mm), tt);

			ob_r = (bb - mn) / (mx - mn);
			ob_b = (mm - mn) / (mx - mn);
			ob_g = (tt - mn) / (mx - mn);
			q6 = atan2(vx4, vy4);
			q5 = sqrt(vx4 * vx4 + vy4 * vy4);

			a = a * 0.95 + q5;

			s = s * 0.9 + a;
			q3 = s * 0.1;
			monitor = s;

		}
	},
	shapes : [ {
		enabled : 0,
		sides : 100,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 1,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 1,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.770000,
		y : 0.790000,
		rad : 0.310907,
		ang : 4.272565,
		tex_ang : 0.125664,
		tex_zoom : 1.518785,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 0.959999,
		r2 : 1.000000,
		g2 : 1.000000,
		b2 : 1.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
		init_code : function(_) {
			with (_) {
				vx = 0
			}
		},
	}, {
		enabled : 0,
		sides : 100,
		additive : 1,
		bDrawBack : 0,
		thickOutline : 1,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.750000,
		rad : 0.042077,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 0.734576,
		r : 1.000000,
		g : 1.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 0.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
		init_code : function(_) {
			with (_) {
				vx = 0
			}
		},
		per_frame_code : function(_) {
			with (_) {
				x = q3;
				y = q7;
			}
		},
	}, {
		enabled : 0,
		sides : 100,
		additive : 1,
		bDrawBack : 0,
		thickOutline : 1,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.750000,
		rad : 0.042077,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 0.734576,
		r : 1.000000,
		g : 1.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 0.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
		init_code : function(_) {
			with (_) {
				vx = 0
			}
		},
		per_frame_code : function(_) {
			with (_) {
				x = q2;
				y = q6;
			}
		},
	}, {
		enabled : 0,
		sides : 100,
		additive : 1,
		bDrawBack : 0,
		thickOutline : 1,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.750000,
		rad : 0.070592,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 0.734576,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 0.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
		init_code : function(_) {
			with (_) {
				vx = 0
			}
		},
		per_frame_code : function(_) {
			with (_) {
				x = q1;
				y = q5;
			}
		},
	}, {
		enabled : 0,
		sides : 4,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 0,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, ],
	waves : [
			{
				enabled : 0,
				samples : 512,
				sep : 0,
				bSpectrum : 0,
				bUseDots : 1,
				bDrawThick : 0,
				bDrawBack : 0,
				bAdditive : 0,
				scaling : 2.444150,
				smoothing : 0.000000,
				r : 1.000000,
				g : 1.000000,
				b : 1.000000,
				a : 0.000000,
				per_point_code : function(_) {
					with (_) {
						xx = ((sample * 0983624912364) % 10000000 + 100) / 10000000;
						yy = ((xx * 1896575575) % 10000000 + 100) / 10000000;
						zz = ((yy * 58652340875) % 10000000 + 100) / 10000000;

						d = sqrt(sqr(xx) + sqr(yy) + sqr(zz));

						zz = zz + t8 - ifcond(above(zz + t8, 1), 1, 0) - 0.5;
						xx = xx + t7 - ifcond(above(xx + t7, 1), 1, 0) - 0.5;
						yy = yy + t6 - ifcond(above(yy + t6, 1), 1, 0) - 0.5;

						v = 0.001;

						w = 1;// (sample*sin(time*0.3)*0.01-1);
						bb = d * d * 0.5;
						n = 0.3;
						s1 = sin(sin(t2 * w + bb) * n);
						s2 = sin(sin(t3 * w + bb) * n);
						s3 = sin(sin(t4 * w + bb) * n);
						c1 = cos(sin(t2 * w + bb) * n);
						c2 = cos(sin(t3 * w + bb) * n);
						c3 = cos(sin(t4 * w + bb) * n);

						z = (c3 * s1 * c2 + s3 * s2) * xx
								- (c3 * s1 * s2 - s3 * c2) * yy + c3 * c1 * zz;
						x1 = (c1 * c2 * xx + c1 * s2 * yy - s1 * zz);
						y1 = ((s3 * s1 * c2 - c3 * s2) * xx
								+ (s3 * s1 * s2 + c3 * c2) * yy + s3 * c1 * zz);

						zoom = .5 * (1 / (z + 0.5));
						x = 0.5 + zoom * x1 + sin(time * 0.1) * 0.;
						;
						y = 0.5 + zoom * y1 + cos(time * 0.16801) * 0.;

						pi3 = 3.1415 * 2 * 0.3333;
						t = z * 2 + t2 * 1;
						c = 3;
						// r = sin(t)*c;

						// g = sin(t+pi3)*c;

						// b = sin(t-pi3)*c;

						r = ifcond(above(r, 1), 1, r);
						r = ifcond(below(r, 0), 0, r);
						g = ifcond(above(g, 1), 1, g);
						g = ifcond(below(g, 0), 0, g);
						b = ifcond(above(b, 1), 1, b);
						b = ifcond(below(b, 0), 0, b);

						a = 0.4;
					}
				},
				init_code : function(_) {
					with (_) {
						t2 = 0;
						t3 = 0;
						t4 = 0;
						cl = 0;
					}
				},
				per_frame_code : function(_) {
					with (_) {
						t1 = 0;
						v = 0.01;
						j = j + (bass) * 0.01;
						j2 = j2 + (mid_att) * 0.01;
						j3 = j3 + (treb_att) * 0.01;
						t2 = j;
						t3 = j2;
						t4 = j3;
						// t5 = 0;
						k = k * 0.99 + 10 * mid / fps;
						t5 = -k;

						cl1 = cl1 + 0.002;
						cl1 = ifcond(above(cl1, 1), 0, cl1);
						cl1 = ifcond(below(cl1, 0), 1, cl1);
						t8 = cl1;

						cl2 = cl2 - 1 * q1;
						cl2 = ifcond(above(cl2, 1), 0, cl2);
						cl2 = ifcond(below(cl2, 0), 1, cl2);
						t7 = cl2;

						cl3 = cl3 + 0.001;
						cl3 = ifcond(above(cl3, 1), 0, cl3);
						cl3 = ifcond(below(cl3, 0), 1, cl3);
						t6 = cl3;
					}
				},
			},
			{
				enabled : 0,
				samples : 512,
				sep : 0,
				bSpectrum : 0,
				bUseDots : 0,
				bDrawThick : 0,
				bDrawBack : 0,
				bAdditive : 0,
				scaling : 2.444150,
				smoothing : 0.000000,
				r : 1.000000,
				g : 1.000000,
				b : 1.000000,
				a : 1.000000,
				per_point_code : function(_) {
					with (_) {
						t8 = -t8;
						y = sample * 0.05;
						x = 0.5 + t8 * 0.005;

						pi3 = 3.1415 * 2 * 0.3333;
						t = (q4 - q6) * 10;
						c = 2;
						r = sin(t) * c;
						g = sin(t + pi3) * c;

						b = sin(t - pi3) * c;

						r = ifcond(above(r, 1), 1, r);
						r = ifcond(below(r, 0), 0, r);
						g = ifcond(above(g, 1), 1, g);
						g = ifcond(below(g, 0), 0, g);
						b = ifcond(above(b, 1), 1, b);
						b = ifcond(below(b, 0), 0, b);

					}
				},
				init_code : function(_) {
					with (_) {
						t2 = 0;
						t3 = 0;
						t4 = 0;
						cl = 0;
					}
				},
				per_frame_code : function(_) {
					with (_) {
						t8 = 1;
					}
				},
			},
			{
				enabled : 0,
				samples : 512,
				sep : 0,
				bSpectrum : 0,
				bUseDots : 0,
				bDrawThick : 1,
				bDrawBack : 0,
				bAdditive : 1,
				scaling : 100.000000,
				smoothing : 0.600000,
				r : 0.000000,
				g : 0.400001,
				b : 1.000000,
				a : 0.300001,
				per_point_code : function(_) {
					with (_) {
						sample = 1 - sample;
						xxx = xx;
						yyy = yy;
						xx = pow(sample, 5) * t1 + 5 * pow(sample, 4)
								* (1 - sample) * t1 + 10 * pow(sample, 3)
								* sqr(1 - sample) * t2 + 10 * sqr(sample)
								* pow(1 - sample, 3) * t3 + 5
								* pow(1 - sample, 4) * sample * t4
								+ pow(1 - sample, 5) * t4;

						yy = pow(sample, 5) * t5 + 5 * pow(sample, 4)
								* (1 - sample) * t5 + 10 * pow(sample, 3)
								* sqr(1 - sample) * t6 + 10 * sqr(sample)
								* pow(1 - sample, 3) * t7 + 5
								* pow(1 - sample, 4) * sample * t8
								+ pow(1 - sample, 5) * t8;
						d = 1 / sqrt(sqr(xx - xxx) + sqr(yy - yyy));
						x = xx + sample * (1 - sample) * (value1 - value2)
								* (yy - yyy) * d;
						y = yy - sample * (1 - sample) * (value1 - value2)
								* (xx - xxx) * d;
					}
				},
				per_frame_code : function(_) {
					with (_) {
						t1 = q1;
						t2 = q2;
						t3 = q3;
						t4 = q4;
						t5 = q5;
						t6 = q6;
						t7 = q7;
						t8 = q8;
					}
				},
			}, {
				enabled : 0,
				samples : 512,
				sep : 0,
				bSpectrum : 0,
				bUseDots : 1,
				bDrawThick : 0,
				bDrawBack : 0,
				bAdditive : 0,
				scaling : 2.444150,
				smoothing : 0.000000,
				r : 0.000000,
				g : 0.000000,
				b : 1.000000,
				a : 1.000000,
				per_point_code : function(_) {
					with (_) {
						t8 = -t8;
						y = (1 + t8) * 0.01;
						x = sample;
					}
				},
				init_code : function(_) {
					with (_) {
						t2 = 0;
						t3 = 0;
						t4 = 0;
						cl = 0;
					}
				},
				per_frame_code : function(_) {
					with (_) {
						t8 = 1;
					}
				},
			}, {
				enabled : 0,
				samples : 512,
				sep : 0,
				bSpectrum : 0,
				bUseDots : 0,
				bDrawThick : 0,
				bDrawBack : 0,
				bAdditive : 0,
				scaling : 1.000000,
				smoothing : 0.500000,
				r : 1.000000,
				g : 1.000000,
				b : 1.000000,
				a : 1.000000,
			}, ],
};

Presets["bdrv - generally weird [flexis 'pain in the spine' color edit].milk"] = {
	fRating : 0.0,
	fGammaAdj : 1.0,
	fDecay : 1.0,
	fVideoEchoZoom : 0.999823,
	fVideoEchoAlpha : 0.0,
	nVideoEchoOrientation : 0,
	nEchoWrap_x : 0,
	nEchoWrap_y : 0,
	nWaveMode : 7,
	bAdditiveWaves : 0,
	bWaveDots : 0,
	bWaveThick : 1,
	bModWaveAlphaByVolume : 0,
	bMaximizeWaveColor : 0,
	bTexWrap : 0,
	nWrapMode_x : 1,
	nWrapMode_y : 1,
	bDarkenCenter : 0,
	bRedBlueStereo : 0,
	bBrighten : 0,
	bDarken : 0,
	bSolarize : 0,
	bInvert : 0,
	fWaveAlpha : 0.001,
	fWaveScale : 0.01,
	fWaveSmoothing : 0.9,
	fWaveParam : 1.0,
	fModWaveAlphaStart : 0.5,
	fModWaveAlphaEnd : 1.0,
	fWarpAnimSpeed : 0.01,
	fWarpScale : 1.766487,
	fZoomExponent : 1.000158,
	fShader : 0.0,
	zoom : 1.0,
	rot : 0.0,
	cx : 0.5,
	cy : 0.5,
	dx : 1e-05,
	dy : 1e-05,
	warp : 0.01,
	sx : 1.0,
	sy : 1.0,
	wave_r : 0.5,
	wave_g : 0.5,
	wave_b : 0.5,
	wave_x : 0.5,
	wave_y : 0.6,
	ob_size : 0.005,
	ob_r : 0.0,
	ob_g : 0.0,
	ob_b : 0.0,
	ob_a : 1.0,
	ib_size : 0.005,
	ib_r : 0.0,
	ib_g : 0.0,
	ib_b : 0.0,
	ib_a : 0.1,
	nMotionVectorsX : 64.0,
	nMotionVectorsY : 48.0,
	mv_dx : 0.0,
	mv_dy : 0.0,
	mv_l : 1.5,
	mv_r : 0.0,
	mv_g : 0.0,
	mv_b : 0.0,
	mv_a : 0.0,
	per_pixel_code : function(_) {
		with (_) {
			ci = (1 - abs(-2 * x + 1) * 1.33);
			cj = (1 - abs(-2 * y + 1));

			grid = sin(ci * 25.9);
			grj = (cj * 13) % 2;
			// zoom=.998-grid/39;//q8*.07*cos(rad*3.14*q3+abs(rad-.1*q6)*q2+rad*3.14*sin(time*q1)+q7)*bnot(grid);
			dy = grid / 222;
			sx = 1 - grj / 88
		}
	},
	per_frame_code : function(_) {
		with (_) {
			bb = bb * 0.99 + bass * 0.02;
			mm = mm * 0.99 + mid * 0.02;
			tt = tt * 0.99 + treb * 0.02;

			mx = max(max(bb, mm), tt);
			mn = min(min(bb, mm), tt);

			ob_r = (bb - mn) / (mx - mn);
			ob_b = (mm - mn) / (mx - mn);
			ob_g = (tt - mn) / (mx - mn);
		}
	},
	shapes : [ {
		enabled : 1,
		sides : 4,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 0,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 1,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 1.800000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 1,
		sides : 4,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 0,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 1,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 1.800000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 1,
		sides : 4,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 0,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 1,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 1.800000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 0,
		sides : 4,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 0,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 0,
		sides : 4,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 0,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, ],
	waves : [ {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bDrawBack : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bDrawBack : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bDrawBack : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bDrawBack : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bDrawBack : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, ],
};

Presets["bdrv - profoundly melting [flexis colorfade inserted].milk"] = {
	fRating : 0.0,
	fGammaAdj : 1.0,
	fDecay : 1.0,
	fVideoEchoZoom : 0.999823,
	fVideoEchoAlpha : 0.0,
	nVideoEchoOrientation : 0,
	nEchoWrap_x : 0,
	nEchoWrap_y : 0,
	nWaveMode : 7,
	bAdditiveWaves : 0,
	bWaveDots : 0,
	bWaveThick : 1,
	bModWaveAlphaByVolume : 0,
	bMaximizeWaveColor : 0,
	bTexWrap : 0,
	nWrapMode_x : 1,
	nWrapMode_y : 1,
	bDarkenCenter : 0,
	bRedBlueStereo : 0,
	bBrighten : 0,
	bDarken : 0,
	bSolarize : 0,
	bInvert : 0,
	fWaveAlpha : 0.001,
	fWaveScale : 0.01,
	fWaveSmoothing : 0.9,
	fWaveParam : 1.0,
	fModWaveAlphaStart : 0.5,
	fModWaveAlphaEnd : 1.0,
	fWarpAnimSpeed : 0.01,
	fWarpScale : 1.766487,
	fZoomExponent : 1.000158,
	fShader : 0.0,
	zoom : 1.0,
	rot : 0.0,
	cx : 0.5,
	cy : 0.5,
	dx : 1e-05,
	dy : 1e-05,
	warp : 0.01,
	sx : 1.0,
	sy : 1.0,
	wave_r : 0.5,
	wave_g : 0.5,
	wave_b : 0.5,
	wave_x : 0.5,
	wave_y : 0.6,
	ob_size : 0.005,
	ob_r : 0.0,
	ob_g : 0.0,
	ob_b : 0.0,
	ob_a : 1.0,
	ib_size : 0.005,
	ib_r : 0.0,
	ib_g : 0.0,
	ib_b : 0.0,
	ib_a : 0.1,
	nMotionVectorsX : 64.0,
	nMotionVectorsY : 48.0,
	mv_dx : 0.0,
	mv_dy : 0.0,
	mv_l : 1.5,
	mv_r : 0.0,
	mv_g : 0.0,
	mv_b : 0.0,
	mv_a : 0.0,
	per_pixel_code : function(_) {
		with (_) {
			ci = (1 - abs(-2 * x + 1) * 1.33);
			cj = (1 - abs(-2 * y + 1));

			grid = sin(ci * 25.9);
			grj = (cj * 13) % 2;
			// zoom=.998-grid/39;//q8*.07*cos(rad*3.14*q3+abs(rad-.1*q6)*q2+rad*3.14*sin(time*q1)+q7)*bnot(grid);
			dy = grid / 222;
			dx = grj / 99;
			dkdx = dx;// ////////////////////////////////////////
			dkdy = dy;
			dksx = sx;
			dksy = sy;
			dkrt = rot;
			dkzm = zoom;
			dkcx = cx;
			dkcy = cy;
			dkwp = warp;

			dx = 0;
			dy = 0;
			sx = 1;
			sy = 1;
			rot = 0;
			zoom = 1;
			cx = .5;
			cy = .5;
			warp = 0;// ///////////////////////////////////////////////////

			ci = (1 - abs(-1 * x + 1) * 1.33 * 2 + (1 - abs(-2 * y + 1)))
					- time / 3;

			grid = sin(ci * 29);// +(cj*13)%2;
			dy = grid / 39;// q8*.07*cos(rad*3.14*q3+abs(rad-.1*q6)*q2+rad*3.14*sin(time*q1)+q7)*bnot(grid);
			// /////////////////////////////////////
			cr1 = 50 * .01;
			cr2 = 50 * .01;
			crx = cr2 - cr1;
			ci = rad;
			cb = .25;
			crs = 2;
			cr = pow(sin(ci * 6.3 - (cb * 6.3)) / 2 + .5, crs) * crx + cr1;
			cqr = ifcond(above(ci, .25 + cb), cr, crx + cr1);
			crr = ifcond(below(ci, 1.5), cqr, crx + cr1);
			jx1 = crr;
			kx1 = 1 - crr;

			djdx = dx;
			djdy = dy;
			djsx = sx;
			djsy = sy;
			djrt = rot;
			djzm = zoom;
			djcx = cx;
			djcy = cy;
			djwp = warp;

			dx = (jx1 * djdx + kx1 * dkdx);
			dy = (jx1 * djdy + kx1 * dkdy);
			sx = (jx1 * djsx + kx1 * dksx);
			sy = (jx1 * djsy + kx1 * dksy);
			rot = (jx1 * djrt + kx1 * dkrt);
			zoom = (jx1 * djzm + kx1 * dkzm);
			cx = (jx1 * djcx + kx1 * dkcx);
			cy = (jx1 * djcy + kx1 * dkcy);
			warp = (jx1 * djwp + kx1 * dkwp);// //////////////////////////////////////////////////
		}
	},
	per_frame_code : function(_) {
		with (_) {
			bb = bb * 0.99 + bass * 0.02;
			mm = mm * 0.99 + mid * 0.02;
			tt = tt * 0.99 + treb * 0.02;

			mx = max(max(bb, mm), tt);
			mn = min(min(bb, mm), tt);

			ob_r = (bb - mn) / (mx - mn);
			ob_b = (mm - mn) / (mx - mn);
			ob_g = (tt - mn) / (mx - mn);
		}
	},
	shapes : [ {
		enabled : 1,
		sides : 4,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 0,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 1,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 1.800000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 1,
		sides : 4,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 0,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 1,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 1.800000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 1,
		sides : 4,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 0,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 1,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 1.800000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 0,
		sides : 4,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 0,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 0,
		sides : 4,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 0,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, ],
	waves : [ {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bDrawBack : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bDrawBack : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bDrawBack : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bDrawBack : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bDrawBack : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, ],
};

Presets["bdrv - monster wave [flexis color bleeding ivories].milk"] = {
	fRating : 0.0,
	fGammaAdj : 1.0,
	fDecay : 1.0,
	fVideoEchoZoom : 0.999823,
	fVideoEchoAlpha : 0.0,
	nVideoEchoOrientation : 0,
	nEchoWrap_x : 0,
	nEchoWrap_y : 0,
	nWaveMode : 7,
	bAdditiveWaves : 0,
	bWaveDots : 0,
	bWaveThick : 1,
	bModWaveAlphaByVolume : 0,
	bMaximizeWaveColor : 0,
	bTexWrap : 0,
	nWrapMode_x : 1,
	nWrapMode_y : 1,
	bDarkenCenter : 0,
	bRedBlueStereo : 0,
	bBrighten : 0,
	bDarken : 0,
	bSolarize : 0,
	bInvert : 0,
	fWaveAlpha : 0.001,
	fWaveScale : 0.01,
	fWaveSmoothing : 0.9,
	fWaveParam : 1.0,
	fModWaveAlphaStart : 0.5,
	fModWaveAlphaEnd : 1.0,
	fWarpAnimSpeed : 0.01,
	fWarpScale : 1.766487,
	fZoomExponent : 1.000158,
	fShader : 0.0,
	zoom : 1.0,
	rot : 0.0,
	cx : 0.5,
	cy : 0.5,
	dx : 1e-05,
	dy : 1e-05,
	warp : 0.01,
	sx : 1.0,
	sy : 1.0,
	wave_r : 0.5,
	wave_g : 0.5,
	wave_b : 0.5,
	wave_x : 0.5,
	wave_y : 0.6,
	ob_size : 0.005,
	ob_r : 0.0,
	ob_g : 0.0,
	ob_b : 0.0,
	ob_a : 1.0,
	ib_size : 0.005,
	ib_r : 0.0,
	ib_g : 0.0,
	ib_b : 0.0,
	ib_a : 0.1,
	nMotionVectorsX : 64.0,
	nMotionVectorsY : 48.0,
	mv_dx : 0.0,
	mv_dy : 0.0,
	mv_l : 1.5,
	mv_r : 0.0,
	mv_g : 0.0,
	mv_b : 0.0,
	mv_a : 0.0,
	per_pixel_code : function(_) {
		with (_) {
			ci = (1 - abs(-2 * x + 1) * 1.33);
			cj = (1 - abs(-2 * y + 1));

			grid = sin(ci * 25.9);// +(cj*13)%2;
			// zoom=.998-grid/39;//q8*.07*cos(rad*3.14*q3+abs(rad-.1*q6)*q2+rad*3.14*sin(time*q1)+q7)*bnot(grid);
			dy = grid / 222;
			dkdx = dx;// ////////////////////////////////////////
			dkdy = dy;
			dksx = sx;
			dksy = sy;
			dkrt = rot;
			dkzm = zoom;
			dkcx = cx;
			dkcy = cy;
			dkwp = warp;

			dx = 0;
			dy = 0;
			sx = 1;
			sy = 1;
			rot = 0;
			zoom = 1;
			cx = .5;
			cy = .5;
			warp = 0;// ///////////////////////////////////////////////////

			ci = (1 - abs(-2 * x + 1) * 1.33 + (1 - abs(-2 * y + 1))) - time
					/ 3;

			grid = sin(ci * 29);// +(cj*13)%2;
			dy = grid / 39;// q8*.07*cos(rad*3.14*q3+abs(rad-.1*q6)*q2+rad*3.14*sin(time*q1)+q7)*bnot(grid);
			// /////////////////////////////////////
			cr1 = 90 * .01;
			cr2 = 20 * .01;
			crx = cr2 - cr1;
			ci = rad;
			cb = .25;
			crs = 2;
			cr = pow(sin(ci * 6.3 - (cb * 6.3)) / 2 + .5, crs) * crx + cr1;
			cqr = ifcond(above(ci, .25 + cb), cr, crx + cr1);
			crr = ifcond(below(ci, 1.5), cqr, crx + cr1);
			jx1 = crr;
			kx1 = 1 - crr;

			djdx = dx;
			djdy = dy;
			djsx = sx;
			djsy = sy;
			djrt = rot;
			djzm = zoom;
			djcx = cx;
			djcy = cy;
			djwp = warp;

			dx = (jx1 * djdx + kx1 * dkdx);
			dy = (jx1 * djdy + kx1 * dkdy);
			sx = (jx1 * djsx + kx1 * dksx);
			sy = (jx1 * djsy + kx1 * dksy);
			rot = (jx1 * djrt + kx1 * dkrt);
			zoom = (jx1 * djzm + kx1 * dkzm);
			cx = (jx1 * djcx + kx1 * dkcx);
			cy = (jx1 * djcy + kx1 * dkcy);
			warp = (jx1 * djwp + kx1 * dkwp);// //////////////////////////////////////////////////

		}
	},
	per_frame_code : function(_) {
		with (_) {
			bb = bb * 0.99 + bass * 0.02;
			mm = mm * 0.99 + mid * 0.02;
			tt = tt * 0.99 + treb * 0.02;

			mx = max(max(bb, mm), tt);
			mn = min(min(bb, mm), tt);

			ob_r = (bb - mn) / (mx - mn);
			ob_b = (mm - mn) / (mx - mn);
			ob_g = (tt - mn) / (mx - mn);
		}
	},
	shapes : [ {
		enabled : 1,
		sides : 4,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 0,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 1,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 1.800000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 1,
		sides : 4,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 0,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 1,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 1.800000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 1,
		sides : 4,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 0,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 1,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 1.800000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 0,
		sides : 4,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 0,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 0,
		sides : 4,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 0,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, ],
	waves : [ {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bDrawBack : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bDrawBack : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bDrawBack : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bDrawBack : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bDrawBack : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, ],
};

Presets["Flexi - a stream of consciousness. rainbow dreamscape.milk"] = {
	fRating : 5.0,
	fGammaAdj : 1.0,
	fDecay : 1.0,
	fVideoEchoZoom : 1.0,
	fVideoEchoAlpha : 0.5,
	nVideoEchoOrientation : 0,
	nWaveMode : 0,
	bAdditiveWaves : 0,
	bWaveDots : 0,
	bWaveThick : 1,
	bModWaveAlphaByVolume : 0,
	bMaximizeWaveColor : 1,
	bTexWrap : 1,
	bDarkenCenter : 0,
	bRedBlueStereo : 0,
	bBrighten : 1,
	bDarken : 1,
	bSolarize : 0,
	bInvert : 1,
	fWaveAlpha : 25.319803,
	fWaveScale : 0.01,
	fWaveSmoothing : 0.0,
	fWaveParam : -0.54,
	fModWaveAlphaStart : 0.0,
	fModWaveAlphaEnd : 0.0,
	fWarpAnimSpeed : 0.55,
	fWarpScale : 100.0,
	fZoomExponent : 1.002619,
	fShader : 1.0,
	zoom : 0.999708,
	rot : 0.0,
	cx : 0.0,
	cy : 0.0,
	dx : 0.0,
	dy : 0.0,
	warp : 0.0,
	sx : 1.0,
	sy : 1.0,
	wave_r : 1.0,
	wave_g : 1.0,
	wave_b : 0.0,
	wave_x : 0.5,
	wave_y : 0.5,
	ob_size : 0.5,
	ob_r : 0.0,
	ob_g : 0.0,
	ob_b : 0.0,
	ob_a : 0.0,
	ib_size : 0.5,
	ib_r : 0.0,
	ib_g : 0.0,
	ib_b : 0.0,
	ib_a : 0.0,
	nMotionVectorsX : 10.879999,
	nMotionVectorsY : 11.52,
	mv_dx : 0.0,
	mv_dy : 0.0,
	mv_l : 5.0,
	mv_r : 0.0,
	mv_g : 1.0,
	mv_b : 0.0,
	mv_a : 0.0,
	per_pixel_code : function(_) {
		with (_) {
			x1 = q1;
			y1 = q3;
			x2 = q2;
			y2 = q4;

			d = sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
			d1 = sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - y));
			d2 = sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y));
			d3 = sqrt(pow((x1 + x2) / 2 - x, 2) + pow((y1 + y2) / 2, 2));// *(x2-x)
			// +
			// (y2-y)*(y2-y));

			d3 = d3;// -d1-d2+0;//bass*bass*bass*0.01;
			s = 100;
			c = 10;// +bass*bass;
			scale = 0.00004;// *(bass+2);

			sigmoide = 3 / (1 + pow(2, -c * d3)) - 1;
			peek = pow((cos(atan(s * d3) * pi / 2) + 1) * 20, 2);
			dd = scale * peek * sigmoide;

			o = 1;// -(d1+d2)/2;//-0.3*(1+bass*2);
			dx = dd * sin(y - y1) * (o + d2) - dd * sin(y - y2) * (o + d1);// ((x1+x2)-2*x);
			dy = -dd * sin(x - x1) * (o + d2) + dd * sin(x - x2) * (o + d1);// ((y1+y2)-2*y);
		}
	},
	per_frame_code : function(_) {
		with (_) {
			v = 1;// +sin(time*0.001)*0.5;
			monitor = v;
			x1 = 0.5 + sin(v * time * 0.8513) * 0.0512;
			y1 = 0.5 + cos(v * time * 0.5524) * 0.0512;
			x2 = 0.5 + sin(v * time * 0.6527) * 0.0512;
			y2 = 0.5 + cos(v * time * 0.9512) * 0.0512;

			wave_x = 0.5 + ((x1 + x2) / 2 - 0.5) * 3;// ifcond(equal(frame %
			// 3,2)-1,ifcond(equal(frame%3,1),
			// (x1+3*x2)/4,
			// (3*x1+x2)/4),
			// (x1+x2)/2);
			wave_y = 0.5 + (1 - (y1 + y2) / 2 - 0.5) * 3;// ifcond(equal(frame
			// %
			// 3,2)-1,ifcond(equal(frame%3,1),
			// (y1+3*y2)/4,
			// (3*y1+y2)/4),
			// (y1+y2)/2);

			d = sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
			d1 = sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - y));
			d2 = sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y));
			d3 = sqrt(pow((x1 + x2) / 2 - x, 2) + pow((y1 + y2) / 2, 2));// *(x2-x)
			// +
			// (y2-y)*(y2-y));

			wave_mystery = -0.51 + d * 0.33 + pow(mid * treb * bass, 1) * 0.001;

			ra = 2 * 3.1415;
			t = time * 5;

			r = sin(t) * 4;// *1.4142;
			r = ifcond(above(r, 1), 1, r);
			r = ifcond(below(r, 0), 0, r);
			r = r;

			g = sin(t + 2 * ra / 3) * 4;// *1.4142;
			g = ifcond(above(g, 1), 1, g);
			g = ifcond(below(g, 0), 0, g);
			g = g;

			b = sin(t - 2 * ra / 3) * 4;
			b = ifcond(above(b, 1), 1, b);
			b = ifcond(below(b, 0), 0, b);
			b = b;

			wave_r = r;
			wave_g = g;
			wave_b = b;

			q1 = x1;
			q2 = x2;
			q3 = y1;
			q4 = y2;
		}
	},
	shapes : [ {
		enabled : 0,
		sides : 99,
		additive : 0,
		thickOutline : 0,
		textured : 1,
		x : 1.000000,
		y : 0.630000,
		rad : 1.300000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 0.763000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 0.970000,
		r2 : 1.000000,
		g2 : 1.000000,
		b2 : 1.000000,
		a2 : 0.000000,
		border_r : 0.000000,
		border_g : 0.000000,
		border_b : 0.000000,
		border_a : 0.000000,
	}, {
		enabled : 0,
		sides : 100,
		additive : 0,
		thickOutline : 0,
		textured : 1,
		x : 0.500000,
		y : 0.550000,
		rad : 0.225000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 0.970000,
		r2 : 1.000000,
		g2 : 1.000000,
		b2 : 1.000000,
		a2 : 1.000000,
		border_r : 0.000000,
		border_g : 0.000000,
		border_b : 0.000000,
		border_a : 0.000000,
	}, {
		enabled : 0,
		sides : 100,
		additive : 0,
		thickOutline : 0,
		textured : 1,
		x : 0.850000,
		y : 0.000000,
		rad : 1.300000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 2.068000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 0.970000,
		r2 : 1.000000,
		g2 : 1.000000,
		b2 : 1.000000,
		a2 : 0.970000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
	}, {
		enabled : 0,
		sides : 3,
		additive : 0,
		thickOutline : 0,
		textured : 1,
		x : 0.020000,
		y : 0.500000,
		rad : 0.733000,
		ang : 1.319000,
		tex_ang : 0.000000,
		tex_zoom : 100.000000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 0.970000,
		r2 : 1.000000,
		g2 : 1.000000,
		b2 : 1.000000,
		a2 : 0.970000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
	}, ],
	waves : [
			{
				enabled : 0,
				samples : 512,
				sep : 256,
				bSpectrum : 0,
				bUseDots : 0,
				bDrawThick : 1,
				bAdditive : 0,
				scaling : 100.000000,
				smoothing : 1.000000,
				r : 0.000000,
				g : 0.000000,
				b : 0.000000,
				a : 0.100000,
				per_point_code : function(_) {
					with (_) {
						ra = 2 * 3.1415;
						s = sample * ra;
						t = time * 2;
						c = 6;

						r = sin(s * c + t) * 6;
						r = ifcond(above(r, 1), 1, r);
						r = ifcond(below(r, 0), 0, r);
						r = r;

						g = sin(s * c + t + 2 * ra / 3) * 6;
						g = ifcond(above(g, 1), 1, g);
						g = ifcond(below(g, 0), 0, g);
						g = g;

						b = sin(s * c + t - 2 * ra / 3) * 6;
						b = ifcond(above(b, 1), 1, b);
						b = ifcond(below(b, 0), 0, b);
						b = b;

						x = 0.5 + 0.44 * sin(s + sin(time / 2) * 2) + 0.05
								* sin(s * 10) * (1 + value1 * 2);
						y = 0.5 + 0.44 * cos(s + sin(time / 2) * 2) + 0.05
								* cos(s * 10) * (1 + value1 * 2);
					}
				},
			}, {
				enabled : 0,
				samples : 512,
				sep : 20,
				bSpectrum : 0,
				bUseDots : 0,
				bDrawThick : 0,
				bAdditive : 0,
				scaling : 0.070000,
				smoothing : 0.650000,
				r : 1.000000,
				g : 1.000000,
				b : 1.000000,
				a : 1.000000,
			}, {
				enabled : 0,
				samples : 512,
				sep : 30,
				bSpectrum : 0,
				bUseDots : 0,
				bDrawThick : 0,
				bAdditive : 0,
				scaling : 0.070000,
				smoothing : 0.500000,
				r : 0.300000,
				g : 0.300000,
				b : 0.300000,
				a : 1.000000,
			}, {
				enabled : 0,
				samples : 512,
				sep : 60,
				bSpectrum : 0,
				bUseDots : 0,
				bDrawThick : 0,
				bAdditive : 0,
				scaling : 1.000000,
				smoothing : 0.500000,
				r : 0.000000,
				g : 0.000000,
				b : 0.000000,
				a : 1.000000,
			}, ],
};

Presets["Flexi - bad trip.milk"] = {
	fRating : 5.0,
	fGammaAdj : 1.0,
	fDecay : 1.0,
	fVideoEchoZoom : 1.050795,
	fVideoEchoAlpha : 0.5,
	nVideoEchoOrientation : 0,
	nWaveMode : 4,
	bAdditiveWaves : 0,
	bWaveDots : 0,
	bWaveThick : 1,
	bModWaveAlphaByVolume : 0,
	bMaximizeWaveColor : 1,
	bTexWrap : 0,
	bDarkenCenter : 0,
	bRedBlueStereo : 0,
	bBrighten : 0,
	bDarken : 1,
	bSolarize : 1,
	bInvert : 0,
	fWaveAlpha : 0.006759,
	fWaveScale : 0.86292,
	fWaveSmoothing : 0.0,
	fWaveParam : 0.0,
	fModWaveAlphaStart : 1.0,
	fModWaveAlphaEnd : 1.000001,
	fWarpAnimSpeed : 1.0,
	fWarpScale : 0.106584,
	fZoomExponent : 0.158398,
	fShader : 0.0,
	zoom : 1.0,
	rot : 0.0,
	cx : 0.5,
	cy : 0.5,
	dx : 0.0,
	dy : 0.0,
	warp : 0.017426,
	sx : 1.0,
	sy : 1.0,
	wave_r : 1.0,
	wave_g : 0.5,
	wave_b : 0.0,
	wave_x : 0.0,
	wave_y : 0.6,
	ob_size : 0.0,
	ob_r : 0.0,
	ob_g : 0.0,
	ob_b : 0.0,
	ob_a : 0.0,
	ib_size : 0.005,
	ib_r : 0.0,
	ib_g : 0.0,
	ib_b : 0.0,
	ib_a : 1.0,
	nMotionVectorsX : 64.0,
	nMotionVectorsY : 48.0,
	mv_dx : 0.0,
	mv_dy : 0.0,
	mv_l : 3.849998,
	mv_r : 1.0,
	mv_g : 1.0,
	mv_b : 1.0,
	mv_a : 0.0,
	per_pixel_code : function(_) {
		with (_) {
			n = 30 - abs(y - 0.5) * 20 - abs(x - 0.5) * 20 - bass * 2;
			t = time * 2;
			x = x - 0.04;
			dx = 0.01 * (cos((-x + y) * n + t) + sin((x + y - 1) * n + t));
			dy = 0.01 * (cos((x - y) * n - t) + sin((-x - y + 1) * n - t));
		}
	},
	per_frame_code : function(_) {
		with (_) {
			frame3 = frame % 3;

			// wave_x = if(equal(frame3,0),0.25,if(equal(frame3,1),0.5,0.75));
			// wave_y = if(equal(frame3,0),0.1,if(equal(frame3,1),0.11,0.12));

			// wave_r = if(equal(frame3,0),0,if(equal(frame3,1),1,0));
			// wave_g = if(equal(frame3,0),1,if(equal(frame3,1),0,1));
			// wave_b = if(equal(frame3,0),0,if(equal(frame3,1),0,0));

			d1 = treb - q1;
			d2 = mid - q2;
			d3 = bass - q3;

			q1 = treb;
			q2 = mid;
			q3 = treb;

			ib_r = ifcond(above(d1, 1), 1, 0);
			ib_g = ifcond(above(d2, 1), 1, 0);
			ib_b = ifcond(above(d3, 1), 1, 0);

			// mis = if(equal(frame3,0),treb,if(equal(frame3,1),mid,bass));
			// wave_mystery = -0.18 - 0.1*mis;

			// brighten = if(frame3,1,0);
		}
	},
	shapes : [ {
		enabled : 0,
		sides : 11,
		additive : 0,
		thickOutline : 1,
		textured : 0,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 0,
		sides : 4,
		additive : 0,
		thickOutline : 0,
		textured : 0,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 0,
		sides : 4,
		additive : 0,
		thickOutline : 0,
		textured : 0,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 0,
		sides : 4,
		additive : 0,
		thickOutline : 0,
		textured : 0,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, ],
	waves : [ {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bAdditive : 0,
		scaling : 0.161878,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 1,
		bAdditive : 1,
		scaling : 25.126015,
		smoothing : 1.000000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 0.100001,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, ],
};

Presets["Flexi - something went terribly wrong.milk"] = {
	fRating : 3.0,
	fGammaAdj : 1.0,
	fDecay : 0.985,
	fVideoEchoZoom : 1.050796,
	fVideoEchoAlpha : 0.5,
	nVideoEchoOrientation : 0,
	nWaveMode : 0,
	bAdditiveWaves : 0,
	bWaveDots : 0,
	bWaveThick : 1,
	bModWaveAlphaByVolume : 0,
	bMaximizeWaveColor : 1,
	bTexWrap : 0,
	bDarkenCenter : 0,
	bRedBlueStereo : 0,
	bBrighten : 0,
	bDarken : 0,
	bSolarize : 0,
	bInvert : 0,
	fWaveAlpha : 0.004867,
	fWaveScale : 0.01,
	fWaveSmoothing : 0.0,
	fWaveParam : -0.28,
	fModWaveAlphaStart : 1.0,
	fModWaveAlphaEnd : 1.000001,
	fWarpAnimSpeed : 1.0,
	fWarpScale : 0.106584,
	fZoomExponent : 7.44937,
	fShader : 0.0,
	zoom : 1.0,
	rot : 0.0,
	cx : 0.5,
	cy : 0.5,
	dx : 0.0,
	dy : 0.0,
	warp : 0.017426,
	sx : 1.0,
	sy : 1.0,
	wave_r : 1.0,
	wave_g : 0.5,
	wave_b : 0.0,
	wave_x : 0.0,
	wave_y : 0.6,
	ob_size : 0.0,
	ob_r : 0.0,
	ob_g : 0.0,
	ob_b : 0.0,
	ob_a : 0.0,
	ib_size : 0.01,
	ib_r : 0.0,
	ib_g : 0.0,
	ib_b : 0.0,
	ib_a : 1.0,
	nMotionVectorsX : 64.0,
	nMotionVectorsY : 48.0,
	mv_dx : 0.0,
	mv_dy : 0.0,
	mv_l : 0.0,
	mv_r : 1.0,
	mv_g : 1.0,
	mv_b : 0.0,
	mv_a : 0.0,
	per_pixel_code : function(_) {
		with (_) {
			n = 18 - treb * 0.2 - bass * 0.1;
			// t=time*5;
			d = 0.051 + bass * 0.05 + pow(bass * 0.5, 5) * 0.1;

			d1 = sqrt((x - 0.5) * (x - 0.5) + (y - 0.5) * (y - 0.5));
			s = 1 / (1 + pow(2, (d1 - bass * 0.75) * 10)) - 0.4;
			d = d * s * (bass * 0.5 - d1) * 7;

			x = x + sin(time * 0.5) * 1;
			y = y - cos(time * 0.5) * 1;
			dx = d * (cos((-x + y) * n + t) + sin((x + y - 1) * n + t));
			dy = d * (cos((x - y) * n - t) + sin((-x - y + 1) * n - t));
		}
	},
	per_frame_code : function(_) {
		with (_) {
			t = -time * 0.2;
			pi3 = 3.1415 * 2 / 3;
			c = 5 - pow(bass, 5) * 1;

			r = sin(t) * c;
			r = ifcond(above(r, 1), 1, r);
			r = ifcond(below(r, 0), 0, r);

			g = sin(t + pi3) * c;
			g = ifcond(above(g, 1), 1, g);
			g = ifcond(below(g, 0), 0, g);

			b = sin(t - pi3) * c;
			b = ifcond(above(b, 1), 1, b);
			b = ifcond(below(b, 0), 0, b);

			ib_r = r;// 0.5+sin(time)*0.5;
			ib_g = g;// 0.5+sin(time)*0.5;
			ib_b = b;// 0.5-sin(time)*0.5;
		}
	},
	shapes : [ {
		enabled : 0,
		sides : 11,
		additive : 0,
		thickOutline : 1,
		textured : 0,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 0,
		sides : 4,
		additive : 0,
		thickOutline : 0,
		textured : 0,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 0,
		sides : 4,
		additive : 0,
		thickOutline : 0,
		textured : 0,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 0,
		sides : 4,
		additive : 0,
		thickOutline : 0,
		textured : 0,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, ],
	waves : [ {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bAdditive : 0,
		scaling : 0.161878,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 1,
		bAdditive : 1,
		scaling : 25.126015,
		smoothing : 1.000000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 0.100001,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, ],
};

Presets["Flexi - maggot-ridden sliced surface.milk"] = {
	fRating : 3.0,
	fGammaAdj : 1.0,
	fDecay : 0.85,
	fVideoEchoZoom : 1.149237,
	fVideoEchoAlpha : 0.0,
	nVideoEchoOrientation : 0,
	nWaveMode : 0,
	bAdditiveWaves : 0,
	bWaveDots : 0,
	bWaveThick : 0,
	bModWaveAlphaByVolume : 0,
	bMaximizeWaveColor : 0,
	bTexWrap : 0,
	bDarkenCenter : 0,
	bRedBlueStereo : 0,
	bBrighten : 1,
	bDarken : 0,
	bSolarize : 0,
	bInvert : 0,
	fWaveAlpha : 0.001,
	fWaveScale : 0.01,
	fWaveSmoothing : 0.0,
	fWaveParam : 0.0,
	fModWaveAlphaStart : 1.0,
	fModWaveAlphaEnd : 1.000001,
	fWarpAnimSpeed : 1.0,
	fWarpScale : 0.106584,
	fZoomExponent : 6.227751,
	fShader : 0.0,
	zoom : 1.0,
	rot : 0.0,
	cx : 0.5,
	cy : 0.5,
	dx : 0.0,
	dy : 0.0,
	warp : 0.017426,
	sx : 1.0,
	sy : 1.0,
	wave_r : 0.0,
	wave_g : 0.0,
	wave_b : 0.0,
	wave_x : 0.5,
	wave_y : 0.5,
	ob_size : 0.0,
	ob_r : 0.0,
	ob_g : 0.0,
	ob_b : 0.0,
	ob_a : 0.0,
	ib_size : 0.005,
	ib_r : 0.0,
	ib_g : 0.0,
	ib_b : 0.0,
	ib_a : 1.0,
	nMotionVectorsX : 64.0,
	nMotionVectorsY : 48.0,
	mv_dx : 0.0,
	mv_dy : 0.0,
	mv_l : 5.0,
	mv_r : 0.0,
	mv_g : 1.0,
	mv_b : 1.0,
	mv_a : 0.0,
	per_pixel_code : function(_) {
		with (_) {
			d = sqrt((x - 0.5) * (x - 0.5) + (y - 0.5) * (y - 0.5)) * rad;
			n = 20 - d * 20;// *(0.8-d*0.5*mid);//+5*sin(time);
			t = t + (treb_att - 1) * 0.005 / fps;
			t = q5 * 200 + sin(q4);
			w = q5 * 50 + sin(q3);
			// w=0;
			v = 20;// 2*(1+d*5+1-bass*2);// +bass*0.5;
			X2 = x - 0.5;
			Y2 = y - 0.5;
			X1 = sin(w) * X2 - cos(w) * Y2;
			Y1 = cos(w) * X2 + sin(w) * Y2;
			x = X1;
			y = Y1;
			dx1 = 0.01 * (cos((-x + y) * n + t) + sin((x + y) * n + t));// *bass;
			dy1 = 0.01 * (cos((x - y) * n - t) + sin((-x - y) * n - t));// *bass;
			dx2 = sin(-w) * dx1 - cos(-w) * dy1;
			dy2 = cos(-w) * dx1 + sin(-w) * dy1;
			dx = v * dx2;
			dy = v * dy2;
		}
	},
	init_code : function(_) {
		with (_) {
			x1 = 0;
			y1 = 0;
		}
	},
	per_frame_code : function(_) {
		with (_) {
			pi3 = 3.1415 * 2 / 3;
			c = 1.5;
			monitor = 5 * sin(time);
			ib_r = 0.5 + sin(c * time + pi3) * 0.5;
			ib_g = 0.5 + sin(c * time - pi3) * 0.5;
			ib_b = 0.5 + sin(c * time) * 0.5;

			ab = ab * 0.9 + sqr(mid_att);
			q6 = +ab * 0.0;

			q1 = 0;
			v = 0.01;
			j1 = j1 * 0.98 + sqr(bass_att * 2);
			j2 = j2 * 0.98 + sqr(mid_att * 2);
			j3 = j3 * 0.98 + sqr(treb_att * 2);

			n = n + j1 * 0.00052;
			n1 = n1 + j2 * 0.00052;
			n2 = n2 + j3 * 0.00052;
			q2 = n * 0.1;
			q3 = -n1 * 0.1;
			q4 = n2 * 0.15;
			// t5 = 0;
			k = k * 0.995 + sqr(mid_att * 2);
			q5 = -k * 0.0001;
		}
	},
	shapes : [ {
		enabled : 0,
		sides : 100,
		additive : 0,
		thickOutline : 1,
		textured : 1,
		x : 0.500000,
		y : 0.500000,
		rad : 0.166108,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 21.858635,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 0.500000,
		r2 : 1.000000,
		g2 : 1.000000,
		b2 : 1.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
		init_code : function(_) {
			with (_) {
				vx = 0;
				vy = 0;
			}
		},
	}, {
		enabled : 0,
		sides : 100,
		additive : 0,
		thickOutline : 0,
		textured : 1,
		x : 0.500000,
		y : 0.500000,
		rad : 1.998628,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 0.498314,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
		r2 : 0.080001,
		g2 : 0.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, {
		enabled : 0,
		sides : 100,
		additive : 0,
		thickOutline : 0,
		textured : 1,
		x : 0.500000,
		y : 0.500000,
		rad : 1.215245,
		ang : 0.000000,
		tex_ang : 2.576107,
		tex_zoom : 0.555954,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 0.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
	}, {
		enabled : 0,
		sides : 4,
		additive : 0,
		thickOutline : 0,
		textured : 0,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, ],
	waves : [
			{
				enabled : 0,
				samples : 512,
				sep : 4,
				bSpectrum : 0,
				bUseDots : 1,
				bDrawThick : 1,
				bAdditive : 0,
				scaling : 0.093480,
				smoothing : 1.000000,
				r : 1.000000,
				g : 1.000000,
				b : 1.000000,
				a : 1.000000,
				per_point_code : function(_) {
					with (_) {
						s8 = sample * 383;

						s = 0.3;
						xx = ((sample * 343) % 7 - 3.5) * s;
						yy = ((sample * 49) % 7 - 3.5) * s;
						zz = ((sample * 7) % 7 - 3.5) * s;

						d = sqrt(xx * xx + yy * yy + zz * zz);
						d1 = 1;
						xx = xx * d1 * (1 + value1);
						yy = yy * d1 * (1 + value2);
						zz = zz * d1;
						w = 1 + 0 * (d) * (t6);// (sample*sin(time*0.3)*0.02-1);
						s1 = sin(t2 * w);
						s2 = sin(t3 * w);
						s3 = sin(t4 * w);
						c1 = cos(t2 * w);
						c2 = cos(t3 * w);
						c3 = cos(t4 * w);

						z = (c3 * s1 * c2 + s3 * s2) * xx
								- (c3 * s1 * s2 - s3 * c2) * yy + c3 * c1 * zz;
						x1 = (c1 * c2 * xx + c1 * s2 * yy - s1 * zz);
						y1 = ((s3 * s1 * c2 - c3 * s2) * xx
								+ (s3 * s1 * s2 + c3 * c2) * yy + s3 * c1 * zz);

						a = 10;
						zoom = 0.1 * atan2(a - z, a);// 0.5*(1/(z+a));
						x = 0.5 + zoom * x1;
						y = 0.5 + zoom * y1;

						pi3 = 3.1415 * 2 * 0.3333;
						t = -z * 1.2 + t5 * 20;
						c = 10;
						r = sin(t) * c;

						g = sin(t + pi3) * c;

						b = sin(t - pi3) * c;

						j = 0.71;
						// r = 0.5+xx*j;
						// g = 0.5+yy*j;
						// b = 0.5+zz*j;

						r = ifcond(above(r, 1), 1, r);
						r = ifcond(below(r, 0), 0, r);
						g = ifcond(above(g, 1), 1, g);
						g = ifcond(below(g, 0), 0, g);
						b = ifcond(above(b, 1), 1, b);
						b = ifcond(below(b, 0), 0, b);

						a = sigmoid(-z, 1) * 1.0 + 0.0;
					}
				},
				init_code : function(_) {
					with (_) {
						t2 = 0;
						t3 = 0;
						t4 = 0;
						ab = 1;
					}
				},
				per_frame_code : function(_) {
					with (_) {
						t1 = q1;
						t2 = q2;
						t3 = q3;
						t4 = q4;
						t5 = q5;
						t6 = q6;
					}
				},
			},
			{
				enabled : 0,
				samples : 484,
				sep : 4,
				bSpectrum : 0,
				bUseDots : 1,
				bDrawThick : 1,
				bAdditive : 0,
				scaling : 9.941252,
				smoothing : 1.000000,
				r : 1.000000,
				g : 1.000000,
				b : 1.000000,
				a : 1.000000,
				per_point_code : function(_) {
					with (_) {
						s8 = sample * 383;

						s = 0.25;
						xx = ((sample * (465)) % 15 - 8) * s * 2;
						yy = ((sample * 31) % 31 - 16) * s;
						zz = value1 + sin(time + yy * 0.3) * 1;

						d = sqrt(xx * xx + yy * yy + zz * zz);
						w = 1 + d * 0.0003 * t6;// (sample*sin(time*0.3)*0.02-1);
						s1 = sin(t2 * w);
						s2 = sin(t3 * w);
						s3 = sin(t4 * w);
						c1 = cos(t2 * w);
						c2 = cos(t3 * w);
						c3 = cos(t4 * w);

						z = (c3 * s1 * c2 + s3 * s2) * xx
								- (c3 * s1 * s2 - s3 * c2) * yy + c3 * c1 * zz;
						x1 = (c1 * c2 * xx + c1 * s2 * yy - s1 * zz);
						y1 = ((s3 * s1 * c2 - c3 * s2) * xx
								+ (s3 * s1 * s2 + c3 * c2) * yy + s3 * c1 * zz);

						a = 500;
						zoom = 0.05 * atan2(a - z, a);// 0.5*(1/(z+a));
						x = 0.5 + zoom * x1;
						y = 0.5 + zoom * y1;

						pi3 = 3.1415 * 2 * 0.3333;
						t = -z * 0.5 + t5;
						c = 10;
						r = sin(t) * c;

						g = sin(t + pi3) * c;

						b = sin(t - pi3) * c;

						j = 0.71;
						// r = 0.5+xx*j;
						// g = 0.5+yy*j;
						// b = 0.5+zz*j;

						r = ifcond(above(r, 1), 1, r);
						r = ifcond(below(r, 0), 0, r);
						g = ifcond(above(g, 1), 1, g);
						g = ifcond(below(g, 0), 0, g);
						b = ifcond(above(b, 1), 1, b);
						b = ifcond(below(b, 0), 0, b);

						a = sigmoid(-z, 0.25) * 1.0 + 0.0;
					}
				},
				init_code : function(_) {
					with (_) {
						t2 = 0;
						t3 = 0;
						t4 = 0;
						ab = 1;
					}
				},
				per_frame_code : function(_) {
					with (_) {
						t1 = q1;
						t2 = q2;
						t3 = q3;
						t4 = q4;
						t5 = q5;
						t6 = q6;
					}
				},
			},
			{
				enabled : 0,
				samples : 484,
				sep : 4,
				bSpectrum : 0,
				bUseDots : 1,
				bDrawThick : 1,
				bAdditive : 0,
				scaling : 9.941252,
				smoothing : 1.000000,
				r : 1.000000,
				g : 1.000000,
				b : 1.000000,
				a : 1.000000,
				per_point_code : function(_) {
					with (_) {
						s8 = sample * 383;

						s = 0.25;
						xx = ((sample * (465)) % 15 - 8) * s * 2;
						zz = ((sample * 31) % 31 - 16) * s;
						yy = value1 + sin(time + xx * 0.3) * 1;

						d = sqrt(xx * xx + yy * yy + zz * zz);
						w = 1 + d * 0.0003 * t6;// (sample*sin(time*0.3)*0.02-1);
						s1 = sin(t2 * w);
						s2 = sin(t3 * w);
						s3 = sin(t4 * w);
						c1 = cos(t2 * w);
						c2 = cos(t3 * w);
						c3 = cos(t4 * w);

						z = (c3 * s1 * c2 + s3 * s2) * xx
								- (c3 * s1 * s2 - s3 * c2) * yy + c3 * c1 * zz;
						x1 = (c1 * c2 * xx + c1 * s2 * yy - s1 * zz);
						y1 = ((s3 * s1 * c2 - c3 * s2) * xx
								+ (s3 * s1 * s2 + c3 * c2) * yy + s3 * c1 * zz);

						a = 500;
						zoom = 0.05 * atan2(a - z, a);// 0.5*(1/(z+a));
						x = 0.5 + zoom * x1;
						y = 0.5 + zoom * y1;

						pi3 = 3.1415 * 2 * 0.3333;
						t = -z * 0.5 + t5;
						c = 10;
						r = sin(t) * c;

						g = sin(t + pi3) * c;

						b = sin(t - pi3) * c;

						j = 0.71;
						// r = 0.5+xx*j;
						// g = 0.5+yy*j;
						// b = 0.5+zz*j;

						r = ifcond(above(r, 1), 1, r);
						r = ifcond(below(r, 0), 0, r);
						g = ifcond(above(g, 1), 1, g);
						g = ifcond(below(g, 0), 0, g);
						b = ifcond(above(b, 1), 1, b);
						b = ifcond(below(b, 0), 0, b);

						a = sigmoid(-z, 0.25) * 1.0 + 0.0;
					}
				},
				init_code : function(_) {
					with (_) {
						t2 = 0;
						t3 = 0;
						t4 = 0;
						ab = 1;
					}
				},
				per_frame_code : function(_) {
					with (_) {
						t1 = q1;
						t2 = q2;
						t3 = q3;
						t4 = q4;
						t5 = q5;
						t6 = q6;
					}
				},
			},
			{
				enabled : 0,
				samples : 484,
				sep : 4,
				bSpectrum : 0,
				bUseDots : 1,
				bDrawThick : 1,
				bAdditive : 0,
				scaling : 9.941252,
				smoothing : 1.000000,
				r : 1.000000,
				g : 1.000000,
				b : 1.000000,
				a : 1.000000,
				per_point_code : function(_) {
					with (_) {
						s8 = sample * 383;

						s = 0.25;
						yy = ((sample * (465)) % 15 - 8) * s * 2;
						zz = ((sample * 31) % 31 - 16) * s;
						xx = value1 + sin(time + yy * 0.3) * 1;

						d = sqrt(xx * xx + yy * yy + zz * zz);
						w = 1 + d * 0.0003 * t6;// (sample*sin(time*0.3)*0.02-1);
						s1 = sin(t2 * w);
						s2 = sin(t3 * w);
						s3 = sin(t4 * w);
						c1 = cos(t2 * w);
						c2 = cos(t3 * w);
						c3 = cos(t4 * w);

						z = (c3 * s1 * c2 + s3 * s2) * xx
								- (c3 * s1 * s2 - s3 * c2) * yy + c3 * c1 * zz;
						x1 = (c1 * c2 * xx + c1 * s2 * yy - s1 * zz);
						y1 = ((s3 * s1 * c2 - c3 * s2) * xx
								+ (s3 * s1 * s2 + c3 * c2) * yy + s3 * c1 * zz);

						a = 500;
						zoom = 0.05 * atan2(a - z, a);// 0.5*(1/(z+a));
						x = 0.5 + zoom * x1;
						y = 0.5 + zoom * y1;

						pi3 = 3.1415 * 2 * 0.3333;
						t = -z * 0.5 + t5;
						c = 10;
						r = sin(t) * c;

						g = sin(t + pi3) * c;

						b = sin(t - pi3) * c;

						j = 0.71;
						// r = 0.5+xx*j;
						// g = 0.5+yy*j;
						// b = 0.5+zz*j;

						r = ifcond(above(r, 1), 1, r);
						r = ifcond(below(r, 0), 0, r);
						g = ifcond(above(g, 1), 1, g);
						g = ifcond(below(g, 0), 0, g);
						b = ifcond(above(b, 1), 1, b);
						b = ifcond(below(b, 0), 0, b);

						a = sigmoid(-z, 0.25) * 1.0 + 0.0;
					}
				},
				init_code : function(_) {
					with (_) {
						t2 = 0;
						t3 = 0;
						t4 = 0;
						ab = 1;
					}
				},
				per_frame_code : function(_) {
					with (_) {
						t1 = q1;
						t2 = q2;
						t3 = q3;
						t4 = q4;
						t5 = q5;
						t6 = q6;
					}
				},
			}, ],
};

Presets["Flexi - lost orientation.milk"] = {
	fRating : 5.0,
	fGammaAdj : 1.0,
	fDecay : 0.99,
	fVideoEchoZoom : 0.362354,
	fVideoEchoAlpha : 0.0,
	nVideoEchoOrientation : 1,
	nWaveMode : 0,
	bAdditiveWaves : 0,
	bWaveDots : 0,
	bWaveThick : 1,
	bModWaveAlphaByVolume : 0,
	bMaximizeWaveColor : 0,
	bTexWrap : 1,
	bDarkenCenter : 0,
	bRedBlueStereo : 0,
	bBrighten : 0,
	bDarken : 0,
	bSolarize : 0,
	bInvert : 0,
	fWaveAlpha : 0.001,
	fWaveScale : 1.599174,
	fWaveSmoothing : 0.0,
	fWaveParam : -0.5,
	fModWaveAlphaStart : 2.0,
	fModWaveAlphaEnd : 2.0,
	fWarpAnimSpeed : 1.0,
	fWarpScale : 0.106584,
	fZoomExponent : 0.158398,
	fShader : 1.0,
	zoom : 1.0,
	rot : 0.0,
	cx : 0.5,
	cy : 0.5,
	dx : 0.0,
	dy : 0.0,
	warp : 0.01,
	sx : 1.0,
	sy : 1.0,
	wave_r : 0.51,
	wave_g : 0.5,
	wave_b : 1.0,
	wave_x : 0.5,
	wave_y : 0.5,
	ob_size : 0.0,
	ob_r : 0.0,
	ob_g : 0.0,
	ob_b : 0.0,
	ob_a : 1.0,
	ib_size : 0.01,
	ib_r : 0.0,
	ib_g : 0.0,
	ib_b : 0.0,
	ib_a : 1.0,
	nMotionVectorsX : 40.320023,
	nMotionVectorsY : 30.239979,
	mv_dx : 0.0,
	mv_dy : 0.0,
	mv_l : 1.499999,
	mv_r : 1.0,
	mv_g : 1.0,
	mv_b : 1.0,
	mv_a : 0.0,
	per_pixel_code : function(_) {
		with (_) {
			r = bass / 4;
			cx1 = 0.5 + sin(time * 0.618) * 0.2;
			cy1 = 0.5 + cos(time * 1.618) * 0.2;
			d = sqrt((x - cx1) * (x - cx1) + (y - cy1) * (y - cy1));
			dir = (bass) * (r * r - d * d) * 0.3;
			x1 = ifcond(above(d, r), 0, sin(y - cy1) * dir);
			y1 = ifcond(above(d, r), 0, -sin(x - cx1) * dir);

			cx1 = 0.5 + sin(time * 2.618) * 0.3;
			cy1 = 0.5 + cos(time * 3.14) * 0.3;
			d = sqrt((x - cx1) * (x - cx1) + (y - cy1) * (y - cy1));
			dir = -(mid) * (r * r - d * d) * 0.3;
			x2 = ifcond(above(d, r), 0, sin(y - cy1) * dir);
			y2 = ifcond(above(d, r), 0, -sin(x - cx1) * dir);

			cx1 = 0.5 + sin(-time * 2.618) * 0.4;
			cy1 = 0.5 + cos(-time * 1.14) * 0.4;
			d = sqrt((x - cx1) * (x - cx1) + (y - cy1) * (y - cy1));
			dir = -(treb) * (r * r - d * d) * 0.3;
			x3 = ifcond(above(d, r), 0, sin(y - cy1) * dir);
			y3 = ifcond(above(d, r), 0, -sin(x - cx1) * dir);

			dx = x1 + x2 + x3;
			dy = y1 + y2 + y3;
		}
	},
	per_frame_code : function(_) {
		with (_) {

			// zoom = 0.99;
			ib_r = sin(time * 1.25 * 4) * 0.3 + 0.7;
			ib_g = sin(time * 4) * 0.3 + 0.3;
			ib_b = sin(time / 3 * 4) * 0.5 + 0.5;
			wave_r = 1 - ib_r;
			wave_g = 1 - ib_g;
			wave_b = 1 - ib_b;
			// wave_mystery = -1+bass/2;
			wave_x = 0.5 + sin(time * 3) * 0.3;
			wave_y = 0.5 + cos(time * 2.187) * 0.3;
		}
	},
	shapes : [ {
		enabled : 1,
		sides : 100,
		additive : 0,
		thickOutline : 1,
		textured : 0,
		x : 0.500000,
		y : 0.500000,
		rad : 0.501258,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 0.999964,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
		r2 : 1.000000,
		g2 : 0.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
		per_frame_code : function(_) {
			with (_) {
				x = 0.5 + sin(time * 0.618) * 0.2;
				y = 0.5 + cos(time * 1.618) * 0.2;
				rad = bass * 0.05;
				border_r = 1 - (sin(time * 1.25) * 0.3 + 0.7);
				border_g = 1 - (sin(time) * 0.3 + 0.3);
				border_b = 1 - (sin(time / 3) * 0.5 + 0.5);
			}
		},
	}, {
		enabled : 1,
		sides : 100,
		additive : 0,
		thickOutline : 1,
		textured : 0,
		x : 0.500000,
		y : 0.500000,
		rad : 0.501258,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 0.999996,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 0.000000,
		b2 : 1.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 0.000000,
		border_b : 1.000000,
		border_a : 0.000000,
		per_frame_code : function(_) {
			with (_) {
				x = 0.5 + sin(time * 2.618) * 0.3;
				y = 0.5 + cos(time * 3.14) * 0.3;
				rad = bass * 0.05;
				border_r = 1 - (sin(time * 1.25) * 0.3 + 0.7);
				border_g = 1 - (sin(time) * 0.3 + 0.3);
				border_b = 1 - (sin(time / 3) * 0.5 + 0.5);

			}
		},
	}, {
		enabled : 1,
		sides : 100,
		additive : 0,
		thickOutline : 1,
		textured : 0,
		x : 0.500000,
		y : 0.500000,
		rad : 0.501258,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 0.999803,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
		per_frame_code : function(_) {
			with (_) {
				x = 0.5 + sin(-time * 2.618) * 0.4;
				y = 0.5 + cos(-time * 1.14) * 0.4;
				rad = bass * 0.05;
				border_r = 1 - (sin(time * 1.25) * 0.3 + 0.7);
				border_g = 1 - (sin(time) * 0.3 + 0.3);
				border_b = 1 - (sin(time / 3) * 0.5 + 0.5);
			}
		},
	}, {
		enabled : 0,
		sides : 4,
		additive : 0,
		thickOutline : 0,
		textured : 0,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, ],
	waves : [ {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bAdditive : 0,
		scaling : 0.161878,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 1,
		bAdditive : 1,
		scaling : 25.126015,
		smoothing : 1.000000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 0.100001,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, {
		enabled : 0,
		samples : 512,
		sep : 0,
		bSpectrum : 0,
		bUseDots : 0,
		bDrawThick : 0,
		bAdditive : 0,
		scaling : 1.000000,
		smoothing : 0.500000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 1.000000,
	}, ],
};

Presets["Redi Jedi + Flexi  - tilted morphed conic section finally poked ;-).milk"] = {
	fRating : 3.0,
	fGammaAdj : 1.0,
	fDecay : 0.98,
	fVideoEchoZoom : 0.508178,
	fVideoEchoAlpha : 0.0,
	nVideoEchoOrientation : 0,
	nEchoWrap_x : 2,
	nEchoWrap_y : 2,
	nWaveMode : 1,
	bAdditiveWaves : 0,
	bWaveDots : 0,
	bWaveThick : 0,
	bModWaveAlphaByVolume : 0,
	bMaximizeWaveColor : 0,
	bTexWrap : 1,
	nWrapMode_x : 2,
	nWrapMode_y : 2,
	bDarkenCenter : 0,
	bRedBlueStereo : 0,
	bBrighten : 0,
	bDarken : 1,
	bSolarize : 0,
	bInvert : 0,
	fWaveAlpha : 0.004538,
	fWaveScale : 0.167026,
	fWaveSmoothing : 0.0,
	fWaveParam : 1e-06,
	fModWaveAlphaStart : 1.0,
	fModWaveAlphaEnd : 1.000001,
	fWarpAnimSpeed : 1.0,
	fWarpScale : 0.106584,
	fZoomExponent : 0.01,
	fShader : 1.0,
	zoom : 1.0,
	rot : 0.0,
	cx : 0.5,
	cy : 0.5,
	dx : 0.0,
	dy : 0.0,
	warp : 0.01,
	sx : 1.0,
	sy : 1.0,
	wave_r : 1.0,
	wave_g : 1.0,
	wave_b : 1.0,
	wave_x : 0.95,
	wave_y : 1.0,
	ob_size : 0.0,
	ob_r : 1.0,
	ob_g : 1.0,
	ob_b : 1.0,
	ob_a : 0.0,
	ib_size : 0.0,
	ib_r : 1.0,
	ib_g : 1.0,
	ib_b : 1.0,
	ib_a : 0.5,
	nMotionVectorsX : 27.708086,
	nMotionVectorsY : 8.908295,
	mv_dx : 0.003534,
	mv_dy : -0.0109,
	mv_l : 0.947046,
	mv_r : 0.988525,
	mv_g : 0.988525,
	mv_b : 0.988525,
	mv_a : 0.0,
	per_pixel_code : function(_) {
		with (_) {

			pi = asin(1);

			x = x - 0.5;
			y = y - 0.5;
			x = x * 5 / 4;

			d = rad * acos(sin((q2 - q3))) * 0.5 + pi;
			xx = sin(d) * x - cos(d) * y;
			yy = cos(d) * x + sin(d) * y;

			xx = xx * 4 / 5;

			x = xx;
			y = yy;

			t = time * .2;
			xh = x;
			yh = y;

			w = (q4 - q6) * 0.1;

			m = abs(q2 - 0.5) * 1;
			wv = pi - sin(w) * m;
			wh = pi - cos(w) * m;
			d = 8 - 2 * (q1 + q2 + q3);// -q2*5;
			ww = 3 * (1 - rad);
			ddx = sin(2 * pi + wv - (x) * ww);
			ddy = sin(2 * pi + wh - (y) * ww);
			rx = ifcond(above(ddx * ddy, 0), sin(wv) / ddx, 0);
			ry = ifcond(above(ddy * ddy, 0), sin(wh) / ddy, 0);

			v = -(q2 - 0.3) * .5;

			ax = ax + sin(w) * v;
			ay = ay + cos(w) * v;

			vx = ifcond(equal(rx * ry, 0), 0, ax);
			vy = ifcond(equal(rx * ry, 0), 0, ay);

			dx = (-xh * rx * ry * d + vx * .001);
			dy = (-yh * rx * ry * d + vy * .001);

			zoom = 0.93;

			s1 = 1;
			s2 = .1;
			decay_r = decay + (1 - decay)
					* (sin((d - dy) * s1 + (q3 - q5) * s2) * .5 + .5);
			decay_g = decay + (1 - decay)
					* (sin((v - dx) * s1 + (q4 - q3) * s2) * .5 + .5);
			decay_b = decay + (1 - decay)
					* (sin((dx - xy) * s1 + (q5 - q4) * s2) * .5 + .5);
		}
	},
	init_code : function(_) {
		with (_) {
			x1 = 0;
			y1 = 0;
		}
	},
	per_frame_code : function(_) {
		with (_) {
			vb = vb * 0.85 + (1 - vb) * pow(bass, 2) * 0.01;
			vvb = vvb * 0.95 + (1 - vvb) * vb * 0.2;
			vm = vm * 0.85 + (1 - vm) * pow(mid, 2) * 0.01;
			vvm = vvm * 0.95 + (1 - vvm) * vm * 0.2;
			vt = vt * 0.85 + (1 - vt) * pow(treb, 2) * 0.01;
			vvt = vvt * 0.95 + (1 - vvt) * vt * 0.2;
			vvb = ifcond(below(vvb, 0), 0, vvb);
			vvm = ifcond(below(vvm, 0), 0, vvm);
			vvt = ifcond(below(vvt, 0), 0, vvt);
			vvb = ifcond(above(vvb, 1), 1, vvb);
			vvm = ifcond(above(vvm, 1), 1, vvm);
			vvt = ifcond(above(vvt, 1), 1, vvt);

			q1 = vvb * 2;// 0.5 + vb - vvb;
			q2 = vvm * 2;// 0.5 + vm - vvm;
			q3 = vvt * 2;// 0.5 + vt - vvt;

			v = 0.5 * (60 / fps);

			bb = bb - vvb * v;
			mm = mm - vvm * v;
			tt = tt - vvt * v;

			q4 = bb;
			q5 = mm;
			q6 = tt;

			decay = .9;
		}
	},
	shapes : [ {
		enabled : 0,
		sides : 100,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 1,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.500000,
		rad : 0.423242,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 0.503296,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 1.000000,
		g2 : 1.000000,
		b2 : 1.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
		init_code : function(_) {
			with (_) {
				vx = 0;
				vy = 0;
			}
		},
		per_frame_code : function(_) {
			with (_) {
				t = -(q4 + q5) * 0.2;
				x = 0.5 + sin(t) * 0.2;
				y = 0.5 + cos(t) * 0.1;
				rad = 0.4 - cos(t) * 0.3;
			}
		},
	}, {
		enabled : 0,
		sides : 100,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 1,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.500000,
		rad : 0.423242,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 0.503296,
		r : 0.000000,
		g : 0.000000,
		b : 1.000000,
		a : 1.000000,
		r2 : 1.000000,
		g2 : 1.000000,
		b2 : 1.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
		init_code : function(_) {
			with (_) {
				vx = 0;
				vy = 0;
			}
		},
		per_frame_code : function(_) {
			with (_) {
				t = -(q4 + q5) * 0.2;
				pi = asin(1) * 2;
				x = 0.5 + sin(t + pi) * 0.2;
				y = 0.5 + cos(t + pi) * 0.1;
				rad = 0.4 - cos(t + pi) * 0.3;
			}
		},
	}, {
		enabled : 1,
		sides : 4,
		additive : 1,
		bDrawBack : 1,
		thickOutline : 0,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.500000,
		rad : 0.995947,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 0.000000,
		r2 : 1.000000,
		g2 : 1.000000,
		b2 : 1.000000,
		a2 : 0.500000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
		init_code : function(_) {
			with (_) {
				vx = 0
			}
		},
		per_frame_code : function(_) {
			with (_) {
				rad = 0.4 + (q1 - q2 + q3) * 1.618;
				ang = -(q4 - q6) * 0.4;

				pi3 = 3.1415 * 2 * 0.3333;

				t = (q4 - 2 * q5 + q6) * 0.2;
				c = 3;
				r = sin(t) * c;

				g = sin(t + pi3) * c;

				b = sin(t - pi3) * c;

				r = 1;
				g = 1;
				b = 1;
				r2 = 1 - r;
				g2 = 1 - g;
				b2 = 1 - b;
			}
		},
	}, {
		enabled : 1,
		sides : 3,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 0,
		x_wrap_mode : 2,
		y_wrap_mode : 2,
		textured : 1,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.500000,
		rad : 0.995947,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 1.000000,
		b : 1.000000,
		a : 0.050000,
		r2 : 1.000000,
		g2 : 1.000000,
		b2 : 1.000000,
		a2 : 1.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.000000,
		per_frame_code : function(_) {
			with (_) {
				rad = 0.3 + (q1 - q2 + q3) * 1.618;
				ang = -(q4 - q6) * 0.1;

				pi3 = 3.1415 * 2 * 0.3333;

				c = 1;
				s = .1;
				r = sin((q4 - q6) * s + pi3) * c;
				g = sin((q5 - q3) * s - pi3) * c;
				b = sin((q3 - q4) * s) * c;

				r = ifcond(above(r, 1), 1, r);
				r = ifcond(below(r, 0), 0, r);
				g = ifcond(above(g, 1), 1, g);
				g = ifcond(below(g, 0), 0, g);
				b = ifcond(above(b, 1), 1, b);
				b = ifcond(below(b, 0), 0, b);

				r2 = 1 - r;
				g2 = 1 - g;
				b2 = 1 - b;
				r = 1;
				g = 1;
				b = 1;
				mz = .5 + sin((q2 + sin(q3) * 10) * .5) * .01;
				tex_ang = (q1 - q3) * 6.28;
				tex_zoom = mz / rad;

				tex_capture = 1 - above(q1, lq1);
				lq1 = q1;

				tex_cx = .5 + .5 * sin(q3);
				tex_cy = .5 + .5 * sin(q5);
			}
		},
	}, {
		enabled : 0,
		sides : 4,
		additive : 0,
		bDrawBack : 0,
		thickOutline : 0,
		x_wrap_mode : 0,
		y_wrap_mode : 0,
		textured : 0,
		tex_capture : 1,
		tex_cx : 0.500000,
		tex_cy : 0.500000,
		x : 0.500000,
		y : 0.500000,
		rad : 0.100000,
		ang : 0.000000,
		tex_ang : 0.000000,
		tex_zoom : 1.000000,
		r : 1.000000,
		g : 0.000000,
		b : 0.000000,
		a : 1.000000,
		r2 : 0.000000,
		g2 : 1.000000,
		b2 : 0.000000,
		a2 : 0.000000,
		border_r : 1.000000,
		border_g : 1.000000,
		border_b : 1.000000,
		border_a : 0.100000,
	}, ],
	waves : [
			{
				enabled : 0,
				samples : 128,
				sep : 4,
				bSpectrum : 0,
				bUseDots : 0,
				bDrawThick : 1,
				bDrawBack : 1,
				bAdditive : 1,
				scaling : 12.374071,
				smoothing : 0.000000,
				r : 1.000000,
				g : 1.000000,
				b : 1.000000,
				a : 1.000000,
				per_point_code : function(_) {
					with (_) {
						p = sample * 6.29;
						x1 = sin(p) * .7 + .5;
						y1 = cos(p) * .7 + .5;
						mi = .01;
						ma = .99;
						x = max(min(x1, ma), mi);
						y = max(min(y1, ma), mi);

						s = 1;
						s2 = .25;
						r = sin(q4 * s + x1 * s3) * s2 + (1 - s2);
						g = sin(q5 * s - x * s3 + 1) * s2 + (1 - s2);
						b = sin(q6 * s + y1 * s3 + 2) * s2 + (1 - s2);
					}
				},
			},
			{
				enabled : 0,
				samples : 512,
				sep : 4,
				bSpectrum : 0,
				bUseDots : 0,
				bDrawThick : 1,
				bDrawBack : 0,
				bAdditive : 1,
				scaling : 1.372424,
				smoothing : 1.000000,
				r : 1.000000,
				g : 1.000000,
				b : 1.000000,
				a : 1.000000,
				per_point_code : function(_) {
					with (_) {
						s8 = sample * 383;

						s = 0.3;
						xx = ((sample * 343) % 7 - 3.5) * s + value1;
						yy = ((sample * 49) % 7 - 3.5) * s * 0.5;
						zz = ((sample * 7) % 7 - 3.5) * s * 0.5;

						n = 300;
						yy = (-0.5 + sample) * 2;
						xx = cos(sample * n) * 0.02;
						zz = sin(sample * n) * 0.02;

						d = sqrt(xx * xx + yy * yy + zz * zz);
						d1 = 1;
						xx = xx * d1 * (1 + value1);
						yy = yy * d1 * (1 + value2);
						zz = zz * d1;

						w = .3;// +0*(d)*(t6);//(sample*sin(time*0.3)*0.02-1);
						m = d * d * 2;
						s1 = sin(t4 * w + m * t1);
						s2 = sin(t5 * w + m * t2);
						s3 = sin(t6 * w + m * t3);
						c1 = cos(t4 * w + m * t1);
						c2 = cos(t5 * w + m * t2);
						c3 = cos(t6 * w + m * t3);

						z = (c3 * s1 * c2 + s3 * s2) * xx
								- (c3 * s1 * s2 - s3 * c2) * yy + c3 * c1 * zz;
						x1 = (c1 * c2 * xx + c1 * s2 * yy - s1 * zz);
						y1 = ((s3 * s1 * c2 - c3 * s2) * xx
								+ (s3 * s1 * s2 + c3 * c2) * yy + s3 * c1 * zz);

						a = 2;
						zoom = 0.3 * atan2(a - z, a);// 0.5*(1/(z+a));
						x = 0.5 + zoom * x1;
						y = 0.5 + zoom * y1;

						pi3 = 3.1415 * 2 * 0.3333;
						t = -yy + t4 * .2;
						c = 10;
						r = sin(t) * c;

						g = sin(t + pi3) * c;

						b = sin(t - pi3) * c;

						j = 0.81;
						// r = 0.25+xx*j;
						// g = 0.25+yy*j;
						// b = 0.25+zz*j;

						r = ifcond(above(r, 1), 1, r);
						r = ifcond(below(r, 0), 0, r);
						g = ifcond(above(g, 1), 1, g);
						g = ifcond(below(g, 0), 0, g);
						b = ifcond(above(b, 1), 1, b);
						b = ifcond(below(b, 0), 0, b);

						a = 2;// sigmoid(-z,1)*5.0+0.0;
					}
				},
				init_code : function(_) {
					with (_) {
						t2 = 0;
						t3 = 0;
						t4 = 0;
						ab = 1;
					}
				},
				per_frame_code : function(_) {
					with (_) {
						t1 = q1;
						t2 = q2;
						t3 = q3;
						t4 = q4;
						t5 = q5;
						t6 = q6;
					}
				},
			},
			{
				enabled : 0,
				samples : 512,
				sep : 4,
				bSpectrum : 0,
				bUseDots : 0,
				bDrawThick : 1,
				bDrawBack : 0,
				bAdditive : 1,
				scaling : 1.372424,
				smoothing : 1.000000,
				r : 1.000000,
				g : 1.000000,
				b : 1.000000,
				a : 1.000000,
				per_point_code : function(_) {
					with (_) {
						s8 = sample * 383;

						s = 0.3;
						xx = ((sample * 343) % 7 - 3.5) * s + value1;
						yy = ((sample * 49) % 7 - 3.5) * s * 0.5;
						zz = ((sample * 7) % 7 - 3.5) * s * 0.5;

						n = 300;
						xx = (-0.5 + sample) * 2;
						zz = cos(sample * n) * 0.02;
						yy = sin(sample * n) * 0.02;

						d = sqrt(xx * xx + yy * yy + zz * zz);
						d1 = 1;
						xx = xx * d1 * (1 + value1);
						yy = yy * d1 * (1 + value2);
						zz = zz * d1;

						w = .3;// +0*(d)*(t6);//(sample*sin(time*0.3)*0.02-1);
						m = d * d * 2;
						s1 = sin(t4 * w + m * t1);
						s2 = sin(t5 * w + m * t2);
						s3 = sin(t6 * w + m * t3);
						c1 = cos(t4 * w + m * t1);
						c2 = cos(t5 * w + m * t2);
						c3 = cos(t6 * w + m * t3);

						z = (c3 * s1 * c2 + s3 * s2) * xx
								- (c3 * s1 * s2 - s3 * c2) * yy + c3 * c1 * zz;
						x1 = (c1 * c2 * xx + c1 * s2 * yy - s1 * zz);
						y1 = ((s3 * s1 * c2 - c3 * s2) * xx
								+ (s3 * s1 * s2 + c3 * c2) * yy + s3 * c1 * zz);

						a = 2;
						zoom = 0.3 * atan2(a - z, a);// 0.5*(1/(z+a));
						x = 0.5 + zoom * x1;
						y = 0.5 + zoom * y1;

						pi3 = 3.1415 * 2 * 0.3333;
						t = -xx + t5 * .2;
						c = 10;
						r = sin(t) * c;

						g = sin(t + pi3) * c;

						b = sin(t - pi3) * c;

						j = 0.81;
						// r = 0.25+xx*j;
						// g = 0.25+yy*j;
						// b = 0.25+zz*j;

						r = ifcond(above(r, 1), 1, r);
						r = ifcond(below(r, 0), 0, r);
						g = ifcond(above(g, 1), 1, g);
						g = ifcond(below(g, 0), 0, g);
						b = ifcond(above(b, 1), 1, b);
						b = ifcond(below(b, 0), 0, b);

						a = 2;// sigmoid(-z,1)*5.0+0.0;
					}
				},
				init_code : function(_) {
					with (_) {
						t2 = 0;
						t3 = 0;
						t4 = 0;
						ab = 1;
					}
				},
				per_frame_code : function(_) {
					with (_) {
						t1 = q1;
						t2 = q2;
						t3 = q3;
						t4 = q4;
						t5 = q5;
						t6 = q6;
					}
				},
			},
			{
				enabled : 0,
				samples : 512,
				sep : 4,
				bSpectrum : 0,
				bUseDots : 0,
				bDrawThick : 1,
				bDrawBack : 0,
				bAdditive : 1,
				scaling : 1.372424,
				smoothing : 1.000000,
				r : 1.000000,
				g : 1.000000,
				b : 1.000000,
				a : 1.000000,
				per_point_code : function(_) {
					with (_) {
						s8 = sample * 383;

						s = 0.3;
						xx = ((sample * 343) % 7 - 3.5) * s + value1;
						yy = ((sample * 49) % 7 - 3.5) * s * 0.5;
						zz = ((sample * 7) % 7 - 3.5) * s * 0.5;

						n = 300;
						zz = (-0.5 + sample) * 2;
						xx = cos(sample * n) * 0.02;
						yy = sin(sample * n) * 0.02;

						d = sqrt(xx * xx + yy * yy + zz * zz);
						d1 = 1;
						xx = xx * d1 * (1 + value1);
						yy = yy * d1 * (1 + value2);
						zz = zz * d1;

						w = .3;// +0*(d)*(t6);//(sample*sin(time*0.3)*0.02-1);
						m = d * d * 2;
						s1 = sin(t4 * w + m * t1);
						s2 = sin(t5 * w + m * t2);
						s3 = sin(t6 * w + m * t3);
						c1 = cos(t4 * w + m * t1);
						c2 = cos(t5 * w + m * t2);
						c3 = cos(t6 * w + m * t3);

						z = (c3 * s1 * c2 + s3 * s2) * xx
								- (c3 * s1 * s2 - s3 * c2) * yy + c3 * c1 * zz;
						x1 = (c1 * c2 * xx + c1 * s2 * yy - s1 * zz);
						y1 = ((s3 * s1 * c2 - c3 * s2) * xx
								+ (s3 * s1 * s2 + c3 * c2) * yy + s3 * c1 * zz);

						a = 2;
						zoom = 0.3 * atan2(a - z, a);// 0.5*(1/(z+a));
						x = 0.5 + zoom * x1;
						y = 0.5 + zoom * y1;

						pi3 = 3.1415 * 2 * 0.3333;
						t = -zz + t6 * .2;
						c = 10;
						r = sin(t) * c;

						g = sin(t + pi3) * c;

						b = sin(t - pi3) * c;

						j = 0.81;
						// r = 0.25+xx*j;
						// g = 0.25+yy*j;
						// b = 0.25+zz*j;

						r = ifcond(above(r, 1), 1, r);
						r = ifcond(below(r, 0), 0, r);
						g = ifcond(above(g, 1), 1, g);
						g = ifcond(below(g, 0), 0, g);
						b = ifcond(above(b, 1), 1, b);
						b = ifcond(below(b, 0), 0, b);

						a = 2;// sigmoid(-z,1)*5.0+0.0;
					}
				},
				init_code : function(_) {
					with (_) {
						t2 = 0;
						t3 = 0;
						t4 = 0;
						ab = 1;
					}
				},
				per_frame_code : function(_) {
					with (_) {
						t1 = q1;
						t2 = q2;
						t3 = q3;
						t4 = q4;
						t5 = q5;
						t6 = q6;
					}
				},
			}, {
				enabled : 0,
				samples : 512,
				sep : 0,
				bSpectrum : 0,
				bUseDots : 0,
				bDrawThick : 0,
				bDrawBack : 0,
				bAdditive : 0,
				scaling : 1.000000,
				smoothing : 0.500000,
				r : 1.000000,
				g : 1.000000,
				b : 1.000000,
				a : 1.000000,
			}, ],
};
