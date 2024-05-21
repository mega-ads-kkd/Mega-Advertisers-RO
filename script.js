window.onload = function(){ 
var node = document.getElementById('my-node');
var btn = document.getElementById('save-as-png-btn');

// btn.onclick = function() {
  
// node.innerHTML = "I'm an image now."
//   domtoimage.toBlob(document.getElementById('my-node'))
//     .then(function(blob) {
//       window.saveAs(blob, 'my-node.png');
//     });
// }


// document.getElementById('save-as-png-btn').addEventListener('click', function() {
//   html2canvas(document.getElementById('my-node'), { useCORS: true }).then(function(canvas) {
//       // Create an <a> element and set its href attribute to the canvas data URL
//       var link = document.createElement('a');
//       link.href = canvas.toDataURL('image/png');
//       link.download = 'RO.png';
//       // Programmatically click the link to trigger the download
//       link.click();
//   });


// });

// document.getElementById('save-as-png-btn').addEventListener('click', function() {
//   html2canvas(document.getElementById('container-wrapper'), {
//       useCORS: true,
//       logging: true,
//       scale: window.devicePixelRatio // Improves the quality of the output image
//   }).then(function(canvas) {
//       // Create an <a> element and set its href attribute to the canvas data URL
//       var link = document.createElement('a');
//       link.href = canvas.toDataURL('image/png');
//       link.download = 'RO.png';
//       // Programmatically click the link to trigger the download
//       link.click();
//   }).catch(function(error) {
//       console.error('Error capturing the container:', error);
//   });
// });

document.getElementById('save-as-png-btn').addEventListener('click', function() {
  var node = document.getElementById('container-wrapper');

  domtoimage.toPng(node)
      .then(function(dataUrl) {
          var link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'RO ' + document.getElementById("No").value + '.png';
          link.click();
      })
      .catch(function(error) {
          console.error('Oops, something went wrong!', error);
      });
});
}
