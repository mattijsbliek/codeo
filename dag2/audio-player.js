class AudioPlayer {
  samples = {};
  audioCtx = null;

  constructor() {
    this.audioCtx = new AudioContext({
      latencyHint: 'interactive',
    });
  }

 async load(sample) {
    let file = await fetch(`samples/${sample}.wav`);
    let buffer = await this.audioCtx.decodeAudioData(await file.arrayBuffer());

    this.samples[sample] = buffer;
  }

  play(sample) {
    if (!this.samples[sample]) {
      throw new Error(`Could not find sample ${sample}. Did you forget to load it?`);
    }

    let source = this.audioCtx.createBufferSource();
    source.buffer = this.samples[sample];
    source.connect(this.audioCtx.destination);
    source.start();
  }
}

export default new AudioPlayer();