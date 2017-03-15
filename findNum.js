function findMissing(arr1,arr2){
      if(arr1.length === 0 && arr2.length === 0){
        return 0 ;
        }
      
      var list1;
      var list2;
      
      arr1 = arr1.sort();
      arr2 = arr2.sort();
      
      if(arr1.length > arr2.length){
        list1 = arr1;
        list2 = arr2;
      }
      else if(arr1.length === arr2.length){
        return 0;
      }
      else{
        list1 = arr2;
        list2 = arr1;
      }
      
    
      for(var i = 0; i<list1.length;i++){
          if(list1[i] !== list2[i] ){
            return(list1[i]);
          }
         
        }
  }
  module.exports={
    findMissing: findMissing
  }
  console.log (findMissing([4, 6, 8],[4, 6, 8, 10]))