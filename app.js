let API_KEY = localStorage.getItem("paradox_key");
if(!API_KEY){
  API_KEY = prompt("Pega tu API KEY de OpenAI:");
  localStorage.setItem("paradox_key", API_KEY);
}

function mostrar(t){
  document.getElementById("chat").innerHTML += "<p>"+t+"</p>";
}

async function enviar(){
  const msg = document.getElementById("msg").value;
  mostrar("<b>Tú:</b> "+msg);

  try{
    const r = await fetch("https://api.openai.com/v1/responses",{
      method:"POST",
      headers:{
        "Authorization":"Bearer "+API_KEY,
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        model:"gpt-4.1-mini",
        input: msg
      })
    });

    const data = await r.json();
    const texto = data.output[0].content[0].text;
    mostrar("<b>ParadoX:</b> "+texto);
  }catch(e){
    mostrar("❌ Error de conexión");
  }
}
