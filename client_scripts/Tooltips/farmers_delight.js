ItemEvents.tooltip(event => {
    const tooltip = Tooltips.getBuilder(event);

    tooltip.addSummary('#forge:tools/knives', [
        'Can harvest *Straw from grass*, and garantees *secondary drops* from animals. Sometimes makes monsters drop their head when killed.'
    ]);
})