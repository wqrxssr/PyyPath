// tests.js - Все тесты для модулей PyPath

export const testsData = {
    // ==================== МОДУЛЬ A1 (Основы Python) ====================
    A1: [
        { text: 'Что выведет print(5 + 3)?', options: ['5', '8', '53'], correct: 1 },
        { text: 'Какой тип данных у "Hello"?', options: ['int', 'str', 'float'], correct: 1 },
        { text: 'Какая переменная названа правильно?', options: ['1var', 'var_name', 'var-name'], correct: 1 },
        { text: 'Что делает input()?', options: ['Выводит текст', 'Читает ввод', 'Завершает программу'], correct: 1 },
        { text: 'Как преобразовать строку "5" в число?', options: ['str("5")', 'int("5")', 'float("5")'], correct: 1 },
        { text: 'Что вернёт type(3.14)?', options: ['int', 'float', 'str'], correct: 1 },
        { text: 'Как вывести "Привет мир"?', options: ['print("Привет мир")', 'output("Привет мир")', 'console.log("Привет мир")'], correct: 0 },
        { text: 'Что такое переменная?', options: ['Контейнер для данных', 'Функция', 'Цикл'], correct: 0 },
        { text: 'Какое имя переменной корректно?', options: ['_myVar', '2myVar', 'my-var'], correct: 0 },
        { text: 'Что делает f-строка?', options: ['Форматирует строку', 'Умножает строку', 'Создаёт список'], correct: 0 },
        { text: 'Какой результат 5 // 2?', options: ['2', '2.5', '3'], correct: 0 },
        { text: 'Какой результат 5 % 2?', options: ['1', '2', '0'], correct: 0 },
        { text: 'Что такое bool?', options: ['Булев тип', 'Строка', 'Число'], correct: 0 },
        { text: 'Что вернёт 5 > 3?', options: ['True', 'False', 'Ошибка'], correct: 0 },
        { text: 'Какой оператор сравнения "равно"?', options: ['=', '==', '!='], correct: 1 }
    ],

    // ==================== МОДУЛЬ A2 (Условия) ====================
    A2: [
        { text: 'Какой оператор проверяет "больше"?', options: ['>', '<', '=='], correct: 0 },
        { text: 'Что выведет print(5 > 3)?', options: ['True', 'False', '5 > 3'], correct: 0 },
        { text: 'Какой оператор "и" в Python?', options: ['and', 'or', 'not'], correct: 0 },
        { text: 'Какой оператор "или" в Python?', options: ['or', 'and', 'not'], correct: 0 },
        { text: 'Что делает else?', options: ['Выполняется если условие ложно', 'Выполняется всегда', 'Завершает программу'], correct: 0 },
        { text: 'Что делает elif?', options: ['Проверяет доп. условие', 'Завершает программу', 'Создаёт цикл'], correct: 0 },
        { text: 'Какое значение у not True?', options: ['False', 'True', 'None'], correct: 0 },
        { text: 'Что выведет if 5: print("Да")?', options: ['Да', 'Ничего', 'Ошибку'], correct: 0 },
        { text: 'Как записать "x не равно 5"?', options: ['x != 5', 'x =! 5', 'x <> 5'], correct: 0 },
        { text: 'Что делает оператор "is"?', options: ['Сравнивает объекты', 'Присваивает', 'Складывает'], correct: 0 },
        { text: 'Что выведет print(5 == "5")?', options: ['False', 'True', 'Ошибку'], correct: 0 },
        { text: 'Какое условие верное для x от 5 до 10?', options: ['x > 5 and x < 10', 'x > 5 or x < 10', 'x > 5 not x < 10'], correct: 0 },
        { text: 'Что делает pass?', options: ['Ничего', 'Останавливает код', 'Повторяет код'], correct: 0 },
        { text: 'Какой результат 5 > 3 and 2 < 4?', options: ['True', 'False', 'Ошибка'], correct: 0 },
        { text: 'Что выведет if x = 5?', options: ['Ошибку', 'True', 'False'], correct: 0 }
    ],

    // ==================== МОДУЛЬ B1 (Циклы) ====================
    B1: [
        { text: 'Что делает цикл for?', options: ['Повторяет код', 'Проверяет условие', 'Создаёт функцию'], correct: 0 },
        { text: 'Что выведет range(3)?', options: ['0,1,2', '1,2,3', '0,1,2,3'], correct: 0 },
        { text: 'Что делает break?', options: ['Прерывает цикл', 'Пропускает итерацию', 'Завершает программу'], correct: 0 },
        { text: 'Что делает continue?', options: ['Пропускает итерацию', 'Прерывает цикл', 'Повторяет цикл'], correct: 0 },
        { text: 'Какой цикл выполняется пока условие True?', options: ['while', 'for', 'if'], correct: 0 },
        { text: 'Что выведет for i in range(2,5): print(i)?', options: ['2,3,4', '2,3,4,5', '0,1,2'], correct: 0 },
        { text: 'Что будет при бесконечном цикле?', options: ['Зависание', 'Ошибка', 'Завершение'], correct: 0 },
        { text: 'Как выйти из while?', options: ['break', 'continue', 'exit'], correct: 0 },
        { text: 'Что делает enumerate?', options: ['Возвращает индекс и значение', 'Сортирует', 'Суммирует'], correct: 0 },
        { text: 'Что выведет for i in "Python"?', options: ['P,y,t,h,o,n', 'Python', 'Ошибку'], correct: 0 },
        { text: 'Как создать цикл от 1 до 10?', options: ['range(1,11)', 'range(1,10)', 'range(0,10)'], correct: 0 },
        { text: 'Что делает else в цикле?', options: ['Выполняется если не было break', 'Выполняется всегда', 'Завершает цикл'], correct: 0 },
        { text: 'Что выведет for i in range(3): print(i, end=" ")?', options: ['0 1 2', '1 2 3', '0,1,2'], correct: 0 },
        { text: 'Как прервать while?', options: ['break', 'stop', 'exit'], correct: 0 },
        { text: 'Что делает list(range(5))?', options: ['[0,1,2,3,4]', '[1,2,3,4,5]', '[0,1,2,3,4,5]'], correct: 0 }
    ],

    // ==================== МОДУЛЬ B2 (Функции) ====================
    B2: [
        { text: 'Что делает def?', options: ['Объявляет функцию', 'Создаёт цикл', 'Проверяет условие'], correct: 0 },
        { text: 'Что делает return?', options: ['Возвращает значение', 'Выводит значение', 'Завершает программу'], correct: 0 },
        { text: 'Что такое аргумент функции?', options: ['Входное значение', 'Выходное значение', 'Имя функции'], correct: 0 },
        { text: 'Что выведет def f(): return 5; print(f())?', options: ['5', 'None', 'Ошибку'], correct: 0 },
        { text: 'Что такое *args?', options: ['Много аргументов', 'Один аргумент', 'Ключевые аргументы'], correct: 0 },
        { text: 'Что такое **kwargs?', options: ['Именованные аргументы', 'Много аргументов', 'Список аргументов'], correct: 0 },
        { text: 'Что делает lambda?', options: ['Анонимную функцию', 'Цикл', 'Условие'], correct: 0 },
        { text: 'Что выведет (lambda x: x*2)(5)?', options: ['10', '25', '5'], correct: 0 },
        { text: 'Что делает map?', options: ['Применяет функцию к списку', 'Фильтрует список', 'Сортирует список'], correct: 0 },
        { text: 'Что делает filter?', options: ['Фильтрует по условию', 'Применяет функцию', 'Сортирует'], correct: 0 },
        { text: 'Что такое рекурсия?', options: ['Функция вызывает себя', 'Цикл внутри функции', 'Условие в функции'], correct: 0 },
        { text: 'Что выведет def f(): pass?', options: ['None', 'Ошибку', 'Пустоту'], correct: 0 },
        { text: 'Что такое область видимости?', options: ['Где доступна переменная', 'Тип переменной', 'Значение переменной'], correct: 0 },
        { text: 'Что выведет def f(a,b=5): return a+b; print(f(3))?', options: ['8', '3', '5'], correct: 0 },
        { text: 'Что делает return без значения?', options: ['Возвращает None', 'Ошибку', 'Пустоту'], correct: 0 }
    ],

    // ==================== МОДУЛЬ C1 (Структуры данных) ====================
    C1: [
        { text: 'Как создать список?', options: ['[]', '{}', '()'], correct: 0 },
        { text: 'Как получить первый элемент списка?', options: ['list[0]', 'list[1]', 'list.first()'], correct: 0 },
        { text: 'Что делает append?', options: ['Добавляет в конец', 'Добавляет в начало', 'Удаляет элемент'], correct: 0 },
        { text: 'Что делает pop?', options: ['Удаляет последний элемент', 'Удаляет первый', 'Добавляет элемент'], correct: 0 },
        { text: 'Что делает len(list)?', options: ['Длину списка', 'Сумму элементов', 'Максимум'], correct: 0 },
        { text: 'Что делает list[1:3]?', options: ['Срез', 'Индекс', 'Метод'], correct: 0 },
        { text: 'Как создать словарь?', options: ['{}', '[]', '()'], correct: 0 },
        { text: 'Как получить значение по ключу?', options: ['dict["key"]', 'dict.key', 'dict->key'], correct: 0 },
        { text: 'Что делает keys()?', options: ['Возвращает ключи', 'Возвращает значения', 'Возвращает пары'], correct: 0 },
        { text: 'Что делает values()?', options: ['Возвращает значения', 'Возвращает ключи', 'Возвращает пары'], correct: 0 },
        { text: 'Что такое кортеж?', options: ['Неизменяемый список', 'Изменяемый список', 'Словарь'], correct: 0 },
        { text: 'Как создать множество?', options: ['set()', '{}', '[]'], correct: 0 },
        { text: 'Что делает list comprehension?', options: ['Создаёт список', 'Сортирует', 'Фильтрует'], correct: 0 },
        { text: 'Что выведет [x*2 for x in [1,2,3]]?', options: ['[2,4,6]', '[1,2,3]', '[2,4,6,8]'], correct: 0 },
        { text: 'Что делает in для списка?', options: ['Проверяет наличие', 'Добавляет элемент', 'Удаляет элемент'], correct: 0 }
    ],

    // ==================== МОДУЛЬ C2 (Продвинутые темы) ====================
    C2: [
        { text: 'Что делает enumerate?', options: ['Индекс + значение', 'Сортировка', 'Фильтрация'], correct: 0 },
        { text: 'Что делает zip?', options: ['Объединяет списки', 'Сжимает данные', 'Сортирует'], correct: 0 },
        { text: 'Что делает sorted?', options: ['Сортирует', 'Фильтрует', 'Переворачивает'], correct: 0 },
        { text: 'Что делает any?', options: ['True если есть True', 'True если все True', 'False если есть True'], correct: 0 },
        { text: 'Что делает all?', options: ['True если все True', 'True если есть True', 'False если все True'], correct: 0 },
        { text: 'Что делает try/except?', options: ['Обрабатывает ошибки', 'Создаёт цикл', 'Определяет функцию'], correct: 0 },
        { text: 'Что делает open()?', options: ['Открывает файл', 'Закрывает файл', 'Создаёт файл'], correct: 0 },
        { text: 'Что делает read()?', options: ['Читает файл', 'Записывает файл', 'Закрывает файл'], correct: 0 },
        { text: 'Что делает write()?', options: ['Записывает в файл', 'Читает файл', 'Открывает файл'], correct: 0 },
        { text: 'Что делает import?', options: ['Подключает модуль', 'Создаёт модуль', 'Удаляет модуль'], correct: 0 },
        { text: 'Что делает datetime?', options: ['Работа с датой', 'Работа с файлами', 'Работа с сетью'], correct: 0 },
        { text: 'Что делает random?', options: ['Генерация чисел', 'Сортировка', 'Фильтрация'], correct: 0 },
        { text: 'Что делает randint(1,10)?', options: ['Число от 1 до 10', 'Число от 0 до 10', 'Число от 1 до 9'], correct: 0 },
        { text: 'Что делает choice([1,2,3])?', options: ['Случайный элемент', 'Первый элемент', 'Последний элемент'], correct: 0 },
        { text: 'Что делает finally?', options: ['Выполняется всегда', 'Выполняется при ошибке', 'Выполняется при успехе'], correct: 0 }
    ],

    // ==================== МОДУЛЬ C3 (ООП) ====================
    C3: [
        { text: 'Что такое класс?', options: ['Шаблон для объектов', 'Функция', 'Переменная'], correct: 0 },
        { text: 'Что такое объект?', options: ['Экземпляр класса', 'Функция класса', 'Переменная класса'], correct: 0 },
        { text: 'Что делает __init__?', options: ['Конструктор', 'Деструктор', 'Метод'], correct: 0 },
        { text: 'Что такое self?', options: ['Ссылка на объект', 'Ключевое слово', 'Переменная'], correct: 0 },
        { text: 'Что такое наследование?', options: ['Класс берёт методы другого', 'Класс копирует другой', 'Класс удаляет другой'], correct: 0 },
        { text: 'Что делает super()?', options: ['Вызов родительского класса', 'Вызов дочернего класса', 'Вызов функции'], correct: 0 },
        { text: 'Что такое полиморфизм?', options: ['Разные реализации метода', 'Одна реализация', 'Без реализации'], correct: 0 },
        { text: 'Что такое инкапсуляция?', options: ['Скрытие данных', 'Открытие данных', 'Копирование данных'], correct: 0 },
        { text: 'Как создать приватный метод?', options: ['__method', '_method', 'private_method'], correct: 0 },
        { text: 'Что делает @staticmethod?', options: ['Метод без self', 'Метод с self', 'Метод класса'], correct: 0 },
        { text: 'Что делает @classmethod?', options: ['Метод с cls', 'Метод с self', 'Обычный метод'], correct: 0 },
        { text: 'Что делает property?', options: ['Геттер/сеттер', 'Метод', 'Переменная'], correct: 0 },
        { text: 'Что такое магический метод?', options: ['__method__', '_method_', 'method_'], correct: 0 },
        { text: 'Что делает __str__?', options: ['Строковое представление', 'Числовое представление', 'Список'], correct: 0 },
        { text: 'Что делает __repr__?', options: ['Представление для разработчика', 'Представление для пользователя', 'Числовое представление'], correct: 0 }
    ]
};

// Функция для получения теста по модулю
export function getTestByModule(moduleId) {
    return testsData[moduleId] || testsData.A1;
}

// Функция для проверки ответа
export function checkAnswer(moduleId, questionIndex, answerIndex) {
    const test = testsData[moduleId];
    if (!test) return false;
    return test[questionIndex].correct === answerIndex;
}

// Функция для подсчёта правильных ответов
export function calculateScore(moduleId, userAnswers) {
    const test = testsData[moduleId];
    if (!test) return 0;
    let correct = 0;
    for (let i = 0; i < test.length; i++) {
        if (userAnswers[i] === test[i].correct) correct++;
    }
    return correct;
}

// Функция для получения процента правильных ответов
export function getPercentage(moduleId, userAnswers) {
    const test = testsData[moduleId];
    if (!test) return 0;
    const correct = calculateScore(moduleId, userAnswers);
    return (correct / test.length) * 100;
}