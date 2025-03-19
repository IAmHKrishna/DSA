// https://docs.google.com/document/d/1A63iaMJQ7Hb1uT2ZVRYXNmq-99h1OmYPFviRxpx6R6k/edit?tab=t.nzlfbsw29y3z

// Implementor interface
class Device {
    isEnabled() {
      throw new Error("Method 'isEnabled()' must be implemented.");
    }
    enable() {
      throw new Error("Method 'enable()' must be implemented.");
    }
    disable() {
      throw new Error("Method 'disable()' must be implemented.");
    }
    getVolume() {
      throw new Error("Method 'getVolume()' must be implemented.");
    }
    setVolume(value) {
      throw new Error("Method 'setVolume()' must be implemented.");
    }
  }
  
  // Concrete Implementations
  class TV extends Device {
    constructor() {
      super();
      this.enabled = false;
      this.volume = 10;
    }
    isEnabled() {
      return this.enabled;
    }
    enable() {
      this.enabled = true;
      console.log("TV is now ON.");
    }
    disable() {
      this.enabled = false;
      console.log("TV is now OFF.");
    }
    getVolume() {
      return this.volume;
    }
    setVolume(value) {
      this.volume = value;
      console.log(`TV volume set to ${value}.`);
    }
  }
  
  class Radio extends Device {
    constructor() {
      super();
      this.enabled = false;
      this.volume = 5;
    }
    isEnabled() {
      return this.enabled;
    }
    enable() {
      this.enabled = true;
      console.log("Radio is now ON.");
    }
    disable() {
      this.enabled = false;
      console.log("Radio is now OFF.");
    }
    getVolume() {
      return this.volume;
    }
    setVolume(value) {
      this.volume = value;
      console.log(`Radio volume set to ${value}.`);
    }
  }
  
  // Abstraction
  class RemoteControl {
    constructor(device) {
      this.device = device;
    }
    togglePower() {
      if (this.device.isEnabled()) {
        this.device.disable();
      } else {
        this.device.enable();
      }
    }
    volumeUp() {
      this.device.setVolume(this.device.getVolume() + 1);
    }
    volumeDown() {
      this.device.setVolume(this.device.getVolume() - 1);
    }
  }
  
  // Refined Abstraction
  class AdvancedRemoteControl extends RemoteControl {
    mute() {
      this.device.setVolume(0);
      console.log("Device muted.");
    }
  }
  
  // Client Code
  const tv = new TV();
  const radio = new Radio();
  
  const tvRemote = new RemoteControl(tv);
  const radioRemote = new AdvancedRemoteControl(radio);
  
  // Using TV Remote
  tvRemote.togglePower(); // TV is now ON.
  tvRemote.volumeUp();    // TV volume set to 11.
  tvRemote.togglePower(); // TV is now OFF.
  
  // Using Radio Remote
  radioRemote.togglePower(); // Radio is now ON.
  radioRemote.volumeDown();  // Radio volume set to 4.
  radioRemote.mute();        // Device muted.
  radioRemote.togglePower(); // Radio is now OFF.
  