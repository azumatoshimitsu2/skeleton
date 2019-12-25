# HTML CSS スターターキット

## ディレクトリ構造

ディレクトリ構造、ファイル構成は案件毎に最適な方法を検討

公開ファイルと公開不要なファイル（SASS や node_modules など）は明確に分ける

特に理由がなければ下記の形にし、**読み込み順とスタイルの優先度に整合性がとれるように心がける**

    root/
    ├── dist/
        └──index.html
        └──assets/
           └──css/
           └──images/
           └──js/
               └──lib/
    └── src/
        └──sass/
            └──style.scss
            └──foundation （基本的となるスタイル）
               └──_global_var.scss
               └──_mixin.scss
               └──_reset.scss
               └──_font.scss
            └──layout （ヘッダ、フッタ、共通ナビ、カラム構造）
               └──_col.scss
               └──_flex.scss
               └──_float.scss
               └──_footer.scss
               └──_header.scss
               └──_nav.scss
               └──_page.scss
            └──vendors（プラグインや CMS 用のスタイル）
               └──_cms.scss（WP の記事内部など CMS で使用されるもの）
               └──jquery.***..scss
            └──object（部品のスタイル）
             └──el（粒度の決まった部品）
               └──_btn.scss
               └──_icon.scss
               └──_header.scss
               └──_list.scss
               └──_table.scss
             └──compo（恣意的な大きさの部品）
               └──_compo.scss
             └──page（ページ固有のスタイル - サイトのトップ以外での使用は非推奨）
               └──_home.scss
             └──util（汎用クラス）
               └──_margin_padding.scss
               └──_width.scss
               └──_util.scss
        └──js/
             └──main.js
                └──modules/

    └── package.json
    
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

  

### スタイリングに対する考え方・ルール

- できる限りシンプルにし、アンチパターンを回避して予測可能で再利用しやすいコードを書く
- 同じスタイルを何度も書かないですむように、スタイルを疎結合にして影響範囲が不明確にならないようにする
- しかし、テンプレート化するものは関係を明確にした上で密結合にし、閉じたスタイリングにする
- 継承を利用して、共有するスタイルが分散しないようにする
- イレギュラーなスタイルに対応する場合は CSS の肥大化を防ぐため、都度スタイルを追加せず _util.scss にある .set-\* クラスの組み合わせで対応
- 文字サイズは階層が深くなると把握が困難になるため、意味的な要素に指定するよう心がける。
  
### アンチパターン
- HTML の構造に依存している
- スタイルを取り消している
- 絶対値を多用している

※Web制作者のためのCSS設計の教科書 より引用

## デフォルトで定義された汎用クラス
### 目的
- 頻出するスタイルを一度しか書かずにすむようにする
- 主なレスポンシブレイアウトを一元管理

### .col
clearfix の処理は全て .col を使用 .col 以外で clearfix は行わない。また、.col クラスにスタイルを追加するのは不可

### .fix-w
- 最上位の幅固定には .fix-w を使用。その値は _global_var.scss 内で定義されたものを参照。このクラスも直接スタイルを追加するのは不可

### .sp-only .pc-only
- .sp-only .pc-only のふたつのクラスは、ブレイクポイント毎に表示を切り替える場合に使用。直接スタイルの追加は不可。また、このクラスを持った要素への display プロパティの追加は**いかなる方法も不可**。

## その他
- タスクランナーなどを使用する場合、運用や修正に必要な手順があれば README に書く
- node モジュールを仕様する場合 package.json も同梱


