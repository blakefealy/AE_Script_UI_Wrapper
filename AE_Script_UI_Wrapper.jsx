/**
 * @name ScriptUI Panel Wrapper for After Effects
 * @description A self-contained wrapper that creates a ScriptUI panel in After Effects. 
 *              Automatically handles both dockable panels (when placed in the ScriptUI Panels folder) 
 *              and floating windows (when run as a regular script).
 * @usage Replace the panel title and insert your UI components where indicated.
 * @note For dockable functionality, save this script in the 'ScriptUI Panels' folder and access it from the Window menu.
 * @warning This script uses ExtendScript, which Adobe is gradually phasing out. Future compatibility may be limited.
 */


function scriptUI(thisObj) {
    var win = (thisObj instanceof Panel)
        ? thisObj
        : new Window("palette", "My Script Name (place in ScriptUI Panels)", undefined, { resizeable: true });

    // UI Elements Are Defined Here

    win.layout.layout(true);
    win.layout.resize();

    return win;
}

var panel = scriptUI(this);
if (panel instanceof Window) {
    panel.center();
    panel.show();
}
