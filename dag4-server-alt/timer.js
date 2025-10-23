class Timer {
  initialTime = null;
  callOnUpdate = () => {};
  callOnComplete = () => {};

  set(seconds) {
    this.initialTime = seconds;
  }

  start() {
    if (!this.initialTime) {
      throw new Error('No initial time set, did you forget to call timer.set()?');
    }

    let timeLeft = this.initialTime;

    const timer = setInterval(() => {
      this.callOnUpdate(timeLeft);

      timeLeft -= 1;

      if (timeLeft < 0) {
        clearInterval(timer);

        this.callOnComplete();
      }
    }, 1000);
  }

  onUpdate(callback) {
    if (typeof callback !== 'function') {
      throw new Error(`timer.onUpdate should receive a function, you provided a "${typeof callback}"`);
    }

    this.callOnUpdate = callback;
  }

  onComplete(callback) {
    if (typeof callback !== 'function') {
      throw new Error(`timer.onComplete should receive a function, you provided a "${typeof callback}"`);
    }

    this.callOnComplete = callback;
  }
}

export default new Timer();