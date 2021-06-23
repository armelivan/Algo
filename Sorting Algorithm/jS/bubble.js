/*
Bubble sort:  average  O(n^2), best  O(n) 
 We proceed by swapping continually adjacents elements.
*/


let bubbleSort= arr=>{

  // pour le nombre de tours et fixe le début
  for(let i =0;i<arr.length;i++){

    for(let j=i;j<arr.length-2;i++){
        // fonction de comparaison(swap)
        if(arr[i]>arr[i+1]){
          let temp= val1;
          arr[i]=val2;
          arr[i+1]=temp;
        }
    }

}

