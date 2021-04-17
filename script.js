var cartaShun = {
  nome:"Shun de Andrômeda",
  imagem: "https://static.wikia.nocookie.net/saintseya/images/1/10/Corrente_de_Andr%C3%B4meda.gif/revision/latest/scale-to-width-down/250?cb=20150629040018&path-prefix=pt",
  atributos:{
    ataque:79,
    defesa:80,
    magia:90
  }
}

var cartaShura = {
  nome:"Shura de Capricórnio",
  imagem: "https://pa1.narvii.com/6685/ec2e8fb84fdb427140d93fcdec52053a308d3a36_hq.gif",
  atributos:{
    ataque:93,
    defesa:75,
    magia:85
  }
}

var cartaAfrodite = {
  nome:"Afrodite de Peixes",
  imagem: "https://i.pinimg.com/originals/87/42/8f/87428fa6c65cbc72692ce43cbfe4c86a.gif",
  atributos:{
     ataque:90,
     defesa:65,
     magia:75
  }
}

var cartaShina = {
  nome:"Shina de Cobra",
  imagem: "https://pa1.narvii.com/7102/45d8f557dbdf5dabc85a27b40e722e8e57a5422cr1-500-333_hq.gif",
  atributos:{
    ataque:75,
    defesa:60,
    magia:72
  }
}

var cartaSeiya = {
  nome:"Seiya de Pégaso",
  imagem: "http://pa1.narvii.com/6297/0be245ed5ac1ffe44fa736e190d9d2d8d8f09105_00.gif",
  atributos:{
    ataque:90,
    defesa:77,
    magia:90
  }
}

var cartaHyoga = {
  nome:"Hyoga de Cisne",
  imagem: "https://i.pinimg.com/originals/0c/95/58/0c9558d1cba483a7fe3adeb4de41447f.gif",
  atributos:{
    ataque:85,
    defesa:77,
    magia:93
  }
}

var cartaShiryu = {
  nome:"Shiryu de Dragão",
  imagem: "http://img3.wikia.nocookie.net/__cb20140206122821/saintseya/pt/images/1/1c/Shiryucoleradragaodivino.gif",
  atributos:{
   ataque:85,
   defesa:79,
   magia:87 
  }
}

var cartaIkki = {
  nome:"Ikki de Fênix",
  imagem: "https://static.wikia.nocookie.net/saintseya/images/3/38/Ikkiavefenixdivino.gif/revision/latest/top-crop/width/300/height/300?cb=20140206122719&path-prefix=pt",
  atributos:{
    ataque:88,
    defesa:78,
    magia:80
  }
}

var cartaMarin = {
  nome:"Marin de Águia",
  imagem: "https://i.pinimg.com/originals/72/80/24/728024ee13b9e59d261f590f1560ff24.gif",
  atributos:{
    ataque:75,
    defesa:65,
    magia:72
  }
}

var cartaPoseidon = {
  nome:"Poseidon",
  imagem: "https://i.pinimg.com/originals/b2/35/ab/b235abae33b3d94bd2deab41922d6aae.gif",
  atributos:{
    ataque:99,
    defesa:100,
    magia:100
  }
}

var cartaMaquina
var cartaJogador
var cartas = [ cartaShun, cartaShura, cartaAfrodite, cartaShina, cartaSeiya, cartaHyoga, cartaShiryu, cartaIkki, cartaMarin, cartaPoseidon]
// 0          1           2

function exibirApenasMolduraCartaMaquina() {
  
    var molduraCartaMaquina = document.getElementById("carta-maquina");
    
    molduraCartaMaquina.innerHTML="<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>"
        
    molduraCartaMaquina.style.backgroundImage= "";
  }
  
function sortearCarta() {
    
    var numeroCartaMaquina = parseInt(Math.random()*10)
    cartaMaquina = cartas[numeroCartaMaquina]
   
    var numeroCartaJogador = parseInt(Math.random()*10)
    while(numeroCartaJogador == numeroCartaMaquina){
         var numeroCartaJogador = parseInt(Math.random()*10)
    }
    cartaJogador = cartas[numeroCartaJogador]
    
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    
    exibirApenasMolduraCartaMaquina()
    
    exibeCartaJogador()
  }

function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto = ""
 
  for(var atributo in cartaJogador.atributos) {
    opcoesTexto += 
        "<label for='id_" + atributo +"'>" +
            "<input type='radio' id='id_" + atributo +"' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] +
        "</label>" + 
        "<br>"
  }
   
  var html = "<div id='opcoes' class='carta-status'>"
  
  divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
}
  
function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('atributo')
  for(var i = 0; i < radioAtributo.length; i++) {
    if(radioAtributo[i].checked) {
      return radioAtributo[i].value
    }
  }
}

function jogar() {
  var divResultado = document.getElementById("resultado")
  var atributoSelecionado = obtemAtributoSelecionado()
  console.log(atributoSelecionado)
  if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    htmlResultado = '<p class="resultado-final">Venceu</p>'
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    htmlResultado = '<p class="resultado-final">Perdeu</p>'
  } else {
    htmlResultado = '<p class="resultado-final">Empatou</p>'
  }
  divResultado.innerHTML = htmlResultado
 
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
 
  exibeCartaMaquina()
}

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  var opcoesTexto = ""
  
  for(var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
  }
  
  var html = "<div id='opcoes' class='carta-status'>"
  
  divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
}
