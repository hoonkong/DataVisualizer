var DV = DV || {};

DV.Network = {
    callbacks: [],
    
    downloadJson: function(url, callback) {
        var jsonString = DV.Network.genericDownloadJson(url);
        callback && callback(JSON.parse(jsonString));
    },
    
    downloadJsonp: function(url, callback) {
        DV.Network.callbacks.push(callback);
        url += "&jsonp=DV.Network.jsonpProcessor";
        var scriptElement = document.createElement("script");
        scriptElement.src = url;
        document.head.appendChild(scriptElement);
        
    },
    
    genericDownloadJson: function(url) {
        var req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.send();
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status === 200 || req.status === 304) {
                    return req.responseText;
                }
                else {
                    // error occurred
                }
            }
        }
    },
    
    jsonpProcessor: function(jsonObj) {
        var callback = DV.Network.callbacks.pop();
        callback(jsonObj);
    }
}