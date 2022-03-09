import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Environment
{
    constructor()
    {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.debug = this.experience.debug;
        
        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('environment')
        }

        this.setAmbientLight();
        this.setSunLight();
        //this.scene.background = new THREE.Color( 0xcccccc );
    }

    setAmbientLight() {
        // this.ambientlight = new THREE.AmbientLight(0xffffff, 0.3);
        // this.scene.add(this.ambientlight);
    }

    setSunLight()
    {
        //for top
        this.sunLight = new THREE.DirectionalLight(0xffffff,  0.2 * Math.PI)
        this.sunLight.castShadow = true;
        this.sunLight.position.set(-8, -8, -8);
        this.scene.add(this.sunLight)
        // let directionalLightHelper = new THREE.DirectionalLightHelper(this.sunLight, 0.2, 'brown');
        
        // this.scene.add(directionalLightHelper);

        this.sunLight = new THREE.DirectionalLight(0xffffff,  0.2 * Math.PI)
        this.sunLight.castShadow = true;
        this.sunLight.position.set(8, -8, -8);
        this.scene.add(this.sunLight)
        // directionalLightHelper = new THREE.DirectionalLightHelper(this.sunLight, 0.2, 'orange');
        
        // this.scene.add(directionalLightHelper);

        this.sunLight = new THREE.DirectionalLight(0xffffff,  0.5 * Math.PI)
        this.sunLight.castShadow = true;
        this.sunLight.position.set(8, 8, -8);
        this.scene.add(this.sunLight)
        // directionalLightHelper = new THREE.DirectionalLightHelper(this.sunLight, 0.2, 'pink');
        
        // this.scene.add(directionalLightHelper);

        this.sunLight = new THREE.DirectionalLight(0xffffff,  0.3 * Math.PI)
        this.sunLight.castShadow = true;
        this.sunLight.position.set(8, 8, 8);
        this.scene.add(this.sunLight)
        // directionalLightHelper = new THREE.DirectionalLightHelper(this.sunLight, 0.2, 'green');
        
        // this.scene.add(directionalLightHelper);


        //from bottom
        this.sunLight = new THREE.DirectionalLight(0xffffff,  0.3 * Math.PI)
        this.sunLight.castShadow = true;
        this.sunLight.position.set(-8, 8, 8);
        this.scene.add(this.sunLight)
        // directionalLightHelper = new THREE.DirectionalLightHelper(this.sunLight, 0.2, 'blue');
        
        // this.scene.add(directionalLightHelper);

        this.sunLight = new THREE.DirectionalLight(0xffffff,  0.2 * Math.PI)
        this.sunLight.castShadow = true;
        this.sunLight.position.set(-8, -8, 8);
        this.scene.add(this.sunLight)
        // directionalLightHelper = new THREE.DirectionalLightHelper(this.sunLight, 0.2, 'red');
        
        // this.scene.add(directionalLightHelper);

        this.sunLight = new THREE.DirectionalLight(0xffffff,  0.5 * Math.PI)
        this.sunLight.castShadow = true;
        this.sunLight.position.set(-8, 8, -8);
        this.scene.add(this.sunLight)
        // directionalLightHelper = new THREE.DirectionalLightHelper(this.sunLight, 0.2, 'yellow');
        
        // this.scene.add(directionalLightHelper);

        this.sunLight = new THREE.DirectionalLight(0xffffff,  0.2 * Math.PI)
        this.sunLight.castShadow = true;
        this.sunLight.position.set(8, -8, 8);
        this.scene.add(this.sunLight)
        // directionalLightHelper = new THREE.DirectionalLightHelper(this.sunLight, 0.2, 'black');
        
        // this.scene.add(directionalLightHelper);

        // Debug
        if(this.debug.active)
        {
            this.debugFolder
                .add(this.sunLight, 'intensity')
                .name('sunLightIntensity')
                .min(0)
                .max(10)
                .step(0.001)
            
            this.debugFolder
                .add(this.sunLight.position, 'x')
                .name('sunLightX')
                .min(- 5)
                .max(5)
                .step(0.001)
            
            this.debugFolder
                .add(this.sunLight.position, 'y')
                .name('sunLightY')
                .min(- 5)
                .max(5)
                .step(0.001)
            
            this.debugFolder
                .add(this.sunLight.position, 'z')
                .name('sunLightZ')
                .min(- 5)
                .max(5)
                .step(0.001)
        }
    }

    setEnvironmentMap()
    {
        this.environmentMap = {}
        this.environmentMap.intensity = 0.4
        this.environmentMap.texture = this.resources.items.environmentMapTexture
        this.environmentMap.texture.encoding = THREE.sRGBEncoding
        
        this.scene.environment = this.environmentMap.texture

        this.environmentMap.updateMaterials = () =>
        {
            this.scene.traverse((child) =>
            {
                if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial)
                {
                    child.material.envMap = this.environmentMap.texture
                    child.material.envMapIntensity = this.environmentMap.intensity
                    child.material.needsUpdate = true
                }
            })
        }
        this.environmentMap.updateMaterials()

        // Debug
        if(this.debug.active)
        {
            this.debugFolder
                .add(this.environmentMap, 'intensity')
                .name('envMapIntensity')
                .min(0)
                .max(4)
                .step(0.001)
                .onChange(this.environmentMap.updateMaterials)
        }
    }
}