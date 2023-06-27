import { beaufortWindScaleInfo, BeaufortWindScaleInfo } from "./BeaufortWindScaleInfo";

// Rest of the code


enum WeatherType {
  Sunny = 'Sunny',
  Cloudy = 'Cloudy',
  Rainy = 'Rainy',
  Stormy = 'Stormy',
  Snowy = 'Snowy',
  Foggy = 'Foggy',
  Windy = 'Windy',
  Hazy = 'Hazy',
  PartlyCloudy = 'Partly Cloudy',
  Thunderstorm = 'Thunderstorm',
  Showers = 'Showers',
  Overcast = 'Overcast'
}

enum WindDirection {
  North = 'North',
  South = 'South',
  East = 'East',
  West = 'West'
}

enum Precipitation {
  None = 'None',
  Light = 'Light',
  Moderate = 'Moderate',
  Heavy = 'Heavy'
}

enum SunDirection {
  North = 'North',
  South = 'South',
  East = 'East',
  West = 'West'
}

interface WeatherSetting {
  weatherType: WeatherType;
  windDirection: WindDirection;
  windSpeed: BeaufortWindScaleInfo;
  precipitation: Precipitation;
  sunDirection: SunDirection;
}

function getRandomEnumValue<T>(enumeration: T): T[keyof T] {
  const values = Object.keys(enumeration) as (keyof T)[];
  const randomIndex = Math.floor(Math.random() * values.length);
  const randomKey = values[randomIndex];
  return enumeration[randomKey];
}

function getRandomArrayElement<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}


function generateRandomWeatherSetting(): WeatherSetting {
  const weatherType: WeatherType = getRandomEnumValue(WeatherType);
  const windSpeed: BeaufortWindScaleInfo = getRandomArrayElement(beaufortWindScaleInfo);
  const windDirection: WindDirection = getRandomEnumValue(WindDirection);
  const precipitation: Precipitation = getRandomEnumValue(Precipitation);
  const sunDirection: SunDirection = getRandomEnumValue(SunDirection);

  return {
    weatherType,
    windSpeed,
    windDirection,
    precipitation,
    sunDirection
  };
}

// Usage example
const randomWeatherSetting: WeatherSetting = generateRandomWeatherSetting();
console.log(randomWeatherSetting);
