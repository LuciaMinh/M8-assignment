//STEP 1
// Create an array of favorite movies
let favoriteMovies = ["Naruto", "Inuyasha", "Connan", "The Last Airbender", "Voltron"];

// Display the second movie in the array
console.log(favoriteMovies[1]);

//STEP 2
// Declare an array using the function constructor method with a length of 5
let movies = new Array(5);

// Assign your favorite movies to each index
movies[0] = "Naruto";
movies[1] = "Inuyasha";
movies[2] = "Conan";
movies[3] = "The Last Airbender";
movies[4] = "Voltron";

// Display the first movie in the array
console.log(movies[0]);

//STEP 3
// Declare an array using the function constructor method with a length of 5
let movies = new Array(5);

// Assign your favorite movies to each index
movies[0] = "Naruto";
movies[1] = "Inuyasha";
movies[2] = "Conan";
movies[3] = "The Last Airbender";
movies[4] = "Voltron";

// Add a new movie into the 3rd position (index 2)
movies.splice(2, 0, "Demon Slayer"); // This will add "My Neighbor Totoro" at index 2

// Display the length of the array
console.log(movies.length);

//STEP 4
// Declare an array using literal notation
let movies = ["Naruto", "Inuyasha", "Demon Slayer", "The Last Airbender", "Voltron"];

// Use the delete operator to remove the first movie in the array
delete movies[0];

// Display the contents of the array
console.log(movies);

//STEP 5
// Declare an array using literal notation
let movies = [
    "Naruto",
    "Inuyasha",
    "Conan",
    "The Last Airbender",
    "Voltron",
    "Demon Slayer",
    "The Irregular at Magic High School"
];

// Use a for/in loop to iterate through the array
for (let index in movies) {
    console.log(movies[index]);
}

//STEP 6
// Declare an array using literal notation with your favorite movies
let movies = [
    "Naruto",
    "Inuyasha",
    "Conan",
    "The Last Airbender",
    "Voltron",
    "Demon Slayer",
    "The Irregular at Magic High School"
];

// Use a for/of loop to iterate through the array
for (let movie of movies) {
    console.log(movie);
}

//STEP 7
// Declare an array using literal notation with your favorite movies
let movies = [
    "Naruto",
    "Inuyasha",
    "Conan",
    "The Last Airbender",
    "Voltron",
    "Demon Slayer",
    "The Irregular at Magic High School"
];

// Sort the array
movies.sort();

// Use a for/of loop to iterate through the sorted array
for (let movie of movies) {
    console.log(movie);
}

//STEP 8
// Declare an array using literal notation with your favorite movies
let movies = [
    "Naruto",
    "Inuyasha",
    "Conan",
    "The Last Airbender",
    "Voltron",
    "Demon Slayer",
    "The Irregular at Magic High School"
];

// Create a new array for movies you regret watching
let leastFavMovies = [
    "Troll 2",
    "Jack and Jill",
    "Black Christmas"
];

// Display both arrays in the specified format
console.log("Movies I like:\n");
for (let movie of movies) {
    console.log(movie);
}

console.log("\nMovies I regret watching:\n");
for (let leastMovie of leastFavMovies) {
    console.log(leastMovie);
}

//STEP 9
// Declare an array using literal notation with your favorite movies
let movies = [
    "Naruto",
    "Inuyasha",
    "Conan",
    "The Last Airbender",
    "Voltron",
    "Demon Slayer",
    "The Irregular at Magic High School"
];

// Create a new array for movies you regret watching
let leastFavMovies = [
    "Troll 2",
    "Jack and Jill",
    "Black Christmas"
];

// Merge the two arrays using concat()
movies = movies.concat(leastFavMovies);

// Sort the merged array in reverse order
movies.sort().reverse();

// Display the list in reverse sorted order
console.log("Movies List in Reverse Sorted Order:\n");
for (let movie of movies) {
    console.log(movie);
}

//STEP 10
// Declare an array using literal notation with your favorite movies
let movies = [
    "Naruto",
    "Inuyasha",
    "Conan",
    "The Last Airbender",
    "Voltron",
    "Demon Slayer",
    "The Irregular at Magic High School"
];

// Create a new array for movies you regret watching
let leastFavMovies = [
    "Troll 2",
    "Jack and Jill",
    "Black Christmas"
];

// Merge the two arrays using concat()
movies = movies.concat(leastFavMovies);

// Sort the merged array in reverse order
movies.sort().reverse();

// Display the list in reverse sorted order
console.log("Movies List in Reverse Sorted Order:\n");
for (let movie of movies) {
    console.log(movie);
}

// Return and display the last item in the array
let lastMovie = movies[movies.length - 1];
console.log("\nLast movie in the array:\n" + lastMovie);

//STEP 11
// Declare an array using literal notation with your favorite movies
let movies = [
    "Naruto",
    "Inuyasha",
    "Conan",
    "The Last Airbender",
    "Voltron",
    "Demon Slayer",
    "The Irregular at Magic High School"
];

// Create a new array for movies you regret watching
let leastFavMovies = [
    "Troll 2",
    "Jack and Jill",
    "Black Christmas"
];

// Merge the two arrays using concat()
movies = movies.concat(leastFavMovies);

// Sort the merged array in reverse order
movies.sort().reverse();

// Display the list in reverse sorted order
console.log("Movies List in Reverse Sorted Order:\n");
for (let movie of movies) {
    console.log(movie);
}

// Return and display the first item in the array
let firstMovie = movies[0];
console.log("\nFirst movie in the array:\n" + firstMovie);

//STEP 12
// Declare an array using literal notation with your favorite movies
let movies = [
    "Naruto",
    "Inuyasha",
    "Conan",
    "The Last Airbender",
    "Voltron",
    "Demon Slayer",
    "The Irregular at Magic High School"
];

// Create a new array for movies you regret watching
let leastFavMovies = [
    "Troll 2",
    "Jack and Jill",
    "Black Christmas"
];

// Merge the two arrays using concat()
movies = movies.concat(leastFavMovies);

// Sort the merged array in reverse order
movies.sort().reverse();

// Display the list in reverse sorted order
console.log("Movies List in Reverse Sorted Order:\n");
for (let movie of movies) {
    console.log(movie);
}

// Indices of movies you do not like (in this case, from leastFavMovies)
let dislikedIndices = [];

// Find indices of disliked movies
leastFavMovies.forEach(disliked => {
    let index = movies.indexOf(disliked);
    if (index !== -1) {
        dislikedIndices.push(index);
    }
});

// Display indices of disliked movies
console.log("\nIndices of movies I do not like:\n", dislikedIndices);

// Replace disliked movies with new liked movies
let likedMovies = ["Your Name", "Spirited Away", "Howl's Moving Castle"];

dislikedIndices.forEach((index, i) => {
    if (i < likedMovies.length) {
        movies[index] = likedMovies[i]; // Replace with new liked movie
    }
});

// Display the updated list of movies
console.log("\nUpdated Movies List:\n");
for (let movie of movies) {
    console.log(movie);
}

//STEP 13
// Create a multi-dimensional array with favorite movies and their rankings
let movies = [
    ["Naruto", 1],
    ["Inuyasha", 2],
    ["Conan", 3],
    ["The Last Airbender", 4],
    ["Voltron", 5]
];

// Use filter() to extract only the movie names
let movieNames = movies.filter(item => typeof item[0] === "string").map(item => item[0]);

// Display the movie names
console.log("Favorite Movies:");
movieNames.forEach(name => console.log(name));

//STEP 14
// Create a string array using literal notation
let employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];

// Create an anonymous function called showEmployee
let showEmployee = function(employeeArray) {
    console.log("Employees:\n");
    
    // Loop through the passed array and display each employee in uppercase
    for (let employee of employeeArray) {
        console.log(employee.toUpperCase());
    }
};

// Call the function, passing in the employees array
showEmployee(employees);

//STEP 15
function filterValues(arr) {
    return arr.filter(value => {
        return value !== false && value !== null && value !== 0 && value !== '';
    });
}

// Test the function with the provided data
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP 16
function getRandomItem(arr) {
    // Generate a random index based on the array length
    const randomIndex = Math.floor(Math.random() * arr.length);
    // Return the item at the random index
    return arr[randomIndex];
}

// Create a numeric array with 10 numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Test the function
const randomNumber = getRandomItem(numbers);
console.log(randomNumber);

//STEP 17
function getLargestNumber(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return null; // or you could throw an error
    }
    // Use Math.max to find the largest number
    return Math.max(...arr);
}

// Test the function with a numeric array
const numbers = [10, 5, 9, 7, 8, 1, 3];
const largestNumber = getLargestNumber(numbers);
console.log(largestNumber);