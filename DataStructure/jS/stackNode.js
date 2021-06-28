//stack implementation with a linkedlist 
// Linkedlist with a push and pop operation 
// to be completed 
let stackNode = class{

  
  constructor(){
    this.node = null;
  }
  

  
  // is the structure empty
  empty(){
    return (this.node==null);
  }
  
  //adding an element to the stack 
  push(value){
    let node = new Node();
    node.changeValue(value);
    node.changePrec(this.node);
    this.node= node;
  }
  
  // removing the first element of a list 
  pop(){
    
    if(this.empty()){
      console.log("Their is nothing to bee found inside");
    }else{
      let temp = this.node.getValue;
      this.node = this.node.prec;
      return temp;
    }
  }

  
}

let Node = class{
  
  constructor(){
    this.value = null;
    this.prec=null;
  }
  
  
  // setters 
  changePrec(node){
    this.prec =node;
  }
  
  changeValue(value){
    this.value = value;
  }
  
  //getters
  getPrec(node){
    return this.prec;
  }
  
  getValue(node){
    return this.value;
  }
  
}


let s = new stackNode();
console.log(s);

s.push(22);



