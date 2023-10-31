// Получаем элементы кнопок и счетчиков
const incrementButtons = document.querySelectorAll("button[id^='increment']");
const counters = document.querySelectorAll("span[id^='counter']");

// Функция для увеличения счетчика
function incrementCounter(index) {
    let count = parseInt(counters[index].textContent);
    count++;
    counters[index].textContent = count;
}

// Добавляем обработчики событий для каждой кнопки
for (let i = 0; i < incrementButtons.length; i++) {
    incrementButtons[i].addEventListener("click", () => {
        incrementCounter(i);
    });
}

// При перезагрузке страницы восстанавливаем значения счетчиков из localStorage (если они есть)
for (let i = 0; i < counters.length; i++) {
    const savedCount = localStorage.getItem(`counter${i + 1}`);
    if (savedCount) {
        counters[i].textContent = savedCount;
    }
}

// Сохраняем значения счетчиков в localStorage при изменении
for (let i = 0; i < counters.length; i++) {
    incrementButtons[i].addEventListener("click", () => {
        const count = parseInt(counters[i].textContent);
        localStorage.setItem(`counter${i + 1}`, count);
    });
}
