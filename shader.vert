#version 400
in vec4 sv_position;
in vec4 sv_color;
out vec4 color;
void main() {
	color = sv_color;
	gl_Position = sv_position;
}