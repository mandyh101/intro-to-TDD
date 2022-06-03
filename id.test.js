const getNewId = require('./id.js')
//TEST to make sure Jest is working
describe ('Set up tests', () => {  //describe will break your test results into sections
  test('Jest is working', () => {
    expect(1).toBe(1);
  });
})

//TESTS

// 1. Create a random number
//--> for this test we need to reassign the math.random() to something constant (this is called mocking) becaause we have no idea what to expect for a random number output. We're not testing for a random number. We're testing tha Math.random() gets called and returns some expected value that we can plan for!
//--> first copy the global Math object
//--> second, change the random method to return a constant value that we can EXPECT
//--> third we should get an ID back from the function (remember we are creating a unique ID using TDD, but we havn't created the function yet)
//--> then we EXPECT that ID to be our mocked return value

// 2. The number is an integer.
//--> compare the ID we get back with it's integer version
// 3. The number created is within a specified range.
// 4. The number is unique.

describe ('create a unique ID number', () => {
  test('creates a random number', () => {
    const originalMath = Object.create(global.Math); //copy  global math object
    const mockMath = Object.create(global.Math); //copy  global math object
    mockMath.random = jest.fn(() => 0.75); //change the random method to return a constant value that we can expect. jest.fn() is a built in mocking function
    global.Math = mockMath;
    const id = getNewId(); //this is the function we'll create when we write the code
    expect(id).toBe(0.75)
    global.Math = originalMath;
  })
  test('checks the number returned is an integer', () => {
      const id = getNewId();
      expect(id).toBe(Math.floor(id))
  })
  test.todo('checks the number created is within a specific range')
  test.todo('checks the number is unique')
})