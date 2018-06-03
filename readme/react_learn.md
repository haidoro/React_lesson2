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
2. 次にreact環境を作成。「create-react-app」コマンドの後にフォルダ名を指定するとそのフォルダを新規作成してくれて、その中にReact環境が出来上がる。Amazing!!!
```
create-react-app hello
```
3. helloフォルダにcdで移動後yarnでサーバー起動
```
yarn run start
```
http://localhost:3000/の「Welcome to React」ページが自動で開きます。
サーバー閉じるにはCtrl+C (注意Command+Cではない！）