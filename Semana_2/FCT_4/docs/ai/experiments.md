# Experimentos con programación sin IA vs con IA

Este documento compara la experiencia de programar sin ayuda de IA y con ayuda de IA en 3 ejercicios cortos. Se analiza:
- tiempo invertido,
- calidad del código,
- comprensión y aprendizaje.

Tras las pruebas, la lógica resultó similar en los tres ejercicios, por lo que aquí se presenta un ejercicio completo: contador de palabras.

---

## Ejercicio: contador de palabras

### Código sin IA

```javascript
const arrayPalabras = ["1", "1", "2"];
const palabras = new Map();

function contarPalabras(arrayPalabras) {
  for (let i = 0; i < arrayPalabras.length; i++) {
    const palabraActual = arrayPalabras[i];
    if (palabras.has(palabraActual)) {
      const contador = palabras.get(palabraActual);
      palabras.set(palabraActual, contador + 1);
    } else {
      palabras.set(palabraActual, 1);
    }
    console.log(palabras);
  }
}

contarPalabras(arrayPalabras);
```

- Tiempo: 5 minutos.
- Comprensión: completa, el flujo es explícito.
- Aprendizaje: bueno para entender `Map` y bucles for.

### Código con IA

```javascript
function countWords(arr) {
  const map = new Map();
  for (const word of arr) {
    map.set(word, (map.get(word) ?? 0) + 1);
  }
  return map;
}
```

- Tiempo: instantáneo.
- Comprensión: menor si no se conoce `??` y `Map` bien.
- Aprendizaje: menor porque el código se interpreta en vez de diseñarse desde cero.

---

## Implementación en la web

Se añadieron tres funcionalidades a una app de tareas:
1. Borrar todo.
2. Marcar como pendiente.
3. Editar tarea con doble clic.

Observaciones:
- Con IA se implementaron más rápido.
- El debugging con IA puede tardar más al detectar y corregir errores.
- La IA puede generar cambios que afectan al diseño visual si no se revisa con cuidado.

---

## Conclusiones

- La IA acelera la escritura de código y reduce el tiempo inicial.
- Sin IA se aprende más profundamente los detalles.
- En mantenimiento y diseño, es importante revisar y ajustar manualmente lo que propone la IA.
