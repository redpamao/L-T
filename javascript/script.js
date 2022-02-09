const elsom = document.querySelector("#elsopont")
const masodikm = document.querySelector("#masodikpont")
const harmadikm = document.querySelector("#harmadikpont")
const negyedikm = document.querySelector("#negyedikpont")
const otodikm = document.querySelector("#otodikpont")
const hatodikm = document.querySelector("#hatodikpont")
const kiemelt = document.querySelector(".kiemelt")
const kiemelt2 = document.querySelector(".kiemelt2")
const programlista = document.querySelector("#programlista")
const program1 = document.querySelector("#program1")
const program2 = document.querySelector("#program2")
const program3 = document.querySelector("#program3")
const tartalom1 = document.querySelector("#tartalom1")
const tartalom2 = document.querySelector("#tartalom2")
const tartalom3 = document.querySelector("#tartalom3")
const tartalom4 = document.querySelector("#tartalom4")
const mohacs = document.querySelector("#mohacs")
const becs = document.querySelector("#becs")
const london = document.querySelector("#london")


elsom.addEventListener("click", () => {
    kiemelt.style.top = "0px"
    kiemelt.classList.add("balsarok")
    programlista.classList.remove("programok")
    programlista.classList.add("hidden")
    tartalom1.style.top = "0%"
    tartalom2.style.top = "100%"
    tartalom3.style.top = "200%"
    mohacs.style.top = "400%"
    becs.style.top = "500%"
    london.style.top = "600%"
    tartalom4.style.top = "700%"

})
masodikm.addEventListener("click", () => {
    kiemelt.style.top = "60px"
    kiemelt.classList.remove("balsarok")
    programlista.classList.remove("programok")
    programlista.classList.add("hidden")
    tartalom1.style.top = "-100%"
    tartalom2.style.top = "0%"
    tartalom3.style.top = "100%"
    mohacs.style.top = "300%"
    becs.style.top = "400%"
    london.style.top = "500%"
    tartalom4.style.top = "600%"
})
harmadikm.addEventListener("click", () => {
    kiemelt.style.top = "120px"
    kiemelt.classList.remove("balsarok")
    programlista.classList.remove("programok")
    programlista.classList.add("hidden")
    tartalom1.style.top = "-200%"
    tartalom2.style.top = "-100%"
    tartalom3.style.top = "0%"
    mohacs.style.top = "200%"
    becs.style.top = "300%"
    london.style.top = "400%"
    tartalom4.style.top = "500%"

})
negyedikm.addEventListener("click", () => {
    kiemelt.style.top = "180px"
    kiemelt.classList.remove("balsarok")
    programlista.classList.remove("hidden")
    programlista.classList.add("programok")
    tartalom1.style.top = "-300%"
    tartalom2.style.top = "-200%"
    tartalom3.style.top = "-100%"
    mohacs.style.top = "200%"
    becs.style.top = "300%"
    london.style.top = "400%"
    tartalom4.style.top = "500%"
    kiemelt2.style.top = "300%"
})

otodikm.addEventListener("click", () => {
    kiemelt.style.top = "240px"
    kiemelt.classList.remove("balsarok")
    programlista.classList.remove("programok")
    programlista.classList.add("hidden")
    tartalom1.style.top = "-700%"
    tartalom2.style.top = "-600%"
    tartalom3.style.top = "-500%"
    mohacs.style.top = "-300%"
    becs.style.top = "-200%"
    london.style.top = "-100%"
    tartalom4.style.top = "0%"

})

program1.addEventListener("click", () => {
    kiemelt2.style.top = "0px"
    tartalom1.style.top = "-400%"
    tartalom2.style.top = "-300%"
    tartalom3.style.top = "-200%"
    mohacs.style.top = "0%"
    becs.style.top = "100%"
    london.style.top = "200%"
    tartalom4.style.top = "300%"
})
program2.addEventListener("click", () => {
    kiemelt2.style.top = "60px"
    tartalom1.style.top = "-500%"
    tartalom2.style.top = "-400%"
    tartalom3.style.top = "-300%"
    mohacs.style.top = "-100%"
    becs.style.top = "0%"
    london.style.top = "100%"
    tartalom4.style.top = "200%"
})
program3.addEventListener("click", () => {
    kiemelt2.style.top = "120px"
    tartalom1.style.top = "-600%"
    tartalom2.style.top = "-500%"
    tartalom3.style.top = "-400%"
    mohacs.style.top = "-200%"
    becs.style.top = "-100%"
    london.style.top = "0%"
    tartalom4.style.top = "100%"
})