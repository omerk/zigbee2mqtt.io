"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[48498],{91395:(e,t,i)=>{i.r(t),i.d(t,{data:()=>r});const r={key:"v-2dda629c",path:"/devices/EFEKTA_ePWS.html",title:"Custom devices (DiY) EFEKTA_ePWS control via MQTT",lang:"en-US",frontmatter:{title:"Custom devices (DiY) EFEKTA_ePWS control via MQTT",description:"Integrate your Custom devices (DiY) EFEKTA_ePWS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Device type specific configuration",slug:"device-type-specific-configuration",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Soil_moisture (numeric)",slug:"soil-moisture-numeric",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/EFEKTA_ePWS.md",git:{updatedTime:1635970402e3}}},88946:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var r=i(66252);const o=(0,r._)("h1",{id:"custom-devices-diy-efekta-epws",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#custom-devices-diy-efekta-epws","aria-hidden":"true"},"#"),(0,r.Uk)(" Custom devices (DiY) EFEKTA_ePWS")],-1),a=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th"),(0,r._)("th")])],-1),l=(0,r._)("tr",null,[(0,r._)("td",null,"Model"),(0,r._)("td",null,"EFEKTA_ePWS")],-1),d=(0,r._)("tr",null,[(0,r._)("td",null,"Vendor"),(0,r._)("td",null,"Custom devices (DiY)")],-1),n=(0,r._)("td",null,"Description",-1),c={href:"https://efektalab.com/epws102",target:"_blank",rel:"noopener noreferrer"},u=(0,r.Uk)("Plant wattering sensor with e-ink display"),s=(0,r._)("tr",null,[(0,r._)("td",null,"Exposes"),(0,r._)("td",null,"soil_moisture, battery, temperature, linkquality")],-1),h=(0,r._)("tr",null,[(0,r._)("td",null,"Picture"),(0,r._)("td",null,[(0,r._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EFEKTA_ePWS.jpg",alt:"Custom devices (DiY) EFEKTA_ePWS"})])],-1),p=(0,r._)("h2",{id:"notes",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,r.Uk)(" Notes")],-1),m=(0,r._)("h3",{id:"device-type-specific-configuration",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#device-type-specific-configuration","aria-hidden":"true"},"#"),(0,r.Uk)(" Device type specific configuration")],-1),v=(0,r.Uk)("How to use device type specific configuration"),f=(0,r.uE)('<ul><li><code>temperature_precision</code>: Controls the precision of <code>temperature</code> values, e.g. <code>0</code>, <code>1</code> or <code>2</code>; default <code>2</code>. To control the precision based on the temperature value set it to e.g. <code>{30: 0, 10: 1}</code>, when temperature &gt;= 30 precision will be 0, when temperature &gt;= 10 precision will be 1. Precision will take into affect with next report of device.</li><li><code>temperature_calibration</code>: Allows to manually calibrate temperature values, e.g. <code>1</code> would add 1 degree to the temperature reported by the device; default <code>0</code>. Calibration will take into affect with next report of device.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="soil-moisture-numeric" tabindex="-1"><a class="header-anchor" href="#soil-moisture-numeric" aria-hidden="true">#</a> Soil_moisture (numeric)</h3><p>Measured soil moisture value. Value can be found in the published state on the <code>soil_moisture</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),_={},g=(0,i(83744).Z)(_,[["render",function(e,t){const i=(0,r.up)("OutboundLink"),_=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[o,(0,r._)("table",null,[a,(0,r._)("tbody",null,[l,d,(0,r._)("tr",null,[n,(0,r._)("td",null,[(0,r._)("a",c,[u,(0,r.Wm)(i)])])]),s,h])]),p,m,(0,r._)("p",null,[(0,r._)("em",null,[(0,r.Wm)(_,{to:"/guide/configuration/devices-groups.html"},{default:(0,r.w5)((()=>[v])),_:1})])]),f],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,r]of t)e[i]=r;return e}}}]);