import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o}from"./app-DT2w9O6A.js";const t={};function l(i,n){return o(),a("div",null,n[0]||(n[0]=[e(`<h1 id="数据卷" tabindex="-1"><a class="header-anchor" href="#数据卷"><span>数据卷</span></a></h1><p><code>数据卷</code> 是一个可供一个或多个容器使用的特殊目录，它绕过 UnionFS，可以提供很多有用的特性：</p><ul><li><p><code>数据卷</code> 可以在容器之间共享和重用</p></li><li><p>对 <code>数据卷</code> 的修改会立马生效</p></li><li><p>对 <code>数据卷</code> 的更新，不会影响镜像</p></li><li><p><code>数据卷</code> 默认会一直存在，即使容器被删除</p></li></ul><blockquote><p>注意：<code>数据卷</code> 的使用，类似于 Linux 下对目录或文件进行 mount，镜像中的被指定为挂载点的目录中的文件会复制到数据卷中（仅数据卷为空时会复制）。</p></blockquote><h2 id="创建一个数据卷" tabindex="-1"><a class="header-anchor" href="#创建一个数据卷"><span>创建一个数据卷</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> volume create my-vol
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看所有的 <code>数据卷</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> volume <span class="token function">ls</span>

DRIVER              VOLUME NAME
<span class="token builtin class-name">local</span>               my-vol
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在主机里使用以下命令可以查看指定 <code>数据卷</code> 的信息</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> volume inspect my-vol
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;local&quot;</span>,
        <span class="token string">&quot;Labels&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
        <span class="token string">&quot;Mountpoint&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/volumes/my-vol/_data&quot;</span>,
        <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;my-vol&quot;</span>,
        <span class="token string">&quot;Options&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
        <span class="token string">&quot;Scope&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;local&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动一个挂载数据卷的容器" tabindex="-1"><a class="header-anchor" href="#启动一个挂载数据卷的容器"><span>启动一个挂载数据卷的容器</span></a></h2><p>在用 <code>docker run</code> 命令的时候，使用 <code>--mount</code> 标记来将 <code>数据卷</code> 挂载到容器里。在一次 <code>docker run</code> 中可以挂载多个 <code>数据卷</code>。</p><p>下面创建一个名为 <code>web</code> 的容器，并加载一个 <code>数据卷</code> 到容器的 <code>/usr/share/nginx/html</code> 目录。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> web <span class="token punctuation">\\</span>
    <span class="token comment"># -v my-vol:/usr/share/nginx/html \\</span>
    <span class="token parameter variable">--mount</span> <span class="token assign-left variable">source</span><span class="token operator">=</span>my-vol,target<span class="token operator">=</span>/usr/share/nginx/html <span class="token punctuation">\\</span>
    nginx:alpine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看数据卷的具体信息" tabindex="-1"><a class="header-anchor" href="#查看数据卷的具体信息"><span>查看数据卷的具体信息</span></a></h2><p>在主机里使用以下命令可以查看 <code>web</code> 容器的信息</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> inspect web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>数据卷</code> 信息在 &quot;Mounts&quot; Key 下面</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;Mounts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;volume&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-vol&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/var/lib/docker/volumes/my-vol/_data&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Destination&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/usr/share/nginx/html&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Driver&quot;</span><span class="token operator">:</span> <span class="token string">&quot;local&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;RW&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Propagation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除数据卷" tabindex="-1"><a class="header-anchor" href="#删除数据卷"><span>删除数据卷</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> volume <span class="token function">rm</span> my-vol
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>数据卷</code> 是被设计用来持久化数据的，它的生命周期独立于容器，Docker 不会在容器被删除后自动删除 <code>数据卷</code>，并且也不存在垃圾回收这样的机制来处理没有任何容器引用的 <code>数据卷</code>。如果需要在删除容器的同时移除数据卷。可以在删除容器的时候使用 <code>docker rm -v</code> 这个命令。</p><p>无主的数据卷可能会占据很多空间，要清理请使用以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> volume prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,24)]))}const d=s(t,[["render",l],["__file","volume.html.vue"]]),u=JSON.parse('{"path":"/index/Docker/data_management/volume.html","title":"数据卷","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"创建一个数据卷","slug":"创建一个数据卷","link":"#创建一个数据卷","children":[]},{"level":2,"title":"启动一个挂载数据卷的容器","slug":"启动一个挂载数据卷的容器","link":"#启动一个挂载数据卷的容器","children":[]},{"level":2,"title":"查看数据卷的具体信息","slug":"查看数据卷的具体信息","link":"#查看数据卷的具体信息","children":[]},{"level":2,"title":"删除数据卷","slug":"删除数据卷","link":"#删除数据卷","children":[]}],"git":{"createdTime":1728959209000,"updatedTime":1728959209000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.78,"words":535},"filePathRelative":"index/Docker/data_management/volume.md","localizedDate":"2024年10月15日","excerpt":"\\n<p><code>数据卷</code> 是一个可供一个或多个容器使用的特殊目录，它绕过 UnionFS，可以提供很多有用的特性：</p>\\n<ul>\\n<li>\\n<p><code>数据卷</code> 可以在容器之间共享和重用</p>\\n</li>\\n<li>\\n<p>对 <code>数据卷</code> 的修改会立马生效</p>\\n</li>\\n<li>\\n<p>对 <code>数据卷</code> 的更新，不会影响镜像</p>\\n</li>\\n<li>\\n<p><code>数据卷</code> 默认会一直存在，即使容器被删除</p>\\n</li>\\n</ul>\\n<blockquote>\\n<p>注意：<code>数据卷</code> 的使用，类似于 Linux 下对目录或文件进行 mount，镜像中的被指定为挂载点的目录中的文件会复制到数据卷中（仅数据卷为空时会复制）。</p>\\n</blockquote>"}');export{d as comp,u as data};