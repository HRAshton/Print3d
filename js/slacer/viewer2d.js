var _0x2a9b=['buildPlateObject','buildPlateBox','BoxHelper','setHex','scene','add','update','tan','camera','fov','dotPitch','position','Viewer2D','call','defaultsDeep','settings','globalSettings','setScreenResolution','screen','setBuildPlate','setView','render','prototype','create','Viewer','sqrt','pow','width','height','diagonal','size','unit','setSize','buildPlate','color','opacity','PlaneGeometry','MeshBasicMaterial','Mesh','replaceObject'];(function(_0xb602d4,_0x1e8241){var _0x1327e9=function(_0x5f2989){while(--_0x5f2989){_0xb602d4['push'](_0xb602d4['shift']());}};_0x1327e9(++_0x1e8241);}(_0x2a9b,0x85));var _0x3cb1=function(_0x575b5b,_0x2b2fea){_0x575b5b=_0x575b5b-0x0;var _0x234869=_0x2a9b[_0x575b5b];return _0x234869;};var SLAcer=SLAcer||{};;(function(){var _0x48626b={'screen':{'width':0x690,'height':0x41a,'diagonal':{'size':0x16,'unit':'in'}},'buildPlate':{'size':{'x':0x64,'y':0x64},'unit':'mm','color':0xff0000,'opacity':0.1}};function _0x59e514(_0x29a688){SLAcer['Viewer'][_0x3cb1('0x0')](this,_0x29a688);_[_0x3cb1('0x1')](this[_0x3cb1('0x2')],_0x59e514[_0x3cb1('0x3')]);this[_0x3cb1('0x4')](this[_0x3cb1('0x2')][_0x3cb1('0x5')]);this[_0x3cb1('0x6')](this['settings']['buildPlate']);this[_0x3cb1('0x7')]();this[_0x3cb1('0x8')]();}_0x59e514[_0x3cb1('0x9')]=Object[_0x3cb1('0xa')](SLAcer[_0x3cb1('0xb')][_0x3cb1('0x9')]);_0x59e514[_0x3cb1('0x9')]['constructor']=_0x59e514;_0x59e514[_0x3cb1('0x9')]['updatePixelDensity']=function(){var _0x37bd41=Math[_0x3cb1('0xc')](Math[_0x3cb1('0xd')](this['screen'][_0x3cb1('0xe')],0x2)+Math[_0x3cb1('0xd')](this[_0x3cb1('0x5')][_0x3cb1('0xf')],0x2));var _0x59faab=_0x37bd41/this[_0x3cb1('0x5')][_0x3cb1('0x10')][_0x3cb1('0x11')]*0xa;if(this[_0x3cb1('0x5')][_0x3cb1('0x10')][_0x3cb1('0x12')]=='in'){_0x59faab=_0x59faab/25.4;}this['dotPitch']=0xa/_0x59faab;};_0x59e514[_0x3cb1('0x9')][_0x3cb1('0x4')]=function(_0x381a7a){this[_0x3cb1('0x5')]=_[_0x3cb1('0x1')](_0x381a7a,this[_0x3cb1('0x5')]);this['updatePixelDensity']();this[_0x3cb1('0x13')](this['screen']);this[_0x3cb1('0x7')]();};_0x59e514[_0x3cb1('0x9')][_0x3cb1('0x6')]=function(_0x55ccc1){this[_0x3cb1('0x14')]=_[_0x3cb1('0x1')](_0x55ccc1,this[_0x3cb1('0x14')]);var _0x465e4b=this[_0x3cb1('0x14')][_0x3cb1('0x11')];var _0xfe0ab6=this[_0x3cb1('0x14')]['unit'];var _0x525846=this['buildPlate'][_0x3cb1('0x15')];var _0x1e8467=this[_0x3cb1('0x14')][_0x3cb1('0x16')];if(_0xfe0ab6=='in'){_0x465e4b['x']*=25.4;_0x465e4b['y']*=25.4;}var _0x2cc97b=new THREE[(_0x3cb1('0x17'))](_0x465e4b['x'],_0x465e4b['y'],0x1);var _0x3411a2=new THREE[(_0x3cb1('0x18'))]({'color':_0x525846,'opacity':_0x1e8467,'transparent':!![]});var _0x27d0af=new THREE[(_0x3cb1('0x19'))](_0x2cc97b,_0x3411a2);this[_0x3cb1('0x1a')](this[_0x3cb1('0x1b')],_0x27d0af);this['buildPlateObject']=_0x27d0af;if(!this['buildPlateBox']){this[_0x3cb1('0x1c')]=new THREE[(_0x3cb1('0x1d'))]();this[_0x3cb1('0x1c')]['material'][_0x3cb1('0x15')][_0x3cb1('0x1e')](_0x525846);this[_0x3cb1('0x1f')][_0x3cb1('0x20')](this[_0x3cb1('0x1c')]);}this[_0x3cb1('0x1c')][_0x3cb1('0x21')](this[_0x3cb1('0x1b')]);};_0x59e514[_0x3cb1('0x9')][_0x3cb1('0x7')]=function(){var _0x3afc1d=this[_0x3cb1('0x5')]['height']/0x2;_0x3afc1d/=Math[_0x3cb1('0x22')](Math['PI']*this[_0x3cb1('0x23')][_0x3cb1('0x24')]/0x168);_0x3afc1d*=this[_0x3cb1('0x25')];this[_0x3cb1('0x23')][_0x3cb1('0x26')]['z']=_0x3afc1d;};_0x59e514['globalSettings']=_0x48626b;SLAcer[_0x3cb1('0x27')]=_0x59e514;}());