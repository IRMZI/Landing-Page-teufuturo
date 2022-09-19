var posicao = 0;
/*
    document.getElementById('name').innerText = "";
    document.getElementById('foto').src="";
    document.getElementById("linkedin").href = "";
    document.getElementById("git").href = "";
    document.getElementById("ig").href = "";

    RAFA - ERIK - JOAO
*/
function botaoVoltar()
{
    posicao -= 1;

    if (posicao === -1) //abaixo do minimo
    {
        posicao = 2; //limite
        joao()
    }

    if (posicao === 1)
    {
        erik()
    }

    if (posicao === 0)
    {
        rafa()
    }
}

function botaoAvancar()
{
    posicao++
    
    if (posicao === 1)
    {
        erik()
    }

    if (posicao === 2) 
    {
        joao()
    }

    if (posicao === 3)//Numero maximo
    {
        posicao = 0;
        rafa()
    }
}
function rafa()
{
    document.getElementById('name').innerText = "Rafael Romariz";
    document.getElementById('foto').src="imgs/autores/primeiro.jpg";
    document.getElementById("linkedin").href = "http://linkedin.com/in/rafael-romariz-b2b45322b/";
    document.getElementById("git").href = "http://github.com/IRMZI";
    document.getElementById("ig").href = "http://instagram.com/Romariz.dev";
}

function erik()
{
    document.getElementById('name').innerText = "Erik Oliveira";
    document.getElementById('foto').src="imgs/autores/segundo.jpg";
    document.getElementById("linkedin").href = "https://www.linkedin.com/in/erikoliveira28";
    document.getElementById("git").href = "https://github.com/SoL1dcs";
    document.getElementById("ig").href = "http://instagram.com/erikoliveira818";
}

function joao() 
{
    document.getElementById('name').innerText = "João Zanardi";
    document.getElementById('foto').src="imgs/autores/terceiro.png";
    document.getElementById("linkedin").href = "";
    document.getElementById("git").href = "";
    document.getElementById("ig").href = ""; 
}


