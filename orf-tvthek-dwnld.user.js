// ==UserScript==
// @name        orf-tvthek
// @namespace   white
// @include    http://tvthek.orf.at/program/*
// @version     1
// @grant       none
// thx to pxlpnk for the xpath hint
// ==/UserScript==


var element = document.evaluate('/html/head/script[2]/text()' ,document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
var almost_json = element.singleNodeValue.data.replace(/ /g,'');
var json = almost_json.match(/initializeAdworx\(\[(.*?)\]\)/);

obj = JSON.parse(json[1]);
var vl = obj.values.segment.playlist_item_array.sources[13].src;

var note=document.getElementById("DwnldLnk");
if(!note){
 note=document.createElement("div");
 note.id="DwnldLnk";
 document.body.appendChild(note);
}

note.innerHTML="video link \n" + str;
note.style.position="fixed";
note.style.top="2em";
note.style.left="0";
note.style.background="#fff";
note.style.border="solid 3px green";
note.style.width="auto";
note.style.padding="1em";
note.style.display="block";
