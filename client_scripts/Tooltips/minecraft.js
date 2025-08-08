ItemEvents.tooltip(event => {
    const tooltip = Tooltips.getBuilder(event);

    tooltip.addSummary('#minecraft:beds', [
        '#When Right-clicked',
        '-Sets your *spawn point*, and *sleep if it is night*. Sleeping will not skip the night instantly. Instead night pass faster based on how many players are sleeping.'
    ]);

    event.add(['minecraft:snowball', 'minecraft:fire_charge'], '§8§oCan be thrown');

    tooltip.addSummary('minecraft:elytra', [
        "Wings that let you glide through the air as long as durability lasts. Can't fully break, and durability slowly recovers while on the ground.",
        '',
        '#While falling',
        '-Press the *jump button* to start gliding.',
        '#While gliding',
        '-Look down to build speed while descending. Look up to rapidly lose speed while ascending. You can use a firework to gain a *burst of speed* in the direction you are looking.'
    ]);

    tooltip.addSummary('minecraft:spyglass', [
        "Look at things from afar! Gives extra info about whatever you are looking at.",
        '',
        '#While using',
        '-Use the *mouse wheel* to zoom in and out.'
    ]);
});