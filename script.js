document.getElementById("startButton").addEventListener("click", () => {
  document.getElementById("inicio").classList.add("hidden");
  document.getElementById("conteudo").classList.remove("hidden");

  iniciarContador();
  iniciarCarrossel();
  setInterval(criarCoracao, 300);
});

// 📅 Data de início do relacionamento
const dataInicio = new Date("2024-10-21T00:00:00");

function iniciarContador() {
  setInterval(() => {
    const agora = new Date();
    const diff = agora - dataInicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById("contador").textContent =
      `${dias} dias ${horas.toString().padStart(2, "0")}:${minutos
        .toString()
        .padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
  }, 1000);
}

function iniciarCarrossel() {
  const slides = document.querySelectorAll(".slide");
  let atual = 0;

  setInterval(() => {
    slides[atual].style.display = "none";
    atual = (atual + 1) % slides.length;
    slides[atual].style.display = "block";
  }, 3000);
}

function criarCoracao() {
  const heart = document.createElement("div");
  heart.classList.add("heart-fall");
  heart.textContent = "❤️";
  heart.style.left = `${Math.random() * 100}vw`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
