const _0x505b=['22992ITfMOC','362TzuTpb','sendMessage','Silahkan\x20masukan\x20parameter\x20text2','239610ViQDcI','7053FYHTWF','buffer','11APPRQD','8dSpuWp','744hjfLDw','reply','17eKfGEn','node-fetch','Silahkan\x20masukan\x20parameter\x20text4','9MrmvKr','39939arFiKs','Silahkan\x20masukan\x20parameter\x20text3','sender','chat','extendedTextMessage','142209bpOOHe','77072FDYHby'];const _0x568f07=_0x4fc9;(function(_0x16b798,_0x12f604){const _0x41201b=_0x4fc9;while(!![]){try{const _0x5ba9ec=-parseInt(_0x41201b(0x144))*parseInt(_0x41201b(0x14c))+parseInt(_0x41201b(0x152))*parseInt(_0x41201b(0x151))+-parseInt(_0x41201b(0x157))+-parseInt(_0x41201b(0x14e))*-parseInt(_0x41201b(0x148))+-parseInt(_0x41201b(0x147))+-parseInt(_0x41201b(0x14a))*parseInt(_0x41201b(0x143))+-parseInt(_0x41201b(0x158))*-parseInt(_0x41201b(0x14b));if(_0x5ba9ec===_0x12f604)break;else _0x16b798['push'](_0x16b798['shift']());}catch(_0x36134e){_0x16b798['push'](_0x16b798['shift']());}}}(_0x505b,0x2ed7d));function _0x4fc9(_0x3d09a9,_0x49e3e3){return _0x4fc9=function(_0x505bd8,_0x4fc910){_0x505bd8=_0x505bd8-0x143;let _0x47cc45=_0x505b[_0x505bd8];return _0x47cc45;},_0x4fc9(_0x3d09a9,_0x49e3e3);}let fetch=require(_0x568f07(0x14f)),fs=require('fs'),handler=async(_0x44b810,{conn:_0x1f37a1,text:_0xfdae0c,usedPrefix:_0x30953b,command:_0x5b56af})=>{const _0x14cc81=_0x568f07;let [_0x3a4889,_0x125d2f,_0x2e5bf0,_0x1d62ff]=_0xfdae0c['split']`|`;if(!_0x3a4889)return _0x1f37a1[_0x14cc81(0x14d)](_0x44b810[_0x14cc81(0x155)],'Silahkan\x20masukan\x20parameter\x20text1',_0x44b810);if(!_0x125d2f)return _0x1f37a1[_0x14cc81(0x14d)](_0x44b810['chat'],_0x14cc81(0x146),_0x44b810);if(!_0x2e5bf0)return _0x1f37a1['reply'](_0x44b810['chat'],_0x14cc81(0x153),_0x44b810);if(!_0x1d62ff)return _0x1f37a1[_0x14cc81(0x14d)](_0x44b810[_0x14cc81(0x155)],_0x14cc81(0x150),_0x44b810);let _0x117978=''+_0x1d62ff;_0x1f37a1[_0x14cc81(0x145)](_0x44b810[_0x14cc81(0x155)],{'text':_0x117978,'canonicalUrl':''+_0x2e5bf0,'matchedText':_0x117978,'title':''+_0x3a4889,'description':''+_0x125d2f,'jpegThumbnail':await(await fetch(await _0x1f37a1['getProfilePicture'](_0x44b810[_0x14cc81(0x154)])))[_0x14cc81(0x149)]()},_0x14cc81(0x156),{'detectLinks':![]});};
handler.help = ['hackweb *title|desk|wm|url*']
handler.tags = ['tools']
handler.command = /^(hackweb)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler