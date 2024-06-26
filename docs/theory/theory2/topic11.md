---
title: Масиви
---

Масив представляє набір однотипних даних. Оголошення масиву схоже на оголошення змінної за винятком, що після вказівки типу ставляться квадратні дужки:

	тип_змінної[] назва_масиву;

Наприклад, визначимо масив цілих чисел:

	int[] numbers;

Після визначення змінної масиву ми можемо надати їй певне значення:

	int[] nums = new int[4];

Тут спочатку ми оголосили масив nums, який зберігатиме дані типу int. Далі використовуючи операцію new, ми виділили пам'ять для 4 елементів масиву: new int[4]. Число 4 ще називається довжиною масиву. При такому визначенні всі елементи набувають значення за замовчуванням, яке передбачено для їх типу. Для типу int значення за замовчуванням - 0.

Також ми одразу можемо вказати значення для цих елементів:

	int[] nums2 = new int[4] { 1, 2, 3, 5 };
	 
	int[] nums3 = new int[] { 1, 2, 3, 5 };
	 
	int[] nums4 = new[] { 1, 2, 3, 5 };
	 
	int[] nums5 = {1, 2, 3, 5};

Усі перелічені вище методи будуть рівноцінні.

Подібним чином можна визначати масиви інших типів, наприклад масив значень типу string:

	string[] people = {"Tom", "Sam", "Bob"};

Починаючи з версії C# 12 для визначення масивів можна використовувати вирази колекцій, які передбачають укладання елементів масиву в квадратні дужки:

	int[] nums1 = [1, 2, 3, 5];
	int[] nums2 = []; // Порожній масив

## Індекси та одержання елементів масиву

Для звернення елементів масиву використовуються індекси. Індекс представляє номер елемента в масиві, при цьому нумерація починається з нуля, тому індекс першого елемента дорівнюватиме 0, індекс четвертого елемента - 3.

Використовуючи індекси, ми можемо отримати елементи масиву:

	int[] numbers = { 1, 2, 3, 5 };
	 
	// Отримання елемента масиву
	Console.WriteLine(numbers[3]); // 5
	 
	// отримання елемента масиву в змінну
	var n = numbers [1]; // 2
	Console.WriteLine(n); // 2

Також ми можемо змінити елемент масиву за індексом:

	int[] numbers = { 1, 2, 3, 5 };
	 
	// Змінимо другий елемент масиву
	numbers[1] = 505;
	 
	Console.WriteLine(numbers[1]); // 505

І оскільки у нас масив визначений лише для 4 елементів, то ми не можемо звернутися, наприклад, до шостого елемента. Якщо так спробуємо зробити, ми отримаємо помилку під час виконання:

	int[] numbers = { 1, 2, 3, 5 };
	 
	Console.WriteLine(numbers[6]); //! Помилка - у масиві лише 4 елементи

## Властивість Length та довжина масиву

Кожен масив має властивість Length, що зберігає довжину масиву. Наприклад, отримаємо довжину виществореного масива numbers:

	int[] numbers = { 1, 2, 3, 5 };
	 
	Console.WriteLine(numbers.Length); // 4

Для отримання довжини масиву після назви масиву через крапку вказується властивість Length: numbers.Length.

## Отримання елементів з кінця масиву

Завдяки наявності властивості Length, ми можемо обчислити індекс останнього елемента масиву - це довжина масиву - 1. Наприклад, якщо довжина масиву - 4 (тобто масив має 4 елементи), то індекс останнього елемента дорівнюватиме 3. І, використовуючи властивість Length, ми можемо легко отримати елементи з кінця масиву:

	int[] numbers = {1, 2, 3, 5};
	 
	Console.WriteLine(numbers[numbers.Length - 1]); // 5 - перший з кінця або останній елемент
	Console.WriteLine(numbers[numbers.Length - 2]); // 3 - другий з кінця чи передостанній елемент
	Console.WriteLine(numbers[numbers.Length - 3]); // 2 – третій елемент з кінця

Однак при подібному підході вирази типу numbers.Length - 1, сенс яких полягає в тому, щоб отримати якийсь певний елемент з кінця масиву, обтяжують код. І, починаючи, з версії C# 8.0 в мову було додано спеціальний оператор ^, за допомогою якого можна задати індекс відносно кінця колекції.

Перепишемо попередній приклад, застосовуючи оператор ^:

	int[] numbers = {1, 2, 3, 5};
	 
	Console.WriteLine(numbers[^1]); // 5 - перший з кінця або останній елемент
	Console.WriteLine(numbers[^2]); // 3 - другий з кінця чи передостанній елемент
	Console.WriteLine(numbers[^3]); // 2 – третій елемент з кінця

## Перебір масивів

Для перебору масивів можна використовувати різні типи циклів. Наприклад, цикл foreach:

	int[] numbers = { 1, 2, 3, 4, 5 };
	foreach (int i in numbers)
	{
	     Console.WriteLine(i);
	}

Тут як контейнер виступає масив даних типу int. Тому ми оголошуємо змінну з типом int

Подібні дії ми можемо зробити і за допомогою циклу for:

	int[] numbers = { 1, 2, 3, 4, 5 };
	for (int i = 0; i < numbers.Length; i++)
	{
	     Console.WriteLine(numbers[i]);
	}

У той же час цикл for більш гнучкий у порівнянні з foreach. Якщо foreach послідовно витягує елементи контейнера і тільки для читання, то в циклі for ми можемо перескакувати на кілька елементів вперед залежно від збільшення лічильника, а також можемо змінювати елементи:

	int[] numbers = { 1, 2, 3, 4, 5 };
	for (int i = 0; i < numbers.Length; i++)
	{
	     numbers[i] = numbers[i] * 2;
	     Console.WriteLine(numbers[i]);
	}
Також можна використовувати і другі види циклів, наприклад, while:

	int[] numbers = { 1, 2, 3, 4, 5 };
	int i = 0;
	while(i < numbers.Length)
	{
	     Console.WriteLine(numbers[i]);
	     i++;
	}

## Багатовимірні масиви

Масиви характеризуються таким поняттям як ранг чи кількість вимірів. Вище ми розглядали масиви, які мають один вимір (тобто їх ранг дорівнює 1) – такі масиви можна представляти у вигляді ряду (рядка чи стовпця) елемента. Але масиви також бувають багатовимірними. У таких масивів кількість вимірів (тобто ранг) більша за 1.

Масиви які мають два виміри (ранг дорівнює 2) називають двовимірними. Наприклад, створимо одномірний та двомірний масиви, які мають однакові елементи:

	int[] nums1 = new int[] { 0, 1, 2, 3, 4, 5};
	 
	int[,] nums2 = { { 0, 1, 2 }, { 3, 4, 5 } };

Візуально обидва масиви можна представити так:

Одновимірний масив nums1

	0 | 1 | 2 | 3 | 4 | 5

Двовимірний масив nums2

	0 | 1 | 2
	3 | 4 | 5

Оскільки масив nums2 двовимірний, він є простою таблицею. Усі можливі способи визначення двовимірних масивів:

	int[,] nums1;
	int[,] nums2 = new int[2, 3];
	int[,] nums3 = new int[2, 3] { { 0, 1, 2 }, { 3, 4, 5 } };
	int[,] nums4 = new int[,] { { 0, 1, 2 }, { 3, 4, 5 } };
	int[,] nums5 = new [,]{ { 0, 1, 2 }, { 3, 4, 5 } };
	int[,] nums6 = { { 0, 1, 2 }, { 3, 4, 5 } };

Масиви можуть мати і більшу кількість вимірів. Оголошення тривимірного масиву могло б виглядати так:

	int[,,] nums3 = new int[2, 3, 4];

Відповідно можуть бути і чотиривимірні масиви та масиви з великою кількістю вимірів. Але на практиці зазвичай використовуються одновимірні та двомірні масиви.

Певну складність може становити перебір багатовимірного масиву. Насамперед треба враховувати, що довжина такого масиву – це сукупна кількість елементів.

	int[,] numbers = { { 1, 2, 3 }, { 4, 5, 6 }};
	foreach (int i in numbers)
	     Console.Write($"{i}");
	 
У даному випадку довжина масиву номерів дорівнює 6. І цикл foreach виводить всі елементи масиву в рядок:

	1 2 3 4 5 6
	
Але якщо ми хочемо окремо пробігтися по кожному рядку в таблиці? В цьому випадку треба одержати кількість елементів у розмірності. Зокрема, кожен масив має метод GetUpperBound(номер_розмірності), який повертає індекс останнього елемента у певній розмірності. І якщо ми говоримо безпосередньо про двомірний масив, то перша розмірність (з індексом 0) по суті це і є таблиця. І за допомогою виразу

	numbers.GetUpperBound(0) + 1

можна отримати кількість рядків таблиці, поданої двовимірним масивом. А через

	numbers.Length / кількість_рядків

можна отримати кількість елементів у кожному рядку:

	int[,] numbers = { { 1, 2, 3 }, { 4, 5, 6 }};
	 
	int rows = numbers.GetUpperBound(0) + 1; // кількість рядків
	int columns = numbers.Length/rows; // кількість стовпців
	// або так
	// int columns = numbers.GetUpperBound(1) + 1;
	 
	for (int i = 0; i < rows; i++)
	{
	     for (int j = 0; j <columns; j++)
	     {
	         Console.Write($"{numbers[i, j]} \t");
	     }
	     Console.WriteLine();
	}
	
	1 | 2 | 3
	4 | 5 | 6
	
## Масив масивів

Від багатовимірних масивів треба відрізняти масив масивів або так званий зубчастий масив:

	int[][] nums = new int[3][];
	nums[0] = new int[2] {1, 2}; // Виділяємо пам'ять для першого підмасиву
	nums[1] = new int[3] {1, 2, 3}; // Виділяємо пам'ять для другого підмасиву
	nums[2] = new int[5] {1, 2, 3, 4, 5}; // виділяємо пам'ять для третього підмасиву

Тут дві групи квадратних дужок вказують, що це масив масивів, тобто такий масив, який у свою чергу містить інші масиви. Причому довжина масиву вказується лише у перших квадратних дужках, всі наступні квадратні дужки мають бути порожні: new int\[3]\[]. В даному випадку у нас масив nums містить три масиви. Причому розмірність кожного з цих масивів може збігатися.

Альтернативне визначення масиву масивів:

	int[][] numbers = {
	     new int[] { 1, 2 },
	     new int[] { 1, 2, 3 },
	     new int[] { 1, 2, 3, 4, 5 }
	};

Зубчастий масив nums
	1 | 2
	1 | 2 | 3
	1 | 2 | 3 | 4 | 5

Використовуючи вкладені цикли, можна перебирати зубчасті масиви. Наприклад:

	int[][] numbers = new int[3][];
	numbers[0] = new int[] { 1, 2 };
	numbers[1] = new int[] { 1, 2, 3 };
	numbers[2] = new int[] { 1, 2, 3, 4, 5 };
	foreach(int[] row in numbers)
	{
	     foreach(int number in row)
	     {
	         Console.Write($"{number} \t");
	     }
	     Console.WriteLine();
	}
	 
	// Перебір за допомогою циклу for
	for (int i = 0; i<numbers.Length;i++)
	{
	     for (int j = 0; j<numbers[i].Length; j++)
	     {
	         Console.Write($"{numbers[i][j]} \t");
	     }
	     Console.WriteLine();
	}

Основні поняття масивів
Підсумовуємо основні поняття масивів:

Ранг (rank): кількість вимірів масиву

Довжина виміру (dimension length): довжина окремого виміру масиву

Довжина масиву (array length): кількість всіх елементів масиву

Наприклад, візьмемо масив

	int[,] numbers = new int[3, 4];

Масив numbers двомірний, тобто він має два виміри, тому його ранг дорівнює 2. Довжина першого виміру - 3, довжина другого виміру - 4. Довжина масиву (тобто загальна кількість елементів) - 12.