const _0x20b7b4=_0x3a43;(function(_0xcb83f7,_0x1e0bda){const _0x57e33c=_0x3a43,_0xc6d5ce=_0xcb83f7();while(!![]){try{const _0x296f5d=-parseInt(_0x57e33c(0x113))/0x1+-parseInt(_0x57e33c(0x11a))/0x2*(-parseInt(_0x57e33c(0x121))/0x3)+-parseInt(_0x57e33c(0x112))/0x4+-parseInt(_0x57e33c(0x111))/0x5*(parseInt(_0x57e33c(0x126))/0x6)+parseInt(_0x57e33c(0x10a))/0x7*(parseInt(_0x57e33c(0x11b))/0x8)+-parseInt(_0x57e33c(0x120))/0x9+parseInt(_0x57e33c(0x115))/0xa;if(_0x296f5d===_0x1e0bda)break;else _0xc6d5ce['push'](_0xc6d5ce['shift']());}catch(_0x39f9a8){_0xc6d5ce['push'](_0xc6d5ce['shift']());}}}(_0x2617,0x5d953));let audioFiles=[],currentSongIndex=0x0,shuffledIndexes=[];function _0x2617(){const _0x32bdba=['floor','files','Now\x20Playing:\x20','488REojMg','1069616pccZaU','src','createObjectURL','next','play','5652153QAdrbc','1299CDQmci','target','ended','addEventListener','keys','12SdvLvJ','click','add-files','innerText','35QXlEDC','shuffle','prev','iPod\x20Simulator','getElementById','Paused','length','1904365gMTFRp','189720JXvJgg','249725JsjNEE','file-input','12960710eddSdl','paused'];_0x2617=function(){return _0x32bdba;};return _0x2617();}const audio=new Audio();audio['addEventListener'](_0x20b7b4(0x123),function(){const _0x4cef67=_0x20b7b4;currentSongIndex<audioFiles['length']-0x1?currentSongIndex++:currentSongIndex=0x0,audio[_0x4cef67(0x11c)]=URL[_0x4cef67(0x11d)](audioFiles[currentSongIndex]),audio[_0x4cef67(0x11f)](),updateDisplay();}),document[_0x20b7b4(0x10e)]('play')[_0x20b7b4(0x124)](_0x20b7b4(0x107),function(){const _0x3d542a=_0x20b7b4;audio[_0x3d542a(0x116)]?(audio[_0x3d542a(0x11f)](),updateDisplay()):(audio['pause'](),updateDisplay(_0x3d542a(0x10f)));}),document['getElementById'](_0x20b7b4(0x10c))[_0x20b7b4(0x124)]('click',function(){const _0x3c4a99=_0x20b7b4;currentSongIndex>0x0&&(currentSongIndex--,audio[_0x3c4a99(0x11c)]=URL[_0x3c4a99(0x11d)](audioFiles[currentSongIndex]),audio[_0x3c4a99(0x11f)](),updateDisplay());}),document[_0x20b7b4(0x10e)](_0x20b7b4(0x11e))[_0x20b7b4(0x124)](_0x20b7b4(0x107),function(){const _0x22c5f5=_0x20b7b4;currentSongIndex<audioFiles['length']-0x1&&(currentSongIndex++,audio[_0x22c5f5(0x11c)]=URL[_0x22c5f5(0x11d)](audioFiles[currentSongIndex]),audio[_0x22c5f5(0x11f)](),updateDisplay());}),document[_0x20b7b4(0x10e)](_0x20b7b4(0x10b))[_0x20b7b4(0x124)](_0x20b7b4(0x107),function(){const _0x576325=_0x20b7b4;shuffleArray(shuffledIndexes),currentSongIndex=0x0,audio['src']=URL[_0x576325(0x11d)](audioFiles[shuffledIndexes[currentSongIndex]]),audio['play'](),updateDisplay();}),document[_0x20b7b4(0x10e)](_0x20b7b4(0x108))['addEventListener'](_0x20b7b4(0x107),function(){const _0x2b347d=_0x20b7b4;document[_0x2b347d(0x10e)]('file-input')[_0x2b347d(0x107)]();}),document['getElementById'](_0x20b7b4(0x114))[_0x20b7b4(0x124)]('change',function(_0x1f62c6){const _0x5a1c83=_0x20b7b4;audioFiles=Array['from'](_0x1f62c6[_0x5a1c83(0x122)][_0x5a1c83(0x118)]),shuffledIndexes=[...Array(audioFiles['length'])[_0x5a1c83(0x125)]()],resetAudio();});function shuffleArray(_0x2c454c){const _0x10effa=_0x20b7b4;for(let _0x3a5f5e=_0x2c454c[_0x10effa(0x110)]-0x1;_0x3a5f5e>0x0;_0x3a5f5e--){const _0x564e56=Math[_0x10effa(0x117)](Math['random']()*(_0x3a5f5e+0x1));[_0x2c454c[_0x3a5f5e],_0x2c454c[_0x564e56]]=[_0x2c454c[_0x564e56],_0x2c454c[_0x3a5f5e]];}}function resetAudio(){const _0x517fac=_0x20b7b4;audioFiles[_0x517fac(0x110)]>0x0?(currentSongIndex=0x0,audio['src']=URL[_0x517fac(0x11d)](audioFiles[currentSongIndex]),audio['play'](),updateDisplay()):(audio['src']='',updateDisplay(_0x517fac(0x10d)));}function _0x3a43(_0x20d248,_0x18284b){const _0x261703=_0x2617();return _0x3a43=function(_0x3a434e,_0x3775d8){_0x3a434e=_0x3a434e-0x107;let _0x572a6e=_0x261703[_0x3a434e];return _0x572a6e;},_0x3a43(_0x20d248,_0x18284b);}function updateDisplay(_0x507102=''){const _0x32b23a=_0x20b7b4;document[_0x32b23a(0x10e)]('screen')[_0x32b23a(0x109)]=_0x507102||_0x32b23a(0x119)+audioFiles[currentSongIndex]['name'];}
