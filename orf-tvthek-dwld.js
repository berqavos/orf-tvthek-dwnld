//
//
//


var element = document.evaluate( '/html/head/script[2]/text()' ,document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ); var almost_json = element.singleNodeValue.data.replace(/ /g,''); 
var json = almost_json.match(/initializeAdworx\((.*?)\)/);
json[1];

obj = JSON.parse(json[1]);
