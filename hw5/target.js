function getRandom(x){
    return Math.floor(Math.random()*x)+1;
};

class Target {
	constructor (id, pos) {
		this.id = id;
		this.pos = pos.clone();
		this.mesh = new THREE.Mesh (new THREE.CylinderGeometry (8,8,3,20), 
		    new THREE.MeshBasicMaterial ({color:'green'}));
		this.found = false;  // default: not found yet
		this.mesh.position.copy (pos)
		scene.add (this.mesh);
	}
	setFound (agent) {
		this.found = true;
		//this.mesh.material.visible = false;
		postMessage (agent, 'TARGET reached');
		
		agent.score += 5;			
		this.mesh.position.set(getRandom(100), 0, getRandom(100));
		// remove from scene.targets
		for (let i = 0; i < scene.targets.length; i++) {
			if (scene.targets[i].id === this.id) scene.targets.splice (i, 1)
		}
		
	}
	
}
