import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as s,e as a,a as t,d as o,o as c,r as l}from"./app-DT2w9O6A.js";const r={},u={href:"https://docs.docker.com/docker-for-mac/multi-arch/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://docs.docker.com/registry/spec/manifest-v2-2/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.docker.com/blog/multi-arch-all-the-things/",target:"_blank",rel:"noopener noreferrer"};function m(v,n){const e=l("ExternalLinkIcon");return c(),i("div",null,[n[12]||(n[12]=s("h1",{id:"构建多种系统架构支持的-docker-镜像-docker-manifest-命令详解",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#构建多种系统架构支持的-docker-镜像-docker-manifest-命令详解"},[s("span",null,"构建多种系统架构支持的 Docker 镜像 -- docker manifest 命令详解")])],-1)),n[13]||(n[13]=s("p",null,[a("我们知道使用镜像创建一个容器，该镜像必须与 Docker 宿主机系统架构一致，例如 "),s("code",null,"Linux x86_64"),a(" 架构的系统中只能使用 "),s("code",null,"Linux x86_64"),a(" 的镜像创建容器。")],-1)),s("blockquote",null,[s("p",null,[n[1]||(n[1]=a("Windows、macOS 除外，其使用了 ")),s("a",u,[n[0]||(n[0]=a("binfmt_misc")),t(e)]),n[2]||(n[2]=a(" 提供了多种架构支持，在 Windows、macOS 系统上 (x86_64) 可以运行 arm 等其他架构的镜像。"))])]),n[14]||(n[14]=o(`<p>例如我们在 <code>Linux x86_64</code> 中构建一个 <code>username/test</code> 镜像。</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> alpine</span>

<span class="token instruction"><span class="token keyword">CMD</span> echo 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建镜像后推送到 Docker Hub，之后我们尝试在树莓派 <code>Linux arm64v8</code> 中使用这个镜像。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> username/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以发现这个镜像根本获取不到。</p><p>要解决这个问题，通常采用的做法是通过镜像名区分不同系统架构的镜像，例如在 <code>Linux x86_64</code> 和 <code>Linux arm64v8</code> 分别构建 <code>username/test</code> 和 <code>username/arm64v8-test</code> 镜像。运行时使用对应架构的镜像即可。</p><p>这样做显得很繁琐，那么有没有一种方法让 Docker 引擎根据系统架构自动拉取对应的镜像呢？</p><p>我们发现在 <code>Linux x86_64</code> 和 <code>Linux arm64v8</code> 架构的计算机中分别使用 <code>golang:alpine</code> 镜像运行容器 <code>$ docker run golang:alpine go version</code> 时，容器能够正常的运行。</p><p>这是什么原因呢？</p>`,9)),s("p",null,[n[7]||(n[7]=a("原因就是 ")),n[8]||(n[8]=s("code",null,"golang:alpine",-1)),n[9]||(n[9]=a(" 官方镜像有一个 ")),s("a",d,[n[3]||(n[3]=s("code",null,"manifest",-1)),n[4]||(n[4]=a(" 列表 (")),n[5]||(n[5]=s("code",null,"manifest list",-1)),n[6]||(n[6]=a(")")),t(e)]),n[10]||(n[10]=a("。"))]),n[15]||(n[15]=o(`<p>当用户获取一个镜像时，Docker 引擎会首先查找该镜像是否有 <code>manifest</code> 列表，如果有的话 Docker 引擎会按照 Docker 运行环境（系统及架构）查找出对应镜像（例如 <code>golang:alpine</code>）。如果没有的话会直接获取镜像（例如上例中我们构建的 <code>username/test</code>）。</p><p>我们可以使用 <code>$ docker manifest inspect golang:alpine</code> 查看这个 <code>manifest</code> 列表的结构。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> manifest inspect golang:alpine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;schemaVersion&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
   <span class="token property">&quot;mediaType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/vnd.docker.distribution.manifest.list.v2+json&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;manifests&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
         <span class="token property">&quot;mediaType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/vnd.docker.distribution.manifest.v2+json&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1365</span><span class="token punctuation">,</span>
         <span class="token property">&quot;digest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sha256:5e28ac423243b187f464d635bcfe1e909f4a31c6c8bce51d0db0a1062bec9e16&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;architecture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;amd64&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;os&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linux&quot;</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
         <span class="token property">&quot;mediaType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/vnd.docker.distribution.manifest.v2+json&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1365</span><span class="token punctuation">,</span>
         <span class="token property">&quot;digest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sha256:2945c46e26c9787da884b4065d1de64cf93a3b81ead1b949843dda1fcd458bae&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;architecture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arm&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;os&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linux&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;variant&quot;</span><span class="token operator">:</span> <span class="token string">&quot;v7&quot;</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
         <span class="token property">&quot;mediaType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/vnd.docker.distribution.manifest.v2+json&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1365</span><span class="token punctuation">,</span>
         <span class="token property">&quot;digest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sha256:87fff60114fd3402d0c1a7ddf1eea1ded658f171749b57dc782fd33ee2d47b2d&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;architecture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arm64&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;os&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linux&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;variant&quot;</span><span class="token operator">:</span> <span class="token string">&quot;v8&quot;</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
         <span class="token property">&quot;mediaType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/vnd.docker.distribution.manifest.v2+json&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1365</span><span class="token punctuation">,</span>
         <span class="token property">&quot;digest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sha256:607b43f1d91144f82a9433764e85eb3ccf83f73569552a49bc9788c31b4338de&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;architecture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;386&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;os&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linux&quot;</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
         <span class="token property">&quot;mediaType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/vnd.docker.distribution.manifest.v2+json&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1365</span><span class="token punctuation">,</span>
         <span class="token property">&quot;digest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sha256:25ead0e21ed5e246ce31e274b98c09aaf548606788ef28eaf375dc8525064314&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;architecture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ppc64le&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;os&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linux&quot;</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
         <span class="token property">&quot;mediaType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/vnd.docker.distribution.manifest.v2+json&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1365</span><span class="token punctuation">,</span>
         <span class="token property">&quot;digest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sha256:69f5907fa93ea591175b2c688673775378ed861eeb687776669a48692bb9754d&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;architecture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;s390x&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;os&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linux&quot;</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出 <code>manifest</code> 列表中包含了不同系统架构所对应的镜像 <code>digest</code> 值，这样 Docker 就可以在不同的架构中使用相同的 <code>manifest</code> (例如 <code>golang:alpine</code>) 获取对应的镜像。</p><p>下面介绍如何使用 <code>$ docker manifest</code> 命令创建并推送 <code>manifest</code> 列表到 Docker Hub。</p><h2 id="构建镜像" tabindex="-1"><a class="header-anchor" href="#构建镜像"><span>构建镜像</span></a></h2><p>首先在 <code>Linux x86_64</code> 构建 <code>username/x8664-test</code> 镜像。并在 <code>Linux arm64v8</code> 中构建 <code>username/arm64v8-test</code> 镜像，构建好之后推送到 Docker Hub。</p><h2 id="创建-manifest-列表" tabindex="-1"><a class="header-anchor" href="#创建-manifest-列表"><span>创建 <code>manifest</code> 列表</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># $ docker manifest create MANIFEST_LIST MANIFEST [MANIFEST...]</span>
$ <span class="token function">docker</span> manifest create username/test <span class="token punctuation">\\</span>
      username/x8664-test <span class="token punctuation">\\</span>
      username/arm64v8-test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当要修改一个 <code>manifest</code> 列表时，可以加入 <code>-a</code> 或 <code>--amend</code> 参数。</p><h2 id="设置-manifest-列表" tabindex="-1"><a class="header-anchor" href="#设置-manifest-列表"><span>设置 <code>manifest</code> 列表</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># $ docker manifest annotate [OPTIONS] MANIFEST_LIST MANIFEST</span>
$ <span class="token function">docker</span> manifest annotate username/test <span class="token punctuation">\\</span>
      username/x8664-test <span class="token punctuation">\\</span>
      <span class="token parameter variable">--os</span> linux <span class="token parameter variable">--arch</span> x86_64

$ <span class="token function">docker</span> manifest annotate username/test <span class="token punctuation">\\</span>
      username/arm64v8-test <span class="token punctuation">\\</span>
      <span class="token parameter variable">--os</span> linux <span class="token parameter variable">--arch</span> arm64 <span class="token parameter variable">--variant</span> v8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就配置好了 <code>manifest</code> 列表。</p><h2 id="查看-manifest-列表" tabindex="-1"><a class="header-anchor" href="#查看-manifest-列表"><span>查看 <code>manifest</code> 列表</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> manifest inspect username/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="推送-manifest-列表" tabindex="-1"><a class="header-anchor" href="#推送-manifest-列表"><span>推送 <code>manifest</code> 列表</span></a></h2><p>最后我们可以将其推送到 Docker Hub。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> manifest push username/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><p>我们在 <code>Linux x86_64</code> <code>Linux arm64v8</code> 中分别执行 <code>$ docker run -it --rm username/test</code> 命令，发现可以正确的执行。</p><h2 id="官方博客" tabindex="-1"><a class="header-anchor" href="#官方博客"><span>官方博客</span></a></h2><p>详细了解 <code>manifest</code> 可以阅读官方博客。</p>`,23)),s("ul",null,[s("li",null,[s("a",k,[n[11]||(n[11]=a("https://www.docker.com/blog/multi-arch-all-the-things/")),t(e)])])])])}const f=p(r,[["render",m],["__file","manifest.html.vue"]]),g=JSON.parse('{"path":"/index/Docker/image/manifest.html","title":"构建多种系统架构支持的 Docker 镜像 -- docker manifest 命令详解","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"构建镜像","slug":"构建镜像","link":"#构建镜像","children":[]},{"level":2,"title":"创建 manifest 列表","slug":"创建-manifest-列表","link":"#创建-manifest-列表","children":[]},{"level":2,"title":"设置 manifest 列表","slug":"设置-manifest-列表","link":"#设置-manifest-列表","children":[]},{"level":2,"title":"查看 manifest 列表","slug":"查看-manifest-列表","link":"#查看-manifest-列表","children":[]},{"level":2,"title":"推送 manifest 列表","slug":"推送-manifest-列表","link":"#推送-manifest-列表","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]},{"level":2,"title":"官方博客","slug":"官方博客","link":"#官方博客","children":[]}],"git":{"createdTime":1728959209000,"updatedTime":1728959209000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.81,"words":842},"filePathRelative":"index/Docker/image/manifest.md","localizedDate":"2024年10月15日","excerpt":"\\n<p>我们知道使用镜像创建一个容器，该镜像必须与 Docker 宿主机系统架构一致，例如 <code>Linux x86_64</code> 架构的系统中只能使用 <code>Linux x86_64</code> 的镜像创建容器。</p>\\n<blockquote>\\n<p>Windows、macOS 除外，其使用了 <a href=\\"https://docs.docker.com/docker-for-mac/multi-arch/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">binfmt_misc</a> 提供了多种架构支持，在 Windows、macOS 系统上 (x86_64) 可以运行 arm 等其他架构的镜像。</p>\\n</blockquote>"}');export{f as comp,g as data};