# README.md para Fundamentos de NodeJS

## Tipos de módulos en NodeJS: CommonJS y ESModules

### Ejemplo con CommonJS:

**Archivo: `src/math.js`**
```javascript
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = { add, subtract };
```

**Archivo: `src/main.js`**
```javascript
const math = require('./math');

console.log(`Sumar: ${math.add(5, 3)}`);
console.log(`Restar: ${math.subtract(5, 3)}`);
```

**Ejecución:**
```bash
node main.js
# Output:
# Sumar: 8
# Restar: 2
```

---

### Ejemplo con ES Modules (ESM):

**Archivo: `src/math.mjs`**
```javascript
export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    return a / b;
}
```

**Archivo: `src/main.mjs`**
```javascript
import { multiply, divide } from './math.mjs';

console.log(`Multiplicación: ${multiply(5, 3)}`);
console.log(`División: ${divide(6, 2)}`);

import './native.js';
```

**Ejecución:**
```bash
node main.mjs
# Output:
# Multiplicación: 15
# División: 3
```

---

### Utilizando módulos nativos:

**Archivo: `example.txt`**
```
Hola Andreita!!!
```

**Archivo: `src/native.js`**
```javascript
const fs = require('fs');

const data = fs.readFileSync('../example.txt', 'utf8');
console.log('File Content:', data);
```

**Ejecución:**
```bash
node native.js
# Output:
# File Content: Hola Andreita!!!
```

---

### Implementando módulos de terceros:

**Instalación:**
```bash
npm install is-odd
```

**Archivo: `src/third-party.js`**
```javascript
const isOdd = require('is-odd');

console.log(isOdd(1)); // true
console.log(isOdd(3)); // false
```

**Ejecución:**
```bash
node third-party.js
# Output:
# true
# true
```

---

## Estructura del proyecto

```
genera_num_aleatorios/
├── .gitignore
├── README.md
├── example.txt
├── package.json
├── package-lock.json
└── src/
    ├── main.js
    ├── main.mjs
    ├── math.js
    ├── math.mjs
    ├── native.js
    └── third-party.js
```

## Comandos útiles

```bash
# Ejecutar archivos CommonJS
node src/main.js

# Ejecutar archivos ES Modules
node src/main.mjs

# Ejecutar módulos nativos
node src/native.js

# Ejecutar módulos de terceros
node src/third-party.js
```

## Notas importantes

- **CommonJS** usa `require()` y `module.exports`
- **ES Modules** usa `import` y `export`
- Los archivos `.mjs` indican que usan ES Modules
- Los módulos nativos vienen incluidos con Node.js
- Los módulos de terceros se instalan con npm

## Dependencias

```json
{
  "dependencies": {
    "is-odd": "^3.0.1"
  }
}
```