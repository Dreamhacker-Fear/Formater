(function(n,a,e,c,s,i){"use strict";const{FormSection:d,FormInput:g,FormButton:f,FormText:l}=i.Forms;function m(){const[o,t]=a.React.useState(e.storage.formatting??"");return a.React.createElement(d,{title:"Auto Formatter"},a.React.createElement(l,null,"NOTE: These features automatically add Discord formatting to your messages."),a.React.createElement(l,null,"1 = Bold",`
`,"2 = Italic",`
`,"3 = Spoiler",`
`,"4 = Code",`
`,"5 = Underline",`
`,"6 = Strikethrough",`
`,"7 = Quote"),a.React.createElement(g,{title:"Formatting",value:o,placeholder:"Example: 1,3,4",onChange:t}),a.React.createElement(f,{text:"Apply",onPress:function(){e.storage.formatting=o}}))}let u=null;function h(o){let t=o;return e.storage.autoBold&&(t=`**${t}**`),e.storage.autoItalic&&(t=`*${t}*`),e.storage.autoSpoiler&&(t=`||${t}||`),e.storage.autoCode&&(t=`\`${t}\``),e.storage.autoUnderline&&(t=`__${t}__`),e.storage.autoStrikethrough&&(t=`~~${t}~~`),e.storage.autoQuote&&(t=t.split(`
`).map(function(r){return`> ${r}`}).join(`
`)),t}var F={onLoad(){try{const o=a.metro.findByProps("sendMessage");if(!o){s.logger.log("Auto Formatter: sendMessage not found");return}u=c.before("sendMessage",o,function(t){try{for(const r of t)if(r&&typeof r=="object"&&typeof r.content=="string"){r.content=h(r.content);return}}catch(r){s.logger.error(`Auto Formatter: ${String(r)}`)}})}catch(o){s.logger.error(`Auto Formatter: ${String(o)}`)}},onUnload(){u?.(),u=null},settings:m};return n.default=F,Object.defineProperty(n,"__esModule",{value:!0}),n})({},vendetta.metro.common,vendetta.plugin,vendetta.patcher,vendetta,vendetta.ui.components);
