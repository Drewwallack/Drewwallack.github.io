// variables
var button1 = document.getElementById('button1')
var button2 = document.getElementById('button2')
var button3 = document.getElementById('button3')
var situationTitle = document.getElementById('situation-title')
var situationDescription = document.getElementById('situation-description')
var gameBorder = document.getElementById('game-container')
let gameTrack = 0
// game text
const titleI = 'Introduction'
const I = `Hearing soft rain patter on the metal trash cans and the concrete alleyway, you open your eyes to a foreign world. Confused at first, your worries are quelled by the soft sound of the rain and the sight of another creature staring at you, smiling. The smile feels good, comforting, but as you start to smile back, his smile fades into a look of distinct fear upon his face. His breathing quickens. You hope to calm him down, so you continue smiling, which only seems to make things worse. He starts walking away, and you start walking after him. The walk turns into a run, and after a few quick turns, you become lost in the dark of the dimly lit night.

Press 1 to attempt to search for a place to stay. Press 2 to stay the night on the sidewalk.`
const titleS1 = '1/1/22'
const S1 = `You travel to nearby shops and restaurants, which all turn out to be closed. Eventually, you stumble upon a dim 24 hour CVS, and attempt to enter. Immediately after entering, under the blinding fluorescent lights, another creature yelps and pulls out a black canister labeled, “pepper spray”

Press 1 to attempt to swat the pepper spray. Press 2 to run away. 
`
const titleS2 = '1/1/22'
const S2 = `As you travel for a bench to rest, you stumble on two small creatures walking together, hand-in-hand. They see you, and they run away screaming. A feeling of loneliness washes over you.

Pressing any number will advance the game.
`
const titleS3 = '1/1/22'
const S3 = `You swat the pepper spray out of the mans hand, displaying incredible strength that both the man and you did not expect to be true. In shock, the man stands still, and you begin to grab random objects. Soons, the night is lit with sirens and loud noises, and angry people barge into the store speaking some incomprehensible language. You sprint out of the store through a back door, but the person in the shop remembered enough detail for the police to construct a mediocre description of your face. You now have a rectangular piece of metal that lights up when touched, however.

You think it may be useful. Press 1 to attempt to use the device. Press 2 to fall asleep. 
`
const titleS4 = '1/1/22'
const S4 = `After sprinting out of the store, you trip on a curb and fall hard on the sidewalk and feel a sharp pain in your knee. Unable to do anything about the injury, you limp to an rare open field of grass and lay down, pledging to somehow try and act nicer tomorrow.

You fall asleep. Pressing any number will advance the game.
`
const titleS5 = '1/1/22'
const S5 = `Sulking to an ideal looking piece of grass, you find a rectangular piece of metal that lit up when touched.

You think it may be useful. Press 1 to attempt to use the device. Press 2 to fall asleep.
`
const titleS6 = '1/1/22'
const S6 = `You repeatedly keep clicking the device, but all you see is a lit up jumble of incoherent lights. You reflect on seeing other creatures being able to use the device easily, which adds to a distinct feeling of being an outcast. 

Nevertheless, pledging to figure out how to use the device, you go to sleep optimistic. Pressing any number will advance the game
`
const titleS7 = '1/2/22'
const S7 = `As the sun rises, you awake at dawn in a park. You hear the birds chirping, and a squirl comes up to you. You reflect on how the squirl is the only creature that did not scream and run away, and you feel comforted in nature. Believing that change in this attitude is a certain possibility, you begin walking around.

Every step you take, on every block, your fellow creatures scream and run away. Soon enough, your device vibrates and you see a picture of some ugly creature in your notifications, with some unintelligible text underneath it. Suddenly, in the window of some shop, you realize that the creature you saw on your phone was yourself indeed. 

Press 1 to attempt kindness. Press 2 to hide. Press 3 to try to display your humanity.
`
const titleS8 = '1/2/22'
const S8 = `As the sun rises, you awake at dawn in what now appears fully to be a park. You hear the birds chirping, and a squirl comes up to you. You reflect on how the squirl is the only creature that did not scream and run away, and you feel comforted in nature. Believing that change in this attitude is a certain possibility, you begin walking around the park.

Wandering around, you stumble on a barrier, which you promptly jump over. Out of the corner of your eyes, you see a look of shock on fellow creatures' faces through a plexiglass shield. You do not realize where you are, but as the creatures start screaming in awe, a sense of warmth washes over you. Although your current area is rather confined, you feel an urge to remain where the other creatures like you.

Press 1 to stay where you are. Press 2 to attempt to hop the barrier.
`
const titleS9 = null
const S9 = null
const titleS10 = '1/2/22'
const S10 = `You start running after another creature, and smiling. The creature running from you just speeds up, so you divert to another creature and do the same thing. All the while, you reflect on your reflection in the mirror, and assume that it is your appearance that makes the other creatures afraid of you. You figure they have probably not known another one of “your kind”. Nevertheless, you attempt kindness through making noises at your fellow creatures that feel increasingly distant. Feeling threatened you begin sprinting in the other direction and into another shop.

Once inside, feeling an intense emotion, you begin whining and pleading on your knees, but to no avail. All the remaining creatures inside are up against corners with their devices out pointed towards you. An intense feeling of isolation and anger washes over you. The anger materializes in a desire for your fellow creatures to experience the same feelings that you have. Maybe they would appreciate you then. 

Its time to make a decision. Press 1 to commit an act of violence. Press 2 to run away.
`
const titleS11 = '1/2/22-1/22/22'
const S11 = `You sprint away. Away from the creatures that are not like you, hoping to retreat to nature, where the creatures don't run away. Hiding in a bush in the park you slept in earlier, a feeling of hunger washes over you.

The pattern continues. For what seems to be an inconceivable amount of time, your fellow creatures scream and run whenever you emerge from your hiding place, the only place you feel safe. It’s been 20 days, and your energy is decreasing with the limited amount of food and water you have been able to consume, all the while you reflect on your unfortunate condition. You begin to feel intense anger once again, which compounded with an urge to eat, forces you to act.

Its time to make a decision. Press 1 to commit an act of revenge. Press 2 to remain in your condition.
`
const titleS12 = '1/2/22'
const S12 = `In an attempt to display your humanity, you get on your knees and act like the other creatures in screaming. Even though they keep running away, you persist. Minutes fly by, and suddenly you are surrounded by a circle of creatures in matching outfits that look menacing. Still, you think they may still be friendly and continue your acts. Shouting intensifies, and the men dont move.

In the blink of an eye, a sharp pain in your left shoulder. As your eyes roll back into your skull you witness the moments of your short life, and pent up optimistic hopefulness materializes into anger, which materializes into a need for revenge. You regain consciousness. 

Its time to make a decision. Press 1 to commit an act of revenge. Press 2 to surrender.`
const titleS13 = '1/2/22-1/2/62'
const S13 = `You stay where you are for an inconceivable amount of time. Having heard and been taught the language from zoo attendants, all of whom shocked you decided to remain in a tiny zoo when you could have easily escaped, you can now interact with humans. Instead of being afraid of you, they find you fascinating, especially because you have the ability to speak. However, you are still not able to form bonds with the humans and integrate like you wanted to.

You become old and frail, and witness the birth and death of many of your fellow animals. In your old ages, you reflect on your life, wondering if there could have been more to it.

Press 1 to hop the fence for a last effort at integration. Press 2 to remain.
`
const titleS14 = '1/2/62'
const S14 = `You hop the fence and escape at night, so as not to draw attention to yourself. You discover a device which lights up when touched on the ground in the park and fall asleep playing around with it.

Pressing any number will advance the game.
`
const titleS15 = null
const S15 = null
const titleS16 = 'An End.'
const S16 = `You begin swinging your arms at your fellow creatures as they scream and shout at you. Still, running on the fuels of anger alone, you resolve to continue fighting your fellow creatures with far inferior strength. Emotions rush over you. You seem to hate yourself even more every swing you take but you can’t stop yourself once begun.

Glass shatters, a loud BANG! Then, silence. 

You have reached an end of the game. Your life lasted only one day, but somehow it was filled with such intense emotions, that they got you killed. 

In the era of mindless consumption and social media, which feeds off your negative views of yourself for ad revenue, this short life span is a testament to the increased dangers of isolation and a lack of communication.

So, in the context of this game and the book, were the monster’s actions justified?

Thanks for Playing.
-Drew
`
const titleS17 = '1/22/22-4/13/65'
const S17 = `Rubbing wood together, you create sparks, which catch on fire, setting the bush ablaze. It’s been many days of hunger and sadness and you finally get the opportunity to look upon a creation of yours. One that created as much destruction as you think you have. Finally, you are satisfied. The previous desire for integration turns into a want for revenge in the blink of an eye. 

Days pass. Using items you steal from fellow creatures, you bring severe harm to them and never get caught. You become a national criminal. 

Reflecting on your years later in life, you feel a wave of sadness wash over you for the egregious acts you committed. Depressed, you are faced with a final choice. Press 1 to turn yourself into the police. Press 2 to remain.
`
const titleS18 = 'An End.'
const S18 = `ou remain in your comfort zone, but you soon learn that this world was simply not built for you. You die in your sleep one month after your creation. 

Posthumously, your creator stumbles upon your body. He does not say a word, nor feel any emotion. He moves on with his life in relief.

You have reached an end to the game. Your life only lasted one month, yet, you died a peaceful death with animals who don’t care about looks by your side.

Maybe your fellow creatures may have liked you. A fact: in order to live a happy life, you had to dehumanize yourself, because of the prejudices of others. I urge you to play again and explore other endings.

Thanks for Playing.
-Drew
`
const titleS19 = 'An End.'
const S19 = `As your mind races and your eyes blur, you start swinging at the creatures with the arm that isn’t in immense pain. The earth seems to come to a stop. You no longer feel emotion, and only hear your breath, which slows and comes to a stop, as does your heart.

A day after creation, you have died to the hands of your fellow creatures in the middle of manhattan.

You have reached an end to the game. Your life only lasted one day, but it was filled with bad decisions and violence caused by other humans, just because of the way you looked.

I urge you to play again and explore other endings.

Thanks for Playing.
-Drew
`
const titleS20 = 'An End.'
const S20 = `Shackled and carried away to a maximum security prison, you learn the language from other inmates. Over the course of your life, you remain in prison, never getting a date in court. Yet, in prison, you become happy. Your fellow inmates, now that you know how to speak, love your personality and find your story fascinating. In fact, the inmates of the prison have also experienced the feelings that you have gone through, and they can sympathize with your story. Forced to be around different people, you are no longer isolated and have people to confide in. 

With 50 years of good behavior, you are still never released, even though you are merely a scapegoat for the prejudice of the outside world.

You have reached an ending to the game. A seemingly somber ending, you lived a happy life for the most part by being around societal outcasts that know better than to judge a book by its cover.

Congratulations on achieving a relatively good ending. You were not integrated at all, but maybe that's the best reality in a prejudiced world.

Thanks for Playing.
-Drew
`
const titleS21 = '12/2/62-8/23/77'
const S21 = `You hop the fence and sprint out into the park beside you. Running away from what you now recognize as imprisonment, you are happy that you made the decision to leave. 

Days pass of repeating the pattern you have done in your early days. You hide and emerge only to attempt to get food and water without scaring the humans. One day, however, you meet a woman and her child who saw you at the zoo and became fascinated with your ability to speak and comprehend english. 

She runs after you, thinking you escaped the zoo, with the purpose of returning you. You assume her good intentions, so you let her take you back to her house. She decides to keep you as a pet, similar to the animals you saw at the zoo. Although your situation is slightly dehumanizing, you are happy if it means the rest of the family is happy.

Its time to make a choice. Press 1 to escape. Press 2 to remain.
`
const titleS22 = 'An End.'
const S22 = `You are reminded of the feeling of isolation and loneliness. You are hidden, isolated from human connect out of fear. 

As your life ends, you reflect on the experiences you have had in the world. You noticed that the only time when the humans were happy around you was when you were dehumanized so as to not be a human.

You have reached an end to the game. You lived a full life with an unfortunate end, albeit making some bad choices. The only time you were happy in life was actually when you were the furthest from integration, when you were dehumanized. Maybe that's the best reality in a prejudiced world. I urge you to play again to explore other possibilities.

Thanks for Playing.
-Drew
`
const titleS23 = 'An End.'
const S23 = `You stay at the house and live a relatively happy life until your death.
 
As your life ends, you reflect on the experiences you have had in the world. You noticed that the only time when the humans were happy around you was when you were dehumanized so as to not be a human.

You have reached an end to the game. You lived a full, happy life but the only time you were happy in life was actually when you were the furthest from integration, when you were dehumanized. Maybe that's the best reality in a prejudiced world.

Thanks for Playing.
-Drew
`
// game tracking
const gameTitleSequence = [titleI, titleS1, titleS2, titleS3, titleS4, titleS5, titleS6, titleS7, titleS8, titleS9, titleS10, titleS11, titleS12, titleS13, titleS14, titleS15, titleS16, titleS17, titleS18, titleS19, titleS20, titleS21, titleS22, titleS23]
const gameDescriptionSequence = [I, S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S14, S15, S16, S17, S18, S19, S20, S21, S22, S23]
const gameDescriptionSequenceButTheyAreStrings = ['I', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'S11', 'S12', 'S13', 'S14', 'S15', 'S16', 'S17', 'S18', 'S19', 'S20', 'S21', 'S22', 'S23']
const advance = {
    'IC1':1,
    'IC2':2,
    'S1C1':3,
    'S1C2':4,
    'S2C1':5,
    'S2C2':5,
    'S2C3':5,
    'S3C1':6,
    'S3C2':8,
    'S4C1':8,
    'S4C2':8,
    'S4C3':8,
    'S5C1':6,
    'S5C2':8,
    'S6C1':7,
    'S6C2':7,
    'S6C3':7,
    'S7C1':10,
    'S7C2':11,
    'S7C3':12,
    'S8C1':13,
    'S8C2':14,
    'S9C1':null,
    'S9C2':null,
    'S9C3':null,
    'S10C1':16,
    'S10C2':11,
    'S11C1':17,
    'S11C2':18,
    'S12C1':19,
    'S12C2':20,
    'S13C1':21,
    'S13C2':22,
    'S14C1':7,
    'S14C2':7,
    'S14C3':7,
    'S15C1':null,
    'S15C2':null,
    'S15C3':null,
    'S17C1':20,
    'S17C2':22,
    'S21C1':22,
    'S21C2':23

}
// main game
function game() {
    // story
    button1.style.opacity = 100
    button2.style.opacity = 100
    button3.style.opacity = 100
    if (gameTrack == 0||gameTrack == 1||gameTrack == 3||gameTrack == 5||gameTrack == 8||gameTrack == 10||gameTrack == 11||gameTrack == 12||gameTrack == 13||gameTrack == 17||gameTrack == 21) {
        button3.style.opacity = 0
    }
    if (gameTrack == 16||gameTrack == 18||gameTrack == 19||gameTrack == 20||gameTrack == 22||gameTrack == 23) {
        button1.style.opacity = 0
        button2.style.opacity = 0
        button3.style.opacity = 0
    }
    if (gameTrack == 10||gameTrack == 11||gameTrack == 12||gameTrack == 21) {
        button1.classList.replace('response', 'revenge')
        button2.classList.replace('response', 'revenge')
        button3.classList.replace('response', 'revenge')
        situationTitle.style.color = 'red'
        gameBorder.style.border = '5.5px solid red'
    } else {
        button1.classList.add('response')
        button2.classList.add('response')
        button3.classList.add('response')
        situationTitle.style.color = 'black'
        gameBorder.style.border = '3px solid black'
    }
    situationTitle.innerText = gameTitleSequence[gameTrack]
    situationDescription.innerText = gameDescriptionSequence[gameTrack]
    // advance the game
    button1.addEventListener('click', clickOn1)
    button2.addEventListener('click', clickOn2)
    button3.addEventListener('click', clickOn3)
}
function clickOn1() {
    gameTrack = advance[gameDescriptionSequenceButTheyAreStrings[gameTrack]+'C1']
    console.log(gameTrack)
    game()
}
function clickOn2() {
    gameTrack = advance[gameDescriptionSequenceButTheyAreStrings[gameTrack]+'C2']
    console.log(gameTrack)
    game()
}
function clickOn3() {
    gameTrack = advance[gameDescriptionSequenceButTheyAreStrings[gameTrack]+'C3']
    console.log(gameTrack)
    game()
}
button1.addEventListener('click', game)
button2.addEventListener('click', game)
button3.addEventListener('click', game)