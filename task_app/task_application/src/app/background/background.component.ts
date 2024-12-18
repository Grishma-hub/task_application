import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
  @ViewChild('background', { static: true }) backgroundContainer!: ElementRef;
  scene!: THREE.Scene;
    camera!: THREE.PerspectiveCamera;
    renderer!: THREE.WebGLRenderer;
    geometry!: THREE.BufferGeometry;
    material!: THREE.PointsMaterial;
    particles!: THREE.Points;  
   
  
    constructor() {}
  
    ngOnInit(): void {}
  
    ngAfterViewInit(): void {
      
      this.initThreeJS();
      this.animate();
    }
  
   
  
   
    initThreeJS(): void {
      // Scene
      this.scene = new THREE.Scene();
  
      // Camera
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.camera.position.z = 5;
  
      // Renderer
      this.renderer = new THREE.WebGLRenderer({ alpha: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.backgroundContainer.nativeElement.appendChild(this.renderer.domElement);
  
      // Create Particles
      const particleCount = 1000;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
  
      for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 10;
      }
  
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({ color: 0x808080, size: 0.05 });
  
      this.particles = new THREE.Points(geometry, material);
      this.scene.add(this.particles);
  
      // Resize handler
      window.addEventListener('resize', () => this.onWindowResize(), false);
    }
  
    animate(): void {
      requestAnimationFrame(() => this.animate());
  
     
      this.particles.rotation.y += 0.001;
      this.particles.rotation.x += 0.001;
  
      this.renderer.render(this.scene, this.camera);
    }
  
    onWindowResize(): void {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

}
