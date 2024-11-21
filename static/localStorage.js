// Function to save anxiety data to localStorage
function saveAnxietyData() {
    const anxietyData = {};  // Object to store daily anxiety levels

    // Loop through months and days to collect user selections
    months.forEach((month, monthIndex) => {
        for (let day = 1; day <= month.days; day++) {
            const dayBlock = document.getElementById(`block-${monthIndex}-${day}`);
            const selectElement = dayBlock.querySelector('select');
            if (selectElement) {
                anxietyData[`month-${monthIndex}-day-${day}`] = selectElement.value;
            }
        }
    });

    // Save to localStorage
    localStorage.setItem('anxietyData', JSON.stringify(anxietyData));
    alert('Anxiety data saved!');
}

// Attach the save function to the button (Ensure this button exists in your HTML)
document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent form submission
    saveAnxietyData();      // Call the save function
});
