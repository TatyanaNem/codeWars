// The task is to create a function that takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []-- > "no one likes this"
// ["Peter"]-- > "Peter likes this"
// ["Jacob", "Alex"]-- > "Jacob and Alex like this"
// ["Max", "John", "Mark"]-- > "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]-- > "Alex, Jacob and 2 others like this"

function likes(names) {
  let result = '';
  if (names.length === 0) result = "no one likes this";
  if (names.length === 1) {
    result = names[0] + ' likes this';
  } else if (names.length === 2) {
    result = names[0] + ' and ' + names[1] + ' like this';
  } else if (names.length === 3) {
    result = names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
  } else if (names.length > 3) {
    result = names[0] + ', ' + names[1] + ' and ' + `${names.length - 2} others like this`;
  }
  return result;
}