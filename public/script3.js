// ========================================
// AUDIO
// ========================================

const audio = document.getElementById("musica1");

function playAudio() {

    if (!audio) {
        console.error("No se encontró el elemento de audio.");
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


// Si el navegador bloquea el autoplay,
// intentar reproducir después de una interacción.

document.addEventListener(
    "click",
    playAudio,
    { once: true }
);