import { Employee, EmployeeFilter, Empty, Employees, Result } from './employee_pb';
import { EmployeeCRUDClient } from './employee_grpc_web_pb';
import * as grpcWeb from 'grpc-web';

async function insertEmployeeAsync() {
    var HEADERS = { 'content-type': 'application/grpc', 'Host': 'grpc' }

    var employeeService = new EmployeeCRUDClient(window.location.origin);
    
    var request = new Employee();

    request.setFirstname("test");
    request.setLastname("test2");

    await employeeService.insert(request, {},  (err, response) => {
            return response.toObject();
    });
}

 function selectAllEmployees(callback) {
    var employeeService = new EmployeeCRUDClient(window.location.origin);

    var request = new Empty();

     employeeService.selectAll(request, {}, (err, response) => {
         if (err !== null) {
             console.log('Error code: ' + err);
             callback(err.toObject());
         }
         else {
             console.log(response.toObject());
             callback(response.toObject());
         }
    });
}

export { insertEmployeeAsync, selectAllEmployees };


