fetch("https://restcountries.com/v3.1/all")
    .then((data)=> data.json())
    .then((ele)=>{ 
        for(let i = 0; i < ele.length; i++) {
            // console.log(ele[i].name.common);
            const div = document.createElement("div");
            let lat = `${ele[i].latlng[0]}`;
            let long = `${ele[i].latlng[1].toFixed(2)}`;
            // div.classList.add("container","d-flex" , "flex-row")
            div.setAttribute("class","container")
            div.innerHTML = `
            <div class = "row">
                <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 g-5">
                    <div class="card h-100 w-auto" style="width: 18rem;" id="card">
                        <div class="card-header text-center" id="country-name">${ele[i].name.common}</div>
                        <img src="${ele[i].flags.svg}" class="card-img-top" alt='country-cards'>
                        <div class="card-body">
                            <div class="card-text"><b>Region : </b>${ele[i].region}</div>
                            <div class="card-text"><b>Country-code : </b>${ele[i].altSpellings[0]}</div>
                            <div class="card-text"><b>Capital : </b>${ele[i].capital}</div>
                            <div class="card-text"><b>Population : </b>${ele[i].population}</div>
                            <div class="card-text"><b>LatLng : </b>${lat},${long}</div>
                            <div id="${ele[i].name.common}"></div>
                        </div>
                            <div class="card-footer d-flex justify-content-center">
                            <button type="button" id="button" onclick="weather(${lat},${long})" class="btn btn-primary">Click for Weather</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
            document.body.append(div);
        }       
    }
);

function weather( lat, long) {
    let apiKey = 'c3a878b7af8cd7df27b3a0a62c548e7a';
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`)
    .then((data1)=> data1.json())
    .then((data)=> {
        alert (` 
            Current Humidity is ${data.main.humidity}
            Current Pressure is ${data.main.pressure}
            Current Temperature is ${Math.round(data.main.temp-273)}`
        )}
    )
    .catch((err)=> console.log(err))
}