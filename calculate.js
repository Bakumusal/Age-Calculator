function calculateAge() {
    const birthdateInput = document.getElementById('birthdate');
    const findDateInput = document.getElementById('findDate');
    
    const birthdate = new Date(birthdateInput.value);
    const findDate = new Date(findDateInput.value);

    const difference = findDate - birthdate;

    const totalSeconds = Math.floor(difference / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalWeeks = Math.floor(totalDays / 7);

    const birthMonth = birthdate.getMonth();
    const findMonth = findDate.getMonth();
    const months = (findDate.getFullYear() - birthdate.getFullYear()) * 12 + findMonth - birthMonth;
    const years = Math.floor(months / 12);

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        Your age is<br> ${years} years,<br>
        ${months} months.<br>
        ${totalWeeks} weeks,<br>
        ${totalDays} days,<br>
        ${totalHours} hours,<br>
        ${totalMinutes} minutes,<br>
        ${totalSeconds} seconds.<br>
    `;
}
