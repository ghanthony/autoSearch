chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.func=="multiHighlight"){
        var keywords = request.arg;
        //清除上次的高亮
        $("body").unhighlight({element: 'span', className: 'hl-highlight-0' });
        $("body").unhighlight({element: 'span', className: 'hl-highlight-1' });
        $("body").unhighlight({element: 'span', className: 'hl-highlight-2' });
        if(keywords==""){ 
            sendResponse({msg: "clear"});
            return;
        }   
        //divide ,search and highlight
        var keys = keywords.split("\n");
        for(var i in keys){
            console.log('i-',i,' keys-',keys[i]);
            if(i==0)
                $("body").highlight(keys[i],{element: 'span', className:'hl-highlight-0'});
            else if(i==1)
                $("body").highlight(keys[i],{element: 'span', className:'hl-highlight-1'});
            else if(i==2)
                $("body").highlight(keys[i],{element: 'span', className:'hl-highlight-2'});   
            else
                sendResponse({msg: "tooMuch"});
        }
        sendResponse({msg: "ok"});
    }else if(request.func=="highlight"){
        //清除上次的高亮
        $("body").unhighlight({element: 'span', className: 'hl-highlight' });
        var keyword = request.arg;
        $("body").highlight(keyword,{element: 'span', className:'hl-highlight'});
        sendResponse({msg: "ok"});
    }else if(request.func=="unHighlight"){
        $("body").unhighlight({element: 'span', className: 'hl-highlight' });
    }else if(request.func=="unHighlightAll"){
        $("body").unhighlight({element: 'span', className: 'hl-highlight' });
        $("body").unhighlight({element: 'span', className: 'hl-highlight-0' });
        $("body").unhighlight({element: 'span', className: 'hl-highlight-1' });
        $("body").unhighlight({element: 'span', className: 'hl-highlight-2' });
    }
});

