const calcButton = document.getElementById("calculateButton");
const birthdayInput = document.getElementById("birthdayInput");
const result = document.getElementById("result");
const redMessage = document.getElementById("redMessage");
const currentDate = new Date();
birthdayInput.setAttribute(
    "min",
    `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
); // минимальня дата - сегодняшняя
const calcDaysBeforeBirthday = (date) => {
    const birthdayDate = new Date(date);
    let dif = birthdayDate - currentDate;
    dif = Math.round(dif / (1000 * 3600 * 24));
    difAsString = dif.toString();
    result.textContent = ""; // очищает строку для результата
    redMessage.textContent = ""; // очищает строку для красного сообщения
    if (isNaN(dif) || dif < 0) {
        redMessage.textContent = `Укажите дату вашего следующего дня рождения в поле выше`;
    } // проверяет введена ли дата и правильно ли она введена
    else if (dif == 0) {
        result.textContent = `Ваш день рождения сегодня! Поздравляем!`;
    } // если введена сегодняшняя дата
    else if (difAsString[difAsString.length - 1] == "1" && !(difAsString[difAsString.length - 2] == "1")) {
        result.textContent = `До вашего дня рождения еще ${dif} день!`;
    } // определение склонения слова "день"
    else if (
        difAsString[difAsString.length - 1] <= 4 &&
        !(difAsString[difAsString.length - 1] == 0) &&
        !(difAsString[difAsString.length - 2] == "1")
    ) {
        // определение склонения слова "день"
        result.textContent = `До вашего дня рождения еще ${dif} дня!`;
    } else {
        result.textContent = `До вашего дня рождения еще ${dif} дней!`;
    } // определение склонения слова "день"
};
calcButton.addEventListener("click", function () {
    calcDaysBeforeBirthday(birthdayInput.value);
});
