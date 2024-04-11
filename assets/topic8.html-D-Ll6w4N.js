import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as l,e as o}from"./app-CYOwO63N.js";const r={},a=o(`<p>Окремий набір операцій представляє умовні вирази. Такі операції повертають логічне значення, тобто значення типу bool: true, якщо вираз істинний, і false, якщо вираз хибний. До подібних операцій належать операції порівняння та логічні операції.</p><h2 id="операціі-порівняння" tabindex="-1"><a class="header-anchor" href="#операціі-порівняння"><span>Операції порівняння</span></a></h2><p>В операціях порівняння порівнюються два операнди і повертається значення типу bool - true, якщо вираз вірний, і false, якщо вираз невірний.</p><ul><li><p>==<br> Порівнює два операнди на рівність. Якщо вони рівні, операція повертає true, якщо не рівні, то повертається false:</p><pre><code>  int a = 10;
  int b = 4;
  bool c = a == b; // false
</code></pre></li><li><p>!=<br> Порівнює два операнди і повертає true, якщо операнди не рівні, і false, якщо вони рівні.</p><pre><code>  int a = 10;
  int b = 4;
  bool c = a! = b; // true
  bool d = a! = 10; // false
</code></pre></li><li><p>&lt;<br> Операція &quot;менше ніж&quot;. Повертає true, якщо перший операнд менший за другий, і false, якщо перший операнд більший за другий:</p><pre><code>  int a = 10;
  int b = 4;
  bool c = a &lt;b; // false
</code></pre></li><li><p>&gt;<br> Операція &quot;більше ніж&quot;. Порівнює два операнди і повертає true, якщо перший операнд більший за другий, інакше повертає false:</p><pre><code>  int a = 10;
  int b = 4;
  bool c = a &gt; b; // true
  bool d = a &gt; 25; // false
</code></pre></li><li><p>&lt;=<br> Операція &quot;менше або дорівнює&quot;. Порівнює два операнди і повертає true, якщо перший операнд менше або дорівнює другому. Інакше повертає false.</p><pre><code>  int a = 10;
  int b = 4;
  bool c = a &lt;= b; // false
  bool d = a &lt;= 25; // true
</code></pre></li><li><p>&gt;=<br> Операція &quot;більше чи дорівнює&quot;. Порівнює два операнди і повертає true, якщо перший операнд більше або дорівнює другому, інакше повертається false:</p><p>int a = 10; int b = 4; bool c = a&gt; = b; // true bool d = a&gt; = 25; // false</p></li></ul><p>Операції &lt;, &gt; &lt;=, &gt;= мають більший пріоритет ніж == і !=.</p><h2 id="логічні-операціі" tabindex="-1"><a class="header-anchor" href="#логічні-операціі"><span>Логічні операції</span></a></h2><p>Також у C# визначено логічні оператори, які повертають значення типу bool. Як операнди вони приймають значення типу bool. Як правило, застосовуються до відношень і поєднують кілька операцій порівняння.</p><ul><li><p>|<br> Операція логічного складання чи логічне АБО. Повертає true, якщо хоча б один із операндів повертає true.</p><pre><code>  bool x1 = (5&gt; 6) | (4 &lt; 6); // 5&gt;6 – false, 4&lt;6 – true, тому повертається true
  bool x2 = (5&gt; 6) | (4&gt; 6); // 5&gt;6 – false, 4&gt;6 – false, тому повертається false
</code></pre></li><li><p>&amp;<br> Операція логічного множення чи логічне І. Повертає true, якщо обидва операнди одночасно дорівнюють true.</p><pre><code>  bool x1 = (5 &gt; 6) &amp; (4 &lt; 6); // 5&gt;6 – false, 4&lt;6 – true, тому повертається false
  bool x2 = (5 &lt; 6) &amp; (4 &lt; 6); // 5&lt;6 – true, 4&lt;6 – true, тому повертається true
</code></pre></li><li><p>||<br> Операція логічного складання. Повертає true, якщо хоча б один із операндів повертає true.</p><pre><code>  bool x1 = (5 &gt; 6) | (4 &lt; 6); // 5&gt;6 – false, 4&lt;6 – true, тому повертається true
  bool x2 = (5&gt; 6) | (4&gt; 6); // 5&gt;6 – false, 4&gt;6 – false, тому повертається false
</code></pre></li><li><p>&amp;&amp;<br> Операція логічного множення. Повертає true, якщо обидва операнди одночасно рівні true.</p><pre><code>  bool x1 = (5 &gt; 6) &amp;&amp; (4 &lt; 6); // 5&gt;6 – false, 4&lt;6 – true,тому повертається false
  bool x2 = (5 &lt; 6) &amp;&amp; (4 &lt; 6); // 5&lt;6 – true, 4&lt;6 – true, тому повертається true
</code></pre></li><li><p>!<br> Операція логічного заперечення. Виконується над одним операндом і повертає true, якщо операнд дорівнює false. Якщо операнд дорівнює true, операція повертає false:</p><pre><code>  bool a = true;
  bool b =! // false
</code></pre></li></ul>`,8),p=[a];function i(n,s){return t(),l("div",null,p)}const b=e(r,[["render",i],["__file","topic8.html.vue"]]),d=JSON.parse('{"path":"/theory/theory2/topic8.html","title":"Умовні вирази","lang":"en-US","frontmatter":{"title":"Умовні вирази"},"headers":[{"level":2,"title":"Операції порівняння","slug":"операціі-порівняння","link":"#операціі-порівняння","children":[]},{"level":2,"title":"Логічні операції","slug":"логічні-операціі","link":"#логічні-операціі","children":[]}],"git":{"createdTime":1712559663000,"updatedTime":1712875693000,"contributors":[{"name":"VasylMartynWork","email":"killermbjustthink@gmail.com","commits":2}]},"readingTime":{"minutes":1.71,"words":514},"filePathRelative":"theory/theory2/topic8.md","localizedDate":"April 8, 2024"}');export{b as comp,d as data};
