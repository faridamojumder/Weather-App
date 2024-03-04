const submitBtn=document.getElementById("btn")
const input=document.getElementById("inputfield");
const body = document.getElementById("body")


submitBtn.addEventListener('click',function (){
    let getinput=input.value;
     fetch("https://api.openweathermap.org/data/2.5/weather?q="+getinput+"&appid=3382befe5b98ef81121b502c02bc402d")
     .then(response => response.json())
     .then(data =>{
        const cityName  = data.name;
        const tem = data.main.temp;
        const temp = tem - 273.15;
        const description = data.weather[0].description;

        document.getElementById('city').innerHTML = cityName;
        document.getElementById('temp').innerHTML = temp.toFixed(2);
        document.getElementById('des').innerHTML = description;
        // body.style.backgroundImage ='url(/img/pp.jpg)';
     })
     .catch(res => alert("Wrong city name!"))
     input.value="";
    })
    