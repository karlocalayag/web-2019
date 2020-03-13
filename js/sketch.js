//this is an artwork, but we left the notes Chris made for his students, and it is a demo about constructors!
//what if you wanted the objects you draw to have a "memory"? You could store information 
//inside the objects and then change them whenever you want. This is how you do that.

//first we set up a global variable that will hold our objects. 
//variables can hold anything, including functions.
var spacing = 15;
var txtSize = 25;
var speedinc = 1.001;
var maxSpeed = 1;
var particles = [];
var message = "Hack hustle historicize--Deadline crushing merchandise -- Organic and balanced content--brand freshest friend--Success is no accident--Failure only excercise--All uttered as in print--be brave Dull born kind--Embrace this unhinged mind--dot dot bubble popped--add more coffee and choose to shine--Ship, distribute, sell--Collective regulation cursed--Vernacular vessel, crypto well--Greatness isnt unrehearsed--Fetishized your mediated--Psychographic targeting we could tell--Libertarian dank tanks rolling through--Work hard, break a ceiling you--reclaimed whispers from walled gardens--Esparanto toll booths too--Success is no accident--Name your shame and you--Circumvent the discontent--To capitalise on this bonus guilt--Hijacked the ideological infrastructure built--remember this, the lesson--Forget the mistake--legitimised discord seeding--Harvests competitive bleeding--Edging echo, coffee, more success--Ignoring quantified serotonine regrets --Updates avoid possible regress--distribution sacred shore--new platforms with out social gore--Surveillance not by few but all--compliant heavy disruption--No pressure makes no diamonds--From crooked shoulders we chime in--When opportunity knocks, reply all--Some aspects were devised--Experience of fact is compromised--Altered for a a nudging purpose--Reality dramatisation to surpass--The drudging drone--mediocrity only will condone--Message discipline on point--Yet you, consider, waiver, wont--Alleviate hierarchy favor--Reality together we will slay--Greatness is made today";

var lastPos;

function setup() {
  createCanvas(windowWidth, windowHeight);
  lastPos = createVector(0,0);
  textFont('ronoto');
  textSize(txtSize);
}

//then we make a new function, called a constructor. 
//in this function, we pass in two variables, x,and y.
function particleConstructor(x,y)
{
  //our particle object contains two variables, position and direction
  this.pos = createVector(x,y);
  //I'm giving my particle a random direction;
  this.dir = createVector(random(-0.01,0.01),random(-0.01,0.01));
  this.life = 0;
  lastPos = createVector(mouseX,mouseY);
}


//this is a function to draw your particles. notice that we're passing in a var called i...
function renderParticle(i)
{
  
  
  
  //we'll use this variable i to check our particle array and draw a circle there
 //ellipse(particles[i].pos.x,particles[i].pos.y,10);
  textSize(17);

  text(message[i],particles[i].pos.x,particles[i].pos.y);
  

  
  
}

function draw() {
  clear();
  var distance = dist(mouseX,mouseY,lastPos.x,lastPos.y);
  if(mouseIsPressed && distance > spacing)
  {
    //"push" will add a new particle to your array.
    //this particle contains the mouseX and Y position
  	particles.push(new particleConstructor(mouseX,mouseY));
  }
  
  //then we'll use a for loop to draw all of our particles
  for(i = 0; i < particles.length; i++)
  {
  	renderParticle(i);
  }
}

