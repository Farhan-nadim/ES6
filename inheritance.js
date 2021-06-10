class parent{
    constructor(){
        this.FathersName="Nadim"
    }
}



class Child extends parent {
    constructor(name){
        super();
       this.Name=name;
       
    }
    fullName(){
        return this.Name+" "+this.FathersName;
    }
}
const baby=new Child("Afran");
const baby1=new Child("Ifran");
console.log(baby.fullName());
console.log(baby1);