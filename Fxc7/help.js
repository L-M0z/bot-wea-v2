// menu fitur bot, edit aja temen gw yg maksa ganti 
const help = (prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal) => { 
	return `

Follow ig *@awcringe.tolol*

_*RULES*_

*Welcome to DarkBot by julian*
Sebelum menggunakan bot
 ${prefix}daftar terlebih dahulu
Hai Kamu This is DarkBot/By julian

Mau tau ownernya kak ? ketik  *${prefix}owner*
Mau donasi biar bot jalan terus ? ketik *${prefix}donasi*

_*NOTE*_
Telfon & vc = auto block + ban
unban + unblock = hubungi owner

prefix " ${prefix} "

*prefix adalah suatu bubuh kata diawal kalimat*

❐ *jam*      : *${jam} WIB*
❐ *tanggal*  : *${tanggal}*
❐  *runtime* : *${kyun(uptime)}

╔[ *¢MENU BOT* ]
║
╠➤ ${prefix}playmp3 ( link )
╠➤ ${prefix}anjing
╠➤ ${prefix}kucing
╠➤ ${prefix}toimg ( reply sticker
╠➤ ${prefix}tupai ( reply vn/audio)
╠➤ ${prefix}bass ( reply vn/audio
╠➤ ${prefix}tahta
╠➤ ${prefix}ttp
╠➤ ${prefix}tts
╠➤ ${prefix}persengay
╠➤ ${prefix}pbucin
╠➤ ${prefix}katailham
╠➤ ${prefix}pantum
╠➤ ${prefix}katacinta ( alay anjing )
╠➤ ${prefix}bucin
╠➤ ${prefix}katabijak
╚➤ ${prefix}fakta

╔[ *¢Fun Group* ]
║
╠➤ ${prefix}PornHub step brother
╠➤ ${prefix}gifstiker
╠➤ ${prefix}sticker
╠➤ ${prefix}Dorking
╠➤ ${prefix}hilih
╠➤ ${prefix}fitnah
╠➤ ${prefix}tebakgambar
╠➤ ${prefix}darkjokes
╠➤ ${prefix}xvideos japan
╠➤ ${prefix}playstore nama aplikasi
╠➤ ${prefix}igstalk apa ignya
╠➤ ${prefix}brainly pertanyaan
╠➤ ${prefix}mimpi kepala charger
╠➤ ${prefix}artinama siapa nama lu
╠➤ ${prefix}jamdunia Jakarta misalnya
╠➤ ${prefix}jadwaltv mnctv
╚➤ ${prefix}caklontong

╔[ *GrupMenu* ]
║
╠➤ ${prefix}tagme
╠➤ ${prefix}kick @member
╠➤ ${prefix}demote @admin
╠➤ ${prefix}promote @member
╠➤ ${prefix}tagall
╠➤ ${prefix}hidetag
╠➤ ${prefix}ownergrup
╠➤ ${prefix}welcome on╠➤ ${prefix}off
╚➤ ${prefix}grup buka╠➤ ${prefix}tutup ( kalo bot jadi admin

¢Hanya owner yang bisa akses menu ini

➤ ${prefix}ownermenu (private)

╔[ *18+ menu om :v* ]
║
╠➤ ${prefix}nsfw on/off
╠➤ ${prefix}modeanime on/(on kan dulu)
╠➤ ${prefix}hentai
╠➤ ${prefix}nsfwblowjob
╠➤ ${prefix}nsfwloli
╚➤ ${prefix}nsfwneko

╔[ *WeeaBoo menu anjing* ]
║
╠➤ ${prefix}boruto
╠➤ ${prefix}naruto
╠➤ ${prefix}minato
╠➤ ${prefix}hinata
╠➤ ${prefix}sakura
╠➤ ${prefix}sasuke
╠➤ ${prefix}toukachan
╠➤ ${prefix}rize
╠➤ ${prefix}akira
╠➤ ${prefix}itori
╠➤ ${prefix}kurumi
╠➤ ${prefix}miku
╠➤ ${prefix}anime
╠➤ ${prefix}animecry
╠➤ ${prefix}animekiss
╚➤ ${prefix}neonime

╔[ *Menu Ngontol* ]
║
╠➤ ${prefix}spamcall 08xxxxx
╚➤ ${prefix}spamgmail bapaklu@gmail.com

╔[ *creator* ]
║
╠➤ *O BOT*
╠➤ *M. HADI FIRMANSYA*
╠➤ *DELIA AULIA*
╠➤ *KEVIN DAVID*
╠➤ *FXC7*
╠➤ *L-M0* 
╚➤ *PANJUL* 
`
}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}

// donasi menu
const donasi = (name) => { 
	return `       
╭─────「 *DONASI SEIKHLASNYA* 」
┴
│√ *gopay: 081387118721*
│√ *dana : 081387118721*
┬
╰──────「 *BY ${name}* 」

Untuk Kelangsungan Hidup kontol makanya donasi njink:'
`
}
exports.donasi = donasi

// bahasa list
const bahasa = (prefix) => {
return `
List Bahasa Untuk Command *${prefix}tts*

  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa

// Limit
const limitend = (pushname2) => {
        return`*maaf ${pushname2} limit hari ini habis*\n*limit di reset setiap jam 12:00 WIB TENGAH MALAM*`
}

const limitcount = (limitCounts) => {
        return`
Limit Kamu: ${limitCounts}
`
}

exports.limitend = limitend
exports.limitcount = limitcount
