import{_ as s}from"./创建任务1-CXKemNYb.js";import{_ as o,r as e,o as r,c,b as l,d as i,e as n,w as d,a as h}from"./app-QSpfrls1.js";const p="/demo/images/%E5%88%9B%E5%BB%BA%E4%BB%BB%E5%8A%A1-%E6%AD%A5%E9%AA%A4%E4%BA%8C.png",u={},g=l("h1",{id:"快速上手",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#快速上手"},[l("span",null,"快速上手")])],-1),m={class:"custom-container warning"},_=l("p",{class:"custom-container-title"},"WARNING",-1),A={href:"/zh/guide/CHANGELOG.html",target:"_blank",rel:"noopener noreferrer"},f=h('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><h3 id="依赖环境" tabindex="-1"><a class="header-anchor" href="#依赖环境"><span>依赖环境</span></a></h3><ul><li>Windows AMD64/ARM64 10 及以上版本</li><li>Linux AMD64/ARM64 Glibc &gt;= 2.35</li><li>MacOS AMD64/ARM64 12.5.1 及以上版本</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>Odin 提供编译后的二进制文件，可直接双击启动。</li><li>MacOS 需要将 Contents/MacOS/Odin 添加可执行权限：chmod +x Contents/MacOS/Odin</li></ul></div><h2 id="功能结构" tabindex="-1"><a class="header-anchor" href="#功能结构"><span>功能结构</span></a></h2><p>启动项目后，侧边栏的功能如下：</p><ol><li><p><strong>统计</strong></p><ul><li>数据汇总：提供项目关键数据的汇总视图。</li><li>图表展示：通过图表形式直观展示统计数据。</li></ul></li><li><p><strong>用例库</strong></p><ul><li>用例管理：允许用户创建、编辑和删除用例。</li></ul></li><li><p><strong>场景库</strong></p><ul><li>场景创建：用户可以定义不同的测试场景。</li></ul></li><li><p><strong>检测任务</strong></p><ul><li>任务配置：设置检测任务的参数和选项。</li><li>任务启动：启动配置好的检测任务。</li></ul></li><li><p><strong>验证结果</strong></p><ul><li>结果查看：展示检测任务的输出结果。</li><li>结果分析：对检测结果进行深入分析。</li></ul></li><li><p><strong>历史结果</strong></p><ul><li>历史数据查询：允许用户回溯和查询历史测试结果。</li><li>数据对比：比较不同时间点的测试结果。</li></ul></li><li><p><strong>设置</strong></p><ul><li>代理设置：WAF 发包的代理配置。</li><li>系统设置：用例超时时间以及并发数配置。</li><li>WAF 设置：允许用户创建、编辑和删除 WAF 规则。</li></ul></li><li><p><strong>关于我们</strong></p><ul><li>公司信息：提供公司的基本信息和联系方式。</li></ul></li></ol><h2 id="开始使用" tabindex="-1"><a class="header-anchor" href="#开始使用"><span>开始使用</span></a></h2><h3 id="创建检测任务" tabindex="-1"><a class="header-anchor" href="#创建检测任务"><span>创建检测任务</span></a></h3><p><img src="'+s+'" alt="创建任务"></p><p>点击用例或者场景，然后点击添加按钮选择要测试的用例或场景。</p><p><img src="'+p+'" alt="创建任务-步骤二"></p><p>请为您的任务指定一个名称，并提供需要进行安全测试的目标URL。建议目标地址应位于Web应用防火墙（WAF）的保护范围内，这样Odin所模拟的攻击流量就能够通过WAF设备，从而更准确地评估WAF的安全防护效果。</p><h2 id="进一步了解-odin" tabindex="-1"><a class="header-anchor" href="#进一步了解-odin"><span>进一步了解 Odin</span></a></h2><p>现在，你应该已经创建了一个任务。但你可能仍需要阅读后续的指南来更加了解 Odin 。</p>',15);function x(k,v){const t=e("ExternalLinkIcon"),a=e("RouteLink");return r(),c("div",null,[g,l("div",m,[_,l("p",null,[i("Odin 目前仍处于内测阶段。你可以使用它来测试 WAF 防护的有效性，但是部分功能还在持续开发中。因此，在每次更新版本之后，请一定要仔细阅读 "),l("a",A,[i("更新日志"),n(t)]),i("。")])]),f,l("p",null,[i("下一步，前往 "),n(a,{to:"/zh/guide/usecase.html"},{default:d(()=>[i("用例")]),_:1}),i(" 了解更多用例相关的内容。")])])}const B=o(u,[["render",x],["__file","get-started.html.vue"]]),E=JSON.parse('{"path":"/zh/guide/get-started.html","title":"快速上手","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"依赖环境","slug":"依赖环境","link":"#依赖环境","children":[]}]},{"level":2,"title":"功能结构","slug":"功能结构","link":"#功能结构","children":[]},{"level":2,"title":"开始使用","slug":"开始使用","link":"#开始使用","children":[{"level":3,"title":"创建检测任务","slug":"创建检测任务","link":"#创建检测任务","children":[]}]},{"level":2,"title":"进一步了解 Odin","slug":"进一步了解-odin","link":"#进一步了解-odin","children":[]}],"git":{"updatedTime":1715584184000,"contributors":[{"name":"zhangguangxin","email":"zhangguangxin@vackbot.com","commits":1}]},"filePathRelative":"zh/guide/get-started.md"}');export{B as comp,E as data};
