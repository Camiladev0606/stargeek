
const cards = document.querySelector(".cards");


carregarCatalogo();

function carregarCatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if(dados == null){
        divcard.innerHTML = "<p>Nenhum item cadsatrado</p>";
        cards.appendChild(divcard);
        return null;
    }

    dados.forEach((elemento, indice) => {
        let divcard = document.createElement("div");
        divcard.setAttribute("class", "card")
        divcard.innerHTML = `<img src="img/${elemento.foto}"> 
        <div class="botoes">
            <a onclick="excluir(${indice})">Excluir</a>
            <a onclick="editar(${indice})">Alterar</a>
        </div>`
        cards.appendChild(divcard);
        
    });
}

function excluir(indice){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    if(dados.length == 1)
    {localStorage.clear("catalogo");}
    else{
    dados.splice(indice,1);
    localStorage.setItem("catalogo", JSON.stringify(dados));
    }
    window.location.reload();
}


function editar(indice){
    var url ="cadastroitem.html?peditar=true&indice="+
    encodeURIComponent(indice);
    window.location.href= url;
}
