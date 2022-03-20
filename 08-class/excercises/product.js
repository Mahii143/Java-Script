class Product{
    constructor(id,name,price,category,vendor){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.vendor = vendor;
    }
    display(){
        console.log(this.name+" [$"+this.price+"]");
        console.log(this.category.getDisplayText());
        for(var i=0;i<this.vendor.length;i++){
            console.log("      " + this.vendor[i].getContactNumber());
        } 
        console.log("============================================");
    }
}

