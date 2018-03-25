webpackJsonp([18],{DwO4:function(s,t,a){var n=a("VU/8")(a("gSTb"),a("h89E"),null,null);s.exports=n.exports},d6cJ:function(s,t,a){s.exports=a("DwO4")},gSTb:function(s,t,a){var n,_,v;!function(a,l){_=[s,t],n=l,void 0!==(v="function"==typeof n?n.apply(t,_):n)&&(s.exports=v)}(0,function(s,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{points:[]}},methods:{clickHandler:function(s){alert("单击点的坐标为："+s.point.lng+", "+s.point.lat)},addPoints:function(){for(var s=[],t=0;t<1e3;t++){var a={lng:40*Math.random()+85,lat:30*Math.random()+21};s.push(a)}this.points=s}}},s.exports=t.default})},h89E:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[[a("h1",[s._v("海量点")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(2),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("添加 1000 个随机点")]),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(3),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:105,lat:38},zoom:4},on:{ready:s.addPoints}},[a("bm-point-collection",{attrs:{points:s.points,shape:"BMAP_POINT_SHAPE_STAR",color:"red",size:"BMAP_POINT_SIZE_SMALL"},on:{click:s.clickHandler}})],1)],1)]],2)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("code",[s._v("BmPointCollection")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("points")]),s._v(" "),a("td",[s._v("Array[Point]")]),s._v(" "),a("td",[s._v("[]")]),s._v(" "),a("td",[s._v("地图上展示的点坐标集合")])]),s._v(" "),a("tr",[a("td",[s._v("shape")]),s._v(" "),a("td",[a("a",{attrs:{href:"http://lbsyun.baidu.com/cms/jsapi/class/jsapi_reference.html#a3b22"}},[s._v("ShapeType")])]),s._v(" "),a("td",[s._v("BMAP_POINT_SHAPE_CIRCLE")]),s._v(" "),a("td",[s._v("坐标点形状")])]),s._v(" "),a("tr",[a("td",[s._v("size")]),s._v(" "),a("td",[a("a",{attrs:{href:"http://lbsyun.baidu.com/cms/jsapi/class/jsapi_reference.html#a3b23"}},[s._v("SizeType")])]),s._v(" "),a("td",[s._v("BMAP_POINT_SIZE_NORMAL")]),s._v(" "),a("td",[s._v("坐标点尺寸")])]),s._v(" "),a("tr",[a("td",[s._v("color")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("坐标点颜色")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("click")]),s._v(" "),a("td",[s._v("event{currentTarget, point, returnValue, target, type}")]),s._v(" "),a("td",[s._v("点击折线后会触发此事件")])]),s._v(" "),a("tr",[a("td",[s._v("mouseout")]),s._v(" "),a("td",[s._v("event{currentTarget, point, returnValue, target, type}")]),s._v(" "),a("td",[s._v("鼠标离开折线时触发此事件")])]),s._v(" "),a("tr",[a("td",[s._v("mouseover")]),s._v(" "),a("td",[s._v("event{currentTarget, point, returnValue, target, type}")]),s._v(" "),a("td",[s._v("当鼠标进入折线区域时会触发此事件")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"map"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":center")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"{lng: 105.000, lat: 38.000}"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":zoom")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"4"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-point-collection")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":points")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"points"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("shape")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"BMAP_POINT_SHAPE_STAR"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("color")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"red"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"BMAP_POINT_SIZE_SMALL"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"clickHandler"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-point-collection")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("points")]),s._v(": []\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    clickHandler (e) {\n      alert("),a("span",{staticClass:"hljs-string"},[s._v("`单击点的坐标为："),a("span",{staticClass:"hljs-subst"},[s._v("${e.point.lng}")]),s._v(", "),a("span",{staticClass:"hljs-subst"},[s._v("${e.point.lat}")]),s._v("`")]),s._v(");\n    },\n    addPoints () {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" points = [];\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v(" ("),a("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" i = "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("; i < "),a("span",{staticClass:"hljs-number"},[s._v("1000")]),s._v("; i++) {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" position = {"),a("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),a("span",{staticClass:"hljs-built_in"},[s._v("Math")]),s._v(".random() * "),a("span",{staticClass:"hljs-number"},[s._v("40")]),s._v(" + "),a("span",{staticClass:"hljs-number"},[s._v("85")]),s._v(", "),a("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),a("span",{staticClass:"hljs-built_in"},[s._v("Math")]),s._v(".random() * "),a("span",{staticClass:"hljs-number"},[s._v("30")]),s._v(" + "),a("span",{staticClass:"hljs-number"},[s._v("21")]),s._v("}\n        points.push(position)\n      }\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".points = points\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])}]}}});