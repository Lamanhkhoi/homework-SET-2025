function snail(list){
    let finalList=[];
    let top=0;
    let bottom= list.length -1;
    let left=0;
    let right= list[0].length -1;
    while (top<=bottom && left<=right){
        for (var i = left; i<=right; i++ ){
            finalList.push(list[top][i]);
            console.log(finalList);
        }
        top++;

        for (var i = top; i<=bottom; i++){
            finalList.push(list[i][right]);
            console.log(finalList);
        }
        right--;

        for (var i = right; i>=left; i--){
            finalList.push(list[bottom][i]);
            console.log(finalList);
        }
        bottom--;

        for (var i = bottom; i>=top; i--){
            finalList.push(list[i][left]);
            console.log(finalList);
        }
        left++;
    }
    return finalList
}
let list2 = [[1, 2, 3, 4], 
            [5, 6, 7, 8], 
            [9, 10, 11, 12], 
            [13, 14, 15, 16]];

let list1 = [[1, 2, 3],
             [4, 5, 6],
             [7, 8, 9],
             [10, 11, 12]];

let list = [[1, 2, 3, 4],
             [5, 6, 7, 8],
             [9, 10, 11, 12]]
console.log(snail(list));