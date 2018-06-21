

Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {

    var LEFT = [-1,0];
    var RIGHT = [1,0];
    var UP = [0,1];
    var DOWN = [0,-1];
    var UL = [-1,1];
    var UR = [1,1];
    var DL = [-1,-1];
    var DR = [1,-1];
    var PI = 3.1415926;
    var TAU = 2 * PI;


    Object.defineProperty(Element.prototype, "center_x", {
        get: function() {
            return this.getCenter()[0];
        },
        set: function(new_cx) {
            old_cx = this.center_x;
            this.translateBy([new_cx - old_cx, 0]);
        },
    });
    eve.on("snap.util.getattr.center_x", function() { return this.getCenter()[0]; });
    eve.on("snap.util.attr.center_x", function(new_cx) { this.center_x = new_cx; });
    


    Object.defineProperty(Element.prototype, "center_y", {
        get: function() {
            return this.getCenter()[1];
        },
        set: function(new_cy) {
            old_cy = this.center_y;
            this.translateBy([0, new_cy - old_cy]);
        },
    });
    eve.on("snap.util.getattr.center_y", function() { return this.center_y; });
    eve.on("snap.util.attr.center_y", function(new_cy) { this.center_y = new_cy; });
      

    Element.prototype.getCenter = function() {
        var bbox = this.getBBox();
        return [bbox.x + 0.5 * bbox.width, bbox.y + 0.5 * bbox.height];
    }

    Object.defineProperty(Element.prototype, "center", {
        get: function() {
            return this.getCenter();
        },
        set: function(new_center) {
            old_center = this.center;
            this.translateBy(numeric.sub(new_center, old_center));
        },
    });
    eve.on("snap.util.getattr.center", function() { return this.center; });
    eve.on("snap.util.attr.center", function(new_center) { this.center = new_center; });
      

                
    Element.prototype.translateBy = function(v) {
        dx = v[0]; dy = v[1];
        M = this.transform().globalMatrix;
        M.translate(dx,dy);
        return this.transform(M.toTransformString());
    };


    Element.prototype.moveToPoint = function(point) {
        this.translateBy(numeric.sub(point, this.getCenter()));
        return this;
    }

    Element.prototype.moveTo = function(target_el) {
        return this.moveToPoint(target_el.getCenter());
    }


    // Element.prototype.rotate = function(angle, center) {
    //     M = this.transform().globalMatrix;
    //     M.rotate(angle, center.x, center.y);
    //     return this.transform(M.toTransformString());
    // }

    // Element.prototype.rotateInPlace = function(angle) {
    //     return this.rotate(angle, this.center);
    // }

    // Element.prototype.stretch = function(factor, center, direction) {
    //     M = this.transform().globalMatrix;
    //     unit_direction = numeric.div(direction, numeric.abs(direction));
    //     switch(unit_direction) {
    //         case LEFT: M.scale(factor, 1, center.x, center.y);
    //         case RIGHT: M.scale(factor, 1, center.x, center.y);
    //         case UP: M.scale(1, factor, center.x, center.y);
    //         case DOWN: M.scale(1, factor, center.x, center.y);
    //     }
    //     return this.transform(M.toTransformString());
    // }

    // Element.prototype.stretchInPlace = function(factor, direction) {
    //     return this.stretch(factor, this.center, direction);
    // }

    // Element.prototype.scale = function(factor, center) {
    //     M = this.transform().globalMatrix;
    //     M.scale(factor, factor, center.x, center.y);
    //     return this.transform(M.toTransformString());
    // }

    // Element.prototype.scaleInPlace = function(factor, center) {
    //     return this.scale(factor, this.center);
    // }


    // Element.prototype.getLeft = function() {
    //     var bbox = this.getBBox();
    //     return [bbox.x, bbox.cy];
    // };

    // Element.prototype.getRight = function() {
    //     var bbox = this.getBBox();
    //     return [bbox.x2, bbox.cy];
    // };

    // Element.prototype.getTop = function() {
    //     var bbox = this.getBBox();
    //     return [bbox.cx, bbox.y];
    // };

    // Element.prototype.getBottom = function() {
    //     var bbox = this.getBBox();
    //     return [bbox. x, bbox.y2];
    // };

    // Element.prototype.getUL = function() {
    //     var bbox = this.getBBox();
    //     return [bbox.x, bbox.y];
    // };

    // Element.prototype.getDL = function() {
    //     var bbox = this.getBBox();
    //     return [bbox.x, bbox.y2];
    // };

    // Element.prototype.getUR = function() {
    //     var bbox = this.getBBox();
    //     return [bbox.x2, bbox.y];
    // };

    // Element.prototype.getDR = function() {
    //     var bbox = this.getBBox();
    //     return [bbox.x2, bbox.y2];
    // };

    // Element.prototype.getExtremalPoint = function(direction) {
    //     unit_direction = numeric.div(direction, numeric.abs(direction))
    //     switch(unit_direction) {
    //         case UP: borderPoint = this.getTop();
    //         case DOWN: borderPoint = this.getBottom();
    //         case LEFT: borderPoint = this.getLeft();
    //         case RIGHT: borderPoint = this.getRight();
    //         case UL: borderPoint = this.getUL();
    //         case UR: borderPoint = this.getUR();
    //         case DL: borderPoint = this.getDL();
    //         case DR: borderPoint = this.getDR();
    //         default: borderPoint = this.getCenter();
    //     }
    //     return borderPoint;
    // }

    // Element.prototype.nextToPoint = function(point, direction) {
    //     borderPoint = this.getExtremalPoint(direction);
    //     this.translateBy(numeric.subtract(point, borderPoint));
    // }

    // Element.prototype.alignTo = function(obj_to_align_to, direction) {
    //     myBorderPoint = this.getExtremalPoint(direction);
    //     borderPointToAlignTo = obj_to_align_to.getExtremalPoint(direction);
    //     this.translateBy(numeric.subtract(borderPointToAlignTo, myBorderPoint));
    // }


























            
});