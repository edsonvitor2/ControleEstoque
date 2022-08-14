class Produto{
    constructor(){
        this.id=1;
        this.arrayProduto = [];
        this.editId = null;
    }
    salvar(){
        let produto = this.lerDados();
        
        if(produto.quantidade == '' || produto.valor == "" || produto.nomeProduto == ''){
            alert('Preencha todos campos');
        }else{
            if(this.editId == null){
                this.adicionar(produto);
            }else{
                this.atualizar(this.editId,produto);
            }
        }
        this.listaTabela();
        this.cancelar();
    }
    adicionar(produto){
        this.arrayProduto.push(produto);
        this.id++;
    }
    editar(dados){
        this.editId = dados.id;

        document.getElementById('produto').value = dados.nomeProduto;
        document.getElementById('valor').value = dados.valor ;
        document.getElementById('NumeroProduto').value = dados.quantidade;

        document.getElementById('btn1').innerText = 'Atualizar';
    }
    atualizar(id,produto){
        for(let i = 0;i < this.arrayProduto.length; i++){
            if(this.arrayProduto[i].id == id){
                this.arrayProduto[i].nomeProduto = produto.nomeProduto;
                this.arrayProduto[i].valor = produto.valor;
                this.arrayProduto[i].quantidade = produto.quantidade;
            }
        }
    }
    listaTabela(){
        let tabela= document.getElementById('tabela');
        tabela.innerText ='';

        for (var i = 0;i < this.arrayProduto.length; i++) {
            let tr = tabela.insertRow();
            
            let tdId = tr.insertCell();
            let tdProduto = tr.insertCell();
            let tdValor = tr.insertCell();
            let tdQuantidade = tr.insertCell();
            let tdAcoes = tr.insertCell();


            tdId.innerText = this.arrayProduto[i].id;
            tdProduto.innerText = this.arrayProduto[i].nomeProduto;
            tdValor.innerText = this.arrayProduto[i].valor;
            tdQuantidade.innerText = this.arrayProduto[i].quantidade;

            tdId.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'editImg.png';
            imgEdit.setAttribute('onclick','produto.editar('+JSON.stringify(this.arrayProduto[i])+')');

            let imgDelet= document.createElement('img');
            imgDelet.src = 'cancImg.png';
            imgDelet.setAttribute('onclick','produto.deletar(' + this.arrayProduto[i].id+ ')');
            
            tdAcoes.appendChild(imgEdit);
            tdAcoes.appendChild(imgDelet);
        }
    }
    lerDados(){
        let produto = {};

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.valor = document.getElementById('valor').value;
        produto.quantidade = document.getElementById('NumeroProduto').value;
        
        return produto;
        
    }
    cancelar(){
        document.getElementById('produto').value = '';
        document.getElementById('valor').value = '';
        document.getElementById('NumeroProduto').value = '';

        document.getElementById('btn1').innerText = 'Salvar';
        this.editId = null;
    }
    deletar(id){
        if(confirm('Deseja deletar o item' + id)){
            let tabela = document.getElementById('tabela');

        for(let i = 0; i < this.arrayProduto.length; i++)
        {
            if(this.arrayProduto[i].id == id)
            {
                this.arrayProduto.splice(i,1);
                tabela.deleteRow(i);
            }
        }
        }
    }
  
    
}
var produto = new Produto();