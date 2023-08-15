conect()
const input_box = document.querySelector(".quote p");
async function conect() {
  const data = await fetch("https://api.kanye.rest");
  const quoute = await data.json();
  input_box.innerHTML = JSON.stringify(quoute);

}
setInterval(()=>{
    conect()
},8000)

