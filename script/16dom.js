console.log("DOM interactions")

var allElementsRef =  document.getElementsByTagName("li")
console.log(allElementsRef)
console.log(allElementsRef[0])
console.log(allElementsRef[0].innerText)
allElementsRef[0].innerText = "8000 BC"

var allHeadingOne = document.getElementsByTagName("h1")
console.log(allHeadingOne)
console.log(allHeadingOne.length)
console.log(allHeadingOne[0])
allHeadingOne[0].innerText = "Basics of DOM!"

//UGC -> User Generated Content

//id -> id is unique for each element in the page

//interacting with DOM using unique id
var liref1 = document.getElementById("bc4")
console.log(liref1)
liref1.innerText = "400 BC"
// make editable value in webpage
liref1.setAttribute("contenteditable", "true")

var liRef2 = document.getElementById("bc3")
console.log(liRef2)
// formated value in DOM
liRef2.innerHTML="<strong><em>1600 BC</em></strong>"
// change the style of the value
liRef2.setAttribute("style", "color:blue;")

// var newli = document.createElement("fifth")
// console.log(newli)

