function Limpiar() {e
    document.getElementById('CalcuMate').reset()
}
function Sumar() {
    let n1 = parseInt(document.getElementById('numero1').value)
    let n2 = parseInt(document.getElementById('numero2').value)
    document.getElementById("Resultado").innerHTML = (n1+n2);
}
function Restar() {
    let n1 = parseInt(document.getElementById('numero1').value)
    let n2 = parseInt(document.getElementById('numero2').value)
    document.getElementById("Resultado").innerHTML = (n1-n2);
}
function Multiplicar() {
    let n1 = parseInt(document.getElementById('numero1').value)
    let n2 = parseInt(document.getElementById('numero2').value)
    document.getElementById("Resultado").innerHTML = (n1*n2);
}
function Dividir() {
    let n1 = parseInt(document.getElementById('numero1').value)
    let n2 = parseInt(document.getElementById('numero2').value)
    document.getElementById("Resultado").innerHTML = (n1/n2);
}
