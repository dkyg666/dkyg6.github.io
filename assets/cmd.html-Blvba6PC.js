import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,d,o as s}from"./app-DT2w9O6A.js";const n={};function a(t,e){return s(),c("div",null,e[0]||(e[0]=[d(`<h1 id="cmd-容器启动命令" tabindex="-1"><a class="header-anchor" href="#cmd-容器启动命令"><span>CMD 容器启动命令</span></a></h1><p><code>CMD</code> 指令的格式和 <code>RUN</code> 相似，也是两种格式：</p><ul><li><code>shell</code> 格式：<code>CMD &lt;命令&gt;</code></li><li><code>exec</code> 格式：<code>CMD [&quot;可执行文件&quot;, &quot;参数1&quot;, &quot;参数2&quot;...]</code></li><li>参数列表格式：<code>CMD [&quot;参数1&quot;, &quot;参数2&quot;...]</code>。在指定了 <code>ENTRYPOINT</code> 指令后，用 <code>CMD</code> 指定具体的参数。</li></ul><p>之前介绍容器的时候曾经说过，Docker 不是虚拟机，容器就是进程。既然是进程，那么在启动容器的时候，需要指定所运行的程序及参数。<code>CMD</code> 指令就是用于指定默认的容器主进程的启动命令的。</p><p>在运行时可以指定新的命令来替代镜像设置中的这个默认命令，比如，<code>ubuntu</code> 镜像默认的 <code>CMD</code> 是 <code>/bin/bash</code>，如果我们直接 <code>docker run -it ubuntu</code> 的话，会直接进入 <code>bash</code>。我们也可以在运行时指定运行别的命令，如 <code>docker run -it ubuntu cat /etc/os-release</code>。这就是用 <code>cat /etc/os-release</code> 命令替换了默认的 <code>/bin/bash</code> 命令了，输出了系统版本信息。</p><p>在指令格式上，一般推荐使用 <code>exec</code> 格式，这类格式在解析时会被解析为 JSON 数组，因此一定要使用双引号 <code>&quot;</code>，而不要使用单引号。</p><p>如果使用 <code>shell</code> 格式的话，实际的命令会被包装为 <code>sh -c</code> 的参数的形式进行执行。比如：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">CMD</span> echo <span class="token variable">$HOME</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在实际执行中，会将其变更为：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">CMD</span> [ <span class="token string">&quot;sh&quot;</span>, <span class="token string">&quot;-c&quot;</span>, <span class="token string">&quot;echo $HOME&quot;</span> ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这就是为什么我们可以使用环境变量的原因，因为这些环境变量会被 shell 进行解析处理。</p><p>提到 <code>CMD</code> 就不得不提容器中应用在前台执行和后台执行的问题。这是初学者常出现的一个混淆。</p><p>Docker 不是虚拟机，容器中的应用都应该以前台执行，而不是像虚拟机、物理机里面那样，用 <code>systemd</code> 去启动后台服务，容器内没有后台服务的概念。</p><p>一些初学者将 <code>CMD</code> 写为：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">CMD</span> service nginx start</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后发现容器执行后就立即退出了。甚至在容器内去使用 <code>systemctl</code> 命令结果却发现根本执行不了。这就是因为没有搞明白前台、后台的概念，没有区分容器和虚拟机的差异，依旧在以传统虚拟机的角度去理解容器。</p><p>对于容器而言，其启动程序就是容器应用进程，容器就是为了主进程而存在的，主进程退出，容器就失去了存在的意义，从而退出，其它辅助进程不是它需要关心的东西。</p><p>而使用 <code>service nginx start</code> 命令，则是希望 init 系统以后台守护进程的形式启动 nginx 服务。而刚才说了 <code>CMD service nginx start</code> 会被理解为 <code>CMD [ &quot;sh&quot;, &quot;-c&quot;, &quot;service nginx start&quot;]</code>，因此主进程实际上是 <code>sh</code>。那么当 <code>service nginx start</code> 命令结束后，<code>sh</code> 也就结束了，<code>sh</code> 作为主进程退出了，自然就会令容器退出。</p><p>正确的做法是直接执行 <code>nginx</code> 可执行文件，并且要求以前台形式运行。比如：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;nginx&quot;</span>, <span class="token string">&quot;-g&quot;</span>, <span class="token string">&quot;daemon off;&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,20)]))}const l=o(n,[["render",a],["__file","cmd.html.vue"]]),p=JSON.parse('{"path":"/index/Docker/image/dockerfile/cmd.html","title":"CMD 容器启动命令","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1728959209000,"updatedTime":1728959209000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.64,"words":792},"filePathRelative":"index/Docker/image/dockerfile/cmd.md","localizedDate":"2024年10月15日","excerpt":"\\n<p><code>CMD</code> 指令的格式和 <code>RUN</code> 相似，也是两种格式：</p>\\n<ul>\\n<li><code>shell</code> 格式：<code>CMD &lt;命令&gt;</code></li>\\n<li><code>exec</code> 格式：<code>CMD [\\"可执行文件\\", \\"参数1\\", \\"参数2\\"...]</code></li>\\n<li>参数列表格式：<code>CMD [\\"参数1\\", \\"参数2\\"...]</code>。在指定了 <code>ENTRYPOINT</code> 指令后，用 <code>CMD</code> 指定具体的参数。</li>\\n</ul>"}');export{l as comp,p as data};
