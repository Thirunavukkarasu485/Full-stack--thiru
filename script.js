```javascript
function addStudents() {

    // Get the input value
    let name = document.getElementById("studentInput").value;

    // Get the empty UL
    let studentList = document.getElementById("studentList");

    // Create first student
    let student1 = document.createElement("li");
    student1.textContent = name || "Arun";

    // Add first student to UL
    studentList.appendChild(student1);


    // Create second student
    let student2 = document.createElement("li");
    student2.textContent = "Priya";

    // Add second student to UL
    studentList.appendChild(student2);


    // Create third student
    let student3 = document.createElement("li");
    student3.textContent = "Karthik";

    // Add third student to UL
    studentList.appendChild(student3);
}
```
