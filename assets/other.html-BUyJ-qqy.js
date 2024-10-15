import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,d as o,b as n,e as a,a as t,o as l,r as i}from"./app-DT2w9O6A.js";const c={},p={href:"https://openvz.org",target:"_blank",rel:"noopener noreferrer"},u={href:"https://wiki.openvz.org/Download/template/precreated",target:"_blank",rel:"noopener noreferrer"};function v(m,e){const s=i("ExternalLinkIcon");return l(),d("div",null,[e[5]||(e[5]=o('<h1 id="其它制作镜像的方式" tabindex="-1"><a class="header-anchor" href="#其它制作镜像的方式"><span>其它制作镜像的方式</span></a></h1><p>除了标准的使用 <code>Dockerfile</code> 生成镜像的方法外，由于各种特殊需求和历史原因，还提供了一些其它方法用以生成镜像。</p><h2 id="从-rootfs-压缩包导入" tabindex="-1"><a class="header-anchor" href="#从-rootfs-压缩包导入"><span>从 rootfs 压缩包导入</span></a></h2><p>格式：<code>docker import [选项] &lt;文件&gt;|&lt;URL&gt;|- [&lt;仓库名&gt;[:&lt;标签&gt;]]</code></p><p>压缩包可以是本地文件、远程 Web 文件，甚至是从标准输入中得到。压缩包将会在镜像 <code>/</code> 目录展开，并直接作为镜像第一层提交。</p>',5)),n("p",null,[e[2]||(e[2]=a("比如我们想要创建一个 ")),n("a",p,[e[0]||(e[0]=a("OpenVZ")),t(s)]),e[3]||(e[3]=a(" 的 Ubuntu 16.04 ")),n("a",u,[e[1]||(e[1]=a("模板")),t(s)]),e[4]||(e[4]=a("的镜像："))]),e[6]||(e[6]=o(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">import</span> <span class="token punctuation">\\</span>
    http://download.openvz.org/template/precreated/ubuntu-16.04-x86_64.tar.gz <span class="token punctuation">\\</span>
    openvz/ubuntu:16.04

Downloading from http://download.openvz.org/template/precreated/ubuntu-16.04-x86_64.tar.gz
sha256:412b8fc3e3f786dca0197834a698932b9c51b69bd8cf49e100c35d38c9879213
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这条命令自动下载了 <code>ubuntu-16.04-x86_64.tar.gz</code> 文件，并且作为根文件系统展开导入，并保存为镜像 <code>openvz/ubuntu:16.04</code>。</p><p>导入成功后，我们可以用 <code>docker image ls</code> 看到这个导入的镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> image <span class="token function">ls</span> openvz/ubuntu
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
openvz/ubuntu       <span class="token number">16.04</span>               412b8fc3e3f7        <span class="token number">55</span> seconds ago      505MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们查看其历史的话，会看到描述中有导入的文件链接：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">history</span> openvz/ubuntu:16.04
IMAGE               CREATED              CREATED BY          SIZE                COMMENT
f477a6e18e98        About a minute ago                       <span class="token number">214.9</span> MB            Imported from http://download.openvz.org/template/precreated/ubuntu-16.04-x86_64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-镜像的导入和导出-docker-save-和-docker-load" tabindex="-1"><a class="header-anchor" href="#docker-镜像的导入和导出-docker-save-和-docker-load"><span>Docker 镜像的导入和导出 <code>docker save</code> 和 <code>docker load</code></span></a></h2><p>Docker 还提供了 <code>docker save</code> 和 <code>docker load</code> 命令，用以将镜像保存为一个文件，然后传输到另一个位置上，再加载进来。这是在没有 Docker Registry 时的做法，现在已经不推荐，镜像迁移应该直接使用 Docker Registry，无论是直接使用 Docker Hub 还是使用内网私有 Registry 都可以。</p><h3 id="保存镜像" tabindex="-1"><a class="header-anchor" href="#保存镜像"><span>保存镜像</span></a></h3><p>使用 <code>docker save</code> 命令可以将镜像保存为归档文件。</p><p>比如我们希望保存这个 <code>alpine</code> 镜像。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> image <span class="token function">ls</span> alpine
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
alpine              latest              baa5d63471ea        <span class="token number">5</span> weeks ago         <span class="token number">4.803</span> MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存镜像的命令为：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> save alpine <span class="token parameter variable">-o</span> filename
$ <span class="token function">file</span> filename
filename: POSIX <span class="token function">tar</span> archive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的 filename 可以为任意名称甚至任意后缀名，但文件的本质都是归档文件</p><p><strong>注意：如果同名则会覆盖（没有警告）</strong></p><p>若使用 <code>gzip</code> 压缩：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> save alpine <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> alpine-latest.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后我们将 <code>alpine-latest.tar.gz</code> 文件复制到了到了另一个机器上，可以用下面这个命令加载镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> load <span class="token parameter variable">-i</span> alpine-latest.tar.gz
Loaded image: alpine:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们结合这两个命令以及 <code>ssh</code> 甚至 <code>pv</code> 的话，利用 Linux 强大的管道，我们可以写一个命令完成从一个机器将镜像迁移到另一个机器，并且带进度条的功能：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> save <span class="token operator">&lt;</span>镜像名<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token function">bzip2</span> <span class="token operator">|</span> <span class="token function">pv</span> <span class="token operator">|</span> <span class="token function">ssh</span> <span class="token operator">&lt;</span>用户名<span class="token operator">&gt;</span>@<span class="token operator">&lt;</span>主机名<span class="token operator">&gt;</span> <span class="token string">&#39;cat | docker load&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,22))])}const g=r(c,[["render",v],["__file","other.html.vue"]]),h=JSON.parse('{"path":"/index/Docker/image/other.html","title":"其它制作镜像的方式","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"从 rootfs 压缩包导入","slug":"从-rootfs-压缩包导入","link":"#从-rootfs-压缩包导入","children":[]},{"level":2,"title":"Docker 镜像的导入和导出 docker save 和 docker load","slug":"docker-镜像的导入和导出-docker-save-和-docker-load","link":"#docker-镜像的导入和导出-docker-save-和-docker-load","children":[{"level":3,"title":"保存镜像","slug":"保存镜像","link":"#保存镜像","children":[]}]}],"git":{"createdTime":1728959209000,"updatedTime":1728959209000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.17,"words":652},"filePathRelative":"index/Docker/image/other.md","localizedDate":"2024年10月15日","excerpt":"\\n<p>除了标准的使用 <code>Dockerfile</code> 生成镜像的方法外，由于各种特殊需求和历史原因，还提供了一些其它方法用以生成镜像。</p>\\n<h2>从 rootfs 压缩包导入</h2>\\n<p>格式：<code>docker import [选项] &lt;文件&gt;|&lt;URL&gt;|- [&lt;仓库名&gt;[:&lt;标签&gt;]]</code></p>\\n<p>压缩包可以是本地文件、远程 Web 文件，甚至是从标准输入中得到。压缩包将会在镜像 <code>/</code> 目录展开，并直接作为镜像第一层提交。</p>\\n<p>比如我们想要创建一个 <a href=\\"https://openvz.org\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">OpenVZ</a> 的 Ubuntu 16.04 <a href=\\"https://wiki.openvz.org/Download/template/precreated\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">模板</a>的镜像：</p>"}');export{g as comp,h as data};