(function($){

  // Add main menu
  $('#addmainmenu').click(async function(){
    const { value: items } = await Swal.fire({
      title: 'Main menu',
      html:
        '<input id="icon" class="swal2-input" placeholder="Enter the menu icon">' +
        '<input id="label" class="swal2-input" placeholder="Enter the menu label">' +
        '<input id="name" class="swal2-input" placeholder="Enter the menu name">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('icon').value,
          document.getElementById('label').value,
          document.getElementById('name').value
        ]
      }
    })
    if (items) {
      $.ajax({
        type: "POST",
        url: 'server/mainmenu/create.php',
        dataType: 'json',
        data: { icon: items[0], label: items[1], name: items[2] },
        success: function (response) {
          if(response == "New record created successfully") {
              Swal.fire(`Saved!`)
          } else {
              Swal.fire(`Not Saved! ${response}`)
          }
        },
        error: function(error){
          Swal.fire(`Error: ${JSON.stringify(error)}`)
        }
      });
    } else {
      Swal.fire(`Fill out the form properly`);
    }
  })

  // Add main menu page
  $('#addmainmenupage').click(async function(){
    $.ajax({
      type: "GET",
      url: 'server/mainmenupage/read.php',
      dataType: 'json',
      success: async function (response) {
        var options = [];
        for (var i = 0; i < response.length; i++) {
          var data = response[i];
          options.push(`<option value="${data["id"]}">${data["name"]}</option>`)
        }
        const { value: items } = await Swal.fire({
          title: 'Main Menu Page',
          html:
            '<input id="content_title" class="swal2-input" placeholder="Enter the content title">' +
            '<input id="content" class="swal2-input" placeholder="Enter the content">' +
            '<input id="page_title" class="swal2-input" placeholder="Enter the page title">' +
            '<input id="page_subtitle" class="swal2-input" placeholder="Enter the page subtitle">' +
            `
              <select id="main_menu_id" name="main_menu_id" class="swal2-input">
                <option value="none">Select Main Menu</option>
                ${options}
              </select>
            `,
          focusConfirm: false,
          preConfirm: () => {
            return [
              document.getElementById('content_title').value,
              document.getElementById('content').value,
              document.getElementById('page_title').value,
              document.getElementById('page_subtitle').value,
              document.getElementById('main_menu_id').value
            ]
          }
        })
        
        if (items) {
          $.ajax({
            type: "POST",
            url: 'server/mainmenupage/create.php',
            dataType: 'json',
            data: { content_title: items[0], content: items[1], page_title: items[2], page_subtitle: items[3], main_menu_id: items[4] },
            success: function (response) {
              if(response == "New record created successfully") {
                  Swal.fire(`Saved!`)
              } else {
                  Swal.fire(`Not Saved! ${response}`)
              }
            },
            error: function(error){
              Swal.fire(`Error: ${JSON.stringify(error)}`)
            }
          });
        } else {
          Swal.fire(`Fill out the form properly`);
        }
      },
      error: function(error){
        Swal.fire(`Error: ${JSON.stringify(error)}`)
      }
    });
  })

  // Add menu
  $('#addmenu').click(async function(){
    $.ajax({
      type: "GET",
      url: '../../server/menu/read.php',
      dataType: 'json',
      success: async function (response) {
        var options = [];
        for (var i = 0; i < response.length; i++) {
          var data = response[i];
          options.push(`<option value="${data["id"]}">${data["name"]}</option>`)
        }
        const { value: items } = await Swal.fire({
          title: 'Menu',
          html:
            '<input id="icon" class="swal2-input" placeholder="Enter the menu icon">' +
            '<input id="name" class="swal2-input" placeholder="Enter the menu name">' +
            '<input id="label" class="swal2-input" placeholder="Enter the menu label">' +
            `
              <select id="main_menu_id" name="main_menu_id" class="swal2-input">
                <option value="none">Select Main Menu</option>
                ${options}
              </select>
            `,
          focusConfirm: false,
          preConfirm: () => {
            return [
              document.getElementById('icon').value,
              document.getElementById('name').value,
              document.getElementById('label').value,
              document.getElementById('main_menu_id').value
            ]
          }
        })
        
        if (items) {
          $.ajax({
            type: "POST",
            url: '../../server/menu/create.php',
            dataType: 'json',
            data: { icon: items[0], name: items[1], label: items[2], main_menu_id: items[3] },
            success: function (response) {
              if(response == "New record created successfully") {
                  Swal.fire(`Saved!`)
              } else {
                  Swal.fire(`Not Saved! ${response}`)
              }
            },
            error: function(error){
              Swal.fire(`Error: ${JSON.stringify(error)}`)
            }
          });
        } else {
          Swal.fire(`Fill out the form properly`);
        }
      },
      error: function(error){
        Swal.fire(`Error: ${JSON.stringify(error)}`)
      }
    });
  })

  // Add sub menu
  $('#addsubmenu').click(async function(){
    $.ajax({
      type: "GET",
      url: '../../server/submenu/read.php',
      dataType: 'json',
      success: async function (response) {
        var options = [];
        for (var i = 0; i < response.length; i++) {
          var data = response[i];
          options.push(`<option value="${data["id"]}">${data["name"]}</option>`)
        }
        const { value: items } = await Swal.fire({
          title: 'Sub Menu',
          html:
            '<input id="name" class="swal2-input" placeholder="Enter the menu name">' +
            `
              <select id="menu_id" name="menu_id" class="swal2-input">
                <option value="none">Select Menu</option>
                ${options}
              </select>
            `,
          focusConfirm: false,
          preConfirm: () => {
            return [
              document.getElementById('name').value,
              document.getElementById('menu_id').value
            ]
          }
        })
        
        if (items) {
          $.ajax({
            type: "POST",
            url: '../../server/submenu/create.php',
            dataType: 'json',
            data: { name: items[0], menu_id: items[1] },
            success: function (response) {
              if(response == "New record created successfully") {
                  Swal.fire(`Saved!`)
              } else {
                  Swal.fire(`Not Saved! ${response}`)
              }
            },
            error: function(error){
              Swal.fire(`Error: ${JSON.stringify(error)}`)
            }
          });
        } else {
          Swal.fire(`Fill out the form properly`);
        }
      },
      error: function(error){
        Swal.fire(`Error: ${JSON.stringify(error)}`)
      }
    });
  })

  // Add page
  $('#addpage').click(async function(){
    $.ajax({
      type: "GET",
      url: '../../server/page/read.php',
      dataType: 'json',
      success: async function (response) {
        var options = [];
        for (var i = 0; i < response.length; i++) {
          var data = response[i];
          options.push(`<option value="${data["id"]}">${data["name"]}</option>`)
        }
        const { value: items } = await Swal.fire({
          title: 'Page',
          html:
            '<input id="content_title" class="swal2-input" placeholder="Enter the content title">' +
            '<input id="content" class="swal2-input" placeholder="Enter the content">' +
            '<input id="page_title" class="swal2-input" placeholder="Enter the page title">' +
            '<input id="page_subtitle" class="swal2-input" placeholder="Enter the page subtitle">' +
            `
              <select id="submenu_id" name="submenu_id" class="swal2-input">
                <option value="none">Select Sub Menu</option>
                ${options}
              </select>
            `,
          focusConfirm: false,
          preConfirm: () => {
            return [
              document.getElementById('content_title').value,
              document.getElementById('content').value,
              document.getElementById('page_title').value,
              document.getElementById('page_subtitle').value,
              document.getElementById('submenu_id').value
            ]
          }
        })
        
        if (items) {
          $.ajax({
            type: "POST",
            url: '../../server/page/create.php',
            dataType: 'json',
            data: { content_title: items[0], content: items[1], page_title: items[2], page_subtitle: items[3], submenu_id: items[4] },
            success: function (response) {
              if(response == "New record created successfully") {
                  Swal.fire(`Saved!`)
              } else {
                  Swal.fire(`Not Saved! ${response}`)
              }
            },
            error: function(error){
              Swal.fire(`Error: ${JSON.stringify(error)}`)
            }
          });
        } else {
          Swal.fire(`Fill out the form properly`);
        }
      },
      error: function(error){
        Swal.fire(`Error: ${JSON.stringify(error)}`)
      }
    });
  })

})(jQuery);