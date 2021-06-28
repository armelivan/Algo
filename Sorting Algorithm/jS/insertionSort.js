/*
Insertion  sort:  average  O(n^2), best  O(n) 
 We proceed by having two sets (one sorted and the other not)
*/



let insertionSort = arr=>{

  let n = arr.length;

  for(let i = 1;i<n;i++){
      
      //The element to be shiffted 
      let value = arr[i];
      let hole =i; 
      
      // while we have a hole to fill and the element are great 
      while(hole>0 && arr[hole-1]>value){
        arr[hole]=arr[hole-1];
        hole= hole-1;
      }
      arr[hole]= value;
  }
  return arr;
}


