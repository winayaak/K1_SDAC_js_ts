"use strict";
class Stud {
    markattendance(isPresent) {
        if (isPresent) {
            console.log("student marked present");
        }
        else {
            console.log("student marked as absent");
        }
    }
}
const sco = new Stud();
console.log(sco.markattendance(true));
console.log(sco.markattendance(false));
