export default const cssUtil = {
    // 检测浏览器是否具有某属性
    testProperty(property) {
        var root = document.documentElement;

        if (property in root.style) {
            root.classList.add(property.toLowerCase());
            return true;
        }

        root.classList.add('no-' + property.toLowerCase());
    },
    // 检测某个具体的属性值是否支持
    testValue(id, value, property) {
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
