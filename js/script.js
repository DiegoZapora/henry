function login() {
    const res = document.getElementById("login")
    document.getElementById("fundo-escuro").style.display = "block"
    if (res.style.display == 'block') {
        res.style.display = 'none'
    } else {
        res.style.display = 'block'
    }
}

function fecha() {
    const res = document.getElementById("login")
    document.getElementById("fundo-escuro").style.display = "none";
    if (res.style.display == 'block') {
        res.style.display = 'none'
    } else {
        res.style.display = 'block'
    }
}