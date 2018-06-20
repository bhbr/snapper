Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {

                
                Element.prototype.translate = function(dx, dy) {
                    M = this.transform().globalMatrix;
                    M.translate(dx,dy);
                    return this.transform(M.toTransformString());
                };

                Element.prototype.getCenter = function() {
                    var bbox = this.getBBox();
                    return [bbox.cx, bbox.cy];
                }


                Element.prototype.moveToPoint = function(x1, y1) {
                    var myCenter = this.getCenter();
                    dx = x1 - myCenter[0];
                    dy = y1 - myCenter[1];
                    this.translate(dx,dy);
                    return this;
                }

                Element.prototype.moveTo = function(target_el) {
                    var newCenter = target_el.getCenter();
                    return this.moveToPoint(newCenter[0], newCenter[1]);
                }

                Object.defineProperty(Element.prototype, "cx", {
                    get: function() {
                        return this.getCenter()[0];
                    },
                    set: function(new_cx) {
                        old_cx = this.cx;
                        this.translate(new_cx - old_cx, 0);
                    },
                });
                eve.on("snap.util.getattr.cx", function() { return this.cx; });
                eve.on("snap.util.attr.cx", function(new_cx) { this.cx = new_cx; });
      
            
            });