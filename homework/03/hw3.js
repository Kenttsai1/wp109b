class Vector {
    constructor(array) {
        this.a = array
    }
    add(v2) { 
      var r = []
      var x = this
      for (var i=0; i<x.a.length; i++) {
        r[i] = x.a[i]+y.a[i]
      }
      return new Vector(r)
     }
    sub(v2) {
        var r = []
        var x = this
        for(var i=0; i<x.a.length;i++){
            r[i]= x.a[i]-y.a[i]
        }
        return new Vector(r)
    }
    dot(v2) {  
        var s = 0
        for (var i=0; i<x.a.length; i++) {
          s =s+( x.a[i]*y.a[i])
        }
        return new Vector(s) 
    }
    neg() { 
        var r = []
        var x = this
        for(var i=0; i<x.a.length;i++){
            r[i]= -1*x.a[i]
        }
        return new Vector(r)
     }
  }
  var x = new Vector([1,2,3])
  var y = new Vector([1,1,1])
  console.log('x.add(y)=', x.add(y))
  console.log('x.sub(y)=',x.sub(y))
  console.log(x.dot(y))
  console.log('x.neg(y)=',x.neg(y))