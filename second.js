var note_ele = document.querySelector(`.note`);
var btn = document.querySelector(`.btns`);
const sh = document.querySelector(".main_btn");
const Opens = () => {
  note_ele.style.display = "block";
  btn.style.display = "block";
};
const Close = () => {
  note_ele.style.display = "none";
  btn.style.display = "none";
};

sh.addEventListener("click", () => {
  Opens();
});
btn.addEventListener("click", () => {
  Close();
});

// image slide
var imgindex=0;
setInterval(()=>{
const img=document.querySelectorAll(".slide")
for(let i=0;i<img.length;i++)
{
  img[i].style.display="none";
}
imgindex++
if(imgindex>2)
{
  imgindex=0;
}
img[imgindex].style.display="block";
img[imgindex].style.opacity=1;


},2000)