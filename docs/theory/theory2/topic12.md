---
title: Методи
---

Якщо змінні зберігають деякі значення, то методи містять набір інструкцій, які виконують певні дії. Насправді метод - це іменований блок коду, який виконує деякі дії.

Загальне визначення методів виглядає так:

\[модифікатори] тип_значення_яке_повернеться назва_метода (\[параметри])
{
     // Тіло методу
}
Модифікатори та параметри необов'язкові.

Раніше ми вже використовували як мінімум один метод – Console.WriteLine(), який виводить інформацію на консоль. Тепер розглянемо як ми можемо створювати свої методи.

## Визначення методу

Визначимо один метод:

	void SayHello()
	{
	     Console.WriteLine("Hello");
	}
	
Тут визначено метод SayHello, що виводить деяке повідомлення. До назв методів пред'являються у принципі ті самі вимоги, як і до назв змінних. Однак, як правило, назви методів починаються з великої літери.

Перед назвою методу йде тип даних, що повертається. Тут це тип void, який вказує на те, що фактично нічого не повертає, він просто робить деякі дії.

Після назви методу у дужках йде перелік параметрів. Але в даному випадку дужки порожні, що означає, що метод не приймає жодних параметрів.

Після списку параметрів у круглих дужках йде блок коду, який представляє набір інструкцій, що виконуються методом. В даному випадку блок методу SayHello містить лише одну інструкцію, яка виводить рядок на консоль:

	Console.WriteLine("Hello");

Але якщо ми запустимо цей проект, то ми не побачимо жодного рядка, який має виводити метод SayHello. Тому що після визначення методу, його ще треба викликати, щоб він виконав свою роботу.

## Виклик методів

Щоб використати метод SayHello, нам треба його викликати. Для виклику методу вказується його ім'я, після якого у дужках йдуть значення його параметрів (якщо метод приймає параметри).

	назва_метода (значення_для_параметрів_методу);

Наприклад, виклик методу SayHello виглядатиме так:

	SayHello();

Оскільки метод не приймає жодних параметрів, після назви методу йдуть порожні дужки.

Об'єднаємо визначення та виклик методу:

	void SayHello()
	{
	     Console.WriteLine("Hello");
	}
 
	SayHello(); // Hello
	SayHello(); // Hello

Консольний вивід програми:

	Hello
	Hello

Перевагою методів є те, що їх можна повторно та багаторазово викликати у різних частинах програми. Наприклад, у прикладі вище двічі викликається метод SayHello.

У цьому разі немає різниці, спочатку визначається метод, а потім викликається чи навпаки. Наприклад, ми могли б написати і так:

	SayHello(); // Hello
	SayHello(); // Hello
	 
	void SayHello()
	{
	     Console.WriteLine("Hello");
	}

Визначимо та викличемо ще кілька методів:

	void SayHelloUa()
	{
	     Console.WriteLine("Привіт");
	}
	void SayHelloEn()
	{
	     Console.WriteLine("Hello");
	}
	void SayHelloFr()
	{
	     Console.WriteLine("Salut");
	}
	 
	 
	string language = "en";
	 
	switch (language)
	{
	     case "en":
	         SayHelloEn();
	         break;
	     case "ua":
	         SayHelloUa();
	         break;
	     case "fr":
	         SayHelloFr();
	         break;
	}

Тут визначено три методи SayHelloUa(), SayHelloEn() і SayHelloFr(), які також мають тип void, не приймають жодних параметрів і виводить деякий рядок на консоль. Умовно кажучи, вони виводять вітання певною мовою.

У конструкції switch перевіряється значення змінної language, яка умовно зберігає код мови, і залежно від її значення викликається певний метод. Так, у цьому випадку на консоль буде виведено

	Hello

## Скорочений запис методів

Якщо метод як тіло визначає лише одну інструкцію, ми можемо скоротити визначення методу. Наприклад, припустимо, у нас є метод:

	void SayHello()
	{
	     Console.WriteLine("Hello");
	}

Ми можемо його скоротити так:

	void SayHello() => Console.WriteLine("Hello");

Тобто після списку параметрів ставиться оператор =>, після якого йде інструкція, що виконується.