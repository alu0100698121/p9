#Analizador de ámbito de PL0
## Plegado de constantes

![Icon](http://upload.wikimedia.org/wikipedia/commons/3/37/Pl_logo5.gif)

Este analizador trata de parsear con la gramática [PL/0][PL0].

Una vez introducido un programa (véase la sintaxis y la gramática que acepta [aquí][grammar]) el programa produce un árbol recursivo descendente.

Se almacenan en una tabla los valores de las variables, constantes, parámetros, etc.

Como novedad, en esta práctica se aplica el plegado de constantes, que permite simplificar los nodos referentes a variables y constantes, haciendo una única vez las operaciones que se le puedan asignar, y almacenar solamente el valor de la operación.

También se incluye en la página un enlace a tests que prueban la completa funcionalidad de la página.

####Enlace a la web

[http://protected-badlands-7269.herokuapp.com/][Heroku]

####Autores

* Alejandro Hernández Hernández ([GitHub][Ale])
* Eliasib J. García Martín ([GitHub][Eli])

####Licencia

MIT

[PL0]: http://en.wikipedia.org/wiki/PL/0
[page]: http://gentle-gorge-3583.herokuapp.com/
[Ale]: https://github.com/alu0100699715
[Eli]: https://github.com/alu0100698121
[grammar]: http://gentle-gorge-3583.herokuapp.com/grammar
[Heroku]: http://protected-badlands-7269.herokuapp.com/
