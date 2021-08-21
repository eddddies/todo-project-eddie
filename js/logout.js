const logout = document.querySelector("#logout")

function cleanLocalStorage(){
    localStorage.removeItem(USERNAME_KEY)
    
}

logout.addEventListener("click", cleanLocalStorage)