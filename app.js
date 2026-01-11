function mostrar(t){
  document.getElementById("chat").innerHTML += "<p>"+t+"</p>";
}

async function enviar(){
  const msg = document.getElementById("msg").value;
  mostrar("<b>Tú:</b> "+msg);

  try{
    const r = await fetch("http://192.168.1.8:3001/ia",{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ msg })
    });

    const data = await r.json();
    const texto = data.output[0].content[0].text;
    mostrar("<b>ParadoX:</b> "+texto);
  }catch(e){
    mostrar("❌ Error de conexión con el servidor");
  }
}
function mostrar(t){
  document.getElementById("chat").innerHTML += "<p>"+t+"</p>";
}

async function enviar(){
  const msg = document.getElementById("msg").value;
  mostrar("<b>Tú:</b> "+msg);

  try{
    const r = await fetch("http://localhost:3001/ia",{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ msg })
    });

    const data = await r.json();
    const texto = data.output[0].content[0].text;
    mostrar("<b>ParadoX:</b> "+texto);
  }catch(e){
    mostrar("❌ Error de conexión con el servidor");
  }
}
