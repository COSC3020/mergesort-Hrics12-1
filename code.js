function mergesort(array) {
    if(array.length < 2 ){
        return array;
    }

    for(var arraySize = 1; arraySize < array.length; arraySize=2){
        for(var x = 0; x < array.length; x += arraySize *2){
            var start = x;
            var mid = x + arraySize - 1;
            var end = x + arraySize *2 -1;

            sort(array,start,mid,end);
        }
    }
    return array;
}
function sort(array,l,m,r){
    var min =l;
    var min2 = m+1;

    while ((min <= m) && (min2<=r)){
    
        if (array[min] > array[min2]){
            let minVal = array[min2];
            for(var minP = min2; min; minP--){
            
                array[minP]=array[minP-1];
            }
            array[min] = minValue;
            min++;
            min2++;
            m++;
        }
        else{
            min++
    }
    }
}
    

