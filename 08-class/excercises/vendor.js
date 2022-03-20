class Vendor{
    constructor(id,name,contactNumber){
        this.id = id;
        this.name = name;
        this.contactNumber = contactNumber;
    }
    getContactNumber(){
        return this.name+" ("+this.contactNumber+")";
    }
}
