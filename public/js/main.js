const submitBtn =document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");

const getinfo = async (e)=>{
    e.preventDefault();
    let cityVal = cityName.value;

    if(cityVal==""){
        city_name.innerText = `please write the city name before search`;
        datahide.classList.add('data_hide');
    }else{
       try {
        let url = `https://api.openweathermap.org/data/2.5/find?q=${cityVal}&units=metric&appid=47c30ef54866bdae88e940488f5ee713`;
        
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        city_name.innerText =`${arrData[0].list[0].name},${arrData[0].list[0].sys.country}`;
        temp_real_val.innerHTML = arrData[0].list[0].main.temp;
        temp_status.innerText = arrData[0].list[0].weather[0].main;
        datahide.classList.remove('data_hide');
        
       } catch (error) {
    
        city_name.innerText = `please Enter the city name Properly`;
        datahide.classList.add('data_hide');
       }
    }
}

submitBtn.addEventListener('click',getinfo);


 



