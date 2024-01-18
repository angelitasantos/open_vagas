
// Títulos e Subtítulos
var textoQuemSomos = "Quem somos"
$(".textoQuemSomos").html(textoQuemSomos);
var textoServicos = "Nossos Serviços"
$(".textoServicos").html(textoServicos);
var textoArtigos = "Artigos"
$(".textoArtigos").html(textoArtigos);
var textoContato = "Fale Conosco!"
$(".textoContato").html(textoContato);
var textoBlog = "Blog"
$(".textoBlog").html(textoBlog);
var textoDownload = "Downloads"
$(".textoDownload").html(textoDownload);
var textoAgenda = "Agenda"
$(".textoAgenda").html(textoAgenda);
var textoBlogEstrutura = "Blog Estrutura"
$(".textoBlogEstrutura").html(textoBlogEstrutura);
var textoBlogProcessos = "Blog Processos"
$(".textoBlogProcessos").html(textoBlogProcessos);
var textoBlogFinanceiro = "Blog Financeiro"
$(".textoBlogFinanceiro").html(textoBlogFinanceiro);


// Mostrar e Esconder Site / Blog
function mostrarAgenda(){
    $("#botaoAgenda").show();
    $("#botaoBlog").hide();
    $("#botaoSite").hide();   
    $("#botaoDownloads").hide(); 
    $("#blogEstrutura").hide();
    $("#blogProcessos").hide();
    $("#blogFinanceiro").hide();
}

function mostrarBlog(){
    $("#botaoAgenda").hide();
    $("#botaoBlog").show();
    $("#botaoSite").hide();   
    $("#botaoDownloads").hide(); 
    $("#blogEstrutura").hide();
    $("#blogProcessos").hide();
    $("#blogFinanceiro").hide();
}

function mostrarDownload(){
    $("#botaoAgenda").hide();
    $("#botaoBlog").hide();
    $("#botaoSite").hide();
    $("#botaoDownloads").show();
    $("#blogEstrutura").hide();
    $("#blogProcessos").hide();
    $("#blogFinanceiro").hide();
}

function mostrarSite(){
    $("#botaoAgenda").hide();
    $("#botaoBlog").hide();
    $("#botaoSite").show();
    $("#botaoDownloads").hide();
    $("#blogEstrutura").hide();
    $("#blogProcessos").hide();
    $("#blogFinanceiro").hide();
}

function mostrarblogEstrutura(){
    $("#botaoAgenda").hide();
    $("#botaoBlog").hide();
    $("#botaoSite").hide();
    $("#botaoDownloads").hide();
    $("#blogEstrutura").show();
    $("#blogProcessos").hide();
    $("#blogFinanceiro").hide();
}

function mostrarblogProcessos(){
    $("#botaoAgenda").hide();
    $("#botaoBlog").hide();
    $("#botaoSite").hide();
    $("#botaoDownloads").hide();
    $("#blogEstrutura").hide();
    $("#blogProcessos").show();
    $("#blogFinanceiro").hide();
}

function mostrarblogFinanceiro(){
    $("#botaoAgenda").hide();
    $("#botaoBlog").hide();
    $("#botaoSite").hide();
    $("#botaoDownloads").hide();
    $("#blogEstrutura").hide();
    $("#blogProcessos").hide();
    $("#blogFinanceiro").show();
}

$(function(){
    $("#botaoAgenda").hide();
    $("#botaoSite").show();
    $("#botaoBlog").hide();
    $("#botaoDownloads").hide();
    $("#blogEstrutura").hide();
    $("#blogProcessos").hide();
    $("#blogFinanceiro").hide();
});
