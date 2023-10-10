import{aa as m,a as d,ad as _,ak as c,ag as i,af as g,aC as v,aj as a,aD as r,ah as h}from"./index.d3428df6.js";import{Q as n}from"./QSelect.2d01b2ad.js";import"./format.dd879f94.js";const E={data(){return{user:{firstName:"",lastName:"",email:"",password:"",role:null,period:null},user_roles:[],period_options:[{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"4",value:4},{label:"5",value:5},{label:"6",value:6},{label:"7",value:7},{label:"8",value:8}]}},created(){d.get("http://localhost:8001/api/roles").then(o=>{this.user_roles=o.data})},methods:{async createUser(){try{const o=this.validateEmail(this.user.email),e=this.validatePassword(this.user.password);if(console.log(o),console.log(e),!this.validateEmail(this.user.email)||!this.validatePassword(this.user.password))return;const t={END_USER_FIRST_NAME:this.user.firstName,END_USER_LAST_NAME:this.user.lastName,END_USER_EMAIL:this.user.email,END_USER_PASSWORD:this.user.password,END_USER_PERIOD:this.user.period.value,USER_ROLE_ID:this.user.role.USER_ROLE_ID,ACTIVE_STATUS_ID:1};(await d.post("http://localhost:8001/api/enduser",t)).status===200?(this.$q.notify({color:"positive",message:"User registered successfully"}),this.$router.push("/users")):this.$q.notify({color:"negative",message:"Registration failed"}),console.log(t.USER_ROLE_ID),console.log("Sending data.")}catch(o){console.error("API request failed:",o),this.$q.notify({color:"negative",message:"An error occurred during registration"})}},validateEmail(o){const t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o);return t||this.$q.notify({color:"negative",message:"Invalid email format"}),t},validatePassword(o){const t=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{8,}$/.test(o);return t||this.$q.notify({color:"negative",message:"Invalid password format"}),t}}},f={class:"q-pa-md q-gutter-sm",style:{"margin-left":"15px","margin-right":"15px"}},R=a("div",{class:"text-h6 text-left"}," Create New User ",-1),V={class:"q-pa-md",style:{width:"30%","margin-left":"35%"}},U={style:{"padding-top":"20px"}},w={style:{"padding-top":"30px"}},x={style:{"padding-top":"30px"}},N={style:{"padding-top":"30px"}},y={style:{"padding-top":"30px"}},b={style:{"padding-top":"30px"}},S={style:{"padding-top":"30px"}};function q(o,e,t,u,s,p){return _(),c("div",f,[i(v,{class:"text-white",style:{"background-color":"#af0000"}},{default:g(()=>[R]),_:1}),a("div",V,[a("div",U,[i(r,{modelValue:s.user.firstName,"onUpdate:modelValue":e[0]||(e[0]=l=>s.user.firstName=l),label:"First Name",required:""},null,8,["modelValue"])]),a("div",w,[i(r,{modelValue:s.user.lastName,"onUpdate:modelValue":e[1]||(e[1]=l=>s.user.lastName=l),label:"Last Name",required:""},null,8,["modelValue"])]),a("div",x,[i(r,{modelValue:s.user.email,"onUpdate:modelValue":e[2]||(e[2]=l=>s.user.email=l),label:"Email",type:"email",required:""},null,8,["modelValue"])]),a("div",N,[i(r,{modelValue:s.user.password,"onUpdate:modelValue":e[3]||(e[3]=l=>s.user.password=l),label:"Password",type:"password",required:""},null,8,["modelValue"])]),a("div",y,[i(n,{modelValue:s.user.role,"onUpdate:modelValue":e[4]||(e[4]=l=>s.user.role=l),label:"Role",required:"",options:s.user_roles,"option-value":"USER_ROLE_ID","option-label":"USER_ROLE_NAME"},null,8,["modelValue","options"])]),a("div",b,[i(n,{modelValue:s.user.period,"onUpdate:modelValue":e[5]||(e[5]=l=>s.user.period=l),label:"Class Period",required:"",options:s.period_options,"option-value":"value","option-label":"label"},null,8,["modelValue","options"])]),a("div",S,[i(h,{onClick:p.createUser,label:"Register User",icon:"add",outline:""},null,8,["onClick"])])])])}var P=m(E,[["render",q]]);export{P as default};
