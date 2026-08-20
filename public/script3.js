// ========================================
// LETTER PAGE
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const letter =
            document.querySelector(
                ".letter-card"
            );


        if (!letter) {
            return;
        }


        // Pequeño efecto al terminar
        // la aparición de la carta.

        setTimeout(() => {

            letter.classList.add(
                "opened"
            );

        }, 1200);

    }
);