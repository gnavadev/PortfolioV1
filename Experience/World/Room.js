import * as THREE from 'three'

import Experience from "../Experience"

export default class Room {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene;

        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
        const mesh = new THREE.Mesh(geometry, material)
        this.scene.add(mesh)

        document.onkeydown = (event) => {
            if(event.key == 'q')
            {
                mesh.position.x -=1
            }
            if(event.key == 'e')
            {
                mesh.position.x +=1
            }
        }
    }

    resize(){

    }

    update() {
    }
}