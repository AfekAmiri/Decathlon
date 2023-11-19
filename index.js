import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 5;
scene.background = new THREE.Color(0xffffff); // Blanc

// Création d'un dé avec 6 faces
    function createDice() {
    		const material = new THREE.MeshBasicMaterial({ color: 0x000000});
        const geometry = new THREE.BoxGeometry(2,2,2);
        return new THREE.Mesh(geometry, material);
    }
// Ajout du dé à la scène
    const dice = createDice();
    dice.position.x =0;
    dice.position.y =0;
    scene.add(dice);

// Fonction de lancer de dé
    const rollDice = () => {
    	//rotation
        dice.rotation.x += 0.09
        dice.rotation.y += 0.09
        dice.rotation.z += 0.09
      // translation
    		dice.position.x -= 0.05;
    		dice.position.y -= 0.01;
    		dice.position.z += 0.00;
    };
// Animation de la scène
let animationID;
    function animate() {
    		animationID=requestAnimationFrame(animate);
        rollDice();
        renderer.render(scene, camera); 
    	} 
     function stop(){
     		cancelAnimationFrame(animationID);
     }
    animate();
   // Définir une durée limite pour l'animation en ms
    const animationDuration = 1000; //1 s
    setTimeout(stop,animationDuration);



