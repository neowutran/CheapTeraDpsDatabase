var e=function(){"use strict";function r(e,r){postMessage({action:Ur,cbn:r,result:e})}function t(e){var r=[];return r[e-1]=void 0,r}function n(e,r){return i(e[0]+r[0],e[1]+r[1])}function s(e,r){return f(~~Math.max(Math.min(e[1]/$r,2147483647),-2147483648)&~~Math.max(Math.min(r[1]/$r,2147483647),-2147483648),c(e)&c(r))}function o(e,r){var t,n;return e[0]==r[0]&&e[1]==r[1]?0:(t=0>e[1],n=0>r[1],t&&!n?-1:!t&&n?1:h(e,r)[1]<0?-1:1)}function i(e,r){var t,n;for(r%=0x10000000000000000,e%=0x10000000000000000,t=r%$r,n=Math.floor(e/$r)*$r,r=r-t+n,e=e-n+t;0>e;)e+=$r,r-=$r;for(;e>4294967295;)e-=$r,r+=$r;for(r%=0x10000000000000000;r>0x7fffffff00000000;)r-=0x10000000000000000;for(;-0x8000000000000000>r;)r+=0x10000000000000000;return[e,r]}function _(e,r){return e[0]==r[0]&&e[1]==r[1]}function a(e){return e>=0?[e,0]:[e+$r,-$r]}function c(e){return e[0]>=2147483648?~~Math.max(Math.min(e[0]-$r,2147483647),-2147483648):~~Math.max(Math.min(e[0],2147483647),-2147483648)}function f(e,r){var t,n;return t=e*$r,n=r,0>r&&(n+=$r),[n,t]}function u(e){return 30>=e?1<<e:u(30)*u(e-30)}function m(e,r){var t,n,s,o;if(r&=63,_(e,rt))return r?tt:e;if(0>e[1])throw Error("Neg");return o=u(r),n=e[1]*o%0x10000000000000000,s=e[0]*o,t=s-s%$r,n+=t,s-=t,n>=0x8000000000000000&&(n-=0x10000000000000000),[s,n]}function p(e,r){var t;return r&=63,t=u(r),i(Math.floor(e[0]/t),e[1]/t)}function d(e,r){var t;return r&=63,t=p(e,r),0>e[1]&&(t=n(t,m([2,0],63-r))),t}function h(e,r){return i(e[0]-r[0],e[1]-r[1])}function P(e,r){return e.dc=r,e.hc=0,e.Db=r.length,e}function l(e,r,t,n){return e.hc>=e.Db?-1:(n=Math.min(n,e.Db-e.hc),b(e.dc,e.hc,r,t,n),e.hc+=n,n)}function v(e){return e.dc=t(32),e.Db=0,e}function B(e){var r=e.dc;return r.length=e.Db,r}function k(e,r){e.dc[e.Db++]=r<<24>>24}function S(e,r,t,n){b(r,t,e.dc,e.Db,n),e.Db+=n}function M(e,r,t,n,s){var o;for(o=r;t>o;++o)n[s++]=e.charCodeAt(o)}function b(e,r,t,n,s){for(var o=0;s>o;++o)t[n+o]=e[r+o]}function E(e,r){fr(r,1<<e.s),r.j=e.f,ur(r,e.m),r.U=0,r.V=3,r.N=2,r.u=3}function g(r,t,n,s,i){var _,a;if(o(s,et)<0)throw Error("invalid length "+s);for(r.gc=s,_=U({}),E(i,_),_.Xb=void 0===e.disableEndMark,mr(_,n),a=0;64>a;a+=8)k(n,255&c(p(s,a)));r.Ub=(_.L=0,_.Kb=t,_.Gb=0,Q(_),_.c.cc=n,or(_),$(_),X(_),_.P.fb=_.j+1-2,br(_.P,1<<_.N),_.f.fb=_.j+1-2,br(_.f,1<<_.N),void(_.x=tt),Z({},_))}function y(e,r,t){return e._b=v({}),g(e,P({},r),e._b,a(r.length),t),e}function R(e,r,n,s){var o;e.Rb=r,e.zb=n,o=r+n+s,(null==e.d||e.nb!=o)&&(e.d=null,e.nb=o,e.d=t(e.nb)),e.B=e.nb-n}function F(e,r){return e.d[e.e+e.v+r]}function L(e,r,t,n){var s,o;for(e.K&&e.v+r+n>e.q&&(n=e.q-(e.v+r)),++t,o=e.e+e.v+r,s=0;n>s&&e.d[o+s]==e.d[o+s-t];++s);return s}function z(e){return e.q-e.v}function C(e){var r,t,n;for(n=e.e+e.v-e.Rb,n>0&&--n,t=e.e+e.q-n,r=0;t>r;++r)e.d[r]=e.d[n+r];e.e-=n}function w(e){var r;++e.v,e.v>e.jb&&(r=e.e+e.v,r>e.B&&C(e),x(e))}function x(e){var r,t,n;if(!e.K)for(;;){if(n=-e.e+e.nb-e.q,!n)return;if(r=l(e.ac,e.d,e.e+e.q,n),-1==r)return e.jb=e.q,t=e.e+e.jb,t>e.B&&(e.jb=e.B-e.e),void(e.K=1);e.q+=r,e.q>=e.v+e.zb&&(e.jb=e.q-e.zb)}}function D(e,r){e.e+=r,e.jb-=r,e.v-=r,e.q-=r}function A(e,r,n,s,o){var i,_,a;1073741567>r&&(e.Vb=16+(s>>1),a=~~((r+n+s+o)/2)+256,R(e,r+n,s+o,a),e.bb=s,i=r+1,e.l!=i&&(e.E=t(2*(e.l=i))),_=65536,e.ab&&(_=r-1,_|=_>>1,_|=_>>2,_|=_>>4,_|=_>>8,_>>=1,_|=65535,_>16777216&&(_>>=1),e.Wb=_,++_,_+=e.F),_!=e.Ib&&(e.$=t(e.Ib=_)))}function I(e,r){var t,n,s,o,i,_,a,c,f,u,m,p,d,h,P,l,v,B,k,S,M;if(e.q>=e.v+e.bb)h=e.bb;else if(h=e.q-e.v,e.ib>h)return H(e),0;for(v=0,P=e.v>e.l?e.v-e.l:0,n=e.e+e.v,l=1,c=0,f=0,e.ab?(M=st[255&e.d[n]]^255&e.d[n+1],c=1023&M,M^=(255&e.d[n+2])<<8,f=65535&M,u=(M^st[255&e.d[n+3]]<<5)&e.Wb):u=255&e.d[n]^(255&e.d[n+1])<<8,s=e.$[e.F+u]||0,e.ab&&(o=e.$[c]||0,i=e.$[1024+f]||0,e.$[c]=e.v,e.$[1024+f]=e.v,o>P&&e.d[e.e+o]==e.d[n]&&(r[v++]=l=2,r[v++]=e.v-o-1),i>P&&e.d[e.e+i]==e.d[n]&&(i==o&&(v-=2),r[v++]=l=3,r[v++]=e.v-i-1,o=i),0!=v&&o==s&&(v-=2,l=1)),e.$[e.F+u]=e.v,k=(e.h<<1)+1,S=e.h<<1,p=d=e.s,0!=e.s&&s>P&&e.d[e.e+s+e.s]!=e.d[n+e.s]&&(r[v++]=l=e.s,r[v++]=e.v-s-1),t=e.Vb;;){if(P>=s||0==t--){e.E[k]=e.E[S]=0;break}if(a=e.v-s,_=(e.h>=a?e.h-a:e.h-a+e.l)<<1,B=e.e+s,m=d>p?p:d,e.d[B+m]==e.d[n+m]){for(;++m!=h&&e.d[B+m]==e.d[n+m];);if(m>l&&(r[v++]=l=m,r[v++]=a-1,m==h)){e.E[S]=e.E[_],e.E[k]=e.E[_+1];break}}(255&e.d[n+m])>(255&e.d[B+m])?(e.E[S]=s,S=_+1,s=e.E[S],d=m):(e.E[k]=s,k=_,s=e.E[k],p=m)}return H(e),v}function O(e){e.e=0,e.v=0,e.q=0,e.K=0,x(e),e.h=0,D(e,-1)}function H(e){var r;++e.h>=e.l&&(e.h=0),w(e),1073741823==e.v&&(r=e.v-e.l,N(e.E,2*e.l,r),N(e.$,e.Ib,r),D(e,r))}function N(e,r,t){var n,s;for(n=0;r>n;++n)s=e[n]||0,t>=s?s=0:s-=t,e[n]=s}function G(e,r){e.ab=r>2,e.ab?(e.s=0,e.ib=4,e.F=66560):(e.s=2,e.ib=3,e.F=0)}function T(e,r){var t,n,s,o,i,_,a,c,f,u,m,p,d,h,P,l,v;do{if(e.q>=e.v+e.bb)p=e.bb;else if(p=e.q-e.v,e.ib>p){H(e);continue}for(d=e.v>e.l?e.v-e.l:0,n=e.e+e.v,e.ab?(v=st[255&e.d[n]]^255&e.d[n+1],_=1023&v,e.$[_]=e.v,v^=(255&e.d[n+2])<<8,a=65535&v,e.$[1024+a]=e.v,c=(v^st[255&e.d[n+3]]<<5)&e.Wb):c=255&e.d[n]^(255&e.d[n+1])<<8,s=e.$[e.F+c],e.$[e.F+c]=e.v,P=(e.h<<1)+1,l=e.h<<1,u=m=e.s,t=e.Vb;;){if(d>=s||0==t--){e.E[P]=e.E[l]=0;break}if(i=e.v-s,o=(e.h>=i?e.h-i:e.h-i+e.l)<<1,h=e.e+s,f=m>u?u:m,e.d[h+f]==e.d[n+f]){for(;++f!=p&&e.d[h+f]==e.d[n+f];);if(f==p){e.E[l]=e.E[o],e.E[P]=e.E[o+1];break}}(255&e.d[n+f])>(255&e.d[h+f])?(e.E[l]=s,l=o+1,s=e.E[l],m=f):(e.E[P]=s,P=o,s=e.E[P],u=f)}H(e)}while(0!=--r)}function W(e){return e-=2,4>e?e:3}function Y(e){return 4>e?0:10>e?e-3:e-6}function Z(e,r){return e._=r,e.ic=null,e.bc=1,e}function V(e){if(!e.bc)throw Error("bad state");if(!e._)throw Error("No decoding");return j(e),e.bc}function j(e){J(e._,e._.tb,e._.Nb,e._.$b),e.Ob=e._.tb[0],e._.$b[0]&&(cr(e._),e.bc=0)}function K(e,r){var t,n,s,o;e.W=r,s=e.a[r].n,n=e.a[r].g;do e.a[r].p&&(Cr(e.a[s]),e.a[s].n=s-1,e.a[r].Sb&&(e.a[s-1].p=0,e.a[s-1].n=e.a[r].n2,e.a[s-1].g=e.a[r].g2)),o=s,t=n,n=e.a[o].g,s=e.a[o].n,e.a[o].g=t,e.a[o].n=r,r=o;while(r>0);return e.Z=e.a[0].g,e.m=e.a[0].n}function q(e){e.i=0,e.C=0;for(var r=0;4>r;++r)e.r[r]=0}function J(e,r,t,s){var i,f,u,m,p,d,P,l,v,B,k,S,M,b,E;if(r[0]=tt,t[0]=tt,s[0]=1,e.Kb&&(e.b.ac=e.Kb,O(e.b),e.L=1,e.Kb=null),!e.Gb){if(e.Gb=1,b=e.x,_(e.x,tt)){if(!z(e.b))return void er(e,c(e.x));_r(e),M=c(e.x)&e.u,Tr(e.c,e.z,(e.i<<4)+M,0),e.i=Y(e.i),u=F(e.b,-e.o),Rr(gr(e.y,c(e.x),e.C),e.c,u),e.C=u,--e.o,e.x=n(e.x,nt)}if(!z(e.b))return void er(e,c(e.x));for(;;){if(P=rr(e,c(e.x)),B=e.Z,M=c(e.x)&e.u,f=(e.i<<4)+M,1==P&&-1==B)Tr(e.c,e.z,f,0),u=F(e.b,-e.o),E=gr(e.y,c(e.x),e.C),7>e.i?Rr(E,e.c,u):(v=F(e.b,-e.r[0]-1-e.o),Fr(E,e.c,v,u)),e.C=u,e.i=Y(e.i);else{if(Tr(e.c,e.z,f,1),4>B){if(Tr(e.c,e.S,e.i,1),B?(Tr(e.c,e.Y,e.i,1),1==B?Tr(e.c,e.ob,e.i,0):(Tr(e.c,e.ob,e.i,1),Tr(e.c,e.Mb,e.i,B-2))):(Tr(e.c,e.Y,e.i,0),1==P?Tr(e.c,e.Q,f,0):Tr(e.c,e.Q,f,1)),1==P?e.i=7>e.i?9:11:(kr(e.f,e.c,P-2,M),e.i=7>e.i?8:11),m=e.r[B],0!=B){for(d=B;d>=1;--d)e.r[d]=e.r[d-1];e.r[0]=m}}else{for(Tr(e.c,e.S,e.i,0),e.i=7>e.i?7:10,kr(e.P,e.c,P-2,M),B-=4,S=dr(B),l=W(P),Dr(e.D[l],e.c,S),S>=4&&(p=(S>>1)-1,i=(2|1&S)<<p,k=B-i,14>S?Hr(e.sb,i-S-1,e.c,p,k):(Wr(e.c,k>>4,p-4),Ir(e.M,e.c,15&k),++e.rb)),m=B,d=3;d>=1;--d)e.r[d]=e.r[d-1];e.r[0]=m,++e.pb}e.C=F(e.b,P-1-e.o)}if(e.o-=P,e.x=n(e.x,a(P)),!e.o){if(e.pb>=128&&$(e),e.rb>=16&&X(e),r[0]=e.x,t[0]=Yr(e.c),!z(e.b))return void er(e,c(e.x));if(o(h(e.x,b),[4096,0])>=0)return e.Gb=0,void(s[0]=0)}}}}function Q(e){var r,t;e.b||(r={},t=4,e.J||(t=2),G(r,t),e.b=r),Er(e.y,e.U,e.V),(e.R!=e.gb||e.kb!=e.j)&&(A(e.b,e.R,4096,e.j,274),e.gb=e.R,e.kb=e.j)}function U(e){var r;for(e.r=t(4),e.a=[],e.c={},e.z=t(192),e.S=t(12),e.Y=t(12),e.ob=t(12),e.Mb=t(12),e.Q=t(192),e.D=[],e.sb=t(114),e.M=xr({},4),e.P=Sr({}),e.f=Sr({}),e.y={},e.k=[],e.H=[],e.X=[],e.Jb=t(16),e.t=t(4),e.G=t(4),e.tb=[tt],e.Nb=[tt],e.$b=[0],e.Eb=t(5),e.Pb=t(128),e.hb=0,e.J=1,e.A=0,e.kb=-1,e.Z=0,r=0;4096>r;++r)e.a[r]={};for(r=0;4>r;++r)e.D[r]=xr({},6);return e}function X(e){for(var r=0;16>r;++r)e.Jb[r]=Or(e.M,r);e.rb=0}function $(e){var r,t,n,s,o,i,_,a;for(s=4;128>s;++s)i=dr(s),n=(i>>1)-1,r=(2|1&i)<<n,e.Pb[s]=Nr(e.sb,r-i-1,n,s-r);for(o=0;4>o;++o){for(t=e.D[o],_=o<<6,i=0;e.yb>i;++i)e.H[_+i]=Ar(t,i);for(i=14;e.yb>i;++i)e.H[_+i]+=(i>>1)-1-4<<6;for(a=128*o,s=0;4>s;++s)e.X[a+s]=e.H[_+s];for(;128>s;++s)e.X[a+s]=e.H[_+dr(s)]+e.Pb[s]}e.pb=0}function er(e,r){ar(e),pr(e,r&e.u);for(var t=0;5>t;++t)Vr(e.c)}function rr(e,r){var t,n,s,o,i,_,a,c,f,u,m,p,d,h,P,l,v,B,k,S,M,b,E,g,y,R,C,w,x,D,A,I,O,H,N,G,T,W,Z,V,j,q,J,Q,U,X,$,er,rr,or;if(e.W!=e.m)return d=e.a[e.m].n-e.m,e.Z=e.a[e.m].g,e.m=e.a[e.m].n,d;if(e.m=e.W=0,e.I?(p=e.hb,e.I=0):p=_r(e),C=e.A,y=z(e.b)+1,2>y)return e.Z=-1,1;for(y>273&&(y=273),V=0,f=0;4>f;++f)e.t[f]=e.r[f],e.G[f]=L(e.b,-1,e.t[f],273),e.G[f]>e.G[V]&&(V=f);if(e.G[V]>=e.j)return e.Z=V,d=e.G[V],ir(e,d-1),d;if(p>=e.j)return e.Z=e.k[C-1]+4,ir(e,p-1),p;if(a=F(e.b,-1),v=F(e.b,-e.r[0]-1-1),2>p&&a!=v&&2>e.G[V])return e.Z=-1,1;if(e.a[0].Yb=e.i,H=r&e.u,e.a[1].w=it[e.z[(e.i<<4)+H]>>>2]+zr(gr(e.y,r,e.C),e.i>=7,v,a),Cr(e.a[1]),B=it[2048-e.z[(e.i<<4)+H]>>>2],Z=B+it[2048-e.S[e.i]>>>2],v==a&&(j=Z+sr(e,e.i,H),e.a[1].w>j&&(e.a[1].w=j,wr(e.a[1]))),m=p>=e.G[V]?p:e.G[V],2>m)return e.Z=e.a[1].g,1;e.a[1].n=0,e.a[0].Ab=e.t[0],e.a[0].xb=e.t[1],e.a[0].wb=e.t[2],e.a[0].Lb=e.t[3],u=m;do e.a[u--].w=268435455;while(u>=2);for(f=0;4>f;++f)if(W=e.G[f],!(2>W)){G=Z+nr(e,f,e.i,H);do o=G+Mr(e.f,W-2,H),A=e.a[W],A.w>o&&(A.w=o,A.n=0,A.g=f,A.p=0);while(--W>=2)}if(g=B+it[e.S[e.i]>>>2],u=e.G[0]>=2?e.G[0]+1:2,p>=u){for(w=0;u>e.k[w];)w+=2;for(;c=e.k[w+1],o=g+tr(e,c,u,H),A=e.a[u],A.w>o&&(A.w=o,A.n=0,A.g=c+4,A.p=0),u!=e.k[w]||(w+=2,w!=C);++u);}for(t=0;;){if(++t,t==m)return K(e,t);if(k=_r(e),C=e.A,k>=e.j)return e.hb=k,e.I=1,K(e,t);if(++r,O=e.a[t].n,e.a[t].p?(--O,e.a[t].Sb?(J=e.a[e.a[t].n2].Yb,J=4>e.a[t].g2?7>J?8:11:7>J?7:10):J=e.a[O].Yb,J=Y(J)):J=e.a[O].Yb,O==t-1?J=e.a[t].g?Y(J):7>J?9:11:(e.a[t].p&&e.a[t].Sb?(O=e.a[t].n2,I=e.a[t].g2,J=7>J?8:11):(I=e.a[t].g,J=4>I?7>J?8:11:7>J?7:10),D=e.a[O],4>I?I?1==I?(e.t[0]=D.xb,e.t[1]=D.Ab,e.t[2]=D.wb,e.t[3]=D.Lb):2==I?(e.t[0]=D.wb,e.t[1]=D.Ab,e.t[2]=D.xb,e.t[3]=D.Lb):(e.t[0]=D.Lb,e.t[1]=D.Ab,e.t[2]=D.xb,e.t[3]=D.wb):(e.t[0]=D.Ab,e.t[1]=D.xb,e.t[2]=D.wb,e.t[3]=D.Lb):(e.t[0]=I-4,e.t[1]=D.Ab,e.t[2]=D.xb,e.t[3]=D.wb)),e.a[t].Yb=J,e.a[t].Ab=e.t[0],e.a[t].xb=e.t[1],e.a[t].wb=e.t[2],e.a[t].Lb=e.t[3],_=e.a[t].w,a=F(e.b,-1),v=F(e.b,-e.t[0]-1-1),H=r&e.u,n=_+it[e.z[(J<<4)+H]>>>2]+zr(gr(e.y,r,F(e.b,-2)),J>=7,v,a),b=e.a[t+1],S=0,b.w>n&&(b.w=n,b.n=t,b.g=-1,b.p=0,S=1),B=_+it[2048-e.z[(J<<4)+H]>>>2],Z=B+it[2048-e.S[J]>>>2],v!=a||t>b.n&&!b.g||(j=Z+(it[e.Y[J]>>>2]+it[e.Q[(J<<4)+H]>>>2]),b.w>=j&&(b.w=j,b.n=t,b.g=0,b.p=0,S=1)),R=z(e.b)+1,R=R>4095-t?4095-t:R,y=R,!(2>y)){if(y>e.j&&(y=e.j),!S&&v!=a&&(U=Math.min(R-1,e.j),P=L(e.b,0,e.t[0],U),P>=2)){for(Q=Y(J),N=r+1&e.u,E=n+it[2048-e.z[(Q<<4)+N]>>>2]+it[2048-e.S[Q]>>>2],x=t+1+P;x>m;)e.a[++m].w=268435455;o=E+(X=Mr(e.f,P-2,N),X+nr(e,0,Q,N)),A=e.a[x],A.w>o&&(A.w=o,A.n=t+1,A.g=0,A.p=1,A.Sb=0)}for(q=2,T=0;4>T;++T)if(h=L(e.b,-1,e.t[T],y),!(2>h)){l=h;do{for(;t+h>m;)e.a[++m].w=268435455;o=Z+($=Mr(e.f,h-2,H),$+nr(e,T,J,H)),A=e.a[t+h],A.w>o&&(A.w=o,A.n=t,A.g=T,A.p=0)}while(--h>=2);if(h=l,T||(q=h+1),R>h&&(U=Math.min(R-1-h,e.j),P=L(e.b,h,e.t[T],U),P>=2)){for(Q=7>J?8:11,N=r+h&e.u,s=Z+(er=Mr(e.f,h-2,H),er+nr(e,T,J,H))+it[e.z[(Q<<4)+N]>>>2]+zr(gr(e.y,r+h,F(e.b,h-1-1)),1,F(e.b,h-1-(e.t[T]+1)),F(e.b,h-1)),Q=Y(Q),N=r+h+1&e.u,M=s+it[2048-e.z[(Q<<4)+N]>>>2],E=M+it[2048-e.S[Q]>>>2],x=h+1+P;t+x>m;)e.a[++m].w=268435455;o=E+(rr=Mr(e.f,P-2,N),rr+nr(e,0,Q,N)),A=e.a[t+x],A.w>o&&(A.w=o,A.n=t+h+1,A.g=0,A.p=1,A.Sb=1,A.n2=t,A.g2=T)}}if(k>y){for(k=y,C=0;k>e.k[C];C+=2);e.k[C]=k,C+=2}if(k>=q){for(g=B+it[e.S[J]>>>2];t+k>m;)e.a[++m].w=268435455;for(w=0;q>e.k[w];)w+=2;for(h=q;;++h)if(i=e.k[w+1],o=g+tr(e,i,h,H),A=e.a[t+h],A.w>o&&(A.w=o,A.n=t,A.g=i+4,A.p=0),h==e.k[w]){if(R>h&&(U=Math.min(R-1-h,e.j),P=L(e.b,h,i,U),P>=2)){for(Q=7>J?7:10,N=r+h&e.u,s=o+it[e.z[(Q<<4)+N]>>>2]+zr(gr(e.y,r+h,F(e.b,h-1-1)),1,F(e.b,h-(i+1)-1),F(e.b,h-1)),Q=Y(Q),N=r+h+1&e.u,M=s+it[2048-e.z[(Q<<4)+N]>>>2],E=M+it[2048-e.S[Q]>>>2],x=h+1+P;t+x>m;)e.a[++m].w=268435455;o=E+(or=Mr(e.f,P-2,N),or+nr(e,0,Q,N)),A=e.a[t+x],A.w>o&&(A.w=o,A.n=t+h+1,A.g=0,A.p=1,A.Sb=1,A.n2=t,A.g2=i+4)}if(w+=2,w==C)break}}}}}function tr(e,r,t,n){var s,o=W(t);return s=128>r?e.X[128*o+r]:e.H[(o<<6)+hr(r)]+e.Jb[15&r],s+Mr(e.P,t-2,n)}function nr(e,r,t,n){var s;return r?(s=it[2048-e.Y[t]>>>2],1==r?s+=it[e.ob[t]>>>2]:(s+=it[2048-e.ob[t]>>>2],s+=jr(e.Mb[t],r-2))):(s=it[e.Y[t]>>>2],s+=it[2048-e.Q[(t<<4)+n]>>>2]),s}function sr(e,r,t){return it[e.Y[r]>>>2]+it[e.Q[(r<<4)+t]>>>2]}function or(e){q(e),Zr(e.c),Gr(e.z),Gr(e.Q),Gr(e.S),Gr(e.Y),Gr(e.ob),Gr(e.Mb),Gr(e.sb),yr(e.y);for(var r=0;4>r;++r)Gr(e.D[r].db);vr(e.P,1<<e.N),vr(e.f,1<<e.N),Gr(e.M.db),e.I=0,e.W=0,e.m=0,e.o=0}function ir(e,r){r>0&&(T(e.b,r),e.o+=r)}function _r(e){var r=0;return e.A=I(e.b,e.k),e.A>0&&(r=e.k[e.A-2],r==e.j&&(r+=L(e.b,r-1,e.k[e.A-1],273-r))),++e.o,r}function ar(e){e.b&&e.L&&(e.b.ac=null,e.L=0)}function cr(e){ar(e),e.c.cc=null}function fr(e,r){e.R=r;for(var t=0;r>1<<t;++t);e.yb=2*t}function ur(e,r){var t=e.J;e.J=r,e.b&&t!=e.J&&(e.gb=-1,e.b=null)}function mr(e,r){e.Eb[0]=9*(5*e.N+e.U)+e.V<<24>>24;for(var t=0;4>t;++t)e.Eb[1+t]=e.R>>8*t<<24>>24;S(r,e.Eb,0,5)}function pr(e,r){if(e.Xb){Tr(e.c,e.z,(e.i<<4)+r,1),Tr(e.c,e.S,e.i,0),e.i=7>e.i?7:10,kr(e.P,e.c,0,r);var t=W(2);Dr(e.D[t],e.c,63),Wr(e.c,67108863,26),Ir(e.M,e.c,15)}}function dr(e){return 2048>e?ot[e]:2097152>e?ot[e>>10]+20:ot[e>>20]+40}function hr(e){return 131072>e?ot[e>>6]+12:134217728>e?ot[e>>16]+32:ot[e>>26]+52}function Pr(e,r,t,n){8>t?(Tr(r,e.T,0,0),Dr(e.ub[n],r,t)):(t-=8,Tr(r,e.T,0,1),8>t?(Tr(r,e.T,1,0),Dr(e.vb[n],r,t)):(Tr(r,e.T,1,1),Dr(e.Bb,r,t-8)))}function lr(e){e.T=t(2),e.ub=t(16),e.vb=t(16),e.Bb=xr({},8);for(var r=0;16>r;++r)e.ub[r]=xr({},3),e.vb[r]=xr({},3);return e}function vr(e,r){Gr(e.T);for(var t=0;r>t;++t)Gr(e.ub[t].db),Gr(e.vb[t].db);Gr(e.Bb.db)}function Br(e,r,t,n,s){var o,i,_,a,c;for(o=it[e.T[0]>>>2],i=it[2048-e.T[0]>>>2],_=i+it[e.T[1]>>>2],a=i+it[2048-e.T[1]>>>2],c=0,c=0;8>c;++c){if(c>=t)return;n[s+c]=o+Ar(e.ub[r],c)}for(;16>c;++c){if(c>=t)return;n[s+c]=_+Ar(e.vb[r],c-8)}for(;t>c;++c)n[s+c]=a+Ar(e.Bb,c-8-8)}function kr(e,r,t,n){Pr(e,r,t,n),0==--e.Hb[n]&&(Br(e,n,e.fb,e.Tb,272*n),e.Hb[n]=e.fb)}function Sr(e){return lr(e),e.Tb=[],e.Hb=[],e}function Mr(e,r,t){return e.Tb[272*t+r]}function br(e,r){for(var t=0;r>t;++t)Br(e,t,e.fb,e.Tb,272*t),e.Hb[t]=e.fb}function Er(e,r,n){var s,o;if(null==e.Cb||e.O!=n||e.qb!=r)for(e.qb=r,e.ec=(1<<r)-1,e.O=n,o=1<<e.O+e.qb,e.Cb=t(o),s=0;o>s;++s)e.Cb[s]=Lr({})}function gr(e,r,t){return e.Cb[((r&e.ec)<<e.O)+((255&t)>>>8-e.O)]}function yr(e){var r,t=1<<e.O+e.qb;for(r=0;t>r;++r)Gr(e.Cb[r].eb)}function Rr(e,r,t){var n,s,o=1;for(s=7;s>=0;--s)n=t>>s&1,Tr(r,e.eb,o,n),o=o<<1|n}function Fr(e,r,t,n){var s,o,i,_,a=1,c=1;for(o=7;o>=0;--o)s=n>>o&1,_=c,a&&(i=t>>o&1,_+=1+i<<8,a=i==s),Tr(r,e.eb,_,s),c=c<<1|s}function Lr(e){return e.eb=t(768),e}function zr(e,r,t,n){var s,o,i=1,_=7,a=0;if(r)for(;_>=0;--_)if(o=t>>_&1,s=n>>_&1,a+=jr(e.eb[(1+o<<8)+i],s),i=i<<1|s,o!=s){--_;break}for(;_>=0;--_)s=n>>_&1,a+=jr(e.eb[i],s),i=i<<1|s;return a}function Cr(e){e.g=-1,e.p=0}function wr(e){e.g=0,e.p=0}function xr(e,r){return e.cb=r,e.db=t(1<<r),e}function Dr(e,r,t){var n,s,o=1;for(s=e.cb;0!=s;)--s,n=t>>>s&1,Tr(r,e.db,o,n),o=o<<1|n}function Ar(e,r){var t,n,s=1,o=0;for(n=e.cb;0!=n;)--n,t=r>>>n&1,o+=jr(e.db[s],t),s=(s<<1)+t;return o}function Ir(e,r,t){var n,s,o=1;for(s=0;e.cb>s;++s)n=1&t,Tr(r,e.db,o,n),o=o<<1|n,t>>=1}function Or(e,r){var t,n,s=1,o=0;for(n=e.cb;0!=n;--n)t=1&r,r>>>=1,o+=jr(e.db[s],t),s=s<<1|t;return o}function Hr(e,r,t,n,s){var o,i,_=1;for(i=0;n>i;++i)o=1&s,Tr(t,e,r+_,o),_=_<<1|o,s>>=1}function Nr(e,r,t,n){var s,o,i=1,_=0;for(o=t;0!=o;--o)s=1&n,n>>>=1,_+=it[(2047&(e[r+i]-s^-s))>>>2],i=i<<1|s;return _}function Gr(e){for(var r=e.length-1;r>=0;--r)e[r]=1024}function Tr(e,r,t,o){var i,_=r[t];i=(e.lb>>>11)*_,o?(e.Qb=n(e.Qb,s(a(i),[4294967295,0])),e.lb-=i,r[t]=_-(_>>>5)<<16>>16):(e.lb=i,r[t]=_+(2048-_>>>5)<<16>>16),-16777216&e.lb||(e.lb<<=8,Vr(e))}function Wr(e,r,t){for(var s=t-1;s>=0;--s)e.lb>>>=1,1==(r>>>s&1)&&(e.Qb=n(e.Qb,a(e.lb))),-16777216&e.lb||(e.lb<<=8,Vr(e))}function Yr(e){return n(n(a(e.mb),e.Fb),[4,0])}function Zr(e){e.Fb=tt,e.Qb=tt,e.lb=-1,e.mb=1,e.fc=0}function Vr(e){var r,t=c(d(e.Qb,32));if(0!=t||o(e.Qb,[4278190080,0])<0){e.Fb=n(e.Fb,a(e.mb)),r=e.fc;do k(e.cc,r+t),r=255;while(0!=--e.mb);e.fc=c(e.Qb)>>>24}++e.mb,e.Qb=m(s(e.Qb,[16777215,0]),8)}function jr(e,r){return it[(2047&(e-r^-r))>>>2]}function Kr(e){var r,t,n,s=[],o=0,i=e.length;if("object"==typeof e)return e;for(M(e,0,i,s,0),n=0;i>n;++n)r=s[n],r>=1&&127>=r?++o:o+=!r||r>=128&&2047>=r?2:3;for(t=[],o=0,n=0;i>n;++n)r=s[n],r>=1&&127>=r?t[o++]=r<<24>>24:!r||r>=128&&2047>=r?(t[o++]=(192|r>>6&31)<<24>>24,t[o++]=(128|63&r)<<24>>24):(t[o++]=(224|r>>12&15)<<24>>24,t[o++]=(128|r>>6&63)<<24>>24,t[o++]=(128|63&r)<<24>>24);return t}function qr(e){return e[1]+e[0]}function Jr(e,t,n,s){function o(){try{for(var e,r=(new Date).getTime();V(a.c.Ub);)if(i=qr(a.c.Ub.Ob)/qr(a.c.gc),(new Date).getTime()-r>200)return s(i),Xr(o,0),0;s(1),e=B(a.c._b),Xr(n.bind(null,e),0)}catch(t){n(null,t)}}var i,_,a={},c=void 0===n&&void 0===s;if("function"!=typeof n&&(_=n,n=s=0),s=s||function(e){return void 0!==_?r(e,_):void 0},n=n||function(e,r){return void 0!==_?postMessage({action:Qr,cbn:_,result:e,error:r}):void 0},c){for(a.c=y({},Kr(e),_t(t));V(a.c.Ub););return B(a.c._b)}try{a.c=y({},Kr(e),_t(t)),s(0)}catch(f){return n(null,f)}Xr(o,0)}var Qr=1,Ur=3,Xr="function"==typeof setImmediate?setImmediate:setTimeout,$r=4294967296,et=[4294967295,-$r],rt=[0,-0x8000000000000000],tt=[0,0],nt=[1,0],st=function(){var e,r,t,n=[];for(e=0;256>e;++e){for(t=e,r=0;8>r;++r)0!=(1&t)?t=t>>>1^-306674912:t>>>=1;n[e]=t}return n}(),ot=function(){var e,r,t,n=2,s=[0,1];for(t=2;22>t;++t)for(r=1<<(t>>1)-1,e=0;r>e;++e,++n)s[n]=t<<24>>24;return s}(),it=function(){var e,r,t,n,s=[];for(r=8;r>=0;--r)for(n=1<<9-r-1,e=1<<9-r,t=n;e>t;++t)s[t]=(r<<6)+(e-t<<6>>>9-r-1);return s}(),_t=function(){var e=[{s:16,f:64,m:0},{s:20,f:64,m:0},{s:19,f:64,m:1},{s:20,f:64,m:1},{s:21,f:128,m:1},{s:22,f:128,m:1},{s:23,f:128,m:1},{s:24,f:255,m:1},{s:25,f:255,m:1}];return function(r){return e[r-1]||e[6]}}();return"undefined"==typeof onmessage||"undefined"!=typeof window&&void 0!==window.document||!function(){onmessage=function(r){r&&r.Zb&&r.Zb.action==Qr&&e.compress(r.Zb.Zb,r.Zb.jc,r.Zb.cbn)}}(),{compress:Jr}}();this.LZMA=this.LZMA_WORKER=e;