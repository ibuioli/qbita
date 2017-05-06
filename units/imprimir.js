function imprSelec(muestra){
        var ficha=document.getElementById(muestra);
        var ventimp=window.open(' ','popimpr');
        ventimp.document.write(ficha.innerHTML);
        ventimp.document.write('<p><img src="../img/imp_foot.gif" /></p>');
        ventimp.document.close();
        ventimp.print();
        ventimp.close();
}