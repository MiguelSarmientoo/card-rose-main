// ========================================
// AUDIO
// ========================================

const audio =
    document.getElementById("musica1");


function playAudio() {

    if (!audio) {

        console.error(
            "No se encontró el elemento de audio."
        );

        return;
    }


    audio.play().catch((error) => {

        console.warn(
            "El navegador bloqueó la reproducción automática:",
            error
        );

    });
}


// ========================================
// START AUDIO
// ========================================

playAudio();


// Si el navegador bloquea autoplay,
// intentar nuevamente cuando exista
// interacción del usuario.

document.addEventListener(
    "click",
    playAudio,
    { once: true }
);


// ========================================
// LOADING MESSAGES
// ========================================

const loadingMessage =
    document.getElementById(
        "loading-message"
    );


const messages = [

    "Preparing something special... ✨",

    "Just a little surprise for you... 💕",

    "Adding a little bit of love... ❤️",

    "Almost there... 💌",

    "Your message is ready... 🐧"

];


let messageIndex = 0;


function changeLoadingMessage() {

    if (!loadingMessage) {

        return;
    }


    loadingMessage.style.opacity = "0";

    loadingMessage.style.transform =
        "translateY(5px)";


    setTimeout(() => {

        messageIndex =
            (messageIndex + 1) %
            messages.length;


        loadingMessage.textContent =
            messages[messageIndex];


        loadingMessage.style.opacity =
            "1";


        loadingMessage.style.transform =
            "translateY(0)";

    }, 350);
}


setInterval(
    changeLoadingMessage,
    1800
);


// ========================================
// GO TO LETTER
// ========================================

// La página de carga dura 5 segundos.

setTimeout(() => {

    window.location.href =
        "index3.html";

}, 5000);