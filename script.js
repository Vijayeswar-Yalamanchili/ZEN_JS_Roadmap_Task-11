fetch("https://restcountries.com/v3.1/all")
    .then((data)=> data.json())
    .then((ele)=>{ 
        for(let i = 0; i < ele.length; i++) {
            // console.log(ele[i].name.common);
            const div = document.createElement("div");
            let lat = `${ele[i].latlng[0]}`;
            let long = `${ele[i].latlng[1]}`;
            // div.classList.add("container","d-flex" , "flex-row")
            div.setAttribute("class","container")
            div.innerHTML = `
                <div class="row col-lg-4 col-sm-12">
                    <div class="card">
                        <div class="card-header">${ele[i].name.common}</div>
                        <img src="${ele[i].flags.png}" class="card-img-top" alt="Flag">
                        <div class="card-body text-center">
                            <p class="card-text"> Capital : ${ele[i].capital}</p>
                            <p class="card-text"> Region : ${ele[i].region}</p>
                            <p class="card-text"> Country Code : ${ele[i].subregion}</p>
                            <p class="card-text"> Lat & Lng : ${lat} , ${long}</p>
                            <button type="button" id="button" onclick="weather(${lat},${long})" class="btn btn-primary">Click for Weather</button>
                        </div>
                    </div>
                </div>`;
            document.body.append(div);
        }       
    });

    function weather( lat, long) {
        console.log("yes");
        let apiKey = 'c3a878b7af8cd7df27b3a0a62c548e7a';
        // return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid={c3a878b7af8cd7df27b3a0a62c548e7a}`)
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`)
        .then((data1)=> data1.json())
        .then((data)=> {
            alert (` 
                Current Humidity is ${data.main.humidity}
                Current Pressure is ${data.main.pressure}
                Current Temperature is ${data.main.temp}`)
        })
            
        .catch((err)=> console.log(err))
    }


    
