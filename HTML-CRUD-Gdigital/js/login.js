const objeto = document.querySelector('.decoracao');
const rock = document.querySelector('.rock'); 
const texto = document.querySelector('.texto'); 
const bp = document.querySelector('#bp');
const pb = document.querySelector('#pb');

// const mudaCor = mudaCor(decoracao)

function mudaCor(decoracao){
    decoracao.style.transition = '0.3s';
    decoracao.style.backgroundColor = 'black' ;
    texto.style.transition = '0.3s';
    texto.style.color = 'white';
    bp.style.transition = '0.3s';
    bp.style.display = 'none';
    pb.style.transition = '0.3s';
    pb.style.display = 'Block';
    rock.style.transition = '0.3s';
    rock.style.marginTop = '13%';
    texto.style.marginTop = '17%';
    texto.style.marginBotton = '15%';
}

function reverteCor(decoracao){
    decoracao.style.transition = '0.3s'
    decoracao.style.backgroundColor = '';
    texto.style.transition = '0.3s';
    texto.style.color = '';
    bp.style.transition = '0.3s';
    bp.style.display = '';
    pb.style.transition = '0.3s';
    pb.style.display = '';
    rock.style.transition = '0.3s';
    rock.style.marginTop = '';
    texto.style.marginTop = '';
    texto.style.marginBotton = '';
}