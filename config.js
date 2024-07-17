const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DUDUU_MENDEZ²²¹-ᴍᴅ" 


global.devs = "255749750707" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255749750707";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255749750707";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_50_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDM3LFxuICAgICAgICAzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NixcbiAgICAgICAgMjI3LFxuICAgICAgICA4MixcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDU0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjksXG4gICAgICAgIDkwLFxuICAgICAgICAxOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk3LFxuICAgICAgICA2NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTQsXG4gICAgICAgIDMzLFxuICAgICAgICA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzgsXG4gICAgICAgIDI2LFxuICAgICAgICA0LFxuICAgICAgICAxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTksXG4gICAgICAgIDM5LFxuICAgICAgICAxODIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMixcbiAgICAgICAgMTYwLFxuICAgICAgICA3NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4LFxuICAgICAgICA4NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY1LFxuICAgICAgICAyNixcbiAgICAgICAgOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm8xSmc5bzBRUjd4M1JTQm41TWx2aU50TlN4eUlrbXlFSldaK1dMQ01vMHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImNmVUhyN3VjU3Z1cUg2OXZPOGliTGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTE0NjMwODQtNzBiYy00YjMwLThjNDctOGEyZDFhY2Q5NzNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDAsXG4gICAgICAzLFxuICAgICAgMTA5LFxuICAgICAgMTgsXG4gICAgICAyNDcsXG4gICAgICAxODMsXG4gICAgICAzOSxcbiAgICAgIDE0NSxcbiAgICAgIDEyMyxcbiAgICAgIDIyNCxcbiAgICAgIDIwNCxcbiAgICAgIDQwLFxuICAgICAgMjAwLFxuICAgICAgMTgsXG4gICAgICAxNTEsXG4gICAgICA0NixcbiAgICAgIDM0LFxuICAgICAgMjU1LFxuICAgICAgNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgODQsXG4gICAgICAxMTQsXG4gICAgICAyNDEsXG4gICAgICAxNDQsXG4gICAgICAxNixcbiAgICAgIDIyNyxcbiAgICAgIDE5MSxcbiAgICAgIDkyLFxuICAgICAgMTksXG4gICAgICAxNzIsXG4gICAgICAyMTYsXG4gICAgICA1NyxcbiAgICAgIDIzLFxuICAgICAgMjQ4LFxuICAgICAgMjEwLFxuICAgICAgMjA3LFxuICAgICAgMjE3LFxuICAgICAgNCxcbiAgICAgIDUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUxnM3JVRkVLM1QzYlFHR0FvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZRWR3MmFIUFdmd092ck1UQWFrdjBiVEZlWkRMTlNRMnlkQ05uRXZ1WUZZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInRmcVlscmF4cDRpZGNOZWR1VmdFcjlpSkZjaVVOc0RRZVNCajZXT3VielNZeC9xT0d5cmtOa1d4S291blBLekZxQnVuNm9FL2M3SmRudHh6aTA1MkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIldyNHlPK0tMWDFPR0Z3WWZYNjA4bVFoY1FNTVo4Q3ZUNlo0d0Q4N1JWYTRzYkRuaUdSL0V3L2trSkY3eWx4Q1FMc2dZa2FiaGIrNUliT2Fmc3BOV0NRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzQ5NzUwNzA3OjcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRFVEVVVfTUVOREVaXCIsXG4gICAgXCJsaWRcIjogXCIyNjI2NTkxMjc2NDAxNjk6NzFAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3NDk3NTA3MDc6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTk5MDI0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUGg0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaDAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuN2I5dEhmVEhnWUFYOHlhZUNwQlJmak1mMmlkQ1FDZ3doUXFmMENZYnhFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyNzEzMzExMzZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaDEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJITldEaDh1WXE1TEd2NnNTcTZyTkk4QndpUFJIUVdUbmpoSTc2ZTZNeGM4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBoMi5qc29uIjogIntcImtleURhdGFcIjpcImY3dTQ2QjEzZ0R2N29wdG5KWE9LRk5LdFFhTDZ3cVhtVUo1YnU2dVVQRGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcyMixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBoMy5qc29uIjogIntcImtleURhdGFcIjpcIjJqL3pzaWI1NlNMemljbGZuTHVZaGVEWFE5WmVDY2xUQ2RmM29SWEMrbW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcyMixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaDQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkMVQ2TGVyOENaM2YzTTd1dlVucXNmZEJuem5PMGRybFhkVHRtWkdXcXdrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MjIsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGg1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVzZHV2Q4Vlh4UXNKRXZ5TWJzZ3dqNUtucHJMcjY2RHNEYlIzeHpieGlzbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDU0ODc4NzIyLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwxLDVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBoNi5qc29uIjogIntcImtleURhdGFcIjpcInMyV2QyeWlLZVZtaHlLV0cvR3dFdFEydGxFSjBLdU9hZm9aNmRBa3dFNFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcyMixcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaDcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwUUYzRDZiZGJnQzczalhQUVBmbEFyMkpucjFjeEhBcXlFTjVxQ3VqczlJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MjIsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGg4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWWh2TytyQXpmNW5IVWova2Rwd1Q4QnJSSzgyZGNuV1NtVEZuTjFVZklDdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDU0ODc4NzIyLFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbMCw1LDldfSxcInRpbWVzdGFtcFwiOlwiMTcyMTE5ODk4OTk2N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBoZC5qc29uIjogIntcImtleURhdGFcIjpcInY1T3IrYTY5cXV0c1VxZHhXd1FZeHppZ2J4MFNCRFo0b3FVd1hkWkMwelk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcxOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGhlLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSVZwbERvc285aGkzUHZ0a1ZLR3k3L0VHczlNTGNWc1ltekJzYU1xQXZaVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDU0ODc4NzE4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE1ODUxMDIxMjYzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGhmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNVlGTnpjamh6T0tXSTNtVE11eWFqaGVaZzdNeFd1YlYvV0dEcmdOTEc2OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDU0ODc4NzE5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaGcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzL1UrZ1BWWmtubE1DRzZNQTVYYTMrSDJKRlBpODdjUmRhOU9LWXBXaTBRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MTksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGhoLmpzb24iOiAie1wia2V5RGF0YVwiOlwiR2QwUHdOSUFURU5CSVVLY2pVNnNuMk1ZakpqcnFhRXBQSmZrOHptU3h6ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDU0ODc4NzE5LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaGkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhMW50dGxQcHhETWhxWVFkdTJnb3RHT2RsRElkQ0lsMHNDTHVpYkVVYUlzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MTksXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBoai5qc29uIjogIntcImtleURhdGFcIjpcIld2YUhna2lIeERSMWsxd0pVWmJ3QzBzakhydmFCYkZIZFJmWWhtVTd4L1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcxOSxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGhrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRkU2Zm54Zzh6MGRINkdDYUNXREJKcUZvMm44VCt6YUxzdU5UVU02Rktqbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDU0ODc4NzE5LFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCw2XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaGwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyemdiOVc5Znd6QlFqcGpWQTlQU0IwMkNCU3VhR0lQN3BPWkRicDdMQW9BPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MTksXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg3ODU4MzU2NzJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaG0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3MWdLYWk2SUJxMm8yY2FDdzluM0EyNVk2Vk96YlRqYkVxTE9DcHZCc3dBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBobi5qc29uIjogIntcImtleURhdGFcIjpcImU5ejdjb1VMeWtianpKK2ZKSGtoTWVkTW9WZnI5d25TaS96RmoyQUhSWnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcyMCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBoby5qc29uIjogIntcImtleURhdGFcIjpcIktDNTU4VmdBS1k2eU9wVXUyTVczSGo4RHIzVHZpbnVvbTQ4MTQ3cU9jakU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcyMCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaHAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzUWhaa0lGV29hUGNtRUJuTkkxT2YvcWhRTHR5M1pHY3ZJRCtyNUFLUWhBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MjAsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGhxLmpzb24iOiAie1wia2V5RGF0YVwiOlwibHNUU3pScTZtUlp4Ri9nOHE0OHdqTkJJZ2xEcXVQdWtYM2pWSjJmcytFVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDU0ODc4NzIwLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwyLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBoci5qc29uIjogIntcImtleURhdGFcIjpcIk1ldWF2eVA2MlRVNkx5UHRPQlc4d2I3cWhxRlJDeFlYRTdQSnVmekNVRzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcyMCxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGhzLmpzb24iOiAie1wia2V5RGF0YVwiOlwidGk2STFoK2FsYXAvS0NwZnhrWEtBRnFDSlZuVTQzUGZmZG0vdklWSmVHMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDU0ODc4NzIwLFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDddfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBodC5qc29uIjogIntcImtleURhdGFcIjpcIkI5ZUZCaEl2QWRDSnh2dXlCQ2dYTlV2cisrcFp5TXd6bmEwb0RCdDRFdk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcyMCxcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw3XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaHUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkL0Q5YTZ2VHRLNmkwUklnODlFVUNwUFE0bEVRcnZWZExVN2t3YzZFOU5rPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MjAsXCJjdXJyZW50SW5kZXhcIjo5LFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBodi5qc29uIjogIntcImtleURhdGFcIjpcIldEM2RRUk1XWFM2ZlprTHN2eTVwRUJpb25LNUtVNmY2YWMzL0VoN29wY1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcyMCxcImN1cnJlbnRJbmRleFwiOjExLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEwLDExXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaHcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2djdIZy9wMTA1Vlo5dUVBNDE2S1Z6S0poNmZVWU1TM1pRUithY0lqQitJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MjAsXCJjdXJyZW50SW5kZXhcIjoxMSxcImRldmljZUluZGV4ZXNcIjpbMCwxMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGh4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwialpnWTBWaWVuWnZvczlSOGtITTV2YVJ4Q0V0UEpUbzZBS0QycG5nZVpWUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDU0ODc4NzIwLFwiY3VycmVudEluZGV4XCI6MTIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMTJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBoeS5qc29uIjogIntcImtleURhdGFcIjpcInowd3k0VlkxQlg5bFF4Q20vWW5HQXFIUGtWaE10RTgwU0VGZ3BmdXFhbXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcyMCxcImN1cnJlbnRJbmRleFwiOjEyLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyNjM2OTEzODZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaHouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJY2dyS1dqcVJtczZnamQxTDFiRlFwL2ltQndZR2Y5REh4a2tuNGtNRmZNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTQ4Nzg3MjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MENDEZ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
