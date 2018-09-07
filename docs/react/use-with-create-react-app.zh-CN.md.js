webpackJsonp([47],{2004:function(n,e){n.exports={content:["article",["p",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app"},"create-react-app"]," \u662f\u4e1a\u754c\u6700\u4f18\u79c0\u7684 React \u76f8\u5173\u5e94\u7528\u5f00\u53d1\u5de5\u5177\u4e4b\u4e00\uff0c\u672c\u6587\u6863\u5c1d\u8bd5\u4ee5\u6b64\u5de5\u5177\u6765\u4f7f\u7528 antd-mobile \u7ec4\u4ef6\u3002"],["h3","\u5b89\u88c5\u548c\u521d\u59cb\u5316"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> -g create-react-app\n\n<span class="token comment" spellcheck="true"># \u6ce8\u610f\uff1a\u5de5\u5177\u4f1a\u81ea\u52a8\u521d\u59cb\u5316\u4e00\u4e2a\u811a\u624b\u67b6\u5e76\u5b89\u88c5 React \u9879\u76ee\u7684\u5404\u79cd\u5fc5\u8981\u4f9d\u8d56\uff0c\u5982\u679c\u5728\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u7f51\u7edc\u95ee\u9898\uff0c\u8bf7\u5c1d\u8bd5\u914d\u7f6e\u4ee3\u7406\u6216\u4f7f\u7528\u5176\u4ed6 npm registry\u3002</span>\n$ create-react-app my-app\n\n$ <span class="token function">cd</span> my-app\n$ <span class="token function">npm</span> start'},["code","$ npm install -g create-react-app\n\n# \u6ce8\u610f\uff1a\u5de5\u5177\u4f1a\u81ea\u52a8\u521d\u59cb\u5316\u4e00\u4e2a\u811a\u624b\u67b6\u5e76\u5b89\u88c5 React \u9879\u76ee\u7684\u5404\u79cd\u5fc5\u8981\u4f9d\u8d56\uff0c\u5982\u679c\u5728\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u7f51\u7edc\u95ee\u9898\uff0c\u8bf7\u5c1d\u8bd5\u914d\u7f6e\u4ee3\u7406\u6216\u4f7f\u7528\u5176\u4ed6 npm registry\u3002\n$ create-react-app my-app\n\n$ cd my-app\n$ npm start"]],["p","\u6253\u5f00 ",["a",{title:null,href:"http://localhost:3000/"},"http://localhost:3000/"]," \u8bbf\u95ee\u4f60\u7684\u5e94\u7528\u3002"],["h3","\u5f15\u5165 antd-mobile"],["p","\u5148\u53c2\u8003 ",["a",{title:null,href:"/docs/react/introduce#3.-%E4%BD%BF%E7%94%A8"},"\u5165\u53e3\u9875\u9762 (html \u6216 \u6a21\u677f) \u76f8\u5173\u8bbe\u7f6e"],"\uff0c\u914d\u7f6e\u4f60\u7684\u9879\u76ee html \u9875\u9762\u3002"],["h4","\u6309\u9700\u52a0\u8f7d"],["ul",["li",["p","\u5f15\u5165 ",["a",{title:null,href:"https://github.com/timarney/react-app-rewired"},"react-app-rewired"]," \u5e76\u4fee\u6539 package.json \u91cc\u7684\u542f\u52a8\u914d\u7f6e:"]]],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> react-app-rewired --save-dev'},["code","$ npm install react-app-rewired --save-dev"]],["pre",{lang:"diff",highlighted:'/* package.json */\n"scripts": {\n<span class="token deleted">-   "start": "react-scripts start",</span>\n<span class="token inserted">+   "start": "react-app-rewired start",</span>\n<span class="token deleted">-   "build": "react-scripts build",</span>\n<span class="token inserted">+   "build": "react-app-rewired build",</span>\n<span class="token deleted">-   "test": "react-scripts test --env=jsdom",</span>\n<span class="token inserted">+   "test": "react-app-rewired test --env=jsdom",</span>\n}'},["code",'/* package.json */\n"scripts": {\n-   "start": "react-scripts start",\n+   "start": "react-app-rewired start",\n-   "build": "react-scripts build",\n+   "build": "react-app-rewired build",\n-   "test": "react-scripts test --env=jsdom",\n+   "test": "react-app-rewired test --env=jsdom",\n}']],["ul",["li",["p","\u7136\u540e\u5728\u9879\u76ee\u6839\u76ee\u5f55\u521b\u5efa\u4e00\u4e2a config-overrides.js \u7528\u4e8e\u4fee\u6539\u9ed8\u8ba4\u914d\u7f6e\u3002"]]],["pre",{lang:"js",highlighted:'module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">override</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> env<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// do stuff with the webpack config...</span>\n  <span class="token keyword">return</span> config<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","module.exports = function override(config, env) {\n  // do stuff with the webpack config...\n  return config;\n};"]],["ul",["li",["p","\u4f7f\u7528 babel-plugin-import, ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," \u662f\u4e00\u4e2a\u7528\u4e8e\u6309\u9700\u52a0\u8f7d\u7ec4\u4ef6\u4ee3\u7801\u548c\u6837\u5f0f\u7684 babel \u63d2\u4ef6\uff08",["a",{title:null,href:"https://ant.design/docs/react/getting-started-cn#\u6309\u9700\u52a0\u8f7d"},"\u539f\u7406"],"\uff09\uff0c\u73b0\u5728\u6211\u4eec\u5c1d\u8bd5\u5b89\u88c5\u5b83\u5e76\u4fee\u6539 config-overrides.js \u6587\u4ef6\u3002"]]],["pre",{lang:"bash",highlighted:'<span class="token function">npm</span> <span class="token function">install</span> babel-plugin-import --save-dev'},["code","npm install babel-plugin-import --save-dev"]],["pre",{lang:"diff",highlighted:"<span class=\"token inserted\">+ const { injectBabelPlugin } = require('react-app-rewired');</span>\n  module.exports = function override(config, env) {\n<span class=\"token inserted\">+   config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);</span>\n    return config;\n  };"},["code","+ const { injectBabelPlugin } = require('react-app-rewired');\n  module.exports = function override(config, env) {\n+   config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);\n    return config;\n  };"]],["ul",["li",["p","\u66f4\u6539\u5f15\u7528\u65b9\u5f0f"]]],["pre",{lang:"diff",highlighted:"<span class=\"token deleted\">- import Button from 'antd-mobile/lib/button';</span>\n<span class=\"token inserted\">+ import { Button } from 'antd-mobile';</span>"},["code","- import Button from 'antd-mobile/lib/button';\n+ import { Button } from 'antd-mobile';"]],["h3","\u5b8c\u6574\u7684\u793a\u4f8b"],["p","\u542b ",["code","css-moules"]," \u548c ",["code","\u81ea\u5b9a\u4e49\u4e3b\u9898"]," \u7684 ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-app"},"antd-mobile-sample/create-react-app"]]],meta:{order:1,title:"\u5728 create-react-app \u4e2d\u4f7f\u7528",filename:"docs/react/use-with-create-react-app.zh-CN.md"},toc:["ul"]}}});