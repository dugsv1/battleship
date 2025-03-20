export class Ship {
  constructor(len) {
    this.length = 3;
    this.damageTaken = 0;
  }
  hit() {
    this.damageTaken++;
  }
}
