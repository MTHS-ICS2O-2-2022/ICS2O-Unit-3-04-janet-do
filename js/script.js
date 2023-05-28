// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This file generates conversion from fahrenheit to celsius 

"use strict"

function calculate() {
  // Get the Fahrenheit value from the query string
  const urlParams = new URLSearchParams(window.location.search)
  const fahrenheit = parseFloat(urlParams.get("fahrenheit"))

  // Input validation
  if (isNaN(fahrenheit)) {
    document.getElementById("conversion").innerHTML = "Invalid Fahrenheit value"
    return
  }

  // Process
  const celsius = (fahrenheit - 32) * (5 / 9)

  // Output
  document.getElementById("conversion").innerHTML =
    "Converted to Celsius: " + celsius.toFixed(2) + "°C"
}

window.onload = calculate
