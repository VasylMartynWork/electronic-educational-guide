import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as t,e as r}from"./app-CYOwO63N.js";const o={},s=r(`<p>Метод може повертати значення будь-якого результату. Методи з типом void не повертають жодного значення. Вони просто виконують деякі дії.</p><p>Але методи можуть повертати деяке значення. Для цього застосовується оператор return, після якого йде значення, що повертається:</p><pre><code>return значення, що повертається;
</code></pre><p>Наприклад, визначимо метод, який повертає значення типу string:</p><pre><code>string GetMessage()
{
     return &quot;Hello&quot;;
}
</code></pre><p>Метод GetMessage має тип string, отже він повинен повернути рядок. Тому в тілі методу використовується оператор return, після якого вказаний рядок, що повертається.</p><p>При цьому методи, які як тип, що повертається, мають будь-який тип, крім void, обов&#39;язково повинні використовувати оператор return для повернення значення. Наприклад, таке визначення методу некоректне:</p><pre><code>string GetMessage()
{
     Console.WriteLine(&quot;Hello&quot;);
}
</code></pre><p>Також між типом методу, що повертається, і значенням, що повертається після оператора return повинна бути відповідність. Наприклад, в наступному випадку тип, що повертається - string, але метод повертає число (тип int), тому таке визначення методу некоректно:</p><pre><code>string GetMessage()
{
     return 3; // Помилка! Метод повинен повертати рядок, а не число
}
</code></pre><p>Результати методів, які повертають значення, ми можемо присвоїти змінним або використовувати іншим чином у програмі:</p><pre><code>string GetMessage()
{
     return &quot;Hello&quot;;
}

string message = GetMessage(); // Отримуємо результат методу в змінну message
Console.WriteLine(message); // Hello
</code></pre><p>Метод GetMessage() повертає значення типу string. Тому ми можемо надати це значення будь-якій змінній типу string: string message = GetMessage();</p><p>Або навіть передати значення параметру іншого методу:</p><pre><code>string GetMessage()
{
     return &quot;Hello&quot;;
}
void PrintMessage(string message)
{
     Console.WriteLine(message);
}
PrintMessage(GetMessage());
</code></pre><p>У виклику PrintMessage(GetMessage()) спочатку викликається метод GetMessage() і його результат передається параметру message методу PrintMessage</p><p>Після оператора return можна також вказувати складні вирази або виклики інших методів, які повертають певний результат. Наприклад, визначимо метод, який повертає суму чисел:</p><pre><code>int Sum(int x, int y)
{
     return x + y;
}
 
int result = Sum (10, 15); // 25
Console.WriteLine(result); // 25
 
Console.WriteLine(Sum(5, 6)); // 11
</code></pre><p>Метод Sum() має тип int, отже він повинен повернути значення типу int - ціле число. Тому в тілі методу використовується оператор return, після якого вказано число, що повертається (у даному випадку результат суми змінних x і y).</p><h2 id="скорочена-версія-методів-із-результатом" tabindex="-1"><a class="header-anchor" href="#скорочена-версія-методів-із-результатом"><span>Скорочена версія методів із результатом</span></a></h2><p>Також ми можемо скорочувати методи, що повертають значення:</p><pre><code>string GetMessage()
{
     return &quot;hello&quot;;
}
</code></pre><p>аналогічний наступному методу:</p><pre><code>string GetMessage() =&gt; &quot;hello&quot;;
</code></pre><p>А метод</p><pre><code>int Sum(int x, int y)
{
     return x + y;
}
</code></pre><p>аналогічний наступному методу:</p><pre><code>int Sum(int x, int y) =&gt; x + y;
</code></pre><h2 id="вихід-із-методу" tabindex="-1"><a class="header-anchor" href="#вихід-із-методу"><span>Вихід із методу</span></a></h2><p>Оператор return як повертає значення, так і здійснює вихід із методу. Тому він має визначатися після решти інструкцій. Наприклад:</p><pre><code>string GetHello()
{
     return &quot;Hello&quot;;
     Console.WriteLine(&quot;After return&quot;);
}
</code></pre><p>З погляду синтаксису даний метод коректний, проте його інструкція Console.WriteLine(&quot;After return&quot;) не має сенсу - вона ніколи не виконається, так як до її виконання оператор return поверне значення і здійснить вихід із методу.</p><p>Однак ми можемо використовувати оператор return і в методах з типом void. У цьому випадку після оператора return не ставиться ніякого значення, що повертається (адже метод нічого не повертає). Типова ситуація - залежно від визначених умов зробити вихід із методу:</p><pre><code>void PrintPerson(string name, int age)
{
     if(age &gt; 120 || age &lt; 1)
     {
         Console.WriteLine(&quot;Неприпустимий вік&quot;);
         return;
     }
     Console.WriteLine($&quot;Ім&#39;я: {name} Вік: {age}&quot;);
}
 
PrintPerson(&quot;Tom&quot;, 37); // Ім&#39;я: Tom Вік: 37
PrintPerson(&quot;Dunkan&quot;, 1234); // Неприпустимий вік
</code></pre><p>Тут метод PrintPerson() як параметри приймає ім&#39;я та вік користувача. Однак у методі спочатку ми перевіряємо, чи вік відповідає деякому діапазону (менше 120 і більше 0). Якщо вік знаходиться поза цим діапазоном, то виводимо повідомлення про неприпустимий вік і за допомогою оператора return виходимо з методу. Після цього метод закінчує свою роботу.</p><p>Однак якщо вік коректний, виводимо інформацію про користувача на консоль. Консольний вивід:</p><pre><code>Ім&#39;я: Tom Вік: 37
Неприпустимий вік
</code></pre>`,37),i=[s];function p(a,u){return n(),t("div",null,i)}const d=e(o,[["render",p],["__file","topic14.html.vue"]]),g=JSON.parse('{"path":"/theory/theory2/topic14.html","title":"Повернення значення та оператор return","lang":"en-US","frontmatter":{"title":"Повернення значення та оператор return"},"headers":[{"level":2,"title":"Скорочена версія методів із результатом","slug":"скорочена-версія-методів-із-результатом","link":"#скорочена-версія-методів-із-результатом","children":[]},{"level":2,"title":"Вихід із методу","slug":"вихід-із-методу","link":"#вихід-із-методу","children":[]}],"git":{"createdTime":1712559663000,"updatedTime":1712875693000,"contributors":[{"name":"VasylMartynWork","email":"killermbjustthink@gmail.com","commits":2}]},"readingTime":{"minutes":1.97,"words":592},"filePathRelative":"theory/theory2/topic14.md","localizedDate":"April 8, 2024"}');export{d as comp,g as data};
