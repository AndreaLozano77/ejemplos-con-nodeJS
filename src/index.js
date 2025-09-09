const args = process.argv.slice(2);
let min = 1;
let max = 100;

if (args.length >= 2) {
  const parseMin = parseInt(args[0], 10);
  const parseMax = parseInt(args[1], 10);
  
  if (!isNaN(parseMin) && !isNaN(parseMax) && parseMin < parseMax) {
    min = parseMin;
    max = parseMax;
  } else {
    console.log("🚫 Rango inválido, usando valores por defecto del 1 al 100");
  }
}

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`🎲 Número aleatorio generado entre ${min} y ${max}: ${randomNumber}`);