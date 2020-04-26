Feature: Fizz Buzz Game
  Scenario: Play FizzBuzz to get Fizz
    Given A FizzBuzz game
    When user enters number 3
    Then output "Fizz" to user
  Scenario: Play FizzBuzz to get Buzz
    Given A FizzBuzz game
    When user enters number 5
    Then output "Buzz" to user
  Scenario: Play FizzBuzz to get FizzBuzz
    Given A FizzBuzz game
    When user enters number 15
    Then output "FizzBuzz" to user


