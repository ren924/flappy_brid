import {GameStatus}  from './enum';
cc.Class({
    extends: cc.Component,
    properties: {

        // 小鸟移动速度
        bird_speed: 0,
        gameOverSp:{
            default: null,
            type: cc.Node
        },
        gameStartBtn: {
            default: null,
            type: cc.Button,
        },
         // 飞翔音效
        flySound: {
            default: null,
            type: cc.AudioClip,
        },
        gameOverSound: {
            default: null,
            type: cc.AudioClip,
        },
        playGame: false,
        CollManager: null,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // 监听Canvas触摸事件
        var touchReceiver = cc.Canvas.instance.node;
        touchReceiver.on('touchstart', this.onTouchStart, this);
        touchReceiver.on('touchend', this.onTouchEnd, this);
        // 默认不显示游戏结束图
        this.gameOverSp.active = false;
        // 为开始游戏按钮绑定事件
        this.gameStartBtn.node.on(cc.Node.EventType.TOUCH_END,this.touchGameStartBtn,this);
        // 碰撞检测
        this.CollManager = cc.director.getCollisionManager();
    },
    init: function(game) {
        this.game = game
    },

    onDestroy() {

        // 取消触摸事件监听
        var touchReceiver = cc.Canvas.instance.node;
        touchReceiver.off('touchstart', this.onTouchStart, this);
        touchReceiver.off('touchend', this.onTouchEnd, this);

    },

    start() {
        
    },
    

    update(dt) {
        if(this.playGame){
            this.bird_speed -= 0.05;
            this.node.y += this.bird_speed;

            // 判断边界
            if(this.node.y >= 256 || this.node.y <= -256){
                this.gameOver();
            }
        }
        
    },

    // 触摸开始时
    onTouchStart(event) {
        this.playFlySound();
        this.bird_speed = 2;
    },

    // 触摸结束时
    onTouchEnd(event) {
        this.bird_speed = 0;
    },

    // 触摸开始游戏按钮
    touchGameStartBtn(event){
        // 改变游戏状态
        this.game.gameStatus = GameStatus.Game_Playing;
        // 开始游戏时重置分数
        this.game.resetScore();
        this.game.resetPipePos();
        this.playGame = true;
        // 隐藏开始按钮
        this.gameStartBtn.node.active = false;                                   
        //  隐藏游戏结束图
        this.gameOverSp.active = false;
        // this.node.parent.spawnNewPipe()
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

     gameOver(){
        this.game.gameOver();
        this.playGame = false;
        this.CollManager.enabled = false;
        this.gameOverSp.active = true;
        // 显示开始游戏按钮
        this.gameStartBtn.node.active = true;  
        // 播放游戏结束音效
        cc.audioEngine.playEffect(this.gameOverSound, false);
    },
    // 播放飞翔音效
    playFlySound(){
        // 若游戏不在进行中则不播放音乐 
        if( this.game.gameStatus != GameStatus.Game_Playing) return;
        cc.audioEngine.playEffect(this.flySound, false);
    },
});
