<?php
$z[0]=Array("global","",238,266);
$z[0][4]=array();
$z[0][4]['name']="cfg_soft_lang";
$z[1]=Array("global","",280,306);
$z[1][4]=array();
$z[1][4]['name']="cfg_webname";
$z[2]=Array("global","",352,382);
$z[2][4]=array();
$z[2][4]['name']="cfg_description";
$z[3]=Array("global","",420,447);
$z[3][4]=array();
$z[3][4]['name']="cfg_keywords";
$z[4]=Array("global","",466,498);
$z[4][4]=array();
$z[4][4]['name']="cfg_templets_skin";
$z[5]=Array("global","",629,657);
$z[5][4]=array();
$z[5][4]['name']="cfg_mobileurl";
$z[6]=Array("global","",1207,1235);
$z[6][4]=array();
$z[6][4]['name']="cfg_mobileurl";
$z[7]=Array("global","",1465,1490);
$z[7][4]=array();
$z[7][4]['name']="cfg_cmsurl";
$z[8]=Array("global","",1584,1610);
$z[8][4]=array();
$z[8][4]['name']="cfg_cmspath";
$z[9]=Array("global","",1698,1730);
$z[9][4]=array();
$z[9][4]['name']="cfg_templets_skin";
$z[10]=Array("global","",2376,2402);
$z[10][4]=array();
$z[10][4]['name']="cfg_cmspath";
$z[11]=Array("include","",2517,2552);
$z[11][4]=array();
$z[11][4]['filename']="head.htm";
$z[12]=Array("arclist","\r\n        <h2><a href=\"[field:arcurl/]\">[field:title/]</a></h2>\r\n        <p>[field:info/]...<a href=\"[field:arcurl/]\">[查看全文]</a></p>\r\n        ",2708,2922);
$z[12][4]=array();
$z[12][4]['flag']="h";
$z[12][4]['limit']="0,1";
$z[12][4]['infolen']="230";
$z[13]=Array("arclist","\r\n        <div class='d1arc'><a href=\"[field:arcurl/]\">[field:title/]</a></div>\r\n        ",2986,3125);
$z[13][4]=array();
$z[13][4]['flag']="h";
$z[13][4]['limit']="1,4";
$z[14]=Array("arclist","\r\n        <li><a href=\"[field:arcurl/]\">[field:title/]</a></li>\r\n        ",3278,3410);
$z[14][4]=array();
$z[14][4]['row']="14";
$z[14][4]['titlelen']="32";
$z[14][4]['noflag']="h";
$z[15]=Array("global","",5387,5417);
$z[15][4]=array();
$z[15][4]['name']="cfg_templeturl";
$z[16]=Array("global","",5794,5824);
$z[16][4]=array();
$z[16][4]['name']="cfg_templeturl";
$z[17]=Array("arclist","\r\n            <li><span>[field:pubdate function=\"MyDate('m-d',@me)\"/]</span><a href=\"[field:arcurl/]\">[field:title/]</a></li>\r\n            ",6462,6665);
$z[17][4]=array();
$z[17][4]['flag']="a";
$z[17][4]['row']="6";
$z[17][4]['orderby']="pubdate";
$z[18]=Array("arclist","\r\n                <li><a href=\"[field:arcurl/]\">[field:image/]<span class=\"title\">[field:title/]</span></a></li>\r\n                ",7026,7253);
$z[18][4]=array();
$z[18][4]['row']="10";
$z[18][4]['orderby']="pubdate";
$z[18][4]['type']="image.";
$z[18][4]['imgwidth']="143";
$z[18][4]['imgheight']="106";
$z[19]=Array("mda","",7401,7426);
$z[19][4]=array();
$z[19][4]['name']="700x90";
$z[20]=Array("channelartlist","\r\n      <dl class=\"tbox\">\r\n        <dt><strong><a href=\"{dede:field name='typeurl'/}\">{dede:field name='typename'/}</a></strong><span class=\"more\"><a href=\"{dede:field name='typeurl'/}\">更多...</a></span></dt>\r\n        <dd>\r\n          <ul class=\"d1 ico3\">\r\n            {dede:arclist titlelen='60' row='8'}\r\n            <li><span>[field:pubdate function=\"MyDate('m-d',@me)\"/]</span><a href=\"[field:arcurl /]\">[field:title /]</a></li>\r\n            {/dede:arclist}\r\n          </ul>\r\n        </dd>\r\n      </dl>\r\n      ",7483,8042);
$z[20][4]=array();
$z[21]=Array("arclist","\r\n            <li><a href=\"[field:arcurl/]\">[field:title/]</a> <span><small>点击:</small>[field:click/]</span> <span><small>评价:</small>[field:scores/]</span></li>\r\n            ",8671,8933);
$z[21][4]=array();
$z[21][4]['orderby']="scores";
$z[21][4]['row']="8";
$z[21][4]['subday']="30";
$z[21][4]['titlelen']="42";
$z[22]=Array("feedback","\r\n            <li><small><a href=\"#\" class=\"username\">[field:username function=\"(@me=='guest' ? '游客' : @me)\"/]</a> 评论 <a\r\n                href=\"[field:global.cfg_phpurl/]/feedback.php?aid=[field:aid/]\" class=\"title\">[field:title/]</a></small>\r\n              <p>[field:msg/]</p>\r\n            </li>\r\n            ",9063,9447);
$z[22][4]=array();
$z[22][4]['row']="5";
$z[22][4]['titlelen']="24";
$z[22][4]['infolen']="80";
$z[23]=Array("global","",9655,9683);
$z[23][4]=array();
$z[23][4]['name']="cfg_memberurl";
$z[24]=Array("php","\r\n                if(preg_match(\"#2#\", \$safe_gdopen))\r\n                {\r\n                echo '\r\n                <div class=\"fb\"><span>验证码:</span>\r\n                  <input type=\"text\" name=\"vdcode\" size=\"8\" class=\"ipt-txt\"/>\r\n                  <img id=\"vdimgck\" align=\"absmiddle\" onClick=\"this.src=this.src+\\'?\\'\" style=\"cursor:pointer;margin-left:0px;text-transform:uppercase;\" alt=\"看不清？点击更换\"\r\n                       src=\"'.\$cfg_cmspath.'/include/vdimgck.php\"/></div>\r\n                ';\r\n                }\r\n                ",10255,10825);
$z[24][4]=array();
$z[25]=Array("global","",10963,10991);
$z[25][4]=array();
$z[25][4]['name']="cfg_memberurl";
$z[26]=Array("global","",11056,11084);
$z[26][4]=array();
$z[26][4]['name']="cfg_memberurl";
$z[27]=Array("memberlist","\r\n              <li><a href=\"[field:spaceurl/]\" target=\"_blank\"><img src=\"[field:face/]\" alt='[field:spacename/]' width=\"52\" height=\"52\"/>[field:uname/]</a></li>\r\n              ",11426,11655);
$z[27][4]=array();
$z[27][4]['row']="6";
$z[27][4]['signlen']="30";
$z[28]=Array("mda","",11870,11900);
$z[28][4]=array();
$z[28][4]['name']="250x250_SSP";
$z[29]=Array("arclist","\r\n            <li class='dotline'><a href=\"[field:arcurl/]\">[field:title/]</a></li>\r\n            ",12104,12289);
$z[29][4]=array();
$z[29][4]['flag']="c";
$z[29][4]['titlelen']="42";
$z[29][4]['row']="16";
$z[29][4]['tagid']="dedecms";
$z[29][4]['pagesize']="8";
$z[30]=Array("mda","",12419,12445);
$z[30][4]=array();
$z[30][4]['name']="250x250";
$z[31]=Array("arclist","\r\n            <li class='dotline'><a href=\"[field:arcurl/]\">[field:title/]</a></li>\r\n            ",12645,12812);
$z[31][4]=array();
$z[31][4]['sort']="hot";
$z[31][4]['subday']="30";
$z[31][4]['titlelen']="42";
$z[31][4]['row']="6";
$z[32]=Array("global","",13035,13060);
$z[32][4]=array();
$z[32][4]['name']="cfg_cmsurl";
$z[33]=Array("qrcode","",13142,13156);
$z[33][4]=array();
$z[34]=Array("flinktype","\r\n			<a href=\"#\" _for=\"flink_[field:id/]\">[field:typename/]</a> \r\n		",13328,13444);
$z[34][4]=array();
$z[34][4]['type']="dedecms";
$z[35]=Array("flinktype","\r\n    <dd id=\"flink_[field:id/]\">\r\n      <ul class=\"f5\">\r\n        {dede:flink/}\r\n      </ul>\r\n    </dd>\r\n    ",13590,13747);
$z[35][4]=array();
$z[35][4]['type']="dedecms";
$z[36]=Array("mda","",13838,13863);
$z[36][4]=array();
$z[36][4]['name']="728x90";
$z[37]=Array("include","",13871,13908);
$z[37][4]=array();
$z[37][4]['filename']="footer.htm";

?>