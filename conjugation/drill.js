// drill.js

var vowelPart = {
  "あ": "あ", "い": "い", "う": "う", "え": "え", "お": "お",
  "か": "あ", "き": "い", "く": "う", "け": "え", "こ": "お",
  "さ": "あ", "し": "い", "す": "う", "せ": "え", "そ": "お",
  "た": "あ", "ち": "い", "つ": "う", "て": "え", "と": "お",
  "な": "あ", "に": "い", "ぬ": "う", "ね": "え", "の": "お",
  "は": "あ", "ひ": "い", "ふ": "う", "へ": "え", "ほ": "お",
  "ま": "あ", "み": "い", "む": "う", "め": "え", "も": "お",
  "や": "あ", "ゆ": "う", "よ": "お",
  "ら": "あ", "り": "い", "る": "う", "れ": "え", "ろ": "お",
  "わ": "あ", "を": "お",
  "が": "あ", "ぎ": "い", "ぐ": "う", "げ": "え", "ご": "お",
  "ざ": "あ", "じ": "い", "ず": "う", "ぜ": "え", "ぞ": "お",
  "だ": "あ", "ぢ": "い", "づ": "う", "で": "え", "ど": "お",
  "ば": "あ", "び": "い", "ぶ": "う", "べ": "え", "ぼ": "お",
  "ぱ": "あ", "ぴ": "い", "ぷ": "う", "ぺ": "え", "ぽ": "お"
};

var consonantPart = {
  "あ": "あ", "い": "あ", "う": "あ", "え": "あ", "お": "あ",
  "か": "か", "き": "か", "く": "か", "け": "か", "こ": "か",
  "さ": "さ", "し": "さ", "す": "さ", "せ": "さ", "そ": "さ",
  "た": "た", "ち": "た", "つ": "た", "て": "た", "と": "た",
  "な": "な", "に": "な", "ぬ": "な", "ね": "な", "の": "な",
  "は": "は", "ひ": "は", "ふ": "は", "へ": "は", "ほ": "は",
  "ま": "ま", "み": "ま", "む": "ま", "め": "ま", "も": "ま",
  "や": "や", "ゆ": "や", "よ": "や",
  "ら": "ら", "り": "ら", "る": "ら", "れ": "ら", "ろ": "ら",
  "わ": "わ", "を": "わ",
  "ん": "ん",
  "が": "が", "ぎ": "が", "ぐ": "が", "げ": "が", "ご": "が",
  "ざ": "ざ", "じ": "ざ", "ず": "ざ", "ぜ": "ざ", "ぞ": "ざ",
  "だ": "だ", "ぢ": "だ", "づ": "だ", "で": "だ", "ど": "だ",
  "ば": "ば", "び": "ば", "ぶ": "ば", "べ": "ば", "ぼ": "ば",
  "ぱ": "ぱ", "ぴ": "ぱ", "ぷ": "ぱ", "ぺ": "ぱ", "ぽ": "ぱ"
};

var combineParts = {
  "ああ": "あ", "あい": "い", "あう": "う", "あえ": "え", "あお": "お",
  "かあ": "か", "かい": "き", "かう": "く", "かえ": "け", "かお": "こ",
  "さあ": "さ", "さい": "し", "さう": "す", "さえ": "せ", "さお": "そ",
  "たあ": "た", "たい": "ち", "たう": "つ", "たえ": "て", "たお": "と",
  "なあ": "な", "ない": "に", "なう": "ぬ", "なえ": "ね", "なお": "の",
  "はあ": "は", "はい": "ひ", "はう": "ふ", "はえ": "へ", "はお": "ほ",
  "まあ": "ま", "まい": "み", "まう": "む", "まえ": "め", "まお": "も",
  "やあ": "や", "やう": "ゆ", "やお": "よ",
  "らあ": "ら", "らい": "り", "らう": "る", "らえ": "れ", "らお": "ろ",
  "わあ": "わ", "わお": "を",
  "があ": "が", "がい": "ぎ", "がう": "ぐ", "がえ": "げ", "がお": "ご",
  "ざあ": "ざ", "ざい": "じ", "ざう": "ず", "ざえ": "ぜ", "ざお": "ぞ",
  "だあ": "だ", "だい": "ぢ", "だう": "づ", "だえ": "で", "だお": "ど",
  "ばあ": "ば", "ばい": "び", "ばう": "ぶ", "ばえ": "べ", "ばお": "ぼ",
  "ぱあ": "ぱ", "ぱい": "ぴ", "ぱう": "ぷ", "ぱえ": "ぺ", "ぱお": "ぽ"
};

var conjugations = {

  "行く" : {

    "plain" : "行[い]く",
    "negative" : "行[い]かない",
    "polite" : "行[い]きます",
    "polite negative" : "行[い]きません",
    "past" : "行[い]った",
    "past negative" : "行[い]かなかった",
    "polite past" : "行[い]きました",
    "polite past negative" : "行[い]きませんでした",
  },

  "飲む" : {

    "plain" : "飲[の]む",
    "negative" : "飲[の]まない",
    "polite" : "飲[の]みます",
    "polite negative" : "飲[の]みません",
    "past" : "飲[の]んだ",
    "past negative" : "飲[の]まなかった",
    "polite past" : "飲[の]みました",
    "polite past negative" : "飲[の]みませんでした",
  },

  "作る" : {

    "plain" : "作[つく]る",
    "negative" : "作[つく]らない",
    "polite" : "作[つく]ります",
    "polite negative" : "作[つく]りません",
    "past" : "作[つく]った",
    "past negative" : "作[つく]らなかった",
    "polite past" : "作[つく]りました",
    "polite past negative" : "作[つく]りませんでした",
  },

  "買い戻す" : {

    "plain" : "買[か]い戻[もど]す",
    "negative" : "買[か]い戻[もど]さない",
    "polite" : "買[か]い戻[もど]します",
    "polite negative" : "買[か]い戻[もど]しません",
    "past" : "買[か]い戻[もど]した",
    "past negative" : "買[か]い戻[もど]さなかった",
    "polite past" : "買[か]い戻[もど]しました",
    "polite past negative" : "買[か]い戻[もど]しませんでした",
  },

  "見る" : {

    "plain" : "見[み]る",
    "negative" : "見[み]ない",
    "polite" : "見[み]ます",
    "polite negative" : "見[み]ません",
    "past" : "見[み]た",
    "past negative" : "見[み]なかった",
    "polite past" : "見[み]ました",
    "polite past negative" : "見[み]ませんでした",
  },

  "食べる" : {

    "plain" : "食[た]べる",
    "negative" : "食[た]べない",
    "polite" : "食[た]べます",
    "polite negative" : "食[た]べません",
    "past" : "食[た]べた",
    "past negative" : "食[た]べなかった",
    "polite past" : "食[た]べました",
    "polite past negative" : "食[た]べませんでした",
  },

  "起きる" : {

    "plain" : "起[お]きる",
    "negative" : "起[お]きない",
    "polite" : "起[お]きます",
    "polite negative" : "起[お]きません",
    "past" : "起[お]きた",
    "past negative" : "起[お]きなかった",
    "polite past" : "起[お]きました",
    "polite past negative" : "起[お]きませんでした",
  },

  "買い換える" : {

    "plain" : "買[か]い換[か]える",
    "negative" : "買[か]い換[か]えない",
    "polite" : "買[か]い換[か]えます",
    "polite negative" : "買[か]い換[か]えません",
    "past" : "買[か]い換[か]えた",
    "past negative" : "買[か]い換[か]えなかった",
    "polite past" : "買[か]い換[か]えました",
    "polite past negative" : "買[か]い換[か]えませんでした",
  },

  "来る" : {

    "plain" : "来[く]る",
    "negative" : "来[こ]ない",
    "polite" : "来[き]ます",
    "polite negative" : "来[き]ません",
    "past" : "来[き]た",
    "past negative" : "来[こ]なかった",
    "polite past" : "来[き]ました",
    "polite past negative" : "来[き]ませんでした",
  },

  "勉強する" : {

    "plain" : "勉[べん]強[きょう]する",
    "negative" : "勉[べん]強[きょう]しない",
    "polite" : "勉[べん]強[きょう]します",
    "polite negative" : "勉[べん]強[きょう]しません",
    "past" : "勉[べん]強[きょう]した",
    "past negative" : "勉[べん]強[きょう]しなかった",
    "polite past" : "勉[べん]強[きょう]しました",
    "polite past negative" : "勉[べん]強[きょう]しませんでした",
  },

  "電話する" : {

    "plain" : "電[でん]話[わ]する",
    "negative" : "電[でん]話[わ]しない",
    "polite" : "電[でん]話[わ]します",
    "polite negative" : "電[でん]話[わ]しません",
    "past" : "電[でん]話[わ]した",
    "past negative" : "電[でん]話[わ]しなかった",
    "polite past" : "電[でん]話[わ]しました",
    "polite past negative" : "電[でん]話[わ]しませんでした",
  },

  "読む" : {

    "plain" : "読[よ]む",
    "negative" : "読[よ]まない",
    "polite" : "読[よ]みます",
    "polite negative" : "読[よ]みません",
    "past" : "読[よ]んだ",
    "past negative" : "読[よ]まなかった",
    "polite past" : "読[よ]みました",
    "polite past negative" : "読[よ]みませんでした",
  },

  "思う" : {

    "plain" : "思[おも]う",
    "negative" : "思[おも]わない",
    "polite" : "思[おも]います",
    "polite negative" : "思[おも]いません",
    "past" : "思[おも]った",
    "past negative" : "思[おも]わなかった",
    "polite past" : "思[おも]いました",
    "polite past negative" : "思[おも]いませんでした",
  },

  "買い与える" : {

    "plain" : "買[か]い与[あた]える",
    "negative" : "買[か]い与[あた]えない",
    "polite" : "買[か]い与[あた]えます",
    "polite negative" : "買[か]い与[あた]えません",
    "past" : "買[か]い与[あた]えた",
    "past negative" : "買[か]い与[あた]えなかった",
    "polite past" : "買[か]い与[あた]えました",
    "polite past negative" : "買[か]い与[あた]えませんでした",
  },

  "座る" : {

    "plain" : "座[すわ]る",
    "negative" : "座[すわ]らない",
    "polite" : "座[すわ]ります",
    "polite negative" : "座[すわ]りません",
    "past" : "座[すわ]った",
    "past negative" : "座[すわ]らなかった",
    "polite past" : "座[すわ]りました",
    "polite past negative" : "座[すわ]りませんでした",
  },

  "休む" : {

    "plain" : "休[やす]む",
    "negative" : "休[やす]まない",
    "polite" : "休[やす]みます",
    "polite negative" : "休[やす]みません",
    "past" : "休[やす]んだ",
    "past negative" : "休[やす]まなかった",
    "polite past" : "休[やす]みました",
    "polite past negative" : "休[やす]みませんでした",
  },

  "足す" : {

    "plain" : "足[た]す",
    "negative" : "足[た]さない",
    "polite" : "足[た]します",
    "polite negative" : "足[た]しません",
    "past" : "足[た]した",
    "past negative" : "足[た]さなかった",
    "polite past" : "足[た]しました",
    "polite past negative" : "足[た]しませんでした",
  },

  "歌う" : {

    "plain" : "歌[うた]う",
    "negative" : "歌[うた]わない",
    "polite" : "歌[うた]います",
    "polite negative" : "歌[うた]いません",
    "past" : "歌[うた]った",
    "past negative" : "歌[うた]わなかった",
    "polite past" : "歌[うた]いました",
    "polite past negative" : "歌[うた]いませんでした",
  },
};

var log;

Array.prototype.randomElement = function () {
  return this[Math.floor(Math.random() * this.length)]
}

// From: http://stackoverflow.com/a/2897510

new function($) {
    $.fn.getCursorPosition = function() {
        var input = this.get(0);
        if (!input) return; // No (input) element found
        if ('selectionStart' in input) {
            // Standard-compliant browsers
            return input.selectionStart;
        } else if (document.selection) {
            // IE
            input.fmcus();
            var sel = document.selection.createRange();
            var selLen = document.selection.createRange().text.length;
            sel.moveStart('character', -input.value.length);
            return sel.text.length - selLen;
        }
    }
}(jQuery);

// From: http://stackoverflow.com/questions/499126/jquery-set-cursor-position-in-text-area

new function($) {
  $.fn.setCursorPosition = function(pos) {
    if (this.setSelectionRange) {
      this.setSelectionRange(pos, pos);
    } else if (this.createTextRange) {
      var range = this.createTextRange();
      range.collapse(true);
      if(pos < 0) {
        pos = $(this).val().length + pos;
      }
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }
}(jQuery);

function resetLog() {
  log = { "history": [] };
}

function getVerbForms(entry) {

  function kanaForm(word) {
    return word.split(/.\[([^\]]*)\]/).join("");
  }
  
  function kanjiForm(word) {
    return word.split(/(.)\[[^\]]*\]/).join("");
  }

  var result = {
    "kanji": { },
    "hiragana": { },
    "furigana": { }
  };

  Object.keys(conjugations[entry]).forEach(function (key) {
    result["kanji"][key] = kanjiForm(conjugations[entry][key]);
    result["hiragana"][key] = kanaForm(conjugations[entry][key]);
    result["furigana"][key] = conjugations[entry][key];
  });

  return result;
}

function getAdjectiveForms(plain_form) {

  var result = new Object();

  // past affirmative form (adjectives)

  if (plain_form == "いい") {
    result["past affirmative adj"] = "よかったです";
  } else if (plain_form.slice(-1) == "い") {
    result["past affirmative adj"] = plain_form.slice(0, -1) + "かったです";
  } else if (plain_form.slice(-1) == "な") {
    result["past affirmative adj"] = plain_form.slice(0, -1) + "でした";
  }

  // present negative form (adjectives)

  if (plain_form == "いい") {
    result["present negative adj"] = "よくないです";
  } else if (plain_form.slice(-1) == "い") {
    result["present negative adj"] = plain_form.slice(0, -1) + "くないです";
  } else if (plain_form.slice(-1) == "な") {
    result["present negative adj"] = plain_form.slice(0, -1) + "じゃないです";
  }
}

var verb_relative_form = {

  "plain" : {

    "negative": "affirmative",
    "past": "present",
    "polite": "plain",
//    "te-form": "plain",
  },

  "negative": {

    "plain": "negative",
    "past negative": "present",
    "polite negative": "plain",
 //   "te-form": "negative",
  },

  "past" : {

    "plain": "past",
    "past negative" : "affirmative",
    "polite past": "plain",
//    "te-form": "past",
  },

  "past negative" : {

    "negative": "past",
    "past": "negative",
    "polite past negative": "plain",
//    "te-form": "past negative",
  },

  "polite": {

    "plain": "polite",
    "polite past": "present",
    "polite negative": "affirmative",
//    "te-form": "polite",
  },

  "polite past": {

    "past": "polite",
    "polite": "past",
    "polite past negative": "affirmative",
//    "te-form": "polite past",
  },

  "polite negative": {

    "negative": "polite",
    "polite": "negative",
    "polite past negative": "present",
 //   "te-form": "polite negative",
  },

  "polite past negative": {

    "past negative": "polite",
    "polite past": "negative",
    "polite negative": "past",
//    "te-form": "polite past negative",
  },
};

function wordWithFurigana(word) {

  var bits = word.split(/(.)\[([^\]]*)\]/);

  while (bits.length > 1) {
    bits[0] = bits[0] + "<span tooltip='" + bits[2] + "'>" + bits[1] + "</span>" + bits[3];
    bits.splice(1, 3);
  }

  return bits[0];
}

function processAnswerKey() {

  var el = $('#answer');

  var pos = el.getCursorPosition();
  var val = el.val();

  var last1 = val.slice(pos - 1, pos);
  var last2 = val.slice(pos - 2, pos);
  var last3 = val.slice(pos - 3, pos);

  var replace1 = {
    "a" : "あ", "i" : "い", "u" : "う", "e" : "え", "o" : "お"
  };

  var replace2 = {

    "ka" : "か", "ki" : "き", "ku" : "く", "ke" : "け", "ko" : "こ",
    "sa" : "さ", "si" : "し", "su" : "す", "se" : "せ", "so" : "そ",
    "ta" : "た", "ti" : "ち", "tu" : "つ", "te" : "て", "to" : "と",
    "na" : "な", "ni" : "に", "nu" : "ぬ", "ne" : "ね", "no" : "の",
    "ha" : "は", "hi" : "ひ", "hu" : "ふ", "he" : "へ", "ho" : "ほ",
    "ma" : "ま", "mi" : "み", "mu" : "む", "me" : "め", "mo" : "も",
    "ra" : "ら", "ri" : "り", "ru" : "る", "re" : "れ", "ro" : "ろ",
    "ga" : "が", "gi" : "ぎ", "gu" : "ぐ", "ge" : "げ", "go" : "ご",
    "za" : "ざ", "zi" : "じ", "zu" : "ず", "ze" : "ぜ", "zo" : "ぞ",
    "da" : "だ", "di" : "ぢ", "du" : "づ", "de" : "で", "do" : "ど",
    "ba" : "ば", "bi" : "び", "bu" : "ぶ", "be" : "べ", "bo" : "ぼ",
    "pa" : "ぱ", "pi" : "ぴ", "pu" : "ぷ", "pe" : "ぺ", "po" : "ぽ",

    "qa" : "くぁ", "qi" : "くぃ", "qu" : "く", "qe" : "くぇ", "qo" : "くぉ",
    "wa" : "わ", "wi" : "うぃ", "wu" : "う", "we" : "うぇ", "wo" : "を",
    "ya" : "や", "yi" : "い", "yu" : "ゆ", "ye" : "いぇ", "yo" : "よ",
    "fa" : "ふぁ", "fi" : "ふぃ", "fu" : "ふ", "fe" : "ふぇ", "fo" : "ふぉ",
    "ja" : "じゃ", "ji" : "じ", "ju" : "じゅ", "je" : "じぇ", "jo" : "じょ",
    "la" : "ぁ", "li" : "ぃ", "lu" : "ぅ", "le" : "ぇ", "lo" : "ぉ",
    "za" : "ざ", "zi" : "じ", "zu" : "ず", "ze" : "ぜ", "zo" : "ぞ",
    "xa" : "ぁ", "xi" : "ぃ", "xu" : "ぅ", "xe" : "ぇ", "xo" : "ぉ",
    "ca" : "か", "ci" : "し", "cu" : "く", "ce" : "せ", "co" : "こ",
    "va" : "ヴぁ", "vi" : "ヴぃ", "vu" : "ヴ", "ve" : "ヴぇ", "vo" : "ヴぉ",

    "lu" : "っ",

    "nn" : "ん",

    "nb" : "んb",
    "nc" : "んc",
    "nd" : "んd",
    "nf" : "んf",
    "ng" : "んg",
    "nh" : "んh",
    "nj" : "んj",
    "nk" : "んk",
    "nl" : "んl",
    "nm" : "んm",
    "np" : "んp",
    "nq" : "んq",
    "nr" : "んr",
    "ns" : "んs",
    "nt" : "んt",
    "nv" : "んv",
    "nw" : "んw",
    "nx" : "んx",
    "nz" : "んz",

    "aa" : "っa",
    "bb" : "っb",
    "cc" : "っc",
    "dd" : "っd",
    "ee" : "っe",
    "ff" : "っf",
    "gg" : "っg",
    "hh" : "っh",
    "ii" : "っi",
    "jj" : "っj",
    "kk" : "っk",
    "ll" : "っl",
    "mm" : "っm",
    "oo" : "っo",
    "pp" : "っp",
    "qq" : "っq",
    "rr" : "っr",
    "ss" : "っs",
    "tt" : "っt",
    "uu" : "っu",
    "vv" : "っv",
    "ww" : "っw",
    "xx" : "っx",
    "yy" : "っy",
    "zz" : "っz",
  };

  var replace3 = {

    "kya" : "きゃ", "kyi" : "きぃ", "kyu" : "きゅ", "kye" : "きぇ", "kyo" : "きょ",
    "sya" : "しゃ", "syi" : "しぃ", "syu" : "しゅ", "sye" : "しぇ", "syo" : "しょ",
    "tya" : "ちゃ", "tyi" : "ちぃ", "tyu" : "ちゅ", "tye" : "ちぇ", "tyo" : "ちょ",
    "nya" : "にゃ", "nyi" : "にぃ", "nyu" : "にゅ", "nye" : "にぇ", "nyo" : "にょ",
    "hya" : "ひゃ", "hyi" : "ひぃ", "hyu" : "ひゅ", "hye" : "ひぇ", "hyo" : "ひょ",
    "mya" : "みゃ", "myi" : "みぃ", "myu" : "みゅ", "mye" : "みぇ", "myo" : "みょ",
    "rya" : "りゃ", "ryi" : "りぃ", "ryu" : "りゅ", "rye" : "りぇ", "ryo" : "りょ",
    "gya" : "ぎゃ", "gyi" : "ぎぃ", "gyu" : "ぎゅ", "gye" : "ぎぇ", "gyo" : "ぎょ",
    "zya" : "じゃ", "zyi" : "じぃ", "zyu" : "じゅ", "zye" : "じぇ", "zyo" : "じょ",
    "dya" : "ぢゃ", "dyi" : "ぢぃ", "dyu" : "ぢゅ", "dye" : "ぢぇ", "dyo" : "ぢょ",
    "bya" : "びゃ", "byi" : "びぃ", "byu" : "びゅ", "bye" : "びぇ", "byo" : "びょ",
    "pya" : "ぴゃ", "pyi" : "ぴぃ", "pyu" : "ぴゅ", "pye" : "ぴぇ", "pyo" : "ぴょ",

    "shi" : "し",
    "tsu" : "つ",
  };

  if (replace3[last3]) {
    val = val.slice(0, pos - 3) + replace3[last3] + val.slice(pos, -1);
    el.val(val);
    el.setCursorPosition(pos - 3 + replace3[last3].length);
  } else if (replace2[last2]) {
    val = val.slice(0, pos - 2) + replace2[last2] + val.slice(pos, -1);
    el.val(val);
    el.setCursorPosition(pos - 2 + replace2[last2].length);
  } else if (replace1[last1]) {
    val = val.slice(0, pos - 1) + replace1[last1] + val.slice(pos, -1);
    el.val(val);
    el.setCursorPosition(pos - 1 + replace1[last1].length);
  }
}

function generateVerbQuestion() {
  
  var entry = Object.keys(conjugations).randomElement();

  var forms = getVerbForms(entry);

  var word = forms["word"];
  var kanjiForms = forms["kanji"];
  var kanaForms = forms["hiragana"];
  var furiganaForms = forms["furigana"];

  var to_form = Object.keys(verb_relative_form).randomElement();
  var from_form = Object.keys(verb_relative_form[to_form]).randomElement();

  var question = "What is the " + verb_relative_form[to_form][from_form] + " form of " + wordWithFurigana(furiganaForms[from_form]) + "?";
  var answer = kanjiForms[to_form];
  var answer2 = kanaForms[to_form];

  $('#question').html(question);

  window.question = question;
  window.word = word;
  window.answer = kanjiForms[to_form];
  window.answerWithFurigana = wordWithFurigana(furiganaForms[to_form]);
  window.answer2 = answer2;

  $('#next').prop('disabled', true);
  $('#response').html("");
  $('#message').html("");

  $('#proceed').hide();
  $('#input').show();
  $('#answer').focus();

  $('#answer').on('input', processAnswerKey);

  if (log.start == undefined) {
    log.start = Date.now();
  }
}

function processAnswer() {

  var response = $('#answer').val().trim();

  if (response == "")
    return;

  var correct = ((response == window.answer) || (response == window.answer2));
  var klass = correct ? "correct" : "incorrect";

  log.history.push({
    "question" : window.question,
    "response" : response,
    "answer"   : window.answerWithFurigana,
    "kana"     : window.answer2,
    "correct"  : correct
  });

  $('#answer').val("");
  $('#response').prop('class', klass).text(response);
  $('#next').prop('disabled', false);
  
  if ((response == window.answer) || (response == window.answer2)) {
    $('#message').html("");
  } else {
    $('#message').html("<div>The correct answer is " + window.answerWithFurigana + "</div>");
  }

  $('#input').hide();
  $('#proceed').show();
  $('#proceed button').focus();

  if (log.end == undefined) {
    log.end = Date.now();
  }

  updateHistoryView(log);
}

function updateHistoryView(log) {

  var review = $('<table>');

  var total = 0;
  var correct = 0;

  var header_tr = $('<tr>');

  header_tr.append($('<th>Question</th>')); 
  header_tr.append($('<th>Answer</th>')); 
  header_tr.append($('<th>Response</th>')); 

  review.append(header_tr);

  log.history.forEach(function (entry) {

    total++;

    if (entry.correct) {
      correct++;
    }

    var tr = $('<tr>');

    var td1 = $('<td>'); 
    var td2 = $('<td>'); 
    var td3 = $('<td>'); 

    td1.html(entry.question);
    td2.html(entry.answer);
    td3.text(entry.response);

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);

    if (entry.correct) {
      td3.append("<span class='answer-correct'> ○</span>");
    } else {
      td3.append("<span class='answer-wrong'> ×</span>");
    }
    review.append(tr);
  });

  $('#history').empty().append(review);

  $('#history').append("<p>" + correct + " of " + total + " correct.</p>");
  $('#history').append("<p>" + ((log.end - log.start) / 1000.0) + " seconds.</p>");
}

function proceed() {
  if (log.history.length == $('#numQuestions').val()) {
    endQuiz();
  } else {
    generateVerbQuestion();
  }
}

function showSplash() {
  $('#splash').show();
  $('#quizSection').hide();
  $('#scoreSection').hide();

  $('#go').focus();
}

function startQuiz() {
  $('#splash').hide();
  $('#quizSection').show();
  $('#scoreSection').hide();

  resetLog();
  generateVerbQuestion();
}

function endQuiz() {
  $('#splash').hide();
  $('#quizSection').hide();
  $('#scoreSection').show();

  $('#backToStart').focus();
}

$('window').ready(function() {

  $('#go').click(startQuiz);
  $('#backToStart').click(showSplash);

  showSplash();
});
