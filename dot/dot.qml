import QtQuick 2.5
import QtQuick.Window 2.2
import QtCanvas3D 1.1
import "../lib"
import "../lib/gl.js" as GL
import "dot.js" as Dot

CanvasWindow {
    id: root

    // override
    function getShaderSources() {
        var vertShader = { type: gl.VERTEX_SHADER, source: Dot.vertShaderSource }
        var fragShader = { type: gl.FRAGMENT_SHADER, source: Dot.fragShaderSource }
        return [vertShader, fragShader]
    }

    // override
    function paint() {
        gl.drawArrays(gl.PONTS, 0, 1)
    }
}
