/* complex_code.js */

// This code performs an analysis of a given dataset and calculates various statistics

// Initialize dataset
let dataset = [
  { id: 1, name: "John Doe", age: 25, gender: "Male" },
  { id: 2, name: "Jane Smith", age: 30, gender: "Female" },
  { id: 3, name: "Mike Johnson", age: 35, gender: "Male" },
  // ... more data ...
];

// Function to calculate average age of males in the dataset
function calculateAverageAgeOfMales() {
  let totalAge = 0;
  let malesCount = 0;

  for (let i = 0; i < dataset.length; i++) {
    if (dataset[i].gender === "Male") {
      totalAge += dataset[i].age;
      malesCount++;
    }
  }

  return totalAge / malesCount;
}

// Function to calculate total number of females in the dataset
function calculateTotalFemales() {
  let femalesCount = 0;

  for (let i = 0; i < dataset.length; i++) {
    if (dataset[i].gender === "Female") {
      femalesCount++;
    }
  }

  return femalesCount;
}

// Function to find the oldest person in the dataset
function findOldestPerson() {
  let oldestAge = -Infinity;
  let oldestPerson = null;

  for (let i = 0; i < dataset.length; i++) {
    if (dataset[i].age > oldestAge) {
      oldestAge = dataset[i].age;
      oldestPerson = dataset[i];
    }
  }

  return oldestPerson;
}

// Function to sort dataset by age in descending order
function sortDatasetByAge() {
  dataset.sort((a, b) => b.age - a.age);
}

// Perform analysis and display the results
let averageAgeOfMales = calculateAverageAgeOfMales();
let totalFemales = calculateTotalFemales();
let oldestPerson = findOldestPerson();

console.log("Average Age of Males:", averageAgeOfMales);
console.log("Total Females:", totalFemales);
console.log("Oldest Person:", oldestPerson);

sortDatasetByAge();
console.log("Sorted dataset:", dataset);