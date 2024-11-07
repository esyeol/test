// toBe EX 1
test("1 === 1", () => {
  expect(1).toBe(1); // pass 
});

// toBe EX2
test("test === test", () => {
  expect(true).toBe(false); // fail 원시타입 값이 다르기 때
});