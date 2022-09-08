export class Person{
    name: string;
    height: number;
    mass: number;
    hairColor: string;
    skinColor: string;

    constructor(name: string = "", height: number = 0, mass: number = 0, hairColor: string = "", skinColor: string = ""){
        this.name = name;
        this.height = height;
        this.mass = mass;
        this.hairColor = hairColor;
        this.skinColor = skinColor;
    }
}