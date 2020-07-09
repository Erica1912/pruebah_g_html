  

function myFunction() {
     
    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;
    let fullname = nombre.concat(" ", apellido);
    
    if (nombre == "") {
        document.getElementById('showName').style.display = 'block';
        document.getElementById('text').style.display = 'none'
        document.getElementById("objfullname").innerHTML = "Ingresar el Nombre por favor";
        document.getElementById("nombre").focus();
    } else if (apellido == ""){
        document.getElementById('showName').style.display = 'block';
        document.getElementById('text').style.display = 'none'
        document.getElementById("objfullname").innerHTML = "Ingresar el Apellido por favor";
        document.getElementById("apellido").focus();
    }else{
        document.getElementById('showName').style.display = 'block';
        document.getElementById('text').style.display = 'block'
        document.getElementById("objfullname").innerHTML = fullname;
        
    }

}

const spTotal = document.getElementById('spTotal');

function sumar (valor) {   
    let total = parseInt(spTotal.innerHTML || 0);
    total += parseInt(valor);
    spTotal.innerHTML = total;
}

const inputnames = document.querySelectorAll('input[name="ftp_desc"]');
const glass = document.getElementById('glass');

inputnames.forEach((input)=>{
    input.addEventListener('change', ()=>{
      let total= parseInt( glass.innerHTML || 0)
      total += parseInt(input.value);
      glass.innerHTML= total      
    })
})
