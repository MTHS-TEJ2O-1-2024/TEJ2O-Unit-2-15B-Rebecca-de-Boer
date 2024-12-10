/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: 
 * Created on: dec 2024
 * This program moves sprite in a square
*/

//variables 
let sprite:game.LedSprite = null
let loopbox = 0
let loopside = 0

input.onButtonPressed(Button.A, function () {
    //setup
    basic.pause(500)
    basic.clearScreen()
    loopbox = 0
    loopside = 0 
    sprite = game.createSprite(0, 0)
    sprite.set(LedSpriteProperty.X,loopside)
    //loop to move the sprite around
    while(loopbox <= 3) {
        while(loopside <= 5){
            sprite.move(1)
            loopside++
            basic.pause(500)
        }
        sprite.turn(Direction.Right, 90)
        loopside = 0
        loopbox++
    }
    //reset
    sprite.delete()
    basic.showIcon(IconNames.Happy)
    
})