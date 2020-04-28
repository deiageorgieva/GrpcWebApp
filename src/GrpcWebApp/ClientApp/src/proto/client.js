import { Employee, EmployeeFilter, Empty, Employees, Result } from './employee_pb';
import { EmployeeServiceClient } from './employee_grpc_web_pb';

function getEmployees() {
    var employeeService = new EmployeeServiceClient(window.location.origin);
    var request = new Empty();

    return new Promise(async (fulfill, reject) => {
        await employeeService.selectAll(request, {}, (err, response) => {
            if (err !== null) {
                console.log('Error code: ' + err);
                reject(err);
            }
            else {
                console.log('Getting employees: ' + response.toObject().employeeslistList);
                fulfill(response.toObject().employeeslistList);
            }
        })
    });
}

 function insertEmployee(employee) {
        console.log('Start getEmployees');

        var employeeService = new EmployeeServiceClient(window.location.origin);
        var request = new Employee();
        request.setFirstname(employee.firstName);
        request.setLastname(employee.lastName);

        return new Promise(async (fulfill, reject) => {
            await employeeService.insert(request, {}, (err, response) => {
                if (err !== null) {
                    console.log('Error code: ' + err);
                    reject(err);
                }
                else {
                    console.log('Inserting employee: ' + response.toObject().Message);
                    fulfill(response.toObject().Message);
                }
            })
        });
    }

export { getEmployees, insertEmployee };


