import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o,c as n,e as t}from"./app-CYOwO63N.js";const i={},r=t(`<h2 id="консольнии-вивід" tabindex="-1"><a class="header-anchor" href="#консольнии-вивід"><span>Консольний вивід</span></a></h2><p>Для виведення інформації в консоль, ми використовували вбудований метод <strong>Console.WriteLine</strong>. Тобто, якщо ми хочемо вивести деяку інформацію на консоль, нам треба передати її в метод Console.WriteLine:</p><pre><code>string hello = &quot;Привіт світ!&quot;;
Console.WriteLine(hello);
Console.WriteLine(&quot;Ласкаво просимо до C#!&quot;);
Console.WriteLine(24.5);
</code></pre><p>Консольний вивід: Привіт світ! Ласкаво просимо до C#! Поки що світ... 24,5</p><p>Нерідко виникає необхідність вивести на консоль в одному рядку значення відразу кількох змінних. У цьому випадку ми можемо використовувати прийом, який називається інтерполяцією:</p><pre><code>string name = &quot;Tom&quot;;
int age = 34;
double height = 1.7;
Console.WriteLine($&quot;Ім&#39;я: {name} Вік: {age} Зріст: {height}м&quot;);
</code></pre><p>Для вбудовування окремих значень у рядок, що виводиться на консоль, використовуються фігурні дужки, в яких розміщується значення, яке потрібно вбудувати. Це може бути значення змінної ({name}) або складніший вираз (наприклад, операція складання {4 + 7}). А перед усім рядком ставиться знак долара.</p><p>При виведенні на консоль замість поміщених у фігурні дужки виразів виводитимуться їх значення:</p><pre><code>Ім&#39;я: Tom Вік: 34 Зріст: 1,7м
</code></pre><p>Є інший спосіб виведення на консоль відразу кількох значень:</p><pre><code>string name = &quot;Tom&quot;;
int age = 34;
double height = 1.7;
Console.WriteLine(&quot;Ім&#39;я: {0} Вік: {2} Зріст: {1}м&quot;, name, height, age);
</code></pre><p>Тут бачимо, що рядок в Console.WriteLine містить деякі числа у фігурних дужках: {0}, {1}, {2}. Це плейсхолдери, замість яких під час виведення рядка на консоль будуть підставлятися деякі значення. Значення, що підставляються, вказуються після рядка через кому.</p><p>При цьому важливим є порядок подібних плейсхолдерів. Наприклад, в даному випадку, після рядка першою вказана змінна name, потім height і потім age. Тому значення змінної name вставлятиметься замість першого плейсхолдера - {0} (нумерація починається з нуля), height - замість {1}, а age - замість {2}. Тому в підсумку під час виведення на консоль рядок</p><pre><code>&quot;Ім&#39;я: {0} Вік: {2} Зріст: {1}м&quot;
</code></pre><p>буде замінено на</p><pre><code>&quot;Ім&#39;я: Tom Вік: 34 Зріст: 1,7м&quot;
</code></pre><h2 id="console-write" tabindex="-1"><a class="header-anchor" href="#console-write"><span>Console.Write</span></a></h2><p>Крім Console.WriteLine() можна також використовувати метод Console.Write(), він працює так само за тим винятком, що не додає перехід на наступний рядок, тобто наступний консольний вивід буде виводитися на тому ж рядку.</p><pre><code>string name = &quot;Tom&quot;;
int age = 34;
double height = 1.7;
Console.Write($&quot;Ім&#39;я: {name} Вік: {age} Зріст: {height}м&quot;);
</code></pre><h2 id="консольне-введення" tabindex="-1"><a class="header-anchor" href="#консольне-введення"><span>Консольне введення</span></a></h2><p>Окрім виведення інформації на консоль, ми можемо отримувати інформацію з консолі. Для цього призначено метод Console.ReadLine(). Він дозволяє отримати введений рядок.</p><pre><code>Console.Write(&quot;Введіть своє ім&#39;я:&quot;);
string? name = Console.ReadLine();
Console.WriteLine($&quot;Привіт {name}&quot;);
</code></pre><p>В даному випадку, все, що вводить користувач, з допомогою методу Console.ReadLine() передається змінну name.</p><p>Приклад роботи програми:</p><pre><code>Введіть своє ім&#39;я: Том
Привіт Том
</code></pre><p>Особливістю методу <em>Console.ReadLine()</em> є те, що він може отримувати інформацію з консолі лише у вигляді рядка. Крім того, можлива ситуація, коли для методу Console.ReadLine не виявиться доступних для зчитування рядків, тобто коли йому нема чого зчитувати, він повертає значення <strong>null</strong>, тобто, грубо кажучи, фактично відсутність значення. І щоб відобразити цю ситуацію ми визначаємо змінну name, в яку отримуємо введення з консолі, як змінну типу <strong>string</strong>?. Тут <em>string</em> вказує, що змінна може зберігати значення типу <em>string</em>, тобто рядки. А знак питання <strong>?</strong> показує, що змінна також може зберігати значення <strong>null</strong>, тобто насправді не мати ніякого значення. Далі ми детальніше розберемо <em>null</em> і як з ним працювати.</p><p>Однак, може виникнути питання, як нам бути, якщо, припустимо, ми хочемо ввести вік у змінну типу int або іншу інформацію у змінні типу double чи decimal? За замовчуванням платформа .NET надає ряд методів, які дозволяють конвертувати різні значення до типів int, double і т.д. Деякі з цих методів:</p><ul><li><strong>Convert.ToInt32()</strong> (перетворює до типу int)</li><li><strong>Convert.ToDouble()</strong> (перетворює до типу double)</li><li><strong>Convert.ToDecimal()</strong> (перетворює до типу decimal)</li></ul><p>Приклад введення значень:</p><pre><code>Console.Write(&quot;Введіть ім&#39;я:&quot;);
string? name = Console.ReadLine();
 
Console.Write(&quot;Введіть вік:&quot;);
int age = Convert.ToInt32(Console.ReadLine());
 
Console.Write(&quot;Введіть зріст:&quot;);
double height = Convert.ToDouble(Console.ReadLine());
 
Console.Write(&quot;Введіть розмір зарплати:&quot;);
decimal salary = Convert.ToDecimal(Console.ReadLine());
 
Console.WriteLine($&quot;Ім&#39;я: {name} Вік: {age} Зріст: {height}м Зарплата: {salary}$&quot;);
</code></pre><p>При введенні важливо враховувати поточну операційну систему. В одних культурах роздільником між цілою та дробовою частиною є крапка (США, Великобританія...), в інших - кома (Німеччина...). Якщо локалізація англомовна, значить, роздільником цілої та дробової частини під час введення буде точка.</p><p>Приклад роботи програми:</p><pre><code>Введіть ім&#39;я: Том
Введіть вік: 25
Введіть зростання: 1,75
Введіть розмір зарплати: 300,67
Ім&#39;я: Том Вік: 25 Зріст: 1,75м Зарплата: 300,67$
</code></pre>`,33),l=[r];function s(a,p){return o(),n("div",null,l)}const u=e(i,[["render",s],["__file","topic5.html.vue"]]),m=JSON.parse('{"path":"/theory/theory2/topic5.html","title":"Консольний ввід-вивід","lang":"en-US","frontmatter":{"title":"Консольний ввід-вивід"},"headers":[{"level":2,"title":"Консольний вивід","slug":"консольнии-вивід","link":"#консольнии-вивід","children":[]},{"level":2,"title":"Console.Write","slug":"console-write","link":"#console-write","children":[]},{"level":2,"title":"Консольне введення","slug":"консольне-введення","link":"#консольне-введення","children":[]}],"git":{"createdTime":1712559663000,"updatedTime":1712875693000,"contributors":[{"name":"VasylMartynWork","email":"killermbjustthink@gmail.com","commits":2}]},"readingTime":{"minutes":2.3,"words":691},"filePathRelative":"theory/theory2/topic5.md","localizedDate":"April 8, 2024"}');export{u as comp,m as data};
