class student{
    constructor(sRoll,sName,sSection){
        this.Roll=sRoll;
        this.Name=sName;
        this.sClass=12;
        this.Section=sSection;
        this.School="Bangladesh Nou Bahini College"
    }
}

const student1=new student(101,"Farhan","A");
const student2=new student(102,"Naym","A");
console.log(student1);
console.log(student2);