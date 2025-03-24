class Particle {
  public x: number;
  public y: number;
  public size: number;
  public speedX: number;
  public speedY: number;
  public opacity: number;

  public constructor(x: number, y: number, size: number, speed: number) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 5 + size;
    this.speedX = (Math.random() - 0.5) * speed;
    this.speedY = (Math.random() - 0.5) * speed;
    this.opacity = 1;
  }

  public update(): void {
    this.x += this.speedX;
    this.y += this.speedY;
    this.size *= 0.97;
    this.opacity -= 0.02;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default Particle;
