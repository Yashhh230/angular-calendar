"use strict";(self.webpackChunkeventcalender=self.webpackChunkeventcalender||[]).push([[780],{9780:(C,_,s)=>{s.r(_),s.d(_,{ItemComponent:()=>h});var d=s(6814),o=s(95),e=s(5879),c=s(5359),g=s(6381),f=s(4164);function v(r,b){1&r&&(e.TgZ(0,"small",10),e._uU(1," First Name field is required "),e.qZA())}function N(r,b){1&r&&(e.TgZ(0,"small",10),e._uU(1," Last Name field is required "),e.qZA())}const p=function(r){return{"is-invalid":r}};let h=(()=>{class r{constructor(l,m,t){this.veryLongProcessService=l,this.router=m,this.stepperService=t,this.userForm=this.veryLongProcessService.userForm,this.submitted=!1}goPrevious(){const l=this.stepperService.getStepIndex()-1;this.stepperService.updateStepIndex(l),this.router.navigate(["/product/product-add/name"])}goNext(){const l=this.stepperService.getStepIndex()+1;this.stepperService.updateStepIndex(l),this.router.navigate(["/product/product-add/address"])}submit(){this.submitted=!0,this.userForm.valid&&this.goNext()}static#e=this.\u0275fac=function(m){return new(m||r)(e.Y36(c.o),e.Y36(g.F0),e.Y36(f.P))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-item"]],standalone:!0,features:[e.jDz],decls:16,vars:9,consts:[["id","userForm",3,"formGroup","ngSubmit"],[1,"form-group"],["for","firstName"],["id","firstName","formControlName","firstName","type","text","autocomplete","off","placeholder","firstName",1,"form-control",3,"ngClass"],["class","text-danger",4,"ngIf"],["for","lastName"],["id","lastName","formControlName","lastName","type","text","autocomplete","off","placeholder","Last Name",1,"form-control",3,"ngClass"],[1,"navigation"],["type","button",1,"mt-3","mb-3","me-2",3,"click"],["type","submit",3,"click"],[1,"text-danger"]],template:function(m,t){if(1&m&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(1,"div",1)(2,"label",2),e._uU(3,"First Name"),e.qZA(),e._UZ(4,"input",3),e.YNc(5,v,2,0,"small",4),e.qZA(),e.TgZ(6,"div",1)(7,"label",5),e._uU(8,"Last Name"),e.qZA(),e._UZ(9,"input",6),e.YNc(10,N,2,0,"small",4),e.qZA()(),e.TgZ(11,"div",7)(12,"button",8),e.NdJ("click",function(){return t.goPrevious()}),e._uU(13,"Previous"),e.qZA(),e.TgZ(14,"button",9),e.NdJ("click",function(){return t.submit()}),e._uU(15,"Next"),e.qZA()()),2&m){let n,u,a,i;e.Q6J("formGroup",t.userForm),e.xp6(4),e.Q6J("ngClass",e.VKq(5,p,(null==(n=t.userForm.get("firstName"))?null:n.touched)&&(null==(n=t.userForm.get("firstName"))?null:n.hasError("required"))||t.submitted&&(null==(n=t.userForm.get("firstName"))?null:n.errors))),e.xp6(1),e.Q6J("ngIf",(null==(u=t.userForm.get("firstName"))?null:u.touched)&&(null==(u=t.userForm.get("firstName"))?null:u.hasError("required"))||t.submitted&&(null==(u=t.userForm.get("firstName"))?null:u.errors)),e.xp6(4),e.Q6J("ngClass",e.VKq(7,p,(null==(a=t.userForm.get("lastName"))?null:a.touched)&&(null==(a=t.userForm.get("lastName"))?null:a.hasError("required"))||t.submitted&&(null==(a=t.userForm.get("lastName"))?null:a.errors))),e.xp6(1),e.Q6J("ngIf",(null==(i=t.userForm.get("lastName"))?null:i.touched)&&(null==(i=t.userForm.get("lastName"))?null:i.hasError("required"))||t.submitted&&(null==(i=t.userForm.get("lastName"))?null:i.errors))}},dependencies:[d.ez,d.mk,d.O5,o.UX,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u],styles:[".form-group[_ngcontent-%COMP%] + .form-group[_ngcontent-%COMP%]{margin-top:1rem}label[_ngcontent-%COMP%]{display:block}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{padding:.5rem;border-radius:.25rem;border:1px solid #ccc;font-size:1rem;width:100%;box-sizing:border-box}.navigation[_ngcontent-%COMP%]{margin-top:1rem;text-align:end}button[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;padding:.5rem 1rem;border:none;border-radius:.25rem;font-size:1rem;cursor:pointer}"]})}return r})()}}]);