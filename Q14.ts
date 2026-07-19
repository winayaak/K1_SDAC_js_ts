interface Attendance{
    markattendance(isPresent:boolean):void
}

class Stud implements Attendance{
    markattendance(isPresent: boolean): void {
        if(isPresent){
             console.log("student marked present");
            
        }
        else{
            console.log("student marked as absent")
        }
    }

}


const sco= new Stud();
console.log(sco.markattendance(true));
console.log(sco.markattendance(false));

