const btns = document.querySelectorAll('.modalBtn')


const switchModal = () => 
{
    const modal = document.querySelector('.modal')
    const actualStyle = modal.style.display

    if (actualStyle === 'block') 
    {
        
        modal.style.display = 'none'

    } else 
    {
        
        modal.style.display = 'block'
    
    }
}


btns.forEach(btn => 
{
    btn.addEventListener('click', switchModal)
})


window.onclick = function (event) 
{
    const modal = document.querySelector('.modal')
    if (event.target === modal) 
    {
        switchModal()
    }
}
