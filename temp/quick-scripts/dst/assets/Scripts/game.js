
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c034by2gglD1YbvlB36tREJ', 'game');
// Scripts/game.js

"use strict";

var _enum = require("./enum");

var Bird = require('bird');

var Pipes = require('pipes');

var AudioMusic = require('./audio');

cc.Class({
  "extends": cc.Component,
  properties: {
    Bg0: {
      "default": null,
      type: cc.Node
    },
    Bg1: {
      "default": null,
      type: cc.Node
    },
    BirdSp: {
      "default": null,
      type: Bird
    },
    PipeSp: {
      "default": null,
      type: Pipes
    },
    AudioMusic: {
      "default": null,
      type: AudioMusic
    },
    // ScoreLabel引用
    ScoreLabel: {
      "default": null,
      type: cc.Label
    },
    // 得分音效资源
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    },
    // 开始游戏按钮
    gameStartBtn: {
      "default": null,
      type: cc.Button
    },
    // 游戏得分
    gameScore: 0,
    // 游戏状态
    gameStatus: _enum.GameStatus.Game_Ready
  },
  onLoad: function onLoad() {
    this.BirdSp.init(this);
    this.PipeSp.init(this);
    this.AudioMusic = this.node.getChildByName("AudioMusic").getComponent('audio'); // 为开始游戏按钮绑定事件

    this.gameStartBtn.node.on(cc.Node.EventType.TOUCH_END, this.touchGameStartBtn, this);
  },
  start: function start() {},
  update: function update(dt) {
    // 若游戏不在进行中，则不进行后续操作
    if (this.gameStatus != _enum.GameStatus.Game_Playing) return; // 移动背景图

    this.Bg0.x -= 1;
    this.Bg1.x -= 1;
    if (this.Bg0.x <= -288) this.Bg0.x = 288;
    if (this.Bg1.x <= -288) this.Bg1.x = 288;
  },
  // 触摸开始游戏按钮，开始游戏
  touchGameStartBtn: function touchGameStartBtn(event) {
    // 改变游戏状态
    this.gameStatus = _enum.GameStatus.Game_Playing; // 开始游戏时重置分数

    this.resetScore(); // 隐藏开始按钮

    this.gameStartBtn.node.active = false; // 小鸟开始游戏

    this.BirdSp.birdGameStart(); // 开始游戏是重置水管位置

    this.PipeSp.resetPipePos();
  },
  // 游戏结束
  gameOver: function gameOver() {
    this.gameStatus = _enum.GameStatus.Game_Over;
    this.ScoreLabel.string = this.gameScore.toString(); // 显示开始游戏按钮

    this.gameStartBtn.node.active = true; // 播放游戏结束音效

    this.AudioMusic.playMusic('gameOver');
  },
  // 更新分数
  gainScore: function gainScore(pos) {
    this.gameScore++;
    this.ScoreLabel.string = this.gameScore.toString(); // 播放得分音效

    this.AudioMusic.playMusic('score');
  },
  // 重置分数
  resetScore: function resetScore() {
    this.gameScore = 0;
    this.ScoreLabel.string = this.gameScore.toString();
  },
  // 播放小鸟飞行音乐
  playFlySound: function playFlySound() {
    // 若游戏不在进行中则不播放音乐 
    if (this.gameStatus != _enum.GameStatus.Game_Playing) return;
    this.AudioMusic.playMusic('fly');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZS5qcyJdLCJuYW1lcyI6WyJCaXJkIiwicmVxdWlyZSIsIlBpcGVzIiwiQXVkaW9NdXNpYyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiQmcwIiwidHlwZSIsIk5vZGUiLCJCZzEiLCJCaXJkU3AiLCJQaXBlU3AiLCJTY29yZUxhYmVsIiwiTGFiZWwiLCJzY29yZUF1ZGlvIiwiQXVkaW9DbGlwIiwiZ2FtZVN0YXJ0QnRuIiwiQnV0dG9uIiwiZ2FtZVNjb3JlIiwiZ2FtZVN0YXR1cyIsIkdhbWVTdGF0dXMiLCJHYW1lX1JlYWR5Iiwib25Mb2FkIiwiaW5pdCIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwidG91Y2hHYW1lU3RhcnRCdG4iLCJzdGFydCIsInVwZGF0ZSIsImR0IiwiR2FtZV9QbGF5aW5nIiwieCIsImV2ZW50IiwicmVzZXRTY29yZSIsImFjdGl2ZSIsImJpcmRHYW1lU3RhcnQiLCJyZXNldFBpcGVQb3MiLCJnYW1lT3ZlciIsIkdhbWVfT3ZlciIsInN0cmluZyIsInRvU3RyaW5nIiwicGxheU11c2ljIiwiZ2FpblNjb3JlIiwicG9zIiwicGxheUZseVNvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHRCxPQUFPLENBQUMsT0FBRCxDQUFyQjs7QUFDQSxJQUFNRSxVQUFVLEdBQUdGLE9BQU8sQ0FBQyxTQUFELENBQTFCOztBQUVBRyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsR0FBRyxFQUFFO0FBQ0QsaUJBQVMsSUFEUjtBQUVEQyxNQUFBQSxJQUFJLEVBQUVM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QixHQUF5QixLQUFLekIsU0FBTCxDQUFlMEIsUUFBZixFQUF6QixDQUhrQixDQUlsQjs7QUFDQSxTQUFLNUIsWUFBTCxDQUFrQlEsSUFBbEIsQ0FBdUJjLE1BQXZCLEdBQWdDLElBQWhDLENBTGtCLENBTWxCOztBQUNBLFNBQUtyQyxVQUFMLENBQWdCNEMsU0FBaEIsQ0FBMEIsVUFBMUI7QUFDSCxHQTVGSTtBQTZGTDtBQUNBQyxFQUFBQSxTQUFTLEVBQUUsbUJBQVVDLEdBQVYsRUFBZTtBQUN0QixTQUFLN0IsU0FBTDtBQUNBLFNBQUtOLFVBQUwsQ0FBZ0IrQixNQUFoQixHQUF5QixLQUFLekIsU0FBTCxDQUFlMEIsUUFBZixFQUF6QixDQUZzQixDQUd0Qjs7QUFDQSxTQUFLM0MsVUFBTCxDQUFnQjRDLFNBQWhCLENBQTBCLE9BQTFCO0FBQ0gsR0FuR0k7QUFxR0w7QUFDQVIsRUFBQUEsVUFBVSxFQUFFLHNCQUFZO0FBQ3BCLFNBQUtuQixTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBS04sVUFBTCxDQUFnQitCLE1BQWhCLEdBQXlCLEtBQUt6QixTQUFMLENBQWUwQixRQUFmLEVBQXpCO0FBQ0gsR0F6R0k7QUEyR0w7QUFDQUksRUFBQUEsWUFBWSxFQUFFLHdCQUFZO0FBQ3RCO0FBQ0EsUUFBSSxLQUFLN0IsVUFBTCxJQUFtQkMsaUJBQVdjLFlBQWxDLEVBQWdEO0FBQ2hELFNBQUtqQyxVQUFMLENBQWdCNEMsU0FBaEIsQ0FBMEIsS0FBMUI7QUFDSDtBQWhISSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lU3RhdHVzIH0gZnJvbSAnLi9lbnVtJztcclxuY29uc3QgQmlyZCA9IHJlcXVpcmUoJ2JpcmQnKTtcclxuY29uc3QgUGlwZXMgPSByZXF1aXJlKCdwaXBlcycpO1xyXG5jb25zdCBBdWRpb011c2ljID0gcmVxdWlyZSgnLi9hdWRpbycpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBCZzA6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQmcxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJpcmRTcDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBCaXJkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBQaXBlU3A6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogUGlwZXNcclxuICAgICAgICB9LFxyXG4gICAgICAgIEF1ZGlvTXVzaWM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogQXVkaW9NdXNpY1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gU2NvcmVMYWJlbOW8leeUqFxyXG4gICAgICAgIFNjb3JlTGFiZWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOW+l+WIhumfs+aViOi1hOa6kFxyXG4gICAgICAgIHNjb3JlQXVkaW86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDlvIDlp4vmuLjmiI/mjInpkq5cclxuICAgICAgICBnYW1lU3RhcnRCdG46IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5ri45oiP5b6X5YiGXHJcbiAgICAgICAgZ2FtZVNjb3JlOiAwLFxyXG4gICAgICAgIC8vIOa4uOaIj+eKtuaAgVxyXG4gICAgICAgIGdhbWVTdGF0dXM6IEdhbWVTdGF0dXMuR2FtZV9SZWFkeSxcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLkJpcmRTcC5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuUGlwZVNwLmluaXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5BdWRpb011c2ljID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQXVkaW9NdXNpY1wiKS5nZXRDb21wb25lbnQoJ2F1ZGlvJyk7XHJcbiAgICAgICAgLy8g5Li65byA5aeL5ri45oiP5oyJ6ZKu57uR5a6a5LqL5Lu2XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhcnRCdG4ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hHYW1lU3RhcnRCdG4sIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIOiLpea4uOaIj+S4jeWcqOi/m+ihjOS4re+8jOWImeS4jei/m+ihjOWQjue7reaTjeS9nFxyXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0dXMgIT0gR2FtZVN0YXR1cy5HYW1lX1BsYXlpbmcpIHJldHVyblxyXG5cclxuICAgICAgICAvLyDnp7vliqjog4zmma/lm75cclxuICAgICAgICB0aGlzLkJnMC54IC09IDE7XHJcbiAgICAgICAgdGhpcy5CZzEueCAtPSAxO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5CZzAueCA8PSAtMjg4KSB0aGlzLkJnMC54ID0gMjg4O1xyXG4gICAgICAgIGlmICh0aGlzLkJnMS54IDw9IC0yODgpIHRoaXMuQmcxLnggPSAyODg7XHJcblxyXG4gICAgfSxcclxuICAgIC8vIOinpuaRuOW8gOWni+a4uOaIj+aMiemSru+8jOW8gOWni+a4uOaIj1xyXG4gICAgdG91Y2hHYW1lU3RhcnRCdG46IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIC8vIOaUueWPmOa4uOaIj+eKtuaAgVxyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9IEdhbWVTdGF0dXMuR2FtZV9QbGF5aW5nO1xyXG4gICAgICAgIC8vIOW8gOWni+a4uOaIj+aXtumHjee9ruWIhuaVsFxyXG4gICAgICAgIHRoaXMucmVzZXRTY29yZSgpO1xyXG4gICAgICAgIC8vIOmakOiXj+W8gOWni+aMiemSrlxyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0QnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8g5bCP6bif5byA5aeL5ri45oiPXHJcbiAgICAgICAgdGhpcy5CaXJkU3AuYmlyZEdhbWVTdGFydCgpO1xyXG4gICAgICAgIC8vIOW8gOWni+a4uOaIj+aYr+mHjee9ruawtOeuoeS9jee9rlxyXG4gICAgICAgIHRoaXMuUGlwZVNwLnJlc2V0UGlwZVBvcygpO1xyXG4gICAgfSxcclxuICAgIC8vIOa4uOaIj+e7k+adn1xyXG4gICAgZ2FtZU92ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSBHYW1lU3RhdHVzLkdhbWVfT3ZlcjtcclxuICAgICAgICB0aGlzLlNjb3JlTGFiZWwuc3RyaW5nID0gdGhpcy5nYW1lU2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICAvLyDmmL7npLrlvIDlp4vmuLjmiI/mjInpkq5cclxuICAgICAgICB0aGlzLmdhbWVTdGFydEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8g5pKt5pS+5ri45oiP57uT5p2f6Z+z5pWIXHJcbiAgICAgICAgdGhpcy5BdWRpb011c2ljLnBsYXlNdXNpYygnZ2FtZU92ZXInKTtcclxuICAgIH0sXHJcbiAgICAvLyDmm7TmlrDliIbmlbBcclxuICAgIGdhaW5TY29yZTogZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgIHRoaXMuZ2FtZVNjb3JlKys7XHJcbiAgICAgICAgdGhpcy5TY29yZUxhYmVsLnN0cmluZyA9IHRoaXMuZ2FtZVNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy8g5pKt5pS+5b6X5YiG6Z+z5pWIXHJcbiAgICAgICAgdGhpcy5BdWRpb011c2ljLnBsYXlNdXNpYygnc2NvcmUnKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8g6YeN572u5YiG5pWwXHJcbiAgICByZXNldFNjb3JlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lU2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuU2NvcmVMYWJlbC5zdHJpbmcgPSB0aGlzLmdhbWVTY29yZS50b1N0cmluZygpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyDmkq3mlL7lsI/puJ/po57ooYzpn7PkuZBcclxuICAgIHBsYXlGbHlTb3VuZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIOiLpea4uOaIj+S4jeWcqOi/m+ihjOS4reWImeS4jeaSreaUvumfs+S5kCBcclxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdHVzICE9IEdhbWVTdGF0dXMuR2FtZV9QbGF5aW5nKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5BdWRpb011c2ljLnBsYXlNdXNpYygnZmx5Jyk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19