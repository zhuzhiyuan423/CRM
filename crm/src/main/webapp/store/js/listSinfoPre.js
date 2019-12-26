function postinfo(ssid,sid,gid,gnum){
	var url="storeSinfo/outSinfo.do";
	$.ajax({
		type:"post",
		url:url,
		data:{"sid":sid,"ssid":ssid,"gnum":gnum,"gid":gid},
		success:function(data){
			if(data.status==200){
				layer.msg('出库成功！',{icon:6,time:1500});
			} else if(data.status==500){
				layer.msg('出库失败，找不到该商品！',{icon:5,time:2000});
			} else{
				layer.msg('出库失败，库存量小于出库商品量！',{icon:5,time:2000});
			}
		}
	})
	setTimeout(function(){window.location.reload();}, 1700 );
}

function turnto(data){
	parent.location.href="storeSinfo/selectSinfo.do?ssid="+data;
}
	
  
