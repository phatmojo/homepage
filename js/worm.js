// Adapted from the following Processing example:
// http://processing.org/learning/topics/follow3.html

// The amount of points in the path:
var points = 20;

// The distance between the points:
var length = 20;

var path = new Path({
    strokeColor: '#fff',
    strokeWidth: 20,
    strokeCap: 'round'
});

var start = view.center / [1.47, 2.75];

for (var i = 0; i < points; i++)
    path.add(start + new Point(i * length, 0));

function onMouseMove(event) {
    path.firstSegment.point = event.point;
    for (var i = 0; i < points - 1; i++) {
        var segment = path.segments[i];
        var nextSegment = segment.next;
        var vector = segment.point - nextSegment.point;
        vector.length = length;
        nextSegment.point = segment.point - vector;
    }
    path.smooth();
}

function onMouseDown(event) {
    path.fullySelected = true;
    path.strokeColor = '#00ff00';
}

function onMouseUp(event) {
    path.fullySelected = false;
    path.strokeColor = '#fff';
}
