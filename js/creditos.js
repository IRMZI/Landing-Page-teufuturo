function test()
{
    console.log('eae')
}

var posicao = 0;
//1-2-3-4
//<----\/


function botaoVoltar() 
{
    posicao -= 1;
    if (posicao === 1)
    {
        document.getElementById('foto').src="imgs/autores/segundo.jpg"
        document.getElementById("linkedin").href = "http://www.cnn.com/";
        document.getElementById('nome').innerText = "Nome2"
        document.getElementById('funcao').innerText = "Função2"
    }

    if (posicao === 2)
    {
        document.getElementById('foto').src="imgs/autores/terceiro.png"
        document.getElementById('nome').innerText = "Nome3"
        document.getElementById('funcao').innerText = "Função3"
    }

    if (posicao === 3)
    {
        document.getElementById('foto').src="imgs/autores/quarto.jpg"
        document.getElementById('nome').innerText = "Nome4"
        document.getElementById('funcao').innerText = "Função4"
    }

    if(posicao ===-1)
    {
        posicao=3
        document.getElementById('foto').src="imgs/autores/quarto.jpg"
        document.getElementById('nome').innerText = "Nome4"
        document.getElementById('funcao').innerText = "Função4"
    }

    if(posicao ===0)
    {
        document.getElementById('foto').src="imgs/autores/primeiro.jpg"
        document.getElementById('nome').innerText = "Nome1"
        document.getElementById('funcao').innerText = "Função1"
    }
    
}

function botaoAvancar() 
{
    posicao++;

    if (posicao === 1)
    {
        document.getElementById('foto').src="imgs/autores/segundo.jpg"
        document.getElementById("linkedin").href = "http://www.cnn.com/";
        document.getElementById('nome').innerText = "Nome2"
        document.getElementById('funcao').innerText = "Função2"
    }

    if (posicao === 2)
    {
        document.getElementById('foto').src="imgs/autores/terceiro.png"
        document.getElementById('nome').innerText = "Nome3"
        document.getElementById('funcao').innerText = "Função3"
    }

    if (posicao === 3)
    {
        document.getElementById('foto').src="imgs/autores/quarto.jpg"
        document.getElementById('nome').innerText = "Nome4"
        document.getElementById('funcao').innerText = "Função4"
    }

    if(posicao ===4)
    {
        posicao = 0;
        document.getElementById('foto').src="imgs/autores/primeiro.jpg"
        document.getElementById('nome').innerText = "Nome1"
        document.getElementById('funcao').innerText = "Função1"
    }
    
}


//document.getElementById('foto').src="imgs/dispositivo.png";