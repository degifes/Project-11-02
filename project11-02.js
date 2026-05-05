"use strict";
/* JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Atsede Degife   
      Date:   04/15/2026

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

// This function runs when you click away from the postal code box
postalCode.onblur = function() {
   // 1. Create the URL for the API request
   let url = `https://api.zippopotam.us/${country.value}/${postalCode.value}`;
   
   // 2. Use fetch() to get the data
   fetch(url)
      .then(response => {
         if (!response.ok) {
            throw new Error("Invalid Postal Code");
         }
         return response.json();
      })
      .then(data => {
         // 3. Fill in the Place and Region boxes with the data from the internet
         place.value = data.places[0]["place name"];
         region.value = data.places[0]["state"];
      })
      .catch(error => {
         // 4. If the code is wrong, show an alert and clear the boxes
         alert("The postal code was not found. Please check and try again.");
         place.value = "";
         region.value = "";
      });
};
