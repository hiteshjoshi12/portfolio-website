"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Portfolio3DScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true); // default to true to prevent SSR hydration mismatch of heavy scene, or handle it in effect

  useEffect(() => {
    const handleResizeCheck = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially
    handleResizeCheck();

    window.addEventListener("resize", handleResizeCheck);
    return () => window.removeEventListener("resize", handleResizeCheck);
  }, []);

  useEffect(() => {
    if (!mountRef.current || isMobile) return;

    // 1. SCENE & CAMERA SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf8fafc, 0.032);

    const camera = new THREE.PerspectiveCamera(
      42,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 14);

    // 2. RENDERER
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    mountRef.current.appendChild(renderer.domElement);

    // 3. STUDIO LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff7ed, 2.2);
    keyLight.position.set(8, 12, 10);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xfdf2f8, 1.2);
    fillLight.position.set(-8, -6, 6);
    scene.add(fillLight);

    const rosePoint = new THREE.PointLight(0xf43f5e, 25, 25);
    rosePoint.position.set(4, 2, -2);
    scene.add(rosePoint);

    const cyanPoint = new THREE.PointLight(0x06b6d4, 20, 20);
    cyanPoint.position.set(-4, -2, -2);
    scene.add(cyanPoint);

    const amberPoint = new THREE.PointLight(0xf59e0b, 18, 18);
    amberPoint.position.set(0, 5, -4);
    scene.add(amberPoint);

    // ========================================================
    // ROOT GROUPS FOR EACH SECTION'S BESPOKE 3D SCENE
    // ========================================================
    const heroGroup = new THREE.Group();
    const techGroup = new THREE.Group();
    const projectsGroup = new THREE.Group();
    const servicesGroup = new THREE.Group();
    const contactGroup = new THREE.Group();

    scene.add(heroGroup);
    scene.add(techGroup);
    scene.add(projectsGroup);
    scene.add(servicesGroup);
    scene.add(contactGroup);

    // ========================================================
    // SCENE 1: HERO &mdash; NEURAL AI SYNAPSE & QUANTUM PROCESSOR
    // ========================================================
    const nodeCount = 36;
    const nodePositions: THREE.Vector3[] = [];
    const nodeMeshes: THREE.Mesh[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5));
    const networkRadius = 2.3;

    const nodeGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const nodeMat1 = new THREE.MeshPhysicalMaterial({
      color: 0xf43f5e,
      emissive: 0xf43f5e,
      emissiveIntensity: 0.4,
      roughness: 0.15,
      metalness: 0.8,
    });
    const nodeMat2 = new THREE.MeshPhysicalMaterial({
      color: 0xf97316,
      emissive: 0xf97316,
      emissiveIntensity: 0.4,
      roughness: 0.15,
      metalness: 0.8,
    });

    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const pos = new THREE.Vector3(
        x * networkRadius,
        y * networkRadius,
        z * networkRadius
      );
      nodePositions.push(pos);

      const mesh = new THREE.Mesh(nodeGeo, i % 2 === 0 ? nodeMat1 : nodeMat2);
      mesh.position.copy(pos);
      heroGroup.add(mesh);
      nodeMeshes.push(mesh);
    }

    // Synaptic Connecting Edges
    const maxConnectionDist = 1.35;
    const edgeLines: THREE.Vector3[] = [];
    interface Edge {
      from: THREE.Vector3;
      to: THREE.Vector3;
    }
    const edges: Edge[] = [];

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const d = nodePositions[i].distanceTo(nodePositions[j]);
        if (d < maxConnectionDist) {
          edgeLines.push(nodePositions[i], nodePositions[j]);
          edges.push({ from: nodePositions[i], to: nodePositions[j] });
        }
      }
    }

    const synapseLineGeo = new THREE.BufferGeometry().setFromPoints(edgeLines);
    const synapseLineMat = new THREE.LineBasicMaterial({
      color: 0xfb7185,
      transparent: true,
      opacity: 0.28,
    });
    const synapseLines = new THREE.LineSegments(synapseLineGeo, synapseLineMat);
    heroGroup.add(synapseLines);

    // Traveling Synaptic Pulses
    const pulseCount = 20;
    const pulsePositions = new Float32Array(pulseCount * 3);
    const pulseGeometry = new THREE.BufferGeometry();
    pulseGeometry.setAttribute("position", new THREE.BufferAttribute(pulsePositions, 3));
    const pulseMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.14,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const pulsePoints = new THREE.Points(pulseGeometry, pulseMaterial);
    heroGroup.add(pulsePoints);

    const pulses: { edgeIndex: number; progress: number; speed: number }[] = [];
    for (let i = 0; i < pulseCount; i++) {
      pulses.push({
        edgeIndex: Math.floor(Math.random() * edges.length),
        progress: Math.random(),
        speed: 0.006 + Math.random() * 0.009,
      });
    }

    // Central Quantum Processor Die
    const chipGeo = new THREE.BoxGeometry(1.2, 1.2, 0.22);
    const chipMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      roughness: 0.1,
      metalness: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 1.0,
    });
    const chipMesh = new THREE.Mesh(chipGeo, chipMat);
    heroGroup.add(chipMesh);

    const coreGeo = new THREE.BoxGeometry(0.55, 0.55, 0.28);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0xf43f5e,
      emissive: 0xf43f5e,
      emissiveIntensity: 0.7,
      metalness: 0.7,
      roughness: 0.2,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    heroGroup.add(coreMesh);

    // Orbiting 3D Code Tag < / >
    const codeTag = new THREE.Group();
    const tagMat = new THREE.MeshPhysicalMaterial({
      color: 0xf97316,
      emissive: 0xf97316,
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.2,
    });
    const barGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.5, 8);
    const slash = new THREE.Mesh(barGeo, tagMat);
    slash.rotation.z = Math.PI / 4;
    codeTag.add(slash);
    heroGroup.add(codeTag);

    // Outer HUD Tech Rings
    const hudRingGeo = new THREE.RingGeometry(2.7, 2.73, 64);
    const hudRingMat = new THREE.MeshBasicMaterial({
      color: 0xf43f5e,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.22,
    });
    const hudRing = new THREE.Mesh(hudRingGeo, hudRingMat);
    heroGroup.add(hudRing);

    // ========================================================
    // SCENE 2: TECH STACK &mdash; HOLOGRAPHIC TORUS ACCELERATOR
    // ========================================================
    const torusGeo = new THREE.TorusGeometry(1.6, 0.28, 24, 64);
    const torusMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      emissive: 0xf43f5e,
      emissiveIntensity: 0.25,
      metalness: 0.85,
      roughness: 0.2,
      clearcoat: 1.0,
      wireframe: false,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    techGroup.add(torusMesh);

    const torusWireGeo = new THREE.TorusGeometry(1.62, 0.3, 16, 48);
    const torusWireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const torusWire = new THREE.Mesh(torusWireGeo, torusWireMat);
    techGroup.add(torusWire);

    // Orbiting particle satellites around Torus
    const satCount = 12;
    const satMeshes: THREE.Mesh[] = [];
    const satGeo = new THREE.SphereGeometry(0.06, 12, 12);
    const satMat = new THREE.MeshPhysicalMaterial({
      color: 0xf59e0b,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.8,
    });
    for (let i = 0; i < satCount; i++) {
      const sat = new THREE.Mesh(satGeo, satMat);
      techGroup.add(sat);
      satMeshes.push(sat);
    }

    // ========================================================
    // SCENE 3: PROJECTS &mdash; ISOMETRIC WIREFRAME PRISM PORTAL
    // ========================================================
    const octaGeo = new THREE.OctahedronGeometry(1.5, 0);
    const octaMat = new THREE.MeshPhysicalMaterial({
      color: 0x1e293b,
      roughness: 0.1,
      metalness: 0.9,
      clearcoat: 1.0,
      reflectivity: 0.9,
      transmission: 0.4,
      transparent: true,
      opacity: 0.75,
    });
    const octaMesh = new THREE.Mesh(octaGeo, octaMat);
    projectsGroup.add(octaMesh);

    const octaWireGeo = new THREE.OctahedronGeometry(1.56, 0);
    const octaWireMat = new THREE.MeshBasicMaterial({
      color: 0xf43f5e,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const octaWire = new THREE.Mesh(octaWireGeo, octaWireMat);
    projectsGroup.add(octaWire);

    // Concentric inner floating jewel
    const innerJewelGeo = new THREE.IcosahedronGeometry(0.65, 0);
    const innerJewelMat = new THREE.MeshPhysicalMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    });
    const innerJewel = new THREE.Mesh(innerJewelGeo, innerJewelMat);
    projectsGroup.add(innerJewel);

    // ========================================================
    // SCENE 4: SERVICES & PROCESS &mdash; GEODESIC ARCHITECTURAL MATRIX
    // ========================================================
    const dodecaGeo = new THREE.DodecahedronGeometry(1.5, 0);
    const dodecaMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      roughness: 0.2,
      metalness: 0.8,
      clearcoat: 1.0,
      wireframe: false,
    });
    const dodecaMesh = new THREE.Mesh(dodecaGeo, dodecaMat);
    servicesGroup.add(dodecaMesh);

    const dodecaWireGeo = new THREE.DodecahedronGeometry(1.54, 0);
    const dodecaWireMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const dodecaWire = new THREE.Mesh(dodecaWireGeo, dodecaWireMat);
    servicesGroup.add(dodecaWire);

    // Dual Orbital Latitude Rings
    const ringGeoA = new THREE.RingGeometry(2.1, 2.13, 48);
    const ringMatA = new THREE.MeshBasicMaterial({
      color: 0xf43f5e,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
    });
    const ringMeshA = new THREE.Mesh(ringGeoA, ringMatA);
    ringMeshA.rotation.x = Math.PI / 3;
    servicesGroup.add(ringMeshA);

    // ========================================================
    // SCENE 5: FAQ & CONTACT &mdash; ATMOSPHERIC BEACON SPHERE
    // ========================================================
    const beaconGeo = new THREE.SphereGeometry(1.4, 32, 32);
    const beaconMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      roughness: 0.15,
      metalness: 0.95,
      clearcoat: 1.0,
      reflectivity: 1.0,
    });
    const beaconMesh = new THREE.Mesh(beaconGeo, beaconMat);
    contactGroup.add(beaconMesh);

    const beaconRingGeo = new THREE.RingGeometry(1.9, 1.94, 64);
    const beaconRingMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const beaconRing = new THREE.Mesh(beaconRingGeo, beaconRingMat);
    beaconRing.rotation.x = Math.PI / 2.3;
    contactGroup.add(beaconRing);

    // Ambient floating star/particle dust across space
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 22;
      particlePos[i + 1] = (Math.random() - 0.5) * 22;
      particlePos[i + 2] = (Math.random() - 0.5) * 12;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xf43f5e,
      size: 0.05,
      transparent: true,
      opacity: 0.3,
    });
    const globalParticles = new THREE.Points(particleGeo, particleMat);
    scene.add(globalParticles);

    // ========================================================
    // INTERACTION & SCROLL STATE
    // ========================================================
    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let manualRotX = 0;
    let manualRotY = 0;

    let targetScroll = 0;
    let currentScroll = 0;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      mouseX = (clientX / window.innerWidth) * 2 - 1;
      mouseY = -(clientY / window.innerHeight) * 2 + 1;

      if (isDragging) {
        const deltaX = clientX - prevMouseX;
        const deltaY = clientY - prevMouseY;
        manualRotY += deltaX * 0.005;
        manualRotX += deltaY * 0.005;
        prevMouseX = clientX;
        prevMouseY = clientY;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        targetScroll = window.scrollY / totalScroll;
      }
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("touchstart", handlePointerDown, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("touchend", handlePointerUp);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    // Initial positioning
    handleScroll();

    // ========================================================
    // ANIMATION & SECTION-SPECIFIC MORPHING CHOREOGRAPHY
    // ========================================================
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const isMobile = window.innerWidth < 1024;

      // Smooth scroll lerp
      currentScroll += (targetScroll - currentScroll) * 0.07;

      // Friction for manual spin
      if (!isDragging) {
        manualRotX *= 0.95;
        manualRotY *= 0.95;
      }

      // ----------------------------------------------------
      // CALCULATE SMOOTH INTERPOLATION WEIGHT FOR EACH SECTION
      // Range: 0.0 to 1.0 total page scroll
      // Hero: 0.00 - 0.16
      // TechStack: 0.16 - 0.36
      // Projects: 0.36 - 0.58
      // Services/Process: 0.58 - 0.80
      // Contact/FAQ: 0.80 - 1.00
      // ----------------------------------------------------
      const s = Math.max(0, Math.min(1, currentScroll));

      // Gaussian-like bell curves for smooth cross-fading
      const getWeight = (center: number, width: number) => {
        const dist = Math.abs(s - center);
        return Math.max(0, 1 - dist / width);
      };

      const wHero = getWeight(0.06, 0.16);
      const wTech = getWeight(0.25, 0.15);
      const wProjects = getWeight(0.48, 0.16);
      const wServices = getWeight(0.70, 0.16);
      const wContact = getWeight(0.92, 0.18);

      // Clamp weights smoothly
      const smoothHero = THREE.MathUtils.smoothstep(wHero, 0.01, 1);
      const smoothTech = THREE.MathUtils.smoothstep(wTech, 0.01, 1);
      const smoothProjects = THREE.MathUtils.smoothstep(wProjects, 0.01, 1);
      const smoothServices = THREE.MathUtils.smoothstep(wServices, 0.01, 1);
      const smoothContact = THREE.MathUtils.smoothstep(wContact, 0.01, 1);

      // ----------------------------------------------------
      // SECTION 1: HERO SCENE ANIMATION & POSITION
      // Strictly on the Right 40% (x: 3.6) &mdash; never overlapping left hero text!
      // ----------------------------------------------------
      if (smoothHero > 0.01) {
        heroGroup.visible = true;
        const targetX = isMobile ? mouseX * 0.4 : 3.5 + mouseX * 0.5;
        const targetY = isMobile ? 1.0 - mouseY * 0.4 : 0.2 - mouseY * 0.4;
        const scaleVal = (isMobile ? 0.72 : 1.05) * smoothHero;

        heroGroup.position.x += (targetX - heroGroup.position.x) * 0.08;
        heroGroup.position.y += (targetY - heroGroup.position.y) * 0.08;
        heroGroup.scale.set(scaleVal, scaleVal, scaleVal);

        heroGroup.rotation.y = manualRotY + elapsedTime * 0.25;
        heroGroup.rotation.x = manualRotX + Math.sin(elapsedTime * 0.4) * 0.08;

        chipMesh.rotation.y = elapsedTime * 0.4;
        chipMesh.rotation.x = elapsedTime * 0.3;
        coreMesh.rotation.y = -elapsedTime * 0.6;
        hudRing.rotation.z = elapsedTime * 0.35;

        const tagAngle = elapsedTime * 0.45;
        codeTag.position.x = Math.cos(tagAngle) * 3.1;
        codeTag.position.z = Math.sin(tagAngle) * 3.1;
        codeTag.rotation.y = -tagAngle + Math.PI / 2;

        // Neural nodes breathing
        nodeMeshes.forEach((mesh, idx) => {
          const sOff = Math.sin(elapsedTime * 2 + idx * 0.4) * 0.25;
          mesh.scale.setScalar(1 + sOff);
        });

        // Pulse points
        const pArr = pulseGeometry.attributes.position.array as Float32Array;
        for (let i = 0; i < pulseCount; i++) {
          const pulse = pulses[i];
          pulse.progress += pulse.speed;
          if (pulse.progress >= 1) {
            pulse.progress = 0;
            pulse.edgeIndex = Math.floor(Math.random() * edges.length);
          }
          const edge = edges[pulse.edgeIndex];
          if (edge) {
            pArr[i * 3] = edge.from.x + (edge.to.x - edge.from.x) * pulse.progress;
            pArr[i * 3 + 1] = edge.from.y + (edge.to.y - edge.from.y) * pulse.progress;
            pArr[i * 3 + 2] = edge.from.z + (edge.to.z - edge.from.z) * pulse.progress;
          }
        }
        pulseGeometry.attributes.position.needsUpdate = true;
      } else {
        heroGroup.visible = false;
      }

      // ----------------------------------------------------
      // SECTION 2: TECH STACK &mdash; TORUS ACCELERATOR
      // Positioned on the FAR RIGHT flank (x: 4.8) &mdash; never covering system terminal!
      // ----------------------------------------------------
      if (smoothTech > 0.01) {
        techGroup.visible = true;
        const targetX = isMobile ? mouseX * 0.3 : 4.8 + mouseX * 0.4;
        const targetY = isMobile ? -0.5 : -0.2 - mouseY * 0.3;
        const scaleVal = (isMobile ? 0.6 : 0.95) * smoothTech;

        techGroup.position.x += (targetX - techGroup.position.x) * 0.08;
        techGroup.position.y += (targetY - techGroup.position.y) * 0.08;
        techGroup.scale.set(scaleVal, scaleVal, scaleVal);

        torusMesh.rotation.x = elapsedTime * 0.35;
        torusMesh.rotation.y = elapsedTime * 0.45;
        torusWire.rotation.x = -elapsedTime * 0.25;
        torusWire.rotation.y = -elapsedTime * 0.35;

        // Orbiting satellites
        satMeshes.forEach((sat, idx) => {
          const a = elapsedTime * 0.8 + (idx / satCount) * Math.PI * 2;
          sat.position.x = Math.cos(a) * 2.2;
          sat.position.y = Math.sin(a * 2) * 0.6;
          sat.position.z = Math.sin(a) * 2.2;
        });
      } else {
        techGroup.visible = false;
      }

      // ----------------------------------------------------
      // SECTION 3: PROJECTS &mdash; ISOMETRIC WIREFRAME PRISM
      // Positioned on the FAR LEFT flank (x: -4.8) &mdash; center project theater stays pristine!
      // ----------------------------------------------------
      if (smoothProjects > 0.01) {
        projectsGroup.visible = true;
        const targetX = isMobile ? mouseX * 0.3 : -4.8 + mouseX * 0.4;
        const targetY = isMobile ? 0.2 : 0.4 - mouseY * 0.3;
        const scaleVal = (isMobile ? 0.6 : 0.95) * smoothProjects;

        projectsGroup.position.x += (targetX - projectsGroup.position.x) * 0.08;
        projectsGroup.position.y += (targetY - projectsGroup.position.y) * 0.08;
        projectsGroup.scale.set(scaleVal, scaleVal, scaleVal);

        octaMesh.rotation.y = elapsedTime * 0.4;
        octaMesh.rotation.x = elapsedTime * 0.25;
        octaWire.rotation.y = -elapsedTime * 0.5;
        octaWire.rotation.z = elapsedTime * 0.3;
        innerJewel.rotation.y = elapsedTime * 0.7;
      } else {
        projectsGroup.visible = false;
      }

      // ----------------------------------------------------
      // SECTION 4: SERVICES & PROCESS &mdash; GEODESIC ARCHITECTURAL MATRIX
      // Positioned on the FAR RIGHT perimeter (x: 4.8) &mdash; zero text collision!
      // ----------------------------------------------------
      if (smoothServices > 0.01) {
        servicesGroup.visible = true;
        const targetX = isMobile ? mouseX * 0.3 : 4.8 + mouseX * 0.4;
        const targetY = isMobile ? -0.4 : -0.3 - mouseY * 0.3;
        const scaleVal = (isMobile ? 0.6 : 0.95) * smoothServices;

        servicesGroup.position.x += (targetX - servicesGroup.position.x) * 0.08;
        servicesGroup.position.y += (targetY - servicesGroup.position.y) * 0.08;
        servicesGroup.scale.set(scaleVal, scaleVal, scaleVal);

        dodecaMesh.rotation.y = elapsedTime * 0.35;
        dodecaMesh.rotation.x = elapsedTime * 0.25;
        dodecaWire.rotation.y = -elapsedTime * 0.4;
        dodecaWire.rotation.z = elapsedTime * 0.2;
        ringMeshA.rotation.z = elapsedTime * 0.4;
      } else {
        servicesGroup.visible = false;
      }

      // ----------------------------------------------------
      // SECTION 5: FAQ & CONTACT &mdash; ATMOSPHERIC BEACON
      // Positioned low on the FAR RIGHT flank (x: 4.5, y: -1.0) &mdash; form is 100% visible!
      // ----------------------------------------------------
      if (smoothContact > 0.01) {
        contactGroup.visible = true;
        const targetX = isMobile ? mouseX * 0.3 : 4.5 + mouseX * 0.4;
        const targetY = isMobile ? -1.0 : -1.0 - mouseY * 0.3;
        const scaleVal = (isMobile ? 0.6 : 0.92) * smoothContact;

        contactGroup.position.x += (targetX - contactGroup.position.x) * 0.08;
        contactGroup.position.y += (targetY - contactGroup.position.y) * 0.08;
        contactGroup.scale.set(scaleVal, scaleVal, scaleVal);

        beaconMesh.rotation.y = elapsedTime * 0.25;
        beaconMesh.rotation.x = elapsedTime * 0.15;
        beaconRing.rotation.z = -elapsedTime * 0.3;
      } else {
        contactGroup.visible = false;
      }

      // Dynamic light movements
      rosePoint.position.x = Math.sin(elapsedTime * 0.6) * 5;
      cyanPoint.position.x = -Math.cos(elapsedTime * 0.5) * 5;

      // Star particle drift
      globalParticles.rotation.y = elapsedTime * 0.015;

      renderer.render(scene, camera);
    };

    animate();

    // 5. CLEANUP
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      nodeGeo.dispose();
      nodeMat1.dispose();
      nodeMat2.dispose();
      synapseLineGeo.dispose();
      synapseLineMat.dispose();
      pulseGeometry.dispose();
      pulseMaterial.dispose();
      chipGeo.dispose();
      chipMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      torusWireGeo.dispose();
      torusWireMat.dispose();
      octaGeo.dispose();
      octaMat.dispose();
      octaWireGeo.dispose();
      octaWireMat.dispose();
      innerJewelGeo.dispose();
      innerJewelMat.dispose();
      dodecaGeo.dispose();
      dodecaMat.dispose();
      dodecaWireGeo.dispose();
      dodecaWireMat.dispose();
      beaconGeo.dispose();
      beaconMat.dispose();
      beaconRingGeo.dispose();
      beaconRingMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [isMobile]);

  return (
    <>
      {!isMobile && (
        <div
          ref={mountRef}
          className="hidden md:block fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden bg-slate-50"
        />
      )}
    </>
  );
}
