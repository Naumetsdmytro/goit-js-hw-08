function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var r,o,u,a,f,c,l=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(i);function j(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function T(e){return l=e,f=setTimeout(w,t),s?j(e):a}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function w(){var e=g();if(h(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-c);return d?m(n,u-(e-l)):n}(e))}function O(e){return f=void 0,p&&r?j(e):(r=o=void 0,a)}function S(){var e=g(),n=h(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return T(c);if(d)return f=setTimeout(w,t),j(c)}return void 0===f&&(f=setTimeout(w,t)),a}return t=b(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(b(n.maxWait)||0,t):u,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},S.flush=function(){return void 0===f?a:O(g())},S}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=u.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const j=document.querySelector(".feedback-form"),T="feedback-form-state";j.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(T)})),j.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem(T,JSON.stringify(h))}),500)),function(){const e=localStorage.getItem(T),t=JSON.parse(e);t&&(j.elements.email.value=t.email,j.elements.message.value=t.message)}();const h={};
//# sourceMappingURL=03-feedback.ac9b7b0f.js.map
