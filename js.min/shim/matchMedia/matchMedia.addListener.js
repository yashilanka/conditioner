window.addEventListener&&function(){if(!window.matchMedia("(min-width:0)").addListener){var e=window.matchMedia;window.matchMedia=function(t){var n,i=e(t),o=[],r=!1,s=function(){var n=e(t),s=n.matches&&!r,u=!n.matches&&r;if(s||u)for(var l=0,a=o.length;a>l;l++)o[l].call(i,n);r=n.matches};return i.addListener=function(e){o.push(e),n||(n=setInterval(s,1e3))},i.removeListener=function(e){for(var t=0,i=o.length;i>t;t++)o[t]===e&&o.splice(t,1);!o.length&&n&&clearInterval(n)},i}}}();