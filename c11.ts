
    class Ecomerce{
    id:Number;
    name:String;
    constructor(id:Number,name:String){
        this.id=id;
        this.name=name;
    }

}
class Schooll{
    static totalStudent:any=0;
    StudentList:Ecomerce[]=[]

    addStudent(students:Ecomerce){
        this.StudentList.push(students)
        Schooll.totalStudent++;
    }
    static totalcount():Number{
        return Schooll.totalStudent
    }
}
const studd=new Ecomerce(1,"vinayak");
const sc=new School();
sc.addStudent(studd);
console.log(Schooll.totalStudent);
console.log(sc.StudentList);



