<?php
/**
 * 管理后台首页
 *
 * @version        $Id: index.php 1 11:06 2010年7月13日Z tianya $
 * @package        DedeCMS.Administrator
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.dedecms.com/usersguide/license.html
 * @link           http://www.dedecms.com
 */
// echo 123;exit;
if ( preg_match("#PHP (.*) Development Server#",$_SERVER['SERVER_SOFTWARE']) )
{
    if ( $_SERVER['REQUEST_URI'] == dirname($_SERVER['SCRIPT_NAME']) )
    {
        header('HTTP/1.1 301 Moved Permanently');
        header('Location:'.$_SERVER['REQUEST_URI'].'/');
    }
}
require_once(dirname(__FILE__)."/config.php");
require_once(DEDEINC.'/dedetag.class.php');

$openitem = 100;
require(dirname(__FILE__).'/inc/inc_menu_module.php');
require(DEDEADMIN.'/inc/inc_menu_func2.php');
include(DEDEADMIN.'/templets/index2.htm');
exit();