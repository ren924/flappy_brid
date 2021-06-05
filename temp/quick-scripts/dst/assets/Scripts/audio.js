
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/audio.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcYXVkaW8uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJmbHlTb3VuZCIsInR5cGUiLCJBdWRpb0NsaXAiLCJnYW1lT3ZlclNvdW5kIiwic2NvcmVBdWRpbyIsIm9uTG9hZCIsInN0YXJ0IiwicGxheU11c2ljIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBQyxJQUFBQSxRQUFRLEVBQUU7QUFDTixpQkFBUyxJQURIO0FBRU5DLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZILEtBRkY7QUFNUjtBQUNBQyxJQUFBQSxhQUFhLEVBQUU7QUFDWCxpQkFBUyxJQURFO0FBRVhGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZFLEtBUFA7QUFXUjtBQUNBRSxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZEO0FBWkosR0FGUDtBQW9CTEcsRUFBQUEsTUFwQkssb0JBb0JJLENBQUcsQ0FwQlA7QUFzQkxDLEVBQUFBLEtBdEJLLG1CQXNCRyxDQUFHLENBdEJOO0FBd0JMQyxFQUFBQSxTQUFTLEVBQUUsbUJBQVVOLElBQVYsRUFBZ0I7QUFDdkIsWUFBUUEsSUFBUjtBQUNJLFdBQUssS0FBTDtBQUFZTCxRQUFBQSxFQUFFLENBQUNZLFdBQUgsQ0FBZUMsVUFBZixDQUEwQixLQUFLVCxRQUEvQixFQUF5QyxLQUF6QztBQUFpRDs7QUFDN0QsV0FBSyxVQUFMO0FBQWlCSixRQUFBQSxFQUFFLENBQUNZLFdBQUgsQ0FBZUMsVUFBZixDQUEwQixLQUFLTixhQUEvQixFQUE4QyxLQUE5QztBQUFzRDs7QUFDdkUsV0FBSyxPQUFMO0FBQWNQLFFBQUFBLEVBQUUsQ0FBQ1ksV0FBSCxDQUFlQyxVQUFmLENBQTBCLEtBQUtMLFVBQS9CLEVBQTJDLEtBQTNDO0FBQW1EOztBQUNqRTtBQUFTO0FBSmI7QUFNSDtBQS9CSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8g6aOe57+U6Z+z5pWIXHJcbiAgICAgICAgZmx5U291bmQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5ri45oiP57uT5p2f6Z+z5pWIXHJcbiAgICAgICAgZ2FtZU92ZXJTb3VuZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDlvpfliIbpn7PmlYjotYTmupBcclxuICAgICAgICBzY29yZUF1ZGlvOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHsgfSxcclxuXHJcbiAgICBzdGFydCgpIHsgfSxcclxuXHJcbiAgICBwbGF5TXVzaWM6IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ZseSc6IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5mbHlTb3VuZCwgZmFsc2UpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZ2FtZU92ZXInOiBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZ2FtZU92ZXJTb3VuZCwgZmFsc2UpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc2NvcmUnOiBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2NvcmVBdWRpbywgZmFsc2UpOyBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSJdfQ==