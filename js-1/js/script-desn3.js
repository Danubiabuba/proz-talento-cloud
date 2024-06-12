// Método simples para adicionar um título
const title = document.createElement('h1');
title.id = 'titulo';
title.textContent = 'Virtual crochê 🧶';
document.body.appendChild(title);

// Método complexo para adicionar um produto
const product = document.createElement('div');
product.id = 'produto';

// Nome do produto
const productName = document.createElement('h2');
productName.textContent = 'lindas saida de praia';
product.appendChild(productName);

// Descrição do produto
const productDescription = document.createElement('p');
productDescription.innerHTML = 'Moda praia eco-friendly, arrase com nossos biquinis e saidas de praias de crochê sustentaveis e cheios de charmes 🌷.<br> Saida tamanho P.';
product.appendChild(productDescription);

// Preço do produto
const productPrice = document.createElement('p');
productPrice.textContent = 'Preço: R$ 100,00';
product.appendChild(productPrice);

// Imagem do produto (opcional)
const productImage = document.createElement('img');
productImage.src = '../img/saida de praia.jpeg';

productImage.alt = "Saida de praia tamanho p";

productImage.width = 150;
product.appendChild(productImage);

// Adicionar o produto ao corpo do documento
document.body.appendChild(product);
