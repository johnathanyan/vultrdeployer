chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "https://my.vultr.com/deploy/";
    chrome.tabs.create({ url: newURL });

});