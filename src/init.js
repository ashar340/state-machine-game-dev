import game from './gameState';

const TICK_RATE = 3000;


async function init() {
  console.log('starting the game');

  let nextTimeToTick = Date.now();

  //using a closure
  function nextAnimationFrame() {
    const now = Date.now();

    if(nextTimeToTick <= now ) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }

  requestAnimationFrame(nextAnimationFrame);
}

init();
