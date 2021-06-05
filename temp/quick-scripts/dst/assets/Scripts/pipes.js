
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