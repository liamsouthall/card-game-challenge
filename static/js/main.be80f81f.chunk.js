(this["webpackJsonpteaching-react"]=this["webpackJsonpteaching-react"]||[]).push([[0],[,function(e,a,t){e.exports=t.p+"static/media/bowser.69f44bd2.jpg"},function(e,a,t){e.exports=t.p+"static/media/babymario.2a72b74a.jpg"},function(e,a,t){e.exports=t.p+"static/media/marioBros.1eaaa11a.jpg"},function(e,a,t){e.exports=t.p+"static/media/waluigi.93b6971a.jpg"},function(e,a,t){e.exports=t.p+"static/media/wario.174f5b16.jpg"},function(e,a,t){e.exports=t.p+"static/media/yoshi.3ec7bdf1.jpg"},function(e,a,t){e.exports=t.p+"static/media/toad.c26b3986.jpg"},function(e,a,t){e.exports=t.p+"static/media/boo.c3a8ee93.jpg"},,,,,,,,,,function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),s=t(10),c=t.n(s),r=t(15),l=t(11),p=t(12),o=t(16),m=t(13),d=t(17),f=t(14),g=t.n(f),u=(t(23),function(e){return n.a.createElement(g.a,{isFlipped:e.flipped,flipDirection:"horizontal"},n.a.createElement("div",{className:"card-front",onClick:e.click},n.a.createElement("p",null,"click to turn")),n.a.createElement("div",{className:"card-back"},n.a.createElement("img",{className:"card-image",src:e.image})))}),h=(t(24),t(1)),v=t.n(h),b=t(2),E=t.n(b),w=t(3),j=t.n(w),k=t(4),F=t.n(k),y=t(5),x=t.n(y),C=t(6),N=t.n(C),S=t(7),O=t.n(S),T=t(8),B=t.n(T),G=function(e){function a(){var e,t;Object(l.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={message:"match the cards to win the game",messageChange:!0,cards:[{flipped:!1,image:v.a},{flipped:!1,image:E.a},{flipped:!1,image:v.a},{flipped:!1,image:E.a},{flipped:!1,image:j.a},{flipped:!1,image:F.a},{flipped:!1,image:j.a},{flipped:!1,image:F.a},{flipped:!1,image:x.a},{flipped:!1,image:N.a},{flipped:!1,image:x.a},{flipped:!1,image:N.a},{flipped:!1,image:O.a},{flipped:!1,image:B.a},{flipped:!1,image:O.a},{flipped:!1,image:B.a}],firstFlip:null,secondFlip:null,turns:40},t.flipHandler=function(e){if(null==t.state.firstFlip){var a=t.state.cards;a[e].flipped=!0,t.setState({cards:a,firstFlip:e})}else if(null==t.state.secondFlip){var i=t.state.cards,n=t.state.turns;n-=1,i[e].flipped=!0,t.setState({cards:i,secondFlip:e,turns:n})}},t.restartGame=function(){var e,a=Object(r.a)(t.state.cards);for(e=0;e<a.length;e++)a[e].flipped=!1;t.setState({cards:a,turns:40})},t.winningLogic=function(){},t}return Object(d.a)(a,e),Object(p.a)(a,[{key:"componentDidUpdate",value:function(){var e=this,a=this.state,t=a.firstFlip,i=a.secondFlip,n=a.cards,s=(a.message,a.messageChange);null!=t&&null!=i&&(n[t].image==n[i].image?(this.setState({firstFlip:null,secondFlip:null,message:"That's a Match"}),setTimeout((function(){e.setState({message:""})}),1e3)):n[t].image!=n[i].image&&0!=s&&(this.setState({message:"Thats not a match",messageChange:!1}),setTimeout((function(){var a=e.state.cards;a[t].flipped=!1,a[i].flipped=!1,e.setState({cards:a,firstFlip:null,secondFlip:null,message:"",messageChange:!0})}),1e3))),this.winningLogic()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("h1",{className:"title"},"Memory Game"),n.a.createElement("img",{src:"https://img.icons8.com/metro/26/000000/restart.png",onClick:this.restartGame}),n.a.createElement("div",{className:"board"},this.state.cards.map((function(a,t){return n.a.createElement(u,{key:t,image:a.image,flipped:a.flipped,click:function(){return e.flipHandler(t)}})}))),n.a.createElement("div",{className:"stats"},n.a.createElement("p",null,"Turns: ".concat(this.state.turns))),n.a.createElement("div",{className:"stats"},n.a.createElement("p",null,this.state.message)))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[18,1,2]]]);
//# sourceMappingURL=main.be80f81f.chunk.js.map