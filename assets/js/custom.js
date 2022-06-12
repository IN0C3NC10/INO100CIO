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
 * @param {Object} imagesPath Objeto com array de 3 posições, sendo o caminho da imagem [0], conteúdo do "alt" [1] e o título [2]
 */
function buildCarousel(imagesPath) {
    // verifica se o objeto não esta vazio
    if (Object.keys(imagesPath).length > 0) {
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
 * @param {String} project Recebe o nome do projeto (já predefinido na função) e automaticamente irá criar o carrossel correspondente
 */
function showModal(project) {
    if (project != '') {
        let modalCarousel = document.getElementById('carouselContent');
        let modalTitle = document.getElementById('modalTitle');
        let modalContent = document.getElementById('contentModal');
        // reseta o modal e o conteúdo textual
        modalCarousel.setAttribute('class', 'hidden');
        modalContent.textContent = '';

        if (project == 'project1') {
            modalTitle.textContent = 'Rocha Digital';
            modalContent.innerHTML = 'Site desenvolvido durante meu estágio com o framework Laravel, contando com dashboard, gerenciamento de produtos, catálogos, usuários e etc.';
            let slider = {
                1: ['./assets/img/screenshot.jpg', 'a', 'a'],
                2: ['./assets/img/screenshot.jpg', 'a', 'b'],
                3: ['./assets/img/screenshot.jpg', 'a', 'c'],
            }
            modalCarousel.setAttribute('class', 'carousel slide');
            buildCarousel(slider);
        } else if (project == 'project2') {
            modalTitle.textContent = 'Agenda Sustentável';
            modalContent.innerHTML = 'Site desenvolvido em meu trabalho voluntário na OSCIP <a href="https://www.passatempoeducativo.org.br/" target="_blank">Passatempo Educativo</a>, contando simplesmente com uma página de contato e as atividades deste projeto. É possível conferi-lo <a href="https://www.agendasustentavel.com.br/" target="_blank">clicando aqui</a>.';
        } else if (project == 'project3') {
            modalTitle.textContent = 'Alugo Agora';
            modalContent.innerHTML = 'Projeto desenvolvido como Trabalho de Graduação durante minha faculdade de Sistemas para Internet, foi desenvolvido com a framework Laravel, contando com sistema de mensagens entre usuários, gerenciamento de usuários, imóveis e aluguéis.';
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