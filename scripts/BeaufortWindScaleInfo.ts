enum BeaufortWindScale {
  Calm = 'Calm',
  LightAir = 'Light Air',
  LightBreeze = 'Light Breeze',
  GentleBreeze = 'Gentle Breeze',
  ModerateBreeze = 'Moderate Breeze',
  FreshBreeze = 'Fresh Breeze',
  StrongBreeze = 'Strong Breeze',
  NearGale = 'Near Gale',
  Gale = 'Gale',
  StrongGale = 'Strong Gale',
  Storm = 'Storm',
  ViolentStorm = 'Violent Storm',
  Hurricane = 'Hurricane'
}


export interface BeaufortWindScaleInfo {
  scale: BeaufortWindScale;
  beaufortNumber: number;
  description: string;
  lowerLimit: number;
  upperLimit: number;
}

export const beaufortWindScaleInfo: BeaufortWindScaleInfo[] = [
  {
    scale: BeaufortWindScale.Calm,
    beaufortNumber: 0,
    description: 'Calm',
    lowerLimit: 0,
    upperLimit: 1
  },
  {
    scale: BeaufortWindScale.LightAir,
    beaufortNumber: 1,
    description: 'Light Air',
    lowerLimit: 1,
    upperLimit: 4
  },
  {
    scale: BeaufortWindScale.LightBreeze,
    beaufortNumber: 2,
    description: 'Light Breeze',
    lowerLimit: 4,
    upperLimit: 7
  },
  {
    scale: BeaufortWindScale.GentleBreeze,
    beaufortNumber: 3,
    description: 'Gentle Breeze',
    lowerLimit: 7,
    upperLimit: 11
  },
  {
    scale: BeaufortWindScale.ModerateBreeze,
    beaufortNumber: 4,
    description: 'Moderate Breeze',
    lowerLimit: 11,
    upperLimit: 17
  },
  {
    scale: BeaufortWindScale.FreshBreeze,
    beaufortNumber: 5,
    description: 'Fresh Breeze',
    lowerLimit: 17,
    upperLimit: 22
  },
  {
    scale: BeaufortWindScale.StrongBreeze,
    beaufortNumber: 6,
    description: 'Strong Breeze',
    lowerLimit: 22,
    upperLimit: 28
  },
  {
    scale: BeaufortWindScale.NearGale,
    beaufortNumber: 7,
    description: 'Near Gale',
    lowerLimit: 28,
    upperLimit: 34
  },
  {
    scale: BeaufortWindScale.Gale,
    beaufortNumber: 8,
    description: 'Gale',
    lowerLimit: 34,
    upperLimit: 41
  },
  {
    scale: BeaufortWindScale.StrongGale,
    beaufortNumber: 9,
    description: 'Strong Gale',
    lowerLimit: 41,
    upperLimit: 48
  },
  {
    scale: BeaufortWindScale.Storm,
    beaufortNumber: 10,
    description: 'Storm',
    lowerLimit: 48,
    upperLimit: 56
  },
  {
    scale: BeaufortWindScale.ViolentStorm,
    beaufortNumber: 11,
    description: 'Violent Storm',
    lowerLimit: 56,
    upperLimit: 64
  },
  {
    scale: BeaufortWindScale.Hurricane,
    beaufortNumber: 12,
    description: 'Hurricane',
    lowerLimit: 64,
    upperLimit: Infinity
  }
];
