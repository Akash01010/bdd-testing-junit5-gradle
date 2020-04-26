package com.sapient.demo;

//import com.github.mkolisnyk.cucumber.reporting.CucumberResultsOverview;
//import io.cucumber.java.After;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class DemoApplicationTest {

    @Test
    void main() {
        Assertions.assertEquals(1,1);
    }

//    @After
//    void generateCucumberReports() {
//        CucumberResultsOverview results = new CucumberResultsOverview();
//        results.setOutputDirectory("target");
//        results.setOutputName("cucumber-results");
//        results.setSourceFile("./target/cucumber/cucumber.json");
//        try {
//            results.execute();
//        } catch (Exception e) {
//            System.out.println("Exception Thrown");
//        }
//    }

}