import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,d as l,b as n,e,a,w as p,r as t,o as c}from"./app-DT2w9O6A.js";const u={},k={href:"https://www.raspberrypi.org/software/operating-systems/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.raspberrypi.org/",target:"_blank",rel:"noopener noreferrer"},b={href:"http://test.docker.com",target:"_blank",rel:"noopener noreferrer"},v={href:"https://en.wikipedia.org/wiki/Unix_domain_socket",target:"_blank",rel:"noopener noreferrer"},h={href:"https://hub.docker.com/u/arm32v7/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://hub.docker.com/u/arm64v8/",target:"_blank",rel:"noopener noreferrer"};function f(y,s){const o=t("ExternalLinkIcon"),i=t("RouteLink");return c(),d("div",null,[s[40]||(s[40]=l('<h1 id="树莓派卡片电脑安装-docker" tabindex="-1"><a class="header-anchor" href="#树莓派卡片电脑安装-docker"><span>树莓派卡片电脑安装 Docker</span></a></h1><blockquote><p>警告：切勿在没有配置 Docker APT 源的情况下直接使用 apt 命令安装 Docker.</p></blockquote><h2 id="系统要求" tabindex="-1"><a class="header-anchor" href="#系统要求"><span>系统要求</span></a></h2><p>Docker 不仅支持 <code>x86_64</code> 架构的计算机，同时也支持 <code>ARM</code> 架构的计算机，本小节内容以树莓派单片电脑为例讲解 <code>ARM</code> 架构安装 Docker。</p>',4)),n("p",null,[s[1]||(s[1]=e("Docker 支持以下版本的 ")),n("a",k,[s[0]||(s[0]=e("Raspberry Pi OS")),a(o)]),s[2]||(s[2]=e(" 操作系统："))]),s[41]||(s[41]=n("ul",null,[n("li",null,"Raspberry Pi OS Buster"),n("li",null,"Raspberry Pi OS Bullseye"),n("li",null,"Raspberry Pi OS Bookworm")],-1)),n("p",null,[s[4]||(s[4]=n("em",null,"注：",-1)),s[5]||(s[5]=e()),s[6]||(s[6]=n("code",null,"Raspberry Pi OS",-1)),s[7]||(s[7]=e(" 由树莓派的开发与维护机构 ")),n("a",m,[s[3]||(s[3]=e("树莓派基金会")),a(o)]),s[8]||(s[8]=e(" 官方支持，并推荐用作树莓派的首选系统，其基于 ")),s[9]||(s[9]=n("code",null,"Debian",-1)),s[10]||(s[10]=e("。"))]),s[42]||(s[42]=l(`<h2 id="使用-apt-安装" tabindex="-1"><a class="header-anchor" href="#使用-apt-安装"><span>使用 APT 安装</span></a></h2><p>由于 apt 源使用 HTTPS 以确保软件下载过程中不被篡改。因此，我们首先需要添加使用 HTTPS 传输的软件包以及 CA 证书。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt-get</span> update

$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
     apt-transport-https <span class="token punctuation">\\</span>
     ca-certificates <span class="token punctuation">\\</span>
     <span class="token function">curl</span> <span class="token punctuation">\\</span>
     gnupg2 <span class="token punctuation">\\</span>
     lsb-release <span class="token punctuation">\\</span>
     software-properties-common
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>鉴于国内网络问题，强烈建议使用国内源，官方源请在注释中查看。</p><p>为了确认所下载软件包的合法性，需要添加软件源的 GPG 密钥。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://mirrors.aliyun.com/docker-ce/linux/raspbian/gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -


<span class="token comment"># 官方源</span>
<span class="token comment"># $ curl -fsSL https://download.docker.com/linux/raspbian/gpg | sudo apt-key add -</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，我们需要向 <code>sources.list</code> 中添加 Docker 软件源：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> add-apt-repository <span class="token punctuation">\\</span>
    <span class="token string">&quot;deb [arch=armhf] https://mirrors.aliyun.com/docker-ce/linux/raspbian \\
    <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> \\
    stable&quot;</span>


<span class="token comment"># 官方源</span>
<span class="token comment"># $ sudo add-apt-repository \\</span>
<span class="token comment">#    &quot;deb [arch=armhf] https://download.docker.com/linux/raspbian \\</span>
<span class="token comment">#    $(lsb_release -cs) \\</span>
<span class="token comment">#    stable&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>以上命令会添加稳定版本的 Docker APT 源，如果需要测试版本的 Docker 请将 stable 改为 test。</p></blockquote><h4 id="报错解决办法" tabindex="-1"><a class="header-anchor" href="#报错解决办法"><span>报错解决办法</span></a></h4><p>在 <code>Raspberry Pi OS Bullseye/Bookworm</code> 中，添加 Docker 软件源的步骤可能会出现如下报错:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
 File <span class="token string">&quot;/usr/bin/add-apt-repository&quot;</span>, line <span class="token number">95</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
   sp <span class="token operator">=</span> SoftwareProperties<span class="token punctuation">(</span>options<span class="token operator">=</span>options<span class="token punctuation">)</span>
 File <span class="token string">&quot;/usr/lib/python3/dist-packages/softwareproperties/SoftwareProperties.py&quot;</span>, line <span class="token number">109</span>, <span class="token keyword">in</span> __init__
   self.reload_sourceslist<span class="token punctuation">(</span><span class="token punctuation">)</span>
 File <span class="token string">&quot;/usr/lib/python3/dist-packages/softwareproperties/SoftwareProperties.py&quot;</span>, line <span class="token number">599</span>, <span class="token keyword">in</span> reload_sourceslist
   self.distro.get_sources<span class="token punctuation">(</span>self.sourceslist<span class="token punctuation">)</span>    
 File <span class="token string">&quot;/usr/lib/python3/dist-packages/aptsources/distro.py&quot;</span>, line <span class="token number">91</span>, <span class="token keyword">in</span> get_sources
   raise NoDistroTemplateException<span class="token punctuation">(</span>
aptsources.distro.NoDistroTemplateException: Error: could not <span class="token function">find</span> a distribution template <span class="token keyword">for</span> Raspbian/bullseye
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过以下命令手动添加镜像源到 <code>/etc/apt/sources.list</code> 文件中即可解决:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;deb [arch=armhf] https://mirrors.aliyun.com/docker-ce/linux/raspbian <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> stable&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> /etc/apt/sources.list


<span class="token comment"># 官方源</span>
<span class="token comment"># $ sudo echo &quot;deb [arch=armhf] https://download.docker.com/linux/raspbian $(lsb_release -cs) stable&quot; | sudo tee -a /etc/apt/sources.list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker"><span>安装 Docker</span></a></h3><p>更新 apt 软件包缓存，并安装 <code>docker-ce</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt-get</span> update

$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用脚本自动安装" tabindex="-1"><a class="header-anchor" href="#使用脚本自动安装"><span>使用脚本自动安装</span></a></h2><p>在测试或开发环境中 Docker 官方为了简化安装流程，提供了一套便捷的安装脚本，Raspberry Pi OS 系统上可以使用这套脚本安装，另外可以通过 <code>--mirror</code> 选项使用国内源进行安装：</p>`,19)),n("blockquote",null,[n("p",null,[s[12]||(s[12]=e("若你想安装测试版的 Docker, 请从 ")),n("a",b,[s[11]||(s[11]=e("test.docker.com")),a(o)]),s[13]||(s[13]=e(" 获取脚本"))])]),s[43]||(s[43]=l(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># $ curl -fsSL test.docker.com -o get-docker.sh</span>
$ <span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> get.docker.com <span class="token parameter variable">-o</span> get-docker.sh
$ <span class="token function">sudo</span> <span class="token function">sh</span> get-docker.sh <span class="token parameter variable">--mirror</span> Aliyun
<span class="token comment"># $ sudo sh get-docker.sh --mirror AzureChinaCloud</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行这个命令后，脚本就会自动的将一切准备工作做好，并且把 Docker 的稳定(stable)版本安装在系统中。</p><h2 id="启动-docker" tabindex="-1"><a class="header-anchor" href="#启动-docker"><span>启动 Docker</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
$ <span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="建立-docker-用户组" tabindex="-1"><a class="header-anchor" href="#建立-docker-用户组"><span>建立 docker 用户组</span></a></h2>`,5)),n("p",null,[s[15]||(s[15]=e("默认情况下，")),s[16]||(s[16]=n("code",null,"docker",-1)),s[17]||(s[17]=e(" 命令会使用 ")),n("a",v,[s[14]||(s[14]=e("Unix socket")),a(o)]),s[18]||(s[18]=e(" 与 Docker 引擎通讯。而只有 ")),s[19]||(s[19]=n("code",null,"root",-1)),s[20]||(s[20]=e(" 用户和 ")),s[21]||(s[21]=n("code",null,"docker",-1)),s[22]||(s[22]=e(" 组的用户才可以访问 Docker 引擎的 Unix socket。出于安全考虑，一般 Linux 系统上不会直接使用 ")),s[23]||(s[23]=n("code",null,"root",-1)),s[24]||(s[24]=e(" 用户。因此，更好地做法是将需要使用 ")),s[25]||(s[25]=n("code",null,"docker",-1)),s[26]||(s[26]=e(" 的用户加入 ")),s[27]||(s[27]=n("code",null,"docker",-1)),s[28]||(s[28]=e(" 用户组。"))]),s[44]||(s[44]=l(`<p>建立 <code>docker</code> 组：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">groupadd</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将当前用户加入 <code>docker</code> 组：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> <span class="token environment constant">$USER</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>退出当前终端并重新登录，进行如下测试。</p><h2 id="测试-docker-是否安装正确" tabindex="-1"><a class="header-anchor" href="#测试-docker-是否安装正确"><span>测试 Docker 是否安装正确</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">--rm</span> hello-world

Unable to <span class="token function">find</span> image <span class="token string">&#39;hello-world:latest&#39;</span> locally
latest: Pulling from library/hello-world
4ee5c797bcd7: Pull complete
Digest: sha256:308866a43596e83578c7dfa15e27a73011bdd402185a84c5cd7f32a88b501a24
Status: Downloaded newer image <span class="token keyword">for</span> hello-world:latest

Hello from Docker<span class="token operator">!</span>
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 <span class="token number">1</span>. The Docker client contacted the Docker daemon.
 <span class="token number">2</span>. The Docker daemon pulled the <span class="token string">&quot;hello-world&quot;</span> image from the Docker Hub.
    <span class="token punctuation">(</span>arm32v7<span class="token punctuation">)</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若能正常输出以上信息，则说明安装成功。</p>`,8)),n("p",null,[s[31]||(s[31]=n("em",null,"注意：",-1)),s[32]||(s[32]=e(" ARM 平台不能使用 ")),s[33]||(s[33]=n("code",null,"x86",-1)),s[34]||(s[34]=e(" 镜像，查看 Raspberry Pi OS 可使用镜像请访问 ")),n("a",h,[s[29]||(s[29]=e("arm32v7")),a(o)]),s[35]||(s[35]=e(" 或者 ")),n("a",g,[s[30]||(s[30]=e("arm64v8")),a(o)]),s[36]||(s[36]=e("。"))]),s[45]||(s[45]=n("h2",{id:"镜像加速",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#镜像加速"},[n("span",null,"镜像加速")])],-1)),n("p",null,[s[38]||(s[38]=e("如果在使用过程中发现拉取 Docker 镜像十分缓慢，可以配置 Docker ")),a(i,{to:"/index/Docker/install/mirror.html"},{default:p(()=>s[37]||(s[37]=[e("国内镜像加速")])),_:1}),s[39]||(s[39]=e("。"))])])}const D=r(u,[["render",f],["__file","raspberry-pi.html.vue"]]),q=JSON.parse('{"path":"/index/Docker/install/raspberry-pi.html","title":"树莓派卡片电脑安装 Docker","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"系统要求","slug":"系统要求","link":"#系统要求","children":[]},{"level":2,"title":"使用 APT 安装","slug":"使用-apt-安装","link":"#使用-apt-安装","children":[{"level":4,"title":"报错解决办法","slug":"报错解决办法","link":"#报错解决办法","children":[]},{"level":3,"title":"安装 Docker","slug":"安装-docker","link":"#安装-docker","children":[]}]},{"level":2,"title":"使用脚本自动安装","slug":"使用脚本自动安装","link":"#使用脚本自动安装","children":[]},{"level":2,"title":"启动 Docker","slug":"启动-docker","link":"#启动-docker","children":[]},{"level":2,"title":"建立 docker 用户组","slug":"建立-docker-用户组","link":"#建立-docker-用户组","children":[]},{"level":2,"title":"测试 Docker 是否安装正确","slug":"测试-docker-是否安装正确","link":"#测试-docker-是否安装正确","children":[]},{"level":2,"title":"镜像加速","slug":"镜像加速","link":"#镜像加速","children":[]}],"git":{"createdTime":1728959209000,"updatedTime":1728959209000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.66,"words":1099},"filePathRelative":"index/Docker/install/raspberry-pi.md","localizedDate":"2024年10月15日","excerpt":"\\n<blockquote>\\n<p>警告：切勿在没有配置 Docker APT 源的情况下直接使用 apt 命令安装 Docker.</p>\\n</blockquote>\\n<h2>系统要求</h2>\\n<p>Docker 不仅支持 <code>x86_64</code> 架构的计算机，同时也支持 <code>ARM</code> 架构的计算机，本小节内容以树莓派单片电脑为例讲解 <code>ARM</code> 架构安装 Docker。</p>\\n<p>Docker 支持以下版本的 <a href=\\"https://www.raspberrypi.org/software/operating-systems/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Raspberry Pi OS</a> 操作系统：</p>"}');export{D as comp,q as data};
