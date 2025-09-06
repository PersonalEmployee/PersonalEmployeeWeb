console.log("JS подключен!");

AOS.init();

// Простая обработка формы (только для примера)
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    this.reset();
});

