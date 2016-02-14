var vertShaderSource = "\
attribute vec4 a_Position;
void main() {
    gl_Position = a_Position;
    gl_PointSize = 10.0;
}"

var fragShaderSource = "\
void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}"
