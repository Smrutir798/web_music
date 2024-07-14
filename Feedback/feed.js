document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission

    // Get the form data
    const name = document.querySelector(".name1").value;
    const email = document.querySelector(".email1").value;
    const feedback = document.querySelector(".feedback1").value;

    // Your Telegram bot token and chat ID
    const botToken = "6802920492:AAElzj9PgsrgeahnL0vG0ZIRTFWeg5YekjQ";
    const chatId = "1885992041";

    // Construct the message
    const message = `Name: ${name}\nEmail: ${email}\nFeedback: ${feedback}`;

    // Send the message to your Telegram bot
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert("Feedback submitted successfully!");
        } else {
            alert("Failed to submit feedback.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred while submitting feedback.");
    });
});