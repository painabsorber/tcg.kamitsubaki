var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(a) {
    var b = 0;
    return function() {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        }
    }
}
;
$jscomp.arrayIterator = function(a) {
    return {
        next: $jscomp.arrayIteratorImpl(a)
    }
}
;
$jscomp.makeIterator = function(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : $jscomp.arrayIterator(a)
}
;
$jscomp.arrayFromIterator = function(a) {
    for (var b, c = []; !(b = a.next()).done; )
        c.push(b.value);
    return c
}
;
$jscomp.arrayFromIterable = function(a) {
    return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a))
}
;
function addDice(a) {
    1 === a ? (document.getElementById("dice_2").style.display = "none",
    document.getElementById("dice_3").style.display = "none",
    document.getElementById("dice_4").style.display = "none",
    document.getElementById("dice_5").style.display = "none") : 2 === a ? (document.getElementById("dice_2").style.display = "grid",
    document.getElementById("dice_3").style.display = "none",
    document.getElementById("dice_4").style.display = "none",
    document.getElementById("dice_5").style.display = "none") : 3 === a ? (document.getElementById("dice_2").style.display = "grid",
    document.getElementById("dice_3").style.display = "grid",
    document.getElementById("dice_4").style.display = "none",
    document.getElementById("dice_5").style.display = "none") : 4 === a ?  (document.getElementById("dice_2").style.display = "grid",
    document.getElementById("dice_3").style.display = "grid",
    document.getElementById("dice_4").style.display = "grid",
    document.getElementById("dice_5").style.display = "none") : (document.getElementById("dice_2").style.display = "grid",
    document.getElementById("dice_3").style.display = "grid",
    document.getElementById("dice_4").style.display = "grid",
    document.getElementById("dice_5").style.display = "grid")
}
function rollDice() {
    [].concat($jscomp.arrayFromIterable(document.querySelectorAll(".dice"))).forEach(function(a) {
        toggleClasses(a);
        a.dataset.roll = getRandomNumber(1, 6)
    })
}
function rollDice2() {
    [].concat($jscomp.arrayFromIterable(document.querySelectorAll(".dice"))).forEach(function(a) {
        toggleClasses(a);
        a.dataset.roll = getRandomNumber(5, 5)
    })
}
function toggleClasses(a) {
    a.classList.toggle("odd-roll");
    a.classList.toggle("even-roll")
}
function getRandomNumber(a, b) {
    a = Math.ceil(a);
    b = Math.floor(b);
    return Math.floor(Math.random() * (b - a + 1)) + a
}

document.getElementById("cover_button").addEventListener("click", rollDice);
