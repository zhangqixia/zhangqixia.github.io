window.onload = function(){
    onload1();
    onload2();

    function onload1(){
        function clock(){
            var hours = document.getElementById('shi');
            var minutes = document.getElementById('fen');
            var seconds = document.getElementById('miao');

            var h = new Date().getHours();
            var m = new Date().getMinutes();
            var s = new Date().getSeconds();
            
            hours.innerHTML = h;
            minutes.innerHTML = m;
            seconds.innerHTML = s;
        }
        var interval = setInterval(clock,1000);
    }

    function onload2(){
        var inp = document.getElementById("inp");
        var btn = document.getElementById("btn");
        btn.onclick = function(){
            Search();
        }
        document.onkeydown = function(){
            if(event.keyCode == 13){
                Search();
            }
        }
        function Search(){
            var url = 'https://www.baidu.com/s?wd='+ inp.value;
            window.open(url);
        }
    }
}
