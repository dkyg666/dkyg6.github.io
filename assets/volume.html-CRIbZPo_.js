import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,d,o as t}from"./app-DT2w9O6A.js";const c={};function l(n,e){return t(),o("div",null,e[0]||(e[0]=[d(`<h1 id="volume-定义匿名卷" tabindex="-1"><a class="header-anchor" href="#volume-定义匿名卷"><span>VOLUME 定义匿名卷</span></a></h1><p>格式为：</p><ul><li><code>VOLUME [&quot;&lt;路径1&gt;&quot;, &quot;&lt;路径2&gt;&quot;...]</code></li><li><code>VOLUME &lt;路径&gt;</code></li></ul><p>之前我们说过，容器运行时应该尽量保持容器存储层不发生写操作，对于数据库类需要保存动态数据的应用，其数据库文件应该保存于卷(volume)中，后面的章节我们会进一步介绍 Docker 卷的概念。为了防止运行时用户忘记将动态文件所保存目录挂载为卷，在 <code>Dockerfile</code> 中，我们可以事先指定某些目录挂载为匿名卷，这样在运行时如果用户不指定挂载，其应用也可以正常运行，不会向容器存储层写入大量数据。</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">VOLUME</span> /data</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里的 <code>/data</code> 目录就会在容器运行时自动挂载为匿名卷，任何向 <code>/data</code> 中写入的信息都不会记录进容器存储层，从而保证了容器存储层的无状态化。当然，运行容器时可以覆盖这个挂载设置。比如：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-v</span> mydata:/data xxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这行命令中，就使用了 <code>mydata</code> 这个命名卷挂载到了 <code>/data</code> 这个位置，替代了 <code>Dockerfile</code> 中定义的匿名卷的挂载配置。</p>`,8)]))}const r=a(c,[["render",l],["__file","volume.html.vue"]]),m=JSON.parse('{"path":"/index/Docker/image/dockerfile/volume.html","title":"VOLUME 定义匿名卷","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1728959209000,"updatedTime":1728959209000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.04,"words":311},"filePathRelative":"index/Docker/image/dockerfile/volume.md","localizedDate":"2024年10月15日","excerpt":"\\n<p>格式为：</p>\\n<ul>\\n<li><code>VOLUME [\\"&lt;路径1&gt;\\", \\"&lt;路径2&gt;\\"...]</code></li>\\n<li><code>VOLUME &lt;路径&gt;</code></li>\\n</ul>\\n<p>之前我们说过，容器运行时应该尽量保持容器存储层不发生写操作，对于数据库类需要保存动态数据的应用，其数据库文件应该保存于卷(volume)中，后面的章节我们会进一步介绍 Docker 卷的概念。为了防止运行时用户忘记将动态文件所保存目录挂载为卷，在 <code>Dockerfile</code> 中，我们可以事先指定某些目录挂载为匿名卷，这样在运行时如果用户不指定挂载，其应用也可以正常运行，不会向容器存储层写入大量数据。</p>"}');export{r as comp,m as data};
