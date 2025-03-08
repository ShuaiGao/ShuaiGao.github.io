(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{409:function(s,a,e){"use strict";e.r(a);var t=e(7),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://www.bilibili.com/video/BV1s4421A7he?spm_id_from=333.788.videopod.episodes&vd_source=557ce81b83e87ede80f0506db530a53b",target:"_blank",rel:"noopener noreferrer"}},[s._v("bibili vim 视频教程"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"_1-删除特定行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-删除特定行"}},[s._v("#")]),s._v(" 1. 删除特定行")]),s._v(" "),a("p",[s._v(":g/匹配字符串/d")]),s._v(" "),a("h2",{attrs:{id:"_2-正则替换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-正则替换"}},[s._v("#")]),s._v(" 2. 正则替换")]),s._v(" "),a("p",[s._v("正则替换分组使用 () 但是需要转义，即 ()")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 将文本的\n# },\n# {\n# 替换为 }, {\n\n:%s/},$\\n\\s\\*{/}, {/g\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ol",[a("li",[a("p",[s._v("删除")]),s._v(" "),a("p",[s._v("例：")])])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("删除行尾空格："),a("code",[s._v(":%s/\\s+$//g")])])]),s._v(" "),a("li",[a("p",[s._v("删除行首多余空格："),a("code",[s._v(":%s/^\\s*//")]),s._v(" 或者 "),a("code",[s._v(":%s/^ *//")])])]),s._v(" "),a("li",[a("p",[s._v("删除沒有內容的空行："),a("code",[s._v(":%s/^$//")]),s._v(" 或者 "),a("code",[s._v("g/^$/d")])])]),s._v(" "),a("li",[a("p",[s._v("删除包含有空格组成的空行："),a("code",[s._v(":%s/^\\s*$//")]),s._v(" 或者 "),a("code",[s._v("g/^\\s*$/d")])])]),s._v(" "),a("li",[a("p",[s._v("删除以空格或 TAB 开头到结尾的空行："),a("code",[s._v(":%s/^[ |\\t]_$//")]),s._v(" 或者 "),a("code",[s._v("g/^[ |\\t]_$/d")])])])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("大小写转换")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("转大写 "),a("code",[s._v("\\U")]),s._v(" "),a("code",[s._v("\\u")]),s._v("，其中"),a("code",[s._v("\\U")]),s._v("为全部转为大写，"),a("code",[s._v("\\u")]),s._v("为首字母转为大写")])]),s._v(" "),a("li",[a("p",[s._v("转小写"),a("code",[s._v("\\L")]),s._v(" "),a("code",[s._v("\\l")]),s._v(" ，其中"),a("code",[s._v("\\L")]),s._v("为全部转为小写，"),a("code",[s._v("\\l")]),s._v("为首字母转为小写")])])]),s._v(" "),a("p",[s._v("例：将 hello world，转为 HELLO World")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("```shell\n:%s/\\(\\w\\) \\(\\w\\+\\)/\\U\\1 \\u\\2/g\n```\n")])])]),a("p",[s._v('把文中的所有字符串"abc……xyz"替换为"xyz……abc"可以:下列写法')]),s._v(" "),a("p",[a("code",[s._v(":%s/abc\\(._\\)xyz/xyz\\1abc/g")])]),s._v(" "),a("p",[a("code",[s._v(":%s/\\(abc\\)\\(._\\)\\(xyz\\)/\\3\\2\\1/g")])]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("递增替换")])]),s._v(" "),a("p",[s._v("例：叫下面的数字 1 依次递增替换为 1、2、3、4")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("hello 1\nhello 1\nhello 1\nhello 1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("code",[s._v(':%s/\\zs\\d\\ze/\\=line(".")-line("\'<")/g')])]),s._v(" "),a("p",[s._v("或替换为其他递增数字")]),s._v(" "),a("p",[a("code",[s._v(':%s/\\zs\\d\\ze/\\=line(".")+2/g')])]),s._v(" "),a("h2",{attrs:{id:"_3-全选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-全选"}},[s._v("#")]),s._v(" 3.全选")]),s._v(" "),a("p",[s._v("gao_shuai")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ggVG\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_4-自定义命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-自定义命令"}},[s._v("#")]),s._v(" 4.自定义命令")]),s._v(" "),a("ol",[a("li",[a("p",[s._v('将一个单词使用双引号包裹，例：world 修改为 "world"')]),s._v(" "),a("div",{staticClass:"language-vim line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vim"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("noremap")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("C"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" bcw"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("esc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("P")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("esc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后使用快捷键 "),a("code",[s._v("ctrl+i")]),s._v("，即可对单词做双引号包裹处理。但撤销操作需要使用命令 "),a("code",[s._v("4u")])])])]),s._v(" "),a("h2",{attrs:{id:"_5-vim-查看版本信息和支持插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-vim-查看版本信息和支持插件"}},[s._v("#")]),s._v(" 5.vim 查看版本信息和支持插件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vim --version\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_6-显示设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-显示设置"}},[s._v("#")]),s._v(" 6. 显示设置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 行号显隐\n:set nu\n:set nonu\n\n# 空白字符显隐\n:set list\n:set nolist\n\n# 自动换行切换\n:set wrap\n:set nowrap\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"_7-复制粘贴"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-复制粘贴"}},[s._v("#")]),s._v(" 7. 复制粘贴")]),s._v(" "),a("p",[s._v("终端登录云服务器，使用vim打开一个文件编辑器粘贴时，文本总是在行首自动插入很多空字符，可使用下面命令解决")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v(":set "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("paste")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 粘贴模式")]),s._v("\n:set nopaste "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 非粘贴模式")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);