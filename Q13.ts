abstract class User{
   abstract getDetail():void;
   abstract getRole():String;
}
class Studentt extends User{
    std_id:Number;
    std_name:String;

    constructor(std_id:Number,std_name:String){
        super();
        this.std_id=std_id;
        this.std_name=std_name;
    }
    getDetail(): void {
        console.log(this.std_id+" "+this.std_name);
        
    }
    getRole(): String {
        return "student"
    }
    
}
class Teacher extends User{
    teacher_id:Number;
    teacher_name:String;


    constructor(teacher_id:Number,teacher_name:String){
        super()
        this.teacher_id=teacher_id;
        this.teacher_name=teacher_name;
    }
    getDetail(): void {
        console.log(this.teacher_id+""+this.teacher_name);
        
    }
    getRole(): String {
        return "Teacher"
    }
}

const s= new Studentt(123,"vinayak");
s.getDetail();
s.getRole();

const t=new Teacher(123,"SDAC")
t.getDetail();
t.getRole();