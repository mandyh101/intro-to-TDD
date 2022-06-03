//TEST to make sure Jest is working
describe ('Set up tests', () => {  //describe will break your test results into sections
  test('Jest is working', () => {
    expect(1).toBe(1);
  });
})

//TESTS
// 1. Create a random number
// 2. The number is an integer.
// 3. The number created is within a specified range.
// 4. The number is unique.

describe ('create a unique ID number', () => {
  test('creates a random number', (){

  })
  test.todo('checks the number is an integer')
  test.todo('checks the number created is within a specific range')
  test.todo('checks the number is unique')
})