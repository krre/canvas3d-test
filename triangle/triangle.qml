import QtQuick 2.5
import QtQuick.Window 2.2
import QtCanvas3D 1.1
import "../lib"
import "../lib/gl.js" as GL
import "triangle.js" as Triangle

CanvasWindow {
    property var points: []
    property var a_Position
    property int n: 3

    // override
    function getShaderSources() {
        var vertShader = { type: gl.VERTEX_SHADER, source: Triangle.vertShaderSource }
        var fragShader = { type: gl.FRAGMENT_SHADER, source: Triangle.fragShaderSource }
        return [vertShader, fragShader]
    }

    // override
    function init() {
        n = Triangle.initVertexBuffers()
        if (n < 0) {
            print("Failed to set positions of the verticles")
        }
    }

    // override
    function paint() {
        if (n > 0) {
            gl.drawArrays(gl.TRIANGLES, 0, n)
        }
    }

    MouseArea {
        anchors.fill: parent
        onClicked: {
            var x = (mouseX - width / 2) / (width / 2)
            var y = (height / 2 - mouseY) / (height / 2)
            points.push(Qt.point(x, y))
        }
    }
}
