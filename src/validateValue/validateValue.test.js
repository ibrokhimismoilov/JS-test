const validateValue = require("./validateValue");

// test => yagona test uchun
test("Qiymat tekshiruvi", () => {
  expect(validateValue(50)).toBe(true);
});

// describe => multiple test uchun
describe("validateValue", () => {
  test("Qiymat tekshiruvi", () => {
    // expect => testlanuvchi funcksiya kuzatuvchisi
    // toBe => expect dan qaytgan natija
    expect(validateValue(50)).toBe(true);
  });

  test("Kichik qiymat", () => {
    expect(validateValue(-1)).toBe(false);
  });

  test("Katta qiymat", () => {
    expect(validateValue(101)).toBe(false);
  });

  test("Maximum qiymat", () => {
    expect(validateValue(0)).toBe(true);
  });

  test("Minimum qiymat", () => {
    expect(validateValue(100)).toBe(true);
  });
});
