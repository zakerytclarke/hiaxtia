for(var i=min;i<max;i+=step){
  for(var j=min;j<max;j+=step){
    for(var k=0;k<objects.length;k++){
      var cameraLine=
      {
        x:function(t){
            return camera.x+i;
        },
        y:function(t){
            return camera.y+j;
        },
        z:function(t){
          if(t<0){
            return NaN;
          }
            return camera.z+t;
        }
      };
      var temp=intersection(cameraLine,objects[k]);
      if(temp.length>=1){
        if(objects[k].color!=null){
          ctx.fillStyle=objects[k].color;
        }else{
          ctx.fillStyle="black";
        }
        ctx.beginPath();
        ctx.arc(i+width,j+height,1/Math.tanh(distance(temp[0],[camera.x,camera.y,camera.z])),0,2*Math.PI,false);
        ctx.fill();
        //break;
      }
    }
  }
}
