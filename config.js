const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Faisal udas]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/0cbff7511475577ebf114.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Muskan love 💕" 


global.devs = "923037484167" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923112657705";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,9231126557705";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923037484167,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_43_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA5MSxcbiAgICAgICAgODksXG4gICAgICAgIDE5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODQsXG4gICAgICAgIDgwLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTcsXG4gICAgICAgIDY1LFxuICAgICAgICA0MSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM2LFxuICAgICAgICA5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDY0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgNTcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxLFxuICAgICAgICA1NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDksXG4gICAgICAgIDU1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODIsXG4gICAgICAgIDExLFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDkzLFxuICAgICAgICA1NixcbiAgICAgICAgNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY2LFxuICAgICAgICA0MixcbiAgICAgICAgMTE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDYwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc5LFxuICAgICAgICA1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMCtDNnJMTHYyRUxWamkwMlc5aXNMeTAwNlFKQ1VSaUdxM1VHV25NY0dlOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMzc0ODQxNjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY0RDFGMDdGODlBRkU0MzU5QzdCMjNDOUYwMEI1OUYzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTE0ODIzNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAzNzQ4NDE2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkVCNjNCREI4RUIwOTM3NzlDRjZEMzlBODE2NDhFNjNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMTQ4MjM2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBZYWs2NFlXU1BXeDdINFBjSWs4NXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWI1ZjhiY2QtNDE2YS00MWNmLWJkYzEtOTVmNzdhOGM4YTE3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMixcbiAgICAgIDYsXG4gICAgICA0MSxcbiAgICAgIDE2MCxcbiAgICAgIDExNixcbiAgICAgIDIzMCxcbiAgICAgIDIyOCxcbiAgICAgIDg3LFxuICAgICAgMCxcbiAgICAgIDE2OCxcbiAgICAgIDU1LFxuICAgICAgOTMsXG4gICAgICAxOTgsXG4gICAgICA4NixcbiAgICAgIDIwMixcbiAgICAgIDg4LFxuICAgICAgMTQzLFxuICAgICAgMjUwLFxuICAgICAgNDQsXG4gICAgICAyNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAyLFxuICAgICAgMjA0LFxuICAgICAgMzMsXG4gICAgICA0MSxcbiAgICAgIDExNCxcbiAgICAgIDIxMCxcbiAgICAgIDI0OCxcbiAgICAgIDE1MixcbiAgICAgIDE3MCxcbiAgICAgIDEyNixcbiAgICAgIDM3LFxuICAgICAgMTQ3LFxuICAgICAgMTk0LFxuICAgICAgMjM3LFxuICAgICAgMTM0LFxuICAgICAgMjM4LFxuICAgICAgODQsXG4gICAgICAyMjYsXG4gICAgICAxNixcbiAgICAgIDU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkwzQldHQzhRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMzc0ODQxNjc6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJHWFMgQkFOS0lOR1wiLFxuICAgIFwibGlkXCI6IFwiOTA5NTkyNTM2NDczODM6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTZFM1pFR0VNUEcyclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWRE5LYldIaTNzQm5PVU94d21teFIrL0N4ejdOSlhMYUtNOEQ5dkIzbURnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRKTU53YTd2WVJCUmNIcTEzR2pka2JiaWlSaEdqUlZaUE5SaGVMYmg4Vzl2Y3VRQ1hjVmw4aGdPaXNsVG1uUGpzTkxXc0tYdGcyVU55YlF2ejl6Q0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVPQlBZOTZwc1hBSDE5eEhkd2dpWGx2dmNRSkRpY3lWSCtuckthSmZFbngvWmdueEYxUjZCYWNrRlRsZ2Y3U3dNeGNiN1pkVXlTdEtjUGtWR0NSZ0JRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAzNzQ4NDE2NzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTQ4MjI5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUGh3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaHcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFM3JGZS9FNlNOZ2FVWDg3eUc0STNJZFFDbVF3eHJ6d2UyWi9pSzdSRVJvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDc3ODg1NTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ muskan』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Faisal",
  ownername:process.env.OWNER_NAME|| "muskan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
