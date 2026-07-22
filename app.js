let currentIndex = 0;
let shuffledOperas = [];

const plotEl = document.getElementById('plot');
const titleEl = document.getElementById('title');
const composerEl = document.getElementById('composer');
const charactersEl = document.getElementById('characters');
const answerSection = document.getElementById('answerSection');
const revealBtn = document.getElementById('revealBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const currentEl = document.getElementById('current');
const totalEl = document.getElementById('total');

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function initializeGame() {
    shuffledOperas = shuffle(operas);
    currentIndex = 0;
    totalEl.textContent = shuffledOperas.length;
    loadOpera();
}

function loadOpera() {
    const opera = shuffledOperas[currentIndex];
    plotEl.textContent = opera.plot;
    titleEl.textContent = opera.title;
    composerEl.textContent = opera.composer;
    charactersEl.textContent = opera.characters;
    answerSection.style.display = 'none';
    revealBtn.style.display = 'block';
    nextBtn.style.display = 'none';
    currentEl.textContent = currentIndex + 1;
}

function revealAnswer() {
    answerSection.style.display = 'block';
    revealBtn.style.display = 'none';
    nextBtn.style.display = 'block';
}

function nextOpera() {
    if (currentIndex < shuffledOperas.length - 1) {
        currentIndex++;
        loadOpera();
    } else {
        currentIndex = 0;
        loadOpera();
    }
}

revealBtn.addEventListener('click', revealAnswer);
nextBtn.addEventListener('click', nextOpera);
shuffleBtn.addEventListener('click', initializeGame);

initializeGame();
