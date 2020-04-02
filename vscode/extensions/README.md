# VSCode Extensions

---

## Contribution Points

> [Contribution Point Docs](https://code.visualstudio.com/api/references/contribution-points)

* `Contribution Points` are a set of JSON declarations that you make in the contributes field of the `package.json` Extension Manifest.

* `contributes.configuration`

    * Configuration keys that will be exposed to the user. 
    
    * The user will be able to set these configuration options as `User Settings` or as `Workspace Settings`.
    
    * The user will be able to set these using the Settings UI or by editing the JSON settings file directly.

* `contributes.configurationDefaults`

    * Contribute default language-specific editor configurations. 
    
    * This will override default editor configurations for the provided language.

* `contributes.commands`

    * Contribute the UI for a command consisting of a title and (optionally) an icon, category, and enabled state. 

* `contributes.menus`

    * Contribute a menu item for a command to the editor or Explorer.

* `contributes.keybindings`

    * Contribute a key binding rule defining what command should be invoked when the user presses a key combination.

* `contributes.languages`

    * Contribute definition of a language.

* `contributes.debuggers`

    * Contribute a debugger to VS Code.

* `contributes.breakpoint`

* `contributes.grammars`

    * Contribute a TextMate grammar to a language

* `contributes.themes`

    * Contribute a TextMate theme to VS Code.

* `contributes.snippets`

    * Contribute snippets for a specific language. 

* `contributes.jsonValidation`

    * Contribute a validation schema for a specific type of json file. 

* `contributes.views`

    * Contribute a view to VS Code.

* `contributes.viewsContainers`

    * Contribute a view container into which Custom views can be contributed.

* `contributes.problemMatchers` / `contributes.problemPatterns`

    * Contribute problem matcher patterns. 
    
    * These contributions work in both the output panel runner and in the terminal runner.

* `contributes.taskDefinitions`

    * Contributes and defines an object literal structure that allows to uniquely identify a contributed task in the system.

* `contributes.colors`

    * Contributes new themable colors. 

* `contributes.typescriptServerPlugins`

    * Contributes TypeScript server plugins that augment VS Code's JavaScript and TypeScript support

---

## References

* [VSCode Extensions - API](https://code.visualstudio.com/api) - Docs.

    * [Extension Capabilities](https://code.visualstudio.com/api/extension-capabilities/overview)

        * [Contribution Points](https://code.visualstudio.com/api/references/contribution-points)

        * [Extension Manifest](https://code.visualstudio.com/api/references/extension-manifest)

        * [VSCode API](https://code.visualstudio.com/api/references/vscode-api)

    * [Extension Guides](https://code.visualstudio.com/api/extension-guides/overview)

    * [Extension Examples](https://code.visualstudio.com/api/extension-guides/overview)

* [VSCode Extension Tutorial](https://www.digitalocean.com/community/tutorials/how-to-create-your-first-visual-studio-code-extension) 

* [Creating A Simple VSCode Extension](https://www.youtube.com/watch?v=srwsnNhiqv8) - Explore what goes into creating a simple Visual Studio Code Extension.
