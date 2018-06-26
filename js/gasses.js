$(function () {
    var $hcl_mL = 3 + Math.random()
    var $hcl_mL = parseFloat($hcl_mL.toFixed(3))
    var $hcl_mol = 3 + Math.random()
    var $hcl_mol = parseFloat($hcl_mol.toFixed(4))
    var $caco3 = $hcl_mol * $hcl_mL * 100.0869 / 2
    $('#hcl').append($hcl_mL.toFixed(3));
    $('#molar').append($hcl_mol.toFixed(4));
    $('#caco3answ').append($caco3.toFixed(1));
});
$(function () {
    var $kPa = 99 + Math.random()
    var $kPa = parseFloat($kPa.toFixed(1))
    var $press = $kPa - 2.72
    $('#kPa').append($kPa.toFixed(1));
    $('#press').append($press.toFixed(1));
});
$(function () {
    var $weight = 0.9 + Math.random() / 5
    var $weight = parseFloat($weight.toFixed(2))
    var $caco3w = 300 + Math.random() * 10
    var $caco3w = parseFloat($caco3w.toFixed(1))
    var $ww = $caco3w / ($weight * 10)
    $('#weight').append($weight.toFixed(2));
    $('#caco3w').append($caco3w.toFixed(1));
    $('#ww').append($ww.toFixed(1));
});
$(function () {
    var $mass = 0.35 + Math.random() / 10
    $mass = parseFloat($mass.toFixed(4))
    var $purity = 99 + Math.random()
    $purity = parseFloat($purity.toFixed(1))
    var $pi = 50 + Math.random()
    $pi = parseFloat($pi.toFixed(1))
    var $pf = 120 + Math.random() * 10
    $pf = parseFloat($pf.toFixed(1))
    var $ti = 20 + Math.random() / 2
    $ti = parseFloat($ti.toFixed(2))
    var $tf = 21.5 + Math.random() / 2
    var $tf = parseFloat($tf.toFixed(2))
    var $tfk = $tf + 273.15
    var $tik = $ti + 273.15
    var $pih2o = 20 * 2.33 / $ti
    var $pfh2o = 21.5 * 2.56 / $tf
    var $pip = $pi - $pih2o
    var $pfp = $pf - $pfh2o
    var $V = (($mass * ($purity / 100)) / 100.0869) * (8.314 / (($pfp / $tfk) - ($pip / $tik)))
    $('#mass').append($mass.toFixed(4))
    $('#purity').append($purity.toFixed(1))
    $('#pi').append($pi.toFixed(1))
    $('#pf').append($pf.toFixed(1))
    $('#ti').append($ti.toFixed(2))
    $('#tf').append($tf.toFixed(2))
    $('#volume').append($V.toFixed(3))
});
$(function () {
    var $volume = 0.135 + Math.random() / 100
    $volume = parseFloat($volume.toFixed(3))
    var $pi = 45 + Math.random()
    $pi = parseFloat($pi.toFixed(1))
    var $pf = 128 + Math.random() * 10
    $pf = parseFloat($pf.toFixed(1))
    var $ti = 20 + Math.random() / 2
    $ti = parseFloat($ti.toFixed(2))
    var $tf = 21.5 + Math.random() / 2
    var $tfk = $tf + 273.15
    var $tf = parseFloat($tf.toFixed(2))
    var $tik = $ti + 273.15
    var $pih2o = 20 * 2.33 / $ti
    var $pfh2o = 21.5 * 2.56 / $tf
    var $pip = $pi - $pih2o
    var $pfp = $pf - $pfh2o
    var $amount = ((($pfp / $tfk) - ($pip / $tik)) * ($volume / 8.314)) * 1000
    $('#Vf').append($volume.toFixed(3))
    $('#pi2').append($pi.toFixed(1))
    $('#pf2').append($pf.toFixed(1))
    $('#ti2').append($ti.toFixed(2))
    $('#tf2').append($tf.toFixed(2))
    $('#amount').append($amount.toFixed(2))
});