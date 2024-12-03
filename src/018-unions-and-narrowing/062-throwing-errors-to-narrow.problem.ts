import { Equal, Expect } from "@total-typescript/helpers";

const app = document.getElementById("app");
const appElement = document ? document : (throw new Error(''));

// How do I ensure that appElement is defined?

type Test = Expect<Equal<typeof appElement, HTMLElement>>;
