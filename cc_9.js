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

//TASK 3: Creating the Company Class

class Company {
  constructor(name) {
      this.name = name;
      this.employees = [];
  }

  addEmployee(employee) {
      this.employees.push(employee);
  }

  listEmployees() {
      this.employees.forEach(emp => console.log(emp.getDetails()));
  }
}

// Test Case
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees(); // Expected output

//TASK 4: Implementing the Payroll System

class Company {
  // Previous constructor and methods remain unchanged

  calculateTotalPayroll() {
      let total = 0;
      this.employees.forEach(emp => {
          total += (emp instanceof Manager) ? emp.calculateAnnualSalary() + emp.calculateBonus() : emp.calculateAnnualSalary();
      });
      return total;
  }
}

// Test Case
console.log(company.calculateTotalPayroll()); // Expected output: 165600

//TASK 5: Implementing Promotions

class Company {
  // Previous methods remain unchanged

  promoteToManager(employee, teamSize) {
      const index = this.employees.indexOf(employee);
      if (index !== -1) {
          const newManager = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize);
          this.employees[index] = newManager;
      }
  }
}

// Test Case
company.promoteToManager(emp1, 3);
company.listEmployees(); // Expected output





