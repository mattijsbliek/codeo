class Timer {
  #timer = null;
  #initialTime = null;
  #callOnUpdate = () => {};
  #callOnComplete = () => {};

  isRunning = false;

  set(seconds) {
    this.#initialTime = seconds;
  }

  set isRunning(value) {
    throw new Error('Directly setting timer.isRunning is not allowed');
  }

  start() {
    if (!this.#initialTime) {
      throw new Error('No initial time set, did you forget to call timer.set()?');
    }

    let timeLeft = this.#initialTime;

    this.isRunning = true;

    this.timer = setInterval(() => {
      this.#callOnUpdate(timeLeft);

      timeLeft -= 1;

      if (timeLeft < 0) {
        this.isRunning = false;
        
        clearInterval(this.timer);

        this.#callOnComplete();
      }
    }, 1000);
  }

  reset() {
    if (this.timer) {
        clearInterval(this.timer);
        this.#callOnComplete();
    }
  }

  onUpdate(callback) {
    if (typeof callback !== 'function') {
      throw new Error(`timer.onUpdate should receive a function, you provided a "${typeof callback}"`);
    }

    this.#callOnUpdate = callback;
  }

  onComplete(callback) {
    if (typeof callback !== 'function') {
      throw new Error(`timer.onComplete should receive a function, you provided a "${typeof callback}"`);
    }

    this.#callOnComplete = callback;
  }
}

export default new Timer();