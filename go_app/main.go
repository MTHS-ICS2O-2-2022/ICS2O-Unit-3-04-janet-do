// Created by: Janet Do
// Created on: Sep 2020
//
// This program shows conversion from Fahrenheit to Celsius

package main

import "fmt"

func main() {
	// This function shows conversion from Fahrenheit to Celsius

	var fahrenheit int
	var celsius int

	// input
	fmt.Println("This program shows conversion from Fahrenheit to Celsius")
	fmt.Println()
	fmt.Print("Enter Fahrenheit: ")
	fmt.Scanln(&fahrenheit)

	// process
	celsius = (fahrenheit - 32) * 5/9
	celsius = math.Round(celsius*100) / 100 // round to 2 decimal places

	// output
	fmt.Println()
	fmt.Println("converted to celsius is:", celsius, "℃.")
	fmt.Println()
	fmt.Println("\nDone.")
}
