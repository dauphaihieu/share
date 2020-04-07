function tn_get_url(e) {
    var n = document.createElement("a");
    return n.href = e, n
}

function tn_get_host_name(e) {
    var n;
    return void 0 === e || null === e || "" === e || e.match(/^\#/) ? "" : -1 === (e = tn_get_url(e)).href.search(/^http[s]?:\/\//) ? "" : (n = e.href.split("/")[2], (n = n.split(":")[0]).toLowerCase())
}
document.addEventListener("DOMContentLoaded", function(e) {
    if ("undefined" != typeof tn_url) {

        var l = document.getElementsByTagName("a");
        if ("undefined" == typeof tn_domains)
            if ("undefined" == typeof tn_exclude_domains);
            else
                for (o = 0; o < l.length; o++) {
                    var t = tn_get_host_name(l[o].getAttribute("href"));
                    t.length > 0 && -1 === tn_exclude_domains.indexOf(t) ? l[o].href = tn_url + "?url=" + btoa(encodeURIComponent(l[o].href)) : "magnet:" === l[o].protocol && (l[o].href = tn_url + "?url=" + btoa(encodeURIComponent(l[o].href)))
                } else
                    for (var o = 0; o < l.length; o++)(t = tn_get_host_name(l[o].getAttribute("href"))).length > 0 && tn_domains.indexOf(t) > -1 ? l[o].href = tn_url + "?url=" + btoa(encodeURIComponent(l[o].href)): "magnet:" === l[o].protocol && (l[o].href = tn_url + "?url=" + btoa(encodeURIComponent(l[o].href)))
    }
});