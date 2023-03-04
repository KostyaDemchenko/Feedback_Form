document.addEventListener('DOMContentLoaded', () => {
    //Открытие формы 
    const showFormButton = document.getElementById("showFormButton");
    const feedbackForm = document.getElementById("feedbackForm");
    const loadingSpinner = document.querySelector(".loading-spinner");
    const sucess = document.createElement("img");
    sucess.src = "assets/img/on.svg";
    
    
    // Обработчик клика на кнопке "Show Form"
    showFormButton.addEventListener("click", () => {
        showFormButton.classList.add("hidden");
        feedbackForm.classList.add("show");
    });
    
    // Обработчик отправки формы
    feedbackForm.addEventListener("submit", (event) => {
        event.preventDefault(); // отменяем действие по умолчанию (отправку формы)
        
        // добавляем класс для отображения загрузочного кружка
        loadingSpinner.classList.add("active");
        
        // отправляем данные формы на сервер (здесь может быть ваш код отправки формы)
        setTimeout(() => {
          // убираем загрузочный кружок и добавляем текст
          loadingSpinner.classList.remove("active");
          feedbackForm.innerHTML = "<h2>Your message has been sent!</h2>";
          feedbackForm.appendChild(sucess);
          sucess.style.width = '50px';
          sucess.style.margin = '0 auto';
        }, 1500); // задержка для демонстрации работы загрузочного кружка
      });
});


