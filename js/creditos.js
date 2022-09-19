var posicao = 0;

function botaoVoltar()
{
    posicao -= 1;

    if (posicao === -1) //numero minimo
    {
        posicao = 3; 
        lucas()
    }

    if (posicao === 2)
    {
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

    if(posicao === 3)
    {
        lucas()
    }

    if (posicao === 4)//Numero maximo
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
    document.getElementById('textoPesoal').innerText='Desenvolvedor front-end | UI/UX';
}

function erik()
{
    document.getElementById('name').innerText = "Erik Oliveira";
    document.getElementById('foto').src="imgs/autores/segundo.jpg";
    document.getElementById("linkedin").href = "https://www.linkedin.com/in/erikoliveira28";
    document.getElementById("git").href = "https://github.com/SoL1dcs";
    document.getElementById("ig").href = "http://instagram.com/erikoliveira818";
    document.getElementById('textoPesoal').innerText='Lider de desenvolvimento'
}

function joao() 
{
    document.getElementById('name').innerText = "João Zanardi";
    document.getElementById('foto').src="imgs/autores/terceiro.png";
    document.getElementById("linkedin").href ="https://www.linkedin.com/in/joao-vitor-565b14250/";
    document.getElementById("git").href = "https://github.com/joaoVitorZanardi";
    document.getElementById("ig").href = ""; 
    document.getElementById('textoPesoal').innerText="Desenvolvedor e Lider do squad";
}

function lucas()
{
    document.getElementById('name').innerText = "Lucas";
    
    document.getElementById('foto').src="imgs/autores/quarto.png";
    document.getElementById("linkedin").href ="https://www.linkedin.com/in/lucas-henrique-da-silva-a72498200/";
    document.getElementById("git").href = "";
    document.getElementById("ig").href = "http://instagram.com/lucashenrique.dasilva.77";
    document.getElementById('textoPesoal').innerText="Designer e Scrum Master";
}


/*
    Como funciona
        Cada função possui as informações dos integrantes.
        As funções botaoVoltar e botaoAvancar fazer o trabalho de chamar a função que vai mandar as informações para o HTML.
    Manutenção
        Caso seja necessario adionar novos integrantes, O "Numero maximo" devera ser almentado, o "numero minimo" devera ser reduzido
        e sera necessario a criação de uma nova função com os dados do novo integrante.
    Solução de erro
        Caso aconteca de um integrante 'seja pulado' na navegação, verificar se a função dele está sendo chamada corretamente.
*/