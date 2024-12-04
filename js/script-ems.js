// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    { id: 1, name: "Alice Quang", extension: 1234, email: "alice@example.com", department: "HR" },
    { id: 2, name: "Bob Smith", extension: 2345, email: "bob@example.com", department: "IT" },
    { id: 3, name: "Charlie Brown", extension: 3456, email: "charlie@example.com", department: "Finance" },
    { id: 4, name: "Dana Kate", extension: 4567, email: "dana@example.com", department: "Marketing" },
    { id: 5, name: "Eve Max", extension: 5678, email: "eve@example.com", department: "Sales" }
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'));
}
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY


// GET DOM ELEMENTS
const form = document.getElementById('employeeForm');
const empTable = document.getElementById('employeeTable');
const empTableBody = empTable.querySelector('tbody');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const id = employees.length + 1; // Simple ID assignment
    const name = form.elements['name'].value;
    const extension = form.elements['extension'].value;
    const email = form.elements['email'].value;
    const department = form.elements['department'].value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmployee = { id, name, extension, email, department };

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteBtn')) {
    // CONFIRM THE DELETE
    if (confirm("Are you sure you want to delete this employee?")) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        const rowIndex = e.target.parentNode.parentNode.rowIndex - 1; // Adjust for header row

        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(rowIndex, 1);

        // BUILD THE GRID
        buildGrid();
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTableBody.innerHTML = '';
    // REBUILD THE TBODY FROM SCRATCH
 
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for (const employee of employees) {
    // REBUILDING THE ROW STRUCTURE
    const row = `
    <tr>
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.extension}</td>
        <td>${employee.email}</td>
        <td>${employee.department}</td>
        <td><button class="deleteBtn">Delete</button></td>
    </tr>
`;
empTableBody.innerHTML += row;
}
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(empTableBody);
    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
};