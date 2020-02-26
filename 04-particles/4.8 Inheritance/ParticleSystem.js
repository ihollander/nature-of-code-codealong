import Particle from "./Particle.js"
import Confetti from "./Confetti.js"

export default class ParticleSystem {
  constructor(p, location) {
    this.p = p
    this.origin = location.copy()
    this.particles = []
    this.lifetime = 100
  }

  isDead() {
    return this.particles.length === 0
  }

  addParticle() {
    if (Math.random() > 0.5) {
      this.particles.push(new Particle(this.p, this.origin))
    } else {
      this.particles.push(new Confetti(this.p, this.origin))
    }
  }

  applyForce(f) {
    for (let part of this.particles) {
      part.applyForce(f)
    }
  }

  applyRepeller(r) {
    for (let part of this.particles) {
      let force = r.repel(part)
      part.applyForce(force)
    }
  }

  run() {
    if (this.lifetime > 0) {
      this.addParticle()
    }

    for (let part of this.particles) {
      part.run()
    }

    this.lifetime -= 1
    this.cleanup()
  }

  cleanup() {
    this.particles = this.particles.filter(p => !p.isDead())
  }
}