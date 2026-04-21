const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');

// Agar vo 'No' click karne ki koshish kare, toh button bhaagega!
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

yesBtn.addEventListener('click', () => {
    question.innerHTML = "Yay! I love you! ❤️ <br> Chalo Pav Bhaji khane chalte hain! 🏎️";
    document.querySelector('.cat-animation').innerHTML = "😻";
    noBtn.style.display = 'none';
});