const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
        

        // cuando presione C vuelve a 0
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }
        // borrar ultimo numero, -1 arranca a borrar desde atras
        if (boton.id === "borrar") {
            if(pantalla.textContent.length === 1) {
                pantalla.textContent = "0";
            } else { // si tenemos un numero que vuelva a 0
            pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {  // eval evaluar lo que haya en la pantalla
            pantalla.textContent = eval(pantalla.textContent);
            return;
        }

        // saca el cero una vez tipee numeros
        if (pantalla.textContent === "0") { 
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })
})