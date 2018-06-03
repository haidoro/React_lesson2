# React
Facrbookが提供しているCLIツール「Create React App」  
驚きの手軽さでプロジェクト構造がセットアップされる。

## create react app

```
yarn global add create-react-app
```

## Hello world

ブランチを変えてHello worldを表示してみる。
1. まずはgitのcheckout
```
git checkout -b hello
```
2. 次にreactのボイラープレートを作成。「create-react-app」コマンドの後にフォルダ名を指定するとそのフォルダを新規作成してくれて、その中にReact環境が出来上がる。Amazing!!!
```
create-react-app hello
```
3. helloフォルダにcdで移動後yarnでサーバー起動
```
yarn start
```
`http://localhost:3000`/の「Welcome to React」ページが自動で開きます。
サーバー閉じるにはCtrl+C (注意Command+Cではない！）
4. コマンドを新規ウインドで開きcdでhelloフォルダに移動 
git grepコマンドで 「Welcome to React」がどこに記述されたいるのか探す。結果  
`src/App.js:<h1 className="App-title">Welcome to React</h1>`  
と表示されるのでsrc/App.jsに記述されていることがわかる。
```
git grep "Welcome to React"
```
5. src/App.jsの`<h1 className="App-title">Welcome to React</h1>`を`<h1 className="App-title">Hello world</h1>`に変更する。

## 独自boilerplate作成

先に作成したHello worldを変更します。
ブランチを新しく作成

```
git checkout - b my-boilerplate
```
