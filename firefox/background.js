browser.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    const url = new URL(details.url);
    if (url.hostname === "www.instagram.com" || url.hostname === "instagram.com") {
      if (url.pathname === "/" || url.pathname.startsWith("/explore") || url.pathname.startsWith("/reels")) {
        const newUrl = "https://www.instagram.com/direct/inbox/";
        browser.tabs.update(details.tabId, { url: newUrl });
      }
    }
  }, { url: [{ hostEquals: "www.instagram.com" }, { hostEquals: "instagram.com" }] });