export class Planet{
    name: string;
    climate: string;
    terrain: string;
    surfaceWater: string;
    population: number;

    constructor(name: string = "", climate: string = "", terrain: string = "", surfaceWater: string = "", population: number = 0){
        this.name = name;
        this.climate = climate;
        this.terrain = terrain;
        this.surfaceWater = surfaceWater;
        this.population = population;
    }
}