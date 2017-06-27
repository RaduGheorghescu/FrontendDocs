/**
 * Created by Radu.Gheorghescu on 6/27/2017.
 */
var employeesList =[
    ];
var facts = [
    'Chuck Norris threw a grenade and killed 50 people, then it exploded.',
    'Chuck Norris counted to infinity. Twice.',
    'Chuck Norris can kill two stones with one bird.',
    'Chuck Norris can hear sign language.',
];
var chucki=0;
var employee;
    function chuck() {
        alert(facts[chucki]);
        chucki++;
        if (chucki==facts.length){
            chucki=0;
        }
    }
    function showList() {
        var inputValue = document.getElementById("inputValue").value;
        var propDisp = '';
        var myTable = '<table class="table table-bordered" border ="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th>' +
            '<th>Salary</th><th>Salary in Euro</th></tr>';
        for (var i in employeesList) {
            if(inputValue == '') {
                propDisp = '';
            }else{
                propDisp = 'style="display:none"';
                if(employeesList[i].firstName == inputValue || employeesList[i].lastName == inputValue){
                    propDisp = '';
                }
            }

            myTable += '<tr '+propDisp+'><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td><td>' +
                 + employeesList[i].phone + '</td><td>' + employeesList[i].salary + '</td><td>' + employeesList[i].salaryInEuro + '</td><td><button onclick="viewEmployee('+i+')">Vizualizare</button>'
                + '</td><td><button onclick="deleteEmployee('+i+')">Stergere</button></tr>';
        }
        myTable += '<tr><td>'+appearFirstName()+'</td><td>'+distinctLastNames()+'</td></tr>';
        myTable += '</table>';
        var container = document.getElementById('listcontainer');
        container.innerHTML = myTable;
    }

    function appearFirstName() {
        var frequency = {};
        var max = 0;
        var result;
        for (var v in employeesList) {
            frequency[employeesList[v].firstName] = (frequency[employeesList[v].firstName] || 0) + 1;
            if (frequency[employeesList[v].firstName] > max) {
                max = frequency[employeesList[v].firstName];
                result = employeesList[v].firstName;
            }
        }
        return result;
    }

    function distinctLastNames() {
        var frequency = {};
        var numberOfElements = employeesList.length;
        for (var v in employeesList){
            frequency[employeesList[v].lastName]= (frequency[employeesList[v].lastName] || 0) + 1;
        };
        var count = 0;
        for (var v in frequency)
            if(frequency.hasOwnProperty(v))
                count++;
        return count;
    }
        function viewEmployee(i) {
        alert("First name: " + employeesList[i].firstName + "\nLast Name: " + employeesList[i].lastName);
    }
    function deleteEmployee(i) {
        employeesList.splice(i,1);
        showList();
    }

    function salarySum() {
        var salary = 0;
        for(var i in employeesList){
            salary += parseInt(employeesList[i].salary);
        }
        var container = document.getElementById('sumlabel');
        container.innerHTML = "<label>Salary sum: </label>" + salary;
    }

    function deleteLastEmployee() {
        employeesList.splice(-1, 1);
        showList();
    }

    var Employee = function (firstName, lastName, phone, salary, salaryInEuro) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.salary = salary;
        this.salaryInEuro = salaryInEuro;
    }

    function converInEuro() {
        var salaryInEuro = document.getElementById("salary").value *4.5;
        document.getElementById("salaryInEuro").value = salaryInEuro;
    }

    function celMaiDesPrenume() {
        var prenumeList =[];
        var prenume = function (prenume, count) {
            this.prenume = prenume;
            this.count = 0;
        }
    }

    function employeesSort() {
        var select = parseInt(document.getElementById("sortBy").value);
        switch (select){
            case 1:
                employeesList.sort(function (a,b) {
                    if(a.firstName > b.firstName) return 1;
                    if(a.firstName < b.firstName) return -1;
                    return 0;
                });
                showList();
                break;
            case 2:
                employeesList.sort(function (a,b) {
                    if(a.lastName > b.lastName) return 1;
                    if(a.lastName < b.lastName) return -1;
                    return 0;
                });
                showList();
                break;
            case 3:
                employeesList.sort(function (a,b) {
                    if(a.phone > b.phone) return 1;
                    if(a.phone < b.phone) return -1;
                    return 0;
                });
                showList();
                break;
            case 4:
                employeesList.sort(function (a,b) {
                    a = parseInt(a.salary);
                    b = parseInt(b.salary);
                    if(a>b) return 1;
                    if(b<a) return -1;
                    return 0;
                });
                showList();
                break;
        }
    }

    function addEmployee() {

        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var phone = document.getElementById("phone").value;
        var salary = document.getElementById("salary").value;
        var salaryInEuro = document.getElementById("salaryInEuro").value;
        employeesList.push(new Employee(firstName,lastName,phone,salary, salaryInEuro));
        showList();
    }