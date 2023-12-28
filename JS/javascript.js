
// EVENTOS DO MENU MOBILE
    document.addEventListener("click", function(event) {

        if(event.target ===  document.getElementById('abrir-menu')){
            document.getElementById('mobile').style.width='55%';    
            document.getElementById('menu-mobile').style.display='block';
        }
        else if(event.target === document.getElementById('menu-lista0')){}   
        else if(event.target === document.getElementById('menu-lista1')){}   
        else if(event.target === document.getElementById('menu-lista2')){}   
        else if(event.target === document.getElementById('menu-lista3')){}   
        else if(event.target === document.getElementById('menu-lista4')){}
        else if(event.target === document.getElementById('menu-lista5')){}   
        else if(event.target === document.getElementById('menu-lista6')){}
        else if(event.target === document.getElementById('menu-lista7')){}   
        else if(event.target === document.getElementById('menu-lista8')){}   
        else if(event.target === document.getElementById('fechar-menu')){
            document.getElementById('menu-mobile').style.display='none';
            document.getElementById('mobile').style.width='0%';    
            document.getElementById('abrir-menu').style.display='block';   
        }
        else if(event.target !== document.getElementById('menu-mobile')){
            document.getElementById('menu-mobile').style.display='none';
        }   
    });

// EVENTOS DE CLIQUE NO DISPLAY
    window.addEventListener('resize',function(){
        if(this.innerWidth > 768){
            document.getElementById('menu-mobile').style.display='none';
            document.getElementById('mobile').style.width='0%';    
            document.getElementById('abrir-menu').style.display='none';
        }else{
            document.getElementById('abrir-menu').style.display='block';   
            document.getElementById('mobile').style.width='0%';    
            document.getElementById('menu-mobile').style.display='none';
        }
    })

// EVENTO DE HOVER
    document.getElementById('desktop').addEventListener('mousemove',function(event){
        if(event.target ===  document.getElementById('btn-nav')){
            document.querySelector('.btn-nav').style.border='1px solid white';
            document.querySelector('.btn-nav').style.borderRadius='20px';
            document.querySelector('.btn-nav').style.border='0px 10px';
        }else{
            document.querySelector('.btn-nav').style.border='0';
        }
    })
