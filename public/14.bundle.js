webpackJsonp([14],{914:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,u,d=(r(35),r(36)),s=o(d),c=(r(38),r(39)),f=o(c),p=(r(23),r(24)),b=o(p),m=(r(27),r(30)),g=o(m),y=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),h=r(0),w=o(h),L=(r(22),r(12)),E=o(L),v=r(17),k=r(2),R=o(k),x=g.default.Item,C=x.Brief,P=new RegExp("\\biPhone\\b|\\biPod\\b","i").test(window.navigator.userAgent),S=void 0;P&&(S={onTouchStart:function(e){return e.preventDefault()}});var B=(i=(0,v.inject)("store"))(u=(0,v.observer)(u=function(e){function t(e){a(this,t);var r=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.showActionSheet=function(){var e,t=r.props.property,o=t.getStatus(t.relatedFbid).get(),a=r.props.filter;e=(o.isShowPhone,["直接致電("+a.roleName+"):  "+o.contactPhone,"更新回覆內容","取消"]),b.default.showActionSheetWithOptions({options:e,cancelButtonIndex:e.length-1,destructiveButtonIndex:e.length-2,message:"singleSaleCaseView",maskClosable:!0,"data-seed":"logId",wrapProps:S},function(a){r.setState({clicked:e[a]}),0===a&&o.isShowPhone&&(window.location.href="tel://"+o.contactPhone),1===a&&(r.props.store.app.passByRef=t,r.props.store.router.goTo(E.default.buyAgentForm,{keyID:t.fbid,typeTo:t.typeTo,filterID:r.props.filterID}))})},r.state={disabled:!1,selectedSegmentIndex:0},r}return n(t,e),y(t,[{key:"componentWillMount",value:function(){this.props.property.setTimeStamp()}},{key:"render",value:function(){var e=this.props.property,t=e.getStatus(e.relatedFbid).get();return w.default.createElement("div",null,w.default.createElement(x,{extra:w.default.createElement(f.default,{text:t.status,style:{marginLeft:12,padding:"0 0.06rem",backgroundColor:t.color,borderRadius:2}}),arrow:"horizontal",onClick:this.showActionSheet,thumb:"http://hair.losstreatment.com/icons/rent-up.svg",multipleLine:!0},e.addressLocationLabel,"/",e.nameOfBuildingLabel,"/",e.contactNameLabel,w.default.createElement(C,null,e.partitionLabel,e.salePriceLabel,w.default.createElement("br",null),w.default.createElement(f.default,{text:e.isPetAllowedLabel,style:{marginLeft:12,padding:"0 0.06rem",backgroundColor:e.colorByFresh,borderRadius:2}}),w.default.createElement(f.default,{text:e.isViewAbleLabel,style:{marginLeft:6,padding:"0 0.06rem",backgroundColor:e.colorByFresh,borderRadius:5}}),w.default.createElement(f.default,{text:e.levelLabel,style:{marginLeft:6,padding:"0 0.06rem",backgroundColor:e.colorByRoleName,borderRadius:5}}),w.default.createElement(f.default,{text:e.roleName,style:{marginLeft:6,padding:"0 0.06rem",backgroundColor:e.colorByRoleName,borderRadius:5}}),w.default.createElement(f.default,{text:e.howFresh,style:{marginLeft:6,padding:"0 0.06rem",backgroundColor:e.colorByFresh,borderRadius:5}}),w.default.createElement("br",null),w.default.createElement(f.default,{text:e.netSizeLabel,style:{marginLeft:6,padding:"0 0.06rem",backgroundColor:e.colorByFresh,borderRadius:5}}),w.default.createElement(f.default,{text:e.isSaleWithLeaseLabel,style:{marginLeft:6,padding:"0 0.06rem",backgroundColor:e.colorByFresh,borderRadius:5}}),w.default.createElement("br",null),w.default.createElement(f.default,{text:e.dueDayLabel,style:{marginLeft:6,padding:"0 0.06rem",backgroundColor:e.colorByFresh,borderRadius:5}}),w.default.createElement(f.default,{text:e.earlyTimeToViewLabel,style:{marginLeft:6,padding:"0 0.06rem",backgroundColor:e.colorByFresh,borderRadius:5}})),"f:",e.fbid," ",w.default.createElement("br",null),"r:",e.relatedFbid),w.default.createElement(x,null,"Tel : ",t.contactPhone),w.default.createElement(s.default,{size:"sm"}))}}]),t}(w.default.Component))||u)||u;t.default=B,B.propTypes={property:R.default.object.isRequired,filterID:R.default.string.isRequired,filter:R.default.object.isRequired}}});
//# sourceMappingURL=14.bundle.js.map