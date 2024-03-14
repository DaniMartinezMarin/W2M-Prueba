import { HeroInterface } from "../interfaces/hero.interface";

export class Hero {
  id: number;
  name: string;
  fullName: string;
  publisher: string;
  image: string;

  constructor(data: HeroInterface) {
    this.id = data.id;
    this.name = data.name;
    this.fullName = data.fullName;
    this.publisher = data.publisher;
    this.image = data.image;
  }
}
