const objects = {
  apple: {
      number: 3
  },
  melon :20
};

const numberOfBanana = (
  (objects.banana === undefined || objects.banana === null)
  ?
      undefined
  :
      objects.banana.number
) ?? 0;
console.log(numberOfBanana);