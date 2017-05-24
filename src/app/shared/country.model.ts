export class Country {

    public name: string;
    public continent: string;
    public language: string;
    public capital: string;
    public population: number;
    public terrtory: number;

    constructor(name: string, continent:string, language: string, capital: string, population: number, terrtory: number) {
        this.name = name;
        this.continent = continent;
        this.language = language;
        this.capital = capital;
        this.population = population;
        this.terrtory = terrtory;
    }
}