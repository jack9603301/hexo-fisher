hexo.extend.filter.register('theme_inject', function(injects) {
    injects.footer.raw('load-fisher-js', '<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script><script src="https://www.qhjack.top/scripts/fishes.js"></script>', {}, {cache: true});
    injects.style.push("styles/fishes.styl")
});


