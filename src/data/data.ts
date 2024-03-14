type DataType = number[];

const blok1: string = "rgba(255, 0, 0, 1)";
const blok2: string = "rgba(255, 165, 0, 1)";
const blok3: string = "rgba(255, 255, 224, 1)";
const blok4: string = "rgba(144, 238, 144, 1)";
const blok5: string = "rgba(0, 128, 0, 1)";

export const dataAM: DataType = [6, 1, 5];

export const dataPM: DataType = [2, 2, 4, 2, 2];

export const highSeason = {
  workDay: {
    AM: [blok3, blok2, blok1],
    PM: [blok1, blok2, blok1, blok2, blok3],
  },
  freeDay: {
    AM: [blok4, blok3, blok2],
    PM: [blok2, blok3, blok2, blok3, blok4],
  },
};

export const lowSeason = {
  workDay: {
    AM: [blok4, blok3, blok2],
    PM: [blok2, blok3, blok2, blok3, blok4],
  },
  freeDay: {
    AM: [blok5, blok4, blok3],
    PM: [blok3, blok4, blok3, blok4, blok5],
  },
};
