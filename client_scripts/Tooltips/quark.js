if (Platform.isLoaded('quark')) {
    ItemEvents.tooltip(event => {
        const tooltip = Tooltips.getBuilder(event);

        tooltip.addSummary('quark:trowel', [
            '#When used',
            "-Randomly places a *block from your hotbar*. You can have the same block in *multiple slots to increase its odds*"
        ]);

        tooltip.addSummary('quark:seed_pouch', [
            'Can hold a bunch of any one seed or sapling. The pouch can also automatically pick up seeds if you care holding it.',
            '',
            '#When used',
            "-Plant in a 3x3 wide area on and around the block you are targeting."
        ]);

        event.add('quark:sturdy_stone', "§8§oCan't be moved by mechanisms");
    });
}