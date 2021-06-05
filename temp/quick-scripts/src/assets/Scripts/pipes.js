"use strict";
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