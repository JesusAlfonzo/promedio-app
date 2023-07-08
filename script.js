var n1, n2, n3, n4, n5, final, p

function suma(n1,n2,n3) {
    let resultado
    resultado = n1+n2+n3
    return resultado
    
}

n1 = parseInt(prompt("Ingrese su primera nota"))
n2 = parseInt(prompt("Ingrese su segunda nota"))
n3 = parseInt(prompt("Ingrese su tercera nota"))

suma = suma(n1,n2,n3)

p = (suma / 3) * 0.55

document.write("<br>" + "Su promedio al 55% de la materia es: " + p)

n4 = parseInt(prompt("Ingrese su cuarta nota"))

p = (n4) * 0.30

document.write("<br>" + "Su promedio al 30% de la materia es: " + p)

n5 = parseInt(prompt("Ingrese su quinta nota"))

p = (n5) * 0.15

document.write("<br>" + "Su promedio al 15% de la materia es: " + p)

final = (suma + n4 + n5) / 3

document.write ("<br>" +"su promedio final de la materia es: " + final + "<br>")

if (final >= 50){
    document.write("Resultado final: Usted ha sido aprobado")
}

else {
    document.write("Resultado final: Usted ha sido reprobado")
}