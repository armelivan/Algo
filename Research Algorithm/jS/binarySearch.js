/*
Find an element in a sorted list.
Return the position of the element if it is present
Return null if the element is not present.
O(log n)
*/

let binarySearch = (arr,elem)=>{

  let beg = 0;
  let end = arr.length-1;

  while(beg<=end){
    let mid = Math.floor(end+beg/2)
    if(arr[mid]==elem){
      return mid;
    }else if(arr[mid]<elem){
      beg=mid+1;
    }else{
      end=mid-1;
    }
  }
  return null;
}