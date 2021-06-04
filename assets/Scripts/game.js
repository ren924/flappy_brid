import {GameStatus}  from './enum';
const Bird = require('bird');
// 游戏状态
// const GameStatus = {
//     Game_Ready:0,    //准备
//     Game_Playing:1, // 进行中
//     Game_Over: 2,   //结束
// }

cc.Class({
    extends: cc.Component,

    properties: {
        Bg0: {
            default: null,
            type: cc.Node
        },
        Bg1: {
            default: null,
            type: cc.Node
        },
        BirdSp: {
            default: null,
            type: Bird
        },
        // ScoreLabel引用
        ScoreLabel: {
            default: null,
            type: cc.Label
        },
          // 得分音效资源
        scoreAudio: {
            default: null,
            type: cc.AudioClip
        },
        // 水管预制资源
        pipePrefab: {
            default: null,
            type: cc.Prefab
        },
        pipe:{
            default: null,
            type: cc.Node
        },
        // 游戏得分
        gameScore: 0,
        // 游戏状态
        gameStatus: GameStatus.Game_Ready,

    },

    onLoad () {
     
    },

    start () {
        this.spawnNewPipe();
        // 初始化bird
        this.node.getChildByName("Bird").getComponent('bird').init(this)
    },

    update (dt) {
        // 若游戏不在进行中，则不进行后续操作
        if(this.gameStatus != GameStatus.Game_Playing) return

        // 移动背景图
        this.Bg0.x-=1
        this.Bg1.x-=1

        if( this.Bg0.x <= -288)  this.Bg0.x  = 288;
        if( this.Bg1.x <= -288)  this.Bg1.x  = 288;

        // 若游戏结束，则不进行后续操作
        if(this.gameStatus == GameStatus.Game_Over) return
        // 移动水管
        this.pipe.x -= 1;
        if(this.pipe.x == -this.node.getChildByName("Bird").width){
            this.gainScore();
        }
        if(this.pipe.x <= -170){
            this.pipe.x = 170;
            let minY = -120,maxY = 120;
            this.pipe.y = minY + Math.random()*(maxY - minY);
            this.pipe.destroy();
            this.spawnNewPipe();
        }

    },
    // 生成新水管
    spawnNewPipe: function(){
        // let newPipe = cc.instantiate(this.pipePrefab);
        // this.node.addChild(newPipe);
        //  // 为新节点设置位置
        // newPipe.setPosition(position);

        this.pipe = cc.instantiate(this.pipePrefab);
        this.node.getChildByName('Pipes').addChild(this.pipe)
        this.pipe.x = 170;
        let minY = -120,maxY = 120;
        this.pipe.y = minY + Math.random()*(maxY - minY);
    },
    // 游戏结束
    gameOver: function(){
        this.gameStatus = GameStatus.Game_Over;
        this.ScoreLabel.string = this.gameScore.toString();
    },
    // 更新分数
    gainScore: function (pos) {
        this.gameScore++;
        this.ScoreLabel.string = this.gameScore.toString();
        // 播放得分音效
        cc.audioEngine.playEffect(this.scoreAudio, false);
    },

    // 重置分数
    resetScore: function () {
        this.gameScore = 0;
        this.ScoreLabel.string = this.gameScore.toString();
    },

    // 重置水管位置
    resetPipePos: function(){
        this.pipe.x = 170
    }
    
});
