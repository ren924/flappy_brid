import { GameStatus } from './enum';
cc.Class({
    extends: cc.Component,
    properties: {
        // 小鸟移动速度
        bird_speed: 0,
        // 游戏结束图片
        gameOverSp: {
            default: null,
            type: cc.Node
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // 监听Canvas触摸事件
        var touchReceiver = cc.Canvas.instance.node;
        touchReceiver.on('touchstart', this.onTouchStart, this);
        touchReceiver.on('touchend', this.onTouchEnd, this);
        // 默认不显示游戏结束图
        this.gameOverSp.active = false;
        // 碰撞检测
        this.CollManager = cc.director.getCollisionManager();
    },

    init: function (game) {
        this.game = game;
    },

    onDestroy() {
        // 取消触摸事件监听
        var touchReceiver = cc.Canvas.instance.node;
        touchReceiver.off('touchstart', this.onTouchStart, this);
        touchReceiver.off('touchend', this.onTouchEnd, this);
    },

    start() { },

    update(dt) {
        // 当游戏状态为进行中时开始运动
        if (this.game.gameStatus == GameStatus.Game_Playing) {
            this.bird_speed -= 0.05;
            this.node.y += this.bird_speed;
            // 判断边界
            if (this.node.y >= 256 || this.node.y <= -256) {
                this.gameOver();
            }
        }

    },

    // 触摸开始时
    onTouchStart(event) {
        // 播放小鸟飞行音乐
        this.game.playFlySound();
        this.bird_speed = 2;
    },

    // 触摸结束时
    onTouchEnd(event) {
        this.bird_speed = 0;
    },

    // 点击开始游戏按钮后
    birdGameStart: function () {
        //  隐藏游戏结束图
        this.gameOverSp.active = false;
        // 重置小鸟位置
        this.node.y = 0;
        // 开启碰撞检测
        this.CollManager.enabled = true;
    },

    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionEnter(other, self) {
        this.gameOver();
    },

    gameOver() {
        this.game.gameOver();
        // 关闭碰撞检测
        this.CollManager.enabled = false;
        // 显示游戏结束图
        this.gameOverSp.active = true;
    },
});
