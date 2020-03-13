//this is an artwork, but we left the notes Chris made for his students, and it is a demo about constructors!
// modified by mark beasley 2.03.20
//what if you wanted the objects you draw to have a "memory"? You could store information
//inside the objects and then change them whenever you want. This is how you do that.

//first we set up a global variable that will hold our objects.
//variables can hold anything, including functions.
var spacing = 13;
var txtSize = 20;
var particles = [];
var message =
  "Had there been nothing more in our renunciation than this?\n There had been something more to sell.\n At least we thought so.. But who could tell?\n There was only one bit of evidence left against us.\n Auto depiction itself, any selfie was evidence fortold.\n We would destroy it all.\n Why? had we kept it on the shelf?\n It has given us pleasure once to watch it changing and growing old.\n Of late we have felt no such pleasure.\n It has kept us awake at night.\n When we have been away, we have been filled with terror lest other eyes should look upon it.\n It has brought melanch0ly across all passions right.\n Its mere memory had marred many moments of joy.\n It had been like conscience to us all.\n Yes, it had been conscience.\n We should have destroyed it.\n This unjust mirror. THIS mirror of our soul.\n however DO we want us?\n however do we need us?\n reflection beyond cOntrole.\n In these past new decades.\n my soldiers have been slaughtered.\n man made men, are no, no longer agents.\n this chorus I am on my own.\n I am no longer on my OWN.\n other armies slaying bigger truths.\n no more forging weapons as ornament.\n bought the dying the worth less.\n drawing old lines in new land.\n me and you will see we ain't playing.\n stand up for the home feed.\n on our throne we will bleed.\n Stand up for our true need.\n This unjust mirror. this mirror of our soul.\n however do we want us?\n however do we need us?\nreflection beyond controle.\n lift up our voices.\n if is this depiction.\n this must be us.\n who am i if not alone.\n this play is good enough for each of us.\n subscribe to not another tribe.\n know your meme and meme what you know.\n or perhaps get hired not to understand.\n the same message with a different meaning.\n write some comments under a different name.\n kiss the hand that eats your sense of belonging.\n we endorse a tired land.\n through lazy ventriloquy.\n plausible deniability .\n any third rate pseudonym.\n edging validation.\n write some lies and fuck their feels.\n a ghost like presence.\n a opaque reflection of us. profiles in the mist and mirror.\n GLORIA--GLORIA- canvassing stamina.\n This unjust mirror. this mirror of our soul.\n however do we want us?\nhowever do we need us?\nreflection beyond controle.\n Yes, we are the same.\n I wonder what the rest of our life will be.\n Dont spoil it by renunciations.\n in comparison we are never a perfect type.\n Dont make ourselves incomplete.\n We are quite flawless now.\n we need not shake your head: we know who we are.\n Besides, let us not deceive ourselves.\n Life is not governed by will or intention.\n Life is a question of nerves, and fibre cables.\n Slowly built-up cells in which thought hides itself and passion has its nightmares.\n We may fancy ourselves safe and think ourselves strong\n_only to delete a little later\n_We are the type this age is searching for, and what it is afraid it has found\n_Life has been our art\n_We have set ourselves to music\n_our days are our sonnets__";

var lastPos;
var video;
var videoPlaying = false;
var lines = [];
var idx = 0;
var total = 0;
var snap;
var chorusLines = [];
var currentLine = null;
var linesToPlay = [];
var lineDelay = false;
var minLine = 1000;
var minDelay = 2500;
var maxDelay = 3500;
var maxLine = 0;

var mobileBg = [];
var isMobile = 'ontouchstart' in document.documentElement;
var activeImage = 0;

function preload() {
  snap = loadSound("chorus-loop.mp3");
  for(i = 0; i < 10; i++) {
    chorusLines[i] = loadSound('lines/line' + nf(i+1, 2) + '.mp3');
  }

  if (isMobile) {
    for(i = 0; i < 16; i++) {
      mobileBg[i] = loadImage('backgrounds/chorus' + nf(i+1, 2) + '.png');
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  lastPos = createVector(0, 0);
  textFont("roboto");
  textSize(txtSize);

  if (!isMobile) {
    video = createVideo(["videos/midterm.mp4"]);
  }

  messages = message.split('\n');
  for (i = 0; i < messages.length; i++) {
    lines[i] = messages[i].length;
    minLine = Math.min(minLine, messages[i].length);
    maxLine = Math.max(maxLine, messages[i].length);
    total += messages[i].length;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  if (!snap.isPlaying()) {
    snap.loop();
  }
  if (!isMobile && !videoPlaying) {
    video.loop();
    videoPlaying = true;
  }
}

function keyPressed() {
  // if (snap.isPlaying()) {
  //   snap.pause();
  // }
}

function queueAudio(lineIdx) {
  if (lineIdx % 10 == 5) {
    // load next 10 lines
    var linesLoaded = chorusLines.length;
    for(var j = linesLoaded; j < Math.min((linesLoaded + 10), lines.length); j++) {
      chorusLines[j] = loadSound('lines/line' + nf((j + 1), 2) + '.mp3');
    }
  }

  linesToPlay.push(lineIdx);
  if (linesToPlay.length == 1) {
    lineDelay = true;
    setTimeout(function () {
      lineDelay = false;
      chorusLines[linesToPlay[0]].play();
    }, map(messages[linesToPlay[0]].length, minLine, maxLine, minDelay, maxDelay));
  }
}

//then we make a new function, called a constructor.
//in this function, we pass in two variables, x,and y.
function particleConstructor(x, y, idx) {
  //our particle object contains two variables, position and direction
  this.pos = createVector(x, y);
  lastPos = createVector(mouseX, mouseY);

  var found = false;
  var index = 0;
  var cumulative = 0;
  var offset = 0;

  for(i = 0; i < lines.length && !found; i++) {
    cumulative += lines[i];
    if (idx < cumulative) {
      index = i;
      found = true;
      offset = cumulative - lines[i];

      if (index != currentLine) {
        currentLine = index;
        if (isMobile) {
          activeImage = ++activeImage % mobileBg.length;
        }
        queueAudio(currentLine);
      }
    }
  }

  this.str = messages[index][idx - offset];

  this.render = function () {
    textSize(17);
    text(this.str, particles[i].pos.x, particles[i].pos.y);
  }
}

function draw() {
  clear();
  if (isMobile) {
    background(mobileBg[activeImage]);
  }

  var distance = dist(mouseX, mouseY, lastPos.x, lastPos.y);
  if (mouseIsPressed && distance > spacing) {
    //"push" will add a new particle to your array.
    //this particle contains the mouseX and Y position

    // start over
    if (idx > total) {
      idx = 0;
    }

    particles.push(new particleConstructor(mouseX, mouseY, idx++));
  }

  if (linesToPlay.length > 0 && !lineDelay && !chorusLines[linesToPlay[0]].isPlaying()) {
    // remove most recent line
    linesToPlay.shift();

    // if another line is queued, start playing it
    if (linesToPlay.length > 0) {
      lineDelay = true;
      setTimeout(function () {
        lineDelay = false;
        chorusLines[linesToPlay[0]].play();
      }, map(messages[linesToPlay[0]].length, minLine, maxLine, minDelay, maxDelay));
    }
  }

  //then we'll use a for loop to draw all of our particles
  for (i = 0; i < particles.length; i++) {
    particles[i].render();
  }
}
