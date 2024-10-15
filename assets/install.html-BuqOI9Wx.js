import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as n,e as s,a as t,d,o as c,r as o}from"./app-DT2w9O6A.js";const r={},p={href:"https://github.com/etcd-io/etcd",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/etcd-io/etcd/releases/",target:"_blank",rel:"noopener noreferrer"};function v(m,e){const a=o("ExternalLinkIcon");return c(),i("div",null,[e[11]||(e[11]=n("h1",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装"},[n("span",null,"安装")])],-1)),n("p",null,[e[1]||(e[1]=n("code",null,"etcd",-1)),e[2]||(e[2]=s(" 基于 ")),e[3]||(e[3]=n("code",null,"Go",-1)),e[4]||(e[4]=s(" 语言实现，因此，用户可以从 ")),n("a",p,[e[0]||(e[0]=s("项目主页")),t(a)]),e[5]||(e[5]=s(" 下载源代码自行编译，也可以下载编译好的二进制文件，甚至直接使用制作好的 ")),e[6]||(e[6]=n("code",null,"Docker",-1)),e[7]||(e[7]=s(" 镜像文件来体验。"))]),e[12]||(e[12]=n("blockquote",null,[n("p",null,[s("注意：本章节内容基于 etcd "),n("code",null,"3.4.x"),s(" 版本")])],-1)),e[13]||(e[13]=n("h2",{id:"二进制文件方式下载",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二进制文件方式下载"},[n("span",null,"二进制文件方式下载")])],-1)),n("p",null,[e[9]||(e[9]=s("编译好的二进制文件都在 ")),n("a",u,[e[8]||(e[8]=s("github.com/etcd-io/etcd/releases")),t(a)]),e[10]||(e[10]=s(" 页面，用户可以选择需要的版本，或通过下载工具下载。"))]),e[14]||(e[14]=d(`<p>例如，使用 <code>curl</code> 工具下载压缩包，并解压。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/etcd-io/etcd/releases/download/v3.4.0/etcd-v3.4.0-linux-amd64.tar.gz <span class="token parameter variable">-o</span> etcd-v3.4.0-linux-amd64.tar.gz

<span class="token comment"># 国内用户可以使用以下方式加快下载</span>
$ <span class="token function">curl</span> <span class="token parameter variable">-L</span> https://download.fastgit.org/etcd-io/etcd/releases/download/v3.4.0/etcd-v3.4.0-linux-amd64.tar.gz <span class="token parameter variable">-o</span> etcd-v3.4.0-linux-amd64.tar.gz

$ <span class="token function">tar</span> xzvf etcd-v3.4.0-linux-amd64.tar.gz
$ <span class="token builtin class-name">cd</span> etcd-v3.4.0-linux-amd64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解压后，可以看到文件包括</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span>
Documentation README-etcdctl.md README.md READMEv2-etcdctl.md etcd etcdctl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>etcd</code> 是服务主文件，<code>etcdctl</code> 是提供给用户的命令客户端，其他文件是支持文档。</p><p>下面将 <code>etcd</code> <code>etcdctl</code> 文件放到系统可执行目录（例如 <code>/usr/local/bin/</code>）。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">cp</span> etcd* /usr/local/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认 <code>2379</code> 端口处理客户端的请求，<code>2380</code> 端口用于集群各成员间的通信。启动 <code>etcd</code> 显示类似如下的信息：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ etcd
<span class="token punctuation">..</span>.
<span class="token number">2017</span>-12-03 <span class="token number">11</span>:18:34.411579 I <span class="token operator">|</span> embed: listening <span class="token keyword">for</span> peers on http://localhost:2380
<span class="token number">2017</span>-12-03 <span class="token number">11</span>:18:34.411938 I <span class="token operator">|</span> embed: listening <span class="token keyword">for</span> client requests on localhost:2379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，可以使用 <code>etcdctl</code> 命令进行测试，设置和获取键值 <code>testkey: &quot;hello world&quot;</code>，检查 <code>etcd</code> 服务是否启动成功：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span> etcdctl member list
8e9e05c52164694d, started, default, http://localhost:2380, http://localhost:2379

$ <span class="token assign-left variable">ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span> etcdctl put testkey <span class="token string">&quot;hello world&quot;</span>
OK

$ etcdctl get testkey
testkey
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明 etcd 服务已经成功启动了。</p><h2 id="docker-镜像方式运行" tabindex="-1"><a class="header-anchor" href="#docker-镜像方式运行"><span>Docker 镜像方式运行</span></a></h2><p>镜像名称为 <code>quay.io/coreos/etcd</code>，可以通过下面的命令启动 <code>etcd</code> 服务监听到 <code>2379</code> 和 <code>2380</code> 端口。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">2379</span>:2379 <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">2380</span>:2380 <span class="token punctuation">\\</span>
<span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,source<span class="token operator">=</span>/tmp/etcd-data.tmp,destination<span class="token operator">=</span>/etcd-data <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> etcd-gcr-v3.4.0 <span class="token punctuation">\\</span>
quay.io/coreos/etcd:v3.4.0 <span class="token punctuation">\\</span>
/usr/local/bin/etcd <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> s1 <span class="token punctuation">\\</span>
--data-dir /etcd-data <span class="token punctuation">\\</span>
--listen-client-urls http://0.0.0.0:2379 <span class="token punctuation">\\</span>
--advertise-client-urls http://0.0.0.0:2379 <span class="token punctuation">\\</span>
--listen-peer-urls http://0.0.0.0:2380 <span class="token punctuation">\\</span>
--initial-advertise-peer-urls http://0.0.0.0:2380 <span class="token punctuation">\\</span>
--initial-cluster <span class="token assign-left variable">s1</span><span class="token operator">=</span>http://0.0.0.0:2380 <span class="token punctuation">\\</span>
--initial-cluster-token tkn <span class="token punctuation">\\</span>
--initial-cluster-state new <span class="token punctuation">\\</span>
--log-level info <span class="token punctuation">\\</span>
<span class="token parameter variable">--logger</span> zap <span class="token punctuation">\\</span>
--log-outputs stderr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开新的终端按照上一步的方法测试 <code>etcd</code> 是否成功启动。</p><h2 id="macos-中运行" tabindex="-1"><a class="header-anchor" href="#macos-中运行"><span>macOS 中运行</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ brew <span class="token function">install</span> etcd

$ etcd

$ etcdctl member list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18))])}const h=l(r,[["render",v],["__file","install.html.vue"]]),g=JSON.parse('{"path":"/index/Docker/etcd/install.html","title":"安装","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"二进制文件方式下载","slug":"二进制文件方式下载","link":"#二进制文件方式下载","children":[]},{"level":2,"title":"Docker 镜像方式运行","slug":"docker-镜像方式运行","link":"#docker-镜像方式运行","children":[]},{"level":2,"title":"macOS 中运行","slug":"macos-中运行","link":"#macos-中运行","children":[]}],"git":{"createdTime":1728959209000,"updatedTime":1728959209000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.88,"words":565},"filePathRelative":"index/Docker/etcd/install.md","localizedDate":"2024年10月15日","excerpt":"\\n<p><code>etcd</code> 基于 <code>Go</code> 语言实现，因此，用户可以从 <a href=\\"https://github.com/etcd-io/etcd\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">项目主页</a> 下载源代码自行编译，也可以下载编译好的二进制文件，甚至直接使用制作好的 <code>Docker</code> 镜像文件来体验。</p>\\n<blockquote>\\n<p>注意：本章节内容基于 etcd <code>3.4.x</code> 版本</p>\\n</blockquote>\\n<h2>二进制文件方式下载</h2>"}');export{h as comp,g as data};