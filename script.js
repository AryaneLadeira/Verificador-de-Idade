function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //pega os 4 digitos do ano atual
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if(fano.value.lenght == 0 || fano.value.lenght > ano ){
    window.alert('Verifique os dados e tente novamente.') 
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img') // criei uma img
    img.setAttribute('id', 'foto') // e coloquei o id dela como foto

        if (fsex[0].checked) {
            genero = 'homem'
                if (idade >= 0 && idade <=12){
                    //criança
                    img.setAttribute('src', 'imagens/criançam.png') //MUDA A FOTO
                } else if (idade <= 24 ) {
                    //jovem 
                    img.setAttribute('src', 'imagens/jovemm.png')
                } else if (idade <= 40) {
                    //adulto
                    img.setAttribute('src', 'imagens/adultom.png')
                } else if (idade < 70) {
                    //senhor
                    img.setAttribute('src', 'imagens/senhorm.png')
                } else {
                    // idoso
                    img.setAttribute('src', 'imagens/idosom.png')
                }
        } else if (fsex[1].checked) {
            genero = 'mulher'
                 if (idade >= 0 && idade <=12){
                    //criança
                    img.setAttribute('src', 'imagens/criançaf.png')
                } else if (idade <= 24 ) {
                    //jovem 
                    img.setAttribute('src', 'imagens/jovemf.png')
                } else if (idade <= 40) {
                    //adulto
                    img.setAttribute('src', 'imagens/adultaf.png')
                } else if (idade < 70) {
                    //senhor
                    img.setAttribute('src', 'imagens/senhoraf.png')
                } else {
                    // idoso
                    img.setAttribute('src', 'imagens/idosaf.png')
                }
        }
        //res.style.textAlign = 'center' --> pra centralizar o texto por aqui
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) // coloca a imagem
} 
}