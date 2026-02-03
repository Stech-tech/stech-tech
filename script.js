
alert("JS LOADED");

const btn =
document.getElementById("colorBtn");

btn.addEventListener("click",function
() {
    document.body.style.backgroundColor =
    "lightcoral";
})
document.addEventListener("DOMContentLoaded",
    () => {
        const btn =
document.getElementById("actionBtn");
        const message =
document.getElementById("message");        

  if(btn && message) {
    btn.addEventListener("click", () =>
    {
        message.textContent = "JS is working!";
        message.classList.toggle("active");
    });     
 }
});
    


        
    

