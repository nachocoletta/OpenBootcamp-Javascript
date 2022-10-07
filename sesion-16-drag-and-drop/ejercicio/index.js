// - Replica el ejercicio completo del vídeo

// - Añade dos párrafos más en cada una de las secciones

// - Pon un icono de papelera para eliminar párrafos (Esta imagen puede valer: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMWeEC0tULzOjfWFAOdOHjUw9WjXhBDbirg&usqp=CAU)

// - Añade el código necesario para que al arrastrar un fragmento del puzzle a la papelera, éste se elimine

const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const papelera = document.querySelectorAll(".drop_zone")

// console.log(papelera)

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        // console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })

    parrafo.addEventListener("drop", (event) => {
      event.preventDefault();
      console.log("Dropping")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy" // copy por defecto
        // console.log("Drag Over")
        //
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        console.log("Párrafo id: ", id_parrafo)
        
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})

papelera.forEach(dropzone => {
  dropzone.addEventListener("dragover", event => {
    event.preventDefault();
  })
  dropzone.addEventListener("drop", event => {
    const id = event.dataTransfer.getData("id");
    const elemento = document.getElementById(id);
    elemento.remove("id")
  })
})

function dropHandler(ev) {
  console.log('Parrafo(s) arrastrados');
  console.log("values ", parrafos.values());
  let data = ev.dataTransfer;
  // console.log("data ", ev.dataTransfer.getData('Data'))
  
 
  parrafos.forEach(parrafo => {
    // console.log("parr " , parr)
    parrafo.addEventListener("dragstart", event => {
      console.log("Estoy arrastrando el párrafo del orto: " + parrafo.innerText)
      parrafo.classList.add("dragging")
      event.dataTransfer.setData("id", parrafo.id)
      const elemento_fantasma = document.querySelector(".imagen-fantasma")
      event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
  })
  })
  alert("ok")

    // Evitar el comportamiendo por defecto (Evitar que el fichero se abra/ejecute)
    ev.preventDefault();
  
    console.log(ev.dataTransfer)
    // if (ev.dataTransfer.items) {
    //   // Usar la interfaz DataTransferItemList para acceder a el/los archivos)
    //   for (var i = 0; i < ev.dataTransfer.items.length; i++) {
    //     // Si los elementos arrastrados no son ficheros, rechazarlos
    //     if (ev.dataTransfer.items[i].kind === 'file') {
    //       var file = ev.dataTransfer.items[i].getAsFile();
    //       console.log('... file[' + i + '].name = ' + file.name);
    //     }
    //   }
    // } else {
    //   // Usar la interfaz DataTransfer para acceder a el/los archivos
    //   for (var i = 0; i < ev.dataTransfer.files.length; i++) {
    //     console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
    //   }
    // }
  
    // Pasar el evento a removeDragData para limpiar
    removeDragData(ev)
  }

  function dragOverHandler(ev) {
    console.log('File(s) in drop zone');
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }

  function removeDragData(ev) {
    console.log('Removing drag data');
    // document.getElementById()
    // console.log(ev.DragEvent)
    // const target = document.querySelector("")
  //   parrafos.forEach(parrafo => {
      
  //     parrafo.addEventListener("drop", (event) => {
  //       // event.preventDefault();
  //       // console.log("Dropping")
  //       const id_parrafo = event.dataTransfer.getData("id")
  //         // console.log("Párrafo id: ", id_parrafo)
          
  //       const parrafo = document.getElementById(id_parrafo)
  //       console.log(parrafo)
  //       parrafo.removeChild(parrafo)
  //     })
  //   // console.log(parrafo)
  // })
    
    // let elemento = document.getElementById("parrafo-1");
    // elemento.parentNode.removeChild(elemento)
    // if (ev.dataTransfer.items) {
    //   // Use DataTransferItemList interface to remove the drag data
    //   ev.dataTransfer.items.clear();
    // } else {
    //   // Use DataTransfer interface to remove the drag data
    //   ev.dataTransfer.clearData();
    // }
  }
  
  