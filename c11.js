"use strict";
class Ecomerce {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class School {
    static totalStudent = 0;
    StudentList = [];
    addStudent(students) {
        this.StudentList.push(students);
        School.totalStudent++;
    }
    static totalcount() {
        return School.totalStudent;
    }
}
const stud = new Ecomerce(1, "vinayak");
const sc = new School();
sc.addStudent(stud);
console.log(School.totalStudent);
console.log(sc.StudentList);
