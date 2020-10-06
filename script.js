
    let city_list = [  
        {
          "id": 1220988,
          "name": "Moskva",
          "state": "",
          "country": "TJ",
          "coord": {
              "lon": 69.627747,
              "lat": 37.661968
          }
        },
        {
          "id": 498817,
          "name": "Saint Petersburg",
          "state": "",
          "country": "RU",
          "coord": {
              "lon": 30.264168,
              "lat": 59.894444
          }
        },
        {
          "id": 499099,
          "name": "Samara",
          "state": "",
          "country": "RU",
          "coord": {
              "lon": 50.150002,
              "lat": 53.200001
          }
        },
        {
            "id": 584243,
            "name": "Adler",
            "state": "",
            "country": "RU",
            "coord": {
                "lon": 39.919998,
                "lat": 43.43
            }
        },
        {
            "id": 524305,
            "name": "Murmansk",
            "state": "",
            "country": "RU",
            "coord": {
                "lon": 33.09251,
                "lat": 68.979172
            }
        }
      ];
    
    
    let cityID;  
    
    document.querySelector('.moskow').onclick = () => {
        cityID = city_list[0]['id'];
        weather();
    }   
    document.querySelector('.spb').onclick = () => {
        cityID = city_list[1]['id'];        
        weather();
    }
    document.querySelector('.samara').onclick = () => {
        cityID = city_list[2]['id'];
        weather();
    }
    document.querySelector('.adler').onclick = () => {
        cityID = city_list[3]['id'];
        weather();
    }
    document.querySelector('.murmansk').onclick = () => {
        cityID = city_list[4]['id'];
        weather();
    }

function weather() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=189888ac67a33a472f489ba56ed6fcfb`)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg';
        document.querySelector('.disclaimer').textContent = data.weather[0]['main'];
        document.querySelector('.features-list').innerHTML = `<img class="features-list-img" src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        document.querySelector('.humidity').innerHTML = 'Влажность ' + (data.main.humidity) + '%';
        document.querySelector('.wind').innerHTML = 'Ветер ' + (data.wind.speed) + ' м/с';
    })
    .catch(function () {
        // catch any errors
    });
}

   