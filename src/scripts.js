alert("JAVASCRIPT CONECTADO COM HTML")
import './index.css';
var cadastro = cadastro[]= [];



document.getElementById("botao-salvar")?.addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();

    var nome = document.getElementById("nome") as HTMLInputElement;
    var tecnologias = document.getElementById("tecnologias") as HTMLInputElement
    var biografia = document.getElementById("biografia") as HTMLInputElement
    var usuario = document.getElementById("usuario") as HTMLInputElement
    var imagem = document.getElementById("imagem") as HTMLInputElement
    
    const novocadastro = new cadastro(nome.value, tecnologias.value,biografia.value usuario.value, imagem.value);

   
    

    var aside = document.getElementById("lista-cadastro");
    aside.innerHTML = "";

    for(var i = 0; i < listacadastro.length; i++){
        aside.innerHTML += `
            <div class="card">
                <img src="${listacadastro[i].getImagem()}" alt="ERRO">
                <div class="dados">
                    <strong>${listacadastro[i].getnome()}</strong>
                    <span>Cor: ${listacadastro[i].gettecnologia()}</span>
                    <span>Ano: ${listacadastro[i].getbiografia()}</span>  
                    <span>Preço: R$${listacadastro[i].getusuario()}</span>
                    <span>Placa: R${listacadastro[i].getimagem()}</span>
                </div>
                <div class="botao-card">
                    <button id="botao-salvar">SALVAR</button>
                    
                </div>
            </div>
        `;
    }
})
    

window.onload = async () => {
    const cadastro = await (window as any).bancoAPI.findAll();
    for(var i = 0; i < cadastro.length; i++){
        const veiculo = new Veiculo(
            cadastro[i].nome, 
            cadastro[i].tecnologias,
            cadastro[i].biografia,
            cadastro[i].usuario,
            cadastro[i].imagem,
            cadastro[i].imagem,
            cadastro[i].id
        );

        listacadastro.push(cadastro);
    }
    var aside = document.getElementById("lista-cadastro");
    aside.innerHTML = "";

    for(var i = 0; i < listacadastro.length; i++){
        aside.innerHTML += `
            <div class="card">
                <img src="${listacadastro[i].getImagem()}" alt="ERRO">
                <div class="dados">
                    <strong>${listacadastro[i].getnome()}</strong>
                    <span>Cor: ${listacadastro[i].getbiografia()}</span>
                    <span>Ano: ${listacadastro[i].gettecnologia()}</span>  
                    <span>Preço: R$${listacadastro[i].getusuario()}</span>
                    
                </div>
                <div class="botao-card">
                    <button id="botao-salvar">SALVAR</button>
             
                </div>
            </div>
        `;
    }
}
     