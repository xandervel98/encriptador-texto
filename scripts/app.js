function encriptar() {
    let texto = document.getElementById("texto_encriptar").value;
    const reglas = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };
    
    let texto_encriptado = texto.replace(/[eioua]/g, letra => reglas[letra]);
    document.getElementById("muñeco").style.display = 'none';
    document.getElementById("parrafo_resultado").style.display = 'none';
    document.getElementById("btn_copiar").style.display = 'block';
    document.getElementById("titulo_resultado").style.display = 'none';
    document.getElementById("resultado").textContent = texto_encriptado;
    document.getElementById("resultado").style.display = 'block';
}

function desencriptar() {
    let texto = document.getElementById("texto_encriptar").value;
    const reglasInvertidas = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };
    
    let texto_desencriptado = texto.replace(/enter|imes|ai|ober|ufat/g, encriptado => reglasInvertidas[encriptado]);
    document.getElementById("muñeco").style.display = 'none';
    document.getElementById("parrafo_resultado").style.display = 'none';
    document.getElementById("btn_copiar").style.display = 'block';
    document.getElementById("titulo_resultado").style.display = 'none';
    document.getElementById("resultado").textContent = texto_desencriptado;
    document.getElementById("resultado").style.display = 'block';
}

function copiarAlPortapapeles() {
    const texto = document.getElementById("resultado").textContent;

    navigator.clipboard.writeText(texto)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}