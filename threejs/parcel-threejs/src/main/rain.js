// import * as THREE from 'three';

const radians = (degrees) => {
    return degrees * Math.PI / 180;
  }
  
  const distance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
  }
  
  const map = (value, istart, istop, ostart, ostop) => {
    return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
  }
  
  const hexToRgbTreeJs = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  
    return result ? {
      r: parseInt(result[1], 16) / 255,
      g: parseInt(result[2], 16) / 255,
      b: parseInt(result[3], 16) / 255
    } : null;
  }
  
  class App {
    setup() {
      this.stats = new Stats();
      this.stats.showPanel(0);
      document.body.querySelector('.stats').appendChild(this.stats.domElement);
      
      this.gui = new dat.GUI();
      this.backgroundColor = '#faff06';
      this.gutter = { size: 0 };
      this.meshes = [];
      this.grid = { cols: 30, rows: 30 };
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.velocity = -.1;
      this.angle = 0;
      this.waveLength = 200;
      this.ripple = {};
      this.interval = 0;
      this.waterDropPositions = [];
      this.ripples = [];
  
      const gui = this.gui.addFolder('Background');
  
      gui.addColor(this, 'backgroundColor').onChange((color) => {
        document.body.style.backgroundColor = color;
      });
  
      window.addEventListener('resize', this.onResize.bind(this), { passive: true });
  
      window.addEventListener('visibilitychange', (evt) => {
        this.pause = evt.target.hidden;
      }, false);
    }
  
  
    createScene() {
      this.scene = new THREE.Scene();
  
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
  
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  
      document.body.appendChild(this.renderer.domElement);
    }
  
    createCamera() {
      const width = window.innerWidth;
      const height = window.innerHeight;
  
      this.camera = new THREE.PerspectiveCamera(10, width / height, 1, 1000);
      this.camera.position.set(-180, 180, 180);
  
      this.scene.add(this.camera);
    }
  
    addAmbientLight() {
      const obj = { color: '#fff' };
      const light = new THREE.AmbientLight(obj.color, 1);
  
      this.scene.add(light);
    }
  
    addDirectionalLight() {
      this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      this.directionalLight.castShadow = true;
      this.directionalLight.position.set(0, 1, 0);
  
      this.directionalLight.shadow.camera.far = 1000;
      this.directionalLight.shadow.camera.near = -100;
  
      this.directionalLight.shadow.camera.left = -40;
      this.directionalLight.shadow.camera.right = 40;
      this.directionalLight.shadow.camera.top = 20;
      this.directionalLight.shadow.camera.bottom = -20;
      this.directionalLight.shadow.camera.zoom = 1;
      this.directionalLight.shadow.camera.needsUpdate = true;
  
      const targetObject = new THREE.Object3D();
      targetObject.position.set(-50, -82, 40);
      this.directionalLight.target = targetObject;
  
      this.scene.add(this.directionalLight);
      this.scene.add(this.directionalLight.target);
    }
  
    createGrid() {
      this.groupMesh = new THREE.Object3D();
  
      const meshParams = {
        color: '#00229a',
      };
  
      const material = new THREE.MeshLambertMaterial(meshParams);
  
      const gui = this.gui.addFolder('Water');
  
      gui.addColor(meshParams, 'color').onChange((color) => {
        material.color = hexToRgbTreeJs(color);
      });
  
      const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
      this.mesh = this.getMesh(geometry, material, this.grid.rows * this.grid.cols);
      this.scene.add(this.mesh);
  
      this.centerX = ((this.grid.cols) + ((this.grid.cols) * this.gutter.size)) * .4;
      this.centerZ = ((this.grid.rows) + ((this.grid.rows) * this.gutter.size)) * .6;
  
      let ii = 0;
      for (let row = 0; row < this.grid.rows; row++) {
        this.meshes[row] = [];
  
        for (let col = 0; col < this.grid.cols; col++) {
          const pivot = new THREE.Object3D();
          const x = col + (col * this.gutter.size);
          const z = row + (row * this.gutter.size);
  
          pivot.scale.set(1, 1, 1);
          pivot.position.set(x-this.centerX, 0, z-this.centerZ);
  
          this.meshes[row][col] = pivot;
          pivot.updateMatrix();
          this.mesh.setMatrixAt(ii++, pivot.matrix);
        }
      }
  
      this.mesh.instanceMatrix.needsUpdate = true;
  
      for (let row = 0; row < this.grid.rows; row++) {
        for (let col = 0; col < this.grid.cols; col++) {
          const x = col + (col * this.gutter.size);
          const z = row + (row * this.gutter.size);
  
          this.waterDropPositions.push({ x: x-this.centerX, z: z-this.centerZ });
        }
      }
    }
  
    getMesh(geometry, material, count) {
      const mesh = new THREE.InstancedMesh(geometry, material, count);
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
  
      return mesh;
    }
  
    addCameraControls() {
      this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.04;
          document.body.style.cursor = "-moz-grabg";
      document.body.style.cursor = "-webkit-grab";
  
      this.controls.addEventListener("start", () => {
        requestAnimationFrame(() => {
          document.body.style.cursor = "-moz-grabbing";
          document.body.style.cursor = "-webkit-grabbing";
        });
      });
  
      this.controls.addEventListener("end", () => {
        requestAnimationFrame(() => {
          document.body.style.cursor = "-moz-grab";
          document.body.style.cursor = "-webkit-grab";
        });
      });
    }
  
    addFloor() {
      const geometry = new THREE.PlaneGeometry(100, 100);
      const material = new THREE.ShadowMaterial({ opacity: .3 });
  
      this.floor = new THREE.Mesh(geometry, material);
      this.floor.name = 'floor';
      this.floor.position.y = -1;
      this.floor.rotateX(- Math.PI / 2);
      this.floor.receiveShadow = true;
  
      this.scene.add(this.floor);
    }
  
    onResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
  
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.width, this.height);
    }
  
    addWaterDrop(geometry, material) {
      const waterDrop = new THREE.Mesh(geometry, material);
  
      return waterDrop;
    }
  
    getRandomWaterDropPosition() {
      return this.waterDropPositions[Math.floor(Math.random() * Math.floor(this.waterDropPositions.length))];
    }
  
    animateWaterDrops() {
      const meshParams = {
        color: '#6ad2ff',
      };
  
      const geometry = new THREE.BoxBufferGeometry(.5, 2, .5);
      const material = new THREE.MeshLambertMaterial(meshParams);
  
      const gui = this.gui.addFolder('Drop');
  
      gui.addColor(meshParams, 'color').onChange((color) => {
        material.color = hexToRgbTreeJs(color);
      });
  
  
      this.interval = setInterval(() => {
        const waterDrop = this.addWaterDrop(geometry, material);
        const { x, z } = this.getRandomWaterDropPosition();
  
        waterDrop.position.set(x, 50, z);
        this.scene.add(waterDrop);
  
        if (this.pause) {
          this.scene.remove(waterDrop);
          TweenMax.killAll(true);
        } else {
          TweenMax.to(waterDrop.position, .5, {
            ease: Sine.easeIn,
            y: -2,
            onUpdate: () => {
              if (waterDrop.position.y < 1 ) {
                this.ripples.push({ x, z, velocity: -1, angle: 0, amplitude: .1, radius: 1, motion: -.7 });
              }
            },
            onComplete: () => {
              waterDrop.position.set(0, 50, 0);
              this.scene.remove(waterDrop);
            }
          });
        }
      }, 100);
    }
  
    draw() {
      let ii = 0;
      for (let row = 0; row < this.grid.rows; row++) {
        for (let col = 0; col < this.grid.cols; col++) {
          const pivot = this.meshes[row][col];
  
          for (let r = 0; r < this.ripples.length; r++) {
            const ripple = this.ripples[r];
            const dist = distance(col, row, ripple.x+this.centerX, ripple.z+this.centerZ);
  
            if (dist < ripple.radius) {
              const offset = map(dist, 0, -this.waveLength, -100, 100);
              const angle = ripple.angle + offset;
              const y = map(Math.sin(angle), -1, 0, ripple.motion > 0 ? 0 : ripple.motion, 0);
  
              pivot.position.y = y;
            }
          }
  
          pivot.updateMatrix();
          this.mesh.setMatrixAt(ii++, pivot.matrix);
        }
      }
  
      for (let ripple = 0; ripple < this.ripples.length; ripple++) {
        const r = this.ripples[ripple];
  
        r.angle -= this.velocity * 2;
        r.radius -= this.velocity * 3;
        r.motion -= this.velocity / 5;
  
        if (r.radius > 50) {
          this.ripples.shift();
        }
      }
  
      this.mesh.instanceMatrix.needsUpdate = true;
    }
  
    animate() {
      this.stats.begin();
  
      this.controls.update();
  
      this.draw();
  
      this.renderer.render(this.scene, this.camera);
  
      this.stats.end();
  
      requestAnimationFrame(this.animate.bind(this));
    }
  
    init() {
      this.setup();
  
      this.createScene();
  
      this.createCamera();
  
      this.addAmbientLight();
  
      this.addDirectionalLight();
  
      this.createGrid();
  
      this.addCameraControls();
  
      this.addFloor();
  
      this.animate();
  
      this.draw();
  
      this.animateWaterDrops();
    }
  }
  
  new App().init();