class Degree{
    constructor(field,degree1){
        this.field = field;
        this.degree1 = degree1;
    }
}
class Studies{
    constructor(degree,college){
        this.degree = degree;
        this.college = college;
    } 
    getDegree(){
        return this.degree.field+" "+this.degree.degree1;
    }
    getDisplayStudies(){
        return "Pursuing "+this.getDegree()+" ";
    }
}
var pharm = new Degree('B.Sc','Pharmacy');
var lab = new Degree('Diploma','LabTechician');
var mech = new Degree('B.E','Mech');
var cse = new Degree('B.E','CSE');

var xyz = new Studies(mech,'XYZ College');
var abc = new Studies(pharm,'ABC College');
var def = new Studies(lab,'DEF College');
var nec = new Studies(cse,'NEC college');