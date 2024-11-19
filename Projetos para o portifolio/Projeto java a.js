function promoção(){
    var medicamento = document.getElementById("MedicamentoID").value;
    var preço = parseFloat(document.getElementById("PreçoID").value);

    var preçoPromoção;
    if(Number.isInteger(preço))
    {
        preçoPromoção = preço*2;
    }
    else
    {
        preçoPromoção = Math.floor(preço)*2;
    }

    document.getElementById("PromoçãoMediID").innerHTML = "Promoção de " + medicamento + ":<br>Leve 2 por apena R$: " + preçoPromoção + ",00";
}