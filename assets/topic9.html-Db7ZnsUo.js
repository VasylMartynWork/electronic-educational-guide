import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as t,e as o}from"./app-CYOwO63N.js";const i={},u=o(`<p>Умовні конструкції - один із базових компонентів багатьох мов програмування, які спрямовують роботу програми по одному зі шляхів залежно від певних умов. Однією з таких конструкцій у мові програмування C# є конструкція if.</p><p>Конструкція if/else перевіряє істинність певної умови та залежно від результатів перевірки виконує певний код.</p><p>Її найпростіша форма складається з блоку if:</p><pre><code>if(умова)
{
     виконувані інструкції
}
</code></pre><p>Після ключового слова if ставиться умова. Умова повинна представляти значення bool. Це може бути безпосередньо значення типу bool або результат умовного виразу чи іншого виразу, який повертає значення типу bool. І якщо ця умова є істинною (рівно true), то спрацьовує код, який поміщений далі після умови всередині фігурних дужок.</p><p>Наприклад:</p><pre><code>int num1 = 8;
int num2 = 6;
if(num1 &gt; num2)
{
     Console.WriteLine($&quot;Число {num1} більше числа {num2}&quot;);
}
</code></pre><p>В даному випадку у нас перше число більше за друге, тому вираз num1 &gt; num2 істинний і повертає true, отже, управління переходить до рядка Console.WriteLine(&quot;Число {num1} більше числа {num2}&quot;);</p><p>Якщо блок if містить одну інструкцію, ми можемо його скоротити, прибравши фігурні дужки:</p><pre><code>int num1 = 8;
int num2 = 6;
if (num1 &gt; num2)
     Console.WriteLine($&quot;Число {num1} більше числа {num2}&quot;);
 
// або так
if (num1 &gt; num2) Console.WriteLine($&quot;Число {num1} більше числа {num2}&quot;);
</code></pre><p>Також ми можемо поєднати відразу кілька умов, використовуючи логічні оператори:</p><pre><code>int num1 = 8;
int num2 = 6;
if(num1 &gt; num2 &amp;&amp; num1==8)
{
     Console.WriteLine($&quot;Число {num1} більше числа {num2}&quot;);
}
</code></pre><p>У разі блок if буде виконуватися, якщо num1 &gt; num2 дорівнює true і num1 == 8 дорівнює true.</p><h2 id="вираз-else" tabindex="-1"><a class="header-anchor" href="#вираз-else"><span>Вираз else</span></a></h2><p>Але що, якщо ми захочемо, щоб у разі недотримання умови також виконувались якісь дії? У цьому випадку ми можемо додати блок else:</p><pre><code>int num1 = 8;
int num2 = 6;
if(num1 &gt; num2)
{
     Console.WriteLine($&quot;Число {num1} більше числа {num2}&quot;);
}
else
{
     Console.WriteLine($&quot;Число {num1} менше числа {num2}&quot;);
}
</code></pre><p>Блок else виконується, якщо умова після if помилкова, тобто false. Якщо блок else містить тільки одну інструкцію, то знову ж таки ми можемо його скоротити, прибравши фігурні дужки:</p><pre><code>int num1 = 8;
int num2 = 6;
if(num1 &gt; num2)
     Console.WriteLine($&quot;Число {num1} більше числа {num2}&quot;);
else
     Console.WriteLine($&quot;Число {num1} менше числа {num2}&quot;);
</code></pre><h2 id="else-if" tabindex="-1"><a class="header-anchor" href="#else-if"><span>else if</span></a></h2><p>Але в прикладі вище при порівнянні чисел ми можемо нарахувати три стани: перше число більше за друге, перше число менше другого і числа рівні. Використовуючи конструкцію else if, ми можемо обробляти додаткові умови:</p><pre><code>int num1 = 8;
int num2 = 6;
if(num1 &gt; num2)
{
     Console.WriteLine($&quot;Число {num1} більше числа {num2}&quot;);
}
else if (num1 &lt;num2)
{
     Console.WriteLine($&quot;Число {num1} менше числа {num2}&quot;);
}
else
{
     Console.WriteLine(&quot;Число num1 дорівнює числу num2&quot;);
}
</code></pre><p>При необхідності можна додати кілька виразів else if:</p><pre><code>string name = &quot;Alex&quot;;
 
if (name == &quot;Tom&quot;)
     Console.WriteLine(&quot;Вас звуть Tomas&quot;);
else if (name == &quot;Bob&quot;)
     Console.WriteLine(&quot;Вас звуть Robert&quot;);
else if (name == &quot;Mike&quot;)
     Console.WriteLine(&quot;Вас звуть Michael&quot;);
else
     Console.WriteLine(&quot;Невідоме ім&#39;я&quot;);
</code></pre><h2 id="тернарна-операція" tabindex="-1"><a class="header-anchor" href="#тернарна-операція"><span>Тернарна операція</span></a></h2><p>Тернарна операція також дозволяє перевірити деяку умову і в залежності від її істинності виконати деякі дії. Вона має наступний синтаксис:</p><pre><code>[перший операнд - умова]? [другий операнд] : [третій операнд]
</code></pre><p>Тут одразу три операнда. Залежно від умови тернарна операція повертає другий чи третій операнд: якщо умова дорівнює true, то повертається другий операнд; якщо умова дорівнює false, то третя. Наприклад:</p><pre><code>int x=3;
int y=2;
 
int z = x &lt; y? (x+y): (x-y);
Console.WriteLine(z); // 1
</code></pre><p>Тут перший операнд (тобто умова) є виразом x &lt; y. Якщо вона дорівнює true, то повертається другий операнд - (x + y), тобто результат операції додавання. Якщо умова дорівнює false, то повертається третій операнд – (x-y).</p><p>Результат тернарної операції (тобто другий чи третій операнд залежно від умови) надається змінній z.</p>`,30),l=[u];function m(r,s){return n(),t("div",null,l)}const c=e(i,[["render",m],["__file","topic9.html.vue"]]),d=JSON.parse('{"path":"/theory/theory2/topic9.html","title":"Конструкція if..else і тернарна операція","lang":"en-US","frontmatter":{"title":"Конструкція if..else і тернарна операція"},"headers":[{"level":2,"title":"Вираз else","slug":"вираз-else","link":"#вираз-else","children":[]},{"level":2,"title":"else if","slug":"else-if","link":"#else-if","children":[]},{"level":2,"title":"Тернарна операція","slug":"тернарна-операція","link":"#тернарна-операція","children":[]}],"git":{"createdTime":1712559663000,"updatedTime":1712875693000,"contributors":[{"name":"VasylMartynWork","email":"killermbjustthink@gmail.com","commits":2}]},"readingTime":{"minutes":1.89,"words":566},"filePathRelative":"theory/theory2/topic9.md","localizedDate":"April 8, 2024"}');export{c as comp,d as data};
