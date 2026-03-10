COMPARACIÓN DE DISTINTOS AGENTES IA:

Actividad 1: Comparación de explicación.

    Se utilizó el siguiente prompt: "¿podrias explicar tres conceptos técnicos de la programación frontend?"

    Claude respondió:

    "1. 🧱 DOM (Document Object Model)
    El DOM es una representación en forma de árbol de todos los elementos HTML de una página web. El navegador lo genera automáticamente al cargar una página, y JavaScript puede leer y modificar ese árbol para cambiar el contenido, la estructura o el estilo sin necesidad de recargar la página.
    Ejemplo: Cuando haces clic en un botón y aparece un menú desplegable, JavaScript está manipulando el DOM para mostrar u ocultar elementos.

    2. ⚡ Event Loop (Bucle de Eventos)
    JavaScript es un lenguaje de un solo hilo (single-threaded), lo que significa que solo puede ejecutar una tarea a la vez. El Event Loop es el mecanismo que le permite manejar operaciones asíncronas (como peticiones a servidores o temporizadores) sin bloquear la interfaz.
    Funciona con tres componentes clave:

    Call Stack – donde se ejecutan las funciones en orden.
    Web APIs – gestionan tareas asíncronas en segundo plano (timers, fetch, etc.).
    Callback Queue – cola donde esperan las funciones listas para ejecutarse.

    El Event Loop revisa constantemente si el Call Stack está vacío para mover tareas de la cola y ejecutarlas.

    3. 🔄 Reactividad y Virtual DOM
    Frameworks modernos como React o Vue usan el concepto de reactividad: cuando el estado (los datos) de un componente cambia, la interfaz se actualiza automáticamente.
    Para hacerlo eficientemente, React utiliza el Virtual DOM, una copia ligera del DOM real en memoria. Cuando hay un cambio, React:

    Genera un nuevo Virtual DOM con los cambios.
    Lo compara con el anterior (diffing).
    Solo actualiza las partes del DOM real que realmente cambiaron (reconciliation).

    Esto hace que las aplicaciones sean mucho más rápidas que si se redibujara toda la página con cada cambio."

    Y chatGPT respondió:

    "1. HTML (HyperText Markup Language)

    HTML es el lenguaje que se utiliza para estructurar el contenido de una página web.

    Define elementos como títulos, párrafos, imágenes, enlaces, formularios, etc.

    Funciona mediante etiquetas (<h1>, <p>, <img>, etc.).

    Es la base de cualquier página web.

    Ejemplo simple:

    <h1>Bienvenido a mi página</h1>
    <p>Este es un párrafo de ejemplo.</p>

    📌 En frontend, HTML se encarga principalmente de la estructura del sitio web.

    2. CSS (Cascading Style Sheets)

    CSS se utiliza para dar estilo y diseño visual a la página creada con HTML.

    Con CSS puedes controlar:

    colores

    tamaños

    fuentes

    márgenes

    diseño de la página

    Ejemplo:

    h1 {
        color: blue;
        font-size: 30px;
    }

    📌 En frontend, CSS se encarga de la apariencia visual del sitio web.

    3. JavaScript

    JavaScript es el lenguaje que permite hacer que una página web sea interactiva.

    Gracias a JavaScript se pueden crear:

    botones que responden al usuario

    formularios con validación

    animaciones

    actualización de contenido sin recargar la página

    Ejemplo:

    alert("Hola, bienvenido a la página");

    📌 En frontend, JavaScript se encarga de la lógica y la interacción con el usuario.

    ✅ Resumen sencillo:

    Tecnología	Función
    HTML	Estructura del contenido
    CSS	Diseño y estilo
    JavaScript	Interactividad y lógica"

    Conclusión: Claude explicó conceptos más avanzados mientras que ChatGPT es mas generico. No se puede comparar las explicaciones de manera objetiva al ser de niveles distintos pero claude es más conciso y breve, resultando en una mayor claridad. Las explicaciones de claude son más profundos que los de chatgpt ya que asume que tienes conocimientos previos del tema.
    Pero chatGPT proporcionó ejemplos sencillos mientras que claude solo dio explicaciones sin ejemplo.

    En conclusión creo que con respecto a las explicaciones, claude es el mejor de los dos ya que proporciona resultados claras y profundas.

Actividad 2: Corrección de errores

    Se pidio a los dos agentes IA crear tres codigos sencillos con errores y después se lo da al otro agente para corregirlas.

    Claude:                                                             ChatGPT:
        🔴 Ejercicio 1 – Suma de números                                    1. Error en el nombre de la variable

            funcion sumarNumeros(a, b) {                                        let nombre = "Ana";
             return a + b;                                                      console.log(nombree);
            }

            console.log(sumarNumeros(5, 3));

        🔴 Ejercicio 2 – Recorrer un array                                  2. Error en una condición if

            const frutas = ["manzana", "pera", "uva"];                          let edad = 18;
                                                                                
            for (let i = 0; i <= frutas.length; i++) {                          if (edad = 18) {
                console.log(frutas[i]);                                             console.log("Eres mayor de edad");
            }                                                                   }

        🔴 Ejercicio 3 – Función con condicional                            3. Error en una función

            const edad = 20;                                                    function sumar(a, b) {
            if (edad => 18) {                                                   return a + b
                console.log("Eres mayor de edad");                              }
            } else {                                                            let resultado = sumar(5 3);
                console.log("Eres menor de edad");                              console.log(resultado);
            }
    
    Conclusión: Los dos agentes corrigieron los errores simples sin ningún problema. Pero chatGPT da resultados más fáciles de entender mostrando el codigo original y cambiado de manera clara y sencilla. Mientras que claude reemplaza el codigo directamente con un pequeño comentario explicándolo.

Actividad 3: Escribir una función recibiendo tareas a cumplir de manera escrita

    Igual que la actividad anterior, se pidio que se generase y escribiese una funcion del otro agente.

    Claude:                                                             ChatGPT:
        "Una función que reciba un nombre y salude a la persona"            "Función para saber si un número es par"
        "Una función que calcule el área de un rectángulo"                  "Función para sumar números"
        "Una función que filtre los números pares de una lista"             "Función para saludar"

    Conclusión: Los dos agentes dieron funciones similares, y escribieron la descripción del otro agente sin ningun problema. 
    Los dos agentes dan explicación del codigo, un metodo alternativo más complejo pero mejor aunque al igual que la actividad anterior, chatGPT resume y explica mejor que claude.

Conclusión final: ChatGPT explica mejor que claude aunque eso beneficia a personas sin mucho conocimiento previo, mientras que claude explica de manera clara y concisa, y esto permite ahorrar tiempo leyendo parrafos extra.