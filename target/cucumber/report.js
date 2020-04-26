$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FizzBuzz.feature");
formatter.feature({
  "name": "Fizz Buzz Game",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Play FizzBuzz to get Fizz",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A FizzBuzz game",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.FizzBuzzStepdefs.a_FizzBuzz_game()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters number 3",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.FizzBuzzStepdefs.userEntersNumber(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "output \"Fizz\" to user",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.FizzBuzzStepdefs.outputToUser(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Play FizzBuzz to get Buzz",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A FizzBuzz game",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.FizzBuzzStepdefs.a_FizzBuzz_game()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters number 5",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.FizzBuzzStepdefs.userEntersNumber(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "output \"Buzz\" to user",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.FizzBuzzStepdefs.outputToUser(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Play FizzBuzz to get FizzBuzz",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A FizzBuzz game",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.FizzBuzzStepdefs.a_FizzBuzz_game()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters number 15",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.FizzBuzzStepdefs.userEntersNumber(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "output \"FizzBuzz\" to user",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.FizzBuzzStepdefs.outputToUser(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/friday.feature");
formatter.feature({
  "name": "Is it Friday yet?",
  "description": "  Everybody wants to know when it\u0027s Friday",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Today is or is not Friday",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "today is \"\u003cday\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.step({
  "name": "I should be told \"\u003canswer\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "day",
        "answer"
      ]
    },
    {
      "cells": [
        "Friday",
        "Yes"
      ]
    },
    {
      "cells": [
        "Sunday",
        "Nope"
      ]
    },
    {
      "cells": [
        "anything else!",
        "Nope"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Today is or is not Friday",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "today is \"Friday\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.FridayStepdefs.today_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.FridayStepdefs.i_ask_whether_it_s_Friday_yet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Yes\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.FridayStepdefs.i_should_be_told(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Today is or is not Friday",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "today is \"Sunday\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.FridayStepdefs.today_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.FridayStepdefs.i_ask_whether_it_s_Friday_yet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Nope\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.FridayStepdefs.i_should_be_told(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Today is or is not Friday",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "today is \"anything else!\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.FridayStepdefs.today_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.FridayStepdefs.i_ask_whether_it_s_Friday_yet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Nope\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.FridayStepdefs.i_should_be_told(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});