import QtQuick 2.5
import QtQuick.Window 2.2
import QtCanvas3D 1.1
import "../lib/gl.js" as GL
import "dot.js" as Dot

Window {
    visible: true
    width: 500
    height: 500

    Canvas3D {
        id: canvas3d
        property var gl
        anchors.fill: parent
        renderOnDemand: true

        onInitializeGL: {
            gl = GL.initializeGL(canvas3d)

            var vertShader = { type: gl.VERTEX_SHADER, source: Dot.vertShaderSource }
            var fragShader = { type: gl.FRAGMENT_SHADER, source: Dot.fragShaderSource }

            if (!GL.initShaders(gl, [vertShader, fragShader])) {
                print("Failed to initialize shaders")
            }
        }
        onResizeGL: GL.resizeGL(canvas3d, gl)
        onPaintGL: {
            GL.clearGL(gl)
            gl.drawArrays(gl.PONTS, 0, 1)
        }
    }
}
