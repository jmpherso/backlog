<script>
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import theme from '$lib/stores/theme.js';

  let container;
  let bgColor, lineColor;

  $: {
  if($theme === 'dark') {
    console.log('test');
    bgColor = '#333';
    lineColor = '#FDFDFD';
  } else {
    bgColor = '#FDFDFD';
    lineColor = '#333';
  }
}

  function createCanvasGridTexture(size = 512, step = 32, color = lineColor) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Adjust for high-resolution displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, size, size);

    ctx.strokeStyle = lineColor; // Darker color for more contrast
    ctx.lineWidth = 3; // Thinner lines

    for (let i = step; i < size; i += step) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, size);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(size, i);
        ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
}

  onMount(() => {
    console.log($theme, bgColor, lineColor);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth * 2, window.innerHeight * 2);
    container.appendChild(renderer.domElement);

    const gridTexture = createCanvasGridTexture();

    const curve1 = new THREE.LineCurve3(
      new THREE.Vector3(-0.5, 0.5, 0),
      new THREE.Vector3(0.5, -0.5, 0)
    );

    const curve2 = new THREE.LineCurve3(
      new THREE.Vector3(0.5, 0.5, 0),
      new THREE.Vector3(-0.5, -0.5, 0)
    );

    const geometryX1 = new THREE.TubeGeometry(curve1, 5, 0.1, 20, false); // changed the radius to 0.05
    const geometryX2 = new THREE.TubeGeometry(curve2, 5, 0.1, 20, false); // changed the radius to 0.05
    const geometryO = new THREE.TorusGeometry(0.15, 0.1, 8, 100); // halved the radius and tube values
    const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        map: gridTexture
    });

    for (let i = 0; i < 300; i++) {
      if (Math.random() > 0.5) {
        const mesh1 = new THREE.Mesh(geometryX1, material);
        const mesh2 = new THREE.Mesh(geometryX2, material);
        mesh1.position.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10); // changed from 20 to 10
        mesh2.position.set(mesh1.position.x, mesh1.position.y, mesh1.position.z);
        mesh1.rotation.set(Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI);
        mesh2.rotation.set(mesh1.rotation.x, mesh1.rotation.y, mesh1.rotation.z);
        scene.add(mesh1);
        scene.add(mesh2);
      } else {
        const mesh = new THREE.Mesh(geometryO, material);
        mesh.position.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10); // changed from 20 to 10
        mesh.rotation.set(Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI);
        scene.add(mesh);
      }
    }

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      scene.children.forEach(child => {
        child.rotation.x += 0.001;
        child.rotation.y += 0.001;
      });
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      renderer.dispose();
      scene.dispose();
    };
  });
</script>

<div bind:this={container} style="position: absolute; top: 0; left: 0;"></div>