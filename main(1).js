function preload(){

}
function setup(){
Canvas=createCanvas(300,300);
Canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7K6QTp9kh/model.json',modelLoaded);
}
function draw(){
image(video,0,0,300,300);
classifier.classify(video,gotresults)
}
function modelLoaded(){
    console.log("model is loaded!!!")


}
function gotresults(error,results){
if(error)
{
    console.log(error);
}
else
{
    console.log(results);
    document.getElementById("object_name").innerHTML=results[0].label;
    document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}
