import{A as w,B as ke,C as z,D as Me,E as Pe,F as He,G as Te,H as Ne,I as Ie,J as k,K as We,L as J,M as ze,N as Oe,O as Ae,P as Be,Q as Fe,R as Ge,S as je,T as Ve,U as qe,V as Ue,W as Le,X as _e,Y as Ke,a as o,b as E,c as C,d as pe,e as ye,f as L,g as I,h as me,i as ve,j as be,k as Re,l as x,m as _,n as K,o as W,p as Y,q as $,r as Se,s as Ce,t as xe,u as Ee,v as D,w as we,x as De,y as Z,z as T}from"./chunk-BJRE2N5D.js";import{sa as ge,ta as ue,va as he}from"./chunk-QUVOBDIK.js";import"./chunk-MDPLQYRL.js";import{Cb as le,Eb as oe,Pb as P,Qb as H,Rb as de,hb as N,ic as q,jc as U,na as ae,qc as ce,zc as fe}from"./chunk-TKW633EF.js";var Q=class extends w{constructor(){super(...arguments),this.headerElRef=E()}renderSimpleLayout(e,t){let{props:n,context:s}=this,r=[],a=J(s.options);return e&&r.push({type:"header",key:"header",isSticky:a,chunk:{elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}}),r.push({type:"body",key:"body",liquid:!0,chunk:{content:t}}),o($,{elClasses:["fc-daygrid"],viewSpec:s.viewSpec},o(Oe,{liquid:!n.isHeightAuto&&!n.forPrint,collapsibleWidth:n.forPrint,cols:[],sections:r}))}renderHScrollLayout(e,t,n,s){let r=this.context.pluginHooks.scrollGridImpl;if(!r)throw new Error("No ScrollGrid implementation");let{props:a,context:l}=this,h=!a.forPrint&&J(l.options),u=!a.forPrint&&ze(l.options),c=[];return e&&c.push({type:"header",key:"header",isSticky:h,chunks:[{key:"main",elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}]}),c.push({type:"body",key:"body",liquid:!0,chunks:[{key:"main",content:t}]}),u&&c.push({type:"footer",key:"footer",isSticky:!0,chunks:[{key:"main",content:We}]}),o($,{elClasses:["fc-daygrid"],viewSpec:l.viewSpec},o(r,{liquid:!a.isHeightAuto&&!a.forPrint,forPrint:a.forPrint,collapsibleWidth:a.forPrint,colGroups:[{cols:[{span:n,minWidth:s}]}],sections:c}))}};function O(i,e){let t=[];for(let n=0;n<e;n+=1)t[n]=[];for(let n of i)t[n.row].push(n);return t}function A(i,e){let t=[];for(let n=0;n<e;n+=1)t[n]=[];for(let n of i)t[n.firstCol].push(n);return t}function Ye(i,e){let t=[];if(i){for(let n=0;n<e;n+=1)t[n]={affectedInstances:i.affectedInstances,isEvent:i.isEvent,segs:[]};for(let n of i.segs)t[n.row].segs.push(n)}else for(let n=0;n<e;n+=1)t[n]=null;return t}var $e=_({hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"});function Ze(i){let{display:e}=i.eventRange.ui;return e==="list-item"||e==="auto"&&!i.eventRange.def.allDay&&i.firstCol===i.lastCol&&i.isStart&&i.isEnd}var B=class extends W{render(){let{props:e}=this;return o(Be,Object.assign({},e,{elClasses:["fc-daygrid-event","fc-daygrid-block-event","fc-h-event"],defaultTimeFormat:$e,defaultDisplayEventEnd:e.defaultDisplayEventEnd,disableResizing:!e.seg.eventRange.def.allDay}))}},F=class extends W{render(){let{props:e,context:t}=this,{options:n}=t,{seg:s}=e,r=n.eventTimeFormat||$e,a=Ee(s,r,t,!0,e.defaultDisplayEventEnd);return o(Ae,Object.assign({},e,{elTag:"a",elClasses:["fc-daygrid-event","fc-daygrid-dot-event"],elAttrs:De(e.seg,t),defaultGenerator:tt,timeText:a,isResizing:!1,isDateSelecting:!1}))}};function tt(i){return o(C,null,o("div",{className:"fc-daygrid-event-dot",style:{borderColor:i.borderColor||i.backgroundColor}}),i.timeText&&o("div",{className:"fc-event-time"},i.timeText),o("div",{className:"fc-event-title"},i.event.title||o(C,null,"\xA0")))}var X=class extends W{constructor(){super(...arguments),this.compileSegs=x(nt)}render(){let{props:e}=this,{allSegs:t,invisibleSegs:n}=this.compileSegs(e.singlePlacements);return o(Ue,{elClasses:["fc-daygrid-more-link"],dateProfile:e.dateProfile,todayRange:e.todayRange,allDayDate:e.allDayDate,moreCnt:e.moreCnt,allSegs:t,hiddenSegs:n,alignmentElRef:e.alignmentElRef,alignGridTop:e.alignGridTop,extraDateSpan:e.extraDateSpan,popoverContent:()=>{let s=(e.eventDrag?e.eventDrag.affectedInstances:null)||(e.eventResize?e.eventResize.affectedInstances:null)||{};return o(C,null,t.map(r=>{let a=r.eventRange.instance.instanceId;return o("div",{className:"fc-daygrid-event-harness",key:a,style:{visibility:s[a]?"hidden":""}},Ze(r)?o(F,Object.assign({seg:r,isDragging:!1,isSelected:a===e.eventSelection,defaultDisplayEventEnd:!1},D(r,e.todayRange))):o(B,Object.assign({seg:r,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:a===e.eventSelection,defaultDisplayEventEnd:!1},D(r,e.todayRange))))}))}})}};function nt(i){let e=[],t=[];for(let n of i)e.push(n.seg),n.isVisible||t.push(n.seg);return{allSegs:e,invisibleSegs:t}}var it=_({week:"narrow"}),ee=class extends w{constructor(){super(...arguments),this.rootElRef=E(),this.state={dayNumberId:ye()},this.handleRootEl=e=>{Y(this.rootElRef,e),Y(this.props.elRef,e)}}render(){let{context:e,props:t,state:n,rootElRef:s}=this,{options:r,dateEnv:a}=e,{date:l,dateProfile:h}=t,u=t.showDayNumber&&st(l,h.currentRange,a);return o(Fe,{elTag:"td",elRef:this.handleRootEl,elClasses:["fc-daygrid-day",...t.extraClassNames||[]],elAttrs:Object.assign(Object.assign(Object.assign({},t.extraDataAttrs),t.showDayNumber?{"aria-labelledby":n.dayNumberId}:{}),{role:"gridcell"}),defaultGenerator:rt,date:l,dateProfile:h,todayRange:t.todayRange,showDayNumber:t.showDayNumber,isMonthStart:u,extraRenderProps:t.extraRenderProps},(c,v)=>o("div",{ref:t.innerElRef,className:"fc-daygrid-day-frame fc-scrollgrid-sync-inner",style:{minHeight:t.minHeight}},t.showWeekNumber&&o(qe,{elTag:"a",elClasses:["fc-daygrid-week-number"],elAttrs:Z(e,l,"week"),date:l,defaultFormat:it}),!v.isDisabled&&(t.showDayNumber||Ge(r)||t.forceDayTop)?o("div",{className:"fc-daygrid-day-top"},o(c,{elTag:"a",elClasses:["fc-daygrid-day-number",u&&"fc-daygrid-month-start"],elAttrs:Object.assign(Object.assign({},Z(e,l)),{id:n.dayNumberId})})):t.showDayNumber?o("div",{className:"fc-daygrid-day-top",style:{visibility:"hidden"}},o("a",{className:"fc-daygrid-day-number"},"\xA0")):void 0,o("div",{className:"fc-daygrid-day-events",ref:t.fgContentElRef},t.fgContent,o("div",{className:"fc-daygrid-day-bottom",style:{marginTop:t.moreMarginTop}},o(X,{allDayDate:l,singlePlacements:t.singlePlacements,moreCnt:t.moreCnt,alignmentElRef:s,alignGridTop:!t.showDayNumber,extraDateSpan:t.extraDateSpan,dateProfile:t.dateProfile,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,todayRange:t.todayRange}))),o("div",{className:"fc-daygrid-day-bg"},t.bgContent)))}};function rt(i){return i.dayNumberText||o(C,null,"\xA0")}function st(i,e,t){let{start:n,end:s}=e,r=me(s,-1),a=t.getYear(n),l=t.getMonth(n),h=t.getYear(r),u=t.getMonth(r);return!(a===h&&l===u)&&(i.valueOf()===n.valueOf()||t.getDay(i)===1&&i.valueOf()<s.valueOf())}function Je(i){return i.eventRange.instance.instanceId+":"+i.firstCol}function Qe(i){return Je(i)+":"+i.lastCol}function at(i,e,t,n,s,r,a){let l=new te(g=>{let m=i[g.index].eventRange.instance.instanceId+":"+g.span.start+":"+(g.span.end-1);return s[m]||1});l.allowReslicing=!0,l.strictOrder=n,e===!0||t===!0?(l.maxCoord=r,l.hiddenConsumes=!0):typeof e=="number"?l.maxStackCnt=e:typeof t=="number"&&(l.maxStackCnt=t,l.hiddenConsumes=!0);let h=[],u=[];for(let g=0;g<i.length;g+=1){let m=i[g],R=Qe(m);s[R]!=null?h.push({index:g,span:{start:m.firstCol,end:m.lastCol+1}}):u.push(m)}let c=l.addSegs(h),v=l.toRects(),{singleColPlacements:b,multiColPlacements:d,leftoverMargins:p}=lt(v,i,a),f=[],y=[];for(let g of u){d[g.firstCol].push({seg:g,isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(let m=g.firstCol;m<=g.lastCol;m+=1)b[m].push({seg:M(g,m,m+1,a),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(let g=0;g<a.length;g+=1)f.push(0);for(let g of c){let m=i[g.index],R=g.span;d[R.start].push({seg:M(m,R.start,R.end,a),isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(let S=R.start;S<R.end;S+=1)f[S]+=1,b[S].push({seg:M(m,S,S+1,a),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(let g=0;g<a.length;g+=1)y.push(p[g]);return{singleColPlacements:b,multiColPlacements:d,moreCnts:f,moreMarginTops:y}}function lt(i,e,t){let n=ot(i,t.length),s=[],r=[],a=[];for(let l=0;l<t.length;l+=1){let h=n[l],u=[],c=0,v=0;for(let d of h){let p=e[d.index];u.push({seg:M(p,l,l+1,t),isVisible:!0,isAbsolute:!1,absoluteTop:d.levelCoord,marginTop:d.levelCoord-c}),c=d.levelCoord+d.thickness}let b=[];c=0,v=0;for(let d of h){let p=e[d.index],f=d.span.end-d.span.start>1,y=d.span.start===l;v+=d.levelCoord-c,c=d.levelCoord+d.thickness,f?(v+=d.thickness,y&&b.push({seg:M(p,d.span.start,d.span.end,t),isVisible:!0,isAbsolute:!0,absoluteTop:d.levelCoord,marginTop:0})):y&&(b.push({seg:M(p,d.span.start,d.span.end,t),isVisible:!0,isAbsolute:!1,absoluteTop:d.levelCoord,marginTop:v}),v=0)}s.push(u),r.push(b),a.push(v)}return{singleColPlacements:s,multiColPlacements:r,leftoverMargins:a}}function ot(i,e){let t=[];for(let n=0;n<e;n+=1)t.push([]);for(let n of i)for(let s=n.span.start;s<n.span.end;s+=1)t[s].push(n);return t}function M(i,e,t,n){if(i.firstCol===e&&i.lastCol===t-1)return i;let s=i.eventRange,r=s.range,a=Se(r,{start:n[e].date,end:I(n[t-1].date,1)});return Object.assign(Object.assign({},i),{firstCol:e,lastCol:t-1,eventRange:{def:s.def,ui:Object.assign(Object.assign({},s.ui),{durationEditable:!1}),instance:s.instance,range:a},isStart:i.isStart&&a.start.valueOf()===r.start.valueOf(),isEnd:i.isEnd&&a.end.valueOf()===r.end.valueOf()})}var te=class extends ke{constructor(){super(...arguments),this.hiddenConsumes=!1,this.forceHidden={}}addSegs(e){let t=super.addSegs(e),{entriesByLevel:n}=this,s=r=>!this.forceHidden[z(r)];for(let r=0;r<n.length;r+=1)n[r]=n[r].filter(s);return t}handleInvalidInsertion(e,t,n){let{entriesByLevel:s,forceHidden:r}=this,{touchingEntry:a,touchingLevel:l,touchingLateral:h}=e;if(this.hiddenConsumes&&a){let u=z(a);if(!r[u])if(this.allowReslicing){let c=Object.assign(Object.assign({},a),{span:Me(a.span,t.span)}),v=z(c);r[v]=!0,s[l][h]=c,n.push(c),this.splitEntry(a,t,n)}else r[u]=!0,n.push(a)}super.handleInvalidInsertion(e,t,n)}},G=class extends w{constructor(){super(...arguments),this.cellElRefs=new k,this.frameElRefs=new k,this.fgElRefs=new k,this.segHarnessRefs=new k,this.rootElRef=E(),this.state={framePositions:null,maxContentHeight:null,segHeights:{}},this.handleResize=e=>{e&&this.updateSizing(!0)}}render(){let{props:e,state:t,context:n}=this,{options:s}=n,r=e.cells.length,a=A(e.businessHourSegs,r),l=A(e.bgEventSegs,r),h=A(this.getHighlightSegs(),r),u=A(this.getMirrorSegs(),r),{singleColPlacements:c,multiColPlacements:v,moreCnts:b,moreMarginTops:d}=at(xe(e.fgEventSegs,s.eventOrder),e.dayMaxEvents,e.dayMaxEventRows,s.eventOrderStrict,t.segHeights,t.maxContentHeight,e.cells),p=e.eventDrag&&e.eventDrag.affectedInstances||e.eventResize&&e.eventResize.affectedInstances||{};return o("tr",{ref:this.rootElRef,role:"row"},e.renderIntro&&e.renderIntro(),e.cells.map((f,y)=>{let g=this.renderFgSegs(y,e.forPrint?c[y]:v[y],e.todayRange,p),m=this.renderFgSegs(y,dt(u[y],v),e.todayRange,{},!!e.eventDrag,!!e.eventResize,!1);return o(ee,{key:f.key,elRef:this.cellElRefs.createRef(f.key),innerElRef:this.frameElRefs.createRef(f.key),dateProfile:e.dateProfile,date:f.date,showDayNumber:e.showDayNumbers,showWeekNumber:e.showWeekNumbers&&y===0,forceDayTop:e.showWeekNumbers,todayRange:e.todayRange,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,extraRenderProps:f.extraRenderProps,extraDataAttrs:f.extraDataAttrs,extraClassNames:f.extraClassNames,extraDateSpan:f.extraDateSpan,moreCnt:b[y],moreMarginTop:d[y],singlePlacements:c[y],fgContentElRef:this.fgElRefs.createRef(f.key),fgContent:o(C,null,o(C,null,g),o(C,null,m)),bgContent:o(C,null,this.renderFillSegs(h[y],"highlight"),this.renderFillSegs(a[y],"non-business"),this.renderFillSegs(l[y],"bg-event")),minHeight:e.cellMinHeight})}))}componentDidMount(){this.updateSizing(!0),this.context.addResizeHandler(this.handleResize)}componentDidUpdate(e,t){let n=this.props;this.updateSizing(!K(e,n))}componentWillUnmount(){this.context.removeResizeHandler(this.handleResize)}getHighlightSegs(){let{props:e}=this;return e.eventDrag&&e.eventDrag.segs.length?e.eventDrag.segs:e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:e.dateSelectionSegs}getMirrorSegs(){let{props:e}=this;return e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:[]}renderFgSegs(e,t,n,s,r,a,l){let{context:h}=this,{eventSelection:u}=this.props,{framePositions:c}=this.state,v=this.props.cells.length===1,b=r||a||l,d=[];if(c)for(let p of t){let{seg:f}=p,{instanceId:y}=f.eventRange.instance,g=p.isVisible&&!s[y],m=p.isAbsolute,R="",S="";m&&(h.isRtl?(S=0,R=c.lefts[f.lastCol]-c.lefts[f.firstCol]):(R=0,S=c.rights[f.firstCol]-c.rights[f.lastCol])),d.push(o("div",{className:"fc-daygrid-event-harness"+(m?" fc-daygrid-event-harness-abs":""),key:Je(f),ref:b?null:this.segHarnessRefs.createRef(Qe(f)),style:{visibility:g?"":"hidden",marginTop:m?"":p.marginTop,top:m?p.absoluteTop:"",left:R,right:S}},Ze(f)?o(F,Object.assign({seg:f,isDragging:r,isSelected:y===u,defaultDisplayEventEnd:v},D(f,n))):o(B,Object.assign({seg:f,isDragging:r,isResizing:a,isDateSelecting:l,isSelected:y===u,defaultDisplayEventEnd:v},D(f,n)))))}return d}renderFillSegs(e,t){let{isRtl:n}=this.context,{todayRange:s}=this.props,{framePositions:r}=this.state,a=[];if(r)for(let l of e){let h=n?{right:0,left:r.lefts[l.lastCol]-r.lefts[l.firstCol]}:{left:0,right:r.rights[l.firstCol]-r.rights[l.lastCol]};a.push(o("div",{key:we(l.eventRange),className:"fc-daygrid-bg-harness",style:h},t==="bg-event"?o(je,Object.assign({seg:l},D(l,s))):Ve(t)))}return o(C,{},...a)}updateSizing(e){let{props:t,state:n,frameElRefs:s}=this;if(!t.forPrint&&t.clientWidth!==null){if(e){let h=t.cells.map(u=>s.currentMap[u.key]);if(h.length){let u=this.rootElRef.current,c=new T(u,h,!0,!1);(!n.framePositions||!n.framePositions.similarTo(c))&&this.setState({framePositions:new T(u,h,!0,!1)})}}let r=this.state.segHeights,a=this.querySegHeights(),l=t.dayMaxEvents===!0||t.dayMaxEventRows===!0;this.safeSetState({segHeights:Object.assign(Object.assign({},r),a),maxContentHeight:l?this.computeMaxContentHeight():null})}}querySegHeights(){let e=this.segHarnessRefs.currentMap,t={};for(let n in e){let s=Math.round(e[n].getBoundingClientRect().height);t[n]=Math.max(t[n]||0,s)}return t}computeMaxContentHeight(){let e=this.props.cells[0].key,t=this.cellElRefs.currentMap[e],n=this.fgElRefs.currentMap[e];return t.getBoundingClientRect().bottom-n.getBoundingClientRect().top}getCellEls(){let e=this.cellElRefs.currentMap;return this.props.cells.map(t=>e[t.key])}};G.addStateEquality({segHeights:K});function dt(i,e){if(!i.length)return[];let t=ct(e);return i.map(n=>({seg:n,isVisible:!0,isAbsolute:!0,absoluteTop:t[n.eventRange.instance.instanceId],marginTop:0}))}function ct(i){let e={};for(let t of i)for(let n of t)e[n.seg.eventRange.instance.instanceId]=n.absoluteTop;return e}var ne=class extends w{constructor(){super(...arguments),this.splitBusinessHourSegs=x(O),this.splitBgEventSegs=x(O),this.splitFgEventSegs=x(O),this.splitDateSelectionSegs=x(O),this.splitEventDrag=x(Ye),this.splitEventResize=x(Ye),this.rowRefs=new k}render(){let{props:e,context:t}=this,n=e.cells.length,s=this.splitBusinessHourSegs(e.businessHourSegs,n),r=this.splitBgEventSegs(e.bgEventSegs,n),a=this.splitFgEventSegs(e.fgEventSegs,n),l=this.splitDateSelectionSegs(e.dateSelectionSegs,n),h=this.splitEventDrag(e.eventDrag,n),u=this.splitEventResize(e.eventResize,n),c=n>=7&&e.clientWidth?e.clientWidth/t.options.aspectRatio/6:null;return o(Pe,{unit:"day"},(v,b)=>o(C,null,e.cells.map((d,p)=>o(G,{ref:this.rowRefs.createRef(p),key:d.length?d[0].date.toISOString():p,showDayNumbers:n>1,showWeekNumbers:e.showWeekNumbers,todayRange:b,dateProfile:e.dateProfile,cells:d,renderIntro:e.renderRowIntro,businessHourSegs:s[p],eventSelection:e.eventSelection,bgEventSegs:r[p].filter(ft),fgEventSegs:a[p],dateSelectionSegs:l[p],eventDrag:h[p],eventResize:u[p],dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,clientWidth:e.clientWidth,clientHeight:e.clientHeight,cellMinHeight:c,forPrint:e.forPrint}))))}componentDidMount(){this.registerInteractiveComponent()}componentDidUpdate(){this.registerInteractiveComponent()}registerInteractiveComponent(){if(!this.rootEl){let e=this.rowRefs.currentMap[0].getCellEls()[0],t=e?e.closest(".fc-daygrid-body"):null;t&&(this.rootEl=t,this.context.registerInteractiveComponent(this,{el:t,isHitComboAllowed:this.props.isHitComboAllowed}))}}componentWillUnmount(){this.rootEl&&(this.context.unregisterInteractiveComponent(this),this.rootEl=null)}prepareHits(){this.rowPositions=new T(this.rootEl,this.rowRefs.collect().map(e=>e.getCellEls()[0]),!1,!0),this.colPositions=new T(this.rootEl,this.rowRefs.currentMap[0].getCellEls(),!0,!1)}queryHit(e,t){let{colPositions:n,rowPositions:s}=this,r=n.leftToIndex(e),a=s.topToIndex(t);if(a!=null&&r!=null){let l=this.props.cells[a][r];return{dateProfile:this.props.dateProfile,dateSpan:Object.assign({range:this.getCellRange(a,r),allDay:!0},l.extraDateSpan),dayEl:this.getCellEl(a,r),rect:{left:n.lefts[r],right:n.rights[r],top:s.tops[a],bottom:s.bottoms[a]},layer:0}}return null}getCellEl(e,t){return this.rowRefs.currentMap[e].getCellEls()[t]}getCellRange(e,t){let n=this.props.cells[e][t].date,s=I(n,1);return{start:n,end:s}}};function ft(i){return i.eventRange.def.allDay}var ie=class extends w{constructor(){super(...arguments),this.elRef=E(),this.needsScrollReset=!1}render(){let{props:e}=this,{dayMaxEventRows:t,dayMaxEvents:n,expandRows:s}=e,r=n===!0||t===!0;r&&!s&&(r=!1,t=null,n=null);let a=["fc-daygrid-body",r?"fc-daygrid-body-balanced":"fc-daygrid-body-unbalanced",s?"":"fc-daygrid-body-natural"];return o("div",{ref:this.elRef,className:a.join(" "),style:{width:e.clientWidth,minWidth:e.tableMinWidth}},o("table",{role:"presentation",className:"fc-scrollgrid-sync-table",style:{width:e.clientWidth,minWidth:e.tableMinWidth,height:s?e.clientHeight:""}},e.colGroupNode,o("tbody",{role:"presentation"},o(ne,{dateProfile:e.dateProfile,cells:e.cells,renderRowIntro:e.renderRowIntro,showWeekNumbers:e.showWeekNumbers,clientWidth:e.clientWidth,clientHeight:e.clientHeight,businessHourSegs:e.businessHourSegs,bgEventSegs:e.bgEventSegs,fgEventSegs:e.fgEventSegs,dateSelectionSegs:e.dateSelectionSegs,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,dayMaxEvents:n,dayMaxEventRows:t,forPrint:e.forPrint,isHitComboAllowed:e.isHitComboAllowed}))))}componentDidMount(){this.requestScrollReset()}componentDidUpdate(e){e.dateProfile!==this.props.dateProfile?this.requestScrollReset():this.flushScrollReset()}requestScrollReset(){this.needsScrollReset=!0,this.flushScrollReset()}flushScrollReset(){if(this.needsScrollReset&&this.props.clientWidth){let e=gt(this.elRef.current,this.props.dateProfile);if(e){let t=e.closest(".fc-daygrid-body"),n=t.closest(".fc-scroller"),s=e.getBoundingClientRect().top-t.getBoundingClientRect().top;n.scrollTop=s?s+1:0}this.needsScrollReset=!1}}};function gt(i,e){let t;return e.currentRangeUnit.match(/year|month/)&&(t=i.querySelector(`[data-date="${Re(e.currentDate)}-01"]`)),t||(t=i.querySelector(`[data-date="${be(e.currentDate)}"]`)),t}var re=class extends Ie{constructor(){super(...arguments),this.forceDayIfListItem=!0}sliceRange(e,t){return t.sliceRange(e)}},se=class extends w{constructor(){super(...arguments),this.slicer=new re,this.tableRef=E()}render(){let{props:e,context:t}=this;return o(ie,Object.assign({ref:this.tableRef},this.slicer.sliceProps(e,e.dateProfile,e.nextDayThreshold,t,e.dayTableModel),{dateProfile:e.dateProfile,cells:e.dayTableModel.cells,colGroupNode:e.colGroupNode,tableMinWidth:e.tableMinWidth,renderRowIntro:e.renderRowIntro,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.showWeekNumbers,expandRows:e.expandRows,headerAlignElRef:e.headerAlignElRef,clientWidth:e.clientWidth,clientHeight:e.clientHeight,forPrint:e.forPrint}))}},j=class extends Q{constructor(){super(...arguments),this.buildDayTableModel=x(ut),this.headerRef=E(),this.tableRef=E()}render(){let{options:e,dateProfileGenerator:t}=this.context,{props:n}=this,s=this.buildDayTableModel(n.dateProfile,t),r=e.dayHeaders&&o(He,{ref:this.headerRef,dateProfile:n.dateProfile,dates:s.headerDates,datesRepDistinctDays:s.rowCnt===1}),a=l=>o(se,{ref:this.tableRef,dateProfile:n.dateProfile,dayTableModel:s,businessHours:n.businessHours,dateSelection:n.dateSelection,eventStore:n.eventStore,eventUiBases:n.eventUiBases,eventSelection:n.eventSelection,eventDrag:n.eventDrag,eventResize:n.eventResize,nextDayThreshold:e.nextDayThreshold,colGroupNode:l.tableColGroupNode,tableMinWidth:l.tableMinWidth,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.weekNumbers,expandRows:!n.isHeightAuto,headerAlignElRef:this.headerElRef,clientWidth:l.clientWidth,clientHeight:l.clientHeight,forPrint:n.forPrint});return e.dayMinWidth?this.renderHScrollLayout(r,a,s.colCnt,e.dayMinWidth):this.renderSimpleLayout(r,a)}};function ut(i,e){let t=new Te(i.renderRange,e);return new Ne(t,/year|month|week/.test(i.currentRangeUnit))}var V=class extends Ce{buildRenderRange(e,t,n){let s=super.buildRenderRange(e,t,n),{props:r}=this;return ht({currentRange:s,snapToWeek:/^(year|month)$/.test(t),fixedWeekCount:r.fixedWeekCount,dateEnv:r.dateEnv})}};function ht(i){let{dateEnv:e,currentRange:t}=i,{start:n,end:s}=t,r;if(i.snapToWeek&&(n=e.startOfWeek(n),r=e.startOfWeek(s),r.valueOf()!==s.valueOf()&&(s=L(r,1))),i.fixedWeekCount){let a=e.startOfWeek(e.startOfMonth(I(t.end,-1))),l=Math.ceil(ve(a,s));s=L(s,6-l)}return{start:n,end:s}}var pt=':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';pe(pt);var Xe=Le({name:"@fullcalendar/daygrid",initialView:"dayGridMonth",views:{dayGrid:{component:j,dateProfileGeneratorClass:V},dayGridDay:{type:"dayGrid",duration:{days:1}},dayGridWeek:{type:"dayGrid",duration:{weeks:1}},dayGridMonth:{type:"dayGrid",duration:{months:1},fixedWeekCount:!0},dayGridYear:{type:"dayGrid",duration:{years:1}}}});function yt(i,e){if(i&1&&(P(0,"b"),q(1),H(),P(2,"i"),q(3),H()),i&2){let t=e.$implicit;N(),U(t.timeText),N(2),U(t.event.title)}}var et=class i{calendarOptions={plugins:[Xe],initialView:"dayGridMonth",weekends:!1,events:[{title:"event 1",date:"2024-09-09"},{title:"event 2",date:"2024-09-13"}]};handleDateClick(e){alert("date click! "+e.dateStr)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=ae({type:i,selectors:[["app-calendar"]],standalone:!0,features:[ce],decls:7,vars:1,consts:[["eventContent",""],[1,"row","g-4"],[1,"full-calendar","col-12","col-xxl-8"],["styleSection","",3,"options"],[1,"col-12","col-xxl-4"]],template:function(t,n){t&1&&(P(0,"section",1)(1,"div",2)(2,"full-calendar",3),le(3,yt,4,2,"ng-template",null,0,fe),H()(),P(5,"div",4),de(6,"working-schedule"),H()()),t&2&&(N(2),oe("options",n.calendarOptions))},dependencies:[ge,ue,Ke,_e,he],styles:[".full-calendar .fc-toolbar-title{font-size:20px}  .full-calendar a{color:var(--blackColor)!important}  .full-calendar .fc-col-header tr{background-color:#e7effd!important}  .full-calendar .fc-col-header tr th{border:none;padding-block:15px}  .full-calendar .fc-daygrid-body-unbalanced{width:100%!important}  .full-calendar .fc-daygrid-body-unbalanced table{width:100%!important}  .full-calendar .fc .fc-button-primary,   .full-calendar .fc .fc-button-primary:disabled{background-color:#fff!important;color:var(--bodyColor);border-color:#dae0ec;box-shadow:none!important;transition:all .3s linear;border-radius:2px!important}  .full-calendar .fc .fc-button-primary.fc-button-primary:not(:disabled):hover,   .full-calendar .fc .fc-button-primary:disabled.fc-button-primary:not(:disabled):hover{background-color:var(--daxaColor)!important;border-color:var(--daxaColor)!important}  .full-calendar .fc .fc-button-primary.fc-today-button,   .full-calendar .fc .fc-button-primary:disabled.fc-today-button{border-color:transparent}  .full-calendar .fc-button-group{gap:10px}"]})};export{et as CalendarComponent};