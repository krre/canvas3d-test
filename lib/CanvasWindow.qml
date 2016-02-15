import QtQuick 2.5
import QtQuick.Window 2.2
import QtCanvas3D 1.1
import "gl.js" as GL

Window {
    default property alias data: canvas3d.data
    property var gl
    property color bgColor: Qt.rgba(0.0, 0.0, 0.0, 1.0)
    title: "Canvas3D-test"
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

        onInitializeGL: {
            gl = GL.initializeGL(canvas3d)
            var shaderSources = getShaderSources()
            if (shaderSources) {
                if (!GL.initShaders(gl, shaderSources)) {
                    print("Failed to initialize shaders")
                }
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
