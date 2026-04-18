// lessons.js - ПОЛНЫЙ ФАЙЛ СО ВСЕМИ 99 ЗАДАНИЯМИ PyPath

export const lessonsData = {
    // ==================== МОДУЛЬ A1: Основы Python (уроки 1–14) ====================
    
    A1_1: {
        description: "Создай три переменные: name (твоё имя), age (твой возраст), city (город). Выведи их на экран с помощью print().",
        requirements: "• Создай переменную name с твоим именем\n• Создай переменную age с твоим возрастом\n• Создай переменную city с названием города\n• Выведи все переменные через print()",
        hint: "Переменные создаются через знак =. Например: name = 'Анна'. Для вывода используй print(name, age, city).",
        type: "code",
        validator: (code) => {
            return code.includes('name') && 
                   code.includes('age') && 
                   code.includes('city') && 
                   code.includes('print');
        }
    },
    
    A1_2: {
        description: "Создай переменные: a = 10, b = 3.14, c = 'Python', d = True. Выведи тип каждой переменной с помощью type().",
        requirements: "• Создай a = 10\n• Создай b = 3.14\n• Создай c = 'Python'\n• Создай d = True\n• Выведи тип каждой переменной через print(type(...))",
        hint: "Функция type() возвращает тип переменной. Например: print(type(a)).",
        type: "code",
        validator: (code) => {
            return code.includes('a = 10') && 
                   code.includes('b = 3.14') && 
                   code.includes("c = 'Python'") && 
                   code.includes('d = True') && 
                   code.includes('type');
        }
    },
    
    A1_3: {
        description: "Выведи на экран фразу 'Я изучаю Python' три раза в одной строке, используя параметр end.",
        requirements: "• Используй print() с параметром end=' '\n• Фраза 'Я изучаю Python' должна быть выведена 3 раза\n• Весь вывод должен быть в одной строке",
        hint: "Параметр end=' ' в print() заменяет перевод строки на пробел. Напиши print('Я изучаю Python', end=' ') три раза.",
        type: "code",
        validator: (code) => {
            return code.includes('print') && 
                   code.includes('end') && 
                   code.split('print').length >= 4;
        }
    },
    
    A1_4: {
        description: "Спроси у пользователя его любимый цвет через input(), сохрани в переменную и выведи сообщение: 'Твой любимый цвет — [цвет]'.",
        requirements: "• Используй input() для ввода цвета\n• Сохрани результат в переменную\n• Выведи сообщение с подстановкой цвета (используй f-строку или конкатенацию)",
        hint: "Используй f-строку: print(f'Твой любимый цвет — {color}').",
        type: "code",
        validator: (code) => {
            return code.includes('input') && 
                   code.includes('print') && 
                   (code.includes('f"') || code.includes("f'") || code.includes('+'));
        }
    },
    
    A1_5: {
        description: "Попроси пользователя ввести два числа через input(), преобразуй их в int и выведи их сумму.",
        requirements: "• Используй input() два раза\n• Преобразуй введённые значения в int\n• Выведи сумму чисел",
        hint: "int(input()) преобразует строку в число. Сложи два числа через + и выведи результат.",
        type: "code",
        validator: (code) => {
            return code.includes('input') && 
                   code.includes('int') && 
                   code.includes('print');
        }
    },
    
    A1_6: {
        description: "Пользователь вводит два числа. Выведи их сумму, разность, произведение, частное (/), целую часть от деления (//) и остаток (%).",
        requirements: "• Введи два числа через input()\n• Преобразуй их в int или float\n• Выведи: +, -, *, /, //, %",
        hint: "Используй арифметические операторы: a + b, a - b, a * b, a / b, a // b, a % b.",
        type: "code",
        validator: (code) => {
            const hasOperators = code.includes('+') && code.includes('-') && 
                                  code.includes('*') && code.includes('/') && 
                                  code.includes('//') && code.includes('%');
            return code.includes('input') && hasOperators && code.includes('print');
        }
    },
    
    A1_7: {
        description: "Дана строка 'Программирование'. Выведи первый, третий и последний символы. Используй положительные и отрицательные индексы.",
        requirements: "• Используй строку s = 'Программирование'\n• Выведи первый символ (индекс 0)\n• Выведи третий символ (индекс 2)\n• Выведи последний символ (индекс -1)",
        hint: "Символы строки доступны по индексу в квадратных скобках. Первый символ — s[0], третий — s[2], последний — s[-1].",
        type: "code",
        validator: (code) => {
            return code.includes('Программирование') && 
                   code.includes('print') && 
                   (code.includes('[0]') || code.includes('[2]') || code.includes('[-1]'));
        }
    },
    
    A1_8: {
        description: "Создай переменные product = 'ноутбук', price = 75000. Выведи с помощью f-строки: 'Ноутбук стоит 75000 рублей'.",
        requirements: "• Создай product = 'ноутбук'\n• Создай price = 75000\n• Используй f-строку для вывода\n• Вывод должен быть: 'Ноутбук стоит 75000 рублей'",
        hint: "f-строка пишется так: f'Текст {переменная} текст'. Например: f'{product} стоит {price} рублей'.",
        type: "code",
        validator: (code) => {
            return code.includes('product') && 
                   code.includes('price') && 
                   (code.includes('f"') || code.includes("f'")) && 
                   code.includes('print');
        }
    },
    
    A1_9: {
        description: "Сравни числа 15 и 20. Выведи результат сравнений: >, <, ==, !=. Объясни, почему получились такие значения.",
        requirements: "• Выведи результат 15 > 20\n• Выведи результат 15 < 20\n• Выведи результат 15 == 20\n• Выведи результат 15 != 20\n• Добавь комментарий с объяснением (#)",
        hint: "Операторы сравнения: > — больше, < — меньше, == — равно, != — не равно. 15 меньше 20, поэтому 15 > 20 — False.",
        type: "code",
        validator: (code) => {
            return code.includes('15 > 20') && 
                   code.includes('15 < 20') && 
                   code.includes('15 == 20') && 
                   code.includes('15 != 20') && 
                   code.includes('print');
        }
    },
    
    A1_10: {
        description: "Пользователь вводит число. Если число больше 10, выведи 'Число больше 10'. Если меньше или равно — ничего не выводи.",
        requirements: "• Используй input() для ввода числа\n• Преобразуй в int\n• Используй условный оператор if\n• Если число > 10 — выведи сообщение",
        hint: "Условие пишется так: if x > 10: print('Число больше 10'). else не нужен.",
        type: "code",
        validator: (code) => {
            return code.includes('input') && 
                   code.includes('int') && 
                   code.includes('if') && 
                   code.includes('>') && 
                   code.includes('print');
        }
    },
    
    A1_11: {
        description: "Напиши программу, которая спрашивает имя и возраст, а затем выводит: 'Привет, [имя]! Через 5 лет тебе будет [возраст+5] лет'.",
        requirements: "• Запроси имя через input()\n• Запроси возраст через input()\n• Преобразуй возраст в int\n• Выведи приветствие с возрастом через 5 лет",
        hint: "Используй f-строку: f'Привет, {name}! Через 5 лет тебе будет {age + 5} лет'.",
        type: "code",
        validator: (code) => {
            return code.includes('input') && 
                   code.includes('int') && 
                   code.includes('+ 5') && 
                   code.includes('print');
        }
    },
    
    A1_12: {
        description: "Пользователь вводит длину и ширину прямоугольника. Выведи его площадь и периметр.",
        requirements: "• Запроси длину (input)\n• Запроси ширину (input)\n• Преобразуй в числа\n• Выведи площадь (a * b)\n• Выведи периметр (2 * (a + b))",
        hint: "Площадь = длина × ширина. Периметр = 2 × (длина + ширина).",
        type: "code",
        validator: (code) => {
            return code.includes('input') && 
                   code.includes('*') && 
                   code.includes('+') && 
                   code.includes('print');
        }
    },
    
    A1_13: {
        description: "Даны две переменные: x = 5, y = 10. Поменяй их значения местами без использования третьей переменной (способом Python).",
        requirements: "• Создай x = 5, y = 10\n• Поменяй значения местами используя x, y = y, x\n• Выведи x и y после обмена (должно быть x=10, y=5)",
        hint: "В Python можно менять значения одной строкой: x, y = y, x.",
        type: "code",
        validator: (code) => {
            return code.includes('x = 5') && 
                   code.includes('y = 10') && 
                   code.includes('x, y = y, x') && 
                   code.includes('print');
        }
    },
    
    A1_14: {
        description: "Напиши программу, которая: запрашивает имя и два числа, преобразует числа в int, складывает их, и выводит приветствие и результат в одной f-строке.",
        requirements: "• Запроси имя\n• Запроси два числа\n• Преобразуй числа в int\n• Сложи числа\n• Выведи f'Привет, {name}! Сумма чисел = {summa}'",
        hint: "Используй input() для ввода, int() для преобразования, f-строку для вывода.",
        type: "code",
        validator: (code) => {
            return code.includes('input') && 
                   code.includes('int') && 
                   code.includes('+') && 
                   code.includes('f"') && 
                   code.includes('print');
        }
    },

    // ==================== МОДУЛЬ A2: Условия (уроки 15–28) ====================
    
    A2_1: {
        description: "Пользователь вводит число. Если число чётное, выведи 'Чётное'.",
        requirements: "• Введи число через input()\n• Преобразуй в int\n• Проверь чётность: число % 2 == 0\n• Если чётное — выведи 'Чётное'",
        hint: "Чётное число делится на 2 без остатка: x % 2 == 0.",
        type: "code",
        validator: (code) => {
            return code.includes('input') && 
                   code.includes('% 2') && 
                   code.includes('if') && 
                   code.includes('print');
        }
    },
    
    A2_2: {
        description: "Пользователь вводит число. Если число положительное, выведи 'Положительное', иначе — 'Отрицательное или ноль'.",
        requirements: "• Введи число\n• Преобразуй в int или float\n• Если число > 0 — выведи 'Положительное'\n• Иначе — выведи 'Отрицательное или ноль'",
        hint: "Используй if-else. Условие: if x > 0: ... else: ...",
        type: "code",
        validator: (code) => {
            return code.includes('input') && 
                   code.includes('if') && 
                   code.includes('else') && 
                   code.includes('> 0');
        }
    },
    
    A2_3: {
        description: "Пользователь вводит оценку (0–100). Выведи буквенную оценку: A (90+), B (70–89), C (50–69), D (<50).",
        requirements: "• Введи число от 0 до 100\n• Используй if-elif-else\n• 90+ → 'A'\n• 70–89 → 'B'\n• 50–69 → 'C'\n• <50 → 'D'",
        hint: "Проверяй условия по порядку: if score >= 90, elif score >= 70, elif score >= 50, else.",
        type: "code",
        validator: (code) => {
            return code.includes('input') && 
                   code.includes('if') && 
                   code.includes('elif') && 
                   code.includes('else');
        }
    },
    
    A2_4: {
        description: "Пользователь вводит возраст и наличие прав (True/False). Выведи 'Может водить', если возраст >= 18 и права есть, иначе 'Не может'.",
        requirements: "• Введи возраст (int)\n• Введи наличие прав (bool или строка 'True'/'False')\n• Проверь: age >= 18 and has_license\n• Выведи результат",
        hint: "Логический оператор and требует истинности обоих условий.",
        type: "code",
        validator: (code) => {
            return code.includes('input') && 
                   code.includes('and') && 
                   code.includes('>=') && 
                   code.includes('print');
        }
    },
    
    A2_5: {
        description: "Пользователь вводит число. Если оно больше 0, проверь, чётное ли оно. Выведи 'Положительное чётное' или 'Положительное нечётное'. Если число <= 0, выведи 'Не положительное'.",
        requirements: "• Введи число\n• Если x > 0:\n   - Если x % 2 == 0 → 'Положительное чётное'\n   - Иначе → 'Положительное нечётное'\n• Иначе → 'Не положительное'",
        hint: "Используй вложенный if: сначала проверь x > 0, внутри — проверку на чётность.",
        type: "code",
        validator: (code) => {
            return code.includes('input') && 
                   code.includes('if') && 
                   code.includes('> 0') && 
                   code.includes('% 2');
        }
    },
    
    A2_6: {
        description: "Запиши одной строкой: переменной status присвой 'Совершеннолетний', если возраст >= 18, иначе 'Несовершеннолетний'.",
        requirements: "• Создай переменную age\n• Используй тернарный оператор\n• status = 'Совершеннолетний' if age >= 18 else 'Несовершеннолетний'\n• Выведи status",
        hint: "Тернарный оператор: значение_если_True if условие else значение_если_False.",
        type: "code",
        validator: (code) => {
            return code.includes('if') && 
                   code.includes('else') && 
                   code.includes('age') && 
                   code.includes('print');
        }
    },
    
    A2_7: {
        description: "Попроси пользователя ввести два слова. Выведи, какое из них больше по алфавиту (лексикографически).",
        requirements: "• Введи два слова\n• Сравни их с помощью > или <\n• Выведи сообщение: 'Первое слово больше' или 'Второе слово больше'",
        hint: "Строки сравниваются посимвольно по кодам Unicode. Используй if word1 > word2.",
        type: "code",
        validator: (code) => {
            return code.includes('input') && 
                   code.includes('if') && 
                   code.includes('>') && 
                   code.includes('print');
        }
    },
    
    A2_8: {
        description: "Пользователь вводит три числа. Выведи наибольшее из них (используй только сравнения и if).",
        requirements: "• Введи три числа\n• Сравни их между собой с помощью if\n• Выведи наибольшее число",
        hint: "Сравни a с b и a с c, чтобы найти максимум. Или используй вложенные if.",
        type: "code",
        validator: (code) => {
            return code.includes('input') && 
                   code.includes('if') && 
                   code.includes('>') && 
                   code.includes('print');
        }
    },
    
    A2_9: {
        description: "Пользователь вводит число. Проверь, находится ли оно в диапазоне от 10 до 20 включительно, используя логическую цепочку.",
        requirements: "• Введи число\n• Используй цепочку сравнений: 10 <= x <= 20\n• Выведи 'В диапазоне' или 'Не в диапазоне'",
        hint: "В Python можно писать 10 <= x <= 20 вместо x >= 10 and x <= 20.",
        type: "code",
        validator: (code) => {
            return code.includes('input') && 
                   (code.includes('10 <= x <= 20') || (code.includes('>= 10') && code.includes('<= 20'))) && 
                   code.includes('print');
        }
    },
    
    A2_10: {
        description: "Калькулятор: пользователь вводит два числа и оператор (+, -, *, /). Выведи результат. При делении на ноль — выведи 'Ошибка: деление на ноль'.",
        requirements: "• Введи два числа\n• Введи оператор\n• Используй if-elif для операций\n• При делении на ноль выведи ошибку",
        hint: "Проверяй оператор: if op == '+': print(a + b) и так далее. Для деления проверь b != 0.",
        type: "code",
        validator: (code) => {
            return code.includes('input') && 
                   (code.includes('+') || code.includes('-') || code.includes('*') || code.includes('/')) && 
                   code.includes('if');
        }
    },
    
    A2_11: {
        description: "Проверка пароля: правильный пароль 'python123'. Если пароль верен — 'Доступ разрешён', иначе — 'Доступ запрещён'.",
        requirements: "• Запроси пароль через input()\n• Сравни с 'python123'\n• Если совпадает — 'Доступ разрешён'\n• Иначе — 'Доступ запрещён'",
        hint: "Используй if-else. Сравнение строк: if password == 'python123':",
        type: "code",
        validator: (code) => {
            return code.includes('input') && 
                   code.includes('python123') && 
                   code.includes('if') && 
                   code.includes('else');
        }
    },
    
    A2_12: {
        description: "Определи високосный год. Год високосный, если делится на 4, но не на 100, или делится на 400.",
        requirements: "• Введи год\n• Проверь: (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)\n• Выведи 'Високосный' или 'Не високосный'",
        hint: "Используй логические операторы and/or для сложного условия.",
        type: "code",
        validator: (code) => {
            return code.includes('input') && 
                   code.includes('% 4 == 0') && 
                   (code.includes('and') || code.includes('or')) && 
                   code.includes('print');
        }
    },
    
    A2_13: {
        description: "Запроси число. С помощью тернарного оператора присвой переменной parity строку 'Чётное' или 'Нечётное'. Выведи parity.",
        requirements: "• Введи число\n• Используй тернарный оператор\n• parity = 'Чётное' if x % 2 == 0 else 'Нечётное'\n• Выведи parity",
        hint: "Тернарный оператор: значение_если_True if условие else значение_если_False.",
        type: "code",
        validator: (code) => {
            return code.includes('input') && 
                   code.includes('if') && 
                   code.includes('else') && 
                   code.includes('% 2');
        }
    },
    
    A2_14: {
        description: "Напиши программу — 'Симулятор светофора'. Пользователь вводит цвет (красный, жёлтый, зелёный). Выведи действие: стой, жди, иди.",
        requirements: "• Введи цвет (строка)\n• Используй if-elif-else\n• красный → 'Стой'\n• жёлтый → 'Жди'\n• зелёный → 'Иди'\n• другой цвет → 'Неизвестный сигнал'",
        hint: "Сравнивай строки: if color == 'красный': print('Стой') и так далее.",
        type: "code",
        validator: (code) => {
            return code.includes('input') && 
                   (code.includes('красный') || code.includes('red')) && 
                   code.includes('if') && 
                   code.includes('print');
        }
    },

    // ==================== МОДУЛЬ B1: Циклы (уроки 29–42) ====================
    
    B1_1: {
        description: "Выведи все числа от 1 до 10 с помощью цикла for и range().",
        requirements: "• Используй цикл for\n• Используй range(1, 11)\n• Выводи каждое число через print()",
        hint: "for i in range(1, 11): print(i)",
        type: "code",
        validator: (code) => {
            return code.includes('for') && 
                   code.includes('range') && 
                   code.includes('print');
        }
    },
    
    B1_2: {
        description: "Выведи все чётные числа от 2 до 20 включительно с помощью range() с шагом.",
        requirements: "• Используй range(2, 21, 2)\n• Цикл for\n• Выводи каждое число",
        hint: "range(start, stop, step) — третий аргумент задаёт шаг.",
        type: "code",
        validator: (code) => {
            return code.includes('range') && 
                   code.includes('2') && 
                   code.includes('for') && 
                   code.includes('print');
        }
    },
    
    B1_3: {
        description: "С помощью while выведи числа от 10 до 1 (в обратном порядке).",
        requirements: "• Создай переменную i = 10\n• Цикл while i >= 1\n• Выводи i\n• Уменьшай i на 1 (i -= 1)",
        hint: "while i >= 1: print(i); i -= 1",
        type: "code",
        validator: (code) => {
            return code.includes('while') && 
                   code.includes('>=') && 
                   code.includes('-=') && 
                   code.includes('print');
        }
    },
    
    B1_4: {
        description: "Запрашивай у пользователя числа, пока он не введёт 0. При вводе 0 — заверши цикл.",
        requirements: "• Используй while True\n• Запрашивай число через input()\n• Преобразуй в int\n• Если число == 0 — break\n• Иначе — выводи число",
        hint: "while True: n = int(input()); if n == 0: break; print(n)",
        type: "code",
        validator: (code) => {
            return code.includes('while') && 
                   code.includes('input') && 
                   code.includes('break') && 
                   code.includes('int');
        }
    },
    
    B1_5: {
        description: "Выведи числа от 1 до 10, но пропусти число 5 с помощью continue.",
        requirements: "• Цикл for i in range(1, 11)\n• Если i == 5 — continue\n• Выведи остальные числа",
        hint: "for i in range(1, 11): if i == 5: continue; print(i)",
        type: "code",
        validator: (code) => {
            return code.includes('for') && 
                   code.includes('range') && 
                   code.includes('continue') && 
                   code.includes('print');
        }
    },
    
    B1_6: {
        description: "С помощью for найди число 7 в списке [3, 5, 7, 9]. Если нашли — break, иначе выполни else.",
        requirements: "• Создай список [3, 5, 7, 9]\n• Цикл for по списку\n• Если элемент == 7 — break\n• После цикла — else: print('Не найдено')",
        hint: "for item in numbers: if item == 7: break; else: print('Не найдено')",
        type: "code",
        validator: (code) => {
            return code.includes('for') && 
                   code.includes('if') && 
                   code.includes('break') && 
                   code.includes('else');
        }
    },
    
    B1_7: {
        description: "Выведи таблицу умножения 3×3: для i от 1 до 3, для j от 1 до 3 выведи i * j.",
        requirements: "• Внешний цикл for i in range(1, 4)\n• Внутренний цикл for j in range(1, 4)\n• Выведи i * j",
        hint: "Вложенные циклы: for i in range(1,4): for j in range(1,4): print(i*j)",
        type: "code",
        validator: (code) => {
            return code.includes('for') && 
                   code.includes('range') && 
                   code.split('for').length >= 3;
        }
    },
    
    B1_8: {
        description: "Создай бесконечный цикл while True, запрашивай команду 'exit' для выхода.",
        requirements: "• while True\n• Запроси команду через input()\n• Если команда == 'exit' — break\n• Иначе — выведи 'Команда не распознана'",
        hint: "while True: cmd = input(); if cmd == 'exit': break; print('Команда не распознана')",
        type: "code",
        validator: (code) => {
            return code.includes('while True') && 
                   code.includes('input') && 
                   code.includes('exit') && 
                   code.includes('break');
        }
    },
    
    B1_9: {
        description: "Дан список ['яблоко', 'банан', 'вишня']. Выведи индекс и элемент с помощью enumerate().",
        requirements: "• Создай список fruits\n• Используй enumerate() в цикле for\n• Выведи индекс и элемент",
        hint: "for i, fruit in enumerate(fruits): print(i, fruit)",
        type: "code",
        validator: (code) => {
            return code.includes('enumerate') && 
                   code.includes('for') && 
                   code.includes('print');
        }
    },
    
    B1_10: {
        description: "Найди сумму всех чисел от 1 до 100 с помощью цикла for.",
        requirements: "• Создай переменную total = 0\n• Цикл for i in range(1, 101)\n• total += i\n• Выведи total",
        hint: "total = 0; for i in range(1, 101): total += i; print(total)",
        type: "code",
        validator: (code) => {
            return code.includes('for') && 
                   code.includes('range') && 
                   code.includes('+=') && 
                   code.includes('print');
        }
    },
    
    B1_11: {
        description: "Запрашивай числа, суммируй их, пока сумма не станет >= 100. Затем выведи итоговую сумму.",
        requirements: "• Создай total = 0\n• while total < 100\n• Запрашивай число\n• total += число\n• Выведи total",
        hint: "total = 0; while total < 100: n = int(input()); total += n; print(total)",
        type: "code",
        validator: (code) => {
            return code.includes('while') && 
                   code.includes('input') && 
                   code.includes('+=') && 
                   code.includes('print');
        }
    },
    
    B1_12: {
        description: "Выведи прямоугольник 5×3 из звёздочек (*) с помощью вложенных циклов.",
        requirements: "• Внешний цикл for i in range(3) (строки)\n• Внутренний цикл for j in range(5) (столбцы)\n• Выводи '*' без перевода строки\n• После внутреннего цикла — print() для перевода строки",
        hint: "for i in range(3): for j in range(5): print('*', end=''); print()",
        type: "code",
        validator: (code) => {
            return code.includes('for') && 
                   code.includes('range') && 
                   code.includes('*') && 
                   code.includes('end');
        }
    },
    
    B1_13: {
        description: "Дан список чисел. Найди индекс первого отрицательного числа с помощью enumerate() и break.",
        requirements: "• Создай список с отрицательным числом, например [5, 3, -2, 8]\n• Используй enumerate()\n• Если число < 0 — выведи индекс и break",
        hint: "for i, num in enumerate(numbers): if num < 0: print(i); break",
        type: "code",
        validator: (code) => {
            return code.includes('enumerate') && 
                   code.includes('if') && 
                   code.includes('< 0') && 
                   code.includes('break');
        }
    },
    
    B1_14: {
        description: "Выведи все простые числа от 2 до 50. (Простое число делится только на 1 и на себя.)",
        requirements: "• Внешний цикл for n in range(2, 51)\n• Внутренний цикл для проверки делителей от 2 до n-1\n• Если делитель найден — break\n• Если делителей нет — выведи n",
        hint: "for n in range(2,51): is_prime = True; for d in range(2,n): if n % d == 0: is_prime = False; break; if is_prime: print(n)",
        type: "code",
        validator: (code) => {
            return code.includes('for') && 
                   code.includes('range') && 
                   code.includes('%') && 
                   code.includes('print');
        }
    },

    // ==================== МОДУЛЬ B2: Функции (уроки 43–56) ====================
    
    B2_1: {
        description: "Создай функцию greet(), которая выводит 'Привет, мир!'. Вызови её.",
        requirements: "• Определи функцию greet() через def\n• Внутри — print('Привет, мир!')\n• Вызови функцию greet()",
        hint: "def greet(): print('Привет, мир!'); greet()",
        type: "code",
        validator: (code) => {
            return code.includes('def greet') && 
                   code.includes('print') && 
                   code.includes('greet()');
        }
    },
    
    B2_2: {
        description: "Создай функцию square(n), которая выводит квадрат числа n.",
        requirements: "• Определи функцию square(n)\n• Внутри — print(n * n)\n• Вызови функцию с аргументом, например square(5)",
        hint: "def square(n): print(n * n); square(5)",
        type: "code",
        validator: (code) => {
            return code.includes('def square') && 
                   code.includes('print') && 
                   code.includes('*');
        }
    },
    
    B2_3: {
        description: "Создай функцию add(a, b), которая возвращает сумму. Вызови и выведи результат.",
        requirements: "• Определи функцию add(a, b)\n• Внутри — return a + b\n• Вызови функцию с числами 3 и 5\n• Выведи результат через print()",
        hint: "def add(a,b): return a+b; result = add(3,5); print(result)",
        type: "code",
        validator: (code) => {
            return code.includes('def add') && 
                   code.includes('return') && 
                   code.includes('+') && 
                   code.includes('print');
        }
    },
    
    B2_4: {
        description: "Создай функцию без return, присвой результат переменной и выведи её. Объясни результат.",
        requirements: "• Создай функцию, которая что-то делает, но не возвращает значение\n• Присвой вызов функции переменной\n• Выведи переменную (должен быть None)\n• Добавь комментарий с объяснением",
        hint: "Функция без return возвращает None. Например: def say(): print('hi'); result = say(); print(result) — выведет None",
        type: "code",
        validator: (code) => {
            return code.includes('def') && 
                   !code.includes('return') && 
                   code.includes('print') && 
                   code.includes('None');
        }
    },
    
    B2_5: {
        description: "Создай глобальную переменную x = 10. Внутри функции измени её и выведи. Объясни разницу.",
        requirements: "• Создай x = 10\n• Определи функцию, которая меняет x (используй global x)\n• Вызови функцию\n• Выведи x после вызова\n• Добавь комментарий",
        hint: "x = 10; def change(): global x; x = 20; change(); print(x) — выведет 20",
        type: "code",
        validator: (code) => {
            return code.includes('global') && 
                   code.includes('x =') && 
                   code.includes('def') && 
                   code.includes('print');
        }
    },
    
    B2_6: {
        description: "Создай функцию sum_all(*args), которая возвращает сумму всех переданных чисел.",
        requirements: "• Определи функцию sum_all(*args)\n• Используй встроенную sum(args) или цикл\n• Верни сумму\n• Вызови с числами 1,2,3,4,5 и выведи результат",
        hint: "def sum_all(*args): return sum(args); print(sum_all(1,2,3,4,5))",
        type: "code",
        validator: (code) => {
            return code.includes('*args') && 
                   (code.includes('sum') || code.includes('+=')) && 
                   code.includes('return');
        }
    },
    
    B2_7: {
        description: "Создай функцию print_info(**kwargs), которая выводит все переданные ключи и значения.",
        requirements: "• Определи функцию print_info(**kwargs)\n• Используй цикл for key, value in kwargs.items()\n• Выведи key, value\n• Вызови с аргументами name='Анна', age=25, city='Москва'",
        hint: "def print_info(**kwargs): for k,v in kwargs.items(): print(k, v)",
        type: "code",
        validator: (code) => {
            return code.includes('**kwargs') && 
                   code.includes('.items()') && 
                   code.includes('for') && 
                   code.includes('print');
        }
    },
    
    B2_8: {
        description: "Создай lambda-функцию, которая возвращает квадрат числа. Примени её к числу 5.",
        requirements: "• Создай lambda x: x * x\n• Присвой переменной или используй сразу\n• Выведи результат (должно быть 25)",
        hint: "square = lambda x: x * x; print(square(5))",
        type: "code",
        validator: (code) => {
            return code.includes('lambda') && 
                   code.includes('*') && 
                   code.includes('print');
        }
    },
    
    B2_9: {
        description: "Используя map() и lambda, преобразуй список [1, 2, 3] в список квадратов.",
        requirements: "• Создай список numbers = [1, 2, 3]\n• Используй map(lambda x: x * x, numbers)\n• Преобразуй результат в list()\n• Выведи результат",
        hint: "numbers = [1,2,3]; squares = list(map(lambda x: x*x, numbers)); print(squares)",
        type: "code",
        validator: (code) => {
            return code.includes('map') && 
                   code.includes('lambda') && 
                   code.includes('list') && 
                   code.includes('print');
        }
    },
    
    B2_10: {
        description: "Используя filter() и lambda, отфильтруй список [1, 2, 3, 4, 5], оставив только чётные.",
        requirements: "• Создай список numbers = [1, 2, 3, 4, 5]\n• Используй filter(lambda x: x % 2 == 0, numbers)\n• Преобразуй в list()\n• Выведи результат",
        hint: "evens = list(filter(lambda x: x % 2 == 0, [1,2,3,4,5])); print(evens)",
        type: "code",
        validator: (code) => {
            return code.includes('filter') && 
                   code.includes('lambda') && 
                   code.includes('% 2 == 0') && 
                   code.includes('print');
        }
    },
    
    B2_11: {
        description: "Напиши рекурсивную функцию factorial(n), которая возвращает факториал числа.",
        requirements: "• Определи функцию factorial(n)\n• Базовый случай: if n <= 1: return 1\n• Рекурсивный случай: return n * factorial(n-1)\n• Вызови factorial(5) и выведи результат",
        hint: "def factorial(n): if n <= 1: return 1; return n * factorial(n-1); print(factorial(5))",
        type: "code",
        validator: (code) => {
            return code.includes('def factorial') && 
                   code.includes('return') && 
                   code.includes('factorial(n-1)') && 
                   code.includes('print');
        }
    },
    
    B2_12: {
        description: "Создай функцию с docstring (описание в тройных кавычках). Выведи её документацию с помощью help().",
        requirements: "• Создай функцию\n• В первой строке тела напиши docstring в тройных кавычках\n• Вызови help(имя_функции)\n• Или выведи функцию.__doc__",
        hint: "def my_func(): '''Описание функции'''; pass; help(my_func)",
        type: "code",
        validator: (code) => {
            return code.includes('"""') && 
                   (code.includes('help') || code.includes('__doc__')) && 
                   code.includes('def');
        }
    },
    
    B2_13: {
        description: "Создай функцию power(base, exp=2), которая возводит в степень. Проверь с одним и двумя аргументами.",
        requirements: "• Определи функцию power(base, exp=2)\n• Верни base ** exp\n• Вызови power(3) — должно быть 9\n• Вызови power(2, 4) — должно быть 16\n• Выведи оба результата",
        hint: "def power(base, exp=2): return base ** exp; print(power(3)); print(power(2,4))",
        type: "code",
        validator: (code) => {
            return code.includes('def power') && 
                   code.includes('=') && 
                   code.includes('**') && 
                   code.includes('print');
        }
    },
    
    B2_14: {
        description: "Напиши функцию is_palindrome(s), которая возвращает True, если строка читается одинаково слева и справа.",
        requirements: "• Определи функцию is_palindrome(s)\n• Сравни строку с её перевёрнутой версией: s == s[::-1]\n• Верни результат (True/False)\n• Проверь на словах 'казак' и 'привет'",
        hint: "def is_palindrome(s): return s == s[::-1]; print(is_palindrome('казак')); print(is_palindrome('привет'))",
        type: "code",
        validator: (code) => {
            return code.includes('def') && 
                   code.includes('[::-1]') && 
                   code.includes('return') && 
                   code.includes('print');
        }
    },

    // ==================== МОДУЛЬ C1: Структуры данных (уроки 57–70) ====================
    
    C1_1: {
        description: "Создай список из 5 любимых фильмов. Выведи первый и последний элемент.",
        requirements: "• Создай список movies с 5 элементами\n• Выведи movies[0]\n• Выведи movies[-1]",
        hint: "movies = ['фильм1', 'фильм2', 'фильм3', 'фильм4', 'фильм5']; print(movies[0], movies[-1])",
        type: "code",
        validator: (code) => {
            return code.includes('[') && 
                   code.includes(']') && 
                   code.includes('[0]') && 
                   code.includes('[-1]');
        }
    },
    
    C1_2: {
        description: "Создай пустой список. Добавь в него 3 элемента через append(), вставь элемент на позицию 1 через insert(), удали последний через pop().",
        requirements: "• Создай пустой список: lst = []\n• Добавь 3 элемента через append()\n• Вставь элемент на позицию 1 через insert()\n• Удали последний элемент через pop()\n• Выведи список после каждой операции",
        hint: "lst = []; lst.append(1); lst.append(2); lst.append(3); lst.insert(1, 99); lst.pop(); print(lst)",
        type: "code",
        validator: (code) => {
            return code.includes('append') && 
                   code.includes('insert') && 
                   code.includes('pop') && 
                   code.includes('print');
        }
    },
    
    C1_3: {
        description: "Дан список [10, 20, 30, 40, 50]. Выведи срез: первые 3 элемента, последние 2, каждый второй.",
        requirements: "• Создай список numbers\n• Выведи numbers[:3] — первые 3\n• Выведи numbers[-2:] — последние 2\n• Выведи numbers[::2] — каждый второй",
        hint: "numbers = [10,20,30,40,50]; print(numbers[:3]); print(numbers[-2:]); print(numbers[::2])",
        type: "code",
        validator: (code) => {
            return code.includes('[:3]') && 
                   code.includes('[-2:]') && 
                   code.includes('[::2]') && 
                   code.includes('print');
        }
    },
    
    C1_4: {
        description: "Создай словарь person с ключами 'name', 'age', 'city'. Выведи возраст.",
        requirements: "• Создай словарь person = {'name': 'Анна', 'age': 25, 'city': 'Москва'}\n• Выведи person['age']",
        hint: "person = {'name': 'Анна', 'age': 25, 'city': 'Москва'}; print(person['age'])",
        type: "code",
        validator: (code) => {
            return code.includes('{') && 
                   code.includes('}') && 
                   code.includes(':') && 
                   code.includes('age');
        }
    },
    
    C1_5: {
        description: "Используя словарь из C1_4, выведи все ключи, значения и пары с помощью keys(), values(), items().",
        requirements: "• Используй person.keys()\n• Используй person.values()\n• Используй person.items()\n• Выведи всё",
        hint: "print(person.keys()); print(person.values()); print(person.items())",
        type: "code",
        validator: (code) => {
            return code.includes('.keys()') && 
                   code.includes('.values()') && 
                   code.includes('.items()') && 
                   code.includes('print');
        }
    },
    
    C1_6: {
        description: "Создай два множества: {1,2,3} и {3,4,5}. Выведи объединение, пересечение и разность.",
        requirements: "• Создай a = {1, 2, 3}\n• Создай b = {3, 4, 5}\n• Выведи a | b (объединение)\n• Выведи a & b (пересечение)\n• Выведи a - b (разность)",
        hint: "a = {1,2,3}; b = {3,4,5}; print(a|b); print(a&b); print(a-b)",
        type: "code",
        validator: (code) => {
            return (code.includes('|') || code.includes('union')) && 
                   (code.includes('&') || code.includes('intersection')) && 
                   (code.includes('-') || code.includes('difference')) && 
                   code.includes('print');
        }
    },
    
    C1_7: {
        description: "Создай кортеж из 3 элементов. Попробуй изменить второй элемент и объясни ошибку.",
        requirements: "• Создай кортеж t = (1, 2, 3)\n• Попробуй t[1] = 99\n• Объясни ошибку в комментарии",
        hint: "Кортежи неизменяемы. Попытка изменить элемент вызовет TypeError.",
        type: "code",
        validator: (code) => {
            return code.includes('(') && 
                   code.includes(')') && 
                   code.includes('t[1] =') && 
                   code.includes('#');
        }
    },
    
    C1_8: {
        description: "С помощью list comprehension создай список квадратов чисел от 1 до 10.",
        requirements: "• Используй [x*x for x in range(1, 11)]\n• Выведи результат",
        hint: "squares = [x*x for x in range(1, 11)]; print(squares)",
        type: "code",
        validator: (code) => {
            return code.includes('[') && 
                   code.includes('for') && 
                   code.includes('range') && 
                   code.includes('print');
        }
    },
    
    C1_9: {
        description: "Создай словарь, где ключи — числа от 1 до 5, а значения — их кубы.",
        requirements: "• Используй dict comprehension: {x: x**3 for x in range(1, 6)}\n• Выведи результат",
        hint: "cubes = {x: x**3 for x in range(1, 6)}; print(cubes)",
        type: "code",
        validator: (code) => {
            return code.includes('{') && 
                   code.includes('for') && 
                   code.includes('**') && 
                   code.includes('print');
        }
    },
    
    C1_10: {
        description: "Дан список [1, 2, 3]. Распакуй его в переменные a, b, c и выведи их.",
        requirements: "• Создай список [1, 2, 3]\n• Распакуй: a, b, c = список\n• Выведи a, b, c",
        hint: "lst = [1,2,3]; a,b,c = lst; print(a,b,c)",
        type: "code",
        validator: (code) => {
            return code.includes('=') && 
                   code.includes(',') && 
                   code.includes('[') && 
                   code.includes('print');
        }
    },
    
    C1_11: {
        description: "Создай список, скопируй его через copy() и через простое присваивание. Измени оригинал и покажи разницу.",
        requirements: "• Создай original = [1,2,3]\n• copy1 = original.copy()\n• copy2 = original\n• Измени original.append(4)\n• Выведи original, copy1, copy2 и объясни",
        hint: "original = [1,2,3]; copy1 = original.copy(); copy2 = original; original.append(4); print(original, copy1, copy2)",
        type: "code",
        validator: (code) => {
            return code.includes('copy()') && 
                   code.includes('append') && 
                   code.includes('print') && 
                   code.includes('#');
        }
    },
    
    C1_12: {
        description: "Дан список чисел. Найди сумму всех элементов и среднее арифметическое.",
        requirements: "• Создай список чисел\n• Используй sum() для суммы\n• Среднее = сумма / длину\n• Выведи сумму и среднее",
        hint: "numbers = [10,20,30,40,50]; total = sum(numbers); avg = total / len(numbers); print(total, avg)",
        type: "code",
        validator: (code) => {
            return code.includes('sum') && 
                   code.includes('len') && 
                   code.includes('/') && 
                   code.includes('print');
        }
    },
    
    C1_13: {
        description: "Создай телефонную книгу (словарь). Добавь 3 контакта. По запросу имени выводи номер.",
        requirements: "• Создай словарь phone_book\n• Добавь 3 контакта: 'Анна': '123', 'Петр': '456', 'Мария': '789'\n• Запроси имя через input()\n• Выведи номер или 'Не найден'",
        hint: "phone_book = {'Анна': '123', 'Петр': '456', 'Мария': '789'}; name = input(); print(phone_book.get(name, 'Не найден'))",
        type: "code",
        validator: (code) => {
            return code.includes('{') && 
                   code.includes('input') && 
                   code.includes('get') && 
                   code.includes('print');
        }
    },
    
    C1_14: {
        description: "Дан список строк. С помощью list comprehension отфильтруй строки длиннее 3 символов и приведи к верхнему регистру.",
        requirements: "• Создай список строк\n• Используй [s.upper() for s in список if len(s) > 3]\n• Выведи результат",
        hint: "words = ['cat', 'elephant', 'dog', 'tiger']; result = [w.upper() for w in words if len(w) > 3]; print(result)",
        type: "code",
        validator: (code) => {
            return code.includes('for') && 
                   code.includes('if') && 
                   code.includes('upper') && 
                   code.includes('print');
        }
    },

    // ==================== МОДУЛЬ C2: Продвинутые темы (уроки 71–84) ====================
    
    C2_1: {
        description: "Дан список ['a', 'b', 'c']. Выведи пары 'индекс: элемент' с помощью enumerate().",
        requirements: "• Создай список letters\n• Используй enumerate() в цикле\n• Выведи f'{i}: {letter}'",
        hint: "letters = ['a','b','c']; for i, letter in enumerate(letters): print(f'{i}: {letter}')",
        type: "code",
        validator: (code) => {
            return code.includes('enumerate') && 
                   code.includes('for') && 
                   code.includes('f"') && 
                   code.includes('print');
        }
    },
    
    C2_2: {
        description: "Даны два списка: [1,2,3] и ['a','b','c']. Объедини их в список кортежей с помощью zip().",
        requirements: "• Создай numbers = [1,2,3]\n• Создай letters = ['a','b','c']\n• Используй list(zip(numbers, letters))\n• Выведи результат",
        hint: "numbers = [1,2,3]; letters = ['a','b','c']; result = list(zip(numbers, letters)); print(result)",
        type: "code",
        validator: (code) => {
            return code.includes('zip') && 
                   code.includes('list') && 
                   code.includes('print') && 
                   code.includes(',');
        }
    },
    
    C2_3: {
        description: "Отсортируй список [3,1,4,1,5,9,2] по возрастанию и убыванию.",
        requirements: "• Создай список numbers\n• Используй sorted(numbers) для возрастания\n• Используй sorted(numbers, reverse=True) для убывания\n• Выведи оба результата",
        hint: "numbers = [3,1,4,1,5,9,2]; print(sorted(numbers)); print(sorted(numbers, reverse=True))",
        type: "code",
        validator: (code) => {
            return code.includes('sorted') && 
                   code.includes('reverse=True') && 
                   code.includes('print') && 
                   code.includes('numbers');
        }
    },
    
    C2_4: {
        description: "Проверь, есть ли в списке [0, 0, 1, 0] хотя бы одно ненулевое число с помощью any().",
        requirements: "• Создай список\n• Используй any(список)\n• Выведи результат (должен быть True)",
        hint: "numbers = [0,0,1,0]; print(any(numbers))",
        type: "code",
        validator: (code) => {
            return code.includes('any') && 
                   code.includes('print') && 
                   code.includes('[');
        }
    },
    
    C2_5: {
        description: "Проверь, все ли элементы списка [2,4,6,8] чётные, с помощью all().",
        requirements: "• Создай список\n• Используй all(x % 2 == 0 for x in список)\n• Выведи результат (должен быть True)",
        hint: "numbers = [2,4,6,8]; print(all(x % 2 == 0 for x in numbers))",
        type: "code",
        validator: (code) => {
            return code.includes('all') && 
                   code.includes('% 2 == 0') && 
                   code.includes('for') && 
                   code.includes('print');
        }
    },
    
    C2_6: {
        description: "Попроси пользователя ввести число. Обработай ошибку, если введена не строка.",
        requirements: "• Используй try-except\n• В try: n = int(input())\n• В except: print('Ошибка: введите число')",
        hint: "try: n = int(input()); except ValueError: print('Ошибка: введите число')",
        type: "code",
        validator: (code) => {
            return code.includes('try') && 
                   code.includes('except') && 
                   code.includes('int(input)') && 
                   code.includes('print');
        }
    },
    
    C2_7: {
        description: "Открой файл test.txt в режиме записи и запиши в него 'Hello, Python!'.",
        requirements: "• Используй open('test.txt', 'w')\n• Используй метод write()\n• Закрой файл или используй with",
        hint: "with open('test.txt', 'w') as f: f.write('Hello, Python!')",
        type: "code",
        validator: (code) => {
            return code.includes('open') && 
                   code.includes('.write') && 
                   (code.includes('"w"') || code.includes("'w'")) && 
                   (code.includes('with') || code.includes('close'));
        }
    },
    
    C2_8: {
        description: "Прочитай файл из C2_7 и выведи его содержимое на экран.",
        requirements: "• Открой файл в режиме 'r'\n• Используй read()\n• Выведи содержимое",
        hint: "with open('test.txt', 'r') as f: content = f.read(); print(content)",
        type: "code",
        validator: (code) => {
            return code.includes('open') && 
                   code.includes('.read') && 
                   (code.includes('"r"') || code.includes("'r'")) && 
                   code.includes('print');
        }
    },
    
    C2_9: {
        description: "Добавь в файл test.txt вторую строку 'Новая строка' в режиме добавления (a).",
        requirements: "• Открой файл в режиме 'a'\n• Используй write() для добавления строки\n• Добавь символ перевода строки '\\n'",
        hint: "with open('test.txt', 'a') as f: f.write('\\nНовая строка')",
        type: "code",
        validator: (code) => {
            return code.includes('open') && 
                   code.includes('.write') && 
                   (code.includes('"a"') || code.includes("'a'"));
        }
    },
    
    C2_10: {
        description: "Импортируй модуль math. Выведи значение числа π (пи) и квадратный корень из 16.",
        requirements: "• import math\n• Выведи math.pi\n• Выведи math.sqrt(16)",
        hint: "import math; print(math.pi); print(math.sqrt(16))",
        type: "code",
        validator: (code) => {
            return code.includes('import math') && 
                   code.includes('math.pi') && 
                   code.includes('math.sqrt') && 
                   code.includes('print');
        }
    },
    
    C2_11: {
        description: "Выведи текущую дату и время с помощью модуля datetime.",
        requirements: "• from datetime import datetime\n• Используй datetime.now()\n• Выведи результат",
        hint: "from datetime import datetime; print(datetime.now())",
        type: "code",
        validator: (code) => {
            return code.includes('datetime') && 
                   code.includes('now()') && 
                   code.includes('print');
        }
    },
    
    C2_12: {
        description: "Сгенерируй случайное число от 1 до 100 и выведи его.",
        requirements: "• import random\n• Используй random.randint(1, 100)\n• Выведи результат",
        hint: "import random; print(random.randint(1, 100))",
        type: "code",
        validator: (code) => {
            return code.includes('random') && 
                   code.includes('randint') && 
                   code.includes('print');
        }
    },
    
    C2_13: {
        description: "Запроси два числа, подели первое на второе. Обработай деление на ноль и ввод не чисел.",
        requirements: "• Используй try-except\n• Обработай ValueError (ввод не чисел)\n• Обработай ZeroDivisionError (деление на ноль)",
        hint: "try: a = int(input()); b = int(input()); print(a/b); except ValueError: print('Введите числа'); except ZeroDivisionError: print('Деление на ноль')",
        type: "code",
        validator: (code) => {
            return code.includes('try') && 
                   code.includes('except') && 
                   (code.includes('ValueError') || code.includes('ZeroDivisionError')) && 
                   code.includes('print');
        }
    },
    
    C2_14: {
        description: "Напиши программу, которая создаёт список из 10 случайных чисел, сортирует его и сохраняет в файл.",
        requirements: "• import random\n• Создай список из 10 случайных чисел (randint)\n• Отсортируй список (sorted())\n• Сохрани в файл 'sorted_numbers.txt'",
        hint: "import random; numbers = [random.randint(1,100) for _ in range(10)]; numbers.sort(); with open('sorted_numbers.txt', 'w') as f: f.write(str(numbers))",
        type: "code",
        validator: (code) => {
            return code.includes('random') && 
                   code.includes('randint') && 
                   code.includes('sort') && 
                   code.includes('open') && 
                   code.includes('write');
        }
    },

    // ==================== МОДУЛЬ C3: ООП (уроки 85–98) ====================
    
    C3_1: {
        description: "Создай класс Car с атрибутами brand и year. Создай объект и выведи его марку.",
        requirements: "• Определи класс Car\n• В __init__ сохрани brand и year\n• Создай объект my_car = Car('Toyota', 2020)\n• Выведи my_car.brand",
        hint: "class Car: def __init__(self, brand, year): self.brand = brand; self.year = year; my_car = Car('Toyota', 2020); print(my_car.brand)",
        type: "code",
        validator: (code) => {
            return code.includes('class Car') && 
                   code.includes('__init__') && 
                   code.includes('self.brand') && 
                   code.includes('print');
        }
    },
    
    C3_2: {
        description: "Добавь в класс Car конструктор __init__, который принимает brand и year и сохраняет их.",
        requirements: "• Определи класс Car\n• Реализуй __init__(self, brand, year)\n• Присвой self.brand = brand, self.year = year",
        hint: "class Car: def __init__(self, brand, year): self.brand = brand; self.year = year",
        type: "code",
        validator: (code) => {
            return code.includes('class Car') && 
                   code.includes('__init__') && 
                   code.includes('self.brand') && 
                   code.includes('self.year');
        }
    },
    
    C3_3: {
        description: "В классе Car создай метод info(), который выводит 'Марка: [brand], Год: [year]'.",
        requirements: "• Добавь метод info(self)\n• Внутри print(f'Марка: {self.brand}, Год: {self.year}')",
        hint: "def info(self): print(f'Марка: {self.brand}, Год: {self.year}')",
        type: "code",
        validator: (code) => {
            return code.includes('def info') && 
                   code.includes('self') && 
                   code.includes('f"') && 
                   code.includes('print');
        }
    },
    
    C3_4: {
        description: "Создай класс ElectricCar, наследующий от Car, добавь атрибут battery_capacity.",
        requirements: "• class ElectricCar(Car)\n• В __init__ вызови super().__init__(brand, year)\n• Добавь self.battery_capacity = battery_capacity",
        hint: "class ElectricCar(Car): def __init__(self, brand, year, battery_capacity): super().__init__(brand, year); self.battery_capacity = battery_capacity",
        type: "code",
        validator: (code) => {
            return code.includes('class ElectricCar') && 
                   code.includes('(Car)') && 
                   code.includes('super()') && 
                   code.includes('battery_capacity');
        }
    },
    
    C3_5: {
        description: "Добавь в класс Car магический метод __str__, который возвращает строку с описанием машины.",
        requirements: "• Добавь метод __str__(self)\n• Верни f'Car(brand={self.brand}, year={self.year})'",
        hint: "def __str__(self): return f'Car(brand={self.brand}, year={self.year})'",
        type: "code",
        validator: (code) => {
            return code.includes('__str__') && 
                   code.includes('return') && 
                   code.includes('f"') && 
                   code.includes('self.brand');
        }
    },
    
    C3_6: {
        description: "В классе Car создай приватный атрибут __mileage и сделай к нему getter и setter через @property.",
        requirements: "• Создай self.__mileage = 0\n• @property def mileage(self): return self.__mileage\n• @mileage.setter def mileage(self, value): self.__mileage = value",
        hint: "@property; def mileage(self): return self.__mileage; @mileage.setter; def mileage(self, value): self.__mileage = value",
        type: "code",
        validator: (code) => {
            return code.includes('@property') && 
                   code.includes('__mileage') && 
                   code.includes('.setter') && 
                   code.includes('return');
        }
    },
    
    C3_7: {
        description: "Добавь статический метод is_valid_year(year), который проверяет, что год между 1886 и текущим.",
        requirements: "• @staticmethod\n• def is_valid_year(year)\n• return 1886 <= year <= текущий_год",
        hint: "import datetime; @staticmethod; def is_valid_year(year): return 1886 <= year <= datetime.datetime.now().year",
        type: "code",
        validator: (code) => {
            return code.includes('@staticmethod') && 
                   code.includes('is_valid_year') && 
                   code.includes('return') && 
                   (code.includes('datetime') || code.includes('2020'));
        }
    },
    
    C3_8: {
        description: "В методе set_mileage класса Car вызови ValueError, если пробег отрицательный.",
        requirements: "• def set_mileage(self, value)\n• if value < 0: raise ValueError('Пробег не может быть отрицательным')\n• self.__mileage = value",
        hint: "def set_mileage(self, value): if value < 0: raise ValueError('Пробег не может быть отрицательным'); self.__mileage = value",
        type: "code",
        validator: (code) => {
            return code.includes('raise ValueError') && 
                   code.includes('< 0') && 
                   code.includes('set_mileage') && 
                   code.includes('self.__mileage');
        }
    },
    
    C3_9: {
        description: "Создай класс BankAccount с атрибутом balance и методами deposit(), withdraw().",
        requirements: "• class BankAccount:\n• def __init__(self): self.balance = 0\n• def deposit(self, amount): self.balance += amount\n• def withdraw(self, amount): self.balance -= amount",
        hint: "class BankAccount: def __init__(self): self.balance = 0; def deposit(self, amount): self.balance += amount; def withdraw(self, amount): self.balance -= amount",
        type: "code",
        validator: (code) => {
            return code.includes('class BankAccount') && 
                   code.includes('deposit') && 
                   code.includes('withdraw') && 
                   code.includes('self.balance');
        }
    },
    
    C3_10: {
        description: "Создай два банковских счёта, положи на них деньги и выведи балансы.",
        requirements: "• Создай два объекта BankAccount\n• Используй deposit() для пополнения\n• Выведи балансы через print()",
        hint: "acc1 = BankAccount(); acc2 = BankAccount(); acc1.deposit(100); acc2.deposit(200); print(acc1.balance, acc2.balance)",
        type: "code",
        validator: (code) => {
            return code.includes('BankAccount()') && 
                   code.includes('deposit') && 
                   code.includes('balance') && 
                   code.includes('print');
        }
    },
    
    C3_11: {
        description: "В классе ElectricCar переопредели метод info(), добавив информацию о батарее.",
        requirements: "• def info(self):\n• Вызови super().info()\n• Добавь print(f'Емкость батареи: {self.battery_capacity} кВт·ч')",
        hint: "def info(self): super().info(); print(f'Емкость батареи: {self.battery_capacity} кВт·ч')",
        type: "code",
        validator: (code) => {
            return code.includes('def info') && 
                   code.includes('super().info()') && 
                   code.includes('battery_capacity') && 
                   code.includes('print');
        }
    },
    
    C3_12: {
        description: "Создай класс BookShelf, который хранит список книг. Реализуй __len__, возвращающий количество книг.",
        requirements: "• class BookShelf:\n• def __init__(self): self.books = []\n• def __len__(self): return len(self.books)",
        hint: "class BookShelf: def __init__(self): self.books = []; def __len__(self): return len(self.books)",
        type: "code",
        validator: (code) => {
            return code.includes('class BookShelf') && 
                   code.includes('__len__') && 
                   code.includes('return') && 
                   code.includes('self.books');
        }
    },
    
    C3_13: {
        description: "В класс BankAccount добавь метод класса from_string(), который создаёт счёт из строки '1000'.",
        requirements: "• @classmethod\n• def from_string(cls, balance_str)\n• return cls(int(balance_str))",
        hint: "@classmethod; def from_string(cls, balance_str): return cls(int(balance_str))",
        type: "code",
        validator: (code) => {
            return code.includes('@classmethod') && 
                   code.includes('from_string') && 
                   code.includes('cls') && 
                   code.includes('return');
        }
    },
    
    C3_14: {
        description: "Напиши программу 'Библиотека'. Создай классы Book (название, автор, год) и Library (список книг, методы добавления, удаления, поиска по автору). Реализуй сохранение и загрузку из файла. Покажи работу в консоли.",
        requirements: "• class Book: с атрибутами title, author, year\n• class Library: с методами add_book, remove_book, find_by_author, save_to_file, load_from_file\n• Продемонстрируй работу",
        hint: "Создай классы, методы добавления/удаления, поиска. Для сохранения используй json.dump, для загрузки — json.load.",
        type: "code",
        validator: (code) => {
            return code.includes('class Book') && 
                   code.includes('class Library') && 
                   code.includes('add_book') && 
                   (code.includes('json') || code.includes('open')) && 
                   code.includes('def');
        }
    },

    // ==================== ФИНАЛЬНОЕ ПОВТОРЕНИЕ (УРОК 99) ====================
    
    C3_15: {
        description: "Финальный экзамен. Напиши программу 'Библиотека' с классами Book и Library, методами добавления, удаления, поиска по автору, сохранением и загрузкой из файла. Покажи работу в консоли.",
        requirements: "• class Book: title, author, year\n• class Library: books список, add_book, remove_book, find_by_author, save_to_file, load_from_file\n• Продемонстрируй все методы",
        hint: "Используй json для сохранения/загрузки. В main создай библиотеку, добавь книги, найди по автору, сохрани, загрузи.",
        type: "code",
        validator: (code) => {
            return code.includes('class Book') && 
                   code.includes('class Library') && 
                   code.includes('json') && 
                   code.includes('def add') && 
                   code.includes('def find');
        }
    }
};

// Функция для получения задания по ID урока
export function getLesson(lessonId) {
    if (lessonsData[lessonId]) {
        return lessonsData[lessonId];
    }
    return {
        description: "Задание не найдено",
        requirements: "Проверьте ID урока",
        hint: "Обратитесь к списку уроков",
        type: "code",
        validator: () => false
    };
}