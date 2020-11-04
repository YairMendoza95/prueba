# **Prueba**

### **1. Escribir una función que reciba un arreglo de números y obtenga el subarreglo másgrande en el que cada elemento del subarreglo sea mayor que el anterior.**

>

### **2. Escribir una función que reciba 2 enteros no negativos n y m y obtenga el resultado de n+(n+1)+(n+2)+...+m**

> El ejercicio fue muy fácil, ya que era una sumatoria de números, lo cual debia de contar con un acumulador contiene la sumatoria, y un contador el cual lleva el incremento de la variable.

> Primero se tenía que validar si los números recibidos en la función son positivos, el siguiente pasó era crear el contador y el acumulador, luego se procede a evaluar que número era mayor, y de este modo, ver que número iba a ser el límite, una vez evaluado por medio de un ciclo se iban sumando los valores de los números.

### **3. Dado un arreglo de números desordenado y un entero k, escribe una función que encuentre el k-ésimo elemento más grande.**

> Para resolver el ejecicio, lo complicado en un principio fue el saber a que se referia el enunciado, para ello investigue y me encontré con un método llama "k-esímo mayor", una vez leído el blog, comprendí a lo que se referia y procedí a codificarlo.

> En cuanto a la codificación, decidí hacer uso de la programación funcional de JavaScript, por lo cual primero se ordena el arreglo con el método sort(), el cual, ordena de forma ascendente el arreglo, después revertí el arreglo con el método reverse(), como resultado se obtiene un arreglo ordenado en forma descendente, y por último, se retorna la posición k-1.

### **4. Escribe una función que reciba un arreglo de números y quite los elementos duplicados.**

> En este ejercicio se hace uso de una estructura de datos Set, la cual implicitamente hace la eliminación de los valores duplicados en un arreglo.

### **5. Dada una cadena de paréntesis y corchetes escribe una función que regresa si la cadena está bien balanceada**

>

### 6.Tienes un conjunto de clases que tienen una hora de inicio y una de final, hay que acomodarlas en el menor número de salones sin que se traslapan, una clase de 11:00 a 14:00 no puede estar en el mismo salón que una de 12:00 a 15:00.

> Para resolver este problema fue más complicado
