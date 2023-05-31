let registBtn = document.querySelector(".s_reg_btn");
let resetBtn = document.querySelector(".reset_btn");
let listView = document.querySelector(".list_view");

registBtn.addEventListener("click", function () {
  listView.style.display = "block";
});

resetBtn.addEventListener("click", function () {
  listView.style.display = "none";
});
