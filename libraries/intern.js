//extends the employee class
const Employee = require("../libraries/employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        //super gets the employee properties
        super(name, id, email);
        //this. adds the employee properties
        this.school = school;   
    };

    //returns the school of the employee
    getSchool() {
        return this.school;
    };

    //returns the role of the employee
    getRole() {
        return "Intern";
    };
};

module.exports = Intern;