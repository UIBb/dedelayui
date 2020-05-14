<?php
/**
 * 栏目管理
 *
 * @version        $Id: catalog_main.php 1 14:31 2010年7月12日Z tianya $
 * @package        DedeCMS.Administrator
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.dedecms.com/usersguide/license.html
 * @link           http://www.dedecms.com
 */
require_once(dirname(__FILE__) . "/config.php");
/*--------------------------
//增加文档
function addArchives();
---------------------------*/
if ($dopost == "addArchives") {
    //默认文章调用发布表单
    if (empty($cid) && empty($channelid)) {
        header("location:article_add.php");
        exit();
    }
    if (!empty($channelid)) {
        //根据模型调用发布表单
        $row = $dsql->GetOne("SELECT addcon FROM #@__channeltype WHERE id='$channelid'");
    } else {
        //根据栏目调用发布表单
        $row = $dsql->GetOne("SELECT ch.addcon FROM `#@__arctype` tp LEFT JOIN `#@__channeltype` ch ON ch.id=tp.channeltype WHERE tp.id='$cid' ");
    }
    $gurl = $row["addcon"];
    if ($gurl == "") {
        layerMsg("对不起，你指的栏目可能有误！", "catalog_main.php", 0);
        exit();
    }
    //跳转并传递参数
    header("location:{$gurl}?channelid={$channelid}&cid={$cid}");
    exit();
} /*--------------------------
//管理文档
function listArchives();
---------------------------*/
else if ($dopost == "getAllCatalog") {
    $sql="SELECT b.typename as channelname,(SELECT count(*) from #@__archives WHERE arcrank!='-2' and typeid = a.id) as totalarc,a.* FROM `#@__arctype` a,`#@__channeltype` b WHERE a.channeltype=b.id";
    $dsql->SetQuery($sql);
    $dsql->Execute();
    // var_dump($dsql->queryString); 
    while ($arr = $dsql->GetArray()) {
        $res[]=$arr;
    }
    echo json_encode($res);
    exit;
    while ($row = $dsql->GetObject(0)) {
        if ($cfg_admin_channel == 'array' && !in_array($row->id, $admin_catalogs)) {
            continue;
        }
        $typeDir = $row->typedir;
        $typeName = $row->typename;
        $ispart = $row->ispart;
        $id = $row->id;
        $rank = $row->sortrank;
        $channelid = $row->channeltype;
        $cInfos = $dsql->GetOne(" SELECT typename FROM  `#@__channeltype` WHERE id='$channelid' ");
        $ctypename = $cInfos['typename'];
        $rowid = $dsql->GetOne("SELECT id From `#@__arctype` WHERE reid='$id' order by sortrank asc limit 1");
        if (is_array($rowid)) {
            $fa = " icon-menu";
        } else {
            $fa = " icon-minus";
        }
        if ($row->ishidden == '1') {
            $nss = "<span class='layui-btn layui-btn-xs layui-btn-warm'>隐</span>";
        } else {
            $nss = '';
        }
    }
} else {
    include DedeInclude('templets/catalog_main.htm');
}