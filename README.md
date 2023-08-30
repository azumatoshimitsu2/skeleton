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
           └──img/
           └──js/
             └──main.js
                └──modules/
               └──vendor/
    └── src/
        └──sass/
            └──style.scss
            └──foundation （基本的となるスタイル）
               └──_index.scss
               └──_function.scss
               └──_mixin.scss
               └──_global_var.scss
               └──_reset.scss
            └──layout （ヘッダ、フッタ、共通ナビ、カラム構造）
               └──_footer.scss
               └──_header.scss
               └──_nav.scss
               └──_page.scss（ページ全体のレイアウト）
            └──vendors（プラグインや CMS 用のスタイル）
               └──_**.scss
            └──object（部品のスタイル）
             └──component（部品の共通スタイル）
               └──_**.scss
             └──project（固有のスタイル）
               └──_**.scss
             └──page（ページ固有のスタイル）
               └──_home.scss
             └──util（汎用クラス）
               └──_**.scss
    └── package.json
    
## 基本ルール

### 命名規則
- ID名、クラス名、ファイル名で単語をつなぐ場合は -（ハイフン）を使用
- 親要素の依存する名前は（親要素のクラス名__クラス名）とする（※例1参照）
- スタイルを追加・上書きする場合は（要素のクラス名--クラス名）とする（※例2参照）
  
例1:

    <div class="myclass">
     <div class="myclass__header></div>
     <div class="myclass__body></div>
    </div>

例2:
  
    <div class="myclass myclass--active"></div>
