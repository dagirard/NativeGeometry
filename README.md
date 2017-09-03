-----------------------------------------------
NativeGeometry
-----------------------------------------------
NativeGeometry is an enhanced geometry manager for LiveCode.

NativeGeometry allows you to create quickly a complex and localizable graphical user interface, 
that is as fast as your own script and with the ease of use of the built-in Revolution Geometry manager!

# How to get started?

Download the repository, and extract it to your LiveCode extension folder.

You can locate the user extensions folder by doing so:
1. Open LiveCode preferences
2. In the Files & Memory preferences pane you can find the full path to the User Extensions folder. 
3. Open this folder in your system file browser.
4. Extract NativeGeometry to this folder

**Make sure that "rev_NativeGeometry_Launcher.rev" file is at the root of the extension folder, LiveCode 
  will automatically execute this file that will load DataTree.**

# Documentation

Once NativeGeometry is opened, click "Help Center".

# Embeed NativeGeometry in your application

You need to embeed the stack "NativeGeometry.res\System\NativeGeometry.rev" within your application,
or dynamically load it.

Then call in your initialization procedure:
`open invisible stack "NativeGeometry"`

# Tests

NativeGeometry doesn't have an automated test suite. For each release a set of manual tests cases
need to be executed.

You can find some tests stack under the `NativeGeometry.res\Devel\Tester\` folder.

Before a push request can be made, you will have to perform manual tests with
NativeGeometry, and mark them as you didn't introduced a regression.

# How to contribute?

Due to his work, the original author "Damien Girard" is busy, but if you
are an experienced LiveCode developper, then don't hesitate to reach him on GitHub 
to become a main contributor to the project.

GitHub page: https://github.com/dagirard/NativeDoc

# License

NativeGeometry is under the MIT license.
A complete copy is available in the file LICENSE.TXT