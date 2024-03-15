import { HeroInterface } from '../interfaces/hero.interface';
import { Hero } from '../models/hero.model';

export const heroesMockInterface: HeroInterface[] = [
  {
    id: 6,
    name: 'Absorbing Man',
    fullName: 'Carl Creel',
    publisher: 'Marvel Comics',
    image: 'https://www.superherodb.com/pictures2/portraits/10/100/1448.jpg',
  },
  {
    id: 28,
    name: 'Animal Man',
    fullName: 'Bernhard Baker',
    publisher: 'DC Comics',
    image: 'https://www.superherodb.com/pictures2/portraits/10/100/632.jpg',
  },
  {
    id: 30,
    name: 'Ant-Man',
    fullName: 'Hank Pym',
    publisher: 'Giant-Man',
    image: 'https://www.superherodb.com/pictures2/portraits/10/100/857.jpg',
  },
];

export const heroesMock = () =>
  heroesMockInterface.map((hero) => new Hero(hero));

export const heroMockInterface: HeroInterface = {
  id: 1,
  name: 'Absorbing Man',
  fullName: 'Carl Creel',
  publisher: 'Marvel Comics',
  image: 'https://www.superherodb.com/pictures2/portraits/10/100/1448.jpg',
};

export const heroMock = () => new Hero(heroMockInterface);
