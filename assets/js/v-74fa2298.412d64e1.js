"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[3482],{12560:(e,s,n)=>{n.r(s),n.d(s,{data:()=>a});const a={key:"v-74fa2298",path:"/devices/HG06467.html",title:"Lidl HG06467 control via MQTT",lang:"en-US",frontmatter:{title:"Lidl HG06467 control via MQTT",description:"Integrate your Lidl HG06467 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-11-26T15:32:23.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Trigger effects",slug:"trigger-effects",children:[]},{level:3,title:"Device type specific configuration",slug:"device-type-specific-configuration",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Light",slug:"light",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/HG06467.md",git:{updatedTime:1635970402e3}}},3890:(e,s,n)=>{n.r(s),n.d(s,{default:()=>c});var a=n(66252);const t=(0,a.uE)('<h1 id="lidl-hg06467" tabindex="-1"><a class="header-anchor" href="#lidl-hg06467" aria-hidden="true">#</a> Lidl HG06467</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>HG06467</td></tr><tr><td>Vendor</td><td>Lidl</td></tr><tr><td>Description</td><td>Melinera smart LED string lights</td></tr><tr><td>Exposes</td><td>light (state, brightness, color_hs), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/HG06467.jpg" alt="Lidl HG06467"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Factory reset the LED string by holding the &quot;F&quot; button for 5 seconds. When you let go of the button the LED string should blink slowly After resetting the LED string will automatically connect.</p><p>While pairing, keep the string close to the adapter.</p><h3 id="trigger-effects" tabindex="-1"><a class="header-anchor" href="#trigger-effects" aria-hidden="true">#</a> Trigger effects</h3><p>Controls the 16 build-in effects of the LED string. An effect expects 3 parameters: <code>speed</code>, <code>colors</code> and <code>effect</code>. To trigger an effect send a message to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;effect&quot;: {&quot;effect&quot;: EFFECT, &quot;speed&quot;: SPEED, &quot;colors&quot;: COLORS}}</code>. Description:</p><ul><li><code>SPEED</code> should be a number between 1 and 100.</li><li><code>COLORS</code> is an array of JSON objects containing <code>r</code>, <code>g</code>, <code>b</code>. Note: some effects support multiple colors</li><li><code>EFFECT</code> is a string, below is a list of possible values and the amount of colors it supports</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>|     effect             |     # colors    |\n|------------------------|-----------------|\n|     steady             |     1           |\n|     snow               |     1           |\n|     rainbow            |     0           |\n|     snake              |     6           |\n|     twinkle            |     2           |\n|     firework           |     2           |\n|     horizontal_flag    |     3           |\n|     waves              |     3           |\n|     updown             |     2           |\n|     vintage            |     1           |\n|     fading             |     1           |\n|     collide            |     1           |\n|     strobe             |     5           |\n|     sparkles           |     3           |\n|     carnaval           |     6           |\n|     glow               |     6           |\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h4 id="example-message-payload" tabindex="-1"><a class="header-anchor" href="#example-message-payload" aria-hidden="true">#</a> Example message payload</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;snake&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;speed&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;colors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;r&quot;</span><span class="token operator">:</span> <span class="token number">255</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;g&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;r&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;g&quot;</span><span class="token operator">:</span> <span class="token number">255</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;r&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;g&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token number">255</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="device-type-specific-configuration" tabindex="-1"><a class="header-anchor" href="#device-type-specific-configuration" aria-hidden="true">#</a> Device type specific configuration</h3>',13),o=(0,a.Uk)("How to use device type specific configuration"),p=(0,a.uE)('<ul><li><p><code>color_sync</code>: Synchronizes the color values in the state, e.g. if the state contains <code>color_temp</code> and <code>color.xy</code> and the <code>color_temp</code> is set, <code>color.xy</code> will be updated to match the <code>color_temp</code>. (default: <code>true</code>)</p></li><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). Note that this value is overridden if a <code>transition</code> value is present in the MQTT command payload.</p></li><li><p><code>hue_correction</code>: (optional) Corrects hue values based on a correction map for matching color rendition to other lights. Provide a minimum of 2 data sets in the correction map. To build a map:</p><ul><li>choose one of your other lights to be the color reference</li><li>send a sample color to both lights (reference and non-reference)</li><li>modify hue value for non-reference light until it color matches the reference light</li><li>take note of the in and out values, where <ul><li><code>in</code> is the hue value you sent to your reference light</li><li><code>out</code> is the hue value you had to dial your non-reference light to</li></ul></li><li>repeat with a few other sample colors (4-5 should suffice)</li></ul><p><strong>Example correction map:</strong></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">hue_correction</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">in</span><span class="token punctuation">:</span> <span class="token number">28</span>\n      <span class="token key atrule">out</span><span class="token punctuation">:</span> <span class="token number">45</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">in</span><span class="token punctuation">:</span> <span class="token number">89</span>\n      <span class="token key atrule">out</span><span class="token punctuation">:</span> <span class="token number">109</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">in</span><span class="token punctuation">:</span> <span class="token number">184</span>\n      <span class="token key atrule">out</span><span class="token punctuation">:</span> <span class="token number">203</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">in</span><span class="token punctuation">:</span> <span class="token number">334</span>\n      <span class="token key atrule">out</span><span class="token punctuation">:</span> <span class="token number">318</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>color_hs</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li><li><code>color_hs</code>: To control the hue/saturation (color) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color&quot;: {&quot;hue&quot;: HUE, &quot;saturation&quot;: SATURATION}}</code> (e.g. <code>{&quot;color&quot;:{&quot;hue&quot;:360,&quot;saturation&quot;:100}}</code>). To read the hue/saturation send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color&quot;:{&quot;hue&quot;:&quot;&quot;,&quot;saturation&quot;:&quot;&quot;}}</code>. Alternatively it is possible to set the hue/saturation via: <ul><li>HSB space (hue, saturation, brightness): <code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;b&quot;: B}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;b&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsb&quot;: &quot;H,S,B&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsb&quot;:&quot;360,100,100&quot;}}</code></li><li>HSV space (hue, saturation, brightness):<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;v&quot;: V}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;v&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsv&quot;: &quot;H,S,V&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsv&quot;:&quot;360,100,100&quot;}}</code></li><li>HSL space (hue, saturation, lightness)<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;l&quot;: L}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;l&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsl&quot;: &quot;H,S,L&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsl&quot;:&quot;360,100,100&quot;}}</code></li></ul></li></ul><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping" aria-hidden="true">#</a> Moving/stepping</h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span>\n  <span class="token string">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span>\n  <span class="token string">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span>\n  <span class="token string">&quot;hue_move&quot;</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving hue up at 40 units per second, will endlessly loop (allowed value range: -255 till 255)</span>\n  <span class="token string">&quot;hue_step&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">90</span><span class="token punctuation">,</span> <span class="token comment">// Decrease hue by 90 (allowed value range: -255 till 255)</span>\n  <span class="token string">&quot;saturation_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">55</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving saturation down at -55 units per second (allowed value range: -255 till 255)</span>\n  <span class="token string">&quot;saturation_step&quot;</span><span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">,</span> <span class="token comment">// Increase saturation by 66 (allowed value range: -255 till 255)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15),l={},c=(0,n(83744).Z)(l,[["render",function(e,s){const n=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[t,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[o])),_:1})])]),p],64)}]])},83744:(e,s)=>{s.Z=(e,s)=>{for(const[n,a]of s)e[n]=a;return e}}}]);