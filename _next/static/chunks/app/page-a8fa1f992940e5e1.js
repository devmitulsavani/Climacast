(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6900:function(e,t,a){Promise.resolve().then(a.bind(a,1773))},1773:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var n=a(7437),s=a(2265),i=a(4741);a(5768),a(8694);var r=e=>{let{latitude:t,longitude:a,apiKey:r}=e,[l,o]=(0,s.useState)(null);if((0,s.useEffect)(()=>{(async()=>{try{let e=await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(t,"&lon=").concat(a,"&appid=").concat(r));if(!e.ok)throw Error("Unable to fetch weather data");let n=await e.json();o(n)}catch(e){console.error("Error fetching weather data:",e.message)}})()},[t,a,r]),!l)return(0,n.jsx)("p",{children:"Loading weather information..."});let c={dots:!1,infinite:!1,speed:500,slidesToShow:window.innerWidth>=768?6:4,slidesToScroll:window.innerWidth>=768?6:4,initialSlide:0},d=e=>({"01d":"clear-day","01n":"clear-night","02d":"partly-cloudy-day","02n":"partly-cloudy-night","03d":"cloudy","03n":"cloudy","04d":"broken-clouds","04n":"broken-clouds","09d":"rain","09n":"rain","10d":"rain","10n":"rain","11d":"thunderstorm","11n":"thunderstorm","13d":"snow","13n":"snow","50d":"mist","50n":"mist"})[e]||"unknown.png",m=l.list.slice(0,8).map(e=>{let t=new Date(1e3*e.dt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),a=e.weather[0].icon,s=e.main.temp-273.15;return(0,n.jsxs)("div",{className:"flex items-center justify-between flex-col",children:[(0,n.jsx)("span",{className:"text-white sm:text-primary text-sm md:text-base font-semibold",children:t}),(0,n.jsx)("img",{src:"/icons/".concat(d(a),".png"),alt:"weather",className:"w-10 2xl:w-12 mt-2 mb-2"}),(0,n.jsx)("span",{className:"font-bold",children:"".concat(Math.round(s),"\xb0C")})]},e.dt)});return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.Z,{...c,children:m.map(e=>(0,n.jsx)("div",{children:e},e.key))})})},l=e=>{let{latitude:t,longitude:a,apiKey:i}=e,[r,l]=(0,s.useState)(null);if((0,s.useEffect)(()=>{(async()=>{let e="https://api.openweathermap.org/data/2.5/forecast?lat=".concat(t,"&lon=").concat(a,"&appid=").concat(i,"&units=metric");try{let t=await fetch(e),a=await t.json();l(a)}catch(e){console.error("Error fetching forecast data:",e)}})()},[t,a,i]),!r)return(0,n.jsx)("p",{children:"Loading forecast information..."});let o=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],c=e=>({"01d":"clear-day.png","01n":"clear-night.png","02d":"partly-cloudy-day.png","02n":"partly-cloudy-night.png","03d":"cloudy.png","03n":"cloudy-night.png","04d":"overcast.png","04n":"overcast-night.png","09d":"rain.png","09n":"rain-night.png","10d":"rain-day.png","10n":"rain-night.png","11d":"thunderstorm.png","11n":"thunderstorm-night.png","13d":"snow.png","13n":"snow-night.png","50d":"mist.png","50n":"mist-night.png"})[e]||"unknown.png",d=r.list.filter(e=>e.dt_txt.includes("12:00:00")).slice(1,7).map((e,t)=>{let a=o[new Date(1e3*e.dt).getDay()],s=e.main.temp,i=e.weather[0].icon;return(0,n.jsx)("div",{className:"w-full md:w-1/2 px-3 pb-4",children:(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("span",{className:"text-white sm:text-primary w-16 truncate text-lg",children:a}),(0,n.jsx)("img",{className:"w-7",src:"/icons/".concat(c(i)),alt:"weather"}),(0,n.jsx)("span",{className:"text-xl opacity-60",children:"".concat(Math.round(s),"\xb0")}),(0,n.jsx)("span",{className:"w-32 h-2 rounded-full bg-white sm:bg-primary bg-opacity-20 relative after:absolute after:w-16 after:left-[20%] after:inset-y-0 after:bg-gradient-to-r after:from-orange-300 after:to-orange-500 after:rounded-full"}),(0,n.jsx)("span",{className:"text-xl",children:"".concat(Math.round(s+10),"\xb0")})]})},t)});return(0,n.jsxs)("div",{className:"bg-white backdrop-blur-sm p-5 rounded-3xl bg-opacity-15 mt-5",children:[(0,n.jsx)("h4",{className:"text-xl text-white sm:text-primary font-normal border-b border-opacity-10 pb-2",children:"6-Day Forecast"}),(0,n.jsx)("div",{className:"flex flex-wrap font-medium text-lg -mx-3 mt-4 -mb-4",children:d})]})},o=e=>{let{latitude:t,longitude:a,apiKey:i}=e,[o,c]=(0,s.useState)(null);if((0,s.useEffect)(()=>{(async()=>{let e="https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(a,"&appid=").concat(i,"&units=metric");try{let t=await fetch(e),a=await t.json();c(a)}catch(e){console.error("Error fetching weather data:",e)}})()},[t,a,i]),!o)return(0,n.jsx)("p",{children:"Loading weather information..."});let d=o.weather[0].description,m=o.main.temp,x="with Heavy Rain";return x=d.includes("rain")?"with Rain":d.includes("thunderstorm")?"with Thunderstorms":d.includes("drizzle")?"with Drizzle":d.includes("snow")?"with Snowfall":d.includes("clear")?"and Clear Skies":d.includes("clouds")?"with Cloudy Conditions":d.includes("mist")||d.includes("fog")?"with Mist/Fog":d.includes("cold")?"and very Cold":d.includes("hot")||m>30?"with Heavy Warmth":d.includes("wind")?"with Strong Winds":"normal weather temperature",(0,n.jsxs)("div",{className:"w-full lg:w-1/2 max-w-[800px]",children:[(0,n.jsxs)("div",{className:"hidden sm:block",children:[(0,n.jsx)("h1",{className:"text-[60px] 2xl:text-[100px] font-medium italic leading-[60px] 2xl:leading-[100px]",children:d}),(0,n.jsx)("h2",{className:"text-4xl 2xl:text-5xl",children:"".concat(x)}),(0,n.jsx)("p",{className:"max-w-[600px] mt-6 2xl:mt-11 text-lg 2xl:text-xl",children:'"Stay tuned for localized updates on '.concat(d.toLowerCase(),' conditions. Our app provides real-time information to keep you informed and safe."')})]}),(0,n.jsx)("div",{className:"bg-white backdrop-blur-sm p-5 rounded-3xl bg-opacity-15 mt-8 2xl:mt-14 max-w-max",children:(0,n.jsx)(r,{latitude:t,longitude:a,apiKey:i})}),(0,n.jsx)(l,{latitude:t,longitude:a,apiKey:i})]})},c=e=>{let{latitude:t,longitude:a,apiKey:i}=e,[r,l]=(0,s.useState)(null);if((0,s.useEffect)(()=>{(async()=>{let e="https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(a,"&appid=").concat(i,"&units=metric");try{let t=await fetch(e),a=await t.json();l(a)}catch(e){console.error("Error fetching weather data:",e)}})()},[t,a,i]),!r)return(0,n.jsx)("p",{children:"Loading weather information..."});r.weather[0].main;let o=Math.round(r.main.temp),c=o>30;return(0,n.jsx)("div",{className:"px-2 sm:px-4 w-1/2",children:(0,n.jsxs)("div",{className:"w-full h-full bg-white bg-opacity-50 rounded-3xl p-5 border-[#E4E4E4] border-2 text-white sm:text-primary",children:[(0,n.jsxs)("span",{className:"font-medium italic flex items-center text-base",children:[(0,n.jsx)("svg",{className:"mr-2 brightness-0 invert sm:brightness-100 sm:invert-0",width:"18",height:"16",viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M2.23077 1V9.75C2.23077 10.2141 2.42527 10.6592 2.7715 10.9874C3.11772 11.3156 3.58729 11.5 4.07692 11.5H5.92308M2.23077 1H1M2.23077 1H15.7692M5.92308 11.5H12.0769M5.92308 11.5L5.10256 13.8333M15.7692 1H17M15.7692 1V9.75C15.7692 10.2141 15.5747 10.6592 15.2285 10.9874C14.8823 11.3156 14.4127 11.5 13.9231 11.5H12.0769M12.0769 11.5L12.8974 13.8333M5.10256 13.8333H12.8974M5.10256 13.8333L4.69231 15M12.8974 13.8333L13.3077 15M5.30769 8L7.76923 5.66667L9.53169 7.33733C10.3598 6.21056 11.4387 5.26986 12.6923 4.58167",stroke:"#0077B6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})," AVETAGES"]}),(0,n.jsxs)("span",{className:"font-medium text-5xl 2xl:text-6xl italic block mt-4 ".concat(c?"text-red-500":"text-blue-500"),children:[o,"\xb0"]}),(0,n.jsx)("span",{className:"text-sm leading-4 max-w-28 mt-1 block mb-4",children:c?"Above average daily high":"Below average daily high"}),(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("span",{className:"font-medium",children:"Today"}),(0,n.jsxs)("span",{className:"font-bold",children:["H:",o,"\xb0"]})]}),(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("span",{className:"font-medium",children:"Average"}),(0,n.jsxs)("span",{className:"font-bold",children:["H:",30,"\xb0"]})]})]})})},d=e=>{let{latitude:t,longitude:a,apiKey:i}=e,[r,l]=(0,s.useState)(null);if((0,s.useEffect)(()=>{(async()=>{let e="https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(a,"&appid=").concat(i,"&units=metric");try{let t=await fetch(e),a=await t.json();l(a)}catch(e){console.error("Error fetching location data:",e)}})()},[t,a,i]),!r)return(0,n.jsx)("p",{children:"Loading location information..."});let o=r.name;return(0,n.jsxs)("div",{className:"hidden sm:block text-left",children:[(0,n.jsxs)("h2",{className:"text-2xl 2xl:text-4xl font-medium mt-10",children:[o," City"]}),(0,n.jsx)("p",{className:"max-w-[600px] mt-2 text-lg 2xl:text-xl",children:"The air quality is generally acceptable for most individuals. However, groups may experience minor to symptoms from long-term exposure."})]})},m=e=>{let{apiKey:t,latitude:a,longitude:i}=e,[r,l]=(0,s.useState)(null),[o,m]=(0,s.useState)(!0),[x,h]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=async()=>{let e="https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(i,"&appid=").concat(t,"&units=metric");try{let t=await fetch(e),a=await t.json();l(a),m(!1)}catch(e){console.error("Error fetching weather data:",e),m(!1),h(!0)}};a&&i&&e()},[t,a,i]),(0,n.jsxs)("div",{className:"text-center",children:[o&&(0,n.jsx)("p",{children:"Loading..."}),!o&&r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{className:"text-3xl 2xl:text-4xl font-medium",children:r.name}),(0,n.jsxs)("h1",{className:"pl-16 sm:pl-0 text-[150px] 2xl:text-[200px] leading-[150px] 2xl:leading-[200px] font-medium drop-shadow-[6px_12px_0px_rgba(0,0,0,0.35)] mb-4",children:[Math.round(r.main.temp),"\xb0"]}),(0,n.jsx)("h3",{className:"text-xl 2xl:text-2xl font-bold",children:r.weather[0].description}),(0,n.jsxs)("h3",{className:"text-2xl 2xl:text-3xl mt-1",children:["H:",Math.round(r.main.temp_max),"\xb0  L:",Math.round(r.main.temp_min),"\xb0"]})]}),!o&&x&&(0,n.jsx)("p",{children:"Enable your location, please!"}),(0,n.jsxs)("div",{className:"mt-10 text-left",children:[(0,n.jsxs)("div",{className:"flex flex-wrap -mx-2 sm:-mx-4",children:[(0,n.jsx)(c,{latitude:a,longitude:i,apiKey:t}),(0,n.jsx)("div",{className:"px-2 sm:px-4 w-1/2",children:(0,n.jsxs)("div",{className:"w-full h-full bg-white bg-opacity-50 rounded-3xl p-5 border-[#E4E4E4] border-2 text-white sm:text-primary",children:[(0,n.jsxs)("span",{className:"font-medium italic flex items-center text-base",children:[(0,n.jsx)("svg",{className:"mr-2 brightness-0 invert sm:brightness-100 sm:invert-0",width:"18",height:"16",viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M2.23077 1V9.75C2.23077 10.2141 2.42527 10.6592 2.7715 10.9874C3.11772 11.3156 3.58729 11.5 4.07692 11.5H5.92308M2.23077 1H1M2.23077 1H15.7692M5.92308 11.5H12.0769M5.92308 11.5L5.10256 13.8333M15.7692 1H17M15.7692 1V9.75C15.7692 10.2141 15.5747 10.6592 15.2285 10.9874C14.8823 11.3156 14.4127 11.5 13.9231 11.5H12.0769M12.0769 11.5L12.8974 13.8333M5.10256 13.8333H12.8974M5.10256 13.8333L4.69231 15M12.8974 13.8333L13.3077 15M5.30769 8L7.76923 5.66667L9.53169 7.33733C10.3598 6.21056 11.4387 5.26986 12.6923 4.58167",stroke:"#0077B6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})," PRESSURE"]}),(0,n.jsx)("img",{src:"/pressure.svg",alt:"pressure",className:"w-full mt-4 brightness-0 invert sm:brightness-100 sm:invert-0"})]})})]}),(0,n.jsx)(d,{latitude:a,longitude:i,apiKey:t})]})]})};function x(){let[e,t]=(0,s.useState)(null),[a,i]=(0,s.useState)(!1);(0,s.useEffect)(()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{t({latitude:e.coords.latitude,longitude:e.coords.longitude})},e=>{console.error("Error getting user location:",e),i(!0)}):(console.error("Geolocation is not supported by this browser."),i(!0))},[]);let r="442df570b3a5eec522a2caf0fcaa8520";return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("main",{className:"px-4 sm:px-8 pt-6 pb-10 lg:h-[calc(100%-96px)] flex flex-wrap items-end justify-between",children:[(0,n.jsx)("div",{className:"w-full lg:w-1/2 max-w-[500px] sm:order-1 pt-24 sm:pt-0",children:e&&(0,n.jsx)(m,{latitude:e.latitude,longitude:e.longitude,apiKey:r})}),e&&(0,n.jsx)(o,{latitude:e.latitude,longitude:e.longitude,apiKey:r})]})})}}},function(e){e.O(0,[562,971,938,744],function(){return e(e.s=6900)}),_N_E=e.O()}]);