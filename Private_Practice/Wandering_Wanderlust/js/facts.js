document.addEventListener('DOMContentLoaded', function(event) {

    //WEATHER API CALL

    const weathApiKey = "8440b2bca0044da0e62368b7c1817224";

    async function getTemp() {
        let weathApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=tokyo&APPID=${weathApiKey}`

        const tokyoResp = await fetch(weathApiUrl);
        const tokyoData = await tokyoResp.json();
        // console.log(tokyoData);

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

    const baseCurrDisp = document.querySelector('#base-curr');
    const tarCurrDisp = document.querySelector('#target-curr');
    const entCurrBtn = document.querySelector('#enter-curr');

    async function callCurr() {
        let currUrl = `https://freecurrencyapi.net/api/v2/latest?apikey=${currApiKey}`
        const currResp = await fetch(currUrl);
        const currData = await currResp.json();        

        // console.log(currData);

        const currTag = document.createElement('h2');
        currTag.classList.add('fact-sect-title', 'jpy-curr');
        currTag.innerText = `¥${currData.data.JPY.toFixed(2)}`
        document.querySelector('.currency-sect').appendChild(currTag);

        baseCurrDisp.value = "1";
        // tarCurrDisp.value = currData.data.JPY.toFixed(2);
        

        function usdToJpy(e) {
            e.preventDefault();
    
            const baseCurrValtoNum = parseInt(baseCurrDisp.value);
            const usJpyConv = baseCurrValtoNum * currData.data.JPY;
            
            // tarCurrDisp.value = usJpyConv.toFixed(2);
            document.querySelector('.jpy-curr').innerText = `¥${usJpyConv.toFixed(2)}`;
        }
    
        entCurrBtn.addEventListener('click', usdToJpy);
    }

    callCurr();


    // RANDOMIZE TRANSPORTATION
    const liArr = document.querySelectorAll('.transpo-items');
    const aArr = document.querySelectorAll('.transpo-a');
    const iArr = document.querySelectorAll('.transpo-pic');
    const nameArr = document.querySelectorAll('.transpo-name');

    const pixKey = '25546901-7f4380bdba51cf6930b1348ea'

    async function callPix() {
        const pixUrl = `https://pixabay.com/api/?key=${pixKey}&q=japan+public+transportation&image_type=photo`;

        const pixResp = await fetch(pixUrl);
        const pixData = await pixResp.json();
    
        function randSet(quantity, max) {
            const randArr = [];
            while(randArr.length < quantity) {
                randArr.push(Math.floor(Math.random() * max))
            }
            return randArr;
        }
    
        const randNums = randSet(4, pixData.hits.length);
        console.log(randNums);
    
        for (let i=0; i<liArr.length; i++) {
            aArr[i].setAttribute('href', pixData.hits[randNums[i].pageURL]);
            iArr[i].setAttribute('src', pixData.hits[randNums[i].largeImageURL]);
            iArr[i].setAttribute('alt', pixData.hits[randNums[i].tags]);
        }
    }

    callPix();


    


    // const transport = {
    //     name: [
    //         'Nagoya Bus',
    //         'Ferries',
    //         'Highway Buses',
    //         'Shinkansen',
    //         'Taxis',
    //         'Osaka Loop Line',
    //         'Kyoto Buses',
    //         'Osaka Monorail',
    //         'Chuo Line'
    //         ],
    //     href: [
    //         'https://www.kotsu.city.nagoya.jp/en/pc/BUS/TRP0000987.htm',
    //         'https://www.japanvisitor.com/japan-travel/japan-transport/japan-ferry',
    //         'https://www.japanvisitor.com/japan-travel/japan-transport/highway-buses',
    //         'https://www.japanvisitor.com/japan-travel/shinkansen',
    //         'https://www.japanvisitor.com/japan-travel/japan-transport/japan-taxis',
    //         'https://www.japanvisitor.com/japan-travel/osaka-loop-line',
    //         'https://www.japanvisitor.com/japan-transport/kyoto-buses',
    //         'https://www.japanvisitor.com/japan-transport/osaka-monorail',
    //         'https://www.japanvisitor.com/japan-transport/chuolinenagoya'
    //     ],
    //     src: [
    //         'https://www.japanvisitor.com/images/content_images/nagoyabus2018-3.jpg',
    //         'https://www.japanvisitor.com/images/content_images/japan-ferry-pass-3.jpg',
    //         'https://www.japanvisitor.com/images/content_images/highwaybus20189.jpg',
    //         'https://www.japanvisitor.com/images/content_images/shinkansen-2017-44.jpg',
    //         'https://www.japanvisitor.com/images/content_images/kochi-taxi-2017-1.jpg',
    //         'https://www.japanvisitor.com/images/content_images/osaka-power-loop.jpg',
    //         'https://www.japanvisitor.com/images/content_images/kyoto-bus-2018-1.jpg',
    //         'https://www.japanvisitor.com/images/content_images/osaka-monorail-1.jpg',
    //         'https://www.japanvisitor.com/images/content_images/tsurumai-station-2017-2x.jpg'
    //         ]
    // }   


    





    // const transpoList = document.querySelector(".transpo-list");
    
    // const transpoListLi = document.createElement('li');
    // transpoListLi.setAttribute('class', 'transpo-li');
    
    // const transpoAlink = document.createElement('a');
    // transpoAlink.setAttribute('class', 'transpo-a');

    // const transpoPic = document.createElement('img');
    // transpoPic.setAttribute('class', 'transpo-pic');

    // transpoList.appendChild(transpoListLi);
    // transpoList.appendChild(transpoListLi);
    // transpoList.appendChild(transpoListLi);

    // for (let i=1; i<4; i++) {
    //     transpoList.appendChild(transpoListLi);
    //     console.log('loop works')
    // }

    // const transpoListLiArray = document.querySelectorAll('.transpo-items');
    
    // transpoListLiArray.forEach(n => {
    //     n.appendChild(transpoAlink);
    // });













});