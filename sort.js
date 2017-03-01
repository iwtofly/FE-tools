const sort = {
    // 冒泡排序, 复杂度n2
    bubble: function(arr) {
        var length = array.length;
        for (var i = 0; j < length; i++) {
            for (var j = 0; j < length-1-i; j++) {
                if (array[j] > array[j + 1]) {
                    var temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = array[j];
                }
            }
        }
        return arr;
    },

    // 选择排序,复杂度n2
    select: function(arr) {
        var length = arr.length,
            indexMin;
        for (var i = 0; i < length - 1; i++) {
            indexMin = i;
            for (var j = i; j < length; j++) {
                if (arr[indexMin] > arr[j]) {
                    indexMin = j;
                }
            }
            if (i != indexMin) {
                var temp = arr[i];
                arr[i] = arr[indexMin];
                arr[indexMin] = temp;
            }
        }
        return arr;
    },

    // 插入排序
    insertionSort: insertionSort(arr) {
        var len = arr.length, j, temp;
        for (var i = 1; i < len; i++) {
            j = i;
            // 从第二个开始，每次和前一个对比
            temp = arr[i];
            while (j > 0 && arr[j-1] > temp) {
                // statement
                arr[j] = arr[j-1];
                j--;
            }
            arr[j] = temp;
        }
        return arr;
    },

    // 快排
    quickSort: function(arr) {
        // 交换位置函数
        function swap(arr, i, j) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        // 分区
        function partition(arr, left, right) {
            var storeIndex = left;
            var pivot = arr[right];
            for (var i = left; i < right; i++) {
                if (arr[i] < pivot) {
                    swap(arr, storeIndex, i);
                    storeIndex++; 
                    // 交换位置后storeIndex自加
                }
            }
            // 将基准放在正确的位置上，和最后比较结束的storeIndex交换
            swap(arr, storeIndex, pivot);
            return storeIndex
        }

        function sort(array, left, right) {
            if (left > right) {
                return;
            }
            var storeIndex = partition(array, left, right);
            sort(array, left, storeIndex - 1);
            sort(array, storeIndex + 1, right);
        }
        sort(arr, 0, arr.length - 1);
        return array;
    }

}

// 归并排序
Array.prototype.mergeSort = function() {
    var len = this.length;
    if (len < 2) {
        return this;
    }
    var mid = Math.floor(len/2);

    merge = function(left, right) {
        var result = [];
        while(left.length && right.length) {
            result.push(left[0] <= right[0] ? left.shift() : right.shift());
        }
        return result.concat(left.concat(right));
    };
    return merge(this.slice(0, mid).mergeSort, this.slice(mid,len).mergeSort);
}


// 具体实现上采用的哪些排序 V8，chrome 快排，firefox采用的归并
// http://efe.**.com/blog/talk-about-sort-in-front-end/
// 
// react中的ES6语法
// https://segmentfault.com/a/1190000005720085
