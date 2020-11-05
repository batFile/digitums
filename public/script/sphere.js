/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Hungarian notation
// (http://en.wikipedia.org/wiki/Hungarian_notation)
// n - HTML-Node
// o - object
// s - string
// i - integer
// a - array
// b - boolean
// f - float
// p - Particle
// fn - function
// ctx - 2D Context

// General Function
const fnRequestAnimationFrame = function(fnCallback) {
  const fnAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(fnCallback) {
      window.setTimeOut(fnCallback, 1000 / 60);
    };
  fnAnimFrame(fnCallback);
};

// Add Event Listener
const fnAddEventListener = function(o, sEvent, fn) {
  if (o.addEventListener) {
    o.addEventListener(sEvent, fn, false);
  } else {
    o[`on${sEvent}`] = fn;
  }
};

const app = function() {

  let h;
  const oStats = new Stats();
  oStats.setMode(0);
  oStats.domElement.style.position = 'absolute';
  oStats.domElement.style.left = '0px';
  oStats.domElement.style.top = '0px';
  document.body.appendChild(oStats.domElement);

  // General Elements
  const oDoc = document;
  const nBody = oDoc.body;
    
  // Shortcuts
  const fPI = Math.PI;
  const fnMax = Math.max;
  const fnMin = Math.min;
  const fnRnd = Math.random;
  const fnRnd2 = () => (2.0 * fnRnd()) - 1.0;
  const fnCos = Math.cos;
  const fnACos = Math.acos;
  const fnSin = Math.sin;
    
  // Sphere Settings
    //  if (window.innerWidth < 1000)
//    (window.innerWidth < 1000) ? 180 :
  const iRadiusSphere = 220;
  let iProjSphereX = 6;
  let iProjSphereY = 0;
    
  // Particle Settings
  const fMaxAX = 0.1;
  const fMaxAY = 0.1;
  const fMaxAZ = 0.1;
  const fStartVX = 0.001;
  const fStartVY = 0.001;
  const fStartVZ = 0.001;
  let fAngle = 0.0;
  let fSinAngle = 0.0;
  let fCosAngle = 0.0;

  window.iFramesToRotate = 5000.0;
  window.iPerspective = 100;
    
  window.iNewParticlePerFrame = 2;
  
  window.fGrowDuration = 100.0;
  window.fWaitDuration = 200.0;
    
  window.fShrinkDuration = 10.0;
  window.aColor = [67, 152, 137];
//  window.aColor radial-gradient(#95d0c5 5%, #449788 30%, #449788 100%);
//let fVX = 1;
  let fVX = (2.0 * fPI) / window.iFramesToRotate;

  const oRadGrad = null;
  const ctxRender = nCanvasRender.getContext('2d');

  const oRender = {pFirst: null};
  const oBuffer = {pFirst: null};
  
  let w = (h = 0);

  // gets/sets size
  const fnSetSize = function() {
    nCanvasRender.width = (w = window.innerWidth);
    nCanvasRender.height = (h = window.innerHeight);
    
    if (document.body.offsetWidth < 1024) {
        iProjSphereX = w / 1.4;
        iProjSphereY = h / 2;
    } else if (document.body.offsetWidth >= 1024) {
        iProjSphereX = w / 1.3;
        iProjSphereY = h / 2;
    }
      
//    iProjSphereY = h / 2;
    return {w, h};
  };

  fnSetSize();
  
  // window.onresize
//  fnAddEventListener(window, 'resize', fnSetSize);

  const fnSwapList = function(p, oSrc, oDst) {
//    if (p != null) {
//      // remove p from oSrc
//      if (oSrc.pFirst === p) {
//        oSrc.pFirst = p.pNext;
//        if (p.pNext != null) { 
//            p.pNext.pPrev = null;
//        }
//      } else {
//        p.pPrev.pNext = p.pNext;
//        if (p.pNext != null) { 
//            p.pNext.pPrev = p.pPrev; 
//        }
//      }
//    } 
//      else {
      // create new p
      p = new Particle();
//    }
  
    p.pNext = oDst.pFirst;
//    if (oDst.pFirst != null) { 
//        oDst.pFirst.pPrev = p; 
//    }
    oDst.pFirst = p;
    p.pPrev = null;
    return p;
  };
  
    
  // Particle
  class Particle {
    
    static initClass() {
      // Current Position
      this.prototype.fX = 0.0;
      this.prototype.fY = 0.0;
      this.prototype.fZ = 0.0;
        
      // Current Velocity
      this.prototype.fVX = 0.0;
      this.prototype.fVY = 0.0;
      this.prototype.fVZ = 0.0;
      
      // Current Acceleration
      this.prototype.fAX = 0.0;
      this.prototype.fAY = 0.0;
      this.prototype.fAZ = 0.0;
      // Projection Position
      this.prototype.fProjX = 0.0;
      this.prototype.fProjY = 0.0;
      
      // Rotation
      this.prototype.fRotX = 0.0;
      this.prototype.fRotZ = 0.0;
      
      // double linked list
      this.prototype.pPrev = null;
      this.prototype.pNext = null;
      
      this.prototype.fAngle = 0.0;
      this.prototype.fForce = 0.0;
  
      this.prototype.fGrowDuration = 0.0;
      this.prototype.fWaitDuration = 0.0;
      this.prototype.fShrinkDuration = 0.0;
      
      this.prototype.fRadiusCurrent = 0.0;
      
      this.prototype.iFramesAlive = 0;
      this.prototype.bIsDead = false;
    }
      
      
    fnInit(gradient) {
        
      this.fAngle = fnRnd() * fPI * 2;
      this.fForce = fnACos(fnRnd2());
      this.fAlpha = 0;
      this.bIsDead = false;
      this.iFramesAlive = 0;
      this.fX = iRadiusSphere * fnSin(this.fForce) * fnCos(this.fAngle);
      this.fY = iRadiusSphere * fnSin(this.fForce) * fnSin(this.fAngle);
      this.fZ = iRadiusSphere * fnCos(this.fForce);
      this.fVX = fStartVX * this.fX;
      this.fVY = fStartVY * this.fY;
      this.fVZ = fStartVZ * this.fZ;
      this.fGrowDuration = window.fGrowDuration + (fnRnd2() * (window.fGrowDuration / 4.0));
      this.fWaitDuration = window.fWaitDuration + (fnRnd2() * (window.fWaitDuration / 4.0));
      this.fShrinkDuration = window.fShrinkDuration + (fnRnd2() * (window.fShrinkDuration / 4.0));
      this.fAX = 0.0;
      this.fAY = 0.0;
      this.fAZ = 0.0;
        
    }
  
      
    fnUpdate() {
      if (this.iFramesAlive > (this.fGrowDuration + this.fWaitDuration)) {
        this.fVX += this.fAX + (fMaxAX * fnRnd2());
        this.fVY += this.fAY + (fMaxAY * fnRnd2());
        this.fVZ += this.fAZ + (fMaxAZ * fnRnd2());
        this.fX += this.fVX;
        this.fY += this.fVY;
        this.fZ += this.fVZ;
      }

      this.fRotX = (fCosAngle * this.fX) + (fSinAngle * this.fZ);
      this.fRotZ = (-fSinAngle * this.fX) + (fCosAngle * this.fZ);
      this.fRadiusCurrent = Math.max(0.01, window.iPerspective / (window.iPerspective - this.fRotZ));
      this.fProjX = (this.fRotX * this.fRadiusCurrent) + iProjSphereX;
      this.fProjY = (this.fY * this.fRadiusCurrent) + iProjSphereY;
      this.fAlpha += 0.01;
//      this.iFramesAlive += 1;

//      if (this.iFramesAlive < this.fGrowDuration) {
//        this.fAlpha = (this.iFramesAlive * 1.0) / this.fGrowDuration;
//          this.fAlpha = 1.0;
//      } else if (this.iFramesAlive < (this.fGrowDuration + this.fWaitDuration)) {
//        this.fAlpha = 1.0;
//      } else if (this.iFramesAlive < (this.fGrowDuration + this.fWaitDuration + this.fShrinkDuration)) {
//        this.fAlpha = (((this.fGrowDuration + this.fWaitDuration + this.fShrinkDuration) - this.iFramesAlive) * 1.0) / this.fShrinkDuration;
//          this.fAlpha = 1.0;
//      }
//        else {
//        this.bIsDead = true;
//      }

      if (this.bIsDead === true) {
        fnSwapList(this, oRender, oBuffer);
      }

//      this.fAlpha *= fnMin(1.0, fnMax(0.5, this.fRotZ / iRadiusSphere));
//      this.fAlpha = fnMin(1.0, fnMax(0.0, this.fAlpha));
    }
  }
  Particle.initClass();
      
    
    
//    RENDER PART
    
  const fnRender = function() {
    ctxRender.fillStyle = "#14201E";
//       ctxRender.fillStyle = "#FFF800";
    ctxRender.fillRect(0, 0, w, h);
    
     
    
    let p = oRender.pFirst;
//    let p = new Particle();
//    let iCount = 0;
  
      while (p != null) {

// Set the fill style and draw a rectangle
      ctxRender.fillStyle = aColor;
      ctxRender.fillStyle = `rgba(${window.aColor.join(',')},${p.fAlpha.toFixed(4)})`;
//      var gradient = this.createRadialGradient(110,90,30, 100,100,70);

//      gradient.addColorStop(.05, '#95d0c5');
//      gradient.addColorStop(.3, '#449788');
//      gradient.addColorStop(1, '#449788');
      
//      ctxRender.fillStyle = "#343434";
      ctxRender.fillStyle = aColor;
      ctxRender.beginPath();
      ctxRender.arc(p.fProjX, p.fProjY, p.fRadiusCurrent, 0, 2 * fPI, false);
      ctxRender.closePath();
      ctxRender.fill();
      p = p.pNext;
//      iCount += 1;
    }
      
  };
    
    
    
    
//    MY GYPER_SUB_STANDARTS
    
    
    // CREATE PARTICLES 
    // p - particle
    // elCount - count of particles
    let p;
    
    if (document.body.offsetWidth >= 1024) { 
        var elCount = 2500;
    } else if(document.body.offsetWidth < 1024) { 
    
        var elCount = 1500;
    
    }
    
    for(var i = 0; i < elCount; i++) {
        p = fnSwapList(oBuffer.pFirst, oBuffer, oRender);
        p.fnInit();
    }
    
    
    
    
    
    
//    BETTER DON`T TUCH THIS FUNC
//    PLEASE
    
  var fnNextFrame = function() {
//    let p;
    oStats.begin();
    fAngle = (fAngle + fVX) % (2.0 * fPI);
    fSinAngle = fnSin(fAngle);
    fCosAngle = fnCos(fAngle);
//    let iAddParticle = 1;
//      window.iNewParticlePerFrame
//    let iCount = 0;
//    for (var iAddParticle = 0; iAddParticle < 1; iAddParticle++) {
//      p = fnSwapList(oBuffer.pFirst, oBuffer, oRender);
//      p.fnInit();
//    }
  
    p = oRender.pFirst;
    
    while (p != null) {
      const { pNext } = p;
      p.fnUpdate();
      p = pNext;
//      iCount++;
    }
    fnRender();

    oStats.end();
    return fnRequestAnimationFrame(() => fnNextFrame());
  };
    
  fnNextFrame();  

    
    
    
    
    
    
    
//  const gui = new dat.GUI();
//  gui.add(window, 'fGrowDuration').min(10).max(500).step(1);
//  gui.add(window, 'fWaitDuration').min(0).max(100).step(1);
//  gui.add(window, 'fShrinkDuration').min(10).max(500).step(1);
//  gui.add(window, 'iPerspective').min(150).max(1000).step(1);
//  gui.add(window, 'iNewParticlePerFrame').min(1).max(20).step(1);
//  gui.add(window, 'iNewParticlePerFrame');    
//  gui.add(window, 'iFramesToRotate').min(50).max(2500).step(0).onChange(() => fVX = (2.0 * fPI) / window.iFramesToRotate);
//  gui.addColor(window, 'aColor').onChange(function() {
//    window.aColor[0] = ~~window.aColor[0];
//    window.aColor[1] = ~~window.aColor[1];
//    return window.aColor[2] = ~~window.aColor[2];
//  });
    
    
    
//  if (window.innerWidth < 1000) {
//    gui.close();
//    window.iNewParticlePerFrame = 5;
//  }

  window.app = this;
};


// RESIZING

let temp;
let inTemp;

let timerNON = setInterval(function() {
    var wiiiiii = document.body.offsetWidth;
    clearInterval(timerNON);
    if (wiiiiii >= 1024) {
        temp = 1;
        inTemp = +0.08;
    } else {
        temp = 1;
        inTemp = +0.025;
    }
}, 1);
    
let timerId = setInterval(function() {
    if (document.body.offsetWidth >= 1366) {
//        console.log(temp + ' | ' + inTemp);
        if ( window.iPerspective < 2800) {
          temp += Math.sin(inTemp);
          window.iPerspective += temp;
        }
        if ( window.iPerspective >= 260) {
            clearInterval(timerId);
        }
//        console.log(window.iPerspective + ' - adin');
    } else if (document.body.offsetWidth < 1366) {
//        console.log(temp + ' | ' + inTemp);
        if ( window.iPerspective < 800) {
          temp += Math.sin(inTemp);
          window.iPerspective += temp;
        }
        if ( window.iPerspective >= 799) {
            clearInterval(timerId);
        }       
//        console.log(window.iPerspective + ' - dwa');
    } 
//    else if (document.body.offsetWidth <= 500) {
//        if ( window.iPerspective < 1000) {
//          temp += inTemp;
//          window.iPerspective += temp;
//        }
//        if ( window.iPerspective >= 999) {
//            clearInterval(timerId);
//        }
//        console.log(window.iPerspective + ' - tri');
//    }
}, 1);

setTimeout(fnAddEventListener(window, 'load', app),10);