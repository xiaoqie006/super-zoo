namespace SpriteKind {
    export const specialfx = SpriteKind.create()
    export const camer_dolly = SpriteKind.create()
    export const flag = SpriteKind.create()
    export const animal = SpriteKind.create()
    export const 熊 = SpriteKind.create()
    export const 馬 = SpriteKind.create()
    export const animal_2 = SpriteKind.create()
    export const star = SpriteKind.create()
}
function Level8 () {
    turtle.say("Level8", 1000)
    鹿.setFlag(SpriteFlag.AutoDestroy, true)
    info.setScore(0)
    levels = 8
    controller.moveSprite(turtle)
    scene.setBackgroundColor(8)
    scene.setBackgroundImage(assets.image`地圖160-128`)
    tiles.setTilemap(tilemap`第八關`)
    scene.cameraFollowSprite(turtle)
    for (let index = 0; index < 1; index++) {
        for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
            seagress = sprites.create(assets.image`水草`, SpriteKind.Food)
            tiles.placeOnTile(seagress, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
            水母 = sprites.create(assets.image`水母`, SpriteKind.Food)
            tiles.placeOnTile(水母, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
            mine = sprites.create(assets.image`炸彈`, SpriteKind.Enemy)
            tiles.placeOnTile(mine, value)
        }
    }
    flag_captured = 0
    turtle.ay = 300
    turtle.setFlag(SpriteFlag.StayInScreen, true)
    tiles.placeOnTile(turtle, tiles.getTileLocation(1, 6))
    controller.moveSprite(turtle, 100, 0)
    兔子 = sprites.create(assets.image`兔子`, SpriteKind.animal)
    tiles.placeOnTile(兔子, tiles.getTileLocation(147, 10))
}
function Level10 () {
    turtle.say("Level10", 1000)
    斑馬.setFlag(SpriteFlag.AutoDestroy, true)
    info.setScore(0)
    levels = 10
    scene.setBackgroundColor(8)
    scene.setBackgroundImage(assets.image`地圖160-128`)
    tiles.setTilemap(tilemap`第十關`)
    scene.cameraFollowSprite(turtle)
    for (let index = 0; index < 1; index++) {
        for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
            seagress = sprites.create(assets.image`水草`, SpriteKind.Food)
            tiles.placeOnTile(seagress, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
            水母 = sprites.create(assets.image`水母`, SpriteKind.Food)
            tiles.placeOnTile(水母, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
            mine = sprites.create(assets.image`炸彈`, SpriteKind.Enemy)
            tiles.placeOnTile(mine, value)
        }
    }
    flag_captured = 0
    turtle.ay = 300
    turtle.setFlag(SpriteFlag.StayInScreen, true)
    tiles.placeOnTile(turtle, tiles.getTileLocation(1, 6))
    controller.moveSprite(turtle, 100, 0)
    長頸鹿 = sprites.create(assets.image`長頸鹿`, SpriteKind.animal)
    tiles.placeOnTile(長頸鹿, tiles.getTileLocation(166, 10))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (turtle.isHittingTile(CollisionDirection.Bottom) || (turtle.tileKindAt(TileDirection.Bottom, assets.tile`myTile`) || turtle.tileKindAt(TileDirection.Center, assets.tile`myTile0`))) {
        turtle.vy = 0 - Math.sqrt(19200)
    }
})
function Level2 () {
    turtle.say("Level2", 1000)
    馬.setFlag(SpriteFlag.AutoDestroy, true)
    info.setScore(0)
    current_level = 2
    controller.moveSprite(turtle, 100, 100)
    scene.setBackgroundImage(assets.image`160地圖1`)
    tiles.setTilemap(tilemap`第二關`)
    scene.setBackgroundColor(1)
    scene.cameraFollowSprite(turtle)
    for (let index = 0; index < 1; index++) {
        for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
            seagress = sprites.create(assets.image`水草`, SpriteKind.Food)
            tiles.placeOnTile(seagress, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
            mine = sprites.create(assets.image`炸彈`, SpriteKind.Enemy)
            tiles.placeOnTile(mine, value)
        }
    }
    flag_captured = 0
    turtle.ay = 300
    turtle.setFlag(SpriteFlag.StayInScreen, true)
    tiles.placeOnTile(turtle, tiles.getTileLocation(1, 6))
    controller.moveSprite(turtle, 100, 0)
    熊 = sprites.create(assets.image`熊`, SpriteKind.animal)
    tiles.placeOnTile(熊, tiles.getTileLocation(67, 10))
}
function playBackgroundMusic () {
    music.setTempo(180)
    for (let index = 0; index < 2; index++) {
        playLastNightIHad()
    }
}
function Level3 () {
    info.setScore(0)
    turtle.say("Level3", 1000)
    熊.setFlag(SpriteFlag.AutoDestroy, true)
    current_level = 3
    controller.moveSprite(turtle)
    scene.setBackgroundColor(1)
    scene.setBackgroundImage(assets.image`160地圖1`)
    tiles.setTilemap(tilemap`第三關`)
    scene.cameraFollowSprite(turtle)
    for (let index = 0; index < 1; index++) {
        for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
            seagress = sprites.create(assets.image`水草`, SpriteKind.Food)
            tiles.placeOnTile(seagress, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
            水母 = sprites.create(assets.image`水母`, SpriteKind.Food)
            tiles.placeOnTile(水母, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
            mine = sprites.create(assets.image`炸彈`, SpriteKind.Enemy)
            tiles.placeOnTile(mine, value)
        }
    }
    flag_captured = 0
    turtle.ay = 300
    turtle.setFlag(SpriteFlag.StayInScreen, true)
    tiles.placeOnTile(turtle, tiles.getTileLocation(1, 6))
    controller.moveSprite(turtle, 100, 0)
    獅子 = sprites.create(assets.image`獅子`, SpriteKind.animal)
    tiles.placeOnTile(獅子, tiles.getTileLocation(86, 10))
}
function Level11 () {
    turtle.say("Level11", 1000)
    長頸鹿.setFlag(SpriteFlag.AutoDestroy, true)
    info.setScore(0)
    levels = 11
    scene.setBackgroundColor(8)
    scene.setBackgroundImage(assets.image`地圖160-128`)
    tiles.setTilemap(tilemap`第十一關`)
    scene.cameraFollowSprite(turtle)
    for (let index = 0; index < 1; index++) {
        for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
            seagress = sprites.create(assets.image`水草`, SpriteKind.Food)
            tiles.placeOnTile(seagress, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
            水母 = sprites.create(assets.image`水母`, SpriteKind.Food)
            tiles.placeOnTile(水母, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
            mine = sprites.create(assets.image`炸彈`, SpriteKind.Enemy)
            tiles.placeOnTile(mine, value)
        }
    }
    flag_captured = 0
    turtle.ay = 300
    turtle.setFlag(SpriteFlag.StayInScreen, true)
    tiles.placeOnTile(turtle, tiles.getTileLocation(1, 6))
    controller.moveSprite(turtle, 100, 0)
    長頸鹿 = sprites.create(assets.image`myImage`, SpriteKind.star)
    tiles.placeOnTile(長頸鹿, tiles.getTileLocation(185, 9))
}
function Level1 (num: number) {
    if (current_level == 0) {
        scene.setBackgroundColor(1)
        tiles.setTilemap(tilemap`第一關`)
        scene.cameraFollowSprite(turtle)
        for (let index = 0; index < 1; index++) {
            for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
                水母 = sprites.create(assets.image`水母`, SpriteKind.Food)
                tiles.placeOnTile(水母, value)
            }
            for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
                mine = sprites.create(assets.image`炸彈`, SpriteKind.Enemy)
                tiles.placeOnTile(mine, value)
            }
        }
        scene.setBackgroundImage(assets.image`160地圖1`)
    } else if (current_level == 1) {
        tiles.setTilemap(tilemap`層級1`)
        scene.setBackgroundImage(assets.image`地圖160-128`)
        camera_focus = sprites.create(img`
            2 . 
            . 2 
            `, SpriteKind.camer_dolly)
        camera_focus.y = 300
        camera_focus.vx = 20
        scene.cameraFollowSprite(camera_focus)
    }
    current_level = 1
    flag_captured = 0
    turtle.ay = 300
    turtle.setFlag(SpriteFlag.StayInScreen, true)
    tiles.placeOnTile(turtle, tiles.getTileLocation(1, 6))
    controller.moveSprite(turtle, 100, 0)
    馬 = sprites.create(assets.image`馬`, SpriteKind.animal)
    tiles.placeOnTile(馬, tiles.getTileLocation(47, 10))
}
function Level5 () {
    turtle.say("Level5", 1000)
    狐狸.setFlag(SpriteFlag.AutoDestroy, true)
    info.setScore(0)
    levels = 5
    controller.moveSprite(turtle)
    scene.setBackgroundColor(8)
    scene.setBackgroundImage(assets.image`地圖160-128`)
    tiles.setTilemap(tilemap`第五關`)
    scene.cameraFollowSprite(turtle)
    for (let index = 0; index < 1; index++) {
        for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
            seagress = sprites.create(assets.image`水草`, SpriteKind.Food)
            tiles.placeOnTile(seagress, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
            水母 = sprites.create(assets.image`水母`, SpriteKind.Food)
            tiles.placeOnTile(水母, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
            mine = sprites.create(assets.image`炸彈`, SpriteKind.Enemy)
            tiles.placeOnTile(mine, value)
        }
    }
    flag_captured = 0
    turtle.ay = 300
    turtle.setFlag(SpriteFlag.StayInScreen, true)
    tiles.placeOnTile(turtle, tiles.getTileLocation(1, 6))
    controller.moveSprite(turtle, 100, 0)
    牛 = sprites.create(assets.image`牛`, SpriteKind.animal)
    tiles.placeOnTile(牛, tiles.getTileLocation(127, 10))
}
function Level7 () {
    turtle.say("Level7", 1000)
    企鵝.setFlag(SpriteFlag.AutoDestroy, true)
    info.setScore(0)
    levels = 7
    controller.moveSprite(turtle)
    scene.setBackgroundColor(8)
    scene.setBackgroundImage(assets.image`地圖160-128`)
    tiles.setTilemap(tilemap`第七關`)
    scene.cameraFollowSprite(turtle)
    for (let index = 0; index < 1; index++) {
        for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
            seagress = sprites.create(assets.image`水草`, SpriteKind.Food)
            tiles.placeOnTile(seagress, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
            水母 = sprites.create(assets.image`水母`, SpriteKind.Food)
            tiles.placeOnTile(水母, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
            mine = sprites.create(assets.image`炸彈`, SpriteKind.Enemy)
            tiles.placeOnTile(mine, value)
        }
    }
    flag_captured = 0
    turtle.ay = 300
    turtle.setFlag(SpriteFlag.StayInScreen, true)
    tiles.placeOnTile(turtle, tiles.getTileLocation(1, 6))
    controller.moveSprite(turtle, 100, 0)
    鹿 = sprites.create(assets.image`鹿`, SpriteKind.animal)
    tiles.placeOnTile(鹿, tiles.getTileLocation(147, 10))
}
function playLastNightIHad () {
    music.playTone(147, music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(175, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(147, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(147, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(131, music.beat(BeatFraction.Whole))
    music.playTone(147, music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(208, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(175, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(147, music.beat(BeatFraction.Whole))
}
function Level9 () {
    turtle.say("Level9", 1000)
    兔子.setFlag(SpriteFlag.AutoDestroy, true)
    info.setScore(0)
    levels = 9
    controller.moveSprite(turtle, 100, 100)
    scene.setBackgroundColor(8)
    scene.setBackgroundImage(assets.image`地圖160-128`)
    tiles.setTilemap(tilemap`第九關`)
    scene.cameraFollowSprite(turtle)
    for (let index = 0; index < 1; index++) {
        for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
            seagress = sprites.create(assets.image`水草`, SpriteKind.Food)
            tiles.placeOnTile(seagress, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
            水母 = sprites.create(assets.image`水母`, SpriteKind.Food)
            tiles.placeOnTile(水母, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
            mine = sprites.create(assets.image`炸彈`, SpriteKind.Enemy)
            tiles.placeOnTile(mine, value)
        }
    }
    flag_captured = 0
    turtle.ay = 300
    turtle.setFlag(SpriteFlag.StayInScreen, true)
    tiles.placeOnTile(turtle, tiles.getTileLocation(1, 6))
    controller.moveSprite(turtle, 100, 0)
    斑馬 = sprites.create(assets.image`斑馬`, SpriteKind.animal)
    tiles.placeOnTile(斑馬, tiles.getTileLocation(166, 10))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.star, function (sprite, otherSprite) {
    if (count == 14300) {
        game.showLongText("恭喜通關！", DialogLayout.Center)
        game.over(true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.animal, function (sprite, otherSprite) {
    if (count == 800) {
        pause(500)
        Level2()
    } else if (count == 1700) {
        pause(500)
        Level3()
    } else if (count == 2700) {
        pause(500)
        Level4()
    } else if (count == 3800) {
        pause(500)
        Level5()
    } else if (count == 5000) {
        pause(500)
        Level6()
    } else if (count == 6300) {
        pause(500)
        Level7()
    } else if (count == 7700) {
        pause(500)
        Level8()
    } else if (count == 9200) {
        pause(500)
        Level9()
    } else if (count == 10800) {
        pause(500)
        Level10()
    } else if (count == 12500) {
        pause(500)
        Level11()
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    count += 100
    info.changeScoreBy(100)
    pause(200)
    otherSprite.destroy(effects.spray, 500)
    turtle.vy = 0 - Math.sqrt(4000)
    projectile_count += 1
})
function Level4 () {
    turtle.say("Level4", 1000)
    獅子.setFlag(SpriteFlag.AutoDestroy, true)
    info.setScore(0)
    levels = 4
    controller.moveSprite(turtle)
    scene.setBackgroundColor(8)
    scene.setBackgroundImage(assets.image`地圖160-128`)
    tiles.setTilemap(tilemap`第四關`)
    scene.cameraFollowSprite(turtle)
    for (let index = 0; index < 1; index++) {
        for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
            seagress = sprites.create(assets.image`水草`, SpriteKind.Food)
            tiles.placeOnTile(seagress, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
            水母 = sprites.create(assets.image`水母`, SpriteKind.Food)
            tiles.placeOnTile(水母, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
            mine = sprites.create(assets.image`炸彈`, SpriteKind.Enemy)
            tiles.placeOnTile(mine, value)
        }
    }
    flag_captured = 0
    turtle.ay = 300
    turtle.setFlag(SpriteFlag.StayInScreen, true)
    tiles.placeOnTile(turtle, tiles.getTileLocation(1, 6))
    controller.moveSprite(turtle, 100, 0)
    狐狸 = sprites.create(assets.image`狐狸`, SpriteKind.animal)
    tiles.placeOnTile(狐狸, tiles.getTileLocation(107, 10))
}
function Level6 () {
    turtle.say("Level6", 1000)
    牛.setFlag(SpriteFlag.AutoDestroy, true)
    info.setScore(0)
    levels = 6
    controller.moveSprite(turtle)
    scene.setBackgroundColor(8)
    scene.setBackgroundImage(assets.image`地圖160-128`)
    tiles.setTilemap(tilemap`第六關`)
    scene.cameraFollowSprite(turtle)
    for (let index = 0; index < 1; index++) {
        for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
            seagress = sprites.create(assets.image`水草`, SpriteKind.Food)
            tiles.placeOnTile(seagress, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
            水母 = sprites.create(assets.image`水母`, SpriteKind.Food)
            tiles.placeOnTile(水母, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
            mine = sprites.create(assets.image`炸彈`, SpriteKind.Enemy)
            tiles.placeOnTile(mine, value)
        }
    }
    flag_captured = 0
    turtle.ay = 300
    turtle.setFlag(SpriteFlag.StayInScreen, true)
    tiles.placeOnTile(turtle, tiles.getTileLocation(1, 6))
    controller.moveSprite(turtle, 100, 0)
    企鵝 = sprites.create(assets.image`企鵝`, SpriteKind.animal)
    tiles.placeOnTile(企鵝, tiles.getTileLocation(147, 10))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.flag, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 200)
    turtle.vy = 0 - Math.sqrt(12000)
    effects.confetti.startScreenEffect(500)
    flag_captured += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 100)
    pause(200)
    game.over(false)
})
let count = 0
let 企鵝: Sprite = null
let 牛: Sprite = null
let 狐狸: Sprite = null
let camera_focus: Sprite = null
let 獅子: Sprite = null
let 熊: Sprite = null
let 馬: Sprite = null
let 長頸鹿: Sprite = null
let 斑馬: Sprite = null
let 兔子: Sprite = null
let flag_captured = 0
let mine: Sprite = null
let 水母: Sprite = null
let seagress: Sprite = null
let levels = 0
let 鹿: Sprite = null
let current_level = 0
let turtle: Sprite = null
turtle = sprites.create(assets.image`烏龜`, SpriteKind.Player)
let projectile_count = 0
let levels_count = 2
controller.moveSprite(turtle, 100, 100)
Level1(current_level)
pause(1000)
game.showLongText("動物園裡發生了火災", DialogLayout.Top)
game.showLongText("根據動物管理員的統計", DialogLayout.Top)
game.showLongText("只有11隻動物成功活下", DialogLayout.Top)
game.showLongText("你可以幫忙找找嗎?", DialogLayout.Top)
game.showLongText("遊戲玩法如下:", DialogLayout.Top)
game.showLongText("吃到水草、水母獲得100", DialogLayout.Top)
game.showLongText("碰到炸彈重新開始", DialogLayout.Top)
game.showLongText("第一關要800才可救動物", DialogLayout.Top)
game.showLongText("後面每關依次增加100", DialogLayout.Top)
game.showLongText("遊戲方法如下：", DialogLayout.Top)
game.showLongText("方向鍵：左右移動", DialogLayout.Top)
game.showLongText("A鍵：跳躍", DialogLayout.Top)
info.setScore(0)
forever(function () {
    playBackgroundMusic()
})
