import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as s,o}from"./app-DT2w9O6A.js";const t={};function c(d,e){return o(),a("div",null,e[0]||(e[0]=[s(`<h1 id="env-设置环境变量" tabindex="-1"><a class="header-anchor" href="#env-设置环境变量"><span>ENV 设置环境变量</span></a></h1><p>格式有两种：</p><ul><li><code>ENV &lt;key&gt; &lt;value&gt;</code></li><li><code>ENV &lt;key1&gt;=&lt;value1&gt; &lt;key2&gt;=&lt;value2&gt;...</code></li></ul><p>这个指令很简单，就是设置环境变量而已，无论是后面的其它指令，如 <code>RUN</code>，还是运行时的应用，都可以直接使用这里定义的环境变量。</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">ENV</span> VERSION=1.0 DEBUG=on <span class="token operator">\\</span>
    NAME=<span class="token string">&quot;Happy Feet&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子中演示了如何换行，以及对含有空格的值用双引号括起来的办法，这和 Shell 下的行为是一致的。</p><p>定义了环境变量，那么在后续的指令中，就可以使用这个环境变量。比如在官方 <code>node</code> 镜像 <code>Dockerfile</code> 中，就有类似这样的代码：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">ENV</span> NODE_VERSION 7.2.0</span>

<span class="token instruction"><span class="token keyword">RUN</span> curl -SLO <span class="token string">&quot;https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz&quot;</span> <span class="token operator">\\</span>
  &amp;&amp; curl -SLO <span class="token string">&quot;https://nodejs.org/dist/v$NODE_VERSION/SHASUMS256.txt.asc&quot;</span> <span class="token operator">\\</span>
  &amp;&amp; gpg --batch --decrypt --output SHASUMS256.txt SHASUMS256.txt.asc <span class="token operator">\\</span>
  &amp;&amp; grep <span class="token string">&quot; node-v$NODE_VERSION-linux-x64.tar.xz\\$&quot;</span> SHASUMS256.txt | sha256sum -c - <span class="token operator">\\</span>
  &amp;&amp; tar -xJf <span class="token string">&quot;node-v$NODE_VERSION-linux-x64.tar.xz&quot;</span> -C /usr/local --strip-components=1 <span class="token operator">\\</span>
  &amp;&amp; rm <span class="token string">&quot;node-v$NODE_VERSION-linux-x64.tar.xz&quot;</span> SHASUMS256.txt.asc SHASUMS256.txt <span class="token operator">\\</span>
  &amp;&amp; ln -s /usr/local/bin/node /usr/local/bin/nodejs</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里先定义了环境变量 <code>NODE_VERSION</code>，其后的 <code>RUN</code> 这层里，多次使用 <code>$NODE_VERSION</code> 来进行操作定制。可以看到，将来升级镜像构建版本的时候，只需要更新 <code>7.2.0</code> 即可，<code>Dockerfile</code> 构建维护变得更轻松了。</p><p>下列指令可以支持环境变量展开： <code>ADD</code>、<code>COPY</code>、<code>ENV</code>、<code>EXPOSE</code>、<code>FROM</code>、<code>LABEL</code>、<code>USER</code>、<code>WORKDIR</code>、<code>VOLUME</code>、<code>STOPSIGNAL</code>、<code>ONBUILD</code>、<code>RUN</code>。</p><p>可以从这个指令列表里感觉到，环境变量可以使用的地方很多，很强大。通过环境变量，我们可以让一份 <code>Dockerfile</code> 制作更多的镜像，只需使用不同的环境变量即可。</p>`,11)]))}const i=n(t,[["render",c],["__file","env.html.vue"]]),p=JSON.parse('{"path":"/index/Docker/image/dockerfile/env.html","title":"ENV 设置环境变量","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1728959209000,"updatedTime":1728959209000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.28,"words":385},"filePathRelative":"index/Docker/image/dockerfile/env.md","localizedDate":"2024年10月15日","excerpt":"\\n<p>格式有两种：</p>\\n<ul>\\n<li><code>ENV &lt;key&gt; &lt;value&gt;</code></li>\\n<li><code>ENV &lt;key1&gt;=&lt;value1&gt; &lt;key2&gt;=&lt;value2&gt;...</code></li>\\n</ul>\\n<p>这个指令很简单，就是设置环境变量而已，无论是后面的其它指令，如 <code>RUN</code>，还是运行时的应用，都可以直接使用这里定义的环境变量。</p>\\n<div class=\\"language-docker\\" data-ext=\\"docker\\" data-title=\\"docker\\"><pre class=\\"language-docker\\"><code><span class=\\"token instruction\\"><span class=\\"token keyword\\">ENV</span> VERSION=1.0 DEBUG=on <span class=\\"token operator\\">\\\\</span>\\n    NAME=<span class=\\"token string\\">\\"Happy Feet\\"</span></span>\\n</code></pre></div>"}');export{i as comp,p as data};
