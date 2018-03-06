/* 排序算法 */
function bubbleSort(array){
    for(var i=0;i<array.length-1;i++){
        for(var j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                var temp=array[i];
                array[i]=array[j];
                array[j]=temp;
                
            }
            console.log(array)
        }
    }
    return array
}
/* function bubbleSort(arr) {  
    for(let i = 0,l=arr.length;i<l-1;i++) {
        for(let j = i+1;j<l;j++) { 
          if(arr[i]>arr[j]) {
                let tem = arr[i];
                arr[i] = arr[j];
                arr[j] = tem;
            }
        }
    }
    return arr;
} */
var a=["3","4","2",'5','1']
console.log(bubbleSort(a))