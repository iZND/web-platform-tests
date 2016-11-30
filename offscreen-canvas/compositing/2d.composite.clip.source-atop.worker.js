// DO NOT EDIT! This test has been generated by tools/gentest.py.
importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("fill() does not affect pixels outside the clip region.");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');


ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.globalCompositeOperation = 'source-atop';
ctx.rect(-20, -20, 10, 10);
ctx.clip();
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 50, 50);
_assertPixel(offscreenCanvas, 25,25, 0,255,0,255, "25,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255");

t.done();

});
done();
