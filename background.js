chrome.action.onClicked.addListener(() => {
  const width = 800;
  const height = 690;
  const top = 26;
  const left = 238;
  chrome.windows.create({
    url: chrome.runtime.getURL('index.html'),
    width,
    height,
    top,
    left,
    type: 'popup',
  });
});
