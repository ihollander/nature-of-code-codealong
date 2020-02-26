import Particle from "./Particle.js"

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
    this.particles.push(new Particle(this.p, this.origin))
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