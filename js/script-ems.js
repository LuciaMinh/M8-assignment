// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    { id: 12345678, name: "Alice Quang", extension: 1234, email: "alice@example.com", department: "Administrative" },
    { id: 21345678, name: "Bob Smith", extension: 2345, email: "bob@example.com", department: "Engineering" },
    { id: 31245678, name: "Charlie Brown", extension: 3456, email: "charlie@example.com", department: "Executive" },
    { id: 41235678, name: "Dana Kate", extension: 4567, email: "dana@example.com", department: "Marketing" },
    { id: 51234678, name: "Eve Max", extension: 5678, email: "eve@example.com", department: "Sales" }
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'));
}
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY


// GET DOM ELEMENTS
const form = document.getElementById('addForm');
const empTableBody = document.getElementById('empTable').querySelector('tbody');
const empCount = document.getElementById('empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const id = form.elements['id'].value;
    const name = form.elements['name'].value;
    const extension = form.elements['extension'].value;
    const email = form.elements['email'].value;
    const department = form.elements['department'].value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmployee = { id: parseInt(id), name, extension: parseInt(extension), email, department };

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    form.elements['id'].focus();
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
    empCount.textContent = `(${employees.length})`;
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
};