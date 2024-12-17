function torreDeHanoi(n: number, origen: string, destino: string, auxiliar: string): void {
  // Caso base: Si solo hay un disco, movemos directamente de A a C
  if (n === 1) {
    console.log(`Mover disco de ${origen} a ${destino}`);
    return;
  }

  //Movemos de la torre A a la torre B usando la torre C como auxiliar
  torreDeHanoi(n - 1, origen, auxiliar, destino);

  //Movemos el disco restante de la torre A a la torre C
  console.log(`Mover disco de ${origen} a ${destino}`);

  //Movemos de la torre B a la torre C usando la torre A como auxiliar
  torreDeHanoi(n - 1, auxiliar, destino, origen);
}

const numeroDeDiscos = 3; //Numero de discos
torreDeHanoi(numeroDeDiscos, "A", "C", "B");
