import { GameState } from '@battlesnake/objects';

export function doNotMoveBackwards(gameState: GameState): { [key: string]: boolean; } {
  const isMoveSafe: { [key: string]: boolean; } = {
    up: true,
    down: true,
    left: true,
    right: true
  };

  // We've included code to prevent your Battlesnake from moving backwards
  const myHead = gameState.you.body[0];
  const myNeck = gameState.you.body[1];

  if (myNeck.x < myHead.x) {        // Neck is left of head, don't move left
    isMoveSafe['left'] = false;

  } else if (myNeck.x > myHead.x) { // Neck is right of head, don't move right
    isMoveSafe['right'] = false;

  } else if (myNeck.y < myHead.y) { // Neck is below head, don't move down
    isMoveSafe['down'] = false;

  } else if (myNeck.y > myHead.y) { // Neck is above head, don't move up
    isMoveSafe['up'] = false;
  }
  return isMoveSafe;
}
