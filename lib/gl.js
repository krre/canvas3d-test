function initializeGL(canvas) {
    try {
        var gl = canvas.getContext("canvas3d", { depth: true, antialias: true, alpha: false })

        gl.enable(gl.DEPTH_TEST)
        gl.enable(gl.CULL_FACE)

        gl.frontFace(gl.CCW)
        gl.cullFace(gl.BACK)

        gl.disable(gl.BLEND)
        gl.clearColor(bgColor.r, bgColor.g, bgColor.b, bgColor.a)
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

function initShaders(gl, shaders) {
    var program = createProgram(gl, shaders)
    if (!program) {
        print("Failed to create program")
        return false
    }

    gl.useProgram(program)
    gl.program = program

    return true
}

function createProgram(gl, shaderSources) {
    var shaders = []
    for (var i = 0; i < shaderSources.length; i++) {
        var shader = loadShader(gl, shaderSources[i].type, shaderSources[i].source)
        if (shader) {
            shaders.push(shader)
        } else {
            return null
        }
    }

    var program = gl.createProgram()
    if (!program) {
        return null
    }

    for (i = 0; i < shaders.length; i++) {
        gl.attachShader(program, shaders[i])
    }

    gl.linkProgram(program)

    var linked = gl.getProgramParameter(program, gl.LINK_STATUS)
    if (!linked) {
        var error = gl.getProgramInfoLog(program)
        print("Failed to link program: %1".arg(error))
        gl.deleteProgram(program)
        for (i = 0; i < shaders.length; i++) {
            gl.deleteShader(program, shaders[i])
        }
        return null
    }

    return program
}

function loadShader(gl, type, source) {
    var shader = gl.createShader(type)
    if (!shader) {
        print("Failed to create shader")
    }

    gl.shaderSource(shader, source)
    gl.compileShader(shader)

    var compliled = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
    if (!compliled) {
        var error = gl.getShaderInfoLog(shader)
        print("Failed to compile shader: %1".arg(error))
        gl.deleteShader(shader)
        return null
    }

    return shader
}
