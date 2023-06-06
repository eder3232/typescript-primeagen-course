# Arrays

Un array es un espacio continuo en memoria, que tiene cierta cantidad de bytes.

```javascript
const a = new ArrayBuffer(6) 
ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00>, byteLength: 6 }
```

Esto crea un espacio continuo en memoria con una longitud de bytes igual a 6.

Luego creamos un arraglo de enteros:

```javascript
const a8 = new Uint8Array(a) 
```

Para cambiar el primer valor podemos hacer:

```javascript
a8[0] = 1
ArrayBuffer { [Uint8Contents]: <01 00 00 00 00 00>, byteLength: 6 }
```

y si le damos a:

```javascript
a8[2] = 2
ArrayBuffer { [Uint8Contents]: <01 00 01 00 00 00>, byteLength: 6 }
```

Como es de esperarse se cambia el segundo valor, pero su utilizamos un uint16:

```javascript
const a16 = new Uint16Array(a) 
```

Al escribir a16[2]=3

Se escribira en el:

```node
ArrayBuffer { [Uint8Contents]: <01 00 02 00 03 00>, byteLength: 6 }
```
