const synth = window.speechSynthesis;

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}

const recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-IN';

function stop()
{
    const s=document.getElementById('voiceButtonStop');
    submitCommand.stop;
}

function submitCommand() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    const response = document.getElementById('response');

    if (userInput.includes('hello')) {
        response.textContent = "Hello! How can I assist you?";
        speak("Hello! How can I assist you?");
    } else if ((userInput.includes('open website')) || (userInput.includes('open google'))) {
        const website = userInput.replace('$open website', '_blank').trim();
        window.open(`https://www.google.com`);
    } 
    
    else if ((userInput.includes('who is'))) {
        const website = userInput.replace('$open website', '_blank').trim();
        window.open(`https://www.google.com`);
    
    }else if (userInput.includes('open youtube')) {
        const website = userInput.replace('open youtube', '_blank').trim();

        window.open(`https://www.youtube.com`);
    }
    else if ((userInput.includes('what is time now')) ||(userInput.includes('date time'))) {
        showCurrentDateTime();
    }
     else if (userInput.includes('exit')) {
        response.textContent = "Goodbye!";
        speak("Goodbye!");
    } else {
        response.textContent = "I'm sorry, I don't understand that command.";
        speak("I'm sorry, I don't understand that command.");
    }
}

function showCurrentDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' });
    const response = document.getElementById('response');
    response.textContent = 'Current Date and Time: ' + formattedDate;
    speak("The current date and time is " + formattedDate);
}

function startSpeechRecognition() {
    recognition.start();
}

recognition.onresult = function (event) {
    const userSpokenText = event.results[0][0].transcript.toLowerCase();
    document.getElementById('userInput').value = userSpokenText;
    submitCommand();
}

document.getElementById('voiceButton').addEventListener('click', function () {
    startSpeechRecognition();
});

document.getElementById('userInput').addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        submitCommand();
    }
});
