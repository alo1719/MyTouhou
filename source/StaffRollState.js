function StaffRollState(game) {
    this.parent = GameState;
    this.parent.call(this, game);
    this.count = 0;
    this.finished = false;
}

__inherit(StaffRollState, GameState);


StaffRollState._MESSAGE_SPEED = 1;


StaffRollState.prototype.init = function () {
    this.finished = false;
    this._soundBGM(Game._BGM_ENDING);
};


StaffRollState.prototype.runStep = function () {
    this.count++;
};


StaffRollState.prototype.updateDisplay = function (surface) {
    this.game.clear(surface);
    this._displayBG(surface);
    this._displayMessage(surface);
};


StaffRollState.prototype._displayBG = function (surface) {
    surface.save();
    surface.fillStyle = 'rgb( 0, 0, 0 )';
    surface.fillRect(0, 0, this.getWidth(), this.getHeight());
    surface.fillStyle = 'rgb( 255, 255, 255 )';
    surface.fillRect(0, 50, this.getWidth(), this.getHeight() - 100);

    surface.globalAlpha = 0.05;
    surface.drawImage(this.game.getImage(Game._IMG_TITLE_BG),
        0,
        0,
        TitleState._WIDTH,
        TitleState._HEIGHT,
        0,
        0,
        this.getWidth(),
        this.getHeight());

    surface.restore();
};


StaffRollState.prototype._displayMessage = function (surface) {

    var messages = [];
    messages.push('关于游戏');
    messages.push('');
    messages.push('');
    messages.push('游戏引擎');
    messages.push('WebGL');
    messages.push('');
    messages.push('');
    messages.push('图形库');
    messages.push('glMatrix');
    messages.push('');
    messages.push('');
    messages.push('原作');
    messages.push('东方Project');
    messages.push('上海アリス幻樂団');
    messages.push('');
    messages.push('');
    messages.push('开发');
    messages.push('2016141463067');
    messages.push('张心诣');

    surface.save();
    surface.font = '30pt Dengxian';
    surface.textAlign = 'center';
    surface.textBaseline = 'middle';
    surface.fillStyle = 'rgb( 0, 0, 0 )';

    var dh = 50;
    var max = (this.getHeight() / 2 + dh * messages.length) / StaffRollState._MESSAGE_SPEED;
    var count = (this.count > max) ? max : this.count;

    // TODO: temporal
    if (count >= max)
        this.finished = true;

    var h = this.getHeight() - count * StaffRollState._MESSAGE_SPEED;

    for (var i = 0; i < messages.length; i++) {
        surface.fillText(messages[i], this.getWidth() / 2, h + dh * i);
    }

    surface.restore();
};


StaffRollState.prototype.handleKeyDown = function (e) {
    if (e.keyCode === 90) {
        if (!this.finished)
            return;
        this._soundEffect(Game._SE_SELECT);
        this.game.notifyQuitStage(true);
    }
};


StaffRollState.prototype.handleKeyUp = function (e) {
};
