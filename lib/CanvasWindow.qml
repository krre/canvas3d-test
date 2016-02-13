import QtQuick 2.5
import QtQuick.Window 2.2
import QtCanvas3D 1.1
import "gl.js" as GL

Window {
    default property alias data: canvas3d.data
    property var gl
    visible: true
    width: 500
    height: 500

    // virtual
    function init() {}

    // virtual
    function getShaderSources() {}

    // virtual
    function paint() {}

    Canvas3D {
        id: canvas3d
        anchors.fill: parent
        renderOnDemand: true

        onInitializeGL: {
            gl = GL.initializeGL(canvas3d)
            if (!GL.initShaders(gl, getShaderSources())) {
                print("Failed to initialize shaders")
            }
            init()
        }
        onResizeGL: GL.resizeGL(canvas3d, gl)
        onPaintGL: {
            GL.clearGL(gl)
            paint()
        }
    }
}
