const bataoTrailer = document.querySelector('.botton-trailer');
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;
const modal = document.querySelector(".modal");

function alternarModal(){
   modal.classList.toggle("aberto")
}

bataoTrailer.addEventListener("click", () => {
   alternarModal();
   video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () =>{
   alternarModal();
   video.setAttribute("src", "");
});














