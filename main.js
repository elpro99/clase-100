var reconocimiento_de_voz=window.webkitSpeechRecognition;
var recognition=new reconocimiento_de_voz();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    textbox.innerHTML=content;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if(content=="Toma mi selfi"){
        console.log("tomando selfie");
        speak();
    }
}
camera=document.getElementById("camera");
function speak(){
    var sint=window.speechSynthesis;
    speakdata=document.getElementById("textbox").value;
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    sint.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeselfie();
    save();},5000);
}
Webcam.set({
    width:360,
    height:250,
    Image_format:'png',
    png_quality:90
});
function takeselfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'"/>';
    });
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie").src;
    link.href=image;
    link.click();
}
