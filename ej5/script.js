function Area(){
    const area=document.getElementById("Calcular").value
    const A =parseFloat(document.getElementById("LadoA").value)
    const B =parseFloat(document.getElementById("LadoB").value)
    const C =parseFloat(document.getElementById("LadoC").value)
     
        if (area==1) {
            const areaTriangulo = 0.5 * (A - C) * B;
            document.getElementById("texto").innerText= areaTriangulo.toFixed(2)
        }
        if(area==2){
            const areaRectangulo = C * B;
            document.getElementById("texto").innerText= areaTriangulo.toFixed(2)
        }
        if(area==3){
            const areaA = 0.5 * (A + C) * B;
            document.getElementById("texto").innerText= areaA.toFixed(2)
        }
}