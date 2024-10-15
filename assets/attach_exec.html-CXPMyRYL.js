import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as s,o as c}from"./app-DT2w9O6A.js";const d={};function t(i,e){return c(),a("div",null,e[0]||(e[0]=[s(`<h1 id="进入容器" tabindex="-1"><a class="header-anchor" href="#进入容器"><span>进入容器</span></a></h1><p>在使用 <code>-d</code> 参数时，容器启动后会进入后台。</p><p>某些时候需要进入容器进行操作，包括使用 <code>docker attach</code> 命令或 <code>docker exec</code> 命令，推荐大家使用 <code>docker exec</code> 命令，原因会在下面说明。</p><h2 id="attach-命令" tabindex="-1"><a class="header-anchor" href="#attach-命令"><span><code>attach</code> 命令</span></a></h2><p>下面示例如何使用 <code>docker attach</code> 命令。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-dit</span> ubuntu
243c32535da7d142fb0e6df616a3c3ada0b8ab417937c853a9e1c251f499f550

$ <span class="token function">docker</span> container <span class="token function">ls</span>
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
243c32535da7        ubuntu:latest       <span class="token string">&quot;/bin/bash&quot;</span>         <span class="token number">18</span> seconds ago      Up <span class="token number">17</span> seconds                           nostalgic_hypatia

$ <span class="token function">docker</span> attach 243c
root@243c32535da7:/<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>注意：</em> 如果从这个 stdin 中 exit，会导致容器的停止。</p><h2 id="exec-命令" tabindex="-1"><a class="header-anchor" href="#exec-命令"><span><code>exec</code> 命令</span></a></h2><h3 id="i-t-参数" tabindex="-1"><a class="header-anchor" href="#i-t-参数"><span><code>-i</code> <code>-t</code> 参数</span></a></h3><p><code>docker exec</code> 后边可以跟多个参数，这里主要说明 <code>-i</code> <code>-t</code> 参数。</p><p>只用 <code>-i</code> 参数时，由于没有分配伪终端，界面没有我们熟悉的 Linux 命令提示符，但命令执行结果仍然可以返回。</p><p>当 <code>-i</code> <code>-t</code> 参数一起使用时，则可以看到我们熟悉的 Linux 命令提示符。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-dit</span> ubuntu
69d137adef7a8a689cbcb059e94da5489d3cddd240ff675c640c8d96e84fe1f6

$ <span class="token function">docker</span> container <span class="token function">ls</span>
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
69d137adef7a        ubuntu:latest       <span class="token string">&quot;/bin/bash&quot;</span>         <span class="token number">18</span> seconds ago      Up <span class="token number">17</span> seconds                           zealous_swirles

$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-i</span> 69d1 <span class="token function">bash</span>
<span class="token function">ls</span>
bin
boot
dev
<span class="token punctuation">..</span>.

$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 69d1 <span class="token function">bash</span>
root@69d137adef7a:/<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果从这个 stdin 中 exit，不会导致容器的停止。这就是为什么推荐大家使用 <code>docker exec</code> 的原因。</p><p>更多参数说明请使用 <code>docker exec --help</code> 查看。</p>`,15)]))}const r=n(d,[["render",t],["__file","attach_exec.html.vue"]]),p=JSON.parse('{"path":"/index/Docker/container/attach_exec.html","title":"进入容器","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"attach 命令","slug":"attach-命令","link":"#attach-命令","children":[]},{"level":2,"title":"exec 命令","slug":"exec-命令","link":"#exec-命令","children":[{"level":3,"title":"-i -t 参数","slug":"i-t-参数","link":"#i-t-参数","children":[]}]}],"git":{"createdTime":1728959209000,"updatedTime":1728959209000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.07,"words":322},"filePathRelative":"index/Docker/container/attach_exec.md","localizedDate":"2024年10月15日","excerpt":"\\n<p>在使用 <code>-d</code> 参数时，容器启动后会进入后台。</p>\\n<p>某些时候需要进入容器进行操作，包括使用 <code>docker attach</code> 命令或 <code>docker exec</code> 命令，推荐大家使用 <code>docker exec</code> 命令，原因会在下面说明。</p>\\n<h2><code>attach</code> 命令</h2>\\n<p>下面示例如何使用 <code>docker attach</code> 命令。</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>$ <span class=\\"token function\\">docker</span> run <span class=\\"token parameter variable\\">-dit</span> ubuntu\\n243c32535da7d142fb0e6df616a3c3ada0b8ab417937c853a9e1c251f499f550\\n\\n$ <span class=\\"token function\\">docker</span> container <span class=\\"token function\\">ls</span>\\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES\\n243c32535da7        ubuntu:latest       <span class=\\"token string\\">\\"/bin/bash\\"</span>         <span class=\\"token number\\">18</span> seconds ago      Up <span class=\\"token number\\">17</span> seconds                           nostalgic_hypatia\\n\\n$ <span class=\\"token function\\">docker</span> attach 243c\\nroot@243c32535da7:/<span class=\\"token comment\\">#</span>\\n</code></pre></div>"}');export{r as comp,p as data};
