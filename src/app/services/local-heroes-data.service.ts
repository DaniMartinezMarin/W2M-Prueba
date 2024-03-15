import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../pages/heroes/models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class LocalHeroesDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 6,
        name: 'Absorbing Man',
        fullName: 'Carl Creel',
        publisher: 'Marvel Comics',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/1448.jpg',
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
      {
        id: 31,
        name: 'Ant-Man II',
        fullName: 'Scott Lang',
        publisher: 'Marvel Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/166.jpg',
      },
      {
        id: 38,
        name: 'Aquaman',
        fullName: 'Orin',
        publisher: 'DC Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/634.jpg',
      },
      {
        id: 69,
        name: 'Batman',
        fullName: 'Terry McGinnis',
        publisher: 'DC Comics',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
      },
      {
        id: 70,
        name: 'Batman',
        fullName: 'Bruce Wayne',
        publisher: 'DC Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
      },
      {
        id: 71,
        name: 'Batman II',
        fullName: 'Dick Grayson',
        publisher: 'Nightwing',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/1496.jpg',
      },
      {
        id: 73,
        name: 'Batwoman V',
        fullName: 'Katherine Rebecca Kane',
        publisher: 'DC Comics',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/10234.jpg',
      },
      {
        id: 83,
        name: 'Big Man',
        fullName: 'Frederick Foswell',
        publisher: 'Marvel Comics',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/1038.jpg',
      },
      {
        id: 105,
        name: 'Black Manta',
        fullName: 'David',
        publisher: 'DC Comics',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/10546.jpg',
      },
      {
        id: 165,
        name: 'Catwoman',
        fullName: 'Selina Kyle',
        publisher: 'DC Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/659.jpg',
      },
      {
        id: 195,
        name: 'Cyborg Superman',
        fullName: 'Henry Henshaw',
        publisher: 'DC Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/667.jpg',
      },
      {
        id: 203,
        name: 'Darkman',
        fullName: 'Peyton Westlake',
        publisher: 'Universal Studios',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/1126.jpg',
      },
      {
        id: 212,
        name: 'Deadman',
        fullName: 'Boston Brand',
        publisher: 'DC Comics',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/1472.jpg',
      },
      {
        id: 233,
        name: 'Dr Manhattan',
        fullName: 'Jonathan Osterman',
        publisher: 'DC Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/884.jpg',
      },
      {
        id: 240,
        name: 'Elongated Man',
        fullName: 'Ralph Dibny',
        publisher: 'DC Comics',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/1381.jpg',
      },
      {
        id: 276,
        name: 'Garbage Man',
        fullName: 'Richard Ethan Morse',
        publisher: 'DC Comics',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/1467.jpg',
      },
      {
        id: 282,
        name: 'Giant-Man',
        fullName: 'Hank Pym',
        publisher: 'Ant-Man',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/858.jpg',
      },
      {
        id: 316,
        name: 'Hawkman',
        fullName: 'Carter Hall',
        publisher: 'DC Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/839.jpg',
      },
      {
        id: 317,
        name: 'Hawkwoman',
        fullName: 'Shayera Hol',
        publisher: 'DC Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/702.jpg',
      },
      {
        id: 318,
        name: 'Hawkwoman II',
        fullName: 'Sharon Parker',
        publisher: 'DC Comics',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/1129.jpg',
      },
      {
        id: 319,
        name: 'Hawkwoman III',
        fullName: 'Shayera Thal',
        publisher: 'DC Comics',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/1130.jpg',
      },
      {
        id: 333,
        name: 'Human Torch',
        fullName: 'Johnny Storm',
        publisher: 'Marvel Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/362.jpg',
      },
      {
        id: 337,
        name: 'Hydro-Man',
        fullName: 'Morris Bench',
        publisher: 'Marvel Comics',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/1451.jpg',
      },
      {
        id: 339,
        name: 'Iceman',
        fullName: 'Bobby Drake',
        publisher: 'Marvel Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/816.jpg',
      },
      {
        id: 344,
        name: 'Invisible Woman',
        fullName: 'Susan Storm Richards',
        publisher: 'Marvel Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/620.jpg',
      },
      {
        id: 346,
        name: 'Iron Man',
        fullName: 'Tony Stark',
        publisher: 'Marvel Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/85.jpg',
      },
      {
        id: 393,
        name: 'Kool-Aid Man',
        fullName: '',
        publisher: 'null',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/1343.jpg',
      },
      {
        id: 411,
        name: 'Liz Sherman',
        fullName: 'Elizabeth Anne Sherman',
        publisher: 'Dark Horse Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/868.jpg',
      },
      {
        id: 422,
        name: 'Machine Man',
        fullName: 'X-51, Aaron Stack',
        publisher: 'Marvel Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/90.jpg',
      },
      {
        id: 426,
        name: 'Man of Miracles',
        fullName: '',
        publisher: 'Image Comics',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/10889.jpg',
      },
      {
        id: 427,
        name: 'Man-Bat',
        fullName: 'Robert Kirkland Langstrom',
        publisher: 'DC Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/731.jpg',
      },
      {
        id: 428,
        name: 'Man-Thing',
        fullName: 'Dr. Theodore Sallis',
        publisher: 'Marvel Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/382.jpg',
      },
      {
        id: 429,
        name: 'Man-Wolf',
        fullName: 'John Jameson',
        publisher: 'Marvel Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/91.jpg',
      },
      {
        id: 430,
        name: 'Mandarin',
        fullName: 'Khan',
        publisher: 'Marvel Comics',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/1175.jpg',
      },
      {
        id: 431,
        name: 'Mantis',
        fullName: '',
        publisher: 'Marvel Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/384.jpg',
      },
      {
        id: 432,
        name: 'Martian Manhunter',
        fullName: "J'onn J'onzz",
        publisher: 'DC Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/733.jpg',
      },
      {
        id: 437,
        name: 'Matt Parkman',
        fullName: 'Matthew Parkman',
        publisher: 'NBC - Heroes',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/948.jpg',
      },
      {
        id: 467,
        name: 'Molten Man',
        fullName: 'Mark Raxton',
        publisher: 'Marvel Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/411.jpg',
      },
      {
        id: 478,
        name: 'Multiple Man',
        fullName: 'James Arthur',
        publisher: 'Marvel Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/104.jpg',
      },
      {
        id: 502,
        name: 'One Punch Man',
        fullName: 'Saitama',
        publisher: 'Shueisha',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/10522.jpg',
      },
      {
        id: 508,
        name: 'Ozymandias',
        fullName: 'Adrian Veidt',
        publisher: 'DC Comics',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/1063.jpg',
      },
      {
        id: 518,
        name: 'Plantman',
        fullName: 'Samuel Smithers',
        publisher: 'Marvel Comics',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/10487.jpg',
      },
      {
        id: 520,
        name: 'Plastic Man',
        fullName: "Patrick O'Brian",
        publisher: 'DC Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/756.jpg',
      },
      {
        id: 525,
        name: 'Power Man',
        fullName: 'Luke Cage',
        publisher: 'Luke Cage',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/1016.jpg',
      },
      {
        id: 531,
        name: 'Purple Man',
        fullName: 'Zebediah Killgrave',
        publisher: 'Marvel Comics',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/10451.jpg',
      },
      {
        id: 572,
        name: 'Sandman',
        fullName: 'William Baker',
        publisher: 'Marvel Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/621.jpg',
      },
      {
        id: 620,
        name: 'Spider-Man',
        fullName: 'Peter Parker',
        publisher: 'Marvel Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/133.jpg',
      },
      {
        id: 621,
        name: 'Spider-Man',
        fullName: "Miguel O'Hara",
        publisher: 'Marvel Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/133.jpg',
      },
      {
        id: 622,
        name: 'Spider-Man',
        fullName: 'Miles Morales',
        publisher: 'Marvel Comics',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/10647.jpg',
      },
      {
        id: 623,
        name: 'Spider-Woman',
        fullName: 'Jessica Drew',
        publisher: 'Marvel Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/481.jpg',
      },
      {
        id: 624,
        name: 'Spider-Woman II',
        fullName: '',
        publisher: 'Marvel Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/483.jpg',
      },
      {
        id: 625,
        name: 'Spider-Woman III',
        fullName: 'Martha Franklin',
        publisher: 'Marvel Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/482.jpg',
      },
      {
        id: 626,
        name: 'Spider-Woman IV',
        fullName: 'Charlotte Witter',
        publisher: 'Marvel Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/883.jpg',
      },
      {
        id: 644,
        name: 'Superman',
        fullName: 'Clark Kent',
        publisher: 'Superman Prime One-Million',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/791.jpg',
      },
      {
        id: 719,
        name: 'Wonder Man',
        fullName: 'Simon Williams',
        publisher: 'Marvel Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/162.jpg',
      },
      {
        id: 720,
        name: 'Wonder Woman',
        fullName: 'Diana Prince',
        publisher: 'DC Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/807.jpg',
      },
      {
        id: 724,
        name: 'X-Man',
        fullName: 'Nate Grey',
        publisher: 'Marvel Comics',
        image:
          'https://www.superherodb.com/pictures2/portraits/10/100/1150.jpg',
      },
      {
        id: 732,
        name: 'Ironman',
        fullName: 'Tony Stark',
        publisher: 'Marvel Comics',
        image: 'https://www.superherodb.com/pictures2/portraits/10/100/85.jpg',
      },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 1;
  }
}
