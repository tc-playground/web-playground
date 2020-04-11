# Data Storage


* __Storage MEchanisms__

    * `ExtensionContext.workspaceState`: A `workspace storage` where you can write key/value pairs. VS Code manages the storage and will _restore it when the same workspace is opened again_.

    * `ExtensionContext.globalState`: A `global storage` where you can write key/value pairs. VS Code manages the storage and will _restore it for each extension activation_.

    * `ExtensionContext.storagePath`: A workspace specific storage path pointing to a local directory where your extension has write/read access. 

        * This is a good option if you need to store large files that are accessible only from the current workspace.

    * `ExtensionContext.globalStoragePath`: A global storage path pointing to a local directory where your extension has write/read access. 

        * This is a good option if you need to store large files that are accessible from all workspaces.


* The extension context is available to the `activate` function in the `Extension Entry File`.


---

## References

* [Common Capabilities - Data Storage](https://code.visualstudio.com/api/extension-capabilities/common-capabilities)