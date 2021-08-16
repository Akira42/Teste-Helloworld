//máscara tel
$("#telefone").inputmask({
    mask: ["(99)9{4}-9999", "(99)9{5}-9999"],
    keepStatic: true
});

//envia form
function formContatoSubmit() {
    var inputNome = document.getElementById("nome").value;
    var inputEmail = document.getElementById("email").value;
    var inputTel = document.getElementById("telefone").value;
    var inputDept = document.getElementById("departamento").value;
    var inputMsg = document.getElementById("mensagem").value;

    $.ajax({ 
        headers: {"Allow-Control-Allow-Origin":"*"},
        url: "https://clients.up.rocks/desafio/formContact", 
        type: "POST", 
        data: {name: inputNome, email: inputEmail, phone: inputTel, departament: inputDept, message: inputMsg}, 
        dataType: "json", 
    }); 


    alert("Enviado")
}
