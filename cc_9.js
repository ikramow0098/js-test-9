//TASK 1: Creating the Employee Class
class Employee {
  constructor(name, id, department, salary) {
      this.name = name;
      this.id = id;
      this.department = department;
      this.salary = salary;
  }

  getDetails() {
      return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
  }

  calculateAnnualSalary() {
      return this.salary * 12;
  }
}

// Test Case
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); // Expected output
console.log(emp1.calculateAnnualSalary()); // Expected output: 60000

//TASK 2: Creating the Manager Class

class Manager extends Employee {
  constructor(name, id, department, salary, teamSize) {
      super(name, id, department, salary);
      this.teamSize = teamSize;
  }

  getDetails() {
      return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
  }

  calculateBonus() {
      return this.calculateAnnualSalary() * 0.10; // 10% of annual salary
  }
}

// Test Case
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails()); // Expected output
console.log(mgr1.calculateBonus()); // Expected output: 9600

