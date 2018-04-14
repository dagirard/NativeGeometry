-----------------------------------------------
NativeGeometry
-----------------------------------------------
NativeGeometry is an enhanced geometry manager for LiveCode.

NativeGeometry allows you to create quickly a complex and localizable graphical user interface, that is as fast as your own script and with the ease of use of the built-in LiveCode Geometry manager!

# How to get started?

Download the repository, and extract it to your LiveCode extension folder.

You can locate the user extensions folder by doing so:
1. Open LiveCode preferences
2. In the Files & Memory preferences pane you can find the full path to the User Extensions folder. 
3. Open this folder in your system file browser.
4. If it doesn't exists, create a **"Plugins"** subfolder.
5. Extract NativeGeometry into the **"Plugins"** subfolder.
6. Start LiveCode and the NativeGeometry plugin window will be displayed

**Make sure that "rev_NativeGeometry_Launcher.rev" file is at the root of the Plugins folder, LiveCode will automatically execute this file that will load NativeGeometry.**

# Documentation

Once NativeGeometry is opened, click "Help Center".

# Embeed NativeGeometry in your application

You need to embeed the stack "NativeGeometry.res\System\NativeGeometry.rev" within your application, or dynamically load it.

Then call in your initialization procedure:
`open invisible stack "NativeGeometry"`

# Tests

NativeGeometry doesn't have an automated test suite. For each release a set of manual tests cases need to be executed.

You can find some tests stack under the `NativeGeometry.res\Devel\Tester\` folder.

# How to contribute?

The workflow is a typical git workflow, where contributors fork the [dagirard/NativeGeometry](https://github.com/dagirard/NativeGeometry) repository, make their changes on a branch, and then submit a pull request.

**Note:** Before a push request can be made, you will have to perform manual tests with NativeGeometry, and mark them as you didn't introduced a regression.

# License

NativeGeometry is under the LGPL 3.0 license.
A complete copy is available in the file COPYING.TXT, and COPYING.LESSER.TXT

NativeSoft, DataTree, NativeDoc, NativeGeometry, the NativeSoft logo, the DataTree logo, the NativeGeometry logo, the NativeDoc logo, NativeSpeak, are registered trademarks of Damien André Edouard Girard, registered in France and other countries.