!function(e){"use strict";var t=null,o=null,n=e.document?e.document.body:null;!n||n.matches?o="matches":(n.webkitMatchesSelector?o="webkit":n.mozMatchesSelector?o="moz":n.msMatchesSelector?o="ms":n.oMatchesSelector&&(o="o"),o+="MatchesSelector"),t=o?function(e,t){return e[o](t)}:function(t,o){for(var n=(t.parentNode||e.document).querySelectorAll(o)||[],c=n.length;c--;)if(n[c]==t)return!0;return!1},"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define(function(){return t}):e.matchesSelector=t}(this);