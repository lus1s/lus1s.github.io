function validacao() {
    let nome = document.getElementById("nome");
    let sobrenome = document.getElementById("sobrenome");
    let nascimento = document.getElementById("nascimento");
    let graduacao = document.getElementById("graduacao");
    let turno = document.getElementById("turno");
    let year = 2024;
    // const d = new Date();
    // let year = d.getFullYear();

    if (nome.value == "") {
        alert("Preencha o campo nome!!");
        document.getElementById("nome").focus();
        return false;
    }
    if (sobrenome.value == "") {
        alert("Preencha o campo Sobrenome!!");
        document.getElementById("sobrenome").focus();
        return false;
    }
    if (nascimento.value == "") {
        alert("Preencha o campo nome!!");
        document.getElementById("nascimento").focus();
        return false;
    } else {
        let subtracao = parseInt(nascimento) - parseInt(year);
        if (subtracao < 15) {
            alert("Você é menor de 15 anos, não é possivel realizar sua inscrição!!");
            return false;
        }
    }
    if (graduacao.value== "") {
        alert("Preencha o campo nome!!");
        document.getElementById("graduacao").focus();
        return false;
    }
    if (turno.checked == "") {
        alert("Preencha o campo nome!!");
        document.getElementById("turno").focus();
        return false;
    }

    document.getElementById("valores").innerHTML= "Valores inseridos: Nome: " + nome + "Sobrenome: " + sobrenome + "Ano de Nascimento: " + nascimento + "Graduação: " + graduaçao +     "Turno: " + turno;

}