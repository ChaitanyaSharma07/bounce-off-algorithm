
function bounceOff(sprite_1, sprite_2) {
    if (sprite_1.y - sprite_2.y < sprite_2.height/2 + sprite_1.height/2
      && sprite_2.y - sprite_1.y < sprite_2.height/2 + sprite_1.height/2) {
       return true;
  
  } else {
    return false;
  }
  
  
  }