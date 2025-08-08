if (Platform.isLoaded('supplementaries')) {
    ItemEvents.tooltip(event => {
        const tooltip = Tooltips.getBuilder(event);

        tooltip.addSummary(['supplementaries:globe', 'supplementaries:globe_sepia'], [
            'Displays a randomly generated blocky world that is unique to your current world seed.',
            '',
            '#When R-clicked',
            '-Spins and displays your *world coordinates*'
        ]);

        tooltip.removeAllExtra('supplementaries:cannon');
        tooltip.addSummary('supplementaries:cannon', [
            'Can shoot anything. Shooting power can be set between *1-4* and consume an equal amount of gunpowder. Click the *Maneuver mode button* in the top-right to aim manualy.',
            '',
            '#Activated by',
            '-- Flint & Steel',
            '-- Gunpowder trail',
            '-- Redstone',
            '#When fired',
            '-Blocks will be placed when landing.',
            '-Projectile items will be fired as if used by the player.',
            '#When in Maneuver mode',
            '-Increase power level with *Scroll Wheel*.',
            '-Switch aiming mode between *parabolic 1*, *parabolic 2* and *manual aim* using *Space Bar*.',
            '-Press *Left-click* to fire. *Right-click* to hide the indicator.'
        ]);

        event.add('supplementaries:cannonball', '§7§oDamage based on speed on contact');

        tooltip.addSummary('supplementaries:pedestal', [
            'Can hold one item. Gives out a redstone signal when an item is placed or removed.',
            '',
            'Maybe there is a way to prevent a signal when swapping the item?.'
        ]);

        tooltip.addSummary('#supplementaries:flags', [
            'Can be lowered or raised if placed on top of a pole of placed sticks.',
            '*R-click* the pole to raise it.',
            '*Shift + R-click* to lower it.'
        ]);

        tooltip.addSummary('supplementaries:cog_block', [
            '#When powered',
            '-Spreads redstone signal to *adjacent cog blocks*, just like with redstone dust. Useful for compact vertical redstone signaling.'
        ]);

        tooltip.addSummary('supplementaries:dispenser_minecart', [
            "Dispenses it's inventory as it moves along the track.",
        ]);

        //event.add('supplementaries:sack', Text.of('Retains contents when broken').withStyle('dark_gray', 'italic'));
        tooltip.addSummary('supplementaries:sack', [
            'Retains contents when broken, but carrying more than 2 slows you down.'
        ]);

        tooltip.addSummary('supplementaries:cannonball', [
            'Will break blocks it touches based of its *Kinetic Energy*. Every broken block will subtact energy (speed) from it proportional to how hard the block is.',
            '',
            'Can bounce off the ground when shot from a steep angle and push entities.'
        ]);

        tooltip.addSummary('#supplementaries:presents', [
            'Can hold 1 item stack. You can choose a player to which it will be adressed to as well as a small description.',
            '',
            'Once packed only you and the recipient will be able to open it and access its content.'
        ]);

        tooltip.addSummary('supplementaries:slidy_block', [
            'Can be pushed with *R-click*',
            'If pushed on ice it will keep on moving. If pushed on soap it will change direction randomly.'
        ]);

        event.add('supplementaries:ash', '§7§oDrops from burning blocks and mobs');

        event.add('supplementaries:soap_block', '§7§oSlippery');

        event.add('supplementaries:sugar_cube', '§7§oDisolves when touching water');

        tooltip.removeAllExtra('supplementaries:lunch_basket');
        tooltip.addSummary('supplementaries:lunch_basket', [
            'Can hold 9 stacks of food items.',
            '',
            'Press *Left-click* to open/close the basket. *Shift + Right click* to place it down as a block.',
            '',
            '#When closed',
            '-Hold *Right-click* to switch the food you have selected.',
            '',
            '#When open',
            '-*Right-click* to eat',
            '',
        ]);

        //event.add('supplementaries:gravel_bricks', '§7§oBreaks when landed on');

        tooltip.addSummary('supplementaries:notice_board', [
            'Can hold and display either a written book, a map or a banner pattern.',
            '',
            '#When displaying a book',
            '-Will only show one page at the time. Once given a redstone pulse it will turn the currently displayed page onto the next one. The text resolution that is getting displayed depends on the amount of text in a page. Add whitespaces to make it render smaller.',
            '#When waxed',
            '-Prevents interactions.',
        ]);

        tooltip.addSummary('supplementaries:fodder', [
            'A way to automatically feed most animals. When hungry they will try to eat a layer out of the block.',
            'Makes baby animals age faster and will set adults in love.',
            'Can be placed down with dispensers. *R-clicking* with a hoe will remove and destroy one layer.'
        ]);

        tooltip.addSummary(['supplementaries:bamboo_spikes', 'supplementaries:bamboo_spikes_tipped'], [
            'Spikes that will slow and damage all the mobs that walk in them.',
            'Can be infused with negative lingering potions. *To do so*:',
            '-Craft them with the potion.',
            '-*R-click* on them with it.',
            '-Pour the potion on them using a faucet.',
            '',
            'Can be moved with pistons or contraptions, dealing extra damage if hitting something while moving.'
        ]);

        event.add('supplementaries:planter', '§7§oSupports mosts plants and crops without water');

        tooltip.addSummary('supplementaries:blackboard', [
            'Can be drawn on to create interesting pattern in basic colors.',
            '',
            '#When R-clicked',
            '-Start editing.',
            '#When R-clicked with glow ink sac',
            '-Make the drawing glow.',
            '#When waxed',
            '-Prevent interactions.'
        ]);

        tooltip.addSummary('supplementaries:safe', [
            'Upgraded fire-resistant Shulker Box that can be locked with a key.', 'Once this is done their content will only be available to players that have the correct key in their inventory.'
        ]);

        event.add(['supplementaries:gold_door', 'supplementaries:gold_trapdoor'], '§7§oStuck when powered by redstone');

        tooltip.addSummary('supplementaries:rope', [
            'Can be placed against a ceiling, on a fence or wall or next to an already placed rope. Can only go that far out horizontally from the closest support.',
            '',
            '#Vertical ropes',
            '-Can be climbed, and falling down them prevents fall damage. When *R-clicked* with more rope, extend the rope downwards. When *Shift + R-clicked*, it is hoisted upwards. Attached blocks will move with the rope.',
            '#Horizontal ropes',
            '-Can be walked on, but you have to keep your balance.',
            '#When broken by a projectile',
            '-Connected ropes which are being supported also breaks.'
        ]);

        event.add('supplementaries:flint_block', '§7§oScrapes against iron-like blocks when pushed to make sparks');

        event.add('supplementaries:feather_block', '§7§oExtremely fluffy!');

        tooltip.addSummary('supplementaries:doormat', [
            'Can display 3 lines of text, and one item can be hidden under it by *Shift + R-clicking* on the sides.'
        ]);

        tooltip.addSummary('#supplementaries:sign_posts', [
            'Up to two of them can be placed on walls or any fence or placed stick. Like all signs they support dyes and inks Their orientation depends on the way you face when placing them. When *Shift + R-clicked*, reverse direction.',
            '',
            '#When R-clicked with compass',
            'Make it point toward the pointer position (either the world spawn or lodestone position).'
        ]);

        event.add('supplementaries:statue', '§7§oCan hold one item');

        event.add('supplementaries:goblet', 'Can hold and display any liquid, and drunken from');

        event.add('supplementaries:cage', 'Can be used to capture small animals and mobs');

        tooltip.removeAllExtra('supplementaries:jar');
        tooltip.addSummary('supplementaries:jar', [
            'Can hold cookies or fluids. Stored cookies can be directly eaten. Can hold 12 bottles of fluid.'
        ]);

        //REDSTONE BLOCKS

        tooltip.addSummary('supplementaries:wind_vane', [
            'Visually swing depending on the current weather.',
            'It will output a redstone signal, the strength of which depends on the current weather so 1 power when raining and 2 when thundering.'
        ]);

        tooltip.addSummary('supplementaries:crystal_display', [
            'When powered displays a number or a symbol depending on the received signal strength.'
        ]);

        tooltip.addSummary('supplementaries:relayer', [
            'Observer like block whose purpose is to copy whatever signal it has in front to its back. Also works with indirect power when it faces a redstone wire.'
        ]);

        tooltip.addSummary('supplementaries:spring_launcher', [
            "When activated it extends like a piston and will propel any entities that lie ontop of it in the direction it's moving, twice as far as a pushed slime block setup.",
            "Can also bounce you if you fall on it from a certain height when it's already extended.",
            '',
            'Cannot push blocks like a normal piston'
        ]);

        tooltip.addSummary('supplementaries:speaker_block', [
            'Can send a message in chat to all players in a certain radius when activated by redstone. Can be renamed in an anvil to change the name that will be displayed in chat. Rename it "" to get rid of it completely.',
        ]);

        tooltip.addSummary('supplementaries:turn_table', [
            "Can change the orientation of the block that it's facing, speed depending on redstone strength. Can rotate many special blocks too like stairs on their horizontal axis",
            "",
            '#When R-clicked',
            '-Toggles rotation direction.'
        ]);

        tooltip.addSummary('supplementaries:clock_block', [
            "Visually displays the current in-game time. The Hour hand indicates the current in-game hour while the minute hand ticks every irl second",
            "Can be read with a comparator which will give off a signal from 0 to 15 that is proportional to the in-game time of day.",
            '#When R-clicked',
            '-Displays the current in-game time as a message.',
            '#When an in-game hour passes',
            '-Gives off a block update.'
        ]);

        tooltip.addSummary('supplementaries:bellows', [
            'When powered will push air infront of it with frequency that is proportional to its redstone power. All the effects described here are affected by this.',
            '#When pushing air',
            '-Pushes entities that are infront of it away, up to a 5 blocks distance.',
            '#When next to furnace blocks',
            '-Speeds up the process of the block.',
            '#When next to copper blocks',
            '-Speeds up aging of the block.',
            '#When blowing on fire',
            '-Fire blocks that are up to a 2 blocks distance will be kept alive indefinitely.',
            '#When stepped on',
            '-If not powered, it will compress.',
            '',
            'I wonder what happens if it blows into a wet sponge next to a soapy block?'
        ]);

        tooltip.addSummary('supplementaries:redstone_illuminator', [
            "Gives off a light output that is inversely proportional to its current redstone power. This means it's on by default."
        ]);

        tooltip.addSummary('supplementaries:faucet', [
            'Can be activated by right clicking its handle. When powered its active and non active status will be inverted.',
            '',
            'Extracts items from the inventory behind and spill them right below its nozzle with a one second interval.',
            'If placed next to a *fluid containing block* it will start dripping fluid. It can pour those fluids in any possible *fluid container* block below it.',
            '',
            'Can also interact with certain blocks below such as concrete powder, dirt (turns to mud) and sugar block.',
            '',
            'Can dump fluids in sponges effectively voiding them.'
        ]);

        tooltip.removeAllExtra('supplementaries:hourglass');
        tooltip.addSummary('supplementaries:hourglass', [
            'Can be filled with any kind of sand, dust or powder or even slime and honey. Different materials result in a different duration.',
            '',
            'Can give a comparator output that depends on the remaining time. Useful for timed mechanisms.',
            '',
            'Can be reset by either rotating twice with a turn table or by *Shift + R-clicking*.'
        ]);

        //ITEMS

        event.add('supplementaries:slingshot', '§7§oShoots blocks');

        tooltip.addSummary('supplementaries:quiver', [
            'Allows you to quickly swap between different types of arrows.',
            'You can add arrows by clicking a stack onto the quiver in your inventory.',
            'Hold *R-click* to switch between stored arrows.'
        ]);

        event.add('supplementaries:confetti_popper', '§7§oPop it, or wear it as a hat');

        tooltip.addSummary('supplementaries:slice_map', [
            'Display the world as viewed from a certain y level, decided whenever its first created.',
            '',
            'Require the player to stand on or have view on the target level, so to avoid x-ray.'
        ]);

        tooltip.addSummary('supplementaries:flute', [
            'Play to summon nearby non-sitting pets that you own.',
            'Can be bound to a specific pet (or horse) by clicking it on the animal in question.',
            '',
            '#When bound',
            '-Only call the pet that it was bound to.'
        ]);

        tooltip.addSummary('supplementaries:wrench', [
            'A handy tool which can be used to rotate any kind of rotateable block. Even work on blocks like signs, way signs, double skulls, double chests and beds.',
            'The rotation axis will be the face you click, Hold *Shift* to reverse direction.'
        ]);

        event.add('supplementaries:soap', '§7§oClean colored or dirty items and blocks');

        event.add('supplementaries:rope_arrow', '§7§oDeploys rope where it lands');
        event.add('supplementaries:rope_arrow', '§7§oCan hold up to 24 ropes');

        event.add('supplementaries:antique_ink', '§7§oCan make some things look old');

        tooltip.addSummary('supplementaries:key', [
            'Rename in an anvil and use on lockable blocks to bind them to it. Once bound, *only having a key with the correct name* in your inventory will unlock the block.'
        ]);
    });
}