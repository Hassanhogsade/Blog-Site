//created this function to toggle the background color white and anything in the body black
function clickMe() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black"
}
//created this function to toggle the background color to a darker them and anything in the body white for visibility
function clickMee() {
  document.body.style.backgroundColor = "#666666";
  document.body.style.color = "white"
  // const element = document.getElementById("para1");
  // element.style.color = "blue";
}
//this function made for the submit for which checks the elements length if its less than a certain character it will show 2 different messages
function submit_form() {
  const elements = document.getElementById("fname");
  if (elements.value.length <= 3) {
    alert(hello);

  } else {
    alert('fill in form');
  }
}
//this function is for submit and will take several variables and will gather element ID's from the document and check if length is == to 0 if soo 
//wont submit and will come out will a alert message
//else what will happen if it works fine and is more than 0 characters it will post the text on the body
function submit() {
  const blogTitle = document.getElementById("blogTitle");
  const blogAuthor = document.getElementById("blogAuthor");
  const blogText = document.getElementById("blogText");

  if (blogTitle.value.length == 0) {
    alert('Please complete the title')
  } else if (blogAuthor.value.length == 0) {
    alert('Please fill in your name')
  } else if (blogText.value.length == 0) {
    alert('Please fill in your blog')
  } else {
    const title = document.createElement("h1");
    title.innerText = blogTitle.value;
    document.body.appendChild(title);

    const author = document.createElement("h3");
    author.innerText = blogAuthor.value;
    document.body.appendChild(author);

    const text = document.createElement("p");
    text.innerText = blogText.value;
    document.body.appendChild(text);

    const line = document.createElement("hr");
    document.body.appendChild(line);
  }
}
//this function is for the mail to link up and connect to the outside source and take the fields that are filled in 
//and pre populate them.
function mailToLink() {
  const subject = document.getElementById("subject")
  const body = document.getElementById("body")
  console.log("do checks here")
  if (subject.value.length == 0) {
    alert('Please complete the subject')
  } else if (body.value.length == 0) {
    alert('Please complete the body')
  } else {
    const link = "mailto:someone@example.com?subject=" + subject.value + "&body=" + body.value
    const mailToLink = document.getElementById("mailToLink")
    mailToLink.href = link
  }

}