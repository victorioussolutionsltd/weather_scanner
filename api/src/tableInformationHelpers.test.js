import { getInsideTemperature, 
         getOutsideTemperature,
         getPressure,
         collectInformationFromTheHTML,
         getInsideTemperatureRow
        } from './tableInformationHelpers';


describe('collectInformationFromTheHTML', ()=>{

    const html ="\r\n<!DOCTYPE html PUBLIC \"-\/\/W3C\/\/DTD XHTML 1.0 Transitional\/\/EN\" \"http:\/\/www.w3.org\/TR\/xhtml1\/DTD\/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http:\/\/www.w3.org\/1999\/xhtml\">\r\n<head>\r\n<link rel=\"icon\" href=\"favico.png\" type=\"image\/x-icon\"\/>\r\n<link rel=\"shortcut icon\" href=\"favico.png\" type=\"image\/x-icon\"\/>\r\n<meta http-equiv=\"refresh\" content=\"300\" \/>\r\n<\/head>\r\n<body>\r\n\r\n<style type=\"text\/css\">\r\n.tg  {border-collapse:collapse;border-spacing:0;border-color:#ccc;}\r\n.tg td{font-family:Arial, sans-serif;font-size:14px;padding:0px 20px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;border-top-width:1px;border-bottom-width:1px;}\r\n.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 20px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#f0f0f0;border-top-width:1px;border-bottom-width:1px;}\r\n.tg .tg-uh33{background-color:#f9f9f9;font-family:\"Courier New\", Courier, monospace !important;;vertical-align:top}\r\n.tg .tg-j8zs{font-family:\"Courier New\", Courier, monospace !important;;background-color:#bbdaff;color:#343434;text-align:left}\r\n.tg .tg-a{font-weight:bold;font-family:\"Courier New\", Courier, monospace !important;;background-color:#5085c4;color:#000000;text-align:left}\r\n<\/style>\r\n\r\n<center><br><br><br><br><table class=\"tg\">\r\n  <tr>\r\n    <th class=\"tg-a\">https:\/\/sparon.one.pl<\/th>\r\n  <th class=\"tg-a\">~POGODYNKA~<\/th>\r\n  <th class=\"tg-a\"> &reg; radko<\/th>\r\n  <\/tr>\r\n  \r\n  <tr>\r\n    <th class=\"tg-j8zs\">data i czas pomiaru:<\/th>\r\n  <th class=\"tg-j8zs\">04.06.2019\r\n<\/th>\r\n  <th class=\"tg-j8zs\">23:25\r\n<\/th>\r\n  <\/tr>\r\n  <tr>\r\n    <td class=\"tg-uh33\">temperatura na zewn\u0105trz:<\/td>\r\n  <td class=\"tg-uh33\">24.75\r\n<\/td>\r\n  <td class=\"tg-uh33\">&degC<\/td>\r\n    <\/tr>\r\n<tr>\r\n    <th class=\"tg-j8zs\">temperatura w pokoju:<\/th>\r\n  <th class=\"tg-j8zs\">25.50\r\n<\/th>\r\n  <th class=\"tg-j8zs\">&degC<\/th>\r\n  <\/tr>\r\n  <td class=\"tg-uh33\">ci\u015Bnienie:<\/td>\r\n  <td class=\"tg-uh33\">1013.26\r\n<\/td>\r\n  <td class=\"tg-uh33\">hPa<\/td>\r\n    <\/tr>  <\/tr>\r\n  \r\n  <\/table><\/center> \r\n\r\n<\/body>\r\n<\/html>\r\n";

    const insideTemp = "25.50";
    const outsideTemp = "24.75";
    const pressure = '1013.26';

    const weatherInformation = {
        temperature: { 
            inside: insideTemp,
            outside: outsideTemp,
        } ,
        pressure: pressure,
    }

    it('shall collect information from html code', ()=>{
        expect(collectInformationFromTheHTML(html)).toStrictEqual(weatherInformation);
    });
});

describe('getPressure', ()=>{
    it('shall get pressure', ()=>{
        const text = "ciśnienie:	1013.19	hPa";
        expect(getPressure(text)).toBe('1013.19');
    });
});

describe('getInsideTemperature', ()=>{
    it('shall filter text for temperature', () => {
        const text = "temperatura w pokoju:	24.90	°C";
        expect(getInsideTemperature(text)).toBe('24.90');
    });
});


describe('getOutdoorTemperature', ()=>{
    it('shall filter text for outdoor temperature', () => {
         const text = 'temperatura na zewnątrz:	29.50	°C';
         expect(getOutsideTemperature(text)).toBe('29.50');
    });
});
