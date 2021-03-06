particlesJS('particles-js', {
  particles: {
    //color: '#D1B3B2', // Color del vertice
    color_random: true,
    shape: 'triangle', // "circle", "edge" or "triangle" // Establecemos cual de las 3 figuras queremos para vertice
    opacity: {
      opacity: 1, // Opacidad del vertice
      anim: {
        enable: true,
        speed: 2,
        opacity_min: 0,
        sync: false
      }
    },
    size: 4,
    size_random: true,
    nb: 150,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#FFFFFF', // Color de la arista
      opacity: 1, // Opacidad de la arista
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 5 // Velocidad a la que se mueven las aristas
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 300
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab', // "grab" of false
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove"
        nb: 4
      },
      onresize: {
        enable: true,
        mode: 'bounce', // "out" or "bounce"
        density_auto: false,
        density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
}); 