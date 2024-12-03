type MyObj = {
  foo: string;
  bar: number;
  baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};

acceptsObj({
  // Autocomplete in here!
  bar: 2,
  baz: true,
  foo: '1'

});

document.addEventListener(
  // Autocomplete this string!
  "blur",
  (event) => {
    console.log(event);
  },
);
