<?php  if(!defined('DEDEINC')) exit('jianzhicms');
/**
 * 验证小助手
 *
 * @version        $Id: validate.helper.php 1 2010-07-05 11:43:09Z tianya $
 * @package        JIANZHICMS.Helpers
 * @copyright      Copyright (c) 2007 - 2010, JianZhi, Inc.
 * @license        http://help.jianzhinet.cn/usersguide/license.html
 * @link           http://www.jianzhinet.cn
 */

//邮箱格式检查
if ( ! function_exists('CheckEmail'))
{
    function CheckEmail($email)
    {
        if (!empty($email))
        {
            return preg_match('/^[a-z0-9]+([\+_\-\.]?[a-z0-9]+)*@([a-z0-9]+[\-]?[a-z0-9]+\.)+[a-z]{2,6}$/i', $email);
        }
        return FALSE;
    }
}

