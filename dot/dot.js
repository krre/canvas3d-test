var vertShaderSource = "\
void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    gl_PointSize = 10.0;
}"

var fragShaderSource = "\
void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}"
