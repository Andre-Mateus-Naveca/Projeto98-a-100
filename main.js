var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var imgId = ""
var camera = document.getElementById("camera");

function onPageLoad() {
    Webcam.set({
        width: 360,
        height: 250,
        image_format: 'png',
        png_quality: 90
    });
    Webcam.attach(camera);
}

function start() {
    recognition.start();
}

recognition.onresult = function (event) {
    var result = event.results[0][0].transcript
    if (result == "selfie") {
        speak1();
    }
    console.log('Transcript: ' + event.results[0][0].transcript);
    console.log('Confidence: ' + event.results[0][0].confidence);
}

function speakText(text) {
    var utterThis = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterThis);
}
function countDown(timeoutId, timeout)
{
    var repeatCount = timeout
    document.getElementById(timeoutId).innerHTML = repeatCount;
    var id = setInterval(function () {
        repeatCount--;
        document.getElementById(timeoutId).innerHTML = repeatCount;
        if (repeatCount == 0) {
            clearTimeout(id)
        }
    }, 1000)

}
function speak1() {

    speakText("Tirando uma selfie em 5 segundos");
    imgId = "selfie1"

    setTimeout(function () {
        takeSelfie();
        speak2();
    }, 5000);
    countDown("timeout1", 5);
}

function speak2() {

    speakText("Tirando uma selfie em 10 segundos");
    imgId = "selfie2"

    setTimeout(function () {
        takeSelfie();
        speak3();
    }, 10000);
    countDown("timeout2", 10);
}
function speak3() {

    speakText("Tirando uma selfie em 15 segundos");
    imgId = "selfie3"

    setTimeout(function () {
        takeSelfie();
    }, 15000);
    countDown("timeout3", 15);
}

function takeSelfie() {
    console.log(imgId);

    Webcam.snap(function (imageURI) {
        console.log("Image URI = " + imageURI)
        if (imgId == "selfie1") {
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="' + imageURI + '"/>';
        }
        else if (imgId == "selfie2") {
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="' + imageURI + '"/>';
        }
        else if (imgId == "selfie3") {
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="' + imageURI + '"/>';
        }
    });
}
