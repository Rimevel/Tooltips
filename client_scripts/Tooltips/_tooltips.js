// priority: 0

const Tooltips = {
    palette: {
        default: 0xc9974c,
        highlighted: 0xf1dd79,
    },
    /**
     *
     * @param {Internal.ItemTooltipEventJS} event
     */
    getBuilder(event) {
        /**
         * Convert a string into text components, highlighting text wrapped in * marks.
         * @param {string} text
         * @returns {Internal.MutableComponent}
         */
        function highlight(text) {
            //Split the string at each * mark and then process each segment
            return text
                .split("*")
                .map((text, i) => {
                    //Highlight each even-numbered segment
                    return Text.of(text).color(
                        i % 2 === 1
                            ? Tooltips.palette.highlighted
                            : Tooltips.palette.default
                    );
                })
                .reduce((prev, curr, i) => {
                    //This combines all the segments into one text component using a reduce function
                    return prev.append(curr);
                });
        }

        /**
         *
         * @param {string} text
         */
        function handleSyntax(text) {
            if (text.charAt(0) === "#") {
                return Text.gray(text.substring(1));
            }

            if (text.charAt(0) === "-") {
                return Text.of(" ")
                    .color(Tooltips.palette.default)
                    .append(highlight(text.substring(1)));
            }

            return Text.of("")
                .color(Tooltips.palette.default)
                .append(highlight(text));
        }

        /**
         *
         * @param {string} line
         * @returns {string[]}
         */
        function splitLine(line) {
            //Find the last space before the character limit
            let splitPoint = line.lastIndexOf(" ", 42);
            //If one was not found, force a hard break
            if (splitPoint === -1) {
                splitPoint = 42;
            }
            //Split into two strings at the splitPoint
            let first = line.slice(0, splitPoint);
            let last = line.slice(splitPoint).trim();
            //If there is an odd number of * add one after the split to prevent highlight errors
            if ((first.split("*").length - 1) % 2 === 1) {
                last = "*" + last;
            }
            //If the split line was indented, then indent right after the split
            if (first.charAt(0) === "-") {
                last = "-" + last;
            }
            //Recursivly split the second half of the split if it is also to long
            if (last.length > 42) {
                let split = [first];
                splitLine(last).forEach((line) => {
                    split.push(line);
                });
                return split;
            }

            return [first, last];
        }

        return {
            /**
             *
             * @param {Internal.Ingredient_} item
             * @param {number} row
             * @param {string} message
             */
            add: function (item, row, message) {
                event.addAdvanced(item, (stack, advanced, text) => {
                    text.add(row, message);
                });
            },
            /**
             *
             * @param {Internal.Ingredient_} item
             * @param {string[]} lines
             * @param {number?} start
             */
            addSummary: function (item, lines, start) {
                event.addAdvanced(item, (stack, advanced, text) => {
                    let offset = start ? start + 2 : 3;
                    let last = 0;
                    if (event.isShift()) {
                        text.add(1, "§f\uDB80\uDE28§8[§fShift§8]");
                        text.add(2, "");

                        for (let i = 0; i < lines.length; i++) {
                            if (lines[i].length > 42) {
                                let split = splitLine(lines[i]);

                                //Iterate all split lines, rendering them and increasing
                                //offset to position them correctly
                                split.forEach((line, index) => {
                                    text.add(i + offset, handleSyntax(line));
                                    if (index < split.length - 1) {
                                        offset++;
                                    }
                                });
                            } else {
                                text.add(i + offset, handleSyntax(lines[i]));
                            }
                            last = i + offset;
                        }
                        if (stack.isEnchanted()) {
                            text.add(last + 1, "");
                        }
                    } else {
                        text.add(1, "§f§8[§7Shift§8]§f for summary");
                    }
                });
            },
            /**
             *
             * @param {Internal.Ingredient_} item
             * @param {number | number[]} row
             */
            remove: function (item, row) {
                if (row.length) {
                    event.addAdvanced(item, (stack, advanced, text) => {
                        row.forEach((num) => {
                            text.remove(num);
                        });
                    });
                } else {
                    event.addAdvanced(item, (stack, advanced, text) => {
                        text.remove(row);
                    });
                }
            },
            /**
             *
             * @param {Internal.Ingredient_} item
             */
            removeLast: function (item) {
                event.addAdvanced(item, (stack, advanced, text) => {
                    text.remove(text.length - 1);
                });
            },
            /**
             *
             * @param {Internal.Ingredient_} item
             */
            removeAllExtra: function (item) {
                event.addAdvanced(item, (stack, advanced, text) => {
                    for (let i = text.length - 1; i > 0; i--) {
                        text.remove(i);
                    }
                });
            },
            /**
             *
             * @param {Internal.Ingredient_} item
             */
            addAdvanced: function (item) {
                event.addAdvanced(item, (stack, advanced, text) => {
                    if (advanced) {
                        text.add(`§8${stack.id}`);
                    }
                });
            },
        };
    },
};
