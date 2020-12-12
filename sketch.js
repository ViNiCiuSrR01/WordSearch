/* Este jogo consiste em uma espécie de caça-palavras, onde o principal objetivo é o ensino da língua inglesa, através da procura de palavras. A ideia central é a de que o jogador procure as palavras mostradas na tabela e que, ao encontrar uma, ao lado da palavra em questão seja exibida uma imagem que condiz com sua tradução, facilitando o aprendizado da língua.*/

//Objeto - Armazenamento de informações
function measure(x, y, z, w) {
  var measure = {};
  measure.x = x;
  measure.y = y;
  measure.z = z;
  measure.w = w;

  return measure;
}
 
//Variáveis
let tela = 0;
let imgMenu, imgCreditos, imgInstrucoes, imgBack, audioBackg, click, wordF, imgFase1, imgFase2, imgFase3, imgPhase, applause;
let red0, blue0, black0, grey0, yellow0, brown0, pink0, white0, purple0, orange0, green0;
let chair, bed, piano, book, ball, door, computer, cup, glasses, spoon, pencil;
let angry, happy, sad, anxious, scared, surprised, worried, bored, tired, funny, confused;
let xP = [];
let yP = [];
let letter = [];
let acertoFase1 = 0;
let acertoFase2 = 0;
let acertoFase3 = 0;
let countime = 0;
let phase = 0;
var texto1 = [];
var texto2 = [];
var texto3 = [];
let cliquei = false;

//Acervo de palavras - Exemplo para testar
const wds1 = ['RED', 'BLUE', 'BLACK', 'GREY', 'YELLOW', 'BROWN', 'PINK', 'WHITE', 'PURPLE', 'ORANGE', 'GREEN'];
var colors = [];
const wds2 = ['CHAIR', 'BED', 'PIANO', 'BOOK', 'BALL', 'DOOR', 'COMPUTER', 'CUP', 'GLASSES', 'SPOON', 'PENCIL'];
var objects = [];
const wds3 = ['ANGRY', 'HAPPY', 'SAD', 'ANXIOUS', 'SCARED', 'SURPRISED', 'WORRIED', 'BORED', 'TIRED', 'FUNNY', 'CONFUSED'];
var feelings = [];
//Array que contém as letras do caça-palavras
const gridFase1 = [
  ['B', 'L', 'A', 'C', 'K', 'P', 'M', 'F'],
  ['L', 'Z', 'P', 'U', 'R', 'P', 'L', 'E'],
  ['T', 'W', 'H', 'I', 'T', 'E', 'N', 'G'],
  ['D', 'N', 'O', 'O', 'N', 'W', 'Z', 'N'],
  ['E', 'E', 'G', 'L', 'O', 'K', 'G', 'A'],
  ['U', 'E', 'O', 'R', 'L', 'D', 'R', 'R'],
  ['L', 'R', 'B', 'O', 'L', 'E', 'E', 'O'],
  ['B', 'G', 'O', 'W', 'N', 'S', 'Y', 'R']
];
const gridFase2 = [
  ['B', 'G', 'E', 'R', 'A', 'D', 'E', 'B', 'W'],
  ['L', 'L', 'P', 'E', 'R', 'N', 'R', 'O', 'C'],
  ['B', 'A', 'L', 'L', 'Q', 'O', 'V', 'O', 'O'],
  ['D', 'S', 'C', 'C', 'O', 'O', 'Z', 'K', 'M'],
  ['O', 'S', 'H', 'D', 'E', 'P', 'C', 'U', 'P'],
  ['N', 'E', 'A', 'P', 'W', 'S', 'Z', 'A', 'U'],
  ['A', 'S', 'I', 'H', 'R', 'E', 'N', 'G', 'T'],
  ['I', 'E', 'R', 'C', 'Y', 'S', 'D', 'P', 'E'],
  ['P', 'R', 'L', 'I', 'C', 'N', 'E', 'P', 'R']
];
const gridFase3 = [
  ['Y', 'R', 'G', 'F', 'U', 'N', 'N', 'Y', 'U', 'S'],
  ['R', 'D', 'E', 'S', 'I', 'R', 'P', 'R', 'U', 'S'],
  ['G', 'C', 'O', 'N', 'F', 'U', 'S', 'E', 'D', 'C'],
  ['N', 'U', 'D', 'E', 'I', 'R', 'R', 'O', 'W', 'A'],
  ['A', 'F', 'W', 'Y', 'S', 'F', 'I', 'U', 'D', 'R'],
  ['I', 'P', 'L', 'P', 'U', 'F', 'C', 'X', 'E', 'E'],
  ['R', 'F', 'I', 'P', 'D', 'N', 'I', 'G', 'R', 'D'],
  ['R', 'E', 'G', 'A', 'N', 'X', 'I', 'O', 'U', 'S'],
  ['O', 'P', 'S', 'H', 'D', 'E', 'R', 'I', 'T', 'F'],
  ['W', 'C', 'U', 'S', 'C', 'D', 'E', 'R', 'O', 'B']
];

//Função que faz o carregamento das imagens e sons
function preload() {
  imgMenu = loadImage('JS(4).png');
  imgCreditos = loadImage('Créditos.png');
  imgInstrucoes = loadImage('Instruções.png');
  imgPhase = loadImage('YELLOW.jpg')
  imgFase1 = loadImage('red.jpg');
  imgFase2 = loadImage('blue.png');
  imgFase3 = loadImage('green.jpg');
  
  soundFormats('mp3');
  audioBackg = loadSound('Haunt.mp3');
  click = loadSound('Click.mp3');
  red0 = loadSound('red.mp3');
  blue0 = loadSound('blue.mp3');
  black0 = loadSound('black.mp3');
  grey0 = loadSound('grey.mp3');
  yellow0 = loadSound('yellow.mp3');
  brown0 = loadSound('brown.mp3');
  pink0 = loadSound('pink.mp3');
  white0 = loadSound('white.mp3');
  purple0 = loadSound('purple.mp3');
  orange0 = loadSound('orange.mp3');
  green0 = loadSound('green.mp3');
  
  ball = loadSound('ball.mp3');
  bed = loadSound('bed.mp3');
  book = loadSound('book.mp3');
  chair = loadSound('chair.mp3');
  computer = loadSound('computer.mp3');
  cup = loadSound('cup.mp3');
  door = loadSound('door.mp3');
  glasses = loadSound('glasses.mp3');
  pencil = loadSound('pencil.mp3');
  piano = loadSound('piano.mp3');
  spoon = loadSound('spoon.mp3');
  
  angry = loadSound('angry.mp3');
  anxious = loadSound('anxious.mp3');
  bored = loadSound('bored.mp3');
  confused = loadSound('confused.mp3');
  funny = loadSound('funny.mp3');
  happy = loadSound('happy.mp3');
  sad = loadSound('sad.mp3');
  scared = loadSound('scared.mp3');
  surprised = loadSound('surprised.mp3');
  tired = loadSound('tired.mp3');
  worried = loadSound('worried.mp3');
  
  applause = loadSound('applause.wav');
}
//Função que carrega a tela inicial 
function setup() {
  createCanvas(650, 500);
  audioBackg.loop();
}
//Função responsável pelas animações e dentre outras funcionalidades
function draw() {
  changeScreen();
}
//Seleção dos botões
function buttonSelect() {
  //Objeto que armazena valores
  let m1 = measure(150, 200, 300, 50);
  
  //Condições para se efetuar a troca de tela e iniciar o toque dos sons
  if (mouseX > m1.x && mouseX < m1.x + m1.z && mouseY > m1.y && mouseY < m1.y + m1.w && tela === 0){
    
    //Botão de jogar
    fill(225, 40, 50)
    textStyle(BOLDITALIC);
    text('Jogar', m1.x + 90, m1.y + 38);
    
    //Condição para que o som inicie
    if (mouseIsPressed) {
      tela = 1; //troca para tela 1
      click.play(); //Som do click do mouse
    }
  }
  if (mouseX > m1.x && mouseX < m1.x + m1.z && mouseY > m1.y + 100 && mouseY < m1.y + m1.w + 100 && tela === 0) {
    
    //Botão das instruções
    fill(225, 40, 50);
    text('Instruções', m1.x + 45, m1.y + 138);
    
    //Condição para que o som inicie
    if (mouseIsPressed) {
      click.play(); //Som do click do mouse
      tela = 2; //troca para tela 2
    }
  }
  if (mouseX > m1.x && mouseX < m1.x + m1.z && mouseY > m1.y + 200 && mouseY < m1.y + m1.w + 200 && tela === 0) {
    
    //Botão dos créditos
    fill(225, 40, 50);
    text('Créditos', m1.x + 65, m1.y + 238);
    
    //Condição para que o som inicie
    if (mouseIsPressed) {
      click.play(); //Som do click do mouse
      tela = 3; //troca para tela 3
    }
  }
}
//Troca de tela
function changeScreen() {
  //Condições para a troca de tela
  if (tela === 0) {
    screen1();
    buttonSelect();
  }
  else if (tela === 1) {
    screen2();
  }

  else if (tela === 2) {
    screen3();
    returnB();
  }
  else if (tela === 3) {
    screen4();
    returnB();
  }
}

//Tela 1
function screen1() {
  //Plano de fundo
  background(imgMenu);
  //Objeto que armazena valores
  let m2 = measure(150, 200, 300, 50);

  //Construção do botão de jogar
  fill(0);
  rect(m2.x, m2.y, m2.z, m2.w, 15);
  textStyle(BOLDITALIC);
  textSize(46);
  fill(300);
  text('Jogar', m2.x + 90, m2.y + 38);
  
  //Construção do botão de instruções
  fill(0);
  rect(m2.x, m2.y + 100, m2.z, m2.w, 15);
  textSize(46);
  fill(300);
  text('Instruções', m2.x + 45, m2.y + 138);
  
  //Construção do botão de créditos
  fill(0);
  rect(m2.x, m2.y + 200, m2.z, m2.w, 15);
  textSize(46);
  fill(300);
  text('Créditos', m2.x + 65, m2.y + 238);
}
//Tela 2
function screen2() {
  //Condições para a troca de fase
  if(phase === 0)
    {
      phaseButton();
      returnB();
    }
  else if(phase === 1)
    {
      gridFase01();
      returnB();
    }
  else if (phase === 2)
    {
      gridFase02();
      returnB();
    }
  else if (phase === 3)
    {
      gridFase03();
      returnB();
    }
  
  
}
function phaseButton() {
  //Objeto que armazena valores
  let m4 = measure(180, 150, 300, 50)
  
  background(imgPhase);
  //Fase 1 - Botão
  fill(140);
  rect(m4.x, m4.y, m4.z, m4.w, 15);
  textStyle(BOLDITALIC);
  textSize(46);
  fill(100, 0, 0);
  text('Cores', m4.x + 80, m4.y + 40);
  //Fase 2 - Botão
  fill(140);
  rect(m4.x, m4.y + 100, m4.z, m4.w, 15);
  textSize(46);
  fill(100, 0, 0);
  text('Objetos', m4.x + 70, m4.y + 140);
  //Fase 3 - Botão
  fill(140);
  rect(m4.x, m4.y + 200, m4.z, m4.w, 15);
  textSize(46);
  fill(100, 0, 0);
  text('Emoções', m4.x + 55, m4.y + 240);
  //Condições para se efetuar a troca de fase e iniciar o toque dos sons
  if (mouseX > m4.x && mouseX < m4.x + m4.z && mouseY > m4.y && mouseY < m4.y + m4.w){
    
    fill(200, 200, 14);
    rect(m4.x, m4.y, m4.z, m4.w, 15);
    textStyle(BOLDITALIC);
    textSize(46);
    fill(100, 0, 0);
    text('Cores', m4.x + 80, m4.y + 40);
    
    if (mouseIsPressed) {
      click.play(); //Som do click do mouse
      phase = 1; //troca para fase 1
    }
  }
  if (mouseX > m4.x && mouseX < m4.x + m4.z && mouseY > m4.y + 100 && mouseY < m4.y + m4.w + 100){
    
    fill(200, 200, 14);
    rect(m4.x, m4.y + 100, m4.z, m4.w, 15);
    textSize(46);
    fill(100, 0, 0);
    text('Objetos', m4.x + 70, m4.y + 140);
    
    if (mouseIsPressed) {
      click.play(); //Som do click do mouse
      phase = 2; //troca para fase 2
    }
  }
  if (mouseX > m4.x && mouseX < m4.x + m4.z && mouseY > m4.y + 200 && mouseY < m4.y + m4.w + 200){
    
    fill(200, 200, 14);
    rect(m4.x, m4.y + 200, m4.z, m4.w, 15);
    textSize(46);
    fill(100, 0, 0);
    text('Emoções', m4.x + 55, m4.y + 240);
    
    if (mouseIsPressed) {
      click.play(); //Som do click do mouse
      phase = 3; //troca para fase 3
    }
  }
}
//Tela 3
function screen3() {
  //Plano de fundo
  background(imgInstrucoes);
}
//Tela 4
function screen4() {
  //Plano de fundo
  background(imgCreditos);
}
//Botão de retorno
function returnB() {
  //Objeto que armazena valores
  let m5 = measure(10, 10, 60, 20);
  
  //Construção do botão
  fill(0);
  rect(m5.x, m5.x, m5.z, m5.w, 15);
  fill(300, 300, 300);
  textSize(10);
  text('Retornar', m5.x + 10, m5.y + 12);
  
  //Condição para interagir com botão de retorno
  if (mouseX > m5.x && mouseX < m5.x + m5.z && mouseY > m5.y && mouseY < m5.y + m5.w && (tela === 2 || tela === 3)) {
    fill(225, 40, 50)
    text('Retornar', m5.x + 10, m5.y + 12);
    if (mouseIsPressed) {
      click.play();
      tela = 0;
    }
  }
  else if (mouseX > m5.x && mouseX < m5.x + m5.z && mouseY > m5.y && mouseY < m5.y + m5.w && (tela === 1 && phase === 0)) {
    fill(225, 40, 50)
    text('Retornar', m5.x + 10, m5.y + 12);
    if (mouseIsPressed) {
      click.play();
      tela = 0;
    }
  }
  else if (mouseX > m5.x && mouseX < m5.x + m5.z && mouseY > m5.y && mouseY < m5.y + m5.w && (tela === 1 && (phase === 1 || phase === 2 || phase === 3))) {
    fill(225, 40, 50)
    text('Retornar', m5.x + 10, m5.y + 12);
    if (mouseIsPressed) {
      click.play();
      phase = 0;
    }
  }
  
}
//Caça-Palavras - Fase 1
function gridFase01() {
  background(imgFase1);
  //Tabela que fica ao lado do caça-palavras
  table();

  /*Construção do caça-palavras através de um for loop aninhado, no qual a variável i representa a linha, enquanto que a variável j representa a coluna!*/
  for (var i = 0; i < gridFase1.length; i++) 
  {
    xP[i] = [];
    yP[i] = [];
    letter[i] = [];
    
    for (var j = 0; j < gridFase1[0].length; j++) 
    {
      /*Posição dos pequenos retângulos que estarão amontoados*/
      yP[i][j] = (i + 2) * 40;
      xP[i][j] = (j + 6) * 40;  
      /*Armazena a letra que estará posicionada em cada retângulo*/
      letter[i][j] = gridFase1[i][j]; 
      
      /*Condição para, caso esteja dentro do devido alcance, preencher o retângulo em questão de amarelo*/
      if((mouseX > xP[i][j] && mouseX < xP[i][j] + 40 && mouseY > yP[i][j] && mouseY < yP[i][j] + 40) && cliquei === false)
        {
          fill(225, 225, 14); 
          rect(xP[i][j], yP[i][j], 40, 40);
          fill(0);
          textSize(20);
          text(letter[i][j], xP[i][j] + 11, yP[i][j] + 28);
        }
      /*Condição para, caso esteja dentro do devido alcance e houver o click do mouse, preencher o retângulo em questão de azul*/
      else if((mouseX > xP[i][j] && mouseX < xP[i][j] + 40 && mouseY > yP[i][j] && mouseY < yP[i][j] + 40) && cliquei === true)
        {
          fill(22, 22, 140);
          rect(xP[i][j], yP[i][j], 40, 40);
          fill(0);
          textSize(20);
          text(letter[i][j], xP[i][j] + 11, yP[i][j] + 28);
          
          //Armazenamento da letra que foi selecionada dentro de um vetor
          colors.push(letter[i][j]);          
          console.log(colors)
          //Função que faz a comparação das palavras selecionadas em relação ao acervo de palavras
          comparar();
          //Variável que faz a contagem do tempo, em segundos
          countime = 0;
        }
      //Caso não ocorra nenhuma das condições acima, preencher os retângulos de branco   
      else 
        {
          fill(220, 220, 230);
          rect(xP[i][j], yP[i][j], 40, 40);
          fill(0);
          textSize(20);
          text(letter[i][j], xP[i][j] + 11, yP[i][j] + 28);
        }
    }
  }
  
}
//Caça-Palavras - Fase 2
function gridFase02() {
  background(imgFase2)
  //Tabela que fica ao lado do caça-palavras
  table();
  
  /*Construção do caça-palavras através de um for loop aninhado, no qual a variável i representa a linha, enquanto que a variável j representa a coluna!*/
  for (var i = 0; i < gridFase2.length; i++)
  {
    xP[i] = [];
    yP[i] = [];
    letter[i] = [];
    
    for (var j = 0; j < gridFase2[0].length; j++) 
    {
      /*Posição dos pequenos retângulos que estarão amontoados*/
      yP[i][j] = (i + 2) * 40;
      xP[i][j] = (j + 6) * 40;  
      /*Armazena a letra que estará posicionada em cada retângulo*/
      letter[i][j] = gridFase2[i][j]; 
      
      /*Condição para, caso esteja dentro do devido alcance, preencher o retângulo em questão de amarelo*/
      if((mouseX > xP[i][j] && mouseX < xP[i][j] + 40 && mouseY > yP[i][j] && mouseY < yP[i][j] + 40) && cliquei === false)
        {
          fill(225, 225, 14); 
          rect(xP[i][j], yP[i][j], 40, 40);
          fill(0);
          textSize(20);
          text(letter[i][j], xP[i][j] + 11, yP[i][j] + 28);
        }
      /*Condição para, caso esteja dentro do devido alcance, preencher o retângulo em questão de azul*/
      else if((mouseX > xP[i][j] && mouseX < xP[i][j] + 40 && mouseY > yP[i][j] && mouseY < yP[i][j] + 40) && cliquei === true)
        {
          fill(22, 22, 140);
          rect(xP[i][j], yP[i][j], 40, 40);
          fill(0);
          textSize(20);
          text(letter[i][j], xP[i][j] + 11, yP[i][j] + 28);
             
          //Armazenamento da letra que foi selecionada dentro de um vetor
          objects.push(letter[i][j]);
          console.log(objects);
          //Função que faz a comparação das palavras selecionadas em relação ao acervo de palavras
          comparar();
          //Variável que faz a contagem do tempo, em segundos
          countime = 0;
        }
      //Caso não ocorra nenhuma das condições acima preencher os retângulos de branco
      else 
        {
          fill(220, 220, 230);
          rect(xP[i][j], yP[i][j], 40, 40);
          fill(0);
          textSize(20);
          text(letter[i][j], xP[i][j] + 11, yP[i][j] + 28);       
        }
    }
  }
}
//Caça-Palavras - Fase 3
function gridFase03() {
  background(imgFase3)
  //Tabela que fica ao lado do caça-palavras
  table();
  
  /*Construção do caça-palavras através de um for loop aninhado, no qual a variável i representa a linha, enquanto que a variável j representa a coluna!*/
  for (var i = 0; i < gridFase3.length; i++) 
  {
    xP[i] = [];
    yP[i] = [];
    letter[i] = [];
    
    for (var j = 0; j < gridFase3[0].length; j++) 
    {
      /*Posição dos pequenos retângulos que estarão amontoados*/
      yP[i][j] = (i + 2) * 40;
      xP[i][j] = (j + 6) * 40;  
      /*Armazena a letra que estará posicionada em cada retângulo*/
      letter[i][j] = gridFase3[i][j]; 
      
      /*Condição para, caso esteja dentro do devido alcance, preencher o retângulo em questão de amarelo*/
      if((mouseX > xP[i][j] && mouseX < xP[i][j] + 40 && mouseY > yP[i][j] && mouseY < yP[i][j] + 40) && cliquei === false)
        {
          fill(225, 225, 14); 
          rect(xP[i][j], yP[i][j], 40, 40);
          fill(0);
          textSize(20);
          text(letter[i][j], xP[i][j] + 11, yP[i][j] + 28);
        }
      /*Condição para, caso esteja dentro do devido alcance e houver o click do mouse, preencher o retângulo em questão de azul*/
      else if((mouseX > xP[i][j] && mouseX < xP[i][j] + 40 && mouseY > yP[i][j] && mouseY < yP[i][j] + 40) && cliquei === true)
        {
          fill(22, 22, 140);
          rect(xP[i][j], yP[i][j], 40, 40);
          fill(0);
          textSize(20);
          text(letter[i][j], xP[i][j] + 11, yP[i][j] + 28);
          
          //Armazenamento da letra que foi selecionada dentro de um vetor
          feelings.push(letter[i][j]);
          console.log(feelings)
          //Função que faz a comparação das palavras selecionadas em relação ao acervo de palavras
          comparar(); 
          //Variável que faz a contagem do tempo, em segundos
          countime = 0;
        }
      //Caso não ocorra nenhuma das condições acima, preencher os retângulos de branco
      else 
        {
          fill(220, 220, 230);
          rect(xP[i][j], yP[i][j], 40, 40);
          fill(0);
          textSize(20);
          text(letter[i][j], xP[i][j] + 11, yP[i][j] + 28);
        } 
    }
  }
}
//Função que monitora se o mouse foi pressionado
function mousePressed() {
  cliquei = true;
  //Para não ficar repetindo a ação
  noLoop();
}
//Função que monitora se o a pressão sobre o mouse foi cessada
function mouseReleased() {
  cliquei = false
  //Para ficar repetindo a ação
  loop();
}
//Tabela de palavras
function table() {
  var poY = 105;
  //Para fase 1  
  if(phase === 1)
   {
     //Estrutura da tabela
     fill(160, 160, 160);
     rect(40, 80, 120, 320, 15)
      //For utilizado para organizar as palavras dentro da tabela 
      for(l = 0; l < wds1.length; l++)
      {
        //Condições para a exibição da palavra e da imagem
        if(wds1[l] === 'BLACK')
          {
            fill(0)
            text(wds1[l], 60, poY);
            
            if(join(texto1, '').indexOf('BLACK') > -1)
              {
                fill(0);
                text(wds1[l], 60, poY)
              }
          }
        if(wds1[l] === 'WHITE')
          {
            fill(0)
            text(wds1[l], 60, poY);
            
            if(join(texto1, '').indexOf('WHITE') > -1)
              {
                fill(360);
                text(wds1[l], 60, poY)
              }
          }
        if(wds1[l] === 'RED')
          {
            fill(0)
            textSize(18)
            text(wds1[l], 60, poY);
            
            if(join(texto1, '').indexOf('RED') > -1)
              {
                fill(225, 0, 0);
                text(wds1[l], 60, poY)
              }
          }
        if(wds1[l] === 'BLUE')
          {
            fill(0)
            text(wds1[l], 60, poY);
            
            if(join(texto1, '').indexOf('BLUE') > -1)
              {
                fill(20, 20, 225);
                text(wds1[l], 60, poY)
              }
          }
        if(wds1[l] === 'ORANGE')
          {
            fill(0)
            text(wds1[l], 60, poY);
            
            if(join(texto1, '').indexOf('ORANGE') > -1)
              {
                fill(255, 140, 0);
                text(wds1[l], 60, poY)
              }
          }
        if(wds1[l] === 'BROWN')
          {
            fill(0)
            text(wds1[l], 60, poY);
            
            if(join(texto1, '').indexOf('BROWN') > -1)
              {
                fill(150, 75, 0);
                text(wds1[l], 60, poY)
              }
          }
        if(wds1[l] === 'PURPLE')
          {
            fill(0)
            text(wds1[l], 60, poY);
            
            if(join(texto1, '').indexOf('PURPLE') > -1)
              {
                fill(153, 51, 153);
                text(wds1[l], 60, poY)
              }
          }
        if(wds1[l] === 'GREY')
          {
            fill(0)
            text(wds1[l], 60, poY);
            
            if(join(texto1, '').indexOf('GREY') > -1)
              {
                fill(95, 95, 95);
                text(wds1[l], 60, poY)
              }
          }
        if(wds1[l] === 'YELLOW')
          {
            fill(0)
            text(wds1[l], 60, poY);
            
            if(join(texto1, '').indexOf('YELLOW') > -1)
              {
                fill(225, 225, 14);
                text(wds1[l], 60, poY)
              }
          }
        if(wds1[l] === 'GREEN')
          {
            fill(0)
            text(wds1[l], 60, poY);
            
            if(join(texto1, '').indexOf('GREEN') > -1)
              {
                fill(20, 200, 20);
                text(wds1[l], 60, poY)
              }
          }
        if(wds1[l] === 'PINK')
          {
            fill(0)
            text(wds1[l], 60, poY);
            
            if(join(texto1, '').indexOf('PINK') > -1)
              {
                fill(255, 111, 156);
                text(wds1[l], 60, poY)
              }
          }
        
        poY = poY + 28;
    }
  }
  //Para fase 2
  else if(phase === 2)
    {
      //Estrutura da tabela
      fill(0, 168, 107);
      rect(45, 80, 150, 320, 15)
      //For utilizado para organizar as palavras dentro da tabela 
      for(l = 0; l < wds2.length; l++)
      {
        //Condições para a exibição da palavra e da imagem
        if(wds2[l] === 'PIANO')
          {
            fill(0)
            text(wds2[l], 60, poY);
            
            if(join(texto2, '').indexOf('PIANO') > -1)
              {
                text(wds2[l] + ' 🎹', 60, poY)
              }
          }
        else if(wds2[l] === 'CHAIR')
          {
            textSize(18);
            fill(0)
            text(wds2[l], 60, poY);
            
            if(join(texto2, '').indexOf('CHAIR') > -1)
              {
                text(wds2[l] + ' 🪑', 60, poY)
              }
          }
        if(wds2[l] === 'DOOR')
          {
            fill(0)
            text(wds2[l], 60, poY);
            
            if(join(texto2, '').indexOf('DOOR') > -1)
              {
                text(wds2[l] + ' 🚪', 60, poY)
              }
          }
        if(wds2[l] === 'BALL')
          {
            fill(0)
            text(wds2[l], 60, poY);
            
            if(join(texto2, '').indexOf('BALL') > -1)
              {
                text(wds2[l] + ' ⚽', 60, poY)
              }
          }
        if(wds2[l] === 'COMPUTER')
          {
            fill(0)
            text(wds2[l], 60, poY);
            
            if(join(texto2, '').indexOf('COMPUTER') > -1)
              {
                text(wds2[l] + ' 💻', 60, poY)
              }
          }
        if(wds2[l] === 'BOOK')
          {
            fill(0)
            text(wds2[l], 60, poY);
            
            if(join(texto2, '').indexOf('BOOK') > -1)
              {
                text(wds2[l] + ' 📚', 60, poY)
              }
          }
        if(wds2[l] === 'BED')
          {
            fill(0)
            text(wds2[l], 60, poY);
            
            if(join(texto2, '').indexOf('BED') > -1)
              {
                text(wds2[l] + ' 🛏️', 60, poY)
              }
          }
        if(wds2[l] === 'CUP')
          {
            fill(0)
            text(wds2[l], 60, poY);
            
            if(join(texto2, '').indexOf('CUP') > -1)
              {
                text(wds2[l] + ' 🥛', 60, poY)
              }
          }
        if(wds2[l] === 'GLASSES')
          {
            fill(0)
            text(wds2[l], 60, poY);
            
            if(join(texto2, '').indexOf('GLASSES') > -1)
              {
                text(wds2[l] + ' 👓', 60, poY)
              }
          }
        if(wds2[l] === 'SPOON')
          {
            fill(0)
            text(wds2[l], 60, poY);
            
            if(join(texto2, '').indexOf('SPOON') > -1)
              {
                text(wds2[l] + ' 🥄', 60, poY)
              }
          }
        if(wds2[l] === 'PENCIL')
          {
            fill(0)
            text(wds2[l], 60, poY);
            
            if(join(texto2, '').indexOf('PENCIL') > -1)
              {
                text(wds2[l] + ' ✏️', 60, poY)
              }
          }
      
        poY = poY + 28;
      }
    }
  //Para fase 3
  else if(phase === 3)
    {
      //Estrutura da tabela
      fill(0, 128, 128);
      rect(43, 80, 150, 320, 15)
      //For utilizado para organizar as palavras dentro da tabela 
      for(l = 0; l < wds3.length; l++)
      {
        //Condições para a exibição das palavras e das imagens
        if(wds3[l] === 'ANGRY')
          {
            textSize(18);
            fill(0)
            text(wds3[l], 60, poY);
            
            if(join(texto3, '').indexOf('ANGRY') > -1)
              {
                fill(0);
                text(wds3[l] + '😡', 60, poY)
              }
          }
        if(wds3[l] === 'TIRED')
          {
            fill(0)
            text(wds3[l], 60, poY);
            
            if(join(texto3, '').indexOf('TIRED') > -1)
              {
                fill(0);
                text(wds3[l] + '😫', 60, poY)
              }
          }
        if(wds3[l] === 'SAD')
          {
            fill(0)
            text(wds3[l], 60, poY);
            
            if(join(texto3, '').indexOf('SAD') > -1)
              {
                fill(0);
                text(wds3[l] + '😔', 60, poY)
              }
          }
        if(wds3[l] === 'HAPPY')
          {
            fill(0)
            text(wds3[l], 60, poY);
            
            if(join(texto3, '').indexOf('HAPPY') > -1)
              {
                fill(0);
                text(wds3[l] + '😊', 60, poY)
              }
          }
        if(wds3[l] === 'CONFUSED')
          {
            fill(0)
            text(wds3[l], 60, poY);
            
            if(join(texto3, '').indexOf('CONFUSED') > -1)
              {
                fill(0);
                text(wds3[l] + '😕', 60, poY)
              }
          }
        if(wds3[l] === 'SURPRISED')
          {
            fill(0)
            text(wds3[l], 60, poY);
            
            if(join(texto3, '').indexOf('SURPRISED') > -1)
              {
                fill(0);
                text(wds3[l] + '😮', 60, poY)
              }
          }
        if(wds3[l] === 'SCARED')
          {
            fill(0)
            text(wds3[l], 60, poY);
            
            if(join(texto3, '').indexOf('SCARED') > -1)
              {
                fill(0);
                text(wds3[l] + '😱', 60, poY)
              }
          }
        if(wds3[l] === 'FUNNY')
          {
            fill(0)
            text(wds3[l], 60, poY);
            
            if(join(texto3, '').indexOf('FUNNY') > -1)
              {
                fill(0);
                text(wds3[l] + '😂', 60, poY)
              }
          }
        if(wds3[l] === 'WORRIED')
          {
            fill(0)
            text(wds3[l], 60, poY);
            
            if(join(texto3, '').indexOf('WORRIED') > -1)
              {
                fill(0);
                text(wds3[l] + '😟', 60, poY)
              }
          }
        if(wds3[l] === 'ANXIOUS')
          {
            fill(0)
            text(wds3[l], 60, poY);
            
            if(join(texto3, '').indexOf('ANXIOUS') > -1)
              {
                fill(0);
                text(wds3[l] + '😰', 60, poY)
              }
          }
        if(wds3[l] === 'BORED')
          {
            fill(0)
            text(wds3[l], 60, poY);
            
            if(join(texto3, '').indexOf('BORED') > -1)
              {
                fill(0);
                text(wds3[l] + '🥱', 60, poY)
              }
          }
      
        poY = poY + 28;
      }
    }
}
//Função que faz a contagem do tempo
function counting() {
  if(phase === 1 && cliquei === false)
    {
      countime++;
      if(countime >= 5)
        {
          //Para resetar o vetor e a contagem
          colors = [];
          countime = 0;
        }
    }
  else if(phase === 2 && cliquei === false)
    {
      countime++;
      if(countime >= 5)
        {
          //Para resetar o vetor e a contagem
          objects = [];
          countime = 0;
        }
    }
  else if(phase === 3 && cliquei === false)
    {
      countime++;
      if(countime >= 5)
        {
          //Para resetar o vetor e a contagem
          feelings = [];
          countime = 0;
        }
    }
}
//Função predefinida na biblioteca do p5js para fazer a contagem do tempo em milisegundos
setInterval(counting, 1000);
//Função que faz a comparação das palavras digitadas com as palavras já definidas
function comparar() {
  //Fará a contagem a cada letra digitada que coincide com as definidas
  let contador = 0;
  //Variável para fazer a comparação
  var auxiliar = [];

  
  if(phase === 1)
    {
    for(let i = 0; i < wds1.length; i++)
      {
        //Separa cada letra de cada palavra do acervo para facilitar a comparação
        auxiliar = wds1[i].split('');
        for(let j = 0; j < auxiliar.length; j++)
          {
            //Faz a comparação
            if(auxiliar[j] === colors[j])
              {
                 contador++;
              }
          }
      
        if(contador === auxiliar.length)
          {
            // Condição para tocar o som da pronúncia de cada palavra
            if(join(colors, '') === 'RED')
              {
                red0.play();
              }
            if(join(colors, '') === 'BLUE')
              {
                blue0.play();
              }
            if(join(colors, '') === 'BLACK')
              {
                black0.play();
              }
            if(join(colors, '') === 'GREY')
              {
                grey0.play();
              }
            if(join(colors, '') === 'YELLOW')
              {
                yellow0.play();
              }
            if(join(colors, '') === 'BROWN')
              {
                brown0.play();
              }
            if(join(colors, '') === 'PINK')
              {
                pink0.play();
              }
            if(join(colors, '') === 'WHITE')
              {
                white0.play();
              }
            if(join(colors, '') === 'PURPLE')
              {
                purple0.play();
              }
            if(join(colors, '') === 'ORANGE')
              {
                orange0.play();
              }
            if(join(colors, '') === 'GREEN')
              {
                green0.play();
              }
            
            console.log('Acertou')
            //Reseta o contador do tempo
            countime = 0;
            //Faz a junção de cada letra digitada dentro do vetor colors, formando a palavra dejesada e, então, armazena dentro de outro vetor
            texto1.push(join(colors, '') + '  ');
            //Reseta o vetor
            colors = [];
            //Contador de palavras encontradas
            acertoFase1++;
        
            if(acertoFase1 === 11)
              {
                //Som de vitória
                applause.play();
              }
            //Para não ficar repetindo o processo infinitas vezes
            break;
          }
        else
          {
            console.log('Errou');
          }
        //Reseta o contador de letras
        contador = 0;
      }
    }
  //As ações se repetem que nem no exemplo acima
  else if(phase === 2)
    {
      
    for(let i = 0; i < wds2.length; i++)
      {
        auxiliar = wds2[i].split('');
        for(let j = 0; j < auxiliar.length; j++)
          {
            if(auxiliar[j] === objects[j])
              {
                 contador++;
              }
          }
      
        if(contador === auxiliar.length)
          {
            if(join(objects, '') === 'CHAIR')
              {
                chair.play();
              }
             if(join(objects, '') === 'BED')
              {
                bed.play();
              }
            if(join(objects, '') === 'PIANO')
              {
                piano.play();
              }
            if(join(objects, '') === 'BOOK')
              {
                book.play();
              }
            if(join(objects, '') === 'BALL')
              {
                ball.play();
              }
            if(join(objects, '') === 'DOOR')
              {
                door.play();
              }
            if(join(objects, '') === 'COMPUTER')
              {
                computer.play();
              }
            if(join(objects, '') === 'CUP')
              {
                cup.play();
              }
            if(join(objects, '') === 'GLASSES')
              {
                glasses.play();
              }
            if(join(objects, '') === 'SPOON')
              {
                spoon.play();
              }
            if(join(objects, '') === 'PENCIL')
              {
                pencil.play();
              }
           
            console.log('Acertou');
            countime = 0;
            texto2.push(join(objects, '') + '  ');
            objects = [];
            acertoFase2++;
            
            if(acertoFase2 === 11)
              {
                applause.play();
              }
            break;
          
          }
        else
          {
            console.log('Errou')
          
          }
      
        contador = 0;
      }
    }
  //As ações se repetem que nem no exemplo acima
  else if(phase === 3)
    {
      
    for(let i = 0; i < wds3.length; i++)
      {
        auxiliar = wds3[i].split('');
        for(let j = 0; j < auxiliar.length; j++)
          {
            if(auxiliar[j] === feelings[j])
              {
                 contador++;
              }
          }
      
        if(contador === auxiliar.length)
          {
            if(join(feelings, '') === 'ANGRY')
              {
                angry.play();
              }
            if(join(feelings, '') === 'HAPPY')
              {
                happy.play();
              }
            if(join(feelings, '') === 'SAD')
              {
                sad.play();
              }
            if(join(feelings, '') === 'ANXIOUS')
              {
                anxious.play();
              }
            if(join(feelings, '') === 'SCARED')
              {
                scared.play();
              }
            if(join(feelings, '') === 'SURPRISED')
              {
                surprised.play();
              }
            if(join(feelings, '') === 'WORRIED')
              {
                worried.play();
              }
            if(join(feelings, '') === 'BORED')
              {
                bored.play();
              }
            if(join(feelings, '') === 'TIRED')
              {
                tired.play();
              }
            if(join(feelings, '') === 'FUNNY')
              {
                funny.play();
              }
            if(join(feelings, '') === 'CONFUSED')
              {
                confused.play();
              }
          
            console.log('Acertou');
            countime = 0;
            texto3.push(join(feelings, '') + '  ');
            feelings = [];
            acertoFase3++;
            
            if(acertoFase3 === 11)
              {
                applause.play();
              }
            break;
          }
        else
          {
            console.log('Errou')
          
          }
      
        contador = 0;
      }
    }
}
