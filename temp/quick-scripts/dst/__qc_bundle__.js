
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/audio');
require('./assets/Scripts/bird');
require('./assets/Scripts/enum');
require('./assets/Scripts/game');
require('./assets/Scripts/pipes');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/enum.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1d1fhZ+fFBhrVHQlth3Gkf', 'enum');
// Scripts/enum.js

"use strict";

exports.__esModule = true;
exports.GameStatus = void 0;
// 游戏状态
var GameStatus = {
  Game_Ready: 0,
  //准备
  Game_Playing: 1,
  // 进行中
  Game_Over: 2 //结束

};
exports.GameStatus = GameStatus;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZW51bS5qcyJdLCJuYW1lcyI6WyJHYW1lU3RhdHVzIiwiR2FtZV9SZWFkeSIsIkdhbWVfUGxheWluZyIsIkdhbWVfT3ZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ08sSUFBTUEsVUFBVSxHQUFHO0FBQ3RCQyxFQUFBQSxVQUFVLEVBQUMsQ0FEVztBQUNMO0FBQ2pCQyxFQUFBQSxZQUFZLEVBQUMsQ0FGUztBQUVOO0FBQ2hCQyxFQUFBQSxTQUFTLEVBQUUsQ0FIVyxDQUdOOztBQUhNLENBQW5CIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyDmuLjmiI/nirbmgIFcclxuZXhwb3J0IGNvbnN0IEdhbWVTdGF0dXMgPSB7XHJcbiAgICBHYW1lX1JlYWR5OjAsICAgIC8v5YeG5aSHXHJcbiAgICBHYW1lX1BsYXlpbmc6MSwgLy8g6L+b6KGM5LitXHJcbiAgICBHYW1lX092ZXI6IDIsICAgLy/nu5PmnZ9cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/bird.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d26eS2JE5BS5Am8laEHIZE', 'bird');
// Scripts/bird.js

"use strict";

var _enum = require("./enum");

cc.Class({
  "extends": cc.Component,
  properties: {
    // 小鸟移动速度
    birdSpeed: 0,
    // 游戏结束图片
    gameOverSp: {
      "default": null,
      type: cc.Node
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // 监听Canvas触摸事件
    var touchReceiver = cc.Canvas.instance.node;
    touchReceiver.on('touchstart', this.onTouchStart, this);
    touchReceiver.on('touchend', this.onTouchEnd, this); // 默认不显示游戏结束图

    this.gameOverSp.active = false; // 碰撞检测

    this.CollManager = cc.director.getCollisionManager();
  },
  init: function init(game) {
    this.game = game;
  },
  onDestroy: function onDestroy() {
    // 取消触摸事件监听
    var touchReceiver = cc.Canvas.instance.node;
    touchReceiver.off('touchstart', this.onTouchStart, this);
    touchReceiver.off('touchend', this.onTouchEnd, this);
  },
  start: function start() {},
  update: function update(dt) {
    // 当游戏状态为进行中时开始运动
    if (this.game.gameStatus == _enum.GameStatus.Game_Playing) {
      this.birdSpeed -= 0.05;
      this.node.y += this.birdSpeed; // 判断边界

      if (this.node.y >= 256 || this.node.y <= -256) {
        this.gameOver();
      }
    }
  },
  // 触摸开始时
  onTouchStart: function onTouchStart(event) {
    // 播放小鸟飞行音乐
    this.game.playFlySound();
    this.birdSpeed = 2;
  },
  // 触摸结束时
  onTouchEnd: function onTouchEnd(event) {
    this.birdSpeed = 0;
  },
  // 点击开始游戏按钮后
  birdGameStart: function birdGameStart() {
    //  隐藏游戏结束图
    this.gameOverSp.active = false; // 重置小鸟位置

    this.node.y = 0; // 开启碰撞检测

    this.CollManager.enabled = true;
  },

  /**
   * 当碰撞产生的时候调用
   * @param  {Collider} other 产生碰撞的另一个碰撞组件
   * @param  {Collider} self  产生碰撞的自身的碰撞组件
   */
  onCollisionEnter: function onCollisionEnter(other, self) {
    this.gameOver();
  },
  gameOver: function gameOver() {
    this.game.gameOver(); // 关闭碰撞检测

    this.CollManager.enabled = false; // 显示游戏结束图

    this.gameOverSp.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcYmlyZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJpcmRTcGVlZCIsImdhbWVPdmVyU3AiLCJ0eXBlIiwiTm9kZSIsIm9uTG9hZCIsInRvdWNoUmVjZWl2ZXIiLCJDYW52YXMiLCJpbnN0YW5jZSIsIm5vZGUiLCJvbiIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmQiLCJhY3RpdmUiLCJDb2xsTWFuYWdlciIsImRpcmVjdG9yIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImluaXQiLCJnYW1lIiwib25EZXN0cm95Iiwib2ZmIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsImdhbWVTdGF0dXMiLCJHYW1lU3RhdHVzIiwiR2FtZV9QbGF5aW5nIiwieSIsImdhbWVPdmVyIiwiZXZlbnQiLCJwbGF5Rmx5U291bmQiLCJiaXJkR2FtZVN0YXJ0IiwiZW5hYmxlZCIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0FDLElBQUFBLFNBQVMsRUFBRSxDQUZIO0FBR1I7QUFDQUMsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSQyxNQUFBQSxJQUFJLEVBQUVOLEVBQUUsQ0FBQ087QUFGRDtBQUpKLEdBRlA7QUFZTDtBQUVBQyxFQUFBQSxNQWRLLG9CQWNJO0FBQ0w7QUFDQSxRQUFJQyxhQUFhLEdBQUdULEVBQUUsQ0FBQ1UsTUFBSCxDQUFVQyxRQUFWLENBQW1CQyxJQUF2QztBQUNBSCxJQUFBQSxhQUFhLENBQUNJLEVBQWQsQ0FBaUIsWUFBakIsRUFBK0IsS0FBS0MsWUFBcEMsRUFBa0QsSUFBbEQ7QUFDQUwsSUFBQUEsYUFBYSxDQUFDSSxFQUFkLENBQWlCLFVBQWpCLEVBQTZCLEtBQUtFLFVBQWxDLEVBQThDLElBQTlDLEVBSkssQ0FLTDs7QUFDQSxTQUFLVixVQUFMLENBQWdCVyxNQUFoQixHQUF5QixLQUF6QixDQU5LLENBT0w7O0FBQ0EsU0FBS0MsV0FBTCxHQUFtQmpCLEVBQUUsQ0FBQ2tCLFFBQUgsQ0FBWUMsbUJBQVosRUFBbkI7QUFDSCxHQXZCSTtBQXlCTEMsRUFBQUEsSUFBSSxFQUFFLGNBQVVDLElBQVYsRUFBZ0I7QUFDbEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0gsR0EzQkk7QUE2QkxDLEVBQUFBLFNBN0JLLHVCQTZCTztBQUNSO0FBQ0EsUUFBSWIsYUFBYSxHQUFHVCxFQUFFLENBQUNVLE1BQUgsQ0FBVUMsUUFBVixDQUFtQkMsSUFBdkM7QUFDQUgsSUFBQUEsYUFBYSxDQUFDYyxHQUFkLENBQWtCLFlBQWxCLEVBQWdDLEtBQUtULFlBQXJDLEVBQW1ELElBQW5EO0FBQ0FMLElBQUFBLGFBQWEsQ0FBQ2MsR0FBZCxDQUFrQixVQUFsQixFQUE4QixLQUFLUixVQUFuQyxFQUErQyxJQUEvQztBQUNILEdBbENJO0FBb0NMUyxFQUFBQSxLQXBDSyxtQkFvQ0csQ0FBRyxDQXBDTjtBQXNDTEMsRUFBQUEsTUF0Q0ssa0JBc0NFQyxFQXRDRixFQXNDTTtBQUNQO0FBQ0EsUUFBSSxLQUFLTCxJQUFMLENBQVVNLFVBQVYsSUFBd0JDLGlCQUFXQyxZQUF2QyxFQUFxRDtBQUNqRCxXQUFLekIsU0FBTCxJQUFrQixJQUFsQjtBQUNBLFdBQUtRLElBQUwsQ0FBVWtCLENBQVYsSUFBZSxLQUFLMUIsU0FBcEIsQ0FGaUQsQ0FHakQ7O0FBQ0EsVUFBSSxLQUFLUSxJQUFMLENBQVVrQixDQUFWLElBQWUsR0FBZixJQUFzQixLQUFLbEIsSUFBTCxDQUFVa0IsQ0FBVixJQUFlLENBQUMsR0FBMUMsRUFBK0M7QUFDM0MsYUFBS0MsUUFBTDtBQUNIO0FBQ0o7QUFFSixHQWpESTtBQW1ETDtBQUNBakIsRUFBQUEsWUFwREssd0JBb0RRa0IsS0FwRFIsRUFvRGU7QUFDaEI7QUFDQSxTQUFLWCxJQUFMLENBQVVZLFlBQVY7QUFDQSxTQUFLN0IsU0FBTCxHQUFpQixDQUFqQjtBQUNILEdBeERJO0FBMERMO0FBQ0FXLEVBQUFBLFVBM0RLLHNCQTJETWlCLEtBM0ROLEVBMkRhO0FBQ2QsU0FBSzVCLFNBQUwsR0FBaUIsQ0FBakI7QUFDSCxHQTdESTtBQStETDtBQUNBOEIsRUFBQUEsYUFBYSxFQUFFLHlCQUFZO0FBQ3ZCO0FBQ0EsU0FBSzdCLFVBQUwsQ0FBZ0JXLE1BQWhCLEdBQXlCLEtBQXpCLENBRnVCLENBR3ZCOztBQUNBLFNBQUtKLElBQUwsQ0FBVWtCLENBQVYsR0FBYyxDQUFkLENBSnVCLENBS3ZCOztBQUNBLFNBQUtiLFdBQUwsQ0FBaUJrQixPQUFqQixHQUEyQixJQUEzQjtBQUNILEdBdkVJOztBQXlFTDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0lDLEVBQUFBLGdCQTlFSyw0QkE4RVlDLEtBOUVaLEVBOEVtQkMsSUE5RW5CLEVBOEV5QjtBQUMxQixTQUFLUCxRQUFMO0FBQ0gsR0FoRkk7QUFrRkxBLEVBQUFBLFFBbEZLLHNCQWtGTTtBQUNQLFNBQUtWLElBQUwsQ0FBVVUsUUFBVixHQURPLENBRVA7O0FBQ0EsU0FBS2QsV0FBTCxDQUFpQmtCLE9BQWpCLEdBQTJCLEtBQTNCLENBSE8sQ0FJUDs7QUFDQSxTQUFLOUIsVUFBTCxDQUFnQlcsTUFBaEIsR0FBeUIsSUFBekI7QUFDSDtBQXhGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lU3RhdHVzIH0gZnJvbSAnLi9lbnVtJztcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIOWwj+m4n+enu+WKqOmAn+W6plxyXG4gICAgICAgIGJpcmRTcGVlZDogMCxcclxuICAgICAgICAvLyDmuLjmiI/nu5PmnZ/lm77niYdcclxuICAgICAgICBnYW1lT3ZlclNwOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g55uR5ZCsQ2FudmFz6Kem5pG45LqL5Lu2XHJcbiAgICAgICAgdmFyIHRvdWNoUmVjZWl2ZXIgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZTtcclxuICAgICAgICB0b3VjaFJlY2VpdmVyLm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoUmVjZWl2ZXIub24oJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICAvLyDpu5jorqTkuI3mmL7npLrmuLjmiI/nu5PmnZ/lm75cclxuICAgICAgICB0aGlzLmdhbWVPdmVyU3AuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8g56Kw5pKe5qOA5rWLXHJcbiAgICAgICAgdGhpcy5Db2xsTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdDogZnVuY3Rpb24gKGdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8g5Y+W5raI6Kem5pG45LqL5Lu255uR5ZCsXHJcbiAgICAgICAgdmFyIHRvdWNoUmVjZWl2ZXIgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZTtcclxuICAgICAgICB0b3VjaFJlY2VpdmVyLm9mZigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0b3VjaFJlY2VpdmVyLm9mZigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHsgfSxcclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICAvLyDlvZPmuLjmiI/nirbmgIHkuLrov5vooYzkuK3ml7blvIDlp4vov5DliqhcclxuICAgICAgICBpZiAodGhpcy5nYW1lLmdhbWVTdGF0dXMgPT0gR2FtZVN0YXR1cy5HYW1lX1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5iaXJkU3BlZWQgLT0gMC4wNTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5iaXJkU3BlZWQ7XHJcbiAgICAgICAgICAgIC8vIOWIpOaWrei+ueeVjFxyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLnkgPj0gMjU2IHx8IHRoaXMubm9kZS55IDw9IC0yNTYpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOinpuaRuOW8gOWni+aXtlxyXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XHJcbiAgICAgICAgLy8g5pKt5pS+5bCP6bif6aOe6KGM6Z+z5LmQXHJcbiAgICAgICAgdGhpcy5nYW1lLnBsYXlGbHlTb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuYmlyZFNwZWVkID0gMjtcclxuICAgIH0sXHJcblxyXG4gICAgLy8g6Kem5pG457uT5p2f5pe2XHJcbiAgICBvblRvdWNoRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5iaXJkU3BlZWQgPSAwO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyDngrnlh7vlvIDlp4vmuLjmiI/mjInpkq7lkI5cclxuICAgIGJpcmRHYW1lU3RhcnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAg6ZqQ6JeP5ri45oiP57uT5p2f5Zu+XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlclNwLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIOmHjee9ruWwj+m4n+S9jee9rlxyXG4gICAgICAgIHRoaXMubm9kZS55ID0gMDtcclxuICAgICAgICAvLyDlvIDlkK/norDmkp7mo4DmtYtcclxuICAgICAgICB0aGlzLkNvbGxNYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+eisOaSnuS6p+eUn+eahOaXtuWAmeiwg+eUqFxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IG90aGVyIOS6p+eUn+eisOaSnueahOWPpuS4gOS4queisOaSnue7hOS7tlxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IHNlbGYgIOS6p+eUn+eisOaSnueahOiHqui6q+eahOeisOaSnue7hOS7tlxyXG4gICAgICovXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnYW1lT3ZlcigpIHtcclxuICAgICAgICB0aGlzLmdhbWUuZ2FtZU92ZXIoKTtcclxuICAgICAgICAvLyDlhbPpl63norDmkp7mo4DmtYtcclxuICAgICAgICB0aGlzLkNvbGxNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyDmmL7npLrmuLjmiI/nu5PmnZ/lm75cclxuICAgICAgICB0aGlzLmdhbWVPdmVyU3AuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/pipes.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b554dyDZGhFqr0VUbNUgfQf', 'pipes');
// Scripts/pipes.js

"use strict";

var _enum = require("./enum");

cc.Class({
  "extends": cc.Component,
  // 水管预制资源
  properties: {
    pipePrefab: {
      "default": null,
      type: cc.Prefab
    },
    pipeSpeed: 0
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {},
  init: function init(game) {
    this.game = game;
  },
  start: function start() {},
  update: function update(dt) {
    // 若游戏不处于进行中，则不进行后续操作
    if (this.game.gameStatus == _enum.GameStatus.Game_Playing) {
      var pipesChild = this.node.children;

      for (var c = 0; c < pipesChild.length; c++) {
        // 移动水管
        pipesChild[c].x -= 1; // 判断鸟越过水管

        if (pipesChild[c].x == -34) {
          this.game.gainScore();
        } // 生成新水管


        if (pipesChild[c].x == -50) {
          this.spawnNewPipe();
        }

        ; // 销毁水管

        if (pipesChild[c].x <= -170) {
          pipesChild[c].destroy();
        }
      }
    }

    ;
  },
  // 生成新水管
  spawnNewPipe: function spawnNewPipe() {
    var pipe = cc.instantiate(this.pipePrefab);
    this.node.addChild(pipe);
    pipe.x = 170;
    var minY = -100,
        maxY = 100;
    pipe.y = minY + Math.random() * (maxY - minY);
  },
  // 开始游戏时，重置水管位置
  resetPipePos: function resetPipePos() {
    var pipesChild = this.node.children;

    for (var c = 0; c < pipesChild.length; c++) {
      pipesChild[c].destroy();
    }

    this.spawnNewPipe();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xccGlwZXMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwaXBlUHJlZmFiIiwidHlwZSIsIlByZWZhYiIsInBpcGVTcGVlZCIsIm9uTG9hZCIsImluaXQiLCJnYW1lIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsImdhbWVTdGF0dXMiLCJHYW1lU3RhdHVzIiwiR2FtZV9QbGF5aW5nIiwicGlwZXNDaGlsZCIsIm5vZGUiLCJjaGlsZHJlbiIsImMiLCJsZW5ndGgiLCJ4IiwiZ2FpblNjb3JlIiwic3Bhd25OZXdQaXBlIiwiZGVzdHJveSIsInBpcGUiLCJpbnN0YW50aWF0ZSIsImFkZENoaWxkIiwibWluWSIsIm1heFkiLCJ5IiwiTWF0aCIsInJhbmRvbSIsInJlc2V0UGlwZVBvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTDtBQUNBQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRCxLQURKO0FBTVJDLElBQUFBLFNBQVMsRUFBRTtBQU5ILEdBSlA7QUFhTDtBQUVBQyxFQUFBQSxNQWZLLG9CQWVJLENBQUUsQ0FmTjtBQWlCTEMsRUFBQUEsSUFBSSxFQUFFLGNBQVVDLElBQVYsRUFBZ0I7QUFDbEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0gsR0FuQkk7QUFxQkxDLEVBQUFBLEtBckJLLG1CQXFCRyxDQUNQLENBdEJJO0FBd0JMQyxFQUFBQSxNQXhCSyxrQkF3QkVDLEVBeEJGLEVBd0JNO0FBQ1A7QUFDQSxRQUFJLEtBQUtILElBQUwsQ0FBVUksVUFBVixJQUF3QkMsaUJBQVdDLFlBQXZDLEVBQXFEO0FBRWpELFVBQUlDLFVBQVUsR0FBRyxLQUFLQyxJQUFMLENBQVVDLFFBQTNCOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsVUFBVSxDQUFDSSxNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUE0QztBQUN4QztBQUNBSCxRQUFBQSxVQUFVLENBQUNHLENBQUQsQ0FBVixDQUFjRSxDQUFkLElBQW1CLENBQW5CLENBRndDLENBR3hDOztBQUNBLFlBQUlMLFVBQVUsQ0FBQ0csQ0FBRCxDQUFWLENBQWNFLENBQWQsSUFBbUIsQ0FBQyxFQUF4QixFQUE0QjtBQUN4QixlQUFLWixJQUFMLENBQVVhLFNBQVY7QUFDSCxTQU51QyxDQU94Qzs7O0FBQ0EsWUFBSU4sVUFBVSxDQUFDRyxDQUFELENBQVYsQ0FBY0UsQ0FBZCxJQUFtQixDQUFDLEVBQXhCLEVBQTRCO0FBQUUsZUFBS0UsWUFBTDtBQUFzQjs7QUFBQSxTQVJaLENBU3hDOztBQUNBLFlBQUlQLFVBQVUsQ0FBQ0csQ0FBRCxDQUFWLENBQWNFLENBQWQsSUFBbUIsQ0FBQyxHQUF4QixFQUE2QjtBQUN6QkwsVUFBQUEsVUFBVSxDQUFDRyxDQUFELENBQVYsQ0FBY0ssT0FBZDtBQUNIO0FBQ0o7QUFDSjs7QUFBQTtBQUNKLEdBNUNJO0FBOENMO0FBQ0FELEVBQUFBLFlBQVksRUFBRSx3QkFBWTtBQUN0QixRQUFJRSxJQUFJLEdBQUcxQixFQUFFLENBQUMyQixXQUFILENBQWUsS0FBS3ZCLFVBQXBCLENBQVg7QUFDQSxTQUFLYyxJQUFMLENBQVVVLFFBQVYsQ0FBbUJGLElBQW5CO0FBQ0FBLElBQUFBLElBQUksQ0FBQ0osQ0FBTCxHQUFTLEdBQVQ7QUFDQSxRQUFJTyxJQUFJLEdBQUcsQ0FBQyxHQUFaO0FBQUEsUUFBaUJDLElBQUksR0FBRyxHQUF4QjtBQUNBSixJQUFBQSxJQUFJLENBQUNLLENBQUwsR0FBU0YsSUFBSSxHQUFHRyxJQUFJLENBQUNDLE1BQUwsTUFBaUJILElBQUksR0FBR0QsSUFBeEIsQ0FBaEI7QUFDSCxHQXJESTtBQXVETDtBQUNBSyxFQUFBQSxZQUFZLEVBQUUsd0JBQVk7QUFDdEIsUUFBSWpCLFVBQVUsR0FBRyxLQUFLQyxJQUFMLENBQVVDLFFBQTNCOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsVUFBVSxDQUFDSSxNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUE0QztBQUN4Q0gsTUFBQUEsVUFBVSxDQUFDRyxDQUFELENBQVYsQ0FBY0ssT0FBZDtBQUNIOztBQUNELFNBQUtELFlBQUw7QUFDSDtBQTlESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lU3RhdHVzIH0gZnJvbSAnLi9lbnVtJztcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIC8vIOawtOeuoemihOWItui1hOa6kFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHBpcGVQcmVmYWI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGlwZVNwZWVkOiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7fSxcclxuXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoZ2FtZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICAvLyDoi6XmuLjmiI/kuI3lpITkuo7ov5vooYzkuK3vvIzliJnkuI3ov5vooYzlkI7nu63mk43kvZxcclxuICAgICAgICBpZiAodGhpcy5nYW1lLmdhbWVTdGF0dXMgPT0gR2FtZVN0YXR1cy5HYW1lX1BsYXlpbmcpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBwaXBlc0NoaWxkID0gdGhpcy5ub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHBpcGVzQ2hpbGQubGVuZ3RoOyBjKyspIHtcclxuICAgICAgICAgICAgICAgIC8vIOenu+WKqOawtOeuoVxyXG4gICAgICAgICAgICAgICAgcGlwZXNDaGlsZFtjXS54IC09IDE7XHJcbiAgICAgICAgICAgICAgICAvLyDliKTmlq3puJ/otorov4fmsLTnrqFcclxuICAgICAgICAgICAgICAgIGlmIChwaXBlc0NoaWxkW2NdLnggPT0gLTM0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmdhaW5TY29yZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g55Sf5oiQ5paw5rC0566hXHJcbiAgICAgICAgICAgICAgICBpZiAocGlwZXNDaGlsZFtjXS54ID09IC01MCkgeyB0aGlzLnNwYXduTmV3UGlwZSgpOyB9O1xyXG4gICAgICAgICAgICAgICAgLy8g6ZSA5q+B5rC0566hXHJcbiAgICAgICAgICAgICAgICBpZiAocGlwZXNDaGlsZFtjXS54IDw9IC0xNzApIHtcclxuICAgICAgICAgICAgICAgICAgICBwaXBlc0NoaWxkW2NdLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOeUn+aIkOaWsOawtOeuoVxyXG4gICAgc3Bhd25OZXdQaXBlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHBpcGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBpcGVQcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwaXBlKTtcclxuICAgICAgICBwaXBlLnggPSAxNzA7XHJcbiAgICAgICAgbGV0IG1pblkgPSAtMTAwLCBtYXhZID0gMTAwO1xyXG4gICAgICAgIHBpcGUueSA9IG1pblkgKyBNYXRoLnJhbmRvbSgpICogKG1heFkgLSBtaW5ZKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8g5byA5aeL5ri45oiP5pe277yM6YeN572u5rC0566h5L2N572uXHJcbiAgICByZXNldFBpcGVQb3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgcGlwZXNDaGlsZCA9IHRoaXMubm9kZS5jaGlsZHJlbjtcclxuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHBpcGVzQ2hpbGQubGVuZ3RoOyBjKyspIHtcclxuICAgICAgICAgICAgcGlwZXNDaGlsZFtjXS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3Bhd25OZXdQaXBlKCk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
