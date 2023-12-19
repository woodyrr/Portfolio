let email = document.querySelector(".email")
const copy = document.querySelector(".copy");
copy.addEventListener("click", () =>{
    navigator.clipboard.writeText(email.innerHTML);
    alert('Email copied to clipboard');
})