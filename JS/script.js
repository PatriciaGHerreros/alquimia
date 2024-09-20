/*boton para menu desplegable*/
document.addEventListener("DOMContentLoaded", ()=> {
let nav_icon = document.querySelector (".nav-boton");
let menu_nav = document.querySelector (".menu-nav");

function delegar(e){
    menu_nav.classList.toggle("menu-nav_visible");
}

nav_icon.addEventListener("click", ()=>{
    menu_nav.classList.toggle ("menu-nav_visible");        /*toggle: acción o función que alterna entre dos estados posibles:si algo está activado, lo desactiva, y si está desactivado, lo activa*/
            
});      
document.addEventListener("click", (e)=>{
    if(e.target.matches("header ul, body div")){;
    delegar(e);
    } 


});
})
// Animar los elementos div que tengan imágenes con zoom con las funciones delegar
let elementos = document.querySelectorAll(".ele-actividades");

function delegar2(e){
    elementos.item(e).classList.toggle("ele_tr");
    
}

function delegar3(e){
    elementos.item(e).classList.toggle("ele_tr");
}
document.addEventListener("mouseover", (e)=>{
    if(e.target.matches("#Actividades .ele-actividades")){
        switch(e.target.id){
            case "rutastematicas": delegar2(0); break;
            case "gymkanas": delegar2(1); break;
            case "escaperooms": delegar2(2); break;
        };
    
    }
})  
document.addEventListener("mouseout", (e)=>{
    if(e.target.matches("#Actividades .ele-actividades")){
        switch(e.target.id){
            case "rutastematicas": delegar3(0); break;
            case "gymkanas": delegar3(1); break;
            case "escaperooms": delegar3(2); break;
        };
    
    }
}) 

function initMap() {
    // Definiendo la ubicación central de la Sierra Norte y Oeste de Madrid
        var centralLocation = { lat: 40.7600, lng: -3.8750 }; // Coordenadas aproximadas del centro de la región
    
        // Creando el mapa en el elemento con id="map"
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: centralLocation
        });
    
        // Definiendo las ubicaciones de interés
        var locations = [
            { lat: 40.7876, lng: -4.0355, title: 'Cercedilla' },
            { lat: 40.5921, lng: -4.1427, title: 'El Escorial' },
            { lat: 40.7397, lng: -4.0197, title: 'Navacerrada' },
            { lat: 40.7234, lng: -3.9285, title: 'Mancomunidad de la Sierra' },
            { lat: 40.7400, lng: -3.7177, title: 'La Cabrera' }
        ];
    
        // Añadiendo los marcadores al mapa
        locations.forEach(function(location) {
            var marker = new google.maps.Marker({
                position: { lat: location.lat, lng: location.lng },
                map: map,
                title: location.title
            });
        });
    }
    

    // Calendario de reservas:Obtener la información de disponibilidad de los servicios
    $(function() {
        // Inicializa el Datepicker
        $("#fecha").datepicker({
            dateFormat: 'yy-mm-dd',
            onSelect: function(dateText) {
                // Simula fechas con plazas completas
                var fechasCompletas = ['2024-09-15', '2024-09-20', '2024-10-01'];
    
                // Compara la fecha seleccionada con la lista de fechas completas
                if (fechasCompletas.includes(dateText)) {
                    // Si la fecha está en la lista de fechas completas
                    $("#disponibilidad").text("Plazas completas").css("color", "red");
                    $("#reservar").hide(); // Oculta el botón de reserva
                } else {
                    // Si la fecha está disponible
                    $("#disponibilidad").text("Plazas disponibles").css("color", "green");
                    $("#reservar").show(); // Muestra el botón de reserva
                }
            }
        });
    });
 // Mostrar el formulario al hacer clic en el botón de reserva
 $("#reservar").click(function() {
    $("#formulario-reservas").show();
});

// Manejar el envío del formulario
$("#reserva-form").submit(function(event) {
    event.preventDefault(); // Previene el envío del formulario
    $("#formulario-reservas").hide(); // Oculta el formulario
    $("#mensaje-confirmacion").show(); // Muestra el mensaje de confirmación
});

// Función para hacer scroll a la sección de reservas
function scrollToReservas() {
    document.querySelector('#reservas').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');
    if (audio) {
        audio.volume = 0.05; // Establecer el volumen al 5%
    }
});






