import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,d as o,b as e,e as s,a,w as c,r as i,o as u}from"./app-DT2w9O6A.js";const p={},k={href:"https://ubuntu.com/server",target:"_blank",rel:"noopener noreferrer"},v={href:"http://test.docker.com",target:"_blank",rel:"noopener noreferrer"},m={href:"https://en.wikipedia.org/wiki/Unix_domain_socket",target:"_blank",rel:"noopener noreferrer"},b={href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/",target:"_blank",rel:"noopener noreferrer"};function h(g,n){const l=i("ExternalLinkIcon"),t=i("RouteLink");return u(),d("div",null,[n[25]||(n[25]=o('<h1 id="ubuntu-安装-docker" tabindex="-1"><a class="header-anchor" href="#ubuntu-安装-docker"><span>Ubuntu 安装 Docker</span></a></h1><blockquote><p>警告：切勿在没有配置 Docker APT 源的情况下直接使用 apt 命令安装 Docker.</p></blockquote><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h2><h3 id="系统要求" tabindex="-1"><a class="header-anchor" href="#系统要求"><span>系统要求</span></a></h3>',4)),e("p",null,[n[1]||(n[1]=s("Docker 支持诸多版本的 ")),e("a",k,[n[0]||(n[0]=s("Ubuntu")),a(l)]),n[2]||(n[2]=s(" 操作系统。但是较旧的版本上将不会有Docker新版本的持续更新，以截至2024年中的几个 Ubuntu LTS（Long Term Support，长期支持）版本为例："))]),n[26]||(n[26]=o(`<ul><li>Ubuntu Noble 24.04 (LTS)，Docker v27.2.1</li><li>Ubuntu Jammy 22.04 (LTS), Docker v27.2.1</li><li>Ubuntu Focal 20.04 (LTS), Docker v27.2.1</li><li>Ubuntu Bionic 18.04 (LTS)，Docker v24.0.2</li></ul><p>在 Ubuntu LTS 版本上，目前 Docker 支持 amd64、arm64、armhf、ppc64el、s390x 等 5 个平台；而非 LTS 版本支持的平台通常较少。同时，LTS 版本会获得 5 年的升级维护支持，这样的系统会获得更长期的安全保障，因此在生产环境中推荐使用 LTS 版本。</p><h3 id="卸载旧版本" tabindex="-1"><a class="header-anchor" href="#卸载旧版本"><span>卸载旧版本</span></a></h3><p>旧版本的 Docker 称为 <code>docker</code> 或者 <code>docker-engine</code>，使用以下命令卸载旧版本：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token keyword">for</span> <span class="token for-or-select variable">pkg</span> <span class="token keyword">in</span> <span class="token function">docker</span> <span class="token punctuation">\\</span>
           docker-engine <span class="token punctuation">\\</span>
           docker.io <span class="token punctuation">\\</span>
           docker-doc <span class="token punctuation">\\</span>
           <span class="token function">docker-compose</span> <span class="token punctuation">\\</span>
           podman-docker <span class="token punctuation">\\</span>
           containerd <span class="token punctuation">\\</span>
           runc<span class="token punctuation">;</span>
<span class="token keyword">do</span>
    <span class="token function">sudo</span> <span class="token function">apt</span> remove <span class="token variable">$pkg</span><span class="token punctuation">;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-apt-安装" tabindex="-1"><a class="header-anchor" href="#使用-apt-安装"><span>使用 APT 安装</span></a></h2><p>由于 <code>apt</code> 源使用 HTTPS 以确保软件下载过程中不被篡改。因此，我们首先需要添加使用 HTTPS 传输的软件包以及 CA 证书。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt</span> update

$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
    apt-transport-https <span class="token punctuation">\\</span>
    ca-certificates <span class="token punctuation">\\</span>
    <span class="token function">curl</span> <span class="token punctuation">\\</span>
    gnupg <span class="token punctuation">\\</span>
    lsb-release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>鉴于国内网络问题，强烈建议使用国内源，官方源请在注释中查看。</p><p>为了确认所下载软件包的合法性，需要添加软件源的 <code>GPG</code> 密钥。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /usr/share/keyrings/docker-archive-keyring.gpg


<span class="token comment"># 官方源</span>
<span class="token comment"># $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，我们需要向 <code>sources.list</code> 中添加 Docker 软件源</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span>
  <span class="token string">&quot;deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://mirrors.aliyun.com/docker-ce/linux/ubuntu \\
  <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> stable&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/docker.list <span class="token operator">&gt;</span> /dev/null


<span class="token comment"># 官方源</span>
<span class="token comment"># $ echo \\</span>
<span class="token comment">#   &quot;deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \\</span>
<span class="token comment">#   $(lsb_release -cs) stable&quot; | sudo tee /etc/apt/sources.list.d/docker.list &gt; /dev/null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>以上命令会添加稳定版本的 Docker APT 镜像源，如果需要测试版本的 Docker 请将 stable 改为 test。</p></blockquote><h3 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker"><span>安装 Docker</span></a></h3><p>更新 apt 软件包缓存，并安装 <code>docker-ce</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt</span> update

$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用脚本自动安装" tabindex="-1"><a class="header-anchor" href="#使用脚本自动安装"><span>使用脚本自动安装</span></a></h2><p>在测试或开发环境中 Docker 官方为了简化安装流程，提供了一套便捷的安装脚本，Ubuntu 系统上可以使用这套脚本安装，另外可以通过 <code>--mirror</code> 选项使用国内源进行安装：</p>`,19)),e("blockquote",null,[e("p",null,[n[4]||(n[4]=s("若你想安装测试版的 Docker, 请从 ")),e("a",v,[n[3]||(n[3]=s("test.docker.com")),a(l)]),n[5]||(n[5]=s(" 获取脚本"))])]),n[27]||(n[27]=o(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># $ curl -fsSL test.docker.com -o get-docker.sh</span>
$ <span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> get.docker.com <span class="token parameter variable">-o</span> get-docker.sh
$ <span class="token function">sudo</span> <span class="token function">sh</span> get-docker.sh <span class="token parameter variable">--mirror</span> Aliyun
<span class="token comment"># $ sudo sh get-docker.sh --mirror AzureChinaCloud</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行这个命令后，脚本就会自动的将一切准备工作做好，并且把 Docker 的稳定(stable)版本安装在系统中。</p><h2 id="启动-docker" tabindex="-1"><a class="header-anchor" href="#启动-docker"><span>启动 Docker</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
$ <span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="建立-docker-用户组" tabindex="-1"><a class="header-anchor" href="#建立-docker-用户组"><span>建立 docker 用户组</span></a></h2>`,5)),e("p",null,[n[7]||(n[7]=s("默认情况下，")),n[8]||(n[8]=e("code",null,"docker",-1)),n[9]||(n[9]=s(" 命令会使用 ")),e("a",m,[n[6]||(n[6]=s("Unix socket")),a(l)]),n[10]||(n[10]=s(" 与 Docker 引擎通讯。而只有 ")),n[11]||(n[11]=e("code",null,"root",-1)),n[12]||(n[12]=s(" 用户和 ")),n[13]||(n[13]=e("code",null,"docker",-1)),n[14]||(n[14]=s(" 组的用户才可以访问 Docker 引擎的 Unix socket。出于安全考虑，一般 Linux 系统上不会直接使用 ")),n[15]||(n[15]=e("code",null,"root",-1)),n[16]||(n[16]=s(" 用户。因此，更好地做法是将需要使用 ")),n[17]||(n[17]=e("code",null,"docker",-1)),n[18]||(n[18]=s(" 的用户加入 ")),n[19]||(n[19]=e("code",null,"docker",-1)),n[20]||(n[20]=s(" 用户组。"))]),n[28]||(n[28]=o(`<p>建立 <code>docker</code> 组：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">groupadd</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将当前用户加入 <code>docker</code> 组：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> <span class="token environment constant">$USER</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>退出当前终端并重新登录，进行如下测试。</p><h2 id="测试-docker-是否安装正确" tabindex="-1"><a class="header-anchor" href="#测试-docker-是否安装正确"><span>测试 Docker 是否安装正确</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">--rm</span> hello-world

Unable to <span class="token function">find</span> image <span class="token string">&#39;hello-world:latest&#39;</span> locally
latest: Pulling from library/hello-world
b8dfde127a29: Pull complete
Digest: sha256:308866a43596e83578c7dfa15e27a73011bdd402185a84c5cd7f32a88b501a24
Status: Downloaded newer image <span class="token keyword">for</span> hello-world:latest

Hello from Docker<span class="token operator">!</span>
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 <span class="token number">1</span>. The Docker client contacted the Docker daemon.
 <span class="token number">2</span>. The Docker daemon pulled the <span class="token string">&quot;hello-world&quot;</span> image from the Docker Hub.
    <span class="token punctuation">(</span>amd64<span class="token punctuation">)</span>
 <span class="token number">3</span>. The Docker daemon created a new container from that image <span class="token function">which</span> runs the
    executable that produces the output you are currently reading.
 <span class="token number">4</span>. The Docker daemon streamed that output to the Docker client, <span class="token function">which</span> sent it
    to your terminal.

To try something <span class="token function">more</span> ambitious, you can run an Ubuntu container with:
 $ <span class="token function">docker</span> run <span class="token parameter variable">-it</span> ubuntu <span class="token function">bash</span>

Share images, automate workflows, and <span class="token function">more</span> with a <span class="token function">free</span> Docker ID:
 https://hub.docker.com/

For <span class="token function">more</span> examples and ideas, visit:
 https://docs.docker.com/get-started/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若能正常输出以上信息，则说明安装成功。</p><h2 id="镜像加速" tabindex="-1"><a class="header-anchor" href="#镜像加速"><span>镜像加速</span></a></h2>`,9)),e("p",null,[n[22]||(n[22]=s("如果在使用过程中发现拉取 Docker 镜像十分缓慢，可以配置 Docker ")),a(t,{to:"/index/Docker/install/mirror.html"},{default:c(()=>n[21]||(n[21]=[s("国内镜像加速")])),_:1}),n[23]||(n[23]=s("。"))]),n[29]||(n[29]=e("h2",{id:"参考文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考文档"},[e("span",null,"参考文档")])],-1)),e("ul",null,[e("li",null,[e("a",b,[n[24]||(n[24]=s("Docker 官方 Ubuntu 安装文档")),a(l)])])])])}const x=r(p,[["render",h],["__file","ubuntu.html.vue"]]),y=JSON.parse('{"path":"/index/Docker/install/ubuntu.html","title":"Ubuntu 安装 Docker","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"准备工作","slug":"准备工作","link":"#准备工作","children":[{"level":3,"title":"系统要求","slug":"系统要求","link":"#系统要求","children":[]},{"level":3,"title":"卸载旧版本","slug":"卸载旧版本","link":"#卸载旧版本","children":[]}]},{"level":2,"title":"使用 APT 安装","slug":"使用-apt-安装","link":"#使用-apt-安装","children":[{"level":3,"title":"安装 Docker","slug":"安装-docker","link":"#安装-docker","children":[]}]},{"level":2,"title":"使用脚本自动安装","slug":"使用脚本自动安装","link":"#使用脚本自动安装","children":[]},{"level":2,"title":"启动 Docker","slug":"启动-docker","link":"#启动-docker","children":[]},{"level":2,"title":"建立 docker 用户组","slug":"建立-docker-用户组","link":"#建立-docker-用户组","children":[]},{"level":2,"title":"测试 Docker 是否安装正确","slug":"测试-docker-是否安装正确","link":"#测试-docker-是否安装正确","children":[]},{"level":2,"title":"镜像加速","slug":"镜像加速","link":"#镜像加速","children":[]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1728959209000,"updatedTime":1728959209000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.49,"words":1048},"filePathRelative":"index/Docker/install/ubuntu.md","localizedDate":"2024年10月15日","excerpt":"\\n<blockquote>\\n<p>警告：切勿在没有配置 Docker APT 源的情况下直接使用 apt 命令安装 Docker.</p>\\n</blockquote>\\n<h2>准备工作</h2>\\n<h3>系统要求</h3>\\n<p>Docker 支持诸多版本的 <a href=\\"https://ubuntu.com/server\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Ubuntu</a> 操作系统。但是较旧的版本上将不会有Docker新版本的持续更新，以截至2024年中的几个 Ubuntu LTS（Long Term Support，长期支持）版本为例：</p>"}');export{x as comp,y as data};