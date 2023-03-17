window.addEventListener("load", ()=>{
    const input = document.getElementById("upload");
    const filewrapper = document.getElementById("filewrapper");

    input.addEventListener("change", (e)=>{
        let fileName = e.target.files[0].name;
        let fileType = e.target.value.split(".").pop();
        fileshow(fileType,fileName);
    })

    const fileshow = (fileName, fileType) => {
        const showfileboxElement = document.createElement("div");
        showfileboxElement.classList.add("showfilebox");
        const leftElement = document.createElement("div");
        leftElement.classList.add("left");
        const fileTypeElement = document.createElement("span");
        fileTypeElement.classList.add("filetype");
        fileTypeElement.innerHTML = fileType;
        leftElement.append(fileTypeElement);
        const filetitleElement =document.createElement("h3");
        filetitleElement.innerHTML = fileName;

        showfileboxElement.append(leftElement);
        const rightElement = document.createElement("div");
        rightElement.classList.add("right");
        showfileboxElement.append(rightElement);
        const crossElement = document.createElement("span");
        crossElement.innerHTML = "&#215;";
        rightElement.append(crossElement);
        filewrapper.append(showfileboxElement);
        
        crossElement.addEventListener("click", ()=>{
            filewrapper.removeChild(showfileboxElement)
        })
    }
})