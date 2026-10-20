"use strict";

// Готовые ссылки на элементы страницы.
const input = document.querySelector("#task-input");
const preview = document.querySelector("#task-preview");
const form = document.querySelector("#task-form");
const list = document.querySelector("#task-list");
const message = document.querySelector("#message");
const clearButton = document.querySelector("#clear-button");
const helpButton = document.querySelector("#help-button");
const helpText = document.querySelector("#help-text");

helpButton.addEventListener("click", () => {
  helpText.hidden = !helpText.hidden;
});

// ЗАДАНИЕ 1. Событие input: показывайте введённый текст в предпросмотре.
input.addEventListener("input", () => {
  preview.textContent = input.value;

  if (input.value.trim() === "") {
    preview.textContent = "Здесь появится ваша задача";
  }
});

// ЗАДАНИЕ 2. Событие submit: добавьте задачу в список.
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Готово: страница не перезагружается.
  const title = input.value.trim();

  if (title === "") {
    message.textContent = "Введите название задачи.";
    return;
  }

  const item = document.createElement("li");
  
  item.className = "task-item";
  
  item.textContent = title;

  list.append(item);
  
  // Очищаем поле: input.value = "";
  input.value = "";
  
  preview.textContent = "Здесь появится ваша задача";
  
  message.textContent = "Задача добавлена!";
});

clearButton.addEventListener("click", () => {
  list.replaceChildren();
  
  message.textContent = "Список очищен.";
});

list.addEventListener("click", (event) => {
  const taskItem = event.target.closest(".task-item");
  
  if (taskItem) {

    taskItem.classList.toggle("task-item_done");
  }
});
