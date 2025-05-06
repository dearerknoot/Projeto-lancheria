

let itens = document.querySelectorAll('.item');
let produtos = document.getElementById('produtos');
let valorPagar = document.getElementById('valorPagar'); // div para mostrar a soma dos valores no lista.html
let itensLista = JSON.parse(localStorage.getItem('itensLista')) || [];
let alerta = document.getElementById('alerta');
let validado = JSON.parse(localStorage.getItem('validado')) || false;
let divCarrinho = document.getElementById('carrinho');
let boxCadastro = document.getElementById('boxCadastro');
if(!validado){
   if(itensLista.length === 0){
      divCarrinho.style.pointerEvents = 'none';
      alerta.textContent = "X";  
   }

   let imagem = document.createElement('img');
   imagem.setAttribute("src", 'imagens/imagemcadastro.png');
   imagem.classList.add('imagemCad');
   boxCadastro.appendChild(imagem)

   itens.forEach(item =>{
      item.addEventListener('click',()=>{
         alert('Faça um cadastro para adicionar itens');
      })
   })
}else{
   if(itensLista.length === 0){
      divCarrinho.style.pointerEvents = 'none';
      alerta.textContent = "X";
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
         // window.location.reload();
         divCarrinho.style.pointerEvents = 'auto';
         alerta.textContent = "";
         
         
      })
   })
   itensLista.forEach((item)=>{
      let produto = document.createElement('h1');
      let botaoProduto = document.createElement('button');
      botaoProduto.textContent = 'Remover';
      botaoProduto.classList.add('remover')
      produto.textContent = item.nome + " " + item.valor + " R$ ";
      produtos.appendChild(produto);
      produto.appendChild(botaoProduto);
   
      let valorTotal = 0
      for(let i = 0; i < itensLista.length;i++){ // for que percorrre o itensLista para adicionar o .valor para uma soma total
         let valorFloat = parseFloat(itensLista[i].valor);
         valorTotal += valorFloat;
      }
      valorPagar.textContent = valorTotal.toFixed(2) + " R$" //usei o to fixed para o valor ficar uma casa decimal a mais ex.: coca 7.5 para 7.50
   
      botaoProduto.onclick = ()=>{ // remove o item do array itenslista
         let index = itensLista.indexOf(item);
         console.log(index)
         if (index > -1) {
            itensLista.splice(index, 1);
            console.log(itensLista);
            localStorage.setItem('itensLista', JSON.stringify(itensLista));
            produtos.removeChild(produto);
            console.log(itensLista);
            window.location.reload();
          }
          if(itensLista.length == 0){ // verificação pra quando o array itenslista estiver vazio, direcionar para a pagina principal
            window.location.href = 'index.html';
          }
      }
   })
   
   let botaoEnviar = document.querySelector('.botao');
   botaoEnviar.onclick = ()=>{
      alert('Pedido enviado com sucesso!');
      // localStorage.clear(itensLista)
      validado = false;
      window.location.href = 'produção.html';
   }
}
