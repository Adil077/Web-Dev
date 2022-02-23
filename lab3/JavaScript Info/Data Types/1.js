let name = "Ilya";

alert( `hello ${1}` ); // ? hello 1
// Тут мы просто выводим число 1
alert( `hello ${"name"}` ); // ? hello name
// Здесь мы не отправляем переменную а строку  
alert( `hello ${name}` ); // ? hello Ilya
// А вот здесь мы отправляем переменную которая хранит значение "Ilya"