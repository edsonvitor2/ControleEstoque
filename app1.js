class Produto{
    constructor(){
        this.id=1;
        this.arrayProduto = [];
    }
    salvar(){
        let produto = this.lerDados();
        this.adicionar(produto);
        this.listaTabela();
        this.cancelar();
    }
    adicionar(produto){
        this.arrayProduto.push(produto);
        this.id++;
    }
    listaTabela(){
        let tabela= document.getElementById('tabela');
        tabela.innerText ='';

        for (var i = 0;i < this.arrayProduto.length; i++) {
            let tr = tabela.insertRow();
            
            let tdId = tr.insertCell();
            let tdProduto = tr.insertCell();
            let tdValor = tr.insertCell();
            let tdAcoes = tr.insertCell();

            tdId.innerText = this.arrayProduto[i].id;
            tdProduto.innerText = this.arrayProduto[i].nomeProduto;
            tdValor.innerText = this.arrayProduto[i].valor;

            tdId.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'editImg.png';

            let imgDelet= document.createElement('img');
            imgDelet.src = 'cancImg.png';
            imgDelet.setAttribute('onclick','produto.deletar(' + this.arrayProduto[i].id + ')');
            
            tdAcoes.appendChild(imgEdit);
            tdAcoes.appendChild(imgDelet);
        }
    }
    lerDados(){
        let produto = {};

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.valor = document.getElementById('valor').value;

        return produto;
        
    }
    cancelar(){
        document.getElementById('produto').value = '';
        document.getElementById('valor').value = '';
    }
    deletar(id){
        for(i = 0; i < this.arrayProduto.length; i++)
        {
            if(this.arrayProduto[i].id == id)
            {
                this.arrayProduto.splice(i,1);
            }
        }
    }
}
var produto = new Produto();