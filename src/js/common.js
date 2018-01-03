/**
 * Created by junji on 2017/12/22.
 */
export default {
    test:function () {
        return console.log('测试')
    },
    randomSort:function (arr) {//数组随机排序
        if(arr.length>0){
            return arr.sort(function () {
                return 0.5-Math.random();
            })
        }
    }

}
