const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const fs = require('fs')
const { exec } = require('child_process')
const moment = require('moment-timezone')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')
const gcrevoke = ["6285714160944-1621430788@g.us"]
blocked = []

require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))

const starts = async (Haikal = new WAConnection()) => {
    Haikal.logger.level = 'warn'
    Haikal.version = [2, 2140, 12]
    Haikal.browserDescription = [ 'HW MODS WA', 'Chrome', '3.0' ]
    console.log(banner.string)
    Haikal.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./session.json') && Haikal.loadAuthInfo('./session.json')
    Haikal.on('connecting', () => {
        start('2', 'TUNGGU SEBENTAR...')
    })
    Haikal.on('open', () => {
        success('2', 'HW MODS WA AKTIF')
    })
    await Haikal.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(Haikal.base64EncodedAuthInfo(), null, '\t'))
       
//=================================================//
//Khusus Run Heroku\\ KalauTermux Gausah Deh Make Sc HWMODS\\
function _0x2847(_0x574939,_0x42115e){const _0x2607f3=_0x2607();return _0x2847=function(_0x2847da,_0x7dacbc){_0x2847da=_0x2847da-0x6e;let _0x1afb53=_0x2607f3[_0x2847da];return _0x1afb53;},_0x2847(_0x574939,_0x42115e);}const _0x46e0f7=_0x2847;function _0x2607(){const _0x571f9d=['\x27\x20-pointsize\x2063\x20-annotate\x20+460+200\x20\x27Promote\x20','error','sendMessage','text','replace','\x20LAGI\x20👋\x0a┏━━⊱\x0a┣❏SUBSCRIBE\x20:\x20https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g\x0a┗━━⊱\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬','\x27\x20-resize\x20%[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h]\x20-gravity\x20center\x20-geometry\x20-430+66\x20-composite\x20\x27./stik/hasil2.jpg\x27','action','image','Pon','11295MrDWuY','getProfilePicture','Legi','participants','groupMakeAdmin','\x0a-\x20Jadilah\x20Admin\x20Yang\x20Bijak\x20Dan\x20Dewasa\x20👋\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aJANGAN_LUPA_SUBSCRIBE\x20:\x20https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬','6210SKLnlc','3443kewAMt','log','\x27\x20-pointsize\x2063\x20-annotate\x20+460+200\x20\x27Welcome\x20To\x20','@s.whatsapp.net','groupMetadata','234423PUSKSz','HH:mm:ss','contacts','getTime','2OJwjBH','\x27\x20-resize\x20%[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h]\x20-gravity\x20center\x20-geometry\x20-430+66\x20-composite\x20\x27./stik/hasil3.jpg\x27','49695UGXtmL','1\x20Januari\x202021','\x0aANDA\x20BUKAN\x20ADMIN\x20\x0a','vname','group-participants-update','split','*MY\x20NAME\x20HW\x20MODS\x20BOT*\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0a┏━━⊱\x0a┣❏\x20DADAH\x20BEBAN\x20KELUARGA\x20👋🏻\x0a┣❏\x20@','Kliwon','groupDemoteAdmin','*MY\x20NAME\x20HW\x20MODS\x20BOT*\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aHELLO\x20@','\x0a┣❏\x20SEMOGA\x20TENANG\x20DI\x20ALAM\x20SANA👋\x0a┗━━⊱\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aMARI\x20BERDOA\x20MULAI\x20🤲\x0a-\x20ALL\x20MEMBER\x20-\x0a','1240yAaxhs','exit','Asia/Jakarta','numeric','readFileSync','./stik/hasil3.jpg','833772RQKvAk','format','*MY\x20NAME\x20HW\x20MODS\x20BOT*\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0a-\x20Hello\x20\x20@','104KAhrRf','Pahing','\x27\x20\x27','./stik/hasil2.jpg','\x27\x20-pointsize\x2063\x20-annotate\x20+460+200\x20\x27Goodbye\x20','\x27\x20-pointsize\x2051\x20-annotate\x20+460+83\x20\x27','includes','\x0a\x0a-\x20Anda\x20Telah\x20Menjadi\x20Admin\x20Group\x20\x0a-\x20','jid','\x27\x20-pointsize\x2048\x20-annotate\x20+100+230\x20\x27MEMBER\x20+\x20','chat','1\x20Janua@ri\x202021','getNumber','length','international','long','282YlsUjt','notify','subject','./media/image/pp.jpeg','magick\x20\x27./media/image/demote.jpg\x27\x20-gravity\x20west\x20-fill\x20\x27#ffffff\x27\x20-font\x20\x27./media/font/font-gue.ttf\x27\x20-size\x201280x710\x20-pointsize\x2075\x20-interline-spacing\x207.5\x20-annotate\x20+460-47\x20\x27','13QaLoOq','add','Wage','toLocaleDateString','*MY\x20NAME\x20HW\x20MODS\x20BOT*\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aHELLO\x20SELAMAT\x20DATANG️\x20\x0a@','5yaUKAY','floor','1153806hScUWL','@c.us','demote','\x27\x20-pointsize\x2048\x20-annotate\x20+100+230\x20\x27MEMBER\x20-\x20','\x27\x20-pointsize\x2063\x20-annotate\x20+460+200\x20\x27Demote\x20'];_0x2607=function(){return _0x571f9d;};return _0x2607();}(function(_0x1fc5e4,_0x1bcb5b){const _0x511982=_0x2847,_0x36cc19=_0x1fc5e4();while(!![]){try{const _0xd6cc71=-parseInt(_0x511982(0x93))/0x1*(parseInt(_0x511982(0x91))/0x2)+parseInt(_0x511982(0xb7))/0x3*(parseInt(_0x511982(0xa7))/0x4)+parseInt(_0x511982(0x70))/0x5*(parseInt(_0x511982(0x72))/0x6)+parseInt(_0x511982(0x8d))/0x7+parseInt(_0x511982(0x9e))/0x8*(-parseInt(_0x511982(0x81))/0x9)+-parseInt(_0x511982(0x87))/0xa*(-parseInt(_0x511982(0x88))/0xb)+-parseInt(_0x511982(0xa4))/0xc*(parseInt(_0x511982(0xbc))/0xd);if(_0xd6cc71===_0x1bcb5b)break;else _0x36cc19['push'](_0x36cc19['shift']());}catch(_0x1a9353){_0x36cc19['push'](_0x36cc19['shift']());}}}(_0x2607,0x1a96a),Haikal['on'](_0x46e0f7(0x97),async _0x5dace9=>{const _0x17766c=_0x46e0f7;try{const _0x34a19e=await Haikal['groupMetadata'](_0x5dace9[_0x17766c(0xaf)]),_0x2ff835=_0x34a19e[_0x17766c(0x84)][_0x17766c(0xb4)];console[_0x17766c(0x89)](_0x5dace9);if(_0x5dace9[_0x17766c(0x7e)]=='promote'){Haikal[_0x17766c(0x85)](_0x5dace9[_0x17766c(0xaf)])&&Haikal[_0x17766c(0x9b)](_0x5dace9[_0x17766c(0xaf)]);num=_0x5dace9[_0x17766c(0x84)][0x0],hesa=''+num,mestes=_0x22801f=>{const _0x22d6c2=_0x17766c;return _0x22801f[_0x22d6c2(0x7b)](/['@s whatsapp.net']/g,'\x20');},resa=''+mestes(hesa);const _0x47eff1=moment['tz']('Asia/Jakarta')[_0x17766c(0xa5)](_0x17766c(0x8e));let _0x4c633e=new Date(),_0x81c9bb='id',_0x449f0f=new Date(0x0)[_0x17766c(0x90)]()-new Date('1\x20Januari\x202021')[_0x17766c(0x90)](),_0x3dd2f3=[_0x17766c(0xa8),_0x17766c(0x80),_0x17766c(0xbe),_0x17766c(0x9a),_0x17766c(0x83)][Math['floor']((_0x4c633e*0x1+_0x449f0f)/0x50ae4c0)%0x5],_0x32f5ec=_0x4c633e[_0x17766c(0x6e)](_0x81c9bb,{'weekday':_0x17766c(0xb6)}),_0x558146=_0x4c633e[_0x17766c(0x6e)](_0x81c9bb,{'day':_0x17766c(0xa1),'month':'long','year':_0x17766c(0xa1)});pushnem=Haikal[_0x17766c(0x8f)][num]!=undefined?Haikal['contacts'][num][_0x17766c(0xb8)]=undefined?PhoneNumber('+'+num[_0x17766c(0x7b)](_0x17766c(0x8b),''))[_0x17766c(0xb3)](_0x17766c(0xb5)):Haikal[_0x17766c(0x8f)][num][_0x17766c(0xb8)]||Haikal[_0x17766c(0x8f)][num][_0x17766c(0x96)]:PhoneNumber('+'+num[_0x17766c(0x7b)]('@s.whatsapp.net',''))[_0x17766c(0xb3)](_0x17766c(0xb5));try{ppimg=await Haikal[_0x17766c(0x82)](_0x5dace9[_0x17766c(0x84)][0x0]['split']('@')[0x0]+_0x17766c(0x73));}catch{ppimg='./media/image/pp.jpeg';}exec('magick\x20\x27./media/image/promote.jpg\x27\x20-gravity\x20west\x20-fill\x20\x27#ffffff\x27\x20-font\x20\x27./media/font/font-gue.ttf\x27\x20-size\x201280x710\x20-pointsize\x2075\x20-interline-spacing\x207.5\x20-annotate\x20+460-47\x20\x27'+resa+'\x27\x20-pointsize\x2051\x20-annotate\x20+460+83\x20\x27'+_0x47eff1+'\x20'+_0x558146+_0x17766c(0xb0)+_0x2ff835+_0x17766c(0x77)+_0x34a19e['subject']+_0x17766c(0xa9)+ppimg+_0x17766c(0x7d))['on']('error',()=>Haikal[_0x17766c(0x79)](m['chat'],'error',MessageType[_0x17766c(0x7a)]))['on'](_0x17766c(0x9f),()=>{const _0x6a73f=_0x17766c;Haikal[_0x6a73f(0x79)](_0x34a19e['id'],fs[_0x6a73f(0xa2)](_0x6a73f(0xaa)),MessageType['image'],{'caption':_0x6a73f(0xa6)+num['split']('@')[0x0]+_0x6a73f(0xae)+_0x34a19e[_0x6a73f(0xb9)]+_0x6a73f(0x86),'contextInfo':{'mentionedJid':[num]}});});}else{if(_0x5dace9['action']==_0x17766c(0x74)){num=_0x5dace9[_0x17766c(0x84)][0x0],hesa=''+num,mestes=_0x68f8da=>{const _0x26bcdf=_0x17766c;return _0x68f8da[_0x26bcdf(0x7b)](/['@s whatsapp.net']/g,'\x20');},resa=''+mestes(hesa);const _0x47d8e0=moment['tz'](_0x17766c(0xa0))[_0x17766c(0xa5)](_0x17766c(0x8e));let _0x1461cd=new Date(),_0x2eeb84='id',_0x28a3b0=new Date(0x0)['getTime']()-new Date(_0x17766c(0xb2))[_0x17766c(0x90)](),_0x3982a9=[_0x17766c(0xa8),'Pon',_0x17766c(0xbe),'Kliwon',_0x17766c(0x83)][Math[_0x17766c(0x71)]((_0x1461cd*0x1+_0x28a3b0)/0x50ae4c0)%0x5],_0x372c1f=_0x1461cd['toLocaleDateString'](_0x2eeb84,{'weekday':_0x17766c(0xb6)}),_0x4ac7b4=_0x1461cd[_0x17766c(0x6e)](_0x2eeb84,{'day':_0x17766c(0xa1),'month':'long','year':'numeric'});pushnem=Haikal[_0x17766c(0x8f)][num]!=undefined?Haikal['contacts'][num][_0x17766c(0xb8)]=undefined?PhoneNumber('+'+num['replace']('@s.whatsapp.net',''))[_0x17766c(0xb3)](_0x17766c(0xb5)):Haikal[_0x17766c(0x8f)][num]['notify']||Haikal[_0x17766c(0x8f)][num]['vname']:PhoneNumber('+'+num[_0x17766c(0x7b)]('@s.whatsapp.net',''))[_0x17766c(0xb3)](_0x17766c(0xb5));try{ppimg=await Haikal[_0x17766c(0x82)](_0x5dace9[_0x17766c(0x84)][0x0][_0x17766c(0x98)]('@')[0x0]+_0x17766c(0x73));}catch{ppimg=_0x17766c(0xba);}exec(_0x17766c(0xbb)+resa+_0x17766c(0xac)+_0x47d8e0+'\x20'+_0x4ac7b4+_0x17766c(0x75)+_0x2ff835+_0x17766c(0x76)+_0x34a19e[_0x17766c(0xb9)]+'\x27\x20\x27'+ppimg+_0x17766c(0x92))['on']('error',()=>Haikal[_0x17766c(0x79)](m[_0x17766c(0xb1)],'error',MessageType[_0x17766c(0x7a)]))['on'](_0x17766c(0x9f),()=>{const _0x2d0766=_0x17766c;Haikal[_0x2d0766(0x79)](_0x34a19e['id'],fs['readFileSync'](_0x2d0766(0xa3)),MessageType[_0x2d0766(0x7f)],{'caption':_0x2d0766(0x9c)+num[_0x2d0766(0x98)]('@')[0x0]+_0x2d0766(0x95)+_0x34a19e[_0x2d0766(0xb9)]+_0x2d0766(0x7c),'contextInfo':{'mentionedJid':[num]}});});}}}catch(_0x51a68f){console[_0x17766c(0x89)](_0x51a68f);}}),Haikal['on'](_0x46e0f7(0x97),async _0x3aa88d=>{const _0x2aeb86=_0x46e0f7;try{const _0x23990d=await Haikal[_0x2aeb86(0x8c)](_0x3aa88d[_0x2aeb86(0xaf)]),_0x1d6e13=_0x23990d['participants'][_0x2aeb86(0xb4)];console[_0x2aeb86(0x89)](_0x3aa88d);if(_0x3aa88d[_0x2aeb86(0x7e)]==_0x2aeb86(0xbd)){gcrevoke[_0x2aeb86(0xad)](_0x3aa88d['jid'])&&Haikal['revokeInvite'](_0x3aa88d[_0x2aeb86(0xaf)]);num=_0x3aa88d[_0x2aeb86(0x84)][0x0],hesa=''+num,mestes=_0x5851ff=>{const _0x2f36e5=_0x2aeb86;return _0x5851ff[_0x2f36e5(0x7b)](/['@s whatsapp.net']/g,'\x20');},resa=''+mestes(hesa);const _0x5c6459=moment['tz']('Asia/Jakarta')['format'](_0x2aeb86(0x8e));let _0x58e6e6=new Date(),_0x412b7a='id',_0x2e4069=new Date(0x0)[_0x2aeb86(0x90)]()-new Date(_0x2aeb86(0x94))[_0x2aeb86(0x90)](),_0x441e57=[_0x2aeb86(0xa8),_0x2aeb86(0x80),_0x2aeb86(0xbe),_0x2aeb86(0x9a),_0x2aeb86(0x83)][Math[_0x2aeb86(0x71)]((_0x58e6e6*0x1+_0x2e4069)/0x50ae4c0)%0x5],_0x3890df=_0x58e6e6[_0x2aeb86(0x6e)](_0x412b7a,{'weekday':_0x2aeb86(0xb6)}),_0x1b0b3a=_0x58e6e6['toLocaleDateString'](_0x412b7a,{'day':'numeric','month':_0x2aeb86(0xb6),'year':_0x2aeb86(0xa1)});pushnem=Haikal[_0x2aeb86(0x8f)][num]!=undefined?Haikal['contacts'][num][_0x2aeb86(0xb8)]=undefined?PhoneNumber('+'+num['replace'](_0x2aeb86(0x8b),''))[_0x2aeb86(0xb3)](_0x2aeb86(0xb5)):Haikal[_0x2aeb86(0x8f)][num]['notify']||Haikal[_0x2aeb86(0x8f)][num][_0x2aeb86(0x96)]:PhoneNumber('+'+num[_0x2aeb86(0x7b)]('@s.whatsapp.net',''))[_0x2aeb86(0xb3)](_0x2aeb86(0xb5));try{ppimg=await Haikal['getProfilePicture'](_0x3aa88d[_0x2aeb86(0x84)][0x0]['split']('@')[0x0]+_0x2aeb86(0x73));}catch{ppimg='./media/image/pp.jpeg';}exec('magick\x20\x27./media/image/wel.jpg\x27\x20-gravity\x20west\x20-fill\x20\x27#ffffff\x27\x20-font\x20\x27./media/font/font-gue.ttf\x27\x20-size\x201280x710\x20-pointsize\x2075\x20-interline-spacing\x207.5\x20-annotate\x20+460-47\x20\x27'+resa+_0x2aeb86(0xac)+_0x5c6459+'\x20'+_0x1b0b3a+_0x2aeb86(0xb0)+_0x1d6e13+_0x2aeb86(0x8a)+_0x23990d[_0x2aeb86(0xb9)]+_0x2aeb86(0xa9)+ppimg+'\x27\x20-resize\x20%[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h]\x20-gravity\x20center\x20-geometry\x20-430+66\x20-composite\x20\x27./stik/hasil.jpg\x27')['on']('error',()=>Haikal[_0x2aeb86(0x79)](m[_0x2aeb86(0xb1)],_0x2aeb86(0x78),MessageType[_0x2aeb86(0x7a)]))['on'](_0x2aeb86(0x9f),()=>{const _0x3f9b99=_0x2aeb86;Haikal[_0x3f9b99(0x79)](_0x23990d['id'],fs[_0x3f9b99(0xa2)]('./stik/hasil.jpg'),MessageType[_0x3f9b99(0x7f)],{'caption':_0x3f9b99(0x6f)+num['split']('@')[0x0]+'\x20✌️\x0a-\x20Di\x20Group\x20-\x0a'+_0x23990d[_0x3f9b99(0xb9)]+'\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0a-\x20NAMA\x20:\x0a-\x20UMUR\x20:\x0a-\x20GENDER\x20:\x0a-\x20NEGARA\x20:\x0a-\x20PASANGAN\x20:\x0a-\x20ALASAN\x20BERGABUNG\x20:\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aJANGAN\x20LUPA\x20SUBSCRIBE\x20:\x20https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬','contextInfo':{'mentionedJid':[num]}});});}else{if(_0x3aa88d['action']=='remove'){num=_0x3aa88d[_0x2aeb86(0x84)][0x0],hesa=''+num,mestes=_0x31dc0d=>{const _0x105116=_0x2aeb86;return _0x31dc0d[_0x105116(0x7b)](/['@s whatsapp.net']/g,'\x20');},resa=''+mestes(hesa);const _0x3070fe=moment['tz']('Asia/Jakarta')[_0x2aeb86(0xa5)](_0x2aeb86(0x8e));let _0x507a36=new Date(),_0x29f7bc='id',_0x3ccf0e=new Date(0x0)[_0x2aeb86(0x90)]()-new Date('1\x20Janua@ri\x202021')['getTime'](),_0x11d983=[_0x2aeb86(0xa8),_0x2aeb86(0x80),_0x2aeb86(0xbe),'Kliwon',_0x2aeb86(0x83)][Math[_0x2aeb86(0x71)]((_0x507a36*0x1+_0x3ccf0e)/0x50ae4c0)%0x5],_0x38b04f=_0x507a36[_0x2aeb86(0x6e)](_0x29f7bc,{'weekday':_0x2aeb86(0xb6)}),_0x362138=_0x507a36[_0x2aeb86(0x6e)](_0x29f7bc,{'day':'numeric','month':'long','year':_0x2aeb86(0xa1)});pushnem=Haikal[_0x2aeb86(0x8f)][num]!=undefined?Haikal['contacts'][num][_0x2aeb86(0xb8)]=undefined?PhoneNumber('+'+num[_0x2aeb86(0x7b)]('@s.whatsapp.net',''))[_0x2aeb86(0xb3)](_0x2aeb86(0xb5)):Haikal['contacts'][num][_0x2aeb86(0xb8)]||Haikal[_0x2aeb86(0x8f)][num][_0x2aeb86(0x96)]:PhoneNumber('+'+num[_0x2aeb86(0x7b)](_0x2aeb86(0x8b),''))[_0x2aeb86(0xb3)](_0x2aeb86(0xb5));try{ppimg=await Haikal[_0x2aeb86(0x82)](_0x3aa88d[_0x2aeb86(0x84)][0x0]['split']('@')[0x0]+_0x2aeb86(0x73));}catch{ppimg='./media/image/pp.jpeg';}exec('magick\x20\x27./media/image/lev.jpg\x27\x20-gravity\x20west\x20-fill\x20\x27#ffffff\x27\x20-font\x20\x27./media/font/font-gue.ttf\x27\x20-size\x201280x710\x20-pointsize\x2075\x20-interline-spacing\x207.5\x20-annotate\x20+460-47\x20\x27'+resa+_0x2aeb86(0xac)+_0x3070fe+'\x20'+_0x362138+_0x2aeb86(0x75)+_0x1d6e13+_0x2aeb86(0xab)+_0x23990d[_0x2aeb86(0xb9)]+'\x27\x20\x27'+ppimg+'\x27\x20-resize\x20%[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h]\x20-gravity\x20center\x20-geometry\x20-430+66\x20-composite\x20\x27./stik/hasil1.jpg\x27')['on'](_0x2aeb86(0x78),()=>Haikal['sendMessage'](m[_0x2aeb86(0xb1)],_0x2aeb86(0x78),MessageType[_0x2aeb86(0x7a)]))['on'](_0x2aeb86(0x9f),()=>{const _0x21f5a2=_0x2aeb86;Haikal['sendMessage'](_0x23990d['id'],fs[_0x21f5a2(0xa2)]('./stik/hasil1.jpg'),MessageType['image'],{'caption':_0x21f5a2(0x99)+num[_0x21f5a2(0x98)]('@')[0x0]+_0x21f5a2(0x9d)+_0x23990d['subject']+'\x0a┏━━⊱\x0a┣❏SUBSCRIBE\x20:\x20https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g\x0a┗━━⊱\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬','contextInfo':{'mentionedJid':[num]}});});}}}catch(_0x28f3b3){console[_0x2aeb86(0x89)](_0x28f3b3);}})); 
//=================================================//

Haikal.on('chat-update', async (message) => {
        require('./index.js')(Haikal, message)
})

//=================================================//

function _0x1ba3(_0x4fb62f,_0x4d2108){const _0x2af4fd=_0x2af4();return _0x1ba3=function(_0x1ba3b2,_0x444abe){_0x1ba3b2=_0x1ba3b2-0xf1;let _0x4cbf27=_0x2af4fd[_0x1ba3b2];return _0x4cbf27;},_0x1ba3(_0x4fb62f,_0x4d2108);}const _0x453701=_0x1ba3;(function(_0x825879,_0x5aa888){const _0x222471=_0x1ba3,_0x182c15=_0x825879();while(!![]){try{const _0x1d0fbb=-parseInt(_0x222471(0xfa))/0x1*(-parseInt(_0x222471(0xf9))/0x2)+parseInt(_0x222471(0xfc))/0x3*(parseInt(_0x222471(0xf8))/0x4)+-parseInt(_0x222471(0x112))/0x5+parseInt(_0x222471(0xfe))/0x6*(parseInt(_0x222471(0x109))/0x7)+-parseInt(_0x222471(0x101))/0x8+parseInt(_0x222471(0x10c))/0x9*(parseInt(_0x222471(0xf2))/0xa)+-parseInt(_0x222471(0x100))/0xb;if(_0x1d0fbb===_0x5aa888)break;else _0x182c15['push'](_0x182c15['shift']());}catch(_0x52c21a){_0x182c15['push'](_0x182c15['shift']());}}}(_0x2af4,0x5f55d),antidel=!![],Haikal['on'](_0x453701(0x10e),async _0x226077=>{const _0x4a5c45=_0x453701;if(_0x226077[_0x4a5c45(0xff)][_0x4a5c45(0x106)]=='status@broadcast')return;if(!_0x226077['key'][_0x4a5c45(0xf4)]&&_0x226077[_0x4a5c45(0xff)][_0x4a5c45(0xf4)])return;if(antidel===![])return;_0x226077[_0x4a5c45(0x105)]=Object[_0x4a5c45(0x104)](_0x226077[_0x4a5c45(0x105)])[0x0]===_0x4a5c45(0x113)?_0x226077[_0x4a5c45(0x105)][_0x4a5c45(0x113)][_0x4a5c45(0x105)]:_0x226077['message'];const _0x4887c5=moment['tz']('Asia/Jakarta')[_0x4a5c45(0xf5)](_0x4a5c45(0xfd));let _0x1edd6e=new Date(),_0x477062='id',_0x2c7d41=new Date(0x0)['getTime']()-new Date(_0x4a5c45(0x103))['getTime'](),_0x1d5e49=[_0x4a5c45(0x10f),'Pon',_0x4a5c45(0xf1),_0x4a5c45(0x102),'Legi'][Math[_0x4a5c45(0x10a)]((_0x1edd6e*0x1+_0x2c7d41)/0x50ae4c0)%0x5],_0x4145b9=_0x1edd6e[_0x4a5c45(0x108)](_0x477062,{'weekday':_0x4a5c45(0x111)}),_0x573d18=_0x1edd6e[_0x4a5c45(0x108)](_0x477062,{'day':'numeric','month':'long','year':_0x4a5c45(0x10b)});const _0x591b7f=Object[_0x4a5c45(0x104)](_0x226077[_0x4a5c45(0x105)])[0x0];Haikal[_0x4a5c45(0xfb)](_0x226077[_0x4a5c45(0xff)][_0x4a5c45(0x106)],'```「\x20Anti\x20Delete\x20」```\x0a\x0a•>\x20Nama\x20:\x20@'+_0x226077[_0x4a5c45(0xf3)][_0x4a5c45(0x107)]('@')[0x0]+_0x4a5c45(0x10d)+_0x4887c5+'\x20'+_0x4145b9+'\x20'+_0x573d18+_0x4a5c45(0x110)+_0x591b7f,MessageType[_0x4a5c45(0xf6)],{'quoted':_0x226077['message'],'contextInfo':{'mentionedJid':[_0x226077[_0x4a5c45(0xf3)]]}}),Haikal[_0x4a5c45(0xf7)](_0x226077[_0x4a5c45(0xff)][_0x4a5c45(0x106)],_0x226077['message']);}));function _0x2af4(){const _0x1fc9e8=['long','1127395keeVrJ','ephemeralMessage','Wage','260sQdecY','participant','fromMe','format','text','copyNForward','8kcczFD','1202PJlOil','233ANozOW','sendMessage','715893kSfVVT','HH:mm:ss','50604dwvaow','key','676786uqfgAF','1616072oEyrjG','Kliwon','1\x20Januari\x202021','keys','message','remoteJid','split','toLocaleDateString','147DlDbVJ','floor','numeric','29457IcsbaD','\x0a\x0a•>\x20Waktu\x20:\x20','message-delete','Pahing','\x0a\x0a•>\x20Type\x20:\x20'];_0x2af4=function(){return _0x1fc9e8;};return _0x2af4();}
antical = true
Haikal.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
Haikal.sendMessage(call, `*Sorry ${Haikal.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => Haikal.blockUser(call, "add"))
})
isBattre = 'Not Detect'
isCharge = 'Not Detect'
Haikal.on (`CB:action,,battery`, json => {
                const batteryLevelStr = json[2][0][1].value
                const batterylevel = parseInt (batteryLevelStr)
                isBattre = batterylevel + "%"
                isCharge = json[2][0][1].live
})
Haikal.on('CB:Blocklist', json => {
    if (blocked.length > 2) return
    for (let i of json[1].blocklist) {
        blocked.push(i.replace('c.us', 's.whatsapp.net'))
    }
})
}

//=================================================//

function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

//=================================================//

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
