

async function fetchData(route,options) {
     const apiUrl = "http://192.168.0.20:3000" ;
     const fetchURL = apiUrl + route  ;
     try {
         const response = await fetch(fetchURL, options);
         return await response.json();
     } catch (error) {
         console.log(error);
         return null;
     }
 }
 export default fetchData;
