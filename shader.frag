#version 400
in vec4 color;
out vec4 fColor;
void main() {
	fColor = color + vec4(1.0f, 1.0f, 0.0f, 1.0f);
}
