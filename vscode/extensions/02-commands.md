# Commands

## Introduction

* `Commands` are central to how VS Code works:

    * Open the `Command Palette` to execute commands.
    
    * Bind custom `keybindings` to commands.
    
    * Right-click to invoke commands in `Context Menus`.

* `Extensions` can:

    * Register and execute commands with the `vscode.commands` API.

    * Make commands available in the `Command Palette` with the `contributes.commands` Contribution Point.

    * Add command to `TreeViewItems` and `Custom Tree Views`.

* `Command URIs` are links that execute a given command. 

    * They can be used as clickable links in hover text, completion item details, or inside of webviews.

    ```typescript
    const commentCommandUri = vscode.Uri.parse(`command:editor.action.addCommentLine`);
    const contents = new vscode.MarkdownString(`[Add comment](${commentCommandUri})`);
    ```

    * The list of arguments to the command is passed as a JSON array that has been properly URI encoded.


----

## References

* [Common Capabilities - Commands](https://code.visualstudio.com/api/extension-capabilities/common-capabilities)

* [Command Guide](https://code.visualstudio.com/api/extension-guides/command)