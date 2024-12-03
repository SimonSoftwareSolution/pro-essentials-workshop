type ButtonAttributes = {
  type: "button" | "submit" | "reset";
};

const modifyButton = (attributes: ButtonAttributes) => {};

const buttonAttributes = {
  type: "button",
} as const;

modifyButton(buttonAttributes);

// Example 2

const modifyButtons = (attributes: ButtonAttributes[]) => {};

const buttonsToChange : Array<ButtonAttributes> = [
  {
    type: "button",
  },
  {
    type: "submit",
  },
];

modifyButtons(buttonsToChange);
