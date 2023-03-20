let blog1El = document.getElementById("blog2")
let blog2El = document.getElementById("blog3")
let blog3El = document.getElementById("blog4")
let blog4El = document.getElementById("blog5")
let blog5El = document.getElementById("blog6")
let mainEl = document.getElementById("main1")
let icon1El = document.getElementById("icon1")
let icon2El = document.getElementById("icon2")
let icon3El = document.getElementById("icon3")
let icon4El = document.getElementById("icon4")
let icon5El = document.getElementById("icon5")
let slidesEl = document.getElementById("slide")
let profileEl = document.getElementById("profile")
let defaultEl = document.getElementById("default")
let roundedEl = document.getElementById("rounded")
let geomericEl = document.getElementById("geometric")
let elegantEl = document.getElementById("elegant")
let monospaceEl = document.getElementById("monospace")
let startedEl = document.getElementById("started")

function styling(){
    icon1El.style.display = "none"
    icon2El.style.display = "none"
    icon3El.style.display = "none"
    icon4El.style.display = "none"
    icon5El.style.display = "none"
    blog1El.style.backgroundColor = "#a6aaad"
    blog2El.style.backgroundColor = "#a6aaad"
    blog3El.style.backgroundColor = "#a6aaad"
    blog4El.style.backgroundColor = "#a6aaad"
    blog5El.style.backgroundColor = "#a6aaad"
    slidesEl.style.fontFamily = "none"
    defaultEl.style.backgroundColor = "#ffffff"
    roundedEl.style.backgroundColor = "#ffffff"
    geomericEl.style.backgroundColor = "#ffffff"
    elegantEl.style.backgroundColor = "#ffffff"
    monospaceEl.style.backgroundColor = "#ffffff"
    
}

styling()


blog1El.onclick = function(){
    styling()
    blog1El.style.backgroundColor = "blue";
    mainEl.style.fontFamily = "Roboto";
    icon1El.style.display = "block";
    defaultEl.style.backgroundColor = "#3a86de"
    profileEl.style.fontFamily = "Roboto";
    startedEl.style.fontFamily="Roboto";
}

blog2El.onclick = function(){
    styling()
    blog2El.style.backgroundColor = "blue";
    mainEl.style.fontFamily = "Nunito";
    icon2El.style.display = "block";
    roundedEl.style.backgroundColor = "#3a86de";
    profileEl.style.fontFamily = "Nunito";
    startedEl.style.fontFamily="Nunito";
    

}

blog3El.onclick = function(){
    styling()
    blog3El.style.backgroundColor = "blue"
    mainEl.style.fontFamily = "montserrat"
    icon3El.style.display = "block"
    geomericEl.style.backgroundColor="#3a86de";
    profileEl.style.fontFamily = "montserrat";
    startedEl.style.fontFamily="montserrat";
}

blog4El.onclick = function(){
    styling()
    blog4El.style.backgroundColor = "blue"
    mainEl.style.fontFamily = "playfair display"
    icon4El.style.display = "block"
    elegantEl.style.backgroundColor = "#3a86de"
    profileEl.style.fontFamily = "playfair display";
    startedEl.style.fontFamily="playfair display";
}

blog5El.onclick = function(){
    styling()
    blog5El.style.backgroundColor = "blue"
    mainEl.style.fontFamily = "Roboto mono"
    icon5El.style.display = "block"
    monospaceEl.style.backgroundColor = "#3a86de"
    profileEl.style.fontFamily = "Roboto mono";
    startedEl.style.fontFamily="Roboto mono";
}

