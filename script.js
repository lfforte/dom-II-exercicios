
const adicionaItem = () => {

  const novoArticle = document.createElement('article');
  novoArticle.classList.add('item');
  novoArticle.setAttribute('onclick', 'removeItem(event)');

  /* const conteudo = document.createTextNode('teste');
  novoArticle.appendChild(conteudo); */

  const localizaOndeIncluir = document.getElementById('botao');
  localizaOndeIncluir.insertAdjacentElement('afterend', novoArticle);

}

const removeItem = (event) => {

  const elementoclicado = event.target;
  elementoclicado.remove();

}
