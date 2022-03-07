import Experience from '../Experience.js';
import Environment from './Environment.js';
import Fridge from './Fridge.js';

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            this.fridge = new Fridge()
            this.environment = new Environment()
        })
    }

    update()
    {
        if(this.fridge)
            this.fridge.update()
    }
    
    click() 
    {
        if(this.fridge)
            this.fridge.click()
    }
}