(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){e.exports=a(175)},174:function(e,t,a){},175:function(e,t,a){"use strict";a.r(t);a(133),a(158);var n=a(1),l=a.n(n),c=a(16),r=a.n(c),s=a(64),i=a.n(s),u=a(65),o=a(66),m=a(71),d=a(67),p=a(72),h=a(4),y=(a(173),a(24)),E=a.n(y),f=a(70),g=a.n(f),b=(a(174),[["\u0414\u043b\u0438\u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u044b"],["\u0412\u044b\u0441\u043e\u0442\u0430","\u0414\u043b\u0438\u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u044b"],["\u0420\u0430\u0434\u0438\u0443\u0441"],["\u0412\u044b\u0441\u043e\u0442\u0430","\u0420\u0430\u0434\u0438\u0443\u0441 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u044f"],["\u0414\u043b\u0438\u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u0410","\u0414\u043b\u0438\u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u044b B","\u0414\u043b\u0438\u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u044b C","\u0414\u043b\u0438\u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u044b D"],["\u0414\u043b\u0438\u043d\u0430","\u0428\u0438\u0440\u0438\u043d\u0430","\u0412\u044b\u0441\u043e\u0442\u0430"]]),v=function(e){var t=e.id,a=e.selectedFigure,n=e.lenA,c=e.lenB,r=e.lenC,s=e.lenD,i=(e.volume,e.cost),u=e.selectFigure,o=e.selectedPlastic,m=e.changeLen,d=e.changePlastic,p=e.plasticTypes;return l.a.createElement(h.e,{id:t},l.a.createElement(h.f,null,"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u0435\u0447\u0430\u0442\u0438"),l.a.createElement(h.c,null,l.a.createElement(h.b,null,l.a.createElement(h.d,{title:"\u0421\u0443\u043c\u043c\u0430",style:{textAlign:"center"}},i," \u0440\u0443\u0431."))),l.a.createElement(h.c,{title:"\u041f\u043b\u0430\u0441\u0442\u0438\u043a"},l.a.createElement(h.b,{id:"plastic"},l.a.createElement(h.g,{onChange:function(e){return d(e.target.value)},value:o},p.map(function(e,t){return l.a.createElement("option",{key:e.Name,value:t},e.Name," - ",e.Cost," \u20bd/\u0433")})))),l.a.createElement(h.c,{title:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0438\u0433\u0443\u0440\u0443"},l.a.createElement(h.b,{id:"figs"},l.a.createElement(h.a,{size:"l",stratched:"true",level:0===a?"secondary":"tertiary",onClick:function(){return u(0)}},l.a.createElement(h.b,{style:{display:"flex",flexDirection:"column"}},l.a.createElement("img",{src:E.a}),"\u041a\u0443\u0431")),l.a.createElement(h.a,{size:"l",stratched:"true",level:1===a?"secondary":"tertiary",onClick:function(){return u(1)}},l.a.createElement(h.b,{style:{display:"flex",flexDirection:"column"}},l.a.createElement("img",{src:E.a}),"\u041f\u0438\u0440\u0430\u043c\u0438\u0434\u0430")),l.a.createElement(h.a,{size:"l",stratched:"true",level:2===a?"secondary":"tertiary",onClick:function(){return u(2)}},l.a.createElement(h.b,{style:{display:"flex",flexDirection:"column"}},l.a.createElement("img",{src:E.a}),"\u0421\u0444\u0435\u0440\u0430")),l.a.createElement(h.a,{size:"l",stratched:"true",level:3===a?"secondary":"tertiary",onClick:function(){return u(3)}},l.a.createElement(h.b,{style:{display:"flex",flexDirection:"column"}},l.a.createElement("img",{src:E.a}),"\u041a\u043e\u043d\u0443\u0441")),l.a.createElement(h.a,{size:"l",stratched:"true",level:4===a?"secondary":"tertiary",onClick:function(){return u(4)}},l.a.createElement(h.b,{style:{display:"flex",flexDirection:"column"}},l.a.createElement("img",{src:E.a}),"\u0422\u0435\u0442\u0440\u0430\u044d\u0434\u0440")),l.a.createElement(h.a,{size:"l",stratched:"true",level:5===a?"secondary":"tertiary",onClick:function(){return u(5)}},l.a.createElement(h.b,{style:{display:"flex",flexDirection:"column"}},l.a.createElement("img",{src:g.a}),"\u041f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u0435\u043f\u043f\u0438\u043f\u0435\u0434")))),l.a.createElement(h.c,{title:"\u0420\u0430\u0437\u043c\u0435\u0440\u044b"},!!b[a][0]&&l.a.createElement(h.b,{style:{width:"100%",display:"inline-flex"}},l.a.createElement("label",{style:{maxWidth:"max-content"}},b[a][0],":"),l.a.createElement("input",{type:"number",value:n,onChange:function(e){return m(0,parseFloat(e.target.value.replace(",",".")))}})),!!b[a][1]&&l.a.createElement(h.b,{style:{width:"100%",display:"inline-flex"}},l.a.createElement("label",{style:{maxWidth:"max-content"}},b[a][1],":"),l.a.createElement("input",{type:"number",value:c,onChange:function(e){return m(1,parseFloat(e.target.value.replace(",",".")))}})),!!b[a][2]&&l.a.createElement(h.b,{style:{width:"100%",display:"inline-flex"}},l.a.createElement("label",{style:{maxWidth:"max-content"}},b[a][2],":"),l.a.createElement("input",{type:"number",value:r,onChange:function(e){return m(2,parseFloat(e.target.value.replace(",",".")))}})),!!b[a][3]&&l.a.createElement(h.b,{style:{width:"100%",display:"inline-flex"}},l.a.createElement("label",{style:{maxWidth:"max-content"}},b[a][3],":"),l.a.createElement("input",{type:"number",value:s,onChange:function(e){return m(3,parseFloat(e.target.value.replace(",",".")))}}))))},x=[{Name:"ABS",Cost:2},{Name:"PLA",Cost:3.4}],C=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).getVolume=function(){return 0===a.state.selectedFigure?Math.pow(a.state.lenA,3):1===a.state.selectedFigure?1/3*a.state.lenA*a.state.lenB*a.state.lenB:2===a.state.selectedFigure?4/3*Math.PI*Math.pow(a.state.lenA,3):3===a.state.selectedFigure?1/3*Math.PI*a.state.lenA*Math.pow(a.state.lenB,2):4===a.state.selectedFigure?1/3*a.state.lenA*a.state.lenB*a.state.lenC*Math.sqrt(a.state.lenD):5===a.state.selectedFigure?a.state.lenA*a.state.lenB*a.state.lenC:void 0},a.getCost=function(e,t){var a=Math.ceil(x[e].Cost*t);return 0===a?0:a+100},a.state={activePanel:"home",selectedPlasticType:1,selectedFigure:0,lenA:0,lenB:0,lenC:0,lenD:0},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.getVolume(),a=this.getCost(this.state.selectedPlasticType,t);return l.a.createElement(h.h,{activePanel:this.state.activePanel},l.a.createElement(v,{id:"home",changeLen:function(t,a){switch(t){case 0:e.setState({lenA:a});break;case 1:e.setState({lenB:a});break;case 2:e.setState({lenC:a});break;case 3:e.setState({lenD:a})}},cost:a,lenA:this.state.lenA,lenB:this.state.lenB,lenC:this.state.lenC,lenD:this.state.lenD,selectedFigure:this.state.selectedFigure,selectedPlastic:this.state.selectedPlasticType,plasticTypes:x,selectFigure:function(t){e.setState({selectedFigure:t})},volume:t,changePlastic:function(t){return e.setState({selectedPlasticType:t})}}))}}]),t}(l.a.Component);i.a.send("VKWebAppInit",{}),r.a.render(l.a.createElement(C,null),document.getElementById("root"))},24:function(e,t,a){e.exports=a.p+"static/media/Tetrahedron.2ae83c8d.svg"},70:function(e,t,a){e.exports=a.p+"static/media/Parallelepiped.5eee3027.svg"}},[[132,1,2]]]);
//# sourceMappingURL=main.1cae933f.chunk.js.map