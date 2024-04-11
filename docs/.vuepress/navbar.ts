import { navbar } from "vuepress-theme-hope";

export default navbar([
	"/",
	{
		text: "Теорія",
		icon: "book",
		prefix: "/theory/",
		children: [
			{
				text: "Розділ1. Введення в С#",
				icon: "lightbulb",
				prefix: "theory1/",
				children: [
					{
						text: "Опис розділу",
						link: "#"
					},
					{
						text: "Тема 1. Мова С# та платформа .NET",
						link: "topic1.md"
					},
				]
			},
			{
				text: "Розділ 2. Основи синтаксису мови C#",
				icon: "lightbulb",
				prefix: "theory2/",
				children: [
					{
						text: "Опис розділу",
						link: "#"
					},
					{
						text: "Тема 1. Структура програми",
						link: "topic1.md"
					},
					{
						text: "Тема 2. Змінні та константи",
						link: "topic2.md"
					},
					{
						text: "Тема 3. Літерали",
						link: "topic3.md"
					},
					{
						text: "Тема 4. Типи даних",
						link: "topic4.md"
					},
					{
						text: "Тема 5. Консольний ввід-вивід",
						link: "topic5.md"
					},
					{
						text: "Тема 6. Арифметичні операції",
						link: "topic6.md"
					},
					{
						text: "Тема 7. Операції присвоєння",
						link: "topic7.md"
					},
					{
						text: "Тема 8. Умовні вирази",
						link: "topic8.md"
					},
					{
						text: "Тема 9. Конструкція if...else та тернарна операція",
						link: "topic9.md"
					},
					{
						text: "Тема 10. Цикли",
						link: "topic10.md"
					},
					{
						text: "Тема 11. Масиви",
						link: "topic11.md"
					},
					{
						text: "Тема 12. Методи",
						link: "topic12.md"
					},
					{
						text: "Тема 13. Параметри методів",
						link: "topic13.md"
					},
					{
						text: "Тема 14. Повертання значення та оператор return",
						link: "topic14.md"
					}
				]
			}
		]
	},
	{
		text: "Практичні роботи",
		icon: "pen",
		prefix: "/practicew/",
		children: [
			{
				text: "Практична робота №1",
				link: "pw1"
			},
			{
				text: "Практична робота №2",
				link: "pw2"
			},
			{
				text: "Практична робота №3",
				link: "pw3"
			},
			{
				text: "Практична робота №4",
				link: "pw4"
			}
		]
	},
	{
		text: "Домашні роботи",
		icon: "home",
		prefix: "/homew/",
		children: [
			{
				text: "Домашня робота №1",
				link: "hw1"
			},
			{
				text: "Домашня робота №2",
				link: "hw2"
			},
			{
				text: "Домашня робота №3",
				link: "hw3"
			},
			{
				text: "Домашня робота №4",
				link: "hw4"
			}
		]
	}
]);
