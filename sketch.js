let mesesCount = 100; // Jumlah meses
let meses = []; // Posisi meses

function setup() {
  createCanvas(400, 400, WEBGL);
  noStroke();

  // Buat posisi meses secara acak di permukaan torus
  for (let i = 0; i < mesesCount; i++) {
    let theta = random(TWO_PI); // Sudut melingkar
    let phi = random(TWO_PI); // Sudut kecil untuk lingkaran torus
    meses.push({ theta, phi });
  }
}

function draw() {
  background(30);

  // Pencahayaan
  ambientLight(100);
  pointLight(255, 255, 255, 0, 0, 200);

  // Rotasi donat
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  // Gambar donat
  fill(255, 150, 100);
  torus(100, 40, 32, 16);

  // Gambar meses
  for (let m of meses) {
    let { theta, phi } = m;

    // Hitung posisi meses di permukaan torus
    let x = (100 + 40 * cos(phi)) * cos(theta);
    let y = (100 + 40 * cos(phi)) * sin(theta);
    let z = 40 * sin(phi);

    push();
    translate(x, y, z);
    rotateX(theta);
    rotateY(phi);
    fill(80, 40, 20); // Warna cokelat untuk meses
    cylinder(3, 10); // Bentuk meses
    pop();
  }
}