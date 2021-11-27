# National dictionary extensions

![ci-main](https://github.com/faronan/national-dictionary-extensions/workflows/CI/badge.svg)

選択した単語の意味や解説を辞書で検索し、表示する拡張機能です。

## DEMO

![DEMO](https://user-images.githubusercontent.com/40588536/143685943-c1576e29-bfb3-4db8-8fdd-9c438a2ab195.gif 'DEMO')


## Requirement
- Node.js
- webpack

## Usage
### ローカルでの使用
#### 1. `extensions`ディレクトリへの出力
```
$npm run export
```
#### 2. Chromeへの読み込み

[Chromeの拡張ページの左上「パッケージ化されていない拡張機能を読み込む」](chrome://extensions/)
から、`extensions`ディレクトリを読み込んでください。

## License
[MIT](https://choosealicense.com/licenses/mit/)