document.addEventListener("DOMContentLoaded", function(event) {
  //do work
  let dataTypeTest=["Hello World",23];
  for(let data of dataTypeTest) {
    console.log(data);
      data=typeof(data)
      let para = document.createElement("P");                       // Create a <p> element
      let text = document.createTextNode(data);      // Create a text node
      para.appendChild(text);                           //append the text node to the element<p>helloword</p>
      document.getElementById("h1").appendChild(para);
    }
});
