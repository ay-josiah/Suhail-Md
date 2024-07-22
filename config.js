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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,2348061413577,2348089895884";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349137920622";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_20_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE1LFxuICAgICAgICA5NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MixcbiAgICAgICAgODYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjksXG4gICAgICAgIDY2LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDM5LFxuICAgICAgICA4NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODAsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjksXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDYsXG4gICAgICAgIDQwLFxuICAgICAgICAzMixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA3OSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIzLFxuICAgICAgICA4NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc4LFxuICAgICAgICA0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAzMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMixcbiAgICAgICAgMTM4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQwLFxuICAgICAgICAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDY4LFxuICAgICAgICA4OCxcbiAgICAgICAgNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzLFxuICAgICAgICA4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTExLFxuICAgICAgICA5OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk1LFxuICAgICAgICAzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInVlSkxhdmNDSjEvZkNOeGIyd3RXdlpoa0VieWRhcGlNSlg4Y0NrQURSdmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZ4a09IZkluUllDQThXMnhoR1JzLUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTFmZDI0NTctODdiYi00NzZkLTg5NjUtOGI1MWZmOWNjYjYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0LFxuICAgICAgNTMsXG4gICAgICAxNzcsXG4gICAgICA4MCxcbiAgICAgIDI0NCxcbiAgICAgIDIxMyxcbiAgICAgIDE1MyxcbiAgICAgIDIwNSxcbiAgICAgIDc3LFxuICAgICAgMjIyLFxuICAgICAgMzIsXG4gICAgICAxMixcbiAgICAgIDc3LFxuICAgICAgMTYyLFxuICAgICAgNTEsXG4gICAgICA3MixcbiAgICAgIDczLFxuICAgICAgMTAxLFxuICAgICAgMjMwLFxuICAgICAgOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NixcbiAgICAgIDIyMCxcbiAgICAgIDIxMCxcbiAgICAgIDkwLFxuICAgICAgNzgsXG4gICAgICA4MixcbiAgICAgIDE0MixcbiAgICAgIDIzNSxcbiAgICAgIDExMyxcbiAgICAgIDE5OCxcbiAgICAgIDIxMSxcbiAgICAgIDIzOSxcbiAgICAgIDIzMyxcbiAgICAgIDE1MCxcbiAgICAgIDE2MCxcbiAgICAgIDE0NCxcbiAgICAgIDE3MCxcbiAgICAgIDkwLFxuICAgICAgMjA1LFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdITkc0NzlBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM3OTIwNjIyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MjkxMzI4Nzk5OTY4NjoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B1WmlOVUVFSzNsNUxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic2o3OXNuKzFiS1l5dUgrV0UycHVQOWwyMmttTit6ZzlYcVBVQVdLcXN6WT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIWExKZmpoMm0xb2JCZGVObGdoQ0JueU5YZHFrY2FoUDZYcnNjRFRlaWVIUEQzU0JDbDNYUmJNR2QyRVEwemo5Y0h5OTd3KzRlaWhuaGJSNHF5SElCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSQVI4QUQ3eDNnT2d4ZndxTVNTYW45T1VVUEF0YUVDdXZENGZZbkdvbTRFMGY1K2VQU1ZCNmFYekZXdng1UmpQcUc1NG9iaXFPVEdwOG4rbzJkZitoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM3OTIwNjIyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzMTYwMTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBem5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF6bi5qc29uIjogIntcImtleURhdGFcIjpcImh3K3VqYkNkNEVwS0lsTXR0d0JjM2tUT3diS3ZzTnMvTFplOWpEN3RaUnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI1MjEzNDEzOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMzE2MDIwNzE2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Ayeni Josiah",


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
