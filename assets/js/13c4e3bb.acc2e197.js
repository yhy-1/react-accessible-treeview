"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[320],{5532:function(e,n,t){t.r(n),t.d(n,{assets:function(){return A},contentTitle:function(){return w},default:function(){return T},frontMatter:function(){return k},metadata:function(){return E},toc:function(){return L}});var a=t(7462),l=t(3366),r=t(7294),i=t(3905),o=t(2805),s=t(4165),c=t(5861),d=t(9583),u=t(1649),m=t(8193),h=t(148),p=t(4184),f=t.n(p),S=["variant"],g=[{name:"",id:0,children:[1,2,3],parent:null},{name:"Fruits",children:[],id:1,parent:0,isBranch:!0},{name:"Drinks",children:[4,5],id:2,parent:0,isBranch:!0},{name:"Vegetables",children:[],id:3,parent:0,isBranch:!0},{name:"Pine colada",children:[],id:4,parent:2},{name:"Water",children:[],id:5,parent:2}];var v=function(e){var n,t,a=e.isOpen,l=e.className,i="arrow",o=f()(i,((n={})[i+"--closed"]=!a,n),((t={})[i+"--open"]=a,t),l);return r.createElement(u.am,{className:o})},x=function(e){var n=e.variant,t=(0,l.Z)(e,S);switch(n){case"all":return r.createElement(d.xik,t);case"none":return r.createElement(d.u9M,t);case"some":return r.createElement(d.kty,t);default:return null}},C=function(){var e=(0,r.useRef)(null),n=(0,r.useState)(g),t=n[0],l=n[1],i=(0,r.useState)([]),o=i[0],d=i[1],u=(0,r.useState)([]),p=u[0],f=u[1],S=(0,r.useState)(!1),C=S[0],y=S[1],N=(0,r.useState)(!1),b=N[0],k=N[1],w=(0,r.useState)([]),E=w[0],A=w[1],L=function(e){var n=e.element;return new Promise((function(e){n.children.length>0?e():setTimeout((function(){l((function(e){return t=e,a=n.id,l=[{name:"Child Node "+e.length,children:[],id:e.length,parent:n.id,isBranch:!0},{name:"Another child Node",children:[],id:e.length+1,parent:n.id}],t.map((function(e){return e.id===a&&(e.children=l.map((function(e){return e.id}))),e})).concat(l);var t,a,l})),C&&f(b?[].concat(new Set([].concat(E,p)),[t.length,t.length+1]):[t.length,t.length+1]),e()}),1e3)}))},M=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(t){var a,l,r;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=0===t.element.children.length,l=o.find((function(e){return e.id===t.element.id})),n.next=4,L(t);case 4:a&&!l&&(r=e.current,d([].concat(o,[t.element])),r&&(r.innerHTML=t.element.name+" loaded"),setTimeout((function(){r&&(r.innerHTML="")}),5e3));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement("div",{className:"visually-hidden",ref:e,role:"alert","aria-live":"polite"}),r.createElement("button",{onClick:function(){return y(!C)}},"Select next loaded children - [",JSON.stringify(C),"]"),r.createElement("button",{onClick:function(){return k(!b)},style:{marginLeft:"16px"}},"Preserve current selection - [",JSON.stringify(b),"]"),r.createElement("div",{className:"checkbox"},r.createElement(h.ZP,{data:t,"aria-label":"Checkbox tree",onLoadData:M,onNodeSelect:function(e){var n=e.element,t=e.isSelected;t&&A([].concat(E,[n.id])),!t&&A(E.filter((function(e){return e===n.id})))},selectedIds:p,multiSelect:!0,propagateSelect:!0,togglableSelect:!0,propagateSelectUpwards:!0,nodeRenderer:function(e){var n=e.element,t=e.isBranch,l=e.isExpanded,i=e.isSelected,o=e.isHalfSelected,s=e.getNodeProps,c=e.level,d=e.handleSelect,u=e.handleExpand;return r.createElement("div",(0,a.Z)({},s({onClick:u}),{style:{marginLeft:40*(c-1)}}),t&&function(e,n){return e&&0===n.children.length?r.createElement(r.Fragment,null,r.createElement("span",{role:"alert","aria-live":"assertive",className:"visually-hidden"},"loading ",n.name),r.createElement(m.xz6,{"aria-hidden":!0,className:"loading-icon"})):r.createElement(v,{isOpen:e})}(l,n),r.createElement(x,{className:"checkbox-icon",onClick:function(e){!l&&u(e),d(e),e.stopPropagation()},variant:o?"some":i?"all":"none"}),r.createElement("span",{className:"name"},n.name,"-",n.id))}}))))},y='import React, { useRef, useState } from "react";\nimport { FaSquare, FaCheckSquare, FaMinusSquare } from "react-icons/fa";\nimport { IoMdArrowDropright } from "react-icons/io";\nimport { AiOutlineLoading } from "react-icons/ai";\nimport TreeView from "react-accessible-treeview";\nimport cx from "classnames";\nimport "./styles.css";\n\nconst initialData = [\n  {\n    name: "",\n    id: 0,\n    children: [1, 2, 3],\n    parent: null,\n  },\n  {\n    name: "Fruits",\n    children: [],\n    id: 1,\n    parent: 0,\n    isBranch: true,\n  },\n  {\n    name: "Drinks",\n    children: [4, 5],\n    id: 2,\n    parent: 0,\n    isBranch: true,\n  },\n  {\n    name: "Vegetables",\n    children: [],\n    id: 3,\n    parent: 0,\n    isBranch: true,\n  },\n  {\n    name: "Pine colada",\n    children: [],\n    id: 4,\n    parent: 2,\n  },\n  {\n    name: "Water",\n    children: [],\n    id: 5,\n    parent: 2,\n  },\n];\n\nfunction MultiSelectCheckboxAsyncControlled() {\n  const loadedAlertElement = useRef(null);\n  const [data, setData] = useState(initialData);\n  const [nodesAlreadyLoaded, setNodesAlreadyLoaded] = useState([]);\n  const [selectedIds, setSelectedIds] = useState([]);\n  const [selectChildren, setSelectChildren] = useState(false);\n  const [preserveSelection, setPreserveSelection] = useState(false);\n  const [manuallySelectedNodes, setManuallySelectiedNodes] = useState([]);\n\n  const updateTreeData = (list, id, children) => {\n    const data = list.map((node) => {\n      if (node.id === id) {\n        node.children = children.map((el) => {\n          return el.id;\n        });\n      }\n      return node;\n    });\n    return data.concat(children);\n  };\n\n  const onLoadData = ({ element }) => {\n    return new Promise((resolve) => {\n      if (element.children.length > 0) {\n        resolve();\n        return;\n      }\n      setTimeout(() => {\n        setData((value) =>\n          updateTreeData(value, element.id, [\n            {\n              name: `Child Node ${value.length}`,\n              children: [],\n              id: value.length,\n              parent: element.id,\n              isBranch: true,\n            },\n            {\n              name: "Another child Node",\n              children: [],\n              id: value.length + 1,\n              parent: element.id,\n            },\n          ])\n        );\n        if (selectChildren) {\n          preserveSelection\n            ? setSelectedIds([\n                ...new Set([...manuallySelectedNodes, ...selectedIds]),\n                data.length,\n                data.length + 1,\n              ])\n            : setSelectedIds([data.length, data.length + 1]);\n        }\n        resolve();\n      }, 1000);\n    });\n  };\n\n  const wrappedOnLoadData = async (props) => {\n    const nodeHasNoChildData = props.element.children.length === 0;\n    const nodeHasAlreadyBeenLoaded = nodesAlreadyLoaded.find(\n      (e) => e.id === props.element.id\n    );\n\n    await onLoadData(props);\n\n    if (nodeHasNoChildData && !nodeHasAlreadyBeenLoaded) {\n      const el = loadedAlertElement.current;\n      setNodesAlreadyLoaded([...nodesAlreadyLoaded, props.element]);\n      el && (el.innerHTML = `${props.element.name} loaded`);\n\n      // Clearing aria-live region so loaded node alerts no longer appear in DOM\n      setTimeout(() => {\n        el && (el.innerHTML = "");\n      }, 5000);\n    }\n  };\n\n  const handleNodeSelect = ({ element, isSelected }) => {\n    isSelected &&\n      setManuallySelectiedNodes([...manuallySelectedNodes, element.id]);\n    !isSelected &&\n      setManuallySelectiedNodes(\n        manuallySelectedNodes.filter((id) => id === element.id)\n      );\n  };\n\n  return (\n    <>\n      <div>\n        <div\n          className="visually-hidden"\n          ref={loadedAlertElement}\n          role="alert"\n          aria-live="polite"\n        ></div>\n        <button onClick={() => setSelectChildren(!selectChildren)}>\n          Select next loaded children - [{JSON.stringify(selectChildren)}]\n        </button>\n        <button\n          onClick={() => setPreserveSelection(!preserveSelection)}\n          style={{ marginLeft: "16px" }}\n        >\n          Preserve current selection - [{JSON.stringify(preserveSelection)}]\n        </button>\n        <div className="checkbox">\n          <TreeView\n            data={data}\n            aria-label="Checkbox tree"\n            onLoadData={wrappedOnLoadData}\n            onNodeSelect={handleNodeSelect}\n            selectedIds={selectedIds}\n            multiSelect\n            propagateSelect\n            togglableSelect\n            propagateSelectUpwards\n            nodeRenderer={({\n              element,\n              isBranch,\n              isExpanded,\n              isSelected,\n              isHalfSelected,\n              getNodeProps,\n              level,\n              handleSelect,\n              handleExpand,\n            }) => {\n              const branchNode = (isExpanded, element) => {\n                return isExpanded && element.children.length === 0 ? (\n                  <>\n                    <span\n                      role="alert"\n                      aria-live="assertive"\n                      className="visually-hidden"\n                    >\n                      loading {element.name}\n                    </span>\n                    <AiOutlineLoading\n                      aria-hidden={true}\n                      className="loading-icon"\n                    />\n                  </>\n                ) : (\n                  <ArrowIcon isOpen={isExpanded} />\n                );\n              };\n              return (\n                <div\n                  {...getNodeProps({ onClick: handleExpand })}\n                  style={{ marginLeft: 40 * (level - 1) }}\n                >\n                  {isBranch && branchNode(isExpanded, element)}\n                  <CheckBoxIcon\n                    className="checkbox-icon"\n                    onClick={(e) => {\n                      !isExpanded && handleExpand(e);                      \n                      handleSelect(e);\n                      e.stopPropagation();\n                    }}\n                    variant={\n                      isHalfSelected ? "some" : isSelected ? "all" : "none"\n                    }\n                  />\n                  <span className="name">\n                    {element.name}-{element.id}\n                  </span>\n                </div>\n              );\n            }}\n          />\n        </div>\n      </div>\n    </>\n  );\n}\n\nconst ArrowIcon = ({ isOpen, className }) => {\n  const baseClass = "arrow";\n  const classes = cx(\n    baseClass,\n    { [`${baseClass}--closed`]: !isOpen },\n    { [`${baseClass}--open`]: isOpen },\n    className\n  );\n  return <IoMdArrowDropright className={classes} />;\n};\n\nconst CheckBoxIcon = ({ variant, ...rest }) => {\n  switch (variant) {\n    case "all":\n      return <FaCheckSquare {...rest} />;\n    case "none":\n      return <FaSquare {...rest} />;\n    case "some":\n      return <FaMinusSquare {...rest} />;\n    default:\n      return null;\n  }\n};\n\nexport default MultiSelectCheckboxAsyncControlled;\n',N="@keyframes spinner {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.loading-icon {\n  animation: spinner 1.5s linear infinite;\n  margin-left: 5px;\n}\n\n.visually-hidden {\n  position: absolute;\n  clip-path: circle(0);\n  border: 0;\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  width: 1px;\n  white-space: nowrap;\n}\n",b=["components"],k={title:"Asynchronous loading with Controlled selection"},w=void 0,E={unversionedId:"examples-MultiSelectCheckboxAsyncControlled",id:"examples-MultiSelectCheckboxAsyncControlled",title:"Asynchronous loading with Controlled selection",description:"This example demonstrates how to create a checkbox tree with asynchronous loading and controlled selection",source:"@site/docs/examples-MultiSelectCheckboxAsyncControlled.mdx",sourceDirName:".",slug:"/examples-MultiSelectCheckboxAsyncControlled",permalink:"/react-accessible-treeview/docs/examples-MultiSelectCheckboxAsyncControlled",draft:!1,tags:[],version:"current",frontMatter:{title:"Asynchronous loading with Controlled selection"}},A={},L=[],M={toc:L},D="wrapper";function T(e){var n=e.components,t=(0,l.Z)(e,b);return(0,i.kt)(D,(0,a.Z)({},M,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This example demonstrates how to create a checkbox tree with asynchronous loading and controlled selection"),(0,i.kt)(o.Z,{component:C,js:y,css:N,mdxType:"CodeTabs"}))}T.isMDXComponent=!0}}]);