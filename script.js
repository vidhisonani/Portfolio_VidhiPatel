const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");

// project1.addEventListener("click", () => {
//   this.open("https://elearnplatformde.netlify.app/", "_blank");
// });

project2.addEventListener("click", () => {
  this.open("https://github.com/vidhisonani/web-mini-projects", "_blank");
});

const year = new Date().getFullYear();
const footer = document.getElementById("footer");

if(footer){
  footer.innerHTML += `<p>&copy; ${year} Vidhi Patel | Made with ❤️</p>`;
}