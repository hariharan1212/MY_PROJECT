let validate =()=>{
            let amount = document.querySelector("#Total_Amount").value;
            let intrest = document.querySelector("#Intrest_Rate").value;
            let time = document.querySelector("#Total_Months").value;
            let rhs = document.querySelector(".rhs");
            let scrollable = document.querySelector("#scrollable");
   if(amount<=0 || isNaN(amount) || amount.value ==""){
      //   amount.innerHTML="";
        alert("Please Enter Valid Amount");  
   }else if(intrest<0 || isNaN(intrest)){
      alert("Please Enter valid Intrest Amount");
      intrest.innerHTML=" ";
   }else if(time<0 || isNaN(time)){
      alert("Please Enter Valid Month");
      time.innerHTML=" ";
   }else{
      lhs_validation();
      table_validation();

     
   }


   // rhs.classList.add("rhs_visible");

   // scrollable.classList.add("scrollable_visible");
}


let lhs_validation=()=>{
            let amount = document.querySelector("#Total_Amount").value;
            let intrest = document.querySelector("#Intrest_Rate").value;
            let time = document.querySelector("#Total_Months").value;
            let rhs = document.querySelector(".rhs");
            let scrollable = document.querySelector("#scrollable");
            

            let roi = intrest/(100);
            // console.log(roi);
            //let emi=[amount*roi*(1+roi)*time]/[(1+roi)*time-1];  
           let emi = amount*(roi/12)*Math.pow((1+roi/12),time)/(Math.pow((1+roi/12),time)-1);
            document.querySelector(".para1").innerHTML=(`The Monthly Emi : ${emi.toFixed(2)}`)


             let total_amt =  emi*time;
            document.querySelector(".para2").innerHTML=(`Total Final Amount : ${total_amt.toFixed(2)}`);

            let total_emi_amt = total_amt- amount ;
            document.querySelector(".para3").innerHTML=(`Total EMI Amount : ${total_emi_amt.toFixed(2)}`)
            
           
                 rhs.classList.add("rhs_visible");

                 scrollable.classList.add("scrollable_visible");   
  
         }


     let table_validation =()=>{
                   let amount = document.querySelector("#Total_Amount").value;
                   let intrest = document.querySelector("#Intrest_Rate").value;
                   let time = document.querySelector("#Total_Months").value;
                  //  let scrollable = document.querySelector("#scrollable");
                   let roi = intrest/(100); 
                 let emi = amount*(roi/12)*Math.pow((1+roi/12),time)/(Math.pow((1+roi/12),time)-1);
                   
                  
                 
                   
                   //let emi=[amount*roi*(1+roi)*time]/[(1+roi)*time-1]; 

                    // emi =[amount*roi*Math.cbrt(1+roi).time/Math.cbrt((1+roi).time)-1]
                    //E = [P x R x (1+R)^N] / [(1+R) ^N-1]
                  

     
            let table = "";

            table += "<table cellpadding='14px'>";
               table += "<tr>";
                    table += "<td width='52px'>0</td>";
                    table += "<td width='200px'> </td>";
                    table += "<td width='100px'> </td>";
                    table += "<td width='100px'> </td>";
                    table += "<td width='200px'>"+ amount +"</td>";
               table += "</tr>";


                  // ------------------------------------------------------------- //
                  
                  let current_balance = amount;
                  let payment_months = 1 ; 
                  let principal_amount = 0;
                  let monthly_payment = emi;
                  let i = roi; // /100

               while(current_balance > 0){
                       principal_amount = (i/12)*current_balance;

                       towards_balance=monthly_payment - principal_amount;

                       current_balance = current_balance - towards_balance ;

                       table += "<tr>"
               table += "<td>"+payment_months+"</td>";
               table += "<td>"+monthly_payment.toFixed(2)+"</td>";
               table += "<td>"+towards_balance.toFixed(2)+"</td>";
               table += "<td>"+principal_amount.toFixed(2)+"</td>";
               // table += "<td>"+totaly_intrest+"</td>";
               table += "<td>"+current_balance.toFixed(2)+"</td>";



                                payment_months ++ ; 
               }

              
   
   
   
   
           table += "</table>";
        document.querySelector("#table").innerHTML=(table);
        

        
           
        }
