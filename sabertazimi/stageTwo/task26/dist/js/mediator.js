var mediator=function(r,t,n){var e={},i=-1,o=function(r,t){var n;return e[r]||(e[r]=[]),n=(++i).toString(),e[r].push({context:this,orbit:r,token:n,callback:t}),n},a=function(r){var t,n;if(!e[r])return!1;t=Array.prototype.slice.call(arguments),n=e[r].length;for(var i=0;n>i;i++){var o=e[r][i];o.callback.apply(o.context,t)}return this},c=function(r){for(var t in e)if(e[t])for(var n=0,i=e[t].length;i>n;n++)if(e[t][n].token===r)return e[t].splice(n,1),r;return!1};return{subscribe:o,publish:a,unsubscribe:c}}(window,document);
//# sourceMappingURL=mediator.js.map
