'use strict';

{
    const open = document.getElementById('menuicon');
    const dropdown =document.querySelector('.dropdown');
    const close = document.getElementById('closeicon');

    open.addEventListener('click',() =>{
        close.classList.add('show');
        dropdown.classList.add('show');
        
        open.classList.add('hide');
       

    });
    close.addEventListener('click',() =>{
        close.classList.remove('show');
        dropdown.classList.remove('show');
        open.classList.remove('hide');
       

    });
}
