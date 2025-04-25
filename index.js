

let itens = document.querySelectorAll('.item');
let produtos = document.getElementById('produtos');
let valorPagar = document.getElementById('valorPagar');
let itensLista = JSON.parse(localStorage.getItem('itensLista')) || [];
itens.forEach(item =>{
   item.addEventListener('click',()=>{
      item.style.backgroundColor = 'red';
      const numero = item.dataset.numero;
      const nome = item.dataset.nome;
      const valor = item.dataset.valor;
      const desc = item.dataset.desc;
      itensLista.push({nome,valor,desc});
      console.log(itensLista[numero].nome)
      console.log(itensLista)
      alert('Item adicionado ao seu carrinho');
      localStorage.setItem('itensLista', JSON.stringify(itensLista));
   })
})
itensLista.forEach((item)=>{
   let produto = document.createElement('h1');
   let botaoProduto = document.createElement('button');
   botaoProduto.textContent = 'Remover';
   produto.textContent = item.nome + " " + item.valor + " R$ ";
   produtos.appendChild(produto);
   produto.appendChild(botaoProduto);
   botaoProduto.onclick = ()=>{
      let index = itensLista.indexOf(item);
      console.log(index)
      if (index > -1) {
         itensLista.splice(index, 1);
         console.log(itensLista)
         localStorage.clear(index);
         produtos.removeChild(produto)
       }
   }
})
// localStorage.clear(itensLista);
