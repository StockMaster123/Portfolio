// evento al dar click
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click',() => //seleccionamos el id que tiene nuestro botón y le decimos que tipo de evento de ratón tendrá
    {
        const content = button.nextElementSibling;
        button.classList.toggle('accordion-button-active');
        
        if (button.classList.contains('accordion-button-active'))
        {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
        else
        {
            content.style.maxHeight = 0;
        }
    })
    
});

const button_contacto = document.getElementById('contact');
const container = document.getElementById('container');
const button_exit = document.getElementById('exit');
const form = document.getElementById('formulario');

button_contacto.addEventListener('click', () =>
{
   
    form.classList.toggle('active');
    container.style.filter = 'blur(1.5px)';
    
})
