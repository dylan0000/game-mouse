namespace SpriteKind {
    export const MyShot = SpriteKind.create()
    export const mouse = SpriteKind.create()
    export const mini = SpriteKind.create()
    export const recall = SpriteKind.create()
}
/**
 * Instructions:
 * 
 * WASD to move character
 * 
 * IJKL to move mouse
 * 
 * space bar to fire
 * 
 * to copy, change variable names and sprite images
 * 
 * pink scribble in the middle is for testing
 * 
 * shoot at pink thing 15 times to destroy
 * 
 * keep in mind that the second projectile variable (MyShot) is
 * 
 * the variable that will interact with objects, you can rename
 * 
 * Projectile variable type does nothing to affect
 */
function boss_attack_1 () {
    pause(1000)
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.follow(mySprite)
    }
    pause(5000)
}
function makeBos () {
    for (let value of scene.getTilesByType(1)) {
        mysprite9 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 7 . . . . . 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 1 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 1 . 1 7 7 7 7 7 7 7 7 7 7 
. . . . . . . 7 7 7 7 7 7 7 7 7 
. . . . . . . 1 7 7 7 7 7 7 7 7 
. . . . . . . . . 7 7 7 7 7 7 7 
. . . . . . . 1 7 7 7 7 7 7 7 7 
. . . 1 . 1 . 7 7 7 7 7 7 7 7 7 
. . . 1 . 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . 7 7 7 7 7 7 7 . . . . . 
`, SpriteKind.Enemy)
        mysprite8 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 7 . . . . . 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 1 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 1 . 1 7 7 7 7 7 7 7 7 7 7 
. . . . . . . 7 7 7 7 7 7 7 7 7 
. . . . . . . 1 7 7 7 7 7 7 7 7 
. . . . . . . . . 7 7 7 7 7 7 7 
. . . . . . . 1 7 7 7 7 7 7 7 7 
. . . 1 . 1 . 7 7 7 7 7 7 7 7 7 
. . . 1 . 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . 7 7 7 7 7 7 7 . . . . . 
`, SpriteKind.Enemy)
        mysprite7 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 7 . . . . . 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 1 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 1 . 1 7 7 7 7 7 7 7 7 7 7 
. . . . . . . 7 7 7 7 7 7 7 7 7 
. . . . . . . 1 7 7 7 7 7 7 7 7 
. . . . . . . . . 7 7 7 7 7 7 7 
. . . . . . . 1 7 7 7 7 7 7 7 7 
. . . 1 . 1 . 7 7 7 7 7 7 7 7 7 
. . . 1 . 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . 7 7 7 7 7 7 7 . . . . . 
`, SpriteKind.Enemy)
        myspritE66 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 7 . . . . . 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 1 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 1 . 1 7 7 7 7 7 7 7 7 7 7 
. . . . . . . 7 7 7 7 7 7 7 7 7 
. . . . . . . 1 7 7 7 7 7 7 7 7 
. . . . . . . . . 7 7 7 7 7 7 7 
. . . . . . . 1 7 7 7 7 7 7 7 7 
. . . 1 . 1 . 7 7 7 7 7 7 7 7 7 
. . . 1 . 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . 7 7 7 7 7 7 7 . . . . . 
`, SpriteKind.Enemy)
        mysprite5 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 7 . . . . . 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 1 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 1 . 1 7 7 7 7 7 7 7 7 7 7 
. . . . . . . 7 7 7 7 7 7 7 7 7 
. . . . . . . 1 7 7 7 7 7 7 7 7 
. . . . . . . . . 7 7 7 7 7 7 7 
. . . . . . . 1 7 7 7 7 7 7 7 7 
. . . 1 . 1 . 7 7 7 7 7 7 7 7 7 
. . . 1 . 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . 7 7 7 7 7 7 7 . . . . . 
`, SpriteKind.Enemy)
        mysprite0 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 7 . . . . . 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 1 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 1 . 1 7 7 7 7 7 7 7 7 7 7 
. . . . . . . 7 7 7 7 7 7 7 7 7 
. . . . . . . 1 7 7 7 7 7 7 7 7 
. . . . . . . . . 7 7 7 7 7 7 7 
. . . . . . . 1 7 7 7 7 7 7 7 7 
. . . 1 . 1 . 7 7 7 7 7 7 7 7 7 
. . . 1 . 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . 7 7 7 7 7 7 7 . . . . . 
`, SpriteKind.Enemy)
        scene.place(value, mysprite9)
        scene.place(value, mysprite8)
        scene.place(value, mysprite7)
        scene.place(value, myspritE66)
        scene.place(value, mysprite5)
        scene.place(value, mysprite0)
    }
    for (let value of scene.getTilesByType(4)) {
        mysprite6 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 1 . . . . . 1 1 1 . . . 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 1 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 1 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 1 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 1 
. . . 1 . 1 1 1 1 1 1 1 1 1 1 1 
. . . . . . . 1 1 1 1 1 1 1 1 1 
. . . . . . . 1 1 1 1 1 1 1 1 1 
. . . . . . . . . 1 1 1 1 1 1 1 
. . . . . . . 1 1 1 1 1 1 1 1 1 
. . . 1 . 1 . 1 1 1 1 1 1 1 1 1 
. . . 1 . 1 1 1 1 1 1 1 1 1 1 1 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 1 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 1 
. . . . 1 1 1 1 1 1 1 . . . . . 
`, SpriteKind.recall)
        scene.place(value, mysprite6)
    }
    boss_attack_1()
}
sprites.onOverlap(SpriteKind.MyShot, SpriteKind.mini, function (sprite, otherSprite) {
    hits += 1
    sprite.destroy()
    if (hits >= 15) {
        otherSprite.destroy()
        hits = 0
    }
})
sprites.onOverlap(SpriteKind.MyShot, SpriteKind.Enemy, function (sprite, otherSprite) {
    hits += 1
    sprite.destroy()
    if (hits >= 15) {
        otherSprite.destroy()
        hits = 0
    }
})
sprites.onDestroyed(SpriteKind.mini, function (sprite) {
    makeBos()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite3 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 . . . . 1 . . . . . 
. . . . . 1 . . . . 1 . . . . . 
. . . . . 1 . . . . 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 0, 1)
    mySprite3.follow(mySprite2, 200)
    pause(100)
    myX = mySprite2.x
    MyY = mySprite2.y
    for (let value of sprites.allOfKind(SpriteKind.mouse)) {
        value.destroy()
    }
    reset_mouse()
    for (let value2 of sprites.allOfKind(SpriteKind.Projectile)) {
        value2.setKind(SpriteKind.MyShot)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.MyShot, function (sprite, otherSprite) {
    otherSprite.follow(mySprite3, 200)
})
function reset_mouse () {
    mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . 2 2 . 2 2 . . . . . 
. . . . 2 . . . . . 2 . . . . 
. . . 2 . . . . . . . 2 . . . 
. . . 2 . . . 2 . . . 2 . . . 
. . . . . . 2 2 2 . . . . . . 
. . . 2 . . . 2 . . . 2 . . . 
. . . 2 . . . . . . . 2 . . . 
. . . . 2 . . . . . 2 . . . . 
. . . . . 2 2 . 2 2 . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
`, SpriteKind.mouse)
    mySprite2.setFlag(SpriteFlag.Ghost, true)
    controller.player2.moveSprite(mySprite2, 150, 150)
    mySprite2.setPosition(myX, MyY)
}
let MyY = 0
let myX = 0
let mySprite3: Sprite = null
let hits = 0
let mysprite6: Sprite = null
let mysprite0: Sprite = null
let mysprite5: Sprite = null
let myspritE66: Sprite = null
let mysprite7: Sprite = null
let mysprite8: Sprite = null
let mysprite9: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . . . 1 1 1 1 f 1 1 1 . . . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
reset_mouse()
mySprite2.setPosition(mySprite.x, mySprite.y)
let mySprite4 = sprites.create(img`
. . . . . . 3 . . . . . . . . . 
. . . . . 3 3 3 . . . . . . . . 
. . . . . 3 3 3 3 3 3 . . 3 . . 
. . . . 3 3 3 3 3 3 3 . . 3 . . 
. . . . 3 3 3 3 3 3 3 . 3 3 . . 
. . . . 3 3 3 3 3 3 3 3 3 . . . 
. . . 3 3 3 3 3 3 3 3 3 3 . . . 
. . . 3 3 3 3 3 3 3 3 3 3 . . . 
. . . . 3 3 3 3 3 3 . 3 3 . . . 
. . . . 3 . 3 3 3 3 . 3 3 . . . 
. . . . 3 . 3 3 3 3 . 3 3 . . . 
. . . . . 3 3 3 3 . . 3 3 . . . 
. . . . . 3 . . 3 3 3 3 3 . . . 
. . . . . . . . . . . 3 . . . . 
. . . . . . . . . . . 3 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.mini)
scene.setTileMap(img`
. . . . . . . . . . . . 
. . . . . . . . . . . . 
1 . . . . . . . . . . 1 
. . . . . . . . . . . . 
1 . . . . . . . . . . 1 
. . . . . . . . . . . . 
1 . . . . . . . . . . 1 
. . . . . . . . . . . . 
`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 4))
scene.centerCameraAt(96, 50)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
