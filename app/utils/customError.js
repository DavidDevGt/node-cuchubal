const errorResponses = {
    404: {
        message: "Recurso no encontrado",
        image: "https://example.com/404-image.png"
    },
    502: {
        message: "Error de puerta de enlace",
        image: "https://example.com/502-image.png"
    },
    403: {
        message: "Acceso prohibido",
        image: "https://example.com/403-image.png"
    },
    200: {
        message: "Operación exitosa",
        image: "https://example.com/200-image.png"
    },
    
};

module.exports = errorResponses;