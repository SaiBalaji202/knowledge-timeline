const listItems = document.querySelectorAll('#timeline ul li');

const isInViewPort = element => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 &&
        rect.left >= 0 &&
        (rect.bottom <= window.innerHeight || rect.bottom <= document.documentElement.clientHeight) &&
        (rect.width <= window.innerWidth || rect.right <= document.documentElement.clientWidth)
};

const run = () => {
    let i = 0;
    listItems.forEach(listItem => {
        console.log(++i);
        if (isInViewPort(listItem)) {
            listItem.classList.add('active');
        }
    });
}

window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);