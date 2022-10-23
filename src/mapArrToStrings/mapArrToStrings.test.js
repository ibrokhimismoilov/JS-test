const mapArrToStrings = require("./mapArrToStrings");

describe("mapArrToStrings", () => {
  test("Qiymat tekshiruvi", () => {
    // toEqual => reference tiplar uchun

    // Masalan:

    // Primitive
    // let a = 3
    // let b = 3
    // a === b // true

    // Reference
    // let a = {p1: 1, p2: 2}
    // let b = {p1: 1, p2: 2}
    // a === b // false

    // Reference tiplarini tekshirish uchun toEqual

    expect(mapArrToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });

  test("Qiymatlarda faqat int tiplarini tekshir", () => {
    expect(mapArrToStrings([1, 2, 3, undefined, null, "asd"])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });

  test("Qiymat tekshiruvi", () => {
    expect(mapArrToStrings([])).toEqual([]);
  });

  test("Qiymat not tekshiruvi ", () => {
    // .not => inkor
    expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});
