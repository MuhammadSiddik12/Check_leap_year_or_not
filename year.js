function myyear(){
    var year =document.getElementById("inpu").value
    if (year.length===0){
        document.getElementById('year').innerHTML='Please Input  Something'
    }
    else{
    let year1= (year%100===0) ? (year%400===0) : (year%4===0 );
    if (year1===true){
        document.getElementById('year').innerHTML= 'It is a leap year';
    }else{
        document.getElementById('year').innerHTML= 'It is not a leap year';
    }}
}