// Start from zero because it is consistent with Javascript
type IDayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

interface IWeeklyDateTime {
  dayOfWeek: IDayOfWeek;
  time: number;
}

interface IGeneralTime {
  needsDaytimeLight: boolean;
  needsClearWeather: boolean;
}

interface ITask {
  name: string;
  description?: string;
  bestTime?: (IWeeklyDateTime | IGeneralTime)[];
}
