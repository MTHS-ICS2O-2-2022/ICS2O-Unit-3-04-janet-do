// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This file generates conversion from fahrenheit to celsius 

"use strict"

function calculate() {
  // Get the radius from the query string
  const urlParams = new URLSearchParams(window.location.search)
  const radius = parseFloat(urlParams.get("r"))

  // Input validation
  if (isNaN(radius)) {
    document.getElementById("conversion").innerHTML = "Invalid radius"
    return
  }

  // Process
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)

  // Output
  document.getElementById("dimension").innerHTML = "r = " + radius
  document.getElementById("output").innerHTML =
    "Volume: " + volume.toFixed(2) + " cm³"
}

window.onload = calculate
