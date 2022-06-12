// quando o usuário rolar a tela por mais de 20px ele exibe o botão de topo
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let btnToTop = document.getElementById("btnToTop");

  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    btnToTop.style.display = "block";
  } else {
    btnToTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function showModal(project) {
    if (project != ''){
        let modalTitle = document.getElementById('modalTitle');
        let modalContent = document.getElementById('contentModal');
        modalContent.textContent = '';

        if (project == 'project1'){
            modalTitle.textContent = 'Rocha Digital';
            modalContent.innerHTML = 'Site desenvolvido durante meu estágio com o framework Laravel, contando com dashboard, gerenciamento de produtos, catálogos, usuários e etc.';
        } else if (project == 'project2'){
            modalTitle.textContent = 'Agenda Sustentável';
            modalContent.innerHTML = 'Site desenvolvido em meu trabalho voluntário na OSCIP <a href="https://www.passatempoeducativo.org.br/" target="_blank">Passatempo Educativo</a>, contando simplesmente com uma página de contato e as atividades deste projeto. É possível conferi-lo <a href="https://www.agendasustentavel.com.br/" target="_blank">clicando aqui</a>.';
        } else if (project == 'project3'){
            modalTitle.textContent = 'Alugo Agora';
            modalContent.innerHTML = 'Projeto desenvolvido como Trabalho de Graduação durante minha faculdade de Sistemas para Internet, foi desenvolvido com a framework Laravel, contando com sistema de mensagens entre usuários, gerenciamento de usuários, imóveis e aluguéis.';
        }
        document.getElementById('modal').setAttribute('class', 'show modal');
    }
}

function disableModal() {
    document.getElementById('modal').classList.remove('show');
}