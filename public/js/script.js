const cityName = document.querySelector("#cityName");
const city_name = document.querySelector("#city_name");
const submitBtn = document.querySelector("#submitBtn");

const temp_real_value = document.querySelector("#temp_real_value");
const temp_status = document.querySelector("#temp_status");
const datahide = document.querySelector(".middle_layer");

let appKey = "83896bbf4bccfa73f327d5deb124909d";

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    
    if(cityVal == ""){
        city_name.innerText = "Please write the city name for search.";
        datahide.classList.add('data_hide')
    }else{
        try{
            
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${appKey}`;
            
            
            const response = await fetch(url);
            
            const data = await response.json();
            const arrData = [data];
            
            
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_value.innerText = arrData[0].main.temp;
            console.log(arrData);
            const tempMode = arrData[0].weather[0].main;

            if(tempMode == "Clear"){
                temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }else if(tempMode == "Clouds"){
                temp_status.innerHTML = 
                "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }else if(tempMode == "Rain"){
                temp_status.innerHTML = 
                "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }else{
                temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color: #faf2f6;'></i>";
            }

            datahide.classList.remove('data_hide');

        }catch{
            city_name.innerText = "City not found!";
        }
    }
    
}
submitBtn.addEventListener('click', getInfo);