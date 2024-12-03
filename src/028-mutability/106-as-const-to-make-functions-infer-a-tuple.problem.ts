import { Equal, Expect } from "@total-typescript/helpers";

const fetchData = async () => {
  const result = await fetch("/");

  if (!result.ok) {
    return [new Error("Could not fetch data.")];
  }

  const data : any = await result.json();

  return [undefined, data] as const;
};

const example = async () => {
  const [error, data] = await fetchData();

  type Tests = [
    Expect<Equal<typeof error, Error | undefined>>,
    Expect<Equal<typeof data, any>>,
  ];
};
