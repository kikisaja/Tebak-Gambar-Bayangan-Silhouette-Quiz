// --- DATA SOAL SILUET (Menggunakan Icon SVG publik dari Wikimedia / CDN) ---
const quizData = [
    {
        name: "Kucing (Cat)",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
    },
    {
        name: "Pisang (Banana)",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
    },
    {
        name: "Sepeda (Bicycle)",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/41/Left_side_of_Flying_Pigeon_bicycle.jpg"
    },
    {
        name: "Gitar (Guitar)",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Classical_guitar_two_views.png"
    },
    {
        name: "Kamera (Camera)",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Nikon_D80_Front.jpg"
    },
    {
        name: "Apel (Apple)",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"
    }
];

// --- STATE PERMAINAN ---
let currentQuestionIndex = 0;
let score = 0;
let activeQuestions = [];
const TOTAL_ROUNDS = 5;

// --- AMBIL ELEMEN DOM ---
const questionNumberEl = document.getElementById("question-number");
const scoreDisplay = document.getElementById("score-display");
const quizImage = document.getElementById("quiz-image");
const imageWrapper = document.getElementById("image-wrapper");
const optionsGrid = document.getElementById("options-grid");
const btnNext = document.getElementById("btn-next");

// --- ACAK ARRAY ---
function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

// --- MULAI / RESET GAME ---
function initGame() {
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.textContent = score;
    activeQuestions = shuffleArray(quizData).slice(0, TOTAL_ROUNDS);
    loadQuestion();
}

// --- MUAT SOAL ---
function loadQuestion() {
    btnNext.classList.add("hidden");
    imageWrapper.classList.remove("revealed");

    const currentQ = activeQuestions[currentQuestionIndex];
    questionNumberEl.textContent = `${currentQuestionIndex + 1} / ${TOTAL_ROUNDS}`;
    quizImage.src = currentQ.img;

    // Buat pilihan ganda (1 benar, 3 pengecoh)
    const correctAnswer = currentQ.name;
    const wrongAnswers = quizData
        .filter((item) => item.name !== correctAnswer)
        .map((item) => item.name);

    const shuffledWrong = shuffleArray(wrongAnswers).slice(0, 3);
    const options = shuffleArray([correctAnswer, ...shuffledWrong]);

    // Render Tombol Pilihan
    optionsGrid.innerHTML = "";
    options.forEach((opt) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option-btn";
        btn.textContent = opt;

        btn.addEventListener("click", () => handleAnswer(opt, correctAnswer, btn));
        optionsGrid.appendChild(btn);
    });
}

// --- PROSES JAWABAN ---
function handleAnswer(selected, correct, clickedBtn) {
    // Buka filter siluet jadi warna asli
    imageWrapper.classList.add("revealed");

    // Matikan semua tombol
    const allButtons = optionsGrid.querySelectorAll(".option-btn");
    allButtons.forEach((btn) => {
        btn.disabled = true;
        if (btn.textContent === correct) {
            btn.classList.add("correct");
        }
    });

    if (selected === correct) {
        score += 20;
        scoreDisplay.textContent = score;
    } else {
        clickedBtn.classList.add("wrong");
    }

    // Tampilkan tombol lanjut
    if (currentQuestionIndex < TOTAL_ROUNDS - 1) {
        btnNext.textContent = "➡️ LANJUT SOAL BERIKUTNYA";
    } else {
        btnNext.textContent = "🏆 LIHAT HASIL AKHIR";
    }
    btnNext.classList.remove("hidden");
}

// --- EVENT TOMBOL LANJUT ---
btnNext.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < TOTAL_ROUNDS) {
        loadQuestion();
    } else {
        alert(`Kuis Selesai! Skor akhir kamu: ${score} dari 100 🎉`);
        initGame();
    }
});

// Inisialisasi awal
initGame();