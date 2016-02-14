var vertShaderSource = "\
attribute vec4 a_Position;
void main() {
    gl_Position = a_Position;
}"

var fragShaderSource = "\
void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}"

function initVertexBuffers() {
    var vertices = new Float32Array([
        0, 0.5, -0.5, -0.5, 0.5, -0.5
    ])

    var vertexBuffer = gl.createBuffer()
    if (!vertexBuffer) {
        print("Failed to create the buffer object")
        return -1
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

    var a_Position = gl.getAttribLocation(gl.program, 'a_Position')
    if (a_Position <  0) {
        print("Failed to get storage location of a_Position")
        return -1
    }

    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0)
    gl.enableVertexAttribArray(a_Position)

    return 3

}
