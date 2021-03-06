// create map
const map = L.map('mapid').setView([-9.0716449, -44.3520314], 16);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon 
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})



let marker;
// create and   add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer 
    marker = L.marker([lat, lng], { icon })
        .addTo(map)
})

// photos upload
function addPhotoField() {
    //    pegar  o  continer de fotos #imge
    const container = document.querySelector('#images')
        // pegar o continer  para  duplicar  .new-image
    const fieldsContainer = document.querySelectorAll(".new-upload")
        //  realizar o clone  da última image adcionada
    const newFieldConainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
        // verificar se o campo está vazio, se  sim, não adcionar  ao container de imagens
    const input = newFieldConainer.children[0];
    if (input.value == "") {
        return
    }
    // limpar o campo antes de add  ao container  de imagens
    input.value = ""

    //Adcionar o clone ao container de #images
    container.appendChild(newFieldConainer)
}

function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll(".new-upload")
    if (fieldsContainer.length < 2) {
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }
    //    deletar o campo 
    span.parentNode.remove()
}

// seleção do sim e não

function toggleSelect(event) {

    // retirar  a class .active (dos botões)
    document.querySelectorAll('.button-select button')
        .forEach(button => button.classList.remove('active'))
        // colocar   a class .active   nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')
        // atualizar  o meu  input hidden com valor  selecuionado
    const input = document.querySelector('[name= "open_on_weekkends"]');

    input.value = button.dataset.value
        // verificar se sim ou não 

}


// export const validate = (event) => {
//     // validate se lat e lng estão preenchidos
//     // const needsLatLng = true;
//     if (lat.value === ' ' && lng.value === ' ') {
//         event.prventDefault();
//         alert("Seleciona um ponto no mapa")
//     }
// }