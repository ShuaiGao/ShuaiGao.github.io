(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{411:function(n,s,a){"use strict";a.r(s);var e=a(7),t=Object(e.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[n._v("通常，我是在 goland 中使用 vim 编程，使用的是 ideavim 插件，在 ideavim 官方 github 的 "),s("a",{attrs:{href:"https://github.com/JetBrains/ideavim/discussions/303",target:"_blank",rel:"noopener noreferrer"}},[n._v("issue"),s("OutboundLink")],1),n._v(" 中有一个关于"),s("code",[n._v(".ideamvimrc")]),n._v("文件的分享")]),n._v(" "),s("p",[n._v("注意：下面配置中的插件依赖于git，使用时若不需要可移除插件")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('" 插件管理，自动装载插件 start --------------------------------------\nlet mapleader="\\<space>"\nif empty(glob(\'~/.vim/autoload/plug.vim\'))\n    silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs\n                \\ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim\n    autocmd VimEnter * PlugInstall --sync | source $MYVIMRC\nendif\n\ncall plug#begin()\n\nPlug \'scrooloose/nerdtree\'\nPlug \'tpope/vim-vinegar\'\nPlug \'tpope/vim-sensible\'\nPlug \'ctrlpvim/ctrlp.vim\'\nPlug \'mileszs/ack.vim\'\nPlug \'easymotion/vim-easymotion\'\n\nlet g:plug_timeout=300\nPlug \'Valloric/YouCompleteMe\'\n\ncall plug#end()\n" 插件管理，自动装载插件 end --------------------------------------\n\nset nocompatible          " 去除VIM一致性\nfiletype off\n\npackloadall               " 加载所有插件\nsilent! helptags ALL      " 为插件加载帮助文档\n\nnoremap <leader>w :w<cr>\nsyntax on                 " 语法高亮显示\nfiletype plugin indent on " 支持根据文件类型自动缩进\nset autoindent            " 开始新行时处理缩进\nset spell\n\nset expandtab             " 将制表符展开为空格\nset tabstop=4             " 要计算的空格数\nset shiftwidth=4          " 用于自动缩进的空格数\nset backspace=2           " 在多数终端上修改退格键Backspace的行为\n\ncolorscheme murphy\nset nu                    " 显示行号\nset ruler\nset hls                   " 高亮显示搜索结果，等同于set hlsearch\nset incsearch             " 使用搜索时，自动匹配单词的位置高亮显示\nset cursorline            " 高亮显示当前行\n"set cursorcolumn         " 高亮显示当前列\nset foldenable\nset foldmethod=indent\nsetlocal foldlevel=1\nset foldlevelstart=99\n"set foldcolumn=0\n\nset laststatus=2\n"set showcmd\n\nhighlight CursorLine   cterm=NONE ctermbg=black ctermfg=green guibg=NONE guifg=NONE\n"highlight CursorColumn cterm=NONE ctermbg=black ctermfg=green guibg=NONE guifg=NONE\n\n" 文件头自动填充 start ----------------------------------------------\nautocmd BufNewFile *.cpp exec ":call SetTitle()"\nautocmd BufNewFile *.py exec ":call SetTitle()"\nfunc SetTitle()\n\tif &filetype == \'cpp\'\n\t    call setline(1, "/*****************************************************")\n\t    call append(line("."), "* @file ".expand("%"))\n\t    call append(line(".")+1, "* @author GaoShuai")\n\t    call append(line(".")+2, "* @email boringmanman@qq.com")\n\t    call append(line(".")+3, "* @date ".strftime("%Y/%m/%d %H:%M"))\n\t    call append(line(".")+4, "* @brief file details.")\n\t    call append(line(".")+5, "******************************************************/")\n\t    call append(line(".")+6, "")\n\t\tcall append(line(".")+6,"#include<iostream>")\n\t\tcall append(line(".")+7,"using namespace std;")\n\t\tcall append(line(".")+8,"")\n    elseif &filetype == "python"\n        call setline(1, "# -*- coding:utf-8 -*-")\n        call setline(2, \'"""\')\n        call setline(3, \'Create on \'.strftime("%Y/%m/%d %H:%M"))\n        call setline(4, \'@Author: GaoShuai\')\n        call setline(5, \'"""\')\n        call setline(6, \'\')\n\tendif\nendfunc\n" 文件头自动填充 end ----------------------------------------------\n\n\n" F5 执行文件 ----------------------------------\nmap <F5> :call CompileRunGcc()<CR>\nfunc! CompileRunGcc()\n    exec "w"\n    if &filetype == \'cpp\'\n\t    exec "!g++ -std=c++11 -pthread % -o %<"\n\t    exec "! ./%<"\n    elseif &filetype == \'python\'\n\t    exec "!python3 %"\n    endif\nendfunc\n" F5 执行文件 end ------------------------------\n\n\n" => 自动补齐, 匹配括号和引号 -----------------------------------{{{1\n:inoremap( ()<ESC>i\n:inoremap) <c-r>=ClosePair(\')\')<CR>\n:inoremap{ {}<ESC>i\n:inoremap} <c-r>=ClosePair(\'}\')<CR>\n:inoremap[ []<ESC>i\n:inoremap] <c-r>=ClosePair(\']\')<CR>\n:inoremap" <c-r>=QuoteDelim(\'"\')<CR>\n:inoremap\' <c-r>=QuoteDelim("\'")<CR>\nfunction! ClosePair(char)\n\tif getline(\'.\')[col(\'.\')-1] == a:char\n\t\treturn "\\<Right>"\n\telse\n\t\treturn a:char\n\tendif\nendfunc\n\nfunction! QuoteDelim(char)\n    let line = getline(".")\n    let col = col(".")\n    if line[col-2] == "\\\\"\n        return a:char\n    elseif line[col-1] == a:char\n        return "\\<Right>"\n    else\n        return a:char.a:char."\\<Esc>i"\n    endif\nendfunc\n\n" 自动补齐 end -------------------------------------------------{{{2\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br"),s("span",{staticClass:"line-number"},[n._v("56")]),s("br"),s("span",{staticClass:"line-number"},[n._v("57")]),s("br"),s("span",{staticClass:"line-number"},[n._v("58")]),s("br"),s("span",{staticClass:"line-number"},[n._v("59")]),s("br"),s("span",{staticClass:"line-number"},[n._v("60")]),s("br"),s("span",{staticClass:"line-number"},[n._v("61")]),s("br"),s("span",{staticClass:"line-number"},[n._v("62")]),s("br"),s("span",{staticClass:"line-number"},[n._v("63")]),s("br"),s("span",{staticClass:"line-number"},[n._v("64")]),s("br"),s("span",{staticClass:"line-number"},[n._v("65")]),s("br"),s("span",{staticClass:"line-number"},[n._v("66")]),s("br"),s("span",{staticClass:"line-number"},[n._v("67")]),s("br"),s("span",{staticClass:"line-number"},[n._v("68")]),s("br"),s("span",{staticClass:"line-number"},[n._v("69")]),s("br"),s("span",{staticClass:"line-number"},[n._v("70")]),s("br"),s("span",{staticClass:"line-number"},[n._v("71")]),s("br"),s("span",{staticClass:"line-number"},[n._v("72")]),s("br"),s("span",{staticClass:"line-number"},[n._v("73")]),s("br"),s("span",{staticClass:"line-number"},[n._v("74")]),s("br"),s("span",{staticClass:"line-number"},[n._v("75")]),s("br"),s("span",{staticClass:"line-number"},[n._v("76")]),s("br"),s("span",{staticClass:"line-number"},[n._v("77")]),s("br"),s("span",{staticClass:"line-number"},[n._v("78")]),s("br"),s("span",{staticClass:"line-number"},[n._v("79")]),s("br"),s("span",{staticClass:"line-number"},[n._v("80")]),s("br"),s("span",{staticClass:"line-number"},[n._v("81")]),s("br"),s("span",{staticClass:"line-number"},[n._v("82")]),s("br"),s("span",{staticClass:"line-number"},[n._v("83")]),s("br"),s("span",{staticClass:"line-number"},[n._v("84")]),s("br"),s("span",{staticClass:"line-number"},[n._v("85")]),s("br"),s("span",{staticClass:"line-number"},[n._v("86")]),s("br"),s("span",{staticClass:"line-number"},[n._v("87")]),s("br"),s("span",{staticClass:"line-number"},[n._v("88")]),s("br"),s("span",{staticClass:"line-number"},[n._v("89")]),s("br"),s("span",{staticClass:"line-number"},[n._v("90")]),s("br"),s("span",{staticClass:"line-number"},[n._v("91")]),s("br"),s("span",{staticClass:"line-number"},[n._v("92")]),s("br"),s("span",{staticClass:"line-number"},[n._v("93")]),s("br"),s("span",{staticClass:"line-number"},[n._v("94")]),s("br"),s("span",{staticClass:"line-number"},[n._v("95")]),s("br"),s("span",{staticClass:"line-number"},[n._v("96")]),s("br"),s("span",{staticClass:"line-number"},[n._v("97")]),s("br"),s("span",{staticClass:"line-number"},[n._v("98")]),s("br"),s("span",{staticClass:"line-number"},[n._v("99")]),s("br"),s("span",{staticClass:"line-number"},[n._v("100")]),s("br"),s("span",{staticClass:"line-number"},[n._v("101")]),s("br"),s("span",{staticClass:"line-number"},[n._v("102")]),s("br"),s("span",{staticClass:"line-number"},[n._v("103")]),s("br"),s("span",{staticClass:"line-number"},[n._v("104")]),s("br"),s("span",{staticClass:"line-number"},[n._v("105")]),s("br"),s("span",{staticClass:"line-number"},[n._v("106")]),s("br"),s("span",{staticClass:"line-number"},[n._v("107")]),s("br"),s("span",{staticClass:"line-number"},[n._v("108")]),s("br"),s("span",{staticClass:"line-number"},[n._v("109")]),s("br"),s("span",{staticClass:"line-number"},[n._v("110")]),s("br"),s("span",{staticClass:"line-number"},[n._v("111")]),s("br"),s("span",{staticClass:"line-number"},[n._v("112")]),s("br"),s("span",{staticClass:"line-number"},[n._v("113")]),s("br"),s("span",{staticClass:"line-number"},[n._v("114")]),s("br"),s("span",{staticClass:"line-number"},[n._v("115")]),s("br"),s("span",{staticClass:"line-number"},[n._v("116")]),s("br"),s("span",{staticClass:"line-number"},[n._v("117")]),s("br"),s("span",{staticClass:"line-number"},[n._v("118")]),s("br"),s("span",{staticClass:"line-number"},[n._v("119")]),s("br"),s("span",{staticClass:"line-number"},[n._v("120")]),s("br"),s("span",{staticClass:"line-number"},[n._v("121")]),s("br"),s("span",{staticClass:"line-number"},[n._v("122")]),s("br"),s("span",{staticClass:"line-number"},[n._v("123")]),s("br"),s("span",{staticClass:"line-number"},[n._v("124")]),s("br"),s("span",{staticClass:"line-number"},[n._v("125")]),s("br"),s("span",{staticClass:"line-number"},[n._v("126")]),s("br"),s("span",{staticClass:"line-number"},[n._v("127")]),s("br"),s("span",{staticClass:"line-number"},[n._v("128")]),s("br"),s("span",{staticClass:"line-number"},[n._v("129")]),s("br"),s("span",{staticClass:"line-number"},[n._v("130")]),s("br"),s("span",{staticClass:"line-number"},[n._v("131")]),s("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);