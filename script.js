let count = 0;
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');

incrementBtn.addEventListener('click', () => {
    count++;
    counterValue.textContent = count;
});
