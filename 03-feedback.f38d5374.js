!function(){var e,t=document.querySelector(".feedback-form"),a="feedback-form-state";t.elements.message.value=null!==(e=localStorage.getItem(a))&&void 0!==e?e:"",t.addEventListener("input",(function(e){localStorage.setItem(a,e.target.value)})),t.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(a),t.reset()}))}();
//# sourceMappingURL=03-feedback.f38d5374.js.map
