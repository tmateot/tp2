function IMC(){
    const peso=parseFloat(document.getElementById("peso").value)
    const altura=parseFloat(document.getElementById("altura").value)
    const IMCt=peso/(altura*altura)
    alert(`Tu IMC es ${IMCt.toFixed(2)}`);
}