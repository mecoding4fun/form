var inp;
var inp2;
var inp3;
var inp4;

var val;
var val2;
var val3;
var val4;
var database;
var user;
var sub;

function setup(){
  createCanvas(windowWidth,windowHeight);
  inp = createInput('name');
  inp.position(width/2-10,height/2);

  inp2 = createInput('phone no.');
  inp2.position(width/2-10,height/2+20);

  inp3 = createInput('pincode');
  inp3.position(width/2-10,height/2+40);

  inp4 = createInput('passcode');
  inp4.position(width/2-10,height/2+60);

  user = new User
  sub = createButton('Submit');
  sub.position(width/2-10,height/2+80);
  sub.mousePressed(submit)
}

function draw(){
  textSize(32);
  text("Form",width/2,50);
  val = inp.value();
  val2 = inp2.value();
  val3 = inp3.value();
  val4 = inp4.value();
  database = firebase.database();
  user.name = val;
  user.phone = val2;
  user.pincode = val3;
  user.passcode = val4;


  
}

function submit(){
  user.update();
}