import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,b as n,e as a,a as c,d as l,o as i,r as p}from"./app-DT2w9O6A.js";const r={},d={href:"https://hub.docker.com/search?q=&type=image",target:"_blank",rel:"noopener noreferrer"};function u(b,e){const s=p("ExternalLinkIcon");return i(),t("div",null,[e[3]||(e[3]=n("h1",{id:"获取镜像",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#获取镜像"},[n("span",null,"获取镜像")])],-1)),n("p",null,[e[1]||(e[1]=a("之前提到过，")),n("a",d,[e[0]||(e[0]=a("Docker Hub")),c(s)]),e[2]||(e[2]=a(" 上有大量的高质量的镜像可以用，这里我们就说一下怎么获取这些镜像。"))]),e[4]||(e[4]=l(`<p>从 Docker 镜像仓库获取镜像的命令是 <code>docker pull</code>。其命令格式为：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> pull <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> <span class="token punctuation">[</span>Docker Registry 地址<span class="token punctuation">[</span>:端口号<span class="token punctuation">]</span>/<span class="token punctuation">]</span>仓库名<span class="token punctuation">[</span>:标签<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>具体的选项可以通过 <code>docker pull --help</code> 命令看到，这里我们说一下镜像名称的格式。</p><ul><li>Docker 镜像仓库地址：地址的格式一般是 <code>&lt;域名/IP&gt;[:端口号]</code>。默认地址是 Docker Hub(<code>docker.io</code>)。</li><li>仓库名：如之前所说，这里的仓库名是两段式名称，即 <code>&lt;用户名&gt;/&lt;软件名&gt;</code>。对于 Docker Hub，如果不给出用户名，则默认为 <code>library</code>，也就是官方镜像。</li></ul><p>比如：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> pull ubuntu:18.04
<span class="token number">18.04</span>: Pulling from library/ubuntu
92dc2a97ff99: Pull complete
be13a9d27eb8: Pull complete
c8299583700a: Pull complete
Digest: sha256:4bc3ae6596938cb0d9e5ac51a1152ec9dcac2a1c50829c74abd9c4361e321b26
Status: Downloaded newer image <span class="token keyword">for</span> ubuntu:18.04
docker.io/library/ubuntu:18.04
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的命令中没有给出 Docker 镜像仓库地址，因此将会从 Docker Hub （<code>docker.io</code>）获取镜像。而镜像名称是 <code>ubuntu:18.04</code>，因此将会获取官方镜像 <code>library/ubuntu</code> 仓库中标签为 <code>18.04</code> 的镜像。<code>docker pull</code> 命令的输出结果最后一行给出了镜像的完整名称，即： <code>docker.io/library/ubuntu:18.04</code>。</p><p>从下载过程中可以看到我们之前提及的分层存储的概念，镜像是由多层存储所构成。下载也是一层层的去下载，并非单一文件。下载过程中给出了每一层的 ID 的前 12 位。并且下载结束后，给出该镜像完整的 <code>sha256</code> 的摘要，以确保下载一致性。</p><p>在使用上面命令的时候，你可能会发现，你所看到的层 ID 以及 <code>sha256</code> 的摘要和这里的不一样。这是因为官方镜像是一直在维护的，有任何新的 bug，或者版本更新，都会进行修复再以原来的标签发布，这样可以确保任何使用这个标签的用户可以获得更安全、更稳定的镜像。</p><p><em>如果从 Docker Hub 下载镜像非常缓慢，可以参照 [镜像加速器]一节配置加速器。</em></p><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行"><span>运行</span></a></h2><p>有了镜像后，我们就能够以这个镜像为基础启动并运行一个容器。以上面的 <code>ubuntu:18.04</code> 为例，如果我们打算启动里面的 <code>bash</code> 并且进行交互式操作的话，可以执行下面的命令。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> ubuntu:18.04 <span class="token function">bash</span>

root@e7009c6ce357:/<span class="token comment"># cat /etc/os-release</span>
<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">&quot;Ubuntu&quot;</span>
<span class="token assign-left variable">VERSION</span><span class="token operator">=</span><span class="token string">&quot;18.04.1 LTS (Bionic Beaver)&quot;</span>
<span class="token assign-left variable">ID</span><span class="token operator">=</span>ubuntu
<span class="token assign-left variable">ID_LIKE</span><span class="token operator">=</span>debian
<span class="token assign-left variable">PRETTY_NAME</span><span class="token operator">=</span><span class="token string">&quot;Ubuntu 18.04.1 LTS&quot;</span>
<span class="token assign-left variable">VERSION_ID</span><span class="token operator">=</span><span class="token string">&quot;18.04&quot;</span>
<span class="token assign-left variable">HOME_URL</span><span class="token operator">=</span><span class="token string">&quot;https://www.ubuntu.com/&quot;</span>
<span class="token assign-left variable">SUPPORT_URL</span><span class="token operator">=</span><span class="token string">&quot;https://help.ubuntu.com/&quot;</span>
<span class="token assign-left variable">BUG_REPORT_URL</span><span class="token operator">=</span><span class="token string">&quot;https://bugs.launchpad.net/ubuntu/&quot;</span>
<span class="token assign-left variable">PRIVACY_POLICY_URL</span><span class="token operator">=</span><span class="token string">&quot;https://www.ubuntu.com/legal/terms-and-policies/privacy-policy&quot;</span>
<span class="token assign-left variable">VERSION_CODENAME</span><span class="token operator">=</span>bionic
<span class="token assign-left variable">UBUNTU_CODENAME</span><span class="token operator">=</span>bionic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docker run</code> 就是运行容器的命令，具体格式我们会在 <a href="../container">容器</a> 一节进行详细讲解，我们这里简要的说明一下上面用到的参数。</p><ul><li><code>-it</code>：这是两个参数，一个是 <code>-i</code>：交互式操作，一个是 <code>-t</code> 终端。我们这里打算进入 <code>bash</code> 执行一些命令并查看返回结果，因此我们需要交互式终端。</li><li><code>--rm</code>：这个参数是说容器退出后随之将其删除。默认情况下，为了排障需求，退出的容器并不会立即删除，除非手动 <code>docker rm</code>。我们这里只是随便执行个命令，看看结果，不需要排障和保留结果，因此使用 <code>--rm</code> 可以避免浪费空间。</li><li><code>ubuntu:18.04</code>：这是指用 <code>ubuntu:18.04</code> 镜像为基础来启动容器。</li><li><code>bash</code>：放在镜像名后的是 <strong>命令</strong>，这里我们希望有个交互式 Shell，因此用的是 <code>bash</code>。</li></ul><p>进入容器后，我们可以在 Shell 下操作，执行任何所需的命令。这里，我们执行了 <code>cat /etc/os-release</code>，这是 Linux 常用的查看当前系统版本的命令，从返回的结果可以看到容器内是 <code>Ubuntu 18.04.1 LTS</code> 系统。</p><p>最后我们通过 <code>exit</code> 退出了这个容器。</p>`,17))])}const v=o(r,[["render",u],["__file","pull.html.vue"]]),g=JSON.parse('{"path":"/index/Docker/image/pull.html","title":"获取镜像","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"运行","slug":"运行","link":"#运行","children":[]}],"git":{"createdTime":1728959209000,"updatedTime":1728959209000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.28,"words":984},"filePathRelative":"index/Docker/image/pull.md","localizedDate":"2024年10月15日","excerpt":"\\n<p>之前提到过，<a href=\\"https://hub.docker.com/search?q=&amp;type=image\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Docker Hub</a> 上有大量的高质量的镜像可以用，这里我们就说一下怎么获取这些镜像。</p>\\n<p>从 Docker 镜像仓库获取镜像的命令是 <code>docker pull</code>。其命令格式为：</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>$ <span class=\\"token function\\">docker</span> pull <span class=\\"token punctuation\\">[</span>选项<span class=\\"token punctuation\\">]</span> <span class=\\"token punctuation\\">[</span>Docker Registry 地址<span class=\\"token punctuation\\">[</span>:端口号<span class=\\"token punctuation\\">]</span>/<span class=\\"token punctuation\\">]</span>仓库名<span class=\\"token punctuation\\">[</span>:标签<span class=\\"token punctuation\\">]</span>\\n</code></pre></div>"}');export{v as comp,g as data};
