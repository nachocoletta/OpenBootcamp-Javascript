class Posicion {
    constructor(lat, lng){
        this.lat = lat;
        this.lng = lng
    }
}

class Marcador {
    constructor(position, map, title){
        this.position = position
        this.map = map,
        this.title = title
    }
}

let marker, map;

let posicion1 = new Posicion(-34.66750755388183, -58.36821950237456);
let posicion2 = new Posicion(-34.663527863491844, -58.36411218888313);
let posicion3 = new Posicion(-42.76457204789828, -65.03336247328163);

function initMap() {
    console.log("Inicializando mapa")
    const posicionInicial = {
        lat: -34.63683317839179,
        lng: -58.450440217719986
    } // posicion de casa

    const posicion = posicionInicial;
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })

    let marcador1 = new google.maps.Marker(new Marcador(posicion1, map, "posicion1")) 
    marcador1.setPosition(posicion1);
    let marcador2 = new google.maps.Marker(new Marcador(posicion1, map, "posicion2")) 
    marcador2.setPosition(posicion2)
    let marcador3 = new google.maps.Marker(new Marcador(posicion1, map, "posicion3")) 
    marcador3.setPosition(posicion3)


    marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posición Inicial"
    })

    // Obtener la geolocalización
    // marker.setPosition({ lat, lng })
    // geoPosiciona()
}

function geoPosiciona() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const options = { timeout: 60000 }
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    } else {
        alert("Tu navegador no admite geolocalización")
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.log("Se ha producido un error y lo hemos gestionado")
    console.error(error)
}

function tresPosicionesFavoritas(pos1, pos2, pos3){
    

}