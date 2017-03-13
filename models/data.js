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

    {"name":"Proxmark3 Kit: $430USD", "productType":"gadget", "description":"Este kit puede ser usado para leer y clonar tarjetas con Radio Frequency Identification (RFDI), puede ser usado para entrar a edficios con sistemas de sguridad que usen esta tecnología.", "img":"http://localhost:3000/imgs/Gadgets-05.png"},
    {"name":"MagSpoof: $10USD", "productType":"gadget", "description":"Este dispositivo permite emular inalambricamente cualquier tarjeta de credito o tarjeta que contenga una banda magnetica", "img":"http://localhost:3000/imgs/Gadgets-01.png"},
    {"name":"Portable Intrument for Trace Acquisition (PITA) $300USD", "productType":"gadget", "description":"Este dispositivo del tamaño de una mano puede robar informacion inalambricamente de un computador cercano (hasta 19 pulgadas de distancia). Permite acceder a informacion encriptada y guardarla en una tarjeta SD o enviarla via WiFi a un computador.", "img":"http://localhost:3000/imgs/Gadgets-04.png"},
    {"name":"ALFA Network USB Wireless Adapter $40USD", "productType":"gadget", "description":"Este dispositivo es necesario para hackear cualquier red WiFi. Este adaptador soporta inyeccion de paquetes que permite encontrar y acceder a redes WiFi desde cientos de metros de distancia.", "img":"http://localhost:3000/imgs/Gadgets-03.png"},
    {"name":"Dispositivo radial inalambrico para accerder a carros $130USD", "productType":"gadget", "description":"Este dispositivo imita la misma frecuencia que encunetra desde el llavero original del carro cuando se emite para abrir el vehiculo.", "img":"http://localhost:3000/imgs/Gadgets-06.png"},
    {"name":"RollJam $30USD", "productType":"gadget", "description":"Este dispositivo toma ventaja de una falla en los carros que no necesitan llave interceptando los codigos unicos que se envian desde el dispositivo para abrir hacia el carro.", "img":"http://localhost:3000/imgs/Gadgets-02.png"},

    {"name":"Lecciones de Hack (Nivel: 1) $20USD", "productType":"educacion", "description":"Enseñaremos simples tareas de hack, como un ataque DDoS (Distributed denial of Service). Se paga la mitad por adelantado y despues el resto.", "img":"http://localhost:3000/imgs/lessons-07.png"},
    {"name":"Lecciones de Hack (Nivel: 2) $20USD", "productType":"educacion", "description":"Nivel 2 de 6", "img":"http://localhost:3000/imgs/lessons-08.png"},
    {"name":"Lecciones de Hack (Nivel: 3) $40USD", "productType":"educacion", "description":"Nivel 3 de 6", "img":"http://localhost:3000/imgs/lessons-09.png"},
    {"name":"Lecciones de Hack (Nivel: 4) $40USD", "productType":"educacion", "description":"Nivel 4 de 6", "img":"http://localhost:3000/imgs/lessons-10.png"},
    {"name":"Lecciones de Hack (Nivel: 5) $60USD", "productType":"educacion", "description":"Nivel 5 de 6", "img":"http://localhost:3000/imgs/lessons-11.png"},
    {"name":"Lecciones de Hack (Nivel: 6) $60USD", "productType":"educacion", "description":"Nivel 6 de 6", "img":"http://localhost:3000/imgs/lessons-12.png"},

    {"name":"Ordenes de Espionaje de la CIA", "productType":"leaks", "description":"Fecha: Febrero, 2017. Supuesto informe sobre las órdenes de espionaje de la CIA (marcadas como NOFORN) para la elección presidencial francesa de 2012. La orden pedía detalles sobre el financiamiento de partidos, rivalidades internas y actitudes futuras hacia Estados Unidos.", "img":"http://localhost:3000/imgs/leaks-20.png"},
    {"name":"Vault7 (CIA)", "productType":"leaks", "description":"Es una serie de leaks sobre la CIA y los métodos y medios que usan para hackear, monitorizar, controlar e incluso inhabilitar sistemas que van desde teléfonos inteligentes, televisores e incluso implantes dentales.", "img":"http://localhost:3000/imgs/leaks-23.png"},
    {"name":"Invetigacion Alemana BND-NSA", "productType":"leaks", "description":"2.420 documentos que alegan son de la Comisión parlamentaria alemana que investiga el escándalo de espionaje de la NSA.", "img":"http://localhost:3000/imgs/leaks-19.png"},
    {"name":"PlusD", "productType":"leaks", "description":"Más de 500.000 cables diplomáticos enviados por el Departamento de Estado de los Estados Unidos en 1979 durante la presidencia de Jimmy Carter.", "img":"http://localhost:3000/imgs/leaks-22.png"},
    {"name":"Los Archivos de Yemen", "productType":"leaks", "description":"200 correos electrónicos y 300 documentos internos presuntamente de la Embajada de los Estados Unidos en Sana'a, Yemen. Estos archivos parecen proporcionar detalles sobre las operaciones militares de los Estados Unidos en Yemen de 2009 a marzo de 2015.", "img":"http://localhost:3000/imgs/leaks-21.png"},
    {"name":"Podesta emails", "productType":"leaks", "description":"Correos electrónicos de John Podesta, presidente de la campaña presidencial Hillary Clinton de 2016. Los mensajes de correo electrónico proporcionan una idea del funcionamiento interno de la campaña de Clinton.", "img":"http://localhost:3000/imgs/leaks-24.png"},

    {"name":"Comision de Elecciones (Philippines)", "productType":"database", "description":"Fecha: 2016. Institucion gubernamental encargada de hacer cumplir todas las leyes y regulaciones relativas a las elecciones de Estados Unidos. Informacion de aporximadamente 55,000,000 de archivos.", "img":"http://localhost:3000/imgs/database-14.png"},
    {"name":"Verizon Communications", "productType":"database", "description":"Fecha: 2016. Compañia de telecomunicaciones con informacion de aproximadamente de 1'500.000 usuarios", "img":"http://localhost:3000/imgs/database-17.png"},
    {"name":"University of Central Florida", "productType":"database", "description":"Fecha: 2016. Institucion de educacion superior con informacion de aproximadamente de 63,000 archivos", "img":"http://localhost:3000/imgs/database-13.png"},
    {"name":"University of California, Berkeley", "productType":"database", "description":"Fecha: 2016. Institucion de educacion superior con informacion de aproximadamente de 80,000 archivos", "img":"http://localhost:3000/imgs/database-18.png"},
    {"name":"Department of Homeland Security (U.S Goverment)", "productType":"database", "description":"Fecha: 2016. Departamento del gobierno de Estados Unidos de America con informacion aproximadamente de 30.000 archivos.", "img":"http://localhost:3000/imgs/database-15.png"},
    {"name":"Democratic National Committee", "productType":"database", "description":"Fecha: 2016. Partido politico democrata de los Estados Unidos con informacion aproximadamente de 19,252 archivos.", "img":"http://localhost:3000/imgs/database-16.png"}
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

