$(document).ready(function() {
  $('#submitButton').onClick(function() {
    go();
  });
});





var alive = true;
var knightDamage = Math.random();
var victoryPoints = 0;
var fightWin = true;
function addVP(VPamount) {
    victoryPoints = victoryPoints+VPamount;
}
var knightFightingOdds = 4;
var fight = Math.floor(Math.random() * 10);
function fighting() {
    if (fight >= knightFightingOdds) {
        fightWin = true;
    }
    else {
        fightWin = false;
    }
}
function go() {
  alert("Hello! Welcome to the Errant Knight game!");
  alert("Instructions: This is a word-based game which means that it uses popup boxes like this one and simple commands to work the game. In this choose-your-own-adventure game, you will be asked questions that you must answer. Have fun!");
  var cheatYes = confirm("Do you have any cheat codes?");
}
//cheat codes
var allCheatNames = ["FREEVP"," SEASONEDFIGHTER", " LISTALLCODES"," BONUS", " FIGHT2KILL"];
if (cheatYes === true) {
    var cheatCode = prompt("Please enter your code:");
    if (cheatCode === "FREEVP") {
        victoryPoints = 1;
        alert("You now have "+victoryPoints+" VPs!");
        playGame();
    }
    if (cheatCode === "BONUS") {
        var bonusGame = prompt("Enter the name of the bonus game");
        if (bonusGame === "FIGHT2KILL") {
            fight2Kill();
        }
    }
    if (cheatCode === "SEASONEDFIGHTER") {
        knightFightingOdds = 3;
        playGame();
    }
    if (cheatCode === "LISTALLCODES") {
        alert("The cheat codes are: "+allCheatNames+". All the codes after BONUS are the codes for the bonus levels that you enter into the box that comes up after putting in BONUS. More codes coming soon!");
    }
}
else {
    playGame();
}
function fight2Kill() {
    alert("You are now playing the bonus game, Fight to Kill");
    alert("Same setup as Errant Knight regular game");
    alert("You will encounter many fights that you must do! You are trying to earn 3 VPs which can only be earned by winning fights");
    alert("You walked down the path and came upon a goblin toasting the remains of some long-dead person.");
    fighting();
    if (fightWin === true) {
        alert("You killed the goblin!");
        addVP(1);
        alert("You gained a VP!");
        alert("You continued walking and saw a witch who charged and tryed to poison you with her splash potions!");
        fighting();
        if (fighting === true) {
            alert("You fought the witch and killed her!");
            addVP(1);
            alert("You gained a VP!");
            alert("The witch's master (who was a vampire) jumped out of a tree and tried to kill you in revenge!");
            fighting();
            if (fightWin === true) {
                alert("You killed the vampire!");
                addVP(1);
            }
        else {
            alert("The vampire drank all your blood and you died!");
            alive = false;
        }
    }
            else {
            alert("The witch incinerated you.");
            alive = false;
        }
        }
    else {
        alert("The goblin won the fight and killed you");
        alive = false;
    }
}
function playGame() {
    //setup
alert("Set Up: You are an Errant Knight travelling across the land. You set out from the castle of your ancestors yesterday with the noble intention of Don Quixote; that is, to lead a life of saving the defensless and bringing order to chaos. Note: this is in the time of knights and not in the time of Don Quixote!");
var path1 = prompt("You are five miles away from home when you suddenly reach a fork in the road. One path goes up a hill, and the other descends into a valley. Which path do you take? Left or right?").toUpperCase();
switch(path1) {
    case 'LEFT':
        var view1 = confirm("You went up the hill. From here, you can see most of the surrounding lands. Do you choose to stay and look around?");
        switch(view1) {
            case true:
                var troll = prompt("You then see a huge green and brown troll down in a glen in the forest down below the hill with a large black cauldron steaming over a fire. You look to the edge of the glen and see a small child tied to a tree with troll-rope! Oh no! The troll is going to stew the poor little girl! Do you decide to stay where you are to formulate a plan, go down and rescue the child right then, run away, or rescue the girl and then steal the troll's gold? Please use numbers for your answer (i.e., the first option would be 1 and the second would be 2 and so on).").toUpperCase();
                switch(troll) {
                    //death
                    case '1':
                        alert("While you were thinking, the troll cooked the little girl, ate her, smelled you, found you, snuck up on you, captured you, stewed you, ate you, and you died screaming.");
                        alive = false;
                    break;
                    case '2':
                        alert("You ran down as fast you could drew your sword, sliced the bonds of the little girl who quickly thanked you and ran home to her mommy and daddy, and then you faced the troll who was armed with a formidable looking war-club.");
                        //fighting
                        fighting();
                        if (fightWin === true) {
                                alert("You slew the troll and earned two Victory Points!");
                                addVP(2);
                                alert("You gained 2 Victory Points and now have a total of "+victoryPoints+" Victory Points!");
                                continue1();
                        }
                        else {
                            alert("You struck at the troll but your sword slipped out of your hand and the troll tried to kill you, but he missed by a hairsbreadth.");
                            var stayDie = confirm("Do you choose to stay and attempt to kill the troll without your sword or do you flee? Yes for stay, No for flee.");
                            //death
                            if (stayDie === true) {
                                alert("Before you could try to attack again, the troll bashed your brains out with his club");
                                alive = false;
                            }
                            else {
                                alert("You ran away with the speed of lightning. A sword sat sticking straight up out of a tree nearby. You of course needed a sword, so you walked up and tried to pry it loose by pushing it down from its diagonal position on the side of the large oak. A strange *creak* noise came from the tree behind you. A small door with a stairway leading down opened in the seemingly normal tree behind you!");
                                var downStairs = confirm("Do you choose to go down the stairs?");
                                //death
                                if (downStairs === true) {
                                    alert("Down the stairs, there is a large, dimly lit room. You turn around, scanning the interior of the room for any signs of foes. Suddenly, a huge werewolf jumps out of nowhere and mauls you! You die!");
                                    alive = false;
                                }
                                else {
                                    alert("You run away and hide in the boughs of a nearby tree to watch what happens. A mean looking man with a great deal of facial and body hair come ambling up the stairs to see who or what opened the secret door. You quickly realize that the secret tree is inhabited by werewolves!");
                                    var fightWolf = confirm("Do you want to try to rush the werewolf now when he is in the shape of a man?");
                                    if (fightWolf === true) {
                                        alert("You ran at the wolf and tried to attack him with a large stick you found laying near the tree you were hiding in.");
                                        fighting();
                                        if (fightWin === true) {
                                            alert("You hit the wolf and knocked him out cold. He regained consciousness an hour later, only to tell you that the duke and his family that used to live near your house were captured by the evil goblin king and his cronies. The werewolf then dies.");
                                            alert("After burying the dead werewolf, you went off to the duke's castle.");
                                            alert("At the castle, it turns out, to your great dismay, that it is heavily guarded by goblin sentries.");
                                            var plan777 = prompt("Do you rush the castle immediately, take out the sentries with a bow and then rush the castle, or stay behind and figure out a plan? Use numbers 1-3 to indicate your answer.").toUpperCase();
                                            switch(plan777) {
                                                case '1':
                                                    alert("You rush the castle but one of the sentries spies you and takes you out with a well-aimed arrow. You die! GAME OVER!!!");
                                                    alive = false;
                                                break;
                                                case '2':
                                                    alert("You took out one of the sentries and while you were reloading your bow, two others nailed you! GAME OVER!!!");
                                                    alive = false;
                                                break;
                                                case '3':
                                                    alert("In the morning, you rose early because you had devised a daring plan to rescue the duke and family.");
                                                    alert("Your plan: Scout around to find the side door. Make a small fire near the main gate. Throw fire sticks and things at the main gate to distract guards. Run to side door. Break it down and rush inside. Kill a goblin guard. Steal its armour and hide your armour in a closet. Pretend to be a goblin. Find location of duke. Sneak in, arm the duke. You, the duke, and his family break out and escape to the duke's cousin's castle which was only a mile away.");
                                                    alert("You found the side door but to your dismay, it had a large troll with a formidable war club guarding it. You make the fire and threw stuff at the main gate. This, luckily, brought even the troll over to see what was going on. While the side door was unguarded, you rushed inside and hid in a corridor.");
                                                    var corridor = prompt("You wandered down the corridor cautiously when you came to a fork. One path led up and the other down. Which path do you take? The left path going down or the right path going up?").toUpperCase();
                                                    switch(corridor) {
                                                        case 'left':
                                                            alert("You went down a flight of stairs when you came upon a single goblin wielding a dagger. You quickly dispatched him and disguised yourself with his armour. Just ahead, you entered a guard room with five armed goblins. One, evidently the leader of the bunch, called out to you to go watch cell 666. You went down the passageway labeled 'Devil Row'. There was a sign with the number 666 and the words 'Death to the Duke' crudely inscribed. This was the duke's cell! What luck! You handed him a sword and unlocked the door with the key you stole from the dead goblin.");
                                                            alert("He pointed to the cell next to him containing his family. Your key didn't work so you used your sword to cut the lock. They came out and all followed you up the path. Out above, you encountered only a couple goblins who proved to be no match for your and the duke's excellent swordsmanship. As you ran out the side door and into the open, a loud and hard laugh rent the air with its harsh tones. The king goblin (closer to the size and brawn of a troll than a goblin) was standing by the door with his sword drawn! The duke and his family kept running.");
                                                            var fightKing = confirm("Do you stay and fight to buy the duke and his family time to escape or do you try to make a run for it with them? Click yes to stay and no to run");
                                                            switch(fightKing) {
                                                                case true:
                                                                    addVP(1);
                                                                    alert("You earned a VP for your bravery. You now have "+victoryPoints+" VPs.");
                                                                    fighting();
                                                                    if (fightWin === true) {
                                                                        alert("You slew the Goblin King and earned one Victory Point!");
                                                                        addVP(2);
                                                                        alert("You gained 1 Victory Point and now have a total of "+victoryPoints+" Victory Points!");
                                                                    }
                                                                    else {
                                                                        alert("You struck at the Goblin King but he nimbly dodged it and quickly dispatched you. You died!");
                                                                        alive = false;
                                                                    }
                                                            }
                                                        break;
                                                        //death
                                                        case false:
                                                            alert("You ran but the Goblin King ran faster. He caught up the you and beheaded you with a single stroke of his mighty sword and then murdered the duke and his family in a similar fashion.");
                                                            alive = false;
                                        }
                                                    break;
                                                    //death
                                                    case 'right':
                                                        alert("You went up. You ran right into the main dining room where the king goblin was having a feast with all his friends. Ten armed guards and two trolls jumped on you and killed you immediately. You died.");
                                                        alive = false;
                                                    break;
                                                    default:
                                                        alert("Sorry, that isn't a valid answer!");
                                        }
                                        }
                                    }
                                    //death
                                    else {
                                        alert("You tried to run away before anything happened but the werewolf smelled you and quickly changed into wolf form and killed you! You died!");
                                        alive = false;
                                    }
                                }
                            }
                        }
                        //end fighting
                        function continue1() {
                        var moveOn = confirm("It is nearly twilight. Would you like to stay where you are for the night or move out to find a camp elsewhere? Hit 'yes' if you want to stay and 'no' if you want to leave.");
                        switch(moveOn) {
                            case true:
                                alert("You stayed and camped for the night. You were wise for not wandering out in an enchanted forest at night!");
                                addVP(1);
                                alert("You have earned another VP for your wisdom! You now have "+victoryPoints+" VPs!");
                            break;
                            //death
                            case false:
                                alert("You went further on down the path. It quickly became dark and you could not see what lied ahead. An evil witch jumped down from one of the trees and put a spell on you that turned you into a frog. The troll that you slew had a cousin who was a hobgoblin. He just so happened to be walking through the forest when he saw you as a frog and squashed you in revenge! You die!");
                                alive = false;
                            break;
                        }
                        }
                    break;
                    //death
                    case '3':
                        alert("You ran away but you forgot your sword back on the hill top. A goblin jumps out of a tree and decapitates you. GAME OVER!");
                        alive = false;
                    break;
                    case '4':
                        alert("You were able to free the child who had time to make a run for her home. You then grabbed the troll's bag of gold! You ran back up the hill and made camp for the night while the troll was still trying to figure out why he didn't have his bag of gold anymore.");
                        addVP(1);
                        alert("You have earned a Victory Point for the gold you earned! Hooray! You now have "+victoryPoints+" VPs!");
                        alert("A tall sage ambled slowly up the path toward you.");
                        alert("The sage tells you his name is Scootie Bootie. He tells you that if you have a moment to spare, he will give you directions to a large castle which was the residence of a wealthy duke and his family until a horde of goblins came and put them in prison and inhabited the castle. You of course want to find the castle to save the duke and his family.");
                        alert("The sage, Scootie Bootie, then whistles and calls his magical black and white doggie name Gingita who comes to him and says, 'how can I help?' The sage asks for the dust that will turn into a path to the castle. Gingita hands Scootie Bootie the dust who tells you to throw it on the ground in front of him and follow the orange path it makes. You thank him. He dissapears with Gingita and you immediately throw the dust and follow the path.");
                        alert("By noontide, you are still walking.");
                        alert("By evening, you are still walking.");
                        alert("By twilight, you are still walking");
                        alert("By nightfall, you finally arrive at the castle only to find that there are goblin sentries everywhere!");
                        var plan = prompt("Do you rush the castle immediately, take out the sentries with a bow and then rush the castle, or stay behind and figure out a plan? Use numbers 1-3 to indicate your answer.").toUpperCase();
                        switch(plan) {
                            case '1':
                                alert("You rush the castle but one of the sentries spies you and takes you out with a well-aimed arrow. You die! GAME OVER!!!");
                                alive = false;
                            break;
                            case '2':
                                alert("You took out one of the sentries and while you were reloading your bow, two others nailed you! GAME OVER!!!");
                                alive = false;
                            break;
                            case '3':
                                alert("In the morning, you rose early because you had devised a daring plan to rescue the duke and family.");
                                alert("Your plan: Scout around to find the side door. Make a small fire near the main gate. Throw fire sticks and things at the main gate to distract guards. Run to side door. Break it down and rush inside. Kill a goblin guard. Steal its armour and hide your armour in a closet. Pretend to be a goblin. Find location of duke. Sneak in, arm the duke. You, the duke, and his family break out and escape to the duke's cousin's castle which was only a mile away.");
                                alert("You found the side door but to your dismay, it had a large troll with a formidable war club guarding it. You make the fire and threw stuff at the main gate. This, luckily, brought even the troll over to see what was going on. While the side door was unguarded, you rushed inside and hid in a corridor.");
                                var corridor = prompt("You wandered down the corridor cautiously when you came to a fork. One path led up and the other down. Which path do you take? The left path going down or the right path going up?").toUpperCase();
                                switch(corridor) {
                                    case 'left':
                                        alert("You went down a flight of stairs when you came upon a single goblin wielding a dagger. You quickly dispatched him and disguised yourself with his armour. Just ahead, you entered a guard room with five armed goblins. One, evidently the leader of the bunch, called out to you to go watch cell 666. You went down the passageway labeled 'Devil Row'. There was a sign with the number 666 and the words 'Death to the Duke' crudely inscribed. This was the duke's cell! What luck! You handed him a sword and unlocked the door with the key you stole from the dead goblin.");
                                        alert("He pointed to the cell next to him containing his family. Your key didn't work so you used your sword to cut the lock. They came out and all followed you up the path. Out above, you encountered only a couple goblins who proved to be no match for your and the duke's excellent swordsmanship. As you ran out the side door and into the open, a loud and hard laugh rent the air with its harsh tones. The king goblin (closer to the size and brawn of a troll than a goblin) was standing by the door with his sword drawn! The duke and his family kept running.");
                                        var fightKing = confirm("Do you stay and fight to buy the duke and his family time to escape or do you try to make a run for it with them? Click yes to stay and no to run");
                                        switch(fightKing) {
                                            case true:
                                                addVP(1);
                                                alert("You earned a VP for your bravery. You now have "+victoryPoints+" VPs.");
                                                fighting();
                                                if (fightWin === true) {
                                                        alert("You slew the Goblin King and earned one Victory Point!");
                                                        addVP(2);
                                                        alert("You gained 1 Victory Point and now have a total of "+victoryPoints+" Victory Points!");
                                                    }
                                                    else {
                                                    fighting2 = false;
                                                    alert("You struck at the Goblin King but he nimbly dodged it and quickly dispatched you. You died!");
                                                    alive = false;
                                                    }
                                                }
                                            break;
                                            //death
                                            case false:
                                                alert("You ran but the Goblin King ran faster. He caught up the you and beheaded you with a single stroke of his mighty sword and then murdered the duke and his family in a similar fashion.");
                                                alive = false;
                                        }
                                    break;
                                    case 'right':
                                        alert("You went up. You ran right into the main dining room where the king goblin was having a feast with all his friends. Ten armed guards and two trolls jumped on you and killed you immediately. You died.");
                                        alive = false;
                                    break;
                                    default:
                                        alert("Sorry, that isn't a valid answer!");
                                }
                            break;
                            default:
                                alert("Sorry, I didn't understand your answer!");
}
                    break;
                    default:
                        alert("Sorry, I didn't understand your answer!");
                }
       
    break;
    case 'RIGHT':
        var fast = confirm("You went down to the valley. The road turns out to become fairly steep and untrodden. Do you choose to speed up to get to the bottom quicker?");
        switch(fast) {
            //death
            case true:
                alert("You ran so fast that you didn't see the cliff in front of you in time and you fell and died! GAME OVER!");
                alive = false;
            break;
            //death
            case false:
                alert("You slowed your pace and then tripped on a rock in the path which sent you tumbling down the hill and off a cliff leaving you dead at the bottom. GAME OVER!");
                alive = false;
            break;
        }
    break;
    default:
        alert("Sorry, that isn't a valid answer!");
}
}
if (victoryPoints >= 3) {
    alert("You have earned "+victoryPoints+" Victory Points and have won the game! HOORAY!");
    alert("Thank you for playing Errant Knight by apeggs2000!");
}
if (alive === false) {
    alert("GAME OVER!!!");
    alert("You had "+victoryPoints+" Victory Points!");
    alert("Thank you for playing Errant Knight by apeggs2000!");
}
