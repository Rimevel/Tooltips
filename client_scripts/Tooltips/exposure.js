if (Platform.isLoaded('exposure')) {
    ItemEvents.tooltip(event => {
        const tooltip = Tooltips.getBuilder(event);

        tooltip.addSummary('exposure:black_and_white_film', [
            'Develop the film by combining it with a *bottle of water*.',
            ''
        ]);

        tooltip.addSummary('exposure:color_film', [
            'Develop the film by combining it with the three basic potions.',
            '-*Awkward Potion*',
            '-*Mundane Potion*',
            '-*Thick Potion*',
            ''
        ]);

        tooltip.addSummary('exposure:camera', [
            '*R-click* to enter photo mode to take pictures.',
            '*Shift + R-click* to change film and attachments',
            '',
            '#When in photo mode',
            '-*Hold Shift* to show camera adjustments, or *press Shift* to toggle them.'
        ]);
    });
}