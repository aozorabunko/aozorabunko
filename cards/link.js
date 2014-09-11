

document.getElementById('link').innerHTML='<a href="JavaScript:goBooklog();"><img align="middle" src="http://www.aozora.gr.jp/cards/images/booklog_88_31.gif" alt="本の感想を書き込もう　web本棚サービスブクログ" width="88" height="31" border="0"></a>「<a href="JavaScript:goBooklog();">ブクログでレビューを読む、書く。</a>」<br><input type="button" value="青空inBrowsers" onclick="goVoyager()">で縦書き表示</form><form><input type="button" value="えあ草紙・青空図書館" onclick="goAirzoshi()">で縦書き表示</form>';


var num = location.href.replace(/.html/,'').replace(/http:\/\/www.aozora.gr.jp\/cards\/[0-9]+\/card/,'');
var numm = (Array(6).join('0') + num).slice(-6);


function goBooklog(){
  window.open().location.href = 'http://booklog.jp/item/7/'+numm;
}


function goVoyager(){
  window.open().location.href = 'http://aozora.binb.jp/reader/main.html?cid='+num;
}


function goAirzoshi(){
  window.open().location.href = 'http://www.satokazzz.com/airzoshi/reader.php?action=aozora&id='+num;
}


//青空文庫サーバ内ではnumのreplaceふたつめを/http:\/\/www.aozora.gr.jp\/cards\/[0-9]+\/card/と書くこと

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
