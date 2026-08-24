(function(n,s,e,l,a,i){"use strict";const{FormSection:m,FormInput:g,FormText:c}=i.Forms;function d(){return React.createElement(m,{title:"Auto Formatter"},React.createElement(c,null,"Enter the formatting numbers you want to use."),React.createElement(c,null,"1 = Bold",`
`,"2 = Italic",`
`,"3 = Spoiler",`
`,"4 = Code",`
`,"5 = Underline",`
`,"6 = Strikethrough",`
`,"7 = Quote"),React.createElement(g,{title:"Formatting",value:e.storage.formatting??"",placeholder:"Example: 1,3,4",onChange:function(r){e.storage.formatting=r}}))}let u=null;function f(r){let t=r;return e.storage.autoBold&&(t=`**${t}**`),e.storage.autoItalic&&(t=`*${t}*`),e.storage.autoSpoiler&&(t=`||${t}||`),e.storage.autoCode&&(t=`\`${t}\``),e.storage.autoUnderline&&(t=`__${t}__`),e.storage.autoStrikethrough&&(t=`~~${t}~~`),e.storage.autoQuote&&(t=t.split(`
`).map(function(o){return`> ${o}`}).join(`
`)),t}var h={onLoad(){try{const r=s.metro.findByProps("sendMessage");if(!r){a.logger.log("Auto Formatter: sendMessage not found");return}u=l.before("sendMessage",r,function(t){try{for(const o of t)if(o&&typeof o=="object"&&typeof o.content=="string"){o.content=f(o.content);return}}catch(o){a.logger.error(`Auto Formatter: ${String(o)}`)}})}catch(r){a.logger.error(`Auto Formatter: ${String(r)}`)}},onUnload(){u?.(),u=null},settings:d};return n.default=h,Object.defineProperty(n,"__esModule",{value:!0}),n})({},vendetta.metro.common,vendetta.plugin,vendetta.patcher,vendetta,vendetta.ui.components);
