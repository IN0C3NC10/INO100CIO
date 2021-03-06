// Constante onde são definidos os projetos
const PROJECTS = [
    [
        'Rocha Digital', 
        'Laravel, PHP', 
        'Site desenvolvido durante meu estágio com o framework Laravel, contando com dashboard, gerenciamento de produtos, catálogos, usuários e etc.', 
        [
            ['./assets/img/projects/screenshot-rocha-digital-home.png', 'Página Inicial', 'Página Inicial'], 
            ['./assets/img/projects/screenshot-rocha-digital-dashboard.png', 'Página Dashboard', 'Página Dashboard'],
            ['./assets/img/projects/screenshot-rocha-digital-catalogos.png', 'Página dos Catálogos na Dashboard', 'Página Dashboard - Lista de Catálogos'],
        ]
    ],
    [
        'Agenda Sustentável', 
        'PHP', 
        'Site desenvolvido em meu trabalho voluntário na OSCIP <a href="https://www.passatempoeducativo.org.br/" target="_blank">Passatempo Educativo</a>, contando simplesmente com uma página de contato e as atividades deste projeto. É possível conferi-lo <a href="https://www.agendasustentavel.com.br/" target="_blank">clicando aqui</a>.',
        [
            ['./assets/img/projects/screenshot-agenda-sustentavel-home.png', 'Página Inicial', 'Página Inicial'], 
            ['./assets/img/projects/screenshot-agenda-sustentavel-jogo2030.png', 'Página Jogo 2030', 'Página Jogo 2030'],
            ['./assets/img/projects/screenshot-agenda-sustentavel-vlibras.png', 'V-Libras', 'Conta com V-Libras'],
        ]
        
    ],
    [
        'Alugo Agora', 
        'Laravel, PHP', 
        'Projeto desenvolvido como Trabalho de Graduação em Sistemas para Internet, feito com a framework Laravel, contando com chat, avaliação, além de gerenciamento de usuários, imóveis e aluguéis.', 
        [
            ['./assets/img/projects/sreenshot-alugo-agora-home.png', 'Página Inicial', 'Página Inicial'],
            ['./assets/img/projects/sreenshot-alugo-agora-imovel.png', 'Página do Imóvel para Alugar', 'Página do Imóvel para Alugar'],
            ['./assets/img/projects/sreenshot-alugo-agora-chat.png', 'Página do Chat de Usuários', 'Página do Chat de Usuários'], 
            ['./assets/img/projects/sreenshot-alugo-agora-login.png', 'Página de Login', 'Página de Login'],
            ['./assets/img/projects/sreenshot-alugo-agora-dashboard.png', 'Página Dashboard', 'Página Dashboard'],
            ['./assets/img/projects/sreenshot-alugo-agora-dashboard-alugueis.png', 'Lista de Aluguéis na Dashboard', 'Página Dashboard - Lista de Aluguéis'],
        ]
    ],
]


/**
 * FUNÇÃO ONLOAD
 * ********************************************************************************************
**/
window.onload = function () {
    // recupera todas as imagens de exibição do modal e em cada uma é definida a imagem do objeto
    let modalsElem = document.getElementsByName("premodal-component");
    if (modalsElem.length > 0){
        let modalsLink = document.getElementsByName("premodal-link");
        let modalsImg = document.getElementsByName("premodal-img");
        for(let i = 0; i < modalsElem.length; i++){
            // atributos para o elemento
            modalsElem[i].setAttribute('onmouseover', 'showOverlay('+(i+1)+')');
            modalsElem[i].setAttribute('onmouseleave', 'disableOverlay()');
            modalsElem[i].setAttribute('class', 'col-md-4 col-12');
            // atributos para os links
            modalsLink[i].setAttribute('onclick', 'showModal('+(i+1)+')');
            if(PROJECTS[i][3] != undefined){
                modalsImg[i].setAttribute('src', PROJECTS[i][3][0][0]);
            } else {
                modalsImg[i].setAttribute('src', './assets/img/inocencio-background-header.png');
            }
        }
    }
}


/**
 * BOTÃO VOLTAR AO TOPO
 * ********************************************************************************************
**/

// quando o usuário rolar a tela por mais de (X)px ele exibe o botão de topo
window.onscroll = function () { scrollFunction() };

// Função para reconhecer a posição da tela e mostrar (ou não o botão)
function scrollFunction() {
    let btnToTop = document.getElementById("btnToTop");

    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        btnToTop.style.display = "block";
    } else {
        btnToTop.style.display = "none";
    }
}

// Função para retornar a tela no início
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/**
 *********************************************************************************************
**/


/**
 * CRIA OS ITENS DO CARROSSEL
 * @param {Array} imagesPath Array com 3 posições, sendo o caminho da imagem [0], conteúdo do "alt" [1] e o título [2]
 */
function buildCarousel(imagesPath) {
    // verifica se o objeto não esta vazio
    if (imagesPath.length > 0) {
        // recupera o carrossel e define a posição para os elementos
        let carousel = document.getElementById('carousel');
        let position = 0;
        carousel.innerHTML = '';

        for (let data in imagesPath) {
            let div = document.createElement('div');
            // verifica se é o primeiro elemento para poder definir como ativo ou não
            if (position > 0) {
                div.setAttribute('class', 'carousel-item');
            } else {
                div.setAttribute('class', 'carousel-item active');
            }

            // cria a imagem e define os atributos para a mesma
            let img = document.createElement('img');
            let imgAttributes = {
                'class': 'd-block w-100',
                'src': imagesPath[data][0],
                'alt': imagesPath[data][1],
                'title': imagesPath[data][2]
            }
            // percorre o objeto, setando cada atributo e seu conteúdo
            for (let property in imgAttributes) {
                img.setAttribute(property, imgAttributes[property]);
            }

            // insere a imagem dentro da div e a mesma por sua vez, dentro do carrossel
            div.appendChild(img);
            carousel.appendChild(div);
            position++;
        }
    }
}


/**
 * HABILITA A MODAL E EXIBE OS DETALHES DE CADA PROJETO
 * @param {Number} projectNumber Recebe o nome do projeto (já predefinido na função) e automaticamente irá criar o carrossel correspondente
 */
function showModal(projectNumber) {
    if (projectNumber != '' && projectNumber > 0 && projectNumber < 4) {
        // altera de numero do projeto para a posição do projeto
        projectNumber--;
        let modalCarousel = document.getElementById('carouselContent');
        let modalTitle = document.getElementById('modalTitle');
        let modalContent = document.getElementById('contentModal');
        let modalLabel = document.getElementById('modalLabel');
        // reseta o modal e o conteúdo textual
        modalCarousel.setAttribute('class', 'hidden');
        modalContent.textContent = '';

        // define algumas propriedades da modal
        modalTitle.textContent = PROJECTS[projectNumber][0];
        modalLabel.textContent = PROJECTS[projectNumber][1];
        modalContent.innerHTML = PROJECTS[projectNumber][2];

        // verifica a existência das propriedades do slide na constante
        if (PROJECTS[projectNumber][3] != undefined){
            if (PROJECTS[projectNumber][3].length > 0){
                modalCarousel.setAttribute('class', 'carousel slide');
                buildCarousel(PROJECTS[projectNumber][3]);
            }
        }

        document.getElementById('modal').setAttribute('class', 'show modal');
    }
}


/**
 * DESABILITA A MODAL
 */
function disableModal() {
    document.getElementById('modal').classList.remove('show');
}

function showOverlay(projectNumber) {
    if (projectNumber > 0){
        document.getElementById('overlayContent'+projectNumber).textContent = PROJECTS[projectNumber-1][0];
        document.getElementById('over'+projectNumber).setAttribute('class', 'overlay col-12');
    }
}

function disableOverlay() {
    let items = document.getElementsByClassName('overlay');
    for(let key = 0; key < items.length;key++){
        items[key].setAttribute('class','hidden');
    }
}