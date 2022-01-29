document.addEventListener('DOMContentLoaded', function(event) {

    //WEATHER API CALL

    const weathApiKey = "8440b2bca0044da0e62368b7c1817224";

    async function getTemp() {
        let weathApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=tokyo&APPID=${weathApiKey}`

        const tokyoResp = await fetch(weathApiUrl);
        const tokyoData = await tokyoResp.json();
        console.log(tokyoData);

        weathIcon = document.querySelector(".weather-icon");
        weathIconData = tokyoData.weather[0].icon;
        weathIconUrl = `http://openweathermap.org/img/wn/${weathIconData}@2x.png`
        
        weathIcon.setAttribute('src', weathIconUrl)

        const tempDescTag = document.createElement('p');
        tempDescTag.classList.add('fact-sect-caption', 'current-desc');
        document.querySelector('.weather-sect').appendChild(tempDescTag);

        const weathIconDesc = tokyoData.weather[0].description;
        document.querySelector('.current-desc').innerHTML = `${weathIconDesc} in <span class="emph">Tokyo, Japan</span>`;

        function convertToF(k) {
            const f = (k - 273.15) * 9/5 + 32;
            return f.toFixed(0);
        }

        const tempDataF = convertToF(tokyoData.main.temp);
        document.querySelector('.current-temp').innerText = `${tempDataF}°`;
        
        const feelDataF = convertToF(tokyoData.main.feels_like);
        const realFeelpTag = document.createElement('p');
        realFeelpTag.classList.add('fact-sect-caption', 'fact-sect-caption-small');
        realFeelpTag.innerText = `Feels like ${feelDataF}°`
        document.querySelector('.weather-sect').appendChild(realFeelpTag);

        const humData = tokyoData.main.humidity;
        const humPtag = document.createElement('p');
        humPtag.classList.add('fact-sect-caption', 'fact-sect-caption-small');
        humPtag.innerText = `Humidity is ${humData}%`
        document.querySelector('.weather-sect').appendChild(humPtag);

    }

    getTemp();


    //CURRENCY API CALL
    const currApiKey = "c1f3d730-8125-11ec-9493-551d290342b7"

    async function callCurr() {
        let currUrl = `https://freecurrencyapi.net/api/v2/latest?apikey=${currApiKey}`
        const currResp = await fetch(currUrl);
        const currData = await currResp.json();        

        const currTag = document.createElement('h2');
        currTag.classList.add('fact-sect-title', 'jpy-curr');
        currTag.innerText = `¥${currData.data.JPY.toFixed(2)}`
        document.querySelector('.currency-sect').appendChild(currTag);

        console.log(currData);
    }

    callCurr();



























});