// ======================================================
// HAPPY BIRTHDAY SIVA ❤️
// Password: Gorilla
// ======================================================


// ================= PASSWORD =================

const PASSWORD = "Gorilla";


// ================= MUSIC =================

const music = document.getElementById("music");


// ================= TYPING TEXT =================

const typingText = `
Dear Siva... ❤️

Happy Birthday Mentaluuu 🎂

You're not just my friend...
You're one of the most special person in my life.

May all your dreams come true.
Keep smiling forever! ❤️
`;

let textIndex = 0;

const typingElement = document.getElementById("typing");


function typeText() {

    if (textIndex < typingText.length) {

        typingElement.innerHTML +=
            typingText.charAt(textIndex) === "\n"
                ? "<br>"
                : typingText.charAt(textIndex);

        textIndex++;

        setTimeout(typeText, 45);
    }
}


// ================= PASSWORD CHECK =================

function checkPassword() {

    const input =
        document.getElementById("password").value.trim();

    const login =
        document.getElementById("login");

    const main =
        document.getElementById("main");

    const error =
        document.getElementById("error");


    if (input === PASSWORD) {

        // Hide password screen
        login.style.display = "none";

        // Show main page
        main.style.display = "block";


        // Start typing
        typeText();


        // Start music
        music.currentTime = 0;

        music.volume = 0.5;

        music.play()
            .then(() => {

                console.log("Music started ❤️");

            })
            .catch((error) => {

                console.log("Music could not start:", error);

            });


        // Start countdown
        startCountdown();


        // Confetti
        startConfetti();


    } else {

        error.innerText =
            "❌ Wrong Password! Try again ❤️";

    }
}


// ================= ENTER KEY =================

document
    .getElementById("password")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            checkPassword();

        }

    });


// ================= COUNTDOWN =================

function startCountdown() {

    let count = 3;

    const countdown =
        document.getElementById("countdownNumber");

    countdown.innerText = count;


    const timer = setInterval(() => {

        count--;

        if (count > 0) {

            countdown.innerText = count;

        } else {

            countdown.innerText = "🎁";

            clearInterval(timer);

        }

    }, 1000);
}


// ================= PHOTO SLIDESHOW =================

const photos = [

    "image1.jpg",

    "image2.jpg",

    "image3.jpg",


];


let currentPhoto = 0;


const slide =
    document.getElementById("slide");


function showPhoto() {

    slide.style.opacity = "0";


    setTimeout(() => {

        slide.src = photos[currentPhoto];

        slide.style.opacity = "1";

    }, 250);

}


// NEXT PHOTO

function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= photos.length) {

        currentPhoto = 0;

    }

    showPhoto();

}


// PREVIOUS PHOTO

function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 0) {

        currentPhoto = photos.length - 1;

    }

    showPhoto();

}


// Automatic slideshow

setInterval(() => {

    nextPhoto();

}, 4000);


// ================= REVEAL GIFT =================

function revealGift() {

    const gift =
        document.getElementById("gift");


    gift.classList.remove("hidden");


    startConfetti();

}


// ================= CONFETTI =================

function startConfetti() {

    if (typeof confetti !== "undefined") {

        confetti({

            particleCount: 150,

            spread: 100,

            origin: {
                y: 0.6
            }

        });

    }

}


// ================= CONSOLE =================

console.log("🎂 Happy Birthday Siva ❤️");

console.log("🔐 Password: Mentaluuu");

console.log("💖 Made with love by Anusha");
