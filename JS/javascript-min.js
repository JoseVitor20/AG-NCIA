document.addEventListener("click",(function(e){e.target===document.getElementById("abrir-menu")?(document.getElementById("mobile").style.width="55%",document.getElementById("menu-mobile").style.display="block"):e.target===document.getElementById("menu-lista0")||e.target===document.getElementById("menu-lista1")||e.target===document.getElementById("menu-lista2")||e.target===document.getElementById("menu-lista3")||e.target===document.getElementById("menu-lista4")||e.target===document.getElementById("menu-lista5")||e.target===document.getElementById("menu-lista6")||e.target===document.getElementById("menu-lista7")||e.target===document.getElementById("menu-lista8")||(e.target===document.getElementById("fechar-menu")?(document.getElementById("menu-mobile").style.display="none",document.getElementById("mobile").style.width="0%",document.getElementById("abrir-menu").style.display="block"):e.target!==document.getElementById("menu-mobile")&&(document.getElementById("menu-mobile").style.display="none"))})),window.addEventListener("resize",(function(){this.innerWidth>768?(document.getElementById("menu-mobile").style.display="none",document.getElementById("mobile").style.width="0%",document.getElementById("abrir-menu").style.display="none"):(document.getElementById("abrir-menu").style.display="block",document.getElementById("mobile").style.width="0%",document.getElementById("menu-mobile").style.display="none")})),document.getElementById("desktop").addEventListener("mousemove",(function(e){e.target===document.getElementById("btn-nav")?(document.querySelector(".btn-nav").style.border="1px solid white",document.querySelector(".btn-nav").style.borderRadius="20px",document.querySelector(".btn-nav").style.border="0px 10px"):document.querySelector(".btn-nav").style.border="0"}));