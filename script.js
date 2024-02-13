let currentScore = 0;
let bestRecord = 0;
let isPaused = false;
let fakeImageSrc = ""; // Initialize the variable at a higher scope



document.getElementById("playButton").onclick = function() {
    showPlayPage();
};

document.getElementById("selectionButton").onclick = function() {
    const menu = document.getElementById("selectionMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block"; // Toggle menu display
};

function goHome() {
    // Hide play page and show home page
    document.getElementById("playPage").style.display = "none";
    document.getElementById("homePage").style.display = "flex";
}

function togglePauseResume() {
    isPaused = !isPaused;
    document.getElementById("pauseResumeButton").innerText = isPaused ? "RESUME" : "PAUSE";
    // Implement actual pause/resume logic (e.g., stopping timers, game actions, etc.)
}

function restartGame() {
    currentScore = 0;
    document.getElementById("score").innerText = "Score: 0";
    // Reset game to initial state
    showPlayPage();
}

function showPlayPage() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("playPage").style.display = "flex";
    document.getElementById("playPage").style.flexDirection = "column";
    document.getElementById("playPage").style.alignItems = "center";
    document.getElementById("playPage").style.justifyContent = "center";
    document.getElementById("playPage").style.height = "100%";
    // Reset or initiate game elements
}

function revealAnswer(answer) {
    if (answer === 'FAKE') {
        currentScore += 100;
        document.getElementById("score").innerText = "Score: " + currentScore;
        if (currentScore > bestRecord) {
            bestRecord = currentScore;
            document.getElementById("bestRecord").innerText = "Best Record: " + bestRecord;
        }
    }
    const message = answer === 'FAKE' ? "Woo-hoo! This is a fake one!" : "Ah-Oh! This is a real image...";
    fakeImageSrc = document.querySelector('.image-btn[onclick*="FAKE"] img').src;
    document.getElementById("messageDisplay").innerText = message;
    document.getElementById("messageDisplay").style.display = "block";

    // Hide current images and display message for a brief period before switching scenes
    setTimeout(() => {
        document.getElementById("messageDisplay").style.display = "none";
        document.getElementById("imagesContainer").style.display = "none";
        
        // Assuming you have logic to load the next scene or images
        // For simplicity, let's just show the FAKE image for the next scene
        showNextScene(answer);
    }, 2000); // 2 seconds delay
}

function showNextScene(answer) {
    // Placeholder for showing next scene. Implement according to your game logic.
    // This function should handle displaying only the FAKE image for the next scene.
    // You might need to adjust this function to fit your specific game setup.
    
    // Resetting the images container for the next scene
    document.getElementById("imagesContainer").innerHTML = `<div class="image-btn" onclick="revealAnswer('FAKE')">
            <img src=${fakeImageSrc} alt="Fake">
        </div>`; // Update with the correct FAKE image for the next scene
    
    document.getElementById("imagesContainer").style.display = "flex";
}
