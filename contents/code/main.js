registerShortcut("MinimizeInactiveWindows", "Minimize Inactive Windows", "Ctrl+Alt+Home", function () {
    workspace.windowList().forEach(function (window) {
        if (!window.active)
            window.minimized = true;
    });
});
