import { GameStatus } from './enum';
cc.Class({
    extends: cc.Component,

    // 水管预制资源
    properties: {
        pipePrefab: {
            default: null,
            type: cc.Prefab
        },

        pipe_speed: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {},

    init: function (game) {
        this.game = game;
    },

    start() {
    },

    update(dt) {
        // 若游戏不处于进行中，则不进行后续操作
        if (this.game.gameStatus == GameStatus.Game_Playing) {

            let pipesChild = this.node.children;
            for (let c = 0; c < pipesChild.length; c++) {
                // 移动水管
                pipesChild[c].x -= 1;
                // 判断鸟越过水管
                if (pipesChild[c].x == -34) {
                    this.game.gainScore();
                }
                // 生成新水管
                if (pipesChild[c].x == -50) { this.spawnNewPipe(); };
                // 销毁水管
                if (pipesChild[c].x <= -170) {
                    pipesChild[c].destroy();
                }
            }
        };
    },

    // 生成新水管
    spawnNewPipe: function () {
        let pipe = cc.instantiate(this.pipePrefab);
        this.node.addChild(pipe);
        pipe.x = 170;
        let minY = -100, maxY = 100;
        pipe.y = minY + Math.random() * (maxY - minY);
    },

    // 开始游戏时，重置水管位置
    resetPipePos: function () {
        let pipesChild = this.node.children;
        for (let c = 0; c < pipesChild.length; c++) {
            pipesChild[c].destroy();
        }
        this.spawnNewPipe();
    }
});
