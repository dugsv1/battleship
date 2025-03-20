import { Gameboard } from "../gameboard";

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
