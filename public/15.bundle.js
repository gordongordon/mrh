webpackJsonp([15],{1240:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=r(44),u=o(d),i=r(48),f=o(i),s=r(29),c=o(s),p=r(39),b=o(p),m=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}();r(45),r(49),r(30),r(33);var y=r(0),g=o(y),h=(r(28),r(12)),L=o(h),w=r(14),E=o(w),v=b.default.Item,k=v.Brief,x=new RegExp("\\biPhone\\b|\\biPod\\b","i").test(window.navigator.userAgent),B=void 0;x&&(B={onTouchStart:function(e){return e.preventDefault()}});var C=function(e){function t(e){a(this,t);var r=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.showActionSheet=function(){var e=r.props.property,t=["容許對方打俾你","Call"+e.contactPhone,"Go saleAgentForm","取消"];c.default.showActionSheetWithOptions({options:t,cancelButtonIndex:t.length-1,destructiveButtonIndex:t.length-2,message:"請選擇其中一項",maskClosable:!0,"data-seed":"logId",wrapProps:B},function(o){r.setState({clicked:t[o]}),0===o&&e.setBuyInDirectCallForSaleAgent(e.fbid,e.relatedFbid),1===o&&(window.location.href="tel://66896696"),2===o&&(r.props.store.app.passByRef=e,r.props.store.router.goTo(E.default.buyAgentForm,{keyID:e.fbid,typeTo:e.typeTo,filterID:r.props.filterID}))})},r.state={disabled:!1,selectedSegmentIndex:0},r}return n(t,e),m(t,[{key:"componentWillMount",value:function(){this.props.property.setTimeStamp()}},{key:"render",value:function(){var e=this,t=this.props.property;return g.default.createElement("div",null,g.default.createElement(v,{extra:g.default.createElement(f.default,{text:t.typeByFollowUpLabel}),arrow:"horizontal",onClick:function(){L.default.app.passByRef=t,L.default.router.goTo(E.default.buyAgentForm,{keyID:t.fbid,typeTo:t.typeTo,filterID:e.props.filterID})},thumb:"http://hair.losstreatment.com/icons/rent-up.svg",multipleLine:!0},t.addressLocationLabel,"/",t.nameOfBuildingLabel,"/",t.contactNameLabel,g.default.createElement(k,null,t.partitionLabel,t.salePriceLabel,g.default.createElement("br",null),g.default.createElement(f.default,{text:t.isPetAllowedLabel,style:{marginLeft:12,padding:"0 0.06rem",backgroundColor:t.colorByFresh,borderRadius:2}}),g.default.createElement(f.default,{text:t.isViewAbleLabel,style:{marginLeft:6,padding:"0 0.06rem",backgroundColor:t.colorByFresh,borderRadius:5}}),g.default.createElement(f.default,{text:t.levelLabel,style:{marginLeft:6,padding:"0 0.06rem",backgroundColor:t.colorByRoleName,borderRadius:5}}),g.default.createElement(f.default,{text:t.roleName,style:{marginLeft:6,padding:"0 0.06rem",backgroundColor:t.colorByRoleName,borderRadius:5}}),g.default.createElement(f.default,{text:t.howFresh,style:{marginLeft:6,padding:"0 0.06rem",backgroundColor:t.colorByFresh,borderRadius:5}}),g.default.createElement("br",null),g.default.createElement(f.default,{text:t.netSizeLabel,style:{marginLeft:6,padding:"0 0.06rem",backgroundColor:t.colorByFresh,borderRadius:5}}),g.default.createElement(f.default,{text:t.dayListed,style:{marginLeft:12,padding:"0 0.06rem",backgroundColor:"#fff",borderRadius:2,color:"#f19736",border:"1px solid #f19736"}}),g.default.createElement(f.default,{text:t.isSaleWithLeaseLabel,style:{marginLeft:6,padding:"0 0.06rem",backgroundColor:t.colorByFresh,borderRadius:5}}),g.default.createElement("br",null),g.default.createElement(f.default,{text:t.dueDayLabel,style:{marginLeft:6,padding:"0 0.06rem",backgroundColor:t.colorByFresh,borderRadius:5}}),g.default.createElement(f.default,{text:t.earlyTimeToViewLabel,style:{marginLeft:6,padding:"0 0.06rem",backgroundColor:t.colorByFresh,borderRadius:5}})),"f:",t.fbid," ",g.default.createElement("br",null),"r:",t.relatedFbid),g.default.createElement(u.default,{size:"sm"}))}}]),t}(g.default.Component);t.default=C}});
//# sourceMappingURL=15.bundle.js.map