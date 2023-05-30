const labels = document.querySelectorAll(".radioForm .containerInput label");
const checkbox = document.querySelectorAll(".radioForm .containerInput input");

if (labels) {
  let x = 0;
  labels.forEach((item) => {
    x++;
    item.setAttribute("for", `lb${x}`);
  });
}
if (checkbox) {
  let x = 0;
  checkbox.forEach((item) => {
    x++;
    item.setAttribute("id", `lb${x}`);
  });
}
