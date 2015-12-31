

document.getElementById('link').innerHTML='<a href="JavaScript:goBooklog();"><img align="middle" src="../images/booklog_88_31.gif" alt="本の感想を書き込もう　web本棚サービスブクログ" width="88" height="31" border="0"></a>「<a href="JavaScript:goBooklog();">ブクログでレビューを読む、書く。</a>」<br><a href="JavaScript:goVoyager();"><img align="middle" src="../images/aib.png" alt="青空inBrowsersで縦書き表示" width="155" height="31" border="0"></a>「<a href="JavaScript:goVoyager();">青空 in Browsersで縦書き表示。PC、スマホ、タブレット対応</a>」<br><form><input type="button" value="えあ草紙・青空図書館" onclick="goAirzoshi()">で縦書き表示</form><form><input type="button" value="この作品の朗読" onclick="goRodoku()">を Google で検索する</form><a href="https://twitter.com/share" class="twitter-share-button"{count} data-lang="ja" data-hashtags="青空文庫" data-dnt="true">ツイート</a>この作品を twitter でつぶやく<br><div class="fb-like" data-layout="standard" data-action="like" data-show-faces="false" data-share="true"></div>';



var num = location.href.replace(/.html/,'').replace(/http:\/\/(www|mirror).aozora.gr.jp\/cards\/[0-9]+\/card/,'');
var numm = (Array(6).join('0') + num).slice(-6);
var title = document.title.replace(/図書カード：/,'');


function goBooklog(){
  window.open().location.href = 'http://booklog.jp/item/7/'+numm;
}


function goVoyager(){
  window.open().location.href = 'http://aozora.binb.jp/reader/main.html?cid='+num;
}


function goAirzoshi(){
  window.open().location.href = 'http://www.satokazzz.com/airzoshi/reader.php?action=aozora&id='+num;
}


function goRodoku(){
  window.open().location.href = 'https://www.google.co.jp/search?hl=ja&source=hp&q=青空文庫+朗読+'+title;
}



!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


//青空文庫サーバ内ではnumのreplaceふたつめを/http:\/\/(www|mirror).aozora.gr.jp\/cards\/[0-9]+\/card/と書くこと

//新しくリンク先サイトを増やすときは
//はじめのdocumentのなかに
//<a href="JavaScript:go【英字名称】();"><img align="middle" src="【バナーＵＲＬ】" alt="【説明】" width="【サイズ】" height="【サイズ】" border="0"></a>「<a href="JavaScript:go【英字名称】();">【説明】</a>」<br>
//か
//<input type="button" value="【説明】" onclick="go【名称】()">【説明】</form>
//を入れて
//function go【英字名称】(){
//  window.open().location.href = '【アドレス】'+【トリガー】;
//}
//を作ること
//トリガーがゼロ無しＩＤの場合はnum、ゼロつきＩＤ（６桁）の場合はnummを使うこと

//この書き方では、作品IDが五桁のものしか対応できなかった
//function goBooklog(){
//  window.open().location.href =
//      location.href.replace(/.html/,'').replace(/www.alz.jp\/221b\/aozora\/card/,'booklog.jp/item/7/0');
//}
