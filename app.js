let switchOnSpring = document.querySelector('.switch__on__spring');
let leafs = document.querySelectorAll('.leaf_none');
let audio = new Audio("My Heart Will Go On.mp3");

switchOnSpring.addEventListener('click', () => {
    leafs.forEach(leaf => leaf.classList.add('leaf'));
    audio.play();
})