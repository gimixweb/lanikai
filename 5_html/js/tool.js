// ------------------------------------------------------------------------------
// javascript tool
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// ��Ƀg�b�v�ɕ\���i�t���[���΍�j
// ------------------------------------------------------------------------------
function topLocation() {
	if(self != top) {
		 top.location = self.location;
	}
}

// ------------------------------------------------------------------------------
// ������New/Up�}�[�N��\������
// �����FnewAndUpIcon(2006, 10, 01, new)
// ------------------------------------------------------------------------------
function newAndUpIcon(y, m, d, c) {
  delDay = 14; // ������ɍ폜���邩
  oldDay = new Date(y + "/" + m + "/" +d);
  newDay = new Date();
  d =(newDay - oldDay) / (1000 * 24 * 3600);
  if(d <= delDay) {
    // New�}�[�N
    if(c == "new") document.write("<img src='image/icon_new.gif' border='0'>");
    // Up�}�[�N
    if(c == "up") document.write("<img src='image/icon_up.gif' border='0'>");
  }
}

// ------------------------------------------------------------------------------
// ���쌠�̔N�̎����\��
// ------------------------------------------------------------------------------
function copyrightYear() {
	myDate = new Date();
	myYear = myDate.getFullYear();
	document.write("- " + myYear);
}

// ------------------------------------------------------------------------------
// Last Update�̕\�� 
// ------------------------------------------------------------------------------
function lastUpdate (){
	var brw_v = navigator.appVersion.charAt(0);
	var brw_n = navigator.appName.charAt(0);
	last_update = new Date(document.lastModified);
	var d_Year = last_update.getYear();
	var d_Mon = last_update.getMonth()+1;
	var d_Day = last_update.getDate();
	var d_Hour = last_update.getHours();
	var d_Min = last_update.getMinutes();
	
	if(100 <= d_Year && d_Year <= 2000){
		d_Year += 1900;
	}
	if(d_Hour >= 24){
		d_Day++;
	}
	
	document.write(" Last Update:"+d_Year+"/"+d_Mon+"/"+d_Day);
}

// ------------------------------------------------------------------------------
// ���O���W 
// ------------------------------------------------------------------------------
function accessLog() {
	document.write("<img src='http://www.gimix-web.com/acc/acclog.cgi?");
	document.write("referrer="+document.referrer+"&");
	document.write("width="+screen.width+"&");
	document.write("height="+screen.height+"&");
	document.write("color="+screen.colorDepth+"'style='display: none;'>");
}

// ------------------------------------------------------------------------------
// �₢���킹���̓t�H�[�����e�`�F�b�N
// ------------------------------------------------------------------------------
function formCheck(){
    if(document.form.name.value==""){
        alert("�����O����͂��Ă��������B");
        return false;
    }
    
    if(document.form.email.value==""){
        alert("���[���A�h���X����͂��Ă��������B");
        return false;
    }
    
    if(document.form.email.value.indexOf("@")<=0){
        alert("���[���A�h���X������������܂���B");
        return false;
    }
    
		if(document.form.comment.value==""){
        alert("���₢���킹���e����͂��Ă��������B");
        return false;
    }

    if (confirm ("�ȉ��̓��e�ő��M���܂��B\n\n�����O�F\n" + document.form.name.value + "\n\n���[���A�h���X�F\n" + document.form.email.value + "\n\n���₢���킹���e�F\n" + document.form.comment.value + "\n\n��낵���ł����B")){
        return true;
    }else{
        return false;
    }
}

