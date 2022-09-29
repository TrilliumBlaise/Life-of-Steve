//The different messages and instructions that are passed to the user.
export const messages = {
  //Tutorial messags
  speed: {
    text: `Periodically, the speed at which obstacles fall will increase.`,
    buttons: ['ok'],
    tutorial: true,
  },
  duck: {
    text: `Throughout the game you will see obstacles that cover the entire play area. Hold the Down arrow key or the S key to duck under these obstacles.`,
    buttons: ['ok'],
    tutorial: true,
  },
  delay: {
    text: `As you progress through the game, the distance between each obstacle will start to shrink.`,
    buttons: ['ok'],
    tutorial: true,
  },
  //Other messages
  lose: {
    text: `You lose! Play again?`,
    buttons: ['restart', 'main menu'],
    tutorial: false,
  },
  win: {
    text: `You have finished the level!`,
    buttons: ['next', 'main menu'],
    tutorial: false,
  },
  pause: {
    text: `Pause`,
    buttons: ['resume', 'save', 'main menu'],
    tutorial: false,
  },
  sure: {
    text: `Your progress may not have been saved! Are you sure you'd like to go back to the Main Menu?`,
    buttons: ['yes', 'no'],
    tutorial: false,
  },
  save: {
    text: `Your game has been saved!`,
    buttons: ['ok'],
    tutorial: false,
  },
  finished: {
    text: `Congratulations you have finished the whole game!`,
    buttons: ['main menu'],
    tutorial: false,
  },
}
