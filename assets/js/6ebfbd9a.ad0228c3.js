"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[864],{6532:function(e,n,r){r.r(n),r.d(n,{assets:function(){return w},contentTitle:function(){return v},default:function(){return M},frontMatter:function(){return C},metadata:function(){return S},toc:function(){return E}});var a=r(7462),t=r(3366),c=r(7294),s=r(3905),o=r(2805),l=r(9583),i=r(1649),d=r(4184),m=r.n(d),u=r(148),p=["variant"],b=(0,u.fK)({name:"",children:[{name:"Fruits",children:[{name:"Avocados"},{name:"Bananas"},{name:"Berries"},{name:"Oranges"},{name:"Pears"}]},{name:"Drinks",children:[{name:"Apple Juice"},{name:"Chocolate"},{name:"Coffee"},{name:"Tea",children:[{name:"Black Tea"},{name:"Green Tea"},{name:"Red Tea"},{name:"Matcha"}]}]},{name:"Vegetables",children:[{name:"Beets"},{name:"Carrots"},{name:"Celery"},{name:"Lettuce"},{name:"Onions"}]}]});var h=function(e){var n,r,a=e.isOpen,t=e.className,s="arrow",o=m()(s,((n={})["arrow--closed"]=!a,n),((r={})["arrow--open"]=a,r),t);return c.createElement(i.am,{className:o})},x=function(e){var n=e.variant,r=(0,t.Z)(e,p);switch(n){case"all":return c.createElement(l.xik,r);case"none":return c.createElement(l.u9M,r);case"some":return c.createElement(l.kty,r);default:return null}},k=function(){return c.createElement("div",null,c.createElement("div",{className:"checkbox"},c.createElement(u.ZP,{data:b,"aria-label":"Checkbox tree",multiSelect:!0,propagateSelect:!0,propagateSelectUpwards:!0,defaultDisabledIds:[1,5],togglableSelect:!0,nodeRenderer:function(e){var n=e.element,r=e.isBranch,t=e.isExpanded,s=e.isSelected,o=e.isDisabled,l=e.isHalfSelected,i=e.getNodeProps,d=e.level,m=e.handleSelect,u=e.handleExpand,p=e.dispatch;return c.createElement(c.Fragment,null,c.createElement("div",(0,a.Z)({},i({onClick:u}),{style:{marginLeft:40*(d-1),opacity:o?.5:1}}),r&&c.createElement(h,{isOpen:t}),c.createElement(x,{className:"checkbox-icon",onClick:function(e){m(e),e.stopPropagation()},variant:l?"some":s?"all":"none"}),c.createElement("span",{className:"name"},n.name)),c.createElement("button",{onClick:function(){return p({type:o?"ENABLE":"DISABLE",id:n.id})}},o?"Enable":"Disable"))}})))},f=r(1240),g=["components"],C={title:"Checkbox with disabled nodes"},v=void 0,S={unversionedId:"examples-MultiSelectCheckboxDisabled",id:"examples-MultiSelectCheckboxDisabled",title:"Checkbox with disabled nodes",description:"This example demonstrates the use of disabled nodes",source:"@site/docs/examples-MultiSelectCheckboxDisabled.md",sourceDirName:".",slug:"/examples-MultiSelectCheckboxDisabled",permalink:"/react-accessible-treeview/docs/examples-MultiSelectCheckboxDisabled",draft:!1,tags:[],version:"current",frontMatter:{title:"Checkbox with disabled nodes"},sidebar:"docs",previous:{title:"Checkbox",permalink:"/react-accessible-treeview/docs/examples-MultiSelectCheckbox"},next:{title:"Asynchronous loading",permalink:"/react-accessible-treeview/docs/examples-MultiSelectCheckboxAsync"}},w={},E=[],D={toc:E};function M(e){var n=e.components,r=(0,t.Z)(e,g);return(0,s.kt)("wrapper",(0,a.Z)({},D,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This example demonstrates the use of disabled nodes"),(0,s.kt)(o.Z,{component:k,js:'import React from "react";\r\nimport { FaSquare, FaCheckSquare, FaMinusSquare } from "react-icons/fa";\r\nimport { IoMdArrowDropright } from "react-icons/io";\r\nimport cx from "classnames";\r\n\r\nimport TreeView, { flattenTree } from "react-accessible-treeview";\r\nconst folder = {\r\n  name: "",\r\n  children: [\r\n    {\r\n      name: "Fruits",\r\n      children: [\r\n        { name: "Avocados" },\r\n        { name: "Bananas" },\r\n        { name: "Berries" },\r\n        { name: "Oranges" },\r\n        { name: "Pears" },\r\n      ],\r\n    },\r\n    {\r\n      name: "Drinks",\r\n      children: [\r\n        { name: "Apple Juice" },\r\n        { name: "Chocolate" },\r\n        { name: "Coffee" },\r\n        {\r\n          name: "Tea",\r\n          children: [\r\n            { name: "Black Tea" },\r\n            { name: "Green Tea" },\r\n            { name: "Red Tea" },\r\n            { name: "Matcha" },\r\n          ],\r\n        },\r\n      ],\r\n    },\r\n    {\r\n      name: "Vegetables",\r\n      children: [\r\n        { name: "Beets" },\r\n        { name: "Carrots" },\r\n        { name: "Celery" },\r\n        { name: "Lettuce" },\r\n        { name: "Onions" },\r\n      ],\r\n    },\r\n  ],\r\n};\r\n\r\nconst data = flattenTree(folder);\r\n\r\nfunction MultiSelectCheckboxDisabled() {\r\n  return (\r\n    <div>\r\n      <div className="checkbox">\r\n        <TreeView\r\n          data={data}\r\n          aria-label="Checkbox tree"\r\n          multiSelect\r\n          propagateSelect\r\n          propagateSelectUpwards\r\n          defaultDisabledIds={[1, 5]}\r\n          togglableSelect\r\n          nodeRenderer={({\r\n            element,\r\n            isBranch,\r\n            isExpanded,\r\n            isSelected,\r\n            isDisabled,\r\n            isHalfSelected,\r\n            getNodeProps,\r\n            level,\r\n            handleSelect,\r\n            handleExpand,\r\n            dispatch,\r\n          }) => {\r\n            return (\r\n              <>\r\n                <div\r\n                  {...getNodeProps({ onClick: handleExpand })}\r\n                  style={{\r\n                    marginLeft: 40 * (level - 1),\r\n                    opacity: isDisabled ? 0.5 : 1,\r\n                  }}\r\n                >\r\n                  {isBranch && <ArrowIcon isOpen={isExpanded} />}\r\n                  <CheckBoxIcon\r\n                    className="checkbox-icon"\r\n                    onClick={(e) => {\r\n                      handleSelect(e);\r\n                      e.stopPropagation();\r\n                    }}\r\n                    variant={\r\n                      isHalfSelected ? "some" : isSelected ? "all" : "none"\r\n                    }\r\n                  />\r\n                  <span className="name">{element.name}</span>\r\n                </div>\r\n                <button\r\n                  onClick={() =>\r\n                    dispatch({\r\n                      type: isDisabled ? "ENABLE" : "DISABLE",\r\n                      id: element.id,\r\n                    })\r\n                  }\r\n                >\r\n                  {isDisabled ? "Enable" : "Disable"}\r\n                </button>\r\n              </>\r\n            );\r\n          }}\r\n        />\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n\r\nconst ArrowIcon = ({ isOpen, className }) => {\r\n  const baseClass = "arrow";\r\n  const classes = cx(\r\n    baseClass,\r\n    { [`${baseClass}--closed`]: !isOpen },\r\n    { [`${baseClass}--open`]: isOpen },\r\n    className\r\n  );\r\n  return <IoMdArrowDropright className={classes} />;\r\n};\r\n\r\nconst CheckBoxIcon = ({ variant, ...rest }) => {\r\n  switch (variant) {\r\n    case "all":\r\n      return <FaCheckSquare {...rest} />;\r\n    case "none":\r\n      return <FaSquare {...rest} />;\r\n    case "some":\r\n      return <FaMinusSquare {...rest} />;\r\n    default:\r\n      return null;\r\n  }\r\n};\r\n\r\nexport default MultiSelectCheckboxDisabled;\r\n',css:f.Z,mdxType:"CodeTabs"}))}M.isMDXComponent=!0},1240:function(e,n){n.Z=".checkbox {\r\n  font-size: 16px;\r\n  user-select: none;\r\n  min-height: 320px;\r\n  padding: 20px;\r\n  box-sizing: content-box;\r\n}\r\n\r\n.checkbox .tree,\r\n.checkbox .tree-node,\r\n.checkbox .tree-node-group {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.checkbox .tree-branch-wrapper,\r\n.checkbox .tree-node__leaf {\r\n  outline: none;\r\n}\r\n\r\n.checkbox .tree-node {\r\n  cursor: pointer;\r\n}\r\n\r\n.checkbox .tree-node .name:hover {\r\n  background: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.checkbox .tree-node--focused .name {\r\n  background: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.checkbox .tree-node {\r\n  display: inline-block;\r\n}\r\n\r\n.checkbox .checkbox-icon {\r\n  margin: 0 5px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.checkbox button {\r\n  border: none;\r\n  background: transparent;\r\n  cursor: pointer;\r\n}\r\n\r\n.checkbox .arrow {\r\n  margin-left: 5px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.checkbox .arrow--open {\r\n  transform: rotate(90deg);\r\n}\r\n"}}]);