"use strict";
"use strict";var newsletter_cb=null,newsletter_script=null,newsletter_forms=[];!function(){var e=document.getElementsByClassName("newsletter__form"),t=document.getElementsByTagName("head")[0],s=function(e,s){newsletter_script=document.createElement("script"),newsletter_script.src=e+"&EMAIL="+s[0].value,t.appendChild(newsletter_script)},r=function(e){var t=this;t.form=e,t.formurl=t.form.getAttribute("action"),t.button=t.form.getElementsByClassName("newsletter__submit")[0],t.input=t.form.getElementsByClassName("newsletter__input")[0],t.msg=t.form.getElementsByClassName("newsletter__message")[0],t.submit=function(e){e.preventDefault(),t.form.classList.remove("in-progress"),t.form.classList.remove("error"),t.form.classList.remove("complete"),t.form.classList.add("in-progress"),s(t.formurl,[t.input])},t.form.addEventListener("submit",t.submit),newsletter_forms[newsletter_forms.length]=t},n=function(){for(var t=0;t<e.length;t++)e[t]=new r(e[t])};newsletter_cb=function(e){for(var s=e.result,r=e.msg,n="",l="",o=newsletter_forms.length-1;o>=0;o--)if(newsletter_forms[o].form.classList.contains("in-progress")){var m=newsletter_forms[o];break}switch(m.msg.style.display="inline-block",s){case"success":n='<span class="home-box-newsletter-title"">Success!</span><br/>'+r,l="complete";break;case"error":n=r.split(" - ")[1],l="error";break;default:n="Oops, something went wrong. Try again later.",l="error"}m.msg.innerHTML=n,m.form.classList.remove("in-progress"),m.form.classList.add(l),t.removeChild(newsletter_script),newsletter_script=null},n()}();
"use strict";!function(){var e=document.getElementsByClassName("side-tap")[0],t=document.body;e.addEventListener("click",function(e){return t.classList.toggle("side-tap--open")})}();
"use strict";!function(){var t=document.getElementsByClassName("sticky"),s=function(t){this.el=t,this.par=t.parentNode,this.body=document.body,this.state=-1,this.offset_start=this.el.getAttribute("data-offsetstart")||0,this.ignore_end=this.el.getAttribute("data-ignoreend")||!1,this.init()};s.prototype.scroll=function(t){var s=window.pageYOffset||document.documentElement.scrollTop,e=s-this.prev_top;if(this.prev_top=s,1!==this.state&&s+this.el_top>this.el_start&&(s<this.el_end||this.ignore_end)?(this.el.classList.remove("sticky--top","sticky--bottom"),this.el.classList.add("sticky--middle"),this.el.style.top="0px",this.el_top=0,this.state=1):2!==this.state&&s+this.el_top>=this.el_end&&!this.ignore_end?(this.el.classList.remove("sticky--top","sticky--middle"),this.el.classList.add("sticky--bottom"),this.el.style.top="auto",this.el_top=0,this.state=2):s+this.el_top<=this.el_start&&0!==this.state&&(this.el.classList.remove("sticky--middle","sticky--bottom"),this.el.classList.add("sticky--top"),this.el.style.top=this.offset_start+"px",this.el_top=0,this.state=0),1===this.state&&this.el_scroll_diff<0){if(0===this.el_top&&e<0||this.el_top===this.el_scroll_diff&&e>0)return;this.el_top=this.el_top-e,(this.el_top<this.el_scroll_diff||this.el_top>0)&&(this.el_top=this.el_top>0?0:this.el_scroll_diff),this.el.style.top=this.el_top+"px"}},s.prototype.calculate=function(){this.win_height=window.innerHeight,this.body_Rect=this.body.getBoundingClientRect(),this.par_rect=this.par.getBoundingClientRect(),this.prev_top=0,this.el_rect=this.el.getBoundingClientRect(),this.el_top=0,this.el_height=this.el.offsetHeight,this.el_scroll_diff=this.win_height-this.el_height,this.el_start=this.par_rect.top-this.body_Rect.top+this.offset_start,this.el_end=this.par_rect.bottom-this.body_Rect.top-this.el_rect.height},s.prototype.init=function(){var t=this;this.calculate(),this.scroll(),window.addEventListener("resize",function(s){return t.calculate(s)}),window.addEventListener("scroll",function(s){return t.scroll(s)})};for(var e=0;e<t.length;e++)new s(t[e])}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJjb21wb25lbnRzL19uZXdzbGV0dGVyLXN1Ym1pdC5qcyIsImNvbXBvbmVudHMvX3NpZGV0YXAuanMiLCJjb21wb25lbnRzL19zdGlja3ktZWxlbWVudHMuanMiXSwibmFtZXMiOlsibmV3c2xldHRlcl9jYiIsIm5ld3NsZXR0ZXJfc2NyaXB0IiwibmV3c2xldHRlcl9mb3JtcyIsImZvcm1zIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaGVhZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwianNvblAiLCJ1cmwiLCJpbnB1dCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJ2YWx1ZSIsImFwcGVuZENoaWxkIiwiTmV3c2xldHRlckZvcm0iLCJmb3JtIiwic2VsZiIsInRoaXMiLCJmb3JtdXJsIiwiZ2V0QXR0cmlidXRlIiwiYnV0dG9uIiwibXNnIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxlbmd0aCIsImluaXQiLCJpIiwiZGF0YSIsInN0YXR1cyIsInJlc3VsdCIsInJlc3BfbXNnIiwicmVzcF9jbGFzcyIsImNvbnRhaW5zIiwic3R5bGUiLCJkaXNwbGF5Iiwic3BsaXQiLCJpbm5lckhUTUwiLCJyZW1vdmVDaGlsZCIsInNpZGV0YXBfbGluayIsImJvZHkiLCJ0b2dnbGUiLCJzdGlja3lfZWxlbWVudHMiLCJTdGlja3kiLCJlbCIsInBhciIsInBhcmVudE5vZGUiLCJzdGF0ZSIsIm9mZnNldF9zdGFydCIsImlnbm9yZV9lbmQiLCJwcm90b3R5cGUiLCJzY3JvbGwiLCJ0b3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsInNjcm9sbF9kaWZmIiwicHJldl90b3AiLCJlbF90b3AiLCJlbF9zdGFydCIsImVsX2VuZCIsImVsX3Njcm9sbF9kaWZmIiwiY2FsY3VsYXRlIiwid2luX2hlaWdodCIsImlubmVySGVpZ2h0IiwiYm9keV9SZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyX3JlY3QiLCJlbF9yZWN0IiwiZWxfaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiYm90dG9tIiwiaGVpZ2h0IiwiX3RoaXMiXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFhQSxJQUFJQSxlQUFnQixLQUNoQkMsa0JBQW9CLEtBQ3BCQyxxQkFFSixXQUVJLEdBQUlDLEdBQVFDLFNBQVNDLHVCQUF1QixvQkFDeENDLEVBQU9GLFNBQVNHLHFCQUFxQixRQUFRLEdBQzdDQyxFQUFRLFNBQVNDLEVBQUtDLEdBQ3BCVCxrQkFBb0JHLFNBQVNPLGNBQWMsVUFDM0NWLGtCQUFrQlcsSUFBTUgsRUFDdEIsVUFBVUMsRUFBTSxHQUFHRyxNQUNyQlAsRUFBS1EsWUFBWWIsb0JBRW5CYyxFQUFpQixTQUFTQyxHQUV4QixHQUFJQyxHQUFPQyxJQUNYRCxHQUFLRCxLQUFPQSxFQUNaQyxFQUFLRSxRQUFVRixFQUFLRCxLQUFLSSxhQUFhLFVBQ3RDSCxFQUFLSSxPQUFTSixFQUFLRCxLQUFLWCx1QkFBdUIsc0JBQXNCLEdBQ3JFWSxFQUFLUCxNQUFRTyxFQUFLRCxLQUFLWCx1QkFBdUIscUJBQXFCLEdBQ25FWSxFQUFLSyxJQUFNTCxFQUFLRCxLQUFLWCx1QkFBdUIsdUJBQXVCLEdBQ25FWSxFQUFLTSxPQUFTLFNBQVNDLEdBR3JCQSxFQUFFQyxpQkFHRlIsRUFBS0QsS0FBS1UsVUFBVUMsT0FBTyxlQUMzQlYsRUFBS0QsS0FBS1UsVUFBVUMsT0FBTyxTQUMzQlYsRUFBS0QsS0FBS1UsVUFBVUMsT0FBTyxZQUczQlYsRUFBS0QsS0FBS1UsVUFBVUUsSUFBSSxlQUd4QnBCLEVBQU1TLEVBQUtFLFNBQVVGLEVBQUtQLFNBSTVCTyxFQUFLRCxLQUFLYSxpQkFBaUIsU0FBVVosRUFBS00sUUFFMUNyQixpQkFBaUJBLGlCQUFpQjRCLFFBQVViLEdBRzlDYyxFQUFPLFdBQ0gsSUFBSyxHQUFJQyxHQUFJLEVBQUdB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QUssR0FBSVEsR0FBSSxFQUFHQSxFQUFJZSxFQUFnQmpCLE9BQVFFLElBQzFDLEdBQUlnQixHQUFPRCxFQUFnQmYiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7IiwiLyoqXG4gKlxuICpcdE5ld3NsZXR0ZXIgU3VibWl0XG4gKiBcdFRoaXMgd2lsbCBhcHBseSBhamF4IHN1Ym1pdHMgdG8gdGhlIG5ld3NsZXR0ZXJzXG4gKlxuICogIFNvbWUgbWFpbGNoaXAgcmV0dXJuczpcbiAqICBPYmplY3Qge3Jlc3VsdDogXCJlcnJvclwiLCBtc2c6IFwiMCAtIEFuIGVtYWlsIGFkZHJlc3MgbXVzdCBjb250YWluIGEgc2luZ2xlIEBcIn1cbiAqICBtYWluLmpzOjEgT2JqZWN0IHtyZXN1bHQ6IFwiZXJyb3JcIiwgbXNnOiBcIjAgLSBUaGUgdXNlcm5hbWUgcG9ydGlvbiBvZiB0aGUgZW1haWwgYWRkcmVzcyBpcyBpbnZhbGlkICh0aGUgcG9ydGlvbiBiZWZvcmUgdGhlIEA6IClcIn1cbiAqICBtYWluLmpzOjEgT2JqZWN0IHtyZXN1bHQ6IFwiZXJyb3JcIiwgbXNnOiBcIjAgLSBUaGUgZG9tYWluIHBvcnRpb24gb2YgdGhlIGVtYWlsIGFkZHJlc3MgaXMgaW52YWxpZCAodGhlIHBvcnRpb24gYWZ0ZXIgdGhlIEA6IClcIn1cbiAqICBtYWluLmpzOjEgT2JqZWN0IHtyZXN1bHQ6IFwic3VjY2Vzc1wiLCBtc2c6IFwiQWxtb3N0IGZpbmlzaGVkLi4uIFdlIG5lZWQgdG8gY29uZmlybSB5b3VyIGVtYWlsIGHigKZhc2UgY2xpY2sgdGhlIGxpbmsgaW4gdGhlIGVtYWlsIHdlIGp1c3Qgc2VudCB5b3UuXCJ9bXNnOiBcIkFsbW9zdCBmaW5pc2hlZC4uLiBXZSBuZWVkIHRvIGNvbmZpcm0geW91ciBlbWFpbCBhZGRyZXNzLiBUbyBjb21wbGV0ZSB0aGUgc3Vic2NyaXB0aW9uIHByb2Nlc3MsIHBsZWFzZSBjbGljayB0aGUgbGluayBpbiB0aGUgZW1haWwgd2UganVzdCBzZW50IHlvdS5cInJlc3VsdDogXCJzdWNjZXNzXCJcbiAqXG4gKi9cblxudmFyIG5ld3NsZXR0ZXJfY2IgPSBudWxsLFxuICAgIG5ld3NsZXR0ZXJfc2NyaXB0ID0gbnVsbCxcbiAgICBuZXdzbGV0dGVyX2Zvcm1zID0gW107XG5cbihmdW5jdGlvbigpe1xuXG4gICAgdmFyIGZvcm1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV3c2xldHRlcl9fZm9ybScpLFxuICAgICAgICBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSxcbiAgICAgICAganNvblAgPSBmdW5jdGlvbih1cmwsIGlucHV0KXtcbiAgICAgICAgICBuZXdzbGV0dGVyX3NjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgIG5ld3NsZXR0ZXJfc2NyaXB0LnNyYyA9IHVybCtcbiAgICAgICAgICAgICcmRU1BSUw9JytpbnB1dFswXS52YWx1ZVxuICAgICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQobmV3c2xldHRlcl9zY3JpcHQpO1xuICAgICAgICB9LFxuICAgICAgICBOZXdzbGV0dGVyRm9ybSA9IGZ1bmN0aW9uKGZvcm0pe1xuXG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgIHNlbGYuZm9ybSA9IGZvcm07XG4gICAgICAgICAgc2VsZi5mb3JtdXJsID0gc2VsZi5mb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyk7XG4gICAgICAgICAgc2VsZi5idXR0b24gPSBzZWxmLmZvcm0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV3c2xldHRlcl9fc3VibWl0JylbMF07XG4gICAgICAgICAgc2VsZi5pbnB1dCA9IHNlbGYuZm9ybS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZXdzbGV0dGVyX19pbnB1dCcpWzBdO1xuICAgICAgICAgIHNlbGYubXNnID0gc2VsZi5mb3JtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25ld3NsZXR0ZXJfX21lc3NhZ2UnKVswXTtcbiAgICAgICAgICBzZWxmLnN1Ym1pdCA9IGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgICAgICAvLyBzdG9wIGRlZmF1bHQgYWN0aW9uXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBhbGwgcHJldmlvdXMgc3RhdGVzXG4gICAgICAgICAgICBzZWxmLmZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaW4tcHJvZ3Jlc3MnKTtcbiAgICAgICAgICAgIHNlbGYuZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgICAgICAgICAgc2VsZi5mb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJyk7XG5cbiAgICAgICAgICAgIC8vIFNldCBpbiBwcm9ncmVzcyBzdGF0ZVxuICAgICAgICAgICAgc2VsZi5mb3JtLmNsYXNzTGlzdC5hZGQoJ2luLXByb2dyZXNzJyk7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGFnYWluc3QgbWFpbGNoaW1wIGZvciB2YWxpZGl0eVxuICAgICAgICAgICAganNvblAoc2VsZi5mb3JtdXJsLCBbc2VsZi5pbnB1dF0pO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHNlbGYuc3VibWl0KTtcblxuICAgICAgICAgIG5ld3NsZXR0ZXJfZm9ybXNbbmV3c2xldHRlcl9mb3Jtcy5sZW5ndGhdID0gc2VsZjtcblxuICAgICAgICB9LFxuICAgICAgICBpbml0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3Jtc1tpXSA9IG5ldyBOZXdzbGV0dGVyRm9ybShmb3Jtc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAvKiBWYWxpZGF0ZSBSZXF1ZXN0ICovXG4gICAgbmV3c2xldHRlcl9jYiA9IGZ1bmN0aW9uKGRhdGEpe1xuXG4gICAgICAgIHZhciBzdGF0dXMgPSBkYXRhLnJlc3VsdCxcbiAgICAgICAgICAgIG1zZyA9IGRhdGEubXNnLFxuICAgICAgICAgICAgcmVzcF9tc2cgPSAnJyxcbiAgICAgICAgICAgIHJlc3BfY2xhc3MgPSAnJztcblxuICAgICAgICBmb3IgKHZhciBpID0gbmV3c2xldHRlcl9mb3Jtcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYobmV3c2xldHRlcl9mb3Jtc1tpXS5mb3JtLmNsYXNzTGlzdC5jb250YWlucygnaW4tcHJvZ3Jlc3MnKSl7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSBuZXdzbGV0dGVyX2Zvcm1zW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5tc2cuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuXG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgICByZXNwX21zZyA9ICc8c3BhbiBjbGFzcz1cImhvbWUtYm94LW5ld3NsZXR0ZXItdGl0bGVcIlwiPlN1Y2Nlc3MhPC9zcGFuPjxici8+Jyttc2c7XG4gICAgICAgICAgICByZXNwX2NsYXNzID0gJ2NvbXBsZXRlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgIHJlc3BfbXNnID0gKG1zZy5zcGxpdCgnIC0gJykpWzFdO1xuICAgICAgICAgICAgcmVzcF9jbGFzcyA9ICdlcnJvcic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmVzcF9tc2cgPSAoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nLiBUcnkgYWdhaW4gbGF0ZXIuJyk7XG4gICAgICAgICAgICByZXNwX2NsYXNzID0gJ2Vycm9yJztcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYubXNnLmlubmVySFRNTCA9IChyZXNwX21zZyk7XG4gICAgICAgIHNlbGYuZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpbi1wcm9ncmVzcycpO1xuICAgICAgICBzZWxmLmZvcm0uY2xhc3NMaXN0LmFkZChyZXNwX2NsYXNzKTtcblxuICAgICAgICAvLyBDbGVhciBvdXQgc2NyaXB0IGZvciBHQ1xuICAgICAgICBoZWFkLnJlbW92ZUNoaWxkKG5ld3NsZXR0ZXJfc2NyaXB0KTtcbiAgICAgICAgbmV3c2xldHRlcl9zY3JpcHQgPSBudWxsO1xuXG4gICAgfVxuXG4gICAgLy8gaW5pdCBmb3JtcyBsb2dpY1xuICAgIGluaXQoKTtcblxufSkoKTtcbiIsIi8qKlxuICpcbiAqICBTaWRldGFwXG4gKiAgVGhlIHNpZGV0YXAgSlMgaGFuZGxlcyB0aGUgY2xhc3MgdG9nZ2xpbmcgb2YgdGhlIG5hdmlnYXRpb25hbCBtZW51IG9uIG1vYmlsZSBkZXZpY2VzLlxuICpcbiAqL1xuXG4oZnVuY3Rpb24oKXtcblxuICB2YXIgc2lkZXRhcF9saW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2lkZS10YXAnKVswXSxcbiAgICAgIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4gIHNpZGV0YXBfbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdzaWRlLXRhcC0tb3BlbicpKTtcblxufSkoKTtcbiIsIi8qKlxuICpcbiAqICBTdGlja3kgRWxlbWVudHNcbiAqICBTdGlja3MgdGhlIGVsZW1lbnQgdG8gdGhlIHRvcCBvZiB0aGUgc2NyZWVuIHJlbGF0aXZlIHRvIHRoZSBwYXJlbnQgYW5kIHNjb2xsLlxuICpcbiAqL1xuXG4oZnVuY3Rpb24oKXtcblxuICB2YXIgc3RpY2t5X2VsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RpY2t5JyksXG4gICAgICBTdGlja3kgPSBmdW5jdGlvbihlbCl7XG4gICAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICAgICAgdGhpcy5wYXIgPSBlbC5wYXJlbnROb2RlO1xuICAgICAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICB0aGlzLnN0YXRlID0gLTE7XG4gICAgICAgIHRoaXMub2Zmc2V0X3N0YXJ0ID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2Zmc2V0c3RhcnQnKSB8fCAwO1xuICAgICAgICB0aGlzLmlnbm9yZV9lbmQgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZ25vcmVlbmQnKSB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB9O1xuXG4gIFN0aWNreS5wcm90b3R5cGUuc2Nyb2xsID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgdG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICAgIHNjcm9sbF9kaWZmID0gdG9wIC0gdGhpcy5wcmV2X3RvcDtcblxuICAgIHRoaXMucHJldl90b3AgPSB0b3A7XG5cbiAgICBpZih0aGlzLnN0YXRlICE9PSAxICYmIHRvcCt0aGlzLmVsX3RvcCA+IHRoaXMuZWxfc3RhcnQgJiYgKHRvcCA8IHRoaXMuZWxfZW5kIHx8IHRoaXMuaWdub3JlX2VuZCkpIHtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5LS10b3AnLCdzdGlja3ktLWJvdHRvbScpO1xuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzdGlja3ktLW1pZGRsZScpO1xuICAgICAgdGhpcy5lbC5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgIHRoaXMuZWxfdG9wID0gMDtcbiAgICAgIHRoaXMuc3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZih0aGlzLnN0YXRlICE9PSAyICYmIHRvcCt0aGlzLmVsX3RvcCA+PSB0aGlzLmVsX2VuZCAmJiAhdGhpcy5pZ25vcmVfZW5kKSB7XG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreS0tdG9wJywnc3RpY2t5LS1taWRkbGUnKTtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc3RpY2t5LS1ib3R0b20nKTtcbiAgICAgIHRoaXMuZWwuc3R5bGUudG9wID0gJ2F1dG8nO1xuICAgICAgdGhpcy5lbF90b3AgPSAwO1xuICAgICAgdGhpcy5zdGF0ZSA9IDI7XG4gICAgfSBlbHNlIGlmKHRvcCt0aGlzLmVsX3RvcCA8PSB0aGlzLmVsX3N0YXJ0ICYmIHRoaXMuc3RhdGUgIT09IDApIHtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5LS1taWRkbGUnLCdzdGlja3ktLWJvdHRvbScpO1xuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzdGlja3ktLXRvcCcpO1xuICAgICAgdGhpcy5lbC5zdHlsZS50b3AgPSB0aGlzLm9mZnNldF9zdGFydCArICdweCc7XG4gICAgICB0aGlzLmVsX3RvcCA9IDA7XG4gICAgICB0aGlzLnN0YXRlID0gMDtcbiAgICB9XG5cbiAgICBpZih0aGlzLnN0YXRlID09PSAxICYmIHRoaXMuZWxfc2Nyb2xsX2RpZmYgPCAwKSB7XG4gICAgICBpZihcbiAgICAgICAgKHRoaXMuZWxfdG9wID09PSAwICYmIHNjcm9sbF9kaWZmIDwgMCkgfHxcbiAgICAgICAgKHRoaXMuZWxfdG9wID09PSB0aGlzLmVsX3Njcm9sbF9kaWZmICYmIHNjcm9sbF9kaWZmID4gMClcbiAgICAgICkgcmV0dXJuO1xuICAgICAgdGhpcy5lbF90b3AgPSB0aGlzLmVsX3RvcCAtIHNjcm9sbF9kaWZmO1xuICAgICAgaWYodGhpcy5lbF90b3AgPCB0aGlzLmVsX3Njcm9sbF9kaWZmIHx8IHRoaXMuZWxfdG9wID4gMCl7XG4gICAgICAgIHRoaXMuZWxfdG9wID0gdGhpcy5lbF90b3AgPiAwID8gMCA6IHRoaXMuZWxfc2Nyb2xsX2RpZmY7XG4gICAgICB9XG4gICAgICB0aGlzLmVsLnN0eWxlLnRvcCA9IHRoaXMuZWxfdG9wICsgJ3B4JztcbiAgICB9XG5cbiAgfTtcblxuICBTdGlja3kucHJvdG90eXBlLmNhbGN1bGF0ZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHRoaXMud2luX2hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLmJvZHlfUmVjdCA9IHRoaXMuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLnBhcl9yZWN0ID0gdGhpcy5wYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5wcmV2X3RvcCA9IDA7XG5cbiAgICB0aGlzLmVsX3JlY3QgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuZWxfdG9wID0gMDtcbiAgICB0aGlzLmVsX2hlaWdodCA9IHRoaXMuZWwub2Zmc2V0SGVpZ2h0O1xuICAgIHRoaXMuZWxfc2Nyb2xsX2RpZmYgPSB0aGlzLndpbl9oZWlnaHQgLSB0aGlzLmVsX2hlaWdodDtcbiAgICB0aGlzLmVsX3N0YXJ0ID0gdGhpcy5wYXJfcmVjdC50b3AgLSB0aGlzLmJvZHlfUmVjdC50b3AgKyB0aGlzLm9mZnNldF9zdGFydDtcbiAgICB0aGlzLmVsX2VuZCA9IHRoaXMucGFyX3JlY3QuYm90dG9tIC0gdGhpcy5ib2R5X1JlY3QudG9wIC0gdGhpcy5lbF9yZWN0LmhlaWdodDtcblxuICB9O1xuXG4gIFN0aWNreS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhbGN1bGF0ZSgpO1xuICAgIHRoaXMuc2Nyb2xsKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGUgPT4gdGhpcy5jYWxjdWxhdGUoZSkpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBlID0+IHRoaXMuc2Nyb2xsKGUpKTtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0aWNreV9lbGVtZW50cy5sZW5ndGg7IGkrKylcbiAgICBuZXcgU3RpY2t5KHN0aWNreV9lbGVtZW50c1tpXSk7XG5cbn0pKCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
