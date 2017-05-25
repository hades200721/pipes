export class Country {

    public name: string;
    public region: string;
    public languages: string[];
    public capital: string;
    public population: number;
    public area: number;

    constructor(name: string, region:string, languages: string[], capital: string, population: number, area: number) {
        this.name = name;
        this.region = region;
        this.languages = languages;
        this.capital = capital;
        this.population = population;
        this.area = area;
    }
}