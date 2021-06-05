"use strict";
cc._RF.push(module, 'af3ddKx3BRBLZHdOgCafLuC', 'audio');
// Scripts/audio.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    // 飞翔音效
    flySound: {
      "default": null,
      type: cc.AudioClip
    },
    // 游戏结束音效
    gameOverSound: {
      "default": null,
      type: cc.AudioClip
    },
    // 得分音效资源
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  onLoad: function onLoad() {},
  start: function start() {},
  playMusic: function playMusic(type) {
    switch (type) {
      case 'fly':
        cc.audioEngine.playEffect(this.flySound, false);
        break;

      case 'gameOver':
        cc.audioEngine.playEffect(this.gameOverSound, false);
        break;

      case 'score':
        cc.audioEngine.playEffect(this.scoreAudio, false);
        break;

      default:
        break;
    }
  }
});

cc._RF.pop();