"use strict";var w=function(v,u){return function(){try{return u||v((u={exports:{}}).exports,u),u.exports}catch(s){throw (u=0, s)}};};var j=w(function(T,d){
var _=require('@stdlib/strided-base-reinterpret-complex128/dist'),B=require('@stdlib/complex-float64-real/dist'),C=require('@stdlib/complex-float64-imag/dist'),D=require('@stdlib/blas-base-zcopy/dist').ndarray,x=5;function F(v,u,s,p,f,n,y,R){var a,i,t,q,r,e,m,z,c,o;if(v<=0)return n;if(t=B(u),q=C(u),t===0&&q===0)return D(v,s,p,f,n,y,R);if(a=_(s,0),i=_(n,0),r=f*2,e=R*2,m=p*2,z=y*2,p===1&&y===1){if(c=v%x,c>0)for(o=0;o<c;o++)i[e]=a[r]+t,i[e+1]=a[r+1]+q,r+=m,e+=z;if(v<x)return n;for(o=c;o<v;o+=x)i[e]=a[r]+t,i[e+1]=a[r+1]+q,i[e+2]=a[r+2]+t,i[e+3]=a[r+3]+q,i[e+4]=a[r+4]+t,i[e+5]=a[r+5]+q,i[e+6]=a[r+6]+t,i[e+7]=a[r+7]+q,i[e+8]=a[r+8]+t,i[e+9]=a[r+9]+q,r+=x*2,e+=x*2;return n}for(o=0;o<v;o++)i[e]=a[r]+t,i[e+1]=a[r+1]+q,r+=m,e+=z;return n}d.exports=F
});var M=w(function(U,E){
var g=require('@stdlib/strided-base-stride2offset/dist'),G=j();function H(v,u,s,p,f,n){return G(v,u,s,p,g(v,p),f,n,g(v,n))}E.exports=H
});var k=w(function(V,b){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=M(),J=j();I(O,"ndarray",J);b.exports=O
});var K=require("path").join,L=require('@stdlib/utils-try-require/dist'),P=require('@stdlib/assert-is-error/dist'),Q=k(),l,A=L(K(__dirname,"./native.js"));P(A)?l=Q:l=A;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
