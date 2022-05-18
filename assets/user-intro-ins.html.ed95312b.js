import{_ as a,c as n}from"./app.025c4c0b.js";const s={},t=n(`<h2 id="\u7528\u6237\u9996\u9875-html-\u663E\u793A-user-intro-ins" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u9996\u9875-html-\u663E\u793A-user-intro-ins" aria-hidden="true">#</a> \u7528\u6237\u9996\u9875 HTML \u663E\u793A / User Intro Ins</h2><h3 id="\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5206\u7C7B" aria-hidden="true">#</a> \u5206\u7C7B</h3><p>\u666E\u901A\u6A21\u5757</p><h3 id="\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a> \u529F\u80FD</h3><p>\u89E3\u6790\u7528\u6237\u4E3B\u9875\u7684 HTML \u4EE3\u7801\u3002 \u6709 XSS \u4FDD\u62A4\u3002</p><p>\u7528\u6CD5\uFF1A\u5728\u4E2A\u4EBA\u4E3B\u9875\u5199\u4E0B <code>exlg.html: &lt;HTML \u4EE3\u7801&gt;</code> \u5373\u53EF\u89E3\u6790\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>exlg.html: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width:670px;padding:20px 0;box-shadow:0 5px 7px #aaa;margin:25px auto;background-image: linear-gradient(-45deg, RGBA(63,72,204,0.04), RGBA(63,72,204,0.001));<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>z-index:2 !important;color:RGB(63,72,204); font-weight:bold;font-size:35px;margin-left:240px;text-shadow:0 2px 4px #ccc;z-index:20;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>&gt; Hello &lt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>font</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>z-index:2 !important;color:#525ad1; font-weight:bold;font-size:25px;margin-left:260px;text-shadow:0 2px 4px #ccc;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>I&#39;m Haraki.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>font</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>backdrop-filter:blur(12px);z-index:2;list-style:none;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>margin-bottom:10px;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color:#fff; font-weight:bold;font-size:20px;line-height:40px;text-align:center !important;margin-left:120px;display:inline-block;height:40px;width:60px;background:RGB(63,72,204);border-radius:10px;box-shadow:0 3px 5px #aaa;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>font</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color:RGB(63,72,204);font-size:17px;line-height:40px;margin-left:20px;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.luogu.com.cn/user/399993<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>www.luogu.com.cn/user/399993<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>margin-bottom:10px;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color:#fff; font-weight:bold;font-size:20px;line-height:40px;text-align:center !important;margin-left:120px;display:inline-block;height:40px;width:60px;background:RGB(0,162,232);border-radius:10px;box-shadow:0 3px 5px #aaa;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Exlg<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>font</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color:RGB(0,162,232);font-size:17px;line-height:40px;margin-left:20px;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://exlg.cc/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>exlg.cc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>margin-bottom:10px;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color:#fff; font-weight:bold;font-size:20px;line-height:40px;text-align:center !important;margin-left:120px;display:inline-block;height:40px;width:60px;background:RGB(123,185,236);border-radius:10px;box-shadow:0 3px 5px #aaa;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Blog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>font</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color:RGB(123,185,236);font-size:17px;line-height:40px;margin-left:20px;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.cnblogs.com/haraki<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>www.cnblogs.com/haraki<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color:rgb(113,113,113);margin-left:20px;display:block;margin-top:20px;font-size:14px;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Powered by Exlg.html.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>font</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color:rgb(113,113,113);margin-left:20px;font-size:14px;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Made by Haraki.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>font</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function p(o,e){return t}var l=a(s,[["render",p],["__file","user-intro-ins.html.vue"]]);export{l as default};
