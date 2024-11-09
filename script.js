const botao = document.querySelector('#enviar');
const valueBtn = document.querySelector('#number');
const form = document.querySelector('.form01');

const checkbox = document.querySelector('#checkboxitem');
const checkbox2 = document.querySelector('#checkboxitem2');


const mudarNome = () => {
    botao.value = 'Enviar';
    botao.classList.remove('verde');
    botao.classList.remove('vermelho');
}

const aviso = () => {
    botao.value = 'DIGITE O TELEFONE';
    botao.classList.add('vermelho');
}

const limparCaracteres = (event) => {
    event.preventDefault();
    if ((!checkbox.checked) && (event.srcElement.id == 'number')) {
        console.log(22);
        return
    }


    if (valueBtn.value == '') {
        aviso();
        return
    }

    const content = valueBtn.value;
    var numeroLimpo = content.replace(/[^\d]/g, '');

    console.log(numeroLimpo);
    navigator.clipboard.writeText(numeroLimpo).then(() => {
        botao.value = 'NUMERO COPIADO';
        botao.classList.add('verde');

        valueBtn.value = numeroLimpo;

        if (checkbox2.checked) {
            valueBtn.value = '';
        }
    })
    .catch((err) => {
        alert('Erro ao copiar para a área de transferência:', err);
    });
    
}

const salvarCheck = (event) => {
    localStorage.setItem('check', checkbox.checked);
}

const salvarCheck2 = (event) => {
    localStorage.setItem('check2', checkbox2.checked);
}

const verificar = (check, checkbox) => {
    if (check) {
        if (check == 'true') {
            checkbox.checked = true;
            
        }
    }
}

const atualizarDados = () => {
    const checkboxValue = localStorage.getItem('check');
    const checkboxValue2 = localStorage.getItem('check2');

    verificar(checkboxValue, checkbox);   
    verificar(checkboxValue2, checkbox2);   
}

atualizarDados();

valueBtn.addEventListener('input', limparCaracteres);
botao.addEventListener('click', limparCaracteres);
valueBtn.addEventListener('input', mudarNome);


checkbox.addEventListener('change', salvarCheck);
checkbox2.addEventListener('change', salvarCheck2);
