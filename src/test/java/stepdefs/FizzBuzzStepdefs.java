package stepdefs;

import com.sapient.game.FizzBuzzGame;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.jupiter.api.Assertions;

public class FizzBuzzStepdefs {

    FizzBuzzGame fizzBuzzGame;
    String result;

    @Given("A FizzBuzz game")
    public void a_FizzBuzz_game() {
        fizzBuzzGame = new FizzBuzzGame();
    }


    @When("user enters number {int}")
    public void userEntersNumber(int number) {
        result = fizzBuzzGame.play(number);
    }


    @Then("output {string} to user")
    public void outputToUser(String resultString) {
        Assertions.assertEquals(resultString, result);
    }
}
