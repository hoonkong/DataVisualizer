window.onload = function() {
    DV.Network.downloadJsonp(DV.Urls.varDefs, function(response) {
        alert(response);
    });
}