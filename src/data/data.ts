type DataType = number[];

type TimeBlock = {
  colors: string[];
  time: DataType;
  prices: PriceBlock[];
};

type DayType = {
  AM: TimeBlock;
  PM: TimeBlock;
};

type SeasonType = {
  workDay: DayType;
  freeDay: DayType;
};

type PriceBlock = {
  prikljucnaMoc: number;
  porabljenaEnergija: number;
};

// PRICE DATA

export const priceBlok1: PriceBlock = {
  prikljucnaMoc: 3.61324,
  porabljenaEnergija: 0.01958,
};
export const priceBlok2: PriceBlock = {
  prikljucnaMoc: 0.8824,
  porabljenaEnergija: 0.01844,
};
export const priceBlok3: PriceBlock = {
  prikljucnaMoc: 0.19137,
  porabljenaEnergija: 0.01837,
};
export const priceBlok4: PriceBlock = {
  prikljucnaMoc: 0.01316,
  porabljenaEnergija: 0.01838,
};
export const priceBlok5: PriceBlock = {
  prikljucnaMoc: 0,
  porabljenaEnergija: 0.01847,
};

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

// DOT COLORS INDEX

export const hourPMIndexMapping: number[] = [
  0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4,
];
export const hourAMIndexMapping: number[] = [
  0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2,
];

// DATA FOR THE DOUGHNUT GRAPH

// const blok1: string = "rgba(246, 62, 2, 1)";
// const blok2: string = "rgba(255, 196, 68, 1)";
// const blok3: string = "rgba(240, 213, 160, 1)";
// const blok4: string = "rgba(201, 218, 133, 1)";
// const blok5: string = "rgba(118, 192, 69, 1)";

const blok1: string = "rgba(246, 62, 2, 1)";
const blok2: string = "rgba(255, 196, 68, 1)";
const blok3: string = "rgba(240, 213, 160, 1)";
const blok4: string = "rgba(201, 218, 133, 1)";
const blok5: string = "rgba(118, 192, 69, 1)";

export const dataAM: DataType = [6, 1, 5];

export const dataPM: DataType = [2, 2, 4, 2, 2];

export const highSeason: SeasonType = {
  workDay: {
    AM: {
      colors: [blok3, blok2, blok1],
      time: dataAM,
      prices: [priceBlok3, priceBlok2, priceBlok1],
    },
    PM: {
      colors: [blok1, blok2, blok1, blok2, blok3],
      time: dataPM,
      prices: [priceBlok1, priceBlok2, priceBlok1, priceBlok2, priceBlok3],
    },
  },
  freeDay: {
    AM: {
      colors: [blok4, blok3, blok2],
      time: dataAM,
      prices: [priceBlok4, priceBlok3, priceBlok2],
    },
    PM: {
      colors: [blok2, blok3, blok2, blok3, blok4],
      time: dataPM,
      prices: [priceBlok2, priceBlok3, priceBlok2, priceBlok3, priceBlok4],
    },
  },
};

export const lowSeason: SeasonType = {
  workDay: {
    AM: {
      colors: [blok4, blok3, blok2],
      time: dataAM,
      prices: [priceBlok4, priceBlok3, priceBlok2],
    },
    PM: {
      colors: [blok2, blok3, blok2, blok3, blok4],
      time: dataPM,
      prices: [priceBlok2, priceBlok3, priceBlok2, priceBlok3, priceBlok4],
    },
  },
  freeDay: {
    AM: {
      colors: [blok5, blok4, blok3],
      time: dataAM,
      prices: [priceBlok5, priceBlok4, priceBlok3],
    },
    PM: {
      colors: [blok3, blok4, blok3, blok4, blok5],
      time: dataPM,
      prices: [priceBlok3, priceBlok4, priceBlok3, priceBlok4, priceBlok5],
    },
  },
};

export type { DataType, TimeBlock, DayType, SeasonType, PriceBlock };
