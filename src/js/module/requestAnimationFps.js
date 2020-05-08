// requestAnimationFrame の実行回数を制御
// requestAnimationFps JavaSCript Sample
// import requestAnimationFps from './modules/requestAnimationFps';
// const fps = new requestAnimationFps(20, function () {
//   console.log(new Date());
// });

// function loop() {
//   fps.loop();
//   requestAnimationFrame(loop);
// }
// loop();

export default class requestAnimationFps {

  constructor(fsp_, func_) {
    this.fps = fsp_;
    this.func = func_;
    this.frameTime = 1000 / this.fps;
    this.prevTime = Date.now();
  }

  loop() {
    let currentTime = Date.now();
    let elapsed = currentTime - this.prevTime;
    if (elapsed >= this.frameTime) {
      this.func();
      this.prevTime = currentTime;
    }
    return this;
  }

}
