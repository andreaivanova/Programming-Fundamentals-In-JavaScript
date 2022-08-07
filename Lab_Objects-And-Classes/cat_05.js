function cats(arr){
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
     for (let i = 0; i < arr.length; i++) {
        let [name, age] = arr[i].split(' ');
        age = Number(age);
        let output = new Cat(name, age);
        output.meow();
     }


}
cats(['Mellow 2', 'Tom 5'])
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])