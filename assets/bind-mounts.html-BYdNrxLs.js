import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,d as e,o as t}from"./app-DT2w9O6A.js";const o={};function p(i,a){return t(),s("div",null,a[0]||(a[0]=[e(`<h1 id="挂载主机目录" tabindex="-1"><a class="header-anchor" href="#挂载主机目录"><span>挂载主机目录</span></a></h1><h2 id="挂载一个主机目录作为数据卷" tabindex="-1"><a class="header-anchor" href="#挂载一个主机目录作为数据卷"><span>挂载一个主机目录作为数据卷</span></a></h2><p>使用 <code>--mount</code> 标记可以指定挂载一个本地主机的目录到容器中去。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> web <span class="token punctuation">\\</span>
    <span class="token comment"># -v /src/webapp:/usr/share/nginx/html \\</span>
    <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,source<span class="token operator">=</span>/src/webapp,target<span class="token operator">=</span>/usr/share/nginx/html <span class="token punctuation">\\</span>
    nginx:alpine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的命令加载主机的 <code>/src/webapp</code> 目录到容器的 <code>/usr/share/nginx/html</code>目录。这个功能在进行测试的时候十分方便，比如用户可以放置一些程序到本地目录中，来查看容器是否正常工作。本地目录的路径必须是绝对路径，以前使用 <code>-v</code> 参数时如果本地目录不存在 Docker 会自动为你创建一个文件夹，现在使用 <code>--mount</code> 参数时如果本地目录不存在，Docker 会报错。</p><p>Docker 挂载主机目录的默认权限是 <code>读写</code>，用户也可以通过增加 <code>readonly</code> 指定为 <code>只读</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> web <span class="token punctuation">\\</span>
    <span class="token comment"># -v /src/webapp:/usr/share/nginx/html:ro \\</span>
    <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,source<span class="token operator">=</span>/src/webapp,target<span class="token operator">=</span>/usr/share/nginx/html,readonly <span class="token punctuation">\\</span>
    nginx:alpine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加了 <code>readonly</code> 之后，就挂载为 <code>只读</code> 了。如果你在容器内 <code>/usr/share/nginx/html</code> 目录新建文件，会显示如下错误</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/usr/share/nginx/html <span class="token comment"># touch new.txt</span>
touch: new.txt: Read-only <span class="token function">file</span> system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看数据卷的具体信息" tabindex="-1"><a class="header-anchor" href="#查看数据卷的具体信息"><span>查看数据卷的具体信息</span></a></h2><p>在主机里使用以下命令可以查看 <code>web</code> 容器的信息</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> inspect web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>挂载主机目录</code> 的配置信息在 &quot;Mounts&quot; Key 下面</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;Mounts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bind&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/src/webapp&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Destination&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/usr/share/nginx/html&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;RW&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Propagation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rprivate&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="挂载一个本地主机文件作为数据卷" tabindex="-1"><a class="header-anchor" href="#挂载一个本地主机文件作为数据卷"><span>挂载一个本地主机文件作为数据卷</span></a></h2><p><code>--mount</code> 标记也可以从主机挂载单个文件到容器中</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-it</span> <span class="token punctuation">\\</span>
   <span class="token comment"># -v $HOME/.bash_history:/root/.bash_history \\</span>
   <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,source<span class="token operator">=</span><span class="token environment constant">$HOME</span>/.bash_history,target<span class="token operator">=</span>/root/.bash_history <span class="token punctuation">\\</span>
   ubuntu:18.04 <span class="token punctuation">\\</span>
   <span class="token function">bash</span>

root@2affd44b4667:/<span class="token comment"># history</span>
<span class="token number">1</span>  <span class="token function">ls</span>
<span class="token number">2</span>  diskutil list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以记录在容器输入过的命令了。</p>`,18)]))}const c=n(o,[["render",p],["__file","bind-mounts.html.vue"]]),d=JSON.parse('{"path":"/index/Docker/data_management/bind-mounts.html","title":"挂载主机目录","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"挂载一个主机目录作为数据卷","slug":"挂载一个主机目录作为数据卷","link":"#挂载一个主机目录作为数据卷","children":[]},{"level":2,"title":"查看数据卷的具体信息","slug":"查看数据卷的具体信息","link":"#查看数据卷的具体信息","children":[]},{"level":2,"title":"挂载一个本地主机文件作为数据卷","slug":"挂载一个本地主机文件作为数据卷","link":"#挂载一个本地主机文件作为数据卷","children":[]}],"git":{"createdTime":1728959209000,"updatedTime":1728959209000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.42,"words":427},"filePathRelative":"index/Docker/data_management/bind-mounts.md","localizedDate":"2024年10月15日","excerpt":"\\n<h2>挂载一个主机目录作为数据卷</h2>\\n<p>使用 <code>--mount</code> 标记可以指定挂载一个本地主机的目录到容器中去。</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>$ <span class=\\"token function\\">docker</span> run <span class=\\"token parameter variable\\">-d</span> <span class=\\"token parameter variable\\">-P</span> <span class=\\"token punctuation\\">\\\\</span>\\n    <span class=\\"token parameter variable\\">--name</span> web <span class=\\"token punctuation\\">\\\\</span>\\n    <span class=\\"token comment\\"># -v /src/webapp:/usr/share/nginx/html \\\\</span>\\n    <span class=\\"token parameter variable\\">--mount</span> <span class=\\"token assign-left variable\\">type</span><span class=\\"token operator\\">=</span>bind,source<span class=\\"token operator\\">=</span>/src/webapp,target<span class=\\"token operator\\">=</span>/usr/share/nginx/html <span class=\\"token punctuation\\">\\\\</span>\\n    nginx:alpine\\n</code></pre></div>"}');export{c as comp,d as data};