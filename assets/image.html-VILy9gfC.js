import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,d,b as e,e as t,a as i,o as a,r as l}from"./app-DT2w9O6A.js";const c={},g={href:"https://en.wikipedia.org/wiki/Union_mount",target:"_blank",rel:"noopener noreferrer"};function p(m,o){const n=l("ExternalLinkIcon");return a(),s("div",null,[o[7]||(o[7]=d('<h1 id="docker-镜像" tabindex="-1"><a class="header-anchor" href="#docker-镜像"><span>Docker 镜像</span></a></h1><p>我们都知道，操作系统分为 <strong>内核</strong> 和 <strong>用户空间</strong>。对于 <code>Linux</code> 而言，内核启动后，会挂载 <code>root</code> 文件系统为其提供用户空间支持。而 <strong>Docker 镜像</strong>（<code>Image</code>），就相当于是一个 <code>root</code> 文件系统。比如官方镜像 <code>ubuntu:18.04</code> 就包含了完整的一套 Ubuntu 18.04 最小系统的 <code>root</code> 文件系统。</p><p><strong>Docker 镜像</strong> 是一个特殊的文件系统，除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。镜像 <strong>不包含</strong> 任何动态数据，其内容在构建之后也不会被改变。</p><h2 id="分层存储" tabindex="-1"><a class="header-anchor" href="#分层存储"><span>分层存储</span></a></h2>',4)),e("p",null,[o[1]||(o[1]=t("因为镜像包含操作系统完整的 ")),o[2]||(o[2]=e("code",null,"root",-1)),o[3]||(o[3]=t(" 文件系统，其体积往往是庞大的，因此在 Docker 设计时，就充分利用 ")),e("a",g,[o[0]||(o[0]=t("Union FS")),i(n)]),o[4]||(o[4]=t(" 的技术，将其设计为分层存储的架构。所以严格来说，镜像并非是像一个 ")),o[5]||(o[5]=e("code",null,"ISO",-1)),o[6]||(o[6]=t(" 那样的打包文件，镜像只是一个虚拟的概念，其实际体现并非由一个文件组成，而是由一组文件系统组成，或者说，由多层文件系统联合组成。"))]),o[8]||(o[8]=e("p",null,"镜像构建时，会一层层构建，前一层是后一层的基础。每一层构建完就不会再发生改变，后一层上的任何改变只发生在自己这一层。比如，删除前一层文件的操作，实际不是真的删除前一层的文件，而是仅在当前层标记为该文件已删除。在最终容器运行的时候，虽然不会看到这个文件，但是实际上该文件会一直跟随镜像。因此，在构建镜像的时候，需要额外小心，每一层尽量只包含该层需要添加的东西，任何额外的东西应该在该层构建结束前清理掉。",-1)),o[9]||(o[9]=e("p",null,"分层存储的特征还使得镜像的复用、定制变的更为容易。甚至可以用之前构建好的镜像作为基础层，然后进一步添加新的层，以定制自己所需的内容，构建新的镜像。",-1)),o[10]||(o[10]=e("p",null,"关于镜像构建，将会在后续相关章节中做进一步的讲解。",-1))])}const f=r(c,[["render",p],["__file","image.html.vue"]]),x=JSON.parse('{"path":"/index/Docker/basic_concept/image.html","title":"Docker 镜像","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"分层存储","slug":"分层存储","link":"#分层存储","children":[]}],"git":{"createdTime":1728959209000,"updatedTime":1728959209000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.98,"words":593},"filePathRelative":"index/Docker/basic_concept/image.md","localizedDate":"2024年10月15日","excerpt":"\\n<p>我们都知道，操作系统分为 <strong>内核</strong> 和 <strong>用户空间</strong>。对于 <code>Linux</code> 而言，内核启动后，会挂载 <code>root</code> 文件系统为其提供用户空间支持。而 <strong>Docker 镜像</strong>（<code>Image</code>），就相当于是一个 <code>root</code> 文件系统。比如官方镜像 <code>ubuntu:18.04</code> 就包含了完整的一套 Ubuntu 18.04 最小系统的 <code>root</code> 文件系统。</p>\\n<p><strong>Docker 镜像</strong> 是一个特殊的文件系统，除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。镜像 <strong>不包含</strong> 任何动态数据，其内容在构建之后也不会被改变。</p>"}');export{f as comp,x as data};
