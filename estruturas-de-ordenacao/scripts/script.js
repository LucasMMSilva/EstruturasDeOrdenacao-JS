var num = document.getElementById('inputNumber')
var myArray = document.getElementById('myArray')
var arrayOrdenado = document.getElementById('res')
var array = []

if (array.length == 0) {
    myArray.innerText = 'Array vazio'
}
function adicionar() {
    if (num.value == '') {
        alert('Você não esta adicionando nenhum valor ao array, por favor tente novamente!')
    } else {
        array.push(Number(num.value))
        var arrayAux = array.toString()
        myArray.innerText = arrayAux.replace(/,/g, ' , ')
        num.value = ''
    }
    arrayOrdenado.innerHTML = ""
    num.focus()
}
function remover() {
    if (array.length == 0) {
        alert("Impossível! Array vazio")
    } else {
        array.pop()
        var arrayAux = array.toString()
        myArray.innerText = arrayAux.replace(/,/g, ' , ')
    }
    if (array.length == 0) {
        myArray.innerText = 'Array vazio'
    }
    arrayOrdenado.innerHTML = ""
    num.focus()
}
function ordenar(param) {
    if (param.length == 0) {
        alert('Impocivel! Array vazio')
        arrayOrdenado.innerText = ""
    } else {
        let selectValue = document.getElementById('selectValue')
        let arrayDesordenado = param
        switch (selectValue.value) {
            case 'none':
                alert('Selecione uma estrutura de ordenação para proceguir!')
                break;
            case 'bubble':
                bubble(array)
                break;
            case 'selection':
                selection(array)
                break;
            default:
                alert('Algo de errado não está certo!')
                break;
        }
    }
    num.focus()
}
function bubble(param) {
    let n = 0
    let controller
    arrayOrdenado.innerHTML = ''
    for (let a = 0; a < param.length; a++) {
        controller = true
        for (let b = 0; b < param.length - 1; b++) {
            arrayOrdenado.innerHTML += `[${minStringNumber(n += 1)}] ${param.toString().replace(/,/g, ' , ')}<br>`
            if (param[b] > param[b + 1]) {
                let aux = param[b]
                param[b] = param[b + 1]
                param[b + 1] = aux
                controller = false
            }
        }
        if (controller) {
            break
        }
    }
    array = param
    myArray.innerHTML = array.toString().replace(/,/g, ' , ')
}

function selection(param){
    let n = 0
    arrayOrdenado.innerHTML = ''
    for(var i = 0; i < param.length; i++){
        var min = i
        for(var j = i+1; j < param.length; j++){
            if(param[j] < param[min]){
                min = j
            }
            arrayOrdenado.innerHTML += `[${minStringNumber(n += 1)}] ${param.toString().replace(/,/g,' , ')}<br>`
        }
        var temp = param[i]
        param[i] = param[min]
        param[min] = temp
    }
    arrayOrdenado.innerHTML += `[${minStringNumber(n += 1)}] ${param.toString().replace(/,/g,' , ')}<br>`
    array = param
    myArray.innerHTML = array.toString().replace(/,/g, ' , ')
}

function minStringNumber(param) {
    let num = ''
    if (param < 10) {
        num = '000' + param
        return num
    } else if (param < 100) {
        num = '00' + param
        return num
    } else if (param < 1000) {
        num = '0' + param
        return num
    } else if (param < 10000) {
        num = '' + param
        return num
    } else {
        alert('erro')
    }

}