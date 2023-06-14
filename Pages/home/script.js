/*
################### O que faz? ################### 

- Pega os elementos do HTML e os armazena em constantes;
- Adiciona um evento de click no botão de "Iniciar salto espacial";
- Quando o botão é clicado, verifica se o contador é igual a 0;
- Se for, adiciona a classe "deactivate" no elemento "hologramText" e remove a classe "deactivate" do elemento "hologramTextalternative";
- Se não for, remove a classe "deactivate" do elemento "hologramText" e adiciona a classe "deactivate" do elemento "hologramTextalternative";
- Adiciona a classe "deactivate" no elemento "buttonHologramListen";
- Muda o texto do elemento "hologramText" para "Salto espacial iniciado!";
- Initia o cronomêtro para o salto espacial;
*/

// variaveis e constantes
const buttonHologramListen = document.getElementsByClassName("buttonHologram"); 
const hologramText = document.getElementsByClassName("hologramText");  
const hologramTextalternative = document.getElementsByClassName("hologramTextNew"); 
const hologramActive = document.getElementsByClassName("hologram"); 

window.SpaceJump = false;
let contador = 0;

// Eventos
buttonHologramListen[0].addEventListener("click", () => { 
  if (contador == 0) {  
    hologramText[0].classList.add("deactivate"); 
    hologramTextalternative[0].classList.remove("deactivate"); 
    hologramText[0].classList.remove("firstTime"); 

    buttonHologramListen[0].textContent = "Inciar salto espacial!"; 
    contador++; 
  } else {
    hologramText[0].classList.remove("deactivate"); 
    hologramTextalternative[0].classList.add("deactivate"); 
    buttonHologramListen[0].classList.add("deactivate"); 

    hologramText[0].textContent = "Salto espacial iniciado!"; 

    let i = 10; 
    window.SpaceJump = true; 
    setInterval(() => { 
      hologramText[0].textContent = "Salto espacial em: " + i + " segundos!"; 
      i--;
      if (i == 0) { 
        hologramText[0].textContent = "Salto espacial iniciado!"; 
        setTimeout(() => {
          window.location.href = "../../pages/planets/"; 
        }, 1000);
      }
    }, 1000);
  }
});
