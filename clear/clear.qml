import QtQuick 2.5
import QtQuick.Window 2.2
import QtCanvas3D 1.1
import "../lib/gl.js" as GL

Window {
    visible: true
    width: 500
    height: 500

    Canvas3D {
        id: canvas3d
        property var gl
        anchors.fill: parent
        renderOnDemand: true

        onInitializeGL: gl = GL.initializeGL(canvas3d)
        onResizeGL: GL.resizeGL(canvas3d, gl)
        onPaintGL: GL.clearGL(gl)
    }
}
