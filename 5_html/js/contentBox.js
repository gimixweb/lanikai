// -----------------------------------------------
// �R���e���c�{�b�N�X�iopen close�j
// ���L�̃\�[�X��<head></head>�̊Ԃɑ}��
// meta�^�O�̃����N�ł͓��삵�Ȃ�
// -----------------------------------------------

// �����N���[�Y

function contentBox(inputData) {
	var objID=document.getElementById( "layer_" + inputData );
	var buttonID=document.getElementById( "button_" + inputData );
	
	if (objID.className == 'close') {
		objID.style.display='block';
		objID.className='open';
		buttonID.src='images/button_close.png'; // �C���[�W
	} else {
		objID.style.display='none';
		objID.className='close';
		buttonID.src='images/button_open.png'; // �C���[�W
	}
}

