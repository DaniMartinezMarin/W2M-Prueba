import { HeroInterface } from "../interfaces/hero.interface";

export class Hero {
  id: string;
  name: string;
  fullName: string;
  publisher: string;
  image: string;

  constructor(data: HeroInterface) {
    this.id = data.id;
    this.name = data.name;
    this.fullName = data.biography["full-name"];
    this.publisher = data.biography.publisher;
    this.image = data.image.url;
  }
}
