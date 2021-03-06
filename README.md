# windowbar

Emulate window title bar in three different styles. See the [demo](https://katacarbix.gitlab.io/windowbar/demo/).

`npm install windowbar`

![example screenshot](preview.png)

# Usage

For use in browserify, electron, or a similar environment. Plain javascript:

```javascript
var windowbar = require('windowbar');

var wb = new windowbar({'style':'mac', 'dblClickable':false})
	.on('close', console.log('close'))
	.on('minimize', console.log('minimize'))
	.on('fullscreen', console.log('fullscreen'))
	.on('maximize', console.log('maximize'))
	.appendTo(document.body);
```

The returned instance emits four events: `close`, `minimize`, `maximize`, and `fullscreen`. Note: `maximize` can also be triggered in the Mac style by alt-clicking fullscreen.

The constructor accepts an options object with these properties:

* `dark` (default `false`): Dark theme.
* `draggable` (default `true`): Enables/disables the [-webkit-app-region](https://developer.chrome.com/apps/app_window) CSS property on the root element. Allows frameless windows to be dragged in an `electron` application.
* `fixed` (default `false`): Affixes to the top and floats above the rest of the content so only the buttons and title are visible. Ignores `transparent` rule.
* `style` (defaults to current OS, or `default` if unrecognized): Possible values are `mac`, `win`, or `default`.
* `tall`: (default `false`, mac only): Makes the windowbar taller than usual, with the controls slightly inset.
* `title`: (string) Sets the title. Can be changed later with `updateTitle(t)`.
* `transparent` (default `false`): Transparent background for an overlayed effect.


* `dblClickable`: Deprecated - Just don't provide a dblclick handler.

# To do

* Update react component
