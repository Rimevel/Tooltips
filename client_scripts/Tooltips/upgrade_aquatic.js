if (Platform.isLoaded('supplementaries')) {
    ItemEvents.tooltip(event => {
        const tooltip = Tooltips.getBuilder(event);

        tooltip.addSummary('#upgrade_aquatic:bedrolls', [
            'Sleep anywhere on the go.',
            '',
            '#When R-clicked',
            '-Sleep if it is night, *without* setting your spawn point.'
        ]);
    });
}