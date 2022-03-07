import * as THREE from 'three';
import Experience from './Experience';
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls.js';

export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        this.setInstance();
        this.setControls();
        //this.panningToVisibleAreaOnly();
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(55, this.sizes.width / this.sizes.height, 0.25, 16);
        this.instance.position.set(-3, 3.9, 4);
        this.scene.add(this.instance);
    }

    setControls() {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
        this.controls.dampingFactor = 0.25;
        this.controls.minDistance = 3;
        this.controls.maxDistance = 8;   

        this.controls.enablePan = true;
        this.controls.enableZoom = false; 

        // this.controls.maxPolarAngle = Math.PI / 4;
        // this.controls.minPolarAngle = Math.PI / 3;
    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update() {
        this.controls.update()
    }

    panningToVisibleAreaOnly(){
        const minPan = new THREE.Vector3(-2, -2, -2);
        const maxPan = new THREE.Vector3(2, 2, 2);

        const _v = new THREE.Vector3();

        this.controls.addEventListener("change", () => {
            _v.copy(this.controls.target);
            this.controls.target.clamp(minPan, maxPan);
            _v.sub(this.controls.target);
            this.instance.position.sub(_v);
        })
    }
}
