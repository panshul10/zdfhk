var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if (Content == "take my selfie")
    {
        console.log("taking selfie---");
        speak();

    }
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").Value;
    speak_data = "Taking you Selfie in 5 seconds"; 
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);
}
camera = document.getElementById("camera");
Webcam.set({
    width : 360,
    Height : 250,
    image_format : 'jpej',
    jpeg_quality : 90
});

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}


function take_snapshot()
{
    Webcam. snap(function(data_url)
    {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_url+'"/>';
    });
}
                                                                                                  
                                                                                                  
                                                                                                  
                                                                                                  
                                                                                                  
                                                                                                  
                                                                                                  
                                                                                                  
                                                                                                  
                                                                                                  