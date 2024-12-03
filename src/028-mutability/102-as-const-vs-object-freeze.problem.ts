type ButtonType = "button" | "submit" | "reset";

type ButtonAttributes = {
  cancel: {
    type: ButtonType;
  };
  confirm: {
    type: ButtonType;
  };
};

const modifyButtons = (attributes: ButtonAttributes) => {};

const buttonAttributes = Object.freeze({
  cancel: Object.freeze({
    type: "button",
  }),
  confirm: Object.freeze({
    type: "button",
  }),
});

modifyButtons(buttonAttributes);
