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
