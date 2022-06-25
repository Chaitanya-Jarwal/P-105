Webcam.set({
width:360,
height:310,
image_format:'png',
png_quality:90
});
 camera = document.getElementById("camera");
Webcam.attach('#camera');
function takesnapshot() {
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML ="<img id='Img' src'"+data_uri+"'>"
    });
}
console.log("ml5 version is=" + ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/grLdyGlmf/model.json",modelLoaded);

function modelLoaded() {
    console.log("model Loaded succesfully.");
}
function check() {
    img= document.getElementById("IMG");
    classifier.classify(img,gotResult);
}
 function gotResult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("result_object_accuaracy").innerHTML=result[0].confidence.toFixed(4);
    }
 }