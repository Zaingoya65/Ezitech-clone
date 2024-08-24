document.addEventListener("DOMContentLoaded", function () {
    const dynamicTextContainer = document.querySelector(".dynamic-text");
    const words = ["Programming", "Web Design", "Social Skills", "Marketing"];
    let i = 0;

    function displayWord(word) {
        dynamicTextContainer.innerHTML = ""; // Clear existing content
        word.split("  ").forEach((char, index) => {
            const span = document.createElement("span");
            span.className = "typing-char";
            span.style.setProperty("--delay", `${index * 0.1}s`);
            span.textContent = char;
            dynamicTextContainer.appendChild(span);
        });
    }

    function changeText() {
        const currentWord = words[i];
        displayWord(currentWord);

        setTimeout(() => {
            // Apply typing-out class to entire word
            dynamicTextContainer.querySelectorAll(".typing-char").forEach((char, index) => {
                setTimeout(() => {
                    char.classList.add("typing-out");
                }, 0); // Apply typing-out class to all characters simultaneously
            });
        }, 3000); // Delay before starting fade-out animation

        i = (i + 1) % words.length;
    }

    changeText();
    setInterval(changeText, 4000); // Total time per word including fade-in and fade-out
});





//for limited


