const api = 'https://fakestoreapi.com/products/1';

const FetchData = async () =>{

    const  response = await fetch(api);
    const data = await response.json();
    console.log(data);

}

// FetchData();




const apikey = '610a27574ba483a4dbecd8d28a0ef557';

const API = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apikey}`;


const FetchDataa = async () =>{
       const response = await fetch(API);
       const data = await response.json();
       console.log(data);
}
FetchDataa()