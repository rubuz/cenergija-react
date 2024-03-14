type DataType = number[];

interface TimeBlock {
  colors: string[];
  time: DataType;
}

interface DayType {
  AM: TimeBlock;
  PM: TimeBlock;
}

interface SeasonType {
  workDay: DayType;
  freeDay: DayType;
}

// TIME DATA

export const highSeasonMonths: number[] = [10, 11, 0, 1]; // Months in JavaScript are 0-indexed
export const workFreeDays: number[] = [6, 0]; // 6 is Saturday, 0 is Sunday
export const workFreeHolidays: string[] = [
  "2024-01-01",
  "2024-01-02",
  "2024-02-08",
  "2024-04-01",
  "2024-05-01",
  "2024-06-25",
  "2024-08-15",
  "2024-10-31",
  "2024-11-01",
  "2024-12-25",
  "2024-12-26",
];

// DATA FOR THE DOUGHNUT GRAPH

const blok1: string = "rgba(255, 0, 0, 1)";
const blok2: string = "rgba(255, 165, 0, 1)";
const blok3: string = "rgba(255, 255, 200, 1)";
const blok4: string = "rgba(144, 238, 144, 1)";
const blok5: string = "rgba(0, 128, 0, 1)";

export const dataAM: DataType = [6, 1, 5];

export const dataPM: DataType = [2, 2, 4, 2, 2];

export const highSeason: SeasonType = {
  workDay: {
    AM: { colors: [blok3, blok2, blok1], time: dataAM },
    PM: { colors: [blok1, blok2, blok1, blok2, blok3], time: dataPM },
  },
  freeDay: {
    AM: { colors: [blok4, blok3, blok2], time: dataAM },
    PM: { colors: [blok2, blok3, blok2, blok3, blok4], time: dataPM },
  },
};

export const lowSeason: SeasonType = {
  workDay: {
    AM: { colors: [blok4, blok3, blok2], time: dataAM },
    PM: { colors: [blok2, blok3, blok2, blok3, blok4], time: dataPM },
  },
  freeDay: {
    AM: { colors: [blok5, blok4, blok3], time: dataAM },
    PM: { colors: [blok3, blok4, blok3, blok4, blok5], time: dataPM },
  },
};
