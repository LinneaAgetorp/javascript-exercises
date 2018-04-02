class PlayerState {
    static IDLE     = 'IDLE';
    static PLAYING  = 'PLAYING';
    static PAUSED   = 'PAUSED';

    constructor(player) {
        this.player = player;
    }
    play();
    pause();
    stop();
}


class IdleState extends PlayerState {
    constructor(player) {
        super(player); //syftar på "superklassens" konstruktor, PlayerState

    }

    play() { // player kommer från klassen Player
        this.player.setState(PlayerState.PLAYING);
    }
}

class PlayingState extends PlayerState {
    constructor(player) {
        super(player);
    }

    pause() {
        this.player.setState(PlayerState.PAUSED);
    }

    stop() {
        this.player.setState(PlayerState.IDLE);
    }
}

class PausedState extends PlayerState {
    constructor(player) {
        super(player);
    }

    play() {
        this.player.setState(PlayerState.PLAYING);
    }

    stop() {
        this.player.setState(PlayerState.IDLE);
    }
}

class Player {
    states = {
        [PlayerState.IDLE]:     new IdleState(this), //det här förstår jag inte, new ... (this)
        [PlayerState.PLAYING]:  new PlayingState(this),
        [PlayerState.PAUSED]:   new PausedState(this)
    };

    currentState = PlayerState.IDLE;

    setState(newState) { //förstår inte this
        this.currentState = newState;
        this.status();
    }

    play() {
        this.states[this.currentState].play();
    }

    pause() {
        this.states[this.currentState].pause();
    }

    stop() {
        this.states[this.currentState].stop();
    }

    status() {
        console.log(`Current state for player is: ${this.currentState}`);
    }
}

const player = new Player();

player.status();
player.play();
player.pause();
player.pause();
player.play();
player.stop();