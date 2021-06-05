"use strict";
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