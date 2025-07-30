function minimizeInactiveWindows() {
    // read configuration
    var centerActiveWindow = readConfig("centerActiveWindow", false);
    var minimizeFromAllScreens = readConfig("minimizeFromAllScreens", false);

    // minimize inactive windows
    workspace.windowList().forEach(function (window) {
        if (!window.active)
            window.minimized = true;
    });

    // center the active window if centerActiveWindow is on
    if (centerActiveWindow) {
        var window = workspace.activeWindow;
        var screenSize = window.output.geometry;
        window.frameGeometry = {
            x: (screenSize.width - window.width) / 2,
            y: (screenSize.height - window.height) / 2,
            width: window.width,
            height: window.height
        }
    }
}

registerShortcut("MinimizeInactiveWindows", "Minimize Inactive Windows", "Ctrl+Alt+Home", minimizeInactiveWindows);
