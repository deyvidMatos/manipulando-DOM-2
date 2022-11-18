function cadastrar(){
    type = document.querySelector("option").value
    area = document.querySelector("input[name= 'area']").value
    dispo = document.querySelector("input[name= 'disponibilidade']").value
    let newElement = document.querySelector("li")
    document.createElement("li")
    newElement.classList.add("list-group-item")
    newElement.innerText("Tipo: " + type + " Area: " + area + " atualmente: " + dispo)

    function button(){
        var newButton = document.querySelector("li#btn")
        document.createElement("button")
        newButton.id.add("btn")
        newButton.classList.add("btn btn-outline-danger")
        newButton.innerText("Apagar")
        newButton.onclick = deletar()

        deletar()
    }
}