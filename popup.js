document.addEventListener('DOMContentLoaded', function() {
    const outputDiv = document.getElementById('output');
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.lang = 'en-US';
    recognition.interimResults = true;

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        outputDiv.textContent += transcript;
    };

    recognition.onend = function() {
        recognition.start();
    };

    recognition.start();
});
