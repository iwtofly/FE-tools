class cssUtil {
    static testProperty(property) {
        var root = document.documentElement;

        if (property in root.style) {
            root.classList.add(property.toLowerCase());
            return true;
        }

        root.classList.add('no-' + property.toLowerCase());
    }

    static testValue(id, value, property) {
        var dummy = document.createElement('p');
        dummy.style[property] = value;

        if (dummy.style[property]) {
            root.classList.add(id);
            return true;
        }

        root.classList.add('no-' + id);
        return false;
    }
}


export default cssUtil;