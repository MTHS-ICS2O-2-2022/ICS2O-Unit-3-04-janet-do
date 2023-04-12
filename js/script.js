// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This file generates conversion from fahrenheit to celsius 

"use strict"

function calculate() {
  // input
  const fahrenheit = parseInt(document.getElementById("fahrenheit ").value)
  const zeroDegrees = 32
  const standard = 5/9

  // process
  const conversion = (fahrenheit - zeroDegrees) * standard 

  // output
  document.getElementById("conversion").innerHTML ="converted to celsius is: " + conversion.toFixed(2) + "°C"
}
