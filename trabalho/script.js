const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
const mainButton = document.getElementById('mainButton');
const buttonContainer = document.getElementById('buttonContainer');
if (mainButton && buttonContainer) {
    mainButton.addEventListener('click', () => {
        buttonContainer.classList.toggle('hidden'); // Alterna a classe 'hidden' para mostrar/ocultar os botões
    });
}
// Array de URLs das imagens
const images = [
    'BannerAudienciaPublica.jpg',
    'BannerJuroZero.jpg',
    'BannerAcessoInfo2.png',
    'Georreferenciamento.jpg'
];

// Array de URLs de redirecionamento
const urls = [
    'https://www.youtube.com/@PrefeituradeMedianeira',
    'https://www.medianeira.pr.gov.br/arquivos/desenvolvimento/edital_juro_zero3.pdf',
    'https://transparenciabrasil-cidadao.govbr.cloud/transparenciabrasil-cidadao/medianeira/prefeitura/',
    'https://medianeira.ctmgeo.com.br:10082/geo-view/index.ctm'
];

let currentIndex = 0;
let interval;

// Função para alternar a imagem automaticamente
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

// Função para atualizar a imagem e o link
function updateImage() {
    document.getElementById('rotatingImage').src = images[currentIndex];
}

// Iniciar a rotação automática
function startAutoRotate() {
    interval = setInterval(changeImage, 5000);
}

// Alterar imagem manualmente ao clicar no botão
function changeImageTo(index) {
    currentIndex = index;
    updateImage();
}

// Redireciona ao clicar na imagem
document.getElementById('rotatingImage').onclick = function() {
    window.location.href = urls[currentIndex];
};

// Inicia a rotação automática ao carregar a página
startAutoRotate();