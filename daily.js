// daily.js - Проблемы дня для PyPath

export const dailyProblems = [
    {
        id: 1,
        text: "Что выведет следующий код?\n\n```\nx = 5\ny = 10\nprint(x + y)\n```",
        options: ["5", "10", "15", "510"],
        correct: 2,
        explanation: "Оператор + складывает числа: 5 + 10 = 15"
    },
    {
        id: 2,
        text: "Какой тип данных у значения `3.14` в Python?",
        options: ["int", "float", "str", "bool"],
        correct: 1,
        explanation: "Числа с плавающей точкой имеют тип float"
    },
    {
        id: 3,
        text: "Что делает функция `print()`?",
        options: [
            "Читает данные с клавиатуры",
            "Выводит данные на экран",
            "Преобразует тип данных",
            "Завершает программу"
        ],
        correct: 1,
        explanation: "print() выводит текст или значения на экран"
    },
    {
        id: 4,
        text: "Как правильно назвать переменную в Python?",
        options: ["2myVar", "my-var", "my_var", "my var"],
        correct: 2,
        explanation: "Имена переменных могут содержать буквы, цифры и подчёркивания, но не могут начинаться с цифры или содержать пробелы/дефисы"
    },
    {
        id: 5,
        text: "Что вернёт выражение `5 == 5`?",
        options: ["True", "False", "5", "Ошибку"],
        correct: 0,
        explanation: "== проверяет равенство. 5 равно 5, поэтому результат True"
    },
    {
        id: 6,
        text: "Как преобразовать строку `'123'` в целое число?",
        options: ["str('123')", "int('123')", "float('123')", "bool('123')"],
        correct: 1,
        explanation: "int() преобразует строку в целое число"
    },
    {
        id: 7,
        text: "Что выведет код?\n\n```\nname = 'Анна'\nprint(f'Привет, {name}')\n```",
        options: ["Привет, {name}", "Привет, Анна", "f'Привет, Анна'", "Ошибку"],
        correct: 1,
        explanation: "f-строки подставляют значения переменных в фигурных скобках"
    },
    {
        id: 8,
        text: "Какой оператор используется для возведения в степень?",
        options: ["^", "**", "*", "//"],
        correct: 1,
        explanation: "Оператор ** возводит число в степень, например 2 ** 3 = 8"
    },
    {
        id: 9,
        text: "Что выведет `print(type(10))`?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "10"],
        correct: 0,
        explanation: "type() возвращает тип данных. 10 — это целое число (int)"
    },
    {
        id: 10,
        text: "Как получить длину строки `'Python'`?",
        options: ["length('Python')", "len('Python')", "size('Python')", "count('Python')"],
        correct: 1,
        explanation: "len() возвращает длину строки (количество символов)"
    },
    {
        id: 11,
        text: "Что делает оператор `%` в Python?",
        options: [
            "Деление",
            "Умножение",
            "Остаток от деления",
            "Целочисленное деление"
        ],
        correct: 2,
        explanation: "% возвращает остаток от деления, например 10 % 3 = 1"
    },
    {
        id: 12,
        text: "Какой результат у выражения `10 // 3`?",
        options: ["3.33", "3", "3.0", "1"],
        correct: 1,
        explanation: "// — целочисленное деление, возвращает целую часть"
    },
    {
        id: 13,
        text: "Что выведет код?\n\n```\nx = 10\nif x > 5:\n    print('Больше')\nelse:\n    print('Меньше')\n```",
        options: ["Больше", "Меньше", "Ошибку", "Ничего"],
        correct: 0,
        explanation: "x = 10, 10 > 5 — True, поэтому выполняется блок if"
    },
    {
        id: 14,
        text: "Как создать список в Python?",
        options: ["(1, 2, 3)", "{1, 2, 3}", "[1, 2, 3]", "<1, 2, 3>"],
        correct: 2,
        explanation: "Списки создаются с помощью квадратных скобок []"
    },
    {
        id: 15,
        text: "Что выведет `bool(0)`?",
        options: ["True", "False", "0", "Ошибку"],
        correct: 1,
        explanation: "0, None, пустые коллекции преобразуются в False"
    },
    {
        id: 16,
        text: "Какой цикл выполняется, пока условие истинно?",
        options: ["for", "while", "if", "else"],
        correct: 1,
        explanation: "while выполняет код, пока условие True"
    },
    {
        id: 17,
        text: "Что делает `break` в цикле?",
        options: [
            "Пропускает итерацию",
            "Прерывает цикл",
            "Завершает программу",
            "Ничего"
        ],
        correct: 1,
        explanation: "break немедленно выходит из цикла"
    },
    {
        id: 18,
        text: "Как получить первый элемент списка `numbers = [10, 20, 30]`?",
        options: ["numbers[0]", "numbers[1]", "numbers.first()", "numbers.get(0)"],
        correct: 0,
        explanation: "Индексация в Python начинается с 0, поэтому первый элемент — numbers[0]"
    },
    {
        id: 19,
        text: "Что делает метод `append()`?",
        options: [
            "Удаляет элемент",
            "Добавляет элемент в конец списка",
            "Добавляет элемент в начало",
            "Сортирует список"
        ],
        correct: 1,
        explanation: "append(x) добавляет элемент x в конец списка"
    },
    {
        id: 20,
        text: "Как создать словарь?",
        options: [
            "['key': 'value']",
            "{'key': 'value'}",
            "('key': 'value')",
            "<'key': 'value'>"
        ],
        correct: 1,
        explanation: "Словари создаются в фигурных скобках с парами ключ: значение"
    },
    {
        id: 21,
        text: "Что делает функция `input()`?",
        options: [
            "Выводит данные",
            "Читает данные с клавиатуры",
            "Открывает файл",
            "Завершает программу"
        ],
        correct: 1,
        explanation: "input() ждёт ввод пользователя и возвращает строку"
    },
    {
        id: 22,
        text: "Что выведет `print('a', 'b', 'c', sep='-')`?",
        options: ["abc", "a-b-c", "a b c", "['a','b','c']"],
        correct: 1,
        explanation: "sep задаёт разделитель между значениями"
    },
    {
        id: 23,
        text: "Какой тип данных у `True`?",
        options: ["int", "str", "bool", "float"],
        correct: 2,
        explanation: "True и False — булевы значения (bool)"
    },
    {
        id: 24,
        text: "Что делает `continue`?",
        options: [
            "Прерывает цикл",
            "Пропускает текущую итерацию",
            "Завершает программу",
            "Начинает цикл заново"
        ],
        correct: 1,
        explanation: "continue пропускает остаток текущей итерации и переходит к следующей"
    },
    {
        id: 25,
        text: "Как объявить функцию в Python?",
        options: ["function my_func():", "def my_func():", "func my_func():", "define my_func():"],
        correct: 1,
        explanation: "Функции объявляются с помощью ключевого слова def"
    },
    {
        id: 26,
        text: "Что выведет `len([1, 2, 3, 4])`?",
        options: ["3", "4", "[1,2,3,4]", "Ошибку"],
        correct: 1,
        explanation: "len() возвращает количество элементов в списке"
    },
    {
        id: 27,
        text: "Какой оператор проверяет «не равно»?",
        options: ["=", "==", "!=", "<>"],
        correct: 2,
        explanation: "!= проверяет, что значения не равны"
    },
    {
        id: 28,
        text: "Что такое PEP 8?",
        options: [
            "Версия Python",
            "Стандарт стиля кода",
            "Библиотека",
            "Ошибка в коде"
        ],
        correct: 1,
        explanation: "PEP 8 — руководство по стилю написания кода на Python"
    },
    {
        id: 29,
        text: "Какой результат у `3 * 'abc'`?",
        options: ["'abcabcabc'", "3abc", "Ошибку", "abc3"],
        correct: 0,
        explanation: "Умножение строки на число повторяет строку указанное количество раз"
    },
    {
        id: 30,
        text: "Что выведет `print(2 ** 3)`?",
        options: ["6", "8", "9", "Ошибку"],
        correct: 1,
        explanation: "2 ** 3 = 2 * 2 * 2 = 8"
    }
];

// Функция для получения случайной задачи
export function getRandomProblem() {
    const randomIndex = Math.floor(Math.random() * dailyProblems.length);
    return { ...dailyProblems[randomIndex] };
}