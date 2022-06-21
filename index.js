const canvas = document.querySelector('canvas');
const con = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

con.fillStyle = 'white';
con.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = './images/PetBattle.png'

image.onload = () => {
    con.drawImage(image, -500, -1100);
};