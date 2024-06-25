let intentos = 6;
        let button = document.getElementById("guess-button");
        button.addEventListener("click", intentar);
        const palabras = [
            "amigo", "barco", "dulce", "feliz", "gordo",
            "islas", "joven", "lapiz", "manos", "nieve",
            "perro", "queso", "raton", "silla", "tigre",
            "marea", "nubes", "osito", "fluir"
        ];


        function obtenerPalabraAleatoria() {
            const indiceAleatorio = Math.floor(Math.random() * palabras.length);
            return palabras[indiceAleatorio];
        }

        let palabra = obtenerPalabraAleatoria().toUpperCase();
        console.log(palabra);

        function leerIntento() {
            let intento = document.getElementById("guess-input").value;
            intento = intento.toUpperCase(); 
            return intento;
        }

        function intentar() {
            const INTENTO = leerIntento();
            
            if (INTENTO.length !== 5) {
                alert("El intento debe tener exactamente 5 letras.");
                return;
            }
            
            const GRID = document.getElementById("grid");
            const ROW = document.createElement('div');
            ROW.className = 'row';
            
            for (let i in palabra) {
                const SPAN = document.createElement('span');
                SPAN.className = 'letter';
                
                if (INTENTO[i] === palabra[i]) { // VERDE
                    SPAN.innerHTML = INTENTO[i];
                    SPAN.style.backgroundColor = 'green';
                } else if (palabra.includes(INTENTO[i])) { // AMARILLO
                    SPAN.innerHTML = INTENTO[i];
                    SPAN.style.backgroundColor = 'yellow';
                } else { // GRIS
                    SPAN.innerHTML = INTENTO[i];
                    SPAN.style.backgroundColor = 'grey';
                }
                
                ROW.appendChild(SPAN);
            }

            GRID.appendChild(ROW);
            intentos--;

            if (INTENTO === palabra) {
                terminar("<h1>¡GANASTE! 😀</h1>");
                return;
            }

            if (intentos === 0) {
                terminar(`<h1>PERDISTE! 😖</h1><p>La palabra era: ${palabra}</p>`);
            }
        }

        function terminar(mensaje) {
            const INPUT = document.getElementById("guess-input");
            const BOTON = document.getElementById("guess-button");
            INPUT.disabled = true;
            BOTON.disabled = true;
            let contenedor = document.getElementById('guesses');
            contenedor.innerHTML = mensaje;
        }