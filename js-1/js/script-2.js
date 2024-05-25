// Referenciando os elementos HTML
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const linkExterno = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando conteúdo textual ao título e link
titulo.innerText = 'Manipulando Elementos com JavaScript';
linkExterno.innerText = 'Proz Educação';

// Criando itens para a lista não ordenada
const itensListaNaoOrdenada = ['Item 1', 'Item 2', 'Item 3'];
itensListaNaoOrdenada.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item;
    listaNaoOrdenada.appendChild(li);
});

// Criando itens com links para a lista ordenada
const itensListaOrdenada = [
    { texto: 'Google', url: 'https://www.google.com/' },
    { texto: 'YouTube', url: 'https://www.youtube.com/' },
    { texto: 'Wikipedia', url: 'https://www.wikipedia.org/' }
];
itensListaOrdenada.forEach(item => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.innerText = item.texto;
    link.href = item.url;
    li.appendChild(link);
    listaOrdenada.appendChild(li);
});


