(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{380:function(t,s,e){"use strict";e.r(s);var a=e(4),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ol",[s("li",[t._v("在 github 上下载 googletest 源码")]),t._v(" "),s("li",[t._v("查看 googletest/README.md 文件，里面有对系统的一些要求")])]),t._v(" "),s("div",{staticClass:"center-container"},[s("p",[s("img",{attrs:{src:"/img/cplusplus/gtest_readme_01.png",alt:"gtest cmake"}})])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("查看 googletest/googletest/README.md 文件")])]),t._v(" "),s("div",{staticClass:"center-container"},[s("p",[s("img",{attrs:{src:"/img/cplusplus/gtest_readme.png",alt:"gtest cmake"}})])]),s("p",[t._v("使用命令行构建构建项目使用命令：\ng++ -std=c++11 -isystem ./include -I.\\ -pthread -c ./src/gtest-all.cc\nar -rv libgtest.a gtest-all.o")]),t._v(" "),s("p",[t._v('通过使用 ar（archive，打包）命令，将 .o 文件打包为 .a （静态链接库）文件\n使用 cmake 构建\n在当前文件夹下新建 build 文件夹，用于编译，进入 build 文件夹，然后 cmake .. make，编译成功。对不起这里可能会失败的，如果当前 g++编译器没有使用 -std=c++11 选项，可能会报错找不到 nullptr，在 CMakeLists.txt 文件中加入 SET(CMAKE_CXX_FLAGS "-std=c++11")\nmkdir build\ncd build\ncmake ..\nmake')]),t._v(" "),s("p",[t._v("此时在 build 目录下生成了 lib/libgtest.a 文件 3. 编译 sample 文件\ncd make\nmake ./sample1_unittest\n./sample1_unittest\n想要将运行结果保存到文件可以使用如下命令\n./sample1_unittest > testlog")]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("在其他项目工程中使用 gtest\n项目目录结构")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("---\n|---build\n|---include\n|---gtest\n|---\n|---lib\n|---libgtest.a\n|---src\n|---sample.h\n|---sample.cpp\n|---CMakeLists.txt\n|---test\n|---sample_unittest.cpp\n|---main.cpp\n|---CMakeLists.txt\n---\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("p",[t._v("将 googletest/googletest/include 目录下的 gtest 文件夹拷贝到 include 目录，libgtest.a 文件拷贝到 lib 目录。测试代码写在 test 目录")]),t._v(" "),s("p",[t._v("编写 CMakeLists.txt 文件\n#CMakeLists.txt\nCMAKE_MINIMUM_REQUIRED(VERSION 2.8)")]),t._v(" "),s("p",[t._v('PROJECT(mytest)\nSET(CMAKE_CXX_FLAGS "-std=c++11 -lgtest -lpthread")#设置编译选项')]),t._v(" "),s("p",[t._v("INCLUDE_DIRECTORIES(${PROJECT_SOURCE_DIR}/include) #添加包含目录\nLINK_DIRECTORIES(${PROJECT_SOURCE_DIR}/lib) #添加编译的 lib 目录")]),t._v(" "),s("p",[t._v("ADD_SUBDIRECTORY(test) #添加子文件夹\nADD_SUBDIRECTORY(src) #添加子文件夹")]),t._v(" "),s("p",[t._v("add_executable(main main.cpp) #添加可执行程序 main\ntarget_link_libraries(main gtest test src) #将静态库连接到 main")]),t._v(" "),s("p",[t._v("#-------------------------------------------------\n#file:src/CMakeLists.txt\nadd_library(src sample.cpp)")]),t._v(" "),s("p",[t._v("#-------------------------------------------------\n#file:test/CMakeLists.txt\nadd_library(test sample_unittest.cpp)")]),t._v(" "),s("p",[t._v("然后再 build 目录\ncmake .."),s("br"),t._v("\nmake")]),t._v(" "),s("div",{staticClass:"center-container"},[s("p",[s("img",{attrs:{src:"/img/cplusplus/gtest_cmake.png",alt:"gtest cmake"}})])]),s("p",[t._v("大功告成")])])}),[],!1,null,null,null);s.default=n.exports}}]);