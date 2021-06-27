@namespace
class SpriteKind:
    specialfx = SpriteKind.create()
def setupLevel(num: number):
    global seagress, 水母, mine, reflecting_water, mySprite
    if current_level == 0:
        scene.set_background_color(1)
        scene.set_background_image(assets.image("""
            160地圖1
        """))
        tiles.set_tilemap(tilemap("""
            層級2
        """))
        scene.camera_follow_sprite(turtle)
        for index in range(5):
            seagress = sprites.create(assets.image("""
                水草
            """), SpriteKind.food)
            tiles.place_on_random_tile(seagress, assets.tile("""
                transparency16
            """))
            水母 = sprites.create(assets.image("""
                水母
            """), SpriteKind.food)
            tiles.place_on_random_tile(水母, assets.tile("""
                transparency16
            """))
            mine = sprites.create(assets.image("""
                炸彈
            """), SpriteKind.enemy)
            tiles.place_on_random_tile(mine, assets.tile("""
                transparency16
            """))
    elif current_level == 1:
        tiles.set_tilemap(tilemap("""
            層級1
        """))
        scene.set_background_image(assets.image("""
            地圖160-128
        """))
        reflecting_water = sprites.create(assets.image("""
            地圖160-128
        """), SpriteKind.specialfx)
        reflecting_water.set_velocity(88, 80)
        mySprite = sprites.create(img("""
                . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . .
            """),
            SpriteKind.player)
        reflecting_water.z = -10
        reflecting_water.set_flag(SpriteFlag.RELATIVE_TO_CAMERA, True)
def playIDreamedTheWorld():
    pass
def playBackgroundMusic():
    pass
def playLastNightIHad():
    pass
def playIDreamedISaw():
    pass
def animateDugong():
    pass
mySprite: Sprite = None
reflecting_water: Sprite = None
mine: Sprite = None
水母: Sprite = None
seagress: Sprite = None
current_level = 0
turtle: Sprite = None
projectile_count = 0
turtle = sprites.create(assets.image("""
    烏龜
"""), SpriteKind.player)
levels_count = 2
setupLevel(current_level)
animateDugong()
pause(1000)
game.show_long_text("turtles are adorable marine mammals that live in shallow waters and love seagrass.",
    DialogLayout.CENTER)
game.show_long_text("But plans for an airbase in Okinawa threaten to destroy their home.",
    DialogLayout.CENTER)