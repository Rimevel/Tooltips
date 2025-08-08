if (Platform.isLoaded('caverns_and_chasms')) {
    ItemEvents.tooltip(event => {
        const tooltip = Tooltips.getBuilder(event);

        tooltip.addSummary('caverns_and_chasms:tuning_fork', [
            '#When untuned',
            '-Shift + right-click a *Note Block* to tune the fork to the note blocks note.',
            '',
            '#When tuned',
            '-Use on a *Note Block* to set the blocks tune to the one in the fork. Use on a *golem* to have the golem go wherever that note is played.',
            ''
        ]);

        tooltip.addSummary('caverns_and_chasms:golden_bucket', [
            'Can hold 3 regular buckets worth of liquid.',
        ]);
    });
}