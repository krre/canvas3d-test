function initializeGL(canvas) {
    try {
        var gl = canvas.getContext("canvas3d", { depth: true, antialias: true, alpha: false })

        gl.enable(gl.DEPTH_TEST)
        gl.enable(gl.CULL_FACE)

        gl.frontFace(gl.CCW)
        gl.cullFace(gl.BACK)

        gl.disable(gl.BLEND)

        gl.clearColor(0.0, 0.0, 1.0, 1.0)
        gl.clearDepth(1.0)

        gl.viewport(0, 0, canvas.width * canvas.devicePixelRatio,
                    canvas.height * canvas.devicePixelRatio)
        return gl
    } catch (e){
        print("...initializeGL FAILURE!")
        print(e.message)
    }
}

function resizeGL(canvas, gl) {
    var pixelRatio = canvas.devicePixelRatio;
    canvas.pixelSize = Qt.size(canvas.width * pixelRatio, canvas.height * pixelRatio)
    if (gl) {
        gl.viewport(0, 0, canvas.width * canvas.devicePixelRatio,
                    canvas.height * canvas.devicePixelRatio)
    }
}

function clearGL(gl) {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
}
