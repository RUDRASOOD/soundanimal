function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = mL5.soundClassifier("https://teachablemachine.withgoogle.com/models/gx4gWulCW/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, reults)
{
    console.log("gotResult");
}