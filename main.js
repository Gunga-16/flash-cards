function criaCartao  (categoria,pergunta,resposta){
    let container = document.getElementById('container');
    let Cartao = document.createElement('article');
    Cartao.className = 'cartao';
    Cartao.innerHTML = `<div class="conteudo-cartao">
    <h3>${categoria}</h3>
    <div class="pergunta-cartao">
    <p>${pergunta}</p>
    <div class="resposta-cartao">
        <p>${resposta}</p>
    </div>
    </div>`
         container.appendChild(Cartao);
}

