
// stack implementation with an array
// stack with a beginning finite dimension 
let stack = class{

  constructor(dim){
    this.top = 0; // head of the class 
    this.arr = new Array(dim);
  }

  empty(){
    return this.top==0;
  }
  //add the element x to the top of the stack 
  push(x){
    if (!this.top+1>dim){
       this.top+=1;
       this.arr[this.top]= x;
    }else{
      console.log("stack overflow");
    }

  }
  // remove the last element of the stack
  pop(){
    if(!this.empty){
      this.top-=1;
      return arr[this.top+1];
    }
    console.log("stack-underflow");
  }
}