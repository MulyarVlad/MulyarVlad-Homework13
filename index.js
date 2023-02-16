// Знайти суму та кількість позитивних елементів.

const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let result = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        result += arr[i];
    }
}

console.log(result);

// Знайти мінімальний та максимальний елемент масиву та його порядковий номер.

const min = Math.min.apply(null, arr);

const max = Math.max.apply(null, arr);

console.log("Min:", min);

console.log("Max:", max);

console.log("Min index:", arr.indexOf(min));

console.log("Max index:", arr.indexOf(max));

// Визначити кількість непарних позитивних елементів.

const result = arr.filter(function(elem) {
	if (elem % 2 !== 0 && elem > 0) {
		return true;
	} else {
		return false;
	}
});

console.log(result.length);

// Знайти кількість парних позитивних елементів.

const result = arr.filter(function(elem) {
	if (elem % 2 == 0 && elem > 0) {
		return true;
	} else {
		return false;
	}
});

console.log(result.length);

// Знайти суму парних позитивних елементів.

let sum = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 == 0) {
        sum += arr[i];
    } 
}

console.log(sum);

// Знайти суму непарних позитивних елементів.

let sum = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 !== 0) {
        sum += arr[i];
    } 
}

console.log(sum);

// Знайти добуток позитивних елементів.

let result = 1;

for (let i = 0; i < arr.length; i++) {

    result = result * arr[i];

}

console.log(result);

// Знайти найбільший серед елементів масиву, ост альні обнулити.

let max = arr[0];

let maxi = 0;

for (let i = 1; i < arr.length; i++) {

  if (arr[i] > max) {

    max = arr[i];

    arr[maxi] = 0;

    maxi = i;

  } else {
    arr[i] = 0;
  }
}

console.log(arr);