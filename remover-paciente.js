var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

    /*var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;
    paiDoAlvo.remove();*/
    if (event.target.tagName == "TD"){

        event.target.parentNode.classList.add("fadeOut");
                //target elemento clicado e parentNode é o pai do elemento
        setTimeout(function(){

            event.target.parentNode.remove();

        },500);
    
    }
        //this é se refere ao elemento da funcão -no caso a tabela this.remove() remove a tabela inteira
        //console.log("fui clicado com o duplo clique");

});
