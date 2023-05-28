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
    item.addEventListener("click", checkBoxAdd);
  });
}
function checkBoxAdd(e) {
  let selected = e.target;
  checkbox.forEach((item) => {
    if (item.hasAttribute("checked")) {
      item.removeAttribute("checked");
    }
  });
  checkbox.forEach((item) => {
    if (item.getAttribute("id") == selected.getAttribute("id")) {
      item.setAttribute("checked", "checked");
    }
    console.log(item)
  });
  console.log(selected)
}
