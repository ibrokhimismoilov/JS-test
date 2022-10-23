const delay = require("./delay");

describe("delay", () => {
	test("delay", async () => {
		const sum = await delay(() => 5 + 5, 1000);
		expect(sum).toBe(10);
	});
});
