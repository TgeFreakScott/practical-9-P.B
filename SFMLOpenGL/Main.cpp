#include <Game.h>
#include <gl\GL.h>
#include <GL\glew.h>

int main(void)
{
	Game& game = Game();
	game.run();
}