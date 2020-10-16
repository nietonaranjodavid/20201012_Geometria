import { menu } from '../views/menu'
import { leerTeclado } from '../views/lecturaTeclado'
const main = async () => {
    let n: number
    do {
        n = await menu()
        switch(n){
            case 1:
                console.log('Perimetro y Area del triangulo.........')
                let base, altura, ladoa, ladob: number
                base =  parseInt( await leerTeclado('Base del triángulo:'))
                altura =  parseInt( await leerTeclado('Altura del triángulo:'))
                ladoa =  parseInt( await leerTeclado('Lado A del triángulo:'))
                ladob =  parseInt( await leerTeclado('Lado B del triángulo:'))
                
                let perimetrotriangulo=perimetroTriangulo(base,ladoa,ladob)
                let areatriangulo=areaTriangulo(base,altura)
                
                console.log("Perímetro del triángulo="+perimetrotriangulo)
                console.log("Área del triángulo="+areatriangulo)
                break
            case 2:
                console.log('Perimetro y area del cuadrado..............')
                let lado:number
                lado = parseInt(await leerTeclado('Lado del cuadrado:'))
                let perimetrocuadrado=perimetroCuadrado(lado)
                let areacuadrado=areaCuadrado(lado)
                console.log("Perímetro del cuadrado="+perimetrocuadrado)
                console.log("Área del cuadrado="+areacuadrado)
                break
            case 3:
                console.log('Perimetro y Area del circulo...........')
                let radio:number
                radio = parseInt(await leerTeclado('Radio del círculo'))
                let perimetrocirculo=perimetroCirculo(radio)
                let areacirculo=areaCirculo(radio)
                console.log("Perímetro del círculo="+perimetrocirculo)
                console.log("Área del círculo="+areacirculo)
                break
            case 4:
                console.log('Perimetro y area del rectangulo.........')
                let baserectangulo, alturarectangulo:number
                baserectangulo = parseInt(await leerTeclado('Base del rectángulo:'))
                alturarectangulo = parseInt(await leerTeclado('Altura del rectángulo'))
                let perimetroREC=perimetroRectangulo(baserectangulo,alturarectangulo)
                let areaREC=areaRectangulo(baserectangulo,alturarectangulo)
                console.log("Perímetro del rectángulo="+perimetroREC)
                console.log("Área del rectángulo="+areaREC)
                break
            case 0:
                console.log('\nGRACIAS POR SU PARTICIPACIÓN')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
const perimetroTriangulo = (l1:number, l2:number, l3:number) => {
    let res=0;
    res=l1+l2+l3
    return res
}

const areaTriangulo = (base:number, altura:number) => {
    let res=0
    res=(base*altura)/2
    return res
}

const perimetroCuadrado = (lado:number) => {
    let res=0
    res=lado*4
    return res
}

const areaCuadrado = (lado:number) => {
    let res=0
    res=lado*lado
    return res
}

const perimetroCirculo = (radio:number) => {
    let res=0
    res=2*radio*Math.PI
    return res
}

const areaCirculo = (radio:number) => {
    let res=0
    res=(radio*radio)*Math.PI
    return res
}

const perimetroRectangulo = (b:number, a:number) => {
    let res=0
    res=(b*2+a*2)
    return res
}

const areaRectangulo = (b:number, a:number) => {
    let res=0
    res=a*b
    return res
}
main()