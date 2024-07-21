import fetchData from "./fetchService.js";

async function fetchCDGR() {
    let response;
    let result;
    try {
        response = await fetchData("/data/getData", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (response &&
            response.result &&
            Array.isArray(response.result) &&
            response.result.length) {
            result = response.result.map((item) => ({
                id: item.monitorId,
                sensor: {
                    name: item.monitorName,
                    value: item.value,
                },
            }));
            return (result);
        }
    } catch (error) {
        console.error("Can´t get ", error);
        return null
    }
}

export default fetchCDGR;


