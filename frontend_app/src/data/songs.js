export const songs = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    year: 2019,
    genre: 'Pop',
    duration: '3:22',
    cover: 'https://images.unsplash.com/photo-1520975922323-7f96b9e4f62b?q=80&w=400&auto=format&fit=crop',
    description:
      'I said, ooh, I\'m blinded by the lights. No, I can\'t sleep until I feel your touch...',
  },
  {
    id: '2',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    year: 2020,
    genre: 'Pop',
    duration: '3:23',
    cover: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&auto=format&fit=crop',
    description:
      'If you wanna run away with me, I know a galaxy and I can take you for a ride...',
  },
  {
    id: '3',
    title: 'bad guy',
    artist: 'Billie Eilish',
    album: 'When We All Fall Asleep, Where Do We Go?',
    year: 2019,
    genre: 'Alternative',
    duration: '3:14',
    cover: 'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?q=80&w=400&auto=format&fit=crop',
    description:
      'So you\'re a tough guy. Like it really rough guy. Just can\'t get enough guy...',
  },
  {
    id: '4',
    title: 'Peaches',
    artist: 'Justin Bieber',
    album: 'Justice',
    year: 2021,
    genre: 'R&B',
    duration: '3:18',
    cover: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop',
    description:
      'I got my peaches out in Georgia (oh yeah, s—). I get my weed from California...',
  },
  {
    id: '5',
    title: 'Circles',
    artist: 'Post Malone',
    album: 'Hollywood\'s Bleeding',
    year: 2019,
    genre: 'Hip-Hop',
    duration: '3:35',
    cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=400&auto=format&fit=crop',
    description:
      'Seasons change and our love went cold. Feed the flame \'cause we can\'t let it go...',
  },
  {
    id: '6',
    title: 'drivers license',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    year: 2021,
    genre: 'Pop',
    duration: '4:02',
    cover: 'https://images.unsplash.com/photo-1502767089025-6572583495b0?q=80&w=400&auto=format&fit=crop',
    description:
      'And I know we weren\'t perfect but I\'ve never felt this way for no one...',
  },
  {
    id: '7',
    title: 'Don’t Start Now',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    year: 2019,
    genre: 'Pop',
    duration: '3:03',
    cover: 'https://images.unsplash.com/photo-1464375117522-1311d1b0b852?q=80&w=400&auto=format&fit=crop',
    description:
      'Did a full 180, crazy. Thinking \'bout the way I was...',
  },
  {
    id: '8',
    title: 'Rockstar',
    artist: 'DaBaby ft. Roddy Ricch',
    album: 'Blame It on Baby',
    year: 2020,
    genre: 'Hip-Hop',
    duration: '3:01',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop',
    description:
      'Brand new Lamborghini, f— a cop car. With the pistol on my hip like I\'m a cop...',
  },
  {
    id: '9',
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    album: 'Fine Line',
    year: 2019,
    genre: 'Pop',
    duration: '2:54',
    cover: 'https://images.unsplash.com/photo-1526312426976-593c2a11b27d?q=80&w=400&auto=format&fit=crop',
    description:
      'Tastes like strawberries on a summer evenin\'. And it sounds just like a song...',
  },
  {
    id: '10',
    title: 'Leave The Door Open',
    artist: 'Silk Sonic',
    album: 'An Evening with Silk Sonic',
    year: 2021,
    genre: 'R&B',
    duration: '4:02',
    cover: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=400&auto=format&fit=crop',
    description:
      'I\'m sippin\' wine (sip, sip). In a robe (drip, drip). I look too good to be alone...',
  },
  {
    id: '11',
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    album: 'After Hours',
    year: 2020,
    genre: 'Pop',
    duration: '3:36',
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400&auto=format&fit=crop',
    description:
      'I saw you dancing in a crowded room. You look so happy when I\'m not with you...',
  },
  {
    id: '12',
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    year: 2021,
    genre: 'Alternative',
    duration: '2:58',
    cover: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=400&auto=format&fit=crop',
    description:
      'Well, good for you, you look happy and healthy, not me, if you ever cared to ask...',
  }
];

export const genres = Array.from(new Set(songs.map(s => s.genre))).sort();
export const years = Array.from(new Set(songs.map(s => s.year))).sort((a, b) => b - a);
