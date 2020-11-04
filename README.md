# **Prueba**

### **1. Escribir una función que reciba un arreglo de números y obtenga el subarreglo másgrande en el que cada elemento del subarreglo sea mayor que el anterior.**

> El ejercicio fue un poco complicado ya que no recordaba sobre los métodos de ordenamiento, pero una vez que revise apuntes que tenía de la universidad me pude guiar para encontrar la solución.

> 1. Se inicia creando una variable temporal la cual contendrá temporalmente el valor menor.
> 2. Luego se crean dos ciclos anidados, esto para que se pueda comparar el cada elemento del arreglo con todo el arreglo.
> 3. Se evalúa evalúan los valores del arreglo y se asignan a la variables.

### **2. Escribir una función que reciba 2 enteros no negativos n y m y obtenga el resultado de n+(n+1)+(n+2)+...+m**

> El ejercicio fue muy fácil, ya que era una sumatoria de números, lo cual debia de contar con un acumulador contiene la sumatoria, y un contador el cual lleva el incremento de la variable.

> Primero se tenía que validar si los números recibidos en la función son positivos, el siguiente pasó era crear el contador y el acumulador, luego se procede a evaluar que número era mayor, y de este modo, ver que número iba a ser el límite, una vez evaluado por medio de un ciclo se iban sumando los valores de los números.

### **3. Dado un arreglo de números desordenado y un entero k, escribe una función que encuentre el k-ésimo elemento más grande.**

> Para resolver el ejecicio, lo complicado en un principio fue el saber a que se referia el enunciado, para ello investigue y me encontré con un método llama "k-esímo mayor", una vez leído el blog, comprendí a lo que se referia y procedí a codificarlo.

> En cuanto a la codificación, decidí hacer uso de la programación funcional de JavaScript, por lo cual primero se ordena el arreglo con el método sort(), el cual, ordena de forma ascendente el arreglo, después revertí el arreglo con el método reverse(), como resultado se obtiene un arreglo ordenado en forma descendente, y por último, se retorna la posición k-1.

### **4. Escribe una función que reciba un arreglo de números y quite los elementos duplicados.**

> En este ejercicio se hace uso de una estructura de datos Set, la cual implicitamente hace la eliminación de los valores duplicados en un arreglo.

### **5. Dada una cadena de paréntesis y corchetes escribe una función que regresa si la cadena está bien balanceada**

> En la universidad había creado un ejercicio similar.
> Aquí se inicia con arreglo vacío, el cual almacenará los signos de apertura, después se itera la cadena, y se evalúa cada signo, y cada que encuentre un paréntesis, corchete o llave de apertura, se agregará al arreglo, después se evalua si son signos de cierre y de la misma manera se evalua si la pila está vacía, en caso de estar vacía el devuelve un false, debido a que, debería de haber un signo, igual, se evalúa si el último elemento de la pila es la contraparte del signo evaluado, de ser así, se elimina el elemento del arreglo.

### 6.Tienes un conjunto de clases que tienen una hora de inicio y una de final, hay que acomodarlas en el menor número de salones sin que se traslapan, una clase de 11:00 a 14:00 no puede estar en el mismo salón que una de 12:00 a 15:00.

> Lo más dificil fue tener la lógica en cuanto a como obtener 
