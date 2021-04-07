
const baseUrl = "http://awbtransport.com";

export async function contact_us_api(data: any ) {
    let res;
    try {
            res = await fetch(baseUrl+"/api/contact_us", {
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
               }
            }) ;
            const resultData = await res.json();
            //console.log("resultData", resultData);
            return resultData;
    } catch (ex) {
        //console.log("exception", ex);
        return ex;
    }
}