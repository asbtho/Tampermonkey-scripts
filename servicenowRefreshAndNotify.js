// ==UserScript==
// @name         Servicenow refresh notify
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Refresh iframe in servicenow containing table and check for 'new' case.
// @author       AT
// @match        */sc_req_item_list.do?sysparm_view=&sysparm_first_row=1&sysparm_query=assignment_group%3D9cf9827437c2a240db1712c543990ee8%5Ecompany%3Da3a3a834377d6a00755d1a7943990ee1%5EstateIN1%2C2%2C-6%2C-5%5Eestimated_deliveryISEMPTY&sysparm_clear_stack=true
// @grant        none
// ==/UserScript==
'use strict';

var cells = document.getElementsByClassName('list2_body')[0].getElementsByTagName('td');

for (i = 0; i < cells.length; i++){
	if(cells[i].innerHTML == "New"){
		console.log(cells[i].innerHTML);
		var audio = document.createElement("audio");
		audio.src = 'linkhere.wav';
		audio.play();
		break;
	}
}

setTimeout(function(){ console.log("Last refresh "+(new Date).toString().match(/\w{3} \d{1,2} \d{4} \d{1,2}:\d{2}:\d{2}/)[0]); }, 1200);
setTimeout(function(){ window.location.reload(); }, 60000);