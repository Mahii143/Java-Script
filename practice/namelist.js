export class Name{
    constructor(name,age,gender,dateOfBirth,study,year,city){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.study = study;
        this.year = year;
        this.city = city;
    }
    Display(){
        console.log(this.name);
        var collegeDetail = this.study.getDisplayStudies();
        console.log(this.gender.getGender());
        console.log(collegeDetail+this.year+" year in "+this.study.college);
        console.log((this.gender.id=='M'?'He':'She')+" is living in "+this.city);
        console.log("======================================")
    }
}