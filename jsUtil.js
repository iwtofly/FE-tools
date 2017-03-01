export default class jsUtil {
    // 事件绑定
    static addHandler(elem, type, handler) {
        if (elem.addEventListener) {
            elem.addEventListener(type, handler, false);
        } else if (elem.attachEvent) {
            elem.attachEvent('on' + type, handler);
        } else {
            elem['on' + type] = handler;
        }
    }
    // 移除事件绑定
    static removeHandler(elem, type, handler) {
        if (elem.removeEventListener) {
            elem.addEventListener(type, handler, false);
        } else if (elem.detachEvent) {
            elem.attachEvent('on' + type, handler);
        } else {
            elem['on' + type] = null;
        }
    }
    // 获取事件
    static getEvent(event) {
        return event || window.event;
    }
    // 获取事件目标
    static getTarget(event) {
        return event.target || event.srcElment;
    }
    // 阻止默认行为
    static preventDefault(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
    // 阻止事件冒泡
    static stopPropagation(event) {
        if (event.stopPropgation) {
            event.stopPropgation();
        } else {
            event.cancelBubble = true;
        }
    }

    // 对象的深度拷贝
    // 缺点：只能拷贝扁平，不能拷贝函数，Date等
    static deepClone1(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    // 深度拷贝升级版，可拷贝函数
    static deepClone2(obj){
        var objClone;
        if (obj.constructor == Object){
            objClone = new obj.constructor();
        }else{
            objClone = new obj.constructor(obj.valueOf());
        }
        for(var key in obj){
            if ( objClone[key] != obj[key] ){
                if ( typeof(obj[key]) == "object"){
                    objClone[key] = deepClone2(obj[key]);
                }else{
                    objClone[key] = obj[key];
                }
            }
        }
        return objClone;
    }

    static cloneObject(src) {
        var clone = src;

        // 对于Date,String,Boolean等引用类型的数据，需要考虑调用构造函数重新构造，
        //直接赋值依然会有引用问题（不是真正的clone引用变量）
        // 对于 Date
        if (src instanceof Date) {
            clone = new Date(src.getDate());
            return clone;
        }

        // 对于Object和Array的遍历，可以使用for in，
        //这样可以保证在在Array对象上扩展的属性也可以正确复制
        // 对于 数组
        if (src instanceof Array) {
            clone = [];
            for (var key in src) {
                clone[key] = cloneObject(src[key]);
            }
            return clone;
        }

        // 对于 Object
        if (src instanceof Object) {
            clone = {};
            for (var key in src) {
                if (src.hasOwnProperty(key)) {       // 忽略掉继承属性
                    clone[key] = cloneObject(src[key]);
                }
            }
            return clone;
        }

        // 对于 数字 字符串 布尔 null undefined
        return src;
    }

}