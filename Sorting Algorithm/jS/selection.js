/*
Selection sort : O(n^2) take the min or max at each time
this is very intuitive sort.
->Sort in increasing order
*/

let SelectionSort= arr=>{
  
    let n = arr.length;

    for(let i=0;i<n-1;i++){

      for(let j=i ;j<n;j++){ 
           
        // swapping
        if(arr[i]>arr[j]){
          let temp = arr[i];
           arr[i] =arr[j];
           arr[j]=temp;     
        }  
      }   
    }
    return arr;
  }