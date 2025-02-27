import { Component } from '@angular/core';
import { Book, Employee, Iperson, Product, Student } from '../../models/persons';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent {
  persons: Array<Iperson> = [
    {
      fname: 'Alice',
      lname: 'Johnson',
      email: 'alice.johnson@example.com',
      contact: 1234567890,
    },
    {
      fname: 'Michael',
      lname: 'Smith',
      email: 'michael.smith@example.com',
      contact: 2345678901,
    },
    {
      fname: 'Sophia',
      lname: 'Brown',
      email: 'sophia.brown@example.com',
      contact: 3456789012,
    },
    {
      fname: 'James',
      lname: 'Wilson',
      email: 'james.wilson@example.com',
      contact: 4567890123,
    },
  ];

  students: Array<Student> = [
    { name: 'Alice', age: 20, grade: 'A', subject: 'Math' },
    { name: 'Bob', age: 22, grade: 'B', subject: 'Science' },
    { name: 'Charlie', age: 21, grade: 'A-', subject: 'History' },
    { name: 'David', age: 23, grade: 'B+', subject: 'English' },
  ];

  books: Array<Book> = [
    { title: '1984', author: 'George Orwell', pages: 328, genre: 'Dystopian' },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      pages: 281,
      genre: 'Classic',
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      pages: 180,
      genre: 'Novel',
    },
    {
      title: 'Moby Dick',
      author: 'Herman Melville',
      pages: 635,
      genre: 'Adventure',
    },
  ];

  employees: Array<Employee> = [
    { name: 'John', position: 'Manager', salary: 60000, department: 'Sales' },
    { name: 'Sarah', position: 'Developer', salary: 75000, department: 'IT' },
    {
      name: 'Mike',
      position: 'Designer',
      salary: 50000,
      department: 'Marketing',
    },
    {
      name: 'Emily',
      position: 'HR',
      salary: 55000,
      department: 'Human Resources',
    },
  ];

  products: Array<Product> = [
    { name: 'Laptop', brand: 'Dell', price: 1200, category: 'Electronics' },
    { name: 'Smartphone', brand: 'Apple', price: 999, category: 'Mobile' },
    { name: 'Headphones', brand: 'Sony', price: 150, category: 'Accessories' },
    { name: 'Tablet', brand: 'Samsung', price: 650, category: 'Electronics' },
  ];
}
