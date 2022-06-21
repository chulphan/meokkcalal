// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__941__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__942__i = 0, G__942__a = new Array(arguments.length -  0);
while (G__942__i < G__942__a.length) {G__942__a[G__942__i] = arguments[G__942__i + 0]; ++G__942__i;}
  args = new cljs.core.IndexedSeq(G__942__a,0,null);
} 
return G__941__delegate.call(this,args);};
G__941.cljs$lang$maxFixedArity = 0;
G__941.cljs$lang$applyTo = (function (arglist__943){
var args = cljs.core.seq(arglist__943);
return G__941__delegate(args);
});
G__941.cljs$core$IFn$_invoke$arity$variadic = G__941__delegate;
return G__941;
})()
);

(o.error = (function() { 
var G__944__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__944 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__945__i = 0, G__945__a = new Array(arguments.length -  0);
while (G__945__i < G__945__a.length) {G__945__a[G__945__i] = arguments[G__945__i + 0]; ++G__945__i;}
  args = new cljs.core.IndexedSeq(G__945__a,0,null);
} 
return G__944__delegate.call(this,args);};
G__944.cljs$lang$maxFixedArity = 0;
G__944.cljs$lang$applyTo = (function (arglist__946){
var args = cljs.core.seq(arglist__946);
return G__944__delegate(args);
});
G__944.cljs$core$IFn$_invoke$arity$variadic = G__944__delegate;
return G__944;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
