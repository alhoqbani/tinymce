tinymce.init({
    selector: '#mytinymce',
    // inline: true, // Does not replace el
    // plugins : 'advlist autolink link image lists charmap print preview' // logins coma or space spearted values.
    // toolbar: 'undo redo | styleselect | bold italic | link image', // list all options, Put | to group options.
    // toolbar: false,
    // toolbar: [ // Every element is a separate toolbar.
    //     'undo redo | styleselect | bold italic | link image',
    //     'alignleft aligncenter alignright'
    // ],

    // Menu and Menubar
    menubar: 'file edit view',
    // menu: {
    //     view: {title: 'Edit', items: 'cut, copy, paste'}
    // },
    menu: {
        view: {title: 'Happy', items: 'code'}
    },
    // plugins: 'code',  // required by the code menu item,

    // menubar: false,  // removes the menubar
    // toolbar: false  // removes the toolbar

});