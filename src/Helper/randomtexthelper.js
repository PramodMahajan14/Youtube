// Arrays of random words and names
const words = [
  "sky",
  "ocean",
  "mountain",
  "river",
  "tree",
  "flower",
  "sun",
  "moon",
  "cloud",
];
const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Heidi",
  "Ivan",
];

// Function to generate random word
const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

export const getRandomName = () => {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

export const generateRandomText = (wordCount = 3) => {
  let randomText = [];

  for (let i = 0; i < wordCount; i++) {
    randomText.push(getRandomWord());
  }

  return `${getRandomName()} says: "${randomText.join(" ")}."`;
};
