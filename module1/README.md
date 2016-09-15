Assignment 1
============

## Assignment Requirements
Create a front-end application that presents the user with a textbox where they can list comma-separated items they usually eat for lunch. Once that's entered, the user has to click the "Check If Too Much" button.

If the number of items in the textbox is less than or equal to 3 (e.g., 1, 2, or 3), a message should show up under to the textbox saying "Enjoy!". If the number of items is greater than 3 (4, 5, and above), the message "Too much!" should show up under the textbox.

If the textbox is empty and the user clicks the "Check If Too Much" button, the message "Please enter data first" should show up.

Only 1 message should be shown at any given time. In other words, if you have both messages "Enjoy!" and "Too much!" showing up at the same time, it's an error.

## BONUS (OPTIONAL AND NOT GRADED)

* If the message is "Enjoy!" or "Too much!", make the font color green. If the message is "Please enter data first", make the font color red.
* If the message is "Enjoy!" or "Too much!", make the border color around the textbox green. If the message is "Please enter data first", make the border color around the textbox red.
* Implement this case `item 1, item2,,item3` or this case `item 1, item2, ,item3` as not counting an 'empty' item towards the count of how many items there are in the list. Please *make sure* to put a comment somewhere next to the input textbox stating that you do NOT consider and empty item, i.e., `, ,` as an item towards to the count, so whoever is grading your assignment doesn't erroneously mark that as an error.
