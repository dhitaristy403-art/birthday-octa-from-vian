/* =========================
   MEMBUKA SURPRISE
========================= */

function startSurprise() {

    const opening = document.getElementById("opening");
    const birthday = document.getElementById("birthday");

    opening.style.display = "none";
    birthday.style.display = "block";

    const music = document.getElementById("music");

    music.volume = 0.7;
    music.play();

    typeWriter();
}

/* =========================
   EFEK TULISAN
========================= */

const text = `
Selamat ulang tahun! 🎂💗

Hari ini adalah hari spesial untuk seseorang
yang sangat berarti.

Semoga di umur yang baru ini,
kamu selalu diberikan kesehatan,
kebahagiaan, dan banyak hal baik.

Semoga semua impian yang kamu punya
pelan-pelan bisa menjadi kenyataan.

Tetap menjadi diri kamu sendiri,
tetap tersenyum,
dan jangan pernah berhenti menjadi orang baik.

Sekali lagi...

HAPPY BIRTHDAY! 🎉💗
`;

let index = 0;

function typeWriter() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML +=
            text.charAt(index);

        index++;

        setTimeout(typeWriter, 35);
    }

}


/* =========================
   PESAN RAHASIA
========================= */

function showMessage() {

    const secret = document.getElementById("secret");

    secret.style.display = "block";

}


/* =========================
   MEMBUAT HATI RANDOM
========================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 35) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    heart.style.opacity =
        Math.random();

    document.querySelector(".hearts")
        .appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 11000);

}


/* Membuat hati terus menerus */

setInterval(createHeart, 300);