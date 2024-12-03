import { number } from "zod";

type Scores = {
  [subject: string] : number
  math: 95,
  english: 90,
}

// @ts-expect-error science is missing!
const scores: Scores = {
 
  
};

scores.athletics = 100;
scores.french = 75;
scores.spanish = 70;
