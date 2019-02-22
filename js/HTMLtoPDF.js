// var doc = new jsPDF('p', 'pt');
// doc.addFont('NotoSansCJKjp-Regular.ttf', 'NotoSansCJKjp', 'normal');
// doc.setFont('NotoSansCJKjp');
// doc.text(20, 20, '匯出標題');
// doc.save('匯出.pdf');

var doc = new jsPDF();
var specialElementHandlers = {
  '#editor': function(element, renderer) {
    return true;
  }
};
$('#downloadPDF').click(function() {
  doc.fromHTML($('.content').html(), 15, 15, {
    'width': 170,
    'elementHandlers': specialElementHandlers
  });
  doc.addFont('NotoSansCJKjp-Regular.ttf', 'NotoSansCJKjp', 'normal');
  doc.setFont('NotoSansCJKjp');
  //jspdf.customfonts not working
  doc.save('sample-file.pdf');
});