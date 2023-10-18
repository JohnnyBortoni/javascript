function somar() {
    var tn1 = window.document.getElementById("txtn1")
    var tn2 = window.document.getElementById("txtn2")
    var resp0 = window.document.getElementById("resp0")
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var souma = n1 + n2
    resp0.innerHTML = `O resultado da soma de ${n1} e ${n2}, é <strong>                 ${souma.toFixed(4)}</strong>`
}
function subtrair() {
    var tn3 = window.document.getElementById("txtn3")
    var tn4 = window.document.getElementById("txtn4")
    var resp1 = window.document.getElementById("resp1")
    var n1 = Number(tn3.value)
    var n2 = Number(tn4.value)
    var subtra = n1 - n2
    resp1.innerHTML = `O resultado da subtração de ${n1} e ${n2}, é <strong>            ${subtra.toFixed(4)}</strong>`
}
function divisao() {
    var tn5 = window.document.getElementById("txtn5")
    var tn6 = window.document.getElementById("txtn6")
    var resp2 = window.document.getElementById("resp2")
    var n1 = Number(tn5.value)
    var n2 = Number(tn6.value)
    var divi = n1 / n2
    resp2.innerHTML = `O resultado da divisão de ${n1} e ${n2}, é <strong>              ${divi.toFixed(4)}</strong>`
}
function multiplicacao() {
    var tn7 = window.document.getElementById("txtn7")
    var tn8 = window.document.getElementById("txtn8")
    var resp3 = window.document.getElementById("resp3")
    var n1 = Number(tn7.value)
    var n2 = Number(tn8.value)
    var multi = n1 * n2
    resp3.innerHTML= `O resultado da multiplicação de ${n1} e ${n2}, é <strong>         ${multi.toFixed(4)}</strong>`
}
function potenciacao() {
    var tn9 = window.document.getElementById("txtn9")
    var tn10 = window.document.getElementById("txtn10")
    var resp4 = window.document.getElementById("resp4")
    var n1 = Number(tn9.value)
    var n2 = Number(tn10.value)
    var poten = n1 ** n2
    resp4.innerHTML = `O resultado da potenciação de ${n1} e ${n2}, é <strong>          ${poten.toFixed(4)}</strong>`
}
function raiz_quadrada() {
    var tn11 = window.document.getElementById("txtn11")
    var resp5 = window.document.getElementById("resp5")
    var n1 = Number(tn11.value)
    const raiz_2 = Math.sqrt(n1)
    resp5.innerHTML = `O resultado da raiz quadrada  de ${n1}, é <strong>               ${raiz_2.toFixed(4)}</strong>`
}
function raiz_cubica() {
    var tn12 = window.document.getElementById("txtn12")
    var resp6 = window.document.getElementById("resp6")
    var n1 = Number(tn12.value)
    const raiz_3 = Math.cbrt(n1)
    resp6.innerHTML = `O resultado da raiz cúbica  de ${n1}, é <strong>                 ${raiz_3.toFixed(4)}</strong>`
}