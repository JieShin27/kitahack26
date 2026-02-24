const API_ENDPOINT = "https://awas-api-636654356275.asia-southeast1.run.app/check-url";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // Only check when the URL is fully loaded and starts with http
    if (changeInfo.status === 'complete' && tab.url && tab.url.startsWith('http')) {
        checkUrlSafety(tab.url, tabId);
    }
});

async function checkUrlSafety(url, tabId) {
    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: url })
        });

        const data = await response.json();
        console.log("AwasBot API Response:", data);

        // MATCHING YOUR BACKEND LOGIC: 
        // Your index.js returns verdict: "BLOCK" for red alerts
        if (data.verdict === 'BLOCK' || data.is_scam === true) {
            console.warn("AwasBot: Malicious site detected!", url);
            
            // Log the event for the local Impact Dashboard
            chrome.storage.local.get(['scamsBlocked'], (result) => {
                let count = result.scamsBlocked || 0;
                chrome.storage.local.set({ scamsBlocked: count + 1 });
            });

            // Redirect to the local warning page
            const warningUrl = chrome.runtime.getURL("warning.html") + "?url=" + encodeURIComponent(url);
            chrome.tabs.update(tabId, { url: warningUrl });
        }
    } catch (error) {
        console.error("AwasBot Error (Failed to fetch):", error);
    }
}