// Write your JavaScript code here!
window.addEventListener("load", function () {
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function () {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let coPilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let inputArray = [pilotNameInput.value, coPilotNameInput.value, fuelLevelInput.value, cargoMassInput.value];
      for (let i = 0; i <= inputArray.length; i++) {
         if (inputArray[i] === "") {
            alert("All fields required!");
            event.preventDefault();
            break;
         }
      }
      if (!isNaN(pilotNameInput.value)) {
         alert("Pilot must have a name!");
      }
      if (!isNaN(coPilotNameInput.value)) {
         alert("Co-Pilot must have a name!")
      }
      if (isNaN(cargoMassInput.value)) {
         alert("Invalid input for cargo mass!")
      }
      if (isNaN(fuelLevelInput.value)) {
         alert("Invalid input for fuel level!");
      }
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");

      faultyItems.style.visibility = "visible";
      event.preventDefault();

      pilotStatus.innerHTML = `${pilotNameInput.value} Ready`;
      copilotStatus.innerHTML = `${coPilotNameInput.value} Ready`;

      if (fuelLevelInput.value < 10000) {
         fuelStatus.innerHTML = "Fuel level too low for launch!";
         launchStatus.innerHTML = "Shuttle not Ready for launch!";
         launchStatus.style.color = "red";
      } else {
         launchStatus.innerHTML = "Shuttle Ready for Launch!";
         launchStatus.style.color = "green";
      }

      if (cargoMassInput.value > 10000) {
         cargoStatus.innerHTML = "Cargo mass too high for launch!";
         launchStatus.innerHTML = "Shuttle not Ready for launch!";
         launchStatus.style.color = "red";
      } else {
         launchStatus.innerHTML = "Shuttle Ready for Launch!";
         launchStatus.style.color = "green";
      }

   });
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json()
         .then(function (json) {
            let randomNumber = Math.floor(Math.random() * 6);
            let destination = json[randomNumber];
            let missionTarget = document.getElementById("missionTarget");
            missionTarget.innerHTML = `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${destination.name}</li>
               <li>Diameter: ${destination.diameter}</li>
               <li>Star: ${destination.star}</li>
               <li>Distance from Earth: ${destination.distace}</li>
               <li>Number of Moons: ${destination.moons}</li>
            </ol>
            <img src="${destination.image}">`
         });
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
