function getFileSize(url)
{
    var fileSize = '';
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false); // false = Synchronous

    http.send(null); // it will stop here until this http request is complete

    // when we are here, we already have a response, b/c we used Synchronous XHR

    if (http.status === 200) {
        fileSize = http.getResponseHeader('content-length');
        console.log('fileSize = ' + fileSize);
    }
    
    
    
    return formatSizeUnits(fileSize);
}
function formatSizeUnits(bytes){
      if      (bytes>=1073741824) {bytes=(bytes/1073741824).toFixed(2)+'GB';}
      else if (bytes>=1048576)    {bytes=(bytes/1048576).toFixed(2)+'MB';}
      else if (bytes>=1024)       {bytes=(bytes/1024).toFixed(2)+'KB';}
      else if (bytes>1)           {bytes=bytes+'bytes';}
      else if (bytes==1)          {bytes=bytes+'byte';}
      else                        {bytes='0byte';}
      return bytes;
}
