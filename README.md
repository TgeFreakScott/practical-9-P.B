# README #

This is LAB 09 

### What is this repository for? ###

* Lab 09 Experiment with a Cube, Vertex and Fragment Shaders

### How do I get set up? ###

* Clone repository
* Ensure `SFML_SDK` environment variable exits
* Ensure SFML Version SFML 2.3.2 Visual C++ 14 (2015) - 32-bit is installed 
http://www.sfml-dev.org/files/SFML-2.3.2-windows-vc14-32-bit.zip "SFML-2.3.2-windows-vc14-32-bit.zip"
* Download extensions wrangler GLEW from http://glew.sourceforge.net/index.html and obtain Binaries for  Windows 32-bit and 64-bit
	* FreeGLUT can be used as an alternative to GLEW http://freeglut.sourceforge.net 
* Set environment variable for GLEW
	* Follow this guide https://support.microsoft.com/en-us/kb/310519
	* Alternatively `SET GLEW_SDK="C:\Users\#####\glew-1.13.0-win32\glew-1.13.0"`
* To check environment variable is set correctly open a command prompt and type `echo %GLEW_SDK%` the path to glew sdk should be show.
* Select a project default target `x86` when running executable
* If the project builds but does not `xcopy` the required dll's try moving your project to a directory you have full access to, see http://tinyurl.com/SFMLStarter for a guide on post build events.

### Cloning Repository ###
* Run GitBash and type the Follow commands into GitBash

* Check Present Working Directory `pwd`

* Change to the C drive or other drive `cd c:`

* Make a projects Directory `mkdir projects`

* Change to the projects directory by `cd projects`

* Clone the project `git clone https://MuddyGames@bitbucket.org/MuddyGames/gameplay-programming-i-lab09.git`

* Change to the project directory `cd projects gameplay-programming-i-lab09`

* List files that were downloaded `ls`

### Who do I talk to? ###

* philip.bourke@itcarlow.ie