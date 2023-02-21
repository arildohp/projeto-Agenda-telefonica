const form = document.getElementById('formulario')
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('numero');
    
    
    let linha = '<tr>'
    linha +=`<td>${inputNome.value}</td>`;
    linha +=`<td>${inputTelefone.value}</td>`;
    linha += '</tr>';
    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML =linhas;

    inputNome.value = '';
    inputTelefone.value = '';
    
});
