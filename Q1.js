class validateAge extends Error{
    constructor(message){
        super(message);
        this.name
    }

}
function validate(age){
    if(age<18){
        try{
            throw new validateAge("age is less than 18");

        }
        catch(e){
            console.log(e.message + " " + e.name);
        }
    }
    else{
        console.log("age is valid");
    }
}
validate(15)