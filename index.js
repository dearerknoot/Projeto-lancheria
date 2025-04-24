
let itens = document.querySelectorAll('.item');
let itensLista = []
itens.forEach(item =>{
   item.addEventListener('click',()=>{
      item.style.backgroundColor = 'red';
      const numero = item.dataset.numero
      const nome = item.dataset.nome;
      const valor = item.dataset.valor;
      const desc = item.dataset.desc;
      itensLista.push({nome,valor,desc})
      console.log(nome)
      console.log(itensLista)
      alert(`adicionou: ${itensLista[numero].nome} Valor:${itensLista.valor}R$ descrição: ${itensLista.desc}`)
   })
})
