document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("mood-entry-form");
    const calendar = document.getElementById("mood-calendar").querySelector("tbody");
    const popup = document.getElementById("popup-message");
    const messageText = document.getElementById("message-text");

    function generateCalendar() {
        const daysInMonth = 31;
        let week = [];
        for (let i = 1; i <= daysInMonth; i++) {
            week.push(`<td data-day="${i}">${i}</td>`);
            if (week.length === 7 || i === daysInMonth) {
                calendar.innerHTML += `<tr>${week.join("")}</tr>`;
                week = [];
            }
        }
    }

    function showPopup(message) {
        messageText.textContent = message;
        popup.style.display = "block";
    }

    window.closePopup = () => {
        popup.style.display = "none";
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const day = parseInt(form.day.value);
        const mood = parseInt(form.mood.value);

        const cell = calendar.querySelector(`td[data-day="${day}"]`);

        if (cell) {
            const level = mood <= 3 ? "1-3" : mood <= 6 ? "4-6" : "7-10";
            cell.setAttribute("data-level", level);

            const message = mood > 5
                ? "Great mood today! Keep it up!"
                : "It’s okay to have tough days. Stay strong!";
            showPopup(message);
        }
    });

    generateCalendar();
});
