function browserHistory(obj, arr) {
    let browserName = obj['Browser Name'];
    let openTabs = obj['Open Tabs'];
    let recentlyClosed = obj['Recently Closed'];
    let browserLogs = obj['Browser Logs'];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Clear History and Cache'){
            openTabs = [];
            recentlyClosed = [];
            browserLogs = [];
           // console.log(obj);
            
        }
        let currentBrowserLog = arr[i];
        let [command, ...website] = arr[i].split(' ');
        website = website.join(' ');

        if (command === 'Open') {
            openTabs.push(website);
            browserLogs.push(currentBrowserLog);
        } else if (command === 'Close' && openTabs.includes(website)) {
            let index = openTabs.indexOf(website);
            openTabs.splice(index, 1);
            recentlyClosed.push(website);
            browserLogs.push(currentBrowserLog);
        } 

    }
    console.log(browserName);
    console.log(`Open Tabs: ${openTabs.join(', ')}`);
    console.log(`Recently Closed: ${recentlyClosed.join(', ')}`);
    console.log(`Browser Logs: ${browserLogs.join(', ')}`);


}
// browserHistory({
//     "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//     "Recently Closed": ["Yahoo", "Gmail"],
//     "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
// },
//     ["Close Facebook","Open StackOverFlow", "Open Google"]
// )
console.log(`---------------`);
browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

)