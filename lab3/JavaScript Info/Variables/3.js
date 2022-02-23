// Uppercase const?
// importance: 4
// Examine the following code:

// const birthday = '18.04.1982'; 

// const age = someCode(birthday);
// Here we have a constant birthday date and the age is calculated from birthday with the help of some code (it is not provided for shortness, and because details don’t matter here).

// Would it be right to use upper case for birthday? For age? Or even for both?

// Solution =>
// It's a good practice to use uppercase letters for constants because it makes better the reading of code.

const BIRTHDAY = '18.04.1982'; // make uppercase? => YES, because date of birth never changes.

const AGE = someCode(BIRTHDAY); // make uppercase? => NO, because age is changing variable.
