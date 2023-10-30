/* const request = require('request')

const moedasAwesomeapi = 'USD-BRL'

const options = {
  url: `https://economia.awesomeapi.com.br/last/${moedasAwesomeapi}`,
  method: 'GET',
  Headers: {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8'
  }
}

const callback_todas_cotacoes = function (erro, res, body){
  let json = JSON.parse(body)
  console.log(json)
}
 request(options, callback_todas_cotacoes)
 */

//clicar no botão e converter os valores das moedas

const convertButton = document.querySelector(".convert-button")
const selecaoDeMoedas = document.querySelector(".selecaoMoedas")


function convertValues(){
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const valorConvertidoReal = document.querySelector(".valorMoedaReal") // valor em real
  const valorConvertidoOutro = document.querySelector(".valorMoedaOutra") // outras moedas



  // const para valores de moedas
  const dolar = 5.01
  const euro = 5.26
  const btc = 172.513
  const libra = 6.03

  //convert real / dolar

  if(selecaoDeMoedas.value == "Dolar"){
    valorConvertidoOutro.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / dolar)
  }
  else if(selecaoDeMoedas.value == "Euro"){
    valorConvertidoOutro.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euro)
  }
  else if (selecaoDeMoedas.value == "Libra"){
    valorConvertidoOutro.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "GBP"
    }).format(inputCurrencyValue / libra)
  }
  else if (selecaoDeMoedas.value == "Bitcoin"){
    valorConvertidoOutro.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC"
    }).format(inputCurrencyValue / btc)
  }

   // intnumber para formatar moeda real
  valorConvertidoReal.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue)


}
 //mudar os simbolos dos paises

 function changeCurrency(){
  const currencyName = document.getElementsById("currency-name")
  if(selecaoDeMoedas.value == "Dolar") {
    currencyName.innerHTML = "Dolar Americano"
  }
  else if(selecaoDeMoedas.value == "Euro") {
    currencyName.innerHTML = "Euro"
  }
  else if(selecaoDeMoedas.value == "Libra") {
    currencyName.innerHTML = "Libra"
  }
  else if(selecaoDeMoedas.value == "Bitcoin") {
    currencyName.innerHTML = "Bitcoin"
  }


 }
 selecaoDeMoedas.addEventListener('change', changeCurrency)

 console.log(changeCurrency)

convertButton.addEventListener("click", convertValues)

