// Constante onde são definidos os projetos
const PROJECTS = [
    [
        'Rocha Digital', 
        'Laravel (PHP)', 
        'Site desenvolvido durante meu estágio com o framework Laravel, contando com dashboard, gerenciamento de produtos, catálogos, usuários e etc.', 
        [
            ['./public/img/projects/Rocha-Digital/screenshot-rocha-digital-home.png', 'Página Inicial'], 
            ['./public/img/projects/Rocha-Digital/screenshot-rocha-digital-dashboard.png', 'Página Dashboard'],
            ['./public/img/projects/Rocha-Digital/screenshot-rocha-digital-catalogos.png', 'Página dos Catálogos na Dashboard'],
        ]
    ],
    [
        'Agenda Sustentável', 
        'PHP', 
        'Site desenvolvido em meu trabalho voluntário na OSCIP <a href="https://www.passatempoeducativo.org.br/" target="_blank">Passatempo Educativo</a>, contando simplesmente com uma página de contato e com as descrições das atividades deste projeto. É possível conferi-lo <a href="https://www.agendasustentavel.com.br/" target="_blank">clicando aqui</a>.',
        [
            ['./public/img/projects/Agenda-Sustentavel/screenshot-agenda-sustentavel-home.png', 'Página Inicial'], 
            ['./public/img/projects/Agenda-Sustentavel/screenshot-agenda-sustentavel-jogo2030.png', 'Página Jogo 2030'],
            ['./public/img/projects/Agenda-Sustentavel/screenshot-agenda-sustentavel-vlibras.png', 'V-Libras'],
        ]
        
    ],
    [
        'Alugo Agora', 
        'Laravel (PHP)', 
        'Projeto desenvolvido como Trabalho de Graduação em Sistemas para Internet, feito com a framework Laravel, contando com chat, avaliação, além de gerenciamento de usuários, imóveis e aluguéis.', 
        [
            ['./public/img/projects/Alugo-Agora/sreenshot-alugo-agora-home.png', 'Página Inicial'],
            ['./public/img/projects/Alugo-Agora/sreenshot-alugo-agora-imovel.png', 'Página do Imóvel para Alugar'],
            ['./public/img/projects/Alugo-Agora/sreenshot-alugo-agora-chat.png', 'Página do Chat de Usuários'], 
            ['./public/img/projects/Alugo-Agora/sreenshot-alugo-agora-login.png', 'Página de Login'],
            ['./public/img/projects/Alugo-Agora/sreenshot-alugo-agora-dashboard.png', 'Página Dashboard'],
            ['./public/img/projects/Alugo-Agora/sreenshot-alugo-agora-dashboard-alugueis.png', 'Página Dashboard - Lista de Aluguéis'],
        ]
    ],
    [
        'Vida - Controle de Voluntários', 
        'Node (JS)', 
        'Projeto desenvolvido para a equipe da <a href="https://www.ongvida.org/" target="__blank">ONG Vida</a> para facilitar o controle de seus voluntários e dos Termos que são necessários. Permitindo gerar termos para vários usuários com as informações previamente cadastradas e o acesso restrito e controlado para cada membro da ONG.', 
        [
            ['./public/img/projects/Vida-CV/screen_1.png', 'Página de Login'],
            ['./public/img/projects/Vida-CV/screen_2.png', 'Página para Inserir Licença'],
            ['./public/img/projects/Vida-CV/screen_3.png', 'Página de Recuperar Senha'],
            ['./public/img/projects/Vida-CV/screen_4.png', 'Página Inicial'],
            ['./public/img/projects/Vida-CV/screen_5.png', 'Página Inicial - QRCode de acesso local'],
            ['./public/img/projects/Vida-CV/screen_6.png', 'Página de Perfil'],
            ['./public/img/projects/Vida-CV/screen_7.png', 'Página do Sistema'],
            ['./public/img/projects/Vida-CV/screen_8.png', 'Página do Sistema - Notas de Atualização'],
            ['./public/img/projects/Vida-CV/screen_9.png', 'Página da Lista de Voluntários'],
            ['./public/img/projects/Vida-CV/screen_10.png', 'Página de Cadastro de Voluntários'],
        ]
    ],
    [
        'ToDO', 
        'Node (JS)', 
        'Projeto desenvolvido para facilitar o controle de tarefas, permitindo o fácil gerenciamento das mesmas. Além disso, especialmente para fins de testes, o ToDO contém um sistema de verificação de permissão de acesso e licença (que se expira automaticamente após um período pré-determinado) também, conta com uma verificação de computador permitindo apenas de rodar em uma máquina por vez.', 
        [
            ['./public/img/projects/ToDO/screen_1.png', 'Página Inicial'],
            ['./public/img/projects/ToDO/screen_2.png', 'Página de Cadastro da Tarefas'],
            ['./public/img/projects/ToDO/screen_4.png', 'Página de Inicial - Mobile', 'retrato'],
            ['./public/img/projects/ToDO/screen_3.png', 'Página de Cadastro da Tarefas - Mobile', 'retrato'], 
        ]
    ],
]


/**
 * FUNÇÃO ONLOAD
 * ********************************************************************************************
**/
window.onload = function () {
    // recupera onde a galeria será usada
    let gallery = document.getElementById('gallery-projects')
    if (PROJECTS.length > 0){
        // percorre todos os elementos do projeto e vai sendo criado seus componentes e suas respectivas funções
        for(let i = 0; i < PROJECTS.length; i++){
            gallery.innerHTML+=
            '<li id="project-'+i+'" name="premodal-component">'+
            '    <a id="premodal-link-'+i+'">'+
            '        <div id="over'+i+'" class="hidden">'+
            '            <div class="overlay-content">'+
            '                <span id="overlayContent'+i+'"></span>'+
            '                <br>'+
            '                <i class="fa fa-plus mt-4"></i>'+
            '            </div>'+
            '        </div>'+
            '        <img id="premodal-img-'+i+'">'+
            '    </a>'+
            '</li>'
            let modalsElem = document.getElementById("project-"+i);
            let modalsLink = document.getElementById("premodal-link-"+i);
            let modalsImg = document.getElementById("premodal-img-"+i);
            modalsElem.setAttribute('class', 'col-md-4 col-12');
            if(PROJECTS[i] != undefined){
                // atributos para o elemento
                modalsElem.setAttribute('onmouseover', 'showOverlay('+(i)+')');
                modalsElem.setAttribute('onmouseleave', 'disableOverlay()');
                // atributos para os links
                modalsLink.setAttribute('onclick', 'showModal('+(i)+')');
                modalsImg.setAttribute('src', PROJECTS[i][3][0][0]);
            } else {
                modalsImg.setAttribute('src', './public/img/inocencio-background-header.png');
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
        let size_class = 'w-100';

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
            if (imagesPath[data][2] != undefined){
                size_class = 'w-30p';
            }
            let imgAttributes = {
                'class': 'd-block '+size_class,
                'src': imagesPath[data][0],
                'alt': imagesPath[data][1],
                'title': imagesPath[data][1]
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
    if (projectNumber >= 0) {
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

/**
 * - Habilita a overlay nos projetos
 * @param {Integer} projectNumber Deve ser passado o número do projeto o qual será utilizado a overlay
 */
function showOverlay(projectNumber) {
    if (projectNumber >= 0){
        document.getElementById('overlayContent'+projectNumber).textContent = PROJECTS[projectNumber][0];
        document.getElementById('over'+projectNumber).setAttribute('class', 'overlay col-12');
    }
}

/**
 * - Desabilita a overlay nos projetos
 */
function disableOverlay() {
    let items = document.getElementsByClassName('overlay');
    for(let key = 0; key < items.length;key++){
        items[key].setAttribute('class','hidden');
    }
}