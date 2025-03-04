function startLesson() {
    alert("Iniciando aula de vocabulário... Prepare-se!");
    // Aqui você pode adicionar mais interatividade, como um exercício de vocabulário
}

function playMusic() {
    const music = new Audio("https://www.example.com/louvor.mp3"); // Coloque o link de uma música aqui
    music.play();
    alert("Música tocando... Aproveite!");
}

function startQuiz() {
    alert("Iniciando quiz de vocabulário... Boa sorte!");
    // Aqui você pode adicionar um quiz simples em JavaScript
}

function addWord() {
    const wordInput = document.getElementById("newWord");
    const word = wordInput.value.trim();
    if (word) {
        const wordList = document.getElementById("wordList");
        const listItem = document.createElement("li");
        listItem.textContent = word;
        wordList.appendChild(listItem);
        wordInput.value = ''; // Limpa o campo de entrada
    } else {
        alert("Por favor, digite uma palavra!");
    }
}
