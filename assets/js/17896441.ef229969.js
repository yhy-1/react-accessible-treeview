"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[918],{1752:function(e,t,a){a.r(t),a.d(t,{default:function(){return Pe}});var n=a(7294),r=a(1944),l=a(9688),i=n.createContext(null);function o(e){var t=e.children,a=function(e){return(0,n.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return n.createElement(i.Provider,{value:a},t)}function s(){var e=(0,n.useContext)(i);if(null===e)throw new l.i6("DocProvider");return e}function c(){var e,t=s(),a=t.metadata,l=t.frontMatter,i=t.assets;return n.createElement(r.d,{title:a.title,description:a.description,keywords:l.keywords,image:null!=(e=i.image)?e:l.image})}var d=a(6010),m=a(7524),u=a(7462),v=a(5999),f=a(9960);function b(e){var t=e.permalink,a=e.title,r=e.subLabel,l=e.isNext;return n.createElement(f.Z,{className:(0,d.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}function h(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(b,(0,u.Z)({},t,{subLabel:n.createElement(v.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(b,(0,u.Z)({},a,{subLabel:n.createElement(v.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function p(){var e=s().metadata;return n.createElement(h,{previous:e.previous,next:e.next})}var g=a(2263),E=a(143),L=a(5281),N=a(373),k=a(4477);var _={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(v.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(v.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function Z(e){var t=_[e.versionMetadata.banner];return n.createElement(t,e)}function C(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(v.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(f.Z,{to:a,onClick:r},n.createElement(v.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function x(e){var t,a=e.className,r=e.versionMetadata,l=(0,g.Z)().siteConfig.title,i=(0,E.gA)({failfast:!0}).pluginId,o=(0,N.J)(i).savePreferredVersionName,s=(0,E.Jo)(i),c=s.latestDocSuggestion,m=s.latestVersionSuggestion,u=null!=c?c:(t=m).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,d.Z)(a,L.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(Z,{siteTitle:l,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(C,{versionLabel:m.label,to:u.path,onClick:function(){return o(m.name)}})))}function T(e){var t=e.className,a=(0,k.E)();return a.banner?n.createElement(x,{className:t,versionMetadata:a}):null}function H(e){var t=e.className,a=(0,k.E)();return a.badge?n.createElement("span",{className:(0,d.Z)(t,L.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(v.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function w(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function U(e){var t=e.lastUpdatedBy;return n.createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function y(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:L.k.common.lastUpdated},n.createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(w,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(U,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var A=a(3366),M="iconEdit_Z9Sw",I=["className"];function B(e){var t=e.className,a=(0,A.Z)(e,I);return n.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(M,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function O(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:L.k.common.editThisPage},n.createElement(B,null),n.createElement(v.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var V="tag_zVej",P="tagRegular_sFm0",S="tagWithCount_h2kH";function D(e){var t=e.permalink,a=e.label,r=e.count;return n.createElement(f.Z,{href:t,className:(0,d.Z)(V,r?S:P)},a,r&&n.createElement("span",null,r))}var R="tags_jXut",z="tag_QGVx";function j(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(v.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,d.Z)(R,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:z},n.createElement(D,{label:t,permalink:a}))}))))}var F="lastUpdated_vwxv";function q(e){return n.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(j,e)))}function G(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,l=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(O,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",F)},(a||r)&&n.createElement(y,{lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:r})))}function J(){var e=s().metadata,t=e.editUrl,a=e.lastUpdatedAt,r=e.formattedLastUpdatedAt,l=e.lastUpdatedBy,i=e.tags,o=i.length>0,c=!!(t||a||l);return o||c?n.createElement("footer",{className:(0,d.Z)(L.k.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(q,{tags:i}),c&&n.createElement(G,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:r})):null}var Q=a(6043),W=a(6668),X=["parentIndex"];function K(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),a=Array(7).fill(-1);t.forEach((function(e,t){var n=a.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),a[e.level]=t}));var n=[];return t.forEach((function(e){var a=e.parentIndex,r=(0,A.Z)(e,X);a>=0?t[a].children.push(r):n.push(r)})),n}function Y(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=Y({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}function $(e){var t=e.getBoundingClientRect();return t.top===t.bottom?$(e.parentNode):t}function ee(e,t){var a,n,r=t.anchorTopOffset,l=e.find((function(e){return $(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}($(l))?l:null!=(n=e[e.indexOf(l)-1])?n:null:null!=(a=e[e.length-1])?a:null}function te(){var e=(0,n.useRef)(0),t=(0,W.L)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function ae(e){var t=(0,n.useRef)(void 0),a=te();(0,n.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),o=function(e){for(var t=e.minHeadingLevel,a=e.maxHeadingLevel,n=[],r=t;r<=a;r+=1)n.push("h"+r+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),s=ee(o,{anchorTopOffset:a.current}),c=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,a])}function ne(e){var t=e.toc,a=e.className,r=e.linkClassName,l=e.isChild;return t.length?n.createElement("ul",{className:l?void 0:a},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(ne,{isChild:!0,toc:e.children,className:a,linkClassName:r}))}))):null}var re=n.memo(ne),le=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function ie(e){var t=e.toc,a=e.className,r=void 0===a?"table-of-contents table-of-contents__left-border":a,l=e.linkClassName,i=void 0===l?"table-of-contents__link":l,o=e.linkActiveClassName,s=void 0===o?void 0:o,c=e.minHeadingLevel,d=e.maxHeadingLevel,m=(0,A.Z)(e,le),v=(0,W.L)(),f=null!=c?c:v.tableOfContents.minHeadingLevel,b=null!=d?d:v.tableOfContents.maxHeadingLevel,h=function(e){var t=e.toc,a=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,n.useMemo)((function(){return Y({toc:K(t),minHeadingLevel:a,maxHeadingLevel:r})}),[t,a,r])}({toc:t,minHeadingLevel:f,maxHeadingLevel:b});return ae((0,n.useMemo)((function(){if(i&&s)return{linkClassName:i,linkActiveClassName:s,minHeadingLevel:f,maxHeadingLevel:b}}),[i,s,f,b])),n.createElement(re,(0,u.Z)({toc:h,className:r,linkClassName:i},m))}var oe="tocCollapsibleButton_TO0P",se="tocCollapsibleButtonExpanded_MG3E",ce=["collapsed"];function de(e){var t=e.collapsed,a=(0,A.Z)(e,ce);return n.createElement("button",(0,u.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",oe,!t&&se,a.className)}),n.createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var me="tocCollapsible_ETCw",ue="tocCollapsibleContent_vkbj",ve="tocCollapsibleExpanded_sAul";function fe(e){var t=e.toc,a=e.className,r=e.minHeadingLevel,l=e.maxHeadingLevel,i=(0,Q.u)({initialState:!0}),o=i.collapsed,s=i.toggleCollapsed;return n.createElement("div",{className:(0,d.Z)(me,!o&&ve,a)},n.createElement(de,{collapsed:o,onClick:s}),n.createElement(Q.z,{lazy:!0,className:ue,collapsed:o},n.createElement(ie,{toc:t,minHeadingLevel:r,maxHeadingLevel:l})))}var be="tocMobile_ITEo";function he(){var e=s(),t=e.toc,a=e.frontMatter;return n.createElement(fe,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:(0,d.Z)(L.k.docs.docTocMobile,be)})}var pe="tableOfContents_bqdL",ge=["className"];function Ee(e){var t=e.className,a=(0,A.Z)(e,ge);return n.createElement("div",{className:(0,d.Z)(pe,"thin-scrollbar",t)},n.createElement(ie,(0,u.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}function Le(){var e=s(),t=e.toc,a=e.frontMatter;return n.createElement(Ee,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:L.k.docs.docTocDesktop})}var Ne=a(6886),ke=a(3905),_e=a(7402);function Ze(e){var t=e.children;return n.createElement(ke.Zo,{components:_e.Z},t)}function Ce(e){var t,a,r,l,i=e.children,o=(t=s(),a=t.metadata,r=t.frontMatter,l=t.contentTitle,r.hide_title||void 0!==l?null:a.title);return n.createElement("div",{className:(0,d.Z)(L.k.docs.docMarkdown,"markdown")},o&&n.createElement("header",null,n.createElement(Ne.Z,{as:"h1"},o)),n.createElement(Ze,null,i))}var xe=a(8425),Te=a(8596),He=a(4996);function we(e){return n.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var Ue={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function ye(e){var t=e.children,a=e.href,r="breadcrumbs__link";return e.isLast?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(f.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function Ae(e){var t=e.children,a=e.active,r=e.index,l=e.addMicrodata;return n.createElement("li",(0,u.Z)({},l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function Me(){var e=(0,He.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(f.Z,{"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,d.Z)("breadcrumbs__link",Ue.breadcrumbsItemLink),href:e},n.createElement(we,{className:Ue.breadcrumbHomeIcon})))}function Ie(){var e=(0,xe.s1)(),t=(0,Te.Ns)();return e?n.createElement("nav",{className:(0,d.Z)(L.k.docs.docBreadcrumbs,Ue.breadcrumbsContainer),"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(Me,null),e.map((function(t,a){var r=a===e.length-1;return n.createElement(Ae,{key:a,active:r,index:a,addMicrodata:!!t.href},n.createElement(ye,{href:t.href,isLast:r},t.label))})))):null}var Be="docItemContainer_Djhp",Oe="docItemCol_VOVn";function Ve(e){var t,a,r,l,i,o,c=e.children,u=(t=s(),a=t.frontMatter,r=t.toc,l=(0,m.i)(),i=a.hide_table_of_contents,o=!i&&r.length>0,{hidden:i,mobile:o?n.createElement(he,null):void 0,desktop:!o||"desktop"!==l&&"ssr"!==l?void 0:n.createElement(Le,null)});return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!u.hidden&&Oe)},n.createElement(T,null),n.createElement("div",{className:Be},n.createElement("article",null,n.createElement(Ie,null),n.createElement(H,null),u.mobile,n.createElement(Ce,null,c),n.createElement(J,null)),n.createElement(p,null))),u.desktop&&n.createElement("div",{className:"col col--3"},u.desktop))}function Pe(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,a=e.content;return n.createElement(o,{content:e.content},n.createElement(r.FG,{className:t},n.createElement(c,null),n.createElement(Ve,null,n.createElement(a,null))))}},4477:function(e,t,a){a.d(t,{E:function(){return o},q:function(){return i}});var n=a(7294),r=a(9688),l=n.createContext(null);function i(e){var t=e.children,a=e.version;return n.createElement(l.Provider,{value:a},t)}function o(){var e=(0,n.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);