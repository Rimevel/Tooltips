if (Platform.isLoaded('another_furniture')) {
    ItemEvents.tooltip(event => {
        const tooltip = Tooltips.getBuilder(event);

        tooltip.add('#another_furniture:shutters', 1, '§8§oConnects vertically');
    });
}