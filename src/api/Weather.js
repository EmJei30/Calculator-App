export const baseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '37cb43bb5cmshab8badb6019080ap1157dfjsn0fa5d5697f63',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const baseUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const GEO_API = 'http://api.openweathermap.org/geo/1.0';
export const WEATHER_API_KEY = '15b5fa0ea4638e61bacd07fd9116575f';
export const WEATHER_API = 'https://api.openweathermap.org/data/2.5';

//current weather api
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//forecast weather api
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}