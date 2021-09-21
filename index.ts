interface UserProps{
    firtsName: String
    lastName:String
    email:String
    password:String
    cpf:String
    contacto:Number
    isAdmin: boolean
}

class User implements UserProps{
    firtsName!: String
    lastName!:String
    email!:String
    password!:String
    cpf!:String
    contacto!:Number
    isAdmin!: boolean

constructor(firtsName: String,
    lastName:String,
    email:String,
    password:String,
    cpf:String,
    contacto:Number,
    isAdmin: boolean){

    this.firtsName = firtsName
    this.lastName = lastName
    this.email = email
    this.password = password
    this.cpf = cpf
    this.contacto = contacto
    this.isAdmin = isAdmin

}

propriedadesUser(){
    // console.log(this.firtsName)
    // console.log(this.lastName)
    // console.log(this.email)
    // console.log(this.password)
    // console.log(this.cpf)
    // console.log(this.contacto)
    // console.log(this.isAdmin)

}

getFirtsName(){
    return this.firtsName
}

setFirtsName(firtsName:String){
    this.firtsName = firtsName
}

getlastName(){
   return this.lastName;
}

setlastName(lastName: String){
   this.lastName = lastName
}

getemail(){
    return this.email
}

setemail(email:String){
    this.email=email
}

getpassword(){
    return this.password
}

setpassword(password:String){
    this.password=password
}

getcpf(){
    return this.cpf
}

setcpf(cpf:String){
    this.cpf=cpf
}
getcontacto(){
    return this.contacto
}

setcontacto(contacto:Number){
    this.contacto=contacto
}
getisAdmin(){
    return this.isAdmin
}

setisAdmin(isAdmin:boolean){
    this.isAdmin = isAdmin
}



}

let user = new User ("Ricardo","Nunes","riardo@ricardo","123456abc","111-111-111-12",1191234567,true);

// user.propriedadesUser();

user.setFirtsName("joão");

console.log(user);




