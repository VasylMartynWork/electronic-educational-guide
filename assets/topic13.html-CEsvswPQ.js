import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as o,e as t}from"./app-CYOwO63N.js";const r={},i=t(`<p>В минулій темі було визначено метод SayHello, який виводить на консоль деяке повідомлення:</p><pre><code>void SayHello()
{
     Console.WriteLine(&quot;Hello&quot;);
}

SayHello(); // Hello
</code></pre><p>Але мінусом подібного методу є те, що він виводить те саме повідомлення. І було б непогано, якби ми могли б динамічно визначати, яке повідомлення буде виводити метод на екран, тобто передати з-за методу це повідомлення. Для цього в C# ми можемо використовувати параметри.</p><p>Параметри дозволяють передати до методу деякі вхідні дані. Параметри визначаються через кому в дужках після назви методу у вигляді:</p><pre><code>тип_метода ім&#39;я_метода (тип_параметра1 параметр1, тип_параметра2 параметр2, ...)
{
     // дії методу
}
</code></pre><p>Визначення параметра складається з двох частин: спочатку йде тип параметра, а потім його ім&#39;я.</p><p>Наприклад, визначимо метод PrintMessage, який отримує повідомлення, що виводиться, ззовні:</p><pre><code>void PrintMessage(string message)
{
     Console.WriteLine(message);
}

PrintMessage(&quot;Hello World!&quot;); // Hello world!
PrintMessage(&quot;Hello C#&quot;); // Hello C#
</code></pre><p>Тут метод PrintMessage() приймає один параметр, який називається message та має тип string.</p><p>Щоб виконати метод, який має параметри, під час виклику після імені методу в дужках йому передаються значення для його параметрів, наприклад:</p><pre><code>PrintMessage(&quot;Hello World!&quot;);
</code></pre><p>Тут параметру message передається рядок Hello World!. Значення, що передаються параметрам, ще називають аргументами. Тобто рядок &quot;Hello World!&quot;, що передається, в даному випадку є аргументом.</p><p>Іноді можна зустріти такі визначення як формальні параметри та фактичні параметри. Формальні параметри - це власне параметри методу (у разі message), а фактичні параметри - значення, які передаються формальним параметрам. Тобто фактичні параметри – це є аргументи методу.</p><p>Визначимо ще один метод, який складає два числа:</p><pre><code>void Sum(int x, int y)
{
     int result = x + y;
     Console.WriteLine($&quot;{x} + {y} = {result}&quot;);
}
 
Sum(10, 15); // 10 + 15 = 25
</code></pre><p>Метод Sum має два параметри: x та y. Обидва параметри є тип int. Тому при виклику цього методу нам обов&#39;язково треба передати на місце цих параметрів два числа. Усередині методу обчислюється сума переданих чисел та виводиться на консоль.</p><p>При виклику методу Sum значення передаються параметрам за позицією. Наприклад, у виклику Sum(10, 15) число 10 передається параметру x, а число 15 - параметру y.</p><p>Також параметри можуть використовуватися у скороченій версії методу:</p><pre><code>void Sum(int x, int y) =&gt; Console.WriteLine($&quot;{x} + {y} = { x + y }&quot;);

Sum(10, 15); // 10 + 15 = 25
</code></pre><p>Значення, що передаються параметру, можуть представляти значення змінних або результат роботи складних виразів, які повертають деяке значення:</p><pre><code>void Sum(int x, int y) =&gt; Console.WriteLine($&quot;{x} + {y} = { x + y }&quot;);
 
int a = 10, b = 15, c = 6;
Sum(a, b); // 10 + 15 = 25
Sum(3, c); // 3 + 6 = 9
Sum(14, 4 + c); // 14 + 10 = 24
</code></pre><p>Якщо параметрами методу передаються значення змінних, то змінним має бути присвоєно значення. Наприклад, наступна програма не скомпілюється:</p><pre><code>void Sum(int x, int y)
{
     Console.WriteLine($&quot;{x} + {y} = { x + y}&quot;);
}
 
int a;
int b = 15;
Sum(a, b); //! Помилка
</code></pre><h2 id="відповідність-параметрів-та-аргументів-за-типом-даних" tabindex="-1"><a class="header-anchor" href="#відповідність-параметрів-та-аргументів-за-типом-даних"><span>Відповідність параметрів та аргументів за типом даних</span></a></h2><p>При передачі значень параметрам важливо враховувати тип параметрів: між аргументами та параметрами має бути відповідність типу. Наприклад:</p><pre><code>void PrintPerson(string name, int age)
{
     Console.WriteLine($&quot;Name: {name} Age: {age}&quot;);
}
 
PrintPerson(&quot;Tom&quot;, 24); // Name: Tom Age: 24
</code></pre><p>У цьому випадку перший параметр методу PrintPerson() представляє тип string, тому під час виклику методу ми маємо передати цьому параметру значення типу string, тобто рядок. Другий параметр є тип int, тому повинні передати йому ціле число, яке відповідає типу int.</p><pre><code>PrintPerson(&quot;Tom&quot;, 24);
</code></pre><p>Також ми можемо передати параметри значення тих типів, які автоматично можуть бути перетворені на тип параметрів. Наприклад:</p><pre><code>void PrintPerson(string name, int age)
{
     Console.WriteLine($&quot;Name: {name} Age: {age}&quot;);
}
 
byte b = 37;
PrintPerson(&quot;Tom&quot;, b); // Назви: Tom Age: 37
</code></pre><p>Тут параметр типу int передається значення типу byte, але компілятор може автоматично перетворити значення типу byte до типу int. Тому тут помилок не виникне.</p><p>Дані інших типів ми не можемо передати в параметри. Наприклад, наступний виклик методу PrintPerson буде помилковим:</p><pre><code>PrintPerson(45, &quot;Bob&quot;); // Помилка! невідповідність значень типу параметрів
</code></pre><h2 id="необов-язкові-параметри" tabindex="-1"><a class="header-anchor" href="#необов-язкові-параметри"><span>Необов&#39;язкові параметри</span></a></h2><p>За замовчуванням під час виклику методу необхідно надати значення для всіх його параметрів. Але C# дозволяє використовувати необов&#39;язкові параметри. Для таких параметрів нам необхідно оголосити значення за замовчуванням. Також слід враховувати, що після необов&#39;язкових параметрів усі наступні параметри також мають бути необов&#39;язковими:</p><pre><code>void PrintPerson(string name, int age = 1, string company = &quot;Undefined&quot;)
{
     Console.WriteLine($&quot;Name: {name} Age: {age} Company: {company}&quot;);
}
</code></pre><p>Тут параметри age та company є необов&#39;язковими, оскільки їм надано значення. Тому при виклику методу ми можемо не передавати їм дані:</p><pre><code>void PrintPerson(string name, int age = 1, string company = &quot;Undefined&quot;)
{
     Console.WriteLine($&quot;Name: {name} Age: {age} Company: {company}&quot;);
}
 
PrintPerson(&quot;Tom&quot;, 37, &quot;Microsoft&quot;); // Назва: Tom Age: 37 Company: Microsoft
PrintPerson(&quot;Tom&quot;, 37); // Назва: Tom Age: 37 Company: Undefined
PrintPerson(&quot;Tom&quot;); // Назва: Tom Age: 1 Company: Undefined
</code></pre><p>Консольний вивід програми:</p><pre><code>Name: Tom Age: 37 Company: Microsoft
Name: Tom Age: 37 Company: Undefined
Name: Tom Age: 1 Company: Undefined
</code></pre><h2 id="іменовані-параметри" tabindex="-1"><a class="header-anchor" href="#іменовані-параметри"><span>Іменовані параметри</span></a></h2><p>У попередніх прикладах при виклику методів значення параметрів передавалися в порядку оголошення цих параметрів у методі. Тобто аргументи передавалися параметрам відносно позиції. Але ми можемо порушити такий порядок, використовуючи іменовані параметри:</p><pre><code>void PrintPerson(string name, int age = 1, string company = &quot;Undefined&quot;)
{
     Console.WriteLine($&quot;Name: {name} Age: {age} Company: {company}&quot;);
}
 
PrintPerson(&quot;Tom&quot;, company:&quot;Microsoft&quot;, age: 37); // Назва: Tom Age: 37 Company: Microsoft
PrintPerson(age:41, name: &quot;Bob&quot;); // Назви: Bob Age: 41 Company: Undefined
PrintPerson(company:&quot;Google&quot;, name:&quot;Sam&quot;); // Назва: Sam Age: 1 Company: Google
</code></pre><p>Для передачі значень параметрам імені при виклику методу вказується ім&#39;я параметра і через двокрапку його значення: name:&quot;Tom&quot;</p><p>Консольний вивід програми:</p><pre><code>Name: Tom Age: 37 Company: Microsoft
Name: Bob Age: 41 Company: Undefined
Name: Sam Age: 1 Company: Google
</code></pre>`,46),a=[i];function p(m,s){return n(),o("div",null,a)}const l=e(r,[["render",p],["__file","topic13.html.vue"]]),u=JSON.parse(`{"path":"/theory/theory2/topic13.html","title":"Параметри методу","lang":"en-US","frontmatter":{"title":"Параметри методу"},"headers":[{"level":2,"title":"Відповідність параметрів та аргументів за типом даних","slug":"відповідність-параметрів-та-аргументів-за-типом-даних","link":"#відповідність-параметрів-та-аргументів-за-типом-даних","children":[]},{"level":2,"title":"Необов'язкові параметри","slug":"необов-язкові-параметри","link":"#необов-язкові-параметри","children":[]},{"level":2,"title":"Іменовані параметри","slug":"іменовані-параметри","link":"#іменовані-параметри","children":[]}],"git":{"createdTime":1712559663000,"updatedTime":1712875693000,"contributors":[{"name":"VasylMartynWork","email":"killermbjustthink@gmail.com","commits":2}]},"readingTime":{"minutes":3.03,"words":908},"filePathRelative":"theory/theory2/topic13.md","localizedDate":"April 8, 2024"}`);export{l as comp,u as data};
