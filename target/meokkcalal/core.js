// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('meokkcalal.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.react_native');
meokkcalal.core.hello = (function meokkcalal$core$hello(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.react_native.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(50)], null)], null),"Hello \uC724\uC120!!! \uBC18\uAC00\uC6CC\uC6A9!!"], null)], null);
});
meokkcalal.core._main = (function meokkcalal$core$_main(var_args){
var args__4777__auto__ = [];
var len__4771__auto___4598 = arguments.length;
var i__4772__auto___4599 = (0);
while(true){
if((i__4772__auto___4599 < len__4771__auto___4598)){
args__4777__auto__.push((arguments[i__4772__auto___4599]));

var G__4600 = (i__4772__auto___4599 + (1));
i__4772__auto___4599 = G__4600;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return meokkcalal.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});
goog.exportSymbol('meokkcalal.core._main', meokkcalal.core._main);

(meokkcalal.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meokkcalal.core.hello], null));
}));

(meokkcalal.core._main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(meokkcalal.core._main.cljs$lang$applyTo = (function (seq4597){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4597));
}));


//# sourceMappingURL=core.js.map
