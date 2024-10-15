import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,d as s,b as n,e as t,a as l,o as p,r as d}from"./app-DT2w9O6A.js";const r={},i={href:"https://golang.org/pkg/path/filepath/#Match",target:"_blank",rel:"noopener noreferrer"};function u(k,e){const o=d("ExternalLinkIcon");return p(),c("div",null,[e[4]||(e[4]=s(`<h1 id="copy-复制文件" tabindex="-1"><a class="header-anchor" href="#copy-复制文件"><span>COPY 复制文件</span></a></h1><p>格式：</p><ul><li><code>COPY [--chown=&lt;user&gt;:&lt;group&gt;] &lt;源路径&gt;... &lt;目标路径&gt;</code></li><li><code>COPY [--chown=&lt;user&gt;:&lt;group&gt;] [&quot;&lt;源路径1&gt;&quot;,... &quot;&lt;目标路径&gt;&quot;]</code></li></ul><p>和 <code>RUN</code> 指令一样，也有两种格式，一种类似于命令行，一种类似于函数调用。</p><p><code>COPY</code> 指令将从构建上下文目录中 <code>&lt;源路径&gt;</code> 的文件/目录复制到新的一层的镜像内的 <code>&lt;目标路径&gt;</code> 位置。比如：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">COPY</span> package.json /usr/src/app/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6)),n("p",null,[e[1]||(e[1]=n("code",null,"<源路径>",-1)),e[2]||(e[2]=t(" 可以是多个，甚至可以是通配符，其通配符规则要满足 Go 的 ")),n("a",i,[e[0]||(e[0]=n("code",null,"filepath.Match",-1)),l(o)]),e[3]||(e[3]=t(" 规则，如："))]),e[5]||(e[5]=s(`<div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">COPY</span> hom* /mydir/</span>
<span class="token instruction"><span class="token keyword">COPY</span> hom?.txt /mydir/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&lt;目标路径&gt;</code> 可以是容器内的绝对路径，也可以是相对于工作目录的相对路径（工作目录可以用 <code>WORKDIR</code> 指令来指定）。目标路径不需要事先创建，如果目录不存在会在复制文件前先行创建缺失目录。</p><p>此外，还需要注意一点，使用 <code>COPY</code> 指令，源文件的各种元数据都会保留。比如读、写、执行权限、文件变更时间等。这个特性对于镜像定制很有用。特别是构建相关文件都在使用 Git 进行管理的时候。</p><p>在使用该指令的时候还可以加上 <code>--chown=&lt;user&gt;:&lt;group&gt;</code> 选项来改变文件的所属用户及所属组。</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--chown</span><span class="token punctuation">=</span><span class="token string">55:mygroup</span></span> files* /mydir/</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--chown</span><span class="token punctuation">=</span><span class="token string">bin</span></span> files* /mydir/</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--chown</span><span class="token punctuation">=</span><span class="token string">1</span></span> files* /mydir/</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--chown</span><span class="token punctuation">=</span><span class="token string">10:11</span></span> files* /mydir/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果源路径为文件夹，复制的时候不是直接复制该文件夹，而是将文件夹中的内容复制到目标路径。</p>`,6))])}const v=a(r,[["render",u],["__file","copy.html.vue"]]),y=JSON.parse('{"path":"/index/Docker/image/dockerfile/copy.html","title":"COPY 复制文件","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1728959209000,"updatedTime":1728959209000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.33,"words":399},"filePathRelative":"index/Docker/image/dockerfile/copy.md","localizedDate":"2024年10月15日","excerpt":"\\n<p>格式：</p>\\n<ul>\\n<li><code>COPY [--chown=&lt;user&gt;:&lt;group&gt;] &lt;源路径&gt;... &lt;目标路径&gt;</code></li>\\n<li><code>COPY [--chown=&lt;user&gt;:&lt;group&gt;] [\\"&lt;源路径1&gt;\\",... \\"&lt;目标路径&gt;\\"]</code></li>\\n</ul>\\n<p>和 <code>RUN</code> 指令一样，也有两种格式，一种类似于命令行，一种类似于函数调用。</p>\\n<p><code>COPY</code> 指令将从构建上下文目录中 <code>&lt;源路径&gt;</code> 的文件/目录复制到新的一层的镜像内的 <code>&lt;目标路径&gt;</code> 位置。比如：</p>"}');export{v as comp,y as data};
