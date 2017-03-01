class CookieUtil{
    static setCookie(name, value, daysToLive) {
        var cookie = name + '=' + encodeURIComponent(value);
        if (typeof daysToLive === 'number') {
            cookie += ';max-age=' + (daysToLive * 60 * 60 * 24);
        }
        document.cookie = cookie;
    }

    static getCookie() {
        var cookieReal = {};
        var all = document.cookie;
        if (all === "") {
            return cookieReal;
        }
        var list = all.split(';');
        for (var i = 0; i < list.length; i++) {
            var cookie = list[i];
            var p = cookie.indexOf('=');
            var name = cookie.substring(0, p);
            var value = cookie.substring(p + 1);
            value = decodeURIComponent(value);
            cookieReal[name] = value;
        }
        return cookieReal;
    }
}