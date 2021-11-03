"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[67606],{9304:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-3e33a84c",path:"/devices/ZNJLBL01LM.html",title:"Xiaomi ZNJLBL01LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi ZNJLBL01LM control via MQTT",description:"Integrate your Xiaomi ZNJLBL01LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-09-01T18:11:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Device type specific configuration",slug:"device-type-specific-configuration",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Cover",slug:"cover",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZNJLBL01LM.md",git:{updatedTime:1635970402e3}}},13851:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var o=i(66252);const a=(0,o.uE)('<h1 id="xiaomi-znjlbl01lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-znjlbl01lm" aria-hidden="true">#</a> Xiaomi ZNJLBL01LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZNJLBL01LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara roller shade companion E1</td></tr><tr><td>Exposes</td><td>cover (state, position), battery, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZNJLBL01LM.jpg" alt="Xiaomi ZNJLBL01LM"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="device-type-specific-configuration" tabindex="-1"><a class="header-anchor" href="#device-type-specific-configuration" aria-hidden="true">#</a> Device type specific configuration</h3>',4),d=(0,o.Uk)("How to use device type specific configuration"),r=(0,o._)("ul",null,[(0,o._)("li",null,[(0,o._)("code",null,"invert_cover"),(0,o.Uk)(": By default the position/tilt values mean: open = 100, closed = 0. This can be inverted by setting this option to true (so open = 0, close = 100).")])],-1),c=(0,o._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,o.Uk)(" OTA updates")],-1),s=(0,o.Uk)("This device supports OTA updates, for more information see "),n=(0,o.Uk)("OTA updates"),l=(0,o.Uk)("."),u=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. To read the current state of this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),h={},p=(0,i(83744).Z)(h,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[d])),_:1})])]),r,c,(0,o._)("p",null,[s,(0,o.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[n])),_:1}),l]),u],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);