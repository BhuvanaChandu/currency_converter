const convertButton=document.getElementById("currency-converter")
convertButton.addEventListener("click",convertCurrency);
let currencyInfo;///money


function getListOfCurrencies(){
    return fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json").then(res=>res.json())
}

function buildCurrencyOptions(){
    let listOfCurrencies;//countries
    getListOfCurrencies().then(result=>{
        listOfCurrencies=result
        console.log(listOfCurrencies)

        let fromCurrency=document.getElementById("fromCurrency");
        let toCurrency=document.getElementById("toCurrency");

        for (let key in listOfCurrencies){
            let fromCurrencyOption=document.createElement("option");
            fromCurrencyOption.id=`${key}_from`;
            fromCurrencyOption.value=key;
            fromCurrencyOption.textContent=listOfCurrencies[key];
            fromCurrency.appendChild(fromCurrencyOption);
            let toCurrencyOption=document.createElement("option");
            toCurrencyOption.id=`${key}_to`;
            toCurrencyOption.value=key;
            toCurrencyOption.textContent=listOfCurrencies[key];
            toCurrency.appendChild(toCurrencyOption)
        }
    });
    console.log(listOfCurrencies)
}

function loadCurrencyValues(){
    fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json")
        .then(res=>res.json())
        .then(data=>currencyInfo=data);
}

function convertCurrency(){
    let fromCurrency=document.getElementById("fromCurrency");
    let toCurrency=document.getElementById("toCurrency");

    const selectedFromCurrency=fromCurrency.value;
    const selectedToCurrency=toCurrency.value;

    if (selectedFromCurrency && selectedToCurrency){
        let {eur}=currencyInfo;
        let convertedAmount=eur[selectedToCurrency]/eur[selectedFromCurrency];//cop-crc--4622.59/580.49
        let result=document.getElementById("result")
        let amountToConvert=document.getElementById("amount").valueAsNumber;//1
        result.value=(amountToConvert*convertedAmount)//83..
    }
}
convertButton.addEventListener("click",()=>{

})
loadCurrencyValues();
buildCurrencyOptions();