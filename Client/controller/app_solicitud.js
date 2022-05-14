
var idSolicitud = document.getlementsById('id_solicitud');
var fechaSolicitud = document.getlementsById('fecha_solicitud');

function getData() {

    axios.get('http://localhost:4000/api/Solicitud/get').then((response) => {
        response.data;
        console.log(response.data);
    })
}

connect(DatosSolicitudes)();