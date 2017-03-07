var storage = chrome.storage.local;
var instance;
storage.get("_instance", function(result){instance = result._instance});
	
if (instance == null){
	storage.set({"_instance": 1});
	instance = 1;
}
else{
	storage.get("_instance", function(result){storage.set({"_instance": result._instance + 1})});
}

function deploy(){
	document.getElementsByName("DCID")[4].click();
	document.getElementsByClassName("deploy_checkbox_icon fonticon_debian")[1].click()
	document.getElementsByClassName("deploy_osversionselector")[1].click()
	document.getElementsByClassName("deployplan")[4].click();
	document.getElementsByName("ipv6_enabled")[0].click()
	document.getElementsByName("SCRIPTID")[1].click()
	document.getElementsByName("vm_hostname1")[0].value = instance;
	document.getElementsByName("label1")[0].value = instance;
	document.getElementsByName("confirmodersubmit")[0].click();
}

function windowClose(){
	window.close();
}

setTimeout("deploy()",3);
setTimeout("windowClose()",150);