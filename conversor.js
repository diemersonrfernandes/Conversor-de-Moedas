const botaoConverter = document.querySelector(".botao-converter-valor");
const selectMudar = document.querySelector(".mudar");

function botaoConverterValor() {
  const valorDigitado = document.querySelector(".input-valor-digitado").value;
  const valorConvertidoum = document.querySelector(".valor-convertido1");
  const valorConvertidodois = document.querySelector(".valor-convertido2");

  const valorDolar = 4.97;
  const valorEuro = 5.36;

  if (selectMudar.value == "dolar") {
    valorConvertidodois.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(valorDigitado / valorDolar);
  }

  if (selectMudar.value == "euro") {
    valorConvertidodois.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(valorDigitado / valorEuro);
  }

  valorConvertidoum.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valorDigitado);
}

function trocarMoeda() {
  const dolarAmericano = document.querySelector(".dolar-americano");
  const imagemLogo = document.querySelector(".usa");

  if (selectMudar.value == "dolar") {
    dolarAmericano.innerHTML = "Dólar Americano"
    imagemLogo.src="usa.png"
  }
  if (selectMudar.value == "euro") {
    dolarAmericano.innerHTML = "Euro"
    imagemLogo.src="euro.png"
  }

  botaoConverterValor()

}

selectMudar.addEventListener("change", trocarMoeda);
botaoConverter.addEventListener("click", botaoConverterValor);


function limparCampos(){
const valorDigitado = document.querySelector(".input-valor-digitado")
valorDigitado.value = "";
botaoConverterValor() = "";
}

