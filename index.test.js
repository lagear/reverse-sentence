const reverse = require("./index");

test("reverse", () => {
  expect(reverse("hola mundo")).toBe("mundo hola");
});
