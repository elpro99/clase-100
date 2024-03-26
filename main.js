var reconocimiento_de_voz=window.webkitSpeechRecognition;
var recognition=new reconocimiento_de_voz();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
}
camera=document.getElementById("camera");
function speak(){
    var sint=window.speechSynthesis;
    speakdata=document.getElementById("textbox").value;
    var utterThis=new SpeechSynthesisUtterance(speakdata);
    sint.speak(utterThis);
    Webcam.attach(camera);
}
Webcam.set({
    width:360,
    height:250,
    Image_format:'png',
    png_quality:90
});
