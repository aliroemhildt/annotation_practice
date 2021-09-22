// Declare function addNumbers
function addNumbers() {
  // Declare variable firstNum and assign the value of 9 to it
  var firstNum = 9
  // Declare variable firstNum and assign the value of 14 to it
  var secondNum = 14

  // Reassign the value of 3 to the variable firstNum
  firstNum = 3
  // Reassign the value of 4 to the variable secondNum
  secondNum = 4

  // Declare the variable nums and assign it the value of an array that contains firstNum and secondNum
  var nums = [firstNum, secondNum]
  // Declare the variable product and assign it the value of firstNum multiplied by secondNum
  var product = firstNum * secondNum
  // Declare the variable sum and assign it the value of firstNum plus secondNum
  var sum = firstNum + secondNum
  // Declare the variable average and assign it the value of the variable sum divided by the length of the variable nums
  var average = sum / nums.length

  // Return the element in the 0 index of the nums array
  console.log(nums[0])
  // Return the element in the 1 index of the nums array
  console.log(nums[1])
  // Return a string with firstNum and secondNum interpolated in
  console.log(`The first number is ${firstNum} and the second number is ${secondNum}!`)

  // return the value of sum 
  return sum
}
