// Called when the user clicks on the browser action
chrome.browserAction.onClicked.addListener(function () {
  // Send a message to the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    let username, password;

    chrome.storage.local.get(['username', 'password'], function (result) {
      username = result.username;
      password = result.password;
      chrome.tabs.sendMessage(activeTab.id, {
        message: 'clicked_browser_action',
        username,
        password,
      });
    });
  });
});
