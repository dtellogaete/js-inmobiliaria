/* Función que captura los filtros  */

const filterProperties = () => {
  /* Inputs */
  const quantityRooms = document.querySelector("#rooms").value;
  const squareMInitial = document.querySelector("#sqr_meter_initial").value;
  const squareMEnd = document.querySelector("#sqr_meter_end").value; 

  if (quantityRooms && squareMInitial && squareMEnd ){        
    return [
      quantityRooms, squareMInitial, squareMEnd,
    ]    
  } else{
    alert("Todos los campos son obligatorios");        
  } 
};

/* Función que muestras las propiedades filtradas */

const showProperties = (filter_variable) => { 
  let filter = filter_variable;  
  console.log("filter "+ filter);
  let cards = document.querySelector(".propiedades");
  let total = document.querySelector("#total")
  let html ='';
  let cont =0;
  for(let property of propertiesJSON){
    if (
      (property.rooms == filter[0] && property.m >= filter[1] && property.m <= filter[2]) || 
      (filter == 0)
      ){ 
      cont +=1;     
      html +=`
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src=${property.src} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${property.name}</h5>
          <div class="d-flex justify-content-between">
              <p>Cuartos: ${property.rooms}</p>
              <p>m² útiles: ${property.m} m²</p>
        </div>
          <p class="card-text">${property.description}</p>
          <a href="#" class="btn btn-info">Ver más</a>
        </div>
      </div>`;
      document.querySelector("#message").innerHTML ='';
    }    
    if(cont === 0) {      
        document.querySelector("#message").innerHTML = "Ninguna propiedad encontrada, intente nuevamente.";        
    }   
  }
    
  cards.innerHTML = html;
  total.innerHTML = cont;
};

showProperties(0);
