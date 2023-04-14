// Created by: Janet Do
// Created on: Sep 2020
//
// This program shows conversion from Fahrenheit to Celsius

package main

import (
	"fmt"
	"math"
)

func main() {
	// This function shows conversion from Fahrenheit to Celsius

	var fahrenheit float64
	var celsius float64

	// input
	fmt.Println("This program shows conversion from Fahrenheit to Celsius")
	fmt.Println()
	fmt.Print("Enter Fahrenheit: ")
	fmt.Scanln(&fahrenheit)

	// process
	celsius = (fahrenheit - 32) * 5 / 9
	celsius = math.Round(celsius*100) / 100 // round to 2 decimal places

	// output
	fmt.Println()
	fmt.Printf("Converted to Celsius: %.2f ℃.\n", celsius)
	fmt.Println()
	fmt.Println("Done.")
}
