import{_ as w,W as x,X as z,a0 as A,Y as s,Z as e,$ as a,a1 as l,a2 as p,C as n}from"./framework-3c1374b9.js";const V={},j=s("p",null,"VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.",-1),C=s("p",null,"You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.",-1),D=s("h2",{id:"markdown-introduction",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-introduction","aria-hidden":"true"},"#"),e(" Markdown Introduction")],-1),I={href:"https://theme-hope.vuejs.press/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},K={href:"https://theme-hope.vuejs.press/cookbook/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},J=s("h2",{id:"markdown-config",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-config","aria-hidden":"true"},"#"),e(" Markdown Config")],-1),M=s("p",null,"VuePress introduce configuration for each Markdown page using Frontmatter.",-1),P={class:"hint-container info"},B=s("p",{class:"hint-container-title"},"Info",-1),T={href:"https://theme-hope.vuejs.press/cookbook/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},F=s("h2",{id:"markdown-extension",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-extension","aria-hidden":"true"},"#"),e(" Markdown Extension")],-1),Y={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},G=s("h3",{id:"vuepress-enhancement",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress-enhancement","aria-hidden":"true"},"#"),e(" VuePress Enhancement")],-1),X=s("p",null,"To enrich document writing, VuePress has extended Markdown syntax.",-1),Q={href:"https://theme-hope.vuejs.press/basic/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},R=s("h3",{id:"theme-enhancement",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#theme-enhancement","aria-hidden":"true"},"#"),e(" Theme Enhancement")],-1),S={href:"https://theme-hope.vuejs.press/md-enhance/",target:"_blank",rel:"noopener noreferrer"},U=s("code",null,"vuepress-plugin-md-enhance",-1),q=p(`<h4 id="custom-container" tabindex="-1"><a class="header-anchor" href="#custom-container" aria-hidden="true">#</a> Custom Container</h4><div><p>Safely use {{ variable }} in Markdown.</p></div><div class="hint-container info"><p class="hint-container-title">Custom Title</p><p>A custom information container with <code>code</code>, <a href="#custom-container">link</a>.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">Custom Title</p><p>A custom tip container</p></div><div class="hint-container warning"><p class="hint-container-title">Custom Title</p><p>A custom warning container</p></div><div class="hint-container danger"><p class="hint-container-title">Custom Title</p><p>A custom danger container</p></div><details class="hint-container details"><summary>Custom Title</summary><p>A custom details container</p></details>`,7),W={href:"https://theme-hope.vuejs.press/guide/markdown/container.html",target:"_blank",rel:"noopener noreferrer"},L=s("h4",{id:"tabs",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tabs","aria-hidden":"true"},"#"),e(" Tabs")],-1),N=s("p",null,"Apple",-1),H=s("p",null,"Banana",-1),Z=s("p",null,"Orange",-1),O={href:"https://theme-hope.vuejs.press/guide/markdown/tabs.html",target:"_blank",rel:"noopener noreferrer"},$=s("h4",{id:"code-tabs",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#code-tabs","aria-hidden":"true"},"#"),e(" Code Tabs")],-1),ss=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"pnpm"),e(),s("span",{class:"token function"},"add"),e(),s("span",{class:"token parameter variable"},"-D"),e(` vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),es=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),e(),s("span",{class:"token function"},"add"),e(),s("span",{class:"token parameter variable"},"-D"),e(` vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),as=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),e(" i "),s("span",{class:"token parameter variable"},"-D"),e(` vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),ts={href:"https://theme-hope.vuejs.press/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},ns=s("h4",{id:"superscript-and-subscript",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#superscript-and-subscript","aria-hidden":"true"},"#"),e(" Superscript and Subscript")],-1),ls=s("p",null,[e("19"),s("sup",null,"th"),e(" H"),s("sub",null,"2"),e("O")],-1),is={href:"https://theme-hope.vuejs.press/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},rs=s("h4",{id:"align",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#align","aria-hidden":"true"},"#"),e(" Align")],-1),os=s("div",{style:{"text-align":"center"}},[s("p",null,"I am center")],-1),cs=s("div",{style:{"text-align":"right"}},[s("p",null,"I am right align")],-1),ps={href:"https://theme-hope.vuejs.press/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},ms=s("h4",{id:"attrs",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#attrs","aria-hidden":"true"},"#"),e(" Attrs")],-1),hs=s("p",null,[e("A "),s("strong",{id:"word"},"word"),e(" having id.")],-1),ds={href:"https://theme-hope.vuejs.press/guide/markdown/attrs.html",target:"_blank",rel:"noopener noreferrer"},us=p('<h4 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote" aria-hidden="true">#</a> Footnote</h4><p>This text has footnote<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p>',2),gs={href:"https://theme-hope.vuejs.press/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},_s=s("h4",{id:"mark",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mark","aria-hidden":"true"},"#"),e(" Mark")],-1),ks=s("p",null,[e("You can mark "),s("mark",null,"important words"),e(" .")],-1),fs={href:"https://theme-hope.vuejs.press/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},ys=s("h4",{id:"tasklist",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tasklist","aria-hidden":"true"},"#"),e(" Tasklist")],-1),bs={class:"task-list-container"},vs=p('<li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Plan A</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> Plan B</label></p></li>',2),ws={href:"https://theme-hope.vuejs.press/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},xs=s("h4",{id:"image-enhancement",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#image-enhancement","aria-hidden":"true"},"#"),e(" Image Enhancement")],-1),zs=s("p",null,"Support setting color scheme and size",-1),As={href:"https://theme-hope.vuejs.press/guide/markdown/image.html",target:"_blank",rel:"noopener noreferrer"},Vs=s("h4",{id:"chart",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#chart","aria-hidden":"true"},"#"),e(" Chart")],-1),js={href:"https://theme-hope.vuejs.press/guide/markdown/chart.html",target:"_blank",rel:"noopener noreferrer"},Cs=s("h4",{id:"echarts",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#echarts","aria-hidden":"true"},"#"),e(" Echarts")],-1),Ds={href:"https://theme-hope.vuejs.press/guide/markdown/echarts.html",target:"_blank",rel:"noopener noreferrer"},Is=s("h4",{id:"flowchart",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#flowchart","aria-hidden":"true"},"#"),e(" Flowchart")],-1),Ks={href:"https://theme-hope.vuejs.press/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},Js=s("h4",{id:"mermaid",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mermaid","aria-hidden":"true"},"#"),e(" Mermaid")],-1),Ms={href:"https://theme-hope.vuejs.press/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},Ps=s("h4",{id:"tex",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tex","aria-hidden":"true"},"#"),e(" Tex")],-1),Bs=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("msup",null,[s("mi",{mathvariant:"normal"},"∂"),s("mi",null,"r")]),s("mrow",null,[s("mi",{mathvariant:"normal"},"∂"),s("msup",null,[s("mi",null,"ω"),s("mi",null,"r")])])]),s("mrow",null,[s("mo",{fence:"true"},"("),s("mfrac",null,[s("msup",null,[s("mi",null,"y"),s("mi",null,"ω")]),s("mi",null,"ω")]),s("mo",{fence:"true"},")")]),s("mo",null,"="),s("mrow",null,[s("mo",{fence:"true"},"("),s("mfrac",null,[s("msup",null,[s("mi",null,"y"),s("mi",null,"ω")]),s("mi",null,"ω")]),s("mo",{fence:"true"},")")]),s("mrow",null,[s("mo",{fence:"true"},"{"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"y"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mi",null,"r")]),s("mo",null,"+"),s("munderover",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"r")]),s("mfrac",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mo",null,"−"),s("mn",null,"1"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mi",null,"i")]),s("mi",null,"r"),s("mo",null,"⋯"),s("mo",{stretchy:"false"},"("),s("mi",null,"r"),s("mo",null,"−"),s("mi",null,"i"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"y"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mrow",null,[s("mi",null,"r"),s("mo",null,"−"),s("mi",null,"i")])])]),s("msup",null,[s("mi",null,"ω"),s("mi",null,"i")])]),s("mo",{fence:"true"},"}")])]),s("annotation",{encoding:"application/x-tex"}," \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.4em","vertical-align":"-0.95em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3714em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"∂"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.5904em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"∂"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},"(")]),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3414em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"ω")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},")")])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"3.0277em","vertical-align":"-1.2777em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},"(")]),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3414em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"ω")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},")")])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size4"},"{")]),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[e("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7144em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.6514em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2777em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.5017em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7507em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord"},"−"),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8247em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])])])])])]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},"⋯"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[e("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8247em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mathnormal mtight"},"i")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size4"},"}")])])])])])])],-1),Ts={href:"https://theme-hope.vuejs.press/guide/markdown/tex.html",target:"_blank",rel:"noopener noreferrer"},Fs=s("h4",{id:"include-files",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#include-files","aria-hidden":"true"},"#"),e(" Include files")],-1),Ys={href:"https://theme-hope.vuejs.press/guide/markdown/include.html",target:"_blank",rel:"noopener noreferrer"},Es=s("h4",{id:"code-demo",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#code-demo","aria-hidden":"true"},"#"),e(" Code Demo")],-1),Gs=s("div",{class:"language-html line-numbers-mode","data-ext":"html"},[s("pre",{class:"language-html"},[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),e("h1")]),s("span",{class:"token punctuation"},">")]),e("VuePress Theme Hope"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),e("h1")]),s("span",{class:"token punctuation"},">")]),e(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),e("p")]),s("span",{class:"token punctuation"},">")]),e("Is "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),e("span")]),e(),s("span",{class:"token attr-name"},"id"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),e("very"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),e("very"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),e("span")]),s("span",{class:"token punctuation"},">")]),e(" powerful!"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),e("p")]),s("span",{class:"token punctuation"},">")]),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Xs=s("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[s("pre",{class:"language-javascript"},[s("code",null,[e("document"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"querySelector"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"#very"'),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"addEventListener"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"click"'),s("span",{class:"token punctuation"},","),e(),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),e(),s("span",{class:"token operator"},"=>"),e(),s("span",{class:"token punctuation"},"{"),e(`
  `),s("span",{class:"token function"},"alert"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"Very powerful!"'),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),e(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Qs=s("div",{class:"language-css line-numbers-mode","data-ext":"css"},[s("pre",{class:"language-css"},[s("code",null,[s("span",{class:"token selector"},"span"),e(),s("span",{class:"token punctuation"},"{"),e(`
  `),s("span",{class:"token property"},"color"),s("span",{class:"token punctuation"},":"),e(" red"),s("span",{class:"token punctuation"},";"),e(`
`),s("span",{class:"token punctuation"},"}"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Rs={href:"https://theme-hope.vuejs.press/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},Ss=s("h4",{id:"stylize",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#stylize","aria-hidden":"true"},"#"),e(" Stylize")],-1),Us={href:"https://theme-hope.vuejs.press/guide/markdown/stylize.html",target:"_blank",rel:"noopener noreferrer"},qs=s("h4",{id:"playground",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#playground","aria-hidden":"true"},"#"),e(" Playground")],-1),Ws={href:"https://theme-hope.vuejs.press/guide/markdown/playground.html",target:"_blank",rel:"noopener noreferrer"},Ls=s("h4",{id:"vue-playground",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vue-playground","aria-hidden":"true"},"#"),e(" Vue Playground")],-1),Ns={href:"https://theme-hope.vuejs.press/guide/markdown/vue-playground.html",target:"_blank",rel:"noopener noreferrer"},Hs=s("h4",{id:"presentation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#presentation","aria-hidden":"true"},"#"),e(" Presentation")],-1),Zs={href:"https://theme-hope.vuejs.press/guide/markdown/presentation.html",target:"_blank",rel:"noopener noreferrer"},Os=p('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>This is footnote content <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',2);function $s(se,ee){const t=n("ExternalLinkIcon"),m=n("Tabs"),h=n("CodeTabs"),d=n("ChartJS"),u=n("ECharts"),g=n("FlowChart"),_=n("Mermaid"),c=n("RouterLink"),k=n("CodeDemo"),f=n("Badge"),y=n("Playground"),b=n("VuePlayground"),v=n("Presentation");return x(),z("div",null,[j,C,A(" more "),D,s("p",null,[e("If you are a new learner and don’t know how to write Markdown, please read "),s("a",I,[e("Markdown Intro"),a(t)]),e(" and "),s("a",K,[e("Markdown Demo"),a(t)]),e(".")]),J,M,s("div",P,[B,s("p",null,[e("Frontmatter is a important concept in VuePress. If you don’t know it, you need to read "),s("a",T,[e("Frontmatter Introduction"),a(t)]),e(".")])]),F,s("p",null,[e("The Markdown content in VuePress will be parsed by "),s("a",Y,[e("markdown-it"),a(t)]),e(", which supports "),s("a",E,[e("syntax extensions"),a(t)]),e(" via markdown-it plugins.")]),G,X,s("p",null,[e("For these extensions, please read "),s("a",Q,[e("Markdown extensions in VuePress"),a(t)]),e(".")]),R,s("p",null,[e("By using "),s("a",S,[U,a(t)]),e(", the theme extends more Markdown syntax and provides richer writing functions.")]),q,s("ul",null,[s("li",null,[s("a",W,[e("View Detail"),a(t)])])]),L,a(m,{id:"89",data:[{title:"apple"},{title:"banana"},{title:"orange"}],"tab-id":"fruit"},{tab0:l(({title:i,value:r,isActive:o})=>[N]),tab1:l(({title:i,value:r,isActive:o})=>[H]),tab2:l(({title:i,value:r,isActive:o})=>[Z]),_:1}),s("ul",null,[s("li",null,[s("a",O,[e("View Detail"),a(t)])])]),$,a(h,{id:"116",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],active:2,"tab-id":"shell"},{tab0:l(({title:i,value:r,isActive:o})=>[ss]),tab1:l(({title:i,value:r,isActive:o})=>[es]),tab2:l(({title:i,value:r,isActive:o})=>[as]),_:1}),s("ul",null,[s("li",null,[s("a",ts,[e("View Detail"),a(t)])])]),ns,ls,s("ul",null,[s("li",null,[s("a",is,[e("View Detail"),a(t)])])]),rs,os,cs,s("ul",null,[s("li",null,[s("a",ps,[e("View Detail"),a(t)])])]),ms,hs,s("ul",null,[s("li",null,[s("a",ds,[e("View Detail"),a(t)])])]),us,s("ul",null,[s("li",null,[s("a",gs,[e("View Detail"),a(t)])])]),_s,ks,s("ul",null,[s("li",null,[s("a",fs,[e("View Detail"),a(t)])])]),ys,s("ul",bs,[vs,s("li",null,[s("p",null,[s("a",ws,[e("View Detail"),a(t)])])])]),xs,zs,s("ul",null,[s("li",null,[s("a",As,[e("View Detail"),a(t)])])]),Vs,a(d,{id:"chart-242",config:"eJxtUEsKgzAQ3XuKIasWrKjFhd22N+iyuIgaRJoa0RQqxbt3Jh+14CYk7zeT9w0AmJ56wS7AxoprLQYWElhzzREkgXuNQo+IPAwCjjGs5KWQlHC3CXCzcpPkNC7Pu00CsA9CpyQOgU14i2FeHQvv2WSfXtzZvjvKPB+hYhEUm91KXj2bQb27+qqkGugnQ1Me0gyteR5Cck6PzMltQoGnmcZUr1vVUTGuKmxRivWNCK2xacvXLdtOcNu2Y3o1tpRGbKm0Vq//qXTOwRz8AH72Yfs=",title:"A%20Scatter%20Chart",type:"json"}),s("ul",null,[s("li",null,[s("a",js,[e("View Detail"),a(t)])])]),Cs,a(u,{id:"echarts-255",config:"eJyr5lJQUKpwrMgsVrJSAHGA3JLKglQgTyk5sSQ1Pb+oUkkHIp6SWJIIFI9W8s3PU9JRUAopTQVR4akpYF5GKYhyK8oEUcGJJWCqNE8pFqi7FmSEUiV2e8oSc4AmwVUVpxZlpoKURYOVQRQjWW9oaqCjYGQMIoxMgIShhY6CobEpkDAxB3LNDGIh7kWyISczD2wB0AogGctVywUA9j06jQ==",title:"A%20line%20chart"}),s("ul",null,[s("li",null,[s("a",Ds,[e("View Detail"),a(t)])])]),Is,a(g,{id:"flowchart-268",code:"eJxLzs9LsbUDkZklmfl5VgoBRfnJqcXF9lwFEIatXX5BalEiiiRXqq1dal6KlYJrXgoXF0izRmVqsaauHVSPrl0qRDQvHyiYygUAPWgiyQ==",preset:"vue"}),s("ul",null,[s("li",null,[s("a",Ks,[e("View Detail"),a(t)])])]),Js,a(_,{id:"mermaid-279",code:"eJzT1dXlKsksyUm1UnDLyS9PzkgsKuECCabBeAohTlwKQJBsqKtrl2gEZheXJqUXJRZkKOTnpYIFEpEkU/NSUBWVlOeDBZJAipJwKcooSoWYBbYoGVUZ0B4FoCjcKLBqVJHyfDAfqBEAuj83LQ=="}),s("ul",null,[s("li",null,[s("a",Ms,[e("View Detail"),a(t)])])]),Ps,Bs,s("ul",null,[s("li",null,[s("a",Ts,[e("View Detail"),a(t)])])]),Fs,s("ul",null,[s("li",null,[s("p",null,[a(c,{to:"/demo/markdown.html"},{default:l(()=>[e("Markdown Enhance")]),_:1})])]),s("li",null,[s("p",null,[a(c,{to:"/demo/page.html"},{default:l(()=>[e("Page Config")]),_:1})])]),s("li",null,[s("p",null,[a(c,{to:"/demo/disable.html"},{default:l(()=>[e("Function Disable")]),_:1})])]),s("li",null,[s("p",null,[a(c,{to:"/demo/encrypt.html"},{default:l(()=>[e("Encryption Demo")]),_:1})])])]),s("ul",null,[s("li",null,[s("a",Ys,[e("View Detail"),a(t)])])]),Es,a(k,{id:"code-demo-335",type:"normal",title:"A%20normal%20demo",code:"eJxFjjELAjEMhf9KjIuCeLhq7SYoOAiKU5ejjdxpr61tTxHxv5ueg0sCed97L29scmdxiaJZyHNPh0gpwamhjmDrA4mK78qJIHcJRAq1g9asFT4ovhTKskRVzhKCf1K89HYkqsAWnOE1cbDxuu/I5fm9Z/hIlnT2caJw/MuYzmtjNg8m9m3K5Kho2rb6pnAGkymsJbyVA6gtxczamW3/Mg5YKfcpgxt1KpXDm4NHe+vjEiKZAjHy+QJaqVDL"},{default:l(()=>[Gs,Xs,Qs]),_:1}),s("ul",null,[s("li",null,[s("a",Rs,[e("View Detail"),a(t)])])]),Ss,s("p",null,[e("Donate Mr.Hope a cup of coffee. "),a(f,{type:"tip"},{default:l(()=>[e("Recommended")]),_:1})]),s("ul",null,[s("li",null,[s("a",Us,[e("View Detail"),a(t)])])]),qs,a(y,{key:"cef18514",title:"TS%20demo",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FMYewdgzgLgBAthA5jAvDARACwKYBtcgwDuIATrgCboDcAULaJLBAA7YCGA1qjABQKIAXDGikAlmEQBKVAD4YjCCFzYAdAUT8kUurVYdOW6XSA"}),s("ul",null,[s("li",null,[s("a",Ws,[e("View Detail"),a(t)])])]),Ls,a(b,{title:"Vue%20Playground",key:"955d8542",settings:"%7B%7D",files:"eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gV29ybGQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbjwvdGVtcGxhdGU%2BXG4ifQ%3D%3D"}),s("ul",null,[s("li",null,[s("a",Ns,[e("View Detail"),a(t)])])]),Hs,a(v,{id:"presentation-393",code:"eJxVjc0KwjAQhO/7FAvtoQX7pzelB4969WilDXYx0aYNyYqC+O4mUJDeho9vZiCK8DSonrAC2KMRVtysMBJfiiW6SRMyvRnF2KPA86DGxyWRzMZti0JbORnKnWJKAbIsg//c2gM8MGk/PIeAFs4m96dd190dXKfR+RessdoFFNSF6ctxDMekYUks2nI1hyr1ncY9dftRdfkN0g8aMTop",theme:"auto"}),s("ul",null,[s("li",null,[s("a",Zs,[e("View Detail"),a(t)])])]),Os])}const te=w(V,[["render",$s],["__file","markdown.html.vue"]]);export{te as default};
