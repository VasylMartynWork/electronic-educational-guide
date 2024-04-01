---
title: Мова C# і платформа .NET
---

## Вступ

На сьогоднішній момент мова програмування C# - одна з найпотужніших мов, що швидко розвиваються і затребувані в ІТ-галузі. Зараз на ній пишуться різні програми: від невеликих десктопних програм до великих веб-порталів і веб-сервісів, що обслуговують щодня мільйони користувачів.

C# вже не молода мова і, як і вся платформа .NET, вже пройшла великий шлях. Перша версія мови вийшла разом із релізом Microsoft Visual Studio .NET у лютому 2002 року. Поточною версією мови є версія C# 12, яка вийшла 14 листопада 2023 разом із релізом .NET 8.

C# є мовою із Сі-подібним синтаксисом і близька у цьому відношенні до C++ та Java. Тому якщо ви знайомі з однією з цих мов, то оволодіти C# буде легше.

C# є об'єктно-орієнтованою і в цьому плані багато перейняла у Java та С++. Наприклад, C# підтримує поліморфізм, успадкування, перевантаження операторів, статичну типізацію. Об'єктно-орієнтований підхід дозволяє вирішити завдання з побудови великих, але в той же час гнучких, масштабованих додатків. І C# продовжує активно розвиватися і з кожною новою версією з'являється все більше цікавих функціональностей.

## Роль платформи .NET

Коли говорять C#, часто мають на увазі технології платформи .NET (Windows Forms, WPF, ASP.NET, .NET MAUI). І навпаки, коли говорять .NET, нерідко мають на увазі C#. Однак, хоча ці поняття пов'язані, ототожнювати їх не можна. Мова C# була створена спеціально для роботи з фреймворком .NET, проте саме поняття .NET дещо ширше.

Якось Білл Гейтс сказав, що платформа .NET – це найкраще, що створила компанія Microsoft. Можливо, він мав рацію. Фреймворк .NET представляє потужну платформу створення додатків. Можна виділити такі основні риси:

- **Підтримка кількох мов**. Основою платформи є загальномовне середовище виконання Common Language Runtime (CLR), завдяки чому .NET підтримує декілька мов: разом з C# також VB.NET, C++, F#, а також різні діалекти інших мов, прив'язані до .NET, наприклад, Delphi.NET. При компіляції код будь-якої з цих мов компілюється в збірку на загальній мові CIL (Common Intermediate Language) - свого роду асемблер платформи .NET. Тому за певних умов ми можемо зробити окремі модулі однієї програми окремими мовами.

- **Кросплатформеність.** .NET є платформою, що переноситься (з деякими обмеженнями). Наприклад, остання версія платформи на даний момент – .NET 8 підтримується на більшості сучасних ОС Windows, MacOS, Linux. Використовуючи різні технології на платформі .NET, можна розробляти програми на мові C# для різних платформ - Windows, MacOS, Linux, Android, iOS, Tizen.

- **Потужна бібліотека класів.** .NET представляє єдину для всіх підтримуваних мов бібліотеку класів. І який би додаток ми не збиралися писати на C# - текстовий редактор, чат або складний веб-сайт - так чи інакше ми використовуємо бібліотеку класів .NET.

- **Різноманітність технологій.** Загальномовне середовище виконання CLR та базова бібліотека класів є основою цілого стеку технологій, які розробники можуть задіяти при побудові тих чи інших додатків. Наприклад, для роботи з базами даних у цьому стеку технологій призначено технологію ADO.NET та Entity Framework Core. Для побудови графічних додатків з багатим насиченим інтерфейсом – технологія WPF та WinUI, для створення більш простих графічних додатків – Windows Forms. Для розробки кросплатформових мобільних та десктопних програм - Xamarin/MAUI. Для створення веб-сайтів та веб-додатків - ASP.NET тощо. До цього варто додати Blazor - фреймворк, що розвивається і набирає популярність, який працює поверх .NET і який дозволяє створювати веб-додатки як на стороні сервера, так і на стороні клієнта. А в майбутньому підтримуватиме створення мобільних додатків та, можливо, десктоп-додатків.

- **Продуктивність.** Згідно з рядом тестів веб-програми на .NET у ряді категорій сильно випереджають веб-програми, побудовані за допомогою інших технологій. Програми на .NET у принципі відрізняються високою продуктивністю.

Також слід відзначити таку особливість мови C# і фреймворку .NET, як автоматичне збирання сміття. А це означає, що нам здебільшого не доведеться, на відміну від С++, дбати про звільнення пам'яті. Вищезгадане загальномовне середовище CLR саме викличе збирач сміття та очистить пам'ять.

## .NET Framework та .NET 8
Варто зазначити, що .NET тривалий час розвивався переважно як платформа для Windows під назвою .NET Framework. У 2019 році вийшла остання версія цієї платформи - .NET Framework 4.8. Вона більше не розвивається.

З 2014 року Microsoft став розвивати альтернативну платформу - .NET Core, яка вже призначалася для різних платформ і повинна була увібрати в себе всі можливості застарілого .NET Framework і додати нову функціональність. Потім Microsoft послідовно випустив ряд версій цієї платформи: .NET Core 1, .NET Core 2, .NET Core 3, .NET 5. І поточною версією є платформа .NET 8. Тому слід розрізняти .NET Framework, який переважно для Windows, і кроссплатформенний .NET 8.

## Керований та некерований код
Нерідко програму, створену на C#, називають **керованим кодом** (managed code). Що це означає? А це означає, що ця програма створена на основі платформи .NET і тому управляється загальномовним середовищем CLR, яке завантажує програму і при необхідності очищує пам'ять. Але є також програми, наприклад, створені мовою С++, які компілюються не в загальну мову CIL, як C#, VB.NET чи F#, а в звичайний машинний код. У цьому випадку, .NET не керує програмою.

У той же час платформа .NET надає можливості для взаємодії з некерованим кодом.

## JIT-компіляція
Як вище писалося, код C# компілюється в додатки або збірки з розширеннями exe або dll мовою CIL. Далі при запуску на виконання подібної програми відбувається JIT-компіляція (Just-In-Time) у машинний код, який потім виконується. При цьому, оскільки наша програма може бути великою і містити купу інструкцій, в даний момент компілюватиметься лише та частина програми, до якої безпосередньо йде звернення. Якщо ми звернемося до іншої частини коду, то вона буде скомпільована з CIL до машинного коду. При цьому вже скомпільована частина програми зберігається до завершення роботи програми. У результаті це підвищує продуктивність.