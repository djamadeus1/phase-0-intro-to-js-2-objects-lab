let employee = {
    name: "John Doe",
    streetAddress: "123 Main St",
    city: "Los Angeles"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,        
        [key]: value       
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee;       
}

function deleteFromEmployeeByKey(employee, key) {
    const { [key]: _, ...newEmployee } = employee; 
    return newEmployee; 
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee; 
}


let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "city", "New York");
console.log(updatedEmployee);  

destructivelyUpdateEmployeeWithKeyAndValue(employee, "city", "Los Angeles");
console.log(employee);  

let employeeWithoutCity = deleteFromEmployeeByKey(employee, "city");
console.log(employeeWithoutCity); 

destructivelyDeleteFromEmployeeByKey(employee, "city");
console.log(employee); 