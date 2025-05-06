var value1 = document.getElementById("value1");
var value2 = document.getElementById("value2");
var value3 = document.getElementById("value3");
value1.style.color = "#F85E9F";
value1.addEventListener("mouseover", () => {
  value1.textContent = "Buy";
  value1.style.color = "darkblue";
});

value1.addEventListener("mouseleave", () => {
  value1.textContent = "$550.16";
  value1.style.color = "#F85E9F";
});
value1.addEventListener("click", () => {
  value1.textContent = "Purchased";
  value1.style.color = "green";
  swal({
    title: "Good job!",
    text: "You Bought Ticket",
    icon: "success",
    button: "Aww yiss!",
  });
});


value2.style.color = "#F85E9F";
value2.addEventListener("mouseover", () => {
  value2.textContent = "Buy";
  value2.style.color = "darkblue";
});

value2.addEventListener("mouseleave", () => {
  value2.textContent = "$20.99";
  value2.style.color = "#F85E9F";
});
value2.addEventListener("click", () => {
  value2.textContent = "Purchased";
  value2.style.color = "green";
  swal({
    title: "Good job!",
    text: "You Bought Ticket",
    icon: "success",
    button: "Aww yiss!",
  });
});


value3.style.color = "#F85E9F";
value3.addEventListener("mouseover", () => {
  value3.textContent = "Buy";
  value3.style.color = "darkblue";
});

value3.addEventListener("mouseleave", () => {
  value3.textContent = "$150.99";
  value3.style.color = "#F85E9F";
});
value3.addEventListener("click", () => {
  value3.textContent = "Purchased";
  value3.style.color = "green";
  swal({
    title: "Good job!",
    text: "You Bought Ticket",
    icon: "success",
    button: "Aww yiss!",
  });
});
