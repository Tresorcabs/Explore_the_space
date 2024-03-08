const links = document.querySelectorAll("ul li");
/*ICI ON ATTRIBUT LA CLASSE *active* A LA NAVBAR AYANT L'ID #nav SI ELLE N'EXISTE PAS
ET ON LA RETIRE SI ELLE EXISTE (pour faire apparaître et disparaître le menu)
*/
icons.addEventListener("click", () =>{
    nav.classList.toggle("active");
})

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    }) 
})