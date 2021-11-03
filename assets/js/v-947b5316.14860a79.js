"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[94216],{11704:(e,t,a)=>{a.r(t),a.d(t,{data:()=>n});const n={key:"v-947b5316",path:"/devices/100.462.31.html",title:"Paul Neuhaus 100.462.31 control via MQTT",lang:"en-US",frontmatter:{title:"Paul Neuhaus 100.462.31 control via MQTT",description:"Integrate your Paul Neuhaus 100.462.31 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-06-10T16:45:59.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Device type specific configuration",slug:"device-type-specific-configuration",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/100.462.31.md",git:{updatedTime:1635970402e3}}},64719:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(66252);const i=(0,n.uE)('<h1 id="paul-neuhaus-100-462-31" tabindex="-1"><a class="header-anchor" href="#paul-neuhaus-100-462-31" aria-hidden="true">#</a> Paul Neuhaus 100.462.31</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>100.462.31</td></tr><tr><td>Vendor</td><td>Paul Neuhaus</td></tr><tr><td>Description</td><td>Q-REMOTE</td></tr><tr><td>Exposes</td><td>action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/100.462.31.jpg" alt="Paul Neuhaus 100.462.31"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="device-type-specific-configuration" tabindex="-1"><a class="header-anchor" href="#device-type-specific-configuration" aria-hidden="true">#</a> Device type specific configuration</h3>',4),s=(0,n.Uk)("How to use device type specific configuration"),o=(0,n.uE)('<ul><li><code>simulated_brightness</code>: Set to <code>true</code> to simulate a <code>brightness</code> value (default: <code>false</code>). If this device provides a <code>brightness_move_up</code> or <code>brightness_move_down</code> action it is possible to specify the update interval and delta. This can be done by instead of specifying <code>true</code>:</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>color_temperature_move</code>, <code>color_move</code>, <code>brightness_stop</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>color_loop_set</code>, <code>enhanced_move_to_hue_and_saturation</code>, <code>recall_*</code>, <code>scene_*</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),d={},c=(0,a(83744).Z)(d,[["render",function(e,t){const a=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[i,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[s])),_:1})])]),o],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,n]of t)e[a]=n;return e}}}]);