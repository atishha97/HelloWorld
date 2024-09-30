import random # To assign the player their Hogwarts' house
import time # To add delay

# An object defining the player!
player = { 
    "name": "name", 
    "house": "house",
    "hasHexKey": False,
    "wand": False
    }

def displayHogwartsCastle(): # Display Hogwarts Castle
    print("                                                  /\\")
    print("                                                 /  \\")
    print("                                                /    \\")
    print("                                               /      \\")
    print("                                              /        \\")
    print("                             _______         /     _    \\")
    print("                            /       \\       /     / \\    \\")
    print("                           /  O   O  \\     /     /   \\    \\")
    print("                     _____/     ^     \\___/     /  O  \\    \\")
    print("                    /     \\           /   \\    /   ^   \\    \\")
    print("                   /   O   \\  u     u/  O  \\__/         \\    \\")
    print("                  /    ^    \\       /   ^   \\ \\    u     \\    \\")
    print("            ___o_/           \\_____/         \\ \\         /\\  / \\___")
    print("           /     \\     H     /     \\    O    /  \\       /  \\/     o\\")
    print("      ____/   O   \\    O    /   O   \\   ^   /    \\_____/  O \\  O    \\")
    print("     /    \\   ^    \\   G   /    ^    \\     /    _/     \\  ^  \\/  ^   \\")
    print("    /  O   \\       /   W  /           \\___/    /   O    \\    /        \\")
    print("   /   ^    \\_____/   A  /    _____    \\______/     ^    \\__/    O     \\")
    print("  /         /  \\    R  /    /     \\          \\           /  \\     ^     \\")
    print(" /    O     \\   \\  T  /    /   O   \\    O     \\    O    /\\   \\          /")
    print("/     ^      \\  / S  /    /    ^    \\   ^      \\   ^   /  \\   \\________/")

def gameIntroduction(): # Game introduction
   displayHogwartsCastle()
   print("Welcome to Hogwarts, transfer student.")
   print("What name shall be entered into the school's roster?")
   player["name"] = input("Enter your name > ")
   print("\nWell,", player["name"], " you've barely set foot on the grounds when an urgent summons arrives from the Headmaster's office.\nIt seems your Hogwarts adventure is about to begin in earnest.\n") 

def houseSort(): # Assigns Hogwarts houses
    print("However, " + player["name"] + " before we delve into the urgent matter at hand, there's a crucial Hogwarts tradition to uphold.\nThe Sorting Hat awaits to determine your house!\n")
    player["house"] = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
    input("Press ENTER to begin the sorting ceremony")
    print("\nThe Sorting Hat has decided...")
    time.sleep(2)
    print("    *    .  *       .   *   .      *    *   .     .  *")
    print("  .    *        .   *      *     .    .     *   .")
    print("      .   * .     .   *   .     *   *  .  *   .    *")
    print(" *  .    .    *    .    *    .      *   .    .  *")
    print("   *    .   .    *     .    *  .     .  *   .    *  .")
    time.sleep(2)
    print("🏠", random.choice(player["house"]), "🏠")

def missionDecision(): # Provides the player options to choose a door
    print("\nYou stand in a torchlit Hogwarts corridor facing four doors:")
    print("1. An oak door")
    print("2. A polished silver door with a hexagonal keyhole")
    print("3. A locked iron door")
    playerDecision = input("Choose a door by entering 1, 2, or 3 to begin your adventure")
    if playerDecision == "1":
        doorOne()
    elif playerDecision == "2":
        doorTwo()
    elif playerDecision == "3":
        doorThree()
    else:
        print("\nInvalid choice. Please try again.")
        time.sleep(2)
        missionDecision()
    
def taskOne(): # Door one, task one
    print("Your mission has begun!")
    playerInput = input("Type 'bubbling cauldron' as fast as you can while only using your nose.")
    if playerInput == "bubbling cauldron":
        print("Ha! Next task, coming up!")
        taskTwo()
    else:
        print ("Sorry, try again! 👻")
        taskOne()

def taskTwo(): # Door one, task two
    playerInput = input("Write out the word 'PEEVES' backwards. It's for my new secret code!")
    if playerInput == "SEVEEP":
        print("YAY! My secret code is complete!") 
        print("Thanks for the laugh, HAHA! I know nothing of your wand. Now, off you go!\n")
        time.sleep(2)
        print("\nHe suddenly pushes you out of the door, slamming it on your face.😨\nYou find yourself back in the corridor, exactly where you started.")
        missionDecision()
    else:
        print("Sorry, try again! 👻")
        taskTwo()

def doorOne(): # If the player chooses door 1
    print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀")
    print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣾⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀")
    print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⠿⢿⣿⣿⣿⣿⣆⠀⠀")
    print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⠁⠀⠿⢿⣿⡿⣿⣿⡆⠀")
    print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣦⣤⣴⣿⠃⠀⠿⣿⡇⠀")
    print("⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⡿⠋⠁⣿⠟⣿⣿⢿⣧⣤⣴⣿⡇⠀")
    print("⠀⠀⠀⠀⢀⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠘⠁⢸⠟⢻⣿⡿⠀⠀")
    print("⠀⠀⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣴⣇⢀⣤⠀⠀⠀⠀⠘⣿⠃⠀⠀")
    print("⠀⠀⠀⠀⠀⢈⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣴⣿⢀⣴⣾⠇⠀⠀⠀")
    print("⠀⠀⣀⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀")
    print("⠀⠀⠉⠉⠉⠉⣡⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀")
    print("⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⡿⠟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀")
    print("⠀⠀⣴⡾⠿⠿⠿⠛⠋⠉⠀⢸⣿⣿⣿⣿⠿⠋⢸⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀")
    print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡿⠟⠋⠁⠀⠀⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀") 
    print("\nBehind the oak door is Peeves, the most mischievous ghost that ever existed in Hogwarts. He says..")
    time.sleep(2)
    print("\nLost your wand, first-year? I know where it is.\nDo my typing tasks and I'll tell you. Deal?")
    playerDecision = input("Enter DEAL to begin your mission.")
    if playerDecision == "DEAL":
        taskOne()
    else:
        print("Try again!") 
        doorOne()
    
def doorTwo(): # If the player chooses door 2
    if player["hasHexKey"] == False:
        print("\nThe second door appears to be locked and has a hexagon shaped keyhole..")
        print("\nSince you haven't found the key yet. You find yourself back in the corridor, exactly where you started.")
        time.sleep(2)
        missionDecision()
    elif player["hasHexKey"] == True:
        print("\nYou unlock the second door with the hexagonal key, and find an empty chamber.\nIn the corner stands a mirror.")
        time.sleep(2)
        print("You recognize it. It's the Mirror of Erised, known to show one's deepest desires.")
        time.sleep(2)
        playerDecision = input("The mirror asks you, " + player["name"] + " ,what do you seek? Ask and I shall give it to you")
        if playerDecision == "wand" or playerDecision == "WAND":
            player["wand"] = True
            gameOver()
        else:
            print("Try again!")

def doorThree(): # If the player chooses door 3
    print("\nThe room beyond is dimly lit, and there sits a plain wooden box, but atop it lounges a cat, peacefully sleeping.\n")
    time.sleep(2)
    print("          .__....._             _.....__,")
    print("            .\": o :':         ;': o :\".")
    print("            `. `-' .'.       .'. `-' .'")
    print("              `---'             `---'")
    print("")
    print("    _...----...      ...   ...      ...----..._")
    print(" .-'__..-\"\"'----    `.  `\"`  .'    ----'\"\"-..__`-.")
    print("'.-'   _.--\"\"\"'       `-._.-'       '\"\"\"--._   `-.`")
    print("'  .-\"'                  :                  `\"-.  `")
    print("  '   `.              _.'\"\\'._              .'   `")
    print("        `.       ,.-'\"       \"'-.,       .'")
    print("          `.                           .'")
    print("            `-._                   _.-'")
    print("                `\"'--...___...--'\"`")
    print("\nPerhaps if you speak the cat's language, it might grant you access to the box's contents.")
    playerDecision = input("Type 'meow' to politely ask the cat to move:")
    if playerDecision == "meow":
        print("It stretches lazily. Then, gracefully leaps off the box and saunters away.")
        print("With the path clear, you carefully open the box. Inside, you find an object: A hexagonal key gleams in the dim light!")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤⣤⣤⣤⣤⣤⣤⣤⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣤⣤⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣿⣿⣿⣿⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⡿⠋⠉⠉⠙⢿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣷⣄⣀⣀⣠⣾⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        print("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠛⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        player["hasHexKey"] = True
        input("Press ENTER to take the key and continue your quest")
        missionDecision()
    else:
        print("Try again!")

def gameOver(): # When the player has completed interacting with the Mirror of Erised and (player["wand"] = True)
    print("Congratulations! " + player["name"] + " Hogwarts will forever remember your extraordinary adventure.")
    print("As Dumbledore would say, 'It is our choices that show what we truly are, far more than our abilities.' Your choices have proven you to be a true hero of the wizarding world.")
    time.sleep(2)
    print("🌟 QUEST COMPLETED 🌟")

def missionIntroduction(): # Mission Introduction
    missionInput = input("\nType ✨ to start the mission")
    if missionInput == "✨":
        print("\nAs a transfer student to Hogwarts, your mission is to secretly locate Ravenclaw's lost wand—a powerful artifact recently detected within the castle.\nYour choices will shape your path through Hogwarts and determine the fate of this dangerous magical relic.")
        missionDecision()
    else:
        print("Invalid choice. Please try again.")
        missionIntroduction()
    
def main(): # Defines the game order 
    gameIntroduction()
    houseSort()
    missionIntroduction()

main() # Game play
