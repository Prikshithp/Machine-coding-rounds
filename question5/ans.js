const User={
    name : "Prikshit",
    age :"21"
};
User.greeting= function(){
    console.log(`Hello ${this.name}`)
}
User.greeting();
