var finishedLoadingCondition = setInterval(function() {
    if (document.querySelectorAll("div.results > div.ui-results.loading").length == 0 && document.querySelectorAll("div.mobile-view.results > div.ui-results > div.results-list > div.item-result.ui-card-result").length == 0) {
        document.querySelector("div > select[name='ProfileItemID']").dispatchEvent(new Event("change"));
        console.log("Refreshing");
    } else {
        clearInterval(finishedLoadingCondition);
        console.log("Stopping");
    }
}, 1000);