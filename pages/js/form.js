document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    const telefono = "51313157";
  
    const nombre = document.querySelector("#nombre").value;
    const tel = document.querySelector("#tel").value;
    const email = document.querySelector("#email").value;
    
    const asunto = document.querySelector("#asunto").value;
    const mensaje = document.querySelector("#mensaje").value;
  
   
  
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *_Papelera peter pan_*%0A
          *formulario de contacto*%0A%0A
          *¿Cuál es tu nombre?*%0A
          ${nombre}%0A
          *Indica su celular*%0A
          ${tel}%0A
          *Indica email*%0A
          ${email}%0A
          *asunto*%0A
          ${asunto}%0A
          
          *Mensaje:*%0A
          ${mensaje}`;
  
   
    
  
    window.open(url);
  });
  