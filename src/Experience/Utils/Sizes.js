import EventEmitter from './EventEmitter.js'

export default class Sizes extends EventEmitter
{
    constructor()
    {
        super()

        // Setup
        this.width = document.querySelector('.modal-dialog').innerWidth
        this.height = document.querySelector('.modal-dialog').innerHeight
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        // Resize event
        window.addEventListener('resize', () =>
        {
            this.width = document.body.clientWidth
            this.height = 600
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)

            this.trigger('resize')
        })
    }
}