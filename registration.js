function showForm() {
  const studentForm = document.getElementById("studentForm");
  const teacherForm = document.getElementById("teacherForm");
  const registrationType = document.getElementById("registrationType").value;

  studentForm.style.display = "none";
  teacherForm.style.display = "none";

  if (registrationType === "mock") {
      studentForm.style.display = "block";
  } else if (registrationType === "terminal") {
      teacherForm.style.display = "block";
  }
}
