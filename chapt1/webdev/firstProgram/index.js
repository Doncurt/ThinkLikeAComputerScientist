document.addEventListener("DOMContentLoaded", function(event) {
  // create the element that will be a p
let helloWorldPara = document.createElement("P");
// create a text node( the info inside the coming tag)
let helloWorldTextNode = document.createTextNode("Hello World");
 // appends the hello world in the <p> element
helloWorldPara.appendChild(helloWorldTextNode);
// appeends the element to the body of the page
document.body.appendChild(helloWorldPara);
});
