// ========================================
// RELEASE DATE
// ========================================

const releaseDate =
    new Date("2026-08-20T18:30:00").getTime();


// ========================================
// ELEMENTS
// ========================================

const countdownElement =
    document.getElementById("countdown");

const openButton =
    document.getElementById("open-button");

const lockIcon =
    document.getElementById("lock-icon");


let countdown;


// ========================================
// UPDATE COUNTDOWN
// ========================================

function updateCountdown() {

    const now = Date.now();

    const distance =
        releaseDate - now;


    // ====================================
    // RELEASED
    // ====================================

    if (distance <= 0) {

        countdownElement.textContent =
            "You can open it now! 💌";


        openButton.classList.remove(
            "disabled"
        );


        openButton.setAttribute(
            "aria-disabled",
            "false"
        );


        lockIcon.textContent =
            "🔓";


        clearInterval(countdown);

        return;
    }


    // ====================================
    // LOCKED
    // ====================================

    openButton.classList.add(
        "disabled"
    );


    openButton.setAttribute(
        "aria-disabled",
        "true"
    );


    lockIcon.textContent =
        "🔒";


    // ====================================
    // CALCULATE TIME
    // ====================================

    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
                (1000 * 60)) /
            1000
        );


    // ====================================
    // DISPLAY
    // ====================================

    countdownElement.textContent =
        `${days} days, ` +
        `${hours} hours, ` +
        `${minutes} minutes and ` +
        `${seconds} seconds left`;
}


// ========================================
// PREVENT EARLY CLICK
// ========================================

openButton.addEventListener(
    "click",
    function (event) {

        const now = Date.now();

        if (now < releaseDate) {

            event.preventDefault();

        }

    }
);


// ========================================
// START
// ========================================

updateCountdown();

countdown =
    setInterval(
        updateCountdown,
        1000
    );