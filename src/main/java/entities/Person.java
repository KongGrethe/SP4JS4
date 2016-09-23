/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

/**
 *
 * @author Christian
 */
public class Person {
    private final String firstName;
    private final String lastName;
    
    public Person(String fName, String lName) {
        firstName = fName;
        lastName = lName;
    }
    
    public String getFName() {
        return firstName;
    }
    
    public String getLName() {
        return lastName;
    }
}
