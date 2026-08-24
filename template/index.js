(function(n,a,o,c,s,i){"use strict";const{FormSection:d,FormInput:g,FormRow:f,FormText:l}=i.Forms;function m(){const[r,t]=a.React.useState(o.storage.formatting??""),e=function(){o.storage.formatting=r};return a.React.createElement(d,{title:"Auto Formatter"},a.React.createElement(l,null,"NOTE: These features automatically add Discord formatting to your messages."),a.React.createElement(l,null,"1 = Bold",`
`,"2 = Italic",`
`,"3 = Spoiler",`
`,"4 = Code",`
`,"5 = Underline",`
`,"6 = Strikethrough",`
`,"7 = Quote"),a.React.createElement(g,{title:"Formatting",value:r,placeholder:"Example: 1,3,4",onChange:t}),a.React.createElement(f,{label:"Apply",onPress:e}))}let u=null;function h(r){let t=r;return o.storage.autoBold&&(t=`**${t}**`),o.storage.autoItalic&&(t=`*${t}*`),o.storage.autoSpoiler&&(t=`||${t}||`),o.storage.autoCode&&(t=`\`${t}\``),o.storage.autoUnderline&&(t=`__${t}__`),o.storage.autoStrikethrough&&(t=`~~${t}~~`),o.storage.autoQuote&&(t=t.split(`
`).map(function(e){return`> ${e}`}).join(`
`)),t}var F={onLoad(){try{const r=a.metro.findByProps("sendMessage");if(!r){s.logger.log("Auto Formatter: sendMessage not found");return}u=c.before("sendMessage",r,function(t){try{for(const e of t)if(e&&typeof e=="object"&&typeof e.content=="string"){e.content=h(e.content);return}}catch(e){s.logger.error(`Auto Formatter: ${String(e)}`)}})}catch(r){s.logger.error(`Auto Formatter: ${String(r)}`)}},onUnload(){u?.(),u=null},settings:m};return n.default=F,Object.defineProperty(n,"__esModule",{value:!0}),n})({},vendetta.metro.common,vendetta.plugin,vendetta.patcher,vendetta,vendetta.ui.components);
