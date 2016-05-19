/**
 * Created by El4591 on 5/16/16.
 */
// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    history: true,
    center: true,
    controls: true,
    progress: true,

    theme: Reveal.getQueryHash().theme,
    transition: Reveal.getQueryHash().transition || 'concave', //cube/page/concave/zoom/linear/fade/none/default

    // More info https://github.com/hakimel/reveal.js#dependencies
    dependencies: [
        { src: 'plugin/markdown/marked.js' },
        { src: 'plugin/markdown/markdown.js' },
        { src: 'plugin/notes/notes.js', async: true },
        { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
    ]
});

$(function(){
    var myDrop = new Drop({
        target: document.querySelector('.drop-target'),
        content: 'This is a DropJs Sample',
        classes: 'drop-popup',
        position: 'bottom left',
        openOn: 'hover',
        constrainToScrollParent: false,
        constrainToWindow: false
    });

    var myDrop2 = new Drop({
        target: document.querySelector('.drop-target2'),
        content: document.querySelector('.drop-content'),
        classes: 'drop-theme-arrows-bounce-dark',
        position: 'bottom left',
        openOn: 'click',
        beforeClose: function(){
            document.querySelector('.drop-target2').style.backgroundColor = "#800";
        }
    });
});

