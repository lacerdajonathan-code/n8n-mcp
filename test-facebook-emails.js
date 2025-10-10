#!/usr/bin/env node

/**
 * Script de teste para e-mails do Facebook
 * Testa a extração de dados dos e-mails fornecidos
 */

// E-mails de exemplo do Facebook fornecidos
const facebookEmails = [
  {
    from: "security@facebookmail.com",
    subject: "119854 é seu código de redefinição de senha",
    html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional //EN"><html><head><title>Facebook</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><style nonce="7Im8h83G">@media all and (max-width: 480px){*[class].ib_t{min-width:100%!important}*[class].ib_row{display:block!important}*[class].ib_ext{display:block!important;padding:10px 0 5px;vertical-align:top!important;width:100%!important}*[class].ib_img,*[class].ib_mid{vertical-align:top!important}*[class].mb_blk{display:block!important;padding-bottom:10px;width:100%!important}*[class].mb_hide{display:none!important}*[class].mb_inl{display:inline!important}*[class].d_mb_flex{display:block!important}}.d_mb_show{display:none}.d_mb_flex{display:flex}@media only screen and (max-device-width: 480px){.d_mb_hide{display:none!important}.d_mb_show,.d_mb_flex{display:block!important}}.mb_text h1,.mb_text h2,.mb_text h3,.mb_text h4,.mb_text h5,.mb_text h6{line-height:normal}.mb_work_text h1{font-size:18px;line-height:normal;margin-top:4px}.mb_work_text h2,.mb_work_text h3{font-size:16px;line-height:normal;margin-top:4px}.mb_work_text h4,.mb_work_text h5,.mb_work_text h6{font-size:14px;line-height:normal}.mb_work_text a{color:#1270e9}.mb_work_text p{margin-top:4px}\r\n</style></head><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr><td width="100%" align="center" style=""><table border="0" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;"><tr><td width="1160" align="center" style=""><body style="max-width:580px;margin:0 auto;" dir="ltr" bgcolor="#ffffff"><table border="0" cellspacing="0" cellpadding="0" align="center" id="email_table" style="border-collapse:collapse;max-width:580px;margin:0 auto;"><tr><td id="email_content" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;background:#ffffff;"><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr style=""><td height="20" style="line-height:20px;" colspan="3">&nbsp;</td></tr><tr><td height="1" colspan="3" style="line-height:1px;"><span style="color:#FFFFFF;font-size:1px;opacity:0;">Infity Horizons -, falta só mais uma etapa para alterar sua senha.</span></td></tr><tr><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td><td style=""><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr style=""><td height="15" style="line-height:15px;" colspan="3">&nbsp;</td></tr><tr><td width="32" align="left" valign="middle" style="height:32;line-height:0px;"><a href="https://www.facebook.com/profile.php?id=100086879109229" style="color:#1b74e4;text-decoration:none;"><img width="32" src="https://static.xx.fbcdn.net/rsrc.php/v4/yS/r/ZirYDPWh0YD.png" height="32" style="border:0;" /></a></td><td width="32" align="right" valign="middle" style="height:32;line-height:0px;"><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><td style=""><a style="color:#141823;text-decoration:none;font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;">Infity Horizons - ihorizons</a></td><td width="5" style="display:block;width:5px;">&nbsp;&nbsp;&nbsp;</td><td style=""><a href="https://www.facebook.com/profile.php?id=100086879109229" style="color:#1b74e4;text-decoration:none;"><img width="32" src="https://scontent.xx.fbcdn.net/v/t39.30808-1/310060034_103062342599736_4384672410148304648_n.jpg?stp=cp0_dst-jpg_mk1-ffffff-0.00_s64x64_tt6&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=68c40f&amp;_nc_ohc=DXp2K9Z-PFgQ7kNvwHG1pm_&amp;_nc_oc=AdlGRULELdpKLZt66QpR7U3o_qOhoPWUsXPuA6Gh47_KEBC9NJSCLYKX58PeadweOLCGQVzFZtC861K8ZRbQDJkL&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_zt=24&amp;_nc_ht=scontent.xx&amp;_nc_gid=EUHvnqzOPUvwVM5TbHaxdQ&amp;oh=00_Afcp1QJzc27QbOvBUgszoPJVec0rTU-7hUxQgpIaIk5mmQ&amp;oe=68EF1F14" height="32" style="border:0;" /></a></td></table></td></tr><tr style="border-bottom:solid 1px #E8EAEE;"><td style="line-height:0;font-size:0;padding-top:15px;" colspan="100">&nbsp;</td></tr></table></td><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td></tr><tr><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td><td style=""><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr style=""><td height="28" style="line-height:28px;">&nbsp;</td></tr><tr><td style=""><span class="mb_work_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:24px;line-height:24px;color:#1D2129;word-break:break-word;"><strong>Apenas mais uma etapa para mudar a senha</strong></span></td></tr><tr style=""><td height="28" style="line-height:28px;">&nbsp;</td></tr><tr><td style=""><span class="mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823;"><span style="font-size:15px;"><div><div style="margin-top:0px; margin-bottom:20px;">Olá, Infity Horizons -.</div>Recebemos seu pedido de alteração de senha. Insira este código no Facebook:</div><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;margin-top:20px;margin-bottom:20px;"><tr><td style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;padding:14px 32px 14px 32px;background-color:#f2f2f2;border-left:1px solid #ccc;border-right:1px solid #ccc;border-top:1px solid #ccc;border-bottom:1px solid #ccc;text-align:center;border-radius:7px;display:block;border:1px solid #1877f2;background:#e7f3ff;"><span class="mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823;"><span style="font-size:17px; font-family: Roboto; font-weight: 700; margin-left: 0px;\r\n   margin-right: 0px;letter-spacing: 5px">119854</span></span></td></tr></table><div style="text-align:center; margin-bottom:20px;"><span class="mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823;;color: #65676B;\r\n            text-align: center;\r\n            font-feature-settings: 'liga' off, 'clig' off;\r\n            /* Meta 3 */\r\n            font-family: Roboto;\r\n            font-size: 13px;\r\n            font-style: normal;\r\n            font-weight: 400;\r\n            line-height: 16px; /* 123.077% */">Não compartilhe esse código com ninguém.</span></div><br /><div><span style="color:#333333;font-weight:bold;">Se alguém solicitar esse código</span></div>Não compartilhe esse código com ninguém, especialmente se a pessoa disser que trabalha para o Facebook ou para a Meta. Ela pode estar tentando invadir sua conta.<br /><br /><div><span style="color:#333333;font-weight:bold;">Não solicitou esse código?</span></div>Se você recebeu este email, mas não está tentando redefinir sua senha, <a href="https://www.facebook.com/login/recover/cancel/?n=119854&amp;id=100086879109229&amp;i=www&amp;ocl=0" style="color:#1b74e4;text-decoration:none;">avise-nos</a>. Desde que você não compartilhe esse código com ninguém, não é necessário tomar nenhuma outra medida. Para tornar sua conta mais segura, acesse o <a href="https://www.facebook.com/securitycheckup?ref=email_password_reset" style="color:#0A7CFF;text-decoration:none;">Checkup de Segurança.</a><br /><br /></span><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr><td style=""><span class="mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823;">Obrigado,<br />Segurança do Facebook</span></td></tr><tr style=""><td height="32" style="line-height:32px;">&nbsp;</td></tr><tr><td style=""><span class="mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823;;color: #65676B;">Tem dúvida se o email foi realmente enviado por nós? Acesse a Central de Ajuda para confirmar: <a href="https://www.facebook.com/help/check-email?ref=email_password_reset" style="color:#1b74e4;text-decoration:none;">www.facebook.com/help/check-email</a></span></td></tr><tr style=""><td height="32" style="line-height:32px;">&nbsp;</td></tr></table><div itemscope="itemscope" itemtype="http://schema.org/EmailMessage"><meta itemprop="description" content="Alterar senha" /><div itemprop="potentialAction" itemscope="itemscope" itemtype="http://schema.org/ViewAction"><link itemprop="target" href="https://www.facebook.com/recover/code/?n=119854&amp;s=23&amp;exp_locale=pt_BR&amp;cuid=AYj3sjakGd78O3aeICVHs8-sMupt1UPGIQCFOTapFBz5oEA_Gv13IipxH2aJfr7uTcnH02LbuIcL1V0WcFht4N-nYAzsYPMCieMQO70UlD2ipw" /><link itemprop="url" href="https://www.facebook.com/recover/code/?n=119854&amp;s=23&amp;exp_locale=pt_BR&amp;cuid=AYj3sjakGd78O3aeICVHs8-sMupt1UPGIQCFOTapFBz5oEA_Gv13IipxH2aJfr7uTcnH02LbuIcL1V0WcFht4N-nYAzsYPMCieMQO70UlD2ipw" /><meta itemprop="name" content="Alterar senha" /></div><div itemprop="publisher" itemscope="itemscope" itemtype="http://schema.org/Organization"><meta itemprop="name" content="Facebook" /><link itemprop="url" href="https://www.facebook.com" /></div></div></span></td></tr><tr style=""><td height="28" style="line-height:28px;">&nbsp;</td></tr></table></td><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td></tr></table></body></td></tr></table></td></tr></table></html>`,
    to: "Infity Horizons - ihorizons <jonathanln2003@yahoo.com.br>"
  },
  {
    from: "security@facebookmail.com",
    subject: "Sua senha foi alterada",
    html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional //EN"><html><head><title>Facebook</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><style nonce="MQ4830y2">@media all and (max-width: 480px){*[class].ib_t{min-width:100%!important}*[class].ib_row{display:block!important}*[class].ib_ext{display:block!important;padding:10px 0 5px;vertical-align:top!important;width:100%!important}*[class].ib_img,*[class].ib_mid{vertical-align:top!important}*[class].mb_blk{display:block!important;padding-bottom:10px;width:100%!important}*[class].mb_hide{display:none!important}*[class].mb_inl{display:inline!important}*[class].d_mb_flex{display:block!important}}.d_mb_show{display:none}.d_mb_flex{display:flex}@media only screen and (max-device-width: 480px){.d_mb_hide{display:none!important}.d_mb_show,.d_mb_flex{display:block!important}}.mb_text h1,.mb_text h2,.mb_text h3,.mb_text h4,.mb_text h5,.mb_text h6{line-height:normal}.mb_work_text h1{font-size:18px;line-height:normal;margin-top:4px}.mb_work_text h2,.mb_work_text h3{font-size:16px;line-height:normal;margin-top:4px}.mb_work_text h4,.mb_work_text h5,.mb_work_text h6{font-size:14px;line-height:normal}.mb_work_text a{color:#1270e9}.mb_work_text p{margin-top:4px}\r\n</style></head><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr><td width="100%" align="center" style=""><table border="0" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;"><tr><td width="960" align="center" style=""><body style="max-width:480px;margin:0 auto;" dir="ltr" bgcolor="#ffffff"><table border="0" cellspacing="0" cellpadding="0" align="center" id="email_table" style="border-collapse:collapse;max-width:480px;margin:0 auto;"><tr><td id="email_content" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;background:#ffffff;"><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr style=""><td height="20" style="line-height:20px;" colspan="3">&nbsp;</td></tr><tr><td height="1" colspan="3" style="line-height:1px;"><span style="color:#FFFFFF;font-size:1px;opacity:0;">Avise-nos se não foi você, Infity Horizons -.</span></td></tr><tr><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td><td style=""><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr style=""><td height="15" style="line-height:15px;" colspan="3">&nbsp;</td></tr><tr><td width="32" align="left" valign="middle" style="height:32;line-height:0px;"><a href="https://www.facebook.com/profile.php?id=100086879109229" style="color:#1b74e4;text-decoration:none;"><img width="32" src="https://static.xx.fbcdn.net/rsrc.php/v4/yS/r/ZirYDPWh0YD.png" height="32" style="border:0;" /></a></td><td width="32" align="right" valign="middle" style="height:32;line-height:0px;"><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><td style=""><a style="color:#141823;text-decoration:none;font-family:SFProText-Regular, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:15px;line-height:20px;font-weight:400;letter-spacing:-0.24px;">Infity Horizons - ihorizons</a></td><td width="5" style="display:block;width:5px;">&nbsp;&nbsp;&nbsp;</td><td style=""><a href="https://www.facebook.com/profile.php?id=100086879109229" style="color:#1b74e4;text-decoration:none;"><img width="32" src="https://scontent.xx.fbcdn.net/v/t39.30808-1/310060034_103062342599736_4384672410148304648_n.jpg?stp=cp0_dst-jpg_mk1-ffffff-0.00_s64x64_tt6&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=68c40f&amp;_nc_ohc=DXp2K9Z-PFgQ7kNvwFM4j-l&amp;_nc_oc=AdkH_hJ2qII7fChALda-0Z_D10V0P0j-3xtO_442mVrsoidBFfycPdWGsFokYWgkj9dwib5OsBvYq6ZMU84S39sg&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_zt=24&amp;_nc_ht=scontent.xx&amp;_nc_gid=z5B5XousjRT0ZDmxBJitlA&amp;oh=00_Afe8TKuI8RgZDPxALI8Svse6NZ6gJ3X8OI3tvpd0sL8VfA&amp;oe=68EF1F14" height="32" style="border:0;" /></a></td></table></td></tr><tr style="border-bottom:solid 1px #E8EAEE;"><td style="line-height:0;font-size:0;padding-top:15px;" colspan="100">&nbsp;</td></tr></table></td><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td></tr><tr><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td><td style=""><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr style=""><td height="28" style="line-height:28px;">&nbsp;</td></tr><tr><td style=""><span class="mb_work_text" style="font-family:SFProDisplay-Regular, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:24px;line-height:28px;color:#1D2129;word-break:break-word;font-weight:700;letter-spacing:0.36px;">Alerta de segurança: alteração de senha</span></td></tr><tr style=""><td height="28" style="line-height:28px;">&nbsp;</td></tr><tr><td style=""><span class="mb_text" style="font-family:SFProText-Regular, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:15px;line-height:20px;color:#141823;font-weight:400;letter-spacing:-0.24px;">Olá, Infity Horizons -.</span></td></tr><tr style=""><td height="28" style="line-height:28px;">&nbsp;</td></tr><tr><td style=""><span class="mb_text" style="font-family:SFProText-Regular, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:15px;line-height:20px;color:#141823;font-weight:400;letter-spacing:-0.24px;">Alguém acabou de usar o endereço de email <strong>jonathanln2003&#064;yahoo.com.br</strong> para entrar na sua conta e alterar a senha.  Se não foi você, estamos aqui para ajudá-lo(a) a tomar algumas medidas simples para proteger sua conta.</span></td></tr><tr style=""><td height="28" style="line-height:28px;">&nbsp;</td></tr></table></td><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td></tr><tr><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td><td style=""><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr style=""><td height="10" style="line-height:10px;">&nbsp;</td></tr><tr><td style=""><span class="mb_text" style="font-family:SFProText-Regular, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:15px;line-height:20px;font-weight:bold;color:#141823;letter-spacing:-0.24px;">Foi você?</span></td></tr><tr style=""><td height="10" style="line-height:10px;">&nbsp;</td></tr><tr><td style=""><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr><td style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;background:#FFFFFF;border:solid 1px #E8EAEE;border-radius:6px;padding:16px;display:block;"><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr><td align="left" style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;padding-bottom:0px;"><img width="500px" src="https://external.xx.fbcdn.net/static_map.php?v=2063&amp;ccb=4-4&amp;size=500x200&amp;center=-23.55%2C-46.6333&amp;zoom=10&amp;language=pt_BR&amp;scale=2&amp;_nc_client_caller=static_map.php&amp;_nc_client_id=account_center_email" height="200px" style="border:0;border-radius:8px;margin-bottom:10px;" /></td></tr><tr><td align="left" style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;padding-top:0px;padding-bottom:0px;"><table border="0" width="100%" cellspacing="0" cellpadding="0" align="left" class="ib_t" style="border-collapse:collapse;min-width:420px;"><tr class="ib_row"><td valign="middle" style="padding-right:10px;font-size:0px;" class="ib_img"><img width="24px" src="https://static.xx.fbcdn.net/rsrc.php/v4/yN/r/uqz0HYvMWqo.png" height="24px" style="border:0;" /></td><td width="100%" valign="middle" style="padding-right:10px;" class="ib_mid"><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr><td align="left" style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;"><span class="mb_text" style="font-family:SFProText-Regular, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:15px;line-height:20px;color:#141823;font-weight:400;letter-spacing:-0.24px;;line-height: 30px;">São Paulo, SÃO PAULO (STATE), BR</span></td></tr></table></td></tr></table></td></tr><tr><td align="left" style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;padding-top:0px;padding-bottom:0px;"><table border="0" width="100%" cellspacing="0" cellpadding="0" align="left" class="ib_t" style="border-collapse:collapse;min-width:420px;"><tr class="ib_row"><td valign="middle" style="padding-right:10px;font-size:0px;" class="ib_img"><img width="24px" src="https://static.xx.fbcdn.net/rsrc.php/v4/yE/r/gDNDkK3bVEA.png" height="24px" style="border:0;" /></td><td width="100%" valign="middle" style="padding-right:10px;" class="ib_mid"><span class="mb_text" style="font-family:SFProText-Regular, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:15px;line-height:20px;color:#141823;font-weight:400;letter-spacing:-0.24px;;line-height: 30px;">Edge (Chromium Based), Windows</span></td></tr></table></td></tr><tr><td align="left" style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;padding-top:0px;"><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr><td style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;"><table border="0" width="100%" cellspacing="0" cellpadding="0" align="left" class="ib_t" style="border-collapse:collapse;min-width:420px;"><tr class="ib_row"><td valign="middle" style="padding-right:10px;font-size:0px;" class="ib_img"><img width="24px" src="https://static.xx.fbcdn.net/rsrc.php/v4/yP/r/SAdErb3O185.png" height="24px" style="border:0;" /></td><td width="100%" valign="middle" style="padding-right:10px;" class="ib_mid"><span class="mb_text" style="font-family:SFProText-Regular, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:15px;line-height:20px;color:#141823;font-weight:400;letter-spacing:-0.24px;;line-height: 30px;">Sexta-feira, 10 de outubro de 2025 às 14:31</span></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr><tr style=""><td height="28" style="line-height:28px;">&nbsp;</td></tr></table></td><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td></tr><tr><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td><td style=""><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr style=""><td height="2" style="line-height:2px;">&nbsp;</td></tr><tr><td align="middle" style=""><a href="https://www.facebook.com/hacked/disavow?u=100086879109229&amp;n=ETQl6hYD&amp;at=1760117468&amp;a=password_change&amp;context=Q7DVBAJtRU4znLcnP5eVa-TYJilo25J701ixAp7ReK9FMu01Zmrymt81mkXl1bHND9et9NkOakZdkFAm1yG9W1LfE3RKFlcO3MKmtlzSaFOsMxPU1E8cnJHBwQvbzdJayEc_tJq50lJoCABIP5h0S81NbOW0KGjdBflLExbeCK-RcnPCzAcdS4talddyw0TSDXFD3nFu9yPxW58JWt3W6v8nzsXVz87JReK71oVBYsDHSTaHUIYx7yIZB01-14Iwxpg&amp;l=pt_BR&amp;ext=1760722271&amp;hash=AXCcgaYCiAPVbJWcZIk" style="color:#1b74e4;text-decoration:none;"><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:initial;"><tr><td style="border-collapse:collapse;border-radius:6px;text-align:center;display:block;background:#1877f2;padding:8px 20px 8px 20px;"><a href="https://www.facebook.com/hacked/disavow?u=100086879109229&amp;n=ETQl6hYD&amp;at=1760117468&amp;a=password_change&amp;context=Q7DVBAJtRU4znLcnP5eVa-TYJilo25J701ixAp7ReK9FMu01Zmrymt81mkXl1bHND9et9NkOakZdkFAm1yG9W1LfE3RKFlcO3MKmtlzSaFOsMxPU1E8cnJHBwQvbzdJayEc_tJq50lJoCABIP5h0S81NbOW0KGjdBflLExbeCK-RcnPCzAcdS4talddyw0TSDXFD3nFu9yPxW58JWt3W6v8nzsXVz87JReK71oVBYsDHSTaHUIYx7yIZB01-14Iwxpg&amp;l=pt_BR&amp;ext=1760722271&amp;hash=AXCcgaYCiAPVbJWcZIk" style="color:#1b74e4;text-decoration:none;display:block;"><center><font size="3"><span style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;white-space:nowrap;font-weight:bold;vertical-align:middle;color:#ffffff;font-size:17px;">Não&nbsp;fui&nbsp;eu</span></font></center></a></td></tr></table></a></td></tr><tr style=""><td height="8" style="line-height:8px;">&nbsp;</td></tr><tr style=""><td height="13" style="line-height:13px;">&nbsp;</td></tr></table></td><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td></tr><tr><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td><td style=""><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr><td style=""><span class="mb_text" style="font-family:SFProText-Regular, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:15px;line-height:20px;color:#141823;font-weight:400;letter-spacing:-0.24px;">Se foi você, ignore o email.</span></td></tr><tr style=""><td height="32" style="line-height:32px;">&nbsp;</td></tr><tr><td style=""><span class="mb_text" style="font-family:SFProText-Regular, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:15px;line-height:20px;color:#141823;font-weight:400;letter-spacing:-0.24px;">Obrigado,<br />Segurança do Facebook</span></td></tr><tr style=""><td height="32" style="line-height:32px;">&nbsp;</td></tr><tr><td style=""><span class="mb_text" style="font-family:SFProText-Regular, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:15px;line-height:20px;color:#141823;font-weight:400;letter-spacing:-0.24px;;color: #65676B;">Tem dúvida se o email foi realmente enviado por nós? Acesse a Central de Ajuda para confirmar: <a href="https://www.facebook.com/help/check-email?ref=email_password_changed" style="color:#1b74e4;text-decoration:none;">www.facebook.com/help/check-email</a></span></td></tr><tr style=""><td height="32" style="line-height:32px;">&nbsp;</td></tr></table></td><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td></tr></table></body></td></tr></table></td></tr></table></html>`,
    to: "Infity Horizons - ihorizons <jonathanln2003@yahoo.com.br>"
  }
];

// Função para limpar HTML
function limparHTML(html) {
  return html
    .replace(/<[^>]*>/g, ' ') // Remove tags HTML
    .replace(/\s+/g, ' ') // Remove espaços múltiplos
    .replace(/&nbsp;/g, ' ') // Remove &nbsp;
    .replace(/&amp;/g, '&') // Decodifica &amp;
    .replace(/&lt;/g, '<') // Decodifica &lt;
    .replace(/&gt;/g, '>') // Decodifica &gt;
    .replace(/&quot;/g, '"') // Decodifica &quot;
    .trim();
}

// Função para extrair dados do e-mail do Facebook
function extrairDadosFacebook(email) {
  const emailContent = email.html || email.text || '';
  const subject = email.subject || '';
  const from = email.from || '';
  const to = email.to || '';

  // Extrair nome do usuário (do campo "to")
  const nomeUsuarioMatch = to.match(/^([^<]+)/);
  const nomeUsuario = nomeUsuarioMatch ? nomeUsuarioMatch[1].trim() : 'Usuário não identificado';

  // Extrair tipo de notificação baseado no assunto
  let tipoNotificacao = 'Notificação do Facebook';
  if (subject.includes('código de redefinição')) {
    tipoNotificacao = 'Redefinição de Senha';
  } else if (subject.includes('senha foi alterada')) {
    tipoNotificacao = 'Senha Alterada';
  } else if (subject.includes('login perto de')) {
    tipoNotificacao = 'Login em Novo Dispositivo';
  }

  // Extrair código de verificação se existir
  const codigoMatch = emailContent.match(/\b\d{6}\b/);
  const codigoVerificacao = codigoMatch ? codigoMatch[0] : 'N/A';

  // Extrair localização se existir
  const localizacaoMatch = emailContent.match(/perto de ([^,]+)/i);
  const localizacao = localizacaoMatch ? localizacaoMatch[1] : 'Localização não identificada';

  // Extrair dispositivo se existir
  const dispositivoMatch = emailContent.match(/(Edge|Chrome|Firefox|Safari)[^<]*/i);
  const dispositivo = dispositivoMatch ? dispositivoMatch[0] : 'Dispositivo não identificado';

  // Limpar conteúdo principal
  let conteudoPrincipal = emailContent;
  if (emailContent.includes('Olá,')) {
    const conteudoMatch = emailContent.match(/Olá,([\s\S]*?)(Obrigado|Tem dúvida)/i);
    if (conteudoMatch) {
      conteudoPrincipal = conteudoMatch[1].trim();
    }
  }
  conteudoPrincipal = limparHTML(conteudoPrincipal);

  // Extrair links importantes
  const linksImportantes = [];
  const linkRegex = /<a[^>]+href="([^"]+)"[^>]*>([^<]+)<\/a>/g;
  let match;

  while ((match = linkRegex.exec(emailContent)) !== null) {
    const url = match[1];
    const texto = match[2];
    
    // Filtrar apenas links importantes
    if (url.includes('facebook.com') && (texto.includes('Não fui eu') || texto.includes('Alterar senha') || texto.includes('Checkup'))) {
      linksImportantes.push({
        url: url,
        texto: texto
      });
    }
  }

  return {
    'Nome do Usuário': nomeUsuario,
    'Tipo de Notificação': tipoNotificacao,
    'Assunto': subject,
    'Remetente': from,
    'Código de Verificação': codigoVerificacao,
    'Localização': localizacao,
    'Dispositivo': dispositivo,
    'Conteúdo Principal': conteudoPrincipal,
    'Links Importantes': linksImportantes
  };
}

// Função para formatar mensagem para WhatsApp
function formatarMensagemFacebook(data) {
  const nomeUsuario = data['Nome do Usuário'];
  const tipoNotificacao = data['Tipo de Notificação'];
  const assunto = data['Assunto'];
  const codigoVerificacao = data['Código de Verificação'];
  const localizacao = data['Localização'];
  const dispositivo = data['Dispositivo'];
  const conteudoPrincipal = data['Conteúdo Principal'];
  const linksImportantes = data['Links Importantes'];

  // Formatar links importantes
  let linksFormatados = '';
  if (linksImportantes && linksImportantes.length > 0) {
    linksFormatados = linksImportantes.map(link => `• ${link.texto}: ${link.url}`).join('\n');
  } else {
    linksFormatados = 'Nenhum link importante encontrado';
  }

  // Criar mensagem formatada
  const mensagem = `*🔔 Notificação do Facebook*

*Usuário:*
${nomeUsuario}

*Tipo:*
${tipoNotificacao}

*Assunto:*
${assunto}

*Detalhes:*
${conteudoPrincipal.substring(0, 200)}...

*Informações Adicionais:*
• Código: ${codigoVerificacao}
• Localização: ${localizacao}
• Dispositivo: ${dispositivo}

*Links Importantes:*
${linksFormatados}`;

  return mensagem;
}

// Função principal de teste
function testarEmailsFacebook() {
  console.log('🧪 Testando E-mails do Facebook');
  console.log('===============================\n');
  
  facebookEmails.forEach((email, index) => {
    console.log(`📧 E-mail ${index + 1}:`);
    console.log(`   De: ${email.from}`);
    console.log(`   Para: ${email.to}`);
    console.log(`   Assunto: ${email.subject}\n`);
    
    // Testar filtro IF
    console.log('🔍 Testando filtro IF - Facebook:');
    const isFacebook = email.from.includes('security@facebookmail.com');
    console.log(`   E-mail é do Facebook: ${isFacebook ? '✅ SIM' : '❌ NÃO'}\n`);
    
    if (!isFacebook) {
      console.log('❌ Workflow interrompido - e-mail não é do Facebook\n');
      return;
    }
    
    // Extrair dados
    console.log('📊 Extraindo dados do e-mail:');
    const dadosExtraidos = extrairDadosFacebook(email);
    console.log(`   Nome do Usuário: ${dadosExtraidos['Nome do Usuário']}`);
    console.log(`   Tipo de Notificação: ${dadosExtraidos['Tipo de Notificação']}`);
    console.log(`   Código de Verificação: ${dadosExtraidos['Código de Verificação']}`);
    console.log(`   Localização: ${dadosExtraidos['Localização']}`);
    console.log(`   Dispositivo: ${dadosExtraidos['Dispositivo']}`);
    console.log(`   Links Importantes: ${dadosExtraidos['Links Importantes'].length} encontrados\n`);
    
    // Formatar mensagem
    console.log('💬 Formatando mensagem para WhatsApp:');
    const mensagemFormatada = formatarMensagemFacebook(dadosExtraidos);
    console.log(mensagemFormatada);
    console.log('\n' + '='.repeat(80) + '\n');
  });
  
  console.log('✅ Teste concluído com sucesso!');
}

// Executar teste
if (require.main === module) {
  testarEmailsFacebook();
}

module.exports = {
  extrairDadosFacebook,
  formatarMensagemFacebook,
  testarEmailsFacebook
};