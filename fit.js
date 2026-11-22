// いちばん上の題名（「空洞の熱帯」など）を、1行で画面の幅に収める（2026-11-22）
// スマホの「フォントサイズ」を大きくすると、ブラウザによっては、画面の幅に合わせた題名の大きさにも
// 拡大がかかって、題名が右へはみ出す。はみ出したときだけ、はみ出した分だけ小さくする。
// 小さくする量は CSS の --fit（mobile.css）で渡す。はみ出していなければ 1 のまま＝見た目は変わらない。
(function () {
  function fit() {
    var list = document.querySelectorAll('.title h1');
    for (var n = 0; n < list.length; n++) {
      var el = list[n], f = 1;
      el.style.setProperty('--fit', '1');
      for (var i = 0; i < 5; i++) {
        var w = el.clientWidth, s = el.scrollWidth;
        if (!w || s <= w + 1) break;
        f = f * (w / s) * 0.98;
        el.style.setProperty('--fit', f.toFixed(4));
      }
    }
  }
  fit();
  addEventListener('load', fit);
  addEventListener('resize', fit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
})();
