const currencyEl_one = document.getElementById('currency-one')
const amountEl_one = document.getElementById('amount-one')
const currencyEl_two = document.getElementById('currency-two')
const amountEl_two = document.getElementById('amount-two')
const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')

const api_key = '9173ec54a847a9ee3df7a081'

function calculate(){
    const currency_one = currencyEl_one.value
    const currency_two = currencyEl_two.value

    // console.log(currency_one, currency_two)
    fetch(`https://v6.exchangerate-api.com/v6/${api_key}/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            // console.log(currency_two)
            // const currency_two = currencyEl_two.value
            const rate = data.conversion_rates[currency_two]
            // console.log(rate)
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2)
        })
}

//Event listeners
currencyEl_one.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
currencyEl_two.addEventListener('change', calculate)
amountEl_two.addEventListener('change', calculate)

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value
    currencyEl_one.value = currencyEl_two.value
    currencyEl_two.value = temp
    calculate()
})

calculate()