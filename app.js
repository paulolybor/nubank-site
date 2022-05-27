$(document).ready(()=>{
    $('#input-cpf').on('click',()=>{
        $('#input-cpf div').css({'bottom':'0'});
    });
    $('#input-cpf input').blur(()=>{
        if($('#input-cpf input').val() == ''){
            $('#input-cpf div').css({'bottom':'-24px'});
        }
    });
});

const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
    console.log('tentar')
});

const subMenuBtn = document.querySelectorAll(".submenu-btn");
for(let i=0; i < subMenuBtn.length; i++){
    subMenuBtn[i].addEventListener("click", function(){
        if(window.innerWidth < 1024){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;

            if(subMenu.classList.contains("desplegar")){
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
            }else{
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";
            }
        }
    });
}

function requisitarPagina(url) {
    document.getElementById('conteudo').innerHTML = ''


    // incluir o gif de loading na página

    let ajax = new XMLHttpRequest();

    console.log(ajax.responseText)

    //requisição não iniciada, state = 0
    //console.log(ajax.readyState)

    ajax.open('GET', url)

    //conexão estabelecida com o servidor, state = 1
    //console.log(ajax.readyState)
    

    //de alguma lógica que fique olhando para o progresso da req
    ajax.onreadystatechange = () => {
        //console.log(ajax.readyState)
        if(ajax.readyState == 4 && ajax.status == 200){
            document.getElementById('conteudo').innerHTML = ajax.responseText
        }
        if(ajax.readyState == 4 && ajax.status == 404){
            
            document.getElementById('conteudo').innerHTML = 'tente novamente mais tarde'

        }
    }

    ajax.send()
    //console.log(ajax)
}