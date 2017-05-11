# HTML CSS スターターキット

## ディレクトリ構造

ディレクトリ構造、ファイル構成は案件毎に最適な方法を検討

ただし公開ファイルと公開不要なファイル（SASS や node_modules など）は明確に分ける

特に理由がなければ下記の形にする
  
    root/
    ├── dist/
        └── index.html
        └──css/
        └──js/
        └──images/
    └── src/
        └──sass/
               └──style.scss
               └──_var.scss
               └──_mixin.scss
               └──_header-footer.scss
               └──_compo-list.scss
               └──_compo-table.scss
               └──_compo.scss
               └──_single-propery.scss
               └──_animation.scss
    
## 基本ルール

### 命名規則
- ID名、クラス名、ファイル名で単語をつなぐ場合は -（ハイフン）を使用
- 親要素の依存する名前は（親要素のクラス名__クラス名）とする（※例1参照）
- スタイルをオーバーライドする場合は（要素のクラス名--クラス名）とする（※例2参照）
  
例1:

    <div class="myclass">
     <div class="myclass__header></div>
     <div class="myclass__body></div>
    </div>

例2:
  
    <div class="myclass myclass--active"></div>

  

### スタイリングに対する考え方

- 継承を利用して、共通の意味を持ったコンポーネントで共有するスタイルを複数箇所に書かないようにする（参考 : _compo.scss）
- 全体で共有する値は _var.scss に変数として記述して使用する
- イレギュラーなスタイルに対応する場合は都度スタイルを追加せず _single-propery.scss にある .set-\* クラスの組み合わせで対応（二回以上再利用されたものは、.set-\* の組み合わせではなくコンポーネントとして再定義するほうがよい）

##デフォルトで定義された汎用クラスの使い方

### .col
clearfix の処理は全て .col を使用 .col 以外で clearfix は行わない。また、.col 自体に直接スタイルを追加するのは不可

### .fixed-width
- 最上位の幅固定には .fixed-width を使用。また、その値は _var.scss 内で定義されたものを参照。このクラスも直接スタイルを追加するのは不可

### .sp-only .pc-only
- .sp-only .pc-only のふたつのクラスは、ブレイクポイント毎に表示を切り替える場合に使用。直接スタイルの追加は不可。また、このクラスを持った要素への display プロパティの追加は**いかなる方法も不可**。

## その他

### タスクランナー

- タスクランナーを使用する場合、運用や修正に必要な手順があれば箇条書きなどで文書化する
- タスクランナーを使用する場合、package.json の納品は必須

#### デフォルトで設定してあるコマンド
- compass /src/sass のファイルをコンパイル
- concat /src/libs/*.js の複数ファイルを /src/js/libs.js 一枚にまとめる
- minify /src/libs/libs.js をミニファイして /dist/js/lib.min.js として書き出す
- js concat 後 minify
