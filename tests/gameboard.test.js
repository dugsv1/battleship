import { Gameboard } from "../gameboard.js";
import { Ship } from "../ship.js";

describe("Gameboard", () => {
  let board;

  beforeEach(() => {
    board = new Gameboard();
  });
  test("records an attack at a given coordinate", () => {
    board.receiveAttack(2, 3);
    expect(board.attacks).toContainEqual([2, 3]);
  });
});

describe("Gameboard - Ship Interactions", () => {
  let board, ship;

  beforeEach(() => {
    board = new Gameboard();
    ship = new Ship(3);
    board.placeShip(ship, 2, 3);
  });
  test("attacking a ship calls on the ships hit method", () => {
    jest.spyOn(ship, "hit");
    board.receiveAttack(2, 3);
    expect(ship.hit).toHaveBeenCalled();
  });
});
