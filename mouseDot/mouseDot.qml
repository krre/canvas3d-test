import QtQuick 2.5
import QtQuick.Window 2.2
import QtCanvas3D 1.1
import "../lib"
import "../lib/gl.js" as GL
import "mouseDot.js" as MouseDot

CanvasWindow {
    property var points: []
    property var a_Position

    // override
    function getShaderSources() {
        var vertShader = { type: gl.VERTEX_SHADER, source: MouseDot.vertShaderSource }
        var fragShader = { type: gl.FRAGMENT_SHADER, source: MouseDot.fragShaderSource }
        return [vertShader, fragShader]
    }

    // override
    function init() {
        a_Position = gl.getAttribLocation(gl.program, 'a_Position')
    }

    // override
    function paint() {
        for (var i = 0; i < points.length; i++) {
            gl.vertexAttrib3f(a_Position, points[i].x, points[i].y, 0.0)
            gl.drawArrays(gl.PONTS, 0, 1)
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
