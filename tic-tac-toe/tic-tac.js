window.onload=function(){function e(){var e;"w"===M[0].result?(M[0].score++,w.innerHTML="score : "+M[0].score,e="Player 1 won"):"w"===M[1].result?(M[1].score++,m.innerHTML="score : "+M[1].score,e="Player 2 won"):e="It's a draw",M[0].result="",M[1].result="",f.clearRect(0,0,s.width,s.height),f.font="40px Roboto",f.fillStyle="#fff";var t,r="",i=0;t=setInterval(function(){r+=e[i],i++,i<e.length||clearInterval(t),f.clearRect(0,0,s.width,s.height),f.fillText(r,(s.width-20*e.length)/2,(s.height-10)/2)},1e3/e.length),setTimeout(n,1800)}function t(){c=window.requestAnimationFrame(t),f.fillStyle="#000",f.fillRect(L,i,2,o),f.fillRect(2*L,i,2,o),f.fillRect(l,L,a,2),f.fillRect(l,2*L,a,2),l+=a-1,i+=o-1,a=o*=.96,l>s.width-15&&i>s.height-15&&window.cancelAnimationFrame(c),s.addEventListener("click",b.draw,!1),v.innerHTML="X's turn"}function r(e,t){var r,n;for(r=0;2>r;r++)for(e=0;3>e;e++)for(t=0;3>t;){if(y[e][t]!==p[r]){M[r].streak=0;break}if(t++,M[r].streak++,3===M[r].streak)return M[r].result="w",1}for(r=0;2>r;r++)for(t=0;3>t;t++)for(e=0;3>e;){if(y[e][t]!==p[r]){M[r].streak=0;break}if(e++,M[r].streak++,3===M[r].streak)return M[r].result="w",1}for(r=0;2>r;r++)if(y[1][1]===y[0][0]&&y[1][1]===y[2][2]){if(n=Array.prototype.indexOf.call(p,y[1][1]),-1!=n)return M[n].result="w",1}else if(y[1][1]===y[2][0]&&y[1][1]===y[0][2]){if(n=Array.prototype.indexOf.call(p,y[1][1]),-1!=n)return M[n].result="w",1}else if(R>=9)return M[0].result="d",M[1].result="d",1}function n(){f.clearRect(0,0,s.width,s.height);for(var e=0;3>e;e++){y[e]=[];for(var r=0;3>r;r++)y[e][r]=null}o=a=25,M[0].streak=0,M[1].streak=0,i=10,l=10,R=0,g=0,setTimeout(t,500)}var i,l,o,a,c,s=document.createElement("canvas"),f=s.getContext("2d"),d=window.innerWidth,h=window.innerHeight,u=document.getElementsByTagName("body")[0],w=document.getElementById("scoreP1"),m=document.getElementById("scoreP2"),v=document.getElementById("turn"),g=0,y=[],M=[],R=0,p=["cross","circle"],I=0,T=8,E=function(e,t){this.score=0,this.state="",this.streak=0,this.result="",this.name=e,this.color=t};M[0]=new E("cross","#000"),M[1]=new E("circle","#fff"),h>d&&500>d?(s.width=d-20,s.height=s.width,T=4):(s.width=500,s.height=500),s.style.background="#14BDAC",u.appendChild(s);var L=Math.floor(s.width/3),b={drawX:function(e,t){var r=L*e+L/2,n=L*t+L/2,i=0;k=Math.sqrt(Math.pow(L/4,2));var l=setInterval(function(){i++,f.fillStyle=M[0].color,f.fillRect(r+i,n+i,T,T),f.fillRect(r+i,n-i,T,T),f.fillRect(r-i,n+i,T,T),f.fillRect(r-i,n-i,T,T),k--,k>0||clearInterval(l)},200/k)},drawO:function(e,t){var r=L*e+L/2,n=L*t+L/2,i=(L-L/2)/2,l=0;increments=2/.07,f.lineWidth=T;var o=setInterval(function(){f.strokeStyle=M[1].color,f.beginPath(),f.arc(r,n,i,0,Math.PI*l,!1),f.stroke(),f.closePath(),l+=.07,l>2.1&&clearInterval(o)},200/increments)},draw:function(t){t=t||evt;var n,i,l=s.getBoundingClientRect(),o=t.clientX-l.left,a=t.clientY-l.top;n=Math.floor(o)<L?0:Math.floor(o)<2*L?1:2,i=Math.floor(a)<L?0:Math.floor(a)<2*L?1:2,null===y[n][i]&&(g%2===0?(b.drawX(n,i),y[n][i]="cross",M[0].state="even",g++,v.innerHTML="O's turn"):(b.drawO(n,i),y[n][i]="circle",M[1].state="odd",g++,v.innerHTML="X's turn"),R++),R>4&&(I=r(0,0)),I&&(I=0,s.removeEventListener("click",b.draw,!1),setTimeout(e,700))}},B=document.createElement("p");B.innerHTML="Let the game begin",u.appendChild(B),n(),document.getElementById("start").addEventListener("click",n,!1)};
