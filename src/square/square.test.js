const square = require("./square");

describe("square", () => {
	beforeEach(() => {
		// ...
	});

	beforeAll(() => {
		// ...
	});

	// test("Square function nechchi marta chaqirlaganini tekshiruvi", () => {
	// 	// Math objectining pow methodi nechchi marta chaqirilgan?
	// 	const spyMathPow = jest.spyOn(Math, "pow");
	// 	square(2);
	// 	square(5);
	// 	// toHaveBeenCalledTimes => Soxta funktsiya aniq ko'p marta chaqirilganiga ishonch hosil qilish uchun
	// 	expect(spyMathPow).toHaveBeenCalledTimes(2);
	// });

	test("Square function nechchi marta chaqirlaganini tekshiruvi2", () => {
		const spyMathPow = jest.spyOn(Math, "pow");
		square(1);
		square(1);
		expect(spyMathPow).toHaveBeenCalledTimes(0);
	});

	// afterEach => Testdan keyin - har safar
	afterEach(() => {
		// ...
		jest.clearAllMocks();
	});

	// afterAll => Testdan keyin - bir marta
	afterAll(() => {
		// ...
	});
});

// Documentation
// describe("square", () => {
// 	let mockValue;
// 	let mockValue2;

// 	// beforeEach => Testdan avval - har safar
// 	beforeEach(() => {
// 		mockValue = Math.random();
// 	});

// 	// beforeAll => Testdan avval - bir marta
// 	beforeAll(() => {
// 		mockValue2 = Math.random() + 1;
// 	});

// 	test("Square qiymat tekshiruvi", () => {
// 		expect(square(2)).toBe(4);

// 		// toBeLessThan => nimadandur kichik
// 		expect(square(2)).toBeLessThan(5);

// 		// toBeLessThan => nimadandur katta
// 		expect(square(2)).toBeGreaterThan(3);

// 		// not.toBeUndefined => undefined emas
// 		expect(square(2)).not.toBeUndefined();
// 	});

// 	// afterEach => Testdan keyin - har safar
// 	afterEach(() => {
// 		// ...
// 	});

// 	// afterAll => Testdan keyin - bir marta
// 	afterAll(() => {
// 		// ...
// 	});
// });
