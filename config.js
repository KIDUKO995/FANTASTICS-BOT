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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/71ce7bc2c1af81cbc7df7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DUDUU_MENDEZ²²¹-ᴍᴅ" 


global.devs = "255749750707" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255711737481";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255749750707";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_09_09_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDc4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTksXG4gICAgICAgIDkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzksXG4gICAgICAgIDc5LFxuICAgICAgICA2MixcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDExMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MixcbiAgICAgICAgMTMxLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAwLFxuICAgICAgICAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDg1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MCxcbiAgICAgICAgODEsXG4gICAgICAgIDQwLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDUzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQwLFxuICAgICAgICA1MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMixcbiAgICAgICAgMzMsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSb2x3clZKSW9McGpkQ0trbTBqd3NqK0FjZWxIRU5qUStuREFQNm1KVDhFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTcxMTczNzQ4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTgzMzM2RTJDMTgyMUM0OTA1NDEzOTZEM0VFOUY4OUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI1ODY1NzYwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzExNzM3NDgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3RTZCNzMzOUFCMzE3MjM5OUQwN0UwM0UyODIzODI4NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjU4NjU3NjBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieXZiSTNBeldRZmFOMGJSU3NOOEtQQVwiLFxuICBcInBob25lSWRcIjogXCJjZDgxZDMwZC0wNjhiLTQ4ZDgtOWRkYy1hYWViNTBhNWM1MzJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODMsXG4gICAgICA3MixcbiAgICAgIDExNSxcbiAgICAgIDI0NyxcbiAgICAgIDE2NSxcbiAgICAgIDE1MixcbiAgICAgIDExNCxcbiAgICAgIDExLFxuICAgICAgMzIsXG4gICAgICAyNDQsXG4gICAgICAyMDAsXG4gICAgICAxNSxcbiAgICAgIDE3MSxcbiAgICAgIDQ3LFxuICAgICAgMTI0LFxuICAgICAgMjQ2LFxuICAgICAgNTgsXG4gICAgICAxMixcbiAgICAgIDE4OSxcbiAgICAgIDIxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzUsXG4gICAgICAxMjMsXG4gICAgICAxMTQsXG4gICAgICAxNTQsXG4gICAgICAyMzMsXG4gICAgICA5NyxcbiAgICAgIDIxNSxcbiAgICAgIDgzLFxuICAgICAgNDIsXG4gICAgICAyMDMsXG4gICAgICAyMixcbiAgICAgIDEyMixcbiAgICAgIDE0NyxcbiAgICAgIDE3NSxcbiAgICAgIDIyMSxcbiAgICAgIDEwMSxcbiAgICAgIDEwLFxuICAgICAgMTI4LFxuICAgICAgNyxcbiAgICAgIDE0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUVDhTRlJCNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzExNzM3NDgxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOZGlkeSdzXCIsXG4gICAgXCJsaWRcIjogXCIyMDQxNzA0NDc1OTM3MDg6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdVA0YnNERUppKytyWUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5GU3lzWURTUEZWMkl5TDhIL2FtdUNIMlhJYXZxNWhOVUlOSnhvRkFBQWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSTQyVzZjc09ibUFZNUVtb1hwMUZNbVFBb1JkU3lja1RmVmJXQk5EVG42MFdKRWRWaDR1YnU4S21nK0gvWFVVTlEwMzJvajRSSTRDZkloMjdMS0thRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieFBpUjJCS3YreVN5STVTV3RlM1NMbXlQQXd5NGd4bVBxVkZBZmVERklTYXA3TEJWZEhyd1VYRzQ3OWRKSUlMWTd4MWphdXZXNGNES0NCTzAxZk92Q1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzExNzM3NDgxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1ODY1NzU3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQnNxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCc3EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaNDZVVk5lWjcwVm5VSTJPQzhhMmQ5ZkxYNC8veXBoczh5eG1ubTFieHBBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkzMDYyOTU2MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI1ODY1NzU4MzY5XCJ9Igp9"  // PUT your SESSION_ID  

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MENDEZ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • MENDEZ ᴛᴇᴄʜ』*\n youtube.com/@DUDUU_MENDEZ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FANTASTICS BOT",
  ownername:process.env.OWNER_NAME|| "Duduu_mendez",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-None-RMkn7loW3l2EmY3JV1pNT3BlbkFJOM2MSmCXkKhLFKg95Bdg",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FANTASTICS"  ).toUpperCase(),



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
