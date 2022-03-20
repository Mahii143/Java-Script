export class Gender{
    constructor(id,code){
        this.id = id;
        this.code = code;
    }
    
    getGender(){
        var proNoun = (this.id == 'M') ? 'He ' : 'She ';
        return proNoun+"is my "+(proNoun=='He '?'best':this.code)+" friend";
    }
}

