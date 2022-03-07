import * as THREE from 'three'
import { MeshStandardMaterial } from 'three';
import Experience from '../Experience.js'
import gsap from "gsap"

export default class Fridge {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.debug = this.experience.debug;
        this.objects = this.experience.objects;
        this.camera = this.experience.camera;

        // Debug
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('fridge');
        }

        // Resource
        this.resource = this.resources.items.fridgeModel;

        this.setModel();
        //this.setAnimation()
    }

    setModel() {
        this.model = this.resource.scene;
        this.model.scale.set(2.25, 2.25, 2.25);
        this.model.position.set(0, 0, 0);
        this.scene.add(this.model)

        this.model.traverse((child) => {
            if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                this.objects.push(child);
                if (child.isMesh) {
                    child.castShadow = true;
                }
                if (child.name == "SM_LowerBody_1" || child.name == "SM_LowerBody_2" || child.name == "SM_LowerBody_3") {
                    child.material.metalness = 0.4
                }
            }
        })
    }

    // setAnimation() {
    //     this.animation = {}

    //     // Mixer
    //     this.animation.mixer = new THREE.AnimationMixer(this.model)

    //     // Actions
    //     this.animation.actions = {}

    //     this.animation.actions.idle = this.animation.mixer.clipAction(this.resource.animations[0])
    //     this.animation.actions.walking = this.animation.mixer.clipAction(this.resource.animations[1])
    //     this.animation.actions.running = this.animation.mixer.clipAction(this.resource.animations[2])

    //     this.animation.actions.current = this.animation.actions.idle
    //     this.animation.actions.current.play()

    //     // Play the action
    //     this.animation.play = (name) => {
    //         const newAction = this.animation.actions[name]
    //         const oldAction = this.animation.actions.current

    //         newAction.reset()
    //         newAction.play()
    //         newAction.crossFadeFrom(oldAction, 1)

    //         this.animation.actions.current = newAction
    //     }

    //     // Debug
    //     if (this.debug.active) {
    //         const debugObject = {
    //             playIdle: () => {
    //                 this.animation.play('idle')
    //             },
    //             playWalking: () => {
    //                 this.animation.play('walking')
    //             },
    //             playRunning: () => {
    //                 this.animation.play('running')
    //             }
    //         }
    //         this.debugFolder.add(debugObject, 'playIdle')
    //         this.debugFolder.add(debugObject, 'playWalking')
    //         this.debugFolder.add(debugObject, 'playRunning')
    //     }
    // }

    update() {
        // this.animation.mixer.update(this.time.delta * 0.001)

    }

    click() {
        if(this.experience.currentIntersect)
        {
            // if(this.experience.currentIntersect.object.name !== 'SM_Water')
            //     this.moveToSelectedObject(this.experience.currentIntersect.object, 1, 1)
        }
    }

    moveToSelectedObject(object, x, y) {
        var aabb = new THREE.Box3().setFromObject(object);
        var center = aabb.getCenter(new THREE.Vector3());
        var size = aabb.getSize(new THREE.Vector3());
        gsap.to(this.camera.instance.position, {
            duration: 1,
            x: center.x,
            y: center.y,
            z: center.z + size.z, // maybe adding even more offset depending on your model
            onUpdate: () => {
                this.camera.instance.fov = 50
                this.camera.instance.updateProjectionMatrix();
            }
        });
    }
}