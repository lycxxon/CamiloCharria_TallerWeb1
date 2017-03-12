/**
 * http://usejsdoc.org/
 */
var data = [
	{"name":"Hacking a generic website: $2,000", "productType":"servicio", "description":"vamo a hakckear algo ", "img":"http://localhost:3000/imgs/liqs.png"},
    // {"name":"", "productType":"", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"", "description":"", "img":"/imgs/"},

    {"name":"The Proxmark3 Kit $430", "productType":"gadget", "description":"etso hace cositas", "img":"/imgs/"},
    // {"name":"", "productType":"Gagdet", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"Gagdet", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"Gagdet", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"Gagdet", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"Gagdet", "description":"", "img":"/imgs/"},

    {"name":"Hacking lessons 20$", "productType":"educacion", "description":"vamos a aprender", "img":"/imgs/"},
    // {"name":"", "productType":"", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"", "description":"", "img":"/imgs/"},

    {"name":"Plebiscito 2016", "productType":"leaks", "description":"aqui algo no paso como debia de pasar", "img":"/imgs/"},
    // {"name":"", "productType":"", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"", "description":"", "img":"/imgs/"},

    {"name":"Home Depot Credit Card clients credit cards", "productType":"database", "description":"y si nos gastamos la plata en cositas", "img":"/imgs/"},
    // {"name":"", "productType":"", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"", "description":"", "img":"/imgs/"},
    // {"name":"", "productType":"", "description":"", "img":"/imgs/"}
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

