/////////////////////////////////////////////////////////////////////
// Values

tool.fixedDistance = 10;

var values = { size: tool.fixedDistance };

/////////////////////////////////////////////////////////////////////
// Mouse handling

var point, path;

function getPos(pt) {
    return (pt / values.size).round() * values.size;
}

function onMouseDown(event) {
    point = getPos(event.point);
    path = new Path();
    path.strokeColor = 'white';
    path.add(point);
}

function onMouseDrag(event) {
    var p = getPos(event.point);
    if (point != p) {
        path.add(p);
        point = p;
    }
}
