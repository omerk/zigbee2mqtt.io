"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[49674],{94356:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-5bab7dc0",path:"/devices/929002966401.html",title:"Philips 929002966401 control via MQTT",lang:"en-US",frontmatter:{title:"Philips 929002966401 control via MQTT",description:"Integrate your Philips 929002966401 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Power-on behavior",slug:"power-on-behavior",children:[]},{level:3,title:"Device type specific configuration",slug:"device-type-specific-configuration",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Light",slug:"light",children:[]},{level:3,title:"Effect (enum)",slug:"effect-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/929002966401.md",git:{updatedTime:1635970402e3}}},30809:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Q});var a=o(66252);const n=(0,a.uE)('<h1 id="philips-929002966401" tabindex="-1"><a class="header-anchor" href="#philips-929002966401" aria-hidden="true">#</a> Philips 929002966401</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>929002966401</td></tr><tr><td>Vendor</td><td>Philips</td></tr><tr><td>Description</td><td>Hue White &amp; Color Ambiance Surimu square panel</td></tr><tr><td>Exposes</td><td>light (state, brightness, color_temp, color_temp_startup, color_xy), effect, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/929002966401.jpg" alt="Philips 929002966401"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Factory resetting a Hue bulb can be accomplished in 5 ways. After resetting the bulb will automatically connect.</p><h4 id="touchlink-factory-reset" tabindex="-1"><a class="header-anchor" href="#touchlink-factory-reset" aria-hidden="true">#</a> Touchlink factory reset</h4>',6),s=(0,a.Uk)("See "),i=(0,a.Uk)("Touchlink"),r=(0,a._)("h4",{id:"hue-bridge",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#hue-bridge","aria-hidden":"true"},"#"),(0,a.Uk)(" Hue bridge")],-1),l=(0,a._)("p",null,"When the bulb is still connected to the Hue bridge, you can simply factory reset the bulb by removing it from the bridge via the Hue app. Orphaned bulbs (configured to connect to a non-existing Zigbee network) can be adopted by a Hue bridge by entering the 6 character serial number in the Philips Hue app.",-1),c=(0,a._)("h4",{id:"hue-dimmer-switch",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#hue-dimmer-switch","aria-hidden":"true"},"#"),(0,a.Uk)(" Hue dimmer switch")],-1),u=(0,a.Uk)("With "),d=(0,a.Uk)("one"),p=(0,a.Uk)(" of the "),h=(0,a.Uk)("two"),m=(0,a.Uk)(" Hue Dimmer switches it is possible to put the bulbs into a factory reset."),b=(0,a._)("ol",null,[(0,a._)("li",null,"Power-supply the bulb"),(0,a._)("li",null,"Bring the dimmer switch next to the bulb, as close as possible"),(0,a._)("li",null,"Hold the I/On and 0/Off button pressed simultaneously for 10 to 12 seconds until…"),(0,a._)("li",null,"The bulb flashes a couple of times. Don't release the buttons until the last flash + a safety second"),(0,a._)("li",null,"Switch the bulb off and on again: it can now be paired again.")],-1),g=(0,a.Uk)("See also the "),f={href:"https://www.youtube.com/watch?v=qvlEAELiJKs",target:"_blank",rel:"noopener noreferrer"},k=(0,a.Uk)("VIDEO: Factory reset a Hue bulb with Hue dimmer switch"),q=(0,a.Uk)("."),_=(0,a._)("h4",{id:"bluetooth-if-supported-by-device",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#bluetooth-if-supported-by-device","aria-hidden":"true"},"#"),(0,a.Uk)(" Bluetooth (if supported by device)")],-1),v=(0,a.Uk)("Install the Philips Hue Bluetooth app for "),w={href:"https://play.google.com/store/apps/details?id=com.signify.hue.blue",target:"_blank",rel:"noopener noreferrer"},y=(0,a.Uk)("Android"),E=(0,a.Uk)(" or "),T={href:"https://apps.apple.com/us/app/philips-hue-bluetooth/id1456604186",target:"_blank",rel:"noopener noreferrer"},x=(0,a.Uk)("iOS"),U=(0,a.Uk)(". You can use the app to trigger a factory reset on a paired light. (Note: The light will only be in bluetooth pairing mode for a couple of minutes after power-on)"),N=(0,a._)("h4",{id:"tradfri-remote-control",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#tradfri-remote-control","aria-hidden":"true"},"#"),(0,a.Uk)(" TRADFRI remote control")],-1),A=(0,a.Uk)("This may also be possible with the "),L={href:"https://www.ikea.com/us/en/images/products/tradfri-remote-control__0489469_PE623665_S4.JPG",target:"_blank",rel:"noopener noreferrer"},F=(0,a.Uk)("Tradfri Remote Control"),I=(0,a.Uk)(" by pressing and holding the reset button on the bottom of the remote (next to the battery). "),D={href:"https://github.com/Koenkk/zigbee2mqtt/issues/296#issuecomment-416923751",target:"_blank",rel:"noopener noreferrer"},R=(0,a.Uk)("This may not always work, even if the Hue bulb starts flashing"),M=(0,a.Uk)("."),Y=(0,a._)("h3",{id:"power-on-behavior",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#power-on-behavior","aria-hidden":"true"},"#"),(0,a.Uk)(" Power-on behavior")],-1),P=(0,a.Uk)("This device allows you to set the power-on behavior. Note that this requires at least November/December '18 firmware update of the device. Send a MQTT command to "),z=(0,a._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/set",-1),H=(0,a.Uk)(" with the following payload."),W=(0,a.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string">&quot;hue_power_on_behavior&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>          <span class="token comment">// default, on, off, recover</span>\n    <span class="token string">&quot;hue_power_on_brightness&quot;</span><span class="token operator">:</span> <span class="token number">125</span><span class="token punctuation">,</span>         <span class="token comment">// same values as brightness</span>\n    <span class="token string">&quot;hue_power_on_color_temperature&quot;</span><span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span>  <span class="token comment">// same values as color_temp</span>\n    <span class="token string">&quot;hue_power_on_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0000FF&quot;</span>         <span class="token comment">// color in hex notation, e.g. #0000FF = blue</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><table><thead><tr><th>Attribute Value</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>reset to factory default value</td></tr><tr><td>on</td><td>bulb on after power loss with configured brightness, color-temperature and color</td></tr><tr><td>off</td><td>bulb off after power loss</td></tr><tr><td>recover</td><td>last running state after power loss</td></tr></tbody></table><p>Rules:</p><ul><li><code>hue_power_on_behavior</code> value always has to be provided</li><li><code>hue_power_on_brightness</code>, <code>hue_power_on_color_temperature</code> and <code>hue_power_on_color</code> can only be provided when <code>hue_power_on_behavior</code> = <code>on</code></li><li><code>hue_power_on_color_temperature</code> and <code>hue_power_on_color</code> cannot be provided together, only one can be set</li><li>When setting <code>hue_power_on_behavior</code> = <code>on</code>, any not provided values will be reset to their factory defaults</li></ul><p>Note: if <code>hue_power_on_behavior</code> is set to <code>off</code>, then the only way to turn the bulb on will be through a paired smart device (see pairing above). You will NOT be able to turn the bulb on by sequentially switching power on and off.</p><h3 id="device-type-specific-configuration" tabindex="-1"><a class="header-anchor" href="#device-type-specific-configuration" aria-hidden="true">#</a> Device type specific configuration</h3>',6),O=(0,a.Uk)("How to use device type specific configuration"),V=(0,a.uE)('<ul><li><p><code>color_sync</code>: Synchronizes the color values in the state, e.g. if the state contains <code>color_temp</code> and <code>color.xy</code> and the <code>color_temp</code> is set, <code>color.xy</code> will be updated to match the <code>color_temp</code>. (default: <code>true</code>)</p></li><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). Note that this value is overridden if a <code>transition</code> value is present in the MQTT command payload.</p></li><li><p><code>hue_correction</code>: (optional) Corrects hue values based on a correction map for matching color rendition to other lights. Provide a minimum of 2 data sets in the correction map. To build a map:</p><ul><li>choose one of your other lights to be the color reference</li><li>send a sample color to both lights (reference and non-reference)</li><li>modify hue value for non-reference light until it color matches the reference light</li><li>take note of the in and out values, where <ul><li><code>in</code> is the hue value you sent to your reference light</li><li><code>out</code> is the hue value you had to dial your non-reference light to</li></ul></li><li>repeat with a few other sample colors (4-5 should suffice)</li></ul><p><strong>Example correction map:</strong></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">hue_correction</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">in</span><span class="token punctuation">:</span> <span class="token number">28</span>\n      <span class="token key atrule">out</span><span class="token punctuation">:</span> <span class="token number">45</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">in</span><span class="token punctuation">:</span> <span class="token number">89</span>\n      <span class="token key atrule">out</span><span class="token punctuation">:</span> <span class="token number">109</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">in</span><span class="token punctuation">:</span> <span class="token number">184</span>\n      <span class="token key atrule">out</span><span class="token punctuation">:</span> <span class="token number">203</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">in</span><span class="token punctuation">:</span> <span class="token number">334</span>\n      <span class="token key atrule">out</span><span class="token punctuation">:</span> <span class="token number">318</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li></ul><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',2),S=(0,a.Uk)("This device supports OTA updates, for more information see "),C=(0,a.Uk)("OTA updates"),B=(0,a.Uk)("."),j=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>color_temp</code>, <code>color_temp_startup</code>, <code>color_xy</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li><li><code>color_temp</code>: To control the color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color_temp&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>153</code> and <code>500</code>, the higher the warmer the color. To read the color temperature send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color_temp&quot;: &quot;&quot;}</code>. Besides the numeric values the following values are accepected: <code>coolest</code>, <code>cool</code>, <code>neutral</code>, <code>warm</code>, <code>warmest</code>.</li><li><code>color_temp_startup</code>: To set the startup color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color_temp_startup&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>153</code> and <code>500</code>, the higher the warmer the color. To read the startup color temperature send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color_temp_startup&quot;: &quot;&quot;}</code>. Besides the numeric values the following values are accepected: <code>coolest</code>, <code>cool</code>, <code>neutral</code>, <code>warm</code>, <code>warmest</code>, <code>previous</code>.</li><li><code>color_xy</code>: To control the XY color (CIE 1931 color space) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color&quot;: {&quot;x&quot;: X_VALUE, &quot;y&quot;: Y_VALUE}}</code> (e.g. <code>{&quot;color&quot;:{&quot;x&quot;:0.123,&quot;y&quot;:0.123}}</code>). To read the XY color send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color&quot;:{&quot;x&quot;:&quot;&quot;,&quot;y&quot;:&quot;&quot;}}</code>. Alternatively it is possible to set the XY color via RGB: <ul><li><code>{&quot;color&quot;: {&quot;r&quot;: R, &quot;g&quot;: G, &quot;b&quot;: B}}</code> e.g. <code>{&quot;color&quot;:{&quot;r&quot;:46,&quot;g&quot;:102,&quot;b&quot;:150}}</code></li><li><code>{&quot;color&quot;: {&quot;rgb&quot;: &quot;R,G,B&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;rgb&quot;:&quot;46,102,150&quot;}}</code></li><li><code>{&quot;color&quot;: {&quot;hex&quot;: HEX}}</code> e.g. <code>{&quot;color&quot;:{&quot;hex&quot;:&quot;#547CFF&quot;}}</code></li></ul></li></ul><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping" aria-hidden="true">#</a> Moving/stepping</h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span>\n  <span class="token string">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span>\n  <span class="token string">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span>\n  <span class="token string">&quot;color_temp_move&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving color temperature up at 60 units per second</span>\n  <span class="token string">&quot;color_temp_move&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stop&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving color temperature</span>\n  <span class="token string">&quot;color_temp_step&quot;</span><span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token comment">// Increase color temperature by 99</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="effect-enum" tabindex="-1"><a class="header-anchor" href="#effect-enum" aria-hidden="true">#</a> Effect (enum)</h3><p>Triggers an effect on the light (e.g. make light blink for a few seconds). Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;effect&quot;: NEW_VALUE}</code>. The possible values are: <code>blink</code>, <code>breathe</code>, <code>okay</code>, <code>channel_change</code>, <code>finish_effect</code>, <code>stop_effect</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16),G={},Q=(0,o(83744).Z)(G,[["render",function(e,t){const o=(0,a.up)("RouterLink"),G=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,(0,a._)("p",null,[s,(0,a.Wm)(o,{to:"/guide/usage/touchlink.html"},{default:(0,a.w5)((()=>[i])),_:1})]),r,l,c,(0,a._)("p",null,[u,(0,a.Wm)(o,{to:"/devices/324131092621.html"},{default:(0,a.w5)((()=>[d])),_:1}),p,(0,a.Wm)(o,{to:"/devices/929002398602.html"},{default:(0,a.w5)((()=>[h])),_:1}),m]),b,(0,a._)("p",null,[g,(0,a._)("a",f,[k,(0,a.Wm)(G)]),q]),_,(0,a._)("p",null,[v,(0,a._)("a",w,[y,(0,a.Wm)(G)]),E,(0,a._)("a",T,[x,(0,a.Wm)(G)]),U]),N,(0,a._)("p",null,[A,(0,a._)("a",L,[F,(0,a.Wm)(G)]),I,(0,a._)("a",D,[R,(0,a.Wm)(G)]),M]),Y,(0,a._)("p",null,[P,(0,a.Wm)(o,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-friendly-name-set"},{default:(0,a.w5)((()=>[z])),_:1}),H]),W,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(o,{to:"/guide/configuration/devices-groups.html"},{default:(0,a.w5)((()=>[O])),_:1})])]),V,(0,a._)("p",null,[S,(0,a.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[C])),_:1}),B]),j],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);