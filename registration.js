
const select = document.querySelector(".select");
const options_list = document.querySelector(".options-list");
const options = document.querySelectorAll(".option");

//show & hide options list
select.addEventListener("click", () => {
  options_list.classList.toggle("active");
  select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
});

//select option
options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((option) => { option.classList.remove('selected') });
    select.querySelector("span").innerHTML = option.innerHTML;
    option.classList.add("selected");
    options_list.classList.toggle("active");
    select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
  });
});





/////////////////////////////////////////////////

function showForm() {
  // Hide all forms
  document.getElementById('studentForm').style.display = 'none';
  document.getElementById('teacherForm').style.display = 'none';
  document.getElementById('adminForm').style.display = 'none';

  // Show the selected form
  var registrationType = document.getElementById('registrationType').value;
  if (registrationType === 'student') {
      document.getElementById('studentForm').style.display = 'block';
  } else if (registrationType === 'teacher') {
      document.getElementById('teacherForm').style.display = 'block';
  } else if (registrationType === 'admin') {
      document.getElementById('adminForm').style.display = 'block';
  }
}


/////////////////////////////////////////

// function decrement() {
//   var input = document.getElementById('counterInput');
//   var value = parseInt(input.value, 10);
//   if (value > parseInt(input.min, 10)) {
//       input.value = value - 1;
//   }
// }

// function increment() {
//   var input = document.getElementById('counterInput');
//   var value = parseInt(input.value, 10);
//   if (value < parseInt(input.max, 10)) {
//       input.value = value + 1;
//   }
// }


