function Love() {
    let name1 = prompt("Введите имя")
    let name2 = prompt("Введите имя")
    alert(name1 + "  и" + name2 + " идеальная пара")
    
  }
  function IMB() {
    let m = prompt("Масса")
    let w = prompt("Рост")
    x = m/w^2

if(x<=18.5)
    {
    alert(" Иди поешь")  
    }
else if(x<=25)
    {
    alert(" Нормально ")    
    }
    else if(x<=30)
    {
    alert(" Лишний вес")    
    }
    else if(x>30)
    {
    alert("Ожирение ")      
    }
  }


  function Year() {
    let y = prompt("Год")
   
    if( y%4 == 0  || y%400 == 0)
    {
        alert(" високосный ")   
    }
    else if (y%100 != 0)
    {
        alert(" нет ")  

    }
  }
  function Pay(){
    let mainList = ['Даша',"Маша","Бебра","Абоба"];
   
alert(mainList[Math.floor(Math.random(0,3))]) 
  }
