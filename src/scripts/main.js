const panels = document.querySelectorAll('.panel');
const headers = document.querySelectorAll('h3');

const gallery = document.querySelector('.carousel');

gallery.addEventListener('click', (ev) => {

    removePanelClasses(panels);
    removeTitleClasses(headers);

    ev.target.classList.add('active');
    ev.target.children[0].classList.add('panel__title--active');
    
});

const removeTitleClasses = (collection) => {
    collection.forEach(element => {
        element.classList.remove('panel__title--active');
    });
}

const removePanelClasses = (collection) => {
    collection.forEach(element => {
        element.classList.remove('active');
    });
}
