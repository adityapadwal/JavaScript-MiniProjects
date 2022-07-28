document.body.style.backgroundColor="#fab1c1";

function calculate()
{
  var total=document.getElementById('amount').value;
  var people=document.getElementById('split').value;
  var option=document.getElementById('quality').value;
  var fans;
  if(total === '')
  {
    alert("Please enter the total bill amount ")
  }
  else if(people==='')
  {
    alert("Please enter the no. of people to split the bill")
  }
  else {
    fans=Math.round((total*option)/people);
    //fans= (total*quality)/people;
    document.getElementById('ans').innerHTML="Tip amount: "+ fans;
    //alert(fans);
  }
}
