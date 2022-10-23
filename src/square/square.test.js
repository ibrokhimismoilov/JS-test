const square = require("./square");

describe("square", () => {
  let mockValue;
  let mockValue2;

  // beforeEach => Testdan avval - har safar
  beforeEach(() => {
    mockValue = Math.random();
  });

  // beforeAll => Testdan avval - bir marta
  beforeAll(() => {
    mockValue2 = Math.random() + 1;
  });

  test("Square qiymat tekshiruvi", () => {
    expect(square(2)).toEqual(4);
  });
});
