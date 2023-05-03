
//person details

class person{
    constructor(name,age,height,weight,sex,locality,country,language){
    this.name=name
    this.age=age
    this.height=height
    this.weight=weight
    this.sex=sex
    this.locality=locality
    this.country=country
    this.language=language
    }
}
var user=new person("john",27,180,85,"male","chennai","india","tamil")
console.log(user)



//class to calculate uber price

class Uberprice{
    constructor(km){
        this.km=km,
        this.p=km*30

    }
    getPrice(){
       return `Price is ${this.p}` 
    }

}
var trip1=new Uberprice(5)
console.log(trip1.getPrice())


