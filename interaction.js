let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
]

const ITENS_LOJA2 = [
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
]



const section = document.getElementById("sessao-venda");

const titulo = document.createElement("h1");
titulo.textContent = "Lojinha do Sr. Miagui";
section.appendChild(titulo);

const section1 = document.createElement("section");
section.appendChild(section1);
section1.id = "itens_section";

ITENS_LOJA.forEach((elemento) => {
    const div = document.createElement("div");
    section1.appendChild(div);
    div.id="box";
    
    const img = document.createElement("img");
    img.src = elemento.url_img ;
    div.appendChild(img);
    img.id="img";
    
    const h1 = document.createElement("h1");
    h1.textContent = elemento.nome;
    div.appendChild(h1);
    
    const txtPreco = document.createElement("div");
    div.appendChild(txtPreco);
    txtPreco.id="txtPreco";

    const pPreco = document.createElement("p");
    pPreco.textContent = "Preço:";
    txtPreco.appendChild(pPreco);
    pPreco.id="preco";
    
    const p = document.createElement("p");
    p.textContent = elemento.preco;
    txtPreco.appendChild(p);
    
    const p2 = document.createElement("p");
    p2.textContent = "Descrição:";
    div.appendChild(p2);
    p2.id="descricao";
    
    const div2 = document.createElement("div");
    div.appendChild(div2);
    div2.id="paragrafo";
    
    const p3 = document.createElement("p");
    p3.textContent = elemento.descricao;
    div2.appendChild(p3);

});

const section2 = document.createElement("section");
section.appendChild(section2);
section2.id="section2"

ITENS_LOJA2.forEach((elemento) => {
    const div = document.createElement("div");
    section2.appendChild(div);
    div.id="box";
    
    const img = document.createElement("img");
    img.src = elemento.url_img ;
    div.appendChild(img);
    img.id="img";
    
    const h1 = document.createElement("h1");
    h1.textContent = elemento.nome;
    div.appendChild(h1);

    const txtPreco = document.createElement("div");
    div.appendChild(txtPreco);
    txtPreco.id="txtPreco";

    const pPreco = document.createElement("p");
    pPreco.textContent = "Preço:";
    txtPreco.appendChild(pPreco);
    pPreco.id="preco";
    
    const p = document.createElement("p");
    p.textContent = elemento.preco;
    txtPreco.appendChild(p);
    
    const p2 = document.createElement("p");
    p2.textContent = "Descrição:";
    div.appendChild(p2);
    p2.id="descricao";
    
    const div2 = document.createElement("div");
    div.appendChild(div2);
    div2.id="paragrafo";
    
    const p3 = document.createElement("p");
    p3.textContent = elemento.descricao;
    div2.appendChild(p3);


});