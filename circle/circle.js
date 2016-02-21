var vertShaderSource = "\
void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    gl_PointSize = 50.0;
}"

var fragShaderSource = "\
void main() {
    float d = distance(gl_PointCoord, vec2(0.5, 0.5));
    if (d < 0.5) {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    } else {
        discard;
    }
}"
