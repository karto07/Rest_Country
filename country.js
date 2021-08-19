let request = new XMLHttpRequest();

request.open('GET',"https://restcountries.eu/rest/v2/all",true)

request.onload = () =>
{
    data = JSON.parse(request.responseText);
    let asian_countries = data.filter((country)=> country.region === "Asia")        // Countries in Asia Region
    console.log("Countries in Asia Region:",asian_countries)

    let population = data.filter((country)=>country.population<200000)              // Countries with less than 200000 population.
    console.log("Countries with less than 2Lakh Population:", population)       


    let details = []                                                                // Countries Details using forEach
    country_details = data.forEach(country => 
        {
            details.push({"Name":country.name,"Capital":country.capital,"Flag":country.flag})
        });
    console.log("Countries Details using forEach",details)                                                


    let population_sum = data.map((country) => country.population).reduce((a,b)=>a+b)   // Sum of Population.
    console.log("Summation of All Countries Population:",population_sum)



    let currency = []                                                                       // Countries with USD Currency
    for (let i in data)                                                                     // Solution - 1 
    {
       for (let j in data[i].currencies)
       {
           if(data[i].currencies[j].code==="USD")
           {
               currency.push({"name":data[i].name,"code":data[i].currencies[j].code})
               break
           }
       }
    }
    console.log("Countries with USD currency,Solution-1",currency)

    let currency1= data.filter(d=>d.currencies.some(cat=>cat.code==="USD"))                        //  Solution - 2
    console.log("Countries with USD currency,Solution-2",currency1)

}

request.send()


