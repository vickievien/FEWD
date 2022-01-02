function openSesame() {
    console.log('hello');
    this.classList.toggle('show-description');
    console.log(this.classList);
}

let clickArea = document.querySelectorAll('.text-wrap');

clickArea.forEach(n => {
    console.log('click');
    n.addEventListener('click', openSesame);    
});
