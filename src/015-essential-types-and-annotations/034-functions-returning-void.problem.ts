const addClickEventListener = (listener : (event: Event) => void) => {
  document.addEventListener("click", listener);
};

addClickEventListener(() => {
  console.log("Clicked!");
});

addClickEventListener(
  // @ts-expect-error
  "abc",
);
