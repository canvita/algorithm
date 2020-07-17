# eslint + prettier + vscode

1. vscode: eslint, prettier 插件安装
2. 全局安装eslint:  npm install eslint -g
3. 使用模板项目 npm i
4. 在已有项目安装, eslint --init
5. vscode 配置添加:

````javascript
 "editor.codeActionsOnSave": [
    "source.fixAll.eslint"
  ],
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "eslint.options": {
    "configFile": "./.eslintrc.js"
  },
  "eslint.format.enable": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.requireConfig": true,
  "prettier.configPath": "./.prettierrc",
````

4. 一个好用的字体 JetBrains Mono, 电脑安装后就可以在vscode 中使用

`"editor.fontFamily": "'JetBrains Mono', Consolas, 'Courier New', monospace",`

5. 