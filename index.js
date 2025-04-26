

let itens = document.querySelectorAll('.item');
let produtos = document.getElementById('produtos');
let valorPagar = document.getElementById('valorPagar');
let itensLista = JSON.parse(localStorage.getItem('itensLista')) || [];
let alerta = document.getElementById('alerta');

if(itensLista.length === 0){
   let divCarrinho = document.getElementById('carrinho');
   divCarrinho.style.pointerEvents = 'none';
   alerta.textContent = " Não há itens no carrinho"
}
itens.forEach(item =>{
   item.addEventListener('click',()=>{
      // const numero = item.dataset.numero;
      const nome = item.dataset.nome;
      const valor = item.dataset.valor;
      const desc = item.dataset.desc;
      itensLista.push({nome,valor,desc});
      // console.log(itensLista[numero].nome)
      // console.log(itensLista)
      alert('Item adicionado ao seu carrinho');
      localStorage.setItem('itensLista', JSON.stringify(itensLista));
      window.location.reload();
   })
})
itensLista.forEach((item)=>{
   let produto = document.createElement('h1');
   let botaoProduto = document.createElement('button');
   botaoProduto.textContent = 'Remover';
   produto.textContent = item.nome + " " + item.valor + " R$ ";
   produtos.appendChild(produto);
   produto.appendChild(botaoProduto);
   botaoProduto.onclick = ()=>{ // remove o item do array itenslista
      let index = itensLista.indexOf(item);
      console.log(index)
      if (index > -1) {
         itensLista.splice(index, 1);
         console.log(itensLista)
         localStorage.setItem('itensLista', JSON.stringify(itensLista));
         produtos.removeChild(produto);
         console.log(itensLista)
       }
   }
})

