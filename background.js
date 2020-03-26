chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'document.querySelectorAll("input[type=text]")[0].focus()'
  });
});