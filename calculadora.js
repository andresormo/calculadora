const div = document.getElementById('calculadora')
div.innerHTML += `<input id="input">`


// const simbolos = [1,2,3,4,5,6,7,8,9,0,'+','-','*','/']
const simbolos = [{caracter:1, clase:'numero'},
{caracter:2, clase:'numero'},{caracter:3, clase:'numero'},
{caracter:4, clase:'numero'},{caracter:5, clase:'numero'},
{caracter:6, clase:'numero'},{caracter:7, clase:'numero'},
{caracter:8, clase:'numero'},{caracter:9, clase:'numero'},
{caracter:0, clase:'numero'},{caracter:'+', clase:'operacion'},
{caracter:'-', clase:'operacion'},{caracter:'*', clase:'operacion'},
{caracter:'/', clase:'operacion'}]
for(const simbolo of simbolos){
    div.innerHTML += `<button id="btn-${simbolo.caracter}" class="boton-simbolo ${simbolo.clase}">${simbolo.caracter}</button>`
}

div.innerHTML += `<button id="calcular" class="boton-simbolo boton-operacion">=</button>`
div.innerHTML += `<button id="iniciar">C</button>`
const input = document.getElementById('input')
for(const simbolo of simbolos){
    const boton = document.getElementById(`btn-${simbolo.caracter}`)
    boton.addEventListener('click', ()=>{
        input.value += simbolo.caracter        
    })
}

const calcular = document.getElementById('calcular')
calcular.addEventListener('click',()=>{
    try {
    input.value = eval(input.value)
    } catch (error) {
    input.value = 'Error'
    }

})
const iniciar = document.getElementById('iniciar')
iniciar.addEventListener('click',()=>{
    input.value =  ''
})