/* 
* @Author: Administrator
* @Date:   2016-02-19 18:08:53
* @Last Modified by:   Administrator
* @Last Modified time: 2016-02-20 17:16:26
*/

window.onload=function(){
			var myHtml=document.documentElement;
			getsize();
			function getsize(){
				var screenWidth;
				screenWidth=myHtml.clientWidth;
				if (screenWidth<320) {
					myHtml.style.fontSize='40px';

				}else if (screenWidth>=640) {
					myHtml.style.fontSize='79.6px';

				}else{
					myHtml.style.fontSize=screenWidth/(320/40)+'px';
				}
			}
			window.onresize=function(){
				getsize();
			}

			// 内容中用于替换乱码
			// var str=document.getElementsByTagName('content');
			// 	// alert(str);
			// 	str.replace(/[!--empirenews.page--]/, "");





		}


// jq
	$(function() {
		// 论坛内页中用于头像宽高的设置
			var headW;
			$(window).resize(function(event) {
				headW=$('.headImg').width();
				$('.headImg').css('heght', headW);
				
			});

		// 论坛内页中用于头像宽高的设置-完成
		// 替换图片连接
		var iSrc;
		iSrc=$('.content img').attr('src');
			// alert(iSrc);
		// iSrc[0].replace('\"','');
		// // console.log(iSrc[0]);
		// $('.content img').attr('src', iSrc);
	});
// jq
