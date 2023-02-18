// deposite Button clicked event
document.getElementById('depo-submit').addEventListener('click',function(){
    const depo = document.getElementById('depo');
    const depoValue = depo.value;
    const depoValueInt = parseInt(depoValue);
    //deposite
    const depoCount = document.getElementById('depo-count');
    const depoCountValue = depoCount.innerText;
    const depoCountInt = parseInt(depoCountValue);

    //total
    const totalCount = document.getElementById('balance-count');
    const totalCountValue = totalCount.innerText;
    const totalCountInt = parseInt(totalCountValue);

    //clear depo
    depo.value ='';

    //NaN validation
    if(isNaN(depoValue)){
        alert('Please Provide a valid number');
        return;
     }

    //depo count
    depoCount.innerText = depoValueInt + depoCountInt;

    //total count

    totalCount.innerText = depoValueInt + totalCountInt;
    
});

//withdraw button clicked event
document.getElementById('with-submit').addEventListener('click',function(){
    const withdraw = document.getElementById('with');
    const withValue = withdraw.value;
    const withValueInt = parseInt(withValue);
    //withdraw 
    const withCount = document.getElementById('with-count');
    const withCountValue = withCount.innerText;
    const withCountInt = parseFloat(withCountValue);
    //total
    const totalCount = document.getElementById('balance-count');
    const totalCountValue = totalCount.innerText;
    const totalCountInt = parseFloat(totalCountValue);

    //clear withdraw
      withdraw.value ='';
    
    //NaN validation
    if(isNaN(withValue)){
         alert('Please Provide a valid number');
         return;
    }

    //withdraw validation
    if (withValue <= totalCountInt){
        withCount.innerText = withValueInt + withCountInt;
        totalCount.innerText = totalCountInt - withValueInt;
    }
    else if(withValue > totalCountInt){
        alert('Etoo tk dite parlam na')
    }

    //total count
    // const totalCount = document.getElementById('balance-count');
    // const totalCountValue = totalCount.innerText;
    // const totalCountInt = parseFloat(totalCountValue);
    // totalCount.innerText = totalCountInt - withValueInt;
  
})
