const question = document.getElementById("question");
const gif = document.getElementById("gif");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

let noClickCount = 0;

yesBtn.addEventListener("click", () => {
    question.innerHTML = "yeayyyyy, see u on the 14th of Feb baobeeiiiii! ❤️";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

noBtn.addEventListener("click", () => {
    noClickCount++;
    if (noClickCount === 1) {
        // First click logic
        question.innerHTML = "oh no... try again? :(";
        gif.src = "https://media.giphy.com/media/QBEhpJHrv7poQ/giphy.gif";
        
        // Reset position so they can find it to click it again
        noBtn.style.position = "relative";
        noBtn.style.left = "auto";
        noBtn.style.top = "auto";
    } else {
        // Second click logic
        question.innerHTML = "u sure? u'r breaking my heart.. 😭";
        gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTlxYTAzZzIyNWl2Yzc1emxqZWh5aXEyNnhxdGdyaGQ2aGZlbGl3ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1KtZcVACtQ6Bfgli/giphy.gif";
        
        // THE CHANGE: Hide the button completely now
        noBtn.style.display = "none";
    }
});