# React
facebookが開発したJavaScriptライブラリ
## React実例
facebook,slack,Qiita,NETFLIX,Airbnbなど

## create react app
Facrbookが提供しているCLIツール「Create React App」  
驚きの手軽さでプロジェクト構造がセットアップされる。
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

git addしたあとcommitしてリモートにPushします。
```
git add .  
git commit
git push -u origin HEAD
```
## 独自boilerplate作成

先に作成したHello worldを変更します。
ブランチを新しく作成

```
git checkout -b my-boilerplate
```
App.cssとApp.test.js、logo.svgは不要なので削除

App.jsは以下の内容に変更（不要なコードは削除）
```
import React, { Component } from 'react';

class App extends Component {
  render() {   
      <div><h1>Hello world!</h1></div>
  }
}

export default App;
```

## JSXについて
JSXとはJavaScriptとXMLを拡張したもの

App.jsファイルのreturn以降のdivタグに囲まれた部分がJSXになる。
```
render() {
   return <div>Hello world!</div>;
}
```
これをトランスファイルという仕組みでJavaScriptに変換している。上のコードを以下のように記述しても同じ結果になる。  
つまり、記述が簡単になるメリットがある。
```
render() {
     return React.createElement(
       "div",
       null,
       "Hello world!"
     )
  }
```

## JSXの文法
`import React, { Component } from 'react';`のReactはなぜ必要か?  
これはJSXを使用するために必要だからです。
また、DOMを変数を使っても大丈夫です。

```
render() {
    const dom = <h1>Hi</h1>;
    return dom;
}
```
さらに次のような表現も可能(ES6の` `内の変数展開の考え方と同様)
```
render() {
    const greeting = "Hi"
    const dom = <h1>{greeting}</h1>;
    return dom;
  }
```
### JSXでのクラス名の指定
`className="foo"`のようにclassNameとする。
```
render() {
    const greeting = "Hi"
    const dom = <h1 className="foo">{greeting}</h1>;
    return dom;
  }
```

### JSXでのイベント

```
render() {
    return <input type="text" onChange={() => {console.log("I am clicked.")}} />
  }
}
```

### JSX内に複数のタグを使用する場合
JSX内で複数のタグを使用する場合は、returnの直下にはタグは1つのみという制約があるため、入れ子状態にして行う。

```
return (
    <div>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked.")}} />
    </div>
)
```
ただし、この方法では余計なdivタグを作成することになるので、
代替方法として`<React.Fragment>`タグを使用することができる。これはHTML上には表示されないものです。
```
return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked.")}} />
    </React.Fragment>
    )
```

### BABELについて
JSXに記述した内容をJavaScriptにトランスパイルするのはBABELです。constをvarに変換したりもできるよ！
[BABEL オンライン変換のページ](https://babeljs.io/repl/)

## コンポーネントについて
Reactのコンポーネントには関数定義によるコンポーネントとClassによるコンポーネントと2種類あります。

### functionalコンポーネントの例

App.js
```
import React from 'react';
const App = () =>{
	return (
			<div>
				<Cat />
				<Cat />
				<Cat />
				<Cat />
			</div>
		)
}
const Cat = ()=>{
	return <div>Meow!</div>
}
```

## props
propsとはコンポーネントの属性です。数値、オブジェクト、関数など使用できる。