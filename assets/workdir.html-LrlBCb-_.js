import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,d as a,o}from"./app-DT2w9O6A.js";const d={};function c(t,e){return o(),s("div",null,e[0]||(e[0]=[a(`<h1 id="workdir-指定工作目录" tabindex="-1"><a class="header-anchor" href="#workdir-指定工作目录"><span>WORKDIR 指定工作目录</span></a></h1><p>格式为 <code>WORKDIR &lt;工作目录路径&gt;</code>。</p><p>使用 <code>WORKDIR</code> 指令可以来指定工作目录（或者称为当前目录），以后各层的当前目录就被改为指定的目录，如该目录不存在，<code>WORKDIR</code> 会帮你建立目录。</p><p>之前提到一些初学者常犯的错误是把 <code>Dockerfile</code> 等同于 Shell 脚本来书写，这种错误的理解还可能会导致出现下面这样的错误：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">RUN</span> cd /app</span>
<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">&quot;hello&quot;</span> &gt; world.txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果将这个 <code>Dockerfile</code> 进行构建镜像运行后，会发现找不到 <code>/app/world.txt</code> 文件，或者其内容不是 <code>hello</code>。原因其实很简单，在 Shell 中，连续两行是同一个进程执行环境，因此前一个命令修改的内存状态，会直接影响后一个命令；而在 <code>Dockerfile</code> 中，这两行 <code>RUN</code> 命令的执行环境根本不同，是两个完全不同的容器。这就是对 <code>Dockerfile</code> 构建分层存储的概念不了解所导致的错误。</p><p>之前说过每一个 <code>RUN</code> 都是启动一个容器、执行命令、然后提交存储层文件变更。第一层 <code>RUN cd /app</code> 的执行仅仅是当前进程的工作目录变更，一个内存上的变化而已，其结果不会造成任何文件变更。而到第二层的时候，启动的是一个全新的容器，跟第一层的容器更完全没关系，自然不可能继承前一层构建过程中的内存变化。</p><p>因此如果需要改变以后各层的工作目录的位置，那么应该使用 <code>WORKDIR</code> 指令。</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">&quot;hello&quot;</span> &gt; world.txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你的 <code>WORKDIR</code> 指令使用的相对路径，那么所切换的路径与之前的 <code>WORKDIR</code> 有关：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">WORKDIR</span> /a</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> b</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> c</span>

<span class="token instruction"><span class="token keyword">RUN</span> pwd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>RUN pwd</code> 的工作目录为 <code>/a/b/c</code>。</p>`,12)]))}const l=n(d,[["render",c],["__file","workdir.html.vue"]]),p=JSON.parse('{"path":"/index/Docker/image/dockerfile/workdir.html","title":"WORKDIR 指定工作目录","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1728959209000,"updatedTime":1728959209000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.57,"words":472},"filePathRelative":"index/Docker/image/dockerfile/workdir.md","localizedDate":"2024年10月15日","excerpt":"\\n<p>格式为 <code>WORKDIR &lt;工作目录路径&gt;</code>。</p>\\n<p>使用 <code>WORKDIR</code> 指令可以来指定工作目录（或者称为当前目录），以后各层的当前目录就被改为指定的目录，如该目录不存在，<code>WORKDIR</code> 会帮你建立目录。</p>\\n<p>之前提到一些初学者常犯的错误是把 <code>Dockerfile</code> 等同于 Shell 脚本来书写，这种错误的理解还可能会导致出现下面这样的错误：</p>\\n<div class=\\"language-docker\\" data-ext=\\"docker\\" data-title=\\"docker\\"><pre class=\\"language-docker\\"><code><span class=\\"token instruction\\"><span class=\\"token keyword\\">RUN</span> cd /app</span>\\n<span class=\\"token instruction\\"><span class=\\"token keyword\\">RUN</span> echo <span class=\\"token string\\">\\"hello\\"</span> &gt; world.txt</span>\\n</code></pre></div>"}');export{l as comp,p as data};
