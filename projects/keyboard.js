const insert = document.getElementById('insert')

window.addEventListener('keydown', function(e){ 
  insert.innerHTML = `<div class = 'color'> 
  <table> 
  <tr>
  <th>key</th>
  <th>Keycode</th>
  <th>Code</th>
  </tr>

  <td>
  ${e.key}
  </td>
  <td>
  ${e.keyCode}
  </td>
  <td>
  ${e.code} 
  </td>
  </table>
  </div>`
})