$(function () {
    gombKirakas()
    szamGombEsemeny()
    konzolraEsemeny()
    ujraEsemeny()
    kozepreEsemeny()
})

function gombKirakas() {
    buttonLista = []

    for (let i = 0; i < 10; i++) {
        buttonLista.push(`<button class="szamGomb" id="${i}">${i}</button>`)
    }
    buttonLista.sort(() => (Math.random() > .5) ? 1 : -1)

    for (let i = 0; i < buttonLista.length; i++) {
        $('#szamGombok').append(buttonLista[i])
    }

}
function szamGombEsemeny() {
    $('.szamGomb').on('click', function () {
        let aktPin = $('#bevittPinInp').val()
        if (aktPin.length < 4) {
            $('#bevittPinInp').val(aktPin + event.target.innerHTML)
        }
    })

}
function konzolraEsemeny() {
    $('#konzolraGomb').on('click', function () {
        console.log('aktuális bevitt pinkód: ', $('#bevittPinInp').val());
    })
}
function ujraEsemeny() {
    $('#ujraGomb').on('click', function () {
        $('#bevittPinInp').val('')
    })
}
function kozepreEsemeny() {
    let kattSzam = 0
     $('input[name=checkbox]').on('change',function () {
        console.log("KOZEPRE");
        $('#szamGombok button:last-child').toggleClass('kozepre')
    }) 
    
}