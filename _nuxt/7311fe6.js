(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{199:function(t,e,o){var content=o(201);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("1363db16",content,!0,{sourceMap:!1})},200:function(t,e,o){"use strict";o(199)},201:function(t,e,o){var r=o(20)(!1);r.push([t.i,".modal{z-index:5;width:100vw;height:100vh;position:fixed;top:0;left:0;background-color:rgba(0,0,0,.8);overflow:scroll}.modal img{width:100%;max-width:900px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}",""]),t.exports=r},202:function(t,e,o){"use strict";var r={data:function(){return{showModal:!1,modalSrc:""}},methods:{openModal:function(t){this.showModal=!0,this.modalSrc=t.target.src},closeModal:function(){this.showModal=!1,this.modalSrc=""}}},n=(o(200),o(8)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.showModal?o("div",{staticClass:"modal",on:{click:t.closeModal}},[o("img",{attrs:{src:t.modalSrc}})]):t._e()}),[],!1,null,null,null);e.a=component.exports},213:function(t,e,o){t.exports=o.p+"img/1.2afb23e.png"},214:function(t,e,o){var content=o(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("46ff0642",content,!0,{sourceMap:!1})},252:function(t,e,o){"use strict";o(214)},253:function(t,e,o){var r=o(20)(!1);r.push([t.i,"section[data-page=work] .work__title{margin-top:30px;margin-bottom:30px;padding:0 20px}section[data-page=work] h2{margin-bottom:15px;padding-bottom:5px;border-bottom:1px dotted #666}section[data-page=work] p{margin-bottom:1rem}section[data-page=work] .en{color:#666}section[data-page=work] h1 .en{display:block;font-size:1rem;margin-top:.2rem}section[data-page=work] p .en{display:block;font-size:.9rem;margin-top:.4rem;margin-bottom:1.5rem}section[data-page=work] a.link-hover{color:#678cf5;padding:2px 5px}section[data-page=work] a.link-hover:visited{color:#c167f5}section[data-page=work] a.link-hover:hover{color:#fff;background-color:#678cf5}section[data-page=work] div[data-bg]{padding:30px 20px}section[data-page=work] div[data-bg]:empty{display:none}section[data-page=work] .work-image__list{display:flex;flex-wrap:wrap;justify-content:space-between}section[data-page=work] .work-image__item{list-style:none}@media (min-width:768px){section[data-page=work] .work-image__item.size-half{width:49%}}@media (min-width:768px){section[data-page=work] .work-image__item.size-full{width:109%}}@media (min-width:768px){section[data-page=work] .work-image__item{width:49%;padding:10px 0 25px}}@media (max-width:767px){section[data-page=work] .work-image__item{width:100%;padding:5px 0 15px}}section[data-page=work] .work-image__item img{width:100%;display:block}@media (min-width:768px){section[data-page=work] .work-image__item img{cursor:pointer}section[data-page=work] .work-image__item img:hover{opacity:.8}}section[data-page=work] .work-image__item figcaption{display:block;text-align:center;font-size:14px;font-style:italic;padding:5px 0 10px}section[data-page=work] .work-image__item figcaption:empty{display:none}section[data-page=work] .work-image__item .youtube{background-size:contain;text-indent:-9999px;white-space:nowrap;overflow:hidden;position:relative}section[data-page=work] .work-image__item .youtube,section[data-page=work] .work-image__item .youtube a{width:100%;height:0;padding-bottom:56.25%;display:block}section[data-page=work] .work-image__item .youtube iframe{position:absolute;top:0;left:0;width:100%;height:100%}section[data-page=work] .work-about{text-align:center}section[data-page=work] .work-about h2,section[data-page=work] .work-about p{text-align:left}section[data-page=work] .work-award ul,section[data-page=work] .work-media ul{margin-left:20px}@media (min-width:768px){section[data-page=work] .slideshare{width:595px;height:485px;margin-top:30px}}@media (max-width:767px){section[data-page=work] .slideshare{width:396.66667px;height:323.33333px;margin-top:20px}}",""]),t.exports=r},310:function(t,e,o){"use strict";o.r(e);var r={components:{Modal:o(202).a},methods:{openModal:function(t){this.$refs.modal.openModal(t)}}},n=(o(252),o(8)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container work",attrs:{"data-page":"work"}},[r("h1",{staticClass:"work__title"},[t._v(t._s(t.$t("WORK_READYYY_TITLE")))]),t._v(" "),r("div",{staticClass:"work-about",attrs:{"data-bg":"odd"}},[r("h2",[t._v(t._s(t.$t("WORK_HEADLINE_ABOUT")))]),t._v(" "),r("pre",[t._v(t._s(t.$t("WORK_READYYY_DESC")))])]),t._v(" "),r("div",{staticClass:"work-image",attrs:{"data-bg":"even"}},[r("h2",[t._v(t._s(t.$t("WORK_HEADLINE_IMAGE")))]),t._v(" "),r("ul",{staticClass:"work-image__list"},[r("li",{staticClass:"work-image__item size-full"},[r("img",{attrs:{src:o(213)},on:{click:t.openModal}}),t._v(" "),r("figcaption")]),t._v(" "),r("li",{staticClass:"work-image__item size-full"},[t._m(0),t._v(" "),t.$isJa()?r("figcaption",[t._v("スマホから見た配信中画面のキャプチャ")]):t._e()])])]),t._v(" "),r("div",{staticClass:"work-skill",attrs:{"data-bg":"odd"}},[r("h2",[t._v(t._s(t.$t("WORK_HEADLINE_SKILL")))]),t._v(" "),r("p",[t._v("Unity / C# / Live2D")])]),t._v(" "),r("div",{staticClass:"work-time",attrs:{"data-bg":"even"}},[r("h2",[t._v(t._s(t.$t("WORK_HEADLINE_PRODUCTION_TIME")))]),t._v(" "),r("p",[t._v(t._s(t.$t("WORK_READYYY_PRODUCTION_TIME")))])]),t._v(" "),r("div",{staticClass:"work-media",attrs:{"data-bg":"odd"}},[r("h2",[t._v(t._s(t.$t("WORK_HEADLINE_MEDIA")))]),t._v(" "),t._m(1)]),t._v(" "),r("modal",{ref:"modal"})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"youtube"},[e("iframe",{attrs:{src:"https://www.youtube.com/embed/zeGwJnqN_k4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[o("a",{staticClass:"link-hover",attrs:{href:"https://ready.sega.jp/news/60897/",target:"_blank",rel:"noopener noreferrer"}},[t._v("アイドルたちによる『SHOWROOM』生配信がスタート！初回配信は12月10日 蒼志バースデー配信！！")])])])}],!1,null,null,null);e.default=component.exports}}]);