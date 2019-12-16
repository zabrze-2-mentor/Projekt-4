window.onload = function getAllPokemonImgs () {
    const srcArr = [];
    const idArr = [];

    for(i=0;i<srcArr.length;i++) {
      idArr[i] = i;
      addPokemonImage(srcArr[i]);
    }  
    
      function addPokemonImage (imgSource) {
          // div na zdjecie
          var newDivImg = document.createElement("div");
          newDivImg.innerHTML = `<img alt = "Pokemon.img" src=${imgSource} draggable="true" ondragstart="dragStart(event)" class="todrag" id="drag-img-${idArr[i]}">`;
          // div ze zdjeciami
          var catchDiv = document.getElementById("pokemon-to-catch-col");
          catchDiv.appendChild(newDivImg);
      }
}

function allowDrop(ev) {
 ev.preventDefault();
}

// function called when the drag operation starts
function dragStart(ev) {
 
 ev.dataTransfer.setData('text', ev.target.id);

 ev.target.className = 'dragging';
}

// function called when the dragged element is dropped
function drop(ev) {
 ev.preventDefault(); 
 var drag_data = ev.dataTransfer.getData('text');

 ev.target.appendChild(document.getElementById(drag_data));

 document.getElementById(drag_data).className = 'todrag';
}
