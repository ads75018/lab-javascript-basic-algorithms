// Iteration 1: Names and Input
let hacker1 = 'adam';
let hacker2 = 'Alexandre';
let hacker3 = 'Ting-Chi';
console.log(`The driver's name is ${hacker1}.`);
console.log(`The first navigator's name ${hacker2}.`);
console.log(`The second navigator's name is ${hacker3}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name. It has ${hacker1.length} character.`)
} else if (hacker1.length === hacker2.length) {
    console.log (`Wow, you both have equally long names: ${hacker2.length} characters.`)
} else {
    console.log(`The navigator has the longest name. It has ${hacker2.length} characters.`)
}
console.log (hacker1.length);

// Iteration 3: Loops

let resultSpaced = ""
 for (let i = 0; i <= hacker1.length -1; i++) {
     resultSpaced += hacker1[i]
     if (i!==hacker1.length-1) {
         resultSpaced += " "
     }
 }
console.log (resultSpaced.toUpperCase());
let resultBackwards = ""
for (let i = hacker2.length -1; i >= 0; i--) {
    resultBackwards += hacker2[i]
    if (i!==hacker2.length) {
    }
}
console.log(resultBackwards)
for (let i = 0; i <= hacker1.length-1; i++) {
    if (hacker1[i].localeCompare(hacker2[i]) === -1) {
    console.log('The driver\'s name goes first.')
      break;
  } if (hacker1[i].localeCompare(hacker2[i]) === 1) {
    console.log('Yo, the navigator goes first definitely.')
    break;
  } else {
    console.log('What?! You both have the same name?')
    continue;
  }
  }


  // Bonus 1
  let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ipsum facilisis, maximus lectus vitae, posuere urna. Morbi volutpat ac sem a congue. Etiam dictum urna eu tortor sodales, eu hendrerit elit viverra. Sed vitae eros in elit imperdiet sagittis in eu orci. Pellentesque felis lacus, lobortis a fermentum nec, elementum eget lectus. Sed placerat hendrerit nulla, at accumsan sem interdum sed. Vivamus vitae erat vel neque pretium ultricies ac id ante. Vivamus rhoncus metus non mauris rhoncus, vitae semper metus malesuada. Cras pellentesque orci porttitor, elementum metus at, semper felis. Integer bibendum non lacus eget consequat. Pellentesque ultrices cursus imperdiet. Quisque justo magna, euismod nec arcu finibus, tincidunt dignissim risus. Curabitur quis ullamcorper nisl.
Mauris sit amet dui nunc. Duis neque magna, auctor et rhoncus eget, bibendum sit amet dui. Curabitur ac pretium neque, sed feugiat eros. Fusce tristique facilisis ex quis vehicula. Vestibulum eleifend felis id augue varius dignissim. Quisque imperdiet aliquam ligula sed ullamcorper. Cras dolor velit, fermentum vitae gravida non, pulvinar sit amet augue.
Ut quis dictum enim. Nulla non quam iaculis, mattis nisl non, tempus neque. Donec at justo lacinia, rutrum libero ut, tempor elit. Praesent dapibus mauris vel viverra faucibus. Etiam id erat turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean sagittis tristique augue, nec semper nunc fringilla pellentesque. Etiam bibendum ac sapien a pretium. Nullam vel enim viverra, eleifend nibh vitae, commodo mauris.`
let count = 0
 for (let i = 0; i <= lorem.length; i++) {
   if (lorem[i] === " ") {
     console.log(`The count is running ${count ++}...`)
   }
 }
 for (let i = 0; i <= lorem.length; i++) {
   if (lorem[i] === " et ") {
     console.log(`"Et" features ${count ++} times.`)
   } else {
     console.log(`No "et" here.`)
     break;
   }
 }
// Bonus 2
let phraseToCheck = "A man, a plan, a canal, Panama!";
for (i = 0; i <= phraseToCheck.length -1; i++) {
  console.log(`${phraseToCheck[i]}`)
}
for (j = phraseToCheck.length -1; j >= 0; j--) {
  console.log(`${phraseToCheck[j]}`)
}