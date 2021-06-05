
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