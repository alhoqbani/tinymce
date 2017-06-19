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
    // menubar: 'file edit view',
    // menu: {
    //     view: {title: 'Edit', items: 'cut, copy, paste'}
    // },
    // menu: {
    //     view: {title: 'Happy', items: 'code'}
    // },

// Code Plugin
    // plugins: 'code',  // required by the code menu item,
    // toolbar: 'code',
    // menubar: false,
    // code_dialog_height: 300,
    // code_dialog_width: 900,

// Advance List Plugin
    menubar: false,
    // toolbar: 'bullist, numlist',
    // plugins: 'advlist',
    // advlist_bullet_styles: 'square',
    // advlist_number_styles: 'lower-alpha,lower-roman,upper-alpha,upper-roman',


    // statusbar: false
//If you wanted the default toolbar plus the code functionality you'd need this:
    toolbar: 'undo redo styleselect bold italic alignleft aligncenter alignright bullist numlist outdent indent code',
    plugins: 'code',


// menubar: false,  // removes the menubar
// toolbar: false  // removes the toolbar

});
//
// tinymce.activeEditor.uploadImages(function (success) {
//     $.post('ajax/post.php', tinymce.activeEditor.getContent()).done(function () {
//         console.log("Uploaded images and posted content as an ajax request.");
//     });
// });


// Prevent Bootstrap dialog from blocking focusin
$(document).on('focusin', function (e) {
    if ($(e.target).closest(".mce-window").length) {
        e.stopImmediatePropagation();
    }
});

tinymce.init({
    selector: '#tinymce',  // change this value according to your HTML
    // target: el, //  Attach to different selector: in order for target to work, you should omit selector option altogether

    setup: function (editor) {
        editor.on('click', function (e) {
            console.log('Editor was clicked');
            // console.log(e);
        });
        editor.on('blur', function (e) {
            console.log('Editor was blurred');
            // console.log(e);
        });
    },

    plugins: 'image directionality advlist autolink link lists charmap print preview wordcount',
    browser_spellcheck: true,
    toolbar: [
        "rtl rtl | undo redo | styleselect | bold italic | link image | alignleft aligncenter alignright",
        'fontselect | formatselect fontsizeselect '
    ],
    contextmenu: false,
    language: "ar_SA",
    directionality: "rtl",
    auto_focus: 'tinymce',

    // content_css: "/css/style.css",
    content_style: "div {margin: 10px; border: 5px solid red; padding: 3px ;background-color: red; height: 900px;}",
    body_class: 'my_class',
    body_id: 'my_id',

    formats: {
        alignleft: {selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'left'},
        aligncenter: {selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'center'},
        alignright: {selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'right'},
        alignjustify: {selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'full'},
        bold: {inline: 'span', 'classes': 'bold'},
        italic: {inline: 'span', 'classes': 'italic'},
        underline: {inline: 'span', 'classes': 'underline', exact: true},
        strikethrough: {inline: 'del'},
        forecolor: {inline: 'span', classes: 'forecolor', styles: {color: '%value'}},
        hilitecolor: {inline: 'span', classes: 'hilitecolor', styles: {backgroundColor: '%value'}},
        custom_format: {block: 'h1', attributes: {title: 'Header'}, styles: {color: 'red'}}
    },


    init_instance_callback: function (editor) {
        // console.log(editor.getContent());
    },

    // file_browser_callback: function(field_name, url, type, win) {
    //     console.log(url);
    //     win.document.getElementById(field_name).value = 'my browser value';
    // },
    file_picker_callback: function (callback, value, meta) {
        // Provide file and text for the link dialog
        if (meta.filetype == 'file') {
            callback('mypage.html', {text: 'My text'});
        }

        // Provide image and alt text for the image dialog
        if (meta.filetype == 'image') {
            callback('myimage.jpg', {alt: 'My alt text'});
        }

        // Provide alternative source and posted for the media dialog
        if (meta.filetype == 'media') {
            callback('movie.mp4', {source2: 'alt.ogg', poster: 'image.jpg'});
        }
    },
    file_picker_types: 'file image media',
    // file_browser_callback_types: 'file image media',


    images_upload_handler: function (blobInfo, success, failure) {
        var xhr, formData;
        xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open('POST', 'postAcceptor.php');
        xhr.onload = function () {
            var json;

            if (xhr.status != 200) {
                failure('HTTP Error: ' + xhr.status);
                return;
            }
            json = JSON.parse(xhr.responseText);

            if (!json || typeof json.location != 'string') {
                failure('Invalid JSON: ' + xhr.responseText);
                return;
            }
            success(json.location);
        };
        formData = new FormData();
        formData.append('file', blobInfo.blob(), fileName(blobInfo));
        xhr.send(formData);
    }
});

$config = {
    selector: "#image_upload",
    path_absolute: "/",
    plugins: [
        "advlist autoloink directionality"
    ],
    toolbar: 'undo redo | styleselect | bold italic | link image',
    relative_urls: false,
    browser_spellcheck: true,
    file_brwoser_callback: function (field_name, url, type, win) {

    }

};



tinymce.init({
    selector: '#editor',
    plugins: 'image code',
    toolbar: 'undo redo | link image | code',
    // enable title field in the Image dialog
    image_title: true,
    // enable automatic uploads of images represented by blob or data URIs
    automatic_uploads: true,
    // URL of our upload handler (for more details check: https://www.tinymce.com/docs/configure/file-image-upload/#images_upload_url)
    images_upload_url: '/postAcceptor.php',
    // here we add custom filepicker only to Image dialog
    file_picker_types: 'image',
    // and here's our custom image picker
    file_picker_callback: function(cb, value, meta) {
        var input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');

        // Note: In modern browsers input[type="file"] is functional without
        // even adding it to the DOM, but that might not be the case in some older
        // or quirky browsers like IE, so you might want to add it to the DOM
        // just in case, and visually hide it. And do not forget do remove it
        // once you do not need it anymore.

        input.onchange = function() {
            var file = this.files[0];

            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                // Note: Now we need to register the blob in TinyMCEs image blob
                // registry. In the next release this part hopefully won't be
                // necessary, as we are looking to handle it internally.
                var id = 'blobid' + (new Date()).getTime();
                var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
                var base64 = reader.result.split(',')[1];
                var blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);

                // call the callback and populate the Title field with the file name
                cb(blobInfo.blobUri(), { title: file.name });
            };
        };

        input.click();
    }
});


