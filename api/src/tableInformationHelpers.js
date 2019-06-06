var cheerio = require('cheerio');


export const collectInformationFromTheHTML = (html) =>{

    var $ = cheerio.load(html);

    const insideTempRow = $('.tg-j8zs', '').text();

    const outsideTempRow = $('.tg-uh33', '').text();

    const pressureRow = $('.tg-uh33', '').text();

    const weatherInformation = {
        temperature: { 
            inside: getInsideTemperature(insideTempRow),
            outside: getOutsideTemperature(outsideTempRow),
        } ,
        pressure: getPressure(pressureRow),
    }

    return weatherInformation;
}

export const getInsideTemperatureRow = (html) =>{
    return "wow";
};

export const getPressure = (text) => {
    const regex = /ciśnienie:(.*)hPa/gs;
    let match = regex.exec(text)[1];
    const filteredResult = match.trim();
    return filteredResult;
}

export const getInsideTemperature = (text)=>{
    const regex = /pokoju:(.*)°C/gs;
    let match = regex.exec(text)[1];
    const filteredResult = match.trim();
    return filteredResult;
}

export const getOutsideTemperature = (text) => {
    const regex = /zewnątrz:(.*)°C/gs;
    let match = regex.exec(text)[1];
    const filteredResult = match.trim();
    return filteredResult;
}