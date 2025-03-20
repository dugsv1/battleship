export class Gameboard {
  constructor() {
    this.attacks = [];
    this.ships = {};
  }
  receiveAttack(x, y) {
    this.attacks.push([x, y]);
    if (this.ships[`${x},${y}`]) {
      this.ships[`${x},${y}`].hit();
    }
  }
  placeShip(ship, x, y) {
    this.ships[`${x},${y}`] = ship;
  }
}
