  const senha = document.getElementById("senha");
  const confirma = document.getElementById("confirmar");

  function validarSenha() {
    if (senha.value !== confirma.value) {
      confirma.setCustomValidity("As senhas não iguais!");
    } else {
      confirma.setCustomValidity("");
    }
  }

  senha.onchange = validarSenha;
  confirma.onkeyup = validarSenha;

  const slidesContainer = document.getElementById('slides');
const pontos = document.querySelectorAll('.ponto');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

let indiceAtual = 0;
const totalSlides = pontos.length;

function atualizarCarrossel(indice) {
    if (indice < 0) {
        indiceAtual = totalSlides - 1;
    } else if (indice >= totalSlides) {
        indiceAtual = 0;
    } else {
        indiceAtual = indice;
    }

    slidesContainer.style.transform = `translateX(-${indiceAtual * 100}%)`;

    pontos.forEach(ponto => ponto.classList.remove('ativo'));
    pontos[indiceAtual].classList.add('ativo');
}

btnNext.addEventListener('click', () => {
    atualizarCarrossel(indiceAtual + 1);
});

btnPrev.addEventListener('click', () => {
    atualizarCarrossel(indiceAtual - 1);
});

pontos.forEach(ponto => {
    ponto.addEventListener('click', () => {
        const index = parseInt(ponto.getAttribute('data-index'));
        atualizarCarrossel(index);
    });
});

setInterval(() => {
    atualizarCarrossel(indiceAtual + 1);
}, 4000);
