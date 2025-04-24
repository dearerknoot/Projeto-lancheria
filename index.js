

let itens = document.querySelectorAll('.item');
let produtos = document.getElementById('produtos');
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
   let titulo = document.createElement('h1')
   titulo.textContent = item.nome
   console.log(item.nome)
   produtos.appendChild(titulo)  
})
// localStorage.clear(itensLista);
