class User{

    constructor(){
        this.name = null;
        this.phone = null;
        this.pincode =null;
        this.passcode = null;
    }

    update(){
        database.ref('/').set({
            name:this.name,
            phone:this.phone,
            pincode:this.pincode,
            passcode:this.passcode
        })
    }
}