(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{410:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"部署-check-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署-check-list"}},[s._v("#")]),s._v(" 部署 check list")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("工具")]),s._v(" "),t("ul",[t("li",[s._v("yum")]),s._v(" "),t("li",[s._v("vim")])])]),s._v(" "),t("li",[t("p",[s._v("linux 组件")]),s._v(" "),t("ul",[t("li",[s._v("systemctl")]),s._v(" "),t("li",[s._v("user、group")]),s._v(" "),t("li",[s._v("cron")]),s._v(" "),t("li",[s._v("ssh、scp")]),s._v(" "),t("li",[s._v("github、action")]),s._v(" "),t("li",[s._v("yum")]),s._v(" "),t("li",[s._v("域名(domain), 证书(ssl)")])])]),s._v(" "),t("li",[t("p",[s._v("应用")]),s._v(" "),t("ul",[t("li",[s._v("nginx(http, https, upstream)")]),s._v(" "),t("li",[s._v("mariadb（mysql）, mysqldump")]),s._v(" "),t("li",[s._v("obsutil")]),s._v(" "),t("li",[s._v("ELK(Elasticsearch, Logstash, Kibana)")])])])]),s._v(" "),t("h2",{attrs:{id:"工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[s._v("#")]),s._v(" 工具")]),s._v(" "),t("h3",{attrs:{id:"yum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yum"}},[s._v("#")]),s._v(" yum")]),s._v(" "),t("p",[s._v("centos 系统使用 yum 管理安装包，并安装系统应用。可使用yum安装crontabs")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索应用")]),s._v("\nyum search crontabs\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装应用")]),s._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" crontabs\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载应用")]),s._v("\nyum remove crontabs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"vim"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vim"}},[s._v("#")]),s._v(" vim")]),s._v(" "),t("p",[s._v("vim 的使用在linux服务器中是一个必备技能，vim基本使用这里不介绍。")]),s._v(" "),t("ul",[t("li",[s._v("关于使用技巧可参照"),t("RouterLink",{attrs:{to:"/03.技术/07.服务端/08.vim.html"}},[s._v("vim")])],1),s._v(" "),t("li",[s._v("关于vim配置文件可参照"),t("RouterLink",{attrs:{to:"/03.技术/07.服务端/09.vimrc.html"}},[s._v(".vimrc")])],1)]),s._v(" "),t("h2",{attrs:{id:"linux-组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-组件"}},[s._v("#")]),s._v(" linux 组件")]),s._v(" "),t("h3",{attrs:{id:"systemctl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#systemctl"}},[s._v("#")]),s._v(" systemctl")]),s._v(" "),t("p",[s._v("systemctl 的使用可以参照文档 "),t("RouterLink",{attrs:{to:"/03.技术/23.linux/03.service.html"}},[s._v("systemctl")])],1),s._v(" "),t("p",[s._v("查看service控制台日志输出")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("journalctl "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" kibana.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"user、group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user、group"}},[s._v("#")]),s._v(" user、group")]),s._v(" "),t("p",[s._v("可参照文档 "),t("RouterLink",{attrs:{to:"/03.技术/23.linux/04.user.html"}},[s._v("user")])],1),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加用户")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" family\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加用户")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" business\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为用户分配组")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" family "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" business\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("blockquote",[t("p",[s._v("注意：普通用户不具有 systemctl 管理的 service 执行权限，可通过下面配置解决，或"),t("a",{attrs:{href:"https://blog.csdn.net/yangshangwei/article/details/135054607?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0-135054607-blog-87256382.235%5Ev40%5Epc_relevant_anti_t3_base&spm=1001.2101.3001.4242.1&utm_relevant_index=3",target:"_blank",rel:"noopener noreferrer"}},[s._v("参照博客"),t("OutboundLink")],1)])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以确保非root用户被允许使用sudo执行特定的服务管理命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑sudoers文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/sudoers\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以用户名 family 为例，允许用户启动和停止nginx服务：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在文件中添加一行，允许用户执行特定服务的启动和停止命令。")]),s._v("\nfamily "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ALL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ALL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" NOPASSWD: /bin/systemctl start nginx, /bin/systemctl stop nginx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\nfamily "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ALL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ALL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" NOPASSWD: ALL\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"cron"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cron"}},[s._v("#")]),s._v(" cron")]),s._v(" "),t("p",[s._v("centos 系统中已经安装了 cron，若没有安装可以使用下面命令")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" crontabs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("编辑查看定时任务")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cron")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cron")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"ssh、scp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh、scp"}},[s._v("#")]),s._v(" ssh、scp")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在服务器密钥生成，建议对密钥加密，更安全")]),s._v("\nssh-keygen "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" ed25519\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 公钥添加到 authorized_keys 文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" id_ed25519.pub "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" authorized_keys\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将生成的私钥下载到客户端，使用下面命令登录（注意要删掉服务端生成的私钥）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" ~/.ssh/id_ed25519 root@your_ip\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用密码登录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ssh/sshd_config\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改配置")]),s._v("\nPasswordAuthentication "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存文件后，重新加载")]),s._v("\nsystemctl reload sshd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"github、action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github、action"}},[s._v("#")]),s._v(" github、action")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This workflow will build a golang project")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# For more information see: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-go")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Go\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("workflow_dispatch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#    branches: [ "main" ]')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tags")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  pull_request:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#    branches: [ "main" ]')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v3\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Set up Go\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/setup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("go@v4\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("go-version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1.20'")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" vet check\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n          go env -w GO111MODULE=on\n          go mod tidy\n          go vet ./...")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Test\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" go test "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("v ./"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" build\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('ldflags "'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("X 'main.Version=$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" github.ref_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("'\" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("o family"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server main.go\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" copy file\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" appleboy/scp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("action@v0.1.7\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.HOST "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("username")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.USERNAME "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("passphrase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.PASSPHRASE "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.KEY "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("source")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" family"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("target")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /home/family/\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" restart\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" appleboy/ssh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("action@v1.0.3\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.HOST "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.KEY "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("username")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.USERNAME "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("passphrase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.PASSPHRASE "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n            chmod u+x ~/family-server\n            sudo systemctl restart family")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ding talk\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v('\n          curl \'https://oapi.dingtalk.com/robot/send?access_token=ca46xxxxxxx\' -H \'Content-Type: application/json\' -d \'{"msgtype": "text","text": {"content":"【通知】family-server 发布完成，${{ github.ref_name }}"}}\'')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br")])]),t("h3",{attrs:{id:"域名-domain-证书-ssl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#域名-domain-证书-ssl"}},[s._v("#")]),s._v(" 域名(domain), 证书(ssl)")]),s._v(" "),t("p",[s._v("域名在阿里云购买，ssl证书为申领的免费证书，注意免费证书有效期只有1年，且不能续期")]),s._v(" "),t("h2",{attrs:{id:"应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[s._v("#")]),s._v(" 应用")]),s._v(" "),t("h3",{attrs:{id:"nginx-http-https-upstream"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-http-https-upstream"}},[s._v("#")]),s._v(" nginx(http, https, upstream)")]),s._v(" "),t("p",[s._v("nginx 采用源码安装，"),t("RouterLink",{attrs:{to:"/03.技术/07.服务端/01.deploy.html"}},[s._v("详细操作")])],1),s._v(" "),t("h3",{attrs:{id:"mariadb-mysql-mysqldump"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mariadb-mysql-mysqldump"}},[s._v("#")]),s._v(" mariadb（mysql）, mysqldump")]),s._v(" "),t("p",[s._v("mariadb 安装可使用yum安装，详细操作"),t("a",{attrs:{href:"https://blog.csdn.net/qq_38671360/article/details/122443308",target:"_blank",rel:"noopener noreferrer"}},[s._v("参照博客"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://mariadb.org/mariadb/all-releases/#11-2",target:"_blank",rel:"noopener noreferrer"}},[s._v("mariadb 发布下载"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("RouterLink",{attrs:{to:"/03.技术/15.db/02.mysql/10.dump.html"}},[s._v("数据库备份脚本")])],1),s._v(" "),t("h3",{attrs:{id:"obsutil"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#obsutil"}},[s._v("#")]),s._v(" obsutil")]),s._v(" "),t("p",[s._v("该应用为华为云obs linux 客户端，是一个数据存储服务，可用于mysql数据库备份文件的存储，使用"),t("a",{attrs:{href:"https://support.huaweicloud.com/utiltg-obs/obs_11_0005.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文档"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"elk-elasticsearch-logstash-kibana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elk-elasticsearch-logstash-kibana"}},[s._v("#")]),s._v(" ELK(Elasticsearch, Logstash, Kibana)")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/8.12/rpm.html#install-rpm",target:"_blank",rel:"noopener noreferrer"}},[s._v("Elasticsearch 安装参考文档"),t("OutboundLink")],1),s._v(" "),t("a",{attrs:{href:"https://www.elastic.co/guide/en/kibana/8.9/rpm.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Kibana 安装参考文档"),t("OutboundLink")],1),s._v(" "),t("a",{attrs:{href:"https://www.elastic.co/guide/en/logstash/8.12/installing-logstash.html#_yum",target:"_blank",rel:"noopener noreferrer"}},[s._v("Logstash 安装参考文档"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("elasticsearch 密码重置命令")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("/usr/share/elasticsearch/bin/elasticsearch-reset-password "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" elastic\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);