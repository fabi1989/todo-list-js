const iText = document.querySelector("#inpuText");
const listContainer = document.querySelector(".list_container")

function agregarTarea(){
    if(iText.value === ''){
        alert("ingresa alguna tarea");
    }else{
        let li = document.createElement("li");
        li.innerHTML = iText.value;
        listContainer.appendChild(li)
        let span = document.createElement("span")
        //span.textContent = "X"
        span.innerHTML ="\u00d7"
        li.appendChild(span)
    }

    iText.value = '';
    subirDatos();
}

listContainer.addEventListener("click", function (e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        subirDatos();
    }else if
    (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        subirDatos();
    }
        
},false)

//guardar en localstorage
function subirDatos(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function mostrarTareas(){
    listContainer.innerHTML = localStorage.getItem("data");
}
mostrarTareas();