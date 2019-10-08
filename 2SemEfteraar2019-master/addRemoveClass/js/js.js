/**
 * file: js.js
 * purpose: add and remove classes and a simple event to trigger some action
 **/

// test
console.log('hey from js/js.js');

// select an id and save it as the var element
var element = document.getElementById("content"); // #id in html

// add or remove a class
function addTheClass() {
  element.classList.add("chChanges"); // add the .chChanges class from the css
}

// addTheClass(); // fire off the function

// EVENTS: click
/*
element.addEventListener('click', function () {
  console.log('I detected a click (line: 18)');
  alert('click');
  // add a class
  // or remove a class
  // or try to fire off the addTheClass() function here!
});
*/
