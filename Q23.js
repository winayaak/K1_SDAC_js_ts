 const r=[
    {
        name: "vinayak",
        marks: 90 
    },
    {
        name:"Ayush ",
        marks: 90
    },
    {
        name:"swayam",
        marks:90
    }

 ]
 const g= r.filter((students) => {
    return students.marks >80;

    
 });
    console.log(g);