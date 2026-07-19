"use strict";
class User {
}
class Student extends User {
    std_id;
    std_name;
    constructor(std_id, std_name) {
        super();
        this.std_id = std_id;
        this.std_name = std_name;
    }
    getDetail() {
        console.log(this.std_id + " " + this.std_name);
    }
    getRole() {
        return "student";
    }
}
class Teacher extends User {
    teacher_id = 123;
    teacher_name = "vinayak";
    constructor(teacher_id, teacher_name) {
        super();
        this.teacher_id = teacher_id;
        this.teacher_name = teacher_name;
    }
    getDetail() {
        console.log(this.teacher_id + "" + this.teacher_name);
    }
    getRole() {
        return "Teacher";
    }
}
const s = new Student(123, "vinayak");
s.getDetail();
s.getRole();
