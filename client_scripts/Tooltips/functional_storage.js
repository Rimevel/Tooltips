ItemEvents.tooltip(event => {
    const tooltip = Tooltips.getBuilder(event);

    tooltip.addSummary('#functionalstorage:drawer', [
        '#When R-clicked',
        '-Insert the held item stack into any available empty compartment, or into a compartment with the same item. If *shift* is held insert as many stacks as possible.',
        '#When L-clicked',
        '-Take a stack from the targeted compartment. If *shift* is held you take as many as you can.',
        '',
        'Compartments remember their item type until the block is broken.'
    ]);
})