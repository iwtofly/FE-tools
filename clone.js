module.exports = {
    /**
     * 获取类型
     * @param  {object/array/undefined/null/number/string/...} arg 待判断类型参数
     * @return {String}     参数类型（首字母大写）
     */
    getType: function(arg) {
        let typeStr = Object.prototype.toString.call(arg);
        return typeStr.replace(/\[object|\]|\s/g, '');
    },
    /**
     * 浅拷贝--非递归
     * @param  {[type]} src 待拷贝的对象
     * @return {[type]}     拷贝结果
     */
    shallowClone: function(src) {
        if (!src && typeof src !== 'object') {
            console.log('it is not a object');
        }
        const type = this.getType(src);

        let target = type === 'Array' ? [] : {};
        for (let key in src) {
            if (src.hasOwnProperty(key)) {
                target[key] = src[key];
            }
        }

        return target;
    },
    /**
     * 深拷贝--递归
     * @param  {[type]} src 待拷贝的对象
     * @return {[type]}     拷贝结果
     */
    deepClone: function(src) {
        if (!src && typeof src !== 'object') {
            console.log('it is not a object');
        }

        const type = this.getType(src);
        let target = type === 'Array' ? [] : {};

        for (let key in src) {
            if (src.hasOwnProperty(key)) {
                const subType = this.getType(src[key]);
                if (subType === 'Object' || subType === 'Array') {
                    // Object sub
                    target[key] = this.deepClone(src[key]);
                } else {
                    target[key] = src[key];
                }
            }
        }

        return target;
    }
}
