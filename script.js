const panels = document.querySelectorAll('.panel')

panels.forEach(pics=>{
   pics.addEventListener('click',()=>{
    removeActiveClasses()
    pics.classList.add('active')
   })
})

function removeActiveClasses(){
    panels.forEach(pics=>{
        pics.classList.remove('active')
    })
}