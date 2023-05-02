window.onload = function() {
    
var randomLoc = Math.floor(Math.random()*5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
const success = [];
 
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Сыграем в морской бой! Представь, что перед тобой семь клеток от 0 до 6. Где-то на них расположился трехпалубный корабль. Попробуй его потопить. Целься... Пли! Введи число от 0 до 6 включительно:");
    
    if (guess < 0 || guess > 6) {
        alert ("Нет-нет, введенное тобой число не входит в диапазон 0-6. Попробуй еще раз!");
    } else if (isNaN(guess)) {
        alert ("Пожалуйста, введи именно число, а не букву или символ.");
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("ПОПАЛ!");
            

            if (success.includes(guess)) {
                alert ("Но в эту клетку уже стреляли, так что попадание не считается. Попробуй другую клетку.");
                guesses = guesses + 1;
            }
            else {
                hits = hits + 1;
            }

            success.push(guess);
            console.log(success);

            if (hits == 3) {
                isSunk = true;
                alert("Корабль противника потоплен!");
            } 
        } else {
            alert("ПРОМАХ");
        }
         
    }

}
var stats = "У тебя получилось потопить корабль с "+guesses+" попытки. "+
                "Что значит, твоя точность равнялась " + (3/guesses);
alert(stats)
};
