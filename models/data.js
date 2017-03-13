/**
 * http://usejsdoc.org/
 */
var data = [
	{"name":"Hackeo de un sitio web generico: $2,000USD", "productType":"servicio", "description":"Podemos dejar fuera de servicio cualquier sitio web, hackearlo o hacer un ataque DDOS.", "img":"http://localhost:3000/imgs/liqs.png"},
    {"name":"Acceso para cuenta de Gmail: $90USD", "productType":"servicio", "description":"Garantizamos el acceso a cualquier cuenta de Gmail", "img":"/imgs/"},
    {"name":"Acceso para cuenta de Facebook: $20USD", "productType":"servicio", "description":"Garantizamos el acceso a cualquier cuenta de Facebook", "img":"/imgs/"},
    {"name":"Servicios de encriptado: $8USD", "productType":"servicio", "description":"Encriptamos tus archivos, correos o lo que sea posible.", "img":"/imgs/"},
    {"name":"Contraseñas para Netflix: $1.25USD", "productType":"servicio", "description":"El entretenimiento deberia ser de facil alcance. Acceso a cuentas de Netflix garantizado.", "img":"/imgs/"},
    {"name":"Facebook Hacker programa 3 meses x 350$USD", "productType":"servicio", "description":"Esta herramienta deja a los usuarios hackear cualquier cuenta de Facebook usando multiples metodos tecnicos de hackeo.", "img":"/imgs/"},

    {"name":"Proxmark3 Kit: $430USD", "productType":"gadget", "description":"Este kit puede ser usado para leer y clonar tarjetas con Radio Frequency Identification (RFDI), puede ser usado para entrar a edficios con sistemas de sguridad que usen esta tecnología.", "img":"/imgs/"},
    {"name":"MagSpoof: $10USD", "productType":"gadget", "description":"Este dispositivo permite emular inalambricamente cualquier tarjeta de credito o tarjeta que contenga una banda magnetica", "img":"/imgs/"},
    {"name":"Portable Intrument for Trace Acquisition (PITA) $300USD", "productType":"gadget", "description":"Este dispositivo del tamaño de una mano puede robar informacion inalambricamente de un computador cercano (hasta 19 pulgadas de distancia). Permite acceder a informacion encriptada y guardarla en una tarjeta SD o enviarla via WiFi a un computador.", "img":"/imgs/"},
    {"name":"ALFA Network USB Wireless Adapter $40USD", "productType":"gadget", "description":"Este dispositivo es necesario para hackear cualquier red WiFi. Este adaptador soporta inyeccion de paquetes que permite encontrar y acceder a redes WiFi desde cientos de metros de distancia.", "img":"/imgs/"},
    {"name":"Dispositivo radial inalambrico para accerder a carros $130USD", "productType":"gadget", "description":"Este dispositivo imita la misma frecuencia que encunetra desde el llavero original del carro cuando se emite para abrir el vehiculo.", "img":"/imgs/"},
    {"name":"RollJam $30USD", "productType":"gadget", "description":"Este dispositivo toma ventaja de una falla en los carros que no necesitan llave interceptando los codigos unicos que se envian desde el dispositivo para abrir hacia el carro.", "img":"/imgs/"},

    {"name":"Hacking lessons 20$", "productType":"educacion", "description":"vamos a aprender", "img":"/imgs/"},
    // {"name":"", "productType":"educacion", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"educacion", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"educacion", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"educacion", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"educacion", "description":"", "img":"/imgs/"},

    {"name":"Plebiscito 2016", "productType":"leaks", "description":"aqui algo no paso como debia de pasar", "img":"/imgs/"},
    //{"name":"", "productType":"leaks", "description":"", "img":"/imgs/"},
    //{"name":"", "productType":"leaks", "description":"", "img":"/imgs/"},
    //{"name":"", "productType":"leaks", "description":"", "img":"/imgs/"},
    //{"name":"", "productType":"leaks", "description":"", "img":"/imgs/"},
    //{"name":"", "productType":"leaks", "description":"", "img":"/imgs/"},

    {"name":"Comision de Elecciones (U.S. Goverment)", "productType":"database", "description":"Fecha: 2016. Institucion gubernamental encargada de hacer cumplir todas las leyes y regulaciones relativas a las elecciones de Estados Unidos. Informacion de aporximadamente 55,000,000 de archivos.", "img":"/imgs/"},
    {"name":"Verizon Communications", "productType":"database", "description":"Fecha: 2016. Compañia de telecomunicaciones con informacion de aproximadamente de 1'500.000 usuarios", "img":"/imgs/"},
    {"name":"University of Central Florida", "productType":"database", "description":"Fecha: 2016. Institucion de educacion superior con informacion de aproximadamente de 63,000 archivos", "img":"/imgs/"},
    {"name":"University of California, Berkeley", "productType":"database", "description":"Fecha: 2016. Institucion de educacion superior con informacion de aproximadamente de 80,000 archivos", "img":"/imgs/"},
    {"name":"Department of Homeland Security (U.S Goverment)", "productType":"database", "description":"Fecha: 2016. Departamento del gobierno de Estados Unidos de America con informacion aproximadamente de 30.000 archivos.", "img":"/imgs/"},
    {"name":"Democratic National Committee", "productType":"database", "description":"Fecha: 2016. Partido politico democrata de los Estados Unidos con informacion aproximadamente de 19,252 archivos.", "img":"/imgs/"}
];



exports.getAll = function(){
	return data;
};

exports.getByProduct = function(productType) {
    var datosFiltrados = data.filter(function (element) {
        return (element.productType == productType);
    });
    return datosFiltrados;
};

