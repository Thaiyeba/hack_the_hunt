// --- Function to handle tab switching ---
function showTab(language) {
    // Hide all language content divs
    document.querySelectorAll('.content').forEach(tab => {
        tab.style.display = 'none';
    });
    
    // Deactivate all tab buttons
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show the selected language content
    document.getElementById(language).style.display = 'block';
    
    // Activate the clicked tab button
    // We use a more robust way to select the correct tab button
    document.querySelector(`.tab[onclick="showTab('${language}')"]`).classList.add('active');
}

// --- Function to validate user's answers ---
// Wait for the HTML content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('validateBtn').addEventListener('click', function() {
        const maxAns = '9';
        const revAns = 'YPPAH'; // Correct answer is 'yppah', but we check in uppercase

        // Get user input and clean it up (remove whitespace)
        const maxInput = document.getElementById('maxInput').value.trim();
        // Get user input, clean it, and convert to uppercase for case-insensitive comparison
        const revInput = document.getElementById('revInput').value.trim().toUpperCase();

        if (maxInput === maxAns && revInput === revAns) {
            alert("✅ Both answers are correct! The next clue is now visible below.");
            document.getElementById('nextClue').style.display = 'block';
        } else {
            alert("❌ One or both answers are wrong. Please try again!");
            document.getElementById('nextClue').style.display = 'none';
        }
    });
});