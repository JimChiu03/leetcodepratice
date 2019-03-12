var addTwoNumbers = function(l1, l2) {
    var sum=0;
    var curr = new ListNode(0);
    var result = curr;
 while(l1||l2) {
           
        if(l1){
            sum = sum + l1.val;
            l1=l1.next;
            
        }
        
       if(l2) {
           sum = sum+ l2.val;
           l2=l2.next;
             
        }

  

     curr.next = new ListNode(sum%10); 
     curr= curr.next;

     sum = sum > 9 ?1:0;
   
  
    }

    if(sum) {
        curr.next = new ListNode(sum);

    }

    return result.next;
    };

