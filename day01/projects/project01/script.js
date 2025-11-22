const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const result = document.getElementById("result");
const button = document.getElementById("calculateBtn");

button.addEventListener("click", () => {
    const day = Number(dayInput.value);
    const month = Number(monthInput.value);
    const year = Number(yearInput.value);

    if (!day || !month || !year) {
        result.textContent = "Please enter valid numbers for day, month, and year.";
        return;
    }

    if (month < 1 || month > 12) {
        result.textContent = "Month must be between 1 and 12.";
        return;
    }

    if (day < 1 || day > 31) {
        result.textContent = "Day must be between 1 and 31.";
        return;
    }

    if (year < 1900) {
        result.textContent = "Year must be 1900 or later.";
        return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    if (birthDate > today) {
        result.innerText = "Birth date cannot be in the future.";
        result.style.color = "red";
        return;
    }

    const isValidDate =
        birthDate.getDate() === day &&
        birthDate.getMonth() === month - 1 &&
        birthDate.getFullYear() === year;

    if (!isValidDate) {
        result.textContent = "The entered date is not valid.";
        return;
    }

    let age = today.getFullYear() - year;
    // If birthday hasn't happened yet this year, subtract 1
    const birthdayThisYear = new Date(today.getFullYear(), month - 1, day);
    if (today < birthdayThisYear) {
        age--;
    }
    result.innerText = `You are ${age} years old.`;
    result.style.color = "white";
});