window.addEventListener("load", () => {
  obterItens();
});

let totalItensCarrinho = 0;
const clearCart = document.getElementById("clear-cart");

clearCart.addEventListener("click", (event) => {
  event.preventDefault();
  const cartContent = document.getElementById("cart-content");
  while (cartContent.firstChild) {
    cartContent.removeChild(cartContent.firstChild);
  }
  const totalItensSpan = document.getElementById("calculate-value");
  totalItensSpan.innerText = "R$0.00 ";
});

async function obterItens() {
  try {
    const response = await fetch("http://localhost:3333/products");
    const data = await response.json();
    const divPai = document.getElementById("pai");

    data.items[0].computer.forEach((i) => {
      const div = document.createElement("div");
      div.id = "card";
      div.className = "w-96 rounded-md p-2 font-bold";

      const h1 = document.createElement("h1");
      h1.id = "title";
      h1.textContent = i.title;
      div.appendChild(h1);

      const img = document.createElement("img");
      img.id = "img";
      img.src = i.image;
      img.alt = i.title;
      img.width = 350;
      img.style.marginBottom = "12px";
      div.appendChild(img);

      const price = document.createElement("p");
      price.id = i.price;
      price.textContent = `$${i.price}`;
      price.style.textAlign = "right";
      div.appendChild(price);

      const button = document.createElement("button");
      button.id = "computer-button";
      button.style.border = "1px solid black";
      button.style.padding = "2px 20px";
      button.style.width = "100%";
      button.style.backgroundColor = "#E6E6E6";
      button.textContent = "Adicionar no Carrinho";
      div.appendChild(button);

      divPai.appendChild(div);

      button.addEventListener("click", (event) => {
        event.preventDefault();
        const cartContent = document.getElementById("cart-content");
        const p = document.createElement("p");
        p.textContent = i.title;

        const img = document.createElement("img");
        img.src = i.image;
        img.alt = i.title;
        img.width = 80;

        cartContent.appendChild(p);
        cartContent.appendChild(img);

        totalItensCarrinho += i.price;
        const totalItensSpan = document.getElementById("calculate-value");
        totalItensSpan.textContent = `R$${totalItensCarrinho.toFixed(2)}`;
      });
    });

    data.items[1].disk.forEach((i) => {
      const div = document.createElement("div");
      div.id = "card";
      div.className = "w-96 rounded-md p-2 font-bold";

      const h1 = document.createElement("h1");
      h1.id = "title";
      h1.textContent = i.title;
      div.appendChild(h1);

      const img = document.createElement("img");
      img.id = "img";
      img.src = i.image;
      img.alt = i.title;
      img.width = 350;
      img.style.marginBottom = "12px";
      div.appendChild(img);

      const price = document.createElement("p");
      price.id = i.price;
      price.textContent = `$${i.price}`;
      price.style.textAlign = "right";
      div.appendChild(price);

      const button = document.createElement("button");
      button.id = "disk-button";
      button.style.border = "1px solid black";
      button.style.padding = "2px 20px";
      button.style.width = "100%";
      button.style.backgroundColor = "#E6E6E6";
      button.textContent = "Adicionar no carrinho";
      div.appendChild(button);

      button.addEventListener("click", (event) => {
        event.preventDefault();
        const cartContent = document.getElementById("cart-content");
        const p = document.createElement("p");
        p.textContent = i.title;

        const img = document.createElement("img");
        img.src = i.image;
        img.alt = i.title;
        img.width = 80;

        cartContent.appendChild(p);
        cartContent.appendChild(img);

        totalItensCarrinho += i.price;
        const totalItensSpan = document.getElementById("calculate-value");
        totalItensSpan.textContent = `$${totalItensCarrinho.toFixed(2)}`;
      });

      divPai.appendChild(div);
    });
  } catch (error) {
    console.error("Erro ao obter os itens da API:", error);
  }
}
