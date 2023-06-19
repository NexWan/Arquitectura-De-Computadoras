$(document).ready(function (){
    $("#header").fadeIn("slow");
    $("#main").fadeIn("slow")
    $(document.body).css('background','url("media/imgs/wallpaper.jpg")')
    var typed = new Typed('#writeTitle', {
        strings: ['Bienvenido seas a', 'Arquitectura de computadoras'],
        typeSpeed: 60,
        backSpeed: 60
    });

    var ul = $(".listContent");
    for (let i = 0; i < ul.length; i++)
        ul[i].children[ul[i].children.length - 1].style.marginBottom = "0px";
    $("#footerContent").html(
        `
            <div class="left">
        hola
    </div>
    <div class="mid">
        <p class="footerP">Page developed by: Leo Mtz</p><br>
        <img src="media/imgs/magpie.jpg" alt="" class="mainContentImg" id="magpie">
    </div>
    <div class="right">
        adios
    </div>`
    )

    let pdfTabs = $('[data-tab]')
    console.log(pdfTabs)
    for (let i = 0; i < pdfTabs.length; i++) {
        var curr = pdfTabs[i]
        let tab = curr.dataset.tab;
        curr.addEventListener("click",()=>{
            changeTab(curr,tab)
        })
    }
    $("#magpie").on('click',()=>{
        window.open("https://github.com/NexWan",'_blank')
    })
})

function changeTab(current,tab){
    let neu = $(`[data-tab="${tab}"`)
    var status = neu[0].dataset.active
    if(status==="true") {
        return
    }
    tab = parseInt(tab)
    neu.addClass('pdfActive')
    neu.removeClass('pdfInactive')
    let toRemove = $('[data-active="true"]')
    if(typeof toRemove[0] !== 'undefined')
        toRemove[0].dataset.active = "false"
    toRemove.removeClass('pdfActive')
    toRemove.addClass('pdfInactive')
    $("#currentPDF").remove()
    let source;
    neu[0].dataset.active = "true"
    switch(tab){
        case 1:
            source = 'media/pdfs/Practica1.pdf'
            break;
        case 2:
            source = 'media/pdfs/Practica2.pdf'
            break;
        case 3:
            source = 'media/pdfs/Practica3.pdf'
            break;
        case 4:
            source = 'media/pdfs/gamas.pdf'
            break;
        case 5:
            source = 'media/pdfs/cotizaciones.pdf';
            break;
    }
    $("#pdfs").append(
        `<embed src="${source}" type="application/pdf" width="100%" height="800px" id="currentPDF">`
    )
}

$(window).resize(function(){
    $("#accordion").accordion("refresh");
});

$(function (){
    $("#accordion").accordion({
        collapsible: true,
        active: false
    })
})

$("#accordion").on('click',() =>{
    var typed = new Typed('#changeArqui',{
        strings: ['Hazme click para comenzar :)', 'Historia de la arquitectura de computadoras'],
        typeSpeed: 30,
        backSpeed: 30,
        showCursor: false
    })
})

$("#turing").on("click",() =>{
    window.open("https://es.wikipedia.org/wiki/Alan_Turing","_blank")
})

$("#vonNeumanArq").on("click",()=>{
    window.open("https://es.wikipedia.org/wiki/Arquitectura_de_Von_Neumann","_blank")
})

async function switchPage(page) {
    await changeSize(page)
    let current = $('.is-active')
    if (parseInt(current.attr('id')) === parseInt(page)) return;
    if (typeof current.attr('id') === 'undefined') {
        $(`#${page}`).toggleClass('inactive is-active');
        $(".active").toggleClass('active hide')
    } else {
        current.addClass('inactive');
        current.removeClass('is-active');
        let nuOne = $(`#${page}`);
        nuOne.toggleClass('inactive is-active');
        let toRemove = $(".active");
        toRemove.removeClass('active');
    }
    switch (page) {
        case 1:
            $('#unidad1').addClass('active');
            break;
        case 2:
            $("#unidad2").addClass('active')
            break;
        case 3:
            $("#unidad3").addClass('active')
            break;
        case 4:
            $("#unidad4").addClass('active')
            break;
        case 5:
            $("#pdfs").addClass('active')
    }
    console.log($('.mainContent').height());
}

async function changeSize(page){
    let newSize;
    switch (page) {
        case 1:
            newSize = $('#unidad1').height()
            var typed = new Typed('.temario',{
                strings: [' ','Unidad 1'],
                typeSpeed: 10,
                backSpeed: 1,
                showCursor: false
            })
            break;
        case 2:
            newSize = $('#unidad2').height()
            var type = new Typed('#changeUnidad2',{
                strings: [' ','Unidad 2'],
                typeSpeed: 10,
                backSpeed: 1,
                showCursor: false
            })
            break;
        case 3:
            newSize = $("#unidad3").height()
            let typ = new Typed('#changeUnidad3',{
                strings: [' ','Unidad 3'],
                typeSpeed: 10,
                backSpeed: 1,
                showCursor: false
            })
            break;
        case 4:
            newSize = $("#unidad4").height()
            let ty = new Typed('#changeUnidad4',{
                strings: [' ','Unidad 4'],
                typeSpeed: 10,
                backSpeed: 1,
                showCursor: false
            })
            break;
        case 5:
            newSize = $("#pdfs").height()
            let t = new Typed('#practicas',{
                strings: [' ','Practicas'],
                typeSpeed: 10,
                backSpeed: 1,
                showCursor: false
            })
            break;
    }
    let calcSize = ($('.title').height() + newSize + 10)
    $('.mainContent').animate({'min-height': calcSize},5)
}

$(function (){
    $('#tabs').tabs({
        active: false,
        collapsible: true,
        activated: function(){
            $("#tabs .ui-tabs-panel:visible").attr("id").fadeIn("slow");
        },show:300, hide: 300,
        animate: true
    });
})

$(function() {
    var tabIds = [
      '#tab-tabs', '#tab-tabs2', '#tab-tab-tabs2', '#tab-memoria',
      '#tab-ES-inner', '#tab-buses-inner', '#unidad2-tabs', '#unidad3-tabs',
      '#tab-estructuraReg', '#tab-cicloInstruccion', '#chipsetTab',
      '#tab-aplicaciones', '#ambientesIndex', '#unidad4-tabs',
      '#aspectosBasicosIndex', '#tiposParaleloIndex', '#sisMemCompTab',
      '#sisMemDistTab', '#estudioIndex', '#practicastab'
    ];
  
    tabIds.forEach(function(tabId) {
      $(tabId).tabs({
        show: 300,
        hide: 300,
        animate: true,
        active: false,
        collapsible: true
      });
    });
  });
  
$("#mainPage").on('click', ()=>{
    window.location.reload()
})