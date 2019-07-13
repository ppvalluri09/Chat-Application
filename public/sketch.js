
var socket;
var input;
var user_input;
var user_name;
var button;
var temp;
var button1;
var flag=0;
var speech_button;
var local_msg;

let lang;
let speechRec;
let cont;
let interim;


function setup() {
  // put setup code here
  socket = io();
  socket.on('msg', recv_msg);
  user_input = select('.name');
  temp = select('.temp');
  button = createButton('Submit');
  button.class('btn');
  button.parent('box1');
  button.mousePressed(function(){
    user_name = user_input.value();
    button.style('visibility', 'hidden');
    user_input.style('visibility', 'hidden');
    input.style('visibility', 'visible');
    button1.style('visibility', 'visible');
    temp.html('Message');
    temp.style('font-style', 'italic');
    input.style('transform', 'translateX(-175px)');
  });

  input = select('.input');
  input.style('visibility', 'hidden');
  button1 = createButton('Send');
  button1.style('visibility', 'hidden');
  button1.class('btn1');
  button1.parent('box1');
  button1.mousePressed(function(){
    initiate();
  });
  // speech_button = createButton('Speech');
  // speech_button.class('btn2');
  // speech_button.mousePressed(function(){
  //   lang = navigator.language || 'en-US';
  //   speechRec = new p5.SpeechRec(lang, gotSpeech);
  //
  //   cont = true;
  //   interim = false;
  //   if (flag==0){
  //   speechRec.start(cont, interim);
  //   flag = 1;
  //   speech_button.html('Stop');
  // } else if (flag==1){
  //   speechRec.stop();
  //   flag = 0;
  //   speech_button.html('Speech');
  // }
  // });
  //
  // function gotSpeech(){
  //   if (speechRec.resultValue){
  //     local_msg = speechRec.resultString;
  //     console.log(local_msg);
  //     initiate_voice();
  //   }
  // }
}

// function initiate_voice(){
//   var data = {
//     name: user_name,
//     msg:local_msg
//   }
//
//   socket.emit('msg', data);
// }



function initiate(){
  var data = {
    name: user_name,
    msg: input.value(),
  }
  socket.emit('msg', data);
}

function recv_msg(data){
  console.log(data.name + ': ' + data.msg);
  if (data.name==user_name){
    var inc_msg = createElement('li', 'Me: ' + data.msg);
    inc_msg.class('msg');
    inc_msg.style('list-style', 'none');
    inc_msg.parent('result');
    // createP('Me: ' + data.msg);
  } else{
    var inc_msg = createElement('li', data.name + ': ' + data.msg);
    inc_msg.class('msg');
    inc_msg.style('list-style', 'none');
    inc_msg.style('text-align', 'left');
    inc_msg.parent('result');
    //createP(data.name + ': ' + data.msg);
  }
  //createP('Them: ' + data.msg);
}

function draw() {
  // put drawing code here

}
